var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v2_resources_age_range_view_pb=require("../../../../../google/ads/googleads/v2/resources/age_range_view_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.services.GetAgeRangeViewRequest",null,global),proto.google.ads.googleads.v2.services.GetAgeRangeViewRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.services.GetAgeRangeViewRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.services.GetAgeRangeViewRequest.displayName="proto.google.ads.googleads.v2.services.GetAgeRangeViewRequest"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.services.GetAgeRangeViewRequest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.services.GetAgeRangeViewRequest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.services.GetAgeRangeViewRequest.toObject=function(includeInstance,msg){var obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.services.GetAgeRangeViewRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.services.GetAgeRangeViewRequest;return proto.google.ads.googleads.v2.services.GetAgeRangeViewRequest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.services.GetAgeRangeViewRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v2.services.GetAgeRangeViewRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.services.GetAgeRangeViewRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.services.GetAgeRangeViewRequest.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getResourceName()).length&&writer.writeString(1,f)},proto.google.ads.googleads.v2.services.GetAgeRangeViewRequest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v2.services.GetAgeRangeViewRequest.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},goog.object.extend(exports,proto.google.ads.googleads.v2.services);