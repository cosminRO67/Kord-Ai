function a0_0x514c(_0x2ddf3c,_0x2fd721){const _0x347bef=a0_0x347b();return a0_0x514c=function(_0x514c45,_0x5e4696){_0x514c45=_0x514c45-0xea;let _0x18e585=_0x347bef[_0x514c45];return _0x18e585;},a0_0x514c(_0x2ddf3c,_0x2fd721);}const a0_0x3e756a=a0_0x514c;function a0_0x347b(){const _0x416442=['38806EaHZgQ','-pix_fmt\x20yuv420p','-t\x205','react','path','53348BjeaNb','outputOptions','get','message','exports','3753564vRIgiw','split','320x240','30KlQXyZ','key','GIF','445IwiQJE','JPEG','animekiss','❌\x20Failed\x20to\x20fetch\x20the\x20wallpaper.','writeFileSync','❌\x20An\x20error\x20occurred:\x20','end','axios','data','join','videoCodec','>\x20©\x20ɪɴᴛᴇʟʟɪɢᴇɴᴄᴇ\x20ʙʏ\x20ᴋᴏʀᴅ\x20ɪɴᴄ³²¹™','error','fluent-ffmpeg','Anime','82jMebdF','jpeg','3275145vLYeFr','unlinkSync','jpg','Error\x20fetching\x20or\x20sending\x20media:','output','run','13655950gKTcgh','2217859ZuoXZn','pop','❌\x20Unsupported\x20file\x20type.','8022896sVhNfj','sendMessage','remoteJid','gif','size','reply','readFileSync','noAudio','url'];a0_0x347b=function(){return _0x416442;};return a0_0x347b();}(function(_0xc88374,_0x22f0aa){const _0x59f654=a0_0x514c,_0x3a56c3=_0xc88374();while(!![]){try{const _0x5d9a75=-parseInt(_0x59f654(0x11d))/0x1*(-parseInt(_0x59f654(0x108))/0x2)+parseInt(_0x59f654(0xf3))/0x3+parseInt(_0x59f654(0xee))/0x4*(-parseInt(_0x59f654(0xf9))/0x5)+-parseInt(_0x59f654(0xf6))/0x6*(parseInt(_0x59f654(0x111))/0x7)+-parseInt(_0x59f654(0x114))/0x8+parseInt(_0x59f654(0x10a))/0x9+parseInt(_0x59f654(0x110))/0xa;if(_0x5d9a75===_0x22f0aa)break;else _0x3a56c3['push'](_0x3a56c3['shift']());}catch(_0x30ee65){_0x3a56c3['push'](_0x3a56c3['shift']());}}}(a0_0x347b,0xc2bfe));const axios=require(a0_0x3e756a(0x100)),fs=require('fs'),path=require(a0_0x3e756a(0xed)),ffmpeg=require(a0_0x3e756a(0x106));module[a0_0x3e756a(0xf2)]={'usage':[a0_0x3e756a(0xfb),'kiss'],'desc':'Fetch\x20and\x20send\x20a\x20random\x20anime\x20wallpaper.','commandType':a0_0x3e756a(0x107),'isGroupOnly':![],'isAdminOnly':![],'isPrivateOnly':![],'emoji':'🍁',async 'execute'(_0x1f2806,_0x309965,_0x4cef63,_0x246107){const _0x32e48b=a0_0x3e756a,_0x5835e6=_0x309965[_0x32e48b(0xf7)][_0x32e48b(0x116)],_0x1a2b02=path[_0x32e48b(0x102)](__dirname,'temp.gif'),_0x436d33=path[_0x32e48b(0x102)](__dirname,'temp.mp4');try{_0x246107[_0x32e48b(0xec)]('🍁');const _0x5e97b9=await axios[_0x32e48b(0xf0)]('https://api.waifu.pics/sfw/kiss');if(!_0x5e97b9[_0x32e48b(0x101)]['url'])return await _0x246107['reply'](_0x32e48b(0xfc));const _0x12dc8b=_0x5e97b9[_0x32e48b(0x101)][_0x32e48b(0x11c)],_0xa377a7=_0x12dc8b[_0x32e48b(0xf4)]('.')[_0x32e48b(0x112)]();if(_0xa377a7===_0x32e48b(0x117)||_0xa377a7===_0x32e48b(0xf8)){const {data:_0x96e409}=await axios[_0x32e48b(0xf0)](_0x12dc8b,{'responseType':'arraybuffer'});fs[_0x32e48b(0xfd)](_0x1a2b02,Buffer['from'](_0x96e409)),await new Promise((_0x4bf2b2,_0x3965c1)=>{const _0x5101bd=_0x32e48b;ffmpeg(_0x1a2b02)[_0x5101bd(0x10e)](_0x436d33)[_0x5101bd(0x11b)]()[_0x5101bd(0x103)]('libx264')[_0x5101bd(0x118)](_0x5101bd(0xf5))[_0x5101bd(0xef)](_0x5101bd(0xea))[_0x5101bd(0xef)](_0x5101bd(0xeb))['on'](_0x5101bd(0xff),_0x4bf2b2)['on'](_0x5101bd(0x105),_0x3965c1)[_0x5101bd(0x10f)]();});const _0x43d7f8=fs[_0x32e48b(0x11a)](_0x436d33);await _0x1f2806[_0x32e48b(0x115)](_0x5835e6,{'video':_0x43d7f8,'mimetype':'video/mp4','caption':_0x32e48b(0x104),'gifPlayback':!![]}),fs[_0x32e48b(0x10b)](_0x1a2b02),fs[_0x32e48b(0x10b)](_0x436d33);}else _0xa377a7===_0x32e48b(0x10c)||_0xa377a7===_0x32e48b(0x109)||_0xa377a7==='JPG'||_0xa377a7===_0x32e48b(0xfa)?await _0x246107['sendImage'](_0x12dc8b,_0x32e48b(0x104)):await _0x246107['reply'](_0x32e48b(0x113));}catch(_0x3901df){console[_0x32e48b(0x105)](_0x32e48b(0x10d),_0x3901df['message']),await _0x246107[_0x32e48b(0x119)](_0x32e48b(0xfe)+_0x3901df[_0x32e48b(0xf1)]);}}};