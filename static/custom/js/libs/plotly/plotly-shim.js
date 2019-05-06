/*
ploty-shim.js file
*/
require.config({
  paths: {
    jquery: "cdf/lib/jquery",
    plotly: "https://cdn.plot.ly/plotly-1.42.0.min"
  },
  shim: {
    plotly: {
      deps: ["jquery"],
      exports: "plotly"
    }
  } // end Shim Configuration
});

define(["plotly"], function (plotly) {
  return plotly;
});
