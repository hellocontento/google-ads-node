var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.enums.InvoiceTypeEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.enums.InvoiceTypeEnum.InvoiceType",null,global),proto.google.ads.googleads.v3.enums.InvoiceTypeEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.enums.InvoiceTypeEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.enums.InvoiceTypeEnum.displayName="proto.google.ads.googleads.v3.enums.InvoiceTypeEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.enums.InvoiceTypeEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.enums.InvoiceTypeEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.enums.InvoiceTypeEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.enums.InvoiceTypeEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.enums.InvoiceTypeEnum;return proto.google.ads.googleads.v3.enums.InvoiceTypeEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.enums.InvoiceTypeEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)reader.getFieldNumber(),reader.skipField();return msg},proto.google.ads.googleads.v3.enums.InvoiceTypeEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.enums.InvoiceTypeEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.enums.InvoiceTypeEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v3.enums.InvoiceTypeEnum.InvoiceType={UNSPECIFIED:0,UNKNOWN:1,CREDIT_MEMO:2,INVOICE:3},goog.object.extend(exports,proto.google.ads.googleads.v3.enums);