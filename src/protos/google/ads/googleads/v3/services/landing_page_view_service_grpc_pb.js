"use strict";var grpc=require("grpc"),google_ads_googleads_v3_services_landing_page_view_service_pb=require("../../../../../google/ads/googleads/v3/services/landing_page_view_service_pb.js"),google_ads_googleads_v3_resources_landing_page_view_pb=require("../../../../../google/ads/googleads/v3/resources/landing_page_view_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");function serialize_google_ads_googleads_v3_resources_LandingPageView(arg){if(!(arg instanceof google_ads_googleads_v3_resources_landing_page_view_pb.LandingPageView))throw new Error("Expected argument of type google.ads.googleads.v3.resources.LandingPageView");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v3_resources_LandingPageView(buffer_arg){return google_ads_googleads_v3_resources_landing_page_view_pb.LandingPageView.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v3_services_GetLandingPageViewRequest(arg){if(!(arg instanceof google_ads_googleads_v3_services_landing_page_view_service_pb.GetLandingPageViewRequest))throw new Error("Expected argument of type google.ads.googleads.v3.services.GetLandingPageViewRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v3_services_GetLandingPageViewRequest(buffer_arg){return google_ads_googleads_v3_services_landing_page_view_service_pb.GetLandingPageViewRequest.deserializeBinary(new Uint8Array(buffer_arg))}var LandingPageViewServiceService=exports.LandingPageViewServiceService={getLandingPageView:{path:"/google.ads.googleads.v3.services.LandingPageViewService/GetLandingPageView",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v3_services_landing_page_view_service_pb.GetLandingPageViewRequest,responseType:google_ads_googleads_v3_resources_landing_page_view_pb.LandingPageView,requestSerialize:serialize_google_ads_googleads_v3_services_GetLandingPageViewRequest,requestDeserialize:deserialize_google_ads_googleads_v3_services_GetLandingPageViewRequest,responseSerialize:serialize_google_ads_googleads_v3_resources_LandingPageView,responseDeserialize:deserialize_google_ads_googleads_v3_resources_LandingPageView}};exports.LandingPageViewServiceClient=grpc.makeGenericClientConstructor(LandingPageViewServiceService);