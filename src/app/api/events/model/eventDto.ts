/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { EntryDto } from './entryDto';
import { EventResultDto } from './eventResultDto';


/**
 * EventDto to be saved
 */
export interface EventDto { 
    id: string;
    eventName: string;
    description: string;
    startTime: string;
    fee: number;
    teamDescription: string;
    imageUrl?: string;
    locationId?: string;
    locationName: string;
    locationUrl?: string;
    geoLat?: string;
    geoLon?: string;
    entries?: Set<EntryDto>;
    results?: Set<EventResultDto>;
}
