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
import type { CustomUserAuth } from './CustomUserAuth';
import {
    CustomUserAuthFromJSON,
    CustomUserAuthFromJSONTyped,
    CustomUserAuthToJSON,
} from './CustomUserAuth';

/**
 * Serializer for JWT authentication.
 * @export
 * @interface JWT
 */
export interface JWT {
    /**
     * 
     * @type {string}
     * @memberof JWT
     */
    access: string;
    /**
     * 
     * @type {string}
     * @memberof JWT
     */
    refresh: string;
    /**
     * 
     * @type {CustomUserAuth}
     * @memberof JWT
     */
    user: CustomUserAuth;
}

/**
 * Check if a given object implements the JWT interface.
 */
export function instanceOfJWT(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "access" in value;
    isInstance = isInstance && "refresh" in value;
    isInstance = isInstance && "user" in value;

    return isInstance;
}

export function JWTFromJSON(json: any): JWT {
    return JWTFromJSONTyped(json, false);
}

export function JWTFromJSONTyped(json: any, ignoreDiscriminator: boolean): JWT {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'access': json['access'],
        'refresh': json['refresh'],
        'user': CustomUserAuthFromJSON(json['user']),
    };
}

export function JWTToJSON(value?: JWT | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'access': value.access,
        'refresh': value.refresh,
        'user': CustomUserAuthToJSON(value.user),
    };
}

