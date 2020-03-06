var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_resource_pb=require("../../../../../google/api/resource_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.resources.AdGroupCriterionLabel",null,global),proto.google.ads.googleads.v3.resources.AdGroupCriterionLabel=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.resources.AdGroupCriterionLabel,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.resources.AdGroupCriterionLabel.displayName="proto.google.ads.googleads.v3.resources.AdGroupCriterionLabel"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.resources.AdGroupCriterionLabel.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.resources.AdGroupCriterionLabel.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.resources.AdGroupCriterionLabel.toObject=function(includeInstance,msg){var f,obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,""),adGroupCriterion:(f=msg.getAdGroupCriterion())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),label:(f=msg.getLabel())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.resources.AdGroupCriterionLabel.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.resources.AdGroupCriterionLabel;return proto.google.ads.googleads.v3.resources.AdGroupCriterionLabel.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.resources.AdGroupCriterionLabel.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;case 2:value=new google_protobuf_wrappers_pb.StringValue,reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setAdGroupCriterion(value);break;case 3:value=new google_protobuf_wrappers_pb.StringValue,reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setLabel(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v3.resources.AdGroupCriterionLabel.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.resources.AdGroupCriterionLabel.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.resources.AdGroupCriterionLabel.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getResourceName()).length&&writer.writeString(1,f),null!=(f=message.getAdGroupCriterion())&&writer.writeMessage(2,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getLabel())&&writer.writeMessage(3,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter)},proto.google.ads.googleads.v3.resources.AdGroupCriterionLabel.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.resources.AdGroupCriterionLabel.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v3.resources.AdGroupCriterionLabel.prototype.getAdGroupCriterion=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,2)},proto.google.ads.googleads.v3.resources.AdGroupCriterionLabel.prototype.setAdGroupCriterion=function(value){jspb.Message.setWrapperField(this,2,value)},proto.google.ads.googleads.v3.resources.AdGroupCriterionLabel.prototype.clearAdGroupCriterion=function(){this.setAdGroupCriterion(void 0)},proto.google.ads.googleads.v3.resources.AdGroupCriterionLabel.prototype.hasAdGroupCriterion=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v3.resources.AdGroupCriterionLabel.prototype.getLabel=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,3)},proto.google.ads.googleads.v3.resources.AdGroupCriterionLabel.prototype.setLabel=function(value){jspb.Message.setWrapperField(this,3,value)},proto.google.ads.googleads.v3.resources.AdGroupCriterionLabel.prototype.clearLabel=function(){this.setLabel(void 0)},proto.google.ads.googleads.v3.resources.AdGroupCriterionLabel.prototype.hasLabel=function(){return null!=jspb.Message.getField(this,3)},goog.object.extend(exports,proto.google.ads.googleads.v3.resources);