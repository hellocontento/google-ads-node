"use strict";var grpc=require("grpc"),google_ads_googleads_v3_services_parental_status_view_service_pb=require("../../../../../google/ads/googleads/v3/services/parental_status_view_service_pb.js"),google_ads_googleads_v3_resources_parental_status_view_pb=require("../../../../../google/ads/googleads/v3/resources/parental_status_view_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");function serialize_google_ads_googleads_v3_resources_ParentalStatusView(arg){if(!(arg instanceof google_ads_googleads_v3_resources_parental_status_view_pb.ParentalStatusView))throw new Error("Expected argument of type google.ads.googleads.v3.resources.ParentalStatusView");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v3_resources_ParentalStatusView(buffer_arg){return google_ads_googleads_v3_resources_parental_status_view_pb.ParentalStatusView.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v3_services_GetParentalStatusViewRequest(arg){if(!(arg instanceof google_ads_googleads_v3_services_parental_status_view_service_pb.GetParentalStatusViewRequest))throw new Error("Expected argument of type google.ads.googleads.v3.services.GetParentalStatusViewRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v3_services_GetParentalStatusViewRequest(buffer_arg){return google_ads_googleads_v3_services_parental_status_view_service_pb.GetParentalStatusViewRequest.deserializeBinary(new Uint8Array(buffer_arg))}var ParentalStatusViewServiceService=exports.ParentalStatusViewServiceService={getParentalStatusView:{path:"/google.ads.googleads.v3.services.ParentalStatusViewService/GetParentalStatusView",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v3_services_parental_status_view_service_pb.GetParentalStatusViewRequest,responseType:google_ads_googleads_v3_resources_parental_status_view_pb.ParentalStatusView,requestSerialize:serialize_google_ads_googleads_v3_services_GetParentalStatusViewRequest,requestDeserialize:deserialize_google_ads_googleads_v3_services_GetParentalStatusViewRequest,responseSerialize:serialize_google_ads_googleads_v3_resources_ParentalStatusView,responseDeserialize:deserialize_google_ads_googleads_v3_resources_ParentalStatusView}};exports.ParentalStatusViewServiceClient=grpc.makeGenericClientConstructor(ParentalStatusViewServiceService);