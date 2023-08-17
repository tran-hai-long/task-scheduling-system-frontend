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
import type { PriorityEnum } from './PriorityEnum';
import {
    PriorityEnumFromJSON,
    PriorityEnumFromJSONTyped,
    PriorityEnumToJSON,
} from './PriorityEnum';
import type { StatusEnum } from './StatusEnum';
import {
    StatusEnumFromJSON,
    StatusEnumFromJSONTyped,
    StatusEnumToJSON,
} from './StatusEnum';

/**
 * 
 * @export
 * @interface PatchedTask
 */
export interface PatchedTask {
    /**
     * 
     * @type {number}
     * @memberof PatchedTask
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedTask
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedTask
     */
    description?: string;
    /**
     * 
     * @type {Date}
     * @memberof PatchedTask
     */
    startTime?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof PatchedTask
     */
    endTime?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof PatchedTask
     */
    plannedTime?: Date | null;
    /**
     * 
     * @type {StatusEnum}
     * @memberof PatchedTask
     */
    status?: StatusEnum;
    /**
     * 
     * @type {PriorityEnum}
     * @memberof PatchedTask
     */
    priority?: PriorityEnum;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedTask
     */
    toDo?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof PatchedTask
     */
    readonly createdTime?: Date;
    /**
     * 
     * @type {Date}
     * @memberof PatchedTask
     */
    readonly modifiedTime?: Date;
}

/**
 * Check if a given object implements the PatchedTask interface.
 */
export function instanceOfPatchedTask(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PatchedTaskFromJSON(json: any): PatchedTask {
    return PatchedTaskFromJSONTyped(json, false);
}

export function PatchedTaskFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedTask {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'startTime': !exists(json, 'start_time') ? undefined : (json['start_time'] === null ? null : new Date(json['start_time'])),
        'endTime': !exists(json, 'end_time') ? undefined : (json['end_time'] === null ? null : new Date(json['end_time'])),
        'plannedTime': !exists(json, 'planned_time') ? undefined : (json['planned_time'] === null ? null : new Date(json['planned_time'])),
        'status': !exists(json, 'status') ? undefined : StatusEnumFromJSON(json['status']),
        'priority': !exists(json, 'priority') ? undefined : PriorityEnumFromJSON(json['priority']),
        'toDo': !exists(json, 'to_do') ? undefined : json['to_do'],
        'createdTime': !exists(json, 'created_time') ? undefined : (new Date(json['created_time'])),
        'modifiedTime': !exists(json, 'modified_time') ? undefined : (new Date(json['modified_time'])),
    };
}

export function PatchedTaskToJSON(value?: PatchedTask | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'start_time': value.startTime === undefined ? undefined : (value.startTime === null ? null : value.startTime.toISOString()),
        'end_time': value.endTime === undefined ? undefined : (value.endTime === null ? null : value.endTime.toISOString()),
        'planned_time': value.plannedTime === undefined ? undefined : (value.plannedTime === null ? null : value.plannedTime.toISOString()),
        'status': StatusEnumToJSON(value.status),
        'priority': PriorityEnumToJSON(value.priority),
        'to_do': value.toDo,
    };
}

