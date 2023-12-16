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
    instance = new TollGuruCalculator.HosResponse();
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

  describe('HosResponse', function() {
    it('should create an instance of HosResponse', function() {
      // uncomment below and update the code to test HosResponse
      //var instane = new TollGuruCalculator.HosResponse();
      //expect(instance).to.be.a(TollGuruCalculator.HosResponse);
    });

    it('should have the property summary (base name: "summary")', function() {
      // uncomment below and update the code to test the property summary
      //var instane = new TollGuruCalculator.HosResponse();
      //expect(instance).to.be();
    });

    it('should have the property breakPoints (base name: "break_points")', function() {
      // uncomment below and update the code to test the property breakPoints
      //var instane = new TollGuruCalculator.HosResponse();
      //expect(instance).to.be();
    });

    it('should have the property stops (base name: "stops")', function() {
      // uncomment below and update the code to test the property stops
      //var instane = new TollGuruCalculator.HosResponse();
      //expect(instance).to.be();
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instane = new TollGuruCalculator.HosResponse();
      //expect(instance).to.be();
    });

  });

}));
