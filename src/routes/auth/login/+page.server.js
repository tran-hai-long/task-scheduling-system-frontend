import {AuthApi, Configuration} from "$lib/api-client/index.ts";
import {backendHostname} from "$lib/stores.js";
import {redirectToErrorPages} from "$lib/helpers.js";

export const actions = {
    default: async ({cookies, request}) => {
        let authClient = new AuthApi(new Configuration({
            basePath: backendHostname,
        }))
        const data = await request.formData();
        let credentials = {
            email: data.get('email'),
            password: data.get('password')
        };
        await authClient.authLoginCreate({customUserLogin: credentials}).then(
            result => {
                let token = result.access
                cookies.set('token', token, {path: '/'})
            },
            error => redirectToErrorPages(error.status));
    }
};
