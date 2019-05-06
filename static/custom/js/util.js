define(["cdf/dashboard/Utils", "cdf/lib/CCC/pvc"], function (utils, pvc) {
  const integerFormat = pvc.data.numberFormat({
    mask: "#,##0",
    style: {
      decimal: ",",
      group: "."
    }
  });

  const integerFormatWithoutZeroForNullValues = pvc.data.numberFormat({
    mask: "#,###",
    style: {
      decimal: ",",
      group: "."
    }
  });

  const percentFormat = pvc.data.numberFormat({
    mask: "##0.00%",
    style: {
      decimal: ",",
      group: "."
    }
  });

  const numberFormat = pvc.data.numberFormat({
    mask: "#,##0.00",
    style: {
      decimal: ",",
      group: "."
    }
  });

  const realFormat = pvc.data.numberFormat({
    mask: "R$ #,##0.00",
    style: {
      decimal: ",",
      group: "."
    }
  });

  const realWithoutSymbolFormat = pvc.data.numberFormat({
    mask: "#,##0.00",
    style: {
      decimal: ",",
      group: "."
    }
  });

  const realFormatWithoutCents = pvc.data.numberFormat({
    mask: "R$ #,##0",
    style: {
      decimal: ",",
      group: "."
    }
  });

  const datatableOLanguage = {
    sProcessing: "Executando...",
    sLengthMenu: "Mostrando _MENU_ registos",
    sZeroRecords: "Não há dados!",
    sInfo: "Mostrando de _START_ a _END_ de _TOTAL_ registos",
    sInfoEmpty: "Mostrando 0 de 0 registros",
    sInfoFiltered: "(_MAX_ registros filtrados do total)",
    sInfoPostFix: "",
    sSearch: "Buscar:",
    sUrl: "",
    oPaginate: {
      sFirst: "Primeiro",
      sPrevious: "Anterior",
      sNext: "Próximo",
      sLast: "Último"
    }
  };

  return {
    integerFormat: integerFormat,
    integerFormatWithoutZeroForNullValues: integerFormatWithoutZeroForNullValues,
    percentFormat: percentFormat,
    numberFormat: numberFormat,
    realFormat: realFormat,
    realWithoutSymbolFormat: realWithoutSymbolFormat,
    realFormatWithoutCents: realFormatWithoutCents,
    datatableOLanguage: datatableOLanguage
  };
});
