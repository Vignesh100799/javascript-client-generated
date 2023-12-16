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
* The Driver model module.
* @module model/Driver
* @version 2020-05-31T17:48:12Z
*/
export default class Driver {
    /**
    * Constructs a new <code>Driver</code>.
    * &lt;p&gt;You need to specify parameters in &lt;code&gt;driver&lt;/code&gt; object to estimate driver wages. You can also specify your &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Value_of_time\&quot;&gt;value of time&lt;/a&gt;. For example, if you are willing to spend $2.00 to save 15 minutes (but not a penny more) for a particular trip, your value of time is $2.00* (60/15) &#x3D; $8.00 per hour.&lt;/p&gt;
    * @alias module:model/Driver
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Driver</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Driver} obj Optional instance to populate.
    * @return {module:model/Driver} The populated <code>Driver</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Driver();
                        
            
            if (data.hasOwnProperty('wage')) {
                obj['wage'] = ApiClient.convertToType(data['wage'], 'Number');
            }
            if (data.hasOwnProperty('rounding')) {
                obj['rounding'] = ApiClient.convertToType(data['rounding'], 'Number');
            }
            if (data.hasOwnProperty('valueOfTime')) {
                obj['valueOfTime'] = ApiClient.convertToType(data['valueOfTime'], 'Number');
            }
        }
        return obj;
    }

    /**
    * Driver wage per hour
    * @member {Number} wage
    * @default 30
    */
    'wage' = 30;
    /**
    * How is the driver time is rounded (to 30 minutes, an hour, etc.)?
    * @member {Number} rounding
    * @default 30
    */
    'rounding' = 30;
    /**
    * If driver wages are specified, do not add value of time. If value of time is specified, it is assumed you are the driver and not being paid for the time. Driver wage calculations will not be returned.
    * @member {Number} valueOfTime
    * @default 0
    */
    'valueOfTime' = 0;




}