for(var i = 0; i < 2010; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

widgetIdToPanelStateChangeFunction['u558'] = function() {
var e = windowEvent;

if (true) {

SetWidgetFormText('u561', GetGlobalVariableValue('TagName'));

}

}

widgetIdToPanelStateChangeFunction['u563'] = function() {
var e = windowEvent;

if (true) {

SetWidgetFormText('u566', GetGlobalVariableValue('TagName'));

}

}

widgetIdToPanelStateChangeFunction['u568'] = function() {
var e = windowEvent;

if (true) {

SetWidgetFormText('u571', GetGlobalVariableValue('TagName'));

}

}

if (bIE) document.getElementById('u1797').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u1797'); });
else {
    document.getElementById('u1797').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u1797'); }, true);
    document.getElementById('u1797').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u1797'); }, true);
}

widgetIdToDragFunction['u1797'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u1797',widgetDragInfo.xDelta,widgetDragInfo.yDelta,'none',500);

	BringToFront("u1797");

}

}

widgetIdToPanelStateChangeFunction['u576'] = function() {
var e = windowEvent;

if (true) {

SetWidgetFormText('u579', GetGlobalVariableValue('TagName'));

}

}

widgetIdToPanelStateChangeFunction['u611'] = function() {
var e = windowEvent;

if (true) {

SetWidgetFormText('u614', GetGlobalVariableValue('TagName'));

}

}

widgetIdToPanelStateChangeFunction['u616'] = function() {
var e = windowEvent;

if (true) {

SetWidgetFormText('u619', GetGlobalVariableValue('TagName'));

}

}

widgetIdToPanelStateChangeFunction['u581'] = function() {
var e = windowEvent;

if (true) {

SetWidgetFormText('u584', GetGlobalVariableValue('TagName'));

}

}

widgetIdToPanelStateChangeFunction['u586'] = function() {
var e = windowEvent;

if (true) {

SetWidgetFormText('u589', GetGlobalVariableValue('TagName'));

}

}

widgetIdToPanelStateChangeFunction['u621'] = function() {
var e = windowEvent;

if (true) {

SetWidgetFormText('u624', GetGlobalVariableValue('TagName'));

}

}

widgetIdToPanelStateChangeFunction['u629'] = function() {
var e = windowEvent;

if (true) {

SetWidgetFormText('u632', GetGlobalVariableValue('TagName'));

}

}

widgetIdToPanelStateChangeFunction['u634'] = function() {
var e = windowEvent;

if (true) {

SetWidgetFormText('u637', GetGlobalVariableValue('TagName'));

}

}

widgetIdToPanelStateChangeFunction['u639'] = function() {
var e = windowEvent;

if (true) {

SetWidgetFormText('u642', GetGlobalVariableValue('TagName'));

}

}

$axure.eventManager.focus('u855', function(e) {

if ((GetWidgetText('u854')) == ('')) {

SetWidgetFormText('u854', GetWidgetText('u855'));

SetWidgetFormText('u855', '');

}
});

$axure.eventManager.blur('u855', function(e) {

if ((GetWidgetText('u855')) == ('')) {

SetWidgetFormText('u855', GetWidgetText('u854'));

SetWidgetFormText('u854', '');

}
});
gv_vAlignTable['u857'] = 'center';gv_vAlignTable['u858'] = 'top';gv_vAlignTable['u859'] = 'top';gv_vAlignTable['u200'] = 'center';gv_vAlignTable['u201'] = 'top';gv_vAlignTable['u202'] = 'top';HookHover('u203', false);
gv_vAlignTable['u204'] = 'center';gv_vAlignTable['u205'] = 'top';gv_vAlignTable['u206'] = 'top';gv_vAlignTable['u209'] = 'center';gv_vAlignTable['u689'] = 'center';gv_vAlignTable['u865'] = 'center';gv_vAlignTable['u867'] = 'center';gv_vAlignTable['u869'] = 'center';gv_vAlignTable['u210'] = 'top';gv_vAlignTable['u211'] = 'top';HookHover('u212', false);
gv_vAlignTable['u213'] = 'center';gv_vAlignTable['u214'] = 'top';gv_vAlignTable['u215'] = 'top';gv_vAlignTable['u218'] = 'center';gv_vAlignTable['u219'] = 'top';HookHover('u698', false);
gv_vAlignTable['u699'] = 'center';gv_vAlignTable['u874'] = 'center';gv_vAlignTable['u876'] = 'center';gv_vAlignTable['u877'] = 'top';gv_vAlignTable['u879'] = 'center';gv_vAlignTable['u220'] = 'top';HookHover('u221', false);
gv_vAlignTable['u222'] = 'center';gv_vAlignTable['u223'] = 'top';gv_vAlignTable['u224'] = 'top';gv_vAlignTable['u227'] = 'center';document.getElementById('u228_img').tabIndex = 0;
HookHover('u228', false);

u228.style.cursor = 'pointer';
$axure.eventManager.click('u228', function(e) {

if (true) {

	MoveWidgetTo('u673', GetNum('160'), GetNum('70'),'swing',1000);

	MoveWidgetTo('u0', GetNum('-350'), GetNum('70'),'swing',1000);

}
});
gv_vAlignTable['u229'] = 'center';
u884.style.cursor = 'pointer';
$axure.eventManager.click('u884', function(e) {

if (true) {

SetWidgetFormText('u884', '');

SetWidgetNotSelected('u898');
SetWidgetNotSelected('u900');
SetWidgetNotSelected('u902');
SetWidgetNotSelected('u904');
SetWidgetNotSelected('u888');
SetWidgetNotSelected('u890');
SetWidgetNotSelected('u892');
SetWidgetNotSelected('u894');
}
});

$axure.eventManager.keyup('u884', function(e) {

if (((GetWidgetText('u884')) == ('c')) || (((GetWidgetText('u884')) == ('C')) || (((GetWidgetText('u884')) == ('craft')) || ((GetWidgetText('u884')) == ('Craftsman'))))) {

	SetPanelState('u885', 'pd0u885','swing','up',50,'swing','down',50);

}
else
if (((GetWidgetText('u884')) == ('T')) || ((GetWidgetText('u884')) == ('t'))) {

	SetPanelState('u885', 'pd1u885','swing','up',50,'swing','down',50);

}
else
if (true) {

	SetPanelVisibility('u885','hidden','fade',50);

SetWidgetNotSelected('u898');
SetWidgetNotSelected('u900');
SetWidgetNotSelected('u902');
SetWidgetNotSelected('u904');
SetWidgetNotSelected('u888');
SetWidgetNotSelected('u890');
SetWidgetNotSelected('u892');
SetWidgetNotSelected('u894');
}
});

$axure.eventManager.blur('u884', function(e) {

if (true) {

SetWidgetFormText('u884', 'Search...');

}
});
HookHover('u740', false);
gv_vAlignTable['u741'] = 'center';document.getElementById('u888_img').tabIndex = 0;
HookHover('u888', false);

u888.style.cursor = 'pointer';
$axure.eventManager.click('u888', function(e) {

if (true) {

SetWidgetSelected('u888');
SetWidgetNotSelected('u890');
SetWidgetNotSelected('u892');
SetWidgetNotSelected('u894');
SetWidgetFormText('u884', 'Tool');

	SetPanelVisibility('u885','hidden','fade',100);

}
});
gv_vAlignTable['u889'] = 'center';gv_vAlignTable['u230'] = 'top';gv_vAlignTable['u231'] = 'top';gv_vAlignTable['u232'] = 'top';gv_vAlignTable['u233'] = 'top';gv_vAlignTable['u234'] = 'top';gv_vAlignTable['u235'] = 'top';gv_vAlignTable['u236'] = 'top';gv_vAlignTable['u237'] = 'top';gv_vAlignTable['u238'] = 'top';gv_vAlignTable['u239'] = 'top';gv_vAlignTable['u500'] = 'center';gv_vAlignTable['u501'] = 'top';gv_vAlignTable['u504'] = 'center';gv_vAlignTable['u506'] = 'top';document.getElementById('u509_img').tabIndex = 0;

u509.style.cursor = 'pointer';
$axure.eventManager.click('u509', function(e) {

if (true) {

	SetPanelState('u673', 'pd3u673','fade','',500,'fade','',500);

	MoveWidgetTo('u673', GetNum('160'), GetNum('70'),'swing',1000);

	MoveWidgetTo('u0', GetNum('-350'), GetNum('70'),'swing',1000);

}
});

$axure.eventManager.mouseout('u509', function(e) {
if (!IsTrueMouseOut('u509',e)) return;
if (true) {

	SetPanelState('u502', 'pd0u502','fade','',250,'fade','',250);

}
});
gv_vAlignTable['u893'] = 'center';document.getElementById('u894_img').tabIndex = 0;
HookHover('u894', false);

u894.style.cursor = 'pointer';
$axure.eventManager.click('u894', function(e) {

if (true) {

SetWidgetNotSelected('u888');
SetWidgetNotSelected('u890');
SetWidgetNotSelected('u892');
SetWidgetSelected('u894');
SetWidgetFormText('u884', 'Tool Box');

	SetPanelVisibility('u885','hidden','fade',100);

}
});
gv_vAlignTable['u895'] = 'center';document.getElementById('u898_img').tabIndex = 0;
HookHover('u898', false);

u898.style.cursor = 'pointer';
$axure.eventManager.click('u898', function(e) {

if (true) {

SetWidgetSelected('u898');
SetWidgetNotSelected('u900');
SetWidgetNotSelected('u902');
SetWidgetNotSelected('u904');
SetWidgetFormText('u884', 'Cra');

	SetPanelVisibility('u885','hidden','fade',100);

}
});
gv_vAlignTable['u899'] = 'center';gv_vAlignTable['u240'] = 'top';gv_vAlignTable['u241'] = 'top';gv_vAlignTable['u242'] = 'top';gv_vAlignTable['u243'] = 'top';gv_vAlignTable['u244'] = 'top';gv_vAlignTable['u245'] = 'top';gv_vAlignTable['u246'] = 'top';gv_vAlignTable['u247'] = 'top';gv_vAlignTable['u248'] = 'top';gv_vAlignTable['u249'] = 'top';gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u512'] = 'center';gv_vAlignTable['u15'] = 'top';gv_vAlignTable['u17'] = 'center';gv_vAlignTable['u19'] = 'top';gv_vAlignTable['u518'] = 'center';gv_vAlignTable['u250'] = 'top';gv_vAlignTable['u251'] = 'top';gv_vAlignTable['u252'] = 'top';gv_vAlignTable['u253'] = 'top';gv_vAlignTable['u254'] = 'top';gv_vAlignTable['u255'] = 'top';gv_vAlignTable['u256'] = 'top';gv_vAlignTable['u257'] = 'top';gv_vAlignTable['u258'] = 'top';gv_vAlignTable['u259'] = 'top';gv_vAlignTable['u21'] = 'center';gv_vAlignTable['u521'] = 'center';gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u25'] = 'top';
$axure.eventManager.focus('u28', function(e) {

if ((GetWidgetText('u27')) == ('')) {

SetWidgetFormText('u27', GetWidgetText('u28'));

SetWidgetFormText('u28', '');

}
});

$axure.eventManager.blur('u28', function(e) {

if ((GetWidgetText('u28')) == ('')) {

SetWidgetFormText('u28', GetWidgetText('u27'));

SetWidgetFormText('u27', '');

}
});

$axure.eventManager.mouseover('u528', function(e) {
if (!IsTrueMouseOver('u528',e)) return;
if (true) {

	SetPanelState('u519', 'pd1u519','fade','',250,'fade','',250);

}
});
gv_vAlignTable['u529'] = 'center';gv_vAlignTable['u927'] = 'center';gv_vAlignTable['u928'] = 'top';gv_vAlignTable['u260'] = 'top';gv_vAlignTable['u261'] = 'top';gv_vAlignTable['u262'] = 'top';gv_vAlignTable['u263'] = 'top';gv_vAlignTable['u264'] = 'top';gv_vAlignTable['u266'] = 'center';gv_vAlignTable['u267'] = 'top';gv_vAlignTable['u268'] = 'top';gv_vAlignTable['u30'] = 'center';document.getElementById('u31_img').tabIndex = 0;
HookHover('u31', false);

u31.style.cursor = 'pointer';
$axure.eventManager.click('u31', function(e) {

if (true) {

	MoveWidgetTo('u673', GetNum('160'), GetNum('70'),'swing',1000);

	MoveWidgetTo('u0', GetNum('-350'), GetNum('70'),'swing',1000);

}
});
gv_vAlignTable['u32'] = 'center';gv_vAlignTable['u35'] = 'center';gv_vAlignTable['u37'] = 'center';gv_vAlignTable['u38'] = 'top';gv_vAlignTable['u538'] = 'center';
$axure.eventManager.mouseover('u539', function(e) {
if (!IsTrueMouseOver('u539',e)) return;
if (true) {

	SetPanelState('u530', 'pd1u530','fade','',250,'fade','',250);

}
});
HookHover('u800', false);
gv_vAlignTable['u801'] = 'center';HookHover('u802', false);
gv_vAlignTable['u803'] = 'center';HookHover('u270', false);
gv_vAlignTable['u271'] = 'center';HookHover('u272', false);
gv_vAlignTable['u273'] = 'center';gv_vAlignTable['u276'] = 'center';gv_vAlignTable['u277'] = 'top';gv_vAlignTable['u278'] = 'top';HookHover('u279', false);
gv_vAlignTable['u40'] = 'center';
$axure.eventManager.focus('u43', function(e) {

if ((GetWidgetText('u42')) == ('')) {

SetWidgetFormText('u42', GetWidgetText('u43'));

SetWidgetFormText('u43', '');

}
});

$axure.eventManager.blur('u43', function(e) {

if ((GetWidgetText('u43')) == ('')) {

SetWidgetFormText('u43', GetWidgetText('u42'));

SetWidgetFormText('u42', '');

}
});
document.getElementById('u543_img').tabIndex = 0;
HookHover('u543', false);

u543.style.cursor = 'pointer';
$axure.eventManager.click('u543', function(e) {

if (true) {

	MoveWidgetTo('u673', GetNum('160'), GetNum('70'),'swing',1000);

	MoveWidgetTo('u0', GetNum('-350'), GetNum('70'),'swing',1000);

}
});
gv_vAlignTable['u47'] = 'top';gv_vAlignTable['u48'] = 'top';gv_vAlignTable['u49'] = 'top';HookHover('u810', false);
gv_vAlignTable['u811'] = 'center';HookHover('u812', false);
gv_vAlignTable['u813'] = 'center';HookHover('u814', false);
gv_vAlignTable['u280'] = 'center';HookHover('u281', false);
gv_vAlignTable['u282'] = 'center';gv_vAlignTable['u285'] = 'center';gv_vAlignTable['u286'] = 'top';gv_vAlignTable['u287'] = 'top';HookHover('u288', false);
gv_vAlignTable['u289'] = 'center';gv_vAlignTable['u50'] = 'top';gv_vAlignTable['u52'] = 'top';gv_vAlignTable['u552'] = 'top';document.getElementById('u553_img').tabIndex = 0;
HookHover('u553', false);

u553.style.cursor = 'pointer';
$axure.eventManager.click('u553', function(e) {

if (true) {

	SetPanelState('u551', 'pd0u551','fade','',500,'fade','',500);

}
});
gv_vAlignTable['u56'] = 'center';gv_vAlignTable['u58'] = 'center';gv_vAlignTable['u59'] = 'top';gv_vAlignTable['u795'] = 'center';HookHover('u820', false);
gv_vAlignTable['u821'] = 'center';HookHover('u822', false);
gv_vAlignTable['u823'] = 'center';HookHover('u824', false);
HookHover('u290', false);
gv_vAlignTable['u291'] = 'center';gv_vAlignTable['u294'] = 'center';gv_vAlignTable['u295'] = 'top';gv_vAlignTable['u296'] = 'top';HookHover('u297', false);
gv_vAlignTable['u298'] = 'center';HookHover('u299', false);
gv_vAlignTable['u61'] = 'center';
u561.style.cursor = 'pointer';
$axure.eventManager.click('u561', function(e) {

if (true) {

SetWidgetFormText('u555', GetWidgetText('u561'));

}
});
u562.tabIndex = 0;

u562.style.cursor = 'pointer';
$axure.eventManager.click('u562', function(e) {

if (((GetWidgetVisibility('u563')) == (false)) && ((GetWidgetVisibility('u568')) == (false))) {

	SetPanelVisibility('u558','hidden','none',500);

}
else
if (((GetWidgetVisibility('u563')) == (true)) && ((GetWidgetVisibility('u568')) == (false))) {

	MoveWidgetBy('u563', GetNum('-98'), GetNum('0'),'none',500);

	SetPanelVisibility('u558','hidden','none',500);

}
else
if (((GetWidgetVisibility('u563')) == (true)) && ((GetWidgetVisibility('u568')) == (true))) {

	MoveWidgetBy('u563', GetNum('-98'), GetNum('0'),'none',500);

	MoveWidgetBy('u568', GetNum('-196'), GetNum('0'),'none',500);

	SetPanelVisibility('u558','hidden','none',500);

}
else
if (((GetWidgetVisibility('u563')) == (false)) && ((GetWidgetVisibility('u568')) == (true))) {

	MoveWidgetBy('u568', GetNum('-196'), GetNum('0'),'none',500);

	SetPanelVisibility('u558','hidden','none',500);

}
});
gv_vAlignTable['u562'] = 'top';gv_vAlignTable['u67'] = 'center';gv_vAlignTable['u69'] = 'center';gv_vAlignTable['u1100'] = 'center';HookHover('u830', false);

$axure.eventManager.mouseout('u1104', function(e) {
if (!IsTrueMouseOut('u1104',e)) return;
if (true) {

	SetPanelVisibility('u1103','hidden','none',500);

}
});
gv_vAlignTable['u1201'] = 'center';gv_vAlignTable['u1203'] = 'center';gv_vAlignTable['u1204'] = 'top';gv_vAlignTable['u1207'] = 'center';gv_vAlignTable['u1209'] = 'center';gv_vAlignTable['u71'] = 'center';gv_vAlignTable['u570'] = 'center';
u571.style.cursor = 'pointer';
$axure.eventManager.click('u571', function(e) {

if (true) {

SetWidgetFormText('u555', GetWidgetText('u571'));

}
});
u572.tabIndex = 0;

u572.style.cursor = 'pointer';
$axure.eventManager.click('u572', function(e) {

if (((GetWidgetVisibility('u558')) == (false)) && ((GetWidgetVisibility('u563')) == (false))) {

	SetPanelVisibility('u568','hidden','none',500);

}
else
if (((GetWidgetVisibility('u558')) == (false)) && ((GetWidgetVisibility('u563')) == (true))) {

	MoveWidgetBy('u568', GetNum('-98'), GetNum('0'),'none',500);

}
});
gv_vAlignTable['u572'] = 'top';
u573.style.cursor = 'pointer';
$axure.eventManager.click('u573', function(e) {

if (true) {

SetWidgetFormText('u573', '');

}
});

$axure.eventManager.keyup('u573', function(e) {

if (IsValueAlphaNumeric(GetWidgetText('u573'))) {

SetGlobalVariableValue('TagName', GetWidgetText('u573'));

}
});

$axure.eventManager.blur('u573', function(e) {

if (((GetWidgetVisibility('u576')) != (true)) && ((GetWidgetValueLength('u573')) != (''))) {

	SetPanelState('u576', 'pd0u576','fade','',50,'fade','',50);

}
else
if (((GetWidgetVisibility('u581')) != (true)) && ((GetWidgetValueLength('u573')) != (''))) {

	SetPanelState('u581', 'pd0u581','fade','',50,'fade','',50);

}
else
if (((GetWidgetVisibility('u586')) != (true)) && ((GetWidgetValueLength('u573')) != (''))) {

	SetPanelState('u586', 'pd0u586','fade','',50,'fade','',50);

}
});
gv_vAlignTable['u76'] = 'top';gv_vAlignTable['u78'] = 'center';gv_vAlignTable['u578'] = 'center';
u579.style.cursor = 'pointer';
$axure.eventManager.click('u579', function(e) {

if (true) {

SetWidgetFormText('u573', GetWidgetText('u579'));

}
});
document.getElementById('u1110_img').tabIndex = 0;

