(function() {
  var dict = {
      "Unknown": "未知",
      "And": "與",
      "Authenticating": "驗證 {0}...",
      "Clear": "清除 {0}",
      "CompleteQuery": "完整查詢",
      "Exclude": "排除 {0}",
      "EnterTag": "添加標記",
      "Next": "下一頁",
      "Last": "最後一頁",
      "Link": "連結",
      "Or": "或",
      "Previous": "上一頁",
      "QueryDidntMatchAnyDocuments": "您的查詢與任何文件都不匹配。",
      "QueryException": "您的查詢存在錯誤： {0}。",
      "Me": "我",
      "Remove": "刪除",
      "Search": "搜尋",
      "SearchFor": "搜尋 {0}",
      "ShareQuery": "共用查詢",
      "Preferences": "喜好設定",
      "LinkOpeningSettings": "連結打開設定",
      "Reauthenticate": "重新驗證 {0}",
      "ResultsFilteringExpression": "結果篩選運算式",
      "FiltersInYourPreferences": "喜好設定中的篩選條件",
      "Create": "創建",
      "SearchIn": "在 {0} 中搜尋",
      "Seconds": "用時 {0} 秒",
      "ShowingResultsOf": "結果數 {0}<pl>-{1}</pl>，總數 {2}",
      "SwitchTo": "切換到 {0}",
      "Unexclude": "不排除 {0}",
      "ClearAllFilters": "清除所有篩選條件",
      "SkipLogin": "跳過登入",
      "LoginInProgress": "正在登入，請稍候...",
      "Login": "登入",
      "GetStarted": "開始體驗",
      "More": "更多",
      "Less": "更少",
      "Settings": "設定",
      "Score": "得分",
      "ScoreDescription": "得分是根據出現次數和在結果集中的位置計算得來。",
      "Occurrences": "出現次數",
      "OccurrencesDescription": "按出現次數排序，出現次數最高的值排在首位。",
      "Label": "標籤",
      "Of": "第...個，共...個",
      "LabelDescription": "對欄位值按字母順序排序。",
      "Value": "值",
      "ValueDescription": "按第一個計算得出的欄位的值排序",
      "AlphaAscending": "值遞增排序",
      "AlphaDescending": "值遞減排序",
      "ChiSquare": "卡方值",
      "Nosort": "無排序",
      "RelativeFrequency": "相對頻率",
      "RelativeFrequencyDescription": "基於值的相對頻率排序。較不常見的值將出現在較高位置。",
      "DateDistribution": "日期分佈",
      "Custom": "自訂",
      "CustomDescription": "基於自訂順序排序",
      "ComputedField": "計算得出的欄位",
      "Ascending": "遞增",
      "Descending": "遞減",
      "noResultFor": "沒有找到與 {0} 相關的結果",
      "autoCorrectedQueryTo": "查詢自動校正為 {0}",
      "didYouMean": "您要找的是不是： {0}",
      "SuggestedResults": "建議的結果",
      "SuggestedQueries": "建議的查詢",
      "MostRelevantItems": "最相關的項：",
      "AllItems": "所有項：",
      "ShowLess": "顯示較少的值",
      "ShowMore": "顯示較多的值",
      "HideFacet": "隱藏快捷控制介面",
      "ShowFacet": "顯示快捷控制介面",
      "AndOthers": "以及 {0} 個其他項",
      "Others": "{0} 個其他項",
      "MostRelevantPosts": "最相關的公佈內容：",
      "CompleteThread": "完整的主題：",
      "ShowCompleteThread": "顯示完整的主題",
      "ShowOnlyTopMatchingPosts": "僅顯示最匹配的公佈內容",
      "MostRelevantReplies": "最相關的回復：",
      "AllConversation": "所有對話：",
      "ShowAllConversation": "顯示所有對話",
      "ShowAllReplies": "顯示所有回復",
      "ShowOnlyMostRelevantReplies": "僅顯示最相關的回復",
      "Close": "關閉",
      "Open": "打開",
      "OpenInOutlookWhenPossible": "在 Outlook 中打開（如果可能）",
      "AlwaysOpenInNewWindow": "總是在新視窗中打開結果",
      "QuickView": "快速檢視",
      "ErrorReport": "錯誤報告",
      "OopsError": "哎呀！伺服器出現了錯誤。",
      "ProblemPersists": "如果問題仍然存在，請連絡管理員。",
      "GoBack": "返回",
      "Reset": "重設",
      "Retry": "重試",
      "MoreInfo": "更多資訊",
      "Username": "用戶名",
      "Password": "密碼",
      "PostedBy": "公佈者",
      "CannotConnect": "無法連線到該伺服器位址。",
      "BadUserPass": "密碼與用戶名不匹配。",
      "PleaseEnterYourCredentials": "請輸入您的 {0} 認證。",
      "PleaseEnterYourSearchPage": "請輸入您的搜尋網頁 URL",
      "Collapse": "摺疊",
      "Collapsable": "可摺疊",
      "Expand": "展開",
      "Today": "今天",
      "Yesterday": "昨天",
      "Tomorrow": "明天",
      "Duration": "持續時間： {0}",
      "IndexDuration": "索引持續時間： {0}",
      "ProxyDuration": "Proxy 持續時間： {0}",
      "ClientDuration": "用戶端持續時間： {0}",
      "Unavailable": "不可用",
      "Reply": "回復",
      "ReplyAll": "全部回復",
      "Forward": "轉寄",
      "From": "寄件者",
      "Caption": "標題",
      "Expression": "運算式",
      "Tab": "索引標籤",
      "Tabs": "多個索引標籤",
      "EnterExpressionName": "輸入運算式名稱",
      "EnterExpressionToFilterWith": "輸入用於篩選結果的運算式",
      "SelectTab": "選擇索引標籤",
      "SelectAll": "全選",
      "PageUrl": "搜尋網頁 URL",
      "ErrorSavingToDevice": "在將資訊保存到您的設備時出錯",
      "ErrorReadingFromDevice": "在從您的設備讀取資訊時出錯",
      "AppIntro": "諮詢能夠回答您有關 Coveo 的問題的產品專家，並幫助您確定哪個 Coveo 解決方案適合您。或者，嘗試現場示範！",
      "TryDemo": "嘗試示範",
      "ContactUs": "連絡我們",
      "NewToCoveo": "Coveo 的新使用者？",
      "LetUsHelpGetStarted": "讓我們幫助您開始體驗",
      "LikesThis": "{0} 喜歡此解決方案。",
      "CannotConnectSearchPage": "無法連線到您的搜尋網頁",
      "AreYouSureDeleteFilter": "您是否確定要刪除採用 {1} 運算式的篩選條件 {0}",
      "OnlineHelp": "線上說明",
      "Done": "完成",
      "SaveFacetState": "保存此快捷控制介面狀態",
      "ClearFacetState": "清除快捷控制介面狀態",
      "DisplayingTheOnlyMessage": "僅顯示此對話中的消息",
      "NoNetworkConnection": "沒有網路連線",
      "UnknownConnection": "未知的連線",
      "EthernetConnection": "乙太網路連線",
      "WiFi": "WiFi 連線",
      "CELL": "行動電話連線",
      "CELL_2G": "行動電話 2G 連線",
      "CELL_3G": "行動電話 3G 連線",
      "CELL_4G": "行動電話 4G 連線",
      "Relevance": "關聯",
      "Date": "日期",
      "Amount": "數量",
      "QueryExceptionNoException": "沒有例外",
      "QueryExceptionInvalidSyntax": "無效語法",
      "QueryExceptionInvalidCustomField": "無效自訂欄位",
      "QueryExceptionInvalidDate": "無效日期",
      "QueryExceptionInvalidExactPhrase": "無效精確短語",
      "QueryExceptionInvalidDateOp": "無效日期運算子",
      "QueryExceptionInvalidNear": "無效 NEAR 運算子",
      "QueryExceptionInvalidWeightedNear": "無效加權 NEAR",
      "QueryExceptionInvalidTerm": "無效條件",
      "QueryExceptionTooManyTerms": "太多條件",
      "QueryExceptionWildcardTooGeneral": "萬用字元太常見",
      "QueryExceptionInvalidSortField": "無效排序欄位",
      "QueryExceptionInvalidSmallStringOp": "無效小字串運算子",
      "QueryExceptionRequestedResultsMax": "要求的最大結果數",
      "QueryExceptionAggregatedMirrorDead": "遠端聚合鏡像處於離線狀態",
      "QueryExceptionAggregatedMirrorQueryTimeOut": "遠端聚合鏡像查詢超時",
      "QueryExceptionAggregatedMirrorInvalidBuildNumber": "遠程聚合鏡像無效版本號",
      "QueryExceptionAggregatedMirrorCannotConnect": "遠端聚合鏡像無法連線",
      "QueryExceptionNotEnoughLeadingCharsWildcard": "主字元萬用字元不足",
      "QueryExceptionSecurityInverterNotFound": "未找到安全變換器",
      "QueryExceptionSecurityInverterAccessDenied": "安全變換器存取被拒絕",
      "QueryExceptionAggregatedMirrorCannotImpersonate": "遠端聚合鏡像無法模擬",
      "QueryExceptionUnexpected": "意外",
      "QueryExceptionAccessDenied": "存取被拒絕",
      "QueryExceptionSuperUserTokenInvalid": "進階使用者權杖無效",
      "QueryExceptionSuperUserTokenExpired": "進階使用者權杖已過期",
      "QueryExceptionLicenseQueriesExpired": "查詢授權已過期",
      "QueryExceptionLicenseSuperUserTokenNotSupported": "授權進階使用者權杖不支援",
      "QueryExceptionInvalidSession": "無效會話",
      "QueryExceptionInvalidDocument": "無效文件",
      "QueryExceptionSearchDisabled": "搜尋被禁用",
      "FileType": "檔案類型",
      "ShowAttachment": "顯示附件",
      "OnFeed": "有關 {0} 的輸入。",
      "Author": "作者",
      "NoTitle": "無標題",
      "CurrentSelections": "當前選擇",
      "AllContent": "所有內容",
      "CancelLastAction": "取消最後一個動作",
      "SearchTips": "搜尋提示",
      "CheckSpelling": "檢查關鍵字的拼寫。",
      "TryUsingFewerKeywords": "嘗試使用更少、更常用或不同的關鍵字。",
      "SelectFewerFilters": "選擇較少的篩選條件以擴大您的搜尋範圍。",
  }
  var locales = String["locales"] || (String["locales"] = {});
  locales["zh-tw"] = _.extend({}, locales["zh-tw"], dict);
  String["toLocaleString"].call(this, { "zh-tw": dict });
  String["locale"] = "zh-tw";
  String["defaultLocale"] = "en";
})();
/*
 * Globalize Culture zh-TW
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

Globalize.addCultureInfo( "zh-TW", "default", {
	name: "zh-TW",
	englishName: "Chinese (Traditional, Taiwan)",
	nativeName: "中文(台灣)",
	language: "zh-CHT",
	numberFormat: {
		"NaN": "不是一個數字",
		negativeInfinity: "負無窮大",
		positiveInfinity: "正無窮大",
		percent: {
			pattern: ["-n%","n%"]
		},
		currency: {
			pattern: ["-$n","$n"],
			symbol: "NT$"
		}
	},
	calendars: {
		standard: {
			days: {
				names: ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],
				namesAbbr: ["週日","週一","週二","週三","週四","週五","週六"],
				namesShort: ["日","一","二","三","四","五","六"]
			},
			months: {
				names: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""],
				namesAbbr: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""]
			},
			AM: ["上午","上午","上午"],
			PM: ["下午","下午","下午"],
			eras: [{"name":"西元","start":null,"offset":0}],
			patterns: {
				d: "yyyy/M/d",
				D: "yyyy'年'M'月'd'日'",
				t: "tt hh:mm",
				T: "tt hh:mm:ss",
				f: "yyyy'年'M'月'd'日' tt hh:mm",
				F: "yyyy'年'M'月'd'日' tt hh:mm:ss",
				M: "M'月'd'日'",
				Y: "yyyy'年'M'月'"
			}
		},
		Taiwan: {
			name: "Taiwan",
			days: {
				names: ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],
				namesAbbr: ["週日","週一","週二","週三","週四","週五","週六"],
				namesShort: ["日","一","二","三","四","五","六"]
			},
			months: {
				names: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""],
				namesAbbr: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""]
			},
			AM: ["上午","上午","上午"],
			PM: ["下午","下午","下午"],
			eras: [{"name":"","start":null,"offset":1911}],
			twoDigitYearMax: 99,
			patterns: {
				d: "yyyy/M/d",
				D: "yyyy'年'M'月'd'日'",
				t: "tt hh:mm",
				T: "tt hh:mm:ss",
				f: "yyyy'年'M'月'd'日' tt hh:mm",
				F: "yyyy'年'M'月'd'日' tt hh:mm:ss",
				M: "M'月'd'日'",
				Y: "yyyy'年'M'月'"
			}
		}
	}
});

}( this ));
