const a0_0x35d221=a0_0x4feb;function a0_0x4feb(_0x19a591,_0x3efb85){const _0x364641=a0_0x3646();return a0_0x4feb=function(_0x4feb0e,_0x32116d){_0x4feb0e=_0x4feb0e-0xa2;let _0x533a10=_0x364641[_0x4feb0e];return _0x533a10;},a0_0x4feb(_0x19a591,_0x3efb85);}function a0_0x3646(){const _0xf4a9d9=['❌\x20Unsupported\x20file\x20type.','video/mp4','26oymgAg','kck','❌\x20An\x20error\x20occurred:\x20','345642iXuZkL','exports','output','url','react','reply','342mmuPrU','noAudio','20jDfWjA','GIF','videoCodec','❌\x20Failed\x20to\x20fetch\x20the\x20wallpaper.','209rwLeyP','-pix_fmt\x20yuv420p','51635VBEyPD','39221REanmd','join','size','writeFileSync','1473354qWgvGR','320x240','640IsucqF','pop','JPG','19256340ZcLMnK','data','35754DcwZtB','Error\x20fetching\x20or\x20sending\x20media:','sendImage','animekick','remoteJid','sendMessage','end','error','get','112980mcswPE','axios','fluent-ffmpeg','outputOptions','key'];a0_0x3646=function(){return _0xf4a9d9;};return a0_0x3646();}(function(_0x2fcab,_0x375411){const _0x13ea6a=a0_0x4feb,_0x1112ef=_0x2fcab();while(!![]){try{const _0xdd6a2d=parseInt(_0x13ea6a(0xc7))/0x1*(-parseInt(_0x13ea6a(0xaa))/0x2)+parseInt(_0x13ea6a(0xad))/0x3*(-parseInt(_0x13ea6a(0xb5))/0x4)+-parseInt(_0x13ea6a(0xbb))/0x5*(-parseInt(_0x13ea6a(0xb3))/0x6)+-parseInt(_0x13ea6a(0xbc))/0x7*(parseInt(_0x13ea6a(0xc2))/0x8)+-parseInt(_0x13ea6a(0xc0))/0x9+parseInt(_0x13ea6a(0xa3))/0xa*(-parseInt(_0x13ea6a(0xb9))/0xb)+parseInt(_0x13ea6a(0xc5))/0xc;if(_0xdd6a2d===_0x375411)break;else _0x1112ef['push'](_0x1112ef['shift']());}catch(_0x12eced){_0x1112ef['push'](_0x1112ef['shift']());}}}(a0_0x3646,0x4f8de));const axios=require(a0_0x35d221(0xa4)),fs=require('fs'),path=require('path'),ffmpeg=require(a0_0x35d221(0xa5));module[a0_0x35d221(0xae)]={'usage':[a0_0x35d221(0xca),a0_0x35d221(0xab)],'desc':'Fetch\x20and\x20send\x20a\x20random\x20anime\x20wallpaper.','commandType':'Anime','isGroupOnly':![],'isAdminOnly':![],'isPrivateOnly':![],'emoji':'🍁',async 'execute'(_0x4f7b1a,_0x663340,_0x58bd02,_0x91a7a8){const _0x3e3aea=a0_0x35d221,_0x5637af=_0x663340[_0x3e3aea(0xa7)][_0x3e3aea(0xcb)],_0xb2cbf5=path[_0x3e3aea(0xbd)](__dirname,'temp.gif'),_0x5458c4=path[_0x3e3aea(0xbd)](__dirname,'temp.mp4');try{_0x91a7a8[_0x3e3aea(0xb1)]('🍁');const _0x5557cd=await axios['get']('https://api.waifu.pics/sfw/kick');if(!_0x5557cd[_0x3e3aea(0xc6)][_0x3e3aea(0xb0)])return await _0x91a7a8['reply'](_0x3e3aea(0xb8));const _0x37cc8b=_0x5557cd[_0x3e3aea(0xc6)][_0x3e3aea(0xb0)],_0x2ad077=_0x37cc8b['split']('.')[_0x3e3aea(0xc3)]();if(_0x2ad077==='gif'||_0x2ad077===_0x3e3aea(0xb6)){const {data:_0x47a5ae}=await axios[_0x3e3aea(0xa2)](_0x37cc8b,{'responseType':'arraybuffer'});fs[_0x3e3aea(0xbf)](_0xb2cbf5,Buffer['from'](_0x47a5ae)),await new Promise((_0x47c12d,_0x4e3456)=>{const _0x1d7748=_0x3e3aea;ffmpeg(_0xb2cbf5)[_0x1d7748(0xaf)](_0x5458c4)[_0x1d7748(0xb4)]()[_0x1d7748(0xb7)]('libx264')[_0x1d7748(0xbe)](_0x1d7748(0xc1))[_0x1d7748(0xa6)](_0x1d7748(0xba))[_0x1d7748(0xa6)]('-t\x205')['on'](_0x1d7748(0xcd),_0x47c12d)['on'](_0x1d7748(0xce),_0x4e3456)['run']();});const _0x19f48e=fs['readFileSync'](_0x5458c4);await _0x4f7b1a[_0x3e3aea(0xcc)](_0x5637af,{'video':_0x19f48e,'mimetype':_0x3e3aea(0xa9),'caption':'>\x20©\x20ɪɴᴛᴇʟʟɪɢᴇɴᴄᴇ\x20ʙʏ\x20ᴋᴏʀᴅ\x20ɪɴᴄ³²¹™','gifPlayback':!![]}),fs['unlinkSync'](_0xb2cbf5),fs['unlinkSync'](_0x5458c4);}else _0x2ad077==='jpg'||_0x2ad077==='jpeg'||_0x2ad077===_0x3e3aea(0xc4)||_0x2ad077==='JPEG'?await _0x91a7a8[_0x3e3aea(0xc9)](_0x37cc8b,'>\x20©\x20ɪɴᴛᴇʟʟɪɢᴇɴᴄᴇ\x20ʙʏ\x20ᴋᴏʀᴅ\x20ɪɴᴄ³²¹™'):await _0x91a7a8[_0x3e3aea(0xb2)](_0x3e3aea(0xa8));}catch(_0x2f83bf){console[_0x3e3aea(0xce)](_0x3e3aea(0xc8),_0x2f83bf['message']),await _0x91a7a8[_0x3e3aea(0xb2)](_0x3e3aea(0xac)+_0x2f83bf['message']);}}};