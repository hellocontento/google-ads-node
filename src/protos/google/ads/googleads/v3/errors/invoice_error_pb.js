var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.errors.InvoiceErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.errors.InvoiceErrorEnum.InvoiceError",null,global),proto.google.ads.googleads.v3.errors.InvoiceErrorEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.errors.InvoiceErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.errors.InvoiceErrorEnum.displayName="proto.google.ads.googleads.v3.errors.InvoiceErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.errors.InvoiceErrorEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.errors.InvoiceErrorEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.errors.InvoiceErrorEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.errors.InvoiceErrorEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.errors.InvoiceErrorEnum;return proto.google.ads.googleads.v3.errors.InvoiceErrorEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.errors.InvoiceErrorEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)reader.getFieldNumber(),reader.skipField();return msg},proto.google.ads.googleads.v3.errors.InvoiceErrorEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.errors.InvoiceErrorEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.errors.InvoiceErrorEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v3.errors.InvoiceErrorEnum.InvoiceError={UNSPECIFIED:0,UNKNOWN:1,YEAR_MONTH_TOO_OLD:2,NOT_INVOICED_CUSTOMER:3},goog.object.extend(exports,proto.google.ads.googleads.v3.errors);