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
 * 
 * @export
 * @interface CustomUserLogin
 */
export interface CustomUserLogin {
    /**
     * 
     * @type {string}
     * @memberof CustomUserLogin
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomUserLogin
     */
    password: string;
}

/**
 * Check if a given object implements the CustomUserLogin interface.
 */
export function instanceOfCustomUserLogin(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "password" in value;

    return isInstance;
}

export function CustomUserLoginFromJSON(json: any): CustomUserLogin {
    return CustomUserLoginFromJSONTyped(json, false);
}

export function CustomUserLoginFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomUserLogin {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': !exists(json, 'email') ? undefined : json['email'],
        'password': json['password'],
    };
}

export function CustomUserLoginToJSON(value?: CustomUserLogin | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'password': value.password,
    };
}

