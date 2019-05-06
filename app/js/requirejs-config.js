require.config({
  paths: {
    jquery: "cdf/lib/jquery",
    metisMenu: "bower_components/metisMenu/dist/metisMenu.min",
    sbAdmin2: "dist/js/sb-admin-2.js"
  },
  shim: {
    jquery: {
      exports: "$"
    },
    metisMenu: {
      deps: ["jquery"],
      exports: "metisMenu"
    },
    sbAdmin2: {
      deps: ["jquery"],
      exports: "sbAdmin2"
    }
  } // end Shim Configuration
});
