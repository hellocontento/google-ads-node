var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.errors.AdSharingErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.errors.AdSharingErrorEnum.AdSharingError",null,global),proto.google.ads.googleads.v3.errors.AdSharingErrorEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.errors.AdSharingErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.errors.AdSharingErrorEnum.displayName="proto.google.ads.googleads.v3.errors.AdSharingErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.errors.AdSharingErrorEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.errors.AdSharingErrorEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.errors.AdSharingErrorEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.errors.AdSharingErrorEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.errors.AdSharingErrorEnum;return proto.google.ads.googleads.v3.errors.AdSharingErrorEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.errors.AdSharingErrorEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)reader.getFieldNumber(),reader.skipField();return msg},proto.google.ads.googleads.v3.errors.AdSharingErrorEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.errors.AdSharingErrorEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.errors.AdSharingErrorEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v3.errors.AdSharingErrorEnum.AdSharingError={UNSPECIFIED:0,UNKNOWN:1,AD_GROUP_ALREADY_CONTAINS_AD:2,INCOMPATIBLE_AD_UNDER_AD_GROUP:3,CANNOT_SHARE_INACTIVE_AD:4},goog.object.extend(exports,proto.google.ads.googleads.v3.errors);