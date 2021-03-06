(function() {
  var dict = {
      "Unknown": "Neznámý",
      "And": "A",
      "Authenticating": "Probíhá ověření uživatele {0}...",
      "Clear": "Vymazat {0}",
      "CompleteQuery": "Celý dotaz",
      "Exclude": "Vyloučit {0}",
      "EnterTag": "Přidat značku",
      "Next": "Další",
      "Last": "Poslední",
      "Link": "Odkaz",
      "Or": "NEBO",
      "Previous": "Předchozí",
      "QueryDidntMatchAnyDocuments": "Vašemu dotazu nevyhovovaly žádné dokumenty.",
      "QueryException": "Váš dotaz obsahuje chybu: {0}.",
      "Me": "Já",
      "Remove": "Odstranit",
      "Search": "Hledat",
      "SearchFor": "Hledat {0}",
      "ShareQuery": "Sdílet dotaz",
      "Preferences": "Předvolby",
      "LinkOpeningSettings": "Nastavení otevírání odkazů",
      "Reauthenticate": "Znovu ověřit uživatele {0}",
      "ResultsFilteringExpression": "Výrazy pro filtrování výsledků",
      "FiltersInYourPreferences": "Filtry ve vašich předvolbách",
      "Create": "Vytvořit",
      "SearchIn": "Hledat v {0}",
      "Seconds": "za dobu: {0}",
      "ShowingResultsOf": "<sn>Výsledek</sn><pl>Výsledky</pl> {0}<pl>–{1}</pl> ze {2}",
      "SwitchTo": "Přepnout na {0}",
      "Unexclude": "Znovu zahrnout {0}",
      "ClearAllFilters": "Vymazat všechny filtry",
      "SkipLogin": "Přeskočit přihlášení",
      "LoginInProgress": "Probíhá přihlašování, čekejte prosím...",
      "Login": "Přihlásit se",
      "GetStarted": "Začít",
      "More": "Více",
      "Less": "Méně",
      "Settings": "Nastavení",
      "Score": "Skóre",
      "ScoreDescription": "Skóre je vypočítáváno z počtu výskytů a pozice v sadě výsledků.",
      "Occurrences": "Výskyty",
      "OccurrencesDescription": "Řazení dle počtu výskytů. Hodnoty s nejvyšším počtem výskytů se zobrazují jako první.",
      "Label": "Popis",
      "Of": "ze",
      "LabelDescription": "Řazení hodnot polí podle abecedy.",
      "Value": "Hodnota",
      "ValueDescription": "Řazení dle hodnot prvního vypočítaného pole",
      "AlphaAscending": "Dle hodnoty vzestupně",
      "AlphaDescending": "Dle hodnoty sestupně",
      "ChiSquare": "Chí kvadrát",
      "Nosort": "Žádné řazení",
      "RelativeFrequency": "Relativní četnost",
      "RelativeFrequencyDescription": "Řazení dle relativní četnosti hodnot. Méně obvyklé hodnoty se zobrazují výše.",
      "DateDistribution": "Rozložení dat",
      "Custom": "Vlastní",
      "CustomDescription": "Řazení dle vlastního příkazu",
      "ComputedField": "Vypočítané pole",
      "Ascending": "Vzestupně",
      "Descending": "Sestupně",
      "noResultFor": "Pro dotaz {0} nebyly nalezeny žádné výsledky",
      "autoCorrectedQueryTo": "Dotaz byl automaticky opraven na {0}",
      "didYouMean": "Měli jste na mysli: {0}",
      "SuggestedResults": "Navrhované výsledky",
      "SuggestedQueries": "Navrhované dotazy",
      "MostRelevantItems": "Nejrelevantnější položky:",
      "AllItems": "Všechny položky:",
      "ShowLess": "Zobrazit méně",
      "ShowMore": "Zobrazit více",
      "HideFacet": "Skrýt omezující vlastnost",
      "ShowFacet": "Zobrazit omezující vlastnost",
      "AndOthers": "a počet dalších: {0}",
      "Others": "počet dalších: {0}",
      "MostRelevantPosts": "Nejrelevantnější příspěvky:",
      "CompleteThread": "Celé vlákno:",
      "ShowCompleteThread": "Zobrazit celé vlákno",
      "ShowOnlyTopMatchingPosts": "Zobrazit pouze nejlépe vyhovující příspěvky",
      "MostRelevantReplies": "Nejrelevantnější odpovědi:",
      "AllConversation": "Celá konverzace:",
      "ShowAllConversation": "Zobrazit celou konverzaci",
      "ShowAllReplies": "Zobrazit všechny odpovědi",
      "ShowOnlyMostRelevantReplies": "Zobrazit pouze nejrelevantnější odpovědi",
      "Close": "Zavřít",
      "Open": "Otevřít",
      "OpenInOutlookWhenPossible": "Otevřít v aplikaci Outlook (je-li to možné)",
      "AlwaysOpenInNewWindow": "Výsledky vždy otevřít v novém okně",
      "QuickView": "Rychlé zobrazení",
      "ErrorReport": "Zpráva o chybách",
      "OopsError": "Ale ne! Na serveru došlo k chybě.",
      "ProblemPersists": "Pokud problém přetrvává, spojte se se správcem.",
      "GoBack": "Jít zpět",
      "Reset": "Resetovat",
      "Retry": "Opakovat",
      "MoreInfo": "Více informací",
      "Username": "Uživatelské jméno",
      "Password": "Heslo",
      "PostedBy": "Zveřejnil uživatel",
      "CannotConnect": "Na adresu serveru se nelze připojit.",
      "BadUserPass": "Heslo neodpovídá uživatelskému jménu.",
      "PleaseEnterYourCredentials": "Zadejte přihlašovací údaje k systému {0}.",
      "PleaseEnterYourSearchPage": "Zadejte adresu URL stránky pro vyhledávání",
      "Collapse": "Sbalit",
      "Collapsable": "Sbalitelné",
      "Expand": "Rozbalit",
      "Today": "Dnes",
      "Yesterday": "Včera",
      "Tomorrow": "Zítra",
      "Duration": "Trvání: {0}",
      "IndexDuration": "Trvání indexu: {0}",
      "ProxyDuration": "Trvání serveru proxy: {0}",
      "ClientDuration": "Trvání klienta: {0}",
      "Unavailable": "Nedostupné",
      "Reply": "Odpovědět",
      "ReplyAll": "Odpovědět všem",
      "Forward": "Přeposlat",
      "From": "Od",
      "Caption": "Titulek",
      "Expression": "Výraz",
      "Tab": "Záložka",
      "Tabs": "Záložky",
      "EnterExpressionName": "Zadejte název výrazu",
      "EnterExpressionToFilterWith": "Zadejte výraz pro filtrování výsledků",
      "SelectTab": "Vybrat záložku",
      "SelectAll": "Vybrat vše",
      "PageUrl": "Adresa URL stránky pro vyhledávání",
      "ErrorSavingToDevice": "Při ukládání informací na vaše zařízení došlo k chybě",
      "ErrorReadingFromDevice": "Při čtení informací z vašeho zařízení došlo k chybě",
      "AppIntro": "Promluvte si s produktovým specialistou, který vám pomůže vybrat nejvhodnější řešení Coveo a zodpoví vaše dotazy týkající se této platformy. Vyzkoušet můžete rovněž živou ukázku!",
      "TryDemo": "Vyzkoušet ukázku",
      "ContactUs": "Spojte se s námi",
      "NewToCoveo": "Teprve se s platformou Coveo seznamujete?",
      "LetUsHelpGetStarted": "Pomůžeme vám začít",
      "LikesThis": "Uživatelé, kterým se to líbí: {0}.",
      "CannotConnectSearchPage": "K vaší stránce pro vyhledávání se nelze připojit",
      "AreYouSureDeleteFilter": "Opravdu si přejete odstranit filtr {0} s výrazem {1}",
      "OnlineHelp": "Online nápověda",
      "Done": "Hotovo",
      "SaveFacetState": "Uložit tento stav omezující vlastnosti",
      "ClearFacetState": "Vymazat stav omezující vlastnosti",
      "DisplayingTheOnlyMessage": "Je zobrazena jediná zpráva této konverzace",
      "NoNetworkConnection": "Žádné připojení k síti",
      "UnknownConnection": "Neznámé připojení",
      "EthernetConnection": "Připojení k síti Ethernet",
      "WiFi": "Připojení k síti Wi-Fi",
      "CELL": "Mobilní připojení",
      "CELL_2G": "Mobilní připojení 2G",
      "CELL_3G": "Mobilní připojení 3G",
      "CELL_4G": "Mobilní připojení 4G",
      "Relevance": "Relevance",
      "Date": "Datum",
      "Amount": "Množství",
      "QueryExceptionNoException": "Žádná výjimka",
      "QueryExceptionInvalidSyntax": "Neplatná syntaxe",
      "QueryExceptionInvalidCustomField": "Neplatné vlastní pole",
      "QueryExceptionInvalidDate": "Neplatné datum",
      "QueryExceptionInvalidExactPhrase": "Neplatná přesná fráze",
      "QueryExceptionInvalidDateOp": "Neplatný operátor data",
      "QueryExceptionInvalidNear": "Neplatný operátor NEAR",
      "QueryExceptionInvalidWeightedNear": "Neplatný vážený operátor NEAR",
      "QueryExceptionInvalidTerm": "Neplatný termín",
      "QueryExceptionTooManyTerms": "Příliš mnoho termínů",
      "QueryExceptionWildcardTooGeneral": "Výraz se zástupnými znaky je příliš obecný",
      "QueryExceptionInvalidSortField": "Neplatné pole řazení",
      "QueryExceptionInvalidSmallStringOp": "Neplatný operátor pro krátký řetězec",
      "QueryExceptionRequestedResultsMax": "Maximální počet požadovaných výsledků",
      "QueryExceptionAggregatedMirrorDead": "Vzdálená kopie indexů je offline",
      "QueryExceptionAggregatedMirrorQueryTimeOut": "Vypršel časový limit dotazu na vzdálenou kopii indexů",
      "QueryExceptionAggregatedMirrorInvalidBuildNumber": "Neplatné číslo sestavení vzdálené kopie indexů",
      "QueryExceptionAggregatedMirrorCannotConnect": "Nelze připojit vzdálenou kopii indexů",
      "QueryExceptionNotEnoughLeadingCharsWildcard": "Před zástupným znakem není dostatečný počet jiných znaků",
      "QueryExceptionSecurityInverterNotFound": "Blokování bezpečnostního ověření nebylo nalezeno",
      "QueryExceptionSecurityInverterAccessDenied": "Byl odepřen přístup k blokování bezpečnostního ověření",
      "QueryExceptionAggregatedMirrorCannotImpersonate": "Na vzdálené kopii indexů nelze provést dotaz jménem uživatele",
      "QueryExceptionUnexpected": "Neočekávané",
      "QueryExceptionAccessDenied": "Přístup odepřen",
      "QueryExceptionSuperUserTokenInvalid": "Token superuživatele je neplatný",
      "QueryExceptionSuperUserTokenExpired": "Platnost tokenu superuživatele skončila",
      "QueryExceptionLicenseQueriesExpired": "Skončila platnost licence dotazů",
      "QueryExceptionLicenseSuperUserTokenNotSupported": "Token superuživatele licence není podporován",
      "QueryExceptionInvalidSession": "Neplatná relace",
      "QueryExceptionInvalidDocument": "Neplatný dokument",
      "QueryExceptionSearchDisabled": "Hledání je zakázáno",
      "FileType": "Typ souboru",
      "ShowAttachment": "Zobrazit přílohu",
      "OnFeed": "v informačním kanále uživatele {0}.",
      "Author": "Autor",
      "NoTitle": "Žádný název",
      "CurrentSelections": "Aktuální výběr",
      "AllContent": "Veškerý obsah",
      "CancelLastAction": "Zrušit poslední akci",
      "SearchTips": "Tipy pro hledání",
      "CheckSpelling": "Zkontrolujte pravopis klíčových slov.",
      "TryUsingFewerKeywords": "Zkuste použít méně, více či jiná obecná klíčová slova.",
      "SelectFewerFilters": "Chcete-li rozšířit hledání, vyberte méně filtrů.",
  }
  var locales = String["locales"] || (String["locales"] = {});
  locales["cs"] = _.extend({}, locales["cs"], dict);
  String["toLocaleString"].call(this, { "cs": dict });
  String["locale"] = "cs";
  String["defaultLocale"] = "en";
})();
/*
 * Globalize Culture cs
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

Globalize.addCultureInfo( "cs", "default", {
	name: "cs",
	englishName: "Czech",
	nativeName: "čeština",
	language: "cs",
	numberFormat: {
		",": " ",
		".": ",",
		"NaN": "Není číslo",
		negativeInfinity: "-nekonečno",
		positiveInfinity: "+nekonečno",
		percent: {
			pattern: ["-n%","n%"],
			",": " ",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			",": " ",
			".": ",",
			symbol: "Kč"
		}
	},
	calendars: {
		standard: {
			"/": ".",
			firstDay: 1,
			days: {
				names: ["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"],
				namesAbbr: ["ne","po","út","st","čt","pá","so"],
				namesShort: ["ne","po","út","st","čt","pá","so"]
			},
			months: {
				names: ["leden","únor","březen","duben","květen","červen","červenec","srpen","září","říjen","listopad","prosinec",""],
				namesAbbr: ["1","2","3","4","5","6","7","8","9","10","11","12",""]
			},
			monthsGenitive: {
				names: ["ledna","února","března","dubna","května","června","července","srpna","září","října","listopadu","prosince",""],
				namesAbbr: ["1","2","3","4","5","6","7","8","9","10","11","12",""]
			},
			AM: ["dop.","dop.","DOP."],
			PM: ["odp.","odp.","ODP."],
			eras: [{"name":"n. l.","start":null,"offset":0}],
			patterns: {
				d: "d.M.yyyy",
				D: "d. MMMM yyyy",
				t: "H:mm",
				T: "H:mm:ss",
				f: "d. MMMM yyyy H:mm",
				F: "d. MMMM yyyy H:mm:ss",
				M: "dd MMMM",
				Y: "MMMM yyyy"
			}
		}
	}
});

}( this ));
