(function() {
  var dict = {
      "Unknown": "Nieznany",
      "And": "I",
      "Authenticating": "Trwa uwierzytelnianie użytkownika {0}...",
      "Clear": "Wyczyść {0}",
      "CompleteQuery": "Całe zapytanie",
      "Exclude": "Wyklucz {0}",
      "EnterTag": "Dodaj znacznik",
      "Next": "Następna",
      "Last": "Ostatnia",
      "Link": "Łącze",
      "Or": "LUB",
      "Previous": "Poprzednia",
      "QueryDidntMatchAnyDocuments": "Żaden dokument nie pasuje do zapytania.",
      "QueryException": "Zapytanie zawiera błąd: {0}.",
      "Me": "Ja",
      "Remove": "Usuń",
      "Search": "Wyszukaj",
      "SearchFor": "Wyszukaj {0}",
      "ShareQuery": "Udostępnij zapytanie",
      "Preferences": "Preferencje",
      "LinkOpeningSettings": "Ustawienia dotyczące otwierania łączy",
      "Reauthenticate": "Ponownie uwierzytelnij użytkownika {0}",
      "ResultsFilteringExpression": "Wyrażenia filtrowania wyników",
      "FiltersInYourPreferences": "Filtry w preferencjach użytkownika",
      "Create": "Utwórz",
      "SearchIn": "Wyszukaj w {0}",
      "Seconds": "w {0} sekundę<pl>(sekundy/sekund)</pl>",
      "ShowingResultsOf": "Wynik<pl>i</pl> {0}<pl>-{1}</pl> z {2}",
      "SwitchTo": "Przełącz na {0}",
      "Unexclude": "Cofnij wykluczenie {0}",
      "ClearAllFilters": "Wyczyść wszystkie filtry",
      "SkipLogin": "Pomiń logowanie",
      "LoginInProgress": "Logowanie w toku, proszę czekać...",
      "Login": "Zaloguj",
      "GetStarted": "Rozpocznij",
      "More": "Więcej",
      "Less": "Mniej",
      "Settings": "Ustawienia",
      "Score": "Punktacja",
      "ScoreDescription": "Punktacja jest obliczana na podstawie liczby wystąpień oraz pozycji w zestawie wyników.",
      "Occurrences": "Wystąpienia",
      "OccurrencesDescription": "Sortuj według liczby wystąpień, tak aby wartości o najwyższej liczbie pojawiały się jako pierwsze.",
      "Label": "Etykieta",
      "Of": "z",
      "LabelDescription": "Sortuj alfabetycznie według wartości pól.",
      "Value": "Wartość",
      "ValueDescription": "Sortuj według wartości pierwszego obliczonego pola",
      "AlphaAscending": "Wartość rosnąco",
      "AlphaDescending": "Wartość malejąco",
      "ChiSquare": "Chi-kwadrat",
      "Nosort": "Bez sortowania",
      "RelativeFrequency": "Częstotliwość względna",
      "RelativeFrequencyDescription": "Sortuj według względnej częstotliwości występowania wartości. Mniej rozpowszechnione wartości będą pojawiały się wyżej.",
      "DateDistribution": "Rozłożenie dat",
      "Custom": "Niestandardowe",
      "CustomDescription": "Sortuj według niestandardowej kolejności",
      "ComputedField": "Pole obliczane",
      "Ascending": "Rosnąco",
      "Descending": "Malejąco",
      "noResultFor": "Brak wyników dla zapytania {0}",
      "autoCorrectedQueryTo": "Zapytanie zostało automatycznie poprawione na {0}",
      "didYouMean": "Czy chodziło Ci o: {0}",
      "SuggestedResults": "Sugerowane wyniki",
      "SuggestedQueries": "Sugerowane zapytania",
      "MostRelevantItems": "Najbardziej trafne elementy:",
      "AllItems": "Wszystkie elementy:",
      "ShowLess": "Pokaż mniej",
      "ShowMore": "Pokaż więcej",
      "HideFacet": "Ukryj Aspekt",
      "ShowFacet": "Pokaż Aspekt",
      "AndOthers": "i {0} pozostały<pl>(pozostałe/pozostałych)</pl>",
      "Others": "{0} pozostały<pl>(pozostałe/pozostałych)</pl>",
      "MostRelevantPosts": "Najbardziej trafne wpisy:",
      "CompleteThread": "Cały wątek:",
      "ShowCompleteThread": "Pokaż cały wątek",
      "ShowOnlyTopMatchingPosts": "Pokaż tylko wpisy o najwyższej zgodności",
      "MostRelevantReplies": "Najbardziej trafne odpowiedzi:",
      "AllConversation": "Cała rozmowa:",
      "ShowAllConversation": "Pokaż całą rozmowę",
      "ShowAllReplies": "Pokaż wszystkie odpowiedzi",
      "ShowOnlyMostRelevantReplies": "Pokaż tylko najbardziej trafne odpowiedzi",
      "Close": "Zamknij",
      "Open": "Otwórz",
      "OpenInOutlookWhenPossible": "Otwórz w programie Outlook (o ile to możliwe)",
      "AlwaysOpenInNewWindow": "Zawsze otwieraj wyniki w nowym oknie",
      "QuickView": "Szybki podgląd",
      "ErrorReport": "Raport o błędach",
      "OopsError": "Ups! Wystąpił problem dotyczący serwera.",
      "ProblemPersists": "Jeśli ten problem będzie się powtarzać, skontaktuj się z administratorem.",
      "GoBack": "Powrót",
      "Reset": "Resetuj",
      "Retry": "Spróbuj ponownie",
      "MoreInfo": "Więcej informacji",
      "Username": "Nazwa użytkownika",
      "Password": "Hasło",
      "PostedBy": "Opublikował użytkownik",
      "CannotConnect": "Nie można nawiązać połączenia z adresem serwera.",
      "BadUserPass": "Hasło nie pasuje do nazwy użytkownika.",
      "PleaseEnterYourCredentials": "Proszę wpisać poświadczenia dla systemu {0}.",
      "PleaseEnterYourSearchPage": "Proszę wpisać adres URL strony wyszukiwania",
      "Collapse": "Zwiń",
      "Collapsable": "Zwijany",
      "Expand": "Rozwiń",
      "Today": "Dzisiaj",
      "Yesterday": "Wczoraj",
      "Tomorrow": "Jutro",
      "Duration": "Czas trwania: {0}",
      "IndexDuration": "Czas trwania indeksu: {0}",
      "ProxyDuration": "Czas trwania serwera proxy: {0}",
      "ClientDuration": "Czas trwania klienta: {0}",
      "Unavailable": "Niedostępny",
      "Reply": "Odpowiedz",
      "ReplyAll": "Odpowiedz wszystkim",
      "Forward": "Prześlij dalej",
      "From": "Od",
      "Caption": "Podpis",
      "Expression": "Wyrażenie",
      "Tab": "Karta",
      "Tabs": "Karty",
      "EnterExpressionName": "Wprowadź nazwę wyrażenia",
      "EnterExpressionToFilterWith": "Wprowadź wyrażenie do filtrowania wyników",
      "SelectTab": "Zaznacz kartę",
      "SelectAll": "Zaznacz wszystko",
      "PageUrl": "Adres URL strony wyszukiwania",
      "ErrorSavingToDevice": "Podczas zapisywania informacji na urządzeniu wystąpił błąd",
      "ErrorReadingFromDevice": "Podczas odczytu informacji z urządzenia wystąpił błąd",
      "AppIntro": "Skontaktuj się ze specjalistą ds. produktów, który odpowie na pytania dotyczące Coveo i pomoże Ci w wyborze odpowiedniego rozwiązania Coveo. Możesz też wypróbować interaktywne demo!",
      "TryDemo": "Wypróbuj demo",
      "ContactUs": "Skontaktuj się z nami",
      "NewToCoveo": "Jeszcze nie znasz Coveo?",
      "LetUsHelpGetStarted": "Pomożemy Ci zacząć",
      "LikesThis": "{0} lubią<sn>(lubi)</sn> to.",
      "CannotConnectSearchPage": "Nie można połączyć ze stroną wyszukiwania",
      "AreYouSureDeleteFilter": "Czy na pewno chcesz usunąć filtr {0} z wyrażeniem {1}?",
      "OnlineHelp": "Pomoc online",
      "Done": "Gotowe",
      "SaveFacetState": "Zapisz stan aspektu",
      "ClearFacetState": "Wyczyść stan aspektu",
      "DisplayingTheOnlyMessage": "Wyświetlanie jedynej wiadomości w ramach rozmowy",
      "NoNetworkConnection": "Brak połączenia sieciowego",
      "UnknownConnection": "Nieznane połączenie",
      "EthernetConnection": "Połączenie Ethernet",
      "WiFi": "Połączenie WiFi",
      "CELL": "Połączenie komórkowe",
      "CELL_2G": "Połączenie komórkowe 2G",
      "CELL_3G": "Połączenie komórkowe 3G",
      "CELL_4G": "Połączenie komórkowe 4G",
      "Relevance": "Trafność",
      "Date": "Data",
      "Amount": "Ilość",
      "QueryExceptionNoException": "Brak wyjątków",
      "QueryExceptionInvalidSyntax": "Nieprawidłowa składnia",
      "QueryExceptionInvalidCustomField": "Nieprawidłowe pole niestandardowe",
      "QueryExceptionInvalidDate": "Nieprawidłowa data",
      "QueryExceptionInvalidExactPhrase": "Nieprawidłowa dokładna fraza",
      "QueryExceptionInvalidDateOp": "Nieprawidłowy operator daty",
      "QueryExceptionInvalidNear": "Nieprawidłowy operator NEAR",
      "QueryExceptionInvalidWeightedNear": "Nieprawidłowy ważony operator NEAR",
      "QueryExceptionInvalidTerm": "Nieprawidłowy termin",
      "QueryExceptionTooManyTerms": "Zbyt wiele terminów",
      "QueryExceptionWildcardTooGeneral": "Symbol wieloznaczny zbyt ogólny",
      "QueryExceptionInvalidSortField": "Nieprawidłowe pole sortowania",
      "QueryExceptionInvalidSmallStringOp": "Nieprawidłowy operator małych ciągów",
      "QueryExceptionRequestedResultsMax": "Maksymalna liczba żądanych wyników",
      "QueryExceptionAggregatedMirrorDead": "Duplikat agregowany jest niedostępny",
      "QueryExceptionAggregatedMirrorQueryTimeOut": "Limit czasu zapytania duplikatu agregowanego",
      "QueryExceptionAggregatedMirrorInvalidBuildNumber": "Nieprawidłowy numer kompilacji duplikatu agregowanego",
      "QueryExceptionAggregatedMirrorCannotConnect": "Brak połączenia z duplikatem agregowanym",
      "QueryExceptionNotEnoughLeadingCharsWildcard": "Zbyt mała liczba znaków poprzedzających symbol wieloznaczny",
      "QueryExceptionSecurityInverterNotFound": "Brak inwertora zabezpieczeń",
      "QueryExceptionSecurityInverterAccessDenied": "Odmowa dostępu do inwertora zabezpieczeń",
      "QueryExceptionAggregatedMirrorCannotImpersonate": "Duplikat agregowany nie może dokonać personifikacji",
      "QueryExceptionUnexpected": "Nieoczekiwany",
      "QueryExceptionAccessDenied": "Odmowa dostępu",
      "QueryExceptionSuperUserTokenInvalid": "Nieprawidłowy token administratora",
      "QueryExceptionSuperUserTokenExpired": "Wygasły token administratora",
      "QueryExceptionLicenseQueriesExpired": "Wygasła licencja zapytań",
      "QueryExceptionLicenseSuperUserTokenNotSupported": "Nieobsługiwany token administratora licencji",
      "QueryExceptionInvalidSession": "Nieprawidłowa sesja",
      "QueryExceptionInvalidDocument": "Nieprawidłowy dokument",
      "QueryExceptionSearchDisabled": "Wyszukiwanie wyłączone",
      "FileType": "Typ pliku",
      "ShowAttachment": "Pokaż załącznik",
      "OnFeed": "w kanale użytkownika {0}.",
      "Author": "Autor",
      "NoTitle": "Brak tytułu",
      "CurrentSelections": "Bieżące zaznaczenia",
      "AllContent": "Cała zawartość",
      "CancelLastAction": "Anuluj ostatnią czynność",
      "SearchTips": "Wskazówki dotyczące wyszukiwania",
      "CheckSpelling": "Sprawdź pisownię słów kluczowych.",
      "TryUsingFewerKeywords": "Spróbuj użyć różnych lub bardziej ogólnych słów kluczowych albo zmniejsz ich liczbę.",
      "SelectFewerFilters": "Zmniejsz liczbę filtrów, aby poszerzyć zakres wyszukiwania.",
  }
  var locales = String["locales"] || (String["locales"] = {});
  locales["pl"] = _.extend({}, locales["pl"], dict);
  String["toLocaleString"].call(this, { "pl": dict });
  String["locale"] = "pl";
  String["defaultLocale"] = "en";
})();
/*
 * Globalize Culture pl
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

Globalize.addCultureInfo( "pl", "default", {
	name: "pl",
	englishName: "Polish",
	nativeName: "polski",
	language: "pl",
	numberFormat: {
		",": " ",
		".": ",",
		"NaN": "nie jest liczbą",
		negativeInfinity: "-nieskończoność",
		positiveInfinity: "+nieskończoność",
		percent: {
			pattern: ["-n%","n%"],
			",": " ",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			",": " ",
			".": ",",
			symbol: "zł"
		}
	},
	calendars: {
		standard: {
			"/": "-",
			firstDay: 1,
			days: {
				names: ["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"],
				namesAbbr: ["niedz.","pon.","wt.","śr.","czw.","pt.","sob."],
				namesShort: ["N","Pn","Wt","Śr","Cz","Pt","So"]
			},
			months: {
				names: ["styczeń","luty","marzec","kwiecień","maj","czerwiec","lipiec","sierpień","wrzesień","październik","listopad","grudzień",""],
				namesAbbr: ["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","paź","lis","gru",""]
			},
			monthsGenitive: {
				names: ["stycznia","lutego","marca","kwietnia","maja","czerwca","lipca","sierpnia","września","października","listopada","grudnia",""],
				namesAbbr: ["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","paź","lis","gru",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "yyyy-MM-dd",
				D: "d MMMM yyyy",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "d MMMM yyyy HH:mm",
				F: "d MMMM yyyy HH:mm:ss",
				M: "d MMMM",
				Y: "MMMM yyyy"
			}
		}
	}
});

}( this ));
