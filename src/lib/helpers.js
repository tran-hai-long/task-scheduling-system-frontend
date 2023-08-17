import {error} from "@sveltejs/kit";

export function redirectToErrorPages(status) {
    switch (status) {
        case "400":
            throw error(400);
        case "401":
            throw error(401);
        case "403":
            throw error(403);
        case "404":
            throw error(404);
        default:
            console.log(status)
            break;
    }
}
