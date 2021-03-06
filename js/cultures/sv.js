(function() {
  var dict = {
      "Unknown": "Okänd",
      "And": "OCH",
      "Authenticating": "Autentiserar {0}…",
      "Clear": "Rensa {0}",
      "CompleteQuery": "Fullständig förfrågan",
      "Exclude": "Exkludera {0}",
      "EnterTag": "Lägg till etikett",
      "Next": "Nästa",
      "Last": "Sista",
      "Link": "Länk",
      "Or": "ELLER",
      "Previous": "Tidigare",
      "QueryDidntMatchAnyDocuments": "Din förfrågan matchade inte några dokument",
      "QueryException": "Din förfrågan har ett fel: {0}.",
      "Me": "Jag",
      "Remove": "Ta bort",
      "Search": "Sök",
      "SearchFor": "Sök efter {0}",
      "ShareQuery": "Dela Förfrågan",
      "Preferences": "Preferenser",
      "LinkOpeningSettings": "Inställningar för Öppnande av Länk",
      "Reauthenticate": "Återautentisera {0}",
      "ResultsFilteringExpression": "Uttryck Resultatfiltrering",
      "FiltersInYourPreferences": "Filtrerar bland dina preferenser",
      "Create": "Skapa",
      "SearchIn": "Sök i {0}",
      "Seconds": "I {0} sekund <pl>sekunder</pl>",
      "ShowingResultsOf": "Resultat<pl>en</pl> {0}<pl>-{1}</pl> av {2}",
      "SwitchTo": "Byt till {0}",
      "Unexclude": "Ta bort exkludering {0}",
      "ClearAllFilters": "Rensa Alla Filter",
      "SkipLogin": "Hoppa Över Inloggning",
      "LoginInProgress": "Inloggning sker, var god vänta...",
      "Login": "Logga in",
      "GetStarted": "Kom igång",
      "More": "Mer",
      "Less": "Färre",
      "Settings": "Inställningar",
      "Score": "Poäng",
      "ScoreDescription": "Poängen kalkyleras med antal förekomster såväl från positionen i den aktuella resultatuppsättningen",
      "Occurrences": "Förekomster",
      "OccurrencesDescription": "Sortera genom antalet förekomster där högsta numret visas först",
      "Label": "Etikett",
      "Of": "av",
      "LabelDescription": "Sortera alfabetiskt på fältvärden",
      "Value": "Värde",
      "ValueDescription": "Sortera på värdena på de först uträknade fälten",
      "AlphaAscending": "Värde stigande",
      "AlphaDescending": "Värde sjunkande",
      "ChiSquare": "Chi-Ruta",
      "Nosort": "Ingen sort",
      "RelativeFrequency": "Relativ frekvens",
      "RelativeFrequencyDescription": "Sortera baserat på relativa frekvensvärden. Mindre vanliga värden kommer visas högre upp.",
      "DateDistribution": "Datumdistribution",
      "Custom": "Inställning",
      "CustomDescription": "Sortera baserat på en inställd order",
      "ComputedField": "Kalkylerat fält",
      "Ascending": "Stigande",
      "Descending": "Sjunkande",
      "noResultFor": "Inga resultat för {0}",
      "autoCorrectedQueryTo": "Förfrågan korrigerades automatiskt till {0}",
      "didYouMean": "Menade du: {0}",
      "SuggestedResults": "Föreslagna resultat",
      "SuggestedQueries": "Föreslagna förfrågan",
      "MostRelevantItems": "Mest relevanta objekt:",
      "AllItems": "Alla objekt:",
      "ShowLess": "Visa mindre",
      "ShowMore": "Visa mer",
      "HideFacet": "Göm sida",
      "ShowFacet": "Visa sida",
      "AndOthers": "och {0} <sn>annan</sn><pl>andra</pl>",
      "Others": "{0} <sn>annan</sn><pl>andra</pl>",
      "MostRelevantPosts": "Mest relevanta poster:",
      "CompleteThread": "Fullständig Tråd:",
      "ShowCompleteThread": "Visa Fullständig Tråd:",
      "ShowOnlyTopMatchingPosts": "Visa Endast Mest Matchande Poster",
      "MostRelevantReplies": "Mest Relevanta Svar:",
      "AllConversation": "Hel konversation:",
      "ShowAllConversation": "Visa Hel Konversation",
      "ShowAllReplies": "Visa Alla Svar",
      "ShowOnlyMostRelevantReplies": "Visa Endast Mest Relevanta Svar",
      "Close": "Stäng",
      "Open": "Öppna",
      "OpenInOutlookWhenPossible": "Öppna i Outlook (när det är möjligt)",
      "AlwaysOpenInNewWindow": "Öppna alltid resultat i nytt fönster",
      "QuickView": "Snabbvy",
      "ErrorReport": "Felrapport",
      "OopsError": "Oj! Det blev någonting fel på servern.",
      "ProblemPersists": "Om problemet fortgår kontakta administratör",
      "GoBack": "Gå tillbaka",
      "Reset": "Återställ",
      "Retry": "Försök igen",
      "MoreInfo": "Mer information",
      "Username": "Användarnamn",
      "Password": "Lösenord",
      "PostedBy": "Upplagd av",
      "CannotConnect": "Kan inte koppla upp till serveradressen.",
      "BadUserPass": "Lösenord matchar inte användarnamn.",
      "PleaseEnterYourCredentials": "Skriv in dina referenser för {0}",
      "PleaseEnterYourSearchPage": "Vänligen skriv in URL för din söksida",
      "Collapse": "Komprimera",
      "Collapsable": "Komprimerbar",
      "Expand": "Expandera",
      "Today": "Idag",
      "Yesterday": "Igår",
      "Tomorrow": "Imorgon",
      "Duration": "Varaktighet: {0}",
      "IndexDuration": "Indexvaraktighet: {0}",
      "ProxyDuration": "Proxyvaraktighet: {0}",
      "ClientDuration": "Klientvaraktighet: {0}",
      "Unavailable": "Otillgänglig",
      "Reply": "Svara",
      "ReplyAll": "Svara alla",
      "Forward": "Framåt",
      "From": "Från",
      "Caption": "Rubrik",
      "Expression": "Uttryck",
      "Tab": "Flik",
      "Tabs": "Flikar",
      "EnterExpressionName": "Skriv namn på uttryck",
      "EnterExpressionToFilterWith": "Skriv ett uttryck att filtrera resultat med",
      "SelectTab": "Välj Flik",
      "SelectAll": "Välj Alla",
      "PageUrl": "Söksida URL",
      "ErrorSavingToDevice": "Fel när information sparades på din enhet",
      "ErrorReadingFromDevice": "Fel när information inlästes från din enhet",
      "AppIntro": "Tala med en produktspecialist som kan svara på dina frågor om Coveo och hjälpa dig välja vilken Coveolösning som passar dig. Eller, prova en live demo",
      "TryDemo": "Prova Demo",
      "ContactUs": "Kontakta oss.",
      "NewToCoveo": "Ny Coveoanvändare?",
      "LetUsHelpGetStarted": "Låt oss hjälpa dig komma igång",
      "LikesThis": "{0} Gillar denna.",
      "CannotConnectSearchPage": "Kan ej koppla upp till din söksida",
      "AreYouSureDeleteFilter": "Är du säker på att vill radera filter{0} med uttryck {1}",
      "OnlineHelp": "Onlinehjälp",
      "Done": "Klar",
      "SaveFacetState": "Spara sidotillstånd",
      "ClearFacetState": "Rensa sidotillstånd",
      "DisplayingTheOnlyMessage": "Visar det enda meddelandet i denna konversation",
      "NoNetworkConnection": "Ingen nätverksuppkoppling",
      "UnknownConnection": "Okänd uppkoppling",
      "EthernetConnection": "Ethernet-uppkoppling",
      "WiFi": "WiFi- uppkoppling",
      "CELL": "Mobil-uppkoppling",
      "CELL_2G": "Mobil 2G-uppkoppling",
      "CELL_3G": "Mobil 3G-uppkoppling",
      "CELL_4G": "Mobil 4G-uppkoppling",
      "Relevance": "Relevans",
      "Date": "Datum",
      "Amount": "Mängd",
      "QueryExceptionNoException": "Inget undantag",
      "QueryExceptionInvalidSyntax": "Ogiltig syntax",
      "QueryExceptionInvalidCustomField": "Ogiltigt inställt fält",
      "QueryExceptionInvalidDate": "Ogiltigt datum",
      "QueryExceptionInvalidExactPhrase": "Ogiltigt exakt fras",
      "QueryExceptionInvalidDateOp": "Ogiltig datumoperatör",
      "QueryExceptionInvalidNear": "Ogiltig NÄR-operatör",
      "QueryExceptionInvalidWeightedNear": "Ogiltig vägd NÄR",
      "QueryExceptionInvalidTerm": "Ogiltig term",
      "QueryExceptionTooManyTerms": "För många termer",
      "QueryExceptionWildcardTooGeneral": "Vildkort för omfattande",
      "QueryExceptionInvalidSortField": "Ogiltigt sorteringsfält",
      "QueryExceptionInvalidSmallStringOp": "Ogiltig Liten Stringoperatör",
      "QueryExceptionRequestedResultsMax": "Begärt resultat Maximum",
      "QueryExceptionAggregatedMirrorDead": "Fjärrindexkopia är offline",
      "QueryExceptionAggregatedMirrorQueryTimeOut": "Fjärrindexkopia förfrågan tidsgräns gått ut",
      "QueryExceptionAggregatedMirrorInvalidBuildNumber": "Fjärrindexkopia ogiltigt byggnummer",
      "QueryExceptionAggregatedMirrorCannotConnect": "Fjärrindexkopia kan ej koppla upp",
      "QueryExceptionNotEnoughLeadingCharsWildcard": "Inte tillräckligt ledande karaktär vildkort",
      "QueryExceptionSecurityInverterNotFound": "Säkerhetsinverterare ej funnen",
      "QueryExceptionSecurityInverterAccessDenied": "Säkerhetsinverterare åtkomst nekad",
      "QueryExceptionAggregatedMirrorCannotImpersonate": "Fjärrindexkopia kan ej behandla förfrågan för användare",
      "QueryExceptionUnexpected": "Oväntad",
      "QueryExceptionAccessDenied": "Åtkomst nekad",
      "QueryExceptionSuperUserTokenInvalid": "Superanvändarlösen ogiltig",
      "QueryExceptionSuperUserTokenExpired": "Superanvändarlösen har gått ut",
      "QueryExceptionLicenseQueriesExpired": "Licensen för förfrågan har gått ut",
      "QueryExceptionLicenseSuperUserTokenNotSupported": "Licens superanvändarlösen stöds ej",
      "QueryExceptionInvalidSession": "Ogiltig session",
      "QueryExceptionInvalidDocument": "Ogiltigt dokument",
      "QueryExceptionSearchDisabled": "Sökning inaktiverad",
      "FileType": "Filtyp",
      "ShowAttachment": "Visa bilaga",
      "OnFeed": "på {0}´s feed",
      "Author": "Författare",
      "NoTitle": "Ingen Titel",
      "CurrentSelections": "Aktuella val",
      "AllContent": "Allt innehåll",
      "CancelLastAction": "Avbryt senaste åtgärd",
      "SearchTips": "Söktips",
      "CheckSpelling": "Kontrollera stavningen på dina nyckelord",
      "TryUsingFewerKeywords": "Försök att använda färre, annorlunda eller mer generella nyckelord",
      "SelectFewerFilters": "Välj färre filter för att bredda din sökning.",
  }
  var locales = String["locales"] || (String["locales"] = {});
  locales["sv"] = _.extend({}, locales["sv"], dict);
  String["toLocaleString"].call(this, { "sv": dict });
  String["locale"] = "sv";
  String["defaultLocale"] = "en";
})();
/*
 * Globalize Culture sv
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

Globalize.addCultureInfo( "sv", "default", {
	name: "sv",
	englishName: "Swedish",
	nativeName: "svenska",
	language: "sv",
	numberFormat: {
		",": " ",
		".": ",",
		negativeInfinity: "-INF",
		positiveInfinity: "INF",
		percent: {
			",": " ",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			",": ".",
			".": ",",
			symbol: "kr"
		}
	},
	calendars: {
		standard: {
			"/": "-",
			firstDay: 1,
			days: {
				names: ["söndag","måndag","tisdag","onsdag","torsdag","fredag","lördag"],
				namesAbbr: ["sö","må","ti","on","to","fr","lö"],
				namesShort: ["sö","må","ti","on","to","fr","lö"]
			},
			months: {
				names: ["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december",""],
				namesAbbr: ["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "yyyy-MM-dd",
				D: "'den 'd MMMM yyyy",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "'den 'd MMMM yyyy HH:mm",
				F: "'den 'd MMMM yyyy HH:mm:ss",
				M: "'den 'd MMMM",
				Y: "MMMM yyyy"
			}
		}
	}
});

}( this ));