u1110.style.cursor = 'pointer';
$axure.eventManager.click('u1110', function(e) {

if (true) {

	SetPanelState('u917', 'pd0u917','fade','',250,'fade','',250);

}
});
gv_vAlignTable['u1111'] = 'center';HookHover('u840', false);
HookHover('u1033', false);
gv_vAlignTable['u1034'] = 'center';HookHover('u1035', false);
gv_vAlignTable['u1211'] = 'center';gv_vAlignTable['u1212'] = 'top';gv_vAlignTable['u1215'] = 'center';gv_vAlignTable['u1216'] = 'top';gv_vAlignTable['u1218'] = 'center';gv_vAlignTable['u1219'] = 'top';gv_vAlignTable['u80'] = 'center';gv_vAlignTable['u82'] = 'center';gv_vAlignTable['u84'] = 'center';gv_vAlignTable['u86'] = 'center';gv_vAlignTable['u88'] = 'center';gv_vAlignTable['u588'] = 'center';
u589.style.cursor = 'pointer';
$axure.eventManager.click('u589', function(e) {

if (true) {

SetWidgetFormText('u573', GetWidgetText('u589'));

}
});
gv_vAlignTable['u851'] = 'top';gv_vAlignTable['u852'] = 'top';gv_vAlignTable['u1221'] = 'center';gv_vAlignTable['u1222'] = 'top';gv_vAlignTable['u1224'] = 'center';gv_vAlignTable['u1225'] = 'top';gv_vAlignTable['u1226'] = 'top';gv_vAlignTable['u1227'] = 'top';gv_vAlignTable['u1228'] = 'top';gv_vAlignTable['u1229'] = 'top';gv_vAlignTable['u90'] = 'center';document.getElementById('u91_img').tabIndex = 0;
HookHover('u91', false);

u91.style.cursor = 'pointer';
$axure.eventManager.click('u91', function(e) {

if (true) {

	MoveWidgetTo('u673', GetNum('160'), GetNum('70'),'swing',1000);

	MoveWidgetTo('u0', GetNum('-350'), GetNum('70'),'swing',1000);

}
});
gv_vAlignTable['u92'] = 'center';HookHover('u96', false);
gv_vAlignTable['u97'] = 'center';HookHover('u98', false);
gv_vAlignTable['u99'] = 'center';gv_vAlignTable['u598'] = 'center';HookHover('u599', false);

$axure.eventManager.focus('u863', function(e) {

if ((GetWidgetText('u862')) == ('')) {

SetWidgetFormText('u862', GetWidgetText('u863'));

SetWidgetFormText('u863', '');

}
});

$axure.eventManager.blur('u863', function(e) {

if ((GetWidgetText('u863')) == ('')) {

SetWidgetFormText('u863', GetWidgetText('u862'));

SetWidgetFormText('u862', '');

}
});
gv_vAlignTable['u1230'] = 'top';u1233.tabIndex = 0;

u1233.style.cursor = 'pointer';
$axure.eventManager.click('u1233', function(e) {

if (true) {

	SetPanelVisibility('u1264','toggle','fade',100);

	BringToFront("u1264");

}
});
gv_vAlignTable['u1233'] = 'top';gv_vAlignTable['u1236'] = 'center';gv_vAlignTable['u1238'] = 'top';gv_vAlignTable['u1239'] = 'top';gv_vAlignTable['u2006'] = 'center';document.getElementById('u1500_img').tabIndex = 0;
HookHover('u1500', false);

u1500.style.cursor = 'pointer';
$axure.eventManager.click('u1500', function(e) {

if (true) {

	SetPanelState('u1499', 'pd0u1499','fade','',100,'fade','',100);

}
});
gv_vAlignTable['u1501'] = 'center';document.getElementById('u1502_img').tabIndex = 0;
HookHover('u1502', false);

u1502.style.cursor = 'pointer';
$axure.eventManager.click('u1502', function(e) {

if (true) {

	SetPanelState('u1499', 'pd1u1499','fade','',100,'fade','',100);

}
});
gv_vAlignTable['u1503'] = 'center';
$axure.eventManager.mouseover('u1504', function(e) {
if (!IsTrueMouseOver('u1504',e)) return;
if (true) {

	SetPanelState('u1491', 'pd1u1491','fade','',250,'fade','',250);

}
});
gv_vAlignTable['u1505'] = 'center';gv_vAlignTable['u1508'] = 'center';gv_vAlignTable['u2007'] = 'top';gv_vAlignTable['u870'] = 'top';gv_vAlignTable['u871'] = 'top';document.getElementById('u1240_img').tabIndex = 0;

u1240.style.cursor = 'pointer';
$axure.eventManager.click('u1240', function(e) {

if (true) {

	SetPanelState('u673', 'pd4u673','fade','',500,'fade','',500);

}
});

$axure.eventManager.mouseout('u1240', function(e) {
if (!IsTrueMouseOut('u1240',e)) return;
if (true) {

	SetPanelState('u1234', 'pd0u1234','fade','',250,'fade','',250);

}
});
gv_vAlignTable['u1241'] = 'center';document.getElementById('u1243_img').tabIndex = 0;
HookHover('u1243', false);

u1243.style.cursor = 'pointer';
$axure.eventManager.click('u1243', function(e) {

if (true) {

	SetPanelState('u1242', 'pd0u1242','fade','',100,'fade','',100);

}
});
gv_vAlignTable['u1244'] = 'center';document.getElementById('u1245_img').tabIndex = 0;
HookHover('u1245', false);

u1245.style.cursor = 'pointer';
$axure.eventManager.click('u1245', function(e) {

if (true) {

	SetPanelState('u1242', 'pd1u1242','fade','',100,'fade','',100);

}
});
gv_vAlignTable['u1246'] = 'center';
$axure.eventManager.mouseover('u1247', function(e) {
if (!IsTrueMouseOver('u1247',e)) return;
if (true) {

	SetPanelState('u1234', 'pd1u1234','fade','',250,'fade','',250);

}
});
gv_vAlignTable['u1248'] = 'center';gv_vAlignTable['u1249'] = 'top';gv_vAlignTable['u1510'] = 'top';gv_vAlignTable['u1511'] = 'top';document.getElementById('u1512_img').tabIndex = 0;

u1512.style.cursor = 'pointer';
$axure.eventManager.click('u1512', function(e) {

if (true) {

	SetPanelState('u673', 'pd3u673','fade','',500,'fade','',500);

}
});

$axure.eventManager.mouseout('u1512', function(e) {
if (!IsTrueMouseOut('u1512',e)) return;
if (true) {

	SetPanelState('u1506', 'pd0u1506','fade','',250,'fade','',250);

}
});
gv_vAlignTable['u1513'] = 'center';document.getElementById('u1515_img').tabIndex = 0;
HookHover('u1515', false);

u1515.style.cursor = 'pointer';
$axure.eventManager.click('u1515', function(e) {

if (true) {

	SetPanelState('u1514', 'pd0u1514','fade','',100,'fade','',100);

}
});
gv_vAlignTable['u1516'] = 'center';document.getElementById('u1517_img').tabIndex = 0;
HookHover('u1517', false);

u1517.style.cursor = 'pointer';
$axure.eventManager.click('u1517', function(e) {

if (true) {

	SetPanelState('u1514', 'pd1u1514','fade','',100,'fade','',100);

}
});
gv_vAlignTable['u1518'] = 'center';
$axure.eventManager.mouseover('u1519', function(e) {
if (!IsTrueMouseOver('u1519',e)) return;
if (true) {

	SetPanelState('u1506', 'pd1u1506','fade','',250,'fade','',250);

}
});
gv_vAlignTable['u881'] = 'center';gv_vAlignTable['u883'] = 'center';gv_vAlignTable['u1252'] = 'center';gv_vAlignTable['u1253'] = 'top';u1254.tabIndex = 0;

u1254.style.cursor = 'pointer';
$axure.eventManager.click('u1254', function(e) {

if (true) {

	SetPanelState('u1250', 'pd0u1250','none','',500,'none','',500);

	SetPanelVisibility('u1261','','none',500);

SetWidgetNotSelected('u1251');
}
});

$axure.eventManager.mouseover('u1254', function(e) {
if (!IsTrueMouseOver('u1254',e)) return;
if (true) {

SetWidgetSelected('u1251');
}
});

$axure.eventManager.mouseout('u1254', function(e) {
if (!IsTrueMouseOut('u1254',e)) return;
if (true) {

SetWidgetNotSelected('u1251');
}
});

$axure.eventManager.mouseout('u1256', function(e) {
if (!IsTrueMouseOut('u1256',e)) return;
if (true) {

	SetPanelVisibility('u1255','hidden','none',500);

}
});
gv_vAlignTable['u1258'] = 'center';gv_vAlignTable['u1259'] = 'top';gv_vAlignTable['u1520'] = 'center';document.getElementById('u1521_img').tabIndex = 0;

u1521.style.cursor = 'pointer';
$axure.eventManager.click('u1521', function(e) {

if (true) {

	MoveWidgetTo('u673', GetNum('160'), GetNum('70'),'swing',1000);

	MoveWidgetTo('u0', GetNum('-350'), GetNum('70'),'swing',1000);

}
});
gv_vAlignTable['u1522'] = 'center';gv_vAlignTable['u1524'] = 'center';gv_vAlignTable['u1526'] = 'center';gv_vAlignTable['u1528'] = 'center';document.getElementById('u890_img').tabIndex = 0;
HookHover('u890', false);

u890.style.cursor = 'pointer';
$axure.eventManager.click('u890', function(e) {

if (true) {

SetWidgetNotSelected('u888');
SetWidgetSelected('u890');
SetWidgetNotSelected('u892');
SetWidgetNotSelected('u894');
SetWidgetFormText('u884', 'Tool Belt');

	SetPanelVisibility('u885','hidden','fade',100);

}
});
gv_vAlignTable['u891'] = 'center';document.getElementById('u892_img').tabIndex = 0;
HookHover('u892', false);

u892.style.cursor = 'pointer';
$axure.eventManager.click('u892', function(e) {

if (true) {

SetWidgetNotSelected('u888');
SetWidgetNotSelected('u890');
SetWidgetSelected('u892');
SetWidgetNotSelected('u894');
SetWidgetFormText('u884', 'Tool Man');

	SetPanelVisibility('u885','hidden','fade',100);

}
});
gv_vAlignTable['u1069'] = 'center';u1260.tabIndex = 0;

u1260.style.cursor = 'pointer';
$axure.eventManager.click('u1260', function(e) {

if (true) {

	SetPanelState('u1250', 'pd1u1250','none','',500,'none','',500);

	SetPanelVisibility('u1255','','none',500);

SetWidgetNotSelected('u1257');
}
});

$axure.eventManager.mouseover('u1260', function(e) {
if (!IsTrueMouseOver('u1260',e)) return;
if (true) {

SetWidgetSelected('u1257');
}
});

$axure.eventManager.mouseout('u1260', function(e) {
if (!IsTrueMouseOut('u1260',e)) return;
if (true) {

SetWidgetNotSelected('u1257');
}
});

$axure.eventManager.mouseout('u1262', function(e) {
if (!IsTrueMouseOut('u1262',e)) return;
if (true) {

	SetPanelVisibility('u1261','hidden','none',500);

}
});
gv_vAlignTable['u1263'] = 'top';gv_vAlignTable['u1266'] = 'center';document.getElementById('u1267_img').tabIndex = 0;

u1267.style.cursor = 'pointer';
$axure.eventManager.click('u1267', function(e) {

if (true) {

	SetPanelVisibility('u1264','hidden','fade',50);

}
});
gv_vAlignTable['u1268'] = 'center';gv_vAlignTable['u1530'] = 'center';gv_vAlignTable['u1532'] = 'center';gv_vAlignTable['u1534'] = 'center';gv_vAlignTable['u1536'] = 'center';gv_vAlignTable['u1538'] = 'center';gv_vAlignTable['u1080'] = 'top';gv_vAlignTable['u1801'] = 'center';gv_vAlignTable['u1803'] = 'center';gv_vAlignTable['u1804'] = 'top';gv_vAlignTable['u1806'] = 'center';document.getElementById('u1807_img').tabIndex = 0;
HookClick('u1807', false);

u1807.style.cursor = 'pointer';
$axure.eventManager.click('u1807', function(e) {

if ((GetGlobalVariableValue('FileName')) != ('')) {

	SetPanelVisibility('u1797','hidden','fade',50);

	SetPanelVisibility('u1853','','none',500);
function waituf4051ef945084aada3f932fc08b4c68f1() {

	SetPanelVisibility('u1853','hidden','none',500);

SetWidgetFormText('u1796', GetGlobalVariableValue('FileName'));
}
setTimeout(waituf4051ef945084aada3f932fc08b4c68f1, 1000);

}
else
if ((GetGlobalVariableValue('FileName')) == ('')) {

	SetPanelVisibility('u1797','hidden','fade',50);

}
});
gv_vAlignTable['u1808'] = 'center';document.getElementById('u1275_img').tabIndex = 0;
HookHover('u1275', false);

u1275.style.cursor = 'pointer';
$axure.eventManager.click('u1275', function(e) {

if (true) {

	SetPanelState('u1272', 'pd1u1272','fade','',100,'fade','',100);

}
});
gv_vAlignTable['u1276'] = 'center';gv_vAlignTable['u1277'] = 'top';HookHover('u1278', false);
gv_vAlignTable['u1279'] = 'center';document.getElementById('u929_img').tabIndex = 0;
HookHover('u929', false);

u929.style.cursor = 'pointer';
$axure.eventManager.click('u929', function(e) {

if (true) {

;

;

	ScrollToWidget('u962', false,true,'none',500);

}
});
gv_vAlignTable['u1095'] = 'top';HookHover('u1541', false);
gv_vAlignTable['u1542'] = 'center';HookHover('u1543', false);
gv_vAlignTable['u1544'] = 'center';HookHover('u1545', false);
gv_vAlignTable['u1546'] = 'center';HookHover('u1547', false);
gv_vAlignTable['u1548'] = 'center';HookHover('u1549', false);
gv_vAlignTable['u1810'] = 'center';document.getElementById('u1811_img').tabIndex = 0;
HookClick('u1811', false);

u1811.style.cursor = 'pointer';
$axure.eventManager.click('u1811', function(e) {

if (true) {

	SetPanelVisibility('u1797','hidden','fade',50);

}
});
gv_vAlignTable['u1812'] = 'center';gv_vAlignTable['u1815'] = 'center';gv_vAlignTable['u1817'] = 'center';gv_vAlignTable['u1819'] = 'center';gv_vAlignTable['u1286'] = 'center';gv_vAlignTable['u1288'] = 'center';gv_vAlignTable['u1550'] = 'center';HookHover('u1553', false);
gv_vAlignTable['u1554'] = 'center';HookHover('u1555', false);
gv_vAlignTable['u1556'] = 'center';HookHover('u1557', false);
gv_vAlignTable['u1558'] = 'center';HookHover('u1559', false);
gv_vAlignTable['u1094'] = 'center';gv_vAlignTable['u1821'] = 'center';gv_vAlignTable['u1823'] = 'center';gv_vAlignTable['u1825'] = 'center';gv_vAlignTable['u1826'] = 'top';gv_vAlignTable['u1827'] = 'top';gv_vAlignTable['u1828'] = 'top';gv_vAlignTable['u1829'] = 'top';gv_vAlignTable['u1193'] = 'top';gv_vAlignTable['u1297'] = 'center';gv_vAlignTable['u1299'] = 'center';gv_vAlignTable['u1560'] = 'center';HookHover('u1561', false);
gv_vAlignTable['u1562'] = 'center';HookHover('u1563', false);
gv_vAlignTable['u1564'] = 'center';HookHover('u1567', false);
gv_vAlignTable['u1568'] = 'center';HookHover('u1569', false);
gv_vAlignTable['u1980'] = 'center';document.getElementById('u1981_img').tabIndex = 0;

u1981.style.cursor = 'pointer';
$axure.eventManager.click('u1981', function(e) {

if (true) {

	MoveWidgetTo('u673', GetNum('660'), GetNum('70'),'swing',1000);

	MoveWidgetTo('u0', GetNum('150'), GetNum('70'),'swing',1000);

	SetPanelState('u0', 'pd4u0','fade','',500,'fade','',500);

}
});
gv_vAlignTable['u1831'] = 'center';gv_vAlignTable['u1832'] = 'top';gv_vAlignTable['u1833'] = 'top';gv_vAlignTable['u1834'] = 'top';document.getElementById('u1837_img').tabIndex = 0;

u1837.style.cursor = 'pointer';
$axure.eventManager.click('u1837', function(e) {

if (true) {

SetWidgetSelected('u1837');
SetWidgetNotSelected('u1839');
SetWidgetNotSelected('u1841');
SetWidgetNotSelected('u1843');
SetGlobalVariableValue('FileName', 'filename1.csv');

SetWidgetFormText('u1852', GetGlobalVariableValue('FileName'));

}
});
gv_vAlignTable['u1838'] = 'center';document.getElementById('u1839_img').tabIndex = 0;

u1839.style.cursor = 'pointer';
$axure.eventManager.click('u1839', function(e) {

if (true) {

SetWidgetNotSelected('u1837');
SetWidgetSelected('u1839');
SetWidgetNotSelected('u1841');
SetWidgetNotSelected('u1843');
SetGlobalVariableValue('FileName', 'filename2.csv');

SetWidgetFormText('u1852', GetGlobalVariableValue('FileName'));

}
});
gv_vAlignTable['u1570'] = 'center';HookHover('u1571', false);
gv_vAlignTable['u1572'] = 'center';HookHover('u1573', false);
gv_vAlignTable['u1574'] = 'center';HookHover('u1575', false);
gv_vAlignTable['u1576'] = 'center';HookHover('u1577', false);
gv_vAlignTable['u1578'] = 'center';gv_vAlignTable['u1840'] = 'center';document.getElementById('u1841_img').tabIndex = 0;

u1841.style.cursor = 'pointer';
$axure.eventManager.click('u1841', function(e) {

if (true) {

SetWidgetNotSelected('u1837');
SetWidgetNotSelected('u1839');
SetWidgetSelected('u1841');
SetWidgetNotSelected('u1843');
SetGlobalVariableValue('FileName', 'Filename3.csv');

SetWidgetFormText('u1852', GetGlobalVariableValue('FileName'));

}
});
gv_vAlignTable['u1842'] = 'center';document.getElementById('u1843_img').tabIndex = 0;

u1843.style.cursor = 'pointer';
$axure.eventManager.click('u1843', function(e) {

if (true) {

SetWidgetNotSelected('u1837');
SetWidgetNotSelected('u1839');
SetWidgetNotSelected('u1841');
SetWidgetSelected('u1843');
SetGlobalVariableValue('FileName', 'filename4.csv');

SetWidgetFormText('u1852', GetGlobalVariableValue('FileName'));

}
});
gv_vAlignTable['u1844'] = 'center';gv_vAlignTable['u1846'] = 'center';gv_vAlignTable['u1848'] = 'center';gv_vAlignTable['u1849'] = 'top';HookHover('u1581', false);
gv_vAlignTable['u1582'] = 'center';HookHover('u1583', false);
gv_vAlignTable['u1584'] = 'center';HookHover('u1585', false);
gv_vAlignTable['u1586'] = 'center';HookHover('u1587', false);
gv_vAlignTable['u1588'] = 'center';HookHover('u1589', false);
gv_vAlignTable['u1850'] = 'top';gv_vAlignTable['u1855'] = 'center';gv_vAlignTable['u1857'] = 'center';gv_vAlignTable['u1858'] = 'top';gv_vAlignTable['u1590'] = 'center';HookHover('u1591', false);
gv_vAlignTable['u1592'] = 'center';HookHover('u1595', false);
gv_vAlignTable['u1596'] = 'center';HookHover('u1597', false);
gv_vAlignTable['u1598'] = 'center';HookHover('u1599', false);
gv_vAlignTable['u1192'] = 'top';gv_vAlignTable['u1861'] = 'center';gv_vAlignTable['u1863'] = 'top';gv_vAlignTable['u1864'] = 'top';document.getElementById('u1865_img').tabIndex = 0;

u1865.style.cursor = 'pointer';
$axure.eventManager.click('u1865', function(e) {

if (true) {

	SetPanelState('u673', 'pd4u673','fade','',500,'fade','',500);

}
});

$axure.eventManager.mouseout('u1865', function(e) {
if (!IsTrueMouseOut('u1865',e)) return;
if (true) {

	SetPanelState('u1859', 'pd0u1859','fade','',250,'fade','',250);

}
});
gv_vAlignTable['u1866'] = 'center';document.getElementById('u1868_img').tabIndex = 0;
HookHover('u1868', false);

u1868.style.cursor = 'pointer';
$axure.eventManager.click('u1868', function(e) {

if (true) {

	SetPanelState('u1867', 'pd0u1867','fade','',100,'fade','',100);

}
});
gv_vAlignTable['u1869'] = 'center';gv_vAlignTable['u1270'] = 'center';gv_vAlignTable['u1271'] = 'top';document.getElementById('u1273_img').tabIndex = 0;
HookHover('u1273', false);

u1273.style.cursor = 'pointer';
$axure.eventManager.click('u1273', function(e) {

if (true) {

	SetPanelState('u1272', 'pd0u1272','fade','',100,'fade','',100);

}
});
gv_vAlignTable['u1274'] = 'center';document.getElementById('u1870_img').tabIndex = 0;
HookHover('u1870', false);

