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
    instance = new TollGuruCalculator.Body();
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

  describe('Body', function() {
    it('should create an instance of Body', function() {
      // uncomment below and update the code to test Body
      //var instane = new TollGuruCalculator.Body();
      //expect(instance).to.be.a(TollGuruCalculator.Body);
    });

    it('should have the property source (base name: "source")', function() {
      // uncomment below and update the code to test the property source
      //var instane = new TollGuruCalculator.Body();
      //expect(instance).to.be();
    });

    it('should have the property polyline (base name: "polyline")', function() {
      // uncomment below and update the code to test the property polyline
      //var instane = new TollGuruCalculator.Body();
      //expect(instance).to.be();
    });

    it('should have the property path (base name: "path")', function() {
      // uncomment below and update the code to test the property path
      //var instane = new TollGuruCalculator.Body();
      //expect(instance).to.be();
    });

    it('should have the property vehicleType (base name: "vehicleType")', function() {
      // uncomment below and update the code to test the property vehicleType
      //var instane = new TollGuruCalculator.Body();
      //expect(instance).to.be();
    });

    it('should have the property departureTime (base name: "departure_time")', function() {
      // uncomment below and update the code to test the property departureTime
      //var instane = new TollGuruCalculator.Body();
      //expect(instance).to.be();
    });

  });

}));