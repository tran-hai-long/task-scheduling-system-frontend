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
 * @interface CustomUserAuth
 */
export interface CustomUserAuth {
    /**
     * 
     * @type {number}
     * @memberof CustomUserAuth
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof CustomUserAuth
     */
    readonly email: string;
    /**
     * 
     * @type {string}
     * @memberof CustomUserAuth
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof CustomUserAuth
     */
    fullName: string;
}

/**
 * Check if a given object implements the CustomUserAuth interface.
 */
export function instanceOfCustomUserAuth(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "username" in value;
    isInstance = isInstance && "fullName" in value;

    return isInstance;
}

export function CustomUserAuthFromJSON(json: any): CustomUserAuth {
    return CustomUserAuthFromJSONTyped(json, false);
}

export function CustomUserAuthFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomUserAuth {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'email': json['email'],
        'username': json['username'],
        'fullName': json['full_name'],
    };
}

export function CustomUserAuthToJSON(value?: CustomUserAuth | null): any {
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

