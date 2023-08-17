import {TasksApi} from "$lib/api-client/apis/index.ts";
import {backendHostname} from "$lib/stores.js";
import {Configuration} from "$lib/api-client/index.ts";
import {redirectToErrorPages} from "$lib/helpers.js";

export async function load({cookies, request}) {
    let tasksClient = new TasksApi(new Configuration({
        basePath: backendHostname,
        accessToken: cookies.get('token')
    }));
    let apiResult = null;
    await tasksClient.tasksTasksList().then(
        result => apiResult = result,
        error => redirectToErrorPages(error.status)
    );
    if (apiResult != null) return apiResult;
}