u1870.style.cursor = 'pointer';
$axure.eventManager.click('u1870', function(e) {

if (true) {

	SetPanelState('u1867', 'pd1u1867','fade','',100,'fade','',100);

}
});
gv_vAlignTable['u1871'] = 'center';
$axure.eventManager.mouseover('u1872', function(e) {
if (!IsTrueMouseOver('u1872',e)) return;
if (true) {

	SetPanelState('u1859', 'pd1u1859','fade','',250,'fade','',250);

}
});
gv_vAlignTable['u1873'] = 'center';gv_vAlignTable['u1874'] = 'top';gv_vAlignTable['u1876'] = 'center';gv_vAlignTable['u1879'] = 'center';document.getElementById('u902_img').tabIndex = 0;
HookHover('u902', false);

u902.style.cursor = 'pointer';
$axure.eventManager.click('u902', function(e) {

if (true) {

SetWidgetNotSelected('u898');
SetWidgetNotSelected('u900');
SetWidgetSelected('u902');
SetWidgetNotSelected('u904');
SetWidgetFormText('u884', 'Crafts');

	SetPanelVisibility('u885','hidden','fade',100);

}
});
gv_vAlignTable['u1370'] = 'center';HookHover('u1371', false);
gv_vAlignTable['u1372'] = 'center';HookHover('u1280', false);
gv_vAlignTable['u1281'] = 'center';HookHover('u1282', false);
gv_vAlignTable['u1283'] = 'center';gv_vAlignTable['u1880'] = 'top';gv_vAlignTable['u1882'] = 'top';gv_vAlignTable['u1885'] = 'center';gv_vAlignTable['u1887'] = 'top';gv_vAlignTable['u1888'] = 'top';document.getElementById('u1889_img').tabIndex = 0;

u1889.style.cursor = 'pointer';
$axure.eventManager.click('u1889', function(e) {

if (true) {

	SetPanelState('u673', 'pd4u673','fade','',500,'fade','',500);

}
});

$axure.eventManager.mouseout('u1889', function(e) {
if (!IsTrueMouseOut('u1889',e)) return;
if (true) {

	SetPanelState('u1883', 'pd0u1883','fade','',250,'fade','',250);

}
});
gv_vAlignTable['u1183'] = 'top';gv_vAlignTable['u1380'] = 'center';HookHover('u1381', false);
gv_vAlignTable['u1382'] = 'center';gv_vAlignTable['u1290'] = 'center';gv_vAlignTable['u1292'] = 'top';gv_vAlignTable['u1890'] = 'center';document.getElementById('u1892_img').tabIndex = 0;
HookHover('u1892', false);

u1892.style.cursor = 'pointer';
$axure.eventManager.click('u1892', function(e) {

if (true) {

	SetPanelState('u1891', 'pd0u1891','fade','',100,'fade','',100);

}
});
gv_vAlignTable['u1893'] = 'center';document.getElementById('u1894_img').tabIndex = 0;
HookHover('u1894', false);

u1894.style.cursor = 'pointer';
$axure.eventManager.click('u1894', function(e) {

if (true) {

	SetPanelState('u1891', 'pd1u1891','fade','',100,'fade','',100);

}
});
gv_vAlignTable['u1895'] = 'center';
$axure.eventManager.mouseover('u1896', function(e) {
if (!IsTrueMouseOver('u1896',e)) return;
if (true) {

	SetPanelState('u1883', 'pd1u1883','fade','',250,'fade','',250);

}
});
gv_vAlignTable['u1897'] = 'center';document.getElementById('u900_img').tabIndex = 0;
HookHover('u900', false);

u900.style.cursor = 'pointer';
$axure.eventManager.click('u900', function(e) {

if (true) {

SetWidgetNotSelected('u898');
SetWidgetSelected('u900');
SetWidgetNotSelected('u902');
SetWidgetNotSelected('u904');
SetWidgetFormText('u884', 'Craft');

	SetPanelVisibility('u885','hidden','fade',100);

}
});
HookHover('u1391', false);
gv_vAlignTable['u1392'] = 'center';gv_vAlignTable['u905'] = 'center';document.getElementById('u906_img').tabIndex = 0;

u906.style.cursor = 'pointer';
$axure.eventManager.click('u906', function(e) {

if (true) {

SetWidgetFormText('u884', '');

}
});
gv_vAlignTable['u907'] = 'center';gv_vAlignTable['u909'] = 'center';document.getElementById('u674_img').tabIndex = 0;

u674.style.cursor = 'pointer';
$axure.eventManager.click('u674', function(e) {

if (true) {

	MoveWidgetTo('u673', GetNum('160'), GetNum('70'),'swing',1000);

	MoveWidgetTo('u0', GetNum('-350'), GetNum('70'),'swing',1000);

}
});
gv_vAlignTable['u675'] = 'center';gv_vAlignTable['u676'] = 'top';document.getElementById('u915_img').tabIndex = 0;

u915.style.cursor = 'pointer';
$axure.eventManager.click('u915', function(e) {

if (true) {

	SetPanelState('u917', 'pd1u917','fade','',250,'fade','',250);

}
});
gv_vAlignTable['u916'] = 'center';gv_vAlignTable['u919'] = 'center';HookHover('u684', false);
gv_vAlignTable['u685'] = 'center';HookHover('u686', false);
gv_vAlignTable['u687'] = 'center';HookHover('u688', false);
gv_vAlignTable['u2'] = 'center';
$axure.eventManager.focus('u5', function(e) {

if ((GetWidgetText('u4')) == ('')) {

SetWidgetFormText('u4', GetWidgetText('u5'));

SetWidgetFormText('u5', '');

}
});

$axure.eventManager.blur('u5', function(e) {

if ((GetWidgetText('u5')) == ('')) {

SetWidgetFormText('u5', GetWidgetText('u4'));

SetWidgetFormText('u4', '');

}
});
gv_vAlignTable['u7'] = 'center';HookHover('u692', false);
HookHover('u696', false);
gv_vAlignTable['u697'] = 'center';gv_vAlignTable['u934'] = 'center';gv_vAlignTable['u937'] = 'center';gv_vAlignTable['u938'] = 'top';gv_vAlignTable['u939'] = 'top';document.getElementById('u944_img').tabIndex = 0;
HookHover('u944', false);

u944.style.cursor = 'pointer';
$axure.eventManager.click('u944', function(e) {

if (true) {

	SetPanelVisibility('u946','hidden','none',500);

	SetPanelVisibility('u954','hidden','none',500);

}

if ((GetWidgetText('u940')) == ('')) {

	SetPanelVisibility('u946','','none',500);

}

if ((GetWidgetText('u943')) == ('')) {

	SetPanelVisibility('u954','','none',500);

}

if (((GetWidgetText('u940')) != ('')) && ((false) && ((GetWidgetText('u943')) != ('')))) {

	SetPanelState('u925', 'pd1u925','none','',500,'none','',500);

	ScrollToWidget('u962', false,true,'none',500);

}

if (((GetWidgetText('u940')) != ('')) && ((false) && ((GetWidgetText('u943')) != ('')))) {
function waitubfe506159dcd4c3ea0c2988482e2267f1() {

SetGlobalVariableValue('CommentText', GetWidgetText('u940'));

SetWidgetRichText('u931', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:16px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('CommentText')) + '</span></p>');

SetGlobalVariableValue('CommentText', GetWidgetText('u943'));

SetWidgetRichText('u928', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('CommentText')) + '</span></p>');

;

	SetPanelState('u925', 'pd2u925','none','',500,'none','',500);
}
setTimeout(waitubfe506159dcd4c3ea0c2988482e2267f1, 1000);

}
});
gv_vAlignTable['u945'] = 'center';gv_vAlignTable['u948'] = 'center';gv_vAlignTable['u300'] = 'center';gv_vAlignTable['u303'] = 'center';gv_vAlignTable['u304'] = 'top';gv_vAlignTable['u305'] = 'top';HookHover('u306', false);
gv_vAlignTable['u307'] = 'center';HookHover('u308', false);
gv_vAlignTable['u309'] = 'center';gv_vAlignTable['u956'] = 'center';gv_vAlignTable['u958'] = 'center';gv_vAlignTable['u312'] = 'center';gv_vAlignTable['u313'] = 'top';gv_vAlignTable['u314'] = 'top';HookHover('u315', false);
gv_vAlignTable['u316'] = 'center';HookHover('u317', false);
gv_vAlignTable['u318'] = 'center';gv_vAlignTable['u964'] = 'center';gv_vAlignTable['u965'] = 'top';gv_vAlignTable['u966'] = 'top';document.getElementById('u967_img').tabIndex = 0;
HookHover('u967', false);

u967.style.cursor = 'pointer';
$axure.eventManager.click('u967', function(e) {

if (true) {

SetGlobalVariableValue('CommentText', GetWidgetText('u988'));

SetWidgetFormText('u988', '@JohnDoe ' + (GetGlobalVariableValue('CommentText')) + '');

	ScrollToWidget('u1007', false,true,'none',500);

}
});
gv_vAlignTable['u968'] = 'center';HookHover('u774', false);
gv_vAlignTable['u321'] = 'center';gv_vAlignTable['u322'] = 'top';gv_vAlignTable['u323'] = 'top';HookHover('u324', false);
gv_vAlignTable['u325'] = 'center';HookHover('u326', false);
gv_vAlignTable['u327'] = 'center';document.getElementById('u974_img').tabIndex = 0;
HookHover('u974', false);

u974.style.cursor = 'pointer';
$axure.eventManager.click('u974', function(e) {

if (true) {

;

;

	ScrollToWidget('u1007', false,true,'none',500);

}
});
gv_vAlignTable['u975'] = 'center';gv_vAlignTable['u976'] = 'top';gv_vAlignTable['u977'] = 'top';gv_vAlignTable['u979'] = 'center';gv_vAlignTable['u330'] = 'center';
u331.style.cursor = 'pointer';
$axure.eventManager.click('u331', function(e) {

if (true) {

SetWidgetFormText('u331', '');

SetWidgetNotSelected('u345');
SetWidgetNotSelected('u347');
SetWidgetNotSelected('u349');
SetWidgetNotSelected('u351');
SetWidgetNotSelected('u335');
SetWidgetNotSelected('u337');
SetWidgetNotSelected('u339');
SetWidgetNotSelected('u341');
}
});

$axure.eventManager.keyup('u331', function(e) {

if (((GetWidgetText('u331')) == ('c')) || (((GetWidgetText('u331')) == ('C')) || (((GetWidgetText('u331')) == ('craft')) || ((GetWidgetText('u331')) == ('Craftsman'))))) {

	SetPanelState('u332', 'pd0u332','swing','up',50,'swing','down',50);

}
else
if (((GetWidgetText('u331')) == ('T')) || ((GetWidgetText('u331')) == ('t'))) {

	SetPanelState('u332', 'pd1u332','swing','up',50,'swing','down',50);

}
else
if (true) {

	SetPanelVisibility('u332','hidden','fade',50);

SetWidgetNotSelected('u345');
SetWidgetNotSelected('u347');
SetWidgetNotSelected('u349');
SetWidgetNotSelected('u351');
SetWidgetNotSelected('u335');
SetWidgetNotSelected('u337');
SetWidgetNotSelected('u339');
SetWidgetNotSelected('u341');
}
});

$axure.eventManager.blur('u331', function(e) {

if (true) {

SetWidgetFormText('u331', 'Search...');

}
});
document.getElementById('u335_img').tabIndex = 0;
HookHover('u335', false);

u335.style.cursor = 'pointer';
$axure.eventManager.click('u335', function(e) {

if (true) {

SetWidgetSelected('u335');
SetWidgetNotSelected('u337');
SetWidgetNotSelected('u339');
SetWidgetNotSelected('u341');
SetWidgetFormText('u331', 'Tool');

	SetPanelVisibility('u332','hidden','fade',100);

}
});
gv_vAlignTable['u336'] = 'center';document.getElementById('u337_img').tabIndex = 0;
HookHover('u337', false);

u337.style.cursor = 'pointer';
$axure.eventManager.click('u337', function(e) {

if (true) {

SetWidgetNotSelected('u335');
SetWidgetSelected('u337');
SetWidgetNotSelected('u339');
SetWidgetNotSelected('u341');
SetWidgetFormText('u331', 'Tool Belt');

	SetPanelVisibility('u332','hidden','fade',100);

}
});
gv_vAlignTable['u338'] = 'center';document.getElementById('u339_img').tabIndex = 0;
HookHover('u339', false);

u339.style.cursor = 'pointer';
$axure.eventManager.click('u339', function(e) {

if (true) {

SetWidgetNotSelected('u335');
SetWidgetNotSelected('u337');
SetWidgetSelected('u339');
SetWidgetNotSelected('u341');
SetWidgetFormText('u331', 'Tool Man');

	SetPanelVisibility('u332','hidden','fade',100);

}
});
gv_vAlignTable['u600'] = 'center';gv_vAlignTable['u601'] = 'top';HookHover('u602', false);
gv_vAlignTable['u603'] = 'center';gv_vAlignTable['u605'] = 'center';gv_vAlignTable['u606'] = 'top';gv_vAlignTable['u607'] = 'top';
u608.style.cursor = 'pointer';
$axure.eventManager.click('u608', function(e) {

if (true) {

SetWidgetFormText('u608', '');

}
});

$axure.eventManager.keyup('u608', function(e) {

if (IsValueAlphaNumeric(GetWidgetText('u608'))) {

SetGlobalVariableValue('TagName', GetWidgetText('u608'));

}
});

$axure.eventManager.blur('u608', function(e) {

if (((GetWidgetVisibility('u611')) != (true)) && ((GetWidgetValueLength('u608')) != (''))) {

	SetPanelState('u611', 'pd0u611','fade','',50,'fade','',50);

}
else
if (((GetWidgetVisibility('u616')) != (true)) && ((GetWidgetValueLength('u608')) != (''))) {

	SetPanelState('u616', 'pd0u616','fade','',50,'fade','',50);

}
else
if (((GetWidgetVisibility('u621')) != (true)) && ((GetWidgetValueLength('u608')) != (''))) {

	SetPanelState('u621', 'pd0u621','fade','',50,'fade','',50);

}
});
gv_vAlignTable['u984'] = 'top';gv_vAlignTable['u986'] = 'top';gv_vAlignTable['u987'] = 'top';document.getElementById('u989_img').tabIndex = 0;
HookHover('u989', false);

u989.style.cursor = 'pointer';
$axure.eventManager.click('u989', function(e) {

if (true) {

	SetPanelVisibility('u991','hidden','none',500);

	SetPanelVisibility('u999','hidden','none',500);

}

if ((GetWidgetText('u985')) == ('')) {

	SetPanelVisibility('u991','','none',500);

}

if ((GetWidgetText('u988')) == ('')) {

	SetPanelVisibility('u999','','none',500);

}

if (((GetWidgetText('u985')) != ('')) && ((false) && ((GetWidgetText('u988')) != ('')))) {

	SetPanelState('u970', 'pd1u970','none','',500,'none','',500);

	ScrollToWidget('u1007', false,true,'none',500);

}

if (((GetWidgetText('u985')) != ('')) && ((false) && ((GetWidgetText('u988')) != ('')))) {
function waitu4bff5e2fe2184a4ab8c79e15434a62201() {

SetGlobalVariableValue('CommentText', GetWidgetText('u985'));

SetWidgetRichText('u976', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:16px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('CommentText')) + '</span></p>');

SetGlobalVariableValue('CommentText', GetWidgetText('u988'));

SetWidgetRichText('u973', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('CommentText')) + '</span></p>');

;

	SetPanelState('u970', 'pd2u970','none','',500,'none','',500);
}
setTimeout(waitu4bff5e2fe2184a4ab8c79e15434a62201, 1000);

}
});
gv_vAlignTable['u340'] = 'center';document.getElementById('u341_img').tabIndex = 0;
HookHover('u341', false);

u341.style.cursor = 'pointer';
$axure.eventManager.click('u341', function(e) {

if (true) {

SetWidgetNotSelected('u335');
SetWidgetNotSelected('u337');
SetWidgetNotSelected('u339');
SetWidgetSelected('u341');
SetWidgetFormText('u331', 'Tool Box');

	SetPanelVisibility('u332','hidden','fade',100);

}
});
gv_vAlignTable['u342'] = 'center';document.getElementById('u345_img').tabIndex = 0;
HookHover('u345', false);

u345.style.cursor = 'pointer';
$axure.eventManager.click('u345', function(e) {

if (true) {

SetWidgetSelected('u345');
SetWidgetNotSelected('u347');
SetWidgetNotSelected('u349');
SetWidgetNotSelected('u351');
SetWidgetFormText('u331', 'Cra');

	SetPanelVisibility('u332','hidden','fade',100);

}
});
gv_vAlignTable['u346'] = 'center';document.getElementById('u347_img').tabIndex = 0;
HookHover('u347', false);

u347.style.cursor = 'pointer';
$axure.eventManager.click('u347', function(e) {

if (true) {

SetWidgetNotSelected('u345');
SetWidgetSelected('u347');
SetWidgetNotSelected('u349');
SetWidgetNotSelected('u351');
SetWidgetFormText('u331', 'Craft');

	SetPanelVisibility('u332','hidden','fade',100);

}
});
gv_vAlignTable['u348'] = 'center';document.getElementById('u349_img').tabIndex = 0;
HookHover('u349', false);

u349.style.cursor = 'pointer';
$axure.eventManager.click('u349', function(e) {

if (true) {

SetWidgetNotSelected('u345');
SetWidgetNotSelected('u347');
SetWidgetSelected('u349');
SetWidgetNotSelected('u351');
SetWidgetFormText('u331', 'Crafts');

	SetPanelVisibility('u332','hidden','fade',100);

}
});
gv_vAlignTable['u799'] = 'center';gv_vAlignTable['u610'] = 'center';gv_vAlignTable['u613'] = 'center';
u614.style.cursor = 'pointer';
$axure.eventManager.click('u614', function(e) {

if (true) {

SetWidgetFormText('u608', GetWidgetText('u614'));

}
});
u615.tabIndex = 0;

u615.style.cursor = 'pointer';
$axure.eventManager.click('u615', function(e) {

if (((GetWidgetVisibility('u616')) == (false)) && ((GetWidgetVisibility('u621')) == (false))) {

	SetPanelVisibility('u611','hidden','none',500);

}
else
if (((GetWidgetVisibility('u616')) == (true)) && ((GetWidgetVisibility('u621')) == (false))) {

	MoveWidgetBy('u616', GetNum('-98'), GetNum('0'),'none',500);

	SetPanelVisibility('u611','hidden','none',500);

}
else
if (((GetWidgetVisibility('u616')) == (true)) && ((GetWidgetVisibility('u621')) == (true))) {

	MoveWidgetBy('u616', GetNum('-98'), GetNum('0'),'none',500);

	MoveWidgetBy('u621', GetNum('-196'), GetNum('0'),'none',500);

	SetPanelVisibility('u611','hidden','none',500);

}
else
if (((GetWidgetVisibility('u616')) == (false)) && ((GetWidgetVisibility('u621')) == (true))) {

	MoveWidgetBy('u621', GetNum('-196'), GetNum('0'),'none',500);

	SetPanelVisibility('u611','hidden','none',500);

}
});
gv_vAlignTable['u615'] = 'top';gv_vAlignTable['u618'] = 'center';
u619.style.cursor = 'pointer';
$axure.eventManager.click('u619', function(e) {

if (true) {

SetWidgetFormText('u608', GetWidgetText('u619'));

}
});
gv_vAlignTable['u995'] = 'center';gv_vAlignTable['u997'] = 'center';gv_vAlignTable['u998'] = 'top';gv_vAlignTable['u350'] = 'center';document.getElementById('u351_img').tabIndex = 0;
HookHover('u351', false);

u351.style.cursor = 'pointer';
$axure.eventManager.click('u351', function(e) {

if (true) {

SetWidgetNotSelected('u345');
SetWidgetNotSelected('u347');
SetWidgetNotSelected('u349');
SetWidgetSelected('u351');
SetWidgetFormText('u331', 'Craftsman');

	SetPanelVisibility('u332','hidden','fade',100);

}
});
gv_vAlignTable['u352'] = 'center';document.getElementById('u353_img').tabIndex = 0;

u353.style.cursor = 'pointer';
$axure.eventManager.click('u353', function(e) {

if (true) {

SetWidgetFormText('u331', '');

}
});
gv_vAlignTable['u354'] = 'center';gv_vAlignTable['u356'] = 'center';gv_vAlignTable['u358'] = 'center';document.getElementById('u359_img').tabIndex = 0;
HookHover('u359', false);

u359.style.cursor = 'pointer';
$axure.eventManager.click('u359', function(e) {

if (true) {

	MoveWidgetTo('u673', GetNum('160'), GetNum('70'),'swing',1000);

	MoveWidgetTo('u0', GetNum('-350'), GetNum('70'),'swing',1000);

}
});
u620.tabIndex = 0;

