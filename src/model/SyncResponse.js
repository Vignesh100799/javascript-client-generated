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
import SyncResponseRoute from './SyncResponseRoute';
import SyncResponseSummary from './SyncResponseSummary';

/**
* The SyncResponse model module.
* @module model/SyncResponse
* @version 2020-05-31T17:48:12Z
*/
export default class SyncResponse {
    /**
    * Constructs a new <code>SyncResponse</code>.
    * @alias module:model/SyncResponse
    * @class
    */

    constructor() {
        
        OneOfinlineResponse2001.call(this);
        
    }

    /**
    * Constructs a <code>SyncResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SyncResponse} obj Optional instance to populate.
    * @return {module:model/SyncResponse} The populated <code>SyncResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SyncResponse();
                        
            
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = SyncResponseSummary.constructFromObject(data['summary']);
            }
            if (data.hasOwnProperty('route')) {
                obj['route'] = SyncResponseRoute.constructFromObject(data['route']);
            }
        }
        return obj;
    }

    /**
    * @member {String} status
    */
    'status' = undefined;
    /**
    * @member {module:model/SyncResponseSummary} summary
    */
    'summary' = undefined;
    /**
    * @member {module:model/SyncResponseRoute} route
    */
    'route' = undefined;

    // Implement OneOfinlineResponse2001 interface:
    


}
