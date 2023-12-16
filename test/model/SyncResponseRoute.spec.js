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
    instance = new TollGuruCalculator.SyncResponseRoute();
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

  describe('SyncResponseRoute', function() {
    it('should create an instance of SyncResponseRoute', function() {
      // uncomment below and update the code to test SyncResponseRoute
      //var instane = new TollGuruCalculator.SyncResponseRoute();
      //expect(instance).to.be.a(TollGuruCalculator.SyncResponseRoute);
    });

    it('should have the property hasTolls (base name: "hasTolls")', function() {
      // uncomment below and update the code to test the property hasTolls
      //var instane = new TollGuruCalculator.SyncResponseRoute();
      //expect(instance).to.be();
    });

    it('should have the property costs (base name: "costs")', function() {
      // uncomment below and update the code to test the property costs
      //var instane = new TollGuruCalculator.SyncResponseRoute();
      //expect(instance).to.be();
    });

    it('should have the property tolls (base name: "tolls")', function() {
      // uncomment below and update the code to test the property tolls
      //var instane = new TollGuruCalculator.SyncResponseRoute();
      //expect(instance).to.be();
    });

  });

}));