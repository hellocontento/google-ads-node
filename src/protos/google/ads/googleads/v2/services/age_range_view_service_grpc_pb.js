"use strict";var grpc=require("grpc"),google_ads_googleads_v2_services_age_range_view_service_pb=require("../../../../../google/ads/googleads/v2/services/age_range_view_service_pb.js"),google_ads_googleads_v2_resources_age_range_view_pb=require("../../../../../google/ads/googleads/v2/resources/age_range_view_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js");function serialize_google_ads_googleads_v2_resources_AgeRangeView(arg){if(!(arg instanceof google_ads_googleads_v2_resources_age_range_view_pb.AgeRangeView))throw new Error("Expected argument of type google.ads.googleads.v2.resources.AgeRangeView");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_resources_AgeRangeView(buffer_arg){return google_ads_googleads_v2_resources_age_range_view_pb.AgeRangeView.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v2_services_GetAgeRangeViewRequest(arg){if(!(arg instanceof google_ads_googleads_v2_services_age_range_view_service_pb.GetAgeRangeViewRequest))throw new Error("Expected argument of type google.ads.googleads.v2.services.GetAgeRangeViewRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_services_GetAgeRangeViewRequest(buffer_arg){return google_ads_googleads_v2_services_age_range_view_service_pb.GetAgeRangeViewRequest.deserializeBinary(new Uint8Array(buffer_arg))}var AgeRangeViewServiceService=exports.AgeRangeViewServiceService={getAgeRangeView:{path:"/google.ads.googleads.v2.services.AgeRangeViewService/GetAgeRangeView",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v2_services_age_range_view_service_pb.GetAgeRangeViewRequest,responseType:google_ads_googleads_v2_resources_age_range_view_pb.AgeRangeView,requestSerialize:serialize_google_ads_googleads_v2_services_GetAgeRangeViewRequest,requestDeserialize:deserialize_google_ads_googleads_v2_services_GetAgeRangeViewRequest,responseSerialize:serialize_google_ads_googleads_v2_resources_AgeRangeView,responseDeserialize:deserialize_google_ads_googleads_v2_resources_AgeRangeView}};exports.AgeRangeViewServiceClient=grpc.makeGenericClientConstructor(AgeRangeViewServiceService);