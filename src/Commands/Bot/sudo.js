const a0_0x138d3a=a0_0x29bf;(function(_0x41be0e,_0x590573){const _0x2fbcc2=a0_0x29bf,_0x18e04f=_0x41be0e();while(!![]){try{const _0x2278ef=parseInt(_0x2fbcc2(0x182))/0x1*(-parseInt(_0x2fbcc2(0x171))/0x2)+-parseInt(_0x2fbcc2(0x19e))/0x3*(parseInt(_0x2fbcc2(0x175))/0x4)+-parseInt(_0x2fbcc2(0x19a))/0x5+parseInt(_0x2fbcc2(0x179))/0x6+-parseInt(_0x2fbcc2(0x1a8))/0x7+-parseInt(_0x2fbcc2(0x196))/0x8*(-parseInt(_0x2fbcc2(0x183))/0x9)+parseInt(_0x2fbcc2(0x186))/0xa*(parseInt(_0x2fbcc2(0x192))/0xb);if(_0x2278ef===_0x590573)break;else _0x18e04f['push'](_0x18e04f['shift']());}catch(_0x4f8dc9){_0x18e04f['push'](_0x18e04f['shift']());}}}(a0_0x2c9b,0xd0f25));const fs=require('fs'),path=require(a0_0x138d3a(0x1a5)),sudoListPath=path[a0_0x138d3a(0x191)](__dirname,'..','..','Database',a0_0x138d3a(0x19b));let sudoUsers=[];fs['existsSync'](sudoListPath)?sudoUsers=JSON[a0_0x138d3a(0x17a)](fs[a0_0x138d3a(0x1a3)](sudoListPath,'utf8')):fs[a0_0x138d3a(0x18f)](sudoListPath,JSON[a0_0x138d3a(0x189)]([],null,0x2));function saveSudoList(){const _0x46eeee=a0_0x138d3a;fs[_0x46eeee(0x18f)](sudoListPath,JSON[_0x46eeee(0x189)](sudoUsers,null,0x2));}module[a0_0x138d3a(0x199)]=[{'usage':['addsudo',a0_0x138d3a(0x17f)],'description':a0_0x138d3a(0x176),'isOwnerOnly':!![],'emoji':'👑','execute':async(_0x13946c,_0x6abc3a,_0x22e3ac,_0x523c54)=>{const _0x21e96e=a0_0x138d3a;let _0x2f0d23;if(_0x6abc3a[_0x21e96e(0x19c)]['extendedTextMessage']&&_0x6abc3a['message'][_0x21e96e(0x1a9)][_0x21e96e(0x188)][_0x21e96e(0x185)])_0x2f0d23=_0x6abc3a[_0x21e96e(0x19c)]['extendedTextMessage']['contextInfo']['participant'];else _0x22e3ac[0x0]&&(_0x2f0d23=_0x22e3ac[0x0]['replace'](/[^\d]/g,'')+_0x21e96e(0x177));if(!_0x2f0d23){if(global[_0x21e96e(0x17d)]?.[_0x21e96e(0x18e)]){await _0x523c54[_0x21e96e(0x197)]('❌'),await _0x523c54[_0x21e96e(0x170)](null,{'context':'Add\x20Sudo','info':'No\x20target\x20user\x20specified'});return;}await _0x13946c[_0x21e96e(0x184)](_0x6abc3a[_0x21e96e(0x18b)][_0x21e96e(0x17b)],{'text':_0x21e96e(0x195)},{'quoted':_0x6abc3a});return;}const _0x40636d=_0x2f0d23[_0x21e96e(0x1a4)]('@')[0x0];if(sudoUsers[_0x21e96e(0x1a7)](_0x40636d)){if(global[_0x21e96e(0x17d)]?.['INVINCIBLE_MODE']){await _0x523c54['react']('❌'),await _0x523c54[_0x21e96e(0x170)](_0x40636d,{'context':_0x21e96e(0x194),'info':_0x21e96e(0x181)});return;}await _0x13946c[_0x21e96e(0x184)](_0x6abc3a[_0x21e96e(0x18b)][_0x21e96e(0x17b)],{'text':'❌\x20This\x20user\x20is\x20already\x20a\x20sudo\x20user.'},{'quoted':_0x6abc3a});return;}sudoUsers[_0x21e96e(0x187)](_0x40636d),saveSudoList(),global[_0x21e96e(0x17d)]?.[_0x21e96e(0x18e)]?await _0x523c54['react']('✅'):await _0x13946c['sendMessage'](_0x6abc3a['key']['remoteJid'],{'text':_0x21e96e(0x1a2)+_0x40636d+_0x21e96e(0x17c),'mentions':[_0x2f0d23]},{'quoted':_0x6abc3a});}},{'usage':['delsudo',a0_0x138d3a(0x1a0)],'description':'Remove\x20a\x20user\x20from\x20sudo\x20list','isOwnerOnly':!![],'emoji':'👑','execute':async(_0x38a325,_0x5ce457,_0x9bd68d,_0x1a9724)=>{const _0x5c9408=a0_0x138d3a;let _0x3bfab7;if(_0x5ce457[_0x5c9408(0x19c)]['extendedTextMessage']&&_0x5ce457[_0x5c9408(0x19c)][_0x5c9408(0x1a9)]['contextInfo'][_0x5c9408(0x185)])_0x3bfab7=_0x5ce457['message'][_0x5c9408(0x1a9)]['contextInfo'][_0x5c9408(0x185)];else _0x9bd68d[0x0]&&(_0x3bfab7=_0x9bd68d[0x0][_0x5c9408(0x18a)](/[^\d]/g,'')+_0x5c9408(0x177));if(!_0x3bfab7){if(global[_0x5c9408(0x17d)]?.[_0x5c9408(0x18e)]){await _0x1a9724['react']('❌'),await _0x1a9724[_0x5c9408(0x170)](null,{'context':_0x5c9408(0x18c),'info':_0x5c9408(0x198)});return;}await _0x38a325[_0x5c9408(0x184)](_0x5ce457[_0x5c9408(0x18b)]['remoteJid'],{'text':_0x5c9408(0x19d)},{'quoted':_0x5ce457});return;}const _0x121f00=_0x3bfab7[_0x5c9408(0x1a4)]('@')[0x0];if(!sudoUsers['includes'](_0x121f00)){if(global['settings']?.[_0x5c9408(0x18e)]){await _0x1a9724[_0x5c9408(0x197)]('❌'),await _0x1a9724[_0x5c9408(0x170)](_0x121f00,{'context':_0x5c9408(0x18c),'info':_0x5c9408(0x190)});return;}await _0x38a325['sendMessage'](_0x5ce457[_0x5c9408(0x18b)]['remoteJid'],{'text':_0x5c9408(0x18d)},{'quoted':_0x5ce457});return;}sudoUsers=sudoUsers[_0x5c9408(0x19f)](_0x5b8684=>_0x5b8684!==_0x121f00),saveSudoList(),global[_0x5c9408(0x17d)]?.[_0x5c9408(0x18e)]?await _0x1a9724['react']('✅'):await _0x38a325[_0x5c9408(0x184)](_0x5ce457[_0x5c9408(0x18b)]['remoteJid'],{'text':_0x5c9408(0x1a2)+_0x121f00+_0x5c9408(0x180),'mentions':[_0x3bfab7]},{'quoted':_0x5ce457});}},{'usage':['listsudo',a0_0x138d3a(0x178)],'description':a0_0x138d3a(0x16f),'isOwnerOnly':!![],'emoji':'📋','execute':async(_0x1985a9,_0x391845)=>{const _0x4e3755=a0_0x138d3a;if(sudoUsers[_0x4e3755(0x172)]===0x0){if(global['settings']?.[_0x4e3755(0x18e)]){await kord[_0x4e3755(0x197)]('❌'),await kord[_0x4e3755(0x170)](null,{'context':_0x4e3755(0x1a6),'info':_0x4e3755(0x174)});return;}await _0x1985a9[_0x4e3755(0x184)](_0x391845[_0x4e3755(0x18b)][_0x4e3755(0x17b)],{'text':_0x4e3755(0x1a1)},{'quoted':_0x391845});return;}let _0x2c0584='📋\x20*SUDO\x20USERS\x20LIST*\x0a\x0a';for(const _0x2208f3 of sudoUsers){_0x2c0584+=_0x4e3755(0x17e)+_0x2208f3+'\x0a';}global['settings']?.[_0x4e3755(0x18e)]?(await kord[_0x4e3755(0x197)]('📋'),await kord['sendErr'](_0x4e3755(0x193),{'context':_0x2c0584})):await _0x1985a9['sendMessage'](_0x391845['key'][_0x4e3755(0x17b)],{'text':_0x2c0584,'mentions':sudoUsers[_0x4e3755(0x173)](_0x52e461=>_0x52e461+_0x4e3755(0x177))},{'quoted':_0x391845});}}];function a0_0x29bf(_0x1d3ef1,_0x195e39){const _0x2c9b1b=a0_0x2c9b();return a0_0x29bf=function(_0x29bf6c,_0xc1618a){_0x29bf6c=_0x29bf6c-0x16f;let _0x11dd20=_0x2c9b1b[_0x29bf6c];return _0x11dd20;},a0_0x29bf(_0x1d3ef1,_0x195e39);}function a0_0x2c9b(){const _0x2b53ad=['contextInfo','stringify','replace','key','Remove\x20Sudo','❌\x20This\x20user\x20is\x20not\x20a\x20sudo\x20user.','INVINCIBLE_MODE','writeFileSync','User\x20not\x20in\x20sudo\x20list','join','23401543iugToX','Sudo\x20List','Add\x20Sudo','❌\x20Please\x20specify\x20a\x20user\x20to\x20add\x20as\x20sudo\x20or\x20reply\x20to\x20their\x20message.','752BoQeQx','react','No\x20target\x20user\x20specified','exports','6564545tJhhoM','sudo.json','message','❌\x20Please\x20specify\x20a\x20user\x20to\x20remove\x20from\x20sudo\x20or\x20reply\x20to\x20their\x20message.','3gCYwJC','filter','rmsudo','📋\x20No\x20sudo\x20users\x20found.','✅\x20User\x20@','readFileSync','split','path','List\x20Sudo','includes','6691237qkZnls','extendedTextMessage','List\x20all\x20sudo\x20users','sendErr','16332MMAxys','length','map','No\x20sudo\x20users\x20found','1244040lJiJqF','Add\x20a\x20user\x20to\x20sudo\x20list','@s.whatsapp.net','allsudo','5632620pbigqt','parse','remoteJid','\x20has\x20been\x20added\x20to\x20sudo\x20list.','settings','•\x20@','setsudo','\x20has\x20been\x20removed\x20from\x20sudo\x20list.','User\x20already\x20in\x20sudo\x20list','114PsWVyU','124506IGCfad','sendMessage','participant','10FZJGFc','push'];a0_0x2c9b=function(){return _0x2b53ad;};return a0_0x2c9b();}