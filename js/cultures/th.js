(function() {
  var dict = {
      "Unknown": "ที่ไม่รู้จัก",
      "And": "และ",
      "Authenticating": "กำลังพิสูจน์ความถูกต้องของ {0}...",
      "Clear": "ล้าง {0}",
      "CompleteQuery": "คิวรีทั้งหมด",
      "Exclude": "ไม่รวม {0}",
      "EnterTag": "เพิ่มแท็ก",
      "Next": "ถัดไป",
      "Last": "ท้ายสุด",
      "Link": "ลิงก์",
      "Or": "หรือ",
      "Previous": "ก่อนหน้า",
      "QueryDidntMatchAnyDocuments": "คิวรีของคุณไม่ตรงกับเอกสารใดๆ",
      "QueryException": "คิวรีของคุณมีข้อผิดพลาด: {0}",
      "Me": "ฉัน",
      "Remove": "นำออก",
      "Search": "ค้นหา",
      "SearchFor": "ค้นหา {0}",
      "ShareQuery": "แบ่งปันคิวรี",
      "Preferences": "ลักษณะที่ต้องการ",
      "LinkOpeningSettings": "การตั้งค่าการเปิดลิงก์",
      "Reauthenticate": "พิสูจน์ความถูกต้องของ {0} ใหม่อีกครั้ง",
      "ResultsFilteringExpression": "นิพจน์การกรองผลลัพธ์",
      "FiltersInYourPreferences": "ตัวกรองในลักษณะที่ต้องการของคุณ",
      "Create": "สร้าง",
      "SearchIn": "ค้นหาใน {0}",
      "Seconds": "ใน {0} วินาที",
      "ShowingResultsOf": "ผลลัพธ์ที่ {0}<pl>-{1}</pl> จาก {2}",
      "SwitchTo": "เปลี่ยนเป็น {0}",
      "Unexclude": "ไม่แยก {0}",
      "ClearAllFilters": "ล้างตัวกรองทั้งหมด",
      "SkipLogin": "ข้ามการลงชื่อเข้าใช้",
      "LoginInProgress": "กำลังลงชื่อเข้าใช้ โปรดรอ...",
      "Login": "ลงชื่อเข้าใช้",
      "GetStarted": "เริ่มต้น",
      "More": "เพิ่มเติม",
      "Less": "น้อยลง",
      "Settings": "การตั้งค่า",
      "Score": "คะแนน",
      "ScoreDescription": "คำนวณคะแนนจากจำนวนครั้งของเหตุการณ์ที่เกิดรวมถึงตำแหน่งในชุดผลลัพธ์",
      "Occurrences": "เหตุการณ์ที่เกิด",
      "OccurrencesDescription": "จัดเรียงตามจำนวนครั้งของเหตุการณ์ที่เกิดจากมากสุดไปหาน้อยสุด",
      "Label": "ป้าย",
      "Of": "ของ",
      "LabelDescription": "จัดเรียงตามลำดับอักษรในค่าฟิลด์",
      "Value": "ค่า",
      "ValueDescription": "จัดเรียงตามค่าของฟิลด์ที่คำนวณก่อน",
      "AlphaAscending": "ค่าน้อยไปมาก",
      "AlphaDescending": "ค่ามากไปน้อย",
      "ChiSquare": "ไคสแควร์",
      "Nosort": "ไม่มีการจัดเรียง",
      "RelativeFrequency": "ความถี่สัมพัทธ์",
      "RelativeFrequencyDescription": "จัดเรียงตามความถี่สัมพัทธ์ของค่า โดยค่าที่มีความถี่น้อยที่สุดจะปรากฎอยู่บนสุด",
      "DateDistribution": "การแจกแจงวัน",
      "Custom": "กำหนดเอง",
      "CustomDescription": "จัดเรียงตามลำดับที่กำหนดเอง",
      "ComputedField": "ฟิลด์ที่คำนวณ",
      "Ascending": "มากไปหาน้อย",
      "Descending": "น้อยไปหามาก",
      "noResultFor": "ไม่พบผลลัพธ์สำหรับ {0}",
      "autoCorrectedQueryTo": "คิวรีได้รับการแก้ไขโดยอัตโนมัติเป็น {0}",
      "didYouMean": "คุณหมายถึง: {0} หรือไม่",
      "SuggestedResults": "ผลลัพธ์ที่แนะนำ",
      "SuggestedQueries": "คิวรีที่แนะนำ",
      "MostRelevantItems": "รายการที่เกี่ยวข้องที่สุด:",
      "AllItems": "รายการทั้งหมด:",
      "ShowLess": "แสดงน้อยลง",
      "ShowMore": "แสดงเพิ่มขึ้น",
      "HideFacet": "ซ่อนแฟเซ็ท",
      "ShowFacet": "แสดงแฟเซ็ท",
      "AndOthers": "และ{0}อื่น<pl>ๆ</pl>",
      "Others": "{0}อื่น<pl>ๆ</pl>",
      "MostRelevantPosts": "โพสต์ที่เกี่ยวข้องที่สุด:",
      "CompleteThread": "กระทู้แบบสมบูรณ์:",
      "ShowCompleteThread": "แสดงกระทู้แบบสมบูรณ์",
      "ShowOnlyTopMatchingPosts": "แสดงเฉพาะกระทู้ที่ตรงที่สุดเท่านั้น",
      "MostRelevantReplies": "การตอบกลับที่เกี่ยวข้องที่สุด:",
      "AllConversation": "บทสนทนาทั้งหมด:",
      "ShowAllConversation": "แสดงบทสนทนาทั้งหมด",
      "ShowAllReplies": "แสดงการตอบกลับทั้งหมด",
      "ShowOnlyMostRelevantReplies": "แสดงเฉพาะการตอบกลับที่เกี่ยวข้องที่สุดเท่านั้น",
      "Close": "ปิด",
      "Open": "เปิด",
      "OpenInOutlookWhenPossible": "เปิดใน Outlook (เมื่อสามารถทำได้)",
      "AlwaysOpenInNewWindow": "เปิดผลลัพธ์ในหน้าต่างใหม่เสมอ",
      "QuickView": "มุมมองด่วน",
      "ErrorReport": "การรายงานข้อผิดพลาด",
      "OopsError": "โอ๊ะ! เกิดข้อผิดพลาดบางอย่างกับเซิร์ฟเวอร์",
      "ProblemPersists": "หากปัญหายังคงอยู่ โปรดติดต่อผู้ดูแล",
      "GoBack": "ย้อนกลับ",
      "Reset": "รีเซ็ต",
      "Retry": "ลองใหม่",
      "MoreInfo": "ข้อมูลเพิ่มเติม",
      "Username": "ชื่อผู้ใช้",
      "Password": "รหัสผ่าน",
      "PostedBy": "โพสต์โดย",
      "CannotConnect": "ไม่สามารถเชื่อมต่อที่อยู่เซิร์ฟเวอร์ได้",
      "BadUserPass": "รหัสผ่านไม่ตรงกับชื่อผู้ใช้",
      "PleaseEnterYourCredentials": "โปรดกรอกหลักฐานอ้างอิงของคุณสำหรับ {0}",
      "PleaseEnterYourSearchPage": "โปรดกรอก URL หน้าการค้นหาของคุณ",
      "Collapse": "ยุบ",
      "Collapsable": "ยุบได้",
      "Expand": "ขยาย",
      "Today": "วันนี้",
      "Yesterday": "เมื่อวาน",
      "Tomorrow": "พรุ่งนี้",
      "Duration": "ระยะเวลา: {0}",
      "IndexDuration": "ระยะเวลาของดัชนี: {0}",
      "ProxyDuration": "ระยะเวลาของพร็อกซี่: {0}",
      "ClientDuration": "ระยะเวลาของไคลเอนต์: {0}",
      "Unavailable": "ไม่มี",
      "Reply": "ตอบกลับ",
      "ReplyAll": "ตอบกลับทั้งหมด",
      "Forward": "ส่งต่อ",
      "From": "จาก",
      "Caption": "หัวข้อ",
      "Expression": "นิพจน์",
      "Tab": "ปุ่มแท็บ",
      "Tabs": "ปุ่มแท็บ",
      "EnterExpressionName": "ป้อนชื่อนิพจน์",
      "EnterExpressionToFilterWith": "ป้อนนิพจน์เพื่อกรองผลลัพธ์",
      "SelectTab": "เลือกปุ่มแท็บ",
      "SelectAll": "เลือกทั้งหมด",
      "PageUrl": "เลือก URL หน้า",
      "ErrorSavingToDevice": "เกิดข้อผิดพลาดขณะบันทึกข้อมูลลงในอุปกรณ์ของคุณ",
      "ErrorReadingFromDevice": "เกิดข้อผิดพลาดขณะอ่านข้อมูลจากอุปกรณ์ของคุณ",
      "AppIntro": "พูดคุยกับผู้เชี่ยวชาญด้านผลิตภัณฑ์ซึ่งสามารถตอบคำถามของคุณเกี่ยวกับ Coveo และช่วยคุณตัดสินใจว่าโซลูชัน Coveo ใดที่เหมาะสมกับคุณ หรือทดลองใช้ผลิตภัณฑ์ตัวอย่าง!",
      "TryDemo": "ทดลองใช้ตัวอย่าง",
      "ContactUs": "ติดต่อเรา",
      "NewToCoveo": "เพิ่งเริ่มใช้ Coveo ใช่ไหม",
      "LetUsHelpGetStarted": "ให้เราช่วยคุณในการเริ่มต้น",
      "LikesThis": "{0} ถูกใจ สิ่งนี้",
      "CannotConnectSearchPage": "ไม่สามารถเชื่อมต่อหน้าการค้นหาของคุณได้",
      "AreYouSureDeleteFilter": "คุณแน่ใจหรือไม่ว่าคุณต้องการลบตัวกรอง {0} ที่มีนิพจน์ {1}",
      "OnlineHelp": "ความช่วยเหลือออนไลน์",
      "Done": "เสร็จเรียบร้อย",
      "SaveFacetState": "บันทึกสถานะแฟเซ็ทนี้",
      "ClearFacetState": "ล้างสถานะแฟเซ็ท",
      "DisplayingTheOnlyMessage": "แสดงเฉพาะข้อความในการสนทนานี้",
      "NoNetworkConnection": "ไม่มีการเชื่อมต่อเครือข่าย",
      "UnknownConnection": "การเชื่อมต่อที่ไม่รู้จัก",
      "EthernetConnection": "การเชื่อมต่ออีเทอร์เน็ต",
      "WiFi": "การเชื่อมต่อ WiFi",
      "CELL": "การเชื่อมต่อเซลลูลาร์",
      "CELL_2G": "การเชื่อมต่อเซลลูลาร์ 2 จี",
      "CELL_3G": "การเชื่อมต่อเซลลูลาร์ 3 จี",
      "CELL_4G": "การเชื่อมต่อเซลลูลาร์ 4 จี",
      "Relevance": "ความสัมพันธ์กัน",
      "Date": "วัน",
      "Amount": "จำนวน",
      "QueryExceptionNoException": "ไม่มีสิ่งผิดปกติ",
      "QueryExceptionInvalidSyntax": "ซินแท็กซ์ไม่ถูกต้อง",
      "QueryExceptionInvalidCustomField": "ฟิลด์กำหนดเองไม่ถูกต้อง",
      "QueryExceptionInvalidDate": "วันไม่ถูกต้อง",
      "QueryExceptionInvalidExactPhrase": "วลีแบบตรงทั้งหมดไม่ถูกต้อง",
      "QueryExceptionInvalidDateOp": "ตัวปฏิบัติการวันไม่ถูกต้อง",
      "QueryExceptionInvalidNear": "ตัวปฏิบัติการ NEAR ไม่ถูกต้อง",
      "QueryExceptionInvalidWeightedNear": "NEAR ถ่วงน้ำหนักไม่ถูกต้อง",
      "QueryExceptionInvalidTerm": "คำศัพท์ไม่ถูกต้อง",
      "QueryExceptionTooManyTerms": "มีคำศัพท์มากเกินไป",
      "QueryExceptionWildcardTooGeneral": "อักขรแทนกว้างเกินไป",
      "QueryExceptionInvalidSortField": "ฟิลด์จัดเรียงไม่ถูกต้อง",
      "QueryExceptionInvalidSmallStringOp": "ตัวปฏิบัติการสตริงเล็กไม่ถูกต้อง",
      "QueryExceptionRequestedResultsMax": "จำนวนสูงสุดของผลลัพธ์ที่ร้องขอ",
      "QueryExceptionAggregatedMirrorDead": "ดัชนีระยะไกลออฟไลน์",
      "QueryExceptionAggregatedMirrorQueryTimeOut": "คิวรีดัชนีระยะไกลหมดเวลา",
      "QueryExceptionAggregatedMirrorInvalidBuildNumber": "หมายเลขสร้างดัชนีระยะไกลไม่ถูกต้อง",
      "QueryExceptionAggregatedMirrorCannotConnect": "ดัชนีระยะไกลไม่สามารถเชื่อมต่อได้",
      "QueryExceptionNotEnoughLeadingCharsWildcard": "อักขรแทนมีอักษรนำไม่เพียงพอ",
      "QueryExceptionSecurityInverterNotFound": "ไม่พบตัวผกผันเพื่อความปลอดภัย",
      "QueryExceptionSecurityInverterAccessDenied": "การเข้าถึงตัวผกผันเพื่อความปลอดภัยถูกปฏิเสธ",
      "QueryExceptionAggregatedMirrorCannotImpersonate": "ดัชนีระยะไกลไม่สามารถเลียนแบบได้",
      "QueryExceptionUnexpected": "ที่ไม่คาดคิด",
      "QueryExceptionAccessDenied": "การเข้าถึงถูกปฏิเสธ",
      "QueryExceptionSuperUserTokenInvalid": "โทเคนของซูเปอร์ยูสเซอร์ไม่ถูกต้อง",
      "QueryExceptionSuperUserTokenExpired": "โทเคนของซูเปอร์ยูสเซอร์หมดอายุ",
      "QueryExceptionLicenseQueriesExpired": "ใบอนุญาตคิวรีหมดอายุแล้ว",
      "QueryExceptionLicenseSuperUserTokenNotSupported": "ไม่สนับสนุนโทเคนของซูเปอร์ยูสเซอร์ของใบอนุญาต",
      "QueryExceptionInvalidSession": "เซสชันไม่ถูกต้อง",
      "QueryExceptionInvalidDocument": "เอกสารไม่ถูกต้อง",
      "QueryExceptionSearchDisabled": "ปิดการค้นหา",
      "FileType": "ประเภทไฟล์",
      "ShowAttachment": "แสดงเอกสารแนบ",
      "OnFeed": "บนฟีดของ {0}",
      "Author": "ผู้สร้าง",
      "NoTitle": "ไม่มีชื่อ",
      "CurrentSelections": "รายการที่เลือกในปัจจุบัน",
      "AllContent": "เนื้อหาทั้งหมด",
      "CancelLastAction": "ยกเลิกการกระทำล่าสุด",
      "SearchTips": "เคล็ดลับการค้นหา",
      "CheckSpelling": "ตรวจสอบตัวสะกดของคำสำคัญของคุณ",
      "TryUsingFewerKeywords": "ลองใช้คำสำคัญที่น้อยลง แตกต่าง หรือมีความหมายกว้างขึ้น",
      "SelectFewerFilters": "เลือกตัวกรองให้น้อยลงเพื่อขยายขอบเขตการค้นหาของคุณ",
  }
  var locales = String["locales"] || (String["locales"] = {});
  locales["th"] = _.extend({}, locales["th"], dict);
  String["toLocaleString"].call(this, { "th": dict });
  String["locale"] = "th";
  String["defaultLocale"] = "en";
})();
/*
 * Globalize Culture th
 *
 * http://github.com/jquery/globalize
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * This file was generated by the Globalize Culture Generator
 * Translation: bugs found in this file need to be fixed in the generator
 */

