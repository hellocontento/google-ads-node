var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.enums.FeedItemStatusEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v2.enums.FeedItemStatusEnum.FeedItemStatus",null,global),proto.google.ads.googleads.v2.enums.FeedItemStatusEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.enums.FeedItemStatusEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.enums.FeedItemStatusEnum.displayName="proto.google.ads.googleads.v2.enums.FeedItemStatusEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.enums.FeedItemStatusEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.enums.FeedItemStatusEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.enums.FeedItemStatusEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.enums.FeedItemStatusEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.enums.FeedItemStatusEnum;return proto.google.ads.googleads.v2.enums.FeedItemStatusEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.enums.FeedItemStatusEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v2.enums.FeedItemStatusEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.enums.FeedItemStatusEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.enums.FeedItemStatusEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v2.enums.FeedItemStatusEnum.FeedItemStatus={UNSPECIFIED:0,UNKNOWN:1,ENABLED:2,REMOVED:3},goog.object.extend(exports,proto.google.ads.googleads.v2.enums);