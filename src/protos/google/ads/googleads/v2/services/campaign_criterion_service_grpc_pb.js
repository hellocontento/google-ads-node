"use strict";var grpc=require("grpc"),google_ads_googleads_v2_services_campaign_criterion_service_pb=require("../../../../../google/ads/googleads/v2/services/campaign_criterion_service_pb.js"),google_ads_googleads_v2_resources_campaign_criterion_pb=require("../../../../../google/ads/googleads/v2/resources/campaign_criterion_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_protobuf_field_mask_pb=require("google-protobuf/google/protobuf/field_mask_pb.js"),google_rpc_status_pb=require("../../../../../google/rpc/status_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js");function serialize_google_ads_googleads_v2_resources_CampaignCriterion(arg){if(!(arg instanceof google_ads_googleads_v2_resources_campaign_criterion_pb.CampaignCriterion))throw new Error("Expected argument of type google.ads.googleads.v2.resources.CampaignCriterion");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_resources_CampaignCriterion(buffer_arg){return google_ads_googleads_v2_resources_campaign_criterion_pb.CampaignCriterion.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v2_services_GetCampaignCriterionRequest(arg){if(!(arg instanceof google_ads_googleads_v2_services_campaign_criterion_service_pb.GetCampaignCriterionRequest))throw new Error("Expected argument of type google.ads.googleads.v2.services.GetCampaignCriterionRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_services_GetCampaignCriterionRequest(buffer_arg){return google_ads_googleads_v2_services_campaign_criterion_service_pb.GetCampaignCriterionRequest.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v2_services_MutateCampaignCriteriaRequest(arg){if(!(arg instanceof google_ads_googleads_v2_services_campaign_criterion_service_pb.MutateCampaignCriteriaRequest))throw new Error("Expected argument of type google.ads.googleads.v2.services.MutateCampaignCriteriaRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_services_MutateCampaignCriteriaRequest(buffer_arg){return google_ads_googleads_v2_services_campaign_criterion_service_pb.MutateCampaignCriteriaRequest.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v2_services_MutateCampaignCriteriaResponse(arg){if(!(arg instanceof google_ads_googleads_v2_services_campaign_criterion_service_pb.MutateCampaignCriteriaResponse))throw new Error("Expected argument of type google.ads.googleads.v2.services.MutateCampaignCriteriaResponse");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_services_MutateCampaignCriteriaResponse(buffer_arg){return google_ads_googleads_v2_services_campaign_criterion_service_pb.MutateCampaignCriteriaResponse.deserializeBinary(new Uint8Array(buffer_arg))}var CampaignCriterionServiceService=exports.CampaignCriterionServiceService={getCampaignCriterion:{path:"/google.ads.googleads.v2.services.CampaignCriterionService/GetCampaignCriterion",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v2_services_campaign_criterion_service_pb.GetCampaignCriterionRequest,responseType:google_ads_googleads_v2_resources_campaign_criterion_pb.CampaignCriterion,requestSerialize:serialize_google_ads_googleads_v2_services_GetCampaignCriterionRequest,requestDeserialize:deserialize_google_ads_googleads_v2_services_GetCampaignCriterionRequest,responseSerialize:serialize_google_ads_googleads_v2_resources_CampaignCriterion,responseDeserialize:deserialize_google_ads_googleads_v2_resources_CampaignCriterion},mutateCampaignCriteria:{path:"/google.ads.googleads.v2.services.CampaignCriterionService/MutateCampaignCriteria",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v2_services_campaign_criterion_service_pb.MutateCampaignCriteriaRequest,responseType:google_ads_googleads_v2_services_campaign_criterion_service_pb.MutateCampaignCriteriaResponse,requestSerialize:serialize_google_ads_googleads_v2_services_MutateCampaignCriteriaRequest,requestDeserialize:deserialize_google_ads_googleads_v2_services_MutateCampaignCriteriaRequest,responseSerialize:serialize_google_ads_googleads_v2_services_MutateCampaignCriteriaResponse,responseDeserialize:deserialize_google_ads_googleads_v2_services_MutateCampaignCriteriaResponse}};exports.CampaignCriterionServiceClient=grpc.makeGenericClientConstructor(CampaignCriterionServiceService);