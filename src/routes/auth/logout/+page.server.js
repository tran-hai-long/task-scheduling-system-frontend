import {AuthApi, Configuration} from "$lib/api-client/index.ts";
import {backendHostname} from "$lib/stores.js";
import {redirectToErrorPages} from "$lib/helpers.js";

export async function load({cookies}) {
    let authClient = new AuthApi(new Configuration({
        basePath: backendHostname,
        accessToken: cookies.get('token')
    }));
    let apiResult = null;
    await authClient.authLogoutCreate().then(
        result => apiResult = result.detail,
        error => redirectToErrorPages(error.status)
    );
    if (apiResult === "Successfully logged out.") {
        cookies.delete('token', {path: '/'});
    }
}
