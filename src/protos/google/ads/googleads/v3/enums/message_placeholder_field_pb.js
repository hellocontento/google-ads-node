var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.enums.MessagePlaceholderFieldEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.enums.MessagePlaceholderFieldEnum.MessagePlaceholderField",null,global),proto.google.ads.googleads.v3.enums.MessagePlaceholderFieldEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.enums.MessagePlaceholderFieldEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.enums.MessagePlaceholderFieldEnum.displayName="proto.google.ads.googleads.v3.enums.MessagePlaceholderFieldEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.enums.MessagePlaceholderFieldEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.enums.MessagePlaceholderFieldEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.enums.MessagePlaceholderFieldEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.enums.MessagePlaceholderFieldEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.enums.MessagePlaceholderFieldEnum;return proto.google.ads.googleads.v3.enums.MessagePlaceholderFieldEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.enums.MessagePlaceholderFieldEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)reader.getFieldNumber(),reader.skipField();return msg},proto.google.ads.googleads.v3.enums.MessagePlaceholderFieldEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.enums.MessagePlaceholderFieldEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.enums.MessagePlaceholderFieldEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v3.enums.MessagePlaceholderFieldEnum.MessagePlaceholderField={UNSPECIFIED:0,UNKNOWN:1,BUSINESS_NAME:2,COUNTRY_CODE:3,PHONE_NUMBER:4,MESSAGE_EXTENSION_TEXT:5,MESSAGE_TEXT:6},goog.object.extend(exports,proto.google.ads.googleads.v3.enums);