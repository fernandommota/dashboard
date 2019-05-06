require.config({
  baseUrl: "/pentaho/api/repos/dashboard/static/custom/js/libs/highcharts/",
  paths: {
    highcharts: "highcharts",
    "highcharts-more": "highcharts-more",
    "highcharts-module-exporting": "modules/exporting",
    "highcharts-module-offline-exporting": "modules/offline-exporting",
    "highcharts-theme-gray": "themes/gray"
  },
  shim: {
    highcharts: {
      exports: "highcharts"
    },
    "highcharts-module-offline-exporting": {
      deps: ["highcharts-module-exporting"]
    }
  } // end Shim Configuration
});

define([
  "highcharts",
  "highcharts-module-exporting",
  "highcharts-module-offline-exporting"
], function (Highcharts, exporting, offlineExporting) {
  // We need to initialize module files and pass in Highcharts
  exporting(Highcharts);
  offlineExporting(Highcharts);
  // Load exporting before accessibility
  //accessibility(Highcharts);

  //translation should be the last update in Highcharts object
  Highcharts.setOptions({
    lang: {
      months: [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
      ],
      shortMonths: [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez"
      ],
      weekdays: [
        "Domingo",
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
        "Sábado"
      ],
      loading: ["Atualizando o gráfico...aguarde"],
      contextButtonTitle: "Exportar gráfico",
      decimalPoint: ",",
      thousandsSep: ".",
      downloadJPEG: "Baixar imagem JPEG",
      downloadPDF: "Baixar arquivo PDF",
      downloadPNG: "Baixar imagem PNG",
      downloadSVG: "Baixar vetor SVG",
      printChart: "Imprimir gráfico",
      rangeSelectorFrom: "De",
      rangeSelectorTo: "Para",
      rangeSelectorZoom: "Zoom",
      resetZoom: "Limpar zoom",
      resetZoomTitle: "Voltar Zoom para nível 1:1",
      noData: "Não há dados!",
      drillUpText: "< Voltar"
    }
  });

  return Highcharts;
});