u620.style.cursor = 'pointer';
$axure.eventManager.click('u620', function(e) {

if (((GetWidgetVisibility('u611')) == (false)) && ((GetWidgetVisibility('u621')) == (false))) {

	MoveWidgetBy('u616', GetNum('-98'), GetNum('0'),'none',500);

}
else
if (((GetWidgetVisibility('u611')) == (true)) && ((GetWidgetVisibility('u621')) == (false))) {

	SetPanelVisibility('u616','hidden','none',500);

}
});
gv_vAlignTable['u620'] = 'top';gv_vAlignTable['u623'] = 'center';
u624.style.cursor = 'pointer';
$axure.eventManager.click('u624', function(e) {

if (true) {

SetWidgetFormText('u608', GetWidgetText('u624'));

}
});
u625.tabIndex = 0;

u625.style.cursor = 'pointer';
$axure.eventManager.click('u625', function(e) {

if (((GetWidgetVisibility('u611')) == (false)) && ((GetWidgetVisibility('u616')) == (false))) {

	SetPanelVisibility('u621','hidden','none',500);

}
else
if (((GetWidgetVisibility('u611')) == (false)) && ((GetWidgetVisibility('u616')) == (true))) {

	MoveWidgetBy('u621', GetNum('-98'), GetNum('0'),'none',500);

}
});
gv_vAlignTable['u625'] = 'top';
u626.style.cursor = 'pointer';
$axure.eventManager.click('u626', function(e) {

if (true) {

SetWidgetFormText('u626', '');

}
});

$axure.eventManager.keyup('u626', function(e) {

if (IsValueAlphaNumeric(GetWidgetText('u626'))) {

SetGlobalVariableValue('TagName', GetWidgetText('u626'));

}
});

$axure.eventManager.blur('u626', function(e) {

if (((GetWidgetVisibility('u629')) != (true)) && ((GetWidgetValueLength('u626')) != (''))) {

	SetPanelState('u629', 'pd0u629','fade','',50,'fade','',50);

}
else
if (((GetWidgetVisibility('u634')) != (true)) && ((GetWidgetValueLength('u626')) != (''))) {

	SetPanelState('u634', 'pd0u634','fade','',50,'fade','',50);

}
else
if (((GetWidgetVisibility('u639')) != (true)) && ((GetWidgetValueLength('u626')) != (''))) {

	SetPanelState('u639', 'pd0u639','fade','',50,'fade','',50);

}
});
gv_vAlignTable['u628'] = 'center';gv_vAlignTable['u360'] = 'center';gv_vAlignTable['u361'] = 'top';gv_vAlignTable['u362'] = 'top';gv_vAlignTable['u363'] = 'top';gv_vAlignTable['u364'] = 'top';gv_vAlignTable['u365'] = 'top';gv_vAlignTable['u366'] = 'top';gv_vAlignTable['u367'] = 'top';gv_vAlignTable['u368'] = 'top';gv_vAlignTable['u369'] = 'top';gv_vAlignTable['u631'] = 'center';
u632.style.cursor = 'pointer';
$axure.eventManager.click('u632', function(e) {

if (true) {

SetWidgetFormText('u626', GetWidgetText('u632'));

}
});
u633.tabIndex = 0;

u633.style.cursor = 'pointer';
$axure.eventManager.click('u633', function(e) {

if (((GetWidgetVisibility('u634')) == (false)) && ((GetWidgetVisibility('u639')) == (false))) {

	SetPanelVisibility('u629','hidden','none',500);

}
else
if (((GetWidgetVisibility('u634')) == (true)) && ((GetWidgetVisibility('u639')) == (false))) {

	MoveWidgetBy('u634', GetNum('-98'), GetNum('0'),'none',500);

	SetPanelVisibility('u629','hidden','none',500);

}
else
if (((GetWidgetVisibility('u634')) == (true)) && ((GetWidgetVisibility('u639')) == (true))) {

	MoveWidgetBy('u634', GetNum('-98'), GetNum('0'),'none',500);

	MoveWidgetBy('u639', GetNum('-196'), GetNum('0'),'none',500);

	SetPanelVisibility('u629','hidden','none',500);

}
else
if (((GetWidgetVisibility('u634')) == (false)) && ((GetWidgetVisibility('u639')) == (true))) {

	MoveWidgetBy('u639', GetNum('-196'), GetNum('0'),'none',500);

	SetPanelVisibility('u629','hidden','none',500);

}
});
gv_vAlignTable['u633'] = 'top';gv_vAlignTable['u636'] = 'center';
u637.style.cursor = 'pointer';
$axure.eventManager.click('u637', function(e) {

if (true) {

SetWidgetFormText('u626', GetWidgetText('u637'));

}
});
u638.tabIndex = 0;

u638.style.cursor = 'pointer';
$axure.eventManager.click('u638', function(e) {

if (((GetWidgetVisibility('u629')) == (false)) && ((GetWidgetVisibility('u639')) == (false))) {

	MoveWidgetBy('u634', GetNum('-98'), GetNum('0'),'none',500);

}
else
if (((GetWidgetVisibility('u629')) == (true)) && ((GetWidgetVisibility('u639')) == (false))) {

	SetPanelVisibility('u634','hidden','none',500);

}
});
gv_vAlignTable['u638'] = 'top';gv_vAlignTable['u1006'] = 'top';gv_vAlignTable['u1008'] = 'top';gv_vAlignTable['u1009'] = 'top';gv_vAlignTable['u901'] = 'center';HookHover('u838', false);
gv_vAlignTable['u903'] = 'center';document.getElementById('u904_img').tabIndex = 0;
HookHover('u904', false);

u904.style.cursor = 'pointer';
$axure.eventManager.click('u904', function(e) {

if (true) {

SetWidgetNotSelected('u898');
SetWidgetNotSelected('u900');
SetWidgetNotSelected('u902');
SetWidgetSelected('u904');
SetWidgetFormText('u884', 'Craftsman');

	SetPanelVisibility('u885','hidden','fade',100);

}
});
gv_vAlignTable['u370'] = 'top';gv_vAlignTable['u371'] = 'top';gv_vAlignTable['u372'] = 'top';gv_vAlignTable['u373'] = 'top';gv_vAlignTable['u374'] = 'top';gv_vAlignTable['u375'] = 'top';gv_vAlignTable['u376'] = 'top';gv_vAlignTable['u377'] = 'top';gv_vAlignTable['u378'] = 'top';gv_vAlignTable['u379'] = 'top';gv_vAlignTable['u641'] = 'center';
u642.style.cursor = 'pointer';
$axure.eventManager.click('u642', function(e) {

if (true) {

SetWidgetFormText('u626', GetWidgetText('u642'));

}
});
u643.tabIndex = 0;

u643.style.cursor = 'pointer';
$axure.eventManager.click('u643', function(e) {

if (((GetWidgetVisibility('u629')) == (false)) && ((GetWidgetVisibility('u634')) == (false))) {

	SetPanelVisibility('u639','hidden','none',500);

}
else
if (((GetWidgetVisibility('u629')) == (false)) && ((GetWidgetVisibility('u634')) == (true))) {

	MoveWidgetBy('u639', GetNum('-98'), GetNum('0'),'none',500);

}
});
gv_vAlignTable['u643'] = 'top';document.getElementById('u644_img').tabIndex = 0;
HookHover('u644', false);

u644.style.cursor = 'pointer';
$axure.eventManager.click('u644', function(e) {

if (true) {

	SetPanelState('u551', 'pd2u551','fade','',250,'fade','',250);

}
});
gv_vAlignTable['u645'] = 'center';document.getElementById('u646_img').tabIndex = 0;
HookHover('u646', false);

u646.style.cursor = 'pointer';
$axure.eventManager.click('u646', function(e) {

if (true) {

	SetPanelState('u551', 'pd2u551','fade','',250,'fade','',250);

	SetPanelVisibility('u1988','','fade',500);

	BringToFront("u1988");
function waitu9bd5d0a9079c482d909ab6c1398cee641() {

	SetPanelVisibility('u1988','hidden','fade',500);
}
setTimeout(waitu9bd5d0a9079c482d909ab6c1398cee641, 2000);

}
});
gv_vAlignTable['u647'] = 'center';gv_vAlignTable['u1017'] = 'top';gv_vAlignTable['u1018'] = 'top';document.getElementById('u910_img').tabIndex = 0;

u910.style.cursor = 'pointer';
$axure.eventManager.click('u910', function(e) {

if (true) {

	MoveWidgetTo('u673', GetNum('160'), GetNum('70'),'swing',1000);

	MoveWidgetTo('u0', GetNum('-350'), GetNum('70'),'swing',1000);

}
});
gv_vAlignTable['u911'] = 'center';gv_vAlignTable['u912'] = 'top';gv_vAlignTable['u914'] = 'center';gv_vAlignTable['u380'] = 'top';gv_vAlignTable['u381'] = 'top';gv_vAlignTable['u382'] = 'top';gv_vAlignTable['u383'] = 'top';gv_vAlignTable['u384'] = 'top';gv_vAlignTable['u385'] = 'top';gv_vAlignTable['u386'] = 'top';gv_vAlignTable['u387'] = 'top';gv_vAlignTable['u388'] = 'top';gv_vAlignTable['u389'] = 'top';gv_vAlignTable['u650'] = 'center';gv_vAlignTable['u651'] = 'top';
$axure.eventManager.focus('u654', function(e) {

if ((GetWidgetText('u653')) == ('')) {

SetWidgetFormText('u653', GetWidgetText('u654'));

SetWidgetFormText('u654', '');

}
});

$axure.eventManager.blur('u654', function(e) {

if ((GetWidgetText('u654')) == ('')) {

SetWidgetFormText('u654', GetWidgetText('u653'));

SetWidgetFormText('u653', '');

}
});
document.getElementById('u655_img').tabIndex = 0;
HookHover('u655', false);

u655.style.cursor = 'pointer';
$axure.eventManager.click('u655', function(e) {

if (true) {

	SetPanelState('u551', 'pd1u551','fade','',250,'fade','',250);

}
});
gv_vAlignTable['u656'] = 'center';gv_vAlignTable['u658'] = 'center';document.getElementById('u659_img').tabIndex = 0;
HookHover('u659', false);

u659.style.cursor = 'pointer';
$axure.eventManager.click('u659', function(e) {

if (true) {

	SetPanelState('u648', 'pd1u648','fade','',250,'fade','',250);

}
});

$axure.eventManager.mouseover('u1026', function(e) {
if (!IsTrueMouseOver('u1026',e)) return;
if (true) {

	SetPanelState('u1013', 'pd1u1013','fade','',250,'fade','',250);

}
});
gv_vAlignTable['u1027'] = 'center';gv_vAlignTable['u1028'] = 'top';gv_vAlignTable['u920'] = 'top';document.getElementById('u921_img').tabIndex = 0;
HookHover('u921', false);

u921.style.cursor = 'pointer';
$axure.eventManager.click('u921', function(e) {

if (true) {

SetGlobalVariableValue('CommentText', GetWidgetText('u943'));

SetWidgetFormText('u943', '@JaneDoe ' + (GetGlobalVariableValue('CommentText')) + '');

	ScrollToWidget('u962', false,true,'none',500);

}
});
gv_vAlignTable['u922'] = 'center';gv_vAlignTable['u923'] = 'top';gv_vAlignTable['u390'] = 'top';gv_vAlignTable['u391'] = 'top';gv_vAlignTable['u392'] = 'top';gv_vAlignTable['u393'] = 'top';gv_vAlignTable['u394'] = 'top';gv_vAlignTable['u395'] = 'top';gv_vAlignTable['u397'] = 'center';gv_vAlignTable['u398'] = 'top';gv_vAlignTable['u399'] = 'top';gv_vAlignTable['u660'] = 'center';HookHover('u661', false);
gv_vAlignTable['u662'] = 'center';gv_vAlignTable['u663'] = 'top';HookHover('u664', false);
gv_vAlignTable['u665'] = 'center';HookHover('u667', false);
gv_vAlignTable['u668'] = 'center';gv_vAlignTable['u1036'] = 'center';gv_vAlignTable['u930'] = 'center';gv_vAlignTable['u931'] = 'top';gv_vAlignTable['u932'] = 'top';gv_vAlignTable['u1301'] = 'center';gv_vAlignTable['u1304'] = 'top';gv_vAlignTable['u1306'] = 'top';gv_vAlignTable['u1308'] = 'top';document.getElementById('u1309_img').tabIndex = 0;
HookHover('u1309', false);

u1309.style.cursor = 'pointer';
$axure.eventManager.click('u1309', function(e) {

if ((GetPanelState('u1284')) == ('pd0u1284')) {

	SetPanelVisibility('u1312','hidden','none',500);

	SetPanelVisibility('u1320','hidden','none',500);

	SetPanelVisibility('u1328','hidden','none',500);

}

if ((GetWidgetText('u1303')) == ('')) {

	SetPanelVisibility('u1312','','none',500);

}

if ((GetWidgetText('u1305')) == ('')) {

	SetPanelVisibility('u1320','','none',500);

}

if ((GetWidgetText('u1307')) == ('')) {

	SetPanelVisibility('u1328','','none',500);

}
else
if (((GetWidgetText('u1303')) != ('')) && (((GetWidgetText('u1305')) != ('')) && ((GetWidgetText('u1307')) != ('')))) {

	SetPanelState('u1284', 'pd1u1284','none','',500,'none','',500);

	SetPanelVisibility('u1312','hidden','none',500);

	SetPanelVisibility('u1320','hidden','none',500);

	SetPanelVisibility('u1328','hidden','none',500);

}
});
gv_vAlignTable['u670'] = 'center';gv_vAlignTable['u672'] = 'center';gv_vAlignTable['u1041'] = 'center';gv_vAlignTable['u1043'] = 'center';gv_vAlignTable['u1045'] = 'top';u1046.tabIndex = 0;

u1046.style.cursor = 'pointer';
$axure.eventManager.click('u1046', function(e) {

if (true) {

SetWidgetFormText('u1058', '');

SetWidgetFormText('u1060', '');

SetWidgetFormText('u1056', '');

	SetPanelState('u1037', 'pd0u1037','none','',500,'none','',500);

	SetPanelVisibility('u1037','hidden','none',500);

	SetPanelVisibility('u1065','hidden','none',500);

	SetPanelVisibility('u1073','hidden','none',500);

	SetPanelVisibility('u1081','hidden','none',500);

}
});
gv_vAlignTable['u1046'] = 'top';gv_vAlignTable['u1048'] = 'center';gv_vAlignTable['u941'] = 'top';gv_vAlignTable['u942'] = 'top';gv_vAlignTable['u1310'] = 'center';u1311.tabIndex = 0;

u1311.style.cursor = 'pointer';
$axure.eventManager.click('u1311', function(e) {

if (true) {

SetWidgetFormText('u1305', '');

SetWidgetFormText('u1307', '');

SetWidgetFormText('u1303', '');

	SetPanelVisibility('u1284','hidden','none',500);

	SetPanelVisibility('u1312','hidden','none',500);

	SetPanelVisibility('u1320','hidden','none',500);

	SetPanelVisibility('u1328','hidden','none',500);

}
});
gv_vAlignTable['u1311'] = 'top';gv_vAlignTable['u1314'] = 'center';gv_vAlignTable['u1316'] = 'center';gv_vAlignTable['u1318'] = 'center';gv_vAlignTable['u1319'] = 'top';document.getElementById('u680_img').tabIndex = 0;
HookHover('u680', false);

u680.style.cursor = 'pointer';
$axure.eventManager.click('u680', function(e) {

if (true) {

	SetPanelState('u1752', 'pd0u1752','fade','',500,'fade','',500);

}
});
gv_vAlignTable['u681'] = 'center';gv_vAlignTable['u1050'] = 'center';gv_vAlignTable['u1052'] = 'center';gv_vAlignTable['u1054'] = 'center';gv_vAlignTable['u1057'] = 'top';gv_vAlignTable['u950'] = 'center';gv_vAlignTable['u952'] = 'center';gv_vAlignTable['u953'] = 'top';gv_vAlignTable['u1322'] = 'center';gv_vAlignTable['u1324'] = 'center';gv_vAlignTable['u1326'] = 'center';gv_vAlignTable['u1327'] = 'top';gv_vAlignTable['u2001'] = 'top';document.getElementById('u2002_img').tabIndex = 0;

u2002.style.cursor = 'pointer';
$axure.eventManager.click('u2002', function(e) {

if (true) {

	SetPanelState('u673', 'pd0u673','fade','',500,'fade','',500);

	MoveWidgetTo('u673', GetNum('160'), GetNum('70'),'swing',1000);

	MoveWidgetTo('u0', GetNum('-350'), GetNum('70'),'swing',1000);

}
});
gv_vAlignTable['u2003'] = 'center';HookHover('u690', false);
gv_vAlignTable['u691'] = 'center';gv_vAlignTable['u1059'] = 'top';gv_vAlignTable['u693'] = 'center';gv_vAlignTable['u1061'] = 'top';document.getElementById('u1062_img').tabIndex = 0;
HookHover('u1062', false);

u1062.style.cursor = 'pointer';
$axure.eventManager.click('u1062', function(e) {

if ((GetPanelState('u1037')) == ('pd0u1037')) {

	SetPanelVisibility('u1065','hidden','none',500);

	SetPanelVisibility('u1073','hidden','none',500);

	SetPanelVisibility('u1081','hidden','none',500);

}

if ((GetWidgetText('u1056')) == ('')) {

	SetPanelVisibility('u1065','','none',500);

}

if ((GetWidgetText('u1058')) == ('')) {

	SetPanelVisibility('u1073','','none',500);

}

if ((GetWidgetText('u1060')) == ('')) {

	SetPanelVisibility('u1081','','none',500);

}
else
if (((GetWidgetText('u1056')) != ('')) && (((GetWidgetText('u1058')) != ('')) && ((GetWidgetText('u1060')) != ('')))) {

	SetPanelState('u1037', 'pd1u1037','none','',500,'none','',500);

	SetPanelVisibility('u1065','hidden','none',500);

	SetPanelVisibility('u1073','hidden','none',500);

	SetPanelVisibility('u1081','hidden','none',500);

}
});
gv_vAlignTable['u1063'] = 'center';u1064.tabIndex = 0;

u1064.style.cursor = 'pointer';
$axure.eventManager.click('u1064', function(e) {

if (true) {

SetWidgetFormText('u1058', '');

SetWidgetFormText('u1060', '');

SetWidgetFormText('u1056', '');

	SetPanelVisibility('u1037','hidden','none',500);

	SetPanelVisibility('u1065','hidden','none',500);

	SetPanelVisibility('u1073','hidden','none',500);

	SetPanelVisibility('u1081','hidden','none',500);

}
});
gv_vAlignTable['u1064'] = 'top';gv_vAlignTable['u1067'] = 'center';gv_vAlignTable['u960'] = 'center';gv_vAlignTable['u961'] = 'top';gv_vAlignTable['u1330'] = 'center';gv_vAlignTable['u1332'] = 'center';gv_vAlignTable['u1334'] = 'center';gv_vAlignTable['u1335'] = 'top';u1336.tabIndex = 0;

u1336.style.cursor = 'pointer';
$axure.eventManager.click('u1336', function(e) {

if (true) {

	SetPanelState('u1284', 'pd0u1284','none','',500,'none','',500);

	SetPanelVisibility('u1284','','none',500);

}
});

$axure.eventManager.mouseover('u1336', function(e) {
if (!IsTrueMouseOver('u1336',e)) return;
if (true) {

}
});

$axure.eventManager.mouseout('u1336', function(e) {
if (!IsTrueMouseOut('u1336',e)) return;
if (true) {

}
});
document.getElementById('u1337_img').tabIndex = 0;

u1337.style.cursor = 'pointer';
$axure.eventManager.click('u1337', function(e) {

if (true) {

	SetPanelState('u1123', 'pd1u1123','fade','',250,'fade','',250);

}
});
gv_vAlignTable['u1338'] = 'center';document.getElementById('u1339_img').tabIndex = 0;

u1339.style.cursor = 'pointer';
$axure.eventManager.click('u1339', function(e) {

if (true) {

	SetPanelState('u1123', 'pd0u1123','fade','',250,'fade','',250);

}
});
gv_vAlignTable['u1600'] = 'center';HookHover('u1601', false);
gv_vAlignTable['u1602'] = 'center';HookHover('u1603', false);
gv_vAlignTable['u1604'] = 'center';HookHover('u1605', false);
gv_vAlignTable['u1606'] = 'center';HookHover('u1609', false);
gv_vAlignTable['u1075'] = 'center';gv_vAlignTable['u1077'] = 'center';gv_vAlignTable['u972'] = 'center';gv_vAlignTable['u973'] = 'top';gv_vAlignTable['u1340'] = 'center';document.getElementById('u1341_img').tabIndex = 0;

u1341.style.cursor = 'pointer';
$axure.eventManager.click('u1341', function(e) {

if (true) {

	MoveWidgetTo('u673', GetNum('160'), GetNum('70'),'swing',1000);

	MoveWidgetTo('u0', GetNum('-350'), GetNum('70'),'swing',1000);

}
});
gv_vAlignTable['u1342'] = 'center';gv_vAlignTable['u1344'] = 'center';gv_vAlignTable['u1346'] = 'center';gv_vAlignTable['u1348'] = 'center';u1974.tabIndex = 0;

