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

import { exists, mapValues } from '../runtime';
/**
 * User model w/o password
 * @export
 * @interface PatchedCustomUserAuth
 */
export interface PatchedCustomUserAuth {
    /**
     * 
     * @type {number}
     * @memberof PatchedCustomUserAuth
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedCustomUserAuth
     */
    readonly email?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedCustomUserAuth
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedCustomUserAuth
     */
    fullName?: string;
}

/**
 * Check if a given object implements the PatchedCustomUserAuth interface.
 */
export function instanceOfPatchedCustomUserAuth(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PatchedCustomUserAuthFromJSON(json: any): PatchedCustomUserAuth {
    return PatchedCustomUserAuthFromJSONTyped(json, false);
}

export function PatchedCustomUserAuthFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedCustomUserAuth {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'fullName': !exists(json, 'full_name') ? undefined : json['full_name'],
    };
}

export function PatchedCustomUserAuthToJSON(value?: PatchedCustomUserAuth | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'username': value.username,
        'full_name': value.fullName,
    };
}
