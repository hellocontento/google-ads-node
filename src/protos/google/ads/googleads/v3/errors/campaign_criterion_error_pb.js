var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.errors.CampaignCriterionErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.errors.CampaignCriterionErrorEnum.CampaignCriterionError",null,global),proto.google.ads.googleads.v3.errors.CampaignCriterionErrorEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.errors.CampaignCriterionErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.errors.CampaignCriterionErrorEnum.displayName="proto.google.ads.googleads.v3.errors.CampaignCriterionErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.errors.CampaignCriterionErrorEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.errors.CampaignCriterionErrorEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.errors.CampaignCriterionErrorEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.errors.CampaignCriterionErrorEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.errors.CampaignCriterionErrorEnum;return proto.google.ads.googleads.v3.errors.CampaignCriterionErrorEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.errors.CampaignCriterionErrorEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)reader.getFieldNumber(),reader.skipField();return msg},proto.google.ads.googleads.v3.errors.CampaignCriterionErrorEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.errors.CampaignCriterionErrorEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.errors.CampaignCriterionErrorEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v3.errors.CampaignCriterionErrorEnum.CampaignCriterionError={UNSPECIFIED:0,UNKNOWN:1,CONCRETE_TYPE_REQUIRED:2,INVALID_PLACEMENT_URL:3,CANNOT_EXCLUDE_CRITERIA_TYPE:4,CANNOT_SET_STATUS_FOR_CRITERIA_TYPE:5,CANNOT_SET_STATUS_FOR_EXCLUDED_CRITERIA:6,CANNOT_TARGET_AND_EXCLUDE:7,TOO_MANY_OPERATIONS:8,OPERATOR_NOT_SUPPORTED_FOR_CRITERION_TYPE:9,SHOPPING_CAMPAIGN_SALES_COUNTRY_NOT_SUPPORTED_FOR_SALES_CHANNEL:10,CANNOT_ADD_EXISTING_FIELD:11,CANNOT_UPDATE_NEGATIVE_CRITERION:12},goog.object.extend(exports,proto.google.ads.googleads.v3.errors);