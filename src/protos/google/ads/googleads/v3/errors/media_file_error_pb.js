var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.errors.MediaFileErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.errors.MediaFileErrorEnum.MediaFileError",null,global),proto.google.ads.googleads.v3.errors.MediaFileErrorEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.errors.MediaFileErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.errors.MediaFileErrorEnum.displayName="proto.google.ads.googleads.v3.errors.MediaFileErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.errors.MediaFileErrorEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.errors.MediaFileErrorEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.errors.MediaFileErrorEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.errors.MediaFileErrorEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.errors.MediaFileErrorEnum;return proto.google.ads.googleads.v3.errors.MediaFileErrorEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.errors.MediaFileErrorEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)reader.getFieldNumber(),reader.skipField();return msg},proto.google.ads.googleads.v3.errors.MediaFileErrorEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.errors.MediaFileErrorEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.errors.MediaFileErrorEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v3.errors.MediaFileErrorEnum.MediaFileError={UNSPECIFIED:0,UNKNOWN:1,CANNOT_CREATE_STANDARD_ICON:2,CANNOT_SELECT_STANDARD_ICON_WITH_OTHER_TYPES:3,CANNOT_SPECIFY_MEDIA_FILE_ID_AND_DATA:4,DUPLICATE_MEDIA:5,EMPTY_FIELD:6,RESOURCE_REFERENCED_IN_MULTIPLE_OPS:7,FIELD_NOT_SUPPORTED_FOR_MEDIA_SUB_TYPE:8,INVALID_MEDIA_FILE_ID:9,INVALID_MEDIA_SUB_TYPE:10,INVALID_MEDIA_FILE_TYPE:11,INVALID_MIME_TYPE:12,INVALID_REFERENCE_ID:13,INVALID_YOU_TUBE_ID:14,MEDIA_FILE_FAILED_TRANSCODING:15,MEDIA_NOT_TRANSCODED:16,MEDIA_TYPE_DOES_NOT_MATCH_MEDIA_FILE_TYPE:17,NO_FIELDS_SPECIFIED:18,NULL_REFERENCE_ID_AND_MEDIA_ID:19,TOO_LONG:20,UNSUPPORTED_TYPE:21,YOU_TUBE_SERVICE_UNAVAILABLE:22,YOU_TUBE_VIDEO_HAS_NON_POSITIVE_DURATION:23,YOU_TUBE_VIDEO_NOT_FOUND:24},goog.object.extend(exports,proto.google.ads.googleads.v3.errors);