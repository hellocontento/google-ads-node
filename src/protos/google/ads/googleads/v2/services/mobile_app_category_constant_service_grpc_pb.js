"use strict";var grpc=require("grpc"),google_ads_googleads_v2_services_mobile_app_category_constant_service_pb=require("../../../../../google/ads/googleads/v2/services/mobile_app_category_constant_service_pb.js"),google_ads_googleads_v2_resources_mobile_app_category_constant_pb=require("../../../../../google/ads/googleads/v2/resources/mobile_app_category_constant_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js");function serialize_google_ads_googleads_v2_resources_MobileAppCategoryConstant(arg){if(!(arg instanceof google_ads_googleads_v2_resources_mobile_app_category_constant_pb.MobileAppCategoryConstant))throw new Error("Expected argument of type google.ads.googleads.v2.resources.MobileAppCategoryConstant");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_resources_MobileAppCategoryConstant(buffer_arg){return google_ads_googleads_v2_resources_mobile_app_category_constant_pb.MobileAppCategoryConstant.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v2_services_GetMobileAppCategoryConstantRequest(arg){if(!(arg instanceof google_ads_googleads_v2_services_mobile_app_category_constant_service_pb.GetMobileAppCategoryConstantRequest))throw new Error("Expected argument of type google.ads.googleads.v2.services.GetMobileAppCategoryConstantRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_services_GetMobileAppCategoryConstantRequest(buffer_arg){return google_ads_googleads_v2_services_mobile_app_category_constant_service_pb.GetMobileAppCategoryConstantRequest.deserializeBinary(new Uint8Array(buffer_arg))}var MobileAppCategoryConstantServiceService=exports.MobileAppCategoryConstantServiceService={getMobileAppCategoryConstant:{path:"/google.ads.googleads.v2.services.MobileAppCategoryConstantService/GetMobileAppCategoryConstant",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v2_services_mobile_app_category_constant_service_pb.GetMobileAppCategoryConstantRequest,responseType:google_ads_googleads_v2_resources_mobile_app_category_constant_pb.MobileAppCategoryConstant,requestSerialize:serialize_google_ads_googleads_v2_services_GetMobileAppCategoryConstantRequest,requestDeserialize:deserialize_google_ads_googleads_v2_services_GetMobileAppCategoryConstantRequest,responseSerialize:serialize_google_ads_googleads_v2_resources_MobileAppCategoryConstant,responseDeserialize:deserialize_google_ads_googleads_v2_resources_MobileAppCategoryConstant}};exports.MobileAppCategoryConstantServiceClient=grpc.makeGenericClientConstructor(MobileAppCategoryConstantServiceService);