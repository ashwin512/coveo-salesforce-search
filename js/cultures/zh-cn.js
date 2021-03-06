(function() {
  var dict = {
      "Unknown": "未知",
      "And": "与",
      "Authenticating": "验证 {0}...",
      "Clear": "清除 {0}",
      "CompleteQuery": "完整查询",
      "Exclude": "排除 {0}",
      "EnterTag": "添加标记",
      "Next": "下一页",
      "Last": "最后一页",
      "Link": "链接",
      "Or": "或",
      "Previous": "上一页",
      "QueryDidntMatchAnyDocuments": "您的查询与任何文档都不匹配。",
      "QueryException": "您的查询存在错误： {0}。",
      "Me": "我",
      "Remove": "删除",
      "Search": "搜索",
      "SearchFor": "搜索 {0}",
      "ShareQuery": "共享查询",
      "Preferences": "首选项",
      "LinkOpeningSettings": "链接打开设置",
      "Reauthenticate": "重新验证 {0}",
      "ResultsFilteringExpression": "结果筛选表达式",
      "FiltersInYourPreferences": "首选项中的筛选条件",
      "Create": "创建",
      "SearchIn": "在 {0} 中搜索",
      "Seconds": "用时 {0} 秒",
      "ShowingResultsOf": "结果数 {0}<pl>-{1}</pl>，总数 {2}",
      "SwitchTo": "切换到 {0}",
      "Unexclude": "不排除 {0}",
      "ClearAllFilters": "清除所有筛选条件",
      "SkipLogin": "跳过登录",
      "LoginInProgress": "正在登录，请稍候...",
      "Login": "登录",
      "GetStarted": "开始体验",
      "More": "更多",
      "Less": "更少",
      "Settings": "设置",
      "Score": "得分",
      "ScoreDescription": "得分是根据出现次数和在结果集中的位置计算得来。",
      "Occurrences": "出现次数",
      "OccurrencesDescription": "按出现次数排序，出现次数最高的值排在首位。",
      "Label": "标签",
      "Of": "第...个，共...个",
      "LabelDescription": "对字段值按字母顺序排序。",
      "Value": "值",
      "ValueDescription": "按第一个计算得出的字段的值排序",
      "AlphaAscending": "值升序排序",
      "AlphaDescending": "值降序排序",
      "ChiSquare": "卡方值",
      "Nosort": "无排序",
      "RelativeFrequency": "相对频率",
      "RelativeFrequencyDescription": "基于值的相对频率排序。较不常见的值将出现在较高位置。",
      "DateDistribution": "日期分布",
      "Custom": "自定义",
      "CustomDescription": "基于自定义顺序排序",
      "ComputedField": "计算得出的字段",
      "Ascending": "升序",
      "Descending": "降序",
      "noResultFor": "没有找到与 {0} 相关的结果",
      "autoCorrectedQueryTo": "查询自动更正为 {0}",
      "didYouMean": "您要找的是不是： {0}",
      "SuggestedResults": "建议的结果",
      "SuggestedQueries": "建议的查询",
      "MostRelevantItems": "最相关的项：",
      "AllItems": "所有项：",
      "ShowLess": "显示较少的值",
      "ShowMore": "显示较多的值",
      "HideFacet": "隐藏快捷控制界面",
      "ShowFacet": "显示快捷控制界面",
      "AndOthers": "以及 {0} 个其他项",
      "Others": "{0} 个其他项",
      "MostRelevantPosts": "最相关的帖子：",
      "CompleteThread": "完整的主题：",
      "ShowCompleteThread": "显示完整的主题",
      "ShowOnlyTopMatchingPosts": "仅显示最匹配的帖子",
      "MostRelevantReplies": "最相关的回复：",
      "AllConversation": "所有对话：",
      "ShowAllConversation": "显示所有对话",
      "ShowAllReplies": "显示所有回复",
      "ShowOnlyMostRelevantReplies": "仅显示最相关的回复",
      "Close": "关闭",
      "Open": "打开",
      "OpenInOutlookWhenPossible": "在 Outlook 中打开（如果可能）",
      "AlwaysOpenInNewWindow": "总是在新窗口中打开结果",
      "QuickView": "快速查看",
      "ErrorReport": "错误报告",
      "OopsError": "哎呀！服务器出现了错误。",
      "ProblemPersists": "如果问题仍然存在，请联系管理员。",
      "GoBack": "返回",
      "Reset": "重置",
      "Retry": "重试",
      "MoreInfo": "更多信息",
      "Username": "用户名",
      "Password": "密码",
      "PostedBy": "发贴者",
      "CannotConnect": "无法连接到该服务器地址。",
      "BadUserPass": "密码与用户名不匹配。",
      "PleaseEnterYourCredentials": "请输入您的 {0} 凭据。",
      "PleaseEnterYourSearchPage": "请输入您的搜索页面的网址",
      "Collapse": "折叠",
      "Collapsable": "可折叠",
      "Expand": "展开",
      "Today": "今天",
      "Yesterday": "昨天",
      "Tomorrow": "明天",
      "Duration": "持续时间： {0}",
      "IndexDuration": "索引持续时间： {0}",
      "ProxyDuration": "代理持续时间： {0}",
      "ClientDuration": "客户端持续时间： {0}",
      "Unavailable": "不可用",
      "Reply": "回复",
      "ReplyAll": "全部回复",
      "Forward": "转发",
      "From": "发件人",
      "Caption": "标题",
      "Expression": "表达式",
      "Tab": "选项卡",
      "Tabs": "多个选项卡",
      "EnterExpressionName": "输入表达式名称",
      "EnterExpressionToFilterWith": "输入用于筛选结果的表达式",
      "SelectTab": "选择选项卡",
      "SelectAll": "全选",
      "PageUrl": "搜索页面的网址",
      "ErrorSavingToDevice": "在将信息保存到您的设备时出错",
      "ErrorReadingFromDevice": "在从您的设备读取信息时出错",
      "AppIntro": "咨询能够回答您有关 Coveo 的问题的产品专家，并帮助您确定哪个 Coveo 解决方案适合您。或者，尝试现场演示！",
      "TryDemo": "尝试演示",
      "ContactUs": "联系我们",
      "NewToCoveo": "Coveo 的新用户？",
      "LetUsHelpGetStarted": "让我们帮助您开始体验",
      "LikesThis": "{0} 喜欢此解决方案。",
      "CannotConnectSearchPage": "无法连接到您的搜索页面",
      "AreYouSureDeleteFilter": "您是否确定要删除采用 {1} 表达式的筛选条件 {0}",
      "OnlineHelp": "在线帮助",
      "Done": "完成",
      "SaveFacetState": "保存此快捷控制界面状态",
      "ClearFacetState": "清除快捷控制界面状态",
      "DisplayingTheOnlyMessage": "仅显示此对话中的消息",
      "NoNetworkConnection": "没有网络连接",
      "UnknownConnection": "未知的连接",
      "EthernetConnection": "以太网连接",
      "WiFi": "WiFi 连接",
      "CELL": "移动连接",
      "CELL_2G": "移动 2G 连接",
      "CELL_3G": "移动 3G 连接",
      "CELL_4G": "移动 4G 连接",
      "Relevance": "关联",
      "Date": "日期",
      "Amount": "数量",
      "QueryExceptionNoException": "没有例外",
      "QueryExceptionInvalidSyntax": "无效语法",
      "QueryExceptionInvalidCustomField": "无效自定义字段",
      "QueryExceptionInvalidDate": "无效日期",
      "QueryExceptionInvalidExactPhrase": "无效精确短语",
      "QueryExceptionInvalidDateOp": "无效日期运算符",
      "QueryExceptionInvalidNear": "无效 NEAR 运算符",
      "QueryExceptionInvalidWeightedNear": "无效加权 NEAR",
      "QueryExceptionInvalidTerm": "无效条件",
      "QueryExceptionTooManyTerms": "太多条件",
      "QueryExceptionWildcardTooGeneral": "通配符太常见",
      "QueryExceptionInvalidSortField": "无效排序字段",
      "QueryExceptionInvalidSmallStringOp": "无效小字符串运算符",
      "QueryExceptionRequestedResultsMax": "要求的最大结果数",
      "QueryExceptionAggregatedMirrorDead": "远程聚合镜像处于离线状态",
      "QueryExceptionAggregatedMirrorQueryTimeOut": "远程聚合镜像查询超时",
      "QueryExceptionAggregatedMirrorInvalidBuildNumber": "远程聚合镜像无效版本号",
      "QueryExceptionAggregatedMirrorCannotConnect": "远程聚合镜像无法连接",
      "QueryExceptionNotEnoughLeadingCharsWildcard": "主字符通配符不足",
      "QueryExceptionSecurityInverterNotFound": "未找到安全变换器",
      "QueryExceptionSecurityInverterAccessDenied": "安全变换器访问被拒绝",
      "QueryExceptionAggregatedMirrorCannotImpersonate": "远程聚合镜像无法模拟",
      "QueryExceptionUnexpected": "意外",
      "QueryExceptionAccessDenied": "访问被拒绝",
      "QueryExceptionSuperUserTokenInvalid": "超级用户令牌无效",
      "QueryExceptionSuperUserTokenExpired": "超级用户令牌已过期",
      "QueryExceptionLicenseQueriesExpired": "查询许可证已过期",
      "QueryExceptionLicenseSuperUserTokenNotSupported": "许可证超级用户令牌不支持",
      "QueryExceptionInvalidSession": "无效会话",
      "QueryExceptionInvalidDocument": "无效文档",
      "QueryExceptionSearchDisabled": "搜索被禁用",
      "FileType": "文件类型",
      "ShowAttachment": "显示附件",
      "OnFeed": "有关 {0} 的输入。",
      "Author": "作者",
      "NoTitle": "无标题",
      "CurrentSelections": "当前选择",
      "AllContent": "所有内容",
      "CancelLastAction": "取消最后一个动作",
      "SearchTips": "搜索提示",
      "CheckSpelling": "检查关键字的拼写。",
      "TryUsingFewerKeywords": "尝试使用更少、更常用或不同的关键字。",
      "SelectFewerFilters": "选择较少的筛选条件以扩大您的搜索范围。",
  }
  var locales = String["locales"] || (String["locales"] = {});
  locales["zh-cn"] = _.extend({}, locales["zh-cn"], dict);
  String["toLocaleString"].call(this, { "zh-cn": dict });
  String["locale"] = "zh-cn";
  String["defaultLocale"] = "en";
})();
/*
 * Globalize Culture zh-CN
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

Globalize.addCultureInfo( "zh-CN", "default", {
	name: "zh-CN",
	englishName: "Chinese (Simplified, PRC)",
	nativeName: "中文(中华人民共和国)",
	language: "zh-CHS",
	numberFormat: {
		"NaN": "非数字",
		negativeInfinity: "负无穷大",
		positiveInfinity: "正无穷大",
		percent: {
			pattern: ["-n%","n%"]
		},
		currency: {
			pattern: ["$-n","$n"],
			symbol: "¥"
		}
	},
	calendars: {
		standard: {
			days: {
				names: ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],
				namesAbbr: ["周日","周一","周二","周三","周四","周五","周六"],
				namesShort: ["日","一","二","三","四","五","六"]
			},
			months: {
				names: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""],
				namesAbbr: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""]
			},
			AM: ["上午","上午","上午"],
			PM: ["下午","下午","下午"],
			eras: [{"name":"公元","start":null,"offset":0}],
			patterns: {
				d: "yyyy/M/d",
				D: "yyyy'年'M'月'd'日'",
				t: "H:mm",
				T: "H:mm:ss",
				f: "yyyy'年'M'月'd'日' H:mm",
				F: "yyyy'年'M'月'd'日' H:mm:ss",
				M: "M'月'd'日'",
				Y: "yyyy'年'M'月'"
			}
		}
	}
});

}( this ));
