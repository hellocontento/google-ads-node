var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v2_enums_geo_targeting_type_pb=require("../../../../../google/ads/googleads/v2/enums/geo_targeting_type_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.resources.GeographicView",null,global),proto.google.ads.googleads.v2.resources.GeographicView=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.resources.GeographicView,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.resources.GeographicView.displayName="proto.google.ads.googleads.v2.resources.GeographicView"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.resources.GeographicView.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.resources.GeographicView.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.resources.GeographicView.toObject=function(includeInstance,msg){var f,obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,""),locationType:jspb.Message.getFieldWithDefault(msg,3,0),countryCriterionId:(f=msg.getCountryCriterionId())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.resources.GeographicView.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.resources.GeographicView;return proto.google.ads.googleads.v2.resources.GeographicView.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.resources.GeographicView.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;case 3:value=reader.readEnum();msg.setLocationType(value);break;case 4:value=new google_protobuf_wrappers_pb.Int64Value;reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setCountryCriterionId(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v2.resources.GeographicView.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.resources.GeographicView.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.resources.GeographicView.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getResourceName()).length&&writer.writeString(1,f),0!==(f=message.getLocationType())&&writer.writeEnum(3,f),null!=(f=message.getCountryCriterionId())&&writer.writeMessage(4,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter)},proto.google.ads.googleads.v2.resources.GeographicView.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v2.resources.GeographicView.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v2.resources.GeographicView.prototype.getLocationType=function(){return jspb.Message.getFieldWithDefault(this,3,0)},proto.google.ads.googleads.v2.resources.GeographicView.prototype.setLocationType=function(value){jspb.Message.setProto3EnumField(this,3,value)},proto.google.ads.googleads.v2.resources.GeographicView.prototype.getCountryCriterionId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,4)},proto.google.ads.googleads.v2.resources.GeographicView.prototype.setCountryCriterionId=function(value){jspb.Message.setWrapperField(this,4,value)},proto.google.ads.googleads.v2.resources.GeographicView.prototype.clearCountryCriterionId=function(){this.setCountryCriterionId(void 0)},proto.google.ads.googleads.v2.resources.GeographicView.prototype.hasCountryCriterionId=function(){return null!=jspb.Message.getField(this,4)},goog.object.extend(exports,proto.google.ads.googleads.v2.resources);