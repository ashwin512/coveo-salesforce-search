(function() {
  var dict = {
      "Unknown": "알 수 없음",
      "And": "및",
      "Authenticating": "{0}을(를) 인증하는 중...",
      "Clear": "{0} 지우기",
      "CompleteQuery": "전체 쿼리",
      "Exclude": "{0} 제외",
      "EnterTag": "태그 추가",
      "Next": "다음",
      "Last": "마지막",
      "Link": "링크",
      "Or": "또는",
      "Previous": "이전",
      "QueryDidntMatchAnyDocuments": "쿼리가 어느 문서와도 일치하지 않습니다.",
      "QueryException": "쿼리에 오류가 있습니다: {0}.",
      "Me": "나",
      "Remove": "제거",
      "Search": "검색",
      "SearchFor": "{0} 검색",
      "ShareQuery": "쿼리 공유",
      "Preferences": "기본 설정",
      "LinkOpeningSettings": "링크 열기 설정",
      "Reauthenticate": "{0} 재인증",
      "ResultsFilteringExpression": "결과 필터링 표현",
      "FiltersInYourPreferences": "사용자의 기본 설정에서 필터",
      "Create": "만들기",
      "SearchIn": "{0}에서 검색",
      "Seconds": "{0} 초 후",
      "ShowingResultsOf": "결과 {0} {2} 중<pl>-{1}</pl>",
      "SwitchTo": "{0}(으)로 전환",
      "Unexclude": "{0} 비제외",
      "ClearAllFilters": "모든 필터 지우기",
      "SkipLogin": "로그인 건너뛰기",
      "LoginInProgress": "로그인 진행 중, 기다려주십시오...",
      "Login": "로그인",
      "GetStarted": "시작하기",
      "More": "더 보기",
      "Less": "덜 보기",
      "Settings": "설정",
      "Score": "점수",
      "ScoreDescription": "점수는 결과 세트 내 위치에서뿐 아니라 빈도 수로부터도 계산됩니다.",
      "Occurrences": "빈도",
      "OccurrencesDescription": "가장 큰 수가 있는 값이 먼저 표시되게 빈도 수로 정렬",
      "Label": "라벨",
      "Of": "중",
      "LabelDescription": "필드 값 알파벳 순 정렬",
      "Value": "값",
      "ValueDescription": "최초 계산된 필드의 값으로 정렬",
      "AlphaAscending": "오름차순 값",
      "AlphaDescending": "내림차순 값",
      "ChiSquare": "카이 제곱",
      "Nosort": "정렬 항목 없음",
      "RelativeFrequency": "상대 빈도",
      "RelativeFrequencyDescription": "값의 상대 빈도를 기준으로 정렬. 덜 흔한 값이 더 높은 위치에 표시됩니다.",
      "DateDistribution": "날짜 분포",
      "Custom": "사용자 정의",
      "CustomDescription": "사용자 정의 순서대로 정렬",
      "ComputedField": "계산된 필드",
      "Ascending": "오름차순",
      "Descending": "내림차순",
      "noResultFor": "{0}에 대한 검색 결과가 없습니다",
      "autoCorrectedQueryTo": "쿼리가 {0}(으)로 자동 교정됐습니다",
      "didYouMean": "다음을 뜻하셨나요: {0}",
      "SuggestedResults": "제안된 결과",
      "SuggestedQueries": "제안된 쿼리",
      "MostRelevantItems": "가장 관련 있는 항목:",
      "AllItems": "모든 항목:",
      "ShowLess": "최소 표시",
      "ShowMore": "최대 표시",
      "HideFacet": "패싯 감추기",
      "ShowFacet": "패싯 표시",
      "AndOthers": "및 기타 {0}",
      "Others": "기타 {0}",
      "MostRelevantPosts": "가장 관련 있는 게시글:",
      "CompleteThread": "전체 스레드:",
      "ShowCompleteThread": "전체 스레드 표시",
      "ShowOnlyTopMatchingPosts": "최대 일치 게시글만 표시",
      "MostRelevantReplies": "가장 관련 있는 댓글:",
      "AllConversation": "모든 대화:",
      "ShowAllConversation": "모든 대화 표시",
      "ShowAllReplies": "모든 댓글 표시",
      "ShowOnlyMostRelevantReplies": "가장 관련 있는 댓글만 표시",
      "Close": "닫기",
      "Open": "열기",
      "OpenInOutlookWhenPossible": "Outlook에서 열기(가능한 경우)",
      "AlwaysOpenInNewWindow": "결과를 항상 새 창에서 열기",
      "QuickView": "간략히 보기",
      "ErrorReport": "오류 보고",
      "OopsError": "앗! 서버에 이상이 생겼습니다.",
      "ProblemPersists": "문제가 계속되면 관리자에게 연락하십시오.",
      "GoBack": "뒤로",
      "Reset": "재설정",
      "Retry": "재시도",
      "MoreInfo": "추가 정보",
      "Username": "사용자 이름",
      "Password": "암호",
      "PostedBy": "게시자",
      "CannotConnect": "서버 주소에 연결할 수 없습니다.",
      "BadUserPass": "암호가 사용자 이름과 일치하지 않습니다.",
      "PleaseEnterYourCredentials": "{0}에 대한 자격 증명을 입력하십시오.",
      "PleaseEnterYourSearchPage": "검색 페이지 URL을 입력하십시오.",
      "Collapse": "축소",
      "Collapsable": "축소 가능",
      "Expand": "확대",
      "Today": "오늘",
      "Yesterday": "어제",
      "Tomorrow": "내일",
      "Duration": "표시 시간: {0}",
      "IndexDuration": "색인 표시 시간: {0}",
      "ProxyDuration": "프록시 표시 시간: {0}",
      "ClientDuration": "클라이언트 표시 시간: {0}",
      "Unavailable": "없음",
      "Reply": "회신",
      "ReplyAll": "모두에게 회신",
      "Forward": "전달",
      "From": "보낸 사람",
      "Caption": "제목",
      "Expression": "표현식",
      "Tab": "탭",
      "Tabs": "탭들",
      "EnterExpressionName": "표현식 이름 입력",
      "EnterExpressionToFilterWith": "다음 결과를 필터할 표현식 입력",
      "SelectTab": "탭 선택",
      "SelectAll": "모두 선택",
      "PageUrl": "검색 페이지 URL",
      "ErrorSavingToDevice": "정보를 사용자의 기기에 저장하는 중 오류",
      "ErrorReadingFromDevice": "정보를 사용자의 기기에서 읽는 중 오류",
      "AppIntro": "Coveo에 관한 질문에 답하고 Coveo 솔루션이 사용자에게 적합한지 알아보는 데 도움을 줄 수 있는 제품 전문가와 상담하십시오. 또는 실제 시연을 이용하십시오!",
      "TryDemo": "시연 이용",
      "ContactUs": "연락처",
      "NewToCoveo": "Coveo가 처음이신가요?",
      "LetUsHelpGetStarted": "저희가 시작을 돕겠습니다",
      "LikesThis": "{0}(이)가 이것을 좋아합니다.",
      "CannotConnectSearchPage": "검색 페이지에 연결할 수 없습니다",
      "AreYouSureDeleteFilter": "{1} 식이 있는 필터 {0}(을)를 삭제하시겠습니까?",
      "OnlineHelp": "온라인 도움말",
      "Done": "완료",
      "SaveFacetState": "이 패싯 상태를 저장",
      "ClearFacetState": "패싯 상태 지우기",
      "DisplayingTheOnlyMessage": "이 대화에서 유일한 메시지를 표시",
      "NoNetworkConnection": "네트워크에 연결할 수 없습니다",
      "UnknownConnection": "알 수 없는 연결",
      "EthernetConnection": "이더넷 연결",
      "WiFi": "WiFi 연결",
      "CELL": "휴대 전화 연결",
      "CELL_2G": "휴대 전화 2G 연결",
      "CELL_3G": "휴대 전화 3G 연결",
      "CELL_4G": "휴대 전화 4G 연결",
      "Relevance": "관련성",
      "Date": "날짜",
      "Amount": "금액",
      "QueryExceptionNoException": "예외가 없습니다",
      "QueryExceptionInvalidSyntax": "구문이 잘못되었습니다",
      "QueryExceptionInvalidCustomField": "사용자 정의 필드가 잘못되었습니다",
      "QueryExceptionInvalidDate": "날짜가 잘못되었습니다",
      "QueryExceptionInvalidExactPhrase": "일치하여야 하는 구가 잘못되었습니다",
      "QueryExceptionInvalidDateOp": "날짜 연산자가 잘못되었습니다",
      "QueryExceptionInvalidNear": "NEAR 연산자가 잘못되었습니다",
      "QueryExceptionInvalidWeightedNear": "가중 NEAR 연산자가 잘못되었습니다",
      "QueryExceptionInvalidTerm": "용어가 잘못되었습니다",
      "QueryExceptionTooManyTerms": "용어가 너무 많습니다",
      "QueryExceptionWildcardTooGeneral": "와일드카드가 너무 일반적입니다",
      "QueryExceptionInvalidSortField": "정렬 필드가 잘못되었습니다",
      "QueryExceptionInvalidSmallStringOp": "단문자열 연산자가 잘못되었습니다",
      "QueryExceptionRequestedResultsMax": "요청 결과 최대 한도",
      "QueryExceptionAggregatedMirrorDead": "집합 미러가 오프라인입니다",
      "QueryExceptionAggregatedMirrorQueryTimeOut": "집합 미러 쿼리 시간 제한",
      "QueryExceptionAggregatedMirrorInvalidBuildNumber": "집합 미러의 잘못된 빌드 번호",
      "QueryExceptionAggregatedMirrorCannotConnect": "집합 미러를 연결할 수 없습니다",
      "QueryExceptionNotEnoughLeadingCharsWildcard": "선행 문자 와일드카드가 충분하지 않습니다",
      "QueryExceptionSecurityInverterNotFound": "보안 인버터를 찾을 수 없습니다",
      "QueryExceptionSecurityInverterAccessDenied": "보안 인버터 접근이 거부됐습니다",
      "QueryExceptionAggregatedMirrorCannotImpersonate": "집합 미러를 가장할 수 없습니다",
      "QueryExceptionUnexpected": "예상하지 않은",
      "QueryExceptionAccessDenied": "접근이 거부됐습니다",
      "QueryExceptionSuperUserTokenInvalid": "슈퍼 유저 토큰이 잘못되었습니다",
      "QueryExceptionSuperUserTokenExpired": "슈퍼 유저 토큰이 만료됐습니다",
      "QueryExceptionLicenseQueriesExpired": "쿼리 라이선스가 만료됐습니다",
      "QueryExceptionLicenseSuperUserTokenNotSupported": "지원하지 않는 라이선스 슈퍼 유저 토큰입니다",
      "QueryExceptionInvalidSession": "세션이 잘못됐습니다",
      "QueryExceptionInvalidDocument": "문서가 잘못됐습니다",
      "QueryExceptionSearchDisabled": "검색 사용 안 함",
      "FileType": "파일 형식",
      "ShowAttachment": "첨부 표시",
      "OnFeed": "{0}의 피드.",
      "Author": "작성자",
      "NoTitle": "제목 없음",
      "CurrentSelections": "현재 선택",
      "AllContent": "모든 콘텐츠",
      "CancelLastAction": "마지막 실행 취소",
      "SearchTips": "검색 요령",
      "CheckSpelling": "핵심어의 철자를 확인합니다.",
      "TryUsingFewerKeywords": "키워드를 더 적게 또는 다양하게 사용하거나 더 일반적인 키워드를 사용해봅니다",
      "SelectFewerFilters": "필터를 줄여 검색 범위를 넓힙니다.",
  }
  var locales = String["locales"] || (String["locales"] = {});
  locales["ko"] = _.extend({}, locales["ko"], dict);
  String["toLocaleString"].call(this, { "ko": dict });
  String["locale"] = "ko";
  String["defaultLocale"] = "en";
})();
/*
 * Globalize Culture ko
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

Globalize.addCultureInfo( "ko", "default", {
	name: "ko",
	englishName: "Korean",
	nativeName: "한국어",
	language: "ko",
	numberFormat: {
		currency: {
			pattern: ["-$n","$n"],
			decimals: 0,
			symbol: "₩"
		}
	},
	calendars: {
		standard: {
			"/": "-",
			days: {
				names: ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],
				namesAbbr: ["일","월","화","수","목","금","토"],
				namesShort: ["일","월","화","수","목","금","토"]
			},
			months: {
				names: ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월",""],
				namesAbbr: ["1","2","3","4","5","6","7","8","9","10","11","12",""]
			},
			AM: ["오전","오전","오전"],
			PM: ["오후","오후","오후"],
			eras: [{"name":"서기","start":null,"offset":0}],
			patterns: {
				d: "yyyy-MM-dd",
				D: "yyyy'년' M'월' d'일' dddd",
				t: "tt h:mm",
				T: "tt h:mm:ss",
				f: "yyyy'년' M'월' d'일' dddd tt h:mm",
				F: "yyyy'년' M'월' d'일' dddd tt h:mm:ss",
				M: "M'월' d'일'",
				Y: "yyyy'년' M'월'"
			}
		},
		Korean: {
			name: "Korean",
			"/": "-",
			days: {
				names: ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],
				namesAbbr: ["일","월","화","수","목","금","토"],
				namesShort: ["일","월","화","수","목","금","토"]
			},
			months: {
				names: ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월",""],
				namesAbbr: ["1","2","3","4","5","6","7","8","9","10","11","12",""]
			},
			AM: ["오전","오전","오전"],
			PM: ["오후","오후","오후"],
			eras: [{"name":"단기","start":null,"offset":-2333}],
			twoDigitYearMax: 4362,
			patterns: {
				d: "gg yyyy-MM-dd",
				D: "gg yyyy'년' M'월' d'일' dddd",
				t: "tt h:mm",
				T: "tt h:mm:ss",
				f: "gg yyyy'년' M'월' d'일' dddd tt h:mm",
				F: "gg yyyy'년' M'월' d'일' dddd tt h:mm:ss",
				M: "M'월' d'일'",
				Y: "gg yyyy'년' M'월'"
			}
		}
	}
});

}( this ));
