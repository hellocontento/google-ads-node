var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.enums.AccessReasonEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v2.enums.AccessReasonEnum.AccessReason",null,global),proto.google.ads.googleads.v2.enums.AccessReasonEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.enums.AccessReasonEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.enums.AccessReasonEnum.displayName="proto.google.ads.googleads.v2.enums.AccessReasonEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.enums.AccessReasonEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.enums.AccessReasonEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.enums.AccessReasonEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.enums.AccessReasonEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.enums.AccessReasonEnum;return proto.google.ads.googleads.v2.enums.AccessReasonEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.enums.AccessReasonEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v2.enums.AccessReasonEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.enums.AccessReasonEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.enums.AccessReasonEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v2.enums.AccessReasonEnum.AccessReason={UNSPECIFIED:0,UNKNOWN:1,OWNED:2,SHARED:3,LICENSED:4,SUBSCRIBED:5,AFFILIATED:6},goog.object.extend(exports,proto.google.ads.googleads.v2.enums);