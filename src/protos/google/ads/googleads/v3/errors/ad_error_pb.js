var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.errors.AdErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.errors.AdErrorEnum.AdError",null,global),proto.google.ads.googleads.v3.errors.AdErrorEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.errors.AdErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.errors.AdErrorEnum.displayName="proto.google.ads.googleads.v3.errors.AdErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.errors.AdErrorEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.errors.AdErrorEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.errors.AdErrorEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.errors.AdErrorEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.errors.AdErrorEnum;return proto.google.ads.googleads.v3.errors.AdErrorEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.errors.AdErrorEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)reader.getFieldNumber(),reader.skipField();return msg},proto.google.ads.googleads.v3.errors.AdErrorEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.errors.AdErrorEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.errors.AdErrorEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v3.errors.AdErrorEnum.AdError={UNSPECIFIED:0,UNKNOWN:1,AD_CUSTOMIZERS_NOT_SUPPORTED_FOR_AD_TYPE:2,APPROXIMATELY_TOO_LONG:3,APPROXIMATELY_TOO_SHORT:4,BAD_SNIPPET:5,CANNOT_MODIFY_AD:6,CANNOT_SET_BUSINESS_NAME_IF_URL_SET:7,CANNOT_SET_FIELD:8,CANNOT_SET_FIELD_WITH_ORIGIN_AD_ID_SET:9,CANNOT_SET_FIELD_WITH_AD_ID_SET_FOR_SHARING:10,CANNOT_SET_ALLOW_FLEXIBLE_COLOR_FALSE:11,CANNOT_SET_COLOR_CONTROL_WHEN_NATIVE_FORMAT_SETTING:12,CANNOT_SET_URL:13,CANNOT_SET_WITHOUT_FINAL_URLS:14,CANNOT_SET_WITH_FINAL_URLS:15,CANNOT_SET_WITH_URL_DATA:17,CANNOT_USE_AD_SUBCLASS_FOR_OPERATOR:18,CUSTOMER_NOT_APPROVED_MOBILEADS:19,CUSTOMER_NOT_APPROVED_THIRDPARTY_ADS:20,CUSTOMER_NOT_APPROVED_THIRDPARTY_REDIRECT_ADS:21,CUSTOMER_NOT_ELIGIBLE:22,CUSTOMER_NOT_ELIGIBLE_FOR_UPDATING_BEACON_URL:23,DIMENSION_ALREADY_IN_UNION:24,DIMENSION_MUST_BE_SET:25,DIMENSION_NOT_IN_UNION:26,DISPLAY_URL_CANNOT_BE_SPECIFIED:27,DOMESTIC_PHONE_NUMBER_FORMAT:28,EMERGENCY_PHONE_NUMBER:29,EMPTY_FIELD:30,FEED_ATTRIBUTE_MUST_HAVE_MAPPING_FOR_TYPE_ID:31,FEED_ATTRIBUTE_MAPPING_TYPE_MISMATCH:32,ILLEGAL_AD_CUSTOMIZER_TAG_USE:33,ILLEGAL_TAG_USE:34,INCONSISTENT_DIMENSIONS:35,INCONSISTENT_STATUS_IN_TEMPLATE_UNION:36,INCORRECT_LENGTH:37,INELIGIBLE_FOR_UPGRADE:38,INVALID_AD_ADDRESS_CAMPAIGN_TARGET:39,INVALID_AD_TYPE:40,INVALID_ATTRIBUTES_FOR_MOBILE_IMAGE:41,INVALID_ATTRIBUTES_FOR_MOBILE_TEXT:42,INVALID_CALL_TO_ACTION_TEXT:43,INVALID_CHARACTER_FOR_URL:44,INVALID_COUNTRY_CODE:45,INVALID_EXPANDED_DYNAMIC_SEARCH_AD_TAG:47,INVALID_INPUT:48,INVALID_MARKUP_LANGUAGE:49,INVALID_MOBILE_CARRIER:50,INVALID_MOBILE_CARRIER_TARGET:51,INVALID_NUMBER_OF_ELEMENTS:52,INVALID_PHONE_NUMBER_FORMAT:53,INVALID_RICH_MEDIA_CERTIFIED_VENDOR_FORMAT_ID:54,INVALID_TEMPLATE_DATA:55,INVALID_TEMPLATE_ELEMENT_FIELD_TYPE:56,INVALID_TEMPLATE_ID:57,LINE_TOO_WIDE:58,MISSING_AD_CUSTOMIZER_MAPPING:59,MISSING_ADDRESS_COMPONENT:60,MISSING_ADVERTISEMENT_NAME:61,MISSING_BUSINESS_NAME:62,MISSING_DESCRIPTION1:63,MISSING_DESCRIPTION2:64,MISSING_DESTINATION_URL_TAG:65,MISSING_LANDING_PAGE_URL_TAG:66,MISSING_DIMENSION:67,MISSING_DISPLAY_URL:68,MISSING_HEADLINE:69,MISSING_HEIGHT:70,MISSING_IMAGE:71,MISSING_MARKETING_IMAGE_OR_PRODUCT_VIDEOS:72,MISSING_MARKUP_LANGUAGES:73,MISSING_MOBILE_CARRIER:74,MISSING_PHONE:75,MISSING_REQUIRED_TEMPLATE_FIELDS:76,MISSING_TEMPLATE_FIELD_VALUE:77,MISSING_TEXT:78,MISSING_VISIBLE_URL:79,MISSING_WIDTH:80,MULTIPLE_DISTINCT_FEEDS_UNSUPPORTED:81,MUST_USE_TEMP_AD_UNION_ID_ON_ADD:82,TOO_LONG:83,TOO_SHORT:84,UNION_DIMENSIONS_CANNOT_CHANGE:85,UNKNOWN_ADDRESS_COMPONENT:86,UNKNOWN_FIELD_NAME:87,UNKNOWN_UNIQUE_NAME:88,UNSUPPORTED_DIMENSIONS:89,URL_INVALID_SCHEME:90,URL_INVALID_TOP_LEVEL_DOMAIN:91,URL_MALFORMED:92,URL_NO_HOST:93,URL_NOT_EQUIVALENT:94,URL_HOST_NAME_TOO_LONG:95,URL_NO_SCHEME:96,URL_NO_TOP_LEVEL_DOMAIN:97,URL_PATH_NOT_ALLOWED:98,URL_PORT_NOT_ALLOWED:99,URL_QUERY_NOT_ALLOWED:100,URL_SCHEME_BEFORE_EXPANDED_DYNAMIC_SEARCH_AD_TAG:102,USER_DOES_NOT_HAVE_ACCESS_TO_TEMPLATE:103,INCONSISTENT_EXPANDABLE_SETTINGS:104,INVALID_FORMAT:105,INVALID_FIELD_TEXT:106,ELEMENT_NOT_PRESENT:107,IMAGE_ERROR:108,VALUE_NOT_IN_RANGE:109,FIELD_NOT_PRESENT:110,ADDRESS_NOT_COMPLETE:111,ADDRESS_INVALID:112,VIDEO_RETRIEVAL_ERROR:113,AUDIO_ERROR:114,INVALID_YOUTUBE_DISPLAY_URL:115,TOO_MANY_PRODUCT_IMAGES:116,TOO_MANY_PRODUCT_VIDEOS:117,INCOMPATIBLE_AD_TYPE_AND_DEVICE_PREFERENCE:118,CALLTRACKING_NOT_SUPPORTED_FOR_COUNTRY:119,CARRIER_SPECIFIC_SHORT_NUMBER_NOT_ALLOWED:120,DISALLOWED_NUMBER_TYPE:121,PHONE_NUMBER_NOT_SUPPORTED_FOR_COUNTRY:122,PHONE_NUMBER_NOT_SUPPORTED_WITH_CALLTRACKING_FOR_COUNTRY:123,PREMIUM_RATE_NUMBER_NOT_ALLOWED:124,VANITY_PHONE_NUMBER_NOT_ALLOWED:125,INVALID_CALL_CONVERSION_TYPE_ID:126,CANNOT_DISABLE_CALL_CONVERSION_AND_SET_CONVERSION_TYPE_ID:127,CANNOT_SET_PATH2_WITHOUT_PATH1:128,MISSING_DYNAMIC_SEARCH_ADS_SETTING_DOMAIN_NAME:129,INCOMPATIBLE_WITH_RESTRICTION_TYPE:130,CUSTOMER_CONSENT_FOR_CALL_RECORDING_REQUIRED:131,MISSING_IMAGE_OR_MEDIA_BUNDLE:132,PRODUCT_TYPE_NOT_SUPPORTED_IN_THIS_CAMPAIGN:133,PLACEHOLDER_CANNOT_HAVE_EMPTY_DEFAULT_VALUE:134,PLACEHOLDER_COUNTDOWN_FUNCTION_CANNOT_HAVE_DEFAULT_VALUE:135,PLACEHOLDER_DEFAULT_VALUE_MISSING:136,UNEXPECTED_PLACEHOLDER_DEFAULT_VALUE:137,AD_CUSTOMIZERS_MAY_NOT_BE_ADJACENT:138,UPDATING_AD_WITH_NO_ENABLED_ASSOCIATION:139},goog.object.extend(exports,proto.google.ads.googleads.v3.errors);