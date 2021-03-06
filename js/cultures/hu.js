(function() {
  var dict = {
      "Unknown": "Ismeretlen",
      "And": "ÉS",
      "Authenticating": "Hitelesítés: {0}...",
      "Clear": "Törlés: {0}",
      "CompleteQuery": "Teljes lekérdezés",
      "Exclude": "Kizárás: {0}",
      "EnterTag": "Címke hozzáadása",
      "Next": "Következő",
      "Last": "Utolsó",
      "Link": "Hivatkozás",
      "Or": "VAGY",
      "Previous": "Előző",
      "QueryDidntMatchAnyDocuments": "A lekérdezésnek egyetlen dokumentum sem felelt meg.",
      "QueryException": "A lekérdezés hibás: {0}.",
      "Me": "Én",
      "Remove": "Eltávolítás",
      "Search": "Keresés",
      "SearchFor": "A következő keresése: {0}",
      "ShareQuery": "Lekérdezés megosztása",
      "Preferences": "Preferenciák",
      "LinkOpeningSettings": "Hivatkozások megnyitási beállításai",
      "Reauthenticate": "Újrahitelesítés: {0}",
      "ResultsFilteringExpression": "Eredmények szűrési kifejezései",
      "FiltersInYourPreferences": "Szűrők a preferenciákban",
      "Create": "Létrehozás",
      "SearchIn": "Keresés ebben: {0}",
      "Seconds": "{0} másodperc<pl>alatt</pl>",
      "ShowingResultsOf": "Eredmény<pl>ek</pl> {0}<pl>-{1}</pl> / {2}",
      "SwitchTo": "Váltás: {0}",
      "Unexclude": "Nincs kizárás: {0}",
      "ClearAllFilters": "Összes szűrő törlése",
      "SkipLogin": "Bejelentkezés átugrása",
      "LoginInProgress": "Bejelentkezés folyamatban; kérem, várjon...",
      "Login": "Bejelentkezés",
      "GetStarted": "Első lépések",
      "More": "Több",
      "Less": "Kevesebb",
      "Settings": "Beállítások",
      "Score": "Pontszám",
      "ScoreDescription": "A pontszám az előfordulások számából és az eredményhalmazon belüli pozícióból kerül kiszámításra.",
      "Occurrences": "Előfordulások",
      "OccurrencesDescription": "Rendezés az előfordulások száma alapján, a legnagyobb értékekkel a lista elején.",
      "Label": "Címke",
      "Of": "/",
      "LabelDescription": "Rendezés ábécésorrendben mezőértékek szerint.",
      "Value": "Érték",
      "ValueDescription": "Rendezés az első számított mező értékei szerint",
      "AlphaAscending": "Növekvő érték",
      "AlphaDescending": "Csökkenő érték",
      "ChiSquare": "Khi-négyzet",
      "Nosort": "Nincs rendezés",
      "RelativeFrequency": "Relatív gyakoriság",
      "RelativeFrequencyDescription": "Rendezés az értékek relatív gyakorisága szerint. A kevésbé gyakori értékek előrébb szerepelnek.",
      "DateDistribution": "Dátumeloszlás",
      "Custom": "Egyéni",
      "CustomDescription": "Rendezés egyéni sorrend alapján",
      "ComputedField": "Számított mező",
      "Ascending": "Növekvő",
      "Descending": "Csökkenő",
      "noResultFor": "Nincs eredmény: {0}",
      "autoCorrectedQueryTo": "A rendszer automatikusan javította a lekérdezést: {0}",
      "didYouMean": "Erre gondolt: {0}?",
      "SuggestedResults": "Javasolt eredmények",
      "SuggestedQueries": "Javasolt lekérdezések",
      "MostRelevantItems": "Legrelevánsabb elemek:",
      "AllItems": "Összes elem:",
      "ShowLess": "Kevesebbet mutat",
      "ShowMore": "Többet mutat",
      "HideFacet": "Szűrési jellemző elrejtése",
      "ShowFacet": "Szűrési jellemző megjelenítése",
      "AndOthers": "és {0} további",
      "Others": "{0} további",
      "MostRelevantPosts": "Legrelevánsabb posztok:",
      "CompleteThread": "Teljes szál:",
      "ShowCompleteThread": "Teljes szál megjelenítése",
      "ShowOnlyTopMatchingPosts": "Csak a legmegfelelőbb posztok megjelenítése",
      "MostRelevantReplies": "Legrelevánsabb válaszok:",
      "AllConversation": "Összes beszélgetés:",
      "ShowAllConversation": "Összes beszélgetés megjelenítése",
      "ShowAllReplies": "Összes válasz megjelenítése",
      "ShowOnlyMostRelevantReplies": "Csak a legrelevánsabb válaszok megjelenítése",
      "Close": "Bezárás",
      "Open": "Megnyitás",
      "OpenInOutlookWhenPossible": "Megnyitás az Outlook (ha lehetséges)",
      "AlwaysOpenInNewWindow": "Eredmények megnyitása mindig új ablakban",
      "QuickView": "Gyorsnézet",
      "ErrorReport": "Hibajelentés",
      "OopsError": "Hoppá! A szerveren hiba történt.",
      "ProblemPersists": "Ha a probléma nem szűnik meg, forduljon a rendszergazdához.",
      "GoBack": "Vissza",
      "Reset": "Visszaállítás",
      "Retry": "Újrapróbálkozás",
      "MoreInfo": "További információk",
      "Username": "Felhasználónév",
      "Password": "Jelszó",
      "PostedBy": "Poszt szerzője:",
      "CannotConnect": "Nem sikerült kapcsolódni a szervercímhez.",
      "BadUserPass": "A jelszó és a felhasználónév nem egyezik.",
      "PleaseEnterYourCredentials": "Kérjük, adja meg hitelesítési adatait a következő rendszerhez: {0}.",
      "PleaseEnterYourSearchPage": "Kérjük, adja meg keresőoldalának URL-címét.",
      "Collapse": "Kis méret",
      "Collapsable": "Kis méretre állítható",
      "Expand": "Normál méret",
      "Today": "Ma",
      "Yesterday": "Tegnap",
      "Tomorrow": "Holnap",
      "Duration": "Időtartam: {0}",
      "IndexDuration": "Index időtartama: {0}",
      "ProxyDuration": "Proxy időtartama: {0}",
      "ClientDuration": "Kliens időtartama: {0}",
      "Unavailable": "Nem elérhető",
      "Reply": "Válasz",
      "ReplyAll": "Válasz mindenkinek",
      "Forward": "Továbbítás",
      "From": "Feladó",
      "Caption": "Felirat",
      "Expression": "Kifejezés",
      "Tab": "Fül",
      "Tabs": "Fülek",
      "EnterExpressionName": "Írja be a kifejezés nevét",
      "EnterExpressionToFilterWith": "Írja be az eredmények szűréséhez használandó kifejezést",
      "SelectTab": "Fül kiválasztása",
      "SelectAll": "Összes kiválasztása",
      "PageUrl": "Keresőoldal URL-címe",
      "ErrorSavingToDevice": "Hiba az információk eszközre mentésekor",
      "ErrorReadingFromDevice": "Hiba az információk eszközről való olvasásakor",
      "AppIntro": "Beszéljen egy termékszakértővel, aki örömmel válaszol a Coveóval kapcsolatos kérdéseire, és segít Önnek megtalálni az ideális Coveo-megoldást. Vagy próbálja ki az élő demót!",
      "TryDemo": "Demó kipróbálása",
      "ContactUs": "Kapcsolat",
      "NewToCoveo": "Új Coveo-felhasználó?",
      "LetUsHelpGetStarted": "Segítünk Önnek az első lépésekben",
      "LikesThis": "{0} lájkolja ezt.",
      "CannotConnectSearchPage": "Nem sikerült a keresőoldalhoz való csatlakozás",
      "AreYouSureDeleteFilter": "Biztosan törli a(z) {0} szűrőt a(z) {1} kifejezéssel?",
      "OnlineHelp": "Online súgó",
      "Done": "Kész",
      "SaveFacetState": "Szűrési jellemző állapotának mentése",
      "ClearFacetState": "Szűrési jellemző állapotának törlése",
      "DisplayingTheOnlyMessage": "Beszélgetés egyetlen üzenetének megjelenítése",
      "NoNetworkConnection": "Nincs hálózati kapcsolat",
      "UnknownConnection": "Ismeretlen kapcsolat",
      "EthernetConnection": "Ethernet kapcsolat",
      "WiFi": "WiFi kapcsolat",
      "CELL": "Mobil kapcsolat",
      "CELL_2G": "Mobil 2G kapcsolat",
      "CELL_3G": "Mobil 3G kapcsolat",
      "CELL_4G": "Mobil 4G kapcsolat",
      "Relevance": "Relevancia",
      "Date": "Dátum",
      "Amount": "Mennyiség",
      "QueryExceptionNoException": "Nincs kivétel",
      "QueryExceptionInvalidSyntax": "Érvénytelen szintaxis",
      "QueryExceptionInvalidCustomField": "Érvénytelen egyéni mező",
      "QueryExceptionInvalidDate": "Érvénytelen dátum",
      "QueryExceptionInvalidExactPhrase": "Érvénytelen pontos kifejezés",
      "QueryExceptionInvalidDateOp": "Érvénytelen dátumoperátor",
      "QueryExceptionInvalidNear": "Érvénytelen NEAR operátor",
      "QueryExceptionInvalidWeightedNear": "Érvénytelen súlyozott NEAR",
      "QueryExceptionInvalidTerm": "Érvénytelen kifejezés",
      "QueryExceptionTooManyTerms": "Túl sok kifejezés",
      "QueryExceptionWildcardTooGeneral": "Túl általános helyettesítő karakter",
      "QueryExceptionInvalidSortField": "Érvénytelen rendezési mező",
      "QueryExceptionInvalidSmallStringOp": "Érvénytelen rövid karakterlánc operátor",
      "QueryExceptionRequestedResultsMax": "Kért eredmények maximális száma",
      "QueryExceptionAggregatedMirrorDead": "A távoli index offline állapotú",
      "QueryExceptionAggregatedMirrorQueryTimeOut": "Távoli index lekérdezésének időtúllépése",
      "QueryExceptionAggregatedMirrorInvalidBuildNumber": "A távoli index build-száma érvénytelen",
      "QueryExceptionAggregatedMirrorCannotConnect": "A távoli index csatlakozása sikertelen",
      "QueryExceptionNotEnoughLeadingCharsWildcard": "Nincs elég karakter a helyettesítő karakter előtt",
      "QueryExceptionSecurityInverterNotFound": "A biztonsági inverter nem található",
      "QueryExceptionSecurityInverterAccessDenied": "Biztonsági inverter – hozzáférés megtagadva",
      "QueryExceptionAggregatedMirrorCannotImpersonate": "A távoli index megszemélyesítése sikertelen",
      "QueryExceptionUnexpected": "Váratlan",
      "QueryExceptionAccessDenied": "Hozzáférés megtagadva",
      "QueryExceptionSuperUserTokenInvalid": "A felettes felhasználó tokenje érvénytelen",
      "QueryExceptionSuperUserTokenExpired": "A felettes felhasználó tokenje lejárt",
      "QueryExceptionLicenseQueriesExpired": "A lekérdezési licenc lejárt",
      "QueryExceptionLicenseSuperUserTokenNotSupported": "Az engedély felettes felhasználójának tokenje nem támogatott",
      "QueryExceptionInvalidSession": "Érvénytelen munkamenet",
      "QueryExceptionInvalidDocument": "Érvénytelen dokumentum",
      "QueryExceptionSearchDisabled": "Keresés letiltva",
      "FileType": "Fájltípus",
      "ShowAttachment": "Melléklet megjelenítése",
      "OnFeed": "{0} adatfolyamán.",
      "Author": "Szerző",
      "NoTitle": "Nincs cím",
      "CurrentSelections": "Jelenlegi kijelölések",
      "AllContent": "Összes tartalom",
      "CancelLastAction": "Utolsó művelet törlése",
      "SearchTips": "Keresési tippek",
      "CheckSpelling": "Kulcsszavak helyesírásának ellenőrzése.",
      "TryUsingFewerKeywords": "Próbálkozzon kisebb számú, eltérő vagy általánosabb kulcsszavakkal.",
      "SelectFewerFilters": "A keresés bővítéséhez csökkentse a szűrők számát.",
  }
  var locales = String["locales"] || (String["locales"] = {});
  locales["hu"] = _.extend({}, locales["hu"], dict);
  String["toLocaleString"].call(this, { "hu": dict });
  String["locale"] = "hu";
  String["defaultLocale"] = "en";
})();
/*
 * Globalize Culture hu
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

Globalize.addCultureInfo( "hu", "default", {
	name: "hu",
	englishName: "Hungarian",
	nativeName: "magyar",
	language: "hu",
	numberFormat: {
		",": " ",
		".": ",",
		"NaN": "nem szám",
		negativeInfinity: "negatív végtelen",
		positiveInfinity: "végtelen",
		percent: {
			",": " ",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			",": " ",
			".": ",",
			symbol: "Ft"
		}
	},
	calendars: {
		standard: {
			"/": ".",
			firstDay: 1,
			days: {
				names: ["vasárnap","hétfő","kedd","szerda","csütörtök","péntek","szombat"],
				namesAbbr: ["V","H","K","Sze","Cs","P","Szo"],
				namesShort: ["V","H","K","Sze","Cs","P","Szo"]
			},
			months: {
				names: ["január","február","március","április","május","június","július","augusztus","szeptember","október","november","december",""],
				namesAbbr: ["jan.","febr.","márc.","ápr.","máj.","jún.","júl.","aug.","szept.","okt.","nov.","dec.",""]
			},
			AM: ["de.","de.","DE."],
			PM: ["du.","du.","DU."],
			eras: [{"name":"i.sz.","start":null,"offset":0}],
			patterns: {
				d: "yyyy.MM.dd.",
				D: "yyyy. MMMM d.",
				t: "H:mm",
				T: "H:mm:ss",
				f: "yyyy. MMMM d. H:mm",
				F: "yyyy. MMMM d. H:mm:ss",
				M: "MMMM d.",
				Y: "yyyy. MMMM"
			}
		}
	}
});

}( this ));
