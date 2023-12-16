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
* The Toll model module.
* @module model/Toll
* @version 2020-05-31T17:48:12Z
*/
export default class Toll {
    /**
    * Constructs a new <code>Toll</code>.
    * Tolls object contains tolls for all the toll locations on the route. For each toll location
    * @alias module:model/Toll
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Toll</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Toll} obj Optional instance to populate.
    * @return {module:model/Toll} The populated <code>Toll</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Toll();
                        
            
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('tagCost')) {
                obj['tagCost'] = ApiClient.convertToType(data['tagCost'], 'Number');
            }
            if (data.hasOwnProperty('cashCost')) {
                obj['cashCost'] = ApiClient.convertToType(data['cashCost'], 'Number');
            }
            if (data.hasOwnProperty('licensePlateCost')) {
                obj['licensePlateCost'] = ApiClient.convertToType(data['licensePlateCost'], 'Number');
            }
            if (data.hasOwnProperty('prepaidCardCost')) {
                obj['prepaidCardCost'] = ApiClient.convertToType(data['prepaidCardCost'], 'Number');
            }
            if (data.hasOwnProperty('creditCardCost')) {
                obj['creditCardCost'] = ApiClient.convertToType(data['creditCardCost'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('tagPrimary')) {
                obj['tagPrimary'] = ApiClient.convertToType(data['tagPrimary'], ['String']);
            }
            if (data.hasOwnProperty('tagSecondary')) {
                obj['tagSecondary'] = ApiClient.convertToType(data['tagSecondary'], ['String']);
            }
            if (data.hasOwnProperty('licensePlatePrimary')) {
                obj['licensePlatePrimary'] = ApiClient.convertToType(data['licensePlatePrimary'], 'String');
            }
            if (data.hasOwnProperty('licensePlateSecondary')) {
                obj['licensePlateSecondary'] = ApiClient.convertToType(data['licensePlateSecondary'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('lat')) {
                obj['lat'] = ApiClient.convertToType(data['lat'], 'Number');
            }
            if (data.hasOwnProperty('lng')) {
                obj['lng'] = ApiClient.convertToType(data['lng'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('road')) {
                obj['road'] = ApiClient.convertToType(data['road'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
        }
        return obj;
    }

    /**
    * Toll type: <br><code>barrier</code> (for example <a href=\"https://tollguru.com/toll-info/texas/texas-toll-roads-bridges-express-lanes\" target=\"_blank\"> toll roads in Texas </a>), <br><code>ticketSystem</code> - ticket system (for example <a href=\"https://tollguru.com/toll-info/oklahoma/oklahoma-turnpikes\" target=\"_blank\"> toll roads in Oklahoma</a>), <br><code>distBased</code> – distance based (for example <a href=\"https://tollguru.com/toll-info/ontario/ontario-407-ETR-toll-highway-bridges-tunnels\" target=\"_blank\"> ETR 407 in Ontario, Canada</a>).
    * @member {String} type
    */
    'type' = undefined;
    /**
    * Transponder toll cost <br>For example, <a href=\"https://tollguru.com/toll-info/new-york/what-is-e-zpass\" target=\"_blank\">E-ZPass</a>, <a href=\"https://tollguru.com/toll-info/texas/what-is-txtag-tolltag-eztag\" target=\"_blank\">TxTag</a>, <a href=\"https://tollguru.com/toll-info/california/what-is-fastrak\" target=\"_blank\">FasTrak</a>, <a href=\"https://tollguru.com/toll-info/florida/what-is-sunpass\" target=\"_blank\">SunPass</a>, <a href=\"https://tollguru.com/toll-info/california/what-is-fastrak\" target=\"_blank\">FasTrak</a>, <a href=\"https://tollguru.com/toll-info/colorado/what-is-expresstoll-go-pass\" target=\"_blank\">ExpressToll</a>, etc.
    * @member {Number} tagCost
    */
    'tagCost' = undefined;
    /**
    * Cash toll cost
    * @member {Number} cashCost
    */
    'cashCost' = undefined;
    /**
    * License plate (video) toll cost. For example, <a href=\"https://tollguru.com/toll-info/california/pay-by-plate-payment\" target=\"_blank\">Pay by Plate</a> in California, <a href=\"https://tollguru.com/toll-info/texas/pay-by-mail\" target=\"_blank\">ZipCash and Pay by Mail</a> in Texas, <a href=\"https://tollguru.com/toll-info/florida/video-payment\" target=\"_blank\">Pay by Plate</a> in Florida, <a href=\"https://tollguru.com/toll-info/colorado/video-payment\" target=\"_blank\">License Plate Toll</a> in Colorado, Camera Charges on ETR-407, etc.
    * @member {Number} licensePlateCost
    */
    'licensePlateCost' = undefined;
    /**
    * Prepaid card such as Nexpress, Nexus Card, etc. toll cost
    * @member {Number} prepaidCardCost
    */
    'prepaidCardCost' = undefined;
    /**
    * Credit card toll cost
    * @member {Number} creditCardCost
    */
    'creditCardCost' = undefined;
    /**
    * Currency
    * @member {String} currency
    */
    'currency' = undefined;
    /**
    * A primary transponder that can be used on the facility. Typically primary transponders have discounts for each usage or based on volume.
    * @member {Array.<String>} tagPrimary
    */
    'tagPrimary' = undefined;
    /**
    * All other transponders that can be used on the facility. Secondary transponders may not count towards discounts
    * @member {Array.<String>} tagSecondary
    */
    'tagSecondary' = undefined;
    /**
    * Name of the primary license plate toll (video toll) collection system. Typically license Plate tolls are not discounted.
    * @member {String} licensePlatePrimary
    */
    'licensePlatePrimary' = undefined;
    /**
    * Name of the secondary license plate toll (video toll) collection system
    * @member {String} licensePlateSecondary
    */
    'licensePlateSecondary' = undefined;
    /**
    * Tollguru toll ID. Useful for error checking
    * @member {Number} id
    */
    'id' = undefined;
    /**
    * Approximate latitude of the toll location
    * @member {Number} lat
    */
    'lat' = undefined;
    /**
    * Approximate longitude of the toll location
    * @member {Number} lng
    */
    'lng' = undefined;
    /**
    * Name of the toll location
    * @member {String} name
    */
    'name' = undefined;
    /**
    * Name of the toll road
    * @member {String} road
    */
    'road' = undefined;
    /**
    * State, province of the toll location
    * @member {String} state
    */
    'state' = undefined;




}