u1974.style.cursor = 'pointer';
$axure.eventManager.click('u1974', function(e) {

if (true) {

	SetPanelState('u673', 'pd5u673','fade','',500,'fade','',500);

	MoveWidgetTo('u673', GetNum('160'), GetNum('70'),'swing',1000);

	MoveWidgetTo('u0', GetNum('-350'), GetNum('70'),'swing',1000);

}
});
gv_vAlignTable['u1974'] = 'top';gv_vAlignTable['u1610'] = 'center';HookHover('u1611', false);
gv_vAlignTable['u1612'] = 'center';HookHover('u1613', false);
gv_vAlignTable['u1614'] = 'center';HookHover('u1615', false);
gv_vAlignTable['u1616'] = 'center';HookHover('u1617', false);
gv_vAlignTable['u1618'] = 'center';HookHover('u1619', false);
gv_vAlignTable['u1087'] = 'center';gv_vAlignTable['u1088'] = 'top';gv_vAlignTable['u982'] = 'center';gv_vAlignTable['u983'] = 'top';HookHover('u1351', false);
gv_vAlignTable['u1352'] = 'center';HookHover('u1353', false);
gv_vAlignTable['u1354'] = 'center';HookHover('u1355', false);
gv_vAlignTable['u1356'] = 'center';HookHover('u1357', false);
gv_vAlignTable['u1358'] = 'center';HookHover('u1359', false);
gv_vAlignTable['u1085'] = 'center';gv_vAlignTable['u1620'] = 'center';HookHover('u1621', false);
gv_vAlignTable['u1622'] = 'center';HookHover('u1623', false);
gv_vAlignTable['u1624'] = 'center';HookHover('u1625', false);
gv_vAlignTable['u1626'] = 'center';HookHover('u1627', false);
gv_vAlignTable['u1628'] = 'center';HookHover('u1629', false);
u1096.tabIndex = 0;

u1096.style.cursor = 'pointer';
$axure.eventManager.click('u1096', function(e) {

if (true) {

	SetPanelState('u1092', 'pd0u1092','none','',500,'none','',500);

	SetPanelVisibility('u1103','','none',500);

SetWidgetNotSelected('u1093');
}
});

$axure.eventManager.mouseover('u1096', function(e) {
if (!IsTrueMouseOver('u1096',e)) return;
if (true) {

SetWidgetSelected('u1093');
}
});

$axure.eventManager.mouseout('u1096', function(e) {
if (!IsTrueMouseOut('u1096',e)) return;
if (true) {

SetWidgetNotSelected('u1093');
}
});

$axure.eventManager.mouseout('u1098', function(e) {
if (!IsTrueMouseOut('u1098',e)) return;
if (true) {

	SetPanelVisibility('u1097','hidden','none',500);

}
});
gv_vAlignTable['u990'] = 'center';gv_vAlignTable['u993'] = 'center';gv_vAlignTable['u1360'] = 'center';HookHover('u419', false);
HookHover('u1363', false);
gv_vAlignTable['u1364'] = 'center';HookHover('u1365', false);
gv_vAlignTable['u1366'] = 'center';HookHover('u1367', false);
gv_vAlignTable['u1368'] = 'center';HookHover('u1369', false);
gv_vAlignTable['u1091'] = 'top';gv_vAlignTable['u1630'] = 'center';HookHover('u1631', false);
gv_vAlignTable['u1632'] = 'center';HookHover('u1633', false);
gv_vAlignTable['u1634'] = 'center';gv_vAlignTable['u1636'] = 'center';gv_vAlignTable['u1638'] = 'center';gv_vAlignTable['u1072'] = 'top';gv_vAlignTable['u1900'] = 'center';gv_vAlignTable['u1902'] = 'top';gv_vAlignTable['u1903'] = 'top';document.getElementById('u1904_img').tabIndex = 0;

u1904.style.cursor = 'pointer';
$axure.eventManager.click('u1904', function(e) {

if (true) {

	SetPanelState('u673', 'pd4u673','fade','',500,'fade','',500);

}
});

$axure.eventManager.mouseout('u1904', function(e) {
if (!IsTrueMouseOut('u1904',e)) return;
if (true) {

	SetPanelState('u1898', 'pd0u1898','fade','',250,'fade','',250);

}
});
gv_vAlignTable['u1905'] = 'center';document.getElementById('u1907_img').tabIndex = 0;
HookHover('u1907', false);

u1907.style.cursor = 'pointer';
$axure.eventManager.click('u1907', function(e) {

if (true) {

	SetPanelState('u1906', 'pd0u1906','fade','',100,'fade','',100);

}
});
gv_vAlignTable['u1908'] = 'center';document.getElementById('u1909_img').tabIndex = 0;
HookHover('u1909', false);

u1909.style.cursor = 'pointer';
$axure.eventManager.click('u1909', function(e) {

if (true) {

	SetPanelState('u1906', 'pd1u1906','fade','',100,'fade','',100);

}
});
HookHover('u1377', false);
gv_vAlignTable['u1378'] = 'center';HookHover('u1379', false);
HookHover('u796', false);
gv_vAlignTable['u1640'] = 'center';gv_vAlignTable['u1643'] = 'center';gv_vAlignTable['u1645'] = 'top';gv_vAlignTable['u1646'] = 'top';document.getElementById('u1647_img').tabIndex = 0;

u1647.style.cursor = 'pointer';
$axure.eventManager.click('u1647', function(e) {

if (true) {

	SetPanelState('u673', 'pd4u673','fade','',500,'fade','',500);

}
});

$axure.eventManager.mouseout('u1647', function(e) {
if (!IsTrueMouseOut('u1647',e)) return;
if (true) {

	SetPanelState('u1641', 'pd0u1641','fade','',250,'fade','',250);

}
});
gv_vAlignTable['u1648'] = 'center';gv_vAlignTable['u1071'] = 'center';gv_vAlignTable['u1910'] = 'center';
$axure.eventManager.mouseover('u1911', function(e) {
if (!IsTrueMouseOver('u1911',e)) return;
if (true) {

	SetPanelState('u1898', 'pd1u1898','fade','',250,'fade','',250);

}
});
gv_vAlignTable['u1912'] = 'center';gv_vAlignTable['u1915'] = 'center';gv_vAlignTable['u1917'] = 'top';gv_vAlignTable['u1918'] = 'top';document.getElementById('u1919_img').tabIndex = 0;

u1919.style.cursor = 'pointer';
$axure.eventManager.click('u1919', function(e) {

if (true) {

	SetPanelState('u673', 'pd3u673','fade','',500,'fade','',500);

}
});

$axure.eventManager.mouseout('u1919', function(e) {
if (!IsTrueMouseOut('u1919',e)) return;
if (true) {

	SetPanelState('u1913', 'pd0u1913','fade','',250,'fade','',250);

}
});
HookHover('u1385', false);
gv_vAlignTable['u1386'] = 'center';HookHover('u1387', false);
gv_vAlignTable['u1388'] = 'center';document.getElementById('u1650_img').tabIndex = 0;
HookHover('u1650', false);

u1650.style.cursor = 'pointer';
$axure.eventManager.click('u1650', function(e) {

if (true) {

	SetPanelState('u1649', 'pd0u1649','fade','',100,'fade','',100);

}
});
gv_vAlignTable['u1651'] = 'center';document.getElementById('u1652_img').tabIndex = 0;
HookHover('u1652', false);

u1652.style.cursor = 'pointer';
$axure.eventManager.click('u1652', function(e) {

if (true) {

	SetPanelState('u1649', 'pd1u1649','fade','',100,'fade','',100);

}
});
gv_vAlignTable['u1653'] = 'center';
$axure.eventManager.mouseover('u1654', function(e) {
if (!IsTrueMouseOver('u1654',e)) return;
if (true) {

	SetPanelState('u1641', 'pd1u1641','fade','',250,'fade','',250);

}
});
gv_vAlignTable['u1655'] = 'center';gv_vAlignTable['u1658'] = 'center';gv_vAlignTable['u1920'] = 'center';document.getElementById('u1922_img').tabIndex = 0;
HookHover('u1922', false);

u1922.style.cursor = 'pointer';
$axure.eventManager.click('u1922', function(e) {

if (true) {

	SetPanelState('u1921', 'pd0u1921','fade','',100,'fade','',100);

}
});
gv_vAlignTable['u1923'] = 'center';document.getElementById('u1924_img').tabIndex = 0;
HookHover('u1924', false);

u1924.style.cursor = 'pointer';
$axure.eventManager.click('u1924', function(e) {

if (true) {

	SetPanelState('u1921', 'pd1u1921','fade','',100,'fade','',100);

}
});
gv_vAlignTable['u1925'] = 'center';
$axure.eventManager.mouseover('u1926', function(e) {
if (!IsTrueMouseOver('u1926',e)) return;
if (true) {

	SetPanelState('u1913', 'pd1u1913','fade','',250,'fade','',250);

}
});
gv_vAlignTable['u1927'] = 'center';HookHover('u1395', false);
gv_vAlignTable['u1396'] = 'center';HookHover('u1397', false);
gv_vAlignTable['u1398'] = 'center';HookHover('u1399', false);
gv_vAlignTable['u839'] = 'center';gv_vAlignTable['u1660'] = 'top';gv_vAlignTable['u1661'] = 'top';document.getElementById('u1662_img').tabIndex = 0;

u1662.style.cursor = 'pointer';
$axure.eventManager.click('u1662', function(e) {

if (true) {

	SetPanelState('u673', 'pd4u673','fade','',500,'fade','',500);

}
});

$axure.eventManager.mouseout('u1662', function(e) {
if (!IsTrueMouseOut('u1662',e)) return;
if (true) {

	SetPanelState('u1656', 'pd0u1656','fade','',250,'fade','',250);

}
});
gv_vAlignTable['u1663'] = 'center';document.getElementById('u1665_img').tabIndex = 0;
HookHover('u1665', false);

u1665.style.cursor = 'pointer';
$axure.eventManager.click('u1665', function(e) {

if (true) {

	SetPanelState('u1664', 'pd0u1664','fade','',100,'fade','',100);

}
});
gv_vAlignTable['u1666'] = 'center';document.getElementById('u1667_img').tabIndex = 0;
HookHover('u1667', false);

u1667.style.cursor = 'pointer';
$axure.eventManager.click('u1667', function(e) {

if (true) {

	SetPanelState('u1664', 'pd1u1664','fade','',100,'fade','',100);

}
});
gv_vAlignTable['u1668'] = 'center';
$axure.eventManager.mouseover('u1669', function(e) {
if (!IsTrueMouseOver('u1669',e)) return;
if (true) {

	SetPanelState('u1656', 'pd1u1656','fade','',250,'fade','',250);

}
});
gv_vAlignTable['u1930'] = 'center';gv_vAlignTable['u1932'] = 'top';gv_vAlignTable['u1933'] = 'top';document.getElementById('u1934_img').tabIndex = 0;

u1934.style.cursor = 'pointer';
$axure.eventManager.click('u1934', function(e) {

if (true) {

	SetPanelState('u673', 'pd3u673','fade','',500,'fade','',500);

}
});

$axure.eventManager.mouseout('u1934', function(e) {
if (!IsTrueMouseOut('u1934',e)) return;
if (true) {

	SetPanelState('u1928', 'pd0u1928','fade','',250,'fade','',250);

}
});
gv_vAlignTable['u1935'] = 'center';document.getElementById('u1937_img').tabIndex = 0;
HookHover('u1937', false);

u1937.style.cursor = 'pointer';
$axure.eventManager.click('u1937', function(e) {

if (true) {

	SetPanelState('u1936', 'pd0u1936','fade','',100,'fade','',100);

}
});
gv_vAlignTable['u1938'] = 'center';document.getElementById('u1939_img').tabIndex = 0;
HookHover('u1939', false);

u1939.style.cursor = 'pointer';
$axure.eventManager.click('u1939', function(e) {

if (true) {

	SetPanelState('u1936', 'pd1u1936','fade','',100,'fade','',100);

}
});
gv_vAlignTable['u1295'] = 'center';gv_vAlignTable['u1670'] = 'center';gv_vAlignTable['u1673'] = 'center';gv_vAlignTable['u1675'] = 'top';gv_vAlignTable['u1676'] = 'top';document.getElementById('u1677_img').tabIndex = 0;

u1677.style.cursor = 'pointer';
$axure.eventManager.click('u1677', function(e) {

if (true) {

	SetPanelState('u673', 'pd4u673','fade','',500,'fade','',500);

}
});

$axure.eventManager.mouseout('u1677', function(e) {
if (!IsTrueMouseOut('u1677',e)) return;
if (true) {

	SetPanelState('u1671', 'pd0u1671','fade','',250,'fade','',250);

}
});
gv_vAlignTable['u1678'] = 'center';gv_vAlignTable['u1940'] = 'center';
$axure.eventManager.mouseover('u1941', function(e) {
if (!IsTrueMouseOver('u1941',e)) return;
if (true) {

	SetPanelState('u1928', 'pd1u1928','fade','',250,'fade','',250);

}
});
gv_vAlignTable['u1942'] = 'center';gv_vAlignTable['u1944'] = 'center';
u1945.style.cursor = 'pointer';
$axure.eventManager.click('u1945', function(e) {

if (true) {

SetWidgetFormText('u1945', '');

SetWidgetNotSelected('u1959');
SetWidgetNotSelected('u1961');
SetWidgetNotSelected('u1963');
SetWidgetNotSelected('u1965');
SetWidgetNotSelected('u1949');
SetWidgetNotSelected('u1951');
SetWidgetNotSelected('u1953');
SetWidgetNotSelected('u1955');
}
});

$axure.eventManager.keyup('u1945', function(e) {

if (((GetWidgetText('u1945')) == ('c')) || (((GetWidgetText('u1945')) == ('C')) || (((GetWidgetText('u1945')) == ('craft')) || ((GetWidgetText('u1945')) == ('Craftsman'))))) {

	SetPanelState('u1946', 'pd0u1946','swing','up',50,'swing','down',50);

}
else
if (((GetWidgetText('u1945')) == ('T')) || ((GetWidgetText('u1945')) == ('t'))) {

	SetPanelState('u1946', 'pd1u1946','swing','up',50,'swing','down',50);

}
else
if (true) {

	SetPanelVisibility('u1946','hidden','fade',50);

SetWidgetNotSelected('u1959');
SetWidgetNotSelected('u1961');
SetWidgetNotSelected('u1963');
SetWidgetNotSelected('u1965');
SetWidgetNotSelected('u1949');
SetWidgetNotSelected('u1951');
SetWidgetNotSelected('u1953');
SetWidgetNotSelected('u1955');
}
});

$axure.eventManager.blur('u1945', function(e) {

if (true) {

SetWidgetFormText('u1945', 'Search...');

}
});
document.getElementById('u1949_img').tabIndex = 0;
HookHover('u1949', false);

u1949.style.cursor = 'pointer';
$axure.eventManager.click('u1949', function(e) {

if (true) {

SetWidgetSelected('u1949');
SetWidgetNotSelected('u1951');
SetWidgetNotSelected('u1953');
SetWidgetNotSelected('u1955');
SetWidgetFormText('u1945', 'Tool');

	SetPanelVisibility('u1946','hidden','fade',100);

}
});
gv_vAlignTable['u705'] = 'center';HookHover('u706', false);
gv_vAlignTable['u707'] = 'center';document.getElementById('u1680_img').tabIndex = 0;
HookHover('u1680', false);

u1680.style.cursor = 'pointer';
$axure.eventManager.click('u1680', function(e) {

if (true) {

	SetPanelState('u1679', 'pd0u1679','fade','',100,'fade','',100);

}
});
gv_vAlignTable['u1681'] = 'center';document.getElementById('u1682_img').tabIndex = 0;
HookHover('u1682', false);

u1682.style.cursor = 'pointer';
$axure.eventManager.click('u1682', function(e) {

if (true) {

	SetPanelState('u1679', 'pd1u1679','fade','',100,'fade','',100);

}
});
gv_vAlignTable['u1683'] = 'center';
$axure.eventManager.mouseover('u1684', function(e) {
if (!IsTrueMouseOver('u1684',e)) return;
if (true) {

	SetPanelState('u1671', 'pd1u1671','fade','',250,'fade','',250);

}
});
gv_vAlignTable['u1685'] = 'center';gv_vAlignTable['u1688'] = 'center';gv_vAlignTable['u1950'] = 'center';document.getElementById('u1951_img').tabIndex = 0;
HookHover('u1951', false);

u1951.style.cursor = 'pointer';
$axure.eventManager.click('u1951', function(e) {

if (true) {

SetWidgetNotSelected('u1949');
SetWidgetSelected('u1951');
SetWidgetNotSelected('u1953');
SetWidgetNotSelected('u1955');
SetWidgetFormText('u1945', 'Tool Belt');

	SetPanelVisibility('u1946','hidden','fade',100);

}
});
gv_vAlignTable['u1952'] = 'center';document.getElementById('u1953_img').tabIndex = 0;
HookHover('u1953', false);

u1953.style.cursor = 'pointer';
$axure.eventManager.click('u1953', function(e) {

if (true) {

SetWidgetNotSelected('u1949');
SetWidgetNotSelected('u1951');
SetWidgetSelected('u1953');
SetWidgetNotSelected('u1955');
SetWidgetFormText('u1945', 'Tool Man');

	SetPanelVisibility('u1946','hidden','fade',100);

}
});
gv_vAlignTable['u1954'] = 'center';document.getElementById('u1955_img').tabIndex = 0;
HookHover('u1955', false);

u1955.style.cursor = 'pointer';
$axure.eventManager.click('u1955', function(e) {

if (true) {

SetWidgetNotSelected('u1949');
SetWidgetNotSelected('u1951');
SetWidgetNotSelected('u1953');
SetWidgetSelected('u1955');
SetWidgetFormText('u1945', 'Tool Box');

	SetPanelVisibility('u1946','hidden','fade',100);

}
});
gv_vAlignTable['u1956'] = 'center';document.getElementById('u1959_img').tabIndex = 0;
HookHover('u1959', false);

u1959.style.cursor = 'pointer';
$axure.eventManager.click('u1959', function(e) {

if (true) {

SetWidgetSelected('u1959');
SetWidgetNotSelected('u1961');
SetWidgetNotSelected('u1963');
SetWidgetNotSelected('u1965');
SetWidgetFormText('u1945', 'Cra');

	SetPanelVisibility('u1946','hidden','fade',100);

}
});
gv_vAlignTable['u715'] = 'center';HookHover('u716', false);
gv_vAlignTable['u717'] = 'center';HookHover('u718', false);
gv_vAlignTable['u719'] = 'center';gv_vAlignTable['u1690'] = 'top';gv_vAlignTable['u1691'] = 'top';document.getElementById('u1692_img').tabIndex = 0;

u1692.style.cursor = 'pointer';
$axure.eventManager.click('u1692', function(e) {

if (true) {

	SetPanelState('u673', 'pd4u673','fade','',500,'fade','',500);

}
});

$axure.eventManager.mouseout('u1692', function(e) {
if (!IsTrueMouseOut('u1692',e)) return;
if (true) {

	SetPanelState('u1686', 'pd0u1686','fade','',250,'fade','',250);

}
});
gv_vAlignTable['u1693'] = 'center';document.getElementById('u1695_img').tabIndex = 0;
HookHover('u1695', false);

u1695.style.cursor = 'pointer';
$axure.eventManager.click('u1695', function(e) {

if (true) {

	SetPanelState('u1694', 'pd0u1694','fade','',100,'fade','',100);

}
});
gv_vAlignTable['u1696'] = 'center';document.getElementById('u1697_img').tabIndex = 0;
HookHover('u1697', false);

u1697.style.cursor = 'pointer';
$axure.eventManager.click('u1697', function(e) {

if (true) {

	SetPanelState('u1694', 'pd1u1694','fade','',100,'fade','',100);

}
});
gv_vAlignTable['u1698'] = 'center';
$axure.eventManager.mouseover('u1699', function(e) {
if (!IsTrueMouseOver('u1699',e)) return;
if (true) {

	SetPanelState('u1686', 'pd1u1686','fade','',250,'fade','',250);

}
});
gv_vAlignTable['u1190'] = 'top';gv_vAlignTable['u1960'] = 'center';document.getElementById('u1961_img').tabIndex = 0;
HookHover('u1961', false);

u1961.style.cursor = 'pointer';
$axure.eventManager.click('u1961', function(e) {

if (true) {

SetWidgetNotSelected('u1959');
SetWidgetSelected('u1961');
SetWidgetNotSelected('u1963');
SetWidgetNotSelected('u1965');
SetWidgetFormText('u1945', 'Craft');

	SetPanelVisibility('u1946','hidden','fade',100);

}
});
gv_vAlignTable['u1962'] = 'center';document.getElementById('u1963_img').tabIndex = 0;
HookHover('u1963', false);

