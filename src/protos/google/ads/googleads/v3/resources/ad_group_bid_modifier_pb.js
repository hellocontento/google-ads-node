var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v3_common_criteria_pb=require("../../../../../google/ads/googleads/v3/common/criteria_pb.js"),google_ads_googleads_v3_enums_bid_modifier_source_pb=require("../../../../../google/ads/googleads/v3/enums/bid_modifier_source_pb.js"),google_api_resource_pb=require("../../../../../google/api/resource_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.resources.AdGroupBidModifier",null,global),proto.google.ads.googleads.v3.resources.AdGroupBidModifier=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,proto.google.ads.googleads.v3.resources.AdGroupBidModifier.oneofGroups_)},goog.inherits(proto.google.ads.googleads.v3.resources.AdGroupBidModifier,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.resources.AdGroupBidModifier.displayName="proto.google.ads.googleads.v3.resources.AdGroupBidModifier"),proto.google.ads.googleads.v3.resources.AdGroupBidModifier.oneofGroups_=[[5,6,7,8,11,12]],proto.google.ads.googleads.v3.resources.AdGroupBidModifier.CriterionCase={CRITERION_NOT_SET:0,HOTEL_DATE_SELECTION_TYPE:5,HOTEL_ADVANCE_BOOKING_WINDOW:6,HOTEL_LENGTH_OF_STAY:7,HOTEL_CHECK_IN_DAY:8,DEVICE:11,PREFERRED_CONTENT:12},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.getCriterionCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v3.resources.AdGroupBidModifier.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.resources.AdGroupBidModifier.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.toObject=function(includeInstance,msg){var f,obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,""),adGroup:(f=msg.getAdGroup())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),criterionId:(f=msg.getCriterionId())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),bidModifier:(f=msg.getBidModifier())&&google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance,f),baseAdGroup:(f=msg.getBaseAdGroup())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),bidModifierSource:jspb.Message.getFieldWithDefault(msg,10,0),hotelDateSelectionType:(f=msg.getHotelDateSelectionType())&&google_ads_googleads_v3_common_criteria_pb.HotelDateSelectionTypeInfo.toObject(includeInstance,f),hotelAdvanceBookingWindow:(f=msg.getHotelAdvanceBookingWindow())&&google_ads_googleads_v3_common_criteria_pb.HotelAdvanceBookingWindowInfo.toObject(includeInstance,f),hotelLengthOfStay:(f=msg.getHotelLengthOfStay())&&google_ads_googleads_v3_common_criteria_pb.HotelLengthOfStayInfo.toObject(includeInstance,f),hotelCheckInDay:(f=msg.getHotelCheckInDay())&&google_ads_googleads_v3_common_criteria_pb.HotelCheckInDayInfo.toObject(includeInstance,f),device:(f=msg.getDevice())&&google_ads_googleads_v3_common_criteria_pb.DeviceInfo.toObject(includeInstance,f),preferredContent:(f=msg.getPreferredContent())&&google_ads_googleads_v3_common_criteria_pb.PreferredContentInfo.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.resources.AdGroupBidModifier.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.resources.AdGroupBidModifier;return proto.google.ads.googleads.v3.resources.AdGroupBidModifier.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;case 2:value=new google_protobuf_wrappers_pb.StringValue,reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setAdGroup(value);break;case 3:value=new google_protobuf_wrappers_pb.Int64Value,reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setCriterionId(value);break;case 4:value=new google_protobuf_wrappers_pb.DoubleValue,reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader),msg.setBidModifier(value);break;case 9:value=new google_protobuf_wrappers_pb.StringValue,reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setBaseAdGroup(value);break;case 10:value=reader.readEnum(),msg.setBidModifierSource(value);break;case 5:value=new google_ads_googleads_v3_common_criteria_pb.HotelDateSelectionTypeInfo,reader.readMessage(value,google_ads_googleads_v3_common_criteria_pb.HotelDateSelectionTypeInfo.deserializeBinaryFromReader),msg.setHotelDateSelectionType(value);break;case 6:value=new google_ads_googleads_v3_common_criteria_pb.HotelAdvanceBookingWindowInfo,reader.readMessage(value,google_ads_googleads_v3_common_criteria_pb.HotelAdvanceBookingWindowInfo.deserializeBinaryFromReader),msg.setHotelAdvanceBookingWindow(value);break;case 7:value=new google_ads_googleads_v3_common_criteria_pb.HotelLengthOfStayInfo,reader.readMessage(value,google_ads_googleads_v3_common_criteria_pb.HotelLengthOfStayInfo.deserializeBinaryFromReader),msg.setHotelLengthOfStay(value);break;case 8:value=new google_ads_googleads_v3_common_criteria_pb.HotelCheckInDayInfo,reader.readMessage(value,google_ads_googleads_v3_common_criteria_pb.HotelCheckInDayInfo.deserializeBinaryFromReader),msg.setHotelCheckInDay(value);break;case 11:value=new google_ads_googleads_v3_common_criteria_pb.DeviceInfo,reader.readMessage(value,google_ads_googleads_v3_common_criteria_pb.DeviceInfo.deserializeBinaryFromReader),msg.setDevice(value);break;case 12:value=new google_ads_googleads_v3_common_criteria_pb.PreferredContentInfo,reader.readMessage(value,google_ads_googleads_v3_common_criteria_pb.PreferredContentInfo.deserializeBinaryFromReader),msg.setPreferredContent(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.resources.AdGroupBidModifier.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getResourceName()).length&&writer.writeString(1,f),null!=(f=message.getAdGroup())&&writer.writeMessage(2,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getCriterionId())&&writer.writeMessage(3,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(f=message.getBidModifier())&&writer.writeMessage(4,f,google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter),null!=(f=message.getBaseAdGroup())&&writer.writeMessage(9,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),0!==(f=message.getBidModifierSource())&&writer.writeEnum(10,f),null!=(f=message.getHotelDateSelectionType())&&writer.writeMessage(5,f,google_ads_googleads_v3_common_criteria_pb.HotelDateSelectionTypeInfo.serializeBinaryToWriter),null!=(f=message.getHotelAdvanceBookingWindow())&&writer.writeMessage(6,f,google_ads_googleads_v3_common_criteria_pb.HotelAdvanceBookingWindowInfo.serializeBinaryToWriter),null!=(f=message.getHotelLengthOfStay())&&writer.writeMessage(7,f,google_ads_googleads_v3_common_criteria_pb.HotelLengthOfStayInfo.serializeBinaryToWriter),null!=(f=message.getHotelCheckInDay())&&writer.writeMessage(8,f,google_ads_googleads_v3_common_criteria_pb.HotelCheckInDayInfo.serializeBinaryToWriter),null!=(f=message.getDevice())&&writer.writeMessage(11,f,google_ads_googleads_v3_common_criteria_pb.DeviceInfo.serializeBinaryToWriter),null!=(f=message.getPreferredContent())&&writer.writeMessage(12,f,google_ads_googleads_v3_common_criteria_pb.PreferredContentInfo.serializeBinaryToWriter)},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.getAdGroup=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,2)},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.setAdGroup=function(value){jspb.Message.setWrapperField(this,2,value)},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.clearAdGroup=function(){this.setAdGroup(void 0)},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.hasAdGroup=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.getCriterionId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,3)},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.setCriterionId=function(value){jspb.Message.setWrapperField(this,3,value)},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.clearCriterionId=function(){this.setCriterionId(void 0)},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.hasCriterionId=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.getBidModifier=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.DoubleValue,4)},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.setBidModifier=function(value){jspb.Message.setWrapperField(this,4,value)},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.clearBidModifier=function(){this.setBidModifier(void 0)},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.hasBidModifier=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.getBaseAdGroup=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,9)},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.setBaseAdGroup=function(value){jspb.Message.setWrapperField(this,9,value)},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.clearBaseAdGroup=function(){this.setBaseAdGroup(void 0)},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.hasBaseAdGroup=function(){return null!=jspb.Message.getField(this,9)},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.getBidModifierSource=function(){return jspb.Message.getFieldWithDefault(this,10,0)},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.setBidModifierSource=function(value){jspb.Message.setProto3EnumField(this,10,value)},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.getHotelDateSelectionType=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v3_common_criteria_pb.HotelDateSelectionTypeInfo,5)},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.setHotelDateSelectionType=function(value){jspb.Message.setOneofWrapperField(this,5,proto.google.ads.googleads.v3.resources.AdGroupBidModifier.oneofGroups_[0],value)},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.clearHotelDateSelectionType=function(){this.setHotelDateSelectionType(void 0)},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.hasHotelDateSelectionType=function(){return null!=jspb.Message.getField(this,5)},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.getHotelAdvanceBookingWindow=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v3_common_criteria_pb.HotelAdvanceBookingWindowInfo,6)},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.setHotelAdvanceBookingWindow=function(value){jspb.Message.setOneofWrapperField(this,6,proto.google.ads.googleads.v3.resources.AdGroupBidModifier.oneofGroups_[0],value)},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.clearHotelAdvanceBookingWindow=function(){this.setHotelAdvanceBookingWindow(void 0)},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.hasHotelAdvanceBookingWindow=function(){return null!=jspb.Message.getField(this,6)},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.getHotelLengthOfStay=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v3_common_criteria_pb.HotelLengthOfStayInfo,7)},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.setHotelLengthOfStay=function(value){jspb.Message.setOneofWrapperField(this,7,proto.google.ads.googleads.v3.resources.AdGroupBidModifier.oneofGroups_[0],value)},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.clearHotelLengthOfStay=function(){this.setHotelLengthOfStay(void 0)},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.hasHotelLengthOfStay=function(){return null!=jspb.Message.getField(this,7)},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.getHotelCheckInDay=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v3_common_criteria_pb.HotelCheckInDayInfo,8)},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.setHotelCheckInDay=function(value){jspb.Message.setOneofWrapperField(this,8,proto.google.ads.googleads.v3.resources.AdGroupBidModifier.oneofGroups_[0],value)},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.clearHotelCheckInDay=function(){this.setHotelCheckInDay(void 0)},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.hasHotelCheckInDay=function(){return null!=jspb.Message.getField(this,8)},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.getDevice=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v3_common_criteria_pb.DeviceInfo,11)},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.setDevice=function(value){jspb.Message.setOneofWrapperField(this,11,proto.google.ads.googleads.v3.resources.AdGroupBidModifier.oneofGroups_[0],value)},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.clearDevice=function(){this.setDevice(void 0)},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.hasDevice=function(){return null!=jspb.Message.getField(this,11)},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.getPreferredContent=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v3_common_criteria_pb.PreferredContentInfo,12)},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.setPreferredContent=function(value){jspb.Message.setOneofWrapperField(this,12,proto.google.ads.googleads.v3.resources.AdGroupBidModifier.oneofGroups_[0],value)},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.clearPreferredContent=function(){this.setPreferredContent(void 0)},proto.google.ads.googleads.v3.resources.AdGroupBidModifier.prototype.hasPreferredContent=function(){return null!=jspb.Message.getField(this,12)},goog.object.extend(exports,proto.google.ads.googleads.v3.resources);