var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.enums.ContentLabelTypeEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.enums.ContentLabelTypeEnum.ContentLabelType",null,global),proto.google.ads.googleads.v3.enums.ContentLabelTypeEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.enums.ContentLabelTypeEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.enums.ContentLabelTypeEnum.displayName="proto.google.ads.googleads.v3.enums.ContentLabelTypeEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.enums.ContentLabelTypeEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.enums.ContentLabelTypeEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.enums.ContentLabelTypeEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.enums.ContentLabelTypeEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.enums.ContentLabelTypeEnum;return proto.google.ads.googleads.v3.enums.ContentLabelTypeEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.enums.ContentLabelTypeEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)reader.getFieldNumber(),reader.skipField();return msg},proto.google.ads.googleads.v3.enums.ContentLabelTypeEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.enums.ContentLabelTypeEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.enums.ContentLabelTypeEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v3.enums.ContentLabelTypeEnum.ContentLabelType={UNSPECIFIED:0,UNKNOWN:1,SEXUALLY_SUGGESTIVE:2,BELOW_THE_FOLD:3,PARKED_DOMAIN:4,JUVENILE:6,PROFANITY:7,TRAGEDY:8,VIDEO:9,VIDEO_RATING_DV_G:10,VIDEO_RATING_DV_PG:11,VIDEO_RATING_DV_T:12,VIDEO_RATING_DV_MA:13,VIDEO_NOT_YET_RATED:14,EMBEDDED_VIDEO:15,LIVE_STREAMING_VIDEO:16,SOCIAL_ISSUES:17},goog.object.extend(exports,proto.google.ads.googleads.v3.enums);