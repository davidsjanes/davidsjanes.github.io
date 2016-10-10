for(var i = 0; i < 153; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u80'] = 'top';gv_vAlignTable['u82'] = 'top';gv_vAlignTable['u84'] = 'top';gv_vAlignTable['u86'] = 'top';gv_vAlignTable['u88'] = 'top';gv_vAlignTable['u90'] = 'top';gv_vAlignTable['u92'] = 'top';document.getElementById('u13_img').tabIndex = 0;
HookHover('u13', false);

u13.style.cursor = 'pointer';
$axure.eventManager.click('u13', function(e) {

if (true) {

SetWidgetSelected('u13');
SetWidgetNotSelected('u15');
SetWidgetNotSelected('u17');
SetWidgetNotSelected('u19');
SetWidgetFormText('u58', 'Catman');

	SetPanelVisibility('u10','hidden','fade',100);

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Search_Results.html');

}
});
gv_vAlignTable['u14'] = 'center';document.getElementById('u15_img').tabIndex = 0;
HookHover('u15', false);

u15.style.cursor = 'pointer';
$axure.eventManager.click('u15', function(e) {

if (true) {

SetWidgetNotSelected('u13');
SetWidgetSelected('u15');
SetWidgetNotSelected('u17');
SetWidgetNotSelected('u19');
SetWidgetFormText('u58', 'Cadoodie');

	SetPanelVisibility('u10','hidden','fade',100);

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Search_Results.html');

}
});
gv_vAlignTable['u16'] = 'center';document.getElementById('u17_img').tabIndex = 0;
HookHover('u17', false);

u17.style.cursor = 'pointer';
$axure.eventManager.click('u17', function(e) {

if (true) {

SetWidgetNotSelected('u13');
SetWidgetNotSelected('u15');
SetWidgetSelected('u17');
SetWidgetNotSelected('u19');
SetWidgetFormText('u58', 'CZZ');

	SetPanelVisibility('u10','hidden','fade',100);

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Search_Results.html');

}
});
gv_vAlignTable['u18'] = 'center';document.getElementById('u19_img').tabIndex = 0;
HookHover('u19', false);

u19.style.cursor = 'pointer';
$axure.eventManager.click('u19', function(e) {

if (true) {

SetWidgetNotSelected('u13');
SetWidgetNotSelected('u15');
SetWidgetNotSelected('u17');
SetWidgetSelected('u19');
SetWidgetFormText('u58', 'Contender');

	SetPanelVisibility('u10','hidden','fade',100);

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Search_Results.html');

}
});
gv_vAlignTable['u110'] = 'top';gv_vAlignTable['u112'] = 'center';gv_vAlignTable['u114'] = 'center';gv_vAlignTable['u20'] = 'center';document.getElementById('u23_img').tabIndex = 0;
HookHover('u23', false);

u23.style.cursor = 'pointer';
$axure.eventManager.click('u23', function(e) {

if (true) {

SetWidgetSelected('u23');
SetWidgetNotSelected('u25');
SetWidgetNotSelected('u27');
SetWidgetNotSelected('u29');
SetWidgetFormText('u58', 'Butter');

	SetPanelVisibility('u10','hidden','fade',100);

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Search_Results.html');

}
});
gv_vAlignTable['u24'] = 'center';document.getElementById('u25_img').tabIndex = 0;
HookHover('u25', false);

u25.style.cursor = 'pointer';
$axure.eventManager.click('u25', function(e) {

if (true) {

SetWidgetNotSelected('u23');
SetWidgetSelected('u25');
SetWidgetNotSelected('u27');
SetWidgetNotSelected('u29');
SetWidgetFormText('u58', 'Butterfly Shrimp');

	SetPanelVisibility('u10','hidden','fade',100);

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Search_Results.html');

}
});
gv_vAlignTable['u26'] = 'center';document.getElementById('u27_img').tabIndex = 0;
HookHover('u27', false);

u27.style.cursor = 'pointer';
$axure.eventManager.click('u27', function(e) {

if (true) {

SetWidgetNotSelected('u23');
SetWidgetNotSelected('u25');
SetWidgetSelected('u27');
SetWidgetNotSelected('u29');
SetWidgetFormText('u58', 'Butterfly Chops');

	SetPanelVisibility('u10','hidden','fade',100);

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Search_Results.html');

}
});
gv_vAlignTable['u28'] = 'center';document.getElementById('u29_img').tabIndex = 0;
HookHover('u29', false);

u29.style.cursor = 'pointer';
$axure.eventManager.click('u29', function(e) {

if (true) {

SetWidgetNotSelected('u23');
SetWidgetNotSelected('u25');
SetWidgetNotSelected('u27');
SetWidgetSelected('u29');
SetWidgetFormText('u58', 'Butter-Dip');

	SetPanelVisibility('u10','hidden','fade',100);

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Search_Results.html');

}
});
gv_vAlignTable['u100'] = 'top';gv_vAlignTable['u102'] = 'top';gv_vAlignTable['u104'] = 'top';gv_vAlignTable['u106'] = 'top';gv_vAlignTable['u108'] = 'top';
$axure.eventManager.focus('u127', function(e) {

if ((GetWidgetText('u126')) == ('')) {

SetWidgetFormText('u126', GetWidgetText('u127'));

SetWidgetFormText('u127', '');

}
});

$axure.eventManager.blur('u127', function(e) {

if ((GetWidgetText('u127')) == ('')) {

SetWidgetFormText('u127', GetWidgetText('u126'));

SetWidgetFormText('u126', '');

}
});
document.getElementById('u128_img').tabIndex = 0;
HookHover('u128', false);

u128.style.cursor = 'pointer';
$axure.eventManager.click('u128', function(e) {

if (true) {

	SetPanelVisibility('u132','','fade',250);

	MoveWidgetTo('u150', GetNum('20'), GetNum('555'),'swing',250);

SetWidgetRichText('u137', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetWidgetText('u127')) + '</span></p>');

}
});
gv_vAlignTable['u129'] = 'center';gv_vAlignTable['u30'] = 'center';gv_vAlignTable['u32'] = 'center';
$axure.eventManager.mouseover('u34', function(e) {
if (!IsTrueMouseOver('u34',e)) return;
if (true) {

	SetPanelVisibility('u33','hidden','fade',250);

}
});
gv_vAlignTable['u35'] = 'center';document.getElementById('u36_img').tabIndex = 0;

