var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.enums.PolicyTopicEvidenceDestinationMismatchUrlTypeEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.enums.PolicyTopicEvidenceDestinationMismatchUrlTypeEnum.PolicyTopicEvidenceDestinationMismatchUrlType",null,global),proto.google.ads.googleads.v3.enums.PolicyTopicEvidenceDestinationMismatchUrlTypeEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.enums.PolicyTopicEvidenceDestinationMismatchUrlTypeEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.enums.PolicyTopicEvidenceDestinationMismatchUrlTypeEnum.displayName="proto.google.ads.googleads.v3.enums.PolicyTopicEvidenceDestinationMismatchUrlTypeEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.enums.PolicyTopicEvidenceDestinationMismatchUrlTypeEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.enums.PolicyTopicEvidenceDestinationMismatchUrlTypeEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.enums.PolicyTopicEvidenceDestinationMismatchUrlTypeEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.enums.PolicyTopicEvidenceDestinationMismatchUrlTypeEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.enums.PolicyTopicEvidenceDestinationMismatchUrlTypeEnum;return proto.google.ads.googleads.v3.enums.PolicyTopicEvidenceDestinationMismatchUrlTypeEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.enums.PolicyTopicEvidenceDestinationMismatchUrlTypeEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)reader.getFieldNumber(),reader.skipField();return msg},proto.google.ads.googleads.v3.enums.PolicyTopicEvidenceDestinationMismatchUrlTypeEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.enums.PolicyTopicEvidenceDestinationMismatchUrlTypeEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.enums.PolicyTopicEvidenceDestinationMismatchUrlTypeEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v3.enums.PolicyTopicEvidenceDestinationMismatchUrlTypeEnum.PolicyTopicEvidenceDestinationMismatchUrlType={UNSPECIFIED:0,UNKNOWN:1,DISPLAY_URL:2,FINAL_URL:3,FINAL_MOBILE_URL:4,TRACKING_URL:5,MOBILE_TRACKING_URL:6},goog.object.extend(exports,proto.google.ads.googleads.v3.enums);