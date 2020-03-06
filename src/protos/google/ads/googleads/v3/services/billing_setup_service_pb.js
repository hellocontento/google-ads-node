var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v3_resources_billing_setup_pb=require("../../../../../google/ads/googleads/v3/resources/billing_setup_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.services.BillingSetupOperation",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.GetBillingSetupRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.MutateBillingSetupRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.MutateBillingSetupResponse",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.MutateBillingSetupResult",null,global),proto.google.ads.googleads.v3.services.GetBillingSetupRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.services.GetBillingSetupRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.GetBillingSetupRequest.displayName="proto.google.ads.googleads.v3.services.GetBillingSetupRequest"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.GetBillingSetupRequest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.GetBillingSetupRequest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.GetBillingSetupRequest.toObject=function(includeInstance,msg){var obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.GetBillingSetupRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.GetBillingSetupRequest;return proto.google.ads.googleads.v3.services.GetBillingSetupRequest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.GetBillingSetupRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v3.services.GetBillingSetupRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.GetBillingSetupRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.GetBillingSetupRequest.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getResourceName()).length&&writer.writeString(1,f)},proto.google.ads.googleads.v3.services.GetBillingSetupRequest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.services.GetBillingSetupRequest.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v3.services.MutateBillingSetupRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.services.MutateBillingSetupRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.MutateBillingSetupRequest.displayName="proto.google.ads.googleads.v3.services.MutateBillingSetupRequest"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.MutateBillingSetupRequest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.MutateBillingSetupRequest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.MutateBillingSetupRequest.toObject=function(includeInstance,msg){var f,obj={customerId:jspb.Message.getFieldWithDefault(msg,1,""),operation:(f=msg.getOperation())&&proto.google.ads.googleads.v3.services.BillingSetupOperation.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.MutateBillingSetupRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.MutateBillingSetupRequest;return proto.google.ads.googleads.v3.services.MutateBillingSetupRequest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.MutateBillingSetupRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setCustomerId(value);break;case 2:value=new proto.google.ads.googleads.v3.services.BillingSetupOperation,reader.readMessage(value,proto.google.ads.googleads.v3.services.BillingSetupOperation.deserializeBinaryFromReader),msg.setOperation(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v3.services.MutateBillingSetupRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.MutateBillingSetupRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.MutateBillingSetupRequest.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getCustomerId()).length&&writer.writeString(1,f),null!=(f=message.getOperation())&&writer.writeMessage(2,f,proto.google.ads.googleads.v3.services.BillingSetupOperation.serializeBinaryToWriter)},proto.google.ads.googleads.v3.services.MutateBillingSetupRequest.prototype.getCustomerId=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.services.MutateBillingSetupRequest.prototype.setCustomerId=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v3.services.MutateBillingSetupRequest.prototype.getOperation=function(){return jspb.Message.getWrapperField(this,proto.google.ads.googleads.v3.services.BillingSetupOperation,2)},proto.google.ads.googleads.v3.services.MutateBillingSetupRequest.prototype.setOperation=function(value){jspb.Message.setWrapperField(this,2,value)},proto.google.ads.googleads.v3.services.MutateBillingSetupRequest.prototype.clearOperation=function(){this.setOperation(void 0)},proto.google.ads.googleads.v3.services.MutateBillingSetupRequest.prototype.hasOperation=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v3.services.BillingSetupOperation=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,proto.google.ads.googleads.v3.services.BillingSetupOperation.oneofGroups_)},goog.inherits(proto.google.ads.googleads.v3.services.BillingSetupOperation,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.BillingSetupOperation.displayName="proto.google.ads.googleads.v3.services.BillingSetupOperation"),proto.google.ads.googleads.v3.services.BillingSetupOperation.oneofGroups_=[[2,1]],proto.google.ads.googleads.v3.services.BillingSetupOperation.OperationCase={OPERATION_NOT_SET:0,CREATE:2,REMOVE:1},proto.google.ads.googleads.v3.services.BillingSetupOperation.prototype.getOperationCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v3.services.BillingSetupOperation.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.BillingSetupOperation.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.BillingSetupOperation.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.BillingSetupOperation.toObject=function(includeInstance,msg){var f,obj={create:(f=msg.getCreate())&&google_ads_googleads_v3_resources_billing_setup_pb.BillingSetup.toObject(includeInstance,f),remove:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.BillingSetupOperation.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.BillingSetupOperation;return proto.google.ads.googleads.v3.services.BillingSetupOperation.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.BillingSetupOperation.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 2:var value=new google_ads_googleads_v3_resources_billing_setup_pb.BillingSetup;reader.readMessage(value,google_ads_googleads_v3_resources_billing_setup_pb.BillingSetup.deserializeBinaryFromReader),msg.setCreate(value);break;case 1:value=reader.readString(),msg.setRemove(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v3.services.BillingSetupOperation.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.BillingSetupOperation.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.BillingSetupOperation.serializeBinaryToWriter=function(message,writer){var f=void 0;null!=(f=message.getCreate())&&writer.writeMessage(2,f,google_ads_googleads_v3_resources_billing_setup_pb.BillingSetup.serializeBinaryToWriter),null!=(f=jspb.Message.getField(message,1))&&writer.writeString(1,f)},proto.google.ads.googleads.v3.services.BillingSetupOperation.prototype.getCreate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v3_resources_billing_setup_pb.BillingSetup,2)},proto.google.ads.googleads.v3.services.BillingSetupOperation.prototype.setCreate=function(value){jspb.Message.setOneofWrapperField(this,2,proto.google.ads.googleads.v3.services.BillingSetupOperation.oneofGroups_[0],value)},proto.google.ads.googleads.v3.services.BillingSetupOperation.prototype.clearCreate=function(){this.setCreate(void 0)},proto.google.ads.googleads.v3.services.BillingSetupOperation.prototype.hasCreate=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v3.services.BillingSetupOperation.prototype.getRemove=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.services.BillingSetupOperation.prototype.setRemove=function(value){jspb.Message.setOneofField(this,1,proto.google.ads.googleads.v3.services.BillingSetupOperation.oneofGroups_[0],value)},proto.google.ads.googleads.v3.services.BillingSetupOperation.prototype.clearRemove=function(){jspb.Message.setOneofField(this,1,proto.google.ads.googleads.v3.services.BillingSetupOperation.oneofGroups_[0],void 0)},proto.google.ads.googleads.v3.services.BillingSetupOperation.prototype.hasRemove=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v3.services.MutateBillingSetupResponse=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.services.MutateBillingSetupResponse,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.MutateBillingSetupResponse.displayName="proto.google.ads.googleads.v3.services.MutateBillingSetupResponse"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.MutateBillingSetupResponse.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.MutateBillingSetupResponse.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.MutateBillingSetupResponse.toObject=function(includeInstance,msg){var f,obj={result:(f=msg.getResult())&&proto.google.ads.googleads.v3.services.MutateBillingSetupResult.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.MutateBillingSetupResponse.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.MutateBillingSetupResponse;return proto.google.ads.googleads.v3.services.MutateBillingSetupResponse.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.MutateBillingSetupResponse.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=new proto.google.ads.googleads.v3.services.MutateBillingSetupResult;reader.readMessage(value,proto.google.ads.googleads.v3.services.MutateBillingSetupResult.deserializeBinaryFromReader),msg.setResult(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v3.services.MutateBillingSetupResponse.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.MutateBillingSetupResponse.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.MutateBillingSetupResponse.serializeBinaryToWriter=function(message,writer){var f;null!=(f=message.getResult())&&writer.writeMessage(1,f,proto.google.ads.googleads.v3.services.MutateBillingSetupResult.serializeBinaryToWriter)},proto.google.ads.googleads.v3.services.MutateBillingSetupResponse.prototype.getResult=function(){return jspb.Message.getWrapperField(this,proto.google.ads.googleads.v3.services.MutateBillingSetupResult,1)},proto.google.ads.googleads.v3.services.MutateBillingSetupResponse.prototype.setResult=function(value){jspb.Message.setWrapperField(this,1,value)},proto.google.ads.googleads.v3.services.MutateBillingSetupResponse.prototype.clearResult=function(){this.setResult(void 0)},proto.google.ads.googleads.v3.services.MutateBillingSetupResponse.prototype.hasResult=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v3.services.MutateBillingSetupResult=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.services.MutateBillingSetupResult,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.MutateBillingSetupResult.displayName="proto.google.ads.googleads.v3.services.MutateBillingSetupResult"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.MutateBillingSetupResult.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.MutateBillingSetupResult.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.MutateBillingSetupResult.toObject=function(includeInstance,msg){var obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.MutateBillingSetupResult.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.MutateBillingSetupResult;return proto.google.ads.googleads.v3.services.MutateBillingSetupResult.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.MutateBillingSetupResult.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v3.services.MutateBillingSetupResult.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.MutateBillingSetupResult.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.MutateBillingSetupResult.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getResourceName()).length&&writer.writeString(1,f)},proto.google.ads.googleads.v3.services.MutateBillingSetupResult.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.services.MutateBillingSetupResult.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},goog.object.extend(exports,proto.google.ads.googleads.v3.services);