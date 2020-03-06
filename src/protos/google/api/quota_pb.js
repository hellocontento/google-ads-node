var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")();goog.exportSymbol("proto.google.api.MetricRule",null,global),goog.exportSymbol("proto.google.api.Quota",null,global),goog.exportSymbol("proto.google.api.QuotaLimit",null,global),proto.google.api.Quota=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.api.Quota.repeatedFields_,null)},goog.inherits(proto.google.api.Quota,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.api.Quota.displayName="proto.google.api.Quota"),proto.google.api.Quota.repeatedFields_=[3,4],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.api.Quota.prototype.toObject=function(opt_includeInstance){return proto.google.api.Quota.toObject(opt_includeInstance,this)},proto.google.api.Quota.toObject=function(includeInstance,msg){var obj={limitsList:jspb.Message.toObjectList(msg.getLimitsList(),proto.google.api.QuotaLimit.toObject,includeInstance),metricRulesList:jspb.Message.toObjectList(msg.getMetricRulesList(),proto.google.api.MetricRule.toObject,includeInstance)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.api.Quota.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.api.Quota;return proto.google.api.Quota.deserializeBinaryFromReader(msg,reader)},proto.google.api.Quota.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 3:var value=new proto.google.api.QuotaLimit;reader.readMessage(value,proto.google.api.QuotaLimit.deserializeBinaryFromReader),msg.addLimits(value);break;case 4:value=new proto.google.api.MetricRule,reader.readMessage(value,proto.google.api.MetricRule.deserializeBinaryFromReader),msg.addMetricRules(value);break;default:reader.skipField()}return msg},proto.google.api.Quota.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.api.Quota.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.api.Quota.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getLimitsList()).length&&writer.writeRepeatedMessage(3,f,proto.google.api.QuotaLimit.serializeBinaryToWriter),0<(f=message.getMetricRulesList()).length&&writer.writeRepeatedMessage(4,f,proto.google.api.MetricRule.serializeBinaryToWriter)},proto.google.api.Quota.prototype.getLimitsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.api.QuotaLimit,3)},proto.google.api.Quota.prototype.setLimitsList=function(value){jspb.Message.setRepeatedWrapperField(this,3,value)},proto.google.api.Quota.prototype.addLimits=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,3,opt_value,proto.google.api.QuotaLimit,opt_index)},proto.google.api.Quota.prototype.clearLimitsList=function(){this.setLimitsList([])},proto.google.api.Quota.prototype.getMetricRulesList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.api.MetricRule,4)},proto.google.api.Quota.prototype.setMetricRulesList=function(value){jspb.Message.setRepeatedWrapperField(this,4,value)},proto.google.api.Quota.prototype.addMetricRules=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,4,opt_value,proto.google.api.MetricRule,opt_index)},proto.google.api.Quota.prototype.clearMetricRulesList=function(){this.setMetricRulesList([])},proto.google.api.MetricRule=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.api.MetricRule,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.api.MetricRule.displayName="proto.google.api.MetricRule"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.api.MetricRule.prototype.toObject=function(opt_includeInstance){return proto.google.api.MetricRule.toObject(opt_includeInstance,this)},proto.google.api.MetricRule.toObject=function(includeInstance,msg){var f,obj={selector:jspb.Message.getFieldWithDefault(msg,1,""),metricCostsMap:(f=msg.getMetricCostsMap())?f.toObject(includeInstance,void 0):[]};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.api.MetricRule.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.api.MetricRule;return proto.google.api.MetricRule.deserializeBinaryFromReader(msg,reader)},proto.google.api.MetricRule.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setSelector(value);break;case 2:value=msg.getMetricCostsMap(),reader.readMessage(value,function(message,reader){jspb.Map.deserializeBinary(message,reader,jspb.BinaryReader.prototype.readString,jspb.BinaryReader.prototype.readInt64,null,"")});break;default:reader.skipField()}return msg},proto.google.api.MetricRule.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.api.MetricRule.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.api.MetricRule.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getSelector()).length&&writer.writeString(1,f),(f=message.getMetricCostsMap(!0))&&0<f.getLength()&&f.serializeBinary(2,writer,jspb.BinaryWriter.prototype.writeString,jspb.BinaryWriter.prototype.writeInt64)},proto.google.api.MetricRule.prototype.getSelector=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.api.MetricRule.prototype.setSelector=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.api.MetricRule.prototype.getMetricCostsMap=function(opt_noLazyCreate){return jspb.Message.getMapField(this,2,opt_noLazyCreate,null)},proto.google.api.MetricRule.prototype.clearMetricCostsMap=function(){this.getMetricCostsMap().clear()},proto.google.api.QuotaLimit=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.api.QuotaLimit,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.api.QuotaLimit.displayName="proto.google.api.QuotaLimit"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.api.QuotaLimit.prototype.toObject=function(opt_includeInstance){return proto.google.api.QuotaLimit.toObject(opt_includeInstance,this)},proto.google.api.QuotaLimit.toObject=function(includeInstance,msg){var f,obj={name:jspb.Message.getFieldWithDefault(msg,6,""),description:jspb.Message.getFieldWithDefault(msg,2,""),defaultLimit:jspb.Message.getFieldWithDefault(msg,3,0),maxLimit:jspb.Message.getFieldWithDefault(msg,4,0),freeTier:jspb.Message.getFieldWithDefault(msg,7,0),duration:jspb.Message.getFieldWithDefault(msg,5,""),metric:jspb.Message.getFieldWithDefault(msg,8,""),unit:jspb.Message.getFieldWithDefault(msg,9,""),valuesMap:(f=msg.getValuesMap())?f.toObject(includeInstance,void 0):[],displayName:jspb.Message.getFieldWithDefault(msg,12,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.api.QuotaLimit.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.api.QuotaLimit;return proto.google.api.QuotaLimit.deserializeBinaryFromReader(msg,reader)},proto.google.api.QuotaLimit.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 6:var value=reader.readString();msg.setName(value);break;case 2:value=reader.readString(),msg.setDescription(value);break;case 3:value=reader.readInt64(),msg.setDefaultLimit(value);break;case 4:value=reader.readInt64(),msg.setMaxLimit(value);break;case 7:value=reader.readInt64(),msg.setFreeTier(value);break;case 5:value=reader.readString(),msg.setDuration(value);break;case 8:value=reader.readString(),msg.setMetric(value);break;case 9:value=reader.readString(),msg.setUnit(value);break;case 10:value=msg.getValuesMap(),reader.readMessage(value,function(message,reader){jspb.Map.deserializeBinary(message,reader,jspb.BinaryReader.prototype.readString,jspb.BinaryReader.prototype.readInt64,null,"")});break;case 12:value=reader.readString(),msg.setDisplayName(value);break;default:reader.skipField()}return msg},proto.google.api.QuotaLimit.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.api.QuotaLimit.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.api.QuotaLimit.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getName()).length&&writer.writeString(6,f),0<(f=message.getDescription()).length&&writer.writeString(2,f),0!==(f=message.getDefaultLimit())&&writer.writeInt64(3,f),0!==(f=message.getMaxLimit())&&writer.writeInt64(4,f),0!==(f=message.getFreeTier())&&writer.writeInt64(7,f),0<(f=message.getDuration()).length&&writer.writeString(5,f),0<(f=message.getMetric()).length&&writer.writeString(8,f),0<(f=message.getUnit()).length&&writer.writeString(9,f),(f=message.getValuesMap(!0))&&0<f.getLength()&&f.serializeBinary(10,writer,jspb.BinaryWriter.prototype.writeString,jspb.BinaryWriter.prototype.writeInt64),0<(f=message.getDisplayName()).length&&writer.writeString(12,f)},proto.google.api.QuotaLimit.prototype.getName=function(){return jspb.Message.getFieldWithDefault(this,6,"")},proto.google.api.QuotaLimit.prototype.setName=function(value){jspb.Message.setProto3StringField(this,6,value)},proto.google.api.QuotaLimit.prototype.getDescription=function(){return jspb.Message.getFieldWithDefault(this,2,"")},proto.google.api.QuotaLimit.prototype.setDescription=function(value){jspb.Message.setProto3StringField(this,2,value)},proto.google.api.QuotaLimit.prototype.getDefaultLimit=function(){return jspb.Message.getFieldWithDefault(this,3,0)},proto.google.api.QuotaLimit.prototype.setDefaultLimit=function(value){jspb.Message.setProto3IntField(this,3,value)},proto.google.api.QuotaLimit.prototype.getMaxLimit=function(){return jspb.Message.getFieldWithDefault(this,4,0)},proto.google.api.QuotaLimit.prototype.setMaxLimit=function(value){jspb.Message.setProto3IntField(this,4,value)},proto.google.api.QuotaLimit.prototype.getFreeTier=function(){return jspb.Message.getFieldWithDefault(this,7,0)},proto.google.api.QuotaLimit.prototype.setFreeTier=function(value){jspb.Message.setProto3IntField(this,7,value)},proto.google.api.QuotaLimit.prototype.getDuration=function(){return jspb.Message.getFieldWithDefault(this,5,"")},proto.google.api.QuotaLimit.prototype.setDuration=function(value){jspb.Message.setProto3StringField(this,5,value)},proto.google.api.QuotaLimit.prototype.getMetric=function(){return jspb.Message.getFieldWithDefault(this,8,"")},proto.google.api.QuotaLimit.prototype.setMetric=function(value){jspb.Message.setProto3StringField(this,8,value)},proto.google.api.QuotaLimit.prototype.getUnit=function(){return jspb.Message.getFieldWithDefault(this,9,"")},proto.google.api.QuotaLimit.prototype.setUnit=function(value){jspb.Message.setProto3StringField(this,9,value)},proto.google.api.QuotaLimit.prototype.getValuesMap=function(opt_noLazyCreate){return jspb.Message.getMapField(this,10,opt_noLazyCreate,null)},proto.google.api.QuotaLimit.prototype.clearValuesMap=function(){this.getValuesMap().clear()},proto.google.api.QuotaLimit.prototype.getDisplayName=function(){return jspb.Message.getFieldWithDefault(this,12,"")},proto.google.api.QuotaLimit.prototype.setDisplayName=function(value){jspb.Message.setProto3StringField(this,12,value)},goog.object.extend(exports,proto.google.api);