(function( window, undefined ) {

var Globalize;

if ( typeof require !== "undefined" &&
	typeof exports !== "undefined" &&
	typeof module !== "undefined" ) {
	// Assume CommonJS
	Globalize = require( "globalize" );
} else {
	// Global variable
	Globalize = window.Globalize;
}

Globalize.addCultureInfo( "th", "default", {
	name: "th",
	englishName: "Thai",
	nativeName: "ไทย",
	language: "th",
	numberFormat: {
		currency: {
			pattern: ["-$n","$n"],
			symbol: "฿"
		}
	},
	calendars: {
		standard: {
			name: "ThaiBuddhist",
			firstDay: 1,
			days: {
				names: ["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],
				namesAbbr: ["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],
				namesShort: ["อ","จ","อ","พ","พ","ศ","ส"]
			},
			months: {
				names: ["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม",""],
				namesAbbr: ["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค.",""]
			},
			eras: [{"name":"พ.ศ.","start":null,"offset":-543}],
			twoDigitYearMax: 2572,
			patterns: {
				d: "d/M/yyyy",
				D: "d MMMM yyyy",
				t: "H:mm",
				T: "H:mm:ss",
				f: "d MMMM yyyy H:mm",
				F: "d MMMM yyyy H:mm:ss",
				M: "dd MMMM",
				Y: "MMMM yyyy"
			}
		},
		Gregorian_Localized: {
			firstDay: 1,
			days: {
				names: ["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],
				namesAbbr: ["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],
				namesShort: ["อ","จ","อ","พ","พ","ศ","ส"]
			},
			months: {
				names: ["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม",""],
				namesAbbr: ["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค.",""]
			},
			patterns: {
				d: "d/M/yyyy",
				D: "'วัน'dddd'ที่' d MMMM yyyy",
				t: "H:mm",
				T: "H:mm:ss",
				f: "'วัน'dddd'ที่' d MMMM yyyy H:mm",
				F: "'วัน'dddd'ที่' d MMMM yyyy H:mm:ss",
				M: "dd MMMM",
				Y: "MMMM yyyy"
			}
		}
	}
});

}( this ));
