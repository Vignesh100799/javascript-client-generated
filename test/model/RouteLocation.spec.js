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
    instance = new TollGuruCalculator.RouteLocation();
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

  describe('RouteLocation', function() {
    it('should create an instance of RouteLocation', function() {
      // uncomment below and update the code to test RouteLocation
      //var instane = new TollGuruCalculator.RouteLocation();
      //expect(instance).to.be.a(TollGuruCalculator.RouteLocation);
    });

    it('should have the property lat (base name: "lat")', function() {
      // uncomment below and update the code to test the property lat
      //var instane = new TollGuruCalculator.RouteLocation();
      //expect(instance).to.be();
    });

    it('should have the property lng (base name: "lng")', function() {
      // uncomment below and update the code to test the property lng
      //var instane = new TollGuruCalculator.RouteLocation();
      //expect(instance).to.be();
    });

  });

}));
