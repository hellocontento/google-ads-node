var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v3_enums_served_asset_field_type_pb=require("../../../../../google/ads/googleads/v3/enums/served_asset_field_type_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.common.AdImageAsset",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.common.AdMediaBundleAsset",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.common.AdTextAsset",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.common.AdVideoAsset",null,global),proto.google.ads.googleads.v3.common.AdTextAsset=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.common.AdTextAsset,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.common.AdTextAsset.displayName="proto.google.ads.googleads.v3.common.AdTextAsset"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.common.AdTextAsset.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.common.AdTextAsset.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.common.AdTextAsset.toObject=function(includeInstance,msg){var f,obj={text:(f=msg.getText())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),pinnedField:jspb.Message.getFieldWithDefault(msg,2,0)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.common.AdTextAsset.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.common.AdTextAsset;return proto.google.ads.googleads.v3.common.AdTextAsset.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.common.AdTextAsset.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setText(value);break;case 2:value=reader.readEnum(),msg.setPinnedField(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v3.common.AdTextAsset.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.common.AdTextAsset.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.common.AdTextAsset.serializeBinaryToWriter=function(message,writer){var f=void 0;null!=(f=message.getText())&&writer.writeMessage(1,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),0!==(f=message.getPinnedField())&&writer.writeEnum(2,f)},proto.google.ads.googleads.v3.common.AdTextAsset.prototype.getText=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,1)},proto.google.ads.googleads.v3.common.AdTextAsset.prototype.setText=function(value){jspb.Message.setWrapperField(this,1,value)},proto.google.ads.googleads.v3.common.AdTextAsset.prototype.clearText=function(){this.setText(void 0)},proto.google.ads.googleads.v3.common.AdTextAsset.prototype.hasText=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v3.common.AdTextAsset.prototype.getPinnedField=function(){return jspb.Message.getFieldWithDefault(this,2,0)},proto.google.ads.googleads.v3.common.AdTextAsset.prototype.setPinnedField=function(value){jspb.Message.setProto3EnumField(this,2,value)},proto.google.ads.googleads.v3.common.AdImageAsset=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.common.AdImageAsset,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.common.AdImageAsset.displayName="proto.google.ads.googleads.v3.common.AdImageAsset"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.common.AdImageAsset.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.common.AdImageAsset.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.common.AdImageAsset.toObject=function(includeInstance,msg){var f,obj={asset:(f=msg.getAsset())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.common.AdImageAsset.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.common.AdImageAsset;return proto.google.ads.googleads.v3.common.AdImageAsset.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.common.AdImageAsset.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setAsset(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v3.common.AdImageAsset.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.common.AdImageAsset.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.common.AdImageAsset.serializeBinaryToWriter=function(message,writer){var f;null!=(f=message.getAsset())&&writer.writeMessage(1,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter)},proto.google.ads.googleads.v3.common.AdImageAsset.prototype.getAsset=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,1)},proto.google.ads.googleads.v3.common.AdImageAsset.prototype.setAsset=function(value){jspb.Message.setWrapperField(this,1,value)},proto.google.ads.googleads.v3.common.AdImageAsset.prototype.clearAsset=function(){this.setAsset(void 0)},proto.google.ads.googleads.v3.common.AdImageAsset.prototype.hasAsset=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v3.common.AdVideoAsset=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.common.AdVideoAsset,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.common.AdVideoAsset.displayName="proto.google.ads.googleads.v3.common.AdVideoAsset"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.common.AdVideoAsset.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.common.AdVideoAsset.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.common.AdVideoAsset.toObject=function(includeInstance,msg){var f,obj={asset:(f=msg.getAsset())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.common.AdVideoAsset.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.common.AdVideoAsset;return proto.google.ads.googleads.v3.common.AdVideoAsset.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.common.AdVideoAsset.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setAsset(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v3.common.AdVideoAsset.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.common.AdVideoAsset.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.common.AdVideoAsset.serializeBinaryToWriter=function(message,writer){var f;null!=(f=message.getAsset())&&writer.writeMessage(1,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter)},proto.google.ads.googleads.v3.common.AdVideoAsset.prototype.getAsset=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,1)},proto.google.ads.googleads.v3.common.AdVideoAsset.prototype.setAsset=function(value){jspb.Message.setWrapperField(this,1,value)},proto.google.ads.googleads.v3.common.AdVideoAsset.prototype.clearAsset=function(){this.setAsset(void 0)},proto.google.ads.googleads.v3.common.AdVideoAsset.prototype.hasAsset=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v3.common.AdMediaBundleAsset=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.common.AdMediaBundleAsset,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.common.AdMediaBundleAsset.displayName="proto.google.ads.googleads.v3.common.AdMediaBundleAsset"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.common.AdMediaBundleAsset.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.common.AdMediaBundleAsset.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.common.AdMediaBundleAsset.toObject=function(includeInstance,msg){var f,obj={asset:(f=msg.getAsset())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.common.AdMediaBundleAsset.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.common.AdMediaBundleAsset;return proto.google.ads.googleads.v3.common.AdMediaBundleAsset.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.common.AdMediaBundleAsset.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setAsset(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v3.common.AdMediaBundleAsset.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.common.AdMediaBundleAsset.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.common.AdMediaBundleAsset.serializeBinaryToWriter=function(message,writer){var f;null!=(f=message.getAsset())&&writer.writeMessage(1,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter)},proto.google.ads.googleads.v3.common.AdMediaBundleAsset.prototype.getAsset=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,1)},proto.google.ads.googleads.v3.common.AdMediaBundleAsset.prototype.setAsset=function(value){jspb.Message.setWrapperField(this,1,value)},proto.google.ads.googleads.v3.common.AdMediaBundleAsset.prototype.clearAsset=function(){this.setAsset(void 0)},proto.google.ads.googleads.v3.common.AdMediaBundleAsset.prototype.hasAsset=function(){return null!=jspb.Message.getField(this,1)},goog.object.extend(exports,proto.google.ads.googleads.v3.common);