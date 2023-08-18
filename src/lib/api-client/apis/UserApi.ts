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
  CustomUserAuth,
  Detail,
  PasswordChange,
  PatchedCustomUserAuth,
} from '../models';
import {
    CustomUserAuthFromJSON,
    CustomUserAuthToJSON,
    DetailFromJSON,
    DetailToJSON,
    PasswordChangeFromJSON,
    PasswordChangeToJSON,
    PatchedCustomUserAuthFromJSON,
    PatchedCustomUserAuthToJSON,
} from '../models';

export interface UserChangePasswordCreateRequest {
    passwordChange: PasswordChange;
}

export interface UserProfilePartialUpdateRequest {
    patchedCustomUserAuth?: PatchedCustomUserAuth;
}

export interface UserProfileUpdateRequest {
    customUserAuth: CustomUserAuth;
}

/**
 * 
 */
export class UserApi extends runtime.BaseAPI {

    /**
     * Enter old password and new password. Return success/fail message.
     */
    async userChangePasswordCreateRaw(requestParameters: UserChangePasswordCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Detail>> {
        if (requestParameters.passwordChange === null || requestParameters.passwordChange === undefined) {
            throw new runtime.RequiredError('passwordChange','Required parameter requestParameters.passwordChange was null or undefined when calling userChangePasswordCreate.');
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
            path: `/api/v1/user/change-password/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PasswordChangeToJSON(requestParameters.passwordChange),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DetailFromJSON(jsonValue));
    }

    /**
     * Enter old password and new password. Return success/fail message.
     */
    async userChangePasswordCreate(requestParameters: UserChangePasswordCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Detail> {
        const response = await this.userChangePasswordCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Reads and updates UserModel fields Accepts GET, PUT, PATCH methods.  Default accepted fields: username, first_name, last_name Default display fields: pk, username, email, first_name, last_name Read-only fields: pk, email  Returns UserModel fields.
     */
    async userProfilePartialUpdateRaw(requestParameters: UserProfilePartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomUserAuth>> {
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
            path: `/api/v1/user/profile/`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchedCustomUserAuthToJSON(requestParameters.patchedCustomUserAuth),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomUserAuthFromJSON(jsonValue));
    }

    /**
     * Reads and updates UserModel fields Accepts GET, PUT, PATCH methods.  Default accepted fields: username, first_name, last_name Default display fields: pk, username, email, first_name, last_name Read-only fields: pk, email  Returns UserModel fields.
     */
    async userProfilePartialUpdate(requestParameters: UserProfilePartialUpdateRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomUserAuth> {
        const response = await this.userProfilePartialUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Reads and updates UserModel fields Accepts GET, PUT, PATCH methods.  Default accepted fields: username, first_name, last_name Default display fields: pk, username, email, first_name, last_name Read-only fields: pk, email  Returns UserModel fields.
     */
    async userProfileRetrieveRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomUserAuth>> {
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
            path: `/api/v1/user/profile/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomUserAuthFromJSON(jsonValue));
    }

    /**
     * Reads and updates UserModel fields Accepts GET, PUT, PATCH methods.  Default accepted fields: username, first_name, last_name Default display fields: pk, username, email, first_name, last_name Read-only fields: pk, email  Returns UserModel fields.
     */
    async userProfileRetrieve(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomUserAuth> {
        const response = await this.userProfileRetrieveRaw(initOverrides);
        return await response.value();
    }

    /**
     * Reads and updates UserModel fields Accepts GET, PUT, PATCH methods.  Default accepted fields: username, first_name, last_name Default display fields: pk, username, email, first_name, last_name Read-only fields: pk, email  Returns UserModel fields.
     */
    async userProfileUpdateRaw(requestParameters: UserProfileUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomUserAuth>> {
        if (requestParameters.customUserAuth === null || requestParameters.customUserAuth === undefined) {
            throw new runtime.RequiredError('customUserAuth','Required parameter requestParameters.customUserAuth was null or undefined when calling userProfileUpdate.');
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
            path: `/api/v1/user/profile/`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CustomUserAuthToJSON(requestParameters.customUserAuth),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomUserAuthFromJSON(jsonValue));
    }

    /**
     * Reads and updates UserModel fields Accepts GET, PUT, PATCH methods.  Default accepted fields: username, first_name, last_name Default display fields: pk, username, email, first_name, last_name Read-only fields: pk, email  Returns UserModel fields.
     */
    async userProfileUpdate(requestParameters: UserProfileUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomUserAuth> {
        const response = await this.userProfileUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}