# TollGuruCalculator.GPSTracestracksApi

All URIs are relative to *https://dev.tollguru.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**routeDownloadPost**](GPSTracestracksApi.md#routeDownloadPost) | **POST** /route/download | Download Async Results
[**routeUploadPost**](GPSTracestracksApi.md#routeUploadPost) | **POST** /route/upload | Request

<a name="routeDownloadPost"></a>
# **routeDownloadPost**
> SyncResponse routeDownloadPost(opts)

Download Async Results

The results will be available for download for upto 30 days by calling the API.

### Example
```javascript
import TollGuruCalculator from 'toll_guru_calculator';

let apiInstance = new TollGuruCalculator.GPSTracestracksApi();
let opts = { 
  'body': new TollGuruCalculator.Body1() // Body1 | 
};
apiInstance.routeDownloadPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body1**](Body1.md)|  | [optional] 

### Return type

[**SyncResponse**](SyncResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeUploadPost"></a>
# **routeUploadPost**
> InlineResponse2001 routeUploadPost(vehicleType, opts)

Request

&lt;p&gt;This API can be used in synchronous and asynchronous modes. The default mode of operation is synchronous mode where the API response with toll information is returned immediately.&lt;/p&gt;&lt;p&gt;Asynchronous mode is used in the following cases: &lt;/p&gt;&lt;ul&gt; &lt;li&gt;Bulk upload of multiple GPS tracks files&lt;/li&gt;&lt;li&gt;Uploading large GPS tracks files&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;In asynchronous mode, the response is returned immediately with a &lt;code&gt;requestId&lt;/code&gt; and &lt;code&gt;requestedTimestamp&lt;/code&gt;. The results will be available for download for upto 30 days by calling the &lt;code&gt;route/download&lt;/code&gt; API. Asynchronous mode can used by specifying the url parameter &lt;code&gt;isAsync&#x3D;true&lt;/code&gt;.&lt;/p&gt;&lt;p&gt;GPS traces can be passed in the following format &lt;/p&gt;&lt;ul&gt; &lt;li&gt;Upload CSV file&lt;/li&gt;&lt;li&gt;Upload kml file&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;The first line in the CSV needs to contain the attribute names. The subsequent lines needs to contain the data in temporal order. The following parameters are available:&lt;/p&gt;&lt;table&gt;&lt;thead&gt;&lt;tr&gt;&lt;th&gt;Parameter&lt;/th&gt;&lt;th&gt;Description&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;&lt;strong&gt;latitude&lt;/strong&gt;&lt;/td&gt;&lt;td&gt;Latitude coordinate in WGS84 degree (mandatory)&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;strong&gt;longitude&lt;/strong&gt;&lt;/td&gt;&lt;td&gt;Longitude coordinate in WGS84 degree (mandatory)&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;strong&gt;timestamp&lt;/strong&gt;&lt;/td&gt;&lt;td&gt;indicates the time and date, for example&amp;nbsp;&amp;nbsp;2018-05-21T17:05:06Z (mandatory since tolls may change based on time)&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;strong&gt;speed_mps&lt;/strong&gt;&lt;/td&gt;&lt;td&gt;speed in meters per second (optional)&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;strong&gt;speed_mph&lt;/strong&gt;&lt;/td&gt;&lt;td&gt;speed in miles per hour (optional)&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;strong&gt;speed_kmh&lt;/strong&gt;&lt;/td&gt;&lt;td&gt;speed in kilometers per hour (optional)&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;strong&gt;heading&lt;/strong&gt;&lt;/td&gt;&lt;td&gt;heading in degrees clockwise from North (optional)&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;p&gt;You can download sample file from &lt;a href&#x3D;\&quot;https://tollguru-cdn.s3.us-east-2.amazonaws.com/trip_route.csv\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;&lt;/p&gt;&lt;p&gt;Or use the CSV format file as shown in the table below:&lt;/p&gt;&lt;table&gt; &lt;tr&gt; &lt;th&gt;latitude&lt;/th&gt; &lt;th&gt;longitude&lt;/th&gt; &lt;th&gt;timestamp&lt;/th&gt; &lt;/tr&gt;&lt;tr&gt; &lt;td style&#x3D;\&quot;text-align: center;\&quot;&gt;38.90479&lt;/td&gt;&lt;td style&#x3D;\&quot;text-align: center;\&quot;&gt;-77.02607&lt;/td&gt;&lt;td style&#x3D;\&quot;text-align: center;\&quot;&gt;2019-12-16T15:45:23Z&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt; &lt;td style&#x3D;\&quot;text-align: center;\&quot;&gt;38.90479&lt;/td&gt;&lt;td style&#x3D;\&quot;text-align: center;\&quot;&gt;-77.02606&lt;/td&gt;&lt;td style&#x3D;\&quot;text-align: center;\&quot;&gt;2019-12-16T15:47:24Z&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt; &lt;td style&#x3D;\&quot;text-align: center;\&quot;&gt;38.9048&lt;/td&gt;&lt;td style&#x3D;\&quot;text-align: center;\&quot;&gt;-77.02608&lt;/td&gt;&lt;td style&#x3D;\&quot;text-align: center;\&quot;&gt;2019-12-16T15:49:25Z&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt; &lt;td style&#x3D;\&quot;text-align: center;\&quot;&gt;38.9044&lt;/td&gt;&lt;td style&#x3D;\&quot;text-align: center;\&quot;&gt;-77.02604&lt;/td&gt;&lt;td style&#x3D;\&quot;text-align: center;\&quot;&gt;2019-12-16T15:50:42Z&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt; &lt;td style&#x3D;\&quot;text-align: center;\&quot;&gt;38.90424&lt;/td&gt;&lt;td style&#x3D;\&quot;text-align: center;\&quot;&gt;-77.02646&lt;/td&gt;&lt;td style&#x3D;\&quot;text-align: center;\&quot;&gt;2019-12-16T15:50:49Z&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt; &lt;td style&#x3D;\&quot;text-align: center;\&quot;&gt;38.90422&lt;/td&gt;&lt;td style&#x3D;\&quot;text-align: center;\&quot;&gt;-77.02686&lt;/td&gt;&lt;td style&#x3D;\&quot;text-align: center;\&quot;&gt;2019-12-16T15:50:55Z&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;

### Example
```javascript
import TollGuruCalculator from 'toll_guru_calculator';

let apiInstance = new TollGuruCalculator.GPSTracestracksApi();
let vehicleType = "vehicleType_example"; // String | 
let opts = { 
  'body': null // Object | 
  'vehicleName': "vehicleName_example" // String | Specify name for your vehicle to identify the response json for particular vehicle
  'height': "height_example" // String | Specify the vehicle height to get accurate tolls for toll roads where tolls depend on axles and vehicle height
  'weight': "weight_example" // String | Specify the vehicle weight to get accurate tolls for toll roads where tolls depend on axles and vehicle weight
  'isAsync': false // Boolean | The API will function in asynchronous mode is set to true
};
apiInstance.routeUploadPost(vehicleType, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vehicleType** | **String**|  | 
 **body** | [**Object**](Object.md)|  | [optional] 
 **vehicleName** | **String**| Specify name for your vehicle to identify the response json for particular vehicle | [optional] 
 **height** | **String**| Specify the vehicle height to get accurate tolls for toll roads where tolls depend on axles and vehicle height | [optional] 
 **weight** | **String**| Specify the vehicle weight to get accurate tolls for toll roads where tolls depend on axles and vehicle weight | [optional] 
 **isAsync** | **Boolean**| The API will function in asynchronous mode is set to true | [optional] [default to false]

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/csv
 - **Accept**: application/json

