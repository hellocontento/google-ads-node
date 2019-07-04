"use strict";var grpc=require("grpc"),google_ads_googleads_v2_services_user_list_service_pb=require("../../../../../google/ads/googleads/v2/services/user_list_service_pb.js"),google_ads_googleads_v2_resources_user_list_pb=require("../../../../../google/ads/googleads/v2/resources/user_list_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_protobuf_field_mask_pb=require("google-protobuf/google/protobuf/field_mask_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_rpc_status_pb=require("../../../../../google/rpc/status_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js");function serialize_google_ads_googleads_v2_resources_UserList(arg){if(!(arg instanceof google_ads_googleads_v2_resources_user_list_pb.UserList))throw new Error("Expected argument of type google.ads.googleads.v2.resources.UserList");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_resources_UserList(buffer_arg){return google_ads_googleads_v2_resources_user_list_pb.UserList.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v2_services_GetUserListRequest(arg){if(!(arg instanceof google_ads_googleads_v2_services_user_list_service_pb.GetUserListRequest))throw new Error("Expected argument of type google.ads.googleads.v2.services.GetUserListRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_services_GetUserListRequest(buffer_arg){return google_ads_googleads_v2_services_user_list_service_pb.GetUserListRequest.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v2_services_MutateUserListsRequest(arg){if(!(arg instanceof google_ads_googleads_v2_services_user_list_service_pb.MutateUserListsRequest))throw new Error("Expected argument of type google.ads.googleads.v2.services.MutateUserListsRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_services_MutateUserListsRequest(buffer_arg){return google_ads_googleads_v2_services_user_list_service_pb.MutateUserListsRequest.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v2_services_MutateUserListsResponse(arg){if(!(arg instanceof google_ads_googleads_v2_services_user_list_service_pb.MutateUserListsResponse))throw new Error("Expected argument of type google.ads.googleads.v2.services.MutateUserListsResponse");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_services_MutateUserListsResponse(buffer_arg){return google_ads_googleads_v2_services_user_list_service_pb.MutateUserListsResponse.deserializeBinary(new Uint8Array(buffer_arg))}var UserListServiceService=exports.UserListServiceService={getUserList:{path:"/google.ads.googleads.v2.services.UserListService/GetUserList",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v2_services_user_list_service_pb.GetUserListRequest,responseType:google_ads_googleads_v2_resources_user_list_pb.UserList,requestSerialize:serialize_google_ads_googleads_v2_services_GetUserListRequest,requestDeserialize:deserialize_google_ads_googleads_v2_services_GetUserListRequest,responseSerialize:serialize_google_ads_googleads_v2_resources_UserList,responseDeserialize:deserialize_google_ads_googleads_v2_resources_UserList},mutateUserLists:{path:"/google.ads.googleads.v2.services.UserListService/MutateUserLists",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v2_services_user_list_service_pb.MutateUserListsRequest,responseType:google_ads_googleads_v2_services_user_list_service_pb.MutateUserListsResponse,requestSerialize:serialize_google_ads_googleads_v2_services_MutateUserListsRequest,requestDeserialize:deserialize_google_ads_googleads_v2_services_MutateUserListsRequest,responseSerialize:serialize_google_ads_googleads_v2_services_MutateUserListsResponse,responseDeserialize:deserialize_google_ads_googleads_v2_services_MutateUserListsResponse}};exports.UserListServiceClient=grpc.makeGenericClientConstructor(UserListServiceService);