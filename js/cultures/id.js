(function() {
  var dict = {
      "Unknown": "Tidak dikenal",
      "And": "DAN",
      "Authenticating": "Mengautentikasi {0}...",
      "Clear": "Bersihkan {0}",
      "CompleteQuery": "Lengkapi Kueri",
      "Exclude": "Kecualikan {0}",
      "EnterTag": "Tambah Tag",
      "Next": "Berikutnya",
      "Last": "Terakhir",
      "Link": "Tautan",
      "Or": "ATAU",
      "Previous": "Sebelumnya",
      "QueryDidntMatchAnyDocuments": "Kueri Anda tidak cocok dengan dokumen mana pun.",
      "QueryException": "Kueri Anda memuat kesalahan: {0}.",
      "Me": "Saya",
      "Remove": "Hilangkan",
      "Search": "Cari",
      "SearchFor": "Cari {0}",
      "ShareQuery": "Bagikan Kueri",
      "Preferences": "Preferensi",
      "LinkOpeningSettings": "Pengaturan Pembukaan Tautan",
      "Reauthenticate": "Autentikasi Ulang {0}",
      "ResultsFilteringExpression": "Ekspresi Pemfilteran Hasil",
      "FiltersInYourPreferences": "Filter pada preferensi Anda",
      "Create": "Buat",
      "SearchIn": "Cari di {0}",
      "Seconds": "dalam {0} detik",
      "ShowingResultsOf": "Hasil {0}<pl>-{1}</pl> dari {2}",
      "SwitchTo": "Alihkan ke {0}",
      "Unexclude": "Jangan kecualikan {0}",
      "ClearAllFilters": "Bersihkan Semua Filter",
      "SkipLogin": "Lewati proses masuk",
      "LoginInProgress": "Proses masuk sedang berlangsung, harap tunggu ...",
      "Login": "Masuk",
      "GetStarted": "Mulai",
      "More": "Lebih banyak",
      "Less": "Lebih sedikit",
      "Settings": "Pengaturan",
      "Score": "Skor",
      "ScoreDescription": "Skor dihitung dari jumlah kemunculan dan juga dari posisi pada set hasil.",
      "Occurrences": "Kemunculan",
      "OccurrencesDescription": "Sortir menurut jumlah kemunculan. Nilai yang jumlahnya paling banyak akan muncul lebih awal.",
      "Label": "Label",
      "Of": "dari",
      "LabelDescription": "Sortir secara alfabetis berdasarkan nilai bidang.",
      "Value": "Nilai",
      "ValueDescription": "Sortir berdasarkan nilai pada bidang yang dihitung pertama",
      "AlphaAscending": "Nilai Menaik",
      "AlphaDescending": "Nilai Menurun",
      "ChiSquare": "Chi Square",
      "Nosort": "Tanpa Sortir",
      "RelativeFrequency": "Frekuensi Relatif",
      "RelativeFrequencyDescription": "Sortir berdasarkan frekuensi relatif nilai. Nilai yang kurang umum akan muncul lebih awal.",
      "DateDistribution": "Distribusi tanggal",
      "Custom": "Khusus",
      "CustomDescription": "Sortir berdasarkan urutan khusus",
      "ComputedField": "Bidang yang Dihitung",
      "Ascending": "Menaik",
      "Descending": "Menurun",
      "noResultFor": "Tidak ada hasil untuk {0}",
      "autoCorrectedQueryTo": "Kueri dikoreksi secara otomatis menjadi {0}",
      "didYouMean": "Apakah maksud Anda: {0}",
      "SuggestedResults": "Hasil yang Disarankan",
      "SuggestedQueries": "Kueri yang Disarankan",
      "MostRelevantItems": "Item paling relevan:",
      "AllItems": "Semua item:",
      "ShowLess": "Tunjukkan lebih sedikit",
      "ShowMore": "Tunjukkan lebih banyak",
      "HideFacet": "Sembunyikan Faset",
      "ShowFacet": "Tunjukkan Faset",
      "AndOthers": "dan {0} lainnya",
      "Others": "{0} lainnya",
      "MostRelevantPosts": "Posting yang Paling Relevan:",
      "CompleteThread": "Utas Lengkap:",
      "ShowCompleteThread": "Tunjukkan Utas Lengkap",
      "ShowOnlyTopMatchingPosts": "Tunjukkan Hanya Posting yang Paling Cocok",
      "MostRelevantReplies": "Balasan yang Paling Relevan:",
      "AllConversation": "Semua Percakapan:",
      "ShowAllConversation": "Tunjukkan Semua Percakapan",
      "ShowAllReplies": "Tunjukkan Semua Balasan",
      "ShowOnlyMostRelevantReplies": "Tunjukkan Hanya Balasan yang Paling Relevan",
      "Close": "Tutup",
      "Open": "Buka",
      "OpenInOutlookWhenPossible": "Buka di Outlook (bila mungkin)",
      "AlwaysOpenInNewWindow": "Selalu buka hasil di jendela baru",
      "QuickView": "Tampilan Cepat",
      "ErrorReport": "Laporan Kesalahan",
      "OopsError": "Aduh! Ada masalah pada server.",
      "ProblemPersists": "Jika masalah ini berlanjut, hubungi administrator.",
      "GoBack": "Kembali",
      "Reset": "Atur Ulang",
      "Retry": "Coba Lagi",
      "MoreInfo": "Informasi Selengkapnya",
      "Username": "Nama Pengguna",
      "Password": "Kata Sandi",
      "PostedBy": "Diposting oleh",
      "CannotConnect": "Tidak dapat menyambung ke alamat server ini.",
      "BadUserPass": "Kata sandi tidak cocok dengan nama pengguna.",
      "PleaseEnterYourCredentials": "Masukkan kredensial Anda untuk {0}.",
      "PleaseEnterYourSearchPage": "Masukkan URL halaman pencarian Anda",
      "Collapse": "Ciutkan",
      "Collapsable": "Dapat diciutkan",
      "Expand": "Bentangkan",
      "Today": "Hari Ini",
      "Yesterday": "Kemarin",
      "Tomorrow": "Besok",
      "Duration": "Durasi: {0}",
      "IndexDuration": "Durasi Indeks: {0}",
      "ProxyDuration": "Durasi Proksi: {0}",
      "ClientDuration": "Durasi Klien: {0}",
      "Unavailable": "Tidak tersedia",
      "Reply": "Balas",
      "ReplyAll": "Balas Semua",
      "Forward": "Teruskan",
      "From": "Dari",
      "Caption": "Keterangan",
      "Expression": "Ekspresi",
      "Tab": "Tab",
      "Tabs": "Tab",
      "EnterExpressionName": "Masukkan nama ekspresi",
      "EnterExpressionToFilterWith": "Masukkan ekspresi untuk memfilter hasil dengan",
      "SelectTab": "Pilih Tab",
      "SelectAll": "Pilih Semua",
      "PageUrl": "URL halaman pencarian",
      "ErrorSavingToDevice": "Kesalahan sewaktu menyimpan informasi ke perangkat Anda",
      "ErrorReadingFromDevice": "Kesalahan sewaktu membaca informasi dari perangkat Anda",
      "AppIntro": "Bicaralah dengan spesialis produk yang dapat menjawab pertanyaan Anda tentang Coveo dan membantu Anda menentukan solusi Coveo mana yang tepat untuk Anda. Atau, coba demo langsung!",
      "TryDemo": "Coba demo",
      "ContactUs": "Hubungi kami",
      "NewToCoveo": "Baru mengenal Coveo?",
      "LetUsHelpGetStarted": "Izinkan kami membantu Anda memulai",
      "LikesThis": "{0} menyukai ini.",
      "CannotConnectSearchPage": "Tidak dapat menyambung ke halaman pencarian Anda",
      "AreYouSureDeleteFilter": "Anda yakin ingin menghapus filter {0} dengan ekspresi {1}",
      "OnlineHelp": "Bantuan Online",
      "Done": "Selesai",
      "SaveFacetState": "Simpan status faset ini",
      "ClearFacetState": "Bersihkan status faset",
      "DisplayingTheOnlyMessage": "Menampilkan pesan pada percakapan ini saja",
      "NoNetworkConnection": "Tidak ada koneksi jaringan",
      "UnknownConnection": "Koneksi tidak dikenal",
      "EthernetConnection": "Koneksi Ethernet",
      "WiFi": "Koneksi WiFi",
      "CELL": "Koneksi Seluler",
      "CELL_2G": "Koneksi Seluler 2G",
      "CELL_3G": "Koneksi Seluler 3G",
      "CELL_4G": "Koneksi Seluler 4G",
      "Relevance": "Relevansi",
      "Date": "Tanggal",
      "Amount": "Jumlah",
      "QueryExceptionNoException": "Tanpa pengecualian",
      "QueryExceptionInvalidSyntax": "Sintaksis tidak valid",
      "QueryExceptionInvalidCustomField": "Bidang khusus tidak valid",
      "QueryExceptionInvalidDate": "Tanggal tidak valid",
      "QueryExceptionInvalidExactPhrase": "Frasa pasti tidak valid",
      "QueryExceptionInvalidDateOp": "Operator tanggal tidak valid",
      "QueryExceptionInvalidNear": "Operator NEAR tidak valid",
      "QueryExceptionInvalidWeightedNear": "NEAR berbobot tidak valid",
      "QueryExceptionInvalidTerm": "Istilah tidak valid",
      "QueryExceptionTooManyTerms": "Istilah terlalu banyak",
      "QueryExceptionWildcardTooGeneral": "Wildcard terlalu umum",
      "QueryExceptionInvalidSortField": "Bidang sortir tidak valid",
      "QueryExceptionInvalidSmallStringOp": "Operator string kecil tidak valid",
      "QueryExceptionRequestedResultsMax": "Hasil maksimum yang diminta",
      "QueryExceptionAggregatedMirrorDead": "Cermin agregat offline",
      "QueryExceptionAggregatedMirrorQueryTimeOut": "Waktu kueri cermin agregat habis",
      "QueryExceptionAggregatedMirrorInvalidBuildNumber": "Nomor rangkaian cermin agregat tidak valid",
      "QueryExceptionAggregatedMirrorCannotConnect": "Cermin agregat tidak dapat menyambung",
      "QueryExceptionNotEnoughLeadingCharsWildcard": "Karakter di depan wildcard tidak cukup",
      "QueryExceptionSecurityInverterNotFound": "Inverter keamanan tidak ditemukan",
      "QueryExceptionSecurityInverterAccessDenied": "Akses inverter keamanan ditolak",
      "QueryExceptionAggregatedMirrorCannotImpersonate": "Cermin agregat tidak dapat menyamar",
      "QueryExceptionUnexpected": "Tak terduga",
      "QueryExceptionAccessDenied": "Akses ditolak",
      "QueryExceptionSuperUserTokenInvalid": "Token pengguna super tidak valid",
      "QueryExceptionSuperUserTokenExpired": "Token pengguna super kedaluwarsa",
      "QueryExceptionLicenseQueriesExpired": "Lisensi kueri kedaluwarsa",
      "QueryExceptionLicenseSuperUserTokenNotSupported": "Lisensi token pengguna super tidak didukung",
      "QueryExceptionInvalidSession": "Sesi tidak valid",
      "QueryExceptionInvalidDocument": "Dokumen tidak valid",
      "QueryExceptionSearchDisabled": "Pencarian dinonaktifkan",
      "FileType": "Jenis file",
      "ShowAttachment": "Tunjukkan lampiran",
      "OnFeed": "pada feed {0}.",
      "Author": "Penyusun",
      "NoTitle": "Tanpa judul",
      "CurrentSelections": "Pilihan saat ini",
      "AllContent": "Semua isi",
      "CancelLastAction": "Batalkan tindakan terakhir",
      "SearchTips": "Kiat pencarian",
      "CheckSpelling": "Periksa ejaan kata kunci Anda.",
      "TryUsingFewerKeywords": "Coba gunakan kata kunci yang lebih sedikit, berbeda, atau lebih umum.",
      "SelectFewerFilters": "Pilih lebih sedikit filter untuk memperluas pencarian Anda.",
  }
  var locales = String["locales"] || (String["locales"] = {});
  locales["id"] = _.extend({}, locales["id"], dict);
  String["toLocaleString"].call(this, { "id": dict });
  String["locale"] = "id";
  String["defaultLocale"] = "en";
})();
/*
 * Globalize Culture id
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

Globalize.addCultureInfo( "id", "default", {
	name: "id",
	englishName: "Indonesian",
	nativeName: "Bahasa Indonesia",
	language: "id",
	numberFormat: {
		",": ".",
		".": ",",
		percent: {
			",": ".",
			".": ","
		},
		currency: {
			decimals: 0,
			",": ".",
			".": ",",
			symbol: "Rp"
		}
	},
	calendars: {
		standard: {
			firstDay: 1,
			days: {
				names: ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],
				namesAbbr: ["Minggu","Sen","Sel","Rabu","Kamis","Jumat","Sabtu"],
				namesShort: ["M","S","S","R","K","J","S"]
			},
			months: {
				names: ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","Nopember","Desember",""],
				namesAbbr: ["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agust","Sep","Okt","Nop","Des",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "dd/MM/yyyy",
				D: "dd MMMM yyyy",
				t: "H:mm",
				T: "H:mm:ss",
				f: "dd MMMM yyyy H:mm",
				F: "dd MMMM yyyy H:mm:ss",
				M: "dd MMMM",
				Y: "MMMM yyyy"
			}
		}
	}
});

}( this ));
