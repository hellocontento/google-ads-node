var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.enums.PromotionPlaceholderFieldEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.enums.PromotionPlaceholderFieldEnum.PromotionPlaceholderField",null,global),proto.google.ads.googleads.v3.enums.PromotionPlaceholderFieldEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.enums.PromotionPlaceholderFieldEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.enums.PromotionPlaceholderFieldEnum.displayName="proto.google.ads.googleads.v3.enums.PromotionPlaceholderFieldEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.enums.PromotionPlaceholderFieldEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.enums.PromotionPlaceholderFieldEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.enums.PromotionPlaceholderFieldEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.enums.PromotionPlaceholderFieldEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.enums.PromotionPlaceholderFieldEnum;return proto.google.ads.googleads.v3.enums.PromotionPlaceholderFieldEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.enums.PromotionPlaceholderFieldEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)reader.getFieldNumber(),reader.skipField();return msg},proto.google.ads.googleads.v3.enums.PromotionPlaceholderFieldEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.enums.PromotionPlaceholderFieldEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.enums.PromotionPlaceholderFieldEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v3.enums.PromotionPlaceholderFieldEnum.PromotionPlaceholderField={UNSPECIFIED:0,UNKNOWN:1,PROMOTION_TARGET:2,DISCOUNT_MODIFIER:3,PERCENT_OFF:4,MONEY_AMOUNT_OFF:5,PROMOTION_CODE:6,ORDERS_OVER_AMOUNT:7,PROMOTION_START:8,PROMOTION_END:9,OCCASION:10,FINAL_URLS:11,FINAL_MOBILE_URLS:12,TRACKING_URL:13,LANGUAGE:14,FINAL_URL_SUFFIX:15},goog.object.extend(exports,proto.google.ads.googleads.v3.enums);