u36.style.cursor = 'pointer';
$axure.eventManager.click('u36', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Add_a_Recipe.html');

}
});
gv_vAlignTable['u37'] = 'center';document.getElementById('u38_img').tabIndex = 0;

u38.style.cursor = 'pointer';
$axure.eventManager.click('u38', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u94'] = 'top';gv_vAlignTable['u96'] = 'top';gv_vAlignTable['u98'] = 'top';gv_vAlignTable['u116'] = 'center';gv_vAlignTable['u118'] = 'center';document.getElementById('u40_img').tabIndex = 0;

u40.style.cursor = 'pointer';
$axure.eventManager.click('u40', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('User_Profile.html');

}
});
gv_vAlignTable['u41'] = 'center';document.getElementById('u42_img').tabIndex = 0;

u42.style.cursor = 'pointer';
$axure.eventManager.click('u42', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Add_a_Recipe.html');

}
});
gv_vAlignTable['u43'] = 'center';document.getElementById('u44_img').tabIndex = 0;

u44.style.cursor = 'pointer';
$axure.eventManager.click('u44', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u45'] = 'center';document.getElementById('u47_img').tabIndex = 0;

u47.style.cursor = 'pointer';
$axure.eventManager.click('u47', function(e) {

if (true) {

	SetPanelState('u46', 'pd0u46','fade','',250,'fade','',250);

}
});
gv_vAlignTable['u48'] = 'center';document.getElementById('u49_img').tabIndex = 0;
HookHover('u49', false);

u49.style.cursor = 'pointer';
$axure.eventManager.click('u49', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Create_Account.html');

}
});
gv_vAlignTable['u120'] = 'center';gv_vAlignTable['u122'] = 'center';gv_vAlignTable['u124'] = 'center';gv_vAlignTable['u2'] = 'center';document.getElementById('u3_img').tabIndex = 0;

u3.style.cursor = 'pointer';
$axure.eventManager.click('u3', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Recipes.html');

}
});
gv_vAlignTable['u4'] = 'center';document.getElementById('u5_img').tabIndex = 0;

u5.style.cursor = 'pointer';
$axure.eventManager.click('u5', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Cookbooks.html');

}
});
gv_vAlignTable['u6'] = 'center';
$axure.eventManager.mouseover('u8', function(e) {
if (!IsTrueMouseOver('u8',e)) return;
if (true) {

}
});
gv_vAlignTable['u9'] = 'center';gv_vAlignTable['u50'] = 'center';gv_vAlignTable['u52'] = 'center';gv_vAlignTable['u53'] = 'top';document.getElementById('u54_img').tabIndex = 0;

u54.style.cursor = 'pointer';
$axure.eventManager.click('u54', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('User_Profile.html');

}
});

$axure.eventManager.mouseover('u54', function(e) {
if (!IsTrueMouseOver('u54',e)) return;
if (true) {

	SetPanelState('u33', 'pd0u33','none','',500,'none','',500);

	BringToFront("u33");

	SetPanelVisibility('u33','','fade',250);

	BringToFront("u0");

}
});
gv_vAlignTable['u55'] = 'center';gv_vAlignTable['u57'] = 'center';
u58.style.cursor = 'pointer';
$axure.eventManager.click('u58', function(e) {

if (true) {

SetWidgetFormText('u58', '');

SetWidgetNotSelected('u23');
SetWidgetNotSelected('u25');
SetWidgetNotSelected('u27');
SetWidgetNotSelected('u29');
SetWidgetNotSelected('u13');
SetWidgetNotSelected('u15');
SetWidgetNotSelected('u17');
SetWidgetNotSelected('u19');
}
});

