var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v3_resources_ad_group_label_pb=require("../../../../../google/ads/googleads/v3/resources/ad_group_label_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js"),google_rpc_status_pb=require("../../../../../google/rpc/status_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.services.AdGroupLabelOperation",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.GetAdGroupLabelRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.MutateAdGroupLabelResult",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.MutateAdGroupLabelsRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.MutateAdGroupLabelsResponse",null,global),proto.google.ads.googleads.v3.services.GetAdGroupLabelRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.services.GetAdGroupLabelRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.GetAdGroupLabelRequest.displayName="proto.google.ads.googleads.v3.services.GetAdGroupLabelRequest"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.GetAdGroupLabelRequest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.GetAdGroupLabelRequest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.GetAdGroupLabelRequest.toObject=function(includeInstance,msg){var obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.GetAdGroupLabelRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.GetAdGroupLabelRequest;return proto.google.ads.googleads.v3.services.GetAdGroupLabelRequest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.GetAdGroupLabelRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v3.services.GetAdGroupLabelRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.GetAdGroupLabelRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.GetAdGroupLabelRequest.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getResourceName()).length&&writer.writeString(1,f)},proto.google.ads.googleads.v3.services.GetAdGroupLabelRequest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.services.GetAdGroupLabelRequest.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v3.services.MutateAdGroupLabelsRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v3.services.MutateAdGroupLabelsRequest.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v3.services.MutateAdGroupLabelsRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.MutateAdGroupLabelsRequest.displayName="proto.google.ads.googleads.v3.services.MutateAdGroupLabelsRequest"),proto.google.ads.googleads.v3.services.MutateAdGroupLabelsRequest.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.MutateAdGroupLabelsRequest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.MutateAdGroupLabelsRequest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.MutateAdGroupLabelsRequest.toObject=function(includeInstance,msg){var obj={customerId:jspb.Message.getFieldWithDefault(msg,1,""),operationsList:jspb.Message.toObjectList(msg.getOperationsList(),proto.google.ads.googleads.v3.services.AdGroupLabelOperation.toObject,includeInstance),partialFailure:jspb.Message.getFieldWithDefault(msg,3,!1),validateOnly:jspb.Message.getFieldWithDefault(msg,4,!1)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.MutateAdGroupLabelsRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.MutateAdGroupLabelsRequest;return proto.google.ads.googleads.v3.services.MutateAdGroupLabelsRequest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.MutateAdGroupLabelsRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setCustomerId(value);break;case 2:value=new proto.google.ads.googleads.v3.services.AdGroupLabelOperation,reader.readMessage(value,proto.google.ads.googleads.v3.services.AdGroupLabelOperation.deserializeBinaryFromReader),msg.addOperations(value);break;case 3:value=reader.readBool(),msg.setPartialFailure(value);break;case 4:value=reader.readBool(),msg.setValidateOnly(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v3.services.MutateAdGroupLabelsRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.MutateAdGroupLabelsRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.MutateAdGroupLabelsRequest.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getCustomerId()).length&&writer.writeString(1,f),0<(f=message.getOperationsList()).length&&writer.writeRepeatedMessage(2,f,proto.google.ads.googleads.v3.services.AdGroupLabelOperation.serializeBinaryToWriter),(f=message.getPartialFailure())&&writer.writeBool(3,f),(f=message.getValidateOnly())&&writer.writeBool(4,f)},proto.google.ads.googleads.v3.services.MutateAdGroupLabelsRequest.prototype.getCustomerId=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.services.MutateAdGroupLabelsRequest.prototype.setCustomerId=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v3.services.MutateAdGroupLabelsRequest.prototype.getOperationsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v3.services.AdGroupLabelOperation,2)},proto.google.ads.googleads.v3.services.MutateAdGroupLabelsRequest.prototype.setOperationsList=function(value){jspb.Message.setRepeatedWrapperField(this,2,value)},proto.google.ads.googleads.v3.services.MutateAdGroupLabelsRequest.prototype.addOperations=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,2,opt_value,proto.google.ads.googleads.v3.services.AdGroupLabelOperation,opt_index)},proto.google.ads.googleads.v3.services.MutateAdGroupLabelsRequest.prototype.clearOperationsList=function(){this.setOperationsList([])},proto.google.ads.googleads.v3.services.MutateAdGroupLabelsRequest.prototype.getPartialFailure=function(){return jspb.Message.getFieldWithDefault(this,3,!1)},proto.google.ads.googleads.v3.services.MutateAdGroupLabelsRequest.prototype.setPartialFailure=function(value){jspb.Message.setProto3BooleanField(this,3,value)},proto.google.ads.googleads.v3.services.MutateAdGroupLabelsRequest.prototype.getValidateOnly=function(){return jspb.Message.getFieldWithDefault(this,4,!1)},proto.google.ads.googleads.v3.services.MutateAdGroupLabelsRequest.prototype.setValidateOnly=function(value){jspb.Message.setProto3BooleanField(this,4,value)},proto.google.ads.googleads.v3.services.AdGroupLabelOperation=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,proto.google.ads.googleads.v3.services.AdGroupLabelOperation.oneofGroups_)},goog.inherits(proto.google.ads.googleads.v3.services.AdGroupLabelOperation,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.AdGroupLabelOperation.displayName="proto.google.ads.googleads.v3.services.AdGroupLabelOperation"),proto.google.ads.googleads.v3.services.AdGroupLabelOperation.oneofGroups_=[[1,2]],proto.google.ads.googleads.v3.services.AdGroupLabelOperation.OperationCase={OPERATION_NOT_SET:0,CREATE:1,REMOVE:2},proto.google.ads.googleads.v3.services.AdGroupLabelOperation.prototype.getOperationCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v3.services.AdGroupLabelOperation.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.AdGroupLabelOperation.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.AdGroupLabelOperation.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.AdGroupLabelOperation.toObject=function(includeInstance,msg){var f,obj={create:(f=msg.getCreate())&&google_ads_googleads_v3_resources_ad_group_label_pb.AdGroupLabel.toObject(includeInstance,f),remove:jspb.Message.getFieldWithDefault(msg,2,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.AdGroupLabelOperation.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.AdGroupLabelOperation;return proto.google.ads.googleads.v3.services.AdGroupLabelOperation.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.AdGroupLabelOperation.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=new google_ads_googleads_v3_resources_ad_group_label_pb.AdGroupLabel;reader.readMessage(value,google_ads_googleads_v3_resources_ad_group_label_pb.AdGroupLabel.deserializeBinaryFromReader),msg.setCreate(value);break;case 2:value=reader.readString(),msg.setRemove(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v3.services.AdGroupLabelOperation.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.AdGroupLabelOperation.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.AdGroupLabelOperation.serializeBinaryToWriter=function(message,writer){var f=void 0;null!=(f=message.getCreate())&&writer.writeMessage(1,f,google_ads_googleads_v3_resources_ad_group_label_pb.AdGroupLabel.serializeBinaryToWriter),null!=(f=jspb.Message.getField(message,2))&&writer.writeString(2,f)},proto.google.ads.googleads.v3.services.AdGroupLabelOperation.prototype.getCreate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v3_resources_ad_group_label_pb.AdGroupLabel,1)},proto.google.ads.googleads.v3.services.AdGroupLabelOperation.prototype.setCreate=function(value){jspb.Message.setOneofWrapperField(this,1,proto.google.ads.googleads.v3.services.AdGroupLabelOperation.oneofGroups_[0],value)},proto.google.ads.googleads.v3.services.AdGroupLabelOperation.prototype.clearCreate=function(){this.setCreate(void 0)},proto.google.ads.googleads.v3.services.AdGroupLabelOperation.prototype.hasCreate=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v3.services.AdGroupLabelOperation.prototype.getRemove=function(){return jspb.Message.getFieldWithDefault(this,2,"")},proto.google.ads.googleads.v3.services.AdGroupLabelOperation.prototype.setRemove=function(value){jspb.Message.setOneofField(this,2,proto.google.ads.googleads.v3.services.AdGroupLabelOperation.oneofGroups_[0],value)},proto.google.ads.googleads.v3.services.AdGroupLabelOperation.prototype.clearRemove=function(){jspb.Message.setOneofField(this,2,proto.google.ads.googleads.v3.services.AdGroupLabelOperation.oneofGroups_[0],void 0)},proto.google.ads.googleads.v3.services.AdGroupLabelOperation.prototype.hasRemove=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v3.services.MutateAdGroupLabelsResponse=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v3.services.MutateAdGroupLabelsResponse.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v3.services.MutateAdGroupLabelsResponse,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.MutateAdGroupLabelsResponse.displayName="proto.google.ads.googleads.v3.services.MutateAdGroupLabelsResponse"),proto.google.ads.googleads.v3.services.MutateAdGroupLabelsResponse.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.MutateAdGroupLabelsResponse.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.MutateAdGroupLabelsResponse.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.MutateAdGroupLabelsResponse.toObject=function(includeInstance,msg){var f,obj={partialFailureError:(f=msg.getPartialFailureError())&&google_rpc_status_pb.Status.toObject(includeInstance,f),resultsList:jspb.Message.toObjectList(msg.getResultsList(),proto.google.ads.googleads.v3.services.MutateAdGroupLabelResult.toObject,includeInstance)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.MutateAdGroupLabelsResponse.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.MutateAdGroupLabelsResponse;return proto.google.ads.googleads.v3.services.MutateAdGroupLabelsResponse.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.MutateAdGroupLabelsResponse.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 3:var value=new google_rpc_status_pb.Status;reader.readMessage(value,google_rpc_status_pb.Status.deserializeBinaryFromReader),msg.setPartialFailureError(value);break;case 2:value=new proto.google.ads.googleads.v3.services.MutateAdGroupLabelResult,reader.readMessage(value,proto.google.ads.googleads.v3.services.MutateAdGroupLabelResult.deserializeBinaryFromReader),msg.addResults(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v3.services.MutateAdGroupLabelsResponse.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.MutateAdGroupLabelsResponse.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.MutateAdGroupLabelsResponse.serializeBinaryToWriter=function(message,writer){var f=void 0;null!=(f=message.getPartialFailureError())&&writer.writeMessage(3,f,google_rpc_status_pb.Status.serializeBinaryToWriter),0<(f=message.getResultsList()).length&&writer.writeRepeatedMessage(2,f,proto.google.ads.googleads.v3.services.MutateAdGroupLabelResult.serializeBinaryToWriter)},proto.google.ads.googleads.v3.services.MutateAdGroupLabelsResponse.prototype.getPartialFailureError=function(){return jspb.Message.getWrapperField(this,google_rpc_status_pb.Status,3)},proto.google.ads.googleads.v3.services.MutateAdGroupLabelsResponse.prototype.setPartialFailureError=function(value){jspb.Message.setWrapperField(this,3,value)},proto.google.ads.googleads.v3.services.MutateAdGroupLabelsResponse.prototype.clearPartialFailureError=function(){this.setPartialFailureError(void 0)},proto.google.ads.googleads.v3.services.MutateAdGroupLabelsResponse.prototype.hasPartialFailureError=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v3.services.MutateAdGroupLabelsResponse.prototype.getResultsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v3.services.MutateAdGroupLabelResult,2)},proto.google.ads.googleads.v3.services.MutateAdGroupLabelsResponse.prototype.setResultsList=function(value){jspb.Message.setRepeatedWrapperField(this,2,value)},proto.google.ads.googleads.v3.services.MutateAdGroupLabelsResponse.prototype.addResults=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,2,opt_value,proto.google.ads.googleads.v3.services.MutateAdGroupLabelResult,opt_index)},proto.google.ads.googleads.v3.services.MutateAdGroupLabelsResponse.prototype.clearResultsList=function(){this.setResultsList([])},proto.google.ads.googleads.v3.services.MutateAdGroupLabelResult=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.services.MutateAdGroupLabelResult,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.MutateAdGroupLabelResult.displayName="proto.google.ads.googleads.v3.services.MutateAdGroupLabelResult"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.MutateAdGroupLabelResult.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.MutateAdGroupLabelResult.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.MutateAdGroupLabelResult.toObject=function(includeInstance,msg){var obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.MutateAdGroupLabelResult.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.MutateAdGroupLabelResult;return proto.google.ads.googleads.v3.services.MutateAdGroupLabelResult.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.MutateAdGroupLabelResult.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v3.services.MutateAdGroupLabelResult.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.MutateAdGroupLabelResult.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.MutateAdGroupLabelResult.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getResourceName()).length&&writer.writeString(1,f)},proto.google.ads.googleads.v3.services.MutateAdGroupLabelResult.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.services.MutateAdGroupLabelResult.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},goog.object.extend(exports,proto.google.ads.googleads.v3.services);