var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.enums.ProductConditionEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v2.enums.ProductConditionEnum.ProductCondition",null,global),proto.google.ads.googleads.v2.enums.ProductConditionEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.enums.ProductConditionEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.enums.ProductConditionEnum.displayName="proto.google.ads.googleads.v2.enums.ProductConditionEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.enums.ProductConditionEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.enums.ProductConditionEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.enums.ProductConditionEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.enums.ProductConditionEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.enums.ProductConditionEnum;return proto.google.ads.googleads.v2.enums.ProductConditionEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.enums.ProductConditionEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v2.enums.ProductConditionEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.enums.ProductConditionEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.enums.ProductConditionEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v2.enums.ProductConditionEnum.ProductCondition={UNSPECIFIED:0,UNKNOWN:1,NEW:3,REFURBISHED:4,USED:5},goog.object.extend(exports,proto.google.ads.googleads.v2.enums);