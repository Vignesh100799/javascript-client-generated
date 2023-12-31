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
import Truck from './Truck';

/**
* The AllOfHereRequestBodyTruck model module.
* @module model/AllOfHereRequestBodyTruck
* @version 2020-05-31T17:48:12Z
*/
export default class AllOfHereRequestBodyTruck {
    /**
    * Constructs a new <code>AllOfHereRequestBodyTruck</code>.
    * Truck routing only
    * @alias module:model/AllOfHereRequestBodyTruck
    * @class
    * @extends module:model/Truck
    */

    constructor() {
        Truck.call(this);
        
        
    }

    /**
    * Constructs a <code>AllOfHereRequestBodyTruck</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AllOfHereRequestBodyTruck} obj Optional instance to populate.
    * @return {module:model/AllOfHereRequestBodyTruck} The populated <code>AllOfHereRequestBodyTruck</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AllOfHereRequestBodyTruck();
            
            Truck.constructFromObject(data, obj);
            
        }
        return obj;
    }





}