u1963.style.cursor = 'pointer';
$axure.eventManager.click('u1963', function(e) {

if (true) {

SetWidgetNotSelected('u1959');
SetWidgetNotSelected('u1961');
SetWidgetSelected('u1963');
SetWidgetNotSelected('u1965');
SetWidgetFormText('u1945', 'Crafts');

	SetPanelVisibility('u1946','hidden','fade',100);

}
});
gv_vAlignTable['u1964'] = 'center';document.getElementById('u1965_img').tabIndex = 0;
HookHover('u1965', false);

u1965.style.cursor = 'pointer';
$axure.eventManager.click('u1965', function(e) {

if (true) {

SetWidgetNotSelected('u1959');
SetWidgetNotSelected('u1961');
SetWidgetNotSelected('u1963');
SetWidgetSelected('u1965');
SetWidgetFormText('u1945', 'Craftsman');

	SetPanelVisibility('u1946','hidden','fade',100);

}
});
gv_vAlignTable['u1966'] = 'center';document.getElementById('u1967_img').tabIndex = 0;

u1967.style.cursor = 'pointer';
$axure.eventManager.click('u1967', function(e) {

if (true) {

SetWidgetFormText('u1945', '');

}
});
HookHover('u720', false);
gv_vAlignTable['u721'] = 'center';gv_vAlignTable['u725'] = 'center';HookHover('u726', false);
gv_vAlignTable['u727'] = 'center';HookHover('u728', false);
gv_vAlignTable['u729'] = 'center';gv_vAlignTable['u1170'] = 'center';gv_vAlignTable['u1171'] = 'top';gv_vAlignTable['u1172'] = 'top';document.getElementById('u1173_img').tabIndex = 0;
HookHover('u1173', false);

u1173.style.cursor = 'pointer';
$axure.eventManager.click('u1173', function(e) {

if (true) {

SetGlobalVariableValue('CommentText', GetWidgetText('u1194'));

SetWidgetFormText('u1194', '@JohnDoe ' + (GetGlobalVariableValue('CommentText')) + '');

	ScrollToWidget('u1213', false,true,'none',500);

}
});
gv_vAlignTable['u1174'] = 'center';document.getElementById('u1975_img').tabIndex = 0;

u1975.style.cursor = 'pointer';
$axure.eventManager.click('u1975', function(e) {

if (true) {

	MoveWidgetTo('u673', GetNum('660'), GetNum('70'),'swing',1000);

	MoveWidgetTo('u0', GetNum('150'), GetNum('70'),'swing',1000);

	SetPanelState('u0', 'pd1u0','fade','',500,'fade','',500);

}
});
gv_vAlignTable['u1976'] = 'center';document.getElementById('u1977_img').tabIndex = 0;

u1977.style.cursor = 'pointer';
$axure.eventManager.click('u1977', function(e) {

if (true) {

	MoveWidgetTo('u673', GetNum('660'), GetNum('70'),'swing',1000);

	MoveWidgetTo('u0', GetNum('150'), GetNum('70'),'swing',1000);

	SetPanelState('u0', 'pd2u0','fade','',500,'fade','',500);

}
});
HookHover('u730', false);
document.getElementById('u1979_img').tabIndex = 0;

u1979.style.cursor = 'pointer';
$axure.eventManager.click('u1979', function(e) {

if (true) {

	MoveWidgetTo('u673', GetNum('660'), GetNum('70'),'swing',1000);

	MoveWidgetTo('u0', GetNum('150'), GetNum('70'),'swing',1000);

	SetPanelState('u0', 'pd3u0','fade','',500,'fade','',500);

}
});
gv_vAlignTable['u731'] = 'center';HookHover('u732', false);
gv_vAlignTable['u733'] = 'center';HookHover('u734', false);
gv_vAlignTable['u735'] = 'center';HookHover('u738', false);
gv_vAlignTable['u739'] = 'center';gv_vAlignTable['u1982'] = 'center';document.getElementById('u1983_img').tabIndex = 0;

u1983.style.cursor = 'pointer';
$axure.eventManager.click('u1983', function(e) {

if (true) {

	MoveWidgetTo('u673', GetNum('660'), GetNum('70'),'swing',1000);

	MoveWidgetTo('u0', GetNum('150'), GetNum('70'),'swing',1000);

	SetPanelState('u0', 'pd5u0','fade','',500,'fade','',500);

	SetPanelVisibility('u2004','hidden','fade',250);

}
});
gv_vAlignTable['u1984'] = 'center';document.getElementById('u1985_img').tabIndex = 0;

u1985.style.cursor = 'pointer';
$axure.eventManager.click('u1985', function(e) {

if (true) {

	MoveWidgetTo('u673', GetNum('660'), GetNum('70'),'swing',1000);

	MoveWidgetTo('u0', GetNum('150'), GetNum('70'),'swing',1000);

	SetPanelState('u0', 'pd6u0','fade','',500,'fade','',500);

	SetPanelVisibility('u1998','hidden','fade',250);

}
});
gv_vAlignTable['u1986'] = 'center';u1987.tabIndex = 0;

u1987.style.cursor = 'pointer';
$axure.eventManager.click('u1987', function(e) {

if (true) {

	SetPanelState('u673', 'pd2u673','fade','',500,'fade','',500);

	MoveWidgetTo('u673', GetNum('160'), GetNum('70'),'swing',1000);

	MoveWidgetTo('u0', GetNum('-350'), GetNum('70'),'swing',1000);

}
});

$axure.eventManager.mouseover('u1987', function(e) {
if (!IsTrueMouseOver('u1987',e)) return;
if (true) {

}
});
gv_vAlignTable['u1987'] = 'top';document.getElementById('u1180_img').tabIndex = 0;
HookHover('u1180', false);

u1180.style.cursor = 'pointer';
$axure.eventManager.click('u1180', function(e) {

if (true) {

;

;

	ScrollToWidget('u1213', false,true,'none',500);

}
});
gv_vAlignTable['u1181'] = 'center';gv_vAlignTable['u1182'] = 'top';HookHover('u742', false);
gv_vAlignTable['u743'] = 'center';HookHover('u744', false);
gv_vAlignTable['u745'] = 'center';HookHover('u746', false);
gv_vAlignTable['u747'] = 'center';HookHover('u748', false);
gv_vAlignTable['u749'] = 'center';gv_vAlignTable['u1990'] = 'center';document.getElementById('u1991_img').tabIndex = 0;

u1991.style.cursor = 'pointer';
$axure.eventManager.click('u1991', function(e) {

if (true) {

	SetPanelVisibility('u1988','hidden','fade',150);

}
});
gv_vAlignTable['u1992'] = 'center';gv_vAlignTable['u1993'] = 'top';gv_vAlignTable['u1995'] = 'center';u1997.tabIndex = 0;

u1997.style.cursor = 'pointer';
$axure.eventManager.click('u1997', function(e) {

if (true) {

	SetPanelState('u673', 'pd0u673','fade','',500,'fade','',500);

	MoveWidgetTo('u673', GetNum('160'), GetNum('70'),'swing',1000);

	MoveWidgetTo('u0', GetNum('-350'), GetNum('70'),'swing',1000);

}
});

$axure.eventManager.mouseover('u1997', function(e) {
if (!IsTrueMouseOver('u1997',e)) return;
if (true) {

}
});
gv_vAlignTable['u1997'] = 'top';HookHover('u752', false);
gv_vAlignTable['u753'] = 'center';HookHover('u754', false);
gv_vAlignTable['u755'] = 'center';HookHover('u756', false);
gv_vAlignTable['u757'] = 'center';HookHover('u758', false);
gv_vAlignTable['u759'] = 'center';HookHover('u766', false);
gv_vAlignTable['u767'] = 'center';HookHover('u768', false);
gv_vAlignTable['u769'] = 'center';gv_vAlignTable['u45'] = 'center';HookHover('u100', false);
gv_vAlignTable['u101'] = 'center';HookHover('u102', false);
gv_vAlignTable['u103'] = 'center';HookHover('u104', false);
gv_vAlignTable['u105'] = 'center';gv_vAlignTable['u106'] = 'top';gv_vAlignTable['u107'] = 'top';gv_vAlignTable['u108'] = 'top';gv_vAlignTable['u109'] = 'top';gv_vAlignTable['u1490'] = 'center';gv_vAlignTable['u775'] = 'center';HookHover('u778', false);
gv_vAlignTable['u779'] = 'center';gv_vAlignTable['u111'] = 'center';document.getElementById('u112_img').tabIndex = 0;
HookHover('u112', false);

u112.style.cursor = 'pointer';
$axure.eventManager.click('u112', function(e) {

if (true) {

	MoveWidgetTo('u673', GetNum('160'), GetNum('70'),'swing',1000);

	MoveWidgetTo('u0', GetNum('-350'), GetNum('70'),'swing',1000);

}
});
gv_vAlignTable['u113'] = 'center';gv_vAlignTable['u114'] = 'top';gv_vAlignTable['u115'] = 'top';gv_vAlignTable['u116'] = 'top';gv_vAlignTable['u117'] = 'top';gv_vAlignTable['u118'] = 'top';gv_vAlignTable['u119'] = 'top';gv_vAlignTable['u815'] = 'center';HookHover('u784', false);
gv_vAlignTable['u785'] = 'center';HookHover('u786', false);
gv_vAlignTable['u787'] = 'center';HookHover('u788', false);
gv_vAlignTable['u789'] = 'center';gv_vAlignTable['u120'] = 'top';gv_vAlignTable['u121'] = 'top';gv_vAlignTable['u122'] = 'top';gv_vAlignTable['u123'] = 'top';gv_vAlignTable['u124'] = 'top';gv_vAlignTable['u125'] = 'top';gv_vAlignTable['u126'] = 'top';gv_vAlignTable['u127'] = 'top';gv_vAlignTable['u128'] = 'top';gv_vAlignTable['u129'] = 'top';HookHover('u794', false);
gv_vAlignTable['u825'] = 'center';HookHover('u826', false);
gv_vAlignTable['u797'] = 'center';HookHover('u798', false);
gv_vAlignTable['u130'] = 'top';gv_vAlignTable['u131'] = 'top';gv_vAlignTable['u132'] = 'top';gv_vAlignTable['u133'] = 'top';gv_vAlignTable['u134'] = 'top';gv_vAlignTable['u135'] = 'top';gv_vAlignTable['u136'] = 'top';gv_vAlignTable['u137'] = 'top';gv_vAlignTable['u138'] = 'top';gv_vAlignTable['u139'] = 'top';HookHover('u401', false);
gv_vAlignTable['u402'] = 'center';HookHover('u403', false);
gv_vAlignTable['u404'] = 'center';gv_vAlignTable['u407'] = 'center';gv_vAlignTable['u408'] = 'top';gv_vAlignTable['u409'] = 'top';gv_vAlignTable['u831'] = 'center';gv_vAlignTable['u140'] = 'top';gv_vAlignTable['u141'] = 'top';gv_vAlignTable['u142'] = 'top';gv_vAlignTable['u143'] = 'top';gv_vAlignTable['u144'] = 'top';gv_vAlignTable['u145'] = 'top';gv_vAlignTable['u146'] = 'top';gv_vAlignTable['u147'] = 'top';gv_vAlignTable['u148'] = 'top';HookHover('u410', false);
gv_vAlignTable['u411'] = 'center';HookHover('u412', false);
gv_vAlignTable['u413'] = 'center';gv_vAlignTable['u416'] = 'center';gv_vAlignTable['u417'] = 'top';gv_vAlignTable['u418'] = 'top';gv_vAlignTable['u510'] = 'center';gv_vAlignTable['u150'] = 'center';gv_vAlignTable['u152'] = 'center';gv_vAlignTable['u154'] = 'center';
u155.style.cursor = 'pointer';
$axure.eventManager.click('u155', function(e) {

if (true) {

SetWidgetFormText('u155', '');

SetWidgetNotSelected('u169');
SetWidgetNotSelected('u171');
SetWidgetNotSelected('u173');
SetWidgetNotSelected('u175');
SetWidgetNotSelected('u159');
SetWidgetNotSelected('u161');
SetWidgetNotSelected('u163');
SetWidgetNotSelected('u165');
}
});

$axure.eventManager.keyup('u155', function(e) {

if (((GetWidgetText('u155')) == ('c')) || (((GetWidgetText('u155')) == ('C')) || (((GetWidgetText('u155')) == ('craft')) || ((GetWidgetText('u155')) == ('Craftsman'))))) {

	SetPanelState('u156', 'pd0u156','swing','up',50,'swing','down',50);

}
else
if (((GetWidgetText('u155')) == ('T')) || ((GetWidgetText('u155')) == ('t'))) {

	SetPanelState('u156', 'pd1u156','swing','up',50,'swing','down',50);

}
else
if (true) {

	SetPanelVisibility('u156','hidden','fade',50);

SetWidgetNotSelected('u169');
SetWidgetNotSelected('u171');
SetWidgetNotSelected('u173');
SetWidgetNotSelected('u175');
SetWidgetNotSelected('u159');
SetWidgetNotSelected('u161');
SetWidgetNotSelected('u163');
SetWidgetNotSelected('u165');
}
});

$axure.eventManager.blur('u155', function(e) {

if (true) {

SetWidgetFormText('u155', 'Search...');

}
});
document.getElementById('u159_img').tabIndex = 0;
HookHover('u159', false);

u159.style.cursor = 'pointer';
$axure.eventManager.click('u159', function(e) {

if (true) {

SetWidgetSelected('u159');
SetWidgetNotSelected('u161');
SetWidgetNotSelected('u163');
SetWidgetNotSelected('u165');
SetWidgetFormText('u155', 'Tool');

	SetPanelVisibility('u156','hidden','fade',100);

}
});
gv_vAlignTable['u420'] = 'center';HookHover('u421', false);
gv_vAlignTable['u422'] = 'center';gv_vAlignTable['u425'] = 'center';gv_vAlignTable['u426'] = 'top';gv_vAlignTable['u427'] = 'top';HookHover('u428', false);
gv_vAlignTable['u429'] = 'center';gv_vAlignTable['u160'] = 'center';document.getElementById('u161_img').tabIndex = 0;
HookHover('u161', false);

u161.style.cursor = 'pointer';
$axure.eventManager.click('u161', function(e) {

if (true) {

SetWidgetNotSelected('u159');
SetWidgetSelected('u161');
SetWidgetNotSelected('u163');
SetWidgetNotSelected('u165');
SetWidgetFormText('u155', 'Tool Belt');

	SetPanelVisibility('u156','hidden','fade',100);

}
});
gv_vAlignTable['u162'] = 'center';document.getElementById('u163_img').tabIndex = 0;
HookHover('u163', false);

u163.style.cursor = 'pointer';
$axure.eventManager.click('u163', function(e) {

if (true) {

SetWidgetNotSelected('u159');
SetWidgetNotSelected('u161');
SetWidgetSelected('u163');
SetWidgetNotSelected('u165');
SetWidgetFormText('u155', 'Tool Man');

	SetPanelVisibility('u156','hidden','fade',100);

}
});
gv_vAlignTable['u164'] = 'center';document.getElementById('u165_img').tabIndex = 0;
HookHover('u165', false);

u165.style.cursor = 'pointer';
$axure.eventManager.click('u165', function(e) {

if (true) {

SetWidgetNotSelected('u159');
SetWidgetNotSelected('u161');
SetWidgetNotSelected('u163');
SetWidgetSelected('u165');
SetWidgetFormText('u155', 'Tool Box');

	SetPanelVisibility('u156','hidden','fade',100);

}
});
gv_vAlignTable['u166'] = 'center';document.getElementById('u169_img').tabIndex = 0;
HookHover('u169', false);

u169.style.cursor = 'pointer';
$axure.eventManager.click('u169', function(e) {

if (true) {

SetWidgetSelected('u169');
SetWidgetNotSelected('u171');
SetWidgetNotSelected('u173');
SetWidgetNotSelected('u175');
SetWidgetFormText('u155', 'Cra');

	SetPanelVisibility('u156','hidden','fade',100);

}
});
HookHover('u430', false);
gv_vAlignTable['u431'] = 'center';gv_vAlignTable['u434'] = 'center';gv_vAlignTable['u435'] = 'top';gv_vAlignTable['u436'] = 'top';HookHover('u437', false);
gv_vAlignTable['u438'] = 'center';HookHover('u439', false);
HookHover('u700', false);
gv_vAlignTable['u701'] = 'center';HookHover('u702', false);
gv_vAlignTable['u703'] = 'center';HookHover('u704', false);
gv_vAlignTable['u170'] = 'center';document.getElementById('u171_img').tabIndex = 0;
HookHover('u171', false);

u171.style.cursor = 'pointer';
$axure.eventManager.click('u171', function(e) {

if (true) {

SetWidgetNotSelected('u169');
SetWidgetSelected('u171');
SetWidgetNotSelected('u173');
SetWidgetNotSelected('u175');
SetWidgetFormText('u155', 'Craft');

	SetPanelVisibility('u156','hidden','fade',100);

}
});
gv_vAlignTable['u172'] = 'center';document.getElementById('u173_img').tabIndex = 0;
HookHover('u173', false);

u173.style.cursor = 'pointer';
$axure.eventManager.click('u173', function(e) {

if (true) {

SetWidgetNotSelected('u169');
SetWidgetNotSelected('u171');
SetWidgetSelected('u173');
SetWidgetNotSelected('u175');
SetWidgetFormText('u155', 'Crafts');

	SetPanelVisibility('u156','hidden','fade',100);

}
});
gv_vAlignTable['u174'] = 'center';document.getElementById('u175_img').tabIndex = 0;
HookHover('u175', false);

u175.style.cursor = 'pointer';
$axure.eventManager.click('u175', function(e) {

if (true) {

SetWidgetNotSelected('u169');
SetWidgetNotSelected('u171');
SetWidgetNotSelected('u173');
SetWidgetSelected('u175');
SetWidgetFormText('u155', 'Craftsman');

	SetPanelVisibility('u156','hidden','fade',100);

}
});
gv_vAlignTable['u176'] = 'center';document.getElementById('u177_img').tabIndex = 0;

u177.style.cursor = 'pointer';
$axure.eventManager.click('u177', function(e) {

if (true) {

SetWidgetFormText('u155', '');

}
});
gv_vAlignTable['u178'] = 'center';gv_vAlignTable['u440'] = 'center';gv_vAlignTable['u443'] = 'center';gv_vAlignTable['u444'] = 'top';gv_vAlignTable['u445'] = 'top';HookHover('u446', false);
gv_vAlignTable['u447'] = 'center';HookHover('u448', false);
gv_vAlignTable['u449'] = 'center';HookHover('u710', false);
gv_vAlignTable['u711'] = 'center';HookHover('u712', false);
gv_vAlignTable['u713'] = 'center';HookHover('u714', false);
gv_vAlignTable['u180'] = 'center';gv_vAlignTable['u182'] = 'center';gv_vAlignTable['u183'] = 'top';gv_vAlignTable['u184'] = 'top';HookHover('u185', false);
gv_vAlignTable['u186'] = 'center';gv_vAlignTable['u187'] = 'top';gv_vAlignTable['u188'] = 'top';gv_vAlignTable['u452'] = 'center';gv_vAlignTable['u453'] = 'top';gv_vAlignTable['u454'] = 'top';HookHover('u455', false);
gv_vAlignTable['u456'] = 'center';HookHover('u457', false);
gv_vAlignTable['u458'] = 'center';gv_vAlignTable['u1001'] = 'center';gv_vAlignTable['u1003'] = 'center';gv_vAlignTable['u1005'] = 'center';HookHover('u724', false);
gv_vAlignTable['u191'] = 'center';gv_vAlignTable['u192'] = 'top';gv_vAlignTable['u193'] = 'top';HookHover('u194', false);
gv_vAlignTable['u195'] = 'center';gv_vAlignTable['u196'] = 'top';gv_vAlignTable['u197'] = 'top';gv_vAlignTable['u461'] = 'center';
u462.style.cursor = 'pointer';
$axure.eventManager.click('u462', function(e) {

if (true) {

SetWidgetFormText('u462', '');

SetWidgetNotSelected('u476');
SetWidgetNotSelected('u478');
SetWidgetNotSelected('u480');
SetWidgetNotSelected('u482');
SetWidgetNotSelected('u466');
SetWidgetNotSelected('u468');
SetWidgetNotSelected('u470');
SetWidgetNotSelected('u472');
}
});

