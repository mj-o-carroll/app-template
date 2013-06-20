/* automatically generated by JSCoverage - do not edit */
if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if (! _$jscoverage['app.js']) {
  _$jscoverage['app.js'] = [];
  _$jscoverage['app.js'][4] = 0;
  _$jscoverage['app.js'][5] = 0;
  _$jscoverage['app.js'][6] = 0;
  _$jscoverage['app.js'][7] = 0;
  _$jscoverage['app.js'][10] = 0;
  _$jscoverage['app.js'][11] = 0;
  _$jscoverage['app.js'][12] = 0;
  _$jscoverage['app.js'][13] = 0;
  _$jscoverage['app.js'][21] = 0;
  _$jscoverage['app.js'][22] = 0;
  _$jscoverage['app.js'][23] = 0;
  _$jscoverage['app.js'][27] = 0;
  _$jscoverage['app.js'][28] = 0;
  _$jscoverage['app.js'][29] = 0;
  _$jscoverage['app.js'][30] = 0;
  _$jscoverage['app.js'][32] = 0;
}
_$jscoverage['app.js'][4]++;
initConFSM();
_$jscoverage['app.js'][5]++;
$(document).ready((function () {
  _$jscoverage['app.js'][6]++;
  if (g_debug) {
    _$jscoverage['app.js'][7]++;
    log("App Initializing...");
  }
  _$jscoverage['app.js'][10]++;
  httpConnectivity.handle("go.online");
  _$jscoverage['app.js'][11]++;
  uiInit();
  _$jscoverage['app.js'][12]++;
  initOriHandler();
  _$jscoverage['app.js'][13]++;
  overRide();
}));
_$jscoverage['app.js'][21]++;
function uiInit(pagesArray) {
  _$jscoverage['app.js'][22]++;
  if (g_debug) {
    _$jscoverage['app.js'][23]++;
    log("UI Initializing...");
  }
  _$jscoverage['app.js'][27]++;
  $("#start").unbind().bind("click", (function () {
  _$jscoverage['app.js'][28]++;
  LoginCtr.login("user", "pass", (function (success, msg) {
  _$jscoverage['app.js'][29]++;
  if (success) {
    _$jscoverage['app.js'][30]++;
    alert("Login Successful");
  }
  else {
    _$jscoverage['app.js'][32]++;
    alert("Login Failed: " + msg);
  }
}));
}));
}
_$jscoverage['app.js'].source = ["/*"," * App Initialization"," */","initConFSM();","$(document).ready(function(){","\tif(g_debug){","\t\tlog('App Initializing...');","\t}","    //Attempt to go online via Connectivity FSM","    httpConnectivity.handle('go.online');","\tuiInit();","\tinitOriHandler(); // setup orientation handler if needed","\toverRide(); // run iOS or Android overrides","});","","","/*"," * Load, user defined pages to the DOM at app start up"," * @param - pagesArray"," */","function uiInit(pagesArray){","\tif(g_debug){","\t\tlog('UI Initializing...');","\t}","","\t// TODO: move this to Login View file","\t$('#start').unbind().bind('click', function(){","\t\tLoginCtr.login('user', 'pass', function(success, msg){","\t\t\tif(success){","\t\t\t\talert(\"Login Successful\");","\t\t\t}else{","\t\t\t\talert(\"Login Failed: \" + msg);","\t\t\t}","\t\t});","\t});","","\t//TODO: Decide on best practice for init UI, without prescribing","\t// any single UI framework","}"];
