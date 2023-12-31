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
* The AllOfGmapRequestBodyDriver model module.
* @module model/AllOfGmapRequestBodyDriver
* @version 2020-05-31T17:48:12Z
*/
export default class AllOfGmapRequestBodyDriver {
    /**
    * Constructs a new <code>AllOfGmapRequestBodyDriver</code>.
    * @alias module:model/AllOfGmapRequestBodyDriver
    * @class
    * @extends module:model/Driver
    */

    constructor() {
        Driver.call(this);
        
        
    }

    /**
    * Constructs a <code>AllOfGmapRequestBodyDriver</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AllOfGmapRequestBodyDriver} obj Optional instance to populate.
    * @return {module:model/AllOfGmapRequestBodyDriver} The populated <code>AllOfGmapRequestBodyDriver</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AllOfGmapRequestBodyDriver();
            
            Driver.constructFromObject(data, obj);
            
        }
        return obj;
    }





}
