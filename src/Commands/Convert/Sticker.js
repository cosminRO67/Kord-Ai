function a0_0x4d1b(){const _0x47241f=['videoMessage','imageMessage','\x20MB.','message','4763170sCsDFp','165dBswLI','error','quotedMessage','Convert\x20images\x20or\x20videos\x20to\x20stickers\x20with\x20default\x20metadata.','@whiskeysockets/baileys','sticker','video','25949ZFaSIn','Please\x20reply\x20to\x20an\x20image\x20or\x20video\x20to\x20convert\x20to\x20a\x20sticker.','path','1412598QjVNFI','temp_media_','我爱你','Failed\x20to\x20download\x20media.\x20Error:\x20','Failed\x20to\x20create\x20sticker.\x20Error:\x20','image/jpeg','image','sendVideoAsSticker','concat','Sticker\x20command\x20error:','mp4','child_process','remoteJid','length','Media\x20download\x20failed:','join','catch','contextInfo','Sticker\x20creation\x20error:','unlink','7180568uzBTnh','push','Failed\x20to\x20download\x20media.\x20The\x20file\x20might\x20be\x20corrupted.','98GIowjt','Convert','author','An\x20unexpected\x20error\x20occurred:\x20','extendedTextMessage','20929uJZXum','packname','12088020bqebnQ','mkdir','9mhhfVo','.\x20Please\x20try\x20again.','547310pMPqFJ','video/mp4','1758kcgBSK','4UlXQTK','reply','./temp','𝗞𝗢𝗥𝗗-𝗔𝗜','Media\x20is\x20too\x20large.\x20Maximum\x20allowed\x20size\x20is\x20'];a0_0x4d1b=function(){return _0x47241f;};return a0_0x4d1b();}const a0_0x5b7fe7=a0_0x38f9;(function(_0x563ed0,_0x2d2089){const _0x5777a0=a0_0x38f9,_0x5f46ec=_0x563ed0();while(!![]){try{const _0x4f1cdd=parseInt(_0x5777a0(0xd3))/0x1*(-parseInt(_0x5777a0(0xce))/0x2)+parseInt(_0x5777a0(0xf0))/0x3+-parseInt(_0x5777a0(0xdc))/0x4*(-parseInt(_0x5777a0(0xe5))/0x5)+parseInt(_0x5777a0(0xdb))/0x6*(parseInt(_0x5777a0(0xed))/0x7)+-parseInt(_0x5777a0(0xcb))/0x8*(parseInt(_0x5777a0(0xd7))/0x9)+parseInt(_0x5777a0(0xd9))/0xa*(-parseInt(_0x5777a0(0xe6))/0xb)+parseInt(_0x5777a0(0xd5))/0xc;if(_0x4f1cdd===_0x2d2089)break;else _0x5f46ec['push'](_0x5f46ec['shift']());}catch(_0x527c6c){_0x5f46ec['push'](_0x5f46ec['shift']());}}}(a0_0x4d1b,0xbcb41));const path=require(a0_0x5b7fe7(0xef)),{downloadContentFromMessage}=require(a0_0x5b7fe7(0xea)),{spawn}=require(a0_0x5b7fe7(0xfb)),fs=require('fs')['promises'],MAX_STICKER_FILE_SIZE_MB=0xa;function a0_0x38f9(_0x304de0,_0x1efbf6){const _0x4d1baa=a0_0x4d1b();return a0_0x38f9=function(_0x38f95c,_0x2f4eed){_0x38f95c=_0x38f95c-0xc6;let _0x2c7dd5=_0x4d1baa[_0x38f95c];return _0x2c7dd5;},a0_0x38f9(_0x304de0,_0x1efbf6);}module['exports']={'usage':['s',a0_0x5b7fe7(0xeb)],'desc':a0_0x5b7fe7(0xe9),'commandType':a0_0x5b7fe7(0xcf),'isGroupOnly':![],'isAdminOnly':![],'isPrivateOnly':![],'emoji':'✨',async 'execute'(_0x3978cc,_0x2f494b,_0x33c78c,_0xaa25f8){const _0x407c56=a0_0x5b7fe7;try{const _0x20c3c9={'packname':_0x407c56(0xdf),'author':_0x407c56(0xf2)};let _0x367166,_0x3535f8,_0x25f8e8;if(_0x2f494b[_0x407c56(0xe4)]?.['imageMessage'])_0x367166=_0x2f494b[_0x407c56(0xe4)][_0x407c56(0xe2)],_0x3535f8=_0x407c56(0xf6),_0x25f8e8=_0x407c56(0xf5);else{if(_0x2f494b[_0x407c56(0xe4)]?.[_0x407c56(0xe1)])_0x367166=_0x2f494b[_0x407c56(0xe4)][_0x407c56(0xe1)],_0x3535f8=_0x407c56(0xec),_0x25f8e8='video/mp4';else{if(_0x2f494b[_0x407c56(0xe4)]?.['extendedTextMessage']?.[_0x407c56(0xc8)]?.['quotedMessage']?.[_0x407c56(0xe2)])_0x367166=_0x2f494b[_0x407c56(0xe4)]['extendedTextMessage'][_0x407c56(0xc8)]['quotedMessage'][_0x407c56(0xe2)],_0x3535f8='image',_0x25f8e8='image/jpeg';else{if(_0x2f494b['message']?.[_0x407c56(0xd2)]?.['contextInfo']?.[_0x407c56(0xe8)]?.['videoMessage'])_0x367166=_0x2f494b[_0x407c56(0xe4)]['extendedTextMessage'][_0x407c56(0xc8)][_0x407c56(0xe8)][_0x407c56(0xe1)],_0x3535f8=_0x407c56(0xec),_0x25f8e8=_0x407c56(0xda);else{await _0xaa25f8['reply'](_0x407c56(0xee));return;}}}}let _0x2d231a;try{const _0x39cdc7=await downloadContentFromMessage(_0x367166,_0x3535f8),_0x4abb4e=[];for await(const _0x3ab597 of _0x39cdc7){_0x4abb4e[_0x407c56(0xcc)](_0x3ab597);}_0x2d231a=Buffer[_0x407c56(0xf8)](_0x4abb4e);}catch(_0x434b7a){console[_0x407c56(0xe7)](_0x407c56(0xfe),_0x434b7a),await _0xaa25f8['reply'](_0x407c56(0xf3)+_0x434b7a[_0x407c56(0xe4)]+_0x407c56(0xd8));return;}if(!_0x2d231a||_0x2d231a['length']===0x0){await _0xaa25f8['reply'](_0x407c56(0xcd));return;}const _0x16bba7=_0x2d231a[_0x407c56(0xfd)]/(0x400*0x400);if(_0x16bba7>MAX_STICKER_FILE_SIZE_MB){await _0xaa25f8[_0x407c56(0xdd)](_0x407c56(0xe0)+MAX_STICKER_FILE_SIZE_MB+_0x407c56(0xe3));return;}const _0x217305=path['join'](_0x407c56(0xde));await fs[_0x407c56(0xd6)](_0x217305,{'recursive':!![]});const _0x393e52=Date['now'](),_0x5a7ddf=_0x3535f8===_0x407c56(0xf6)?'jpg':_0x407c56(0xfa),_0x570b7c=path[_0x407c56(0xc6)](_0x217305,_0x407c56(0xf1)+_0x393e52+'.'+_0x5a7ddf);await fs['writeFile'](_0x570b7c,_0x2d231a);try{const _0x1bf424={'packname':_0x20c3c9[_0x407c56(0xd4)],'author':_0x20c3c9[_0x407c56(0xd0)]};_0x3535f8==='image'?await _0xaa25f8['sendImageAsSticker'](_0x2f494b['key'][_0x407c56(0xfc)],_0x570b7c,_0x2f494b,_0x1bf424):await _0xaa25f8[_0x407c56(0xf7)](_0x2f494b['key'][_0x407c56(0xfc)],_0x570b7c,_0x2f494b,_0x1bf424);}catch(_0x2ad2b9){console[_0x407c56(0xe7)](_0x407c56(0xc9),_0x2ad2b9),await _0xaa25f8[_0x407c56(0xdd)](_0x407c56(0xf4)+_0x2ad2b9['message']);}finally{await fs[_0x407c56(0xca)](_0x570b7c)[_0x407c56(0xc7)](()=>{});}}catch(_0x25c765){console[_0x407c56(0xe7)](_0x407c56(0xf9),_0x25c765),await _0xaa25f8['reply'](_0x407c56(0xd1)+_0x25c765['message']+_0x407c56(0xd8));}}};