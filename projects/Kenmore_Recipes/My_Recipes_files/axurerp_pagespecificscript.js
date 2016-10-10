for(var i = 0; i < 61; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
document.getElementById('u50_img').tabIndex = 0;

u50.style.cursor = 'pointer';
$axure.eventManager.click('u50', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Add_a_Recipe.html');

}
});
gv_vAlignTable['u51'] = 'center';document.getElementById('u52_img').tabIndex = 0;

u52.style.cursor = 'pointer';
$axure.eventManager.click('u52', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u53'] = 'center';document.getElementById('u54_img').tabIndex = 0;

u54.style.cursor = 'pointer';
$axure.eventManager.click('u54', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Grocery_List.html');

}
});
gv_vAlignTable['u55'] = 'center';document.getElementById('u56_img').tabIndex = 0;

u56.style.cursor = 'pointer';
$axure.eventManager.click('u56', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('User_Profile.html');

}
});
gv_vAlignTable['u57'] = 'center';document.getElementById('u58_img').tabIndex = 0;

u58.style.cursor = 'pointer';
$axure.eventManager.click('u58', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u59'] = 'center';gv_vAlignTable['u20'] = 'center';
u21.style.cursor = 'pointer';
$axure.eventManager.click('u21', function(e) {

if (true) {

SetWidgetFormText('u21', '');

SetWidgetNotSelected('u35');
SetWidgetNotSelected('u37');
SetWidgetNotSelected('u39');
SetWidgetNotSelected('u41');
SetWidgetNotSelected('u25');
SetWidgetNotSelected('u27');
SetWidgetNotSelected('u29');
SetWidgetNotSelected('u31');
}
});

$axure.eventManager.keyup('u21', function(e) {

if (((GetWidgetText('u21')) == ('Ad')) || (((GetWidgetText('u21')) == ('ad')) || (((GetWidgetText('u21')) == ('ad ')) || ((GetWidgetText('u21')) == ('ad attack'))))) {

	SetPanelState('u22', 'pd0u22','swing','up',50,'swing','down',50);

}
else
if (((GetWidgetText('u21')) == ('C')) || ((GetWidgetText('u21')) == ('c'))) {

	SetPanelState('u22', 'pd1u22','swing','up',50,'swing','down',50);

}
else
if (true) {

	SetPanelVisibility('u22','hidden','fade',50);

SetWidgetNotSelected('u35');
SetWidgetNotSelected('u37');
SetWidgetNotSelected('u39');
SetWidgetNotSelected('u41');
SetWidgetNotSelected('u25');
SetWidgetNotSelected('u27');
SetWidgetNotSelected('u29');
SetWidgetNotSelected('u31');
}
});

$axure.eventManager.blur('u21', function(e) {

if (true) {

SetWidgetFormText('u21', 'Search...');

}
});
document.getElementById('u25_img').tabIndex = 0;
HookHover('u25', false);

u25.style.cursor = 'pointer';
$axure.eventManager.click('u25', function(e) {

if (true) {

SetWidgetSelected('u25');
SetWidgetNotSelected('u27');
SetWidgetNotSelected('u29');
SetWidgetNotSelected('u31');
SetWidgetFormText('u21', 'Catman');

	SetPanelVisibility('u22','hidden','fade',100);

}
});
gv_vAlignTable['u26'] = 'center';document.getElementById('u27_img').tabIndex = 0;
HookHover('u27', false);

u27.style.cursor = 'pointer';
$axure.eventManager.click('u27', function(e) {

if (true) {

SetWidgetNotSelected('u25');
SetWidgetSelected('u27');
SetWidgetNotSelected('u29');
SetWidgetNotSelected('u31');
SetWidgetFormText('u21', 'Cadoodie');

	SetPanelVisibility('u22','hidden','fade',100);

}
});
gv_vAlignTable['u28'] = 'center';document.getElementById('u29_img').tabIndex = 0;
HookHover('u29', false);

u29.style.cursor = 'pointer';
$axure.eventManager.click('u29', function(e) {

if (true) {

SetWidgetNotSelected('u25');
SetWidgetNotSelected('u27');
SetWidgetSelected('u29');
SetWidgetNotSelected('u31');
SetWidgetFormText('u21', 'CZZ');

	SetPanelVisibility('u22','hidden','fade',100);

}
});
gv_vAlignTable['u30'] = 'center';document.getElementById('u31_img').tabIndex = 0;
HookHover('u31', false);

u31.style.cursor = 'pointer';
$axure.eventManager.click('u31', function(e) {

if (true) {

SetWidgetNotSelected('u25');
SetWidgetNotSelected('u27');
SetWidgetNotSelected('u29');
SetWidgetSelected('u31');
SetWidgetFormText('u21', 'Contender');

	SetPanelVisibility('u22','hidden','fade',100);

}
});
gv_vAlignTable['u32'] = 'center';document.getElementById('u35_img').tabIndex = 0;
HookHover('u35', false);

u35.style.cursor = 'pointer';
$axure.eventManager.click('u35', function(e) {

if (true) {

SetWidgetSelected('u35');
SetWidgetNotSelected('u37');
SetWidgetNotSelected('u39');
SetWidgetNotSelected('u41');
SetWidgetFormText('u21', 'Adba');

	SetPanelVisibility('u22','hidden','fade',100);

}
});
gv_vAlignTable['u36'] = 'center';document.getElementById('u37_img').tabIndex = 0;
HookHover('u37', false);

u37.style.cursor = 'pointer';
$axure.eventManager.click('u37', function(e) {

if (true) {

SetWidgetNotSelected('u35');
SetWidgetSelected('u37');
SetWidgetNotSelected('u39');
SetWidgetNotSelected('u41');
SetWidgetFormText('u21', 'Adder');

	SetPanelVisibility('u22','hidden','fade',100);

}
});
gv_vAlignTable['u38'] = 'center';document.getElementById('u39_img').tabIndex = 0;
HookHover('u39', false);

u39.style.cursor = 'pointer';
$axure.eventManager.click('u39', function(e) {

if (true) {

SetWidgetNotSelected('u35');
SetWidgetNotSelected('u37');
SetWidgetSelected('u39');
SetWidgetNotSelected('u41');
SetWidgetFormText('u21', 'Adjiffy');

	SetPanelVisibility('u22','hidden','fade',100);

}
});
gv_vAlignTable['u2'] = 'center';document.getElementById('u3_img').tabIndex = 0;
HookHover('u3', false);

u3.style.cursor = 'pointer';
$axure.eventManager.click('u3', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Recipes.html');

}
});
gv_vAlignTable['u4'] = 'center';document.getElementById('u5_img').tabIndex = 0;
HookHover('u5', false);

