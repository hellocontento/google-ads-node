var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v2_resources_product_group_view_pb=require("../../../../../google/ads/googleads/v2/resources/product_group_view_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.services.GetProductGroupViewRequest",null,global),proto.google.ads.googleads.v2.services.GetProductGroupViewRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.services.GetProductGroupViewRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.services.GetProductGroupViewRequest.displayName="proto.google.ads.googleads.v2.services.GetProductGroupViewRequest"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.services.GetProductGroupViewRequest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.services.GetProductGroupViewRequest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.services.GetProductGroupViewRequest.toObject=function(includeInstance,msg){var obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.services.GetProductGroupViewRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.services.GetProductGroupViewRequest;return proto.google.ads.googleads.v2.services.GetProductGroupViewRequest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.services.GetProductGroupViewRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v2.services.GetProductGroupViewRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.services.GetProductGroupViewRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.services.GetProductGroupViewRequest.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getResourceName()).length&&writer.writeString(1,f)},proto.google.ads.googleads.v2.services.GetProductGroupViewRequest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v2.services.GetProductGroupViewRequest.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},goog.object.extend(exports,proto.google.ads.googleads.v2.services);