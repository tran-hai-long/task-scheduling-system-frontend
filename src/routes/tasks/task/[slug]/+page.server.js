import {TasksApi} from "$lib/api-client/apis/index.ts";
import {backendHostname} from "$lib/stores.js";
import {Configuration} from "$lib/api-client/index.ts";
import {redirectToErrorPages} from "$lib/helpers.js";

export async function load({cookies, request, params}) {
    let tasksClient = new TasksApi(new Configuration({
        basePath: backendHostname,
        accessToken: cookies.get('token')
    }));
    let apiResult = null;
    await tasksClient.tasksTaskRetrieve({id: params.slug}).then(
        result => apiResult = result,
        error => redirectToErrorPages(error.status)
    );
    if (apiResult != null) return apiResult;
}
