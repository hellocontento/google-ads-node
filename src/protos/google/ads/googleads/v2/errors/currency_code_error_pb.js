var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.errors.CurrencyCodeErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v2.errors.CurrencyCodeErrorEnum.CurrencyCodeError",null,global),proto.google.ads.googleads.v2.errors.CurrencyCodeErrorEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.errors.CurrencyCodeErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.errors.CurrencyCodeErrorEnum.displayName="proto.google.ads.googleads.v2.errors.CurrencyCodeErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.errors.CurrencyCodeErrorEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.errors.CurrencyCodeErrorEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.errors.CurrencyCodeErrorEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.errors.CurrencyCodeErrorEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.errors.CurrencyCodeErrorEnum;return proto.google.ads.googleads.v2.errors.CurrencyCodeErrorEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.errors.CurrencyCodeErrorEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v2.errors.CurrencyCodeErrorEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.errors.CurrencyCodeErrorEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.errors.CurrencyCodeErrorEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v2.errors.CurrencyCodeErrorEnum.CurrencyCodeError={UNSPECIFIED:0,UNKNOWN:1,UNSUPPORTED:2},goog.object.extend(exports,proto.google.ads.googleads.v2.errors);