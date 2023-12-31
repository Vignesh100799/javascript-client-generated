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
* The Timestamp model module.
* @module model/Timestamp
* @version 2020-05-31T17:48:12Z
*/
export default class Timestamp {
    /**
    * Constructs a new <code>Timestamp</code>.
    * @alias module:model/Timestamp
    * @class
    */

    constructor() {
        
        OneOfGmapRequestBodyDepartureTime.call(this);OneOfHereRequestBodyDepartureTime.call(this);
        
    }

    /**
    * Constructs a <code>Timestamp</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Timestamp} obj Optional instance to populate.
    * @return {module:model/Timestamp} The populated <code>Timestamp</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Timestamp();
                        
            
        }
        return obj;
    }


    // Implement OneOfGmapRequestBodyDepartureTime interface:
        // Implement OneOfHereRequestBodyDepartureTime interface:
    


}
