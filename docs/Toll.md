# TollGuruCalculator.Toll

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Toll type: &lt;br&gt;&lt;code&gt;barrier&lt;/code&gt; (for example &lt;a href&#x3D;\&quot;https://tollguru.com/toll-info/texas/texas-toll-roads-bridges-express-lanes\&quot; target&#x3D;\&quot;_blank\&quot;&gt; toll roads in Texas &lt;/a&gt;), &lt;br&gt;&lt;code&gt;ticketSystem&lt;/code&gt; - ticket system (for example &lt;a href&#x3D;\&quot;https://tollguru.com/toll-info/oklahoma/oklahoma-turnpikes\&quot; target&#x3D;\&quot;_blank\&quot;&gt; toll roads in Oklahoma&lt;/a&gt;), &lt;br&gt;&lt;code&gt;distBased&lt;/code&gt; – distance based (for example &lt;a href&#x3D;\&quot;https://tollguru.com/toll-info/ontario/ontario-407-ETR-toll-highway-bridges-tunnels\&quot; target&#x3D;\&quot;_blank\&quot;&gt; ETR 407 in Ontario, Canada&lt;/a&gt;). | [optional] 
**tagCost** | **Number** | Transponder toll cost &lt;br&gt;For example, &lt;a href&#x3D;\&quot;https://tollguru.com/toll-info/new-york/what-is-e-zpass\&quot; target&#x3D;\&quot;_blank\&quot;&gt;E-ZPass&lt;/a&gt;, &lt;a href&#x3D;\&quot;https://tollguru.com/toll-info/texas/what-is-txtag-tolltag-eztag\&quot; target&#x3D;\&quot;_blank\&quot;&gt;TxTag&lt;/a&gt;, &lt;a href&#x3D;\&quot;https://tollguru.com/toll-info/california/what-is-fastrak\&quot; target&#x3D;\&quot;_blank\&quot;&gt;FasTrak&lt;/a&gt;, &lt;a href&#x3D;\&quot;https://tollguru.com/toll-info/florida/what-is-sunpass\&quot; target&#x3D;\&quot;_blank\&quot;&gt;SunPass&lt;/a&gt;, &lt;a href&#x3D;\&quot;https://tollguru.com/toll-info/california/what-is-fastrak\&quot; target&#x3D;\&quot;_blank\&quot;&gt;FasTrak&lt;/a&gt;, &lt;a href&#x3D;\&quot;https://tollguru.com/toll-info/colorado/what-is-expresstoll-go-pass\&quot; target&#x3D;\&quot;_blank\&quot;&gt;ExpressToll&lt;/a&gt;, etc. | [optional] 
**cashCost** | **Number** | Cash toll cost | [optional] 
**licensePlateCost** | **Number** | License plate (video) toll cost. For example, &lt;a href&#x3D;\&quot;https://tollguru.com/toll-info/california/pay-by-plate-payment\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Pay by Plate&lt;/a&gt; in California, &lt;a href&#x3D;\&quot;https://tollguru.com/toll-info/texas/pay-by-mail\&quot; target&#x3D;\&quot;_blank\&quot;&gt;ZipCash and Pay by Mail&lt;/a&gt; in Texas, &lt;a href&#x3D;\&quot;https://tollguru.com/toll-info/florida/video-payment\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Pay by Plate&lt;/a&gt; in Florida, &lt;a href&#x3D;\&quot;https://tollguru.com/toll-info/colorado/video-payment\&quot; target&#x3D;\&quot;_blank\&quot;&gt;License Plate Toll&lt;/a&gt; in Colorado, Camera Charges on ETR-407, etc. | [optional] 
**prepaidCardCost** | **Number** | Prepaid card such as Nexpress, Nexus Card, etc. toll cost | [optional] 
**creditCardCost** | **Number** | Credit card toll cost | [optional] 
**currency** | **String** | Currency | [optional] 
**tagPrimary** | **[String]** | A primary transponder that can be used on the facility. Typically primary transponders have discounts for each usage or based on volume. | [optional] 
**tagSecondary** | **[String]** | All other transponders that can be used on the facility. Secondary transponders may not count towards discounts | [optional] 
**licensePlatePrimary** | **String** | Name of the primary license plate toll (video toll) collection system. Typically license Plate tolls are not discounted. | [optional] 
**licensePlateSecondary** | **String** | Name of the secondary license plate toll (video toll) collection system | [optional] 
**id** | **Number** | Tollguru toll ID. Useful for error checking | [optional] 
**lat** | **Number** | Approximate latitude of the toll location | [optional] 
**lng** | **Number** | Approximate longitude of the toll location | [optional] 
**name** | **String** | Name of the toll location | [optional] 
**road** | **String** | Name of the toll road | [optional] 
**state** | **String** | State, province of the toll location | [optional] 
