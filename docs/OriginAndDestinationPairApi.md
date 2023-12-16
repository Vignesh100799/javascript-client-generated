# TollGuruCalculator.OriginAndDestinationPairApi

All URIs are relative to *https://dev.tollguru.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gmapsPost**](OriginAndDestinationPairApi.md#gmapsPost) | **POST** /gmaps | Google Maps Routes
[**herePost**](OriginAndDestinationPairApi.md#herePost) | **POST** /here | HERE Maps Routes

<a name="gmapsPost"></a>
# **gmapsPost**
> GmapResponse gmapsPost(opts)

Google Maps Routes

HTTP Request for cars, SUVs, pick-ups, motorcycles

### Example
```javascript
import TollGuruCalculator from 'toll_guru_calculator';
let defaultClient = TollGuruCalculator.ApiClient.instance;

// Configure API key authorization: authorizer
let authorizer = defaultClient.authentications['authorizer'];
authorizer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//authorizer.apiKeyPrefix = 'Token';

let apiInstance = new TollGuruCalculator.OriginAndDestinationPairApi();
let opts = { 
  'body': new TollGuruCalculator.GmapRequestBody() // GmapRequestBody | 
};
apiInstance.gmapsPost(opts, (error, data, response) => {
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
 **body** | [**GmapRequestBody**](GmapRequestBody.md)|  | [optional] 

### Return type

[**GmapResponse**](GmapResponse.md)

### Authorization

[authorizer](../README.md#authorizer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="herePost"></a>
# **herePost**
> HereResponse herePost(opts)

HERE Maps Routes

&lt;p&gt;HTTP Request for trucks, buses, RVs, cars, SUV, pick-ups, motorcycles&lt;/p&gt;&lt;p&gt;For trucks you should specify truck weight, wherever possible. Some bridges and tunnels restrict trucks based on weight. If you are transporting HAZMAT material, please specify material type. If you do not specify HAZMAT restrictions and weight restrictions, none will be applied.&lt;/p&gt;

### Example
```javascript
import TollGuruCalculator from 'toll_guru_calculator';
let defaultClient = TollGuruCalculator.ApiClient.instance;

// Configure API key authorization: authorizer
let authorizer = defaultClient.authentications['authorizer'];
authorizer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//authorizer.apiKeyPrefix = 'Token';

let apiInstance = new TollGuruCalculator.OriginAndDestinationPairApi();
let opts = { 
  'body': new TollGuruCalculator.HereRequestBody() // HereRequestBody | 
};
apiInstance.herePost(opts, (error, data, response) => {
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
 **body** | [**HereRequestBody**](HereRequestBody.md)|  | [optional] 

### Return type

[**HereResponse**](HereResponse.md)

### Authorization

[authorizer](../README.md#authorizer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

