var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.enums.AppCampaignAppStoreEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.enums.AppCampaignAppStoreEnum.AppCampaignAppStore",null,global),proto.google.ads.googleads.v3.enums.AppCampaignAppStoreEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.enums.AppCampaignAppStoreEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.enums.AppCampaignAppStoreEnum.displayName="proto.google.ads.googleads.v3.enums.AppCampaignAppStoreEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.enums.AppCampaignAppStoreEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.enums.AppCampaignAppStoreEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.enums.AppCampaignAppStoreEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.enums.AppCampaignAppStoreEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.enums.AppCampaignAppStoreEnum;return proto.google.ads.googleads.v3.enums.AppCampaignAppStoreEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.enums.AppCampaignAppStoreEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)reader.getFieldNumber(),reader.skipField();return msg},proto.google.ads.googleads.v3.enums.AppCampaignAppStoreEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.enums.AppCampaignAppStoreEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.enums.AppCampaignAppStoreEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v3.enums.AppCampaignAppStoreEnum.AppCampaignAppStore={UNSPECIFIED:0,UNKNOWN:1,APPLE_APP_STORE:2,GOOGLE_APP_STORE:3},goog.object.extend(exports,proto.google.ads.googleads.v3.enums);