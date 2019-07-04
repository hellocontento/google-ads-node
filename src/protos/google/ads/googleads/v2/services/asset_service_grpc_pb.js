"use strict";var grpc=require("grpc"),google_ads_googleads_v2_services_asset_service_pb=require("../../../../../google/ads/googleads/v2/services/asset_service_pb.js"),google_ads_googleads_v2_resources_asset_pb=require("../../../../../google/ads/googleads/v2/resources/asset_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js");function serialize_google_ads_googleads_v2_resources_Asset(arg){if(!(arg instanceof google_ads_googleads_v2_resources_asset_pb.Asset))throw new Error("Expected argument of type google.ads.googleads.v2.resources.Asset");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_resources_Asset(buffer_arg){return google_ads_googleads_v2_resources_asset_pb.Asset.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v2_services_GetAssetRequest(arg){if(!(arg instanceof google_ads_googleads_v2_services_asset_service_pb.GetAssetRequest))throw new Error("Expected argument of type google.ads.googleads.v2.services.GetAssetRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_services_GetAssetRequest(buffer_arg){return google_ads_googleads_v2_services_asset_service_pb.GetAssetRequest.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v2_services_MutateAssetsRequest(arg){if(!(arg instanceof google_ads_googleads_v2_services_asset_service_pb.MutateAssetsRequest))throw new Error("Expected argument of type google.ads.googleads.v2.services.MutateAssetsRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_services_MutateAssetsRequest(buffer_arg){return google_ads_googleads_v2_services_asset_service_pb.MutateAssetsRequest.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v2_services_MutateAssetsResponse(arg){if(!(arg instanceof google_ads_googleads_v2_services_asset_service_pb.MutateAssetsResponse))throw new Error("Expected argument of type google.ads.googleads.v2.services.MutateAssetsResponse");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_services_MutateAssetsResponse(buffer_arg){return google_ads_googleads_v2_services_asset_service_pb.MutateAssetsResponse.deserializeBinary(new Uint8Array(buffer_arg))}var AssetServiceService=exports.AssetServiceService={getAsset:{path:"/google.ads.googleads.v2.services.AssetService/GetAsset",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v2_services_asset_service_pb.GetAssetRequest,responseType:google_ads_googleads_v2_resources_asset_pb.Asset,requestSerialize:serialize_google_ads_googleads_v2_services_GetAssetRequest,requestDeserialize:deserialize_google_ads_googleads_v2_services_GetAssetRequest,responseSerialize:serialize_google_ads_googleads_v2_resources_Asset,responseDeserialize:deserialize_google_ads_googleads_v2_resources_Asset},mutateAssets:{path:"/google.ads.googleads.v2.services.AssetService/MutateAssets",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v2_services_asset_service_pb.MutateAssetsRequest,responseType:google_ads_googleads_v2_services_asset_service_pb.MutateAssetsResponse,requestSerialize:serialize_google_ads_googleads_v2_services_MutateAssetsRequest,requestDeserialize:deserialize_google_ads_googleads_v2_services_MutateAssetsRequest,responseSerialize:serialize_google_ads_googleads_v2_services_MutateAssetsResponse,responseDeserialize:deserialize_google_ads_googleads_v2_services_MutateAssetsResponse}};exports.AssetServiceClient=grpc.makeGenericClientConstructor(AssetServiceService);