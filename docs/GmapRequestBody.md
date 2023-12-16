# TollGuruCalculator.GmapRequestBody

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from** | [**AllOfGmapRequestBodyFrom**](AllOfGmapRequestBodyFrom.md) |  | 
**to** | [**AllOfGmapRequestBodyTo**](AllOfGmapRequestBodyTo.md) |  | 
**waypoints** | [**[Location]**](Location.md) |  | [optional] 
**vehicleType** | [**AllOfGmapRequestBodyVehicleType**](AllOfGmapRequestBodyVehicleType.md) |  | [optional] 
**departureTime** | [**OneOfGmapRequestBodyDepartureTime**](OneOfGmapRequestBodyDepartureTime.md) |  | [optional] 
**fuelPrice** | **Number** |  | [optional] [default to 3]
**fuelPriceCurrency** | **String** |  | [optional] [default to &#x27;USD&#x27;]
**fuelEfficiency** | [**AllOfGmapRequestBodyFuelEfficiency**](AllOfGmapRequestBodyFuelEfficiency.md) |  | [optional] 
**driver** | [**AllOfGmapRequestBodyDriver**](AllOfGmapRequestBodyDriver.md) |  | [optional] 
**hos** | [**AllOfGmapRequestBodyHos**](AllOfGmapRequestBodyHos.md) |  | [optional] 

<a name="FuelPriceCurrencyEnum"></a>
## Enum: FuelPriceCurrencyEnum

* `USD` (value: `"USD"`)
* `CAD` (value: `"CAD"`)
* `MXN` (value: `"MXN"`)
* `INR` (value: `"INR"`)

