(function() {
  var dict = {
      "Unknown": "Неизвестно",
      "And": "И",
      "Authenticating": "Аутентификация {0}...",
      "Clear": "Очистить {0}",
      "CompleteQuery": "Полная строка запроса",
      "Exclude": "Исключить {0}",
      "EnterTag": "Добавить тег",
      "Next": "Следующая",
      "Last": "Последняя",
      "Link": "Ссылка",
      "Or": "ИЛИ",
      "Previous": "Предыдущая",
      "QueryDidntMatchAnyDocuments": "Ни один из документов не отвечает вашему запросу.",
      "QueryException": "В вашем запросе содержится ошибка: {0}.",
      "Me": "Я",
      "Remove": "Удалить",
      "Search": "Искать",
      "SearchFor": "Найти {0}",
      "ShareQuery": "Поделиться запросом",
      "Preferences": "Личные параметры настройки",
      "LinkOpeningSettings": "Параметры настройки открытия ссылок",
      "Reauthenticate": "Повторная аутентификация {0}",
      "ResultsFilteringExpression": "Результаты фильтрации поисковых фраз",
      "FiltersInYourPreferences": "Фильтры в личных параметрах настройки",
      "Create": "Создать",
      "SearchIn": "Найти в {0}",
      "Seconds": "через {0} <sn>секунду</sn><pl>секунд</pl>",
      "ShowingResultsOf": "Результат<pl>ы</pl> {0}<pl>-{1}</pl> из {2}",
      "SwitchTo": "Переключиться на {0}",
      "Unexclude": "Убрать исключение {0}",
      "ClearAllFilters": "Сброс всех фильтров",
      "SkipLogin": "Пропустить авторизацию",
      "LoginInProgress": "Выполняется авторизация, пожалуйста, подождите ...",
      "Login": "Авторизоваться",
      "GetStarted": "Начать",
      "More": "Больше",
      "Less": "Меньше",
      "Settings": "Параметры настройки",
      "Score": "Показатель",
      "ScoreDescription": "Показатель рассчитывается исходя из количества результатов, а также из положения в перечне результатов.",
      "Occurrences": "Совпадения",
      "OccurrencesDescription": "Сортировать по количеству совпадений - в порядке убывания.",
      "Label": "Ярлык",
      "Of": "из",
      "LabelDescription": "Сортировать в алфавитном порядке по значениям поля.",
      "Value": "Значение",
      "ValueDescription": "Сортировать по значениям первого расчетного поля",
      "AlphaAscending": "Возрастающее значение",
      "AlphaDescending": "Убывающее значение",
      "ChiSquare": "Хи-квадрат",
      "Nosort": "Не отсортировано",
      "RelativeFrequency": "Относительная частота",
      "RelativeFrequencyDescription": "Сортировать по значению относительной частоты. Нечастотные значения отобразятся сверху",
      "DateDistribution": "Дата распределения",
      "Custom": "Пользовательский",
      "CustomDescription": "Сортировать в специальном порядке",
      "ComputedField": "Расчетное поле",
      "Ascending": "По возрастанию",
      "Descending": "По убыванию",
      "noResultFor": "Нет результатов по {0}",
      "autoCorrectedQueryTo": "Запрос автоматически исправлен на {0}",
      "didYouMean": "Вы имели ввиду: {0}",
      "SuggestedResults": "Предлагаемые результаты",
      "SuggestedQueries": "Предлагаемые запросы",
      "MostRelevantItems": "Наиболее релевантные пункты:",
      "AllItems": "Все пункты:",
      "ShowLess": "Показывать меньше",
      "ShowMore": "Показывать больше",
      "HideFacet": "Скрыть ячейку",
      "ShowFacet": "Показать ячейку",
      "AndOthers": "и {0} другой (другие)",
      "Others": "{0} другой (другие)",
      "MostRelevantPosts": "Наиболее релевантные сообщения:",
      "CompleteThread": "Вся ветка обсуждения:",
      "ShowCompleteThread": "Показать всю ветку обсуждения",
      "ShowOnlyTopMatchingPosts": "Показать только верхние подходящие сообщения",
      "MostRelevantReplies": "Наиболее релевантные ответы:",
      "AllConversation": "Все диалоги:",
      "ShowAllConversation": "Показать весь диалог",
      "ShowAllReplies": "Показать все ответы",
      "ShowOnlyMostRelevantReplies": "Показывать только наиболее релевантные ответы",
      "Close": "Закрыть",
      "Open": "Открыть",
      "OpenInOutlookWhenPossible": "Открывать в Outlook (когда возможно)",
      "AlwaysOpenInNewWindow": "Всегда открывать результаты в новом окне",
      "QuickView": "Быстрый просмотр",
      "ErrorReport": "Сообщение об ошибке",
      "OopsError": "Вот незадача! Что-то случилось с сервером.",
      "ProblemPersists": "При постоянном возникновении этой проблемы обратитесь к администратору.",
      "GoBack": "Назад",
      "Reset": "Перезагрузка",
      "Retry": "Повторить",
      "MoreInfo": "Дополнительная информация",
      "Username": "Имя пользователя",
      "Password": "Пароль",
      "PostedBy": "Опубликовано",
      "CannotConnect": "Невозможно подключиться к адресу сервера",
      "BadUserPass": "Пароль не соответствует имени пользователя",
      "PleaseEnterYourCredentials": "Введите свои учетные данные для {0}.",
      "PleaseEnterYourSearchPage": "Пожалуйста, введите URL-адрес искомой страницы",
      "Collapse": "Свернуть",
      "Collapsable": "Свертываемый",
      "Expand": "Расширить",
      "Today": "Сегодня",
      "Yesterday": "Вчера",
      "Tomorrow": "Завтра",
      "Duration": "Продолжительность: {0}",
      "IndexDuration": "Продолжительность индекса: {0}",
      "ProxyDuration": "Продолжительность прокси: {0}",
      "ClientDuration": "Продолжительность клиента: {0}",
      "Unavailable": "Недоступно",
      "Reply": "Ответить",
      "ReplyAll": "Ответить всем",
      "Forward": "Переслать",
      "From": "От",
      "Caption": "Заголовок",
      "Expression": "Поисковая фраза",
      "Tab": "Вкладка",
      "Tabs": "Вкладки",
      "EnterExpressionName": "Введите фразу",
      "EnterExpressionToFilterWith": "Введите фразу для фильтрации результатов",
      "SelectTab": "Выбрать вкладку",
      "SelectAll": "Выбрать все",
      "PageUrl": "Найти URL-адрес страницы",
      "ErrorSavingToDevice": "Ошибка при сохранении информации на ваше устройство",
      "ErrorReadingFromDevice": "Ошибка при чтении информации с вашего устройства",
      "AppIntro": "Пообщайтесь со специалистом по продукции, который сможет ответить на ваши вопросы о Conveo и поможет решить, какое решение Coveo вам подойдет. Или попробуйте демоверсию с автоматическим обновлением!",
      "TryDemo": "Попробовать демоверсию",
      "ContactUs": "Связаться с нами",
      "NewToCoveo": "Не знакомы с Coveo?",
      "LetUsHelpGetStarted": "Позвольте помочь вам приступить к работе",
      "LikesThis": "{0} нравится<sn> нравится</sn> это.",
      "CannotConnectSearchPage": "Не удалось подключиться к вашей странице поиска",
      "AreYouSureDeleteFilter": "Вы действительно желаете удалить фильтр {0} с поисковой фразой {1}",
      "OnlineHelp": "Онлайн справка",
      "Done": "Выполнено",
      "SaveFacetState": "Сохранить формат данной ячейки",
      "ClearFacetState": "Очистить формат ячейки",
      "DisplayingTheOnlyMessage": "Отображение единственного сообщения в данном диалоге",
      "NoNetworkConnection": "Нет сетевых подключений",
      "UnknownConnection": "Неизвестное подключение",
      "EthernetConnection": "Подключение через Ethernet",
      "WiFi": "Подключение через WiFi",
      "CELL": "Мобильное подключение",
      "CELL_2G": "Мобильное подключение 2G",
      "CELL_3G": "Мобильное подключение 3G",
      "CELL_4G": "Мобильное подключение 4G",
      "Relevance": "Релевантность",
      "Date": "Дата",
      "Amount": "Количество",
      "QueryExceptionNoException": "Нет исключений",
      "QueryExceptionInvalidSyntax": "Недопустимый синтаксис",
      "QueryExceptionInvalidCustomField": "Недопустимое расчетное поле",
      "QueryExceptionInvalidDate": "Недопустимая дата",
      "QueryExceptionInvalidExactPhrase": "Недопустимая точная фраза",
      "QueryExceptionInvalidDateOp": "Недопустимый оператор дат",
      "QueryExceptionInvalidNear": "Недопустимый оператор NEAR",
      "QueryExceptionInvalidWeightedNear": "Недопустимый взвешенный NEAR",
      "QueryExceptionInvalidTerm": "Недопустимое термин",
      "QueryExceptionTooManyTerms": "Слишком много терминов",
      "QueryExceptionWildcardTooGeneral": "Слишком общий специальный символ",
      "QueryExceptionInvalidSortField": "Недопустимое поле сортировки",
      "QueryExceptionInvalidSmallStringOp": "Недопустимый строковый оператор",
      "QueryExceptionRequestedResultsMax": "Максимум запрашиваемых результатов",
      "QueryExceptionAggregatedMirrorDead": "Уделенное зеркало отключено",
      "QueryExceptionAggregatedMirrorQueryTimeOut": "Время ожидания запроса через уделенное зеркало",
      "QueryExceptionAggregatedMirrorInvalidBuildNumber": "Недопустимый текущий номер удаленного зеркала",
      "QueryExceptionAggregatedMirrorCannotConnect": "Интегральное зеркало невозможно подключить",
      "QueryExceptionNotEnoughLeadingCharsWildcard": "Недостаточное количество ведущих символов до специального символа",
      "QueryExceptionSecurityInverterNotFound": "Инвертор безопасности не найден",
      "QueryExceptionSecurityInverterAccessDenied": "В доступе к инвертору безопасности отказано",
      "QueryExceptionAggregatedMirrorCannotImpersonate": "Уделенное зеркало не может отправлять запросы от имени пользователя",
      "QueryExceptionUnexpected": "Непредвиденный",
      "QueryExceptionAccessDenied": "В доступе отказано",
      "QueryExceptionSuperUserTokenInvalid": "Право доступа привилегированного пользователя недействительно",
      "QueryExceptionSuperUserTokenExpired": "Право доступа привилегированного пользователя истекло",
      "QueryExceptionLicenseQueriesExpired": "Лицензия на осуществление запросов истекла",
      "QueryExceptionLicenseSuperUserTokenNotSupported": "Лицензия доступа привилегированного пользователя не поддерживается",
      "QueryExceptionInvalidSession": "Сессия недействительна",
      "QueryExceptionInvalidDocument": "Недействительный документ",
      "QueryExceptionSearchDisabled": "Поиск отключен",
      "FileType": "Тип файла",
      "ShowAttachment": "Показать приложение",
      "OnFeed": "на {0} исходный материал.",
      "Author": "Автор",
      "NoTitle": "Без названия",
      "CurrentSelections": "Текущие результаты выбора",
      "AllContent": "Все содержание",
      "CancelLastAction": "Отменить последнее действие",
      "SearchTips": "Найти подсказку",
      "CheckSpelling": "Проверьте правописание ключевых слов",
      "TryUsingFewerKeywords": "Попытайтесь использовать меньшее количество, другие и более общие ключевые слова.",
      "SelectFewerFilters": "Сократите количество фильтров для расширения поиска.",
  }
  var locales = String["locales"] || (String["locales"] = {});
  locales["ru"] = _.extend({}, locales["ru"], dict);
  String["toLocaleString"].call(this, { "ru": dict });
  String["locale"] = "ru";
  String["defaultLocale"] = "en";
})();
/*
 * Globalize Culture ru
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

Globalize.addCultureInfo( "ru", "default", {
	name: "ru",
	englishName: "Russian",
	nativeName: "русский",
	language: "ru",
	numberFormat: {
		",": " ",
		".": ",",
		negativeInfinity: "-бесконечность",
		positiveInfinity: "бесконечность",
		percent: {
			pattern: ["-n%","n%"],
			",": " ",
			".": ","
		},
		currency: {
			pattern: ["-n$","n$"],
			",": " ",
			".": ",",
			symbol: "р."
		}
	},
	calendars: {
		standard: {
			"/": ".",
			firstDay: 1,
			days: {
				names: ["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],
				namesAbbr: ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],
				namesShort: ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"]
			},
			months: {
				names: ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь",""],
				namesAbbr: ["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек",""]
			},
			monthsGenitive: {
				names: ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря",""],
				namesAbbr: ["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "dd.MM.yyyy",
				D: "d MMMM yyyy 'г.'",
				t: "H:mm",
				T: "H:mm:ss",
				f: "d MMMM yyyy 'г.' H:mm",
				F: "d MMMM yyyy 'г.' H:mm:ss",
				Y: "MMMM yyyy"
			}
		}
	}
});

}( this ));
