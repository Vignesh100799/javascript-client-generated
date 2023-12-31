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
* The RouteLocation model module.
* @module model/RouteLocation
* @version 2020-05-31T17:48:12Z
*/
export default class RouteLocation {
    /**
    * Constructs a new <code>RouteLocation</code>.
    * @alias module:model/RouteLocation
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>RouteLocation</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RouteLocation} obj Optional instance to populate.
    * @return {module:model/RouteLocation} The populated <code>RouteLocation</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RouteLocation();
                        
            
            if (data.hasOwnProperty('lat')) {
                obj['lat'] = ApiClient.convertToType(data['lat'], 'Number');
            }
            if (data.hasOwnProperty('lng')) {
                obj['lng'] = ApiClient.convertToType(data['lng'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {Number} lat
    */
    'lat' = undefined;
    /**
    * @member {Number} lng
    */
    'lng' = undefined;




}
