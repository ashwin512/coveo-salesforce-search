(function() {
  var dict = {
      "Unknown": "Desconhecido",
      "And": "E",
      "Authenticating": "Autenticando {0} ...",
      "Clear": "Desmarcar {0}",
      "CompleteQuery": "Consulta completa",
      "Exclude": "Excluir {0}",
      "EnterTag": "Adicionar tag",
      "Next": "Próximo",
      "Last": "Último",
      "Link": "Link",
      "Or": "OU",
      "Previous": "Anterior",
      "QueryDidntMatchAnyDocuments": "Sua consulta não encontrou nenhum documento correspondente.",
      "QueryException": "Sua consulta tem um erro: {0}.",
      "Me": "Eu",
      "Remove": "Remover",
      "Search": "Pesquisar",
      "SearchFor": "Pesquisar por {0}",
      "ShareQuery": "Compartilhar consulta",
      "Preferences": "Preferências",
      "LinkOpeningSettings": "Configurações de abertura do link",
      "Reauthenticate": "Reautenticar {0}",
      "ResultsFilteringExpression": "Expressões de filtragem de resultados",
      "FiltersInYourPreferences": "Filtros em suas preferências",
      "Create": "Criar",
      "SearchIn": "Pesquisar em {0}",
      "Seconds": "em {0} segundo<pl>s</pl>",
      "ShowingResultsOf": "Resultado<pl>s</pl> {0}<pl>-{1}</pl> de {2}",
      "SwitchTo": "Mudar para {0}",
      "Unexclude": "Desfazer exclusão {0}",
      "ClearAllFilters": "Desmarcar todos os filtros",
      "SkipLogin": "Ignorar login",
      "LoginInProgress": "Login em andamento, aguarde ...",
      "Login": "Login",
      "GetStarted": "Introdução",
      "More": "Mais",
      "Less": "Menos",
      "Settings": "Configurações",
      "Score": "Pontuação",
      "ScoreDescription": "A pontuação é calculada a partir do número de ocorrências, bem como a partir da posição no conjunto de resultados.",
      "Occurrences": "Ocorrências",
      "OccurrencesDescription": "Classifica pelo número de ocorrências, com valores que têm o maior número aparecendo em primeiro lugar.",
      "Label": "Rótulo",
      "Of": "de",
      "LabelDescription": "Classifica os valores do campo em ordem alfabética.",
      "Value": "Valor",
      "ValueDescription": "Classifica os valores do primeiro campo calculado",
      "AlphaAscending": "Valor crescente",
      "AlphaDescending": "Valor decrescente",
      "ChiSquare": "Qui-quadrado",
      "Nosort": "Sem classificação",
      "RelativeFrequency": "Frequência relativa",
      "RelativeFrequencyDescription": "Classifica com base na frequência relativa dos valores. Valores menos comuns aparecerão mais altos.",
      "DateDistribution": "Distribuição de data",
      "Custom": "Personalizada",
      "CustomDescription": "Classifica com base em uma ordem personalizada",
      "ComputedField": "Campo calculado",
      "Ascending": "Crescente",
      "Descending": "Decrescente",
      "noResultFor": "Nenhum resultado para {0}",
      "autoCorrectedQueryTo": "A consulta foi corrigida automaticamente para {0}",
      "didYouMean": "Você quis dizer: {0}",
      "SuggestedResults": "Resultados sugeridos",
      "SuggestedQueries": "Consultas sugeridas",
      "MostRelevantItems": "Itens mais relevantes:",
      "AllItems": "Todos os itens:",
      "ShowLess": "Mostrar menos",
      "ShowMore": "Mostrar mais",
      "HideFacet": "Ocultar faceta",
      "ShowFacet": "Mostrar faceta",
      "AndOthers": "e {0} outro<pl>s</pl>",
      "Others": "{0} outro<pl>s</pl>",
      "MostRelevantPosts": "Postagens mais relevantes:",
      "CompleteThread": "Tópico completo:",
      "ShowCompleteThread": "Mostrar o tópico completo",
      "ShowOnlyTopMatchingPosts": "Mostrar somente as principais postagens correspondentes",
      "MostRelevantReplies": "Respostas mais relevantes:",
      "AllConversation": "Todas as conversas:",
      "ShowAllConversation": "Mostrar todas as conversas",
      "ShowAllReplies": "Mostrar todas as respostas",
      "ShowOnlyMostRelevantReplies": "Mostrar somente as respostas mais relevantes",
      "Close": "Fechar",
      "Open": "Abrir",
      "OpenInOutlookWhenPossible": "Abrir no Outlook (quando possível)",
      "AlwaysOpenInNewWindow": "Sempre abrir os resultados em uma nova janela",
      "QuickView": "Visualização rápida",
      "ErrorReport": "Relatório de erros",
      "OopsError": "Ops! Algo deu errado no servidor.",
      "ProblemPersists": "Se o problema persistir entre em contato com o administrador.",
      "GoBack": "Voltar",
      "Reset": "Reiniciar",
      "Retry": "Tentar novamente",
      "MoreInfo": "Mais Informações",
      "Username": "Nome de usuário",
      "Password": "Senha",
      "PostedBy": "Postado por",
      "CannotConnect": "Não é possível conectar ao endereço do servidor.",
      "BadUserPass": "Nome de usuário e senha não correspondem.",
      "PleaseEnterYourCredentials": "Digite as suas credenciais para {0}.",
      "PleaseEnterYourSearchPage": "Digite a URL da página de pesquisa",
      "Collapse": "Recolher",
      "Collapsable": "Recolhível",
      "Expand": "Expandir",
      "Today": "Hoje",
      "Yesterday": "Ontem",
      "Tomorrow": "Amanhã",
      "Duration": "Duração: {0}",
      "IndexDuration": "Duração do índice: {0}",
      "ProxyDuration": "Duração do proxy: {0}",
      "ClientDuration": "Duração do cliente: {0}",
      "Unavailable": "Indisponível",
      "Reply": "Responder",
      "ReplyAll": "Responder a todos",
      "Forward": "Encaminhar",
      "From": "De",
      "Caption": "Legenda",
      "Expression": "Expressão",
      "Tab": "Guia",
      "Tabs": "Guias",
      "EnterExpressionName": "Digite o nome da expressão",
      "EnterExpressionToFilterWith": "Digite a expressão para filtrar os resultados",
      "SelectTab": "Selecionar guia",
      "SelectAll": "Selecionar tudo",
      "PageUrl": "URL da página de pesquisa",
      "ErrorSavingToDevice": "Erro ao salvar as informações para o seu dispositivo",
      "ErrorReadingFromDevice": "Erro ao ler as informações do seu dispositivo",
      "AppIntro": "Fale com um especialista de produto que possa responder suas dúvidas sobre a Coveo e ajudá-lo a decidir qual solução Coveo é adequada para você. Ou experimente uma demonstração ao vivo!",
      "TryDemo": "Experimente a demonstração",
      "ContactUs": "Entre em contato conosco",
      "NewToCoveo": "Novo para a Coveo?",
      "LetUsHelpGetStarted": "Vamos ajudá-lo a começar",
      "LikesThis": "{0} assim<sn>s</sn>.",
      "CannotConnectSearchPage": "Não é possível conectar à sua página de pesquisa",
      "AreYouSureDeleteFilter": "Você tem certeza que deseja excluir o filtro {0} com a expressão {1}",
      "OnlineHelp": "Ajuda online",
      "Done": "Concluído",
      "SaveFacetState": "Salvar este estado da faceta",
      "ClearFacetState": "Desmarcar estado da faceta",
      "DisplayingTheOnlyMessage": "Exibindo a única mensagem nesta conversa",
      "NoNetworkConnection": "Sem conexão de rede",
      "UnknownConnection": "Conexão desconhecida",
      "EthernetConnection": "Conexão de Ethernet",
      "WiFi": "Conexão de Wi-fi",
      "CELL": "Conexão de celular",
      "CELL_2G": "Conexão de celular 2G",
      "CELL_3G": "Conexão de celular 3G",
      "CELL_4G": "Conexão de celular 4G",
      "Relevance": "Relevância",
      "Date": "Data",
      "Amount": "Quantidade",
      "QueryExceptionNoException": "Sem exceção",
      "QueryExceptionInvalidSyntax": "Sintaxe inválida",
      "QueryExceptionInvalidCustomField": "Campo personalizado inválido",
      "QueryExceptionInvalidDate": "Data inválida",
      "QueryExceptionInvalidExactPhrase": "Frase exata inválida",
      "QueryExceptionInvalidDateOp": "Operador de data inválido",
      "QueryExceptionInvalidNear": "Operador NEAR inválido",
      "QueryExceptionInvalidWeightedNear": "NEAR ponderado inválido",
      "QueryExceptionInvalidTerm": "Termo inválido",
      "QueryExceptionTooManyTerms": "Muitos termos",
      "QueryExceptionWildcardTooGeneral": "Caractere curinga muito geral",
      "QueryExceptionInvalidSortField": "Campo de classificação inválido",
      "QueryExceptionInvalidSmallStringOp": "Operador de pequena cadeia de caracteres inválido",
      "QueryExceptionRequestedResultsMax": "Resultados máximos solicitados",
      "QueryExceptionAggregatedMirrorDead": "O espelho agregado está offline",
      "QueryExceptionAggregatedMirrorQueryTimeOut": "Tempo limite da consulta do espelho agregado",
      "QueryExceptionAggregatedMirrorInvalidBuildNumber": "Número de compilação inválido do espelho agregado",
      "QueryExceptionAggregatedMirrorCannotConnect": "Espelho agregado não pode se conectar",
      "QueryExceptionNotEnoughLeadingCharsWildcard": "Caractere curinga líder insuficiente",
      "QueryExceptionSecurityInverterNotFound": "Inversor de segurança não encontrado",
      "QueryExceptionSecurityInverterAccessDenied": "Acesso ao inversor de segurança negado",
      "QueryExceptionAggregatedMirrorCannotImpersonate": "O espelho agregado não pode representar",
      "QueryExceptionUnexpected": "Inesperado",
      "QueryExceptionAccessDenied": "Acesso negado",
      "QueryExceptionSuperUserTokenInvalid": "Token de superusuário inválido",
      "QueryExceptionSuperUserTokenExpired": "Token de superusuário expirado",
      "QueryExceptionLicenseQueriesExpired": "Consultas de licença expiradas",
      "QueryExceptionLicenseSuperUserTokenNotSupported": "Licença de token de superusuário não suportada",
      "QueryExceptionInvalidSession": "Sessão inválida",
      "QueryExceptionInvalidDocument": "Documento inválido",
      "QueryExceptionSearchDisabled": "Pesquisa desativada",
      "FileType": "Tipo de arquivo",
      "ShowAttachment": "Mostrar anexo",
      "OnFeed": "no feed de {0} .",
      "Author": "Autor",
      "NoTitle": "Sem título",
      "CurrentSelections": "Seleções atuais",
      "AllContent": "Todo o conteúdo",
      "CancelLastAction": "Cancelar a última ação",
      "SearchTips": "Dicas de pesquisa",
      "CheckSpelling": "Verifique a ortografia das suas palavras-chave.",
      "TryUsingFewerKeywords": "Tente usar palavras-chave menores, diferentes ou mais simples.",
      "SelectFewerFilters": "Selecione filtros menores para ampliar a sua pesquisa.",
  }
  var locales = String["locales"] || (String["locales"] = {});
  locales["pt-br"] = _.extend({}, locales["pt-br"], dict);
  String["toLocaleString"].call(this, { "pt-br": dict });
  String["locale"] = "pt-br";
  String["defaultLocale"] = "en";
})();
/*
 * Globalize Culture pt-BR
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

Globalize.addCultureInfo( "pt-BR", "default", {
	name: "pt-BR",
	englishName: "Portuguese (Brazil)",
	nativeName: "Português (Brasil)",
	language: "pt",
	numberFormat: {
		",": ".",
		".": ",",
		"NaN": "NaN (Não é um número)",
		negativeInfinity: "-Infinito",
		positiveInfinity: "+Infinito",
		percent: {
			pattern: ["-n%","n%"],
			",": ".",
			".": ","
		},
		currency: {
			pattern: ["-$ n","$ n"],
			",": ".",
			".": ",",
			symbol: "R$"
		}
	},
	calendars: {
		standard: {
			days: {
				names: ["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"],
				namesAbbr: ["dom","seg","ter","qua","qui","sex","sáb"],
				namesShort: ["D","S","T","Q","Q","S","S"]
			},
			months: {
				names: ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro",""],
				namesAbbr: ["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez",""]
			},
			AM: null,
			PM: null,
			eras: [{"name":"d.C.","start":null,"offset":0}],
			patterns: {
				d: "dd/MM/yyyy",
				D: "dddd, d' de 'MMMM' de 'yyyy",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "dddd, d' de 'MMMM' de 'yyyy HH:mm",
				F: "dddd, d' de 'MMMM' de 'yyyy HH:mm:ss",
				M: "dd' de 'MMMM",
				Y: "MMMM' de 'yyyy"
			}
		}
	}
});

}( this ));
