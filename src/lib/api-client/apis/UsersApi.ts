/* tslint:disable */
/* eslint-disable */
/**
 * Task scheduling system
 * Task scheduling system
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  CustomUser,
  PaginatedCustomUserList,
  PatchedCustomUser,
} from '../models';
import {
    CustomUserFromJSON,
    CustomUserToJSON,
    PaginatedCustomUserListFromJSON,
    PaginatedCustomUserListToJSON,
    PatchedCustomUserFromJSON,
    PatchedCustomUserToJSON,
} from '../models';

export interface UsersUserDestroyRequest {
    id: number;
}

export interface UsersUserPartialUpdateRequest {
    id: number;
    patchedCustomUser?: PatchedCustomUser;
}

export interface UsersUserRetrieveRequest {
    id: number;
}

export interface UsersUserUpdateRequest {
    id: number;
    customUser: CustomUser;
}

export interface UsersUsersListRequest {
    limit?: number;
    offset?: number;
}

/**
 * 
 */
export class UsersApi extends runtime.BaseAPI {

    /**
     * Get, update or delete a user. For admins only.
     */
    async usersUserDestroyRaw(requestParameters: UsersUserDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling usersUserDestroy.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("jwtHeaderAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v1/users/user/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Get, update or delete a user. For admins only.
     */
    async usersUserDestroy(requestParameters: UsersUserDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.usersUserDestroyRaw(requestParameters, initOverrides);
    }

    /**
     * Get, update or delete a user. For admins only.
     */
    async usersUserPartialUpdateRaw(requestParameters: UsersUserPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomUser>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling usersUserPartialUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("jwtHeaderAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v1/users/user/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchedCustomUserToJSON(requestParameters.patchedCustomUser),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomUserFromJSON(jsonValue));
    }

    /**
     * Get, update or delete a user. For admins only.
     */
    async usersUserPartialUpdate(requestParameters: UsersUserPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomUser> {
        const response = await this.usersUserPartialUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get, update or delete a user. For admins only.
     */
    async usersUserRetrieveRaw(requestParameters: UsersUserRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomUser>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling usersUserRetrieve.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("jwtHeaderAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v1/users/user/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomUserFromJSON(jsonValue));
    }

    /**
     * Get, update or delete a user. For admins only.
     */
    async usersUserRetrieve(requestParameters: UsersUserRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomUser> {
        const response = await this.usersUserRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get, update or delete a user. For admins only.
     */
    async usersUserUpdateRaw(requestParameters: UsersUserUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomUser>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling usersUserUpdate.');
        }

        if (requestParameters.customUser === null || requestParameters.customUser === undefined) {
            throw new runtime.RequiredError('customUser','Required parameter requestParameters.customUser was null or undefined when calling usersUserUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("jwtHeaderAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v1/users/user/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CustomUserToJSON(requestParameters.customUser),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomUserFromJSON(jsonValue));
    }

    /**
     * Get, update or delete a user. For admins only.
     */
    async usersUserUpdate(requestParameters: UsersUserUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomUser> {
        const response = await this.usersUserUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Return a list of all users in the database. For admins only.
     */
    async usersUsersListRaw(requestParameters: UsersUsersListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedCustomUserList>> {
        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("jwtHeaderAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v1/users/users/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedCustomUserListFromJSON(jsonValue));
    }

    /**
     * Return a list of all users in the database. For admins only.
     */
    async usersUsersList(requestParameters: UsersUsersListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedCustomUserList> {
        const response = await this.usersUsersListRaw(requestParameters, initOverrides);
        return await response.value();
    }

}