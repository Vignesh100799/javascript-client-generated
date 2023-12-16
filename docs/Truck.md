# TollGuruCalculator.Truck

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**truckType** | **String** | Specifies the vehicle type&lt;br&gt;&lt;strong&gt;Note&lt;/strong&gt;: Relevant for restrictions that apply exclusively to tractors with semi-trailers (observed in North America). Such restrictions are taken into account only in case of the &lt;code&gt;truckType&lt;/code&gt; set to &lt;code&gt;tractorTruck&lt;/code&gt; and the trailers count greater than 0 (for example &lt;code&gt;truckType: \&quot;tractorTruck\&quot;, trailersCount: 1&lt;/code&gt;). The truck type is irrelevant in case of restrictions common for all types of trucks. | [optional] 
**trailersCount** | **Number** | Specifies number of trailers pulled by a vehicle. The provided value must be between 0 and 4. | [optional] [default to 0]
**shippedHazardousGoods** | **String** | List of hazardous materials in the vehicle. The names correspond to &lt;a href&#x3D;\&quot;https://www.fmcsa.dot.gov/sites/fmcsa.dot.gov/files/docs/Nine_Classes_of_Hazardous_Materials-4-2013_508CLN.pdf\&quot; target&#x3D;\&quot;_blank\&quot;&gt; HAZMAT classes 1 to 9. &lt;br&gt; For example, explosive is Class 1 and so on. &lt;/a&gt; | [optional] 
**limitedWeight** | **Number** | Vehicle weight including trailers and shipped goods, in pounds. &lt;br&gt; If truck weight is not specified, incorrect tolls may be calculated for trucks on Pennsylvania turnpike and other toll locations where tolls are based on weight. | [optional] 
**weightPerAxle** | **Number** | Vehicle weight per axle in pounds. &lt;br&gt; If truck weight is not specified, incorrect tolls may be calculated for trucks on Pennsylvania turnpike and other toll locations where tolls are based on weight. | [optional] 
**height** | **Number** | Vehicle height in feet. The provided value must be between 0 and 50. &lt;br&gt; If vehicle height is not specified, incorrect tolls may be calculated on New York Thruway and other toll roads where tolls are based on axles and weight. | [optional] 
**width** | **Number** | Vehicle width in feet. The provided value must be between 0 and 50. | [optional] 
**length** | **Number** | Vehicle length in feet. The provided value must be between 0 and 300. | [optional] 
**tunnelCategory** | **String** | Specifies the tunnel category to restrict certain route links. The route will pass only through tunnels of a less strict category. | [optional] 
**truckRestrictionPenalty** | **String** | pecifies the penalty type on violated truck restrictions.&lt;br&gt;&lt;code&gt;strict&lt;/code&gt;: route will not use links with a violated truck restriction at any circumstances&lt;br&gt;&lt;strong&gt;Note&lt;/strong&gt;: Route computation will fail and return NoRouteFound if not able to avoid the links with a violated truck restriction and the penalty type is strict.&lt;br&gt;&lt;code&gt;soft&lt;/code&gt;: route will use links with a violated truck restriction if there is no alternative to avoid them&lt; | [optional] 

<a name="TruckTypeEnum"></a>
## Enum: TruckTypeEnum

* `truck` (value: `"truck"`)
* `tractorTruck` (value: `"tractorTruck"`)


<a name="ShippedHazardousGoodsEnum"></a>
## Enum: ShippedHazardousGoodsEnum

* `explosive` (value: `"explosive"`)
* `gas` (value: `"gas"`)
* `flammable` (value: `"flammable"`)
* `combustible` (value: `"combustible"`)
* `organic` (value: `"organic"`)
* `poison` (value: `"poison"`)
* `radioActive` (value: `"radioActive"`)
* `corrosive` (value: `"corrosive"`)
* `miscellaneous` (value: `"miscellaneous"`)


<a name="TunnelCategoryEnum"></a>
## Enum: TunnelCategoryEnum

* `B` (value: `"B"`)
* `C` (value: `"C"`)
* `D` (value: `"D"`)
* `E` (value: `"E"`)


<a name="TruckRestrictionPenaltyEnum"></a>
## Enum: TruckRestrictionPenaltyEnum

* `strict` (value: `"strict"`)
* `soft` (value: `"soft"`)

