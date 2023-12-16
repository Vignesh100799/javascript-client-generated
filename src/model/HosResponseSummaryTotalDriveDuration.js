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
* The HosResponseSummaryTotalDriveDuration model module.
* @module model/HosResponseSummaryTotalDriveDuration
* @version 2020-05-31T17:48:12Z
*/
export default class HosResponseSummaryTotalDriveDuration {
    /**
    * Constructs a new <code>HosResponseSummaryTotalDriveDuration</code>.
    * @alias module:model/HosResponseSummaryTotalDriveDuration
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>HosResponseSummaryTotalDriveDuration</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/HosResponseSummaryTotalDriveDuration} obj Optional instance to populate.
    * @return {module:model/HosResponseSummaryTotalDriveDuration} The populated <code>HosResponseSummaryTotalDriveDuration</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HosResponseSummaryTotalDriveDuration();
                        
            
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {String} text
    */
    'text' = undefined;
    /**
    * @member {Number} value
    */
    'value' = undefined;




}