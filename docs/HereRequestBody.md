# TollGuruCalculator.HereRequestBody

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from** | [**AllOfHereRequestBodyFrom**](AllOfHereRequestBodyFrom.md) |  | 
**to** | [**AllOfHereRequestBodyTo**](AllOfHereRequestBodyTo.md) |  | 
**waypoints** | [**[Location]**](Location.md) |  | [optional] 
**vehicleType** | [**AllOfHereRequestBodyVehicleType**](AllOfHereRequestBodyVehicleType.md) |  | [optional] 
**departureTime** | [**OneOfHereRequestBodyDepartureTime**](OneOfHereRequestBodyDepartureTime.md) |  | [optional] 
**fuelPrice** | **Number** |  | [optional] [default to 3]
**fuelPriceCurrency** | **String** |  | [optional] [default to &#x27;USD&#x27;]
**fuelEfficiency** | [**AllOfHereRequestBodyFuelEfficiency**](AllOfHereRequestBodyFuelEfficiency.md) |  | [optional] 
**truck** | [**AllOfHereRequestBodyTruck**](AllOfHereRequestBodyTruck.md) | Truck routing only | [optional] 
**driver** | [**AllOfHereRequestBodyDriver**](AllOfHereRequestBodyDriver.md) | Driver wage or Value of Time | [optional] 
**stateMileage** | **Boolean** |  | [optional] 
**hos** | [**AllOfHereRequestBodyHos**](AllOfHereRequestBodyHos.md) |  | [optional] 

<a name="FuelPriceCurrencyEnum"></a>
## Enum: FuelPriceCurrencyEnum

* `USD` (value: `"USD"`)
* `CAD` (value: `"CAD"`)
* `MXN` (value: `"MXN"`)
* `INR` (value: `"INR"`)

