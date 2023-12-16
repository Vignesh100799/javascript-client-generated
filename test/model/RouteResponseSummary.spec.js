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
    instance = new TollGuruCalculator.RouteResponseSummary();
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

  describe('RouteResponseSummary', function() {
    it('should create an instance of RouteResponseSummary', function() {
      // uncomment below and update the code to test RouteResponseSummary
      //var instane = new TollGuruCalculator.RouteResponseSummary();
      //expect(instance).to.be.a(TollGuruCalculator.RouteResponseSummary);
    });

    it('should have the property hasTolls (base name: "hasTolls")', function() {
      // uncomment below and update the code to test the property hasTolls
      //var instane = new TollGuruCalculator.RouteResponseSummary();
      //expect(instance).to.be();
    });

    it('should have the property diffs (base name: "diffs")', function() {
      // uncomment below and update the code to test the property diffs
      //var instane = new TollGuruCalculator.RouteResponseSummary();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new TollGuruCalculator.RouteResponseSummary();
      //expect(instance).to.be();
    });

    it('should have the property duration (base name: "duration")', function() {
      // uncomment below and update the code to test the property duration
      //var instane = new TollGuruCalculator.RouteResponseSummary();
      //expect(instance).to.be();
    });

    it('should have the property distance (base name: "distance")', function() {
      // uncomment below and update the code to test the property distance
      //var instane = new TollGuruCalculator.RouteResponseSummary();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new TollGuruCalculator.RouteResponseSummary();
      //expect(instance).to.be();
    });

    it('should have the property note (base name: "note")', function() {
      // uncomment below and update the code to test the property note
      //var instane = new TollGuruCalculator.RouteResponseSummary();
      //expect(instance).to.be();
    });

  });

}));