var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.errors.PartialFailureErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.errors.PartialFailureErrorEnum.PartialFailureError",null,global),proto.google.ads.googleads.v3.errors.PartialFailureErrorEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.errors.PartialFailureErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.errors.PartialFailureErrorEnum.displayName="proto.google.ads.googleads.v3.errors.PartialFailureErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.errors.PartialFailureErrorEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.errors.PartialFailureErrorEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.errors.PartialFailureErrorEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.errors.PartialFailureErrorEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.errors.PartialFailureErrorEnum;return proto.google.ads.googleads.v3.errors.PartialFailureErrorEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.errors.PartialFailureErrorEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)reader.getFieldNumber(),reader.skipField();return msg},proto.google.ads.googleads.v3.errors.PartialFailureErrorEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.errors.PartialFailureErrorEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.errors.PartialFailureErrorEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v3.errors.PartialFailureErrorEnum.PartialFailureError={UNSPECIFIED:0,UNKNOWN:1,PARTIAL_FAILURE_MODE_REQUIRED:2},goog.object.extend(exports,proto.google.ads.googleads.v3.errors);