const a0_0x1e15a1=a0_0x1edb;function a0_0x1edb(_0x154461,_0xa7f137){const _0x171682=a0_0x1716();return a0_0x1edb=function(_0x1edbf9,_0x28c231){_0x1edbf9=_0x1edbf9-0x13d;let _0x3c0d03=_0x171682[_0x1edbf9];return _0x3c0d03;},a0_0x1edb(_0x154461,_0xa7f137);}(function(_0x38ce1e,_0x2f7f2d){const _0x1c50fd=a0_0x1edb,_0x55d146=_0x38ce1e();while(!![]){try{const _0x436917=-parseInt(_0x1c50fd(0x17a))/0x1+-parseInt(_0x1c50fd(0x16e))/0x2*(parseInt(_0x1c50fd(0x150))/0x3)+parseInt(_0x1c50fd(0x153))/0x4*(parseInt(_0x1c50fd(0x16a))/0x5)+-parseInt(_0x1c50fd(0x146))/0x6*(-parseInt(_0x1c50fd(0x174))/0x7)+parseInt(_0x1c50fd(0x16c))/0x8+parseInt(_0x1c50fd(0x170))/0x9*(parseInt(_0x1c50fd(0x15f))/0xa)+-parseInt(_0x1c50fd(0x160))/0xb*(parseInt(_0x1c50fd(0x14e))/0xc);if(_0x436917===_0x2f7f2d)break;else _0x55d146['push'](_0x55d146['shift']());}catch(_0x5660f8){_0x55d146['push'](_0x55d146['shift']());}}}(a0_0x1716,0x7e12f));const gis=require(a0_0x1e15a1(0x13f)),{promisify}=require('util'),{v4:uuidv4}=require(a0_0x1e15a1(0x15d)),fs=require('fs')[a0_0x1e15a1(0x166)],path=require(a0_0x1e15a1(0x16b)),axios=require('axios'),gisPromise=promisify(gis),emojis={'search':'🔍','found':a0_0x1e15a1(0x14b),'noResults':'😕','error':'🚫','downloading':'⏬','done':'✅','warning':'⚠️'};function a0_0x1716(){const _0x574dde=['writeFile','settings','warning','react','911447WnDgIm','./temp','found','g-i-s','data','from','binary','.jpg','Google\x20Image\x20Search','No\x20images\x20found\x20for\x20the\x20search\x20query!','6mzDvsM','pinterest.com','mkdir','\x22...','url','🖼️','googleimage','&safe=false','24PHIyRV','Search','3mvWuIX','arraybuffer','sendErr','200icgcdp','Failed\x20to\x20download\x20image:\x20','map','sendImage','length','ENOENT','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/91.0.4472.124\x20Safari/537.36','code','get','slice','uuid','INVINCIBLE_MODE','10kKvPSM','7106187Pninfx','error','join','\x20KB)','reply','filename','promises','search','imagesearch','\x20Downloading\x20and\x20sending\x203\x20images\x20for\x20\x22','78875aJHjTV','path','6895792gfWDEI','\x20An\x20error\x20occurred\x20while\x20searching\x20for\x20images.\x20Please\x20try\x20again\x20later.','16962kdXROj','Search\x20for\x20images\x20using\x20Google\x20and\x20download\x20them.','5501520vYUult','Error\x20checking\x20directory:','deviantart.com','downloading','3264499roRMTo','noResults'];a0_0x1716=function(){return _0x574dde;};return a0_0x1716();}module['exports']={'usage':['gimage',a0_0x1e15a1(0x14c),a0_0x1e15a1(0x168),'img'],'desc':a0_0x1e15a1(0x16f),'commandType':a0_0x1e15a1(0x14f),'isGroupOnly':![],'isAdminOnly':![],'isPrivateOnly':![],'emoji':a0_0x1e15a1(0x14b),async 'execute'(_0xbd5ad3,_0x1d52ba,_0x19ef66,_0x550e82){const _0xee00d3=a0_0x1e15a1;try{const _0x3d5e7a=_0x19ef66[_0xee00d3(0x162)]('\x20');await _0x550e82[_0xee00d3(0x179)](emojis[_0xee00d3(0x167)]);if(!_0x3d5e7a)return global[_0xee00d3(0x177)]?.[_0xee00d3(0x15e)]?(await _0x550e82[_0xee00d3(0x179)]('🚫'),await _0x550e82['sendErr'](_0x3d5e7a,{'context':_0xee00d3(0x144),'info':'User\x20did\x20not\x20provide\x20a\x20search\x20query!'})):await _0x550e82[_0xee00d3(0x164)](emojis[_0xee00d3(0x178)]+'\x20Please\x20provide\x20a\x20search\x20query.');const _0x37f2d9=await googleImageSearch(_0x3d5e7a);if(_0x37f2d9[_0xee00d3(0x157)]===0x0)return global['settings']?.[_0xee00d3(0x15e)]?(await _0x550e82['react']('🚫'),await _0x550e82[_0xee00d3(0x152)](_0x3d5e7a,{'context':_0xee00d3(0x144),'info':_0xee00d3(0x145)})):(await _0x550e82['react'](emojis[_0xee00d3(0x175)]),await _0x550e82['reply'](emojis[_0xee00d3(0x175)]+'\x20No\x20images\x20found\x20for\x20\x22'+_0x3d5e7a+'\x22.'));await _0x550e82[_0xee00d3(0x179)](emojis[_0xee00d3(0x13e)]);const _0x1c7509=_0x37f2d9[_0xee00d3(0x15c)](0x0,0x3),_0x20299a=_0x1c7509[_0xee00d3(0x155)](downloadImage);await _0x550e82['reply'](emojis[_0xee00d3(0x173)]+_0xee00d3(0x169)+_0x3d5e7a+_0xee00d3(0x149));for(const _0x5f0e4c of _0x20299a){const _0x41e1ed=await _0x5f0e4c;if(_0x41e1ed){const _0x377c5c=await _0x550e82[_0xee00d3(0x156)](_0x41e1ed[_0xee00d3(0x16b)],'Image:\x20'+_0x41e1ed[_0xee00d3(0x165)]+'\x20('+_0x41e1ed['size']+_0xee00d3(0x163));_0x377c5c&&await fs['unlink'](_0x41e1ed[_0xee00d3(0x16b)]);}}await _0x550e82[_0xee00d3(0x179)](emojis['done']);}catch(_0x5d785c){if(global['settings']?.[_0xee00d3(0x15e)])return await _0x550e82[_0xee00d3(0x179)](emojis[_0xee00d3(0x161)]),await _0x550e82[_0xee00d3(0x152)](_0x5d785c,{'context':_0xee00d3(0x144),'info':'An\x20error\x20occurred\x20during\x20image\x20search'});else await _0x550e82[_0xee00d3(0x179)](emojis[_0xee00d3(0x161)]),await _0x550e82[_0xee00d3(0x164)](emojis['error']+_0xee00d3(0x16d));}}};async function googleImageSearch(_0x27601f){const _0xad1781=a0_0x1e15a1,_0x21fa7e={'searchTerm':_0x27601f,'queryStringAddition':_0xad1781(0x14d),'filterOutDomains':[_0xad1781(0x147),_0xad1781(0x172)]};return await gisPromise(_0x21fa7e);}async function downloadImage(_0x217798){const _0x5ef738=a0_0x1e15a1;try{const _0x1bbfa7=await axios[_0x5ef738(0x15b)](_0x217798[_0x5ef738(0x14a)],{'responseType':_0x5ef738(0x151),'timeout':0x1388,'headers':{'User-Agent':_0x5ef738(0x159)}}),_0x114b7e=Buffer[_0x5ef738(0x141)](_0x1bbfa7[_0x5ef738(0x140)],_0x5ef738(0x142)),_0x3a5963='image_'+uuidv4()[_0x5ef738(0x15c)](0x0,0x8)+_0x5ef738(0x143),_0xc0dc41=path['join'](_0x5ef738(0x13d));try{await fs['access'](_0xc0dc41);}catch(_0x5a78f0){_0x5a78f0[_0x5ef738(0x15a)]===_0x5ef738(0x158)?await fs[_0x5ef738(0x148)](_0xc0dc41):console['error'](_0x5ef738(0x171),_0x5a78f0);}const _0x3d0ec5=path[_0x5ef738(0x162)](_0x5ef738(0x13d),_0x3a5963);await fs[_0x5ef738(0x176)](_0x3d0ec5,_0x114b7e);const _0x33c952=(_0x114b7e[_0x5ef738(0x157)]/0x400)['toFixed'](0x2);return{'filename':_0x3a5963,'path':_0x3d0ec5,'size':_0x33c952};}catch(_0x10f96f){return console['error'](_0x5ef738(0x154)+_0x217798[_0x5ef738(0x14a)],_0x10f96f),null;}}