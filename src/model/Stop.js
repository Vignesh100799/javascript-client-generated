/**
 * TollGuru Calculator
 * TollGuru Calculator API  # Authentication  <!-- ReDoc-Inject: <security-definitions> -->
 *
 * OpenAPI spec version: 2020-05-31T17:48:12Z
 * Contact: eng@tollguru.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
* The Stop model module.
* @module model/Stop
* @version 2020-05-31T17:48:12Z
*/
export default class Stop {
    /**
    * Constructs a new <code>Stop</code>.
    * @alias module:model/Stop
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Stop</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Stop} obj Optional instance to populate.
    * @return {module:model/Stop} The populated <code>Stop</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Stop();
                        
            
            if (data.hasOwnProperty('additionalServices')) {
                obj['additionalServices'] = ApiClient.convertToType(data['additionalServices'], 'String');
            }
            if (data.hasOwnProperty('amenities')) {
                obj['amenities'] = ApiClient.convertToType(data['amenities'], 'String');
            }
            if (data.hasOwnProperty('businessesName')) {
                obj['businessesName'] = ApiClient.convertToType(data['businessesName'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('contactName')) {
                obj['contactName'] = ApiClient.convertToType(data['contactName'], 'String');
            }
            if (data.hasOwnProperty('fax')) {
                obj['fax'] = ApiClient.convertToType(data['fax'], 'String');
            }
            if (data.hasOwnProperty('fuelLanes')) {
                obj['fuelLanes'] = ApiClient.convertToType(data['fuelLanes'], 'Number');
            }
            if (data.hasOwnProperty('highway')) {
                obj['highway'] = ApiClient.convertToType(data['highway'], 'String');
            }
            if (data.hasOwnProperty('latitude')) {
                obj['latitude'] = ApiClient.convertToType(data['latitude'], 'Number');
            }
            if (data.hasOwnProperty('longitude')) {
                obj['longitude'] = ApiClient.convertToType(data['longitude'], 'Number');
            }
            if (data.hasOwnProperty('parkingSpots')) {
                obj['parkingSpots'] = ApiClient.convertToType(data['parkingSpots'], 'String');
            }
            if (data.hasOwnProperty('paymentMethods')) {
                obj['paymentMethods'] = ApiClient.convertToType(data['paymentMethods'], 'String');
            }
            if (data.hasOwnProperty('phone1')) {
                obj['phone1'] = ApiClient.convertToType(data['phone1'], 'String');
            }
            if (data.hasOwnProperty('phone2')) {
                obj['phone2'] = ApiClient.convertToType(data['phone2'], 'String');
            }
            if (data.hasOwnProperty('phone3')) {
                obj['phone3'] = ApiClient.convertToType(data['phone3'], 'String');
            }
            if (data.hasOwnProperty('postalCode')) {
                obj['postalCode'] = ApiClient.convertToType(data['postalCode'], 'String');
            }
            if (data.hasOwnProperty('restIndex')) {
                obj['restIndex'] = ApiClient.convertToType(data['restIndex'], 'String');
            }
            if (data.hasOwnProperty('showers')) {
                obj['showers'] = ApiClient.convertToType(data['showers'], 'Number');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('stopId')) {
                obj['stopId'] = ApiClient.convertToType(data['stopId'], 'Number');
            }
            if (data.hasOwnProperty('streetAddress')) {
                obj['streetAddress'] = ApiClient.convertToType(data['streetAddress'], 'String');
            }
            if (data.hasOwnProperty('truckServiceBays')) {
                obj['truckServiceBays'] = ApiClient.convertToType(data['truckServiceBays'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('webAddress')) {
                obj['webAddress'] = ApiClient.convertToType(data['webAddress'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} additionalServices
    */
    'additionalServices' = undefined;
    /**
    * @member {String} amenities
    */
    'amenities' = undefined;
    /**
    * @member {String} businessesName
    */
    'businessesName' = undefined;
    /**
    * @member {String} city
    */
    'city' = undefined;
    /**
    * @member {String} contactName
    */
    'contactName' = undefined;
    /**
    * @member {String} fax
    */
    'fax' = undefined;
    /**
    * @member {Number} fuelLanes
    */
    'fuelLanes' = undefined;
    /**
    * @member {String} highway
    */
    'highway' = undefined;
    /**
    * @member {Number} latitude
    */
    'latitude' = undefined;
    /**
    * @member {Number} longitude
    */
    'longitude' = undefined;
    /**
    * @member {String} parkingSpots
    */
    'parkingSpots' = undefined;
    /**
    * @member {String} paymentMethods
    */
    'paymentMethods' = undefined;
    /**
    * @member {String} phone1
    */
    'phone1' = undefined;
    /**
    * @member {String} phone2
    */
    'phone2' = undefined;
    /**
    * @member {String} phone3
    */
    'phone3' = undefined;
    /**
    * @member {String} postalCode
    */
    'postalCode' = undefined;
    /**
    * @member {String} restIndex
    */
    'restIndex' = undefined;
    /**
    * @member {Number} showers
    */
    'showers' = undefined;
    /**
    * @member {String} state
    */
    'state' = undefined;
    /**
    * @member {Number} stopId
    */
    'stopId' = undefined;
    /**
    * @member {String} streetAddress
    */
    'streetAddress' = undefined;
    /**
    * @member {Number} truckServiceBays
    */
    'truckServiceBays' = undefined;
    /**
    * @member {String} type
    */
    'type' = undefined;
    /**
    * @member {String} webAddress
    */
    'webAddress' = undefined;




}
