var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v3_resources_campaign_budget_pb=require("../../../../../google/ads/googleads/v3/resources/campaign_budget_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js"),google_protobuf_field_mask_pb=require("google-protobuf/google/protobuf/field_mask_pb.js"),google_rpc_status_pb=require("../../../../../google/rpc/status_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.services.CampaignBudgetOperation",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.GetCampaignBudgetRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.MutateCampaignBudgetResult",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.MutateCampaignBudgetsRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.MutateCampaignBudgetsResponse",null,global),proto.google.ads.googleads.v3.services.GetCampaignBudgetRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.services.GetCampaignBudgetRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.GetCampaignBudgetRequest.displayName="proto.google.ads.googleads.v3.services.GetCampaignBudgetRequest"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.GetCampaignBudgetRequest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.GetCampaignBudgetRequest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.GetCampaignBudgetRequest.toObject=function(includeInstance,msg){var obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.GetCampaignBudgetRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.GetCampaignBudgetRequest;return proto.google.ads.googleads.v3.services.GetCampaignBudgetRequest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.GetCampaignBudgetRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v3.services.GetCampaignBudgetRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.GetCampaignBudgetRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.GetCampaignBudgetRequest.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getResourceName()).length&&writer.writeString(1,f)},proto.google.ads.googleads.v3.services.GetCampaignBudgetRequest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.services.GetCampaignBudgetRequest.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v3.services.MutateCampaignBudgetsRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v3.services.MutateCampaignBudgetsRequest.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v3.services.MutateCampaignBudgetsRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.MutateCampaignBudgetsRequest.displayName="proto.google.ads.googleads.v3.services.MutateCampaignBudgetsRequest"),proto.google.ads.googleads.v3.services.MutateCampaignBudgetsRequest.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.MutateCampaignBudgetsRequest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.MutateCampaignBudgetsRequest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.MutateCampaignBudgetsRequest.toObject=function(includeInstance,msg){var obj={customerId:jspb.Message.getFieldWithDefault(msg,1,""),operationsList:jspb.Message.toObjectList(msg.getOperationsList(),proto.google.ads.googleads.v3.services.CampaignBudgetOperation.toObject,includeInstance),partialFailure:jspb.Message.getFieldWithDefault(msg,3,!1),validateOnly:jspb.Message.getFieldWithDefault(msg,4,!1)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.MutateCampaignBudgetsRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.MutateCampaignBudgetsRequest;return proto.google.ads.googleads.v3.services.MutateCampaignBudgetsRequest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.MutateCampaignBudgetsRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setCustomerId(value);break;case 2:value=new proto.google.ads.googleads.v3.services.CampaignBudgetOperation,reader.readMessage(value,proto.google.ads.googleads.v3.services.CampaignBudgetOperation.deserializeBinaryFromReader),msg.addOperations(value);break;case 3:value=reader.readBool(),msg.setPartialFailure(value);break;case 4:value=reader.readBool(),msg.setValidateOnly(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v3.services.MutateCampaignBudgetsRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.MutateCampaignBudgetsRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.MutateCampaignBudgetsRequest.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getCustomerId()).length&&writer.writeString(1,f),0<(f=message.getOperationsList()).length&&writer.writeRepeatedMessage(2,f,proto.google.ads.googleads.v3.services.CampaignBudgetOperation.serializeBinaryToWriter),(f=message.getPartialFailure())&&writer.writeBool(3,f),(f=message.getValidateOnly())&&writer.writeBool(4,f)},proto.google.ads.googleads.v3.services.MutateCampaignBudgetsRequest.prototype.getCustomerId=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.services.MutateCampaignBudgetsRequest.prototype.setCustomerId=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v3.services.MutateCampaignBudgetsRequest.prototype.getOperationsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v3.services.CampaignBudgetOperation,2)},proto.google.ads.googleads.v3.services.MutateCampaignBudgetsRequest.prototype.setOperationsList=function(value){jspb.Message.setRepeatedWrapperField(this,2,value)},proto.google.ads.googleads.v3.services.MutateCampaignBudgetsRequest.prototype.addOperations=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,2,opt_value,proto.google.ads.googleads.v3.services.CampaignBudgetOperation,opt_index)},proto.google.ads.googleads.v3.services.MutateCampaignBudgetsRequest.prototype.clearOperationsList=function(){this.setOperationsList([])},proto.google.ads.googleads.v3.services.MutateCampaignBudgetsRequest.prototype.getPartialFailure=function(){return jspb.Message.getFieldWithDefault(this,3,!1)},proto.google.ads.googleads.v3.services.MutateCampaignBudgetsRequest.prototype.setPartialFailure=function(value){jspb.Message.setProto3BooleanField(this,3,value)},proto.google.ads.googleads.v3.services.MutateCampaignBudgetsRequest.prototype.getValidateOnly=function(){return jspb.Message.getFieldWithDefault(this,4,!1)},proto.google.ads.googleads.v3.services.MutateCampaignBudgetsRequest.prototype.setValidateOnly=function(value){jspb.Message.setProto3BooleanField(this,4,value)},proto.google.ads.googleads.v3.services.CampaignBudgetOperation=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,proto.google.ads.googleads.v3.services.CampaignBudgetOperation.oneofGroups_)},goog.inherits(proto.google.ads.googleads.v3.services.CampaignBudgetOperation,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.CampaignBudgetOperation.displayName="proto.google.ads.googleads.v3.services.CampaignBudgetOperation"),proto.google.ads.googleads.v3.services.CampaignBudgetOperation.oneofGroups_=[[1,2,3]],proto.google.ads.googleads.v3.services.CampaignBudgetOperation.OperationCase={OPERATION_NOT_SET:0,CREATE:1,UPDATE:2,REMOVE:3},proto.google.ads.googleads.v3.services.CampaignBudgetOperation.prototype.getOperationCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v3.services.CampaignBudgetOperation.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.CampaignBudgetOperation.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.CampaignBudgetOperation.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.CampaignBudgetOperation.toObject=function(includeInstance,msg){var f,obj={updateMask:(f=msg.getUpdateMask())&&google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance,f),create:(f=msg.getCreate())&&google_ads_googleads_v3_resources_campaign_budget_pb.CampaignBudget.toObject(includeInstance,f),update:(f=msg.getUpdate())&&google_ads_googleads_v3_resources_campaign_budget_pb.CampaignBudget.toObject(includeInstance,f),remove:jspb.Message.getFieldWithDefault(msg,3,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.CampaignBudgetOperation.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.CampaignBudgetOperation;return proto.google.ads.googleads.v3.services.CampaignBudgetOperation.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.CampaignBudgetOperation.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 4:var value=new google_protobuf_field_mask_pb.FieldMask;reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader),msg.setUpdateMask(value);break;case 1:value=new google_ads_googleads_v3_resources_campaign_budget_pb.CampaignBudget,reader.readMessage(value,google_ads_googleads_v3_resources_campaign_budget_pb.CampaignBudget.deserializeBinaryFromReader),msg.setCreate(value);break;case 2:value=new google_ads_googleads_v3_resources_campaign_budget_pb.CampaignBudget,reader.readMessage(value,google_ads_googleads_v3_resources_campaign_budget_pb.CampaignBudget.deserializeBinaryFromReader),msg.setUpdate(value);break;case 3:value=reader.readString(),msg.setRemove(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v3.services.CampaignBudgetOperation.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.CampaignBudgetOperation.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.CampaignBudgetOperation.serializeBinaryToWriter=function(message,writer){var f=void 0;null!=(f=message.getUpdateMask())&&writer.writeMessage(4,f,google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter),null!=(f=message.getCreate())&&writer.writeMessage(1,f,google_ads_googleads_v3_resources_campaign_budget_pb.CampaignBudget.serializeBinaryToWriter),null!=(f=message.getUpdate())&&writer.writeMessage(2,f,google_ads_googleads_v3_resources_campaign_budget_pb.CampaignBudget.serializeBinaryToWriter),null!=(f=jspb.Message.getField(message,3))&&writer.writeString(3,f)},proto.google.ads.googleads.v3.services.CampaignBudgetOperation.prototype.getUpdateMask=function(){return jspb.Message.getWrapperField(this,google_protobuf_field_mask_pb.FieldMask,4)},proto.google.ads.googleads.v3.services.CampaignBudgetOperation.prototype.setUpdateMask=function(value){jspb.Message.setWrapperField(this,4,value)},proto.google.ads.googleads.v3.services.CampaignBudgetOperation.prototype.clearUpdateMask=function(){this.setUpdateMask(void 0)},proto.google.ads.googleads.v3.services.CampaignBudgetOperation.prototype.hasUpdateMask=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v3.services.CampaignBudgetOperation.prototype.getCreate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v3_resources_campaign_budget_pb.CampaignBudget,1)},proto.google.ads.googleads.v3.services.CampaignBudgetOperation.prototype.setCreate=function(value){jspb.Message.setOneofWrapperField(this,1,proto.google.ads.googleads.v3.services.CampaignBudgetOperation.oneofGroups_[0],value)},proto.google.ads.googleads.v3.services.CampaignBudgetOperation.prototype.clearCreate=function(){this.setCreate(void 0)},proto.google.ads.googleads.v3.services.CampaignBudgetOperation.prototype.hasCreate=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v3.services.CampaignBudgetOperation.prototype.getUpdate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v3_resources_campaign_budget_pb.CampaignBudget,2)},proto.google.ads.googleads.v3.services.CampaignBudgetOperation.prototype.setUpdate=function(value){jspb.Message.setOneofWrapperField(this,2,proto.google.ads.googleads.v3.services.CampaignBudgetOperation.oneofGroups_[0],value)},proto.google.ads.googleads.v3.services.CampaignBudgetOperation.prototype.clearUpdate=function(){this.setUpdate(void 0)},proto.google.ads.googleads.v3.services.CampaignBudgetOperation.prototype.hasUpdate=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v3.services.CampaignBudgetOperation.prototype.getRemove=function(){return jspb.Message.getFieldWithDefault(this,3,"")},proto.google.ads.googleads.v3.services.CampaignBudgetOperation.prototype.setRemove=function(value){jspb.Message.setOneofField(this,3,proto.google.ads.googleads.v3.services.CampaignBudgetOperation.oneofGroups_[0],value)},proto.google.ads.googleads.v3.services.CampaignBudgetOperation.prototype.clearRemove=function(){jspb.Message.setOneofField(this,3,proto.google.ads.googleads.v3.services.CampaignBudgetOperation.oneofGroups_[0],void 0)},proto.google.ads.googleads.v3.services.CampaignBudgetOperation.prototype.hasRemove=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v3.services.MutateCampaignBudgetsResponse=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v3.services.MutateCampaignBudgetsResponse.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v3.services.MutateCampaignBudgetsResponse,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.MutateCampaignBudgetsResponse.displayName="proto.google.ads.googleads.v3.services.MutateCampaignBudgetsResponse"),proto.google.ads.googleads.v3.services.MutateCampaignBudgetsResponse.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.MutateCampaignBudgetsResponse.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.MutateCampaignBudgetsResponse.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.MutateCampaignBudgetsResponse.toObject=function(includeInstance,msg){var f,obj={partialFailureError:(f=msg.getPartialFailureError())&&google_rpc_status_pb.Status.toObject(includeInstance,f),resultsList:jspb.Message.toObjectList(msg.getResultsList(),proto.google.ads.googleads.v3.services.MutateCampaignBudgetResult.toObject,includeInstance)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.MutateCampaignBudgetsResponse.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.MutateCampaignBudgetsResponse;return proto.google.ads.googleads.v3.services.MutateCampaignBudgetsResponse.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.MutateCampaignBudgetsResponse.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 3:var value=new google_rpc_status_pb.Status;reader.readMessage(value,google_rpc_status_pb.Status.deserializeBinaryFromReader),msg.setPartialFailureError(value);break;case 2:value=new proto.google.ads.googleads.v3.services.MutateCampaignBudgetResult,reader.readMessage(value,proto.google.ads.googleads.v3.services.MutateCampaignBudgetResult.deserializeBinaryFromReader),msg.addResults(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v3.services.MutateCampaignBudgetsResponse.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.MutateCampaignBudgetsResponse.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.MutateCampaignBudgetsResponse.serializeBinaryToWriter=function(message,writer){var f=void 0;null!=(f=message.getPartialFailureError())&&writer.writeMessage(3,f,google_rpc_status_pb.Status.serializeBinaryToWriter),0<(f=message.getResultsList()).length&&writer.writeRepeatedMessage(2,f,proto.google.ads.googleads.v3.services.MutateCampaignBudgetResult.serializeBinaryToWriter)},proto.google.ads.googleads.v3.services.MutateCampaignBudgetsResponse.prototype.getPartialFailureError=function(){return jspb.Message.getWrapperField(this,google_rpc_status_pb.Status,3)},proto.google.ads.googleads.v3.services.MutateCampaignBudgetsResponse.prototype.setPartialFailureError=function(value){jspb.Message.setWrapperField(this,3,value)},proto.google.ads.googleads.v3.services.MutateCampaignBudgetsResponse.prototype.clearPartialFailureError=function(){this.setPartialFailureError(void 0)},proto.google.ads.googleads.v3.services.MutateCampaignBudgetsResponse.prototype.hasPartialFailureError=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v3.services.MutateCampaignBudgetsResponse.prototype.getResultsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v3.services.MutateCampaignBudgetResult,2)},proto.google.ads.googleads.v3.services.MutateCampaignBudgetsResponse.prototype.setResultsList=function(value){jspb.Message.setRepeatedWrapperField(this,2,value)},proto.google.ads.googleads.v3.services.MutateCampaignBudgetsResponse.prototype.addResults=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,2,opt_value,proto.google.ads.googleads.v3.services.MutateCampaignBudgetResult,opt_index)},proto.google.ads.googleads.v3.services.MutateCampaignBudgetsResponse.prototype.clearResultsList=function(){this.setResultsList([])},proto.google.ads.googleads.v3.services.MutateCampaignBudgetResult=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.services.MutateCampaignBudgetResult,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.MutateCampaignBudgetResult.displayName="proto.google.ads.googleads.v3.services.MutateCampaignBudgetResult"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.MutateCampaignBudgetResult.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.MutateCampaignBudgetResult.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.MutateCampaignBudgetResult.toObject=function(includeInstance,msg){var obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.MutateCampaignBudgetResult.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.MutateCampaignBudgetResult;return proto.google.ads.googleads.v3.services.MutateCampaignBudgetResult.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.MutateCampaignBudgetResult.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v3.services.MutateCampaignBudgetResult.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.MutateCampaignBudgetResult.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.MutateCampaignBudgetResult.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getResourceName()).length&&writer.writeString(1,f)},proto.google.ads.googleads.v3.services.MutateCampaignBudgetResult.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.services.MutateCampaignBudgetResult.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},goog.object.extend(exports,proto.google.ads.googleads.v3.services);