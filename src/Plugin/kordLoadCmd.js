function a0_0x191e(_0x26d843,_0x15b532){const _0x578638=a0_0x5786();return a0_0x191e=function(_0x191e4b,_0xa6a82c){_0x191e4b=_0x191e4b-0x173;let _0x50c7c8=_0x578638[_0x191e4b];return _0x50c7c8;},a0_0x191e(_0x26d843,_0x15b532);}function a0_0x5786(){const _0x2b72c8=['initialize','commands','🔄\x20Config\x20changed,\x20reloading...','.js','endsWith','setupWatchers','Error\x20reading\x20commands:','242577kYbqEl','error','readdir','cache','validateCommand','configPath','13742FmLxfQ','log','17379813BUPfLn','✅\x20Command\x20loader\x20initialized\x20with\x20','watch','isDirectory','reloadConfig','cleanup','isArray','getAllCommands','aliases','204fGjgVf','change','resolve','stat','clear','RETRY_DELAY','string','set','execute','toLowerCase','unlink','promises','❌\x20Error\x20reloading\x20config:','756099BxpWSM','push','RELOAD_DELAY','readCommandsFromDirectory','forEach','Commands','30Kywzqo','function','usage','34GhvBNu','path','get','close','add','3452856xgDYzP','watchers','15845bBpWFC','getCommand','4xlAifl','join','commandsDir','4410882rrrHVQ'];a0_0x5786=function(){return _0x2b72c8;};return a0_0x5786();}const a0_0x4c22f2=a0_0x191e;(function(_0x2291a3,_0x5963ab){const _0x31ad7a=a0_0x191e,_0x2c6f2a=_0x2291a3();while(!![]){try{const _0xb5b254=-parseInt(_0x31ad7a(0x197))/0x1*(parseInt(_0x31ad7a(0x17d))/0x2)+parseInt(_0x31ad7a(0x191))/0x3*(-parseInt(_0x31ad7a(0x186))/0x4)+parseInt(_0x31ad7a(0x184))/0x5*(-parseInt(_0x31ad7a(0x1a2))/0x6)+-parseInt(_0x31ad7a(0x189))/0x7+-parseInt(_0x31ad7a(0x182))/0x8+-parseInt(_0x31ad7a(0x174))/0x9*(-parseInt(_0x31ad7a(0x17a))/0xa)+parseInt(_0x31ad7a(0x199))/0xb;if(_0xb5b254===_0x5963ab)break;else _0x2c6f2a['push'](_0x2c6f2a['shift']());}catch(_0x250455){_0x2c6f2a['push'](_0x2c6f2a['shift']());}}}(a0_0x5786,0x54fa0));const fs=require('fs')[a0_0x4c22f2(0x1ad)],path=require(a0_0x4c22f2(0x17e)),chokidar=require('chokidar'),debounce=require('lodash.debounce');class CommandLoader{constructor(){const _0x1f2099=a0_0x4c22f2;this['commands']=new Map(),this[_0x1f2099(0x1a1)]=new Map(),this[_0x1f2099(0x183)]=new Set(),this[_0x1f2099(0x188)]=path['join'](__dirname,'..',_0x1f2099(0x179)),this[_0x1f2099(0x196)]=path[_0x1f2099(0x1a4)](__dirname,'../../Config.js'),this[_0x1f2099(0x176)]=0x7d0,this[_0x1f2099(0x1a7)]=0xbb8;}async[a0_0x4c22f2(0x18a)](){const _0x5ce9cb=a0_0x4c22f2;try{this[_0x5ce9cb(0x18f)](),await this[_0x5ce9cb(0x1a0)](),console['log'](_0x5ce9cb(0x19a)+this[_0x5ce9cb(0x18b)]['size']+'\x20commands');}catch(_0x2238a1){console[_0x5ce9cb(0x192)]('❌\x20Failed\x20to\x20initialize\x20command\x20loader:',_0x2238a1);throw _0x2238a1;}}async[a0_0x4c22f2(0x1a0)](){const _0x13813a=a0_0x4c22f2;try{const _0x12f024=await this[_0x13813a(0x177)](this[_0x13813a(0x188)]);return this[_0x13813a(0x18b)][_0x13813a(0x1a6)](),this[_0x13813a(0x1a1)][_0x13813a(0x1a6)](),_0x12f024['forEach'](_0x586885=>{const _0x4c5411=_0x13813a;if(!this['validateCommand'](_0x586885))return;const _0x7499ab=Array[_0x4c5411(0x19f)](_0x586885['usage'])?_0x586885[_0x4c5411(0x17c)]:[_0x586885[_0x4c5411(0x17c)]];_0x7499ab['forEach'](_0x52dc23=>{const _0xc8d211=_0x4c5411;typeof _0x52dc23===_0xc8d211(0x1a8)&&this[_0xc8d211(0x18b)][_0xc8d211(0x1a9)](_0x52dc23['toLowerCase'](),_0x586885);}),Array[_0x4c5411(0x19f)](_0x586885[_0x4c5411(0x1a1)])&&_0x586885[_0x4c5411(0x1a1)]['forEach'](_0x2765dc=>{const _0x5b226c=_0x4c5411;typeof _0x2765dc===_0x5b226c(0x1a8)&&this[_0x5b226c(0x1a1)][_0x5b226c(0x1a9)](_0x2765dc[_0x5b226c(0x1ab)](),_0x7499ab[0x0]);});}),Array['from'](new Set(this[_0x13813a(0x18b)]['values']()));}catch(_0x50fc62){console['error'](_0x13813a(0x190),_0x50fc62);throw _0x50fc62;}}async[a0_0x4c22f2(0x177)](_0x1163b3){const _0x469da4=[];async function _0x5f57e5(_0x33903f){const _0x2938bb=a0_0x191e,_0x5d14c3=await fs[_0x2938bb(0x193)](_0x33903f);for(const _0x44d763 of _0x5d14c3){const _0x139707=path[_0x2938bb(0x187)](_0x33903f,_0x44d763),_0x3e7c01=await fs[_0x2938bb(0x1a5)](_0x139707);if(_0x3e7c01[_0x2938bb(0x19c)]())await _0x5f57e5(_0x139707);else{if(_0x44d763[_0x2938bb(0x18e)](_0x2938bb(0x18d)))try{delete require[_0x2938bb(0x194)][require['resolve'](_0x139707)];const _0x22357d=require(_0x139707);Array[_0x2938bb(0x19f)](_0x22357d)?_0x469da4[_0x2938bb(0x175)](..._0x22357d):_0x469da4[_0x2938bb(0x175)](_0x22357d);}catch(_0x1f4dda){console[_0x2938bb(0x192)]('❌\x20Error\x20loading\x20'+_0x139707+':',_0x1f4dda);}}}}return await _0x5f57e5(_0x1163b3),_0x469da4;}[a0_0x4c22f2(0x195)](_0x371ff1){const _0x3a6f37=a0_0x4c22f2;return _0x371ff1&&(typeof _0x371ff1[_0x3a6f37(0x17c)]===_0x3a6f37(0x1a8)||Array[_0x3a6f37(0x19f)](_0x371ff1[_0x3a6f37(0x17c)]))&&typeof _0x371ff1[_0x3a6f37(0x1aa)]===_0x3a6f37(0x17b);}[a0_0x4c22f2(0x185)](_0x48440c){const _0x1e9fc5=a0_0x4c22f2;if(!_0x48440c)return null;const _0x1b81af=_0x48440c[_0x1e9fc5(0x1ab)]();return this[_0x1e9fc5(0x18b)][_0x1e9fc5(0x17f)](_0x1b81af)||this[_0x1e9fc5(0x18b)][_0x1e9fc5(0x17f)](this[_0x1e9fc5(0x1a1)]['get'](_0x1b81af));}[a0_0x4c22f2(0x18f)](){const _0x159ff2=a0_0x4c22f2,_0x4a58b2=chokidar['watch'](this['commandsDir'],{'ignored':/(^|[\/\\])\../,'persistent':!![],'ignoreInitial':!![],'awaitWriteFinish':{'stabilityThreshold':0x7d0,'pollInterval':0x64}}),_0x1b7eac=debounce(async()=>{const _0x209c8d=a0_0x191e;console[_0x209c8d(0x198)]('🔄\x20Command\x20file\x20changed,\x20updating\x20cache...'),await this['getAllCommands']();},this[_0x159ff2(0x176)]);_0x4a58b2['on'](_0x159ff2(0x181),()=>_0x1b7eac())['on'](_0x159ff2(0x1a3),()=>_0x1b7eac())['on'](_0x159ff2(0x1ac),()=>_0x1b7eac()),this[_0x159ff2(0x183)][_0x159ff2(0x181)](_0x4a58b2);const _0x502e50=chokidar[_0x159ff2(0x19b)](this[_0x159ff2(0x196)],{'persistent':!![],'ignoreInitial':!![],'awaitWriteFinish':{'stabilityThreshold':0x7d0,'pollInterval':0x64}}),_0x34fca4=debounce(()=>{const _0x540326=_0x159ff2;console[_0x540326(0x198)](_0x540326(0x18c)),this[_0x540326(0x19d)]();},this['RELOAD_DELAY']);_0x502e50['on'](_0x159ff2(0x1a3),_0x34fca4),this[_0x159ff2(0x183)]['add'](_0x502e50);}['reloadConfig'](){const _0x35ca38=a0_0x4c22f2;try{delete require['cache'][require[_0x35ca38(0x1a4)](this[_0x35ca38(0x196)])],require(this[_0x35ca38(0x196)]),console[_0x35ca38(0x198)]('✅\x20Config\x20reloaded');}catch(_0x1cea5e){console[_0x35ca38(0x192)](_0x35ca38(0x173),_0x1cea5e);}}[a0_0x4c22f2(0x19e)](){const _0x2d9c75=a0_0x4c22f2;this[_0x2d9c75(0x183)][_0x2d9c75(0x178)](_0x465f85=>_0x465f85[_0x2d9c75(0x180)]()),console[_0x2d9c75(0x198)]('👋\x20Command\x20loader\x20cleaned\x20up');}}const loader=new CommandLoader();process['on']('SIGINT',()=>{const _0x2bfcca=a0_0x4c22f2;loader[_0x2bfcca(0x19e)](),process['exit']();}),module['exports']={'initialize':()=>loader[a0_0x4c22f2(0x18a)](),'getAllCommands':()=>loader[a0_0x4c22f2(0x1a0)](),'getCommand':_0x1c50f8=>loader[a0_0x4c22f2(0x185)](_0x1c50f8)};