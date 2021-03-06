(function() {
  var dict = {
      "Unknown": "Bilinmeyen",
      "And": "VE",
      "Authenticating": "{0} kimliği doğrulanıyor...",
      "Clear": "{0} modelini temizle",
      "CompleteQuery": "Sorguyu Tamamla",
      "Exclude": "{0} modelini hariç tut",
      "EnterTag": "Etiket Ekle",
      "Next": "Sonraki",
      "Last": "İleri",
      "Link": "Geri",
      "Or": "VEYA",
      "Previous": "Önceki",
      "QueryDidntMatchAnyDocuments": "Sorgunuz, hiçbir belgeyle eşleşmedi.",
      "QueryException": "Sorgunuzda bir hata var: {0}.",
      "Me": "Ben",
      "Remove": "Kaldır",
      "Search": "Ara",
      "SearchFor": "Şunu ara: {0}",
      "ShareQuery": "Sorguyu Paylaş",
      "Preferences": "Tercihler",
      "LinkOpeningSettings": "Bağlantı Açma Ayarları",
      "Reauthenticate": "{0} kimliğini yeniden doğrula",
      "ResultsFilteringExpression": "Sonuçları Filtreleme İfadeleri",
      "FiltersInYourPreferences": "Tercihlerinizdeki filtreler",
      "Create": "Oluştur",
      "SearchIn": "{0} modelinde ara",
      "Seconds": "{0} saniye içinde",
      "ShowingResultsOf": "{2} / {0}<pl>-{1}</pl> sonuç",
      "SwitchTo": "{0} olarak değiştir",
      "Unexclude": "{0} modelini hariç tutma",
      "ClearAllFilters": "Tüm Filtreleri Temizleyin",
      "SkipLogin": "Oturum açmayı atla",
      "LoginInProgress": "Oturum açma işlemi devam ediyor, lütfen bekleyin...",
      "Login": "Oturum Aç",
      "GetStarted": "Başlat",
      "More": "Daha Fazla",
      "Less": "Daha Az",
      "Settings": "Ayarlar",
      "Score": "Puan",
      "ScoreDescription": "Puan, oluşma sayısından ve aynı zamanda sonuç setindeki konumdan hesaplanır.",
      "Occurrences": "Oluşma",
      "OccurrencesDescription": "Önce gösterilen en yüksek sayıya sahip değerleri olan oluşum sayısına göre sırala.",
      "Label": "Etiket",
      "Of": "/",
      "LabelDescription": "Alan değerlerinde alfabetik olarak sırala.",
      "Value": "Değer",
      "ValueDescription": "İlk hesaplanan alanın değerlerinde sırala",
      "AlphaAscending": "Artan Değer",
      "AlphaDescending": "Azalan Değer",
      "ChiSquare": "Ki Kare",
      "Nosort": "Sıralama Yok",
      "RelativeFrequency": "Rölatif Frekans",
      "RelativeFrequencyDescription": "Değerlerin rölatif frekansına dayalı olarak sırala. Daha az rastlanan değerler yüksek görünür.",
      "DateDistribution": "Tarih dağılımı",
      "Custom": "Özel",
      "CustomDescription": "Özel sıraya göre sırala",
      "ComputedField": "Hesaplanmış Alan",
      "Ascending": "Artan",
      "Descending": "Azalan",
      "noResultFor": "{0} için sonuç yok",
      "autoCorrectedQueryTo": "Sorgu otomatik olarak {0} şeklinde düzeltildi",
      "didYouMean": "Şunu mu demek istediniz: {0}",
      "SuggestedResults": "Önerilen Sonuçlar",
      "SuggestedQueries": "Önerilen Sorgular",
      "MostRelevantItems": "En çok bağlantılı öğeler:",
      "AllItems": "Tüm öğeler:",
      "ShowLess": "Daha az göster",
      "ShowMore": "Daha fazla göster",
      "HideFacet": "Modeli Gizle",
      "ShowFacet": "Modeli Göster",
      "AndOthers": "ve {0} diğer<pl>leri</pl>",
      "Others": "{0} diğer<pl>leri</pl>",
      "MostRelevantPosts": "En Çok Bağlantılı Gönderiler:",
      "CompleteThread": "İş Parçacığını Tamamla:",
      "ShowCompleteThread": "Tamamlanan İş Parçalarını Göster",
      "ShowOnlyTopMatchingPosts": "Sadece En Çok Eşlenen Gönderileri Göster",
      "MostRelevantReplies": "En Çok Bağlantılı Cevaplar:",
      "AllConversation": "Tüm Konuşmalar:",
      "ShowAllConversation": "Tüm Konuşmaları Göster",
      "ShowAllReplies": "Tüm Yanıtları Göster",
      "ShowOnlyMostRelevantReplies": "Sadece En Çok İlgili Yanıtları Göster",
      "Close": "Kapat",
      "Open": "Aç",
      "OpenInOutlookWhenPossible": "Outlook'ta aç (mümkün olduğunda)",
      "AlwaysOpenInNewWindow": "Sonuçları her zaman yeni pencerede aç",
      "QuickView": "Hızlı Bakış",
      "ErrorReport": "Hata Raporu",
      "OopsError": "Üzgünüz! Sunucuda bir şeyler ters gitti.",
      "ProblemPersists": "Sorun devam ederse yöneticiye danışın.",
      "GoBack": "Geri Git",
      "Reset": "Sıfırla",
      "Retry": "Yeniden Dene",
      "MoreInfo": "Daha Fazla Bilgi",
      "Username": "Kullanıcı Adı",
      "Password": "Parola",
      "PostedBy": "Gönderen:",
      "CannotConnect": "Sunucu adresine bağlanılamıyor.",
      "BadUserPass": "Parola kullanıcı adıyla eşleşmiyor.",
      "PleaseEnterYourCredentials": "Lütfen {0} için kimlik bilgilerinizi girin.",
      "PleaseEnterYourSearchPage": "Lütfen arama sayfası URL'nizi girin",
      "Collapse": "Daralt",
      "Collapsable": "Daraltılabilir",
      "Expand": "Genişlet",
      "Today": "Bugün",
      "Yesterday": "Dün",
      "Tomorrow": "Yarın",
      "Duration": "Süre: {0}",
      "IndexDuration": "İndeks Süresi: {0}",
      "ProxyDuration": "Proxy Süresi: {0}",
      "ClientDuration": "İstemci Süresi: {0}",
      "Unavailable": "Mevcut Değil",
      "Reply": "Yanıtla",
      "ReplyAll": "Tümünü Yanıtla",
      "Forward": "İlet",
      "From": "Gönderen",
      "Caption": "Resim Yazısı",
      "Expression": "İfade",
      "Tab": "Sekme",
      "Tabs": "Sekmeler",
      "EnterExpressionName": "İfade adını girin",
      "EnterExpressionToFilterWith": "Sonuçları şunla filtrelemek için ifade girin:",
      "SelectTab": "Sekme Seç",
      "SelectAll": "Tümünü Seç",
      "PageUrl": "Sayfa URL'sini Ara",
      "ErrorSavingToDevice": "Bilgilerin aygıtınıza yazılması esnasında hata",
      "ErrorReadingFromDevice": "Bilgilerin aygıtınızdan okunması esnasında hata",
      "AppIntro": "Coveo hakkındaki sorularınıza cevap verebilecek ve hangi Coveo çözümünün sizin için doğru olduğu konusunda size yardımcı olabilecek bir ürün uzmanıyla konuşun. Veya bir canlı demoyu deneyin!",
      "TryDemo": "Demoyu deneyin",
      "ContactUs": "Bizimle iletişime geçin",
      "NewToCoveo": "Coveo'da yeni misiniz?",
      "LetUsHelpGetStarted": "Başlamanıza yardımcı olmamıza izin verin",
      "LikesThis": "{0} bundan hoşlanıyor.",
      "CannotConnectSearchPage": "Arama sayfanıza bağlanılamıyor",
      "AreYouSureDeleteFilter": "{0} filtresini {1} ifadesiyle silmek istediğinizden emin misiniz?",
      "OnlineHelp": "Çevrimçi Yardım",
      "Done": "Bitti",
      "SaveFacetState": "Bu model durumunu kaydet",
      "ClearFacetState": "Model durumunu temizle",
      "DisplayingTheOnlyMessage": "Bu konuşmada sadece mesajı görüntüleme",
      "NoNetworkConnection": "Ağ bağlantısı yok",
      "UnknownConnection": "Bilinmeyen bağlantı",
      "EthernetConnection": "Ethernet bağlantısı",
      "WiFi": "WiFi bağlantısı",
      "CELL": "Cep telefonu bağlantısı",
      "CELL_2G": "Cep telefonu 2G bağlantısı",
      "CELL_3G": "Cep telefonu 3G bağlantısı",
      "CELL_4G": "Cep telefonu 4G bağlantısı",
      "Relevance": "Uygunluk",
      "Date": "Tarih",
      "Amount": "Miktar",
      "QueryExceptionNoException": "İstisnasız",
      "QueryExceptionInvalidSyntax": "Geçersiz sözdizimi",
      "QueryExceptionInvalidCustomField": "Geçersiz özel alan",
      "QueryExceptionInvalidDate": "Geçersiz tarih",
      "QueryExceptionInvalidExactPhrase": "Geçersiz kesin tümceciği",
      "QueryExceptionInvalidDateOp": "Geçersiz tarih operatörü",
      "QueryExceptionInvalidNear": "Geçersiz NEAR operatörü",
      "QueryExceptionInvalidWeightedNear": "Geçersiz ağırlıklı NEAR",
      "QueryExceptionInvalidTerm": "Geçersiz terim",
      "QueryExceptionTooManyTerms": "Çok fazla terim",
      "QueryExceptionWildcardTooGeneral": "Joker karakter çok genel",
      "QueryExceptionInvalidSortField": "Geçersiz sırlama alanı",
      "QueryExceptionInvalidSmallStringOp": "Geçersiz küçük dize operatörü",
      "QueryExceptionRequestedResultsMax": "Maksimum talep edilen sonuç",
      "QueryExceptionAggregatedMirrorDead": "Birleştirilmiş ayna çevrimdışı",
      "QueryExceptionAggregatedMirrorQueryTimeOut": "Birleştirilmiş aynı sorgusu zaman aşımı",
      "QueryExceptionAggregatedMirrorInvalidBuildNumber": "Birleştirilmiş ayna geçersiz derleme numarası",
      "QueryExceptionAggregatedMirrorCannotConnect": "Birleştirilmiş ayna bağlanamıyor",
      "QueryExceptionNotEnoughLeadingCharsWildcard": "Joker karakterden önce yetersiz karakter",
      "QueryExceptionSecurityInverterNotFound": "Güvenlik dönüştürücüsü bulunamadı",
      "QueryExceptionSecurityInverterAccessDenied": "Güvenlik dönüştürücüsü erişimi reddedildi",
      "QueryExceptionAggregatedMirrorCannotImpersonate": "Birleştirilmiş ayna temsil edilemiyor",
      "QueryExceptionUnexpected": "Beklenmeyen",
      "QueryExceptionAccessDenied": "Erişim Engellendi",
      "QueryExceptionSuperUserTokenInvalid": "Süper kullanıcı kodu geçersiz",
      "QueryExceptionSuperUserTokenExpired": "Süper kullanıcı kodu süresi sona ermiş",
      "QueryExceptionLicenseQueriesExpired": "Sorgular lisansı süresi sona ermiş",
      "QueryExceptionLicenseSuperUserTokenNotSupported": "Lisans süper kullanıcı kodu desteklenmiyor",
      "QueryExceptionInvalidSession": "Geçersiz oturum",
      "QueryExceptionInvalidDocument": "Geçersiz belge",
      "QueryExceptionSearchDisabled": "Arama etkin değil",
      "FileType": "Dosya türü",
      "ShowAttachment": "Eki göster",
      "OnFeed": "{0} akışında.",
      "Author": "Yazan",
      "NoTitle": "Başlık yok",
      "CurrentSelections": "Mevcut seçimler",
      "AllContent": "Tüm içerik",
      "CancelLastAction": "Son işlemi iptal et",
      "SearchTips": "Arama ipuçları",
      "CheckSpelling": "Anahtar sözcüklerinizin yazılımını kontrol edin.",
      "TryUsingFewerKeywords": "Daha az, farklı veya daha fazla genel anahtar sözcük kullanmayı deneyin.",
      "SelectFewerFilters": "Aramanızı genişletmek için daha az filtre seçin.",
  }
  var locales = String["locales"] || (String["locales"] = {});
  locales["tr"] = _.extend({}, locales["tr"], dict);
  String["toLocaleString"].call(this, { "tr": dict });
  String["locale"] = "tr";
  String["defaultLocale"] = "en";
})();
/*
 * Globalize Culture tr
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

Globalize.addCultureInfo( "tr", "default", {
	name: "tr",
	englishName: "Turkish",
	nativeName: "Türkçe",
	language: "tr",
	numberFormat: {
		",": ".",
		".": ",",
		percent: {
			pattern: ["-%n","%n"],
			",": ".",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			",": ".",
			".": ",",
			symbol: "TL"
		}
	},
	calendars: {
		standard: {
			"/": ".",
			firstDay: 1,
			days: {
				names: ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"],
				namesAbbr: ["Paz","Pzt","Sal","Çar","Per","Cum","Cmt"],
				namesShort: ["Pz","Pt","Sa","Ça","Pe","Cu","Ct"]
			},
			months: {
				names: ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık",""],
				namesAbbr: ["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "dd.MM.yyyy",
				D: "dd MMMM yyyy dddd",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "dd MMMM yyyy dddd HH:mm",
				F: "dd MMMM yyyy dddd HH:mm:ss",
				M: "dd MMMM",
				Y: "MMMM yyyy"
			}
		}
	}
});

}( this ));
