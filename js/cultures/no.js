(function() {
  var dict = {
      "Unknown": "Ukjent",
      "And": "OG",
      "Authenticating": "Autentiserer {0}…",
      "Clear": "Tøm {0}",
      "CompleteQuery": "Fullstendig forespørsel",
      "Exclude": "Ekskluder {0}",
      "EnterTag": "Legg til tag",
      "Next": "Neste",
      "Last": "Siste",
      "Link": "Link",
      "Or": "ELLER",
      "Previous": "Forrige",
      "QueryDidntMatchAnyDocuments": "Din forespørsel samsvarte ikke med noen dokumenter.",
      "QueryException": "Din forespørsel har en feil: {0}.",
      "Me": "Meg",
      "Remove": "Fjern",
      "Search": "Søk",
      "SearchFor": "Søk etter{0}",
      "ShareQuery": "Del forespørsel",
      "Preferences": "Preferanser",
      "LinkOpeningSettings": "Innstillinger for åpning av link",
      "Reauthenticate": "Autentiser på nytt {0}",
      "ResultsFilteringExpression": "Uttrykk for resultatfiltrering",
      "FiltersInYourPreferences": "Filtre i dine preferanser",
      "Create": "Opprett",
      "SearchIn": "Søk i {0}",
      "Seconds": "om {0} sekund<pl>er</pl>",
      "ShowingResultsOf": "Resultat<pl>er</pl>-{0}<pl>-{1}</pl> av {2}",
      "SwitchTo": "Bytt til {0}",
      "Unexclude": "Ikke ekskluder {0}",
      "ClearAllFilters": "Tøm alle filtre",
      "SkipLogin": "Hopp over innlogging",
      "LoginInProgress": "Innlogging pågår, vennligst vent…",
      "Login": "Logg inn",
      "GetStarted": "Kom i gang",
      "More": "Mer",
      "Less": "Mindre",
      "Settings": "Innstillinger",
      "Score": "Skår",
      "ScoreDescription": "Skåren er beregnet ut fra antall hendelser så vel som posisjonen i resultatsettet.",
      "Occurrences": "Hendelser",
      "OccurrencesDescription": "Sorter etter antall hendelser med verdier med høyest nummer først.",
      "Label": "Etikett",
      "Of": "av",
      "LabelDescription": "Sorter alfabetisk etter feltverdiene",
      "Value": "Verdi",
      "ValueDescription": "Sorter etter verdiene i det første beregnede feltet",
      "AlphaAscending": "Verdi stigende",
      "AlphaDescending": "Verdi synkende",
      "ChiSquare": "Chi-kvadrat",
      "Nosort": "Ingen sortering",
      "RelativeFrequency": "Relativ frekvens",
      "RelativeFrequencyDescription": "Sorter basert på den relative frekvensen av verdier. Mindre vanlige verdier vil vises høyere.",
      "DateDistribution": "Datodistribusjon",
      "Custom": "Tilpasset",
      "CustomDescription": "Sorter basert på en tilpasset rekkefølge",
      "ComputedField": "Beregnet felt",
      "Ascending": "Stigende",
      "Descending": "Synkende",
      "noResultFor": "Ingen resultater for {0}",
      "autoCorrectedQueryTo": "Forespørsel ble automatisk korrigert til {0}",
      "didYouMean": "Mente du: {0}",
      "SuggestedResults": "Foreslåtte resultater",
      "SuggestedQueries": "Foreslåtte forespørsler",
      "MostRelevantItems": "Mest relevante elementer:",
      "AllItems": "Alle elementer:",
      "ShowLess": "Vis mindre",
      "ShowMore": "Vis mer",
      "HideFacet": "Skjul fasett",
      "ShowFacet": "Vis fasett",
      "AndOthers": "og {0} <sn>annen</sn><pl>andre</pl>",
      "Others": "{0} <sn>annen</sn><pl>andre</pl>",
      "MostRelevantPosts": "Mest relevante poster",
      "CompleteThread": "Fullstendig tråd:",
      "ShowCompleteThread": "Vis fullstendig tråd",
      "ShowOnlyTopMatchingPosts": "Vis kun de postene som matcher best",
      "MostRelevantReplies": "Mest relevante svar",
      "AllConversation": "All konversasjon:",
      "ShowAllConversation": "Vis all konversasjon",
      "ShowAllReplies": "Vis alle svar",
      "ShowOnlyMostRelevantReplies": "Vis kun de mest relevante svarene",
      "Close": "Lukk",
      "Open": "Åpne",
      "OpenInOutlookWhenPossible": "Åpne i Outlook (hvor mulig)",
      "AlwaysOpenInNewWindow": "Åpne alltid resultater i nytt vindu",
      "QuickView": "Hurtigvisning",
      "ErrorReport": "Feilrapport",
      "OopsError": "Ops! Noe gikk galt på serveren.",
      "ProblemPersists": "Kontakt administratoren hvis problemet vedvarer.",
      "GoBack": "Gå tilbake",
      "Reset": "Tilbakestill",
      "Retry": "Prøv på nytt",
      "MoreInfo": "Mer informasjon",
      "Username": "Brukernavn",
      "Password": "Passord",
      "PostedBy": "Postet av",
      "CannotConnect": "Kan ikke koble til serveradressen.",
      "BadUserPass": "Passord samsvarer ikke med brukernavnet.",
      "PleaseEnterYourCredentials": "Vennligst angi dine akkreditiver for {0}.",
      "PleaseEnterYourSearchPage": "Vennligst angi URL for din søkeside",
      "Collapse": "Fold sammen",
      "Collapsable": "Sammenfoldbar",
      "Expand": "Utvid",
      "Today": "I dag",
      "Yesterday": "I går",
      "Tomorrow": "I morgen",
      "Duration": "Varighet: {0}",
      "IndexDuration": "Indeks varighet: {0}",
      "ProxyDuration": "Proxy varighet: {0}",
      "ClientDuration": "Klient varighet: {0}",
      "Unavailable": "Utilgjengelig",
      "Reply": "Svar",
      "ReplyAll": "Svar alle",
      "Forward": "Videresend",
      "From": "Fra",
      "Caption": "Tittel",
      "Expression": "Uttrykk",
      "Tab": "Fane",
      "Tabs": "Faner",
      "EnterExpressionName": "Angi uttrykksnavn",
      "EnterExpressionToFilterWith": "Angi uttrykk å filtrere resultater med",
      "SelectTab": "Velg fane",
      "SelectAll": "Velg alle",
      "PageUrl": "Velg URL for side",
      "ErrorSavingToDevice": "Feil ved lagring av informasjon til din enhet",
      "ErrorReadingFromDevice": "Feil ved lesing av informasjon fra din enhet",
      "AppIntro": "Snakk med en produktspesialist som kan besvare dine spørsmål om Coveo og hjelpe deg å avgjøre hvilken Coveo-løsning som er riktig for deg. Eller prøv en live demo!",
      "TryDemo": "Prøv demoen",
      "ContactUs": "Kontakt oss",
      "NewToCoveo": "Ny med Coveo?",
      "LetUsHelpGetStarted": "La oss hjelpe deg å komme i gang",
      "LikesThis": "{0} liker dette.",
      "CannotConnectSearchPage": "kan ikke koble til din søkeside",
      "AreYouSureDeleteFilter": "Er du sikker på at du ønsker å slette filter {0} med uttrykket {1}",
      "OnlineHelp": "Online hjelp",
      "Done": "Ferdig",
      "SaveFacetState": "Lagre denne fasettstatusen",
      "ClearFacetState": "Tøm fasettstatus",
      "DisplayingTheOnlyMessage": "Viser den eneste meldingen i denne samtalen",
      "NoNetworkConnection": "Ingen nettverksforbindelse",
      "UnknownConnection": "Ukjent tilkobling",
      "EthernetConnection": "Ethernet-tilkobling",
      "WiFi": "WiFi-tilkobling",
      "CELL": "Mobil tilkobling",
      "CELL_2G": "Mobil 2G-tilkobling",
      "CELL_3G": "Mobil 3G-tilkobling",
      "CELL_4G": "Mobil 4G-tilkobling",
      "Relevance": "Relevans",
      "Date": "Dato",
      "Amount": "Mengde",
      "QueryExceptionNoException": "Ingen unntak",
      "QueryExceptionInvalidSyntax": "Ugyldig syntaks",
      "QueryExceptionInvalidCustomField": "Ugyldig tilpasset felt",
      "QueryExceptionInvalidDate": "Ugyldig dato",
      "QueryExceptionInvalidExactPhrase": "Ugyldig nøyaktig frase",
      "QueryExceptionInvalidDateOp": "Ugyldig datooperatør",
      "QueryExceptionInvalidNear": "Ugyldig NEAR-operatør",
      "QueryExceptionInvalidWeightedNear": "Ugyldig vektet NEAR",
      "QueryExceptionInvalidTerm": "Ugyldig term",
      "QueryExceptionTooManyTerms": "For mange termer",
      "QueryExceptionWildcardTooGeneral": "Jokertegn for generelt",
      "QueryExceptionInvalidSortField": "Ugyldig sorteringsfelt",
      "QueryExceptionInvalidSmallStringOp": "Ugyldig liten stringoperatør",
      "QueryExceptionRequestedResultsMax": "Forespurte resultater maksimum",
      "QueryExceptionAggregatedMirrorDead": "Fjern indekskopi offline",
      "QueryExceptionAggregatedMirrorQueryTimeOut": "Fjern indekskopi forespørsel timeout",
      "QueryExceptionAggregatedMirrorInvalidBuildNumber": "Fjern indekskopi ugyldig byggnummer",
      "QueryExceptionAggregatedMirrorCannotConnect": "Fjern indekskopi kan ikke koble til",
      "QueryExceptionNotEnoughLeadingCharsWildcard": "Ikke nok ledende tegn i jokertegn",
      "QueryExceptionSecurityInverterNotFound": "Sikkerhetsinverter ikke funnet",
      "QueryExceptionSecurityInverterAccessDenied": "Adgang til sikkerhetsinverter avslått",
      "QueryExceptionAggregatedMirrorCannotImpersonate": "Fjern indekskopi kan ikke representere",
      "QueryExceptionUnexpected": "Uventet",
      "QueryExceptionAccessDenied": "Adgang avslått",
      "QueryExceptionSuperUserTokenInvalid": "Superbruker symbol ikke gyldig",
      "QueryExceptionSuperUserTokenExpired": "Superbruker symbol er utløpt",
      "QueryExceptionLicenseQueriesExpired": "Forespørselslisens utløpt",
      "QueryExceptionLicenseSuperUserTokenNotSupported": "Lisens for superbruker symbol ikke støttet",
      "QueryExceptionInvalidSession": "Ugyldig økt",
      "QueryExceptionInvalidDocument": "Ugyldig dokument",
      "QueryExceptionSearchDisabled": "Søk deaktivert",
      "FileType": "Filtype",
      "ShowAttachment": "Vis vedlegg",
      "OnFeed": "på {0}s feed.",
      "Author": "Forfatter",
      "NoTitle": "Ingen tittel",
      "CurrentSelections": "Gjeldende valg",
      "AllContent": "Alt innhold",
      "CancelLastAction": "Avbryt siste handling",
      "SearchTips": "Søketips",
      "CheckSpelling": "Sjekk staving for dine nøkkelord",
      "TryUsingFewerKeywords": "Prøv å bruke færre, andre eller flere generelle nøkkelord.",
      "SelectFewerFilters": "Velg færre filtre for å utvide søket ditt",
  }
  var locales = String["locales"] || (String["locales"] = {});
  locales["no"] = _.extend({}, locales["no"], dict);
  String["toLocaleString"].call(this, { "no": dict });
  String["locale"] = "no";
  String["defaultLocale"] = "en";
})();
/*
 * Globalize Culture no
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

Globalize.addCultureInfo( "no", "default", {
	name: "no",
	englishName: "Norwegian",
	nativeName: "norsk",
	language: "no",
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
			pattern: ["$ -n","$ n"],
			",": " ",
			".": ",",
			symbol: "kr"
		}
	},
	calendars: {
		standard: {
			"/": ".",
			firstDay: 1,
			days: {
				names: ["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"],
				namesAbbr: ["sø","ma","ti","on","to","fr","lø"],
				namesShort: ["sø","ma","ti","on","to","fr","lø"]
			},
			months: {
				names: ["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember",""],
				namesAbbr: ["jan","feb","mar","apr","mai","jun","jul","aug","sep","okt","nov","des",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "dd.MM.yyyy",
				D: "d. MMMM yyyy",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "d. MMMM yyyy HH:mm",
				F: "d. MMMM yyyy HH:mm:ss",
				M: "d. MMMM",
				Y: "MMMM yyyy"
			}
		}
	}
});

}( this ));
