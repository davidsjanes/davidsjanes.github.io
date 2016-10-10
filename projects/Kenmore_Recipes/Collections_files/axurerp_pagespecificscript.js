for(var i = 0; i < 68; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u50'] = 'center';gv_vAlignTable['u52'] = 'center';
$axure.eventManager.mouseout('u55', function(e) {
if (!IsTrueMouseOut('u55',e)) return;
if (true) {

	SetPanelVisibility('u54','hidden','fade',500);

}
});
gv_vAlignTable['u56'] = 'center';gv_vAlignTable['u58'] = 'center';gv_vAlignTable['u59'] = 'top';gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u22'] = 'center';
$axure.eventManager.mouseover('u23', function(e) {
if (!IsTrueMouseOver('u23',e)) return;
if (true) {

	SetPanelState('u54', 'pd1u54','fade','',500,'fade','',500);

	BringToFront("u54");

	SetPanelVisibility('u54','','fade',500);

}
});
gv_vAlignTable['u24'] = 'center';
$axure.eventManager.mouseover('u25', function(e) {
if (!IsTrueMouseOver('u25',e)) return;
if (true) {

	SetPanelVisibility('u54','','none',500);

}
});
gv_vAlignTable['u26'] = 'center';
u27.style.cursor = 'pointer';
$axure.eventManager.click('u27', function(e) {

if (true) {

SetWidgetFormText('u27', '');

SetWidgetNotSelected('u41');
SetWidgetNotSelected('u43');
SetWidgetNotSelected('u45');
SetWidgetNotSelected('u47');
SetWidgetNotSelected('u31');
SetWidgetNotSelected('u33');
SetWidgetNotSelected('u35');
SetWidgetNotSelected('u37');
}
});

$axure.eventManager.keyup('u27', function(e) {

if (((GetWidgetText('u27')) == ('Ad')) || (((GetWidgetText('u27')) == ('ad')) || (((GetWidgetText('u27')) == ('ad ')) || ((GetWidgetText('u27')) == ('ad attack'))))) {

	SetPanelState('u28', 'pd0u28','swing','up',50,'swing','down',50);

}
else
if (((GetWidgetText('u27')) == ('C')) || ((GetWidgetText('u27')) == ('c'))) {

	SetPanelState('u28', 'pd1u28','swing','up',50,'swing','down',50);

}
else
if (true) {

	SetPanelVisibility('u28','hidden','fade',50);

SetWidgetNotSelected('u41');
SetWidgetNotSelected('u43');
SetWidgetNotSelected('u45');
SetWidgetNotSelected('u47');
SetWidgetNotSelected('u31');
SetWidgetNotSelected('u33');
SetWidgetNotSelected('u35');
SetWidgetNotSelected('u37');
}
});

$axure.eventManager.blur('u27', function(e) {

if (true) {

SetWidgetFormText('u27', 'Search...');

}
});
gv_vAlignTable['u60'] = 'top';gv_vAlignTable['u61'] = 'top';gv_vAlignTable['u62'] = 'top';gv_vAlignTable['u63'] = 'top';gv_vAlignTable['u64'] = 'top';document.getElementById('u65_img').tabIndex = 0;

u65.style.cursor = 'pointer';
$axure.eventManager.click('u65', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Recipes.html');

}
});

$axure.eventManager.mouseout('u65', function(e) {
if (!IsTrueMouseOut('u65',e)) return;
if (true) {

	SetPanelVisibility('u54','hidden','fade',500);

}
});
gv_vAlignTable['u66'] = 'center';document.getElementById('u31_img').tabIndex = 0;
HookHover('u31', false);

u31.style.cursor = 'pointer';
$axure.eventManager.click('u31', function(e) {

if (true) {

SetWidgetSelected('u31');
SetWidgetNotSelected('u33');
SetWidgetNotSelected('u35');
SetWidgetNotSelected('u37');
SetWidgetFormText('u27', 'Catman');

	SetPanelVisibility('u28','hidden','fade',100);

}
});
gv_vAlignTable['u32'] = 'center';document.getElementById('u33_img').tabIndex = 0;
HookHover('u33', false);

u33.style.cursor = 'pointer';
$axure.eventManager.click('u33', function(e) {

if (true) {

SetWidgetNotSelected('u31');
SetWidgetSelected('u33');
SetWidgetNotSelected('u35');
SetWidgetNotSelected('u37');
SetWidgetFormText('u27', 'Cadoodie');

	SetPanelVisibility('u28','hidden','fade',100);

}
});
gv_vAlignTable['u34'] = 'center';document.getElementById('u35_img').tabIndex = 0;
HookHover('u35', false);

