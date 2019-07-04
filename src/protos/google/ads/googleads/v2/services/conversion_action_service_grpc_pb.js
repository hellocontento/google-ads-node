"use strict";var grpc=require("grpc"),google_ads_googleads_v2_services_conversion_action_service_pb=require("../../../../../google/ads/googleads/v2/services/conversion_action_service_pb.js"),google_ads_googleads_v2_resources_conversion_action_pb=require("../../../../../google/ads/googleads/v2/resources/conversion_action_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_protobuf_field_mask_pb=require("google-protobuf/google/protobuf/field_mask_pb.js"),google_rpc_status_pb=require("../../../../../google/rpc/status_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js");function serialize_google_ads_googleads_v2_resources_ConversionAction(arg){if(!(arg instanceof google_ads_googleads_v2_resources_conversion_action_pb.ConversionAction))throw new Error("Expected argument of type google.ads.googleads.v2.resources.ConversionAction");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_resources_ConversionAction(buffer_arg){return google_ads_googleads_v2_resources_conversion_action_pb.ConversionAction.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v2_services_GetConversionActionRequest(arg){if(!(arg instanceof google_ads_googleads_v2_services_conversion_action_service_pb.GetConversionActionRequest))throw new Error("Expected argument of type google.ads.googleads.v2.services.GetConversionActionRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_services_GetConversionActionRequest(buffer_arg){return google_ads_googleads_v2_services_conversion_action_service_pb.GetConversionActionRequest.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v2_services_MutateConversionActionsRequest(arg){if(!(arg instanceof google_ads_googleads_v2_services_conversion_action_service_pb.MutateConversionActionsRequest))throw new Error("Expected argument of type google.ads.googleads.v2.services.MutateConversionActionsRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_services_MutateConversionActionsRequest(buffer_arg){return google_ads_googleads_v2_services_conversion_action_service_pb.MutateConversionActionsRequest.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v2_services_MutateConversionActionsResponse(arg){if(!(arg instanceof google_ads_googleads_v2_services_conversion_action_service_pb.MutateConversionActionsResponse))throw new Error("Expected argument of type google.ads.googleads.v2.services.MutateConversionActionsResponse");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_services_MutateConversionActionsResponse(buffer_arg){return google_ads_googleads_v2_services_conversion_action_service_pb.MutateConversionActionsResponse.deserializeBinary(new Uint8Array(buffer_arg))}var ConversionActionServiceService=exports.ConversionActionServiceService={getConversionAction:{path:"/google.ads.googleads.v2.services.ConversionActionService/GetConversionAction",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v2_services_conversion_action_service_pb.GetConversionActionRequest,responseType:google_ads_googleads_v2_resources_conversion_action_pb.ConversionAction,requestSerialize:serialize_google_ads_googleads_v2_services_GetConversionActionRequest,requestDeserialize:deserialize_google_ads_googleads_v2_services_GetConversionActionRequest,responseSerialize:serialize_google_ads_googleads_v2_resources_ConversionAction,responseDeserialize:deserialize_google_ads_googleads_v2_resources_ConversionAction},mutateConversionActions:{path:"/google.ads.googleads.v2.services.ConversionActionService/MutateConversionActions",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v2_services_conversion_action_service_pb.MutateConversionActionsRequest,responseType:google_ads_googleads_v2_services_conversion_action_service_pb.MutateConversionActionsResponse,requestSerialize:serialize_google_ads_googleads_v2_services_MutateConversionActionsRequest,requestDeserialize:deserialize_google_ads_googleads_v2_services_MutateConversionActionsRequest,responseSerialize:serialize_google_ads_googleads_v2_services_MutateConversionActionsResponse,responseDeserialize:deserialize_google_ads_googleads_v2_services_MutateConversionActionsResponse}};exports.ConversionActionServiceClient=grpc.makeGenericClientConstructor(ConversionActionServiceService);