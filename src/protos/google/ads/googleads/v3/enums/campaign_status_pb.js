var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.enums.CampaignStatusEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.enums.CampaignStatusEnum.CampaignStatus",null,global),proto.google.ads.googleads.v3.enums.CampaignStatusEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.enums.CampaignStatusEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.enums.CampaignStatusEnum.displayName="proto.google.ads.googleads.v3.enums.CampaignStatusEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.enums.CampaignStatusEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.enums.CampaignStatusEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.enums.CampaignStatusEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.enums.CampaignStatusEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.enums.CampaignStatusEnum;return proto.google.ads.googleads.v3.enums.CampaignStatusEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.enums.CampaignStatusEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)reader.getFieldNumber(),reader.skipField();return msg},proto.google.ads.googleads.v3.enums.CampaignStatusEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.enums.CampaignStatusEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.enums.CampaignStatusEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v3.enums.CampaignStatusEnum.CampaignStatus={UNSPECIFIED:0,UNKNOWN:1,ENABLED:2,PAUSED:3,REMOVED:4},goog.object.extend(exports,proto.google.ads.googleads.v3.enums);