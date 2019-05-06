const navbarRequireJS = function (htmlContainer, parameters) {
  require(["cdf/lib/jquery", "text!/pentaho/api/repos/dashboard/app/navbar.html"], function ($, navbar) {
    $(htmlContainer).append(navbar);
  });
  sidebarRequireJS("#sidebar-content", {});
};

const sidebarRequireJS = function (htmlContainer, parameters) {
  require(["cdf/lib/jquery", "text!/pentaho/api/repos/dashboard/app/sidebar.html"], function ($, sidebar) {
    $(htmlContainer).append(sidebar);

    $(window).bind("load resize", function () {
      var topOffset = 50;
      var width =
        this.window.innerWidth > 0 ? this.window.innerWidth : this.screen.width;
      if (width < 768) {
        $("div.navbar-collapse").addClass("collapse");
        topOffset = 100; // 2-row-menu
      } else {
        $("div.navbar-collapse").removeClass("collapse");
      }

      var height =
        (this.window.innerHeight > 0
          ? this.window.innerHeight
          : this.screen.height) - 1;
      height = height - topOffset;
      if (height < 1) height = 1;
      if (height > topOffset) {
        $("#page-wrapper").css("min-height", height + "px");
      }
    });
  });
};

const homeDash = function (htmlContainer, parameters) {
  require([
    "cdf/lib/jquery",
    "dash!/system/dashboard/dashboards/home.wcdf"
  ], function ($, Dash) {
    var dash = new Dash(htmlContainer);

    if (parameters) dash.parameters = parameters;
    dash.render();

    $("#dashboard-title").html("Indicador exemplo");
  });
};

const olapDash = function (htmlContainer, parameters) {
  require([
    "cdf/lib/jquery",
    "dash!/system/dashboard/dashboards/olap.wcdf"
  ], function ($, Dash) {
    var dash = new Dash(htmlContainer);
    if (parameters) dash.parameters = parameters;
    dash.render();
    $("#dashboard-title").html("OLAP");
  });
};


/*
  end functions require dashboards
*/

/*
  initRenderDashboard
*/
//setupApp();
//sidebarMenu();

navbarRequireJS("#navbar-content", {});
homeDash("dashboard-body-content", {});
