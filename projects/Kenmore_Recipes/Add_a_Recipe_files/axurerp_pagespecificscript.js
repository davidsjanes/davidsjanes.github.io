for(var i = 0; i < 190; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

$axure.eventManager.focus('u70', function(e) {

if ((GetWidgetText('u69')) == ('')) {

SetWidgetFormText('u69', GetWidgetText('u70'));

SetWidgetFormText('u70', '');

}
});

$axure.eventManager.blur('u70', function(e) {

if ((GetWidgetText('u70')) == ('')) {

SetWidgetFormText('u70', GetWidgetText('u69'));

SetWidgetFormText('u69', '');

}
});
HookHover('u106', false);
gv_vAlignTable['u107'] = 'center';gv_vAlignTable['u108'] = 'top';
$axure.eventManager.focus('u82', function(e) {

if ((GetWidgetText('u81')) == ('')) {

SetWidgetFormText('u81', GetWidgetText('u82'));

SetWidgetFormText('u82', '');

}
});

$axure.eventManager.blur('u82', function(e) {

if ((GetWidgetText('u82')) == ('')) {

SetWidgetFormText('u82', GetWidgetText('u81'));

SetWidgetFormText('u81', '');

}
});

$axure.eventManager.focus('u85', function(e) {

if ((GetWidgetText('u84')) == ('')) {

SetWidgetFormText('u84', GetWidgetText('u85'));

SetWidgetFormText('u85', '');

}
});

$axure.eventManager.blur('u85', function(e) {

if ((GetWidgetText('u85')) == ('')) {

SetWidgetFormText('u85', GetWidgetText('u84'));

SetWidgetFormText('u84', '');

}
});

$axure.eventManager.focus('u88', function(e) {

if ((GetWidgetText('u87')) == ('')) {

SetWidgetFormText('u87', GetWidgetText('u88'));

SetWidgetFormText('u88', '');

}
});

$axure.eventManager.blur('u88', function(e) {

if ((GetWidgetText('u88')) == ('')) {

SetWidgetFormText('u88', GetWidgetText('u87'));

SetWidgetFormText('u87', '');

}
});
gv_vAlignTable['u118'] = 'top';
$axure.eventManager.change('u119', function(e) {

if (true) {

	SetPanelVisibility('u121','','fade',500);

}
});

$axure.eventManager.focus('u91', function(e) {

if ((GetWidgetText('u90')) == ('')) {

SetWidgetFormText('u90', GetWidgetText('u91'));

SetWidgetFormText('u91', '');

}
});

$axure.eventManager.blur('u91', function(e) {

if ((GetWidgetText('u91')) == ('')) {

SetWidgetFormText('u91', GetWidgetText('u90'));

SetWidgetFormText('u90', '');

}
});
gv_vAlignTable['u92'] = 'top';gv_vAlignTable['u96'] = 'top';gv_vAlignTable['u97'] = 'top';gv_vAlignTable['u98'] = 'top';gv_vAlignTable['u127'] = 'center';
$axure.eventManager.change('u128', function(e) {

if ((GetSelectedOption('u128')) == ('Add to New Cookbook')) {

	SetPanelVisibility('u129','','none',500);

	SetPanelState('u129', 'pd1u129','fade','',250,'fade','',250);

}
else
if (true) {

	SetPanelVisibility('u129','','none',500);

	SetPanelState('u129', 'pd0u129','fade','',250,'fade','',250);

}
});

$axure.eventManager.focus('u132', function(e) {

if ((GetWidgetText('u131')) == ('')) {

SetWidgetFormText('u131', GetWidgetText('u132'));

SetWidgetFormText('u132', '');

}
});

$axure.eventManager.blur('u132', function(e) {

if ((GetWidgetText('u132')) == ('')) {

SetWidgetFormText('u132', GetWidgetText('u131'));

SetWidgetFormText('u131', '');

}
});
document.getElementById('u134_img').tabIndex = 0;
HookHover('u134', false);

u134.style.cursor = 'pointer';
$axure.eventManager.click('u134', function(e) {

if (true) {

SetWidgetRichText('u120', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetWidgetText('u139')) + '</span></p>');

	SetPanelState('u115', 'pd1u115','fade','',500,'fade','',500);

}
});
gv_vAlignTable['u135'] = 'center';
$axure.eventManager.focus('u136', function(e) {

if ((GetWidgetText('u131')) == ('')) {

SetWidgetFormText('u131', GetWidgetText('u136'));

SetWidgetFormText('u136', '');

}
});

