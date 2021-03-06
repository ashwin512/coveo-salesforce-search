(function() {
  var dict = {
      "Unknown": "不明",
      "And": "および",
      "Authenticating": "{0}を認証中...",
      "Clear": "{0}をクリア",
      "CompleteQuery": "すべてのクエリ",
      "Exclude": "{0}を除外",
      "EnterTag": "タグを追加",
      "Next": "次へ",
      "Last": "最後へ",
      "Link": "リンク",
      "Or": "または",
      "Previous": "前へ",
      "QueryDidntMatchAnyDocuments": "クエリがどのドキュメントにも適合しませんでした。",
      "QueryException": "クエリにエラーがあります：{0}。",
      "Me": "ユーザー自身",
      "Remove": "削除する",
      "Search": "検索する",
      "SearchFor": "{0}を検索",
      "ShareQuery": "クエリを共有",
      "Preferences": "優先項目",
      "LinkOpeningSettings": "リンクを開く設定",
      "Reauthenticate": "{0}を再認証",
      "ResultsFilteringExpression": "結果フィルタリング表現",
      "FiltersInYourPreferences": "優先するフィルター",
      "Create": "作成する",
      "SearchIn": "{0}を検索",
      "Seconds": "{0}秒",
      "ShowingResultsOf": "結果{2}件中{0}<pl>～{1}</pl>",
      "SwitchTo": "{0}に変更",
      "Unexclude": "{0}の除外を元に戻す",
      "ClearAllFilters": "すべてのフィルターをクリア",
      "SkipLogin": "ログインをスキップ",
      "LoginInProgress": "ログイン中、お待ちください...",
      "Login": "ログインする",
      "GetStarted": "始める",
      "More": "もっと表示",
      "Less": "少なく表示",
      "Settings": "設定",
      "Score": "スコア",
      "ScoreDescription": "スコアは発生回数ならびに一連の結果内での位置から計算されます。",
      "Occurrences": "発生",
      "OccurrencesDescription": "発生回数の高い値から順に並べ替える",
      "Label": "ラベル",
      "Of": "/",
      "LabelDescription": "フィールド値をアルファベット順に並べ替える",
      "Value": "値",
      "ValueDescription": "最初の計算フィールドの値を並べ替える",
      "AlphaAscending": "値の小さい順",
      "AlphaDescending": "値の大きい順",
      "ChiSquare": "カイ二乗",
      "Nosort": "並び替えなし",
      "RelativeFrequency": "相対頻度",
      "RelativeFrequencyDescription": "値の相対頻度で並べ替える。相対頻度の低い値から順に表示。",
      "DateDistribution": "日付の分布",
      "Custom": "カスタム作成",
      "CustomDescription": "カスタム作成した条件で並べ替える",
      "ComputedField": "計算フィールド",
      "Ascending": "昇順",
      "Descending": "降順",
      "noResultFor": "{0}に該当する結果なし",
      "autoCorrectedQueryTo": "クエリは{0}に自動修正されました",
      "didYouMean": "もしかして：{0}",
      "SuggestedResults": "提案された結果",
      "SuggestedQueries": "提案されたクエリ",
      "MostRelevantItems": "最も関連性の高い項目：",
      "AllItems": "全項目：",
      "ShowLess": "少なく表示",
      "ShowMore": "もっと表示",
      "HideFacet": "ファセットを隠す",
      "ShowFacet": "ファセットを表示",
      "AndOthers": "およびその他{0}件",
      "Others": "その他{0}件",
      "MostRelevantPosts": "最も関連性の高い投稿：",
      "CompleteThread": "すべてのスレッド：",
      "ShowCompleteThread": "すべてのスレッドを表示",
      "ShowOnlyTopMatchingPosts": "一致した上位の投稿のみを表示",
      "MostRelevantReplies": "最も関連性の高い返信：",
      "AllConversation": "すべての会話：",
      "ShowAllConversation": "すべての会話を表示",
      "ShowAllReplies": "すべての返信を表示",
      "ShowOnlyMostRelevantReplies": "最も関連性の高い返信のみを表示",
      "Close": "閉じる",
      "Open": "開く",
      "OpenInOutlookWhenPossible": "Outlookで開く（可能な場合）",
      "AlwaysOpenInNewWindow": "常に新しいウィンドウで結果を開く",
      "QuickView": "クイックビュー",
      "ErrorReport": "エラー報告",
      "OopsError": "申し訳ございません。サーバー上で問題が発生しました。",
      "ProblemPersists": "問題が解決しない場合は、管理者までご連絡ください。",
      "GoBack": "戻る",
      "Reset": "リセット",
      "Retry": "再試行",
      "MoreInfo": "詳細",
      "Username": "ユーザー名",
      "Password": "パスワード",
      "PostedBy": "投稿者名",
      "CannotConnect": "サーバーアドレスに接続できません。",
      "BadUserPass": "ユーザー名とパスワードが一致しません。",
      "PleaseEnterYourCredentials": "{0}の認証情報を入力してください。",
      "PleaseEnterYourSearchPage": "検索ページのURLを入力してください",
      "Collapse": "折り畳む",
      "Collapsable": "折り畳み可能",
      "Expand": "展開する",
      "Today": "今日",
      "Yesterday": "昨日",
      "Tomorrow": "明日",
      "Duration": "期間：{0}",
      "IndexDuration": "インデックス期間：{0}",
      "ProxyDuration": "プロキシ期間：{0}",
      "ClientDuration": "クライアント期間：{0}",
      "Unavailable": "不明",
      "Reply": "返信",
      "ReplyAll": "全員に返信",
      "Forward": "転送",
      "From": "差出人",
      "Caption": "表題",
      "Expression": "表現",
      "Tab": "タブ",
      "Tabs": "タブ",
      "EnterExpressionName": "表現名を入力",
      "EnterExpressionToFilterWith": "結果をフィルターする表現を入力",
      "SelectTab": "タブを選択",
      "SelectAll": "すべてを選択",
      "PageUrl": "ページのURLを検索",
      "ErrorSavingToDevice": "デバイスへの情報保存中にエラー発生",
      "ErrorReadingFromDevice": "デバイスから情報読み込み中にエラー発生",
      "AppIntro": "Coveoに関するご質問にお答えし、お客様に合ったCoveoソリューションの選択をお手伝いする製品スペシャリストと話す。または、実践デモをお試しください！",
      "TryDemo": "デモを試す",
      "ContactUs": "お問い合わせ",
      "NewToCoveo": "Coveoのご利用は初めてですか？",
      "LetUsHelpGetStarted": "始めるお手伝いをいたします",
      "LikesThis": "{0}はこれがお気に入りです。",
      "CannotConnectSearchPage": "検索ページに接続できません",
      "AreYouSureDeleteFilter": "本当に、フィルタ{0}と表現{1}を削除しますか",
      "OnlineHelp": "オンラインヘルプ",
      "Done": "完了",
      "SaveFacetState": "このファセット状態を保存",
      "ClearFacetState": "ファセット状態をクリア",
      "DisplayingTheOnlyMessage": "本会話中のメッセージのみを表示",
      "NoNetworkConnection": "ネットワーク接続なし",
      "UnknownConnection": "不明の接続",
      "EthernetConnection": "イーサネット接続",
      "WiFi": "Wi-Fi接続",
      "CELL": "携帯電話接続",
      "CELL_2G": "2G携帯電話接続",
      "CELL_3G": "3G携帯電話接続",
      "CELL_4G": "4G携帯電話接続",
      "Relevance": "関連性",
      "Date": "日付",
      "Amount": "量",
      "QueryExceptionNoException": "例外なし",
      "QueryExceptionInvalidSyntax": "無効の構文",
      "QueryExceptionInvalidCustomField": "無効のカスタム作成フィールド",
      "QueryExceptionInvalidDate": "無効の日付",
      "QueryExceptionInvalidExactPhrase": "無効の完全一致",
      "QueryExceptionInvalidDateOp": "無効の日付演算子",
      "QueryExceptionInvalidNear": "無効のNEAR演算子",
      "QueryExceptionInvalidWeightedNear": "無効の重み付けNEAR",
      "QueryExceptionInvalidTerm": "無効の語句",
      "QueryExceptionTooManyTerms": "語句が多すぎます",
      "QueryExceptionWildcardTooGeneral": "ワイルドカードが一般的すぎます",
      "QueryExceptionInvalidSortField": "無効の並び替えフィールド",
      "QueryExceptionInvalidSmallStringOp": "無効の小文字列演算子",
      "QueryExceptionRequestedResultsMax": "要求した結果最大数",
      "QueryExceptionAggregatedMirrorDead": "リモートインデックスはオフラインです",
      "QueryExceptionAggregatedMirrorQueryTimeOut": "リモートインデックスのクエリがタイムアウトしました",
      "QueryExceptionAggregatedMirrorInvalidBuildNumber": "リモートインデックス無効の形成数字です",
      "QueryExceptionAggregatedMirrorCannotConnect": "リモートインデックスに接続できません",
      "QueryExceptionNotEnoughLeadingCharsWildcard": "主要ワイルドカード不足です",
      "QueryExceptionSecurityInverterNotFound": "セキュリティインバーターが見つかりません",
      "QueryExceptionSecurityInverterAccessDenied": "セキュリティインバーターのアクセスが拒否されました",
      "QueryExceptionAggregatedMirrorCannotImpersonate": "リモートインデックスはなりすまし利用できません",
      "QueryExceptionUnexpected": "想定外",
      "QueryExceptionAccessDenied": "アクセスが拒否されました",
      "QueryExceptionSuperUserTokenInvalid": "スーパーユーザートークンが無効です",
      "QueryExceptionSuperUserTokenExpired": "スーパーユーザートークンが失効しています",
      "QueryExceptionLicenseQueriesExpired": "クエリライセンスが失効しています",
      "QueryExceptionLicenseSuperUserTokenNotSupported": "スーパーユーザートークンのライセンスがサポートされていません",
      "QueryExceptionInvalidSession": "無効のセッション",
      "QueryExceptionInvalidDocument": "無効のドキュメント",
      "QueryExceptionSearchDisabled": "検索が無効になっています",
      "FileType": "ファイルの種類",
      "ShowAttachment": "添付を表示",
      "OnFeed": "{0}のフィードに",
      "Author": "作成者",
      "NoTitle": "表題なし",
      "CurrentSelections": "現在の選択項目",
      "AllContent": "すべての内容",
      "CancelLastAction": "最後の動作を取り消す",
      "SearchTips": "検索ヒント",
      "CheckSpelling": "キーワードのスペルを確認してください。",
      "TryUsingFewerKeywords": "より少ない、異なる、または一般的なキーワードを使用してみてください。",
      "SelectFewerFilters": "選択するフィルタ数を減らして検索の幅を広げてください。",
  }
  var locales = String["locales"] || (String["locales"] = {});
  locales["ja"] = _.extend({}, locales["ja"], dict);
  String["toLocaleString"].call(this, { "ja": dict });
  String["locale"] = "ja";
  String["defaultLocale"] = "en";
})();
/*
 * Globalize Culture ja
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

Globalize.addCultureInfo( "ja", "default", {
	name: "ja",
	englishName: "Japanese",
	nativeName: "日本語",
	language: "ja",
	numberFormat: {
		"NaN": "NaN (非数値)",
		negativeInfinity: "-∞",
		positiveInfinity: "+∞",
		percent: {
			pattern: ["-n%","n%"]
		},
		currency: {
			pattern: ["-$n","$n"],
			decimals: 0,
			symbol: "¥"
		}
	},
	calendars: {
		standard: {
			days: {
				names: ["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"],
				namesAbbr: ["日","月","火","水","木","金","土"],
				namesShort: ["日","月","火","水","木","金","土"]
			},
			months: {
				names: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月",""],
				namesAbbr: ["1","2","3","4","5","6","7","8","9","10","11","12",""]
			},
			AM: ["午前","午前","午前"],
			PM: ["午後","午後","午後"],
			eras: [{"name":"西暦","start":null,"offset":0}],
			patterns: {
				d: "yyyy/MM/dd",
				D: "yyyy'年'M'月'd'日'",
				t: "H:mm",
				T: "H:mm:ss",
				f: "yyyy'年'M'月'd'日' H:mm",
				F: "yyyy'年'M'月'd'日' H:mm:ss",
				M: "M'月'd'日'",
				Y: "yyyy'年'M'月'"
			}
		},
		Japanese: {
			name: "Japanese",
			days: {
				names: ["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"],
				namesAbbr: ["日","月","火","水","木","金","土"],
				namesShort: ["日","月","火","水","木","金","土"]
			},
			months: {
				names: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月",""],
				namesAbbr: ["1","2","3","4","5","6","7","8","9","10","11","12",""]
			},
			AM: ["午前","午前","午前"],
			PM: ["午後","午後","午後"],
			eras: [{"name":"平成","start":null,"offset":1867},{"name":"昭和","start":-1812153600000,"offset":1911},{"name":"大正","start":-1357603200000,"offset":1925},{"name":"明治","start":60022080000,"offset":1988}],
			twoDigitYearMax: 99,
			patterns: {
				d: "gg y/M/d",
				D: "gg y'年'M'月'd'日'",
				t: "H:mm",
				T: "H:mm:ss",
				f: "gg y'年'M'月'd'日' H:mm",
				F: "gg y'年'M'月'd'日' H:mm:ss",
				M: "M'月'd'日'",
				Y: "gg y'年'M'月'"
			}
		}
	}
});

}( this ));
