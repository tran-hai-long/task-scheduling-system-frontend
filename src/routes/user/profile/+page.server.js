import {Configuration, UserApi} from "$lib/api-client/index.ts";
import {backendHostname} from "$lib/stores.js";
import {redirectToErrorPages} from "$lib/helpers.js";

export async function load({cookies}) {
    let userClient = new UserApi(new Configuration({
        basePath: backendHostname,
        accessToken: cookies.get('token')
    }));
    let apiResult = null;
    await userClient.userProfileRetrieve().then(
        result => apiResult = result,
        error => redirectToErrorPages(error.status)
    );
    if (apiResult) {
        return apiResult;
    }
}
