var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.errors.ChangeStatusErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v2.errors.ChangeStatusErrorEnum.ChangeStatusError",null,global),proto.google.ads.googleads.v2.errors.ChangeStatusErrorEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.errors.ChangeStatusErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.errors.ChangeStatusErrorEnum.displayName="proto.google.ads.googleads.v2.errors.ChangeStatusErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.errors.ChangeStatusErrorEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.errors.ChangeStatusErrorEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.errors.ChangeStatusErrorEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.errors.ChangeStatusErrorEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.errors.ChangeStatusErrorEnum;return proto.google.ads.googleads.v2.errors.ChangeStatusErrorEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.errors.ChangeStatusErrorEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v2.errors.ChangeStatusErrorEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.errors.ChangeStatusErrorEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.errors.ChangeStatusErrorEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v2.errors.ChangeStatusErrorEnum.ChangeStatusError={UNSPECIFIED:0,UNKNOWN:1,START_DATE_TOO_OLD:3},goog.object.extend(exports,proto.google.ads.googleads.v2.errors);