$axure.eventManager.keyup('u462', function(e) {

if (((GetWidgetText('u462')) == ('c')) || (((GetWidgetText('u462')) == ('C')) || (((GetWidgetText('u462')) == ('craft')) || ((GetWidgetText('u462')) == ('Craftsman'))))) {

	SetPanelState('u463', 'pd0u463','swing','up',50,'swing','down',50);

}
else
if (((GetWidgetText('u462')) == ('T')) || ((GetWidgetText('u462')) == ('t'))) {

	SetPanelState('u463', 'pd1u463','swing','up',50,'swing','down',50);

}
else
if (true) {

	SetPanelVisibility('u463','hidden','fade',50);

SetWidgetNotSelected('u476');
SetWidgetNotSelected('u478');
SetWidgetNotSelected('u480');
SetWidgetNotSelected('u482');
SetWidgetNotSelected('u466');
SetWidgetNotSelected('u468');
SetWidgetNotSelected('u470');
SetWidgetNotSelected('u472');
}
});

$axure.eventManager.blur('u462', function(e) {

if (true) {

SetWidgetFormText('u462', 'Search...');

}
});
document.getElementById('u466_img').tabIndex = 0;
HookHover('u466', false);

u466.style.cursor = 'pointer';
$axure.eventManager.click('u466', function(e) {

if (true) {

SetWidgetSelected('u466');
SetWidgetNotSelected('u468');
SetWidgetNotSelected('u470');
SetWidgetNotSelected('u472');
SetWidgetFormText('u462', 'Tool');

	SetPanelVisibility('u463','hidden','fade',100);

}
});
gv_vAlignTable['u467'] = 'center';document.getElementById('u468_img').tabIndex = 0;
HookHover('u468', false);

u468.style.cursor = 'pointer';
$axure.eventManager.click('u468', function(e) {

if (true) {

SetWidgetNotSelected('u466');
SetWidgetSelected('u468');
SetWidgetNotSelected('u470');
SetWidgetNotSelected('u472');
SetWidgetFormText('u462', 'Tool Belt');

	SetPanelVisibility('u463','hidden','fade',100);

}
});
gv_vAlignTable['u469'] = 'center';gv_vAlignTable['u1010'] = 'top';gv_vAlignTable['u1015'] = 'center';gv_vAlignTable['u1101'] = 'top';u1102.tabIndex = 0;

u1102.style.cursor = 'pointer';
$axure.eventManager.click('u1102', function(e) {

if (true) {

	SetPanelState('u1092', 'pd1u1092','none','',500,'none','',500);

	SetPanelVisibility('u1097','','none',500);

SetWidgetNotSelected('u1099');
}
});

$axure.eventManager.mouseover('u1102', function(e) {
if (!IsTrueMouseOver('u1102',e)) return;
if (true) {

SetWidgetSelected('u1099');
}
});

$axure.eventManager.mouseout('u1102', function(e) {
if (!IsTrueMouseOut('u1102',e)) return;
if (true) {

SetWidgetNotSelected('u1099');
}
});
document.getElementById('u1019_img').tabIndex = 0;

u1019.style.cursor = 'pointer';
$axure.eventManager.click('u1019', function(e) {

if (true) {

	SetPanelState('u673', 'pd3u673','fade','',500,'fade','',500);

}
});

$axure.eventManager.mouseout('u1019', function(e) {
if (!IsTrueMouseOut('u1019',e)) return;
if (true) {

	SetPanelState('u1013', 'pd0u1013','fade','',250,'fade','',250);

}
});
document.getElementById('u1106_img').tabIndex = 0;
HookHover('u1106', false);

u1106.style.cursor = 'pointer';
$axure.eventManager.click('u1106', function(e) {

if (true) {

	SetPanelState('u1105', 'pd0u1105','fade','',100,'fade','',100);

}
});
gv_vAlignTable['u1107'] = 'center';document.getElementById('u1108_img').tabIndex = 0;
HookHover('u1108', false);

u1108.style.cursor = 'pointer';
$axure.eventManager.click('u1108', function(e) {

if (true) {

	SetPanelState('u1105', 'pd1u1105','fade','',100,'fade','',100);

}
});
gv_vAlignTable['u1109'] = 'center';document.getElementById('u470_img').tabIndex = 0;
HookHover('u470', false);

u470.style.cursor = 'pointer';
$axure.eventManager.click('u470', function(e) {

if (true) {

SetWidgetNotSelected('u466');
SetWidgetNotSelected('u468');
SetWidgetSelected('u470');
SetWidgetNotSelected('u472');
SetWidgetFormText('u462', 'Tool Man');

	SetPanelVisibility('u463','hidden','fade',100);

}
});
gv_vAlignTable['u471'] = 'center';document.getElementById('u472_img').tabIndex = 0;
HookHover('u472', false);

u472.style.cursor = 'pointer';
$axure.eventManager.click('u472', function(e) {

if (true) {

SetWidgetNotSelected('u466');
SetWidgetNotSelected('u468');
SetWidgetNotSelected('u470');
SetWidgetSelected('u472');
SetWidgetFormText('u462', 'Tool Box');

	SetPanelVisibility('u463','hidden','fade',100);

}
});
gv_vAlignTable['u473'] = 'center';document.getElementById('u476_img').tabIndex = 0;
HookHover('u476', false);

u476.style.cursor = 'pointer';
$axure.eventManager.click('u476', function(e) {

if (true) {

SetWidgetSelected('u476');
SetWidgetNotSelected('u478');
SetWidgetNotSelected('u480');
SetWidgetNotSelected('u482');
SetWidgetFormText('u462', 'Cra');

	SetPanelVisibility('u463','hidden','fade',100);

}
});
gv_vAlignTable['u477'] = 'center';document.getElementById('u478_img').tabIndex = 0;
HookHover('u478', false);

u478.style.cursor = 'pointer';
$axure.eventManager.click('u478', function(e) {

if (true) {

SetWidgetNotSelected('u476');
SetWidgetSelected('u478');
SetWidgetNotSelected('u480');
SetWidgetNotSelected('u482');
SetWidgetFormText('u462', 'Craft');

	SetPanelVisibility('u463','hidden','fade',100);

}
});
gv_vAlignTable['u479'] = 'center';gv_vAlignTable['u1970'] = 'center';document.getElementById('u1971_img').tabIndex = 0;

u1971.style.cursor = 'pointer';
$axure.eventManager.click('u1971', function(e) {

if (true) {

	MoveWidgetTo('u673', GetNum('660'), GetNum('70'),'swing',1000);

	MoveWidgetTo('u0', GetNum('150'), GetNum('70'),'swing',1000);

	SetPanelState('u0', 'pd0u0','fade','',250,'fade','',250);

	SetPanelState('u551', 'pd0u551','none','',500,'none','',500);

}
});
gv_vAlignTable['u1020'] = 'center';document.getElementById('u1022_img').tabIndex = 0;
HookHover('u1022', false);

u1022.style.cursor = 'pointer';
$axure.eventManager.click('u1022', function(e) {

if (true) {

	SetPanelState('u1021', 'pd0u1021','fade','',100,'fade','',100);

}
});
gv_vAlignTable['u1023'] = 'center';document.getElementById('u1024_img').tabIndex = 0;
HookHover('u1024', false);

u1024.style.cursor = 'pointer';
$axure.eventManager.click('u1024', function(e) {

if (true) {

	SetPanelState('u1021', 'pd1u1021','fade','',100,'fade','',100);

}
});
gv_vAlignTable['u1025'] = 'center';document.getElementById('u1112_img').tabIndex = 0;

u1112.style.cursor = 'pointer';
$axure.eventManager.click('u1112', function(e) {

if (true) {

	MoveWidgetTo('u673', GetNum('160'), GetNum('70'),'swing',1000);

	MoveWidgetTo('u0', GetNum('-350'), GetNum('70'),'swing',1000);

}
});
gv_vAlignTable['u1113'] = 'center';gv_vAlignTable['u1114'] = 'top';gv_vAlignTable['u1115'] = 'top';gv_vAlignTable['u1117'] = 'center';gv_vAlignTable['u1118'] = 'top';gv_vAlignTable['u1029'] = 'top';document.getElementById('u480_img').tabIndex = 0;
HookHover('u480', false);

u480.style.cursor = 'pointer';
$axure.eventManager.click('u480', function(e) {

if (true) {

SetWidgetNotSelected('u476');
SetWidgetNotSelected('u478');
SetWidgetSelected('u480');
SetWidgetNotSelected('u482');
SetWidgetFormText('u462', 'Crafts');

	SetPanelVisibility('u463','hidden','fade',100);

}
});
gv_vAlignTable['u481'] = 'center';document.getElementById('u482_img').tabIndex = 0;
HookHover('u482', false);

u482.style.cursor = 'pointer';
$axure.eventManager.click('u482', function(e) {

if (true) {

SetWidgetNotSelected('u476');
SetWidgetNotSelected('u478');
SetWidgetNotSelected('u480');
SetWidgetSelected('u482');
SetWidgetFormText('u462', 'Craftsman');

	SetPanelVisibility('u463','hidden','fade',100);

}
});
gv_vAlignTable['u483'] = 'center';document.getElementById('u484_img').tabIndex = 0;

u484.style.cursor = 'pointer';
$axure.eventManager.click('u484', function(e) {

if (true) {

SetWidgetFormText('u462', '');

}
});
gv_vAlignTable['u485'] = 'center';gv_vAlignTable['u487'] = 'center';gv_vAlignTable['u489'] = 'center';gv_vAlignTable['u1030'] = 'top';HookHover('u1031', false);
gv_vAlignTable['u1032'] = 'center';gv_vAlignTable['u1120'] = 'center';document.getElementById('u1121_img').tabIndex = 0;

u1121.style.cursor = 'pointer';
$axure.eventManager.click('u1121', function(e) {

if (true) {

	SetPanelState('u1123', 'pd2u1123','fade','',250,'fade','',250);

}
});
gv_vAlignTable['u1122'] = 'center';gv_vAlignTable['u1125'] = 'center';gv_vAlignTable['u1126'] = 'top';document.getElementById('u1127_img').tabIndex = 0;
HookHover('u1127', false);

u1127.style.cursor = 'pointer';
$axure.eventManager.click('u1127', function(e) {

if (true) {

SetGlobalVariableValue('CommentText', GetWidgetText('u1149'));

SetWidgetFormText('u1149', '@JaneDoe ' + (GetGlobalVariableValue('CommentText')) + '');

	ScrollToWidget('u1168', false,true,'none',500);

}
});
gv_vAlignTable['u1128'] = 'center';gv_vAlignTable['u1129'] = 'top';gv_vAlignTable['u1039'] = 'center';document.getElementById('u490_img').tabIndex = 0;
HookHover('u490', false);

u490.style.cursor = 'pointer';
$axure.eventManager.click('u490', function(e) {

if (true) {

	MoveWidgetTo('u673', GetNum('160'), GetNum('70'),'swing',1000);

	MoveWidgetTo('u0', GetNum('-350'), GetNum('70'),'swing',1000);

}
});
gv_vAlignTable['u491'] = 'center';gv_vAlignTable['u493'] = 'center';gv_vAlignTable['u494'] = 'top';gv_vAlignTable['u495'] = 'top';gv_vAlignTable['u496'] = 'top';gv_vAlignTable['u498'] = 'center';HookHover('u499', false);
HookHover('u760', false);
gv_vAlignTable['u761'] = 'center';HookHover('u762', false);
gv_vAlignTable['u763'] = 'center';gv_vAlignTable['u1133'] = 'center';gv_vAlignTable['u1134'] = 'top';document.getElementById('u1135_img').tabIndex = 0;
HookHover('u1135', false);

u1135.style.cursor = 'pointer';
$axure.eventManager.click('u1135', function(e) {

if (true) {

;

;

	ScrollToWidget('u1168', false,true,'none',500);

}
});
gv_vAlignTable['u1136'] = 'center';gv_vAlignTable['u1137'] = 'top';gv_vAlignTable['u1138'] = 'top';gv_vAlignTable['u1972'] = 'center';gv_vAlignTable['u1400'] = 'center';HookHover('u1401', false);
gv_vAlignTable['u1402'] = 'center';HookHover('u1405', false);
gv_vAlignTable['u1406'] = 'center';HookHover('u1407', false);
gv_vAlignTable['u1408'] = 'center';HookHover('u1409', false);
HookHover('u770', false);
gv_vAlignTable['u771'] = 'center';HookHover('u772', false);
gv_vAlignTable['u773'] = 'center';gv_vAlignTable['u1140'] = 'center';gv_vAlignTable['u1143'] = 'center';gv_vAlignTable['u1144'] = 'top';gv_vAlignTable['u1145'] = 'top';gv_vAlignTable['u1147'] = 'top';gv_vAlignTable['u1148'] = 'top';gv_vAlignTable['u1410'] = 'center';HookHover('u1411', false);
gv_vAlignTable['u1412'] = 'center';HookHover('u1413', false);
gv_vAlignTable['u1414'] = 'center';HookHover('u1415', false);
gv_vAlignTable['u1416'] = 'center';HookHover('u1419', false);
gv_vAlignTable['u2009'] = 'center';gv_vAlignTable['u2000'] = 'center';HookHover('u780', false);
gv_vAlignTable['u781'] = 'center';HookHover('u782', false);
gv_vAlignTable['u783'] = 'center';document.getElementById('u1150_img').tabIndex = 0;
HookHover('u1150', false);

u1150.style.cursor = 'pointer';
$axure.eventManager.click('u1150', function(e) {

if (true) {

	SetPanelVisibility('u1152','hidden','none',500);

	SetPanelVisibility('u1160','hidden','none',500);

}

if ((GetWidgetText('u1146')) == ('')) {

	SetPanelVisibility('u1152','','none',500);

}

if ((GetWidgetText('u1149')) == ('')) {

	SetPanelVisibility('u1160','','none',500);

}

if (((GetWidgetText('u1146')) != ('')) && ((false) && ((GetWidgetText('u1149')) != ('')))) {

	SetPanelState('u1131', 'pd1u1131','none','',500,'none','',500);

	ScrollToWidget('u1168', false,true,'none',500);

}

if (((GetWidgetText('u1146')) != ('')) && ((false) && ((GetWidgetText('u1149')) != ('')))) {
function waitu4250aff4d9284562a077d85dbc2717301() {

SetGlobalVariableValue('CommentText', GetWidgetText('u1146'));

SetWidgetRichText('u1137', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:16px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('CommentText')) + '</span></p>');

SetGlobalVariableValue('CommentText', GetWidgetText('u1149'));

SetWidgetRichText('u1134', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('CommentText')) + '</span></p>');

;

	SetPanelState('u1131', 'pd2u1131','none','',500,'none','',500);
}
setTimeout(waitu4250aff4d9284562a077d85dbc2717301, 1000);

}
});
gv_vAlignTable['u1151'] = 'center';gv_vAlignTable['u1154'] = 'center';gv_vAlignTable['u1156'] = 'center';gv_vAlignTable['u1158'] = 'center';gv_vAlignTable['u1159'] = 'top';gv_vAlignTable['u827'] = 'center';gv_vAlignTable['u1420'] = 'center';HookHover('u1421', false);
gv_vAlignTable['u1422'] = 'center';HookHover('u1423', false);
gv_vAlignTable['u1424'] = 'center';HookHover('u1425', false);
gv_vAlignTable['u1426'] = 'center';HookHover('u1427', false);
gv_vAlignTable['u1428'] = 'center';HookHover('u1429', false);
HookHover('u792', false);
gv_vAlignTable['u793'] = 'center';gv_vAlignTable['u1162'] = 'center';gv_vAlignTable['u1164'] = 'center';gv_vAlignTable['u1166'] = 'center';gv_vAlignTable['u1167'] = 'top';gv_vAlignTable['u1079'] = 'center';HookHover('u836', false);
gv_vAlignTable['u837'] = 'center';gv_vAlignTable['u1430'] = 'center';HookHover('u1431', false);
gv_vAlignTable['u1432'] = 'center';HookHover('u1433', false);
gv_vAlignTable['u1434'] = 'center';HookHover('u1435', false);
gv_vAlignTable['u1436'] = 'center';HookHover('u1437', false);
gv_vAlignTable['u1438'] = 'center';HookHover('u1439', false);
gv_vAlignTable['u1700'] = 'center';document.getElementById('u1701_img').tabIndex = 0;

u1701.style.cursor = 'pointer';
$axure.eventManager.click('u1701', function(e) {

if (true) {

	MoveWidgetTo('u673', GetNum('160'), GetNum('70'),'swing',1000);

	MoveWidgetTo('u0', GetNum('-350'), GetNum('70'),'swing',1000);

}
});
gv_vAlignTable['u1702'] = 'center';gv_vAlignTable['u1705'] = 'center';gv_vAlignTable['u1707'] = 'top';gv_vAlignTable['u1708'] = 'top';document.getElementById('u1709_img').tabIndex = 0;

u1709.style.cursor = 'pointer';
$axure.eventManager.click('u1709', function(e) {

if (true) {

	SetPanelState('u673', 'pd3u673','fade','',500,'fade','',500);

}
});

$axure.eventManager.mouseout('u1709', function(e) {
if (!IsTrueMouseOut('u1709',e)) return;
if (true) {

	SetPanelState('u1703', 'pd0u1703','fade','',250,'fade','',250);

}
});
gv_vAlignTable['u1178'] = 'center';gv_vAlignTable['u1179'] = 'top';u1089.tabIndex = 0;

u1089.style.cursor = 'pointer';
$axure.eventManager.click('u1089', function(e) {

if (true) {

	SetPanelState('u1037', 'pd0u1037','none','',500,'none','',500);

	SetPanelVisibility('u1037','','none',500);

}
});

$axure.eventManager.mouseover('u1089', function(e) {
if (!IsTrueMouseOver('u1089',e)) return;
if (true) {

}
});

$axure.eventManager.mouseout('u1089', function(e) {
if (!IsTrueMouseOut('u1089',e)) return;
if (true) {

}
});
gv_vAlignTable['u1440'] = 'center';HookHover('u1441', false);
gv_vAlignTable['u1442'] = 'center';gv_vAlignTable['u1444'] = 'center';gv_vAlignTable['u1446'] = 'center';gv_vAlignTable['u1448'] = 'center';gv_vAlignTable['u1083'] = 'center';gv_vAlignTable['u1710'] = 'center';document.getElementById('u1712_img').tabIndex = 0;
HookHover('u1712', false);

u1712.style.cursor = 'pointer';
$axure.eventManager.click('u1712', function(e) {

if (true) {

	SetPanelState('u1711', 'pd0u1711','fade','',100,'fade','',100);

}
});
gv_vAlignTable['u1713'] = 'center';document.getElementById('u1714_img').tabIndex = 0;
HookHover('u1714', false);

u1714.style.cursor = 'pointer';
$axure.eventManager.click('u1714', function(e) {

if (true) {

	SetPanelState('u1711', 'pd1u1711','fade','',100,'fade','',100);

}
});
gv_vAlignTable['u1715'] = 'center';
$axure.eventManager.mouseover('u1716', function(e) {
if (!IsTrueMouseOver('u1716',e)) return;
if (true) {

	SetPanelState('u1703', 'pd1u1703','fade','',250,'fade','',250);

}
});
gv_vAlignTable['u1717'] = 'center';gv_vAlignTable['u1718'] = 'top';u1719.tabIndex = 0;

u1719.style.cursor = 'pointer';
$axure.eventManager.click('u1719', function(e) {

if (true) {

	SetPanelState('u673', 'pd1u673','fade','',500,'fade','',500);

	MoveWidgetTo('u673', GetNum('160'), GetNum('70'),'swing',1000);

	MoveWidgetTo('u0', GetNum('-350'), GetNum('70'),'swing',1000);

}
});
gv_vAlignTable['u1719'] = 'top';gv_vAlignTable['u1185'] = 'center';gv_vAlignTable['u1188'] = 'center';gv_vAlignTable['u1189'] = 'top';gv_vAlignTable['u1450'] = 'center';gv_vAlignTable['u1452'] = 'center';gv_vAlignTable['u1454'] = 'center';gv_vAlignTable['u1456'] = 'center';gv_vAlignTable['u1458'] = 'center';HookHover('u1459', false);
gv_vAlignTable['u1090'] = 'top';u1720.tabIndex = 0;

u1720.style.cursor = 'pointer';
$axure.eventManager.click('u1720', function(e) {

if (true) {

	SetPanelState('u673', 'pd2u673','fade','',500,'fade','',500);

	MoveWidgetTo('u673', GetNum('160'), GetNum('70'),'swing',1000);

	MoveWidgetTo('u0', GetNum('-350'), GetNum('70'),'swing',1000);

}
});
gv_vAlignTable['u1720'] = 'top';gv_vAlignTable['u1721'] = 'top';gv_vAlignTable['u1723'] = 'center';gv_vAlignTable['u1724'] = 'top';gv_vAlignTable['u1726'] = 'center';gv_vAlignTable['u1729'] = 'center';document.getElementById('u1195_img').tabIndex = 0;
HookHover('u1195', false);

