var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.enums.ConversionActionCategoryEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.enums.ConversionActionCategoryEnum.ConversionActionCategory",null,global),proto.google.ads.googleads.v3.enums.ConversionActionCategoryEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.enums.ConversionActionCategoryEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.enums.ConversionActionCategoryEnum.displayName="proto.google.ads.googleads.v3.enums.ConversionActionCategoryEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.enums.ConversionActionCategoryEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.enums.ConversionActionCategoryEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.enums.ConversionActionCategoryEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.enums.ConversionActionCategoryEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.enums.ConversionActionCategoryEnum;return proto.google.ads.googleads.v3.enums.ConversionActionCategoryEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.enums.ConversionActionCategoryEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)reader.getFieldNumber(),reader.skipField();return msg},proto.google.ads.googleads.v3.enums.ConversionActionCategoryEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.enums.ConversionActionCategoryEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.enums.ConversionActionCategoryEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v3.enums.ConversionActionCategoryEnum.ConversionActionCategory={UNSPECIFIED:0,UNKNOWN:1,DEFAULT:2,PAGE_VIEW:3,PURCHASE:4,SIGNUP:5,LEAD:6,DOWNLOAD:7},goog.object.extend(exports,proto.google.ads.googleads.v3.enums);