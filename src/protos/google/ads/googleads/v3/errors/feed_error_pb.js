var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.errors.FeedErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.errors.FeedErrorEnum.FeedError",null,global),proto.google.ads.googleads.v3.errors.FeedErrorEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.errors.FeedErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.errors.FeedErrorEnum.displayName="proto.google.ads.googleads.v3.errors.FeedErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.errors.FeedErrorEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.errors.FeedErrorEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.errors.FeedErrorEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.errors.FeedErrorEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.errors.FeedErrorEnum;return proto.google.ads.googleads.v3.errors.FeedErrorEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.errors.FeedErrorEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)reader.getFieldNumber(),reader.skipField();return msg},proto.google.ads.googleads.v3.errors.FeedErrorEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.errors.FeedErrorEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.errors.FeedErrorEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v3.errors.FeedErrorEnum.FeedError={UNSPECIFIED:0,UNKNOWN:1,ATTRIBUTE_NAMES_NOT_UNIQUE:2,ATTRIBUTES_DO_NOT_MATCH_EXISTING_ATTRIBUTES:3,CANNOT_SPECIFY_USER_ORIGIN_FOR_SYSTEM_FEED:4,CANNOT_SPECIFY_GOOGLE_ORIGIN_FOR_NON_SYSTEM_FEED:5,CANNOT_SPECIFY_FEED_ATTRIBUTES_FOR_SYSTEM_FEED:6,CANNOT_UPDATE_FEED_ATTRIBUTES_WITH_ORIGIN_GOOGLE:7,FEED_REMOVED:8,INVALID_ORIGIN_VALUE:9,FEED_ORIGIN_IS_NOT_USER:10,INVALID_AUTH_TOKEN_FOR_EMAIL:11,INVALID_EMAIL:12,DUPLICATE_FEED_NAME:13,INVALID_FEED_NAME:14,MISSING_OAUTH_INFO:15,NEW_ATTRIBUTE_CANNOT_BE_PART_OF_UNIQUE_KEY:16,TOO_MANY_ATTRIBUTES:17,INVALID_BUSINESS_ACCOUNT:18,BUSINESS_ACCOUNT_CANNOT_ACCESS_LOCATION_ACCOUNT:19,INVALID_AFFILIATE_CHAIN_ID:20,DUPLICATE_SYSTEM_FEED:21,GMB_ACCESS_ERROR:22,CANNOT_HAVE_LOCATION_AND_AFFILIATE_LOCATION_FEEDS:23},goog.object.extend(exports,proto.google.ads.googleads.v3.errors);