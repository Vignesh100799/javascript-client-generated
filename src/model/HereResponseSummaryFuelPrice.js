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
* The HereResponseSummaryFuelPrice model module.
* @module model/HereResponseSummaryFuelPrice
* @version 2020-05-31T17:48:12Z
*/
export default class HereResponseSummaryFuelPrice {
    /**
    * Constructs a new <code>HereResponseSummaryFuelPrice</code>.
    * Fuel price from request or the default fuel price (including currency)
    * @alias module:model/HereResponseSummaryFuelPrice
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>HereResponseSummaryFuelPrice</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/HereResponseSummaryFuelPrice} obj Optional instance to populate.
    * @return {module:model/HereResponseSummaryFuelPrice} The populated <code>HereResponseSummaryFuelPrice</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HereResponseSummaryFuelPrice();
                        
            
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {Number} value
    */
    'value' = undefined;
    /**
    * @member {String} currency
    */
    'currency' = undefined;




}