u1195.style.cursor = 'pointer';
$axure.eventManager.click('u1195', function(e) {

if (true) {

	SetPanelVisibility('u1197','hidden','none',500);

	SetPanelVisibility('u1205','hidden','none',500);

}

if ((GetWidgetText('u1191')) == ('')) {

	SetPanelVisibility('u1197','','none',500);

}

if ((GetWidgetText('u1194')) == ('')) {

	SetPanelVisibility('u1205','','none',500);

}

if (((GetWidgetText('u1191')) != ('')) && ((false) && ((GetWidgetText('u1194')) != ('')))) {

	SetPanelState('u1176', 'pd1u1176','none','',500,'none','',500);

	ScrollToWidget('u1213', false,true,'none',500);

}

if (((GetWidgetText('u1191')) != ('')) && ((false) && ((GetWidgetText('u1194')) != ('')))) {
function waitu6fd88c7ae6f54e5199d97bdd62bca1291() {

SetGlobalVariableValue('CommentText', GetWidgetText('u1191'));

SetWidgetRichText('u1182', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:16px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('CommentText')) + '</span></p>');

SetGlobalVariableValue('CommentText', GetWidgetText('u1194'));

SetWidgetRichText('u1179', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('CommentText')) + '</span></p>');

;

	SetPanelState('u1176', 'pd2u1176','none','',500,'none','',500);
}
setTimeout(waitu6fd88c7ae6f54e5199d97bdd62bca1291, 1000);

}
});
gv_vAlignTable['u1196'] = 'center';gv_vAlignTable['u1199'] = 'center';gv_vAlignTable['u1460'] = 'center';gv_vAlignTable['u1463'] = 'center';gv_vAlignTable['u1465'] = 'top';gv_vAlignTable['u1466'] = 'top';document.getElementById('u1467_img').tabIndex = 0;

u1467.style.cursor = 'pointer';
$axure.eventManager.click('u1467', function(e) {

if (true) {

	SetPanelState('u673', 'pd3u673','fade','',500,'fade','',500);

}
});

$axure.eventManager.mouseout('u1467', function(e) {
if (!IsTrueMouseOut('u1467',e)) return;
if (true) {

	SetPanelState('u1461', 'pd0u1461','fade','',250,'fade','',250);

}
});
gv_vAlignTable['u1468'] = 'center';gv_vAlignTable['u1730'] = 'top';gv_vAlignTable['u1732'] = 'top';gv_vAlignTable['u1733'] = 'top';gv_vAlignTable['u1735'] = 'center';gv_vAlignTable['u1738'] = 'center';
$axure.eventManager.mouseover('u511', function(e) {
if (!IsTrueMouseOver('u511',e)) return;
if (true) {

	SetPanelState('u502', 'pd1u502','fade','',250,'fade','',250);

}
});
gv_vAlignTable['u514'] = 'center';gv_vAlignTable['u516'] = 'center';document.getElementById('u1470_img').tabIndex = 0;
HookHover('u1470', false);

u1470.style.cursor = 'pointer';
$axure.eventManager.click('u1470', function(e) {

if (true) {

	SetPanelState('u1469', 'pd0u1469','fade','',100,'fade','',100);

}
});
gv_vAlignTable['u1471'] = 'center';document.getElementById('u1472_img').tabIndex = 0;
HookHover('u1472', false);

u1472.style.cursor = 'pointer';
$axure.eventManager.click('u1472', function(e) {

if (true) {

	SetPanelState('u1469', 'pd1u1469','fade','',100,'fade','',100);

}
});
gv_vAlignTable['u1473'] = 'center';
$axure.eventManager.mouseover('u1474', function(e) {
if (!IsTrueMouseOver('u1474',e)) return;
if (true) {

	SetPanelState('u1461', 'pd1u1461','fade','',250,'fade','',250);

}
});
gv_vAlignTable['u1475'] = 'center';gv_vAlignTable['u1478'] = 'center';gv_vAlignTable['u1741'] = 'center';gv_vAlignTable['u1743'] = 'center';gv_vAlignTable['u1745'] = 'center';gv_vAlignTable['u1747'] = 'center';gv_vAlignTable['u1749'] = 'center';gv_vAlignTable['u523'] = 'top';document.getElementById('u526_img').tabIndex = 0;

u526.style.cursor = 'pointer';
$axure.eventManager.click('u526', function(e) {

if (true) {

	SetPanelState('u673', 'pd3u673','fade','',500,'fade','',500);

	MoveWidgetTo('u673', GetNum('160'), GetNum('70'),'swing',1000);

	MoveWidgetTo('u0', GetNum('-350'), GetNum('70'),'swing',1000);

}
});

$axure.eventManager.mouseout('u526', function(e) {
if (!IsTrueMouseOut('u526',e)) return;
if (true) {

	SetPanelState('u519', 'pd0u519','fade','',250,'fade','',250);

}
});
gv_vAlignTable['u527'] = 'center';gv_vAlignTable['u1480'] = 'top';gv_vAlignTable['u1481'] = 'top';document.getElementById('u1482_img').tabIndex = 0;

u1482.style.cursor = 'pointer';
$axure.eventManager.click('u1482', function(e) {

if (true) {

	SetPanelState('u673', 'pd3u673','fade','',500,'fade','',500);

}
});

$axure.eventManager.mouseout('u1482', function(e) {
if (!IsTrueMouseOut('u1482',e)) return;
if (true) {

	SetPanelState('u1476', 'pd0u1476','fade','',250,'fade','',250);

}
});
gv_vAlignTable['u1483'] = 'center';document.getElementById('u1485_img').tabIndex = 0;
HookHover('u1485', false);

u1485.style.cursor = 'pointer';
$axure.eventManager.click('u1485', function(e) {

if (true) {

	SetPanelState('u1484', 'pd0u1484','fade','',100,'fade','',100);

}
});
gv_vAlignTable['u1486'] = 'center';document.getElementById('u1487_img').tabIndex = 0;
HookHover('u1487', false);

u1487.style.cursor = 'pointer';
$axure.eventManager.click('u1487', function(e) {

if (true) {

	SetPanelState('u1484', 'pd1u1484','fade','',100,'fade','',100);

}
});
gv_vAlignTable['u1488'] = 'center';
$axure.eventManager.mouseover('u1489', function(e) {
if (!IsTrueMouseOver('u1489',e)) return;
if (true) {

	SetPanelState('u1476', 'pd1u1476','fade','',250,'fade','',250);

}
});
gv_vAlignTable['u1751'] = 'center';gv_vAlignTable['u1754'] = 'center';document.getElementById('u1755_img').tabIndex = 0;
HookHover('u1755', false);

u1755.style.cursor = 'pointer';
$axure.eventManager.click('u1755', function(e) {

if (true) {

	SetPanelState('u1752', 'pd0u1752','fade','',500,'fade','',500);

}
});
gv_vAlignTable['u1756'] = 'center';gv_vAlignTable['u1757'] = 'top';gv_vAlignTable['u1759'] = 'center';gv_vAlignTable['u532'] = 'center';gv_vAlignTable['u534'] = 'top';document.getElementById('u537_img').tabIndex = 0;

u537.style.cursor = 'pointer';
$axure.eventManager.click('u537', function(e) {

if (true) {

	SetPanelState('u673', 'pd3u673','fade','',500,'fade','',500);

	MoveWidgetTo('u673', GetNum('160'), GetNum('70'),'swing',1000);

	MoveWidgetTo('u0', GetNum('-350'), GetNum('70'),'swing',1000);

}
});

$axure.eventManager.mouseout('u537', function(e) {
if (!IsTrueMouseOut('u537',e)) return;
if (true) {

	SetPanelState('u530', 'pd0u530','fade','',250,'fade','',250);

}
});
HookHover('u1373', false);
gv_vAlignTable['u1374'] = 'center';gv_vAlignTable['u1493'] = 'center';gv_vAlignTable['u1495'] = 'top';gv_vAlignTable['u1496'] = 'top';document.getElementById('u1497_img').tabIndex = 0;

u1497.style.cursor = 'pointer';
$axure.eventManager.click('u1497', function(e) {

if (true) {

	SetPanelState('u673', 'pd3u673','fade','',500,'fade','',500);

}
});

$axure.eventManager.mouseout('u1497', function(e) {
if (!IsTrueMouseOut('u1497',e)) return;
if (true) {

	SetPanelState('u1491', 'pd0u1491','fade','',250,'fade','',250);

}
});
gv_vAlignTable['u1498'] = 'center';
$axure.eventManager.focus('u1762', function(e) {

if ((GetWidgetText('u1761')) == ('')) {

SetWidgetFormText('u1761', GetWidgetText('u1762'));

SetWidgetFormText('u1762', '');

}
});

$axure.eventManager.blur('u1762', function(e) {

if ((GetWidgetText('u1762')) == ('')) {

SetWidgetFormText('u1762', GetWidgetText('u1761'));

SetWidgetFormText('u1761', '');

}
});

$axure.eventManager.focus('u1765', function(e) {

if ((GetWidgetText('u1764')) == ('')) {

SetWidgetFormText('u1764', GetWidgetText('u1765'));

SetWidgetFormText('u1765', '');

}
});

$axure.eventManager.blur('u1765', function(e) {

if ((GetWidgetText('u1765')) == ('')) {

SetWidgetFormText('u1765', GetWidgetText('u1764'));

SetWidgetFormText('u1764', '');

}
});
document.getElementById('u1766_img').tabIndex = 0;
HookHover('u1766', false);

u1766.style.cursor = 'pointer';
$axure.eventManager.click('u1766', function(e) {

if (true) {

	SetPanelState('u1752', 'pd1u1752','fade','',500,'fade','',500);

}
});
gv_vAlignTable['u1767'] = 'center';
$axure.eventManager.mouseover('u1769', function(e) {
if (!IsTrueMouseOver('u1769',e)) return;
if (true) {

	SetPanelVisibility('u1768','hidden','none',500);

}
});
gv_vAlignTable['u1978'] = 'center';gv_vAlignTable['u540'] = 'center';gv_vAlignTable['u542'] = 'center';gv_vAlignTable['u544'] = 'center';
$axure.eventManager.focus('u547', function(e) {

if ((GetWidgetText('u546')) == ('')) {

SetWidgetFormText('u546', GetWidgetText('u547'));

SetWidgetFormText('u547', '');

}
});

$axure.eventManager.blur('u547', function(e) {

if ((GetWidgetText('u547')) == ('')) {

SetWidgetFormText('u547', GetWidgetText('u546'));

SetWidgetFormText('u546', '');

}
});
HookHover('u1383', false);
gv_vAlignTable['u1384'] = 'center';HookHover('u1770', false);
gv_vAlignTable['u1771'] = 'center';gv_vAlignTable['u1773'] = 'center';HookHover('u1774', false);
gv_vAlignTable['u1775'] = 'center';HookHover('u1776', false);
gv_vAlignTable['u1777'] = 'center';HookHover('u1778', false);
gv_vAlignTable['u1779'] = 'center';
$axure.eventManager.focus('u550', function(e) {

if ((GetWidgetText('u549')) == ('')) {

SetWidgetFormText('u549', GetWidgetText('u550'));

SetWidgetFormText('u550', '');

}
});

$axure.eventManager.blur('u550', function(e) {

if ((GetWidgetText('u550')) == ('')) {

SetWidgetFormText('u550', GetWidgetText('u549'));

SetWidgetFormText('u549', '');

}
});
gv_vAlignTable['u1968'] = 'center';gv_vAlignTable['u554'] = 'center';
u555.style.cursor = 'pointer';
$axure.eventManager.click('u555', function(e) {

if (true) {

SetWidgetFormText('u555', '');

}
});

$axure.eventManager.keyup('u555', function(e) {

if (IsValueAlphaNumeric(GetWidgetText('u555'))) {

SetGlobalVariableValue('TagName', GetWidgetText('u555'));

}
});

$axure.eventManager.blur('u555', function(e) {

if (((GetWidgetVisibility('u558')) != (true)) && ((GetWidgetValueLength('u555')) != (''))) {

	SetPanelState('u558', 'pd0u558','fade','',50,'fade','',50);

}
else
if (((GetWidgetVisibility('u563')) != (true)) && ((GetWidgetValueLength('u555')) != (''))) {

	SetPanelState('u563', 'pd0u563','fade','',50,'fade','',50);

}
else
if (((GetWidgetVisibility('u568')) != (true)) && ((GetWidgetValueLength('u555')) != (''))) {

	SetPanelState('u568', 'pd0u568','fade','',50,'fade','',50);

}
});
gv_vAlignTable['u557'] = 'center';HookHover('u1393', false);
gv_vAlignTable['u1394'] = 'center';u1293.tabIndex = 0;

u1293.style.cursor = 'pointer';
$axure.eventManager.click('u1293', function(e) {

if (true) {

SetWidgetFormText('u1305', '');

SetWidgetFormText('u1307', '');

SetWidgetFormText('u1303', '');

	SetPanelState('u1284', 'pd0u1284','none','',500,'none','',500);

	SetPanelVisibility('u1284','hidden','none',500);

	SetPanelVisibility('u1312','hidden','none',500);

	SetPanelVisibility('u1320','hidden','none',500);

	SetPanelVisibility('u1328','hidden','none',500);

}
});
gv_vAlignTable['u1293'] = 'top';HookHover('u1780', false);
gv_vAlignTable['u1781'] = 'center';HookHover('u1782', false);
gv_vAlignTable['u1783'] = 'center';HookHover('u1784', false);
gv_vAlignTable['u1785'] = 'center';gv_vAlignTable['u1786'] = 'top';HookHover('u1787', false);
gv_vAlignTable['u1788'] = 'center';gv_vAlignTable['u560'] = 'center';gv_vAlignTable['u565'] = 'center';u1973.tabIndex = 0;

u1973.style.cursor = 'pointer';
$axure.eventManager.click('u1973', function(e) {

if (true) {

	SetPanelState('u673', 'pd1u673','fade','',500,'fade','',500);

	MoveWidgetTo('u673', GetNum('160'), GetNum('70'),'swing',1000);

	MoveWidgetTo('u0', GetNum('-350'), GetNum('70'),'swing',1000);

}
});

$axure.eventManager.mouseover('u1973', function(e) {
if (!IsTrueMouseOver('u1973',e)) return;
if (true) {

}
});
gv_vAlignTable['u1973'] = 'top';
u566.style.cursor = 'pointer';
$axure.eventManager.click('u566', function(e) {

if (true) {

SetWidgetFormText('u555', GetWidgetText('u566'));

}
});
u567.tabIndex = 0;

u567.style.cursor = 'pointer';
$axure.eventManager.click('u567', function(e) {

if (((GetWidgetVisibility('u558')) == (false)) && ((GetWidgetVisibility('u568')) == (false))) {

	MoveWidgetBy('u563', GetNum('-98'), GetNum('0'),'none',500);

}
else
if (((GetWidgetVisibility('u558')) == (true)) && ((GetWidgetVisibility('u568')) == (false))) {

	SetPanelVisibility('u563','hidden','none',500);

}
});
gv_vAlignTable['u567'] = 'top';HookHover('u806', false);
gv_vAlignTable['u807'] = 'center';HookHover('u808', false);
gv_vAlignTable['u809'] = 'center';gv_vAlignTable['u1792'] = 'center';u1793.tabIndex = 0;

u1793.style.cursor = 'pointer';
$axure.eventManager.click('u1793', function(e) {

if (true) {

	SetPanelVisibility('u1768','','none',500);

}
});

$axure.eventManager.mouseover('u1793', function(e) {
if (!IsTrueMouseOver('u1793',e)) return;
if (true) {

SetWidgetSelected('u1787');
}
});

$axure.eventManager.mouseout('u1793', function(e) {
if (!IsTrueMouseOut('u1793',e)) return;
if (true) {

SetWidgetNotSelected('u1787');
}
});

$axure.eventManager.mouseover('u1794', function(e) {
if (!IsTrueMouseOver('u1794',e)) return;
if (true) {

SetWidgetSelected('u1784');
}
});

$axure.eventManager.mouseout('u1794', function(e) {
if (!IsTrueMouseOut('u1794',e)) return;
if (true) {

SetWidgetNotSelected('u1784');
}
});

u1795.style.cursor = 'pointer';
$axure.eventManager.click('u1795', function(e) {

if (true) {

	SetPanelVisibility('u1797','','fade',50);

	BringToFront("u1797");

}
});
gv_vAlignTable['u1799'] = 'center';gv_vAlignTable['u575'] = 'center';gv_vAlignTable['u54'] = 'center';HookHover('u816', false);
gv_vAlignTable['u817'] = 'center';u580.tabIndex = 0;

u580.style.cursor = 'pointer';
$axure.eventManager.click('u580', function(e) {

if (((GetWidgetVisibility('u581')) == (false)) && ((GetWidgetVisibility('u586')) == (false))) {

	SetPanelVisibility('u576','hidden','none',500);

}
else
if (((GetWidgetVisibility('u581')) == (true)) && ((GetWidgetVisibility('u586')) == (false))) {

	MoveWidgetBy('u581', GetNum('-98'), GetNum('0'),'none',500);

	SetPanelVisibility('u576','hidden','none',500);

}
else
if (((GetWidgetVisibility('u581')) == (true)) && ((GetWidgetVisibility('u586')) == (true))) {

	MoveWidgetBy('u581', GetNum('-98'), GetNum('0'),'none',500);

	MoveWidgetBy('u586', GetNum('-196'), GetNum('0'),'none',500);

	SetPanelVisibility('u576','hidden','none',500);

}
else
if (((GetWidgetVisibility('u581')) == (false)) && ((GetWidgetVisibility('u586')) == (true))) {

	MoveWidgetBy('u586', GetNum('-196'), GetNum('0'),'none',500);

	SetPanelVisibility('u576','hidden','none',500);

}
});
gv_vAlignTable['u580'] = 'top';gv_vAlignTable['u583'] = 'center';
u584.style.cursor = 'pointer';
$axure.eventManager.click('u584', function(e) {

if (true) {

SetWidgetFormText('u573', GetWidgetText('u584'));

}
});
u585.tabIndex = 0;

u585.style.cursor = 'pointer';
$axure.eventManager.click('u585', function(e) {

if (((GetWidgetVisibility('u576')) == (false)) && ((GetWidgetVisibility('u586')) == (false))) {

	MoveWidgetBy('u581', GetNum('-98'), GetNum('0'),'none',500);

}
else
if (((GetWidgetVisibility('u576')) == (true)) && ((GetWidgetVisibility('u586')) == (false))) {

	SetPanelVisibility('u581','hidden','none',500);

}
});
gv_vAlignTable['u585'] = 'top';gv_vAlignTable['u63'] = 'center';gv_vAlignTable['u65'] = 'center';HookHover('u828', false);
gv_vAlignTable['u829'] = 'center';u590.tabIndex = 0;

u590.style.cursor = 'pointer';
$axure.eventManager.click('u590', function(e) {

if (((GetWidgetVisibility('u576')) == (false)) && ((GetWidgetVisibility('u581')) == (false))) {

	SetPanelVisibility('u586','hidden','none',500);

}
else
if (((GetWidgetVisibility('u576')) == (false)) && ((GetWidgetVisibility('u581')) == (true))) {

	MoveWidgetBy('u586', GetNum('-98'), GetNum('0'),'none',500);

}
});
gv_vAlignTable['u590'] = 'top';document.getElementById('u591_img').tabIndex = 0;
HookHover('u591', false);

u591.style.cursor = 'pointer';
$axure.eventManager.click('u591', function(e) {

if (true) {

	SetPanelState('u551', 'pd2u551','fade','',250,'fade','',250);

}
});
gv_vAlignTable['u592'] = 'center';document.getElementById('u593_img').tabIndex = 0;
HookHover('u593', false);

u593.style.cursor = 'pointer';
$axure.eventManager.click('u593', function(e) {

if (true) {

	SetPanelState('u551', 'pd2u551','fade','',250,'fade','',250);

	SetPanelVisibility('u1988','','fade',500);

	BringToFront("u1988");
function waitucd6fdb9b745b4ec49dcf0eac3d269b1a1() {

	SetPanelVisibility('u1988','hidden','fade',500);
}
setTimeout(waitucd6fdb9b745b4ec49dcf0eac3d269b1a1, 2000);

}
});
gv_vAlignTable['u594'] = 'center';gv_vAlignTable['u596'] = 'center';HookHover('u597', false);
HookHover('u834', false);
gv_vAlignTable['u835'] = 'center';gv_vAlignTable['u73'] = 'center';gv_vAlignTable['u75'] = 'center';gv_vAlignTable['u841'] = 'center';HookHover('u842', false);
gv_vAlignTable['u843'] = 'center';HookHover('u844', false);
gv_vAlignTable['u845'] = 'center';gv_vAlignTable['u846'] = 'top';gv_vAlignTable['u847'] = 'top';gv_vAlignTable['u848'] = 'top';
$axure.eventManager.focus('u679', function(e) {

if ((GetWidgetText('u678')) == ('')) {

SetWidgetFormText('u678', GetWidgetText('u679'));

SetWidgetFormText('u679', '');

}
});

$axure.eventManager.blur('u679', function(e) {

if ((GetWidgetText('u679')) == ('')) {

SetWidgetFormText('u679', GetWidgetText('u678'));

SetWidgetFormText('u678', '');

}
});