u35.style.cursor = 'pointer';
$axure.eventManager.click('u35', function(e) {

if (true) {

SetWidgetNotSelected('u31');
SetWidgetNotSelected('u33');
SetWidgetSelected('u35');
SetWidgetNotSelected('u37');
SetWidgetFormText('u27', 'CZZ');

	SetPanelVisibility('u28','hidden','fade',100);

}
});
gv_vAlignTable['u36'] = 'center';document.getElementById('u37_img').tabIndex = 0;
HookHover('u37', false);

u37.style.cursor = 'pointer';
$axure.eventManager.click('u37', function(e) {

if (true) {

SetWidgetNotSelected('u31');
SetWidgetNotSelected('u33');
SetWidgetNotSelected('u35');
SetWidgetSelected('u37');
SetWidgetFormText('u27', 'Contender');

	SetPanelVisibility('u28','hidden','fade',100);

}
});
gv_vAlignTable['u38'] = 'center';gv_vAlignTable['u2'] = 'center';document.getElementById('u3_img').tabIndex = 0;
HookHover('u3', false);

u3.style.cursor = 'pointer';
$axure.eventManager.click('u3', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Recipes.html');

}
});

$axure.eventManager.mouseover('u3', function(e) {
if (!IsTrueMouseOver('u3',e)) return;
if (true) {

	SetPanelState('u54', 'pd0u54','fade','',500,'fade','',500);

	BringToFront("u54");

	SetPanelVisibility('u54','','fade',500);

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

$axure.eventManager.mouseover('u5', function(e) {
if (!IsTrueMouseOver('u5',e)) return;
if (true) {

	SetPanelVisibility('u54','hidden','fade',500);

}
});
gv_vAlignTable['u6'] = 'center';document.getElementById('u7_img').tabIndex = 0;
HookHover('u7', false);

u7.style.cursor = 'pointer';
$axure.eventManager.click('u7', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});

$axure.eventManager.mouseover('u7', function(e) {
if (!IsTrueMouseOver('u7',e)) return;
if (true) {

	SetPanelVisibility('u54','hidden','fade',500);

}
});
gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u42'] = 'center';document.getElementById('u41_img').tabIndex = 0;
HookHover('u41', false);

u41.style.cursor = 'pointer';
$axure.eventManager.click('u41', function(e) {

if (true) {

SetWidgetSelected('u41');
SetWidgetNotSelected('u43');
SetWidgetNotSelected('u45');
SetWidgetNotSelected('u47');
SetWidgetFormText('u27', 'Adba');

	SetPanelVisibility('u28','hidden','fade',100);

}
});
document.getElementById('u45_img').tabIndex = 0;
HookHover('u45', false);

u45.style.cursor = 'pointer';
$axure.eventManager.click('u45', function(e) {

if (true) {

SetWidgetNotSelected('u41');
SetWidgetNotSelected('u43');
SetWidgetSelected('u45');
SetWidgetNotSelected('u47');
SetWidgetFormText('u27', 'Adjiffy');

	SetPanelVisibility('u28','hidden','fade',100);

}
});
document.getElementById('u43_img').tabIndex = 0;
HookHover('u43', false);

u43.style.cursor = 'pointer';
$axure.eventManager.click('u43', function(e) {

if (true) {

SetWidgetNotSelected('u41');
SetWidgetSelected('u43');
SetWidgetNotSelected('u45');
SetWidgetNotSelected('u47');
SetWidgetFormText('u27', 'Adder');

	SetPanelVisibility('u28','hidden','fade',100);

}
});
gv_vAlignTable['u44'] = 'center';gv_vAlignTable['u48'] = 'center';gv_vAlignTable['u46'] = 'center';document.getElementById('u47_img').tabIndex = 0;
HookHover('u47', false);

u47.style.cursor = 'pointer';
$axure.eventManager.click('u47', function(e) {

if (true) {

SetWidgetNotSelected('u41');
SetWidgetNotSelected('u43');
SetWidgetNotSelected('u45');
SetWidgetSelected('u47');
SetWidgetFormText('u27', 'Ad Attacker');

	SetPanelVisibility('u28','hidden','fade',100);

}
});
document.getElementById('u49_img').tabIndex = 0;

u49.style.cursor = 'pointer';
$axure.eventManager.click('u49', function(e) {

if (true) {

SetWidgetFormText('u27', '');

}
});
gv_vAlignTable['u11'] = 'center';gv_vAlignTable['u12'] = 'top';document.getElementById('u13_img').tabIndex = 0;

u13.style.cursor = 'pointer';
$axure.eventManager.click('u13', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});

$axure.eventManager.mouseover('u13', function(e) {
if (!IsTrueMouseOver('u13',e)) return;
if (true) {

	SetPanelVisibility('u54','hidden','fade',500);

}
});
gv_vAlignTable['u14'] = 'center';