var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.errors.AssetErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.errors.AssetErrorEnum.AssetError",null,global),proto.google.ads.googleads.v3.errors.AssetErrorEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.errors.AssetErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.errors.AssetErrorEnum.displayName="proto.google.ads.googleads.v3.errors.AssetErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.errors.AssetErrorEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.errors.AssetErrorEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.errors.AssetErrorEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.errors.AssetErrorEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.errors.AssetErrorEnum;return proto.google.ads.googleads.v3.errors.AssetErrorEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.errors.AssetErrorEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)reader.getFieldNumber(),reader.skipField();return msg},proto.google.ads.googleads.v3.errors.AssetErrorEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.errors.AssetErrorEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.errors.AssetErrorEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v3.errors.AssetErrorEnum.AssetError={UNSPECIFIED:0,UNKNOWN:1,CUSTOMER_NOT_WHITELISTED_FOR_ASSET_TYPE:2,DUPLICATE_ASSET:3,DUPLICATE_ASSET_NAME:4,ASSET_DATA_IS_MISSING:5,CANNOT_MODIFY_ASSET_NAME:6},goog.object.extend(exports,proto.google.ads.googleads.v3.errors);