(function() {
  var dict = {
      "Unknown": "Desconocido",
      "And": "Y",
      "Authenticating": "Autenticando {0}...",
      "Clear": "Borrar {0}",
      "CompleteQuery": "Consulta completa",
      "Exclude": "Excluir {0}",
      "EnterTag": "Añadir etiqueta",
      "Next": "Siguiente",
      "Last": "Última",
      "Link": "Enlace",
      "Or": "O",
      "Previous": "Anterior",
      "QueryDidntMatchAnyDocuments": "Su consulta no coincide con ningún documento.",
      "QueryException": "Su consulta tiene un error: {0}.",
      "Me": "Yo",
      "Remove": "Eliminar",
      "Search": "Buscar",
      "SearchFor": "Buscar {0}",
      "ShareQuery": "Compartir consulta",
      "Preferences": "Preferencias",
      "LinkOpeningSettings": "Configuración de apertura de enlace",
      "Reauthenticate": "Volver a autenticar {0}",
      "ResultsFilteringExpression": "Expresiones de filtrado de resultados",
      "FiltersInYourPreferences": "Filtros en sus preferencias",
      "Create": "Crear",
      "SearchIn": "Buscar en {0}",
      "Seconds": "en {0} segundo<pl>s</pl>",
      "ShowingResultsOf": "Resultado<pl>s</pl> {0}<pl>-{1}</pl> de {2}",
      "SwitchTo": "Cambiar a {0}",
      "Unexclude": "No excluir {0}",
      "ClearAllFilters": "Borrar todos los filtros",
      "SkipLogin": "Omitir inicio de sesión",
      "LoginInProgress": "Iniciando sesión. Por favor, espere...",
      "Login": "Iniciar sesión",
      "GetStarted": "Empezar",
      "More": "Más",
      "Less": "Menos",
      "Settings": "Configuración",
      "Score": "Relevancia",
      "ScoreDescription": "La relevancia se calcula a partir del número de apariciones, así como de la posición en el conjunto de resultados.",
      "Occurrences": "Apariciones",
      "OccurrencesDescription": "Ordenar por número de apariciones, con los valores que tienen un número superior primero.",
      "Label": "Etiqueta",
      "Of": "de",
      "LabelDescription": "Ordenar alfabéticamente en los valores de campo.",
      "Value": "Valor",
      "ValueDescription": "Ordenar por los valores del primer campo computado.",
      "AlphaAscending": "Valor ascendente",
      "AlphaDescending": "Valor descendente",
      "ChiSquare": "Chi cuadrado",
      "Nosort": "No ordenar",
      "RelativeFrequency": "Frecuencia relativa",
      "RelativeFrequencyDescription": "Ordenar según la frecuencia relativa de los valores. Los valores menos comunes aparecerán más arriba.",
      "DateDistribution": "Distribución de fecha",
      "Custom": "Personalizado",
      "CustomDescription": "Ordenar según un pedido personalizado.",
      "ComputedField": "Campo computado",
      "Ascending": "Ascendente",
      "Descending": "Descendente",
      "noResultFor": "No hay resultados para {0}",
      "autoCorrectedQueryTo": "La consulta se ha corregido automáticamente a {0}",
      "didYouMean": "¿Querías decir...? {0}",
      "SuggestedResults": "Resultados sugeridos",
      "SuggestedQueries": "Consultas sugeridas",
      "MostRelevantItems": "Elementos más relevantes",
      "AllItems": "Todos los elementos:",
      "ShowLess": "Mostrar menos",
      "ShowMore": "Mostrar más",
      "HideFacet": "Ocultar faceta",
      "ShowFacet": "Mostrar faceta",
      "AndOthers": "y {0} otro<pl>s</pl>",
      "Others": "{0} otro<pl>s</pl>",
      "MostRelevantPosts": "Publicaciones más relevantes:",
      "CompleteThread": "Hilo completo:",
      "ShowCompleteThread": "Mostrar hilo completo",
      "ShowOnlyTopMatchingPosts": "Mostrar solo publicaciones de mayor coincidencia",
      "MostRelevantReplies": "Respuestas más relevantes:",
      "AllConversation": "Toda la conversación:",
      "ShowAllConversation": "Mostrar toda la conversación",
      "ShowAllReplies": "Mostrar todas las respuestas",
      "ShowOnlyMostRelevantReplies": "Mostrar solo las respuestas más relevantes",
      "Close": "Cerrar",
      "Open": "Abrir",
      "OpenInOutlookWhenPossible": "Abrir en Outlook (si es posible)",
      "AlwaysOpenInNewWindow": "Abrir resultados siempre en ventana nueva",
      "QuickView": "Vista rápida",
      "ErrorReport": "Informe de errores",
      "OopsError": "¡Vaya! Algo ha fallado en el servidor.",
      "ProblemPersists": "Si el problema persiste, póngase en contacto con el administrador.",
      "GoBack": "Ir atrás",
      "Reset": "Restablecer",
      "Retry": "Reintentar",
      "MoreInfo": "Más información",
      "Username": "Nombre de usuario",
      "Password": "Contraseña",
      "PostedBy": "Publicado por",
      "CannotConnect": "No se puede establecer conexión con la dirección del servidor.",
      "BadUserPass": "La contraseña no coincide con el nombre de usuario.",
      "PleaseEnterYourCredentials": "Introduzca sus credenciales para {0}.",
      "PleaseEnterYourSearchPage": "Introduzca la URL de su página de búsqueda",
      "Collapse": "Contraer",
      "Collapsable": "Contraíble",
      "Expand": "Expandir",
      "Today": "Hoy",
      "Yesterday": "Ayer",
      "Tomorrow": "Mañana",
      "Duration": "Duración: {0}",
      "IndexDuration": "Duración de índice: {0}",
      "ProxyDuration": "Duración de proxy: {0}",
      "ClientDuration": "Duración de cliente: {0}",
      "Unavailable": "No disponible",
      "Reply": "Responder",
      "ReplyAll": "Responder a todos",
      "Forward": "Reenviar",
      "From": "De",
      "Caption": "Leyenda",
      "Expression": "Expresión",
      "Tab": "Ficha",
      "Tabs": "Fichas",
      "EnterExpressionName": "Introducir nombre de expresión",
      "EnterExpressionToFilterWith": "Introducir expresión con la que filtrar resultados",
      "SelectTab": "Seleccionar ficha",
      "SelectAll": "Seleccionar todo",
      "PageUrl": "URL de página de búsqueda",
      "ErrorSavingToDevice": "Error al intentar guardar la información en su dispositivo",
      "ErrorReadingFromDevice": "Error al intentar guardar la información desde su dispositivo",
      "AppIntro": "Hable con un especialista en el producto que pueda responder a sus preguntas sobre Coveo y le ayude a decidir qué solución Coveo se adapta a sus necesidades. O pruebe una versión de prueba.",
      "TryDemo": "Probar la versión de prueba",
      "ContactUs": "Contacte con nosotros",
      "NewToCoveo": "¿Es la primera vez que usa Coveo?",
      "LetUsHelpGetStarted": "Le ayudaremos a empezar a utilizarlo",
      "LikesThis": "A {0} persona<pl>s</pl> le<pl>s</pl> gusta esto.",
      "CannotConnectSearchPage": "No se puede establecer conexión con su página de búsqueda",
      "AreYouSureDeleteFilter": "¿Seguro que desea eliminar el filtro {0} con la expresión {1}?",
      "OnlineHelp": "Ayuda en línea",
      "Done": "Finalizado",
      "SaveFacetState": "Guardar este estado de faceta",
      "ClearFacetState": "Borrar el estado de faceta",
      "DisplayingTheOnlyMessage": "Mostrando el único mensaje de esta conversación",
      "NoNetworkConnection": "Sin conexión de red",
      "UnknownConnection": "Conexión desconocida",
      "EthernetConnection": "Conexión Ethernet",
      "WiFi": "Conexión WiFi",
      "CELL": "Conexión por móvil",
      "CELL_2G": "Conexión por móvil 2G",
      "CELL_3G": "Conexión por móvil 3G",
      "CELL_4G": "Conexión por móvil 4G",
      "Relevance": "Relevancia",
      "Date": "Fecha",
      "Amount": "Cantidad",
      "QueryExceptionNoException": "Sin excepciones",
      "QueryExceptionInvalidSyntax": "Sintaxis no válida",
      "QueryExceptionInvalidCustomField": "Campo personalizado no válido",
      "QueryExceptionInvalidDate": "Fecha no válida",
      "QueryExceptionInvalidExactPhrase": "Frase exacta no válida",
      "QueryExceptionInvalidDateOp": "Operador de fecha no válido",
      "QueryExceptionInvalidNear": "Operador NEAR no válido",
      "QueryExceptionInvalidWeightedNear": "NEAR ponderado no válido",
      "QueryExceptionInvalidTerm": "Término no válido",
      "QueryExceptionTooManyTerms": "Demasiados términos",
      "QueryExceptionWildcardTooGeneral": "Carácter comodín demasiado general",
      "QueryExceptionInvalidSortField": "Campo de ordenación no válido",
      "QueryExceptionInvalidSmallStringOp": "Operador de cadenas pequeñas no válido",
      "QueryExceptionRequestedResultsMax": "Máximo de resultados solicitados",
      "QueryExceptionAggregatedMirrorDead": "El reflejo agregado no está conectado",
      "QueryExceptionAggregatedMirrorQueryTimeOut": "Tiempo de espera agotado para consulta de reflejo agregado",
      "QueryExceptionAggregatedMirrorInvalidBuildNumber": "Número de versión no válido para reflejo agregado",
      "QueryExceptionAggregatedMirrorCannotConnect": "El reflejo agregado no puede establecer conexión",
      "QueryExceptionNotEnoughLeadingCharsWildcard": "No hay suficientes comodines de carácter inicial",
      "QueryExceptionSecurityInverterNotFound": "No se ha encontrado el inversor de seguridad",
      "QueryExceptionSecurityInverterAccessDenied": "Acceso de inversor de seguridad denegado",
      "QueryExceptionAggregatedMirrorCannotImpersonate": "El reflejo agregado no puede suplantar",
      "QueryExceptionUnexpected": "Inesperado",
      "QueryExceptionAccessDenied": "Acceso denegado",
      "QueryExceptionSuperUserTokenInvalid": "Token de superusuario no válido",
      "QueryExceptionSuperUserTokenExpired": "El token de superusuario ha vencido",
      "QueryExceptionLicenseQueriesExpired": "La licencia de consultas ha vencido",
      "QueryExceptionLicenseSuperUserTokenNotSupported": "El token de superusuario de licencia no es compatible",
      "QueryExceptionInvalidSession": "Sesión no válida",
      "QueryExceptionInvalidDocument": "Documento no válido",
      "QueryExceptionSearchDisabled": "Búsqueda deshabilitada",
      "FileType": "Tipo de archivo",
      "ShowAttachment": "Mostrar adjunto",
      "OnFeed": "en el feed de {0}.",
      "Author": "Autor",
      "NoTitle": "Sin título",
      "CurrentSelections": "Selecciones actuales",
      "AllContent": "Todo el contenido",
      "CancelLastAction": "Cancelar última acción",
      "SearchTips": "Sugerencias de búsqueda",
      "CheckSpelling": "Compruebe la ortografía de las palabras clave.",
      "TryUsingFewerKeywords": "Pruebe a utilizar menos palabras, o palabras distintas o más generales.",
      "SelectFewerFilters": "Seleccione menos filtros para ampliar su búsqueda.",
  }
  var locales = String["locales"] || (String["locales"] = {});
  locales["es-es"] = _.extend({}, locales["es-es"], dict);
  String["toLocaleString"].call(this, { "es-es": dict });
  String["locale"] = "es-es";
  String["defaultLocale"] = "en";
})();
/*
 * Globalize Culture es-ES
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

Globalize.addCultureInfo( "es-ES", "default", {
	name: "es-ES",
	englishName: "Spanish (Spain, International Sort)",
	nativeName: "Español (España, alfabetización internacional)",
	language: "es",
	numberFormat: {
		",": ".",
		".": ",",
		"NaN": "NeuN",
		negativeInfinity: "-Infinito",
		positiveInfinity: "Infinito",
		percent: {
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
				names: ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],
				namesAbbr: ["dom","lun","mar","mié","jue","vie","sáb"],
				namesShort: ["do","lu","ma","mi","ju","vi","sá"]
			},
			months: {
				names: ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre",""],
				namesAbbr: ["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic",""]
			},
			AM: null,
			PM: null,
			eras: [{"name":"d.C.","start":null,"offset":0}],
			patterns: {
				d: "dd/MM/yyyy",
				D: "dddd, dd' de 'MMMM' de 'yyyy",
				t: "H:mm",
				T: "H:mm:ss",
				f: "dddd, dd' de 'MMMM' de 'yyyy H:mm",
				F: "dddd, dd' de 'MMMM' de 'yyyy H:mm:ss",
				M: "dd MMMM",
				Y: "MMMM' de 'yyyy"
			}
		}
	}
});

}( this ));
