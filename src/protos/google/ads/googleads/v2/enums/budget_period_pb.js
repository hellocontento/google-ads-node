var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.enums.BudgetPeriodEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v2.enums.BudgetPeriodEnum.BudgetPeriod",null,global),proto.google.ads.googleads.v2.enums.BudgetPeriodEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.enums.BudgetPeriodEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.enums.BudgetPeriodEnum.displayName="proto.google.ads.googleads.v2.enums.BudgetPeriodEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.enums.BudgetPeriodEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.enums.BudgetPeriodEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.enums.BudgetPeriodEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.enums.BudgetPeriodEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.enums.BudgetPeriodEnum;return proto.google.ads.googleads.v2.enums.BudgetPeriodEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.enums.BudgetPeriodEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v2.enums.BudgetPeriodEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.enums.BudgetPeriodEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.enums.BudgetPeriodEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v2.enums.BudgetPeriodEnum.BudgetPeriod={UNSPECIFIED:0,UNKNOWN:1,DAILY:2,CUSTOM:3,FIXED_DAILY:4},goog.object.extend(exports,proto.google.ads.googleads.v2.enums);