var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.enums.UserListCombinedRuleOperatorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.enums.UserListCombinedRuleOperatorEnum.UserListCombinedRuleOperator",null,global),proto.google.ads.googleads.v3.enums.UserListCombinedRuleOperatorEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.enums.UserListCombinedRuleOperatorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.enums.UserListCombinedRuleOperatorEnum.displayName="proto.google.ads.googleads.v3.enums.UserListCombinedRuleOperatorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.enums.UserListCombinedRuleOperatorEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.enums.UserListCombinedRuleOperatorEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.enums.UserListCombinedRuleOperatorEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.enums.UserListCombinedRuleOperatorEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.enums.UserListCombinedRuleOperatorEnum;return proto.google.ads.googleads.v3.enums.UserListCombinedRuleOperatorEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.enums.UserListCombinedRuleOperatorEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)reader.getFieldNumber(),reader.skipField();return msg},proto.google.ads.googleads.v3.enums.UserListCombinedRuleOperatorEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.enums.UserListCombinedRuleOperatorEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.enums.UserListCombinedRuleOperatorEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v3.enums.UserListCombinedRuleOperatorEnum.UserListCombinedRuleOperator={UNSPECIFIED:0,UNKNOWN:1,AND:2,AND_NOT:3},goog.object.extend(exports,proto.google.ads.googleads.v3.enums);