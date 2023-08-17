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
 * @interface PatchedCustomUser
 */
export interface PatchedCustomUser {
    /**
     * 
     * @type {number}
     * @memberof PatchedCustomUser
     */
    readonly id?: number;
    /**
     * 
     * @type {Date}
     * @memberof PatchedCustomUser
     */
    readonly lastLogin?: Date | null;
    /**
     * Designates that this user has all permissions without explicitly assigning them.
     * @type {boolean}
     * @memberof PatchedCustomUser
     */
    isSuperuser?: boolean;
    /**
     * Designates whether the user can log into this admin site.
     * @type {boolean}
     * @memberof PatchedCustomUser
     */
    isStaff?: boolean;
    /**
     * Designates whether this user should be treated as active. Unselect this instead of deleting accounts.
     * @type {boolean}
     * @memberof PatchedCustomUser
     */
    isActive?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof PatchedCustomUser
     */
    readonly dateJoined?: Date;
    /**
     * 
     * @type {string}
     * @memberof PatchedCustomUser
     */
    readonly email?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedCustomUser
     */
    fullName?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedCustomUser
     */
    username?: string;
    /**
     * The groups this user belongs to. A user will get all permissions granted to each of their groups.
     * @type {Array<number>}
     * @memberof PatchedCustomUser
     */
    groups?: Array<number>;
    /**
     * Specific permissions for this user.
     * @type {Array<number>}
     * @memberof PatchedCustomUser
     */
    userPermissions?: Array<number>;
}

/**
 * Check if a given object implements the PatchedCustomUser interface.
 */
export function instanceOfPatchedCustomUser(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PatchedCustomUserFromJSON(json: any): PatchedCustomUser {
    return PatchedCustomUserFromJSONTyped(json, false);
}

export function PatchedCustomUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedCustomUser {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'lastLogin': !exists(json, 'last_login') ? undefined : (json['last_login'] === null ? null : new Date(json['last_login'])),
        'isSuperuser': !exists(json, 'is_superuser') ? undefined : json['is_superuser'],
        'isStaff': !exists(json, 'is_staff') ? undefined : json['is_staff'],
        'isActive': !exists(json, 'is_active') ? undefined : json['is_active'],
        'dateJoined': !exists(json, 'date_joined') ? undefined : (new Date(json['date_joined'])),
        'email': !exists(json, 'email') ? undefined : json['email'],
        'fullName': !exists(json, 'full_name') ? undefined : json['full_name'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'groups': !exists(json, 'groups') ? undefined : json['groups'],
        'userPermissions': !exists(json, 'user_permissions') ? undefined : json['user_permissions'],
    };
}

export function PatchedCustomUserToJSON(value?: PatchedCustomUser | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'is_superuser': value.isSuperuser,
        'is_staff': value.isStaff,
        'is_active': value.isActive,
        'full_name': value.fullName,
        'username': value.username,
        'groups': value.groups,
        'user_permissions': value.userPermissions,
    };
}

