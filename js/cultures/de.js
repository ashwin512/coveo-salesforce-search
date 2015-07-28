(function() {
  var dict = {
      "Unknown": "Unbekannt",
      "And": "UND",
      "Authenticating": "{0} wird authentifiziert…",
      "Clear": "{0} löschen",
      "CompleteQuery": "Vollständige Abfrage",
      "Exclude": "{0} ausschließen",
      "EnterTag": "Tag hinzufügen",
      "Next": "Weiter",
      "Last": "Letzte",
      "Link": "Link",
      "Or": "ODER",
      "Previous": "Zurück",
      "QueryDidntMatchAnyDocuments": "Es wurden keine Dokumente gefunden, die den Abfragekriterien entsprechen.",
      "QueryException": "Die Abfrage enthält einen Fehler: {0}.",
      "Me": "Ich",
      "Remove": "Entfernen",
      "Search": "Suchen",
      "SearchFor": "Suchen nach {0}",
      "ShareQuery": "Abfrage freigeben",
      "Preferences": "Einstellungen",
      "LinkOpeningSettings": "Einstellungen für das Öffnen von Links",
      "Reauthenticate": "{0} erneut authentifizieren",
      "ResultsFilteringExpression": "Ergebnisfilterausdruck",
      "FiltersInYourPreferences": "In Einstellungen vorhandene Filter",
      "Create": "Erstellen",
      "SearchIn": "Suchen in {0}",
      "Seconds": "in {0} Sekunde<pl>n</pl>",
      "ShowingResultsOf": "Ergebnis<pl>se</pl> {0}<pl>-{1}</pl> von {2}",
      "SwitchTo": "Wechseln zu {0}",
      "Unexclude": "Ausschluss von {0} aufheben",
      "ClearAllFilters": "Alle Filter löschen",
      "SkipLogin": "Anmeldung übergehen",
      "LoginInProgress": "Die Anmeldung wird ausgeführt, bitte warten…",
      "Login": "Anmelden",
      "GetStarted": "Erste Schritte",
      "More": "Mehr",
      "Less": "Weniger",
      "Settings": "Einstellungen",
      "Score": "Bewertung",
      "ScoreDescription": "Die Bewertung wird anhand der Anzahl der Vorkommen und der Position in der Ergebnismenge berechnet.",
      "Occurrences": "Vorkommen",
      "OccurrencesDescription": "Nach Anzahl der Vorkommen sortieren, wobei die Werte, die am häufigsten vorkommen, zuerst angezeigt werden",
      "Label": "Bezeichnung",
      "Of": "von",
      "LabelDescription": "Alphabetisch nach Feldwerten sortieren",
      "Value": "Wert",
      "ValueDescription": "Nach den Werten des ersten berechneten Felds sortieren",
      "AlphaAscending": "Aufsteigend nach Wert",
      "AlphaDescending": "Absteigend nach Wert",
      "ChiSquare": "Chi-Quadrat",
      "Nosort": "Keine Sortierung",
      "RelativeFrequency": "Relative Häufigkeit",
      "RelativeFrequencyDescription": "Nach der relativen Häufigkeit der Werte sortieren. Weniger häufig vorkommende Werte werden weiter oben angezeigt.",
      "DateDistribution": "Datumsverteilung",
      "Custom": "Benutzerdefiniert",
      "CustomDescription": "Nach einem Kundenauftrag sortieren",
      "ComputedField": "Berechnetes Feld",
      "Ascending": "Aufsteigend",
      "Descending": "Absteigend",
      "noResultFor": "Keine Ergebnisse für {0}",
      "autoCorrectedQueryTo": "Die Abfrage wurde automatisch korrigiert: {0}",
      "didYouMean": "Meinten Sie: {0}",
      "SuggestedResults": "Vorgeschlagene Ergebnisse",
      "SuggestedQueries": "Vorgeschlagene Abfragen",
      "MostRelevantItems": "Die relevantesten Elemente:",
      "AllItems": "Alle Elemente:",
      "ShowLess": "Weniger anzeigen",
      "ShowMore": "Mehr anzeigen",
      "HideFacet": "Aspekt ausblenden",
      "ShowFacet": "Aspekt anzeigen",
      "AndOthers": "und {0} weitere/r/s",
      "Others": "{0} weitere/r/s",
      "MostRelevantPosts": "Relevanteste Beiträge:",
      "CompleteThread": "Gesamter Diskussionsfaden:",
      "ShowCompleteThread": "Gesamten Diskussionsfaden anzeigen",
      "ShowOnlyTopMatchingPosts": "Nur die relevantesten Beiträge anzeigen",
      "MostRelevantReplies": "Relevanteste Antworten:",
      "AllConversation": "Gesamte Unterhaltung:",
      "ShowAllConversation": "Gesamte Unterhaltung anzeigen",
      "ShowAllReplies": "Alle Antworten anzeigen",
      "ShowOnlyMostRelevantReplies": "Nur die relevantesten Antworten anzeigen",
      "Close": "Schließen",
      "Open": "Öffnen",
      "OpenInOutlookWhenPossible": "In Outlook öffnen (wenn möglich)",
      "AlwaysOpenInNewWindow": "Ergebnisse immer in einem neuen Fenster anzeigen",
      "QuickView": "Schnellansicht",
      "ErrorReport": "Fehlerbericht",
      "OopsError": "Leider ist auf dem Server ein Fehler aufgetreten.",
      "ProblemPersists": "Wenden Sie sich an den Administrator, wenn das Problem weiterhin besteht.",
      "GoBack": "Zurück",
      "Reset": "Zurücksetzen",
      "Retry": "Wiederholen",
      "MoreInfo": "Weitere Informationen",
      "Username": "Benutzername",
      "Password": "Kennwort",
      "PostedBy": "Veröffentlicht von",
      "CannotConnect": "Mit der Serveradresse kann keine Verbindung hergestellt werden.",
      "BadUserPass": "Das Kennwort stimmt nicht mit dem für den Benutzernamen gespeicherten Kennwort überein.",
      "PleaseEnterYourCredentials": "Geben Sie Ihre Anmeldeinformationen für {0} ein.",
      "PleaseEnterYourSearchPage": "Geben Sie die Suchseiten-URL ein.",
      "Collapse": "Reduzieren",
      "Collapsable": "Reduzierbar",
      "Expand": "Erweitern",
      "Today": "Heute",
      "Yesterday": "Gestern",
      "Tomorrow": "Morgen",
      "Duration": "Dauer: {0}",
      "IndexDuration": "Indexdauer: {0}",
      "ProxyDuration": "Proxydauer: {0}",
      "ClientDuration": "Clientdauer: {0}",
      "Unavailable": "Nicht verfügbar",
      "Reply": "Antworten",
      "ReplyAll": "Allen antworten",
      "Forward": "Weiterleiten",
      "From": "Von",
      "Caption": "Beschriftung",
      "Expression": "Ausdruck",
      "Tab": "Registerkarte",
      "Tabs": "Registerkarten",
      "EnterExpressionName": "Namen des Ausdrucks eingeben",
      "EnterExpressionToFilterWith": "Ausdruck zum Filtern der Ergebnisse eingeben",
      "SelectTab": "Registerkarte auswählen",
      "SelectAll": "Alles auswählen",
      "PageUrl": "Suchseiten-URL",
      "ErrorSavingToDevice": "Fehler beim Speichern der Daten auf dem Gerät",
      "ErrorReadingFromDevice": "Fehler beim Lesen der Daten auf dem Gerät",
      "AppIntro": "Sprechen Sie mit einem Produktspezialisten, der Ihre Fragen zu Coveo beantworten und Ihnen helfen kann, die für Sie am besten geeignete Coveo-Lösung zu finden. Oder probieren Sie eine Testversion aus!",
      "TryDemo": "Demo ausprobieren",
      "ContactUs": "Kontakt",
      "NewToCoveo": "Neu bei Coveo?",
      "LetUsHelpGetStarted": "Lassen Sie uns Ihnen beim Einstieg helfen",
      "LikesThis": "{0} <sn>mag</sn><pl>mögen</pl> das.",
      "CannotConnectSearchPage": "Es kann keine Verbindung mit der Suchseite hergestellt werden",
      "AreYouSureDeleteFilter": "Möchten Sie den Filter {0} mit dem Ausdruck {1} tatsächlich löschen",
      "OnlineHelp": "Onlinehilfe",
      "Done": "Fertig",
      "SaveFacetState": "Diesen Aspektzustand speichern",
      "ClearFacetState": "Aspektzustand löschen",
      "DisplayingTheOnlyMessage": "Derzeit wird die einzige Nachricht in dieser Unterhaltung angezeigt",
      "NoNetworkConnection": "Keine Netzwerkverbindung",
      "UnknownConnection": "Unbekannte Verbindung",
      "EthernetConnection": "Ethernet-Verbindung",
      "WiFi": "WiFi-Verbindung",
      "CELL": "Mobilfunkverbindung",
      "CELL_2G": "2G-Mobilfunkverbindung",
      "CELL_3G": "3G-Mobilfunkverbindung",
      "CELL_4G": "4G-Mobilfunkverbindung",
      "Relevance": "Relevanz",
      "Date": "Datum",
      "Amount": "Betrag",
      "QueryExceptionNoException": "Keine Ausnahme",
      "QueryExceptionInvalidSyntax": "Ungültige Syntax",
      "QueryExceptionInvalidCustomField": "Ungültiges benutzerdefiniertes Feld",
      "QueryExceptionInvalidDate": "Ungültiges Datum",
      "QueryExceptionInvalidExactPhrase": "Ungültiger exakter Ausdruck",
      "QueryExceptionInvalidDateOp": "Ungültiger Datumsoperator",
      "QueryExceptionInvalidNear": "Ungültiger NEAR-Operator",
      "QueryExceptionInvalidWeightedNear": "Ungültiger gewichteter NEAR-Operator",
      "QueryExceptionInvalidTerm": "Ungültiger Begriff",
      "QueryExceptionTooManyTerms": "Zu viele Begriffe",
      "QueryExceptionWildcardTooGeneral": "Platzhalter ist zu allgemein",
      "QueryExceptionInvalidSortField": "Ungültiges Sortierfeld",
      "QueryExceptionInvalidSmallStringOp": "Ungültiger",
      "QueryExceptionRequestedResultsMax": "Höchstzahl angeforderter Ergebnisse",
      "QueryExceptionAggregatedMirrorDead": "Remotekopie des Index ist offline",
      "QueryExceptionAggregatedMirrorQueryTimeOut": "Zeitlimit wurde bei Abfrage der Remotekopie des Index überschritten",
      "QueryExceptionAggregatedMirrorInvalidBuildNumber": "Ungültige Buildnummer für Remotekopie des Index",
      "QueryExceptionAggregatedMirrorCannotConnect": "Verbindung mit Remotekopie des Index nicht möglich",
      "QueryExceptionNotEnoughLeadingCharsWildcard": "Unzureichend Zeichen vor dem Platzhalterzeichen",
      "QueryExceptionSecurityInverterNotFound": "Sicherheitsumgehung nicht gefunden",
      "QueryExceptionSecurityInverterAccessDenied": "Zugriff auf Sicherheitsumgebung verweigert",
      "QueryExceptionAggregatedMirrorCannotImpersonate": "Identitätswechsel bei Remotekopie des Index nicht möglich",
      "QueryExceptionUnexpected": "Unerwartet",
      "QueryExceptionAccessDenied": "Zugriff verweigert",
      "QueryExceptionSuperUserTokenInvalid": "Superuser-Token ist ungültig",
      "QueryExceptionSuperUserTokenExpired": "Superuser-Token ist abgelaufen",
      "QueryExceptionLicenseQueriesExpired": "Lizenz für Abfragen ist abgelaufen",
      "QueryExceptionLicenseSuperUserTokenNotSupported": "Lizenztoken für Superuser wird nicht unterstützt",
      "QueryExceptionInvalidSession": "Ungültige Sitzung",
      "QueryExceptionInvalidDocument": "Ungültiges Dokument",
      "QueryExceptionSearchDisabled": "Suche deaktiviert",
      "FileType": "Dateityp",
      "ShowAttachment": "Anlage anzeigen",
      "OnFeed": "zu {0}s Feed.",
      "Author": "Autor",
      "NoTitle": "Ohne Titel",
      "CurrentSelections": "Aktuelle Auswahl",
      "AllContent": "Alle Inhalte",
      "CancelLastAction": "Letzte Aktion rückgängig machen",
      "SearchTips": "Tipps für die Suche",
      "CheckSpelling": "Überprüfen Sie, ob die Suchbegriffe richtig geschrieben sind.",
      "TryUsingFewerKeywords": "Geben Sie weniger, andere oder allgemeinere Suchbegriffe an.",
      "SelectFewerFilters": "Wählen Sie weniger Filter aus, um die Suche nicht so stark einzugrenzen.",
      "sysfiletype_spportal": "Portal",
      "sysfiletype_spsite": "Site",
      "sysfiletype_spuserprofile": "SharePoint-Benutzer",
      "sysfiletype_sparea": "Zone",
      "sysfiletype_spannouncement": "Ankündigung",
      "sysfiletype_spannouncementlist": "Ankündigungen",
      "sysfiletype_spcontact": "Kontakt",
      "sysfiletype_spcontactlist": "Kontakte",
      "sysfiletype_spcustomlist": "angepasste Listen",
      "sysfiletype_spdiscussionboard": "Diskussionsforum",
      "sysfiletype_spdiscussionboardlist": "Diskussionsforen",
      "sysfiletype_spdocumentlibrarylist": "Dokumentenbibliothek 1",
      "sysfiletype_spevent": "Ereignis",
      "sysfiletype_speventlist": "Ereignisse",
      "sysfiletype_spformlibrarylist": "Formularbibliothek",
      "sysfiletype_spissue": "Problem",
      "sysfiletype_spissuelist": "Probleme",
      "sysfiletype_splink": "Link",
      "sysfiletype_splinklist": "Links",
      "sysfiletype_sppicturelibrarylist": "Bildbibliothek",
      "sysfiletype_spsurvey": "Umfrage",
      "sysfiletype_spsurveylist": "Umfragen",
      "sysfiletype_sptask": "Aufgabe",
      "sysfiletype_sptasklist": "Aufgaben",
      "sysfiletype_spagenda": "Agenda",
      "sysfiletype_spagendalist": "Agenden",
      "sysfiletype_spattendee": "Teilnehmer",
      "sysfiletype_spattendeelist": "Teilnehmer",
      "sysfiletype_spcustomgridlist": "angepasste Raster",
      "sysfiletype_spdecision": "Entscheidung",
      "sysfiletype_spdecisionlist": "Entscheidungen",
      "sysfiletype_spobjective": "Ziel",
      "sysfiletype_spobjectivelist": "Ziele",
      "sysfiletype_sptextbox": "Textfeld",
      "sysfiletype_sptextboxlist": "Textfeldliste",
      "sysfiletype_spthingstobring": "Element, das geholt werden soll",
      "sysfiletype_spthingstobringlist": "Elemente, die geholt werden sollen",
      "sysfiletype_sparealisting": "Zonenauflistung",
      "sysfiletype_spmeetingserie": "Terminserie",
      "sysfiletype_spmeetingserielist": "Liste Terminserien",
      "sysfiletype_spsitedirectory": "Element in Sitebibliothek",
      "sysfiletype_spsitedirectorylist": "Sitebibliothek",
      "sysfiletype_spdatasource": "Datenquelle",
      "sysfiletype_spdatasourcelist": "Liste Datenquellen",
      "sysfiletype_splisttemplatecataloglist": "Vorlagelistenkatalog",
      "sysfiletype_spwebpartcataloglist": "Webpartkatalogliste",
      "sysfiletype_spwebtemplatecataloglist": "Webvorlagenkatalogliste",
      "sysfiletype_spworkspacepagelist": "Workspace Seitenliste",
      "sysfiletype_spunknownlist": "angepasste Liste",
      "sysfiletype_spadministratortask": "Administrator-Aufgabe",
      "sysfiletype_spadministratortasklist": "Administrator-Aufgaben",
      "sysfiletype_spareadocumentlibrarylist": "Bereichs-Dokumentenbibliothek",
      "sysfiletype_spblogcategory": "Blog-Kategorie",
      "sysfiletype_spblogcategorylist": "Blog-Kategorie",
      "sysfiletype_spblogcomment": "Blog-Kommentar",
      "sysfiletype_spblogcommentlist": "Blog-Kommentare",
      "sysfiletype_spblogpost": "Blog-Beitrag",
      "sysfiletype_spblogpostlist": "Blog-Beiträge",
      "sysfiletype_spdataconnectionlibrarylist": "Datenverbindungsbibliothek",
      "sysfiletype_spdistributiongroup": "Verteilergruppe",
      "sysfiletype_spdistributiongrouplist": "Verteilergruppen",
      "sysfiletype_spipfslist": "InfoPath-Formularserver",
      "sysfiletype_spkeyperformanceindicator": "Key Performance-Indikator",
      "sysfiletype_spkeyperformanceindicatorlist": "Key Performance-Indikatoren",
      "sysfiletype_splanguagesandtranslator": "Sprachen und Übersetzer",
      "sysfiletype_splanguagesandtranslatorlist": "Sprachen und Übersetzer",
      "sysfiletype_spmasterpagescataloglist": "Masterseiten-Bibliothek",
      "sysfiletype_spnocodeworkflowlibrarylist": "No Code-Arbeitsablaufsbibliothek",
      "sysfiletype_spprojecttask": "Projektaufgabe",
      "sysfiletype_spprojecttasklist": "Projektaufgaben",
      "sysfiletype_sppublishingpageslibrarylist": "Seitenbibliothek",
      "sysfiletype_spreportdocumentlibrarylist": "Berichts-Dokumentenbibliothek",
      "sysfiletype_spreportlibrarylist": "Berichtsbibliothek",
      "sysfiletype_spslidelibrarylist": "Folienbibliothek",
      "sysfiletype_sptab": "Registerkarten",
      "sysfiletype_sptablist": "Registerkartenliste",
      "sysfiletype_sptranslationmanagementlibrarylist": "Bibliothek zur Übersetzungsverwaltung",
      "sysfiletype_spuserinformation": "Benutzerinformationen",
      "sysfiletype_spuserinformationlist": "Liste der Benutzerinformationen",
      "sysfiletype_spwikipagelibrarylist": "Wiki-Seitenbibliothek",
      "sysfiletype_spworkflowhistory": "Arbeitsablaufs-Verlaufsprotokoll",
      "sysfiletype_spworkflowhistorylist": "Arbeitsablaufs-Verlaufsprotokolle",
      "sysfiletype_spworkflowprocess": "Benutzerdefinierter Arbeitsablauf",
      "sysfiletype_spworkflowprocesslist": "Benutzerdefinierte Arbeitsabläufe",
      "sysfiletype_sppublishingimageslibrarylist": "Publishing-Image-Bibliothek",
      "sysfiletype_spcirculation": "Circulation",
      "sysfiletype_spcirculationlist": "Circulations",
      "sysfiletype_spdashboardslibrarylist": "Dashboard-Bibliothek",
      "sysfiletype_spdataconnectionforperformancepointlibrarylist": "Datenverbindung für Performance-Point-Bibliothek",
      "sysfiletype_sphealthreport": "Bericht zur Computergesundheit",
      "sysfiletype_sphealthreportlist": "Berichte zur Computergesundheit",
      "sysfiletype_sphealthrule": "Regel zur Erhaltung der Computergesundheit",
      "sysfiletype_sphealthrulelist": "Regeln zur Erhaltung der Computergesundheit",
      "sysfiletype_spimedictionary": "IME-Wörterbuch",
      "sysfiletype_spimedictionarylist": "IME-Wörterbücher",
      "sysfiletype_spperformancepointcontent": "Performance-Point-Inhalt",
      "sysfiletype_spperformancepointcontentlist": "Performance-Point-Inhalte",
      "sysfiletype_spphonecallmemo": "Anruf-Memo",
      "sysfiletype_spphonecallmemolist": "Anruf-Memos",
      "sysfiletype_sprecordlibrarylist": "Datensatzbibliothek",
      "sysfiletype_spresource": "Ressource",
      "sysfiletype_spresourcelist": "Ressourcen",
      "sysfiletype_spprocessdiagramslibrarylist": "Prozessdiagrammbibliothek  ",
      "sysfiletype_spsitethemeslibrarylist": "Site-Themen-Bibliothek",
      "sysfiletype_spsolutionslibrarylist": "Lösungsbibliothek",
      "sysfiletype_spwfpublibrarylist": "WFPUB-Bibliothek",
      "sysfiletype_spwhereabout": "Ort",
      "sysfiletype_spwhereaboutlist": "Orte",
      "sysfiletype_spdocumentlink": "Link zu einem Dokument",
      "sysfiletype_spdocumentset": "Dokumentenmappe",
      "sysfiletype_spmicrofeedpost": "",
      "sysfiletype_spmicrofeedlist": "",
      "sysfiletype_splistfolder": "Liste Ordner",
  }
  var locales = String["locales"] || (String["locales"] = {});
  locales["de"] = _.extend({}, locales["de"], dict);
  String["toLocaleString"].call(this, { "de": dict });
  String["locale"] = "de";
  String["defaultLocale"] = "en";
})();
/*
 * Globalize Culture de
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

Globalize.addCultureInfo( "de", "default", {
	name: "de",
	englishName: "German",
	nativeName: "Deutsch",
	language: "de",
	numberFormat: {
		",": ".",
		".": ",",
		"NaN": "n. def.",
		negativeInfinity: "-unendlich",
		positiveInfinity: "+unendlich",
		percent: {
			pattern: ["-n%","n%"],
			",": ".",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			",": ".",
			".": ",",
			symbol: "€"
		}
	},
	calendars: {
		standard: {
			"/": ".",
			firstDay: 1,
			days: {
				names: ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],
				namesAbbr: ["So","Mo","Di","Mi","Do","Fr","Sa"],
				namesShort: ["So","Mo","Di","Mi","Do","Fr","Sa"]
			},
			months: {
				names: ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember",""],
				namesAbbr: ["Jan","Feb","Mrz","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez",""]
			},
			AM: null,
			PM: null,
			eras: [{"name":"n. Chr.","start":null,"offset":0}],
			patterns: {
				d: "dd.MM.yyyy",
				D: "dddd, d. MMMM yyyy",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "dddd, d. MMMM yyyy HH:mm",
				F: "dddd, d. MMMM yyyy HH:mm:ss",
				M: "dd MMMM",
				Y: "MMMM yyyy"
			}
		}
	}
});

}( this ));