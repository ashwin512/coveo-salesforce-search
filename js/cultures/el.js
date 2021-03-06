(function() {
  var dict = {
      "Unknown": "Άγνωστο",
      "And": "ΚΑΙ",
      "Authenticating": "Επαλήθευση {0}...",
      "Clear": "Διαγραφή {0}",
      "CompleteQuery": "Ολοκλήρωση αιτήματος",
      "Exclude": "Εξαίρεση {0}",
      "EnterTag": "Προσθήκη ετικέτας",
      "Next": "Επόμενο",
      "Last": "Τελευταίο",
      "Link": "Σύνδεσμος",
      "Or": "Ή",
      "Previous": "Προηγούμενο",
      "QueryDidntMatchAnyDocuments": "Το αίτημά σας δεν ταυτίζεται με οποιαδήποτε έγγραφα.",
      "QueryException": "Το αίτημά σας έχει ένα λάθος: {0}.",
      "Me": "Εγώ",
      "Remove": "Αφαίρεση",
      "Search": "Αναζήτηση",
      "SearchFor": "Αναζήτηση για {0}",
      "ShareQuery": "Διαμοιρασμός αιτήματος",
      "Preferences": "Προτιμήσεις",
      "LinkOpeningSettings": "Ρυθμίσεις ανοίγματος συνδέσμων",
      "Reauthenticate": "Επανάληψη επαλήθευσης {0}",
      "ResultsFilteringExpression": "Αποτελέσματα φιλτραρίσματος παραστάσεων",
      "FiltersInYourPreferences": "Φίλτρα στις προτιμήσεις σας",
      "Create": "Δημιουργία",
      "SearchIn": "Αναζήτηση σε {0}",
      "Seconds": "σε {0} δευτερόλεπτ<pl>α</pl>",
      "ShowingResultsOf": "Αποτελέσματ<pl>α</pl> {0}<pl>-{1}</pl> από {2}",
      "SwitchTo": "Μετάπτωση σε {0}",
      "Unexclude": "Άρση αποκλεισμού {0}",
      "ClearAllFilters": "Διαγραφή όλων των φίλτρων",
      "SkipLogin": "Παράλειψη διαδικασίας σύνδεσης",
      "LoginInProgress": "Διαδικασία σύνδεσης σε εξέλιξη, παρακαλώ περιμένετε...",
      "Login": "Σύνδεση",
      "GetStarted": "Ξεκινήστε",
      "More": "Περισσότερα",
      "Less": "Λιγότερα",
      "Settings": "Ρυθμίσεις",
      "Score": "Βαθμολογία",
      "ScoreDescription": "Η βαθμολογία υπολογίζεται βάση του αριθμού εμφανίσεων, καθώς και βάση της θέσης στο σύνολο αποτελεσμάτων.",
      "Occurrences": "Εμφανίσεις",
      "OccurrencesDescription": "Ταξινόμηση βάση αριθμού εμφανίσεων, με τις τιμές που έχουν τον υψηλότερο αριθμό να εμφανίζονται πρώτες.",
      "Label": "Ετικέτα",
      "Of": "από",
      "LabelDescription": "Ταξινόμηση αλφαβητικά των τιμών πεδίου.",
      "Value": "Τιμή",
      "ValueDescription": "Ταξινόμηση των τιμών του πρώτου υπολογισμένου πεδίου",
      "AlphaAscending": "Τιμή αύξουσα",
      "AlphaDescending": "Τιμή φθίνουσα",
      "ChiSquare": "χ στο τετράγωνο",
      "Nosort": "Καμία ταξινόμηση",
      "RelativeFrequency": "Σχετική συχνότητα",
      "RelativeFrequencyDescription": "Ταξινόμηση βάση της σχετικής συχνότητας των τιμών. Οι λιγότερο κοινές τιμές θα εμφανίζονται ψηλότερα.",
      "DateDistribution": "Διανομή ημερομηνίας",
      "Custom": "Προσαρμοσμένη",
      "CustomDescription": "Ταξινόμηση βάση προσαρμοσμένης κατάταξης",
      "ComputedField": "Υπολογισμένο πεδίο",
      "Ascending": "Αύξων",
      "Descending": "Φθίνων",
      "noResultFor": "Κανένα αποτέλεσμα για {0}",
      "autoCorrectedQueryTo": "Το αίτημα διορθώθηκε αυτόματα σε {0}",
      "didYouMean": "Μήπως εννοείτε: {0}",
      "SuggestedResults": "Προτεινόμενα αποτελέσματα",
      "SuggestedQueries": "Προτεινόμενα αιτήματα",
      "MostRelevantItems": "Πιο σχετικά αντικείμενα:",
      "AllItems": "Όλα τα αντικείμενα:",
      "ShowLess": "Εμφάνιση λιγότερων",
      "ShowMore": "Εμφάνιση περισσότερων",
      "HideFacet": "Απόκρυψη όψης",
      "ShowFacet": "Εμφάνιση όψης",
      "AndOthers": "και {0} άλλω<pl>ν</pl>",
      "Others": "{0} άλλ<pl>α</pl>",
      "MostRelevantPosts": "Πιο σχετικές δημοσιεύσεις:",
      "CompleteThread": "Ολόκληρη η συνομιλία:",
      "ShowCompleteThread": "Εμφάνιση ολόκληρης της συνομιλίας",
      "ShowOnlyTopMatchingPosts": "Εμφάνιση μόνο των κορυφαίων δημοσιεύσεων που ταυτίζονται",
      "MostRelevantReplies": "Πιο σχετικές απαντήσεις:",
      "AllConversation": "Ολόκληρη συζήτηση:",
      "ShowAllConversation": "Εμφάνιση ολόκληρης της συζήτησης",
      "ShowAllReplies": "Εμφάνιση όλων των απαντήσεων",
      "ShowOnlyMostRelevantReplies": "Εμφάνιση μόνο των πιο σχετικών απαντήσεων",
      "Close": "Κλείσιμο",
      "Open": "Άνοιγμα",
      "OpenInOutlookWhenPossible": "Άνοιγμα στο Outlook (όταν είναι εφικτό)",
      "AlwaysOpenInNewWindow": "Πάντοτε να ανοίγουν τα αποτελέσματα σε νέο παράθυρο",
      "QuickView": "Γρήγορη επισκόπηση",
      "ErrorReport": "Αναφορά λάθους",
      "OopsError": "Ωχ! Κάτι πήγε στραβά στον διακομιστή.",
      "ProblemPersists": "Αν το πρόβλημα παραμένει, παρακαλώ επικοινωνήστε με τον διαχειριστή.",
      "GoBack": "Πηγαίνετε πίσω",
      "Reset": "Επαναφορά",
      "Retry": "Προσπάθεια εκ νέου",
      "MoreInfo": "Περισσότερες πληροφορίες",
      "Username": "Όνομα χρήστη",
      "Password": "Κωδικός πρόσβασης",
      "PostedBy": "Δημοσιεύτηκε από",
      "CannotConnect": "Δεν είναι δυνατή η σύνδεση στη διεύθυνση του διακομιστή.",
      "BadUserPass": "Ο κωδικός πρόσβασης δεν ταιριάζει με το όνομα χρήστη.",
      "PleaseEnterYourCredentials": "Παρακαλώ καταχωρήστε τα διαπιστευτήριά σας για το {0}.",
      "PleaseEnterYourSearchPage": "Παρακαλώ καταχωρήστε το URL της σελίδας αναζήτησής σας",
      "Collapse": "Σύμπτυξη",
      "Collapsable": "Συμπτυσσόμενη",
      "Expand": "Ανάπτυξη",
      "Today": "Σήμερα",
      "Yesterday": "Χθες",
      "Tomorrow": "Αύριο",
      "Duration": "Διάρκεια: {0}",
      "IndexDuration": "Διάρκεια ευρετηρίου: {0}",
      "ProxyDuration": "Διάρκεια μεσολάβησης: {0}",
      "ClientDuration": "Διάρκεια πελάτη: {0}",
      "Unavailable": "Μη διαθέσιμος",
      "Reply": "Απάντηση",
      "ReplyAll": "Απάντηση σε όλους",
      "Forward": "Προώθηση",
      "From": "Από",
      "Caption": "Λεζάντα",
      "Expression": "Παράσταση",
      "Tab": "Καρτέλα",
      "Tabs": "Καρτέλες",
      "EnterExpressionName": "Καταχωρήσετε το όνομα παράστασης",
      "EnterExpressionToFilterWith": "Καταχώρηση της παράστασης για φιλτράρισμα των αποτελεσμάτων με",
      "SelectTab": "Επιλογή καρτέλας",
      "SelectAll": "Επιλογή όλων",
      "PageUrl": "URL σελίδας αναζήτησης",
      "ErrorSavingToDevice": "Λάθος κατά τη διαδικασία αποθήκευσης των πληροφοριών στη συσκευή σας",
      "ErrorReadingFromDevice": "Λάθος κατά τη διαδικασία ανάγνωσης των πληροφοριών από τη συσκευή σας",
      "AppIntro": "Επικοινωνήστε με άτομο εξειδικευμένο στο προϊόν, το οποίο μπορεί να απαντήσει στις ερωτήσεις σας σχετικά με την πλατφόρμα Coveo, το οποίο θα σας βοηθήσει να αποφασίσετε ποια λύση Coveo είναι η κατάλληλη για εσάς. Ή δοκιμάστε μία ζωντανή επίδειξη!",
      "TryDemo": "Δοκιμάστε την επίδειξη",
      "ContactUs": "Επικοινωνήστε μαζί μας",
      "NewToCoveo": "Πρώτη φορά στην πλατφόρμα Coveo;",
      "LetUsHelpGetStarted": "Αφήστε μας να σας βοηθήσουμε να ξεκινήσετε",
      "LikesThis": "{0} τους αρέσε<sn>ι</sn> αυτό.",
      "CannotConnectSearchPage": "Δεν είναι δυνατή η σύνδεση στη σελίδα αναζήτησής σας",
      "AreYouSureDeleteFilter": "Είστε βέβαιος ότι θέλετε να διαγράψετε το φίλτρο {0} με την παράσταση {1}",
      "OnlineHelp": "Διαδικτυακή βοήθεια",
      "Done": "Τέλος",
      "SaveFacetState": "Αποθηκεύστε τη συγκεκριμένη κατάσταση όψης",
      "ClearFacetState": "Διαγραφή της συγκεκριμένης κατάστασης όψης",
      "DisplayingTheOnlyMessage": "Απεικόνιση του μοναδικού μηνύματος στη συγκεκριμένη συζήτηση",
      "NoNetworkConnection": "Δεν υφίσταται σύνδεση δικτύου",
      "UnknownConnection": "Άγνωστη σύνδεση",
      "EthernetConnection": "Σύνδεση Ethernet",
      "WiFi": "Σύνδεση WiFi",
      "CELL": "Σύνδεση κινητού",
      "CELL_2G": "Σύνδεση κινητού 2G",
      "CELL_3G": "Σύνδεση κινητού 3G",
      "CELL_4G": "Σύνδεση κινητού 4G",
      "Relevance": "Συνάφεια",
      "Date": "Ημερομηνία",
      "Amount": "Ποσότητα",
      "QueryExceptionNoException": "Καμία εξαίρεση",
      "QueryExceptionInvalidSyntax": "Άκυρη σύνταξη",
      "QueryExceptionInvalidCustomField": "Άκυρο προσαρμοσμένο πεδίο",
      "QueryExceptionInvalidDate": "Άκυρη ημερομηνία",
      "QueryExceptionInvalidExactPhrase": "Άκυρη ακριβής φράση",
      "QueryExceptionInvalidDateOp": "Άκυρος τελεστής ημερομηνίας",
      "QueryExceptionInvalidNear": "Άκυρος τελεστής NEAR",
      "QueryExceptionInvalidWeightedNear": "Άκυρο σταθμισμένο NEAR",
      "QueryExceptionInvalidTerm": "Άκυρος όρος",
      "QueryExceptionTooManyTerms": "Πάρα πολλοί όροι",
      "QueryExceptionWildcardTooGeneral": "Ο χαρακτήρας μπαλαντέρ είναι πολύ γενικός",
      "QueryExceptionInvalidSortField": "Άκυρο πεδίο ταξινόμησης",
      "QueryExceptionInvalidSmallStringOp": "Άκυρος τελεστής σύντομης φράσης",
      "QueryExceptionRequestedResultsMax": "Μέγιστο αιτούμενων αποτελεσμάτων",
      "QueryExceptionAggregatedMirrorDead": "Το συνδεδεμένο με το κυρίως ευρετήριο απομακρυσμένο αντίγραφο ευρετηρίου είναι εκτός σύνδεσης",
      "QueryExceptionAggregatedMirrorQueryTimeOut": "Λήξη αιτήματος συνδεδεμένου με το κυρίως ευρετήριο απομακρυσμένου αντίγραφου ευρετηρίου",
      "QueryExceptionAggregatedMirrorInvalidBuildNumber": "Άκυρος αριθμός δομής συνδεδεμένου με το κυρίως ευρετήριο απομακρυσμένου αντίγραφου ευρετηρίου",
      "QueryExceptionAggregatedMirrorCannotConnect": "Το συνδεδεμένο με το κυρίως ευρετήριο απομακρυσμένο αντίγραφο ευρετηρίου δεν μπορεί να συνδεθεί",
      "QueryExceptionNotEnoughLeadingCharsWildcard": "Δεν υπάρχουν αρκετοί χαρακτήρες που να προηγούνται του μπαλαντέρ",
      "QueryExceptionSecurityInverterNotFound": "Ο αναστροφέας ασφαλείας δεν βρέθηκε",
      "QueryExceptionSecurityInverterAccessDenied": "Άρνηση πρόσβασης αναστροφέα ασφαλείας",
      "QueryExceptionAggregatedMirrorCannotImpersonate": "Το συνδεδεμένο με το κυρίως ευρετήριο απομακρυσμένο αντίγραφο ευρετηρίου δεν μπορεί να εκτελέσει αίτημα με χρήση απομίμησης",
      "QueryExceptionUnexpected": "Απρόσμενο",
      "QueryExceptionAccessDenied": "Άρνηση πρόσβασης",
      "QueryExceptionSuperUserTokenInvalid": "Το διακριτικό χρήστη με δικαιώματα επιβλέποντος είναι άκυρο",
      "QueryExceptionSuperUserTokenExpired": "Το διακριτικό χρήστη με δικαιώματα επιβλέποντος έληξε",
      "QueryExceptionLicenseQueriesExpired": "Η άδεια αιτημάτων έληξε",
      "QueryExceptionLicenseSuperUserTokenNotSupported": "Η άδεια διακριτικού χρήστη με δικαιώματα επιβλέποντος δεν υποστηρίζεται",
      "QueryExceptionInvalidSession": "Άκυρη συνεδρία",
      "QueryExceptionInvalidDocument": "Άκυρο έγγραφο",
      "QueryExceptionSearchDisabled": "Η έρευνα απενεργοποιήθηκε",
      "FileType": "Τύπος εγγράφου",
      "ShowAttachment": "Εμφάνιση συνημμένου",
      "OnFeed": "στην τροφοδοσία του {0}.",
      "Author": "Συγγραφέας",
      "NoTitle": "Δεν υφίσταται τίτλος",
      "CurrentSelections": "Υφιστάμενες επιλογές",
      "AllContent": "Όλο το περιεχόμενο",
      "CancelLastAction": "Ακύρωση τελευταίας πράξης",
      "SearchTips": "Συμβουλές αναζήτησης",
      "CheckSpelling": "Ελέγξτε την ορθογραφία των λέξεων-κλειδιών που χρησιμοποιήσατε.",
      "TryUsingFewerKeywords": "Δοκιμάστε να χρησιμοποιήσετε λιγότερες, διαφορετικές ή γενικότερες λέξεις-κλειδιά.",
      "SelectFewerFilters": "Επιλέξτε λιγότερα φίλτρα για να διευρύνετε την αναζήτησή σας.",
  }
  var locales = String["locales"] || (String["locales"] = {});
  locales["el"] = _.extend({}, locales["el"], dict);
  String["toLocaleString"].call(this, { "el": dict });
  String["locale"] = "el";
  String["defaultLocale"] = "en";
})();
/*
 * Globalize Culture el
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

Globalize.addCultureInfo( "el", "default", {
	name: "el",
	englishName: "Greek",
	nativeName: "Ελληνικά",
	language: "el",
	numberFormat: {
		",": ".",
		".": ",",
		"NaN": "μη αριθμός",
		negativeInfinity: "-Άπειρο",
		positiveInfinity: "Άπειρο",
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
			firstDay: 1,
			days: {
				names: ["Κυριακή","Δευτέρα","Τρίτη","Τετάρτη","Πέμπτη","Παρασκευή","Σάββατο"],
				namesAbbr: ["Κυρ","Δευ","Τρι","Τετ","Πεμ","Παρ","Σαβ"],
				namesShort: ["Κυ","Δε","Τρ","Τε","Πε","Πα","Σά"]
			},
			months: {
				names: ["Ιανουάριος","Φεβρουάριος","Μάρτιος","Απρίλιος","Μάιος","Ιούνιος","Ιούλιος","Αύγουστος","Σεπτέμβριος","Οκτώβριος","Νοέμβριος","Δεκέμβριος",""],
				namesAbbr: ["Ιαν","Φεβ","Μαρ","Απρ","Μαϊ","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ",""]
			},
			monthsGenitive: {
				names: ["Ιανουαρίου","Φεβρουαρίου","Μαρτίου","Απριλίου","Μαΐου","Ιουνίου","Ιουλίου","Αυγούστου","Σεπτεμβρίου","Οκτωβρίου","Νοεμβρίου","Δεκεμβρίου",""],
				namesAbbr: ["Ιαν","Φεβ","Μαρ","Απρ","Μαϊ","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ",""]
			},
			AM: ["πμ","πμ","ΠΜ"],
			PM: ["μμ","μμ","ΜΜ"],
			eras: [{"name":"μ.Χ.","start":null,"offset":0}],
			patterns: {
				d: "d/M/yyyy",
				D: "dddd, d MMMM yyyy",
				f: "dddd, d MMMM yyyy h:mm tt",
				F: "dddd, d MMMM yyyy h:mm:ss tt",
				M: "dd MMMM",
				Y: "MMMM yyyy"
			}
		}
	}
});

}( this ));
