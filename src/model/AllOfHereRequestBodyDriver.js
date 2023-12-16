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
import Driver from './Driver';

/**
* The AllOfHereRequestBodyDriver model module.
* @module model/AllOfHereRequestBodyDriver
* @version 2020-05-31T17:48:12Z
*/
export default class AllOfHereRequestBodyDriver {
    /**
    * Constructs a new <code>AllOfHereRequestBodyDriver</code>.
    * Driver wage or Value of Time
    * @alias module:model/AllOfHereRequestBodyDriver
    * @class
    * @extends module:model/Driver
    */

    constructor() {
        Driver.call(this);
        
        
    }

    /**
    * Constructs a <code>AllOfHereRequestBodyDriver</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AllOfHereRequestBodyDriver} obj Optional instance to populate.
    * @return {module:model/AllOfHereRequestBodyDriver} The populated <code>AllOfHereRequestBodyDriver</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AllOfHereRequestBodyDriver();
            
            Driver.constructFromObject(data, obj);
            
        }
        return obj;
    }





}
