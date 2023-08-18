import {Configuration, UserApi} from "$lib/api-client/index.ts";
import {backendHostname} from "$lib/stores.js";
import {redirectToErrorPages} from "$lib/helpers.js";


let apiResult = null;

export async function load({cookies}) {
    if (apiResult != null) return apiResult;
}
export const actions = {
    default: async ({cookies, request}) => {
        let userClient = new UserApi(new Configuration({
            basePath: backendHostname,
            accessToken: cookies.get('token')
        }));
        const data = await request.formData();
        let passwords = {
            oldPassword: data.get('old-password'),
            newPassword1: data.get('new-password'),
            newPassword2: data.get('retyped-password')
        };
        await userClient.userChangePasswordCreate({passwordChange: passwords}).then(
            result => {
                apiResult = result.detail;
            },
            error => redirectToErrorPages(error.status));
    }
};
