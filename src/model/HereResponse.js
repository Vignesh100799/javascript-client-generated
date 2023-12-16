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
import HereResponseSummary from './HereResponseSummary';
import RouteResponse from './RouteResponse';

/**
* The HereResponse model module.
* @module model/HereResponse
* @version 2020-05-31T17:48:12Z
*/
export default class HereResponse {
    /**
    * Constructs a new <code>HereResponse</code>.
    * @alias module:model/HereResponse
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>HereResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/HereResponse} obj Optional instance to populate.
    * @return {module:model/HereResponse} The populated <code>HereResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HereResponse();
                        
            
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = HereResponseSummary.constructFromObject(data['summary']);
            }
            if (data.hasOwnProperty('routes')) {
                obj['routes'] = ApiClient.convertToType(data['routes'], [RouteResponse]);
            }
        }
        return obj;
    }

    /**
    * @member {String} status
    */
    'status' = undefined;
    /**
    * @member {module:model/HereResponseSummary} summary
    */
    'summary' = undefined;
    /**
    * Route information including distance, time, tol
    * @member {Array.<module:model/RouteResponse>} routes
    */
    'routes' = undefined;




}