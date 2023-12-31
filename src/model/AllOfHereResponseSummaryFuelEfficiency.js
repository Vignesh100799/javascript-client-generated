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
import FuelEfficiency from './FuelEfficiency';

/**
* The AllOfHereResponseSummaryFuelEfficiency model module.
* @module model/AllOfHereResponseSummaryFuelEfficiency
* @version 2020-05-31T17:48:12Z
*/
export default class AllOfHereResponseSummaryFuelEfficiency {
    /**
    * Constructs a new <code>AllOfHereResponseSummaryFuelEfficiency</code>.
    * City fuel efficiency and highway fuel efficiency from request or the default values. Returns fuel efficiency units
    * @alias module:model/AllOfHereResponseSummaryFuelEfficiency
    * @class
    * @extends module:model/FuelEfficiency
    */

    constructor() {
        FuelEfficiency.call(this);
        
        
    }

    /**
    * Constructs a <code>AllOfHereResponseSummaryFuelEfficiency</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AllOfHereResponseSummaryFuelEfficiency} obj Optional instance to populate.
    * @return {module:model/AllOfHereResponseSummaryFuelEfficiency} The populated <code>AllOfHereResponseSummaryFuelEfficiency</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AllOfHereResponseSummaryFuelEfficiency();
            
            FuelEfficiency.constructFromObject(data, obj);
            
        }
        return obj;
    }





}
