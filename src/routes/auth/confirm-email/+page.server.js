import {AuthApi, Configuration} from "$lib/api-client/index.ts";
import {backendHostname} from "$lib/stores.js";
import {redirectToErrorPages} from "$lib/helpers.js";

export async function load({cookies, params, url}) {
    let authClient = new AuthApi(new Configuration({
        basePath: backendHostname,
    }));
    let apiResult = null;
    let tokenObject = {key: url.searchParams.get('token')};
    await authClient.authRegistrationConfirmEmailCreate({verifyEmail: tokenObject}).then(
        result => apiResult = result.detail,
        error => redirectToErrorPages(error.status)
    );
    if (apiResult === "ok") {
        return {success: true};
    }
}
