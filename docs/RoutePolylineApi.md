# TollGuruCalculator.RoutePolylineApi

All URIs are relative to *https://dev.tollguru.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**routePost**](RoutePolylineApi.md#routePost) | **POST** /route | Route polyline (from HERE/ Google map)

<a name="routePost"></a>
# **routePost**
> InlineResponse200 routePost(opts)

Route polyline (from HERE/ Google map)

The response endpoint retrieves all tolls on the single route requested. You will not receive tolls for alternate routes possible between the origin and destination.

### Example
```javascript
import TollGuruCalculator from 'toll_guru_calculator';

let apiInstance = new TollGuruCalculator.RoutePolylineApi();
let opts = { 
  'body': new TollGuruCalculator.Body() // Body | 
};
apiInstance.routePost(opts, (error, data, response) => {
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
 **body** | [**Body**](Body.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

