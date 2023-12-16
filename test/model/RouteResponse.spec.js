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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TollGuruCalculator);
  }
}(this, function(expect, TollGuruCalculator) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TollGuruCalculator.RouteResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('RouteResponse', function() {
    it('should create an instance of RouteResponse', function() {
      // uncomment below and update the code to test RouteResponse
      //var instane = new TollGuruCalculator.RouteResponse();
      //expect(instance).to.be.a(TollGuruCalculator.RouteResponse);
    });

    it('should have the property summary (base name: "summary")', function() {
      // uncomment below and update the code to test the property summary
      //var instane = new TollGuruCalculator.RouteResponse();
      //expect(instance).to.be();
    });

    it('should have the property costs (base name: "costs")', function() {
      // uncomment below and update the code to test the property costs
      //var instane = new TollGuruCalculator.RouteResponse();
      //expect(instance).to.be();
    });

    it('should have the property tolls (base name: "tolls")', function() {
      // uncomment below and update the code to test the property tolls
      //var instane = new TollGuruCalculator.RouteResponse();
      //expect(instance).to.be();
    });

    it('should have the property directions (base name: "directions")', function() {
      // uncomment below and update the code to test the property directions
      //var instane = new TollGuruCalculator.RouteResponse();
      //expect(instance).to.be();
    });

    it('should have the property herePath (base name: "herePath")', function() {
      // uncomment below and update the code to test the property herePath
      //var instane = new TollGuruCalculator.RouteResponse();
      //expect(instance).to.be();
    });

    it('should have the property hos (base name: "hos")', function() {
      // uncomment below and update the code to test the property hos
      //var instane = new TollGuruCalculator.RouteResponse();
      //expect(instance).to.be();
    });

    it('should have the property territoryMileage (base name: "territoryMileage")', function() {
      // uncomment below and update the code to test the property territoryMileage
      //var instane = new TollGuruCalculator.RouteResponse();
      //expect(instance).to.be();
    });

  });

}));
