const a0_0x26bfb7=a0_0xe023;function a0_0xd5e3(){const _0xe859f9=['>\x20©\x20ɪɴᴛᴇʟʟɪɢᴇɴᴄᴇ\x20ʙʏ\x20ᴋᴏʀᴅ\x20ɪɴᴄ³²¹™','data','7861368DwQGUO','3pKdHSc','7497azzVuw','message','video/mp4','outputOptions','remoteJid','7650eybNZG','3593320wgQtsV','size','run','from','810188JqhdsO','exports','-pix_fmt\x20yuv420p','temp.mp4','noAudio','777384EIRezr','gif','❌\x20Failed\x20to\x20fetch\x20the\x20wallpaper.','libx264','error','jpeg','pop','1632022qumuBB','JPG','6Ctiudc','sendImage','end','Error\x20fetching\x20or\x20sending\x20media:','get','path','arraybuffer','react','Anime','reply','JPEG','❌\x20An\x20error\x20occurred:\x20','animesmug','GIF','Fetch\x20and\x20send\x20a\x20random\x20anime\x20wallpaper.','-t\x205','smug','join','output','sendMessage','temp.gif','132378KOCuBl'];a0_0xd5e3=function(){return _0xe859f9;};return a0_0xd5e3();}(function(_0x4af140,_0x3e51ac){const _0x3373d5=a0_0xe023,_0x37a325=_0x4af140();while(!![]){try{const _0x31029e=-parseInt(_0x3373d5(0x1f5))/0x1+parseInt(_0x3373d5(0x209))/0x2*(-parseInt(_0x3373d5(0x1f9))/0x3)+parseInt(_0x3373d5(0x204))/0x4+parseInt(_0x3373d5(0x200))/0x5+-parseInt(_0x3373d5(0x212))/0x6*(parseInt(_0x3373d5(0x210))/0x7)+parseInt(_0x3373d5(0x1f8))/0x8+parseInt(_0x3373d5(0x1fa))/0x9*(-parseInt(_0x3373d5(0x1ff))/0xa);if(_0x31029e===_0x3e51ac)break;else _0x37a325['push'](_0x37a325['shift']());}catch(_0x44bca0){_0x37a325['push'](_0x37a325['shift']());}}}(a0_0xd5e3,0x7d1a5));function a0_0xe023(_0x5b0012,_0x55c0fe){const _0xd5e391=a0_0xd5e3();return a0_0xe023=function(_0xe02337,_0x3f3fc7){_0xe02337=_0xe02337-0x1e2;let _0x2b2171=_0xd5e391[_0xe02337];return _0x2b2171;},a0_0xe023(_0x5b0012,_0x55c0fe);}const axios=require('axios'),fs=require('fs'),path=require(a0_0x26bfb7(0x1e5)),ffmpeg=require('fluent-ffmpeg');module[a0_0x26bfb7(0x205)]={'usage':[a0_0x26bfb7(0x1ec),a0_0x26bfb7(0x1f0)],'desc':a0_0x26bfb7(0x1ee),'commandType':a0_0x26bfb7(0x1e8),'isGroupOnly':![],'isAdminOnly':![],'isPrivateOnly':![],'emoji':'🍁',async 'execute'(_0x454d7b,_0xea5d73,_0x10975c,_0x342e37){const _0x3433fb=a0_0x26bfb7,_0x5458e0=_0xea5d73['key'][_0x3433fb(0x1fe)],_0x1b4832=path[_0x3433fb(0x1f1)](__dirname,_0x3433fb(0x1f4)),_0x1aa012=path[_0x3433fb(0x1f1)](__dirname,_0x3433fb(0x207));try{_0x342e37[_0x3433fb(0x1e7)]('🍁');const _0x4e93c3=await axios[_0x3433fb(0x1e4)]('https://api.waifu.pics/sfw/smug');if(!_0x4e93c3[_0x3433fb(0x1f7)]['url'])return await _0x342e37['reply'](_0x3433fb(0x20b));const _0x3b22f5=_0x4e93c3['data']['url'],_0x4b506c=_0x3b22f5['split']('.')[_0x3433fb(0x20f)]();if(_0x4b506c===_0x3433fb(0x20a)||_0x4b506c===_0x3433fb(0x1ed)){const {data:_0x4c9870}=await axios[_0x3433fb(0x1e4)](_0x3b22f5,{'responseType':_0x3433fb(0x1e6)});fs['writeFileSync'](_0x1b4832,Buffer[_0x3433fb(0x203)](_0x4c9870)),await new Promise((_0x5077d9,_0x14ca76)=>{const _0x320e9b=_0x3433fb;ffmpeg(_0x1b4832)[_0x320e9b(0x1f2)](_0x1aa012)[_0x320e9b(0x208)]()['videoCodec'](_0x320e9b(0x20c))[_0x320e9b(0x201)]('320x240')['outputOptions'](_0x320e9b(0x206))[_0x320e9b(0x1fd)](_0x320e9b(0x1ef))['on'](_0x320e9b(0x1e2),_0x5077d9)['on'](_0x320e9b(0x20d),_0x14ca76)[_0x320e9b(0x202)]();});const _0x5044c8=fs['readFileSync'](_0x1aa012);await _0x454d7b[_0x3433fb(0x1f3)](_0x5458e0,{'video':_0x5044c8,'mimetype':_0x3433fb(0x1fc),'caption':_0x3433fb(0x1f6),'gifPlayback':!![]}),fs['unlinkSync'](_0x1b4832),fs['unlinkSync'](_0x1aa012);}else _0x4b506c==='jpg'||_0x4b506c===_0x3433fb(0x20e)||_0x4b506c===_0x3433fb(0x211)||_0x4b506c===_0x3433fb(0x1ea)?await _0x342e37[_0x3433fb(0x213)](_0x3b22f5,_0x3433fb(0x1f6)):await _0x342e37[_0x3433fb(0x1e9)]('❌\x20Unsupported\x20file\x20type.');}catch(_0x426f4e){console[_0x3433fb(0x20d)](_0x3433fb(0x1e3),_0x426f4e['message']),await _0x342e37[_0x3433fb(0x1e9)](_0x3433fb(0x1eb)+_0x426f4e[_0x3433fb(0x1fb)]);}}};