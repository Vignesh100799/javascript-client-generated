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
    instance = new TollGuruCalculator.HosResponseSummary();
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

  describe('HosResponseSummary', function() {
    it('should create an instance of HosResponseSummary', function() {
      // uncomment below and update the code to test HosResponseSummary
      //var instane = new TollGuruCalculator.HosResponseSummary();
      //expect(instance).to.be.a(TollGuruCalculator.HosResponseSummary);
    });

    it('should have the property totalDriveDuration (base name: "total_drive_duration")', function() {
      // uncomment below and update the code to test the property totalDriveDuration
      //var instane = new TollGuruCalculator.HosResponseSummary();
      //expect(instance).to.be();
    });

    it('should have the property totalBreakDuration (base name: "total_break_duration")', function() {
      // uncomment below and update the code to test the property totalBreakDuration
      //var instane = new TollGuruCalculator.HosResponseSummary();
      //expect(instance).to.be();
    });

    it('should have the property totalDuration (base name: "total_duration")', function() {
      // uncomment below and update the code to test the property totalDuration
      //var instane = new TollGuruCalculator.HosResponseSummary();
      //expect(instance).to.be();
    });

    it('should have the property totalDistance (base name: "total_distance")', function() {
      // uncomment below and update the code to test the property totalDistance
      //var instane = new TollGuruCalculator.HosResponseSummary();
      //expect(instance).to.be();
    });

  });

}));
