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
    instance = new TollGuruCalculator.Truck();
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

  describe('Truck', function() {
    it('should create an instance of Truck', function() {
      // uncomment below and update the code to test Truck
      //var instane = new TollGuruCalculator.Truck();
      //expect(instance).to.be.a(TollGuruCalculator.Truck);
    });

    it('should have the property truckType (base name: "truckType")', function() {
      // uncomment below and update the code to test the property truckType
      //var instane = new TollGuruCalculator.Truck();
      //expect(instance).to.be();
    });

    it('should have the property trailersCount (base name: "trailersCount")', function() {
      // uncomment below and update the code to test the property trailersCount
      //var instane = new TollGuruCalculator.Truck();
      //expect(instance).to.be();
    });

    it('should have the property shippedHazardousGoods (base name: "shippedHazardousGoods")', function() {
      // uncomment below and update the code to test the property shippedHazardousGoods
      //var instane = new TollGuruCalculator.Truck();
      //expect(instance).to.be();
    });

    it('should have the property limitedWeight (base name: "limitedWeight")', function() {
      // uncomment below and update the code to test the property limitedWeight
      //var instane = new TollGuruCalculator.Truck();
      //expect(instance).to.be();
    });

    it('should have the property weightPerAxle (base name: "weightPerAxle")', function() {
      // uncomment below and update the code to test the property weightPerAxle
      //var instane = new TollGuruCalculator.Truck();
      //expect(instance).to.be();
    });

    it('should have the property height (base name: "height")', function() {
      // uncomment below and update the code to test the property height
      //var instane = new TollGuruCalculator.Truck();
      //expect(instance).to.be();
    });

    it('should have the property width (base name: "width")', function() {
      // uncomment below and update the code to test the property width
      //var instane = new TollGuruCalculator.Truck();
      //expect(instance).to.be();
    });

    it('should have the property length (base name: "length")', function() {
      // uncomment below and update the code to test the property length
      //var instane = new TollGuruCalculator.Truck();
      //expect(instance).to.be();
    });

    it('should have the property tunnelCategory (base name: "tunnelCategory")', function() {
      // uncomment below and update the code to test the property tunnelCategory
      //var instane = new TollGuruCalculator.Truck();
      //expect(instance).to.be();
    });

    it('should have the property truckRestrictionPenalty (base name: "truckRestrictionPenalty")', function() {
      // uncomment below and update the code to test the property truckRestrictionPenalty
      //var instane = new TollGuruCalculator.Truck();
      //expect(instance).to.be();
    });

  });

}));
