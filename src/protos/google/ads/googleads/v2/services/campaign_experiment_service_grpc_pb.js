"use strict";var grpc=require("grpc"),google_ads_googleads_v2_services_campaign_experiment_service_pb=require("../../../../../google/ads/googleads/v2/services/campaign_experiment_service_pb.js"),google_ads_googleads_v2_resources_campaign_experiment_pb=require("../../../../../google/ads/googleads/v2/resources/campaign_experiment_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_longrunning_operations_pb=require("../../../../../google/longrunning/operations_pb.js"),google_protobuf_empty_pb=require("google-protobuf/google/protobuf/empty_pb.js"),google_protobuf_field_mask_pb=require("google-protobuf/google/protobuf/field_mask_pb.js"),google_rpc_status_pb=require("../../../../../google/rpc/status_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js");function serialize_google_ads_googleads_v2_resources_CampaignExperiment(arg){if(!(arg instanceof google_ads_googleads_v2_resources_campaign_experiment_pb.CampaignExperiment))throw new Error("Expected argument of type google.ads.googleads.v2.resources.CampaignExperiment");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_resources_CampaignExperiment(buffer_arg){return google_ads_googleads_v2_resources_campaign_experiment_pb.CampaignExperiment.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v2_services_CreateCampaignExperimentRequest(arg){if(!(arg instanceof google_ads_googleads_v2_services_campaign_experiment_service_pb.CreateCampaignExperimentRequest))throw new Error("Expected argument of type google.ads.googleads.v2.services.CreateCampaignExperimentRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_services_CreateCampaignExperimentRequest(buffer_arg){return google_ads_googleads_v2_services_campaign_experiment_service_pb.CreateCampaignExperimentRequest.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v2_services_EndCampaignExperimentRequest(arg){if(!(arg instanceof google_ads_googleads_v2_services_campaign_experiment_service_pb.EndCampaignExperimentRequest))throw new Error("Expected argument of type google.ads.googleads.v2.services.EndCampaignExperimentRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_services_EndCampaignExperimentRequest(buffer_arg){return google_ads_googleads_v2_services_campaign_experiment_service_pb.EndCampaignExperimentRequest.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v2_services_GetCampaignExperimentRequest(arg){if(!(arg instanceof google_ads_googleads_v2_services_campaign_experiment_service_pb.GetCampaignExperimentRequest))throw new Error("Expected argument of type google.ads.googleads.v2.services.GetCampaignExperimentRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_services_GetCampaignExperimentRequest(buffer_arg){return google_ads_googleads_v2_services_campaign_experiment_service_pb.GetCampaignExperimentRequest.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v2_services_GraduateCampaignExperimentRequest(arg){if(!(arg instanceof google_ads_googleads_v2_services_campaign_experiment_service_pb.GraduateCampaignExperimentRequest))throw new Error("Expected argument of type google.ads.googleads.v2.services.GraduateCampaignExperimentRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_services_GraduateCampaignExperimentRequest(buffer_arg){return google_ads_googleads_v2_services_campaign_experiment_service_pb.GraduateCampaignExperimentRequest.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v2_services_GraduateCampaignExperimentResponse(arg){if(!(arg instanceof google_ads_googleads_v2_services_campaign_experiment_service_pb.GraduateCampaignExperimentResponse))throw new Error("Expected argument of type google.ads.googleads.v2.services.GraduateCampaignExperimentResponse");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_services_GraduateCampaignExperimentResponse(buffer_arg){return google_ads_googleads_v2_services_campaign_experiment_service_pb.GraduateCampaignExperimentResponse.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v2_services_ListCampaignExperimentAsyncErrorsRequest(arg){if(!(arg instanceof google_ads_googleads_v2_services_campaign_experiment_service_pb.ListCampaignExperimentAsyncErrorsRequest))throw new Error("Expected argument of type google.ads.googleads.v2.services.ListCampaignExperimentAsyncErrorsRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_services_ListCampaignExperimentAsyncErrorsRequest(buffer_arg){return google_ads_googleads_v2_services_campaign_experiment_service_pb.ListCampaignExperimentAsyncErrorsRequest.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v2_services_ListCampaignExperimentAsyncErrorsResponse(arg){if(!(arg instanceof google_ads_googleads_v2_services_campaign_experiment_service_pb.ListCampaignExperimentAsyncErrorsResponse))throw new Error("Expected argument of type google.ads.googleads.v2.services.ListCampaignExperimentAsyncErrorsResponse");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_services_ListCampaignExperimentAsyncErrorsResponse(buffer_arg){return google_ads_googleads_v2_services_campaign_experiment_service_pb.ListCampaignExperimentAsyncErrorsResponse.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v2_services_MutateCampaignExperimentsRequest(arg){if(!(arg instanceof google_ads_googleads_v2_services_campaign_experiment_service_pb.MutateCampaignExperimentsRequest))throw new Error("Expected argument of type google.ads.googleads.v2.services.MutateCampaignExperimentsRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_services_MutateCampaignExperimentsRequest(buffer_arg){return google_ads_googleads_v2_services_campaign_experiment_service_pb.MutateCampaignExperimentsRequest.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v2_services_MutateCampaignExperimentsResponse(arg){if(!(arg instanceof google_ads_googleads_v2_services_campaign_experiment_service_pb.MutateCampaignExperimentsResponse))throw new Error("Expected argument of type google.ads.googleads.v2.services.MutateCampaignExperimentsResponse");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_services_MutateCampaignExperimentsResponse(buffer_arg){return google_ads_googleads_v2_services_campaign_experiment_service_pb.MutateCampaignExperimentsResponse.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v2_services_PromoteCampaignExperimentRequest(arg){if(!(arg instanceof google_ads_googleads_v2_services_campaign_experiment_service_pb.PromoteCampaignExperimentRequest))throw new Error("Expected argument of type google.ads.googleads.v2.services.PromoteCampaignExperimentRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_services_PromoteCampaignExperimentRequest(buffer_arg){return google_ads_googleads_v2_services_campaign_experiment_service_pb.PromoteCampaignExperimentRequest.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_longrunning_Operation(arg){if(!(arg instanceof google_longrunning_operations_pb.Operation))throw new Error("Expected argument of type google.longrunning.Operation");return Buffer.from(arg.serializeBinary())}function deserialize_google_longrunning_Operation(buffer_arg){return google_longrunning_operations_pb.Operation.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_protobuf_Empty(arg){if(!(arg instanceof google_protobuf_empty_pb.Empty))throw new Error("Expected argument of type google.protobuf.Empty");return Buffer.from(arg.serializeBinary())}function deserialize_google_protobuf_Empty(buffer_arg){return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg))}var CampaignExperimentServiceService=exports.CampaignExperimentServiceService={getCampaignExperiment:{path:"/google.ads.googleads.v2.services.CampaignExperimentService/GetCampaignExperiment",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v2_services_campaign_experiment_service_pb.GetCampaignExperimentRequest,responseType:google_ads_googleads_v2_resources_campaign_experiment_pb.CampaignExperiment,requestSerialize:serialize_google_ads_googleads_v2_services_GetCampaignExperimentRequest,requestDeserialize:deserialize_google_ads_googleads_v2_services_GetCampaignExperimentRequest,responseSerialize:serialize_google_ads_googleads_v2_resources_CampaignExperiment,responseDeserialize:deserialize_google_ads_googleads_v2_resources_CampaignExperiment},createCampaignExperiment:{path:"/google.ads.googleads.v2.services.CampaignExperimentService/CreateCampaignExperiment",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v2_services_campaign_experiment_service_pb.CreateCampaignExperimentRequest,responseType:google_longrunning_operations_pb.Operation,requestSerialize:serialize_google_ads_googleads_v2_services_CreateCampaignExperimentRequest,requestDeserialize:deserialize_google_ads_googleads_v2_services_CreateCampaignExperimentRequest,responseSerialize:serialize_google_longrunning_Operation,responseDeserialize:deserialize_google_longrunning_Operation},mutateCampaignExperiments:{path:"/google.ads.googleads.v2.services.CampaignExperimentService/MutateCampaignExperiments",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v2_services_campaign_experiment_service_pb.MutateCampaignExperimentsRequest,responseType:google_ads_googleads_v2_services_campaign_experiment_service_pb.MutateCampaignExperimentsResponse,requestSerialize:serialize_google_ads_googleads_v2_services_MutateCampaignExperimentsRequest,requestDeserialize:deserialize_google_ads_googleads_v2_services_MutateCampaignExperimentsRequest,responseSerialize:serialize_google_ads_googleads_v2_services_MutateCampaignExperimentsResponse,responseDeserialize:deserialize_google_ads_googleads_v2_services_MutateCampaignExperimentsResponse},graduateCampaignExperiment:{path:"/google.ads.googleads.v2.services.CampaignExperimentService/GraduateCampaignExperiment",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v2_services_campaign_experiment_service_pb.GraduateCampaignExperimentRequest,responseType:google_ads_googleads_v2_services_campaign_experiment_service_pb.GraduateCampaignExperimentResponse,requestSerialize:serialize_google_ads_googleads_v2_services_GraduateCampaignExperimentRequest,requestDeserialize:deserialize_google_ads_googleads_v2_services_GraduateCampaignExperimentRequest,responseSerialize:serialize_google_ads_googleads_v2_services_GraduateCampaignExperimentResponse,responseDeserialize:deserialize_google_ads_googleads_v2_services_GraduateCampaignExperimentResponse},promoteCampaignExperiment:{path:"/google.ads.googleads.v2.services.CampaignExperimentService/PromoteCampaignExperiment",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v2_services_campaign_experiment_service_pb.PromoteCampaignExperimentRequest,responseType:google_longrunning_operations_pb.Operation,requestSerialize:serialize_google_ads_googleads_v2_services_PromoteCampaignExperimentRequest,requestDeserialize:deserialize_google_ads_googleads_v2_services_PromoteCampaignExperimentRequest,responseSerialize:serialize_google_longrunning_Operation,responseDeserialize:deserialize_google_longrunning_Operation},endCampaignExperiment:{path:"/google.ads.googleads.v2.services.CampaignExperimentService/EndCampaignExperiment",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v2_services_campaign_experiment_service_pb.EndCampaignExperimentRequest,responseType:google_protobuf_empty_pb.Empty,requestSerialize:serialize_google_ads_googleads_v2_services_EndCampaignExperimentRequest,requestDeserialize:deserialize_google_ads_googleads_v2_services_EndCampaignExperimentRequest,responseSerialize:serialize_google_protobuf_Empty,responseDeserialize:deserialize_google_protobuf_Empty},listCampaignExperimentAsyncErrors:{path:"/google.ads.googleads.v2.services.CampaignExperimentService/ListCampaignExperimentAsyncErrors",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v2_services_campaign_experiment_service_pb.ListCampaignExperimentAsyncErrorsRequest,responseType:google_ads_googleads_v2_services_campaign_experiment_service_pb.ListCampaignExperimentAsyncErrorsResponse,requestSerialize:serialize_google_ads_googleads_v2_services_ListCampaignExperimentAsyncErrorsRequest,requestDeserialize:deserialize_google_ads_googleads_v2_services_ListCampaignExperimentAsyncErrorsRequest,responseSerialize:serialize_google_ads_googleads_v2_services_ListCampaignExperimentAsyncErrorsResponse,responseDeserialize:deserialize_google_ads_googleads_v2_services_ListCampaignExperimentAsyncErrorsResponse}};exports.CampaignExperimentServiceClient=grpc.makeGenericClientConstructor(CampaignExperimentServiceService);