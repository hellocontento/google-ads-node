var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")();goog.exportSymbol("proto.google.api.LabelDescriptor",null,global),goog.exportSymbol("proto.google.api.LabelDescriptor.ValueType",null,global),proto.google.api.LabelDescriptor=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.api.LabelDescriptor,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.api.LabelDescriptor.displayName="proto.google.api.LabelDescriptor"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.api.LabelDescriptor.prototype.toObject=function(opt_includeInstance){return proto.google.api.LabelDescriptor.toObject(opt_includeInstance,this)},proto.google.api.LabelDescriptor.toObject=function(includeInstance,msg){var obj={key:jspb.Message.getFieldWithDefault(msg,1,""),valueType:jspb.Message.getFieldWithDefault(msg,2,0),description:jspb.Message.getFieldWithDefault(msg,3,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.api.LabelDescriptor.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.api.LabelDescriptor;return proto.google.api.LabelDescriptor.deserializeBinaryFromReader(msg,reader)},proto.google.api.LabelDescriptor.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setKey(value);break;case 2:value=reader.readEnum();msg.setValueType(value);break;case 3:value=reader.readString();msg.setDescription(value);break;default:reader.skipField()}}return msg},proto.google.api.LabelDescriptor.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.api.LabelDescriptor.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.api.LabelDescriptor.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getKey()).length&&writer.writeString(1,f),0!==(f=message.getValueType())&&writer.writeEnum(2,f),0<(f=message.getDescription()).length&&writer.writeString(3,f)},proto.google.api.LabelDescriptor.ValueType={STRING:0,BOOL:1,INT64:2},proto.google.api.LabelDescriptor.prototype.getKey=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.api.LabelDescriptor.prototype.setKey=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.api.LabelDescriptor.prototype.getValueType=function(){return jspb.Message.getFieldWithDefault(this,2,0)},proto.google.api.LabelDescriptor.prototype.setValueType=function(value){jspb.Message.setProto3EnumField(this,2,value)},proto.google.api.LabelDescriptor.prototype.getDescription=function(){return jspb.Message.getFieldWithDefault(this,3,"")},proto.google.api.LabelDescriptor.prototype.setDescription=function(value){jspb.Message.setProto3StringField(this,3,value)},goog.object.extend(exports,proto.google.api);