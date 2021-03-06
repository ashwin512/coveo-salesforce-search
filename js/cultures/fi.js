(function() {
  var dict = {
      "Unknown": "Tuntematon",
      "And": "JA",
      "Authenticating": "Varmentaa {0}…",
      "Clear": "Tyhjennä {0}",
      "CompleteQuery": "Täydennä kysely",
      "Exclude": "Poissulje {0}",
      "EnterTag": "Lisää tagi",
      "Next": "Seuraava",
      "Last": "Viimeinen",
      "Link": "Linkki",
      "Or": "TAI",
      "Previous": "Edellinen",
      "QueryDidntMatchAnyDocuments": "Kyselysi ei vastannut mitään asiakirjoja.",
      "QueryException": "Kyselyssäsi on virhe: {0}.",
      "Me": "Minä",
      "Remove": "Poista",
      "Search": "Hae",
      "SearchFor": "Haku kohteelle {0}",
      "ShareQuery": "Jaa kysely",
      "Preferences": "Asetukset",
      "LinkOpeningSettings": "Linkin avausasetukset",
      "Reauthenticate": "Varmenna uudestaan {0}",
      "ResultsFilteringExpression": "Tulosten suodatusilmaisut",
      "FiltersInYourPreferences": "Suodattaa asetuksiisi",
      "Create": "Luo",
      "SearchIn": "Hae kohteessa {0}",
      "Seconds": "{0} sekunnissa",
      "ShowingResultsOf": "<sn>Tulos</sn><pl>Tulokset</pl> {0}<pl>–{1}</pl> / {2}",
      "SwitchTo": "Vaihda kohteeseen {0}",
      "Unexclude": "Sisällytä {0}",
      "ClearAllFilters": "Tyhjennä kaikki suodattimet",
      "SkipLogin": "Ohita kirjautuminen",
      "LoginInProgress": "Kirjautuminen käynnissä, odota",
      "Login": "Kirjaudu sisään",
      "GetStarted": "Aloita",
      "More": "Lisää",
      "Less": "Vähemmän",
      "Settings": "Asetukset",
      "Score": "Pistemäärä",
      "ScoreDescription": "Pistemäärä lasketaan esiintymisten määrästä sekä sijainnista tulosasetuksessa.",
      "Occurrences": "Esiintymiset",
      "OccurrencesDescription": "Lajittele esiintymismäärän mukaan, siten että arvot, joiden määrä on suurin, tulevat ensin.",
      "Label": "Merkki",
      "Of": "/",
      "LabelDescription": "Lajittele aakkosjärjestyksessä kenttäarvojen perusteella.",
      "Value": "Arvo",
      "ValueDescription": "Lajittele ensimmäisenä lasketun kentän arvojen perusteella",
      "AlphaAscending": "Nouseva arvo",
      "AlphaDescending": "Laskeva arvo",
      "ChiSquare": "Khiin neliö",
      "Nosort": "Ei lajittelua",
      "RelativeFrequency": "Suhteellinen tiheys",
      "RelativeFrequencyDescription": "Lajittele arvojen suhteellisen tiheyden perusteella. Vähiten yleiset arvot tulevat ylempänä.",
      "DateDistribution": "Päivämäärän jako",
      "Custom": "Räätälöity",
      "CustomDescription": "Lajittele räätälöidyn järjestyksen perusteella",
      "ComputedField": "Laskettu kenttä",
      "Ascending": "Nouseva",
      "Descending": "Laskeva",
      "noResultFor": "Ei tuloksia kohteelle {0}",
      "autoCorrectedQueryTo": "Kysely korjattiin automaattisesti kohteeseen {0}",
      "didYouMean": "Tarkoititko: {0}",
      "SuggestedResults": "Ehdotetut tulokset",
      "SuggestedQueries": "Ehdotetut kyselyt",
      "MostRelevantItems": "Merkityksellisimmät kohteet:",
      "AllItems": "Kaikki kohteet:",
      "ShowLess": "Näytä vähemmän",
      "ShowMore": "Näytä enemmän",
      "HideFacet": "Piilota fasetti",
      "ShowFacet": "Näytä fasetti",
      "AndOthers": "ja {0} muu<pl>ta</pl>",
      "Others": "{0} muu<pl>ta</pl>",
      "MostRelevantPosts": "Merkityksellisimmät postaukset:",
      "CompleteThread": "Täydennä ketju:",
      "ShowCompleteThread": "Näytä täysi ketju",
      "ShowOnlyTopMatchingPosts": "Näytä vain parhaiten sopivat postaukset",
      "MostRelevantReplies": "Merkityksellisimmät vastaukset:",
      "AllConversation": "Koko keskustelu:",
      "ShowAllConversation": "Näytä koko keskustelu",
      "ShowAllReplies": "Näytä kaikki vastaukset",
      "ShowOnlyMostRelevantReplies": "Näytä vain merkityksellisimmät vastaukset",
      "Close": "Sulje",
      "Open": "Avaa",
      "OpenInOutlookWhenPossible": "Avaa Outlook (kun mahdollista)",
      "AlwaysOpenInNewWindow": "Avaa aina tulokset uudessa ikkunassa",
      "QuickView": "Pikanäkymä",
      "ErrorReport": "Virheraportti",
      "OopsError": "Oho! Jotain meni pieleen palvelimella.",
      "ProblemPersists": "Jos ongelma ei poistu, ota yhteyttä ylläpitoon.",
      "GoBack": "Siirry takaisin",
      "Reset": "Nollaa",
      "Retry": "Yritä uudestaan",
      "MoreInfo": "Lisätietoja",
      "Username": "Käyttäjätunnus",
      "Password": "Salasana",
      "PostedBy": "Julkaisija:",
      "CannotConnect": "Palvelinosoitteeseen ei pysty muodostamaan yhteyttä.",
      "BadUserPass": "Salasana ei vastaa käyttäjätunnusta.",
      "PleaseEnterYourCredentials": "Syötä tunnistetietosi järjestelmälle {0}.",
      "PleaseEnterYourSearchPage": "Syötä hakusivusi URL",
      "Collapse": "Pienennä",
      "Collapsable": "Pienennettävä",
      "Expand": "Laajenna",
      "Today": "Tänään",
      "Yesterday": "Eilen",
      "Tomorrow": "Huomenna",
      "Duration": "Kesto: {0}",
      "IndexDuration": "Hakemiston kesto: {0}",
      "ProxyDuration": "Välityspalvelimen kesto: {0}",
      "ClientDuration": "Asiakkaan kesto: {0}",
      "Unavailable": "Ei saatavissa",
      "Reply": "Vastaa",
      "ReplyAll": "Vastaa kaikille",
      "Forward": "Välitä eteenpäin",
      "From": "Lähettäjä",
      "Caption": "Kuvateksti",
      "Expression": "Ilmaisu",
      "Tab": "Välilehti",
      "Tabs": "Välilehdet",
      "EnterExpressionName": "Syötä ilmaisun nimi",
      "EnterExpressionToFilterWith": "Syötä ilmaisu suodattaaksesi tulokset",
      "SelectTab": "Valitse välilehti",
      "SelectAll": "Valitse kaikki",
      "PageUrl": "Hakusivu URL",
      "ErrorSavingToDevice": "Virhe tietojen tallennuksessa laitteellesi",
      "ErrorReadingFromDevice": "Virhe tietoja luettaessa laitteeltasi",
      "AppIntro": "Puhu tuoteasiantuntijan kanssa, joka pystyy vastaamaan kysymyksiisi \n Coveosta ja auttamaan sinua päättämään, mikä Coveo-ratkaisu on oikea sinulle. Kokeile live-demoa!",
      "TryDemo": "Kokeile demoa",
      "ContactUs": "Ota meihin yhteyttä",
      "NewToCoveo": "Uusi Coveossa?",
      "LetUsHelpGetStarted": "Anna meidän auttaa sinut alkuun",
      "LikesThis": "{0} <pl>pitävät</pl><sn>pitää</sn> tästä.",
      "CannotConnectSearchPage": "Hakusivullesi ei pystytä yhdistämään",
      "AreYouSureDeleteFilter": "Oletko varma, että haluat poistaa suodattimen {0} ilmaisulla {1}",
      "OnlineHelp": "Verkkotuki",
      "Done": "Valmis",
      "SaveFacetState": "Tallenna tämä fasettitila",
      "ClearFacetState": "Tyhjennä fasettitila",
      "DisplayingTheOnlyMessage": "Näyttää ainoan viestin tässä keskustelussa",
      "NoNetworkConnection": "Ei verkkoyhteyttä",
      "UnknownConnection": "Tuntematon yhteys",
      "EthernetConnection": "Ethernet-yhteys",
      "WiFi": "WiFi-yhteys",
      "CELL": "Mobiiliyhteys",
      "CELL_2G": "2G-mobiiliyhteys",
      "CELL_3G": "3G-mobiiliyhteys",
      "CELL_4G": "4G-mobiiliyhteys",
      "Relevance": "Merkitys",
      "Date": "Päivämäärä",
      "Amount": "Määrä",
      "QueryExceptionNoException": "Ei poikkeusta",
      "QueryExceptionInvalidSyntax": "Virheellinen syntaksi",
      "QueryExceptionInvalidCustomField": "Virheellinen räätälöity kenttä",
      "QueryExceptionInvalidDate": "Virheellinen päivämäärä",
      "QueryExceptionInvalidExactPhrase": "Virheellinen tarkka lauseke",
      "QueryExceptionInvalidDateOp": "Virheellinen päiväyskäyttäjä",
      "QueryExceptionInvalidNear": "Virheellinen NEAR-käyttäjä",
      "QueryExceptionInvalidWeightedNear": "Virheellinen painotettu NEAR",
      "QueryExceptionInvalidTerm": "Virheellinen termi",
      "QueryExceptionTooManyTerms": "Liian monta termiä",
      "QueryExceptionWildcardTooGeneral": "Liian yleinen villikortti",
      "QueryExceptionInvalidSortField": "Virheellinen lajittelukenttä",
      "QueryExceptionInvalidSmallStringOp": "Virheellinen pienen jonon käyttäjä",
      "QueryExceptionRequestedResultsMax": "Pyydettyjä tuloksia enintään",
      "QueryExceptionAggregatedMirrorDead": "Koottu peili on pois verkosta",
      "QueryExceptionAggregatedMirrorQueryTimeOut": "Kootun peilin kyselyn aikakatkaisu",
      "QueryExceptionAggregatedMirrorInvalidBuildNumber": "Kootun peilin virheellinen rakennusnumero",
      "QueryExceptionAggregatedMirrorCannotConnect": "Koottuun peiliin ei voida yhdistää",
      "QueryExceptionNotEnoughLeadingCharsWildcard": "Ei tarpeeksi johtavan merkin villikortteja",
      "QueryExceptionSecurityInverterNotFound": "Turvallisuusmuunninta ei löytynyt",
      "QueryExceptionSecurityInverterAccessDenied": "Turvallisuusmuuntimen käyttöoikeus kielletty",
      "QueryExceptionAggregatedMirrorCannotImpersonate": "Koottu peili ei pysty esiintymään toisena",
      "QueryExceptionUnexpected": "Odottamaton",
      "QueryExceptionAccessDenied": "Käyttöoikeus kielletty",
      "QueryExceptionSuperUserTokenInvalid": "Superkäyttäjän merkki virheellinen",
      "QueryExceptionSuperUserTokenExpired": "Superkäyttäjän merkki vanhentunut",
      "QueryExceptionLicenseQueriesExpired": "Kyselyjen lisenssi vanhentunut",
      "QueryExceptionLicenseSuperUserTokenNotSupported": "Lisenssiä superkäyttäjän merkille ei tueta",
      "QueryExceptionInvalidSession": "Virheellinen istunto",
      "QueryExceptionInvalidDocument": "Virheellinen asiakirja",
      "QueryExceptionSearchDisabled": "Haku poistettu käytöstä",
      "FileType": "Tiedostotyyppi",
      "ShowAttachment": "Näytä liite",
      "OnFeed": "{0}:n syötteestä.",
      "Author": "Tekijä",
      "NoTitle": "Ei otsikkoa",
      "CurrentSelections": "Nykyiset valinnat",
      "AllContent": "Koko sisältö",
      "CancelLastAction": "Peruuta viimeinen toiminta",
      "SearchTips": "Hakuvihjeet",
      "CheckSpelling": "Tarkasta asiasanojen kirjoitusasu.",
      "TryUsingFewerKeywords": "Kokeile käyttää vähemmän, erilaisia tai yleisempiä asiasanoja.",
      "SelectFewerFilters": "Valitse vähemmän suodattimia hakusi laajentamiseksi.",
  }
  var locales = String["locales"] || (String["locales"] = {});
  locales["fi"] = _.extend({}, locales["fi"], dict);
  String["toLocaleString"].call(this, { "fi": dict });
  String["locale"] = "fi";
  String["defaultLocale"] = "en";
})();
/*
 * Globalize Culture fi
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

Globalize.addCultureInfo( "fi", "default", {
	name: "fi",
	englishName: "Finnish",
	nativeName: "suomi",
	language: "fi",
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
			",": " ",
			".": ",",
			symbol: "€"
		}
	},
	calendars: {
		standard: {
			"/": ".",
			firstDay: 1,
			days: {
				names: ["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"],
				namesAbbr: ["su","ma","ti","ke","to","pe","la"],
				namesShort: ["su","ma","ti","ke","to","pe","la"]
			},
			months: {
				names: ["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kesäkuu","heinäkuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu",""],
				namesAbbr: ["tammi","helmi","maalis","huhti","touko","kesä","heinä","elo","syys","loka","marras","joulu",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "d.M.yyyy",
				D: "d. MMMM'ta 'yyyy",
				t: "H:mm",
				T: "H:mm:ss",
				f: "d. MMMM'ta 'yyyy H:mm",
				F: "d. MMMM'ta 'yyyy H:mm:ss",
				M: "d. MMMM'ta'",
				Y: "MMMM yyyy"
			}
		}
	}
});

}( this ));
