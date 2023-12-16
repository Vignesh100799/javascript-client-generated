# TollGuruCalculator.Body

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | **String** | Specify route source, either &lt;code&gt;here&lt;/code&gt; for HERE maps routes based polyline or &lt;code&gt;gmaps&lt;/code&gt; for Google Maps polylines | [optional] [default to &#x27;here&#x27;]
**polyline** | **String** | Specify route as Google Maps encoded polyline (&lt;a href&#x3D;\&quot;https://developers.google.com/maps/documentation/utilities/polylinealgorithm\&quot; target&#x3D;\&quot;_blank\&quot;&gt;see details&lt;/a&gt;) | [optional] 
**path** | **String** | Specify route as a set of comma-separated &lt;strong&gt;&lt;code&gt;lat,lng&lt;/code&gt;&lt;/strong&gt; coordinates delimited by a pipe character (|) | [optional] 
**vehicleType** | [**VehicleType**](VehicleType.md) |  | [optional] 
**departureTime** | [**ModelObject**](ModelObject.md) |  | [optional] 

<a name="SourceEnum"></a>
## Enum: SourceEnum

* `here` (value: `"here"`)
* `gmap` (value: `"gmap"`)

