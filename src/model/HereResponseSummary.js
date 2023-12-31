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
import HereResponseSummaryFuelPrice from './HereResponseSummaryFuelPrice';
import ModelObject from './ModelObject';
import Rates from './Rates';
import Route from './Route';

/**
* The HereResponseSummary model module.
* @module model/HereResponseSummary
* @version 2020-05-31T17:48:12Z
*/
export default class HereResponseSummary {
    /**
    * Constructs a new <code>HereResponseSummary</code>.
    * @alias module:model/HereResponseSummary
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>HereResponseSummary</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/HereResponseSummary} obj Optional instance to populate.
    * @return {module:model/HereResponseSummary} The populated <code>HereResponseSummary</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HereResponseSummary();
                        
            
            if (data.hasOwnProperty('route')) {
                obj['route'] = ApiClient.convertToType(data['route'], [Route]);
            }
            if (data.hasOwnProperty('rates')) {
                obj['rates'] = Rates.constructFromObject(data['rates']);
            }
            if (data.hasOwnProperty('departure_time')) {
                obj['departure_time'] = ApiClient.convertToType(data['departure_time'], 'Number');
            }
            if (data.hasOwnProperty('fuelPrice')) {
                obj['fuelPrice'] = HereResponseSummaryFuelPrice.constructFromObject(data['fuelPrice']);
            }
            if (data.hasOwnProperty('fuelEfficiency')) {
                obj['fuelEfficiency'] = ApiClient.convertToType(data['fuelEfficiency'], ModelObject);
            }
            if (data.hasOwnProperty('vehicleType')) {
                obj['vehicleType'] = ApiClient.convertToType(data['vehicleType'], ModelObject);
            }
            if (data.hasOwnProperty('share')) {
                obj['share'] = ApiClient.convertToType(data['share'], Object);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/Route>} route
    */
    'route' = undefined;
    /**
    * @member {module:model/Rates} rates
    */
    'rates' = undefined;
    /**
    * @member {Number} departure_time
    */
    'departure_time' = undefined;
    /**
    * @member {module:model/HereResponseSummaryFuelPrice} fuelPrice
    */
    'fuelPrice' = undefined;
    /**
    * City fuel efficiency and highway fuel efficiency from request or the default values. Returns fuel efficiency units
    * @member {module:model/ModelObject} fuelEfficiency
    */
    'fuelEfficiency' = undefined;
    /**
    * @member {module:model/ModelObject} vehicleType
    */
    'vehicleType' = undefined;
    /**
    * @member {Object} share
    */
    'share' = undefined;




}