$axure.eventManager.keyup('u58', function(e) {

if (((GetWidgetText('u58')) == ('b')) || (((GetWidgetText('u58')) == ('bu')) || (((GetWidgetText('u58')) == ('but')) || (((GetWidgetText('u58')) == ('butter')) || (((GetWidgetText('u58')) == ('butt')) || (((GetWidgetText('u58')) == ('butte')) || ((GetWidgetText('u58')) == ('B')))))))) {

	SetPanelState('u10', 'pd0u10','swing','up',50,'swing','down',50);

}
else
if (((GetWidgetText('u58')) == ('t')) || (((GetWidgetText('u58')) == ('te')) || (((GetWidgetText('u58')) == ('ter')) || (((GetWidgetText('u58')) == ('teri')) || (((GetWidgetText('u58')) == ('teriy')) || (((GetWidgetText('u58')) == ('teriya')) || (((GetWidgetText('u58')) == ('teriyak')) || (((GetWidgetText('u58')) == ('teriyaki')) || ((GetWidgetText('u58')) == ('T')))))))))) {

	SetPanelState('u10', 'pd1u10','swing','up',50,'swing','down',50);

}
else
if (true) {

	SetPanelVisibility('u10','hidden','fade',50);

SetWidgetNotSelected('u23');
SetWidgetNotSelected('u25');
SetWidgetNotSelected('u27');
SetWidgetNotSelected('u29');
SetWidgetNotSelected('u13');
SetWidgetNotSelected('u15');
SetWidgetNotSelected('u17');
SetWidgetNotSelected('u19');
}
});

$axure.eventManager.blur('u58', function(e) {

if (true) {

SetWidgetFormText('u58', 'Search...');

}
});
HookHover('u130', false);
gv_vAlignTable['u131'] = 'center';gv_vAlignTable['u135'] = 'top';gv_vAlignTable['u137'] = 'top';gv_vAlignTable['u139'] = 'top';gv_vAlignTable['u61'] = 'top';gv_vAlignTable['u64'] = 'top';gv_vAlignTable['u66'] = 'top';gv_vAlignTable['u68'] = 'top';document.getElementById('u140_img').tabIndex = 0;
HookHover('u140', false);

u140.style.cursor = 'pointer';
$axure.eventManager.click('u140', function(e) {

if (true) {

	SetPanelVisibility('u142','','none',500);

	var obj1 = document.getElementById("u143");
    obj1.focus();

}
});
gv_vAlignTable['u141'] = 'center';
$axure.eventManager.blur('u143', function(e) {

if ((GetWidgetText('u143')) == ('')) {

SetWidgetRichText('u141', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:13px;font-weight:bold;font-style:italic;text-decoration:none;color:#999999;">click here to set...</span></p>');

	SetPanelVisibility('u142','hidden','none',500);

}
else
if (true) {

SetGlobalVariableValue('temp', GetWidgetText('u143'));

SetWidgetRichText('u141', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#000000;">' + (GetGlobalVariableValue('temp')) + '</span></p>');

	SetPanelVisibility('u142','hidden','none',500);

}
});
document.getElementById('u144_img').tabIndex = 0;
HookHover('u144', false);

u144.style.cursor = 'pointer';
$axure.eventManager.click('u144', function(e) {

if (true) {

	SetPanelVisibility('u146','','none',500);

	var obj1 = document.getElementById("u147");
    obj1.focus();

}
});
gv_vAlignTable['u145'] = 'center';
$axure.eventManager.blur('u147', function(e) {

if ((GetWidgetText('u147')) == ('')) {

SetWidgetRichText('u145', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:13px;font-weight:bold;font-style:italic;text-decoration:none;color:#999999;">click here to set...</span></p>');

	SetPanelVisibility('u146','hidden','none',500);

}
else
if (true) {

SetGlobalVariableValue('temp', GetWidgetText('u147'));

SetWidgetRichText('u145', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#000000;">' + (GetGlobalVariableValue('temp')) + '</span></p>');

	SetPanelVisibility('u146','hidden','none',500);

}
});
document.getElementById('u148_img').tabIndex = 0;

u148.style.cursor = 'pointer';
$axure.eventManager.click('u148', function(e) {

if (true) {

	SetPanelVisibility('u132','hidden','fade',250);

	MoveWidgetTo('u150', GetNum('20'), GetNum('520'),'swing',250);

}
});
gv_vAlignTable['u149'] = 'center';gv_vAlignTable['u70'] = 'top';gv_vAlignTable['u72'] = 'top';document.getElementById('u73_img').tabIndex = 0;

u73.style.cursor = 'pointer';
$axure.eventManager.click('u73', function(e) {

if (true) {

}
});
gv_vAlignTable['u74'] = 'top';gv_vAlignTable['u76'] = 'top';gv_vAlignTable['u78'] = 'top';HookHover('u151', false);
gv_vAlignTable['u152'] = 'center';