$axure.eventManager.blur('u136', function(e) {

if ((GetWidgetText('u136')) == ('')) {

SetWidgetFormText('u136', GetWidgetText('u131'));

SetWidgetFormText('u131', '');

}
});

$axure.eventManager.focus('u139', function(e) {

if ((GetWidgetText('u138')) == ('')) {

SetWidgetFormText('u138', GetWidgetText('u139'));

SetWidgetFormText('u139', '');

}
});

$axure.eventManager.blur('u139', function(e) {

if ((GetWidgetText('u139')) == ('')) {

SetWidgetFormText('u139', GetWidgetText('u138'));

SetWidgetFormText('u138', '');

}
});

$axure.eventManager.focus('u142', function(e) {

if ((GetWidgetText('u141')) == ('')) {

SetWidgetFormText('u141', GetWidgetText('u142'));

SetWidgetFormText('u142', '');

}
});

$axure.eventManager.blur('u142', function(e) {

if ((GetWidgetText('u142')) == ('')) {

SetWidgetFormText('u142', GetWidgetText('u141'));

SetWidgetFormText('u141', '');

}
});
document.getElementById('u144_img').tabIndex = 0;
HookHover('u144', false);

u144.style.cursor = 'pointer';
$axure.eventManager.click('u144', function(e) {

if (true) {

SetWidgetRichText('u120', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetSelectedOption('u128')) + '</span></p>');

	SetPanelState('u115', 'pd1u115','fade','',500,'fade','',500);

}
});
gv_vAlignTable['u145'] = 'center';
$axure.eventManager.focus('u149', function(e) {

if ((GetWidgetText('u148')) == ('')) {

SetWidgetFormText('u148', GetWidgetText('u149'));

SetWidgetFormText('u149', '');

}
});

$axure.eventManager.blur('u149', function(e) {

if ((GetWidgetText('u149')) == ('')) {

SetWidgetFormText('u149', GetWidgetText('u148'));

SetWidgetFormText('u148', '');

}
});

$axure.eventManager.focus('u150', function(e) {

if (false) {

;

SetWidgetFormText('u150', '');

}
});

$axure.eventManager.blur('u150', function(e) {

if ((GetWidgetText('u150')) == ('')) {

;

;

}
});
gv_vAlignTable['u151'] = 'top';gv_vAlignTable['u153'] = 'top';gv_vAlignTable['u155'] = 'top';gv_vAlignTable['u157'] = 'top';gv_vAlignTable['u159'] = 'top';gv_vAlignTable['u161'] = 'top';gv_vAlignTable['u162'] = 'top';gv_vAlignTable['u164'] = 'top';gv_vAlignTable['u166'] = 'top';gv_vAlignTable['u168'] = 'top';gv_vAlignTable['u170'] = 'top';gv_vAlignTable['u172'] = 'top';gv_vAlignTable['u174'] = 'top';gv_vAlignTable['u176'] = 'top';
$axure.eventManager.focus('u73', function(e) {

if ((GetWidgetText('u72')) == ('')) {

SetWidgetFormText('u72', GetWidgetText('u73'));

SetWidgetFormText('u73', '');

}
});

$axure.eventManager.blur('u73', function(e) {

if ((GetWidgetText('u73')) == ('')) {

SetWidgetFormText('u73', GetWidgetText('u72'));

SetWidgetFormText('u72', '');

}
});
gv_vAlignTable['u75'] = 'center';gv_vAlignTable['u77'] = 'top';gv_vAlignTable['u78'] = 'top';gv_vAlignTable['u79'] = 'top';gv_vAlignTable['u180'] = 'top';document.getElementById('u182_img').tabIndex = 0;
HookHover('u182', false);

u182.style.cursor = 'pointer';
$axure.eventManager.click('u182', function(e) {

if (true) {

	SetPanelVisibility('u0','','none',500);

	MoveWidgetTo('u181', GetNum('20'), GetNum('1104'),'swing',500);

}
});
gv_vAlignTable['u183'] = 'center';HookHover('u184', false);
gv_vAlignTable['u185'] = 'center';gv_vAlignTable['u187'] = 'top';gv_vAlignTable['u189'] = 'top';gv_vAlignTable['u99'] = 'top';
$axure.eventManager.focus('u3', function(e) {

if ((GetWidgetText('u2')) == ('')) {

SetWidgetFormText('u2', GetWidgetText('u3'));

SetWidgetFormText('u3', '');

}
});

$axure.eventManager.blur('u3', function(e) {

if ((GetWidgetText('u3')) == ('')) {

SetWidgetFormText('u3', GetWidgetText('u2'));

SetWidgetFormText('u2', '');

}
});

$axure.eventManager.focus('u4', function(e) {

if (false) {

;

SetWidgetFormText('u4', '');

}
});

$axure.eventManager.blur('u4', function(e) {

if ((GetWidgetText('u4')) == ('')) {

;

;

}
});
gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u9'] = 'center';document.getElementById('u10_img').tabIndex = 0;

u10.style.cursor = 'pointer';
$axure.eventManager.click('u10', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Recipes.html');

}
});
gv_vAlignTable['u11'] = 'center';document.getElementById('u12_img').tabIndex = 0;

u12.style.cursor = 'pointer';
$axure.eventManager.click('u12', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Cookbooks.html');

}
});
gv_vAlignTable['u13'] = 'center';
$axure.eventManager.mouseover('u15', function(e) {
if (!IsTrueMouseOver('u15',e)) return;
if (true) {

}
});
gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u114'] = 'center';gv_vAlignTable['u117'] = 'center';document.getElementById('u20_img').tabIndex = 0;
HookHover('u20', false);

u20.style.cursor = 'pointer';
$axure.eventManager.click('u20', function(e) {

if (true) {

SetWidgetSelected('u20');
SetWidgetNotSelected('u22');
SetWidgetNotSelected('u24');
SetWidgetNotSelected('u26');
SetWidgetFormText('u65', 'Catman');

	SetPanelVisibility('u17','hidden','fade',100);

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Search_Results.html');

}
});
gv_vAlignTable['u21'] = 'center';document.getElementById('u22_img').tabIndex = 0;
HookHover('u22', false);

u22.style.cursor = 'pointer';
$axure.eventManager.click('u22', function(e) {

if (true) {

SetWidgetNotSelected('u20');
SetWidgetSelected('u22');
SetWidgetNotSelected('u24');
SetWidgetNotSelected('u26');
SetWidgetFormText('u65', 'Cadoodie');

	SetPanelVisibility('u17','hidden','fade',100);

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Search_Results.html');

}
});
gv_vAlignTable['u23'] = 'center';document.getElementById('u24_img').tabIndex = 0;
HookHover('u24', false);

u24.style.cursor = 'pointer';
$axure.eventManager.click('u24', function(e) {

if (true) {

SetWidgetNotSelected('u20');
SetWidgetNotSelected('u22');
SetWidgetSelected('u24');
SetWidgetNotSelected('u26');
SetWidgetFormText('u65', 'CZZ');

	SetPanelVisibility('u17','hidden','fade',100);

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Search_Results.html');

}
});
gv_vAlignTable['u25'] = 'center';document.getElementById('u26_img').tabIndex = 0;
HookHover('u26', false);

