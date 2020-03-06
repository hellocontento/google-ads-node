"use strict";var grpc=require("grpc"),google_ads_googleads_v3_services_shopping_performance_view_service_pb=require("../../../../../google/ads/googleads/v3/services/shopping_performance_view_service_pb.js"),google_ads_googleads_v3_resources_shopping_performance_view_pb=require("../../../../../google/ads/googleads/v3/resources/shopping_performance_view_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");function serialize_google_ads_googleads_v3_resources_ShoppingPerformanceView(arg){if(!(arg instanceof google_ads_googleads_v3_resources_shopping_performance_view_pb.ShoppingPerformanceView))throw new Error("Expected argument of type google.ads.googleads.v3.resources.ShoppingPerformanceView");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v3_resources_ShoppingPerformanceView(buffer_arg){return google_ads_googleads_v3_resources_shopping_performance_view_pb.ShoppingPerformanceView.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v3_services_GetShoppingPerformanceViewRequest(arg){if(!(arg instanceof google_ads_googleads_v3_services_shopping_performance_view_service_pb.GetShoppingPerformanceViewRequest))throw new Error("Expected argument of type google.ads.googleads.v3.services.GetShoppingPerformanceViewRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v3_services_GetShoppingPerformanceViewRequest(buffer_arg){return google_ads_googleads_v3_services_shopping_performance_view_service_pb.GetShoppingPerformanceViewRequest.deserializeBinary(new Uint8Array(buffer_arg))}var ShoppingPerformanceViewServiceService=exports.ShoppingPerformanceViewServiceService={getShoppingPerformanceView:{path:"/google.ads.googleads.v3.services.ShoppingPerformanceViewService/GetShoppingPerformanceView",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v3_services_shopping_performance_view_service_pb.GetShoppingPerformanceViewRequest,responseType:google_ads_googleads_v3_resources_shopping_performance_view_pb.ShoppingPerformanceView,requestSerialize:serialize_google_ads_googleads_v3_services_GetShoppingPerformanceViewRequest,requestDeserialize:deserialize_google_ads_googleads_v3_services_GetShoppingPerformanceViewRequest,responseSerialize:serialize_google_ads_googleads_v3_resources_ShoppingPerformanceView,responseDeserialize:deserialize_google_ads_googleads_v3_resources_ShoppingPerformanceView}};exports.ShoppingPerformanceViewServiceClient=grpc.makeGenericClientConstructor(ShoppingPerformanceViewServiceService);