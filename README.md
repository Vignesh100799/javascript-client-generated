# toll_guru_calculator

TollGuruCalculator - JavaScript client for toll_guru_calculator
TollGuru Calculator API  # Authentication  <!-- ReDoc-Inject: <security-definitions> -->
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 2020-05-31T17:48:12Z
- Package version: 2020-05-31T17:48:12Z
- Build package: io.swagger.codegen.v3.generators.javascript.JavaScriptClientCodegen
For more information, please visit [tollguru.com](tollguru.com)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install toll_guru_calculator --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var TollGuruCalculator = require('toll_guru_calculator');

var api = new TollGuruCalculator.GPSTracestracksApi()
var opts = { 
  'body': new TollGuruCalculator.Body1() // {Body1} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.routeDownloadPost(opts, callback);
```

## Documentation for API Endpoints

All URIs are relative to *https://dev.tollguru.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*TollGuruCalculator.GPSTracestracksApi* | [**routeDownloadPost**](docs/GPSTracestracksApi.md#routeDownloadPost) | **POST** /route/download | Download Async Results
*TollGuruCalculator.GPSTracestracksApi* | [**routeUploadPost**](docs/GPSTracestracksApi.md#routeUploadPost) | **POST** /route/upload | Request
*TollGuruCalculator.OriginAndDestinationPairApi* | [**gmapsPost**](docs/OriginAndDestinationPairApi.md#gmapsPost) | **POST** /gmaps | Google Maps Routes
*TollGuruCalculator.OriginAndDestinationPairApi* | [**herePost**](docs/OriginAndDestinationPairApi.md#herePost) | **POST** /here | HERE Maps Routes
*TollGuruCalculator.RoutePolylineApi* | [**routePost**](docs/RoutePolylineApi.md#routePost) | **POST** /route | Route polyline (from HERE/ Google map)

## Documentation for Models

 - [TollGuruCalculator.Address](docs/Address.md)
 - [TollGuruCalculator.AllOfGmapRequestBodyDriver](docs/AllOfGmapRequestBodyDriver.md)
 - [TollGuruCalculator.AllOfGmapRequestBodyFrom](docs/AllOfGmapRequestBodyFrom.md)
 - [TollGuruCalculator.AllOfGmapRequestBodyFuelEfficiency](docs/AllOfGmapRequestBodyFuelEfficiency.md)
 - [TollGuruCalculator.AllOfGmapRequestBodyHos](docs/AllOfGmapRequestBodyHos.md)
 - [TollGuruCalculator.AllOfGmapRequestBodyTo](docs/AllOfGmapRequestBodyTo.md)
 - [TollGuruCalculator.AllOfGmapRequestBodyVehicleType](docs/AllOfGmapRequestBodyVehicleType.md)
 - [TollGuruCalculator.AllOfHereRequestBodyDriver](docs/AllOfHereRequestBodyDriver.md)
 - [TollGuruCalculator.AllOfHereRequestBodyFrom](docs/AllOfHereRequestBodyFrom.md)
 - [TollGuruCalculator.AllOfHereRequestBodyFuelEfficiency](docs/AllOfHereRequestBodyFuelEfficiency.md)
 - [TollGuruCalculator.AllOfHereRequestBodyHos](docs/AllOfHereRequestBodyHos.md)
 - [TollGuruCalculator.AllOfHereRequestBodyTo](docs/AllOfHereRequestBodyTo.md)
 - [TollGuruCalculator.AllOfHereRequestBodyTruck](docs/AllOfHereRequestBodyTruck.md)
 - [TollGuruCalculator.AllOfHereRequestBodyVehicleType](docs/AllOfHereRequestBodyVehicleType.md)
 - [TollGuruCalculator.AllOfHereResponseSummaryFuelEfficiency](docs/AllOfHereResponseSummaryFuelEfficiency.md)
 - [TollGuruCalculator.AllOfHereResponseSummaryVehicleType](docs/AllOfHereResponseSummaryVehicleType.md)
 - [TollGuruCalculator.AnyOfbody](docs/AnyOfbody.md)
 - [TollGuruCalculator.AsyncResponse](docs/AsyncResponse.md)
 - [TollGuruCalculator.Body](docs/Body.md)
 - [TollGuruCalculator.Body1](docs/Body1.md)
 - [TollGuruCalculator.Cost](docs/Cost.md)
 - [TollGuruCalculator.DateTime](docs/DateTime.md)
 - [TollGuruCalculator.Direction](docs/Direction.md)
 - [TollGuruCalculator.DirectionPosition](docs/DirectionPosition.md)
 - [TollGuruCalculator.Driver](docs/Driver.md)
 - [TollGuruCalculator.FuelEfficiency](docs/FuelEfficiency.md)
 - [TollGuruCalculator.GeoCordinates](docs/GeoCordinates.md)
 - [TollGuruCalculator.GmapRequestBody](docs/GmapRequestBody.md)
 - [TollGuruCalculator.GmapResponse](docs/GmapResponse.md)
 - [TollGuruCalculator.GmapRouteResponse](docs/GmapRouteResponse.md)
 - [TollGuruCalculator.HereRequestBody](docs/HereRequestBody.md)
 - [TollGuruCalculator.HereResponse](docs/HereResponse.md)
 - [TollGuruCalculator.HereResponseSummary](docs/HereResponseSummary.md)
 - [TollGuruCalculator.HereResponseSummaryFuelPrice](docs/HereResponseSummaryFuelPrice.md)
 - [TollGuruCalculator.HosData](docs/HosData.md)
 - [TollGuruCalculator.HosReq](docs/HosReq.md)
 - [TollGuruCalculator.HosResponse](docs/HosResponse.md)
 - [TollGuruCalculator.HosResponseSummary](docs/HosResponseSummary.md)
 - [TollGuruCalculator.HosResponseSummaryTotalDistance](docs/HosResponseSummaryTotalDistance.md)
 - [TollGuruCalculator.HosResponseSummaryTotalDriveDuration](docs/HosResponseSummaryTotalDriveDuration.md)
 - [TollGuruCalculator.InlineResponse200](docs/InlineResponse200.md)
 - [TollGuruCalculator.InlineResponse2001](docs/InlineResponse2001.md)
 - [TollGuruCalculator.InlineResponse200Route](docs/InlineResponse200Route.md)
 - [TollGuruCalculator.Location](docs/Location.md)
 - [TollGuruCalculator.OneOfGmapRequestBodyDepartureTime](docs/OneOfGmapRequestBodyDepartureTime.md)
 - [TollGuruCalculator.OneOfHereRequestBodyDepartureTime](docs/OneOfHereRequestBodyDepartureTime.md)
 - [TollGuruCalculator.OneOfLocation](docs/OneOfLocation.md)
 - [TollGuruCalculator.OneOfinlineResponse2001](docs/OneOfinlineResponse2001.md)
 - [TollGuruCalculator.PlaceId](docs/PlaceId.md)
 - [TollGuruCalculator.Rates](docs/Rates.md)
 - [TollGuruCalculator.Route](docs/Route.md)
 - [TollGuruCalculator.RouteLocation](docs/RouteLocation.md)
 - [TollGuruCalculator.RouteResponse](docs/RouteResponse.md)
 - [TollGuruCalculator.RouteResponseSummary](docs/RouteResponseSummary.md)
 - [TollGuruCalculator.RouteResponseSummaryDiffs](docs/RouteResponseSummaryDiffs.md)
 - [TollGuruCalculator.RouteResponseSummaryDistance](docs/RouteResponseSummaryDistance.md)
 - [TollGuruCalculator.RouteResponseSummaryDuration](docs/RouteResponseSummaryDuration.md)
 - [TollGuruCalculator.Stop](docs/Stop.md)
 - [TollGuruCalculator.SyncResponse](docs/SyncResponse.md)
 - [TollGuruCalculator.SyncResponseRoute](docs/SyncResponseRoute.md)
 - [TollGuruCalculator.SyncResponseSummary](docs/SyncResponseSummary.md)
 - [TollGuruCalculator.TeritoryMielageRes](docs/TeritoryMielageRes.md)
 - [TollGuruCalculator.TeritoryMielageResInner](docs/TeritoryMielageResInner.md)
 - [TollGuruCalculator.Timestamp](docs/Timestamp.md)
 - [TollGuruCalculator.Toll](docs/Toll.md)
 - [TollGuruCalculator.Truck](docs/Truck.md)
 - [TollGuruCalculator.VehicleType](docs/VehicleType.md)

## Documentation for Authorization


### authorizer

- **Type**: API key
- **API key parameter name**: x-api-key
- **Location**: HTTP header