u26.style.cursor = 'pointer';
$axure.eventManager.click('u26', function(e) {

if (true) {

SetWidgetNotSelected('u20');
SetWidgetNotSelected('u22');
SetWidgetNotSelected('u24');
SetWidgetSelected('u26');
SetWidgetFormText('u65', 'Contender');

	SetPanelVisibility('u17','hidden','fade',100);

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Search_Results.html');

}
});
gv_vAlignTable['u27'] = 'center';u120.tabIndex = 0;

u120.style.cursor = 'pointer';
$axure.eventManager.click('u120', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Cookbook_Details.html');

}
});
gv_vAlignTable['u120'] = 'top';
$axure.eventManager.focus('u124', function(e) {

if ((GetWidgetText('u123')) == ('')) {

SetWidgetFormText('u123', GetWidgetText('u124'));

SetWidgetFormText('u124', '');

}
});

$axure.eventManager.blur('u124', function(e) {

if ((GetWidgetText('u124')) == ('')) {

SetWidgetFormText('u124', GetWidgetText('u123'));

SetWidgetFormText('u123', '');

}
});
HookHover('u126', false);
document.getElementById('u30_img').tabIndex = 0;
HookHover('u30', false);

u30.style.cursor = 'pointer';
$axure.eventManager.click('u30', function(e) {

if (true) {

SetWidgetSelected('u30');
SetWidgetNotSelected('u32');
SetWidgetNotSelected('u34');
SetWidgetNotSelected('u36');
SetWidgetFormText('u65', 'Butter');

	SetPanelVisibility('u17','hidden','fade',100);

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Search_Results.html');

}
});
gv_vAlignTable['u31'] = 'center';document.getElementById('u32_img').tabIndex = 0;
HookHover('u32', false);

u32.style.cursor = 'pointer';
$axure.eventManager.click('u32', function(e) {

if (true) {

SetWidgetNotSelected('u30');
SetWidgetSelected('u32');
SetWidgetNotSelected('u34');
SetWidgetNotSelected('u36');
SetWidgetFormText('u65', 'Butterfly Shrimp');

	SetPanelVisibility('u17','hidden','fade',100);

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Search_Results.html');

}
});
gv_vAlignTable['u33'] = 'center';document.getElementById('u34_img').tabIndex = 0;
HookHover('u34', false);

u34.style.cursor = 'pointer';
$axure.eventManager.click('u34', function(e) {

if (true) {

SetWidgetNotSelected('u30');
SetWidgetNotSelected('u32');
SetWidgetSelected('u34');
SetWidgetNotSelected('u36');
SetWidgetFormText('u65', 'Butterfly Chops');

	SetPanelVisibility('u17','hidden','fade',100);

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Search_Results.html');

}
});
gv_vAlignTable['u35'] = 'center';document.getElementById('u36_img').tabIndex = 0;
HookHover('u36', false);

u36.style.cursor = 'pointer';
$axure.eventManager.click('u36', function(e) {

if (true) {

SetWidgetNotSelected('u30');
SetWidgetNotSelected('u32');
SetWidgetNotSelected('u34');
SetWidgetSelected('u36');
SetWidgetFormText('u65', 'Butter-Dip');

	SetPanelVisibility('u17','hidden','fade',100);

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Search_Results.html');

}
});
gv_vAlignTable['u37'] = 'center';gv_vAlignTable['u39'] = 'center';
$axure.eventManager.mouseover('u41', function(e) {
if (!IsTrueMouseOver('u41',e)) return;
if (true) {

	SetPanelVisibility('u40','hidden','fade',250);

}
});
gv_vAlignTable['u42'] = 'center';document.getElementById('u43_img').tabIndex = 0;

u43.style.cursor = 'pointer';
$axure.eventManager.click('u43', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u44'] = 'center';document.getElementById('u45_img').tabIndex = 0;

u45.style.cursor = 'pointer';
$axure.eventManager.click('u45', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Grocery_List.html');

}
});
gv_vAlignTable['u46'] = 'center';document.getElementById('u47_img').tabIndex = 0;