u5.style.cursor = 'pointer';
$axure.eventManager.click('u5', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Tips.html');

}
});
gv_vAlignTable['u6'] = 'center';document.getElementById('u7_img').tabIndex = 0;
HookHover('u7', false);

u7.style.cursor = 'pointer';
$axure.eventManager.click('u7', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Cookbooks.html');

}
});
gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u42'] = 'center';gv_vAlignTable['u40'] = 'center';document.getElementById('u41_img').tabIndex = 0;
HookHover('u41', false);

u41.style.cursor = 'pointer';
$axure.eventManager.click('u41', function(e) {

if (true) {

SetWidgetNotSelected('u35');
SetWidgetNotSelected('u37');
SetWidgetNotSelected('u39');
SetWidgetSelected('u41');
SetWidgetFormText('u21', 'Ad Attacker');

	SetPanelVisibility('u22','hidden','fade',100);

}
});
document.getElementById('u43_img').tabIndex = 0;

u43.style.cursor = 'pointer';
$axure.eventManager.click('u43', function(e) {

if (true) {

SetWidgetFormText('u21', '');

}
});
gv_vAlignTable['u44'] = 'center';
$axure.eventManager.mouseover('u48', function(e) {
if (!IsTrueMouseOver('u48',e)) return;
if (true) {

	SetPanelVisibility('u47','hidden','fade',250);

}
});
gv_vAlignTable['u46'] = 'center';gv_vAlignTable['u49'] = 'center';gv_vAlignTable['u11'] = 'center';gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u14'] = 'center';gv_vAlignTable['u16'] = 'center';
$axure.eventManager.mouseover('u17', function(e) {
if (!IsTrueMouseOver('u17',e)) return;
if (true) {

	SetPanelState('u47', 'pd0u47','none','',500,'none','',500);

	BringToFront("u47");

	SetPanelVisibility('u47','','fade',250);

}
});
gv_vAlignTable['u18'] = 'center';
$axure.eventManager.mouseover('u19', function(e) {
if (!IsTrueMouseOver('u19',e)) return;
if (true) {

}
});
