import {AuthApi, Configuration} from "$lib/api-client/index.ts";
import {backendHostname} from "$lib/stores.js";
import {redirectToErrorPages} from "$lib/helpers.js";

let apiResult = null;

export async function load({cookies}) {
    if (apiResult != null) return apiResult;
}
export const actions = {
    default: async ({cookies, request}) => {
        let authClient = new AuthApi(new Configuration({
            basePath: backendHostname,
        }))
        const data = await request.formData();
        let credentials = {
            username: data.get('username'),
            email: data.get('email'),
            password: data.get('password'),
            retypedPassword: data.get('retyped-password')
        };
        await authClient.authRegistrationCreate({customRegister: credentials}).then(
            result => {
                apiResult = result;
            },
            error => redirectToErrorPages(error.status));
    }
};