u47.style.cursor = 'pointer';
$axure.eventManager.click('u47', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('User_Profile.html');

}
});
gv_vAlignTable['u48'] = 'center';document.getElementById('u49_img').tabIndex = 0;

u49.style.cursor = 'pointer';
$axure.eventManager.click('u49', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u50'] = 'center';document.getElementById('u51_img').tabIndex = 0;

u51.style.cursor = 'pointer';
$axure.eventManager.click('u51', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u52'] = 'center';document.getElementById('u54_img').tabIndex = 0;

u54.style.cursor = 'pointer';
$axure.eventManager.click('u54', function(e) {

if (true) {

	SetPanelState('u53', 'pd0u53','fade','',250,'fade','',250);

}
});
gv_vAlignTable['u55'] = 'center';document.getElementById('u56_img').tabIndex = 0;
HookHover('u56', false);

u56.style.cursor = 'pointer';
$axure.eventManager.click('u56', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Create_Account.html');

}
});
gv_vAlignTable['u57'] = 'center';gv_vAlignTable['u59'] = 'center';gv_vAlignTable['u60'] = 'top';document.getElementById('u61_img').tabIndex = 0;

u61.style.cursor = 'pointer';
$axure.eventManager.click('u61', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('User_Profile.html');

}
});

$axure.eventManager.mouseover('u61', function(e) {
if (!IsTrueMouseOver('u61',e)) return;
if (true) {

	SetPanelState('u40', 'pd0u40','none','',500,'none','',500);

	BringToFront("u40");

	SetPanelVisibility('u40','','fade',250);

	BringToFront("u7");

}
});
gv_vAlignTable['u62'] = 'center';gv_vAlignTable['u64'] = 'center';
u65.style.cursor = 'pointer';
$axure.eventManager.click('u65', function(e) {

if (true) {

SetWidgetFormText('u65', '');

SetWidgetNotSelected('u30');
SetWidgetNotSelected('u32');
SetWidgetNotSelected('u34');
SetWidgetNotSelected('u36');
SetWidgetNotSelected('u20');
SetWidgetNotSelected('u22');
SetWidgetNotSelected('u24');
SetWidgetNotSelected('u26');
}
});

$axure.eventManager.keyup('u65', function(e) {

if (((GetWidgetText('u65')) == ('b')) || (((GetWidgetText('u65')) == ('bu')) || (((GetWidgetText('u65')) == ('but')) || (((GetWidgetText('u65')) == ('butter')) || (((GetWidgetText('u65')) == ('butt')) || (((GetWidgetText('u65')) == ('butte')) || ((GetWidgetText('u65')) == ('B')))))))) {

	SetPanelState('u17', 'pd0u17','swing','up',50,'swing','down',50);

}
else
if (((GetWidgetText('u65')) == ('t')) || (((GetWidgetText('u65')) == ('te')) || (((GetWidgetText('u65')) == ('ter')) || (((GetWidgetText('u65')) == ('teri')) || (((GetWidgetText('u65')) == ('teriy')) || (((GetWidgetText('u65')) == ('teriya')) || (((GetWidgetText('u65')) == ('teriyak')) || (((GetWidgetText('u65')) == ('teriyaki')) || ((GetWidgetText('u65')) == ('T')))))))))) {

	SetPanelState('u17', 'pd1u17','swing','up',50,'swing','down',50);

}
else
if (true) {

	SetPanelVisibility('u17','hidden','fade',50);

SetWidgetNotSelected('u30');
SetWidgetNotSelected('u32');
SetWidgetNotSelected('u34');
SetWidgetNotSelected('u36');
SetWidgetNotSelected('u20');
SetWidgetNotSelected('u22');
SetWidgetNotSelected('u24');
SetWidgetNotSelected('u26');
}
});

$axure.eventManager.blur('u65', function(e) {

if (true) {

SetWidgetFormText('u65', 'Search...');

}
});
gv_vAlignTable['u67'] = 'top';