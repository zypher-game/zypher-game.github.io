/*! For license information please see 5016.70a6f3ab.bundle.js.LICENSE.txt */
    ${Zn} * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, Tahoma, Verdana, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;        
        -webkit-tap-highlight-color: transparent;
    }
    
    ${Zn} img {
      -webkit-user-select: none;
      -webkit-touch-callout: none;
    }   
 
    ${Zn} *:focus {
        outline: #08f auto 2px;
    }
    
    ${Zn} li {
        list-style: none;
    }
    
    ${Zn} button {
        outline: none;
    }
    
    body.${Kn} {
        position: fixed; 
        overflow-y: scroll;
        right: 0;
        left: 0;
    }
    
    body.${Gn} ${Zn} *:focus {
        outline: none;
    }
`,{})};function Yn(e,t){return"#"===e[0]&&(e=function(e){"#"===e[0]&&(e=e.slice(1));const t=parseInt(e,16);return[t>>16&255,t>>8&255,255&t].join(",")}(e)),`rgba(${e}, ${t})`}function $n(e){return e.toString()+"px"}const Xn=class{constructor(){Xe(this,"storage",{})}static getInstance(){return Xn.instance||(Xn.instance=new Xn),Xn.instance}get length(){return Object.keys(this.storage).length}clear(){this.storage={}}getItem(e){var t;return null!=(t=this.storage[e])?t:null}key(e){var t;const n=Object.keys(this.storage);return e<0||e>=n.length?null:null!=(t=n[e])?t:null}removeItem(e){delete this.storage[e]}setItem(e,t){this.storage[e]=t}};let Jn=Xn;Xe(Jn,"instance");class Qn extends b{constructor(...e){super(...e),Object.setPrototypeOf(this,Qn.prototype)}}function er(...e){try{console.debug("[TON_CONNECT_UI]",...e)}catch(e){}}function tr(e,t="_self"){er("openLink",e,t),window.open(e,t,"noopener noreferrer")}function nr(e){tr(e,"_blank")}function rr(e,t){const n=setTimeout((()=>{ur("safari")||cr("android")&&ur("firefox")||t()}),200);window.addEventListener("blur",(()=>clearTimeout(n)),{once:!0}),tr(e,"_self")}function or(e){return Je(this,null,(function*(){yield new Promise((e=>requestAnimationFrame(e))),e()}))}function ar(e){"complete"!==document.readyState?window.addEventListener("load",(()=>or((()=>ar(e)))),{once:!0}):e.forEach((e=>{(new window.Image).src=e}))}function ir(){if("undefined"!=typeof window)return window}function sr(){if(function(){try{return"undefined"!=typeof localStorage}catch(e){return!1}}())return localStorage;if("undefined"!=typeof process&&null!=process.versions&&null!=process.versions.node)throw new Qn("`localStorage` is unavailable, but it is required for TonConnect. For more details, see https://github.com/ton-connect/sdk/tree/main/packages/sdk#init-connector");return Jn.getInstance()}function lr(){var e,t,n;const r=(new Fe).getResult(),o=null==(e=r.os.name)?void 0:e.toLowerCase();let a;switch(!0){case"ipad"===(null==(t=r.device.model)?void 0:t.toLowerCase()):a="ipad";break;case"ios"===o:a="ios";break;case"android"===o:a="android";break;case"mac os"===o:a="macos";break;case"linux"===o:a="linux";break;case null==o?void 0:o.includes("windows"):a="windows"}const i=null==(n=r.browser.name)?void 0:n.toLowerCase();let s;switch(!0){case"chrome"===i:s="chrome";break;case"firefox"===i:s="firefox";break;case null==i?void 0:i.includes("safari"):s="safari";break;case null==i?void 0:i.includes("opera"):s="opera"}return{os:a,browser:s}}function cr(...e){return e.includes(lr().os)}function ur(...e){return e.includes(lr().browser)}function dr(e,t){return t+new URL(e).search}class fr{constructor(){Xe(this,"localStorage"),Xe(this,"storageKey","ton-connect-ui_wallet-info"),this.localStorage=sr()}setWalletInfo(e){this.localStorage.setItem(this.storageKey,JSON.stringify(e))}getWalletInfo(){const e=this.localStorage.getItem(this.storageKey);return e?JSON.parse(e):null}removeWalletInfo(){this.localStorage.removeItem(this.storageKey)}}class pr{constructor(){Xe(this,"localStorage"),Xe(this,"storageKey","ton-connect-ui_preferred-wallet"),this.localStorage=sr()}setPreferredWalletAppName(e){this.localStorage.setItem(this.storageKey,e)}getPreferredWalletAppName(){return this.localStorage.getItem(this.storageKey)||void 0}}class hr{constructor(){Xe(this,"localStorage"),Xe(this,"storageKey","ton-connect-ui_last-selected-wallet-info"),this.localStorage=sr()}setLastSelectedWalletInfo(e){this.localStorage.setItem(this.storageKey,JSON.stringify(e))}getLastSelectedWalletInfo(){const e=this.localStorage.getItem(this.storageKey);return e?JSON.parse(e):null}removeLastSelectedWalletInfo(){this.localStorage.removeItem(this.storageKey)}}const[mr,gr]=ht({status:"closed",closeReason:null}),yr=bt((()=>"opened"===mr().status)),[br,vr]=ht({status:"closed",closeReason:null}),wr=bt((()=>"opened"===br().status)),xr=bt((()=>{const e=br();return"opened"===e.status?e.walletInfo:null}));let _r="undefined"!=typeof window?new hr:void 0;const[kr,Cr]=ht((null==_r?void 0:_r.getLastSelectedWalletInfo())||null),Er=e=>{_r||(_r=new hr),e?_r.setLastSelectedWalletInfo(e):_r.removeLastSelectedWalletInfo(),Cr(e)},[Sr,Ar]=ht(null),Tr={common:{close:"Закрыть",openWallet:"Открыть кошелёк",copyLink:"Копировать ссылку",linkCopied:"Ссылка скопирована",copied:"Ссылка скопирована",yourWallet:"Ваш кошелёк",retry:"Повторить",get:"Скачать",mobile:"Мобильный",browserExtension:"Расширение",desktop:"Десктоп"},button:{connectWallet:"Подключить кошелёк",dropdown:{copy:"Скопировать адрес",copied:"Адрес скопирован!",disconnect:"Отключить кошелёк"}},notifications:{confirm:{header:"Откройте {{ name }}, чтобы подтвердить транзакцию."},transactionSent:{header:"Транзакция отправлена",text:"Ваша транзакция будет обработана через несколько секунд."},transactionCanceled:{header:"Транзакция отменена",text:"Состояние вашего счёта не изменится."}},walletItem:{walletOn:"Wallet в",recent:"Недавний",installed:"Установлен",popular:"Популярен"},walletModal:{loading:"Кошельки загружаются",wallets:"Кошельки",mobileUniversalModal:{connectYourWallet:"Подключите кошелёк",openWalletOnTelegramOrSelect:"Подключите Wallet в Telegram или выберете кошелёк для подключения",openWalletOnTelegram:"Открыть Wallet в Telegram",openLink:"Открыть ссылку",scan:"Отсканируйте камерой вашего телефона"},desktopUniversalModal:{connectYourWallet:"Подключите кошелёк",scan:"Отсканируйте QR-код камерой вашего телефона",availableWallets:"Доступные кошельки"},mobileConnectionModal:{showQR:"Показать QR-код",scanQR:"Отсканируйте QR-код ниже камерой в приложении {{ name }}, или камерой телефона",continueIn:"Продолжите в {{ name }}…",connectionDeclined:"Подключение отклонено"},desktopConnectionModal:{scanQR:"Отсканируйте QR-код ниже камерой в приложении {{ name }}, или камерой телефона",continueInExtension:"Откройте браузерное расширение {{ name }}",dontHaveExtension:"Похоже, у вас не установлено браузерное расширение {{ name }}",getWallet:"Скачать {{ name }}",continueOnDesktop:"Откройте {{ name }} на компьютере…",openWalletOnTelegram:"Открыть Wallet в Telegram",connectionDeclined:"Подключение отклонено"},infoModal:{whatIsAWallet:"Что такое кошелёк?",secureDigitalAssets:"Надежное хранилище цифровых активов",walletProtects:"Кошелёк защищает ваши цифровые активы, включая TON, токены и предметы коллекционирования, и управляет ими.",controlIdentity:"Контроль своей личности Web3",manageIdentity:"Управляйте своей цифровой идентификацией и с легкостью получайте доступ к децентрализованным приложениям. Сохраняйте контроль над своими данными и безопасно участвуйте в экосистеме блокчейна.",effortlessCryptoTransactions:"Простые криптотранзакции",easilySend:"Легко отправляйте, получайте и отслеживайте свои криптовалюты. Оптимизируйте свои операции с помощью децентрализованных приложений.",getAWallet:"Скачать кошелёк"}},actionModal:{confirmTransaction:{header:"Подтвердите действие в {{ name }}",text:"Это займет пару секунд."},transactionSent:"$notifications.transactionSent",transactionCanceled:"$notifications.transactionCanceled"}},Or={en:Pr({common:{close:"Close",openWallet:"Open wallet",copyLink:"Copy Link",linkCopied:"Link Copied",copied:"Copied",yourWallet:"Your Wallet",retry:"Retry",get:"GET",mobile:"Mobile",browserExtension:"Browser Extension",desktop:"Desktop"},button:{connectWallet:"Connect Wallet",dropdown:{copy:"Copy address",copied:"Address copied!",disconnect:"Disconnect"}},notifications:{confirm:{header:"Open {{ name }} to confirm the transaction."},transactionSent:{header:"Transaction sent",text:"Your transaction will be processed in a few seconds."},transactionCanceled:{header:"Transaction canceled",text:"There will be no changes to your account."}},walletItem:{walletOn:"Wallet On",recent:"Recent",installed:"Installed",popular:"Popular"},walletModal:{loading:"Loading wallets",wallets:"Wallets",mobileUniversalModal:{connectYourWallet:"Connect your wallet",openWalletOnTelegramOrSelect:"Open Wallet in Telegram or select your wallet to connect",openWalletOnTelegram:"Open Wallet in Telegram",openLink:"Open Link",scan:"Scan with your mobile wallet"},desktopUniversalModal:{connectYourWallet:"Connect your wallet",scan:"Scan with your mobile wallet",availableWallets:"Available wallets"},mobileConnectionModal:{showQR:"Show QR Code",scanQR:"Scan the QR code below with your phone’s or {{ name }}’s camera",continueIn:"Continue in {{ name }}…",connectionDeclined:"Connection declined"},desktopConnectionModal:{scanQR:"Scan the QR code below with your phone’s or {{ name }}’s camera",continueInExtension:"Continue in {{ name }} browser extension…",dontHaveExtension:"Seems you don't have installed {{ name }} browser extension",getWallet:"Get {{ name }}",continueOnDesktop:"Continue in {{ name }} on desktop…",openWalletOnTelegram:"Open Wallet in Telegram on desktop",connectionDeclined:"Connection declined"},infoModal:{whatIsAWallet:"What is a wallet",secureDigitalAssets:"Secure digital assets storage",walletProtects:"A wallet protects and manages your digital assets including TON, tokens and collectables.",controlIdentity:"Control your Web3 identity",manageIdentity:"Manage your digital identity and access decentralized applications with ease. Maintain control over your data and engage securely in the blockchain ecosystem.",effortlessCryptoTransactions:"Effortless crypto transactions",easilySend:"Easily send, receive, monitor your cryptocurrencies. Streamline your operations with decentralized applications.",getAWallet:"Get a Wallet"}},actionModal:{confirmTransaction:{header:"Confirm the transaction in {{ name }}",text:"It will only take a moment."},transactionSent:"$notifications.transactionSent",transactionCanceled:"$notifications.transactionCanceled"}}),ru:Pr(Tr)};function Pr(e){const t=n=>{Object.entries(n).forEach((([r,o])=>{if("object"==typeof o&&o)return t(o);if("string"==typeof o){if("$"===o[0]){const t=o.slice(1).split(".");let a=e;t.forEach((e=>{if(!(e in a))throw new Error(`Cannot parse translations: there is no property ${e} in translation`);a=a[e]})),n[r]=a}"\\$"===o.slice(0,2)&&(n[r]=o.slice(1))}}))};return t(e),e}const Mr=kt(),Nr=Symbol("store-raw"),Ir=Symbol("store-node"),Rr=Symbol("store-name");function Br(e,t){let n=e[et];if(!n&&(Object.defineProperty(e,et,{value:n=new Proxy(e,Wr)}),!Array.isArray(e))){const t=Object.keys(e),r=Object.getOwnPropertyDescriptors(e);for(let o=0,a=t.length;o<a;o++){const a=t[o];r[a].get&&Object.defineProperty(e,a,{enumerable:r[a].enumerable,get:r[a].get.bind(n)})}}return n}function Dr(e){let t;return null!=e&&"object"==typeof e&&(e[et]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function Lr(e,t=new Set){let n,r,o,a;if(n=null!=e&&e[Nr])return n;if(!Dr(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let n=0,a=e.length;n<a;n++)o=e[n],(r=Lr(o,t))!==o&&(e[n]=r)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const n=Object.keys(e),i=Object.getOwnPropertyDescriptors(e);for(let s=0,l=n.length;s<l;s++)a=n[s],i[a].get||(o=e[a],(r=Lr(o,t))!==o&&(e[a]=r))}return e}function jr(e){let t=e[Ir];return t||Object.defineProperty(e,Ir,{value:t={}}),t}function Fr(e,t,n){return e[t]||(e[t]=zr(n))}function Ur(e){if(_t()){const t=jr(e);(t._||(t._=zr()))()}}function zr(e){const[t,n]=ht(e,{equals:!1,internal:!0});return t.$=n,t}const Wr={get(e,t,n){if(t===Nr)return e;if(t===et)return n;if(t===tt)return Ur(e),n;const r=jr(e),o=r.hasOwnProperty(t);let a=o?r[t]():e[t];if(t===Ir||"__proto__"===t)return a;if(!o){const n=Object.getOwnPropertyDescriptor(e,t);!_t()||"function"==typeof a&&!e.hasOwnProperty(t)||n&&n.get||(a=Fr(r,t,a)())}return Dr(a)?Br(a):a},has(e,t){return t===Nr||t===et||t===tt||t===Ir||"__proto__"===t||(this.get(e,t,e),t in e)},set:()=>!0,deleteProperty:()=>!0,ownKeys:function(e){return Ur(e),Reflect.ownKeys(e)},getOwnPropertyDescriptor:function(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return n&&!n.get&&n.configurable&&t!==et&&t!==Ir&&t!==Rr?(delete n.value,delete n.writable,n.get=()=>e[et][t],n):n}};function Hr(e,t,n,r=!1){if(!r&&e[t]===n)return;const o=e[t],a=e.length;void 0===n?delete e[t]:e[t]=n;let i,s=jr(e);(i=Fr(s,t,o))&&i.$((()=>n)),Array.isArray(e)&&e.length!==a&&(i=Fr(s,"length",a))&&i.$(e.length),(i=s._)&&i.$()}function Vr(e,t){const n=Object.keys(t);for(let r=0;r<n.length;r+=1){const o=n[r];Hr(e,o,t[o])}}function Zr(e,t,n=[]){let r,o=e;if(t.length>1){r=t.shift();const a=typeof r,i=Array.isArray(e);if(Array.isArray(r)){for(let o=0;o<r.length;o++)Zr(e,[r[o]].concat(t),n);return}if(i&&"function"===a){for(let o=0;o<e.length;o++)r(e[o],o)&&Zr(e,[o].concat(t),n);return}if(i&&"object"===a){const{from:o=0,to:a=e.length-1,by:i=1}=r;for(let r=o;r<=a;r+=i)Zr(e,[r].concat(t),n);return}if(t.length>1)return void Zr(e[r],t,[r].concat(n));o=e[r],n=[r].concat(n)}let a=t[0];"function"==typeof a&&(a=a(o,n),a===o)||void 0===r&&null==a||(a=Lr(a),void 0===r||Dr(o)&&Dr(a)&&!Array.isArray(a)?Vr(o,a):Hr(e,r,a))}function Kr(...[e,t]){const n=Lr(e||{}),r=Array.isArray(n);return[Br(n),function(...e){vt((()=>{r&&1===e.length?function(e,t){if("function"==typeof t&&(t=t(e)),t=Lr(t),Array.isArray(t)){if(e===t)return;let n=0,r=t.length;for(;n<r;n++){const r=t[n];e[n]!==r&&Hr(e,n,r)}Hr(e,"length",r)}else Vr(e,t)}(n,e[0]):Zr(n,e)}))}]}const Gr={constant:{black:"#000000",white:"#FFFFFF"},connectButton:{background:"#0098EA",foreground:"#FFFFFF"},accent:"#0098EA",telegramButton:"#0098EA",icon:{primary:"#0F0F0F",secondary:"#7A8999",tertiary:"#C1CAD2",success:"#29CC6A",error:"#F5A73B"},background:{primary:"#FFFFFF",secondary:"#F1F3F5",segment:"#FFFFFF",tint:"#F1F3F5",qr:"#F1F3F5"},text:{primary:"#0F0F0F",secondary:"#6A7785"}};function qr(e){return"[object Object]"===Object.prototype.toString.call(e)}function Yr(e){var t,n;return!1!==qr(e)&&(void 0===(t=e.constructor)||!1!==qr(n=t.prototype)&&!1!==n.hasOwnProperty("isPrototypeOf"))}function $r(e,t){if(!e)return t;return Ue(t,e,{arrayMerge:(e,t,n)=>t,isMergeableObject:Yr})}const[Xr,Jr]=Kr({theme:Sn.LIGHT,colors:Gr,borderRadius:"m"}),Qr={[Sn.LIGHT]:Gr,[Sn.DARK]:{constant:{black:"#000000",white:"#FFFFFF"},connectButton:{background:"#0098EA",foreground:"#FFFFFF"},accent:"#E5E5EA",telegramButton:"#31A6F5",icon:{primary:"#E5E5EA",secondary:"#909099",tertiary:"#434347",success:"#29CC6A",error:"#F5A73B"},background:{primary:"#121214",secondary:"#18181A",segment:"#262629",tint:"#222224",qr:"#FFFFFF"},text:{primary:"#E5E5EA",secondary:"#7D7D85"}}},eo={[Sn.LIGHT]:void 0,[Sn.DARK]:void 0};function to(e,t){t&&(eo[Sn.DARK]=$r(t[Sn.DARK],eo[Sn.DARK]),eo[Sn.LIGHT]=$r(t[Sn.LIGHT],eo[Sn.LIGHT])),Jr({theme:e,colors:$r(eo[e],Qr[e])})}const no=Hn.div`
    background-color: ${e=>e.theme.colors.background.secondary};
`,ro=e=>{let t;const[n,r]=ht(null);return yt((()=>{const t=new window.Image;return t.src=e.src,t.alt=e.alt||"",t.setAttribute("draggable","false"),e.class&&t.classList.add(e.class),t.complete?r(t):(t.addEventListener("load",(()=>r(t))),()=>t.removeEventListener("load",(()=>r(t))))})),[Vt(Xt,{get when(){return n()},get children(){return n()}}),Vt(Xt,{get when(){return!n()},get children(){return Vt(no,{get class(){return e.class},ref(e){"function"==typeof t?t(e):t=e}})}})]};let oo={};try{oo=function(e){e=e.replace(/^#/,"");let t={};if(!e.length)return t;if(e.indexOf("=")<0&&e.indexOf("?")<0)return t._path=ho(e),t;let n=e.indexOf("?");if(n>=0){let r=e.substr(0,n);t._path=ho(r),e=e.substr(n+1)}let r=function(e){let t={};if(!e.length)return t;let n,r,o,a,i=e.split("&");for(n=0;n<i.length;n++)r=i[n].split("="),o=ho(r[0]),a=null==r[1]?null:ho(r[1]),t[o]=a;return t}(e);for(let e in r)t[e]=r[e];return t}(location.hash.toString())}catch(e){}let ao="unknown";if((null==oo?void 0:oo.tgWebAppPlatform)&&(ao=null!=(Me=oo.tgWebAppPlatform)?Me:"unknown"),"unknown"===ao){const e=ir();ao=null!=(Re=null==(Ie=null==(Ne=null==e?void 0:e.Telegram)?void 0:Ne.WebApp)?void 0:Ie.platform)?Re:"unknown"}let io="6.0";if((null==oo?void 0:oo.tgWebAppVersion)&&(io=oo.tgWebAppVersion),!io){const e=ir();io=null!=(Le=null==(De=null==(Be=null==e?void 0:e.Telegram)?void 0:Be.WebApp)?void 0:De.version)?Le:"6.0"}function so(...e){return e.includes(ao)}function lo(){var e;return"unknown"!==ao||!!(null==(e=ir())?void 0:e.TelegramWebviewProxy)}function co(){po("web_app_expand",{})}function uo(e,t){const n=new URL(e);if("http:"!==n.protocol&&"https:"!==n.protocol){if(t)return t();throw new Qn(`Url protocol is not supported: ${n}`)}if("t.me"!==n.hostname){if(t)return t();throw new Qn(`Url host is not supported: ${n}`)}const r=n.pathname+n.search;fo()||function(e,t){"string"!=typeof e&&(e=""),"string"!=typeof t&&(t="");let n,r,o,a,i=e.replace(/^\s+|\s+$/g,"").split("."),s=t.replace(/^\s+|\s+$/g,"").split(".");for(n=Math.max(i.length,s.length),r=0;r<n;r++)if(o=parseInt(i[r])||0,a=parseInt(s[r])||0,o!==a)return o>a?1:-1;return 0}(io,"6.1")>=0?po("web_app_open_tg_link",{path_full:r}):nr("https://t.me"+r)}function fo(){try{const e=ir();return!!e&&(null!=e.parent&&e!==e.parent)}catch(e){return!1}}function po(e,t){try{const n=ir();if(!n)throw new Qn("Can't post event to parent window: window is not defined");if(void 0!==n.TelegramWebviewProxy)er("postEvent",e,t),n.TelegramWebviewProxy.postEvent(e,JSON.stringify(t));else if(n.external&&"notify"in n.external)er("postEvent",e,t),n.external.notify(JSON.stringify({eventType:e,eventData:t}));else{if(!fo())throw new Qn("Can't post event to TMA");{const r="*",o=JSON.stringify({eventType:e,eventData:t});er("postEvent",e,t),n.parent.postMessage(o,r)}}}catch(e){!function(...e){try{console.error("[TON_CONNECT_UI]",...e)}catch(e){}}(`Can't post event to parent window: ${e}`)}}function ho(e){try{return e=e.replace(/\+/g,"%20"),decodeURIComponent(e)}catch(t){return e}}const mo=440,go=1020;function yo(e){const t=ir();if(!t)return"desktop"===e;if(so("weba"))return!0;const n=t.innerWidth;switch(e){case"desktop":return n>go;case"tablet":return n>mo;default:return n<=mo||cr("ios","android","ipad")}}function bo(e){switch(e){case"mobile":return`@media (max-width: ${mo}px)`;case"tablet":return`@media (max-width: ${go}px) (min-width: ${mo}px)`;default:return`@media (min-width: ${go}px)`}}const vo="@media (hover: none)",wo="@media not all and (hover: none)",xo={m:"100vh",s:"8px",none:"0"},_o={s:.02,m:.04},ko=Hn.button`
    display: ${e=>e.leftIcon||e.rightIcon?"flex":"inline-block"};
    gap: ${e=>e.leftIcon||e.rightIcon?"6px":"unset"};
    align-items: ${e=>e.leftIcon||e.rightIcon?"center":"unset"};
    justify-content: ${e=>e.leftIcon||e.rightIcon?"space-between":"unset"};
    background-color: ${e=>"flat"===e.appearance?"transparent":"secondary"===e.appearance?e.theme.colors.background.tint:Yn(e.theme.colors.accent,.12)};
    color: ${e=>"secondary"===e.appearance?e.theme.colors.text.primary:e.theme.colors.accent};

    padding: ${e=>"flat"===e.appearance?"0":"9px 16px"};
    padding-left: ${e=>e.leftIcon&&"flat"!==e.appearance?"12px":"16px"};
    padding-right: ${e=>e.rightIcon&&"flat"!==e.appearance?"12px":"16px"};
    border: none;
    border-radius: ${e=>xo[e.theme.borderRadius]};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    font-size: 14px;
    font-weight: 590;
    line-height: 18px;

    transition: transform 0.125s ease-in-out;

    ${wo} {
        &:hover {
            transform: ${e=>e.disabled?"unset":`scale(${1+_o[e.scale]})`};
        }
    }

    &:active {
        transform: ${e=>e.disabled?"unset":`scale(${1-_o[e.scale]})`};
    }

    ${vo} {
        &:active {
            transform: ${e=>e.disabled?"unset":`scale(${1-2*_o[e.scale]})`};
        }
    }
`;function Co(e){const t=wt((()=>Object.keys(e).filter((e=>e.startsWith("data-"))))),[n]=Yt(e,t);return n}const Eo=e=>{const t=Co(e);return Vt(ko,qt({get appearance(){return e.appearance||"primary"},get class(){return e.class},onClick:t=>{var n;return null==(n=e.onClick)?void 0:n.call(e,t)},onMouseEnter:t=>{var n;return null==(n=e.onMouseEnter)?void 0:n.call(e,t)},onMouseLeave:t=>{var n;return null==(n=e.onMouseLeave)?void 0:n.call(e,t)},ref(t){const n=e.ref;"function"==typeof n?n(t):e.ref=t},get disabled(){return e.disabled},get scale(){return e.scale||"m"},get leftIcon(){return!!e.leftIcon},get rightIcon(){return!!e.rightIcon},"data-tc-button":"true"},t,{get children(){return[bt((()=>e.leftIcon)),bt((()=>e.children)),bt((()=>e.rightIcon))]}}))};function So(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}const Ao=e=>{let t,n=!0;const[r,o]=ht(),[a,i]=ht(),s=Et((()=>e.children)),{onBeforeEnter:l,onEnter:c,onAfterEnter:u,onBeforeExit:d,onExit:f,onAfterExit:p}=e,h=bt((()=>{const t=e.name||"s";return{enterActiveClass:e.enterActiveClass||t+"-enter-active",enterClass:e.enterClass||t+"-enter",enterToClass:e.enterToClass||t+"-enter-to",exitActiveClass:e.exitActiveClass||t+"-exit-active",exitClass:e.exitClass||t+"-exit",exitToClass:e.exitToClass||t+"-exit-to"}}));function m(t,s){if(!n||e.appear){let n=function(l){!t||l&&l.target!==t||(t.removeEventListener("transitionend",n),t.removeEventListener("animationend",n),t.classList.remove(...f),t.classList.remove(...p),vt((()=>{r()!==t&&o(t),a()===t&&i(void 0)})),u&&u(t),"inout"===e.mode&&g(t,s))};const d=h().enterClass.split(" "),f=h().enterActiveClass.split(" "),p=h().enterToClass.split(" ");l&&l(t),t.classList.add(...d),t.classList.add(...f),So((()=>{t.classList.remove(...d),t.classList.add(...p),c&&c(t,(()=>n())),(!c||c.length<2)&&(t.addEventListener("transitionend",n),t.addEventListener("animationend",n))}))}s&&!e.mode?i(t):o(t)}function g(t,n){const a=h().exitClass.split(" "),i=h().exitActiveClass.split(" "),s=h().exitToClass.split(" ");if(!n.parentNode)return l();function l(a){a&&a.target!==n||(n.removeEventListener("transitionend",l),n.removeEventListener("animationend",l),n.classList.remove(...i),n.classList.remove(...s),r()===n&&o(void 0),p&&p(n),"outin"===e.mode&&m(t,n))}d&&d(n),n.classList.add(...a),n.classList.add(...i),So((()=>{n.classList.remove(...a),n.classList.add(...s)})),f&&f(n,(()=>l())),(!f||f.length<2)&&(n.addEventListener("transitionend",l),n.addEventListener("animationend",l))}return mt((r=>{for(t=s();"function"==typeof t;)t=t();return wt((()=>(t&&t!==r&&("outin"!==e.mode?m(t,r):n&&o(t)),r&&r!==t&&"inout"!==e.mode&&g(t,r),n=!1,t)))})),[r,a]};function To(e){const{top:t,bottom:n,left:r,right:o,width:a,height:i}=e.getBoundingClientRect(),s=e.parentNode.getBoundingClientRect();return{top:t-s.top,bottom:n,left:r-s.left,right:o,width:a,height:i}}const Oo=e=>{const t=Et((()=>e.children)),n=bt((()=>{const t=e.name||"s";return{enterActiveClass:e.enterActiveClass||t+"-enter-active",enterClass:e.enterClass||t+"-enter",enterToClass:e.enterToClass||t+"-enter-to",exitActiveClass:e.exitActiveClass||t+"-exit-active",exitClass:e.exitClass||t+"-exit",exitToClass:e.exitToClass||t+"-exit-to",moveClass:e.moveClass||t+"-move"}})),{onBeforeEnter:r,onEnter:o,onAfterEnter:a,onBeforeExit:i,onExit:s,onAfterExit:l}=e,[c,u]=ht();let d=[],f=!0;return mt((()=>{const e=t(),c=[...e],p=new Set(e),h=new Set(d),m=n().enterClass.split(" "),g=n().enterActiveClass.split(" "),y=n().enterToClass.split(" "),b=n().exitClass.split(" "),v=n().exitActiveClass.split(" "),w=n().exitToClass.split(" ");for(let t=0;t<e.length;t++){const n=e[t];if(!f&&!h.has(n)){let e=function(t){!n||t&&t.target!==n||(n.removeEventListener("transitionend",e),n.removeEventListener("animationend",e),n.classList.remove(...g),n.classList.remove(...y),a&&a(n))};r&&r(n),n.classList.add(...m),n.classList.add(...g),So((()=>{n.classList.remove(...m),n.classList.add(...y),o&&o(n,(()=>e())),(!o||o.length<2)&&(n.addEventListener("transitionend",e),n.addEventListener("animationend",e))}))}}for(let e=0;e<d.length;e++){const t=d[e];if(!p.has(t)&&t.parentNode){let n=function(e){e&&e.target!==t||(t.removeEventListener("transitionend",n),t.removeEventListener("animationend",n),t.classList.remove(...v),t.classList.remove(...w),l&&l(t),d=d.filter((e=>e!==t)),u(d))};c.splice(e,0,t),i&&i(t),t.classList.add(...b),t.classList.add(...v),So((()=>{t.classList.remove(...b),t.classList.add(...w)})),s&&s(t,(()=>n())),(!s||s.length<2)&&(t.addEventListener("transitionend",n),t.addEventListener("animationend",n))}}d=c,u(c)})),yt((e=>{const t=c();return t.forEach((t=>{let n;(n=e.get(t))?n.new&&(n.new=!1,n.newPos=To(t)):e.set(t,n={pos:To(t),new:!f}),n.new&&t.addEventListener("transitionend",(()=>{n.new=!1,t.parentNode&&(n.newPos=To(t))}),{once:!0}),n.newPos&&(n.pos=n.newPos),n.newPos=To(t)})),f?(f=!1,e):(t.forEach((t=>{const n=e.get(t),r=n.pos,o=n.newPos,a=r.left-o.left,i=r.top-o.top;if(a||i){n.moved=!0;const e=t.style;e.transform=`translate(${a}px,${i}px)`,e.transitionDuration="0s"}})),document.body.offsetHeight,t.forEach((t=>{const r=e.get(t);if(r.moved){let e=function(n){n&&n.target!==t||!t.parentNode||n&&!/transform$/.test(n.propertyName)||(t.removeEventListener("transitionend",e),t.classList.remove(...a))};r.moved=!1;const o=t.style,a=n().moveClass.split(" ");t.classList.add(...a),o.transform=o.transitionDuration="",t.addEventListener("transitionend",e)}})),e)}),new Map),c};const Po="androidBackHandler",Mo={[Po]:!0},No=cn('<svg><path fill-rule="evenodd" clip-rule="evenodd" d="M10.2122 14.3407C10.5384 14.0854 10.5959 13.614 10.3406 13.2878L6.20237 8.00003L10.3406 2.71227C10.5959 2.38607 10.5384 1.91469 10.2122 1.6594C9.88604 1.40412 9.41465 1.46161 9.15937 1.7878L4.65937 7.5378C4.44688 7.80932 4.44688 8.19074 4.65937 8.46226L9.15937 14.2123C9.41465 14.5385 9.88604 14.5959 10.2122 14.3407Z"></path></svg>',0,!0),Io={left:0,top:90,right:180,bottom:270},Ro=e=>{const t=zn();return Vt(Hn("svg")`
        transform: rotate(${e=>Io[e.svgDirection]}deg);
        transition: transform 0.1s ease-in-out;
    `,{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",get svgDirection(){return e.direction||"left"},get children(){const n=No.cloneNode(!0);return gt((()=>un(n,"fill",e.fill||t.colors.icon.secondary))),n}})},Bo=cn('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.71966 2.71968C3.01255 2.42678 3.48743 2.42677 3.78032 2.71966L8.00002 6.93925L12.2197 2.71967C12.5126 2.42677 12.9874 2.42678 13.2803 2.71967C13.5732 3.01257 13.5732 3.48744 13.2803 3.78033L9.06068 7.99991L13.2803 12.2197C13.5732 12.5126 13.5732 12.9874 13.2803 13.2803C12.9874 13.5732 12.5126 13.5732 12.2197 13.2803L8.00002 9.06057L3.78033 13.2803C3.48744 13.5732 3.01257 13.5732 2.71967 13.2803C2.42678 12.9874 2.42677 12.5126 2.71967 12.2197L6.93936 7.99991L2.71968 3.78034C2.42678 3.48745 2.42677 3.01257 2.71966 2.71968Z"></path></svg>'),Do=e=>{const t=zn();return(()=>{const n=Bo.cloneNode(!0),r=n.firstChild;return gt((()=>un(r,"fill",e.fill||t.colors.icon.secondary))),n})()},Lo=Hn.button`
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: ${e=>e.theme.colors.background.tint};
    border: none;
    cursor: pointer;

    transition: transform 0.125s ease-in-out;

    ${wo} {
        &:hover {
            transform: scale(1.04);
        }
    }

    &:active {
        transform: scale(0.96);
    }

    ${vo} {
        &:active {
            transform: scale(0.92);
        }
    }
`,jo=e=>{const t=Co(e),n=()=>e.icon||"close";return Vt(Lo,qt({get class(){return e.class},onClick:()=>e.onClick(),"data-tc-icon-button":"true"},t,{get children(){return[Vt(Xt,{get when(){return!!e.children},get children(){return e.children}}),Vt(Xt,{get when(){return!e.children},get children(){return Vt(Jt,{get children(){return[Vt(Qt,{get when(){return"close"===n()},get children(){return Vt(Do,{get fill(){return e.fill}})}}),Vt(Qt,{get when(){return"arrow"===n()},get children(){return Vt(Ro,{get fill(){return e.fill}})}}),Vt(Qt,{get when(){return"question"===n()},get children(){return Vt(ui,{get fill(){return e.fill}})}}),Vt(Qt,{get when(){return"string"!=typeof n()},get children(){return n()}})]}})}})]}}))},Fo={m:"24px",s:"16px",none:"0"},Uo=Hn.div`
    display: flex;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 20px 0;
    overflow-y: auto;

    ${bo("mobile")} {
        padding-bottom: 0;
    }
`,zo=Ln`
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 16px 64px rgba(0, 0, 0, 0.16);
    width: fit-content;
    margin: auto;

    ${bo("mobile")} {
        width: 100%;
        height: fit-content;
        margin: auto 0 0 0;
    }
`,Wo=Hn.div`
    position: relative;
    min-height: 100px;
    width: 416px;
    padding: 44px 56px 24px;

    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.04);

    background-color: ${e=>e.theme.colors.background.primary};
    border-radius: ${e=>Fo[e.theme.borderRadius]};

    ${bo("mobile")} {
        width: 100%;
    }
`,Ho=Hn(jo)`
    position: absolute;
    right: 16px;
    top: 16px;
`,Vo=Hn.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 16px 16px 18px;
    border-radius: 0 0 ${e=>Fo[e.theme.borderRadius]}
        ${e=>Fo[e.theme.borderRadius]};
`,Zo=Hn(jo)`
    background-color: ${e=>Yn(e.theme.colors.icon.secondary,.12)};
`;class Ko{constructor(){Xe(this,"currentTime",0)}}const Go=class{constructor(){Xe(this,"currentTime",0),Xe(this,"playbackRate",1),Xe(this,"startTime",null),Xe(this,"timeline",new Ko),Xe(this,"finished",Promise.resolve(this)),Xe(this,"effect",null),Xe(this,"id",""),Xe(this,"pending",!1),Xe(this,"playState","finished"),Xe(this,"replaceState","active"),Xe(this,"ready",Promise.resolve(this)),Xe(this,"oncancel",null),Xe(this,"onfinish",null),Xe(this,"onremove",null)}static create(){return Go._instance||(!function(...e){try{console.warn("[TON_CONNECT_UI]",...e)}catch(e){}}("Animation is not supported in this environment: please consider using the `web-animations-js` polyfill to provide a fallback implementation of the Web Animations API."),Go._instance=new Go),Go._instance}cancel(){}finish(){}pause(){}play(){}reverse(){}addEventListener(e,t,n){}dispatchEvent(e){return!1}removeEventListener(e,t,n){}updatePlaybackRate(e){}commitStyles(){}persist(){}};let qo=Go;function Yo(e,t,n){return"animate"in e?e.animate(t,n):qo.create()}Xe(qo,"_instance",null);const $o=cn("<div></div>"),Xo=function(e,t){const n=n=>{var r;return!e.contains(n.target)&&(null==(r=t())?void 0:r())};document.body.addEventListener("click",n),xt((()=>document.body.removeEventListener("click",n)))},Jo=function(e,t){const n=e=>{var n,r;"Escape"===e.key&&(null==(n=document.activeElement)||n.blur(),null==(r=t())||r())};document.body.addEventListener("keydown",n),xt((()=>document.body.removeEventListener("keydown",n)))},Qo=function(e,t){const{isEnabled:n,onClose:r}=t();if(!n)return;if(!("android"===lr().os))return;window.history.pushState(Mo,"");const o=e=>{e.preventDefault(),r()};window.addEventListener("popstate",o,{once:!0}),xt((()=>{window.removeEventListener("popstate",o),or((()=>{var e;!0===(null==(e=window.history.state)?void 0:e[Po])&&window.history.back()}))}))},ea=e=>{const t=zn(),n=Co(e);return yt((()=>{e.opened?document.documentElement.scrollHeight!==document.documentElement.clientHeight&&(document.body.style.top=$n(-document.documentElement.scrollTop),document.body.classList.add(Kn)):(document.body.classList.remove(Kn),document.documentElement.scrollTo({top:-parseFloat(getComputedStyle(document.body).top)}),document.body.style.top="auto")})),Vt(Ao,{onBeforeEnter:e=>{const t=yo("mobile")?200:100;Yo(e,[{opacity:0},{opacity:1}],{duration:t}),yo("mobile")&&Yo(e.firstElementChild,[{transform:"translateY(390px)"},{transform:"translateY(0)"}],{duration:t})},onExit:(e,t)=>{const n=yo("mobile")?200:100,r=Yo(e,[{opacity:1},{opacity:0}],{duration:n});if(yo("mobile")){const o=Yo(e.firstElementChild,[{transform:"translateY(0)"},{transform:"translateY(390px)"}],{duration:n});Promise.all([r.finished,o.finished]).then(t)}else r.finished.then(t)},get children(){return Vt(Xt,{get when(){return e.opened},get children(){return Vt(Uo,qt({"data-tc-modal":"true"},n,{get children(){const n=$o.cloneNode(!0);return pn(Qo,n,(()=>({isEnabled:e.enableAndroidBackHandler,onClose:()=>e.onClose()}))),pn(Jo,n,(()=>()=>e.onClose())),pn(Xo,n,(()=>()=>e.onClose())),hn(n,Vt(Wo,{get class(){return e.class},get children(){return[Vt(Ho,{icon:"close",onClick:()=>e.onClose()}),bt((()=>e.children))]}}),null),hn(n,Vt(Xt,{get when(){return e.onClickQuestion},get children(){return Vt(Vo,{get children(){return[Vt(li,{}),Vt(Zo,{get onClick(){return e.onClickQuestion},icon:"question"})]}})}}),null),gt((()=>dn(n,ze(zo,Ln`
                                border-radius: ${Fo[t.borderRadius]};
                                background-color: ${t.colors.background.tint};

                                ${bo("mobile")} {
                                    border-radius: ${Fo[t.borderRadius]}
                                        ${Fo[t.borderRadius]} 0 0;
                                }
                            `)))),n}}))}})}})},ta={m:"22px",s:"12px",none:"0"},na={m:"18px",s:"8px",none:"0"},ra=Hn.div`
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    width: fit-content;
    justify-items: center;
    gap: 4px;

    position: relative;
    padding: 4px;
    border-radius: ${e=>ta[e.theme.borderRadius]};

    background-color: ${e=>e.theme.colors.background.secondary};
`,oa=Hn.div`
    position: absolute;
    top: 4px;
    left: 4px;

    height: calc(100% - 8px);
    width: calc(50% - 4px);

    border-radius: ${e=>na[e.theme.borderRadius]};
    background-color: ${e=>e.theme.colors.background.segment};

    transform: ${e=>e.right?"translateX(100%)":"translateX(0)"};

    transition: transform 0.13s ease-in-out;
`,aa=Hn.input`
    display: none;
`,ia=Hn.label`
    padding: 9px 12px;
    z-index: 1;

    cursor: ${e=>e.isActive?"default":"pointer"};

    transition: transform 0.13s ease-in-out;

    &:hover {
        transform: ${e=>e.isActive?"none":"scale(1.025)"};
    }

    > * {
        ${e=>e.isActive?"":`color: ${e.theme.colors.text.secondary};`}
    }
`,sa={m:"16px",s:"12px",none:"0"},la={m:"12px",s:"8px",none:"0"},ca=Hn.div`
    width: 52px;
    height: 52px;
    background: transparent;
    position: absolute;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.125s ease-in-out;
`,ua=Hn.button`
    display: flex;
    align-items: center;
    position: relative;
    background-color: ${e=>e.theme.colors.background.qr};
    border-radius: ${e=>sa[e.theme.borderRadius]};
    padding: ${$n(24)} 0;
    height: ${$n(304)};
    width: 100%;

    overflow: hidden;
    cursor: pointer;
    border: none;

    ${wo} {
        &:hover {
            ${ca.class} {
                transform: scale(1.04);
            }
        }
    }

    &:active {
        ${ca.class} {
            transform: scale(0.96);
        }
    }

    ${vo} {
        &:active {
            ${ca.class} {
                transform: scale(0.92);
            }
        }
    }
`,da=Hn.div`
    position: relative;

    width: fit-content;
    margin: 0 auto;

    > div:first-child {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    rect {
        fill: transparent;
    }

    path {
        fill: ${e=>e.theme.colors.constant.black};
    }
`,fa=Hn.div`
    position: absolute;
    width: ${$n(60)};
    height: ${$n(60)};
    background: ${e=>e.theme.colors.background.qr};

    display: flex;
    align-items: center;
    justify-content: center;
`,pa=Hn(ro)`
    width: ${e=>$n(e.size)};
    height: ${e=>$n(e.size)};
    border-radius: ${e=>la[e.theme.borderRadius]};
    background-color: ${e=>e.theme.colors.background.qr};
`,ha=Hn.div`
    position: absolute;
    bottom: 14px;
    left: 50%;
    transform: translate(-50%, 0);

    display: flex;
    gap: 6px;
    align-items: center;
    border-radius: 18px;
    min-width: 126px;
    padding: 9px 16px 9px 10px;

    filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.08));
    background-color: ${e=>e.theme.colors.background.segment};
`;var ma,ga,ya={exports:{}};ma=ya,ga=function(){var e=function(e,t){var n=e,r=u[t],o=null,a=0,i=null,s=[],l={},c=function(e,t){o=function(e){for(var t=new Array(e),n=0;n<e;n+=1){t[n]=new Array(e);for(var r=0;r<e;r+=1)t[n][r]=null}return t}(a=4*n+17),d(0,0),d(a-7,0),d(0,a-7),p(),f(),m(e,t),n>=7&&h(e),null==i&&(i=y(n,r,s)),g(i,t)},d=function(e,t){for(var n=-1;n<=7;n+=1)if(!(e+n<=-1||a<=e+n))for(var r=-1;r<=7;r+=1)t+r<=-1||a<=t+r||(o[e+n][t+r]=0<=n&&n<=6&&(0==r||6==r)||0<=r&&r<=6&&(0==n||6==n)||2<=n&&n<=4&&2<=r&&r<=4)},f=function(){for(var e=8;e<a-8;e+=1)null==o[e][6]&&(o[e][6]=e%2==0);for(var t=8;t<a-8;t+=1)null==o[6][t]&&(o[6][t]=t%2==0)},p=function(){for(var e=v.getPatternPosition(n),t=0;t<e.length;t+=1)for(var r=0;r<e.length;r+=1){var a=e[t],i=e[r];if(null==o[a][i])for(var s=-2;s<=2;s+=1)for(var l=-2;l<=2;l+=1)o[a+s][i+l]=-2==s||2==s||-2==l||2==l||0==s&&0==l}},h=function(e){for(var t=v.getBCHTypeNumber(n),r=0;r<18;r+=1){var i=!e&&1==(t>>r&1);o[Math.floor(r/3)][r%3+a-8-3]=i}for(r=0;r<18;r+=1)i=!e&&1==(t>>r&1),o[r%3+a-8-3][Math.floor(r/3)]=i},m=function(e,t){for(var n=r<<3|t,i=v.getBCHTypeInfo(n),s=0;s<15;s+=1){var l=!e&&1==(i>>s&1);s<6?o[s][8]=l:s<8?o[s+1][8]=l:o[a-15+s][8]=l}for(s=0;s<15;s+=1)l=!e&&1==(i>>s&1),s<8?o[8][a-s-1]=l:s<9?o[8][15-s-1+1]=l:o[8][15-s-1]=l;o[a-8][8]=!e},g=function(e,t){for(var n=-1,r=a-1,i=7,s=0,l=v.getMaskFunction(t),c=a-1;c>0;c-=2)for(6==c&&(c-=1);;){for(var u=0;u<2;u+=1)if(null==o[r][c-u]){var d=!1;s<e.length&&(d=1==(e[s]>>>i&1)),l(r,c-u)&&(d=!d),o[r][c-u]=d,-1==(i-=1)&&(s+=1,i=7)}if((r+=n)<0||a<=r){r-=n,n=-n;break}}},y=function(e,t,n){for(var r=_.getRSBlocks(e,t),o=k(),a=0;a<n.length;a+=1){var i=n[a];o.put(i.getMode(),4),o.put(i.getLength(),v.getLengthInBits(i.getMode(),e)),i.write(o)}var s=0;for(a=0;a<r.length;a+=1)s+=r[a].dataCount;if(o.getLengthInBits()>8*s)throw"code length overflow. ("+o.getLengthInBits()+">"+8*s+")";for(o.getLengthInBits()+4<=8*s&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*s||(o.put(236,8),o.getLengthInBits()>=8*s));)o.put(17,8);return function(e,t){for(var n=0,r=0,o=0,a=new Array(t.length),i=new Array(t.length),s=0;s<t.length;s+=1){var l=t[s].dataCount,c=t[s].totalCount-l;r=Math.max(r,l),o=Math.max(o,c),a[s]=new Array(l);for(var u=0;u<a[s].length;u+=1)a[s][u]=255&e.getBuffer()[u+n];n+=l;var d=v.getErrorCorrectPolynomial(c),f=x(a[s],d.getLength()-1).mod(d);for(i[s]=new Array(d.getLength()-1),u=0;u<i[s].length;u+=1){var p=u+f.getLength()-i[s].length;i[s][u]=p>=0?f.getAt(p):0}}var h=0;for(u=0;u<t.length;u+=1)h+=t[u].totalCount;var m=new Array(h),g=0;for(u=0;u<r;u+=1)for(s=0;s<t.length;s+=1)u<a[s].length&&(m[g]=a[s][u],g+=1);for(u=0;u<o;u+=1)for(s=0;s<t.length;s+=1)u<i[s].length&&(m[g]=i[s][u],g+=1);return m}(o,r)};l.addData=function(e,t){var n=null;switch(t=t||"Byte"){case"Numeric":n=C(e);break;case"Alphanumeric":n=E(e);break;case"Byte":n=S(e);break;case"Kanji":n=A(e);break;default:throw"mode:"+t}s.push(n),i=null},l.isDark=function(e,t){if(e<0||a<=e||t<0||a<=t)throw e+","+t;return o[e][t]},l.getModuleCount=function(){return a},l.make=function(){if(n<1){for(var e=1;e<40;e++){for(var t=_.getRSBlocks(e,r),o=k(),a=0;a<s.length;a++){var i=s[a];o.put(i.getMode(),4),o.put(i.getLength(),v.getLengthInBits(i.getMode(),e)),i.write(o)}var u=0;for(a=0;a<t.length;a++)u+=t[a].dataCount;if(o.getLengthInBits()<=8*u)break}n=e}c(!1,function(){for(var e=0,t=0,n=0;n<8;n+=1){c(!0,n);var r=v.getLostPoint(l);(0==n||e>r)&&(e=r,t=n)}return t}())},l.createTableTag=function(e,t){e=e||2;var n="";n+='<table style="',n+=" border-width: 0px; border-style: none;",n+=" border-collapse: collapse;",n+=" padding: 0px; margin: "+(t=void 0===t?4*e:t)+"px;",n+='">',n+="<tbody>";for(var r=0;r<l.getModuleCount();r+=1){n+="<tr>";for(var o=0;o<l.getModuleCount();o+=1)n+='<td style="',n+=" border-width: 0px; border-style: none;",n+=" border-collapse: collapse;",n+=" padding: 0px; margin: 0px;",n+=" width: "+e+"px;",n+=" height: "+e+"px;",n+=" background-color: ",n+=l.isDark(r,o)?"#000000":"#ffffff",n+=";",n+='"/>';n+="</tr>"}return n+="</tbody>",n+="</table>"},l.createSvgTag=function(e,t,n,r){var o={};"object"==typeof arguments[0]&&(e=(o=arguments[0]).cellSize,t=o.margin,n=o.alt,r=o.title),e=e||2,t=void 0===t?4*e:t,(n="string"==typeof n?{text:n}:n||{}).text=n.text||null,n.id=n.text?n.id||"qrcode-description":null,(r="string"==typeof r?{text:r}:r||{}).text=r.text||null,r.id=r.text?r.id||"qrcode-title":null;var a,i,s,c,u=l.getModuleCount()*e+2*t,d="";for(c="l"+e+",0 0,"+e+" -"+e+",0 0,-"+e+"z ",d+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',d+=o.scalable?"":' width="'+u+'px" height="'+u+'px"',d+=' viewBox="0 0 '+u+" "+u+'" ',d+=' preserveAspectRatio="xMinYMin meet"',d+=r.text||n.text?' role="img" aria-labelledby="'+b([r.id,n.id].join(" ").trim())+'"':"",d+=">",d+=r.text?'<title id="'+b(r.id)+'">'+b(r.text)+"</title>":"",d+=n.text?'<description id="'+b(n.id)+'">'+b(n.text)+"</description>":"",d+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',d+='<path d="',i=0;i<l.getModuleCount();i+=1)for(s=i*e+t,a=0;a<l.getModuleCount();a+=1)l.isDark(i,a)&&(d+="M"+(a*e+t)+","+s+c);return d+='" stroke="transparent" fill="black"/>',d+="</svg>"},l.createDataURL=function(e,t){e=e||2,t=void 0===t?4*e:t;var n=l.getModuleCount()*e+2*t,r=t,o=n-t;return P(n,n,(function(t,n){if(r<=t&&t<o&&r<=n&&n<o){var a=Math.floor((t-r)/e),i=Math.floor((n-r)/e);return l.isDark(i,a)?0:1}return 1}))},l.createImgTag=function(e,t,n){e=e||2,t=void 0===t?4*e:t;var r=l.getModuleCount()*e+2*t,o="";return o+="<img",o+=' src="',o+=l.createDataURL(e,t),o+='"',o+=' width="',o+=r,o+='"',o+=' height="',o+=r,o+='"',n&&(o+=' alt="',o+=b(n),o+='"'),o+="/>"};var b=function(e){for(var t="",n=0;n<e.length;n+=1){var r=e.charAt(n);switch(r){case"<":t+="&lt;";break;case">":t+="&gt;";break;case"&":t+="&amp;";break;case'"':t+="&quot;";break;default:t+=r}}return t};return l.createASCII=function(e,t){if((e=e||1)<2)return function(e){e=void 0===e?2:e;var t,n,r,o,a,i=1*l.getModuleCount()+2*e,s=e,c=i-e,u={"██":"█","█ ":"▀"," █":"▄","  ":" "},d={"██":"▀","█ ":"▀"," █":" ","  ":" "},f="";for(t=0;t<i;t+=2){for(r=Math.floor((t-s)/1),o=Math.floor((t+1-s)/1),n=0;n<i;n+=1)a="█",s<=n&&n<c&&s<=t&&t<c&&l.isDark(r,Math.floor((n-s)/1))&&(a=" "),s<=n&&n<c&&s<=t+1&&t+1<c&&l.isDark(o,Math.floor((n-s)/1))?a+=" ":a+="█",f+=e<1&&t+1>=c?d[a]:u[a];f+="\n"}return i%2&&e>0?f.substring(0,f.length-i-1)+Array(i+1).join("▀"):f.substring(0,f.length-1)}(t);e-=1,t=void 0===t?2*e:t;var n,r,o,a,i=l.getModuleCount()*e+2*t,s=t,c=i-t,u=Array(e+1).join("██"),d=Array(e+1).join("  "),f="",p="";for(n=0;n<i;n+=1){for(o=Math.floor((n-s)/e),p="",r=0;r<i;r+=1)a=1,s<=r&&r<c&&s<=n&&n<c&&l.isDark(o,Math.floor((r-s)/e))&&(a=0),p+=a?u:d;for(o=0;o<e;o+=1)f+=p+"\n"}return f.substring(0,f.length-1)},l.renderTo2dContext=function(e,t){t=t||2;for(var n=l.getModuleCount(),r=0;r<n;r++)for(var o=0;o<n;o++)e.fillStyle=l.isDark(r,o)?"black":"white",e.fillRect(r*t,o*t,t,t)},l};e.stringToBytes=(e.stringToBytesFuncs={default:function(e){for(var t=[],n=0;n<e.length;n+=1){var r=e.charCodeAt(n);t.push(255&r)}return t}}).default,e.createStringToBytes=function(e,t){var n=function(){for(var n=O(e),r=function(){var e=n.read();if(-1==e)throw"eof";return e},o=0,a={};;){var i=n.read();if(-1==i)break;var s=r(),l=r()<<8|r();a[String.fromCharCode(i<<8|s)]=l,o+=1}if(o!=t)throw o+" != "+t;return a}(),r="?".charCodeAt(0);return function(e){for(var t=[],o=0;o<e.length;o+=1){var a=e.charCodeAt(o);if(a<128)t.push(a);else{var i=n[e.charAt(o)];"number"==typeof i?(255&i)==i?t.push(i):(t.push(i>>>8),t.push(255&i)):t.push(r)}}return t}};var t,n,r,o,a,i=1,s=2,l=4,c=8,u={L:1,M:0,Q:3,H:2},d=0,f=1,p=2,h=3,m=4,g=5,y=6,b=7,v=(t=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],n=1335,r=7973,a=function(e){for(var t=0;0!=e;)t+=1,e>>>=1;return t},(o={}).getBCHTypeInfo=function(e){for(var t=e<<10;a(t)-a(n)>=0;)t^=n<<a(t)-a(n);return 21522^(e<<10|t)},o.getBCHTypeNumber=function(e){for(var t=e<<12;a(t)-a(r)>=0;)t^=r<<a(t)-a(r);return e<<12|t},o.getPatternPosition=function(e){return t[e-1]},o.getMaskFunction=function(e){switch(e){case d:return function(e,t){return(e+t)%2==0};case f:return function(e,t){return e%2==0};case p:return function(e,t){return t%3==0};case h:return function(e,t){return(e+t)%3==0};case m:return function(e,t){return(Math.floor(e/2)+Math.floor(t/3))%2==0};case g:return function(e,t){return e*t%2+e*t%3==0};case y:return function(e,t){return(e*t%2+e*t%3)%2==0};case b:return function(e,t){return(e*t%3+(e+t)%2)%2==0};default:throw"bad maskPattern:"+e}},o.getErrorCorrectPolynomial=function(e){for(var t=x([1],0),n=0;n<e;n+=1)t=t.multiply(x([1,w.gexp(n)],0));return t},o.getLengthInBits=function(e,t){if(1<=t&&t<10)switch(e){case i:return 10;case s:return 9;case l:case c:return 8;default:throw"mode:"+e}else if(t<27)switch(e){case i:return 12;case s:return 11;case l:return 16;case c:return 10;default:throw"mode:"+e}else{if(!(t<41))throw"type:"+t;switch(e){case i:return 14;case s:return 13;case l:return 16;case c:return 12;default:throw"mode:"+e}}},o.getLostPoint=function(e){for(var t=e.getModuleCount(),n=0,r=0;r<t;r+=1)for(var o=0;o<t;o+=1){for(var a=0,i=e.isDark(r,o),s=-1;s<=1;s+=1)if(!(r+s<0||t<=r+s))for(var l=-1;l<=1;l+=1)o+l<0||t<=o+l||0==s&&0==l||i==e.isDark(r+s,o+l)&&(a+=1);a>5&&(n+=3+a-5)}for(r=0;r<t-1;r+=1)for(o=0;o<t-1;o+=1){var c=0;e.isDark(r,o)&&(c+=1),e.isDark(r+1,o)&&(c+=1),e.isDark(r,o+1)&&(c+=1),e.isDark(r+1,o+1)&&(c+=1),0!=c&&4!=c||(n+=3)}for(r=0;r<t;r+=1)for(o=0;o<t-6;o+=1)e.isDark(r,o)&&!e.isDark(r,o+1)&&e.isDark(r,o+2)&&e.isDark(r,o+3)&&e.isDark(r,o+4)&&!e.isDark(r,o+5)&&e.isDark(r,o+6)&&(n+=40);for(o=0;o<t;o+=1)for(r=0;r<t-6;r+=1)e.isDark(r,o)&&!e.isDark(r+1,o)&&e.isDark(r+2,o)&&e.isDark(r+3,o)&&e.isDark(r+4,o)&&!e.isDark(r+5,o)&&e.isDark(r+6,o)&&(n+=40);var u=0;for(o=0;o<t;o+=1)for(r=0;r<t;r+=1)e.isDark(r,o)&&(u+=1);return n+=Math.abs(100*u/t/t-50)/5*10},o),w=function(){for(var e=new Array(256),t=new Array(256),n=0;n<8;n+=1)e[n]=1<<n;for(n=8;n<256;n+=1)e[n]=e[n-4]^e[n-5]^e[n-6]^e[n-8];for(n=0;n<255;n+=1)t[e[n]]=n;var r={glog:function(e){if(e<1)throw"glog("+e+")";return t[e]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return e[t]}};return r}();function x(e,t){if(void 0===e.length)throw e.length+"/"+t;var n=function(){for(var n=0;n<e.length&&0==e[n];)n+=1;for(var r=new Array(e.length-n+t),o=0;o<e.length-n;o+=1)r[o]=e[o+n];return r}(),r={getAt:function(e){return n[e]},getLength:function(){return n.length},multiply:function(e){for(var t=new Array(r.getLength()+e.getLength()-1),n=0;n<r.getLength();n+=1)for(var o=0;o<e.getLength();o+=1)t[n+o]^=w.gexp(w.glog(r.getAt(n))+w.glog(e.getAt(o)));return x(t,0)},mod:function(e){if(r.getLength()-e.getLength()<0)return r;for(var t=w.glog(r.getAt(0))-w.glog(e.getAt(0)),n=new Array(r.getLength()),o=0;o<r.getLength();o+=1)n[o]=r.getAt(o);for(o=0;o<e.getLength();o+=1)n[o]^=w.gexp(w.glog(e.getAt(o))+t);return x(n,0).mod(e)}};return r}var _=function(){var e=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],t=function(e,t){var n={};return n.totalCount=e,n.dataCount=t,n},n={getRSBlocks:function(n,r){var o=function(t,n){switch(n){case u.L:return e[4*(t-1)+0];case u.M:return e[4*(t-1)+1];case u.Q:return e[4*(t-1)+2];case u.H:return e[4*(t-1)+3];default:return}}(n,r);if(void 0===o)throw"bad rs block @ typeNumber:"+n+"/errorCorrectionLevel:"+r;for(var a=o.length/3,i=[],s=0;s<a;s+=1)for(var l=o[3*s+0],c=o[3*s+1],d=o[3*s+2],f=0;f<l;f+=1)i.push(t(c,d));return i}};return n}(),k=function(){var e=[],t=0,n={getBuffer:function(){return e},getAt:function(t){var n=Math.floor(t/8);return 1==(e[n]>>>7-t%8&1)},put:function(e,t){for(var r=0;r<t;r+=1)n.putBit(1==(e>>>t-r-1&1))},getLengthInBits:function(){return t},putBit:function(n){var r=Math.floor(t/8);e.length<=r&&e.push(0),n&&(e[r]|=128>>>t%8),t+=1}};return n},C=function(e){var t=i,n=e,r={getMode:function(){return t},getLength:function(e){return n.length},write:function(e){for(var t=n,r=0;r+2<t.length;)e.put(o(t.substring(r,r+3)),10),r+=3;r<t.length&&(t.length-r==1?e.put(o(t.substring(r,r+1)),4):t.length-r==2&&e.put(o(t.substring(r,r+2)),7))}},o=function(e){for(var t=0,n=0;n<e.length;n+=1)t=10*t+a(e.charAt(n));return t},a=function(e){if("0"<=e&&e<="9")return e.charCodeAt(0)-"0".charCodeAt(0);throw"illegal char :"+e};return r},E=function(e){var t=s,n=e,r={getMode:function(){return t},getLength:function(e){return n.length},write:function(e){for(var t=n,r=0;r+1<t.length;)e.put(45*o(t.charAt(r))+o(t.charAt(r+1)),11),r+=2;r<t.length&&e.put(o(t.charAt(r)),6)}},o=function(e){if("0"<=e&&e<="9")return e.charCodeAt(0)-"0".charCodeAt(0);if("A"<=e&&e<="Z")return e.charCodeAt(0)-"A".charCodeAt(0)+10;switch(e){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+e}};return r},S=function(t){var n=l,r=e.stringToBytes(t),o={getMode:function(){return n},getLength:function(e){return r.length},write:function(e){for(var t=0;t<r.length;t+=1)e.put(r[t],8)}};return o},A=function(t){var n=c,r=e.stringToBytesFuncs.SJIS;if(!r)throw"sjis not supported.";!function(e,t){var n=r("友");if(2!=n.length||38726!=(n[0]<<8|n[1]))throw"sjis not supported."}();var o=r(t),a={getMode:function(){return n},getLength:function(e){return~~(o.length/2)},write:function(e){for(var t=o,n=0;n+1<t.length;){var r=(255&t[n])<<8|255&t[n+1];if(33088<=r&&r<=40956)r-=33088;else{if(!(57408<=r&&r<=60351))throw"illegal char at "+(n+1)+"/"+r;r-=49472}r=192*(r>>>8&255)+(255&r),e.put(r,13),n+=2}if(n<t.length)throw"illegal char at "+(n+1)}};return a},T=function(){var e=[],t={writeByte:function(t){e.push(255&t)},writeShort:function(e){t.writeByte(e),t.writeByte(e>>>8)},writeBytes:function(e,n,r){n=n||0,r=r||e.length;for(var o=0;o<r;o+=1)t.writeByte(e[o+n])},writeString:function(e){for(var n=0;n<e.length;n+=1)t.writeByte(e.charCodeAt(n))},toByteArray:function(){return e},toString:function(){var t="";t+="[";for(var n=0;n<e.length;n+=1)n>0&&(t+=","),t+=e[n];return t+="]"}};return t},O=function(e){var t=e,n=0,r=0,o=0,a={read:function(){for(;o<8;){if(n>=t.length){if(0==o)return-1;throw"unexpected end of file./"+o}var e=t.charAt(n);if(n+=1,"="==e)return o=0,-1;e.match(/^\s$/)||(r=r<<6|i(e.charCodeAt(0)),o+=6)}var a=r>>>o-8&255;return o-=8,a}},i=function(e){if(65<=e&&e<=90)return e-65;if(97<=e&&e<=122)return e-97+26;if(48<=e&&e<=57)return e-48+52;if(43==e)return 62;if(47==e)return 63;throw"c:"+e};return a},P=function(e,t,n){for(var r=function(e,t){var n=e,r=t,o=new Array(e*t),a={setPixel:function(e,t,r){o[t*n+e]=r},write:function(e){e.writeString("GIF87a"),e.writeShort(n),e.writeShort(r),e.writeByte(128),e.writeByte(0),e.writeByte(0),e.writeByte(0),e.writeByte(0),e.writeByte(0),e.writeByte(255),e.writeByte(255),e.writeByte(255),e.writeString(","),e.writeShort(0),e.writeShort(0),e.writeShort(n),e.writeShort(r),e.writeByte(0);var t=i(2);e.writeByte(2);for(var o=0;t.length-o>255;)e.writeByte(255),e.writeBytes(t,o,255),o+=255;e.writeByte(t.length-o),e.writeBytes(t,o,t.length-o),e.writeByte(0),e.writeString(";")}},i=function(e){for(var t=1<<e,n=1+(1<<e),r=e+1,a=s(),i=0;i<t;i+=1)a.add(String.fromCharCode(i));a.add(String.fromCharCode(t)),a.add(String.fromCharCode(n));var l,c,u,d=T(),f=(l=d,c=0,u=0,{write:function(e,t){if(e>>>t!=0)throw"length over";for(;c+t>=8;)l.writeByte(255&(e<<c|u)),t-=8-c,e>>>=8-c,u=0,c=0;u|=e<<c,c+=t},flush:function(){c>0&&l.writeByte(u)}});f.write(t,r);var p=0,h=String.fromCharCode(o[p]);for(p+=1;p<o.length;){var m=String.fromCharCode(o[p]);p+=1,a.contains(h+m)?h+=m:(f.write(a.indexOf(h),r),a.size()<4095&&(a.size()==1<<r&&(r+=1),a.add(h+m)),h=m)}return f.write(a.indexOf(h),r),f.write(n,r),f.flush(),d.toByteArray()},s=function(){var e={},t=0,n={add:function(r){if(n.contains(r))throw"dup key:"+r;e[r]=t,t+=1},size:function(){return t},indexOf:function(t){return e[t]},contains:function(t){return void 0!==e[t]}};return n};return a}(e,t),o=0;o<t;o+=1)for(var a=0;a<e;a+=1)r.setPixel(a,o,n(a,o));var i=T();r.write(i);for(var s=function(){var e=0,t=0,n=0,r="",o={},a=function(e){r+=String.fromCharCode(i(63&e))},i=function(e){if(e<0);else{if(e<26)return 65+e;if(e<52)return e-26+97;if(e<62)return e-52+48;if(62==e)return 43;if(63==e)return 47}throw"n:"+e};return o.writeByte=function(r){for(e=e<<8|255&r,t+=8,n+=1;t>=6;)a(e>>>t-6),t-=6},o.flush=function(){if(t>0&&(a(e<<6-t),e=0,t=0),n%3!=0)for(var o=3-n%3,i=0;i<o;i+=1)r+="="},o.toString=function(){return r},o}(),l=i.toByteArray(),c=0;c<l.length;c+=1)s.writeByte(l[c]);return s.flush(),"data:image/gif;base64,"+s};return e}(),ga.stringToBytesFuncs["UTF-8"]=function(e){return function(e){for(var t=[],n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t.push(r):r<2048?t.push(192|r>>6,128|63&r):r<55296||r>=57344?t.push(224|r>>12,128|r>>6&63,128|63&r):(n++,r=65536+((1023&r)<<10|1023&e.charCodeAt(n)),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r))}return t}(e)},ma.exports=ga;const ba=ya.exports;function va(e){return Je(this,null,(function*(){try{if(!(null==navigator?void 0:navigator.clipboard))throw new Qn("Clipboard API not available");return yield navigator.clipboard.writeText(e)}catch(e){}!function(e){const t=document.createElement("textarea");t.value=e,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy")}finally{document.body.removeChild(t)}}(e)}))}const wa=cn("<div></div>"),xa=e=>{let t,n,r;const[o,a]=ht(!1),[i,s]=ht(48);yt((()=>{const o=ba(0,"L");o.addData(e.sourceUrl),o.make(),t.innerHTML=o.createSvgTag(4,0);const a=t.firstElementChild.clientWidth,i=Math.round(256/a*1e5)/1e5;if(r){const e=4*Math.ceil(60/(4*i)),t=$n(4*Math.ceil((a-e)/8));r.style.top=t,r.style.left=t,r.style.height=$n(e),r.style.width=$n(e),s(Math.round(48/i))}n.style.transform=`scale(${i})`}));let l=null;return Vt(ua,{get class(){return e.class},onClick:()=>{a(!0),va(e.sourceUrl),null!=l&&clearTimeout(l),l=setTimeout((()=>a(!1)),1500)},get children(){return[Vt(da,{ref(e){"function"==typeof n?n(e):n=e},get children(){return[(()=>{const e=wa.cloneNode(!0);return"function"==typeof t?pn(t,e):t=e,e})(),Vt(Xt,{get when(){return e.imageUrl},get children(){return Vt(fa,{ref(e){"function"==typeof r?r(e):r=e},get children(){return Vt(pa,{get src(){return e.imageUrl},alt:"",get size(){return i()}})}})}})]}}),Vt(Ao,{onBeforeEnter:e=>{Yo(e,[{opacity:0,transform:"translate(-50%, 44px)"},{opacity:1,transform:"translate(-50%, 0)"}],{duration:150,easing:"ease-out"})},onExit:(e,t)=>{Yo(e,[{opacity:1,transform:"translate(-50%, 0)"},{opacity:0,transform:"translate(-50%, 44px)"}],{duration:150,easing:"ease-out"}).finished.then((()=>{t()}))},get children(){return Vt(Xt,{get when(){return o()&&!e.disableCopy},get children(){return Vt(ha,{get children(){return[Vt(Ja,{size:"xs"}),Vt(Aa,{translationKey:"common.linkCopied",children:"Link Copied"})]}})}})}}),Vt(Xt,{get when(){return!e.disableCopy},get children(){return Vt(ca,{get children(){return Vt(Ri,{})}})}})]}})};var _a=(e,t,n)=>{const r=t.trim().split(".").reduce(((e,t)=>e?e[t]:void 0),e);return void 0!==r?r:n},ka=(e={},t=(navigator.language in e?navigator.language:Object.keys(e)[0]))=>{const[n,r]=ht(t),[o,a]=Kr(e);return[(e,t,r)=>{const a=_a(o[n()],e,r||"");return"function"==typeof a?a(t):"string"==typeof a?((e,t,n=/{{(.*?)}}/g)=>e.replace(n,((e,n)=>_a(t,n,""))))(a,t||{}):a},{add(e,t){a(e,(e=>Object.assign(e||{},t)))},locale:e=>e?r(e):n(),dict:e=>_a(o,e)}]},Ca=kt({}),Ea=()=>Ct(Ca);const Sa=Hn.div`
    font-style: normal;
    font-weight: ${e=>e.fontWeight};
    font-size: ${e=>e.fontSize};
    line-height: ${e=>e.lineHeight};

    color: ${e=>e.color};
`,Aa=e=>{const t=zn(),[n]=Ea();let r;const o=qt({fontSize:"14px",fontWeight:"510",lineHeight:"130%"},e);return yt((()=>{r&&"unset"!==o.cursor&&"pointer"!==getComputedStyle(r).cursor&&(r.style.cursor="default")})),Vt(Sa,{get fontSize(){return o.fontSize},get fontWeight(){return o.fontWeight},get lineHeight(){return o.lineHeight},get color(){return e.color||t.colors.text.primary},get class(){return o.class},ref(e){"function"==typeof r?r(e):r=e},"data-tc-text":"true",get children(){var e;return bt((()=>!!o.translationKey))()?n(o.translationKey,o.translationValues,null==(e=o.children)?void 0:e.toString()):o.children}})},Ta=Hn.div`
    position: relative;

    &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border: 0.5px solid rgba(0, 0, 0, 0.08);

        border-radius: inherit;
    }
`,Oa=Hn(ro)`
    width: 100%;
    height: 100%;
    border-radius: inherit;
`,Pa=e=>Vt(Ta,{get class(){return e.class},get children(){return Vt(Oa,{get src(){return e.src}})}}),Ma={m:"16px",s:"12px",none:"0"},Na={m:"6px",s:"6px",none:"0"},Ia=Hn.button`
    position: relative;
    cursor: pointer;
    border: none;
    background-color: unset;
    padding: 8px 4px;
    width: 92px;
    display: flex;
    flex-direction: column;
    align-items: center;

    transition: transform 0.125s ease-in-out;

    ${wo} {
        &:hover {
            transform: scale(1.04);
        }
    }

    &:active {
        transform: scale(0.96);
    }

    ${bo("mobile")} {
        padding: 8px 4px;
        width: 82px;
    }

    ${vo} {
        &:active {
            transform: scale(0.92);
        }
    }
`,Ra=Hn(Pa)`
    width: 60px;
    height: 60px;
    border-radius: ${e=>Ma[e.theme.borderRadius]};

    margin-bottom: 8px;
`,Ba=Hn(ro)`
    position: absolute;
    right: 10px;
    top: 50px;
    width: 24px;
    height: 24px;
    border-radius: ${e=>Na[e.theme.borderRadius]};
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08);
`,Da=Hn(Aa)`
    max-width: 90px;
    font-weight: 590;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    ${bo("mobile")} {
        max-width: 80px;
    }
`,La=Hn(Aa)`
    font-weight: 510;
    max-width: 90px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: ${e=>e.colorPrimary?e.theme.colors.text.primary:e.theme.colors.text.secondary};

    ${bo("mobile")} {
        max-width: 80px;
    }
`,ja=e=>Vt(Ia,{get class(){return e.class},onClick:()=>e.onClick(),"data-tc-wallet-item":"true",get children(){return[bt((()=>bt((()=>"string"==typeof e.icon))()?Vt(Ra,{get src(){return e.icon}}):e.icon)),bt((()=>bt((()=>!!e.badgeUrl))()&&Vt(Ba,{get src(){return e.badgeUrl}}))),Vt(Da,{get children(){return e.name}}),bt((()=>bt((()=>!!e.secondLine))()&&Vt(La,{get colorPrimary(){var t;return null==(t=e.secondLineColorPrimary)||t},get children(){return e.secondLine}})))]}}),Fa=Hn.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;

    text-align: center;

    color: ${e=>e.theme.colors.text.primary};

    margin-top: 0;
    margin-bottom: 0;

    cursor: default;
`,Ua=e=>{const[t]=Ea();return Vt(Fa,{get class(){return e.class},"data-tc-h1":"true",get children(){var n;return bt((()=>!!e.translationKey))()?t(e.translationKey,e.translationValues,null==(n=e.children)?void 0:n.toString()):e.children}})},za=Hn.h2`
    font-style: normal;
    font-weight: 510;
    font-size: 16px;
    line-height: 22px;

    text-align: center;

    color: ${e=>e.theme.colors.text.secondary};

    margin-top: 0;
    margin-bottom: 32px;

    cursor: default;
`,Wa=e=>{const[t]=Ea();return Vt(za,{get class(){return e.class},"data-tc-h2":"true",get children(){var n;return bt((()=>!!e.translationKey))()?t(e.translationKey,e.translationValues,null==(n=e.children)?void 0:n.toString()):e.children}})},Ha=Hn.h3`
    font-style: normal;
    font-weight: 590;
    font-size: 16px;
    line-height: 20px;

    color: ${e=>e.theme.colors.text.primary};

    margin-top: 0;
    margin-bottom: 0;

    cursor: default;
`,Va=e=>{const[t]=Ea();return Vt(Ha,{"data-tc-h3":"true",get class(){return e.class},get children(){var n;return bt((()=>!!e.translationKey))()?t(e.translationKey,e.translationValues,null==(n=e.children)?void 0:n.toString()):e.children}})},Za=cn('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.75 7.5C9.33579 7.5 9 7.16421 9 6.75C9 6.33579 9.33579 6 9.75 6H21.25C21.6642 6 22 6.33579 22 6.75V18.25C22 18.6642 21.6642 19 21.25 19C20.8358 19 20.5 18.6642 20.5 18.25V8.56066L6.28033 22.7803C5.98744 23.0732 5.51256 23.0732 5.21967 22.7803C4.92678 22.4874 4.92678 22.0126 5.21967 21.7197L19.4393 7.5H9.75Z"></path></svg>'),Ka=e=>{const t=zn(),n=()=>e.fill||t.colors.icon.secondary;return(()=>{const e=Za.cloneNode(!0),t=e.firstChild;return gt((r=>{const o=n(),a=n();return o!==r._v$&&un(e,"fill",r._v$=o),a!==r._v$2&&un(t,"fill",r._v$2=a),r}),{_v$:void 0,_v$2:void 0}),e})()},Ga=cn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.1839 17.7069C13.6405 18.6507 13.3688 19.1226 13.0591 19.348C12.4278 19.8074 11.5723 19.8074 10.941 19.348C10.6312 19.1226 10.3595 18.6507 9.81613 17.7069L5.52066 10.2464C4.76864 8.94024 4.39263 8.28717 4.33762 7.75894C4.2255 6.68236 4.81894 5.65591 5.80788 5.21589C6.29309 5 7.04667 5 8.55383 5H15.4462C16.9534 5 17.7069 5 18.1922 5.21589C19.1811 5.65591 19.7745 6.68236 19.6624 7.75894C19.6074 8.28717 19.2314 8.94024 18.4794 10.2464L14.1839 17.7069ZM11.1 16.3412L6.56139 8.48002C6.31995 8.06185 6.19924 7.85276 6.18146 7.68365C6.14523 7.33896 6.33507 7.01015 6.65169 6.86919C6.80703 6.80002 7.04847 6.80002 7.53133 6.80002H7.53134L11.1 6.80002V16.3412ZM12.9 16.3412L17.4387 8.48002C17.6801 8.06185 17.8008 7.85276 17.8186 7.68365C17.8548 7.33896 17.665 7.01015 17.3484 6.86919C17.193 6.80002 16.9516 6.80002 16.4687 6.80002L12.9 6.80002V16.3412Z"></path></svg>'),qa=e=>{const t=zn();return(()=>{const n=Ga.cloneNode(!0),r=n.firstChild;return gt((()=>un(r,"fill",e.fill||t.colors.icon.primary))),n})()},Ya=cn('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#clip0_3783_2045)"><circle cx="8" cy="8.00098" r="8"></circle><path d="M4.75 8.50098L7 10.751L11.75 6.00098" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_3783_2045"><rect width="16" height="16" fill="white" transform="translate(0 0.000976562)"></rect></clipPath></defs></svg>'),$a=cn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11"></circle><path d="M17.1364 9.6364C17.4879 9.28493 17.4879 8.71508 17.1364 8.36361C16.7849 8.01214 16.2151 8.01214 15.8636 8.36361L10 14.2272L8.1364 12.3636C7.78493 12.0121 7.21508 12.0121 6.86361 12.3636C6.51214 12.7151 6.51214 13.2849 6.86361 13.6364L9.36361 16.1364C9.71508 16.4879 10.2849 16.4879 10.6364 16.1364L17.1364 9.6364Z"></path></svg>'),Xa=cn('<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="36" cy="36" r="33"></circle><path d="M50.9142 28.4142C51.6953 27.6332 51.6953 26.3668 50.9142 25.5858C50.1332 24.8047 48.8668 24.8047 48.0858 25.5858L30 43.6716L23.9142 37.5858C23.1332 36.8047 21.8668 36.8047 21.0858 37.5858C20.3047 38.3668 20.3047 39.6332 21.0858 40.4142L28.5858 47.9142C29.3668 48.6953 30.6332 48.6953 31.4142 47.9142L50.9142 28.4142Z"></path></svg>'),Ja=e=>{const t=zn(),n=()=>e.size||"s",r=()=>e.fill||t.colors.icon.success;return bt((()=>{const o=bt((()=>"xs"===n()));return()=>o()?(()=>{const n=Ya.cloneNode(!0),o=n.firstChild.firstChild,a=o.nextSibling;return gt((i=>{const s=e.class,l=r(),c=t.colors.constant.white;return s!==i._v$&&un(n,"class",i._v$=s),l!==i._v$2&&un(o,"fill",i._v$2=l),c!==i._v$3&&un(a,"stroke",i._v$3=c),i}),{_v$:void 0,_v$2:void 0,_v$3:void 0}),n})():(()=>{const o=bt((()=>"s"===n()));return()=>o()?(()=>{const n=$a.cloneNode(!0),o=n.firstChild,a=o.nextSibling;return gt((i=>{const s=e.class,l=r(),c=t.colors.constant.white;return s!==i._v$4&&un(n,"class",i._v$4=s),l!==i._v$5&&un(o,"fill",i._v$5=l),c!==i._v$6&&un(a,"fill",i._v$6=c),i}),{_v$4:void 0,_v$5:void 0,_v$6:void 0}),n})():(()=>{const n=Xa.cloneNode(!0),o=n.firstChild,a=o.nextSibling;return gt((i=>{const s=e.class,l=r(),c=t.colors.constant.white;return s!==i._v$7&&un(n,"class",i._v$7=s),l!==i._v$8&&un(o,"fill",i._v$8=l),c!==i._v$9&&un(a,"fill",i._v$9=c),i}),{_v$7:void 0,_v$8:void 0,_v$9:void 0}),n})()})()})())},Qa=cn('<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="36" cy="36" r="33"></circle><path d="M24.0858 26.9142C23.3047 26.1332 23.3047 24.8668 24.0858 24.0858C24.8668 23.3047 26.1332 23.3047 26.9142 24.0858L36 33.1716L45.0858 24.0858C45.8668 23.3047 47.1332 23.3047 47.9142 24.0858C48.6953 24.8668 48.6953 26.1332 47.9142 26.9142L38.8284 36L47.9142 45.0858C48.6953 45.8668 48.6953 47.1332 47.9142 47.9142C47.1332 48.6953 45.8668 48.6953 45.0858 47.9142L36 38.8284L26.9142 47.9142C26.1332 48.6953 24.8668 48.6953 24.0858 47.9142C23.3047 47.1332 23.3047 45.8668 24.0858 45.0858L33.1716 36L24.0858 26.9142Z"></path></svg>'),ei=cn('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24.001" r="22"></circle><path d="M24 24.001L31.5 16.501M24 24.001L16.5 16.501M24 24.001L16.5 31.501M24 24.001L31.5 31.501" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),ti=cn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11"></circle><path d="M7.86361 9.1364C7.51214 8.78493 7.51214 8.21508 7.86361 7.86361C8.21508 7.51214 8.78493 7.51214 9.1364 7.86361L12 10.7272L14.8636 7.86361C15.2151 7.51214 15.7849 7.51214 16.1364 7.86361C16.4879 8.21508 16.4879 8.78493 16.1364 9.1364L13.2728 12L16.1364 14.8636C16.4879 15.2151 16.4879 15.7849 16.1364 16.1364C15.7849 16.4879 15.2151 16.4879 14.8636 16.1364L12 13.2728L9.1364 16.1364C8.78493 16.4879 8.21508 16.4879 7.86361 16.1364C7.51214 15.7849 7.51214 15.2151 7.86361 14.8636L10.7272 12L7.86361 9.1364Z"></path></svg>'),ni=e=>{const t=zn(),n=()=>e.size||"m",r=()=>e.fill||t.colors.icon.error;return bt((()=>{const o=bt((()=>"m"===n()));return()=>o()?(()=>{const n=Qa.cloneNode(!0),o=n.firstChild,a=o.nextSibling;return gt((i=>{const s=e.class,l=r(),c=t.colors.constant.white;return s!==i._v$&&un(n,"class",i._v$=s),l!==i._v$2&&un(o,"fill",i._v$2=l),c!==i._v$3&&un(a,"fill",i._v$3=c),i}),{_v$:void 0,_v$2:void 0,_v$3:void 0}),n})():(()=>{const o=bt((()=>"s"===n()));return()=>o()?(()=>{const n=ei.cloneNode(!0),o=n.firstChild,a=o.nextSibling;return gt((i=>{const s=e.class,l=r(),c=t.colors.constant.white;return s!==i._v$4&&un(n,"class",i._v$4=s),l!==i._v$5&&un(o,"fill",i._v$5=l),c!==i._v$6&&un(a,"stroke",i._v$6=c),i}),{_v$4:void 0,_v$5:void 0,_v$6:void 0}),n})():(()=>{const n=ti.cloneNode(!0),o=n.firstChild,a=o.nextSibling;return gt((i=>{const s=e.class,l=r(),c=t.colors.constant.white;return s!==i._v$7&&un(n,"class",i._v$7=s),l!==i._v$8&&un(o,"fill",i._v$8=l),c!==i._v$9&&un(a,"fill",i._v$9=c),i}),{_v$7:void 0,_v$8:void 0,_v$9:void 0}),n})()})()})())},ri=cn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.55 5.85123C18.9459 7.81184 20.1094 12.1541 18.1488 15.55C16.1882 18.9459 11.8459 20.1094 8.44998 18.1488C8.01952 17.9003 7.46909 18.0478 7.22056 18.4782C6.97203 18.9087 7.11952 19.4591 7.54998 19.7076C11.8068 22.1653 17.2499 20.7068 19.7076 16.45C22.1653 12.1932 20.7068 6.75005 16.45 4.29239C12.1932 1.83472 6.75003 3.29321 4.29236 7.55001C4.04383 7.98047 4.19132 8.53091 4.62178 8.77943C5.05224 9.02796 5.60268 8.88048 5.8512 8.45001C7.81181 5.05413 12.1541 3.89062 15.55 5.85123Z"></path></svg>'),oi=cn('<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 2.99951C11.5066 2.99951 3 11.5061 3 21.9995C3 32.4929 11.5066 40.9995 22 40.9995C22.8284 40.9995 23.5 41.6711 23.5 42.4995C23.5 43.3279 22.8284 43.9995 22 43.9995C9.84974 43.9995 0 34.1498 0 21.9995C0 9.84925 9.84974 -0.000488281 22 -0.000488281C34.1503 -0.000488281 44 9.84925 44 21.9995C44 22.8279 43.3284 23.4995 42.5 23.4995C41.6716 23.4995 41 22.8279 41 21.9995C41 11.5061 32.4934 2.99951 22 2.99951Z"></path></svg>'),ai=cn('<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 56.7846C35.479 63.412 50.1572 59.479 56.7846 47.9999C63.412 36.5209 59.479 21.8427 48 15.2153C36.521 8.58791 21.8428 12.5209 15.2154 23.9999" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),ii=e=>{const t=zn(),n=()=>e.size||"xs",r=()=>e.fill||t.colors.icon.tertiary,o=Ln`
        animation: ${jn`
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
    `} 1s linear infinite;
    `;return bt((()=>{const t=bt((()=>"xs"===n()));return()=>t()?(()=>{const t=ri.cloneNode(!0),n=t.firstChild;return gt((a=>{const i=ze(o,e.class),s=r();return i!==a._v$&&un(t,"class",a._v$=i),s!==a._v$2&&un(n,"fill",a._v$2=s),a}),{_v$:void 0,_v$2:void 0}),t})():(()=>{const t=bt((()=>"s"===n()));return()=>t()?(()=>{const t=oi.cloneNode(!0),n=t.firstChild;return gt((a=>{const i=ze(o,e.class),s=r();return i!==a._v$3&&un(t,"class",a._v$3=i),s!==a._v$4&&un(n,"fill",a._v$4=s),a}),{_v$3:void 0,_v$4:void 0}),t})():(()=>{const t=ai.cloneNode(!0),n=t.firstChild;return gt((a=>{const i=ze(o,e.class),s=r();return i!==a._v$5&&un(t,"class",a._v$5=i),s!==a._v$6&&un(n,"stroke",a._v$6=s),a}),{_v$5:void 0,_v$6:void 0}),t})()})()})())},si=cn('<svg width="158" height="28" viewBox="0 0 158 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M28 14.001C28 21.733 21.732 28.001 14 28.001C6.26801 28.001 0 21.733 0 14.001C0 6.26899 6.26801 0.000976562 14 0.000976562C21.732 0.000976562 28 6.26899 28 14.001ZM9.21931 8.00098H18.7801H18.7813C20.538 8.00098 21.6522 9.89966 20.7691 11.4302L14.8672 21.6576C14.4822 22.3254 13.5172 22.3254 13.1322 21.6576L7.23158 11.4302C6.34721 9.89726 7.4614 8.00098 9.21931 8.00098ZM13.1262 18.5882V9.74806H9.21811C8.78976 9.74806 8.53708 10.2029 8.74163 10.5578L11.8423 16.1035L13.1262 18.5882ZM16.1559 16.1047L19.2554 10.5566C19.4599 10.2017 19.2073 9.74685 18.7789 9.74685H14.8709V18.5906L16.1559 16.1047Z" fill="#0098EA"></path><path d="M18.7802 8.00098H9.21936C7.46145 8.00098 6.34727 9.89726 7.23164 11.4302L13.1322 21.6576C13.5173 22.3254 14.4823 22.3254 14.8673 21.6576L20.7691 11.4302C21.6523 9.89966 20.5381 8.00098 18.7814 8.00098H18.7802ZM13.1274 18.5906L11.8424 16.1035L8.74168 10.5578C8.53714 10.2029 8.78981 9.74806 9.21816 9.74806H13.1262V18.5918L13.1274 18.5906ZM19.2555 10.5566L16.156 16.1047L14.8709 18.5906V9.74685H18.779C19.2073 9.74685 19.46 10.2017 19.2555 10.5566Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M51.7483 22.1967C55.7182 22.1967 58.9609 18.954 58.9609 14.9841C58.9609 11.0142 55.7182 7.77148 51.7483 7.77148C47.7588 7.77148 44.5357 11.0142 44.5357 14.9841C44.5357 18.954 47.7588 22.1967 51.7483 22.1967ZM51.7483 19.1702C49.4686 19.1702 47.6802 17.2442 47.6802 14.9841C47.6802 12.724 49.4686 10.798 51.7483 10.798C54.0084 10.798 55.7968 12.724 55.7968 14.9841C55.7968 17.2442 54.0084 19.1702 51.7483 19.1702ZM37.0698 21.9609H40.2142V10.9946H44.2843V8.00732H33V10.9946H37.0698V21.9609ZM69.9379 8.00732H73.0823V21.9609H70.3899L63.59 13.3333V21.9609H60.4652V8.00732H63.1576L69.9379 16.6153V8.00732ZM79.2259 14.9887C79.2259 10.9202 82.351 7.77539 86.4982 7.77539C89.8592 7.77539 92.5519 9.95709 93.2202 12.6891H90.7437C90.154 11.0971 88.4637 9.9964 86.4982 9.9964C83.5893 9.9964 81.5452 12.1781 81.5452 14.9887C81.5452 17.7994 83.5893 19.9811 86.4982 19.9811C88.4637 19.9811 90.154 18.8804 90.7437 17.2884H93.2202C92.5519 20.0204 89.8592 22.2021 86.4982 22.2021C82.351 22.2021 79.2259 19.0573 79.2259 14.9887ZM104.584 17.0525C104.584 19.9025 102.343 22.1628 99.4342 22.1628C96.5253 22.1628 94.2846 19.9025 94.2846 17.0525C94.2846 14.2025 96.5253 11.9422 99.4342 11.9422C102.343 11.9422 104.584 14.2025 104.584 17.0525ZM96.4663 17.0525C96.4663 18.8018 97.6849 20.158 99.4342 20.158C101.164 20.158 102.382 18.8018 102.382 17.0525C102.382 15.3032 101.164 13.947 99.4342 13.947C97.6849 13.947 96.4663 15.3032 96.4663 17.0525ZM108.626 12.1388H106.463V21.9662H108.626V17.1311C108.626 15.0281 109.726 13.9077 111.161 13.9077C112.419 13.9077 113.205 14.8512 113.205 16.4039V21.9662H115.367V16.0501C115.367 13.5539 113.893 11.9422 111.613 11.9422C110.335 11.9422 109.215 12.4926 108.626 13.4753V12.1388ZM117.839 12.1388H120.001V13.4753C120.59 12.4926 121.711 11.9422 122.988 11.9422C125.268 11.9422 126.742 13.5539 126.742 16.0501V21.9662H124.58V16.4039C124.58 14.8512 123.794 13.9077 122.536 13.9077C121.101 13.9077 120.001 15.0281 120.001 17.1311V21.9662H117.839V12.1388ZM133.558 22.1628C136.054 22.1628 137.823 20.728 138.373 18.8804H136.113C135.661 19.8238 134.717 20.2563 133.636 20.2563C131.887 20.2563 130.747 19.077 130.668 17.5832H138.491C138.688 14.2419 136.585 11.9422 133.577 11.9422C130.551 11.9422 128.526 14.1436 128.526 17.0525C128.526 20.0007 130.629 22.1628 133.558 22.1628ZM130.747 16.0501C131.042 14.5367 132.162 13.7505 133.518 13.7505C134.717 13.7505 135.838 14.4581 136.172 16.0501H130.747ZM149.851 18.3694C149.32 20.5511 147.453 22.1628 144.859 22.1628C141.871 22.1628 139.709 19.8828 139.709 17.0525C139.709 14.2222 141.871 11.9422 144.859 11.9422C147.453 11.9422 149.32 13.5539 149.851 15.7356H147.571C147.178 14.6743 146.215 13.9077 144.859 13.9077C143.109 13.9077 141.91 15.2246 141.91 17.0525C141.91 18.8804 143.109 20.1973 144.859 20.1973C146.215 20.1973 147.178 19.4307 147.571 18.3694H149.851ZM155.75 22.0645C156.418 22.0645 156.929 21.9859 157.362 21.8483V19.9221C157.047 20.0401 156.615 20.1187 156.202 20.1187C155.082 20.1187 154.551 19.6666 154.551 18.448V14.065H157.362V12.1388H154.551V9.40675H152.389V12.1388H150.345V14.065H152.389V18.8018C152.389 21.0228 153.863 22.0645 155.75 22.0645Z"></path></svg>'),li=()=>{const e=zn();return(()=>{const t=si.cloneNode(!0),n=t.firstChild.nextSibling.nextSibling;return gt((()=>un(n,"fill",e.theme===Sn.DARK?e.colors.constant.white:e.colors.constant.black))),t})()},ci=cn('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.56608 4.42584C5.82527 3.32158 6.8176 2.5 8.00001 2.5C9.38072 2.5 10.5 3.61929 10.5 5C10.5 5.63026 10.3391 6.0386 10.1264 6.34455C9.90018 6.66993 9.58561 6.92478 9.18864 7.20877C9.12579 7.25372 9.05873 7.30025 8.9887 7.34883C8.27392 7.84472 7.25001 8.55507 7.25001 10V10.25C7.25001 10.6642 7.5858 11 8.00001 11C8.41422 11 8.75001 10.6642 8.75001 10.25V10C8.75001 9.36502 9.10777 9.1096 9.94554 8.51149L10.0614 8.42873C10.4769 8.13147 10.9748 7.75194 11.358 7.20076C11.7547 6.63015 12 5.91973 12 5C12 2.79086 10.2091 1 8.00001 1C6.10564 1 4.5205 2.31615 4.10577 4.08308C4.01112 4.48634 4.26129 4.88997 4.66454 4.98462C5.0678 5.07927 5.47143 4.8291 5.56608 4.42584ZM8.00001 15C8.60752 15 9.10001 14.5075 9.10001 13.9C9.10001 13.2925 8.60752 12.8 8.00001 12.8C7.39249 12.8 6.90001 13.2925 6.90001 13.9C6.90001 14.5075 7.39249 15 8.00001 15Z"></path></svg>'),ui=e=>{const t=zn();return(()=>{const n=ci.cloneNode(!0),r=n.firstChild;return gt((()=>un(r,"fill",e.fill||t.colors.icon.secondary))),n})()},di=cn('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.98156 8.75C9.84854 11.4328 9.01206 13.5 8 13.5C6.98794 13.5 6.15146 11.4328 6.01844 8.75H9.98156ZM11.4832 8.75C11.4217 10.1155 11.1929 11.3869 10.8239 12.4017C10.7734 12.5405 10.7188 12.6789 10.6595 12.8154C12.1454 11.993 13.2103 10.5029 13.4493 8.75H11.4832ZM13.4493 7.25H11.4832C11.4217 5.88453 11.1929 4.61314 10.8239 3.5983C10.7734 3.4595 10.7188 3.32111 10.6595 3.18459C12.1454 4.00697 13.2103 5.49709 13.4493 7.25ZM9.98156 7.25H6.01844C6.15144 4.56764 6.98769 2.50062 7.99955 2.5H8C9.01206 2.5 9.84854 4.56724 9.98156 7.25ZM4.51678 7.25C4.57826 5.88453 4.80706 4.61314 5.1761 3.5983C5.22657 3.4595 5.28124 3.32111 5.3405 3.18459C3.85463 4.00697 2.78972 5.49709 2.55071 7.25H4.51678ZM2.55071 8.75C2.78972 10.5029 3.85463 11.993 5.3405 12.8154C5.28124 12.6789 5.22657 12.5405 5.1761 12.4017C4.80706 11.3869 4.57826 10.1155 4.51678 8.75H2.55071ZM15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"></path></svg>'),fi=e=>{const t=zn();return(()=>{const n=di.cloneNode(!0),r=n.firstChild;return gt((()=>un(r,"fill",e.fill||t.colors.icon.primary))),n})()},pi=cn('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 4.8C2.5 3.11984 2.5 2.27976 2.82698 1.63803C3.1146 1.07354 3.57354 0.614601 4.13803 0.32698C4.77976 0 5.61984 0 7.3 0H8.7C10.3802 0 11.2202 0 11.862 0.32698C12.4265 0.614601 12.8854 1.07354 13.173 1.63803C13.5 2.27976 13.5 3.11984 13.5 4.8V11.2C13.5 12.8802 13.5 13.7202 13.173 14.362C12.8854 14.9265 12.4265 15.3854 11.862 15.673C11.2202 16 10.3802 16 8.7 16H7.3C5.61984 16 4.77976 16 4.13803 15.673C3.57354 15.3854 3.1146 14.9265 2.82698 14.362C2.5 13.7202 2.5 12.8802 2.5 11.2V4.8ZM4 3.9C4 3.05992 4 2.63988 4.16349 2.31901C4.3073 2.03677 4.53677 1.8073 4.81901 1.66349C5.13988 1.5 5.55992 1.5 6.4 1.5H9.6C10.4401 1.5 10.8601 1.5 11.181 1.66349C11.4632 1.8073 11.6927 2.03677 11.8365 2.31901C12 2.63988 12 3.05992 12 3.9V12.1C12 12.9401 12 13.3601 11.8365 13.681C11.6927 13.9632 11.4632 14.1927 11.181 14.3365C10.8601 14.5 10.4401 14.5 9.6 14.5H6.4C5.55992 14.5 5.13988 14.5 4.81901 14.3365C4.53677 14.1927 4.3073 13.9632 4.16349 13.681C4 13.3601 4 12.9401 4 12.1V3.9ZM7 2.5C6.58579 2.5 6.25 2.83579 6.25 3.25C6.25 3.66421 6.58579 4 7 4H9C9.41421 4 9.75 3.66421 9.75 3.25C9.75 2.83579 9.41421 2.5 9 2.5H7Z"></path></svg>'),hi=e=>{const t=zn();return(()=>{const n=pi.cloneNode(!0),r=n.firstChild;return gt((()=>un(r,"fill",e.fill||t.colors.icon.primary))),n})()},mi=cn('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 6.8C1.5 5.11984 1.5 4.27976 1.82698 3.63803C2.1146 3.07354 2.57354 2.6146 3.13803 2.32698C3.77976 2 4.61984 2 6.3 2H9.7C11.3802 2 12.2202 2 12.862 2.32698C13.4265 2.6146 13.8854 3.07354 14.173 3.63803C14.5 4.27976 14.5 5.11984 14.5 6.8V11.5H15.25C15.6642 11.5 16 11.8358 16 12.25C16 12.6642 15.6642 13 15.25 13H0.75C0.335786 13 0 12.6642 0 12.25C0 11.8358 0.335786 11.5 0.75 11.5H1.5V6.8ZM3 11.5H13V5.9C13 5.05992 13 4.63988 12.8365 4.31901C12.6927 4.03677 12.4632 3.8073 12.181 3.66349C11.8601 3.5 11.4401 3.5 10.6 3.5H5.4C4.55992 3.5 4.13988 3.5 3.81901 3.66349C3.53677 3.8073 3.3073 4.03677 3.16349 4.31901C3 4.63988 3 5.05992 3 5.9V11.5Z"></path></svg>'),gi=e=>{const t=zn();return(()=>{const n=mi.cloneNode(!0),r=n.firstChild;return gt((()=>un(r,"fill",e.fill||t.colors.icon.primary))),n})()},yi=cn('<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none"><g clip-path="url(#clip0_3676_1603)"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 1.25049C15.5 0.836275 15.1642 0.500488 14.75 0.500488C14.3358 0.500488 14 0.836275 14 1.25049V3.67012C12.7187 2.04487 10.7318 1.00049 8.5 1.00049C4.63401 1.00049 1.5 4.1345 1.5 8.00049C1.5 11.8665 4.63401 15.0005 8.5 15.0005C11.6844 15.0005 14.3703 12.8748 15.2199 9.96661C15.3361 9.56902 15.1079 9.15254 14.7103 9.03638C14.3127 8.92023 13.8962 9.14838 13.7801 9.54597C13.1123 11.8319 11 13.5005 8.5 13.5005C5.46243 13.5005 3 11.0381 3 8.00049C3 4.96292 5.46243 2.50049 8.5 2.50049C10.321 2.50049 11.9363 3.3855 12.9377 4.75049H10.5C10.0858 4.75049 9.75 5.08627 9.75 5.50049C9.75 5.9147 10.0858 6.25049 10.5 6.25049H14.75C15.1642 6.25049 15.5 5.9147 15.5 5.50049V1.25049Z"></path></g><defs><clipPath id="clip0_3676_1603"><rect width="16" height="16" fill="white" transform="translate(0.5 0.000488281)"></rect></clipPath></defs></svg>'),bi=e=>{const t=zn();return(()=>{const n=yi.cloneNode(!0),r=n.firstChild.firstChild;return gt((()=>un(r,"fill",e.fill||t.colors.accent))),n})()},vi=cn('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 4.06119V6.75053C13 7.16474 13.3358 7.50053 13.75 7.50053C14.1642 7.50053 14.5 7.16474 14.5 6.75053V2.75053L14.5 2.72807C14.5001 2.63191 14.5003 2.49627 14.4842 2.37627C14.4638 2.22503 14.4063 1.99261 14.2071 1.79342C14.0079 1.59423 13.7755 1.5367 13.6243 1.51637C13.5043 1.50023 13.3686 1.50039 13.2725 1.50051L13.25 1.50053H9.25C8.83579 1.50053 8.5 1.83631 8.5 2.25053C8.5 2.66474 8.83579 3.00053 9.25 3.00053H11.9393L7.21967 7.7202C6.92678 8.01309 6.92678 8.48796 7.21967 8.78086C7.51256 9.07375 7.98744 9.07375 8.28033 8.78086L13 4.06119ZM5.85 1.50053H5.81903H5.81899C5.21528 1.50052 4.71702 1.50051 4.31113 1.53367C3.88956 1.56812 3.50203 1.64204 3.13803 1.82751C2.57354 2.11513 2.1146 2.57407 1.82698 3.13856C1.64151 3.50256 1.56759 3.89009 1.53315 4.31166C1.49998 4.71755 1.49999 5.21581 1.5 5.81953V5.81955V5.85053V10.1505V10.1815V10.1815C1.49999 10.7852 1.49998 11.2835 1.53315 11.6894C1.56759 12.111 1.64151 12.4985 1.82698 12.8625C2.1146 13.427 2.57354 13.8859 3.13803 14.1735C3.50203 14.359 3.88956 14.4329 4.31113 14.4674C4.71702 14.5005 5.21527 14.5005 5.81897 14.5005H5.81901H5.85H10.15H10.181H10.181C10.7847 14.5005 11.283 14.5005 11.6889 14.4674C12.1104 14.4329 12.498 14.359 12.862 14.1735C13.4265 13.8859 13.8854 13.427 14.173 12.8625C14.3585 12.4985 14.4324 12.111 14.4669 11.6894C14.5 11.2835 14.5 10.7853 14.5 10.1816V10.1815V10.1505V9.75053C14.5 9.33631 14.1642 9.00053 13.75 9.00053C13.3358 9.00053 13 9.33631 13 9.75053V10.1505C13 10.793 12.9994 11.2297 12.9718 11.5672C12.945 11.8961 12.8963 12.0642 12.8365 12.1815C12.6927 12.4638 12.4632 12.6932 12.181 12.837C12.0637 12.8968 11.8955 12.9455 11.5667 12.9724C11.2292 12.9999 10.7924 13.0005 10.15 13.0005H5.85C5.20757 13.0005 4.77085 12.9999 4.43328 12.9724C4.10447 12.9455 3.93632 12.8968 3.81902 12.837C3.53677 12.6932 3.3073 12.4638 3.16349 12.1815C3.10372 12.0642 3.05503 11.8961 3.02816 11.5672C3.00058 11.2297 3 10.793 3 10.1505V5.85053C3 5.20809 3.00058 4.77137 3.02816 4.43381C3.05503 4.10499 3.10372 3.93684 3.16349 3.81954C3.3073 3.5373 3.53677 3.30783 3.81902 3.16402C3.93632 3.10425 4.10447 3.05556 4.43328 3.02869C4.77085 3.00111 5.20757 3.00053 5.85 3.00053H6.25C6.66422 3.00053 7 2.66474 7 2.25053C7 1.83631 6.66422 1.50053 6.25 1.50053H5.85Z"></path></svg>'),wi=e=>{const t=zn();return(()=>{const n=vi.cloneNode(!0),r=n.firstChild;return gt((()=>un(r,"fill",e.fill||t.colors.accent))),n})()},xi=cn('<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none"><g clip-path="url(#clip0_3676_1274)"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.82698 2.63901C1.5 3.28074 1.5 4.12082 1.5 5.80098V8.80098V9.00098V10.201C1.5 11.8811 1.5 12.7212 1.82698 13.3629C2.1146 13.9274 2.57354 14.3864 3.13803 14.674C3.77976 15.001 4.61984 15.001 6.3 15.001H11.7C13.3802 15.001 14.2202 15.001 14.862 14.674C15.4265 14.3864 15.8854 13.9274 16.173 13.3629C16.5 12.7212 16.5 11.8811 16.5 10.201V8.80098C16.5 7.12082 16.5 6.28074 16.173 5.63901C15.8854 5.07452 15.4265 4.61558 14.862 4.32796C14.743 4.26733 14.6172 4.21795 14.4805 4.17772C14.4501 3.49449 14.3722 3.02994 14.173 2.63901C13.8854 2.07452 13.4265 1.61558 12.862 1.32796C12.2202 1.00098 11.3802 1.00098 9.7 1.00098H6.3C4.61984 1.00098 3.77976 1.00098 3.13803 1.32796C2.57354 1.61558 2.1146 2.07452 1.82698 2.63901ZM12.9861 4.00942C12.9684 3.7108 12.9281 3.49982 12.8365 3.31999C12.6927 3.03775 12.4632 2.80828 12.181 2.66447C11.8601 2.50098 11.4401 2.50098 10.6 2.50098H5.4C4.55992 2.50098 4.13988 2.50098 3.81901 2.66447C3.53677 2.80828 3.3073 3.03775 3.16349 3.31999C3.03615 3.56991 3.00799 3.88 3.00177 4.40188C3.04646 4.37612 3.09189 4.35146 3.13803 4.32796C3.77976 4.00098 4.61984 4.00098 6.3 4.00098H11.7C12.1966 4.00098 12.6197 4.00098 12.9861 4.00942ZM3 7.90098V8.10098C3 8.47468 3 8.76527 3.01439 9.00098H3V11.101C3 11.9411 3 12.3611 3.16349 12.682C3.3073 12.9642 3.53677 13.1937 3.81901 13.3375C4.13988 13.501 4.55992 13.501 5.4 13.501H12.6C13.4401 13.501 13.8601 13.501 14.181 13.3375C14.4632 13.1937 14.6927 12.9642 14.8365 12.682C15 12.3611 15 11.9411 15 11.101V7.90098C15 7.0609 15 6.64086 14.8365 6.31999C14.6927 6.03775 14.4632 5.80828 14.181 5.66447C13.8601 5.50098 13.4401 5.50098 12.6 5.50098H5.4C4.55992 5.50098 4.13988 5.50098 3.81901 5.66447C3.53677 5.80828 3.3073 6.03775 3.16349 6.31999C3 6.64086 3 7.0609 3 7.90098ZM10.5 9.75098C10.5 9.33676 10.8358 9.00098 11.25 9.00098H12.75C13.1642 9.00098 13.5 9.33676 13.5 9.75098C13.5 10.1652 13.1642 10.501 12.75 10.501H11.25C10.8358 10.501 10.5 10.1652 10.5 9.75098Z"></path></g><defs><clipPath id="clip0_3676_1274"><rect width="16" height="16" fill="white" transform="translate(0.5 0.000976562)"></rect></clipPath></defs></svg>'),_i=e=>{const t=zn();return(()=>{const n=xi.cloneNode(!0),r=n.firstChild.firstChild;return gt((()=>un(r,"fill",e.fill||t.colors.accent))),n})()},ki=cn('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M39.6319 16.8719C38.3212 16.2041 36.7002 16.0478 34 16.0112V11C34 5.47715 29.5228 1 24 1C18.4772 1 14 5.47715 14 11V16.0112C11.2998 16.0478 9.6788 16.2041 8.36808 16.8719C6.86278 17.6389 5.63893 18.8628 4.87195 20.3681C4 22.0794 4 24.3196 4 28.8V32.2C4 36.6804 4 38.9206 4.87195 40.6319C5.63893 42.1372 6.86278 43.3611 8.36808 44.1281C10.0794 45 12.3196 45 16.8 45H31.2C35.6804 45 37.9206 45 39.6319 44.1281C41.1372 43.3611 42.3611 42.1372 43.1281 40.6319C44 38.9206 44 36.6804 44 32.2V28.8C44 24.3196 44 22.0794 43.1281 20.3681C42.3611 18.8628 41.1372 17.6389 39.6319 16.8719ZM31 11V16H17V11C17 7.13401 20.134 4 24 4C27.866 4 31 7.13401 31 11ZM7.54497 21.73C7 22.7996 7 24.1997 7 27V34C7 36.8003 7 38.2004 7.54497 39.27C8.02433 40.2108 8.78924 40.9757 9.73005 41.455C10.7996 42 12.1997 42 15 42H33C35.8003 42 37.2004 42 38.27 41.455C39.2108 40.9757 39.9757 40.2108 40.455 39.27C41 38.2004 41 36.8003 41 34V27C41 24.1997 41 22.7996 40.455 21.73C39.9757 20.7892 39.2108 20.0243 38.27 19.545C37.2004 19 35.8003 19 33 19H15C12.1997 19 10.7996 19 9.73005 19.545C8.78924 20.0243 8.02433 20.7892 7.54497 21.73ZM24 24C23.1716 24 22.5 24.6716 22.5 25.5V29.5C22.5 30.3284 23.1716 31 24 31C24.8284 31 25.5 30.3284 25.5 29.5V25.5C25.5 24.6716 24.8284 24 24 24Z"></path></svg>'),Ci=e=>{const t=zn();return(()=>{const n=ki.cloneNode(!0),r=n.firstChild;return gt((o=>{const a=e.class,i=e.fill||t.colors.icon.secondary;return a!==o._v$&&un(n,"class",o._v$=a),i!==o._v$2&&un(r,"fill",o._v$2=i),o}),{_v$:void 0,_v$2:void 0}),n})()},Ei=cn('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M37.485 37.3849C40.894 33.9506 43 29.2212 43 24C43 13.5066 34.4934 5 24 5C13.5066 5 5 13.5066 5 24C5 29.2213 7.1061 33.9507 10.5151 37.385C13.3583 32.9438 18.3354 30 24.0001 30C29.6647 30 34.6418 32.9437 37.485 37.3849ZM35.1809 39.3635C32.9143 35.5532 28.7554 33 24.0001 33C19.2448 33 15.0858 35.5533 12.8193 39.3636C15.9564 41.6506 19.8206 43 24 43C28.1795 43 32.0437 41.6505 35.1809 39.3635ZM24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46ZM24 24C26.7614 24 29 21.7614 29 19C29 16.2386 26.7614 14 24 14C21.2386 14 19 16.2386 19 19C19 21.7614 21.2386 24 24 24ZM24 27C28.4183 27 32 23.4183 32 19C32 14.5817 28.4183 11 24 11C19.5817 11 16 14.5817 16 19C16 23.4183 19.5817 27 24 27Z"></path></svg>'),Si=e=>{const t=zn();return(()=>{const n=Ei.cloneNode(!0),r=n.firstChild;return gt((o=>{const a=e.class,i=e.fill||t.colors.icon.secondary;return a!==o._v$&&un(n,"class",o._v$=a),i!==o._v$2&&un(r,"fill",o._v$2=i),o}),{_v$:void 0,_v$2:void 0}),n})()},Ai=cn('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M34.5607 4.43934C33.9749 3.85355 33.0251 3.85355 32.4393 4.43934C31.8536 5.02513 31.8536 5.97487 32.4393 6.56066L37.8787 12H10.5C9.67157 12 9 12.6716 9 13.5C9 14.3284 9.67157 15 10.5 15H37.8787L32.4393 20.4393C31.8536 21.0251 31.8536 21.9749 32.4393 22.5607C33.0251 23.1464 33.9749 23.1464 34.5607 22.5607L42.5607 14.5607C43.1464 13.9749 43.1464 13.0251 42.5607 12.4393L34.5607 4.43934ZM13.4393 25.4393C14.0251 24.8536 14.9749 24.8536 15.5607 25.4393C16.1464 26.0251 16.1464 26.9749 15.5607 27.5607L10.1213 33H37.5C38.3284 33 39 33.6716 39 34.5C39 35.3284 38.3284 36 37.5 36H10.1213L15.5607 41.4393C16.1464 42.0251 16.1464 42.9749 15.5607 43.5607C14.9749 44.1464 14.0251 44.1464 13.4393 43.5607L5.43934 35.5607C4.85355 34.9749 4.85355 34.0251 5.43934 33.4393L13.4393 25.4393Z"></path></svg>'),Ti=e=>{const t=zn();return(()=>{const n=Ai.cloneNode(!0),r=n.firstChild;return gt((o=>{const a=e.class,i=e.fill||t.colors.icon.secondary;return a!==o._v$&&un(n,"class",o._v$=a),i!==o._v$2&&un(r,"fill",o._v$2=i),o}),{_v$:void 0,_v$2:void 0}),n})()},Oi=cn('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 12.002C1.75 9.20169 1.75 7.80156 2.29497 6.732C2.77433 5.79119 3.53924 5.02629 4.48005 4.54692C5.54961 4.00195 6.94974 4.00195 9.75 4.00195H17.25C20.0503 4.00195 21.4504 4.00195 22.52 4.54692C23.4608 5.02629 24.2257 5.79119 24.705 6.732C24.8256 6.96861 24.9195 7.2214 24.9926 7.50195H21.5C19.6377 7.50195 18.7065 7.50195 17.9609 7.77334C16.711 8.22828 15.7263 9.21291 15.2714 10.4629C15 11.2085 15 12.1396 15 14.002C15 15.8643 15 16.7954 15.2714 17.541C15.7263 18.791 16.711 19.7756 17.9609 20.2306C18.7065 20.502 19.6377 20.502 21.5 20.502H24.9926C24.9195 20.7825 24.8256 21.0353 24.705 21.2719C24.2257 22.2127 23.4608 22.9776 22.52 23.457C21.4504 24.002 20.0503 24.002 17.25 24.002H9.75C6.94974 24.002 5.54961 24.002 4.48005 23.457C3.53924 22.9776 2.77433 22.2127 2.29497 21.2719C1.75 20.2023 1.75 18.8022 1.75 16.002V12.002ZM16.4999 13.802C16.4999 12.1218 16.4999 11.2817 16.8269 10.64C17.1145 10.0755 17.5735 9.61656 18.138 9.32894C18.7797 9.00196 19.6198 9.00196 21.2999 9.00196H23.1999C24.8801 9.00196 25.7202 9.00196 26.3619 9.32894C26.9264 9.61656 27.3853 10.0755 27.673 10.64C27.9999 11.2817 27.9999 12.1218 27.9999 13.802V14.202C27.9999 15.8821 27.9999 16.7222 27.673 17.3639C27.3853 17.9284 26.9264 18.3874 26.3619 18.675C25.7202 19.002 24.8801 19.002 23.1999 19.002H21.2999C19.6198 19.002 18.7797 19.002 18.138 18.675C17.5735 18.3874 17.1145 17.9284 16.8269 17.3639C16.4999 16.7222 16.4999 15.8821 16.4999 14.202V13.802ZM22.4999 14.002C22.4999 14.9685 21.7164 15.752 20.7499 15.752C19.7834 15.752 18.9999 14.9685 18.9999 14.002C18.9999 13.0355 19.7834 12.252 20.7499 12.252C21.7164 12.252 22.4999 13.0355 22.4999 14.002Z"></path></svg>'),Pi=e=>{const t=zn();return(()=>{const n=Oi.cloneNode(!0),r=n.firstChild;return gt((o=>{const a=e.class,i=e.fill||t.colors.constant.white;return a!==o._v$&&un(n,"class",o._v$=a),i!==o._v$2&&un(r,"fill",o._v$2=i),o}),{_v$:void 0,_v$2:void 0}),n})()},Mi=cn('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.7803 7.21967C25.0732 7.51256 25.0732 7.98744 24.7803 8.28033L11.5303 21.5303C11.2374 21.8232 10.7626 21.8232 10.4697 21.5303L4.21967 15.2803C3.92678 14.9874 3.92678 14.5126 4.21967 14.2197C4.51256 13.9268 4.98744 13.9268 5.28033 14.2197L11 19.9393L23.7197 7.21967C24.0126 6.92678 24.4874 6.92678 24.7803 7.21967Z"></path></svg>'),Ni=e=>{const t=zn();return(()=>{const n=Mi.cloneNode(!0),r=n.firstChild;return gt((o=>{const a=e.class,i=e.fill||t.colors.icon.secondary;return a!==o._v$&&un(n,"class",o._v$=a),i!==o._v$2&&un(r,"fill",o._v$2=i),o}),{_v$:void 0,_v$2:void 0}),n})()},Ii=cn('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 10.0001C10.0016 8.02333 10.0267 6.98719 10.436 6.18404C10.8195 5.43139 11.4314 4.81947 12.184 4.43597C13.0397 4 14.1598 4 16.4 4H17.6C19.8402 4 20.9603 4 21.816 4.43597C22.5686 4.81947 23.1805 5.43139 23.564 6.18404C24 7.03969 24 8.15979 24 10.4V11.6C24 13.8402 24 14.9603 23.564 15.816C23.1805 16.5686 22.5686 17.1805 21.816 17.564C21.0128 17.9733 19.9767 17.9984 17.9999 17.9999C17.9984 19.9767 17.9733 21.0128 17.564 21.816C17.1805 22.5686 16.5686 23.1805 15.816 23.564C14.9603 24 13.8402 24 11.6 24H10.4C8.15979 24 7.03969 24 6.18404 23.564C5.43139 23.1805 4.81947 22.5686 4.43597 21.816C4 20.9603 4 19.8402 4 17.6V16.4C4 14.1598 4 13.0397 4.43597 12.184C4.81947 11.4314 5.43139 10.8195 6.18404 10.436C6.98719 10.0267 8.02333 10.0016 10.0001 10.0001ZM10 11.5H9.5C8.09987 11.5 7.3998 11.5 6.86502 11.7725C6.39462 12.0122 6.01217 12.3946 5.77248 12.865C5.5 13.3998 5.5 14.0999 5.5 15.5V18.5C5.5 19.9001 5.5 20.6002 5.77248 21.135C6.01217 21.6054 6.39462 21.9878 6.86502 22.2275C7.3998 22.5 8.09987 22.5 9.5 22.5H12.5C13.9001 22.5 14.6002 22.5 15.135 22.2275C15.6054 21.9878 15.9878 21.6054 16.2275 21.135C16.5 20.6002 16.5 19.9001 16.5 18.5V18H16.4C14.1598 18 13.0397 18 12.184 17.564C11.4314 17.1805 10.8195 16.5686 10.436 15.816C10 14.9603 10 13.8402 10 11.6V11.5ZM11.5 9.5C11.5 8.09987 11.5 7.3998 11.7725 6.86502C12.0122 6.39462 12.3946 6.01217 12.865 5.77248C13.3998 5.5 14.0999 5.5 15.5 5.5H18.5C19.9001 5.5 20.6002 5.5 21.135 5.77248C21.6054 6.01217 21.9878 6.39462 22.2275 6.86502C22.5 7.3998 22.5 8.09987 22.5 9.5V12.5C22.5 13.9001 22.5 14.6002 22.2275 15.135C21.9878 15.6054 21.6054 15.9878 21.135 16.2275C20.6002 16.5 19.9001 16.5 18.5 16.5H15.5C14.0999 16.5 13.3998 16.5 12.865 16.2275C12.3946 15.9878 12.0122 15.6054 11.7725 15.135C11.5 14.6002 11.5 13.9001 11.5 12.5V9.5Z"></path></svg>'),Ri=e=>{const t=zn(),n=()=>e.fill||t.colors.icon.secondary;return(()=>{const e=Ii.cloneNode(!0),t=e.firstChild;return gt((r=>{const o=n(),a=n();return o!==r._v$&&un(e,"fill",r._v$=o),a!==r._v$2&&un(t,"fill",r._v$2=a),r}),{_v$:void 0,_v$2:void 0}),e})()},Bi=cn('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 4.12695C1 3.07754 1 2.55284 1.19202 2.14684C1.38986 1.72856 1.7266 1.39181 2.14489 1.19397C2.55088 1.00195 3.07559 1.00195 4.125 1.00195C5.17441 1.00195 5.69912 1.00195 6.10511 1.19397C6.5234 1.39181 6.86014 1.72856 7.05798 2.14684C7.25 2.55284 7.25 3.07754 7.25 4.12695C7.25 5.17636 7.25 5.70107 7.05798 6.10706C6.86014 6.52535 6.5234 6.8621 6.10511 7.05993C5.69912 7.25195 5.17441 7.25195 4.125 7.25195C3.07559 7.25195 2.55088 7.25195 2.14489 7.05993C1.7266 6.8621 1.38986 6.52535 1.19202 6.10706C1 5.70107 1 5.17636 1 4.12695ZM2.5 3.30195C2.5 3.02193 2.5 2.88191 2.5545 2.77496C2.60243 2.68088 2.67892 2.60439 2.773 2.55645C2.87996 2.50195 3.01997 2.50195 3.3 2.50195H4.95C5.23003 2.50195 5.37004 2.50195 5.477 2.55645C5.57108 2.60439 5.64757 2.68088 5.6955 2.77496C5.75 2.88191 5.75 3.02193 5.75 3.30195V4.95195C5.75 5.23198 5.75 5.37199 5.6955 5.47895C5.64757 5.57303 5.57108 5.64952 5.477 5.69746C5.37004 5.75195 5.23003 5.75195 4.95 5.75195H3.3C3.01997 5.75195 2.87996 5.75195 2.773 5.69746C2.67892 5.64952 2.60243 5.57303 2.5545 5.47895C2.5 5.37199 2.5 5.23198 2.5 4.95195V3.30195ZM1 11.877C1 10.8275 1 10.3028 1.19202 9.89684C1.38986 9.47856 1.7266 9.14181 2.14489 8.94397C2.55088 8.75195 3.07559 8.75195 4.125 8.75195C5.17441 8.75195 5.69912 8.75195 6.10511 8.94397C6.5234 9.14181 6.86014 9.47856 7.05798 9.89684C7.25 10.3028 7.25 10.8275 7.25 11.877C7.25 12.9264 7.25 13.4511 7.05798 13.8571C6.86014 14.2753 6.5234 14.6121 6.10511 14.8099C5.69912 15.002 5.17441 15.002 4.125 15.002C3.07559 15.002 2.55088 15.002 2.14489 14.8099C1.7266 14.6121 1.38986 14.2753 1.19202 13.8571C1 13.4511 1 12.9264 1 11.877ZM2.5 11.052C2.5 10.7719 2.5 10.6319 2.5545 10.525C2.60243 10.4309 2.67892 10.3544 2.773 10.3064C2.87996 10.252 3.01997 10.252 3.3 10.252H4.95C5.23003 10.252 5.37004 10.252 5.477 10.3064C5.57108 10.3544 5.64757 10.4309 5.6955 10.525C5.75 10.6319 5.75 10.7719 5.75 11.052V12.702C5.75 12.982 5.75 13.122 5.6955 13.2289C5.64757 13.323 5.57108 13.3995 5.477 13.4475C5.37004 13.502 5.23003 13.502 4.95 13.502H3.3C3.01997 13.502 2.87996 13.502 2.773 13.4475C2.67892 13.3995 2.60243 13.323 2.5545 13.2289C2.5 13.122 2.5 12.982 2.5 12.702V11.052ZM8.94202 2.14684C8.75 2.55284 8.75 3.07754 8.75 4.12695C8.75 5.17636 8.75 5.70107 8.94202 6.10706C9.13986 6.52535 9.4766 6.8621 9.89489 7.05993C10.3009 7.25195 10.8256 7.25195 11.875 7.25195C12.9244 7.25195 13.4491 7.25195 13.8551 7.05993C14.2734 6.8621 14.6101 6.52535 14.808 6.10706C15 5.70107 15 5.17636 15 4.12695C15 3.07754 15 2.55284 14.808 2.14684C14.6101 1.72856 14.2734 1.39181 13.8551 1.19397C13.4491 1.00195 12.9244 1.00195 11.875 1.00195C10.8256 1.00195 10.3009 1.00195 9.89489 1.19397C9.4766 1.39181 9.13986 1.72856 8.94202 2.14684ZM10.3045 2.77496C10.25 2.88191 10.25 3.02193 10.25 3.30195V4.95195C10.25 5.23198 10.25 5.37199 10.3045 5.47895C10.3524 5.57303 10.4289 5.64952 10.523 5.69746C10.63 5.75195 10.77 5.75195 11.05 5.75195H12.7C12.98 5.75195 13.12 5.75195 13.227 5.69746C13.3211 5.64952 13.3976 5.57303 13.4455 5.47895C13.5 5.37199 13.5 5.23198 13.5 4.95195V3.30195C13.5 3.02193 13.5 2.88191 13.4455 2.77496C13.3976 2.68088 13.3211 2.60439 13.227 2.55645C13.12 2.50195 12.98 2.50195 12.7 2.50195H11.05C10.77 2.50195 10.63 2.50195 10.523 2.55645C10.4289 2.60439 10.3524 2.68088 10.3045 2.77496ZM8.80727 9.13518C8.75 9.26242 8.75 9.4256 8.75 9.75195C8.75 10.0783 8.75 10.2415 8.80727 10.3687C8.87245 10.5136 8.9884 10.6295 9.13323 10.6947C9.26047 10.752 9.42365 10.752 9.75 10.752C10.0764 10.752 10.2395 10.752 10.3668 10.6947C10.5116 10.6295 10.6276 10.5136 10.6927 10.3687C10.75 10.2415 10.75 10.0783 10.75 9.75195C10.75 9.4256 10.75 9.26242 10.6927 9.13518C10.6276 8.99035 10.5116 8.8744 10.3668 8.80922C10.2395 8.75195 10.0764 8.75195 9.75 8.75195C9.42365 8.75195 9.26047 8.75195 9.13323 8.80922C8.9884 8.8744 8.87245 8.99035 8.80727 9.13518ZM10.87 11.8771C10.87 11.546 10.87 11.3805 10.9289 11.2517C10.9938 11.1098 11.1077 10.9959 11.2497 10.931C11.3784 10.8721 11.5439 10.8721 11.875 10.8721C12.2061 10.8721 12.3716 10.8721 12.5003 10.931C12.6423 10.9959 12.7562 11.1098 12.8211 11.2517C12.88 11.3805 12.88 11.546 12.88 11.8771C12.88 12.2081 12.88 12.3737 12.8211 12.5024C12.7562 12.6444 12.6423 12.7583 12.5003 12.8232C12.3716 12.8821 12.2061 12.8821 11.875 12.8821C11.5439 12.8821 11.3784 12.8821 11.2497 12.8232C11.1077 12.7583 10.9938 12.6444 10.9289 12.5024C10.87 12.3737 10.87 12.2081 10.87 11.8771ZM8.80727 13.3852C8.75 13.5124 8.75 13.6756 8.75 14.002C8.75 14.3283 8.75 14.4915 8.80727 14.6187C8.87245 14.7636 8.9884 14.8795 9.13323 14.9447C9.26047 15.002 9.42365 15.002 9.75 15.002C10.0764 15.002 10.2395 15.002 10.3668 14.9447C10.5116 14.8795 10.6276 14.7636 10.6927 14.6187C10.75 14.4915 10.75 14.3283 10.75 14.002C10.75 13.6756 10.75 13.5124 10.6927 13.3852C10.6276 13.2404 10.5116 13.1244 10.3668 13.0592C10.2395 13.002 10.0764 13.002 9.75 13.002C9.42365 13.002 9.26047 13.002 9.13323 13.0592C8.9884 13.1244 8.87245 13.2404 8.80727 13.3852ZM13 9.75195C13 9.4256 13 9.26242 13.0573 9.13518C13.1224 8.99035 13.2384 8.8744 13.3832 8.80922C13.5105 8.75195 13.6736 8.75195 14 8.75195C14.3264 8.75195 14.4895 8.75195 14.6168 8.80922C14.7616 8.8744 14.8776 8.99035 14.9427 9.13518C15 9.26242 15 9.4256 15 9.75195C15 10.0783 15 10.2415 14.9427 10.3687C14.8776 10.5136 14.7616 10.6295 14.6168 10.6947C14.4895 10.752 14.3264 10.752 14 10.752C13.6736 10.752 13.5105 10.752 13.3832 10.6947C13.2384 10.6295 13.1224 10.5136 13.0573 10.3687C13 10.2415 13 10.0783 13 9.75195ZM13.0573 13.3852C13 13.5124 13 13.6756 13 14.002C13 14.3283 13 14.4915 13.0573 14.6187C13.1224 14.7636 13.2384 14.8795 13.3832 14.9447C13.5105 15.002 13.6736 15.002 14 15.002C14.3264 15.002 14.4895 15.002 14.6168 14.9447C14.7616 14.8795 14.8776 14.7636 14.9427 14.6187C15 14.4915 15 14.3283 15 14.002C15 13.6756 15 13.5124 14.9427 13.3852C14.8776 13.2404 14.7616 13.1244 14.6168 13.0592C14.4895 13.002 14.3264 13.002 14 13.002C13.6736 13.002 13.5105 13.002 13.3832 13.0592C13.2384 13.1244 13.1224 13.2404 13.0573 13.3852Z"></path></svg>'),Di=e=>{const t=zn();return(()=>{const n=Bi.cloneNode(!0),r=n.firstChild;return gt((()=>un(r,"fill",e.fill||t.colors.icon.secondary))),n})()},Li={m:"16px",s:"12px",none:"0"},ji={m:"6px",s:"6px",none:"0"},Fi=Hn.div`
    width: 60px;
    height: 60px;
    padding: 8px;
    margin-bottom: 8px;
    border-radius: ${e=>Li[e.theme.borderRadius]};
    background-color: ${e=>e.theme.colors.background.tint};
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    gap: 4px;
`,Ui=Hn(Pa)`
    width: 20px;
    height: 20px;
    border-radius: ${e=>ji[e.theme.borderRadius]};
`,zi=e=>Vt(ja,{get name(){return e.labelLine1},get secondLine(){return e.labelLine2},get icon(){return Vt(Fi,{get children(){return Vt($t,{each:[0,1,2,3],children:t=>Vt(Ui,{get src(){return e.images[t]}})})}})},onClick:()=>e.onClick()}),Wi="telegram-wallet",Hi="https://raw.githubusercontent.com/ton-connect/sdk/main/assets/ton-icon-48.png",Vi="https://raw.githubusercontent.com/ton-connect/sdk/main/assets/tg.png",Zi=e=>{const[t]=Ea();return bt((()=>{const n=bt((()=>e.wallet.appName===Wi));return()=>n()?Vt(ja,{get icon(){return e.wallet.imageUrl},get name(){return t("walletItem.walletOn",{},"Wallet On")},secondLine:"Telegram",get badgeUrl(){return Vi},onClick:()=>e.onClick()}):Vt(ja,{get icon(){return e.wallet.imageUrl},get name(){return e.wallet.name},get secondLine(){return(()=>{if(e.wallet.appName!==Wi)return"isPreferred"in e.wallet&&e.wallet.isPreferred?t("walletItem.recent",{},"Recent"):oe(e.wallet)?t("walletItem.installed",{},"Installed"):"Tonkeeper"===e.wallet.name?t("walletItem.popular",{},"Popular"):void 0})()},secondLineColorPrimary:!1,onClick:()=>e.onClick()})})())},Ki=Hn.div`
    width: 100%;
    overflow-y: auto;
    max-height: ${e=>e.maxHeight};

    scrollbar-width: none;
    &&::-webkit-scrollbar {
        display: none;
    }

    &&::-webkit-scrollbar-track {
        background: transparent;
    }

    &&::-webkit-scrollbar-thumb {
        display: none;
    }
`,Gi=Hn.div`
    height: 1px;
    margin: 0 -24px;
    width: calc(100% + 48px);
    opacity: 0.08;
    background: ${e=>e.isShown?e.theme.colors.icon.secondary:"transparent"};
    transition: background 0.15s ease-in-out;

    ${bo("mobile")} {
        width: 100%;
        margin: 0;
    }
`,[qi,Yi]=ht((null==(je=ir())?void 0:je.innerHeight)||0);ir()&&window.addEventListener("resize",(()=>Yi(window.innerHeight)));const[$i,Xi]=ht(yo("mobile")),Ji=()=>Xi(yo("mobile"));ir()&&(window.addEventListener("resize",(()=>Ji())),window.addEventListener("load",(()=>Ji()),{once:!0}));const Qi=e=>{const[t,n]=ht(!1),r=()=>void 0!==e.maxHeight?`${e.maxHeight}px`:qi()-($i()?150:200)+"px";return[Vt(Gi,{get isShown(){return t()}}),Vt(Ki,{get maxHeight(){return r()},onScroll:e=>{n(e.target.scrollTop>0)},get class(){return e.class},get children(){return e.children}})]},es=Hn.a`
    display: block;
    text-decoration: unset;
`,ts=e=>Vt(es,qt({get href(){return e.href},get target(){return e.blank?"_blank":"_self"},get class(){return e.class}},(()=>e.blank?{rel:"noreferrer noopener"}:{}),{get children(){return e.children}})),ns=kt(),rs=cn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.76228 2.09998H10.2378C11.0458 2.09997 11.7067 2.09996 12.2438 2.14384C12.7997 2.18926 13.3017 2.28614 13.7706 2.52505C14.5045 2.89896 15.1011 3.49558 15.475 4.22941C15.7139 4.6983 15.8108 5.20038 15.8562 5.75629C15.9001 6.29337 15.9001 6.95422 15.9001 7.76227V8.1H16.2377C17.0457 8.09999 17.7066 8.09998 18.2437 8.14386C18.7996 8.18928 19.3017 8.28616 19.7705 8.52507C20.5044 8.89898 21.101 9.4956 21.4749 10.2294C21.7138 10.6983 21.8107 11.2004 21.8561 11.7563C21.9 12.2934 21.9 12.9542 21.9 13.7623V16.2377C21.9 17.0458 21.9 17.7066 21.8561 18.2437C21.8107 18.7996 21.7138 19.3017 21.4749 19.7706C21.101 20.5044 20.5044 21.101 19.7705 21.4749C19.3017 21.7138 18.7996 21.8107 18.2437 21.8561C17.7066 21.9 17.0458 21.9 16.2378 21.9H13.7623C12.9543 21.9 12.2934 21.9 11.7563 21.8561C11.2004 21.8107 10.6983 21.7138 10.2294 21.4749C9.49561 21.101 8.89898 20.5044 8.52508 19.7706C8.28616 19.3017 8.18928 18.7996 8.14386 18.2437C8.09998 17.7066 8.09999 17.0458 8.1 16.2377V15.9H7.76227C6.95426 15.9 6.29335 15.9 5.75629 15.8561C5.20038 15.8107 4.6983 15.7138 4.22941 15.4749C3.49558 15.101 2.89896 14.5044 2.52505 13.7705C2.28614 13.3017 2.18926 12.7996 2.14384 12.2437C2.09996 11.7066 2.09997 11.0458 2.09998 10.2377V7.76228C2.09997 6.95424 2.09996 6.29336 2.14384 5.75629C2.18926 5.20038 2.28614 4.6983 2.52505 4.22941C2.89896 3.49558 3.49558 2.89896 4.22941 2.52505C4.6983 2.28614 5.20038 2.18926 5.75629 2.14384C6.29336 2.09996 6.95425 2.09997 7.76228 2.09998ZM8.1 14.1V13.7623C8.09999 12.9542 8.09998 12.2934 8.14386 11.7563C8.18928 11.2004 8.28616 10.6983 8.52508 10.2294C8.89898 9.4956 9.49561 8.89898 10.2294 8.52507C10.6983 8.28616 11.2004 8.18928 11.7563 8.14386C12.2934 8.09998 12.9542 8.09999 13.7623 8.1H14.1001V7.79998C14.1001 6.94505 14.0994 6.35798 14.0622 5.90287C14.0259 5.45827 13.9593 5.21944 13.8712 5.0466C13.6699 4.65146 13.3486 4.3302 12.9535 4.12886C12.7806 4.04079 12.5418 3.97419 12.0972 3.93786C11.6421 3.90068 11.055 3.89998 10.2001 3.89998H7.79998C6.94505 3.89998 6.35798 3.90068 5.90287 3.93786C5.45827 3.97419 5.21944 4.04079 5.0466 4.12886C4.65146 4.3302 4.3302 4.65146 4.12886 5.0466C4.04079 5.21944 3.97419 5.45827 3.93786 5.90287C3.90068 6.35798 3.89998 6.94505 3.89998 7.79998V10.2C3.89998 11.0549 3.90068 11.642 3.93786 12.0971C3.97419 12.5417 4.04079 12.7805 4.12886 12.9534C4.3302 13.3485 4.65146 13.6698 5.0466 13.8711C5.21944 13.9592 5.45827 14.0258 5.90287 14.0621C6.35798 14.0993 6.94505 14.1 7.79998 14.1H8.1ZM11.0466 10.1289C11.2195 10.0408 11.4583 9.97421 11.9029 9.93788C12.358 9.9007 12.9451 9.9 13.8 9.9H16.2C17.0549 9.9 17.642 9.9007 18.0971 9.93788C18.5417 9.97421 18.7805 10.0408 18.9534 10.1289C19.3485 10.3302 19.6698 10.6515 19.8711 11.0466C19.9592 11.2195 20.0258 11.4583 20.0621 11.9029C20.0993 12.358 20.1 12.9451 20.1 13.8V16.2C20.1 17.0549 20.0993 17.642 20.0621 18.0971C20.0258 18.5417 19.9592 18.7805 19.8711 18.9534C19.6698 19.3485 19.3485 19.6698 18.9534 19.8711C18.7805 19.9592 18.5417 20.0258 18.0971 20.0621C17.642 20.0993 17.0549 20.1 16.2 20.1H13.8C12.9451 20.1 12.358 20.0993 11.9029 20.0621C11.4583 20.0258 11.2195 19.9592 11.0466 19.8711C10.6515 19.6698 10.3302 19.3485 10.1289 18.9534C10.0408 18.7805 9.97421 18.5417 9.93788 18.0971C9.9007 17.642 9.9 17.0549 9.9 16.2V13.8C9.9 12.9451 9.9007 12.358 9.93788 11.9029C9.97421 11.4583 10.0408 11.2195 10.1289 11.0466C10.3302 10.6515 10.6515 10.3302 11.0466 10.1289Z"></path></svg>'),os=e=>{const t=zn();return(()=>{const n=rs.cloneNode(!0),r=n.firstChild;return gt((o=>{const a=e.class,i=e.fill||t.colors.icon.primary;return a!==o._v$&&un(n,"class",o._v$=a),i!==o._v$2&&un(r,"fill",o._v$2=i),o}),{_v$:void 0,_v$2:void 0}),n})()},as=cn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.7624 3.10001C7.95435 3.1 7.29349 3.09999 6.75642 3.14387C6.2005 3.18929 5.69842 3.28617 5.22954 3.52508C4.4957 3.89899 3.89908 4.49561 3.52517 5.22944C3.28626 5.69833 3.18938 6.20041 3.14396 6.75632C3.10008 7.2934 3.10009 7.95424 3.1001 8.76229V15.2377C3.10009 16.0458 3.10008 16.7066 3.14396 17.2437C3.18938 17.7996 3.28626 18.3017 3.52517 18.7706C3.89908 19.5044 4.4957 20.101 5.22954 20.4749C5.69842 20.7138 6.2005 20.8107 6.75642 20.8561C7.29349 20.9 7.95434 20.9 8.76239 20.9H12.0001C12.4972 20.9 12.9001 20.4971 12.9001 20C12.9001 19.503 12.4972 19.1 12.0001 19.1H8.8001C7.94517 19.1 7.3581 19.0993 6.90299 19.0621C6.45839 19.0258 6.21956 18.9592 6.04672 18.8711C5.65158 18.6698 5.33032 18.3485 5.12898 17.9534C5.04092 17.7805 4.97431 17.5417 4.93798 17.0971C4.9008 16.642 4.9001 16.0549 4.9001 15.2V8.80001C4.9001 7.94508 4.9008 7.35801 4.93798 6.9029C4.97431 6.4583 5.04092 6.21947 5.12898 6.04663C5.33032 5.65149 5.65158 5.33023 6.04672 5.12889C6.21956 5.04082 6.45839 4.97422 6.90299 4.93789C7.3581 4.90071 7.94517 4.90001 8.8001 4.90001H12.0001C12.4972 4.90001 12.9001 4.49706 12.9001 4.00001C12.9001 3.50295 12.4972 3.10001 12.0001 3.10001H8.7624Z"></path><path d="M17.6364 7.3636C17.2849 7.01212 16.7151 7.01212 16.3636 7.3636C16.0121 7.71507 16.0121 8.28492 16.3636 8.63639L18.8272 11.1H9.00001C8.50295 11.1 8.10001 11.5029 8.10001 12C8.10001 12.497 8.50295 12.9 9.00001 12.9H18.8272L16.3636 15.3636C16.0121 15.7151 16.0121 16.2849 16.3636 16.6364C16.7151 16.9879 17.2849 16.9879 17.6364 16.6364L21.6364 12.6364C21.9879 12.2849 21.9879 11.7151 21.6364 11.3636L17.6364 7.3636Z"></path></svg>'),is=e=>{const t=zn(),n=()=>e.fill||t.colors.icon.primary;return(()=>{const e=as.cloneNode(!0),t=e.firstChild,r=t.nextSibling;return gt((e=>{const o=n(),a=n();return o!==e._v$&&un(t,"fill",e._v$=o),a!==e._v$2&&un(r,"fill",e._v$2=a),e}),{_v$:void 0,_v$2:void 0}),e})()},ss={m:"8px",s:"4px",none:"0"},ls={m:"16px",s:"8px",none:"0"},cs=Hn.div`
    width: 256px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
    border-radius: ${e=>ls[e.theme.borderRadius]};

    background-color: ${e=>e.theme.colors.background.primary}
           
    color: ${e=>e.theme.colors.text.primary}
`,us=Hn.ul`
    background-color: ${e=>e.theme.colors.background.primary};
    padding: 8px;
`,ds=Hn.button`
    display: flex;
    align-items: center;
    gap: 8px;
    height: 40px;
    padding-left: 8px;
    width: 100%;

    background-color: ${e=>e.theme.colors.background.primary};
    border: none;
    border-radius: ${e=>ss[e.theme.borderRadius]};
    cursor: pointer;

    transition: background-color, transform 0.1s ease-in-out;

    &:hover {
        background-color: ${e=>e.theme.colors.background.secondary};
    }

    &:active {
        transform: scale(0.96);
    }
`,fs=cn("<li></li>"),ps=e=>Vt(Aa,{get translationKey(){return e.translationKey},fontSize:"15px",fontWeight:"590",get children(){return e.children}}),hs={m:"16px",s:"8px",none:"0"},ms=Hn.div`
    width: 256px;
    padding: 12px 16px;
    display: flex;
    gap: 9px;

    background-color: ${e=>e.theme.colors.background.primary};
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
    border-radius: ${e=>hs[e.theme.borderRadius]};
`,gs=Hn.div`
    width: 192px;

    > h3 {
        font-size: 15px;
    }
`,ys=Hn(Aa)`
    margin-top: 4px;
    color: ${e=>e.theme.colors.text.secondary};
`,bs=e=>{const t=Co(e);return Vt(ms,qt({get class(){return e.class},"data-tc-notification":"true"},t,{get children(){return[Vt(gs,{get children(){return[Vt(Va,{get translationKey(){return e.header.translationKey},get translationValues(){return e.header.translationValues},get children(){return e.children}}),Vt(Xt,{get when(){return e.text},get children(){return Vt(ys,{get translationKey(){return e.text.translationKey},get translationValues(){return e.text.translationValues}})}})]}}),bt((()=>e.icon))]}}))},vs=Hn(ii)`
    align-self: center;
`,ws=e=>{const t=Ct(ns),[n]=Ea();return Vt(bs,{get header(){return{translationKey:"notifications.confirm.header",translationValues:{name:t.wallet&&"name"in t.wallet?t.wallet.name:n("common.yourWallet",{},"Your wallet")}}},get class(){return e.class},get icon(){return Vt(vs,{})},"data-tc-notification-confirm":"true",children:"Confirm operation in your wallet"})},xs=Hn(ni)`
    margin-top: 2px;
`,_s=e=>Vt(bs,{header:{translationKey:"notifications.transactionCanceled.header"},text:{translationKey:"notifications.transactionCanceled.text"},get icon(){return Vt(xs,{size:"xs"})},get class(){return e.class},"data-tc-notification-tx-cancelled":"true",children:"Transaction cancelled"}),ks=Hn(Ja)`
    margin-top: 2px;
`,Cs=e=>Vt(bs,{header:{translationKey:"notifications.transactionSent.header"},text:{translationKey:"notifications.transactionSent.text"},get icon(){return Vt(ks,{})},get class(){return e.class},"data-tc-notification-tx-sent":"true",children:"Transaction sent"}),Es=Ln`
    transform: translateY(-8px);
    margin-bottom: 12px;
`,Ss={timeout:4500},[As,Ts]=ht(null);function Os(e){const{timeout:t}=Ye(Ye({},Ss),e),[n,r]=ht([]),[o,a]=ht([]);return yt(function(e,t,n){const r=Array.isArray(e);let o,a=n&&n.defer;return n=>{let i;if(r){i=Array(e.length);for(let t=0;t<e.length;t++)i[t]=e[t]()}else i=e();if(a)return void(a=!1);const s=wt((()=>t(i,o,n)));return o=i,s}}(Sr,(e=>{var n;if(!e||!e.showNotification)return;if(As()===e)return;if("confirm-transaction"===(null==(n=As())?void 0:n.name)&&"confirm-transaction"===e.name)return;Ts(e),r((e=>e.filter((e=>"confirm-transaction"!==e.action))));const o={action:e.name};r((e=>[...e,o]));const i=setTimeout((()=>{r((e=>e.filter((e=>e!==o)))),a((e=>e.filter((e=>e!==i))))}),t);a((e=>[...e,i]))}))),xt((()=>{o().forEach((e=>clearTimeout(e)))})),n}const Ps=cn('<div data-tc-list-notifications="true"></div>'),Ms=Hn(Eo)`
    background-color: ${e=>e.theme.colors.connectButton.background};
    color: ${e=>e.theme.colors.connectButton.foreground};
    box-shadow: ${e=>`0 4px 24px ${Yn(e.theme.colors.constant.black,.16)}`};
    padding: 8px 16px 8px 12px;

    display: flex;
    align-items: center;
    gap: 4px;
    height: 40px;
`,Ns=Hn(Ms)`
    padding: 12px 16px;
    min-width: 148px;
    justify-content: center;
    background-color: ${e=>e.theme.colors.background.primary};
`,Is=Hn(Eo)`
    min-width: 148px;
    height: 40px;

    background-color: ${e=>e.theme.colors.background.primary};
    color: ${e=>e.theme.colors.connectButton.foreground};
    box-shadow: ${e=>`0 4px 24px ${Yn(e.theme.colors.constant.black,.16)}`};

    display: flex;
    align-items: center;
    justify-content: center;
`,Rs=Hn(ii)`
    height: 18px;
    width: 18px;
`,Bs=Hn.div`
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`,Ds=Hn((e=>{const t=Ct(ns),[n,r]=ht(!1);return Vt(cs,{ref(t){const n=e.ref;"function"==typeof n?n(t):e.ref=t},get class(){return e.class},"data-tc-dropdown":"true",get children(){return Vt(us,{get children(){return[(()=>{const e=fs.cloneNode(!0);return hn(e,Vt(ds,{onClick:()=>Je(void 0,null,(function*(){const e=Te(t.account.address,t.account.chain===l.TESTNET);yield va(e),r(!0),setTimeout((()=>r(!1)),1e3)})),get children(){return[Vt(os,{}),Vt(Xt,{get when(){return!n()},get children(){return Vt(ps,{translationKey:"button.dropdown.copy",children:"Copy address"})}}),Vt(Xt,{get when(){return n()},get children(){return Vt(ps,{translationKey:"button.dropdown.copied",children:"Address copied!"})}})]}})),e})(),(()=>{const n=fs.cloneNode(!0);return hn(n,Vt(ds,{onClick:()=>(t.disconnect(),void e.onClose()),get children(){return[Vt(is,{}),Vt(ps,{translationKey:"button.dropdown.disconnect",children:"Disconnect"})]}})),n})()]}})}})}))`
    box-sizing: border-box;
    overflow: hidden;
    margin-top: 12px;
`,Ls=Hn((e=>{const t=Os();return(()=>{const n=Ps.cloneNode(!0);return hn(n,Vt(Oo,{onBeforeEnter:e=>{Yo(e,[{opacity:0,transform:"translateY(0)"},{opacity:1,transform:"translateY(-8px)"}],{duration:200})},onExit:(e,t)=>{Yo(e,[{opacity:1,transform:"translateY(-8px)"},{opacity:0,transform:"translateY(-30px)"}],{duration:200}).finished.then(t)},get children(){return Vt($t,{get each(){return t()},children:e=>Vt(Jt,{get children(){return[Vt(Qt,{get when(){return"transaction-sent"===e.action},get children(){return Vt(Cs,{class:Es})}}),Vt(Qt,{get when(){return"transaction-canceled"===e.action},get children(){return Vt(_s,{class:Es})}}),Vt(Qt,{get when(){return"confirm-transaction"===e.action},get children(){return Vt(ws,{class:Es})}})]}})})}})),gt((()=>dn(n,e.class))),n})()}))`
    > div:first-child {
        margin-top: 20px;
    }
`;function js(e){return e.split("-")[0]}function Fs(e,t,n){let{reference:r,floating:o}=e;const a=r.x+r.width/2-o.width/2,i=r.y+r.height/2-o.height/2,s=function(e){return["top","bottom"].includes(js(e))?"x":"y"}(t),l="y"===s?"height":"width";const c=r[l]/2-o[l]/2,u="x"===s;let d;switch(js(t)){case"top":d={x:a,y:r.y-o.height};break;case"bottom":d={x:a,y:r.y+r.height};break;case"right":d={x:r.x+r.width,y:i};break;case"left":d={x:r.x-o.width,y:i};break;default:d={x:r.x,y:r.y}}switch(function(e){return e.split("-")[1]}(t)){case"start":d[s]-=c*(n&&u?-1:1);break;case"end":d[s]+=c*(n&&u?-1:1)}return d}function Us(e){return $e(Ye({},e),{top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height})}function zs(e){var t;return(null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function Ws(e){return zs(e).getComputedStyle(e)}function Hs(e){return qs(e)?(e.nodeName||"").toLowerCase():""}let Vs;function Zs(){if(Vs)return Vs;const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?(Vs=e.brands.map((e=>e.brand+"/"+e.version)).join(" "),Vs):navigator.userAgent}function Ks(e){return e instanceof zs(e).HTMLElement}function Gs(e){return e instanceof zs(e).Element}function qs(e){return e instanceof zs(e).Node}function Ys(e){if("undefined"==typeof ShadowRoot)return!1;return e instanceof zs(e).ShadowRoot||e instanceof ShadowRoot}function $s(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=Ws(e);return/auto|scroll|overlay|hidden/.test(t+r+n)&&!["inline","contents"].includes(o)}function Xs(e){return["table","td","th"].includes(Hs(e))}function Js(e){const t=/firefox/i.test(Zs()),n=Ws(e),r=n.backdropFilter||n.WebkitBackdropFilter;return"none"!==n.transform||"none"!==n.perspective||!!r&&"none"!==r||t&&"filter"===n.willChange||t&&!!n.filter&&"none"!==n.filter||["transform","perspective"].some((e=>n.willChange.includes(e)))||["paint","layout","strict","content"].some((e=>{const t=n.contain;return null!=t&&t.includes(e)}))}function Qs(){return!/^((?!chrome|android).)*safari/i.test(Zs())}function el(e){return["html","body","#document"].includes(Hs(e))}const tl=Math.min,nl=Math.max,rl=Math.round,ol={x:1,y:1};function al(e){const t=!Gs(e)&&e.contextElement?e.contextElement:Gs(e)?e:null;if(!t)return ol;const n=t.getBoundingClientRect(),r=Ws(t);if("border-box"!==r.boxSizing)return Ks(t)?{x:t.offsetWidth>0&&rl(n.width)/t.offsetWidth||1,y:t.offsetHeight>0&&rl(n.height)/t.offsetHeight||1}:ol;let o=n.width/parseFloat(r.width),a=n.height/parseFloat(r.height);return o&&Number.isFinite(o)||(o=1),a&&Number.isFinite(a)||(a=1),{x:o,y:a}}function il(e,t,n,r){var o,a,i,s;void 0===t&&(t=!1),void 0===n&&(n=!1);const l=e.getBoundingClientRect();let c=ol;t&&(r?Gs(r)&&(c=al(r)):c=al(e));const u=Gs(e)?zs(e):window,d=!Qs()&&n,f=(l.left+(d&&null!=(o=null==(a=u.visualViewport)?void 0:a.offsetLeft)?o:0))/c.x,p=(l.top+(d&&null!=(i=null==(s=u.visualViewport)?void 0:s.offsetTop)?i:0))/c.y,h=l.width/c.x,m=l.height/c.y;return{width:h,height:m,top:p,right:f+h,bottom:p+m,left:f,x:f,y:p}}function sl(e){return((qs(e)?e.ownerDocument:e.document)||window.document).documentElement}function ll(e){return Gs(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function cl(e){return il(sl(e)).left+ll(e).scrollLeft}function ul(e,t,n){const r=Ks(t),o=sl(t),a=il(e,!0,"fixed"===n,t);let i={scrollLeft:0,scrollTop:0};const s={x:0,y:0};if(r||!r&&"fixed"!==n)if(("body"!==Hs(t)||$s(o))&&(i=ll(t)),Ks(t)){const e=il(t,!0);s.x=e.x+t.clientLeft,s.y=e.y+t.clientTop}else o&&(s.x=cl(o));return{x:a.left+i.scrollLeft-s.x,y:a.top+i.scrollTop-s.y,width:a.width,height:a.height}}function dl(e){if("html"===Hs(e))return e;const t=e.assignedSlot||e.parentNode||(Ys(e)?e.host:null)||sl(e);return Ys(t)?t.host:t}function fl(e){return Ks(e)&&"fixed"!==Ws(e).position?e.offsetParent:null}function pl(e){const t=zs(e);let n=fl(e);for(;n&&Xs(n)&&"static"===Ws(n).position;)n=fl(n);return n&&("html"===Hs(n)||"body"===Hs(n)&&"static"===Ws(n).position&&!Js(n))?t:n||function(e){let t=dl(e);for(;Ks(t)&&!el(t);){if(Js(t))return t;t=dl(t)}return null}(e)||t}function hl(e){const t=dl(e);return el(t)?e.ownerDocument.body:Ks(t)&&$s(t)?t:hl(t)}function ml(e,t){var n;void 0===t&&(t=[]);const r=hl(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),a=zs(r);return o?t.concat(a,a.visualViewport||[],$s(r)?r:[]):t.concat(r,ml(r))}function gl(e,t,n){return"viewport"===t?Us(function(e,t){const n=zs(e),r=sl(e),o=n.visualViewport;let a=r.clientWidth,i=r.clientHeight,s=0,l=0;if(o){a=o.width,i=o.height;const e=Qs();(e||!e&&"fixed"===t)&&(s=o.offsetLeft,l=o.offsetTop)}return{width:a,height:i,x:s,y:l}}(e,n)):Gs(t)?function(e,t){const n=il(e,!0,"fixed"===t),r=n.top+e.clientTop,o=n.left+e.clientLeft,a=Ks(e)?al(e):{x:1,y:1},i=e.clientWidth*a.x,s=e.clientHeight*a.y,l=o*a.x,c=r*a.y;return{top:c,left:l,right:l+i,bottom:c+s,x:l,y:c,width:i,height:s}}(t,n):Us(function(e){var t;const n=sl(e),r=ll(e),o=null==(t=e.ownerDocument)?void 0:t.body,a=nl(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),i=nl(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0);let s=-r.scrollLeft+cl(e);const l=-r.scrollTop;return"rtl"===Ws(o||n).direction&&(s+=nl(n.clientWidth,o?o.clientWidth:0)-a),{width:a,height:i,x:s,y:l}}(sl(e)))}const yl={getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const a="clippingAncestors"===n?function(e,t){const n=t.get(e);if(n)return n;let r=ml(e).filter((e=>Gs(e)&&"body"!==Hs(e))),o=null;const a="fixed"===Ws(e).position;let i=a?dl(e):e;for(;Gs(i)&&!el(i);){const e=Ws(i),t=Js(i);(a?t||o:t||"static"!==e.position||!o||!["absolute","fixed"].includes(o.position))?o=e:r=r.filter((e=>e!==i)),i=dl(i)}return t.set(e,r),r}(t,this._c):[].concat(n),i=[...a,r],s=i[0],l=i.reduce(((e,n)=>{const r=gl(t,n,o);return e.top=nl(r.top,e.top),e.right=tl(r.right,e.right),e.bottom=tl(r.bottom,e.bottom),e.left=nl(r.left,e.left),e}),gl(t,s,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:r}=e;const o=Ks(n),a=sl(n);if(n===a)return t;let i={scrollLeft:0,scrollTop:0},s={x:1,y:1};const l={x:0,y:0};if((o||!o&&"fixed"!==r)&&(("body"!==Hs(n)||$s(a))&&(i=ll(n)),Ks(n))){const e=il(n);s=al(n),l.x=e.x+n.clientLeft,l.y=e.y+n.clientTop}return{width:t.width*s.x,height:t.height*s.y,x:t.x*s.x-i.scrollLeft*s.x+l.x,y:t.y*s.y-i.scrollTop*s.y+l.y}},isElement:Gs,getDimensions:function(e){if(Ks(e))return{width:e.offsetWidth,height:e.offsetHeight};const t=il(e);return{width:t.width,height:t.height}},getOffsetParent:pl,getDocumentElement:sl,getScale:al,getElementRects(e){return Je(this,null,(function*(){let{reference:t,floating:n,strategy:r}=e;const o=this.getOffsetParent||pl,a=this.getDimensions;return{reference:ul(t,yield o(n),r),floating:Ye({x:0,y:0},yield a(n))}}))},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>"rtl"===Ws(e).direction};function bl(e,t,n,r){void 0===r&&(r={});const{ancestorScroll:o=!0,ancestorResize:a=!0,elementResize:i=!0,animationFrame:s=!1}=r,l=o&&!s,c=l||a?[...Gs(e)?ml(e):e.contextElement?ml(e.contextElement):[],...ml(t)]:[];c.forEach((e=>{l&&e.addEventListener("scroll",n,{passive:!0}),a&&e.addEventListener("resize",n)}));let u,d=null;if(i){let r=!0;d=new ResizeObserver((()=>{r||n(),r=!1})),Gs(e)&&!s&&d.observe(e),Gs(e)||!e.contextElement||s||d.observe(e.contextElement),d.observe(t)}let f=s?il(e):null;return s&&function t(){const r=il(e);!f||r.x===f.x&&r.y===f.y&&r.width===f.width&&r.height===f.height||n();f=r,u=requestAnimationFrame(t)}(),n(),()=>{var e;c.forEach((e=>{l&&e.removeEventListener("scroll",n),a&&e.removeEventListener("resize",n)})),null==(e=d)||e.disconnect(),d=null,s&&cancelAnimationFrame(u)}}const vl=(e,t,n)=>{const r=new Map,o=Ye({platform:yl},n),a=$e(Ye({},o.platform),{_c:r});return((e,t,n)=>Je(void 0,null,(function*(){const{placement:r="bottom",strategy:o="absolute",middleware:a=[],platform:i}=n,s=a.filter(Boolean),l=yield null==i.isRTL?void 0:i.isRTL(t);if("production"!=={}.NODE_ENV){if(null==i&&console.error(["Floating UI: `platform` property was not passed to config. If you","want to use Floating UI on the web, install @floating-ui/dom","instead of the /core package. Otherwise, you can create your own","`platform`: https://floating-ui.com/docs/platform"].join(" ")),s.filter((e=>{let{name:t}=e;return"autoPlacement"===t||"flip"===t})).length>1)throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware","detected. This will lead to an infinite loop. Ensure only one of","either has been passed to the `middleware` array."].join(" "));e&&t||console.error(["Floating UI: The reference and/or floating element was not defined","when `computePosition()` was called. Ensure that both elements have","been created and can be measured."].join(" "))}let c=yield i.getElementRects({reference:e,floating:t,strategy:o}),{x:u,y:d}=Fs(c,r,l),f=r,p={},h=0;for(let n=0;n<s.length;n++){const{name:a,fn:m}=s[n],{x:g,y,data:b,reset:v}=yield m({x:u,y:d,initialPlacement:r,placement:f,strategy:o,middlewareData:p,rects:c,platform:i,elements:{reference:e,floating:t}});u=null!=g?g:u,d=null!=y?y:d,p=$e(Ye({},p),{[a]:Ye(Ye({},p[a]),b)}),"production"!=={}.NODE_ENV&&h>50&&console.warn(["Floating UI: The middleware lifecycle appears to be running in an","infinite loop. This is usually caused by a `reset` continually","being returned without a break condition."].join(" ")),v&&h<=50&&(h++,"object"==typeof v&&(v.placement&&(f=v.placement),v.rects&&(c=!0===v.rects?yield i.getElementRects({reference:e,floating:t,strategy:o}):v.rects),({x:u,y:d}=Fs(c,f,l))),n=-1)}return{x:u,y:d,placement:f,strategy:o,middlewareData:p}})))(e,t,$e(Ye({},o),{platform:a}))};const wl=cn('<tc-root data-tc-dropdown-container="true"></tc-root>'),xl=()=>{const e=zn(),t=Ct(Mr),n=Ct(ns),[r,o]=ht(!1),[a,i]=ht(t.account),[s,c]=ht(!t.account);let u;const[d,f]=ht(),[p,h]=ht(),m=function(e,t,n){let r=()=>{var e;return null!=(e=null==n?void 0:n.placement)?e:"bottom"},o=()=>{var e;return null!=(e=null==n?void 0:n.strategy)?e:"absolute"},[a,i]=ht({x:null,y:null,placement:r(),strategy:o(),middlewareData:{}}),[s,l]=ht();yt((()=>{let e=s();if(e)throw e.value}));let c=bt((()=>(e(),t(),{})));function u(){let a=e(),s=t();if(a&&s){let e=c();vl(a,s,{middleware:null==n?void 0:n.middleware,placement:r(),strategy:o()}).then((t=>{e===c()&&i(t)}),(e=>{l(e)}))}}return yt((()=>{let a=e(),i=t();if(null==n||n.middleware,r(),o(),a&&i)if(null!=n&&n.whileElementsMounted){let e=n.whileElementsMounted(a,i,u);e&&xt(e)}else u()})),{get x(){return a().x},get y(){return a().y},get placement(){return a().placement},get strategy(){return a().strategy},get middlewareData(){return a().middlewareData},update:u}}(p,d,{whileElementsMounted:bl,placement:"bottom-end"});n.connectionRestored.then((()=>c(!1)));const g=t.onStatusChange((e=>{if(!e)return o(!1),i(null),void c(!1);i(e.account),c(!1)})),y=e=>{if(!a()||!r())return;const t=p().contains(e.target),n=u.contains(e.target);t||n||o(!1)};var b;return b=()=>{document.body.addEventListener("click",y)},yt((()=>wt(b))),xt((()=>{document.body.removeEventListener("click",y),g()})),Vt(En,{component:Zn,get children(){return[Vt(Xt,{get when(){return s()},get children(){return Vt(Is,{disabled:!0,"data-tc-connect-button-loading":"true",get children(){return Vt(Rs,{})}})}}),Vt(Xt,{get when(){return!s()},get children(){return[Vt(Xt,{get when(){return!a()},get children(){return Vt(Ms,{onClick:()=>n.openModal(),"data-tc-connect-button":"true",scale:"s",get children(){return[Vt(qa,{get fill(){return e.colors.connectButton.foreground}}),Vt(Aa,{translationKey:"button.connectWallet",fontSize:"15px",lineHeight:"18px",fontWeight:"590",get color(){return e.colors.connectButton.foreground},children:"Connect wallet"})]}})}}),Vt(Xt,{get when(){return a()},get children(){return Vt(Bs,{get children(){return[Vt(Ns,{onClick:()=>o((e=>!e)),ref:h,"data-tc-dropdown-button":"true",scale:"s",get children(){return[Vt(Aa,{fontSize:"15px",fontWeight:"590",lineHeight:"18px",get children(){return(()=>{const e=a();if(e){const t=Te(e.address,e.chain===l.TESTNET);return t.slice(0,4)+"…"+t.slice(-4)}return""})()}}),Vt(Ro,{direction:"bottom"})]}}),Vt(Cn,{get children(){const e=wt((()=>document.importNode(wl,!0)));return pn(f,e),e.style.setProperty("z-index","999"),e._$owner=it,hn(e,Vt(Ao,{onBeforeEnter:e=>{Yo(e,[{opacity:0,transform:"translateY(-8px)"},{opacity:1,transform:"translateY(0)"}],{duration:150})},onExit:(e,t)=>{Yo(e,[{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(-8px)"}],{duration:150}).finished.then(t)},get children(){return Vt(Xt,{get when(){return r()},get children(){return Vt(Ds,{get hidden(){return!r()},onClose:()=>o(!1),ref(e){"function"==typeof u?u(e):u=e}})}})}}),null),hn(e,Vt(Ls,{}),null),gt((t=>{var n,r;const o=m.strategy,a=`${null!=(n=m.y)?n:0}px`,i=`${null!=(r=m.x)?r:0}px`;return o!==t._v$&&e.style.setProperty("position",t._v$=o),a!==t._v$2&&e.style.setProperty("top",t._v$2=a),i!==t._v$3&&e.style.setProperty("left",t._v$3=i),t}),{_v$:void 0,_v$2:void 0,_v$3:void 0}),e}})]}})}})]}})]}})},_l=Hn(ea)`
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 18px;
    padding-bottom: 0;

    ${bo("mobile")} {
        padding-left: 0;
        padding-right: 0;

        min-height: 364px;
    }
`,kl=Hn(Ua)`
    margin-top: 12px;

    ${bo("mobile")} {
        padding: 0 10px;
    }
`,Cl=Hn.div`
    margin: 30px 0;
    width: 100%;
    display: flex;
    justify-content: center;

    ${bo("mobile")} {
        height: 160px;
        align-items: center;
    }
`;Hn(Aa)`
    min-width: 84px;
    text-align: center;
    font-weight: 590;
`,Hn((e=>{const t="tabBar"+Math.floor(1e4*Math.random());return Vt(ra,{get class(){return e.class},"data-tc-tab-bar":"true",get children(){return[Vt(oa,{get right(){return 1===e.selectedTabIndex}}),Vt(ia,{get isActive(){return 0===e.selectedTabIndex},get children(){return[Vt(aa,{type:"radio",name:t,get checked(){return 0===e.selectedTabIndex},onInput:()=>{var t;return null==(t=e.onSelectedTabIndexChange)?void 0:t.call(e,0)}}),bt((()=>e.tab1))]}}),Vt(ia,{get isActive(){return 1===e.selectedTabIndex},get children(){return[Vt(aa,{type:"radio",get checked(){return 1===e.selectedTabIndex},name:t,onInput:()=>{var t;return null==(t=e.onSelectedTabIndexChange)?void 0:t.call(e,1)}}),bt((()=>e.tab2))]}})]}})}))`
    margin: 0 auto 22px;
`;const[El,Sl]=Kr({buttonRootId:null,language:"en",returnStrategy:"back",twaReturnUrl:void 0,walletsListConfiguration:{},enableAndroidBackHandler:!0});function Al(e){return"jsBridgeKey"in e?$e(Ye({},e),{injected:Ae.isWalletInjected(e.jsBridgeKey),embedded:Ae.isInsideWalletBrowser(e.jsBridgeKey)}):e}function Tl(e,t){var n,r,o,a;return t?((null==(n=t.includeWallets)?void 0:n.length)&&(r="name",o=e,a=t.includeWallets.map(Al),e=o.map((e=>{const t=a.find((t=>t[r]===e[r]));return a=a.filter((t=>t[r]!==e[r])),void 0===t?e:t})).concat(a)),e):e}function Ol(e){return e.platforms.some((e=>["macos","linux","windows"].includes(e)))}function Pl(e){return e.platforms.some((e=>["ios","android"].includes(e)))}function Ml(e){return e.platforms.some((e=>["chrome","firefox","safari"].includes(e)))}function Nl(e,t){return!!t&&(e.name.toLowerCase()===t.toLowerCase()||e.appName.toLowerCase()===t.toLowerCase())}const Il=Hn.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`,Rl=Hn(Ua)`
    margin-bottom: 18px;
`;Hn.div`
    height: 1px;
    margin: 0 -24px;
    width: calc(100% + 48px);
    opacity: 0.12;
    background: ${e=>e.isShown?e.theme.colors.icon.secondary:"transparent"};
    transition: background 0.15s ease-in-out;

    ${bo("mobile")} {
        width: 100%;
    }
`;const Bl=Hn.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, 92px);
    grid-template-rows: auto;
    align-content: flex-start;
    justify-content: center;
    row-gap: 8px;
    width: 100%;
    padding: 0 0 16px;
    align-self: flex-start;
    max-width: 400px;
    margin: 0 auto;

    > li {
        display: block;
        height: fit-content;
    }

    ${bo("mobile")} {
        grid-template-columns: repeat(auto-fit, 82px);
    }
`;Hn(Eo)`
    display: block;
    margin: 0 auto 1px;
    font-size: 15px;
`;const Dl=Hn(jo)`
    position: absolute;
    top: 16px;
    left: 16px;
`,Ll=Hn(Zi)`
    height: 100%;
`,jl=cn("<li></li>"),Fl=e=>Vt(Il,{"data-tc-wallets-modal-list":"true",get children(){return[Vt(Dl,{icon:"arrow",onClick:()=>e.onBack()}),Vt(Rl,{translationKey:"walletModal.wallets",children:"Wallets"}),Vt(Qi,{get maxHeight(){return $i()?void 0:510},get children(){return Vt(Bl,{get children(){return Vt($t,{get each(){return $i()?e.walletsList.filter(Pl):e.walletsList},children:t=>(()=>{const n=jl.cloneNode(!0);return hn(n,Vt(Ll,{wallet:t,onClick:()=>e.onSelect(t)})),n})()})}})}})]}}),Ul={m:"16px",s:"12px",none:"0"},zl={m:"6px",s:"6px",none:"0"},Wl=Hn.div`
    display: flex;
    flex-direction: column;
`,Hl=Hn.div`
    flex: 1;
    margin-top: ${e=>e.qr?"0":"18px"};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 232px;
`,Vl=Hn(xa)`
    margin-bottom: 24px;
`,Zl=Hn(Ua)`
    max-width: 288px;
    margin: 0 auto 2px;
`,Kl=Hn(Wa)`
    max-width: 288px;
    text-align: center;
    margin: 0 auto 20px;
`,Gl=Hn(jo)`
    position: absolute;
    top: 16px;
    left: 16px;
`,ql=Hn.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    padding-bottom: 16px;
`,Yl=Hn(ql)`
    padding-bottom: 0;
`,$l=Hn(Eo)`
    margin-bottom: 24px;
`,Xl=Hn(ii)`
    margin-bottom: 18px;
    margin-top: 2px;
`,Jl=Hn(ni)`
    margin-bottom: 16px;
`,Ql=Hn(Wa)`
    color: ${e=>e.theme.colors.text.secondary};
    text-align: center;
    margin-bottom: 20px;
`,ec=Hn(Eo)`
    margin-top: -8px;
    margin-bottom: 24px;
    width: 100%;
    padding: 12px 12px 12px 20px;
    border-radius: ${e=>Ul[e.theme.borderRadius]};
    font-size: 16px;
    line-height: 20px;
`,tc=Hn(ro)`
    width: 32px;
    height: 32px;
    border-radius: ${e=>zl[e.theme.borderRadius]};
`,nc=e=>{const[t]=Ea();return bt((()=>{var n;return t(e.translationKey,e.translationValues,null==(n=e.children)?void 0:n.toString())}))};function rc(e,t){let n;n="string"==typeof t?t:lo()?t.twaReturnUrl||t.returnStrategy:"none";const r=function(e,t,n){const r=new URL(e);return r.searchParams.append(t,n),r.toString()}(e,"ret",n);if(!j(e))return r;const o=r.slice(r.lastIndexOf("&")+1);return r.slice(0,r.lastIndexOf("&"))+"-"+F(o)}function oc(e,t){t=Ye({},t);const n=function(e){const t=new URL(e);t.searchParams.has("attach")&&(t.searchParams.delete("attach"),t.pathname+="/start");return t.toString()}(e),r=new URL(n);if(r.searchParams.has("startapp")||r.searchParams.append("startapp","tonconnect"),lo())so("ios","android","macos")?(t.returnStrategy="back",t.twaReturnUrl=void 0,uo(rc(r.toString(),t))):so("tdesktop")||so("weba")?uo(rc(r.toString(),t)):so("web")?(t.returnStrategy="back",t.twaReturnUrl=void 0,uo(rc(r.toString(),t))):nr(rc(r.toString(),t));else if(cr("ios")){"back"===t.returnStrategy&&(ur("safari")?t.returnStrategy="back":ur("chrome")?t.returnStrategy="googlechrome://":ur("firefox")?t.returnStrategy="firefox://":ur("opera")?t.returnStrategy="opera-http://":t.returnStrategy=location.href);const e=ur("chrome"),n=ur("firefox");if((e||n)&&!t.forceRedirect){const e=rc(r.toString(),t.returnStrategy);rr(ic(e),(()=>nr(e)))}else{nr(rc(r.toString(),t.returnStrategy))}}else if(cr("android")){t.returnStrategy="none";const e=ur("chrome"),n=ur("firefox");if((e||n)&&!t.forceRedirect){const e=rc(r.toString(),t.returnStrategy);rr(ic(e),(()=>nr(e)))}else{nr(rc(r.toString(),t.returnStrategy))}}else if(cr("ipad")){"back"===t.returnStrategy&&(ur("safari")?t.returnStrategy="back":ur("chrome")?t.returnStrategy="googlechrome://":ur("firefox")?t.returnStrategy="firefox://":ur("opera")?t.returnStrategy="opera-http://":t.returnStrategy=location.href);const e=ur("chrome"),n=ur("firefox");if((e||n)&&!t.forceRedirect){const e=rc(r.toString(),t.returnStrategy);rr(ic(e),(()=>nr(e)))}else{nr(rc(r.toString(),t.returnStrategy))}}else if(cr("macos","windows","linux"))if(t.returnStrategy="none",t.twaReturnUrl=void 0,t.forceRedirect)nr(rc(r.toString(),t));else{const e=rc(r.toString(),t);rr(ic(e),(()=>nr(e)))}else nr(rc(r.toString(),t))}function ac(e,t,n,r){if(n=Ye({},n),lo())if(so("ios","android")){"back"===n.returnStrategy&&(n.returnStrategy="tg://resolve"),r("universal-link");const t=rc(e,n.returnStrategy);uo(t,(()=>{r("universal-link"),nr(t)}))}else if(so("macos","tdesktop")){"back"===n.returnStrategy&&(n.returnStrategy="tg://resolve");const o=rc(e,n.returnStrategy);!!t&&!n.forceRedirect?(r("custom-deeplink"),rr(dr(o,t),(()=>{r("universal-link"),nr(o)}))):(r("universal-link"),nr(o))}else if(so("weba")){"back"===n.returnStrategy&&(ur("safari")?n.returnStrategy=location.href:ur("chrome")?n.returnStrategy="googlechrome://":ur("firefox")?n.returnStrategy="firefox://":ur("opera")?n.returnStrategy="opera-http://":n.returnStrategy=location.href);const o=rc(e,n.returnStrategy);!!t&&!n.forceRedirect?(r("custom-deeplink"),rr(dr(o,t),(()=>{r("universal-link"),nr(o)}))):(r("universal-link"),nr(o))}else if(so("web")){"back"===n.returnStrategy&&(ur("safari")?n.returnStrategy=location.href:ur("chrome")?n.returnStrategy="googlechrome://":ur("firefox")?n.returnStrategy="firefox://":ur("opera")?n.returnStrategy="opera-http://":n.returnStrategy=location.href);const o=rc(e,n.returnStrategy);!!t&&!n.forceRedirect?(r("custom-deeplink"),rr(dr(o,t),(()=>{r("universal-link"),nr(o)}))):(r("universal-link"),nr(o))}else{r("universal-link");nr(rc(e,n.returnStrategy))}else if(cr("ios"))"back"===n.returnStrategy&&(ur("safari")?n.returnStrategy="none":ur("chrome")?n.returnStrategy="googlechrome://":ur("firefox")?n.returnStrategy="firefox://":ur("opera")?n.returnStrategy="opera-http://":n.returnStrategy=location.href),ur("chrome")?(r("universal-link"),tr(rc(e,n.returnStrategy),"_self")):(r("universal-link"),nr(rc(e,n.returnStrategy)));else if(cr("android"))"back"===n.returnStrategy&&(ur("chrome")?n.returnStrategy="googlechrome://":ur("firefox")?n.returnStrategy="firefox://":ur("opera")?n.returnStrategy="opera-http://":n.returnStrategy=location.href),r("universal-link"),nr(rc(e,n.returnStrategy));else if(cr("ipad"))"back"===n.returnStrategy&&(ur("safari")?n.returnStrategy="none":ur("chrome")?n.returnStrategy="googlechrome://":ur("firefox")?n.returnStrategy="firefox://":ur("opera")?n.returnStrategy="opera-http://":n.returnStrategy=location.href),ur("chrome")?(r("universal-link"),tr(rc(e,n.returnStrategy),"_self")):(r("universal-link"),nr(rc(e,n.returnStrategy)));else if(cr("macos","windows","linux")){"back"===n.returnStrategy&&(ur("safari")?n.returnStrategy="none":ur("chrome")?n.returnStrategy="googlechrome://":ur("firefox")?n.returnStrategy="firefox://":ur("opera")?n.returnStrategy="opera-http://":n.returnStrategy="none");const o=rc(e,n.returnStrategy);!!t&&!n.forceRedirect?(r("custom-deeplink"),rr(dr(o,t),(()=>{r("universal-link"),nr(o)}))):(r("universal-link"),nr(o))}else r("universal-link"),nr(rc(e,n.returnStrategy))}function ic(e){const t=new URL(e),[,n,r]=t.pathname.split("/");return`tg://resolve?domain=${n}&appname=${r}&startapp=${t.searchParams.get("startapp")}`}const sc=e=>{const[t,n]=ht("mobile"),[r,o]=ht(!1),[a,i]=ht(),[s,l]=ht(!0),c=Ct(Mr);xt(c.onStatusChange((()=>{}),(()=>{e.wallet.appName!==Wi&&o(!0)})));const u=()=>{try{const t=c.connect({universalLink:e.wallet.universalLink,bridgeUrl:e.wallet.bridgeUrl},e.additionalRequest);i(t)}catch(e){}};yt((()=>{"extension"!==wt(t)&&(Pl(e.wallet)||Ol(e.wallet))&&u()}));const d=()=>{o(!1),"extension"===t()&&u(),n("mobile"),Er($e(Ye({},e.wallet),{openMethod:"qrcode"}))},f=()=>{o(!1),"extension"===t()&&u(),n("desktop");const r=!s();l(!1),ac(a(),e.wallet.deepLink,{returnStrategy:El.returnStrategy,forceRedirect:r},(t=>{Er($e(Ye({},e.wallet),{openMethod:t}))}))},p=()=>{const t=!s();l(!1),Er($e(Ye({},e.wallet),{openMethod:"universal-link"})),oc(a(),{returnStrategy:El.returnStrategy,twaReturnUrl:El.twaReturnUrl,forceRedirect:t})},h=()=>{o(!1),n("extension"),oe(e.wallet)&&(Er(e.wallet),c.connect({jsBridgeKey:e.wallet.jsBridgeKey},e.additionalRequest))};return Pl(e.wallet)?d():Ml(e.wallet)?h():f(),Vt(Wl,{"data-tc-wallets-modal-connection-desktop":"true",get children(){return[Vt(Xt,{get when(){return!e.backDisabled},get children(){return Vt(Gl,{icon:"arrow",onClick:()=>e.onBackClick()})}}),Vt(Zl,{get children(){return e.wallet.name}}),Vt(Xt,{get when(){return"mobile"===t()},get children(){return Vt(Kl,{translationKey:"walletModal.desktopConnectionModal.scanQR",get translationValues(){return{name:e.wallet.name}},get children(){return["Scan the QR code below with your phone’s or ",bt((()=>e.wallet.name)),"’s camera"]}})}}),Vt(Hl,{get qr(){return"mobile"===t()},get children(){return Vt(Jt,{get children(){return[Vt(Qt,{get when(){return"mobile"===t()},get children(){return Vt(Vl,{disableCopy:!1,get sourceUrl(){return rc(a(),"none")},get imageUrl(){return e.wallet.imageUrl}})}}),Vt(Qt,{get when(){return r()},get children(){return[Vt(Jl,{size:"s"}),Vt(Ql,{translationKey:"walletModal.desktopConnectionModal.connectionDeclined",children:"Connection declined"}),Vt(ql,{get children(){return Vt(Eo,{get leftIcon(){return Vt(bi,{})},get onClick(){return"extension"===t()?h:f},get children(){return Vt(nc,{translationKey:"common.retry",children:"Retry"})}})}})]}}),Vt(Qt,{get when(){return"extension"===t()},get children(){return[Vt(Xt,{get when(){return oe(e.wallet)},get children(){return[Vt(Xl,{size:"s"}),Vt(Ql,{translationKey:"walletModal.desktopConnectionModal.continueInExtension",get translationValues(){return{name:e.wallet.name}},get children(){return["Continue in ",bt((()=>e.wallet.name))," browser extension…"]}}),Vt(ql,{get children(){return Vt(Eo,{get leftIcon(){return Vt(bi,{})},onClick:h,get children(){return Vt(nc,{translationKey:"common.retry",children:"Retry"})}})}})]}}),Vt(Xt,{get when(){return!oe(e.wallet)},get children(){return[Vt(Ql,{translationKey:"walletModal.desktopConnectionModal.dontHaveExtension",get translationValues(){return{name:e.wallet.name}},get children(){return["Seems you don't have installed ",bt((()=>e.wallet.name))," browser extension"]}}),Vt(ql,{get children(){return Vt(ts,{get href(){return e.wallet.aboutUrl},blank:!0,get children(){return Vt(Eo,{get rightIcon(){return Vt(wi,{})},onClick:h,get children(){return Vt(nc,{translationKey:"walletModal.desktopConnectionModal.getWallet",get translationValues(){return{name:e.wallet.name}},get children(){return["Get ",bt((()=>e.wallet.name))]}})}})}})}})]}})]}}),Vt(Qt,{get when(){return"desktop"===t()},get children(){return[Vt(ii,{size:"m"}),Vt(Ql,{translationKey:"walletModal.desktopConnectionModal.continueOnDesktop",get translationValues(){return{name:e.wallet.name}},get children(){return["Continue in ",bt((()=>e.wallet.name))," on desktop…"]}}),Vt(ql,{get children(){return[Vt(Eo,{get leftIcon(){return Vt(bi,{})},onClick:f,get children(){return Vt(nc,{translationKey:"common.retry",children:"Retry"})}}),Vt(ts,{get href(){return e.wallet.aboutUrl},blank:!0,get children(){return Vt(Eo,{get rightIcon(){return Vt(wi,{})},get children(){return Vt(nc,{translationKey:"walletModal.desktopConnectionModal.getWallet",get translationValues(){return{name:e.wallet.name}},get children(){return["Get ",bt((()=>e.wallet.name))]}})}})}})]}})]}})]}})}}),Vt(Xt,{get when(){return e.wallet.appName===Wi},get children(){return Vt(ec,{get rightIcon(){return Vt(tc,{get src(){return Vi}})},scale:"s",onClick:p,get children(){return Vt(nc,{translationKey:"walletModal.desktopConnectionModal.openWalletOnTelegram",children:"Open Wallet in Telegram on desktop"})}})}}),Vt(Xt,{get when(){return e.wallet.appName!==Wi},get children(){return Vt(Yl,{get children(){return[Vt(Xt,{get when(){return bt((()=>"mobile"!==t()))()&&Pl(e.wallet)},get children(){return Vt($l,{appearance:"secondary",get leftIcon(){return Vt(hi,{})},onClick:d,get children(){return Vt(nc,{translationKey:"common.mobile",children:"Mobile"})}})}}),Vt(Xt,{get when(){return bt((()=>"extension"!==t()))()&&Ml(e.wallet)},get children(){return Vt($l,{appearance:"secondary",get leftIcon(){return Vt(fi,{})},onClick:h,get children(){return Vt(nc,{translationKey:"common.browserExtension",children:"Browser Extension"})}})}}),Vt(Xt,{get when(){return bt((()=>"desktop"!==t()))()&&Ol(e.wallet)},get children(){return Vt($l,{appearance:"secondary",get leftIcon(){return Vt(gi,{})},onClick:f,get children(){return Vt(nc,{translationKey:"common.desktop",children:"Desktop"})}})}})]}})}})]}})},lc=Hn.div``,cc=Hn(jo)`
    position: absolute;
    top: 16px;
    left: 16px;
`,uc=Hn(Ua)`
    margin-bottom: 18px;
`,dc=Hn.div`
    padding: 16px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`,fc=Ln`
    margin-bottom: 12px;
`,pc=Hn(Va)`
    text-align: center;
    margin-bottom: 4px;
`,hc=Hn(Aa)`
    text-align: center;
    max-width: 352px;
    color: ${e=>e.theme.colors.text.secondary};
`,mc=Hn.div`
    padding: 16px 24px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`,gc="https://ton.org/wallets?filters[wallet_features][slug][$in]=dapp-auth&pagination[limit]=-1",yc=e=>Vt(lc,{"data-tc-wallets-modal-info":"true",get children(){return[Vt(cc,{icon:"arrow",onClick:()=>e.onBackClick()}),Vt(uc,{translationKey:"walletModal.infoModal.whatIsAWallet",children:"What is a wallet"}),Vt(Qi,{get children(){return[Vt(dc,{get children(){return[Vt(Ci,{class:fc}),Vt(pc,{translationKey:"walletModal.infoModal.secureDigitalAssets",children:"Secure digital assets storage"}),Vt(hc,{translationKey:"walletModal.infoModal.walletProtects",children:"A wallet protects and manages your digital assets including TON, tokens and collectables."})]}}),Vt(dc,{get children(){return[Vt(Si,{class:fc}),Vt(pc,{translationKey:"walletModal.infoModal.controlIdentity",children:"Control your Web3 identity"}),Vt(hc,{translationKey:"walletModal.infoModal.manageIdentity",children:"Manage your digital identity and access decentralized applications with ease. Maintain control over your data and engage securely in the blockchain ecosystem."})]}}),Vt(dc,{get children(){return[Vt(Ti,{class:fc}),Vt(pc,{translationKey:"walletModal.infoModal.effortlessCryptoTransactions",children:"Effortless crypto transactions"}),Vt(hc,{translationKey:"walletModal.infoModal.easilySend",children:"Easily send, receive, monitor your cryptocurrencies. Streamline your operations with decentralized applications."})]}}),Vt(mc,{get children(){return Vt(ts,{get href(){return gc},blank:!0,get children(){return Vt(Eo,{get rightIcon(){return Vt(_i,{})},get children(){return Vt(nc,{translationKey:"walletModal.infoModal.getAWallet",children:"Get a Wallet"})}})}})}})]}})]}}),bc=Hn.div``,vc=Hn.div`
    flex: 1;
    margin-top: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 232px;
`,wc=Hn(Ua)`
    max-width: 262px;
    margin: 0 auto 8px;
`,xc=Hn(jo)`
    position: absolute;
    top: 16px;
    left: 16px;
`,_c=Hn.div`
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    border-top: 0.5px solid ${e=>Yn(e.theme.colors.icon.secondary,.2)};
`,kc=Hn(ro)`
    width: 36px;
    height: 36px;
    border-radius: 10px;
`,Cc=Hn(ts)`
    margin-left: auto;
`,Ec=Hn(ii)`
    margin-bottom: 18px;
    margin-top: 2px;
`,Sc=Hn(ni)`
    margin-bottom: 16px;
`,Ac=Hn(Wa)`
    color: ${e=>e.theme.colors.text.secondary};
    text-align: center;
    margin-bottom: 20px;
`,Tc=Hn.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    padding-bottom: 16px;
`,Oc=Hn(Ua)`
    margin-bottom: 2px;
    padding: 0 64px;
`,Pc=Hn(Wa)`
    margin-bottom: 20px;
    padding: 0 64px;
    min-height: 44px;
`,Mc=Hn.div`
    padding: 0 24px 24px;
`,Nc=e=>[Vt(Oc,{get children(){return e.walletInfo.name}}),Vt(Pc,{translationKey:"walletModal.mobileConnectionModal.scanQR",get translationValues(){return{name:e.walletInfo.name}},get children(){return["Scan the QR code below with your phone’s or ",bt((()=>e.walletInfo.name)),"’s camera"]}}),Vt(Mc,{get children(){return Vt(xa,{get imageUrl(){return e.walletInfo.imageUrl},get sourceUrl(){return rc(e.universalLink,"none")},disableCopy:!0})}})],Ic=e=>{const t=zn(),[n,r]=ht(!0),[o,a]=ht(!1),[i,s]=ht(!1),l=Ct(Mr),c=l.onStatusChange((()=>{}),(()=>{s(!0)})),u=bt((()=>l.connect({universalLink:e.wallet.universalLink,bridgeUrl:e.wallet.bridgeUrl},e.additionalRequest))),d=()=>{if(j(u()))return Er($e(Ye({},e.wallet),{openMethod:"universal-link"})),void oc(u(),{returnStrategy:El.returnStrategy,twaReturnUrl:El.twaReturnUrl,forceRedirect:!0});s(!1);const t=!n();r(!1),ac(u(),e.wallet.deepLink,{returnStrategy:El.returnStrategy,forceRedirect:t},(t=>{Er($e(Ye({},e.wallet),{openMethod:t}))}))},f=()=>{s(!1),a(!0),Er($e(Ye({},e.wallet),{openMethod:"qrcode"}))},p=()=>{o()?(a(!1),Er($e(Ye({},e.wallet),{openMethod:"universal-link"}))):e.onBackClick()};return xt(c),d(),Vt(bc,{"data-tc-wallets-modal-connection-mobile":"true",get children(){return[Vt(Xt,{get when(){return!e.backDisabled||o()},get children(){return Vt(xc,{icon:"arrow",onClick:p})}}),Vt(Xt,{get when(){return o()},get children(){return Vt(Nc,{get universalLink(){return u()},get walletInfo(){return e.wallet}})}}),Vt(Xt,{get when(){return!o()},get children(){return[Vt(wc,{get children(){return e.wallet.name}}),Vt(vc,{get children(){return[Vt(Xt,{get when(){return i()},get children(){return[Vt(Sc,{size:"s"}),Vt(Ac,{translationKey:"walletModal.mobileConnectionModal.connectionDeclined",children:"Connection declined"}),Vt(Tc,{get children(){return[Vt(Eo,{get leftIcon(){return Vt(bi,{})},onClick:d,get children(){return Vt(nc,{translationKey:"common.retry",children:"Retry"})}}),Vt(Eo,{get leftIcon(){return Vt(Di,{get fill(){return t.colors.accent}})},onClick:f,get children(){return Vt(nc,{translationKey:"walletModal.mobileConnectionModal.showQR",children:"Show QR Code"})}})]}})]}}),Vt(Xt,{get when(){return!i()},get children(){return[Vt(Ec,{size:"s"}),Vt(Ac,{translationKey:"walletModal.mobileConnectionModal.continueIn",get translationValues(){return{name:e.wallet.name}},get children(){return["Continue in ",bt((()=>e.wallet.name)),"…"]}}),Vt(Tc,{get children(){return[Vt(Eo,{get leftIcon(){return Vt(bi,{})},onClick:d,get children(){return Vt(nc,{translationKey:"common.retry",children:"Retry"})}}),Vt(Eo,{get leftIcon(){return Vt(Di,{get fill(){return t.colors.accent}})},onClick:f,get children(){return Vt(nc,{translationKey:"walletModal.mobileConnectionModal.showQR",children:"Show QR Code"})}})]}})]}})]}}),Vt(_c,{get children(){return[Vt(kc,{get src(){return e.wallet.imageUrl}}),Vt(Va,{get children(){return e.wallet.name}}),Vt(Cc,{get href(){return e.wallet.aboutUrl},blank:!0,get children(){return Vt(Eo,{get children(){return Vt(nc,{translationKey:"common.get",children:"GET"})}})}})]}})]}})]}})},Rc={m:"16px",s:"12px",none:"0"},Bc={m:"6px",s:"6px",none:"0"},Dc=Hn.ul`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: fit-content;
    max-width: 100%;
    min-width: 100%;
    height: fit-content;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 0 13px 24px;

    &&::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;

    > li {
        height: fit-content;
    }
`,Lc=Hn.li`
    width: 82px;
    min-width: 82px;
    height: 124px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 4px;

    text-align: center;
    cursor: pointer;

    transition: transform 0.1s ease-in-out;

    ${wo} {
        &:hover {
            transform: scale(1.04);
        }
    }

    &:active {
        transform: scale(0.96);
    }

    ${vo} {
        &:active {
            transform: scale(0.92);
        }
    }
`,jc=Hn.div`
    width: 1px;
    margin: 0 10px;
    height: 24px;
    position: relative;
    top: 26px;

    background-color: ${e=>e.theme.colors.icon.secondary};
    opacity: 0.2;
`,Fc=Hn.div`
    width: 60px;
    height: 60px;
    border-radius: ${e=>Rc[e.theme.borderRadius]};
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${e=>e.theme.colors.background.tint};
    margin-bottom: 8px;
`,Uc=Hn(Ua)`
    margin-top: 38px;
    margin-bottom: 4px;
    padding: 0 24px;
`,zc=Hn(Wa)`
    margin-bottom: 24px;
    padding: 0 24px;
    min-height: 44px;
`;Hn(Eo)`
    display: block;
    margin: 0 auto;
`;const Wc=Hn(Eo)`
    margin: 0 24px 24px;
    width: calc(100% - 48px);
    border-radius: ${e=>Rc[e.theme.borderRadius]};
    padding: 14px 16px 14px 14px;
    background-color: ${e=>e.theme.colors.telegramButton};

    color: ${e=>e.theme.colors.constant.white};
    font-weight: 590;
    font-size: 16px;
    line-height: 20px;
`,Hc=Hn(ro)`
    border-radius: ${e=>Bc[e.theme.borderRadius]};
    width: 24px;
    height: 24px;
`,Vc=Hn(jo)`
    position: absolute;
    top: 16px;
    left: 16px;
`,Zc=Hn(Ua)`
    margin-bottom: 2px;
    padding: 0 64px;
`,Kc=Hn(Wa)`
    margin-bottom: 20px;
    padding: 0 64px;
`,Gc=Hn.div`
    padding: 0 24px 24px;
`,qc=e=>[Vt(Zc,{translationKey:"walletModal.mobileUniversalModal.connectYourWallet",children:"Connect your wallet"}),Vt(Kc,{translationKey:"walletModal.mobileUniversalModal.scan",children:"Scan with your mobile wallet"}),Vt(Gc,{get children(){return Vt(xa,{get imageUrl(){return Hi},get sourceUrl(){return rc(e.universalLink,"none")},disableCopy:!0})}})];function Yc(e){const t=new Set(e.filter(ie).map((e=>e.bridgeUrl)));return Array.from(t).map((e=>({bridgeUrl:e})))}function $c(e,t){const n=new Set(null==e?void 0:e.map((e=>e.bridgeUrl))),r=new Set(null==t?void 0:t.map((e=>e.bridgeUrl)));return n.size===r.size&&[...n].every((e=>r.has(e)))}const Xc=cn("<li></li>"),Jc=cn('<div data-tc-wallets-modal-universal-mobile="true"></div>'),Qc=e=>{const[t,n]=ht(!1),[r,o]=ht(!0),[a,i]=ht(null),s=El.connector,l=()=>e.walletsList.filter((e=>Pl(e)&&e.appName!==Wi)),c=()=>l().length>7,u=bt((()=>Yc(e.walletsList)),null,{equals:$c}),d=()=>(a()||i(s.connect(u(),e.additionalRequest)),a());Er({openMethod:"universal-link"});const[f,p]=ht(void 0),h=()=>Je(void 0,null,(function*(){void 0!==f()&&clearTimeout(f()),yield va(d());const e=setTimeout((()=>p(void 0)),1500);p(e)})),m=()=>{const e=!r();o(!1),ac(d(),void 0,{returnStrategy:El.returnStrategy,forceRedirect:e},(e=>{Er({openMethod:e})}))},g=()=>{i(null);const t=e.walletsList.find((e=>e.appName===Wi));if(!t||!ie(t))throw new Qn("@wallet bot not found in the wallets list");const n=s.connect({bridgeUrl:t.bridgeUrl,universalLink:t.universalLink},e.additionalRequest),a=!r();o(!1),oc(n,{returnStrategy:El.returnStrategy,twaReturnUrl:El.twaReturnUrl,forceRedirect:a})},y=()=>{n(!0),Er({openMethod:"qrcode"})},b=()=>{n(!1),Er({openMethod:"universal-link"})};return(()=>{const n=Jc.cloneNode(!0);return hn(n,Vt(Xt,{get when(){return t()},get children(){return[Vt(Vc,{icon:"arrow",onClick:b}),Vt(qc,{get universalLink(){return d()}})]}}),null),hn(n,Vt(Xt,{get when(){return!t()},get children(){return[Vt(Vc,{get icon(){return Vt(Di,{})},onClick:y}),Vt(Uc,{translationKey:"walletModal.mobileUniversalModal.connectYourWallet",children:"Connect your wallet"}),Vt(zc,{translationKey:"walletModal.mobileUniversalModal.openWalletOnTelegramOrSelect",children:"Open Wallet in Telegram or select your wallet to connect"}),Vt(Wc,{get leftIcon(){return Vt(Pi,{})},get rightIcon(){return Vt(Hc,{get src(){return Vi}})},onClick:g,scale:"s",get children(){return Vt(nc,{translationKey:"walletModal.mobileUniversalModal.openWalletOnTelegram",children:"Open Wallet in Telegram"})}}),Vt(Dc,{get children(){return[Vt($t,{get each(){return bt((()=>!!c()))()?l().slice(0,4):l()},children:t=>(()=>{const n=Xc.cloneNode(!0);return hn(n,Vt(ja,{get icon(){return t.imageUrl},get name(){return t.name},onClick:()=>e.onSelect(t)})),n})()}),Vt(Xt,{get when(){return c()},get children(){const t=Xc.cloneNode(!0);return hn(t,Vt(zi,{labelLine1:"View all",labelLine2:"wallets",get images(){return l().slice(3,7).map((e=>e.imageUrl))},onClick:()=>e.onSelectAllWallets()})),t}}),Vt(jc,{children:" "}),Vt(Lc,{onClick:m,get children(){return[Vt(Fc,{get children(){return Vt(Ka,{})}}),Vt(Aa,{fontWeight:590,translationKey:"walletModal.mobileUniversalModal.openLink",children:"Open Link"})]}}),Vt(Lc,{onClick:h,get children(){return[Vt(Fc,{get children(){return bt((()=>void 0!==f()))()?Vt(Ni,{}):Vt(Ri,{})}}),Vt(Aa,{fontWeight:590,get translationKey(){return void 0!==f()?"common.copied":"common.copyLink"},get children(){return void 0!==f()?"Copied":"Copy Link"}})]}})]}})]}}),null),n})()},eu={m:"16px",s:"8px",none:"0"},tu={m:"8px",s:"4px",none:"0"},nu=Hn.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 16px;
`,ru=Hn(Wa)`
    max-width: 320px;
    margin-top: 2px;
    margin-bottom: 20px;
`,ou=Hn(Wa)`
    margin-bottom: 16px;
`,au=Hn(xa)`
    margin-bottom: 24px;
`,iu=Hn.ul`
    display: flex;
`;Hn.div`
    display: flex;
    gap: 16px;
    width: 100%;
`,Hn(Eo)`
    position: relative;
    font-size: 16px;
    line-height: 20px;
    width: 100%;
    padding: 0 16px;
    height: 56px;
    border-radius: ${e=>eu[e.theme.borderRadius]};

    &:hover {
        ${e=>e.disableEventsAnimation?"transform: unset;":""}
    }

    &:active {
        ${e=>e.disableEventsAnimation?"transform: unset;":""}
    }
`,Hn.ul`
    position: absolute;
    bottom: 100%;
    left: 0;
    margin: 0;
    padding: 8px;
    width: 188px;
    transform: translateY(-16px);

    background-color: ${e=>e.theme.colors.background.primary};
    border-radius: ${e=>eu[e.theme.borderRadius]};
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
`,Hn.li`
    padding: 8px;

    display: flex;
    align-items: center;
    gap: 8px;

    cursor: pointer;
    border-radius: ${e=>tu[e.theme.borderRadius]};

    transition: background-color, transform 0.1s ease-in-out;

    &:hover {
        background-color: ${e=>e.theme.colors.background.secondary};
    }

    &:active {
        transform: scale(0.96);
    }
`,Hn(ro)`
    width: 24px;
    height: 24px;

    border-radius: 6px;
`,Hn.div`
    margin-top: 23px;
    margin-bottom: 1px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`,Hn(Aa)`
    color: ${e=>e.theme.colors.text.secondary};
    font-size: 16px;
`;const su=cn("<li></li>"),lu=e=>{const[t,n]=ht(!1),r=El.connector,o=bt((()=>Yc(e.walletsList)),null,{equals:$c});Er({openMethod:"qrcode"});const a=bt((()=>r.connect(o(),e.additionalRequest)));return Vt(nu,{onClick:()=>n(!1),"data-tc-wallets-modal-universal-desktop":"true",get children(){return[Vt(Ua,{translationKey:"walletModal.desktopUniversalModal.connectYourWallet",children:"Connect your wallet"}),Vt(ru,{translationKey:"walletModal.desktopUniversalModal.scan",children:"Scan with your mobile wallet"}),Vt(au,{get sourceUrl(){return rc(a(),"none")},get disableCopy(){return t()},get imageUrl(){return Hi}}),Vt(ou,{translationKey:"walletModal.desktopUniversalModal.availableWallets",children:"Available wallets"}),Vt(iu,{get children(){return[Vt($t,{get each(){return e.walletsList.slice(0,3)},children:t=>(()=>{const n=su.cloneNode(!0);return hn(n,Vt(Zi,{wallet:t,onClick:()=>e.onSelect(t)})),n})()}),Vt(zi,{labelLine1:"View all",labelLine2:"wallets",get images(){return e.walletsList.slice(3,7).map((e=>e.imageUrl))},onClick:()=>e.onSelectAllWallets()})]}})]}})},cu=()=>{const{locale:e}=Ea()[1];yt((()=>e(El.language))),yt((()=>{yr()?Ji():(a(null),s("universal"),c(!1))}));const t=Ct(Mr),n=Ct(ns),[r]=function(e,t,n){let r,o,a;2===arguments.length&&"object"==typeof t||1===arguments.length?(r=!0,o=e,a=t||{}):(r=e,o=t,a=n||{});let i=null,s=at,l=null,c=!1,u="initialValue"in a,d="function"==typeof r&&bt(r);const f=new Set,[p,h]=(a.storage||ht)(a.initialValue),[m,g]=ht(void 0),[y,b]=ht(void 0,{equals:!1}),[v,w]=ht(u?"ready":"unresolved");if(Qe.context){let e;l=`${Qe.context.id}${Qe.context.count++}`,"initial"===a.ssrLoadFrom?s=a.initialValue:Qe.load&&(e=Qe.load(l))&&(s=e[0])}function x(e,t,n,r){return i===e&&(i=null,u=!0,e!==s&&t!==s||!a.onHydrated||queueMicrotask((()=>a.onHydrated(r,{value:t}))),s=at,_(t,n)),t}function _(e,t){Mt((()=>{void 0===t&&h((()=>e)),w(void 0!==t?"errored":"ready"),g(t);for(const e of f.keys())e.decrement();f.clear()}),!1)}function k(){const e=st,t=p(),n=m();if(void 0!==n&&!i)throw n;return ct&&!ct.user&&e&&mt((()=>{y(),i&&(e.resolved||f.has(e)||(e.increment(),f.add(e)))})),t}function C(e=!0){if(!1!==e&&c)return;c=!1;const t=d?d():r;if(null==t||!1===t)return void x(i,wt(p));const n=s!==at?s:wt((()=>o(t,{value:p(),refetching:e})));return"object"==typeof n&&n&&"then"in n?(i=n,c=!0,queueMicrotask((()=>c=!1)),Mt((()=>{w(u?"refreshing":"pending"),b()}),!1),n.then((e=>x(n,e,void 0,t)),(e=>x(n,void 0,Lt(e),t)))):(x(i,n,void 0,t),n)}return Object.defineProperties(k,{state:{get:()=>v()},error:{get:()=>m()},loading:{get(){const e=v();return"pending"===e||"refreshing"===e}},latest:{get(){if(!u)return k();const e=m();if(e&&!i)throw e;return p()}}}),d?mt((()=>C(!1))):C(!1),[k,{refetch:C,mutate:h}]}((()=>n.getWallets())),[o,a]=ht(null),[i,s]=ht("universal"),[l,c]=ht(!1),u=bt((()=>{if("ready"!==r.state)return null;let e=Tl(r(),El.walletsListConfiguration);const t=e.filter(oe),n=e.filter((e=>!oe(e)));e=(t||[]).concat(n);const o=El.preferredWalletAppName,a=e.find((e=>Nl(e,o))),i=e.filter((e=>Nl(e,o))).length>=2;o&&a&&!i&&(e=[$e(Ye({},a),{isPreferred:!0})].concat(e.filter((e=>!Nl(e,o)))));const s=e.find((e=>Nl(e,Wi)));return s&&(e=[s].concat(e.filter((e=>!Nl(e,Wi))))),e})),d=()=>{var e;return"loading"===(null==(e=El.connectRequestParameters)?void 0:e.state)},f=bt((()=>{var e;if(!d())return null==(e=El.connectRequestParameters)?void 0:e.value})),p=e=>{n.closeModal(e)},h=t.onStatusChange((e=>{e&&p("wallet-selected")})),m=()=>{s("all-wallets")},g=()=>{s("universal")},y=()=>{a(null)};return xt((()=>{a(null),c(!1)})),xt(h),Vt(_l,{get opened(){return yr()},get enableAndroidBackHandler(){return El.enableAndroidBackHandler},onClose:()=>p("action-cancelled"),onClickQuestion:()=>c((e=>!e)),"data-tc-wallets-modal-container":"true",get children(){return[Vt(Xt,{get when(){return l()},get children(){return Vt(yc,{onBackClick:()=>c(!1)})}}),Vt(Xt,{get when(){return!l()},get children(){return[Vt(Xt,{get when(){return d()||!u()},get children(){return[Vt(kl,{translationKey:"walletModal.loading",children:"Wallets list is loading"}),Vt(Cl,{get children(){return Vt(ii,{size:"m"})}})]}}),Vt(Xt,{get when(){return bt((()=>!d()))()&&u()},get children(){return Vt(Jt,{get children(){return[Vt(Qt,{get when(){return o()},get children(){return Vt(En,{get component(){return $i()?Ic:sc},get wallet(){return o()},get additionalRequest(){return f()},onBackClick:y})}}),Vt(Qt,{get when(){return"universal"===i()},get children(){return Vt(En,{get component(){return $i()?Qc:lu},onSelect:a,get walletsList(){return u()},get additionalRequest(){return f()},onSelectAllWallets:m})}}),Vt(Qt,{get when(){return"all-wallets"===i()},get children(){return Vt(Fl,{get walletsList(){return u()},onBack:g,onSelect:a})}})]}})}})]}})]}})},uu=Hn.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 8px;
`,du=Hn(Ua)`
    margin-top: 16px;
`,fu=Hn(Aa)`
    font-weight: 510;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    max-width: 250px;

    color: ${e=>e.theme.colors.text.secondary};
`,pu=Hn(Eo)`
    min-width: 112px;
    margin-top: 32px;
`,hu=Hn(ii)`
    height: 16px;
    width: 16px;
`,mu=Hn(Eo)`
    margin-top: 32px;
  height: ${({height:e})=>e};
  min-height: ${({height:e})=>e};
  max-width: ${({width:e})=>e};
  width: ${({width:e})=>e};
  opacity: ${({disable:e})=>e?.8:1};
  &.pixel_loading {
    opacity: 0.8;
  }
  > .pixel_flat_btn_bg {
    color: #fff;
    > div {
      transition: all 0.3s ease;
      background-color: ${({backgroundColor:e})=>e};
    }
    > .pixel_flat_btn_top_1,
    > .pixel_flat_btn_top_2,
    > .pixel_flat_btn_bottom_2,
    > .pixel_flat_btn_bottom_1 {
      height: ${({pixel_height:e})=>e}px;
    }
    > .pixel_flat_btn_inner {
      height: calc(100% - ${({pixel_height:e})=>e}px * 4);
      top: calc(${({pixel_height:e})=>e}px * 2);
      left: 0;
    }

    > .pixel_flat_btn_top_1 {
      top: 0;
      width: calc(100% - ${({pixel_height:e})=>e}px * 4);
      left: calc(${({pixel_height:e})=>e}px * 2);
    }
    > .pixel_flat_btn_top_2 {
      width: calc(100% - ${({pixel_height:e})=>e}px * 2);
      top: ${({pixel_height:e})=>e}px;
      left: ${({pixel_height:e})=>e}px;
    }

    > .pixel_flat_btn_bottom_2 {
      bottom: 0;
      width: calc(100% - ${({pixel_height:e})=>e}px * 4);
      left: calc(${({pixel_height:e})=>e}px * 2);
    }
    > .pixel_flat_btn_bottom_1 {
      width: calc(100% - ${({pixel_height:e})=>e}px * 2);
      bottom: ${({pixel_height:e})=>e}px;
      left: ${({pixel_height:e})=>e}px;
    }
  }
  > .pixel_flat_inner {
    width: 100%;
    height: 100%;
  }
`,iF=(0,c.memo)((e=>{const{onClick:t,hidePixel:n}=e,r=(0,c.useRef)(Date.now()),o=(0,c.useCallback)((()=>{const e=Date.now();e-r.current<1e3||(r.current=e,t&&t())}),[t]);return n?c.createElement(oF,{...e,onClick:o}):c.createElement(aF,{...e,onClick:o})})),sF=(0,hB.ZP)(iF)`
  cursor: pointer;
`,lF=(0,c.memo)((e=>c.createElement(sF,{...e}))),cF=(0,hB.ZP)(aF)`
  > .pixel_flat_btn_bg {
    > div {
      background-color: ${({backgroundColor:e})=>null!=e?e:"#1649ff"};
    }
    > .pixel_flat_btn_inner {
      &:before,
      &:after {
        content: "";
        position: absolute;
        width: ${({pixel_height:e})=>e}px;
        height: ${({pixel_height:e})=>e}px;
        transition: all 0.3s ease;
      }
      &:before {
        top: 0;
        left: 0;
        background-color: ${({borderTopColor:e})=>null!=e?e:"#3360ff"};
      }
      &:after {
        bottom: 0;
        right: 0;
        background-color: ${({borderBottomColor:e})=>null!=e?e:"#0f33b2"};
      }
    }
    > .pixel_flat_btn_top_1 {
      background-color: ${({borderTopColor:e})=>null!=e?e:"#3360ff"};
    }
    > .pixel_flat_btn_top_2 {
      border-left: ${({pixel_height:e})=>e}px solid
        ${({borderTopColor:e})=>null!=e?e:"#3360ff"};
    }
    > .pixel_flat_btn_bottom_2 {
      background-color: ${({borderBottomColor:e})=>null!=e?e:"#0f33b2"};
    }
    > .pixel_flat_btn_bottom_1 {
      border-right: ${({pixel_height:e})=>e}px solid
        ${({borderBottomColor:e})=>null!=e?e:"#0f33b2"};
    }
  }
`,uF=((0,c.memo)((e=>{const{className:t,borderColor:n,backgroundColor:r,pixel_height:o,width:a,height:i}=e;return c.createElement(cF,{...e,className:t,pixel_height:o,backgroundColor:r,width:a,height:i,borderColor:n})})),{yellow:{normal:{borderBottomColor:"#E1820C",borderTopColor:"#FFE299",backgroundColor:"#FEBE1E"},hover:{borderBottomColor:"#DEA534",borderTopColor:"#FFEFB8",backgroundColor:"#FFDA58"},click:{borderBottomColor:"#A4720E",borderTopColor:"#FDD64C",backgroundColor:"#F0BE0C"}},brown:{normal:{backgroundColor:"#61341F",borderBottomColor:"#30170B",borderTopColor:"#7F5441"},hover:{backgroundColor:"#805440",borderBottomColor:"#61341F",borderTopColor:"#A17560"},click:{borderBottomColor:"#2C180F",borderTopColor:"#533628",backgroundColor:"#412315"}},brightBlue:{normal:{backgroundColor:"#1649FF",borderBottomColor:"#0F33B2",borderTopColor:"#3360FF"},hover:{backgroundColor:"#406AFF",borderBottomColor:"#183BB7",borderTopColor:"#5C80FF"},click:{borderBottomColor:"#0E267D",borderTopColor:"#0E43FF",backgroundColor:"#022FD0"}},pureBrightBlue:{normal:{borderBottomColor:"#0E43FF",borderTopColor:"#0E43FF",backgroundColor:"#0E43FF"},hover:{borderBottomColor:"#0E43FF",borderTopColor:"#0E43FF",backgroundColor:"#0E43FF"},click:{borderBottomColor:"#0E43FF",borderTopColor:"#0E43FF",backgroundColor:"#0E43FF"}}}),dF=(0,hB.ZP)(aF)`
  cursor: pointer;
  > .pixel_flat_btn_bg {
    > div {
      background-color: ${({themeType:e})=>uF[e].normal.backgroundColor};
    }
    > .pixel_flat_btn_inner {
      &:before,
      &:after {
        content: "";
        position: absolute;
        width: ${({pixel_height:e})=>e}px;
        height: ${({pixel_height:e})=>e}px;
        transition: all 0.3s ease;
      }
      &:before {
        top: 0;
        left: 0;
        background-color: ${({themeType:e})=>uF[e].normal.borderTopColor};
      }
      &:after {
        bottom: 0;
        right: 0;
        background-color: ${({themeType:e})=>uF[e].normal.borderBottomColor};
      }
    }
    > .pixel_flat_btn_top_1 {
      background-color: ${({themeType:e})=>uF[e].normal.borderTopColor};
    }
    > .pixel_flat_btn_top_2 {
      border-left: ${({pixel_height:e})=>e}px solid
        ${({themeType:e})=>uF[e].normal.borderTopColor};
    }
    > .pixel_flat_btn_bottom_2 {
      background-color: ${({themeType:e})=>uF[e].normal.borderBottomColor};
    }
    > .pixel_flat_btn_bottom_1 {
      border-right: ${({pixel_height:e})=>e}px solid
        ${({themeType:e})=>uF[e].normal.borderBottomColor};
    }
  }
  &.disable {
    opacity: 0.8;
    cursor: not-allowed;
  }
  &.normal {
    &:hover {
      > .pixel_flat_btn_bg {
        > div {
          background-color: ${({themeType:e})=>uF[e].hover.backgroundColor};
        }
        > .pixel_flat_btn_inner {
          &:before,
          &:after {
            content: "";
          }
          &:before {
            background-color: ${({themeType:e})=>uF[e].hover.borderTopColor};
          }
          &:after {
            background-color: ${({themeType:e})=>uF[e].hover.borderBottomColor};
          }
        }
        > .pixel_flat_btn_top_1 {
          background-color: ${({themeType:e})=>uF[e].hover.borderTopColor};
        }
        > .pixel_flat_btn_top_2 {
          border-left: ${({pixel_height:e})=>e}px solid
            ${({themeType:e})=>uF[e].hover.borderTopColor};
        }
        > .pixel_flat_btn_bottom_2 {
          background-color: ${({themeType:e})=>uF[e].hover.borderBottomColor};
        }
        > .pixel_flat_btn_bottom_1 {
          border-right: ${({pixel_height:e})=>e}px solid
            ${({themeType:e})=>uF[e].hover.borderBottomColor};
        }
      }
    }
    &.click {
      > .pixel_flat_btn_bg {
        > div {
          background-color: ${({themeType:e})=>uF[e].click.backgroundColor};
        }
        > .pixel_flat_btn_inner {
          &:before,
          &:after {
            content: "";
          }
          &:before {
            background-color: ${({themeType:e})=>uF[e].click.borderTopColor};
          }
          &:after {
            background-color: ${({themeType:e})=>uF[e].click.borderBottomColor};
          }
        }
        > .pixel_flat_btn_top_1 {
          background-color: ${({themeType:e})=>uF[e].click.borderTopColor};
        }
        > .pixel_flat_btn_top_2 {
          border-left: ${({pixel_height:e})=>e}px solid
            ${({themeType:e})=>uF[e].click.borderTopColor};
        }
        > .pixel_flat_btn_bottom_2 {
          background-color: ${({themeType:e})=>uF[e].click.borderBottomColor};
        }
        > .pixel_flat_btn_bottom_1 {
          border-right: ${({pixel_height:e})=>e}px solid
            ${({themeType:e})=>uF[e].click.borderBottomColor};
        }
      }
    }
  }
`,fF=(0,c.memo)((e=>{const{onClick:t,className:n,disable:r}=e,[o,a]=(0,c.useState)(!1),i=(0,c.useCallback)((()=>{t&&(a(!0),setTimeout((()=>{a(!1)}),1e3),t())}),[t]);return c.createElement(dF,{className:`${null!=n?n:""} ${r?"disable":"normal"} ${o?"click":""}`,onClick:i,...e})})),pF=(0,hB.ZP)(oF)`
  height: ${({height:e})=>e};
  width: ${({width:e})=>e};
  & > .pixel_flat_btn_bg {
    & > div {
      background-color: ${({backgroundColor:e})=>null!=e?e:"#1d263b"};
    }
    .pixel_flat_btn_top_1,
    > .pixel_flat_btn_top_2,
    > .pixel_flat_btn_bottom_2,
    > .pixel_flat_btn_bottom_1 {
      height: calc(
        ${({pixel_height:e})=>e+"px"} +
          ${({borderSize:e})=>null!=e?e:1}px
      );
    }
    > .pixel_flat_btn_inner {
      height: calc(100% - ${({pixel_height:e})=>e+"px"} * 4);
      top: calc(${({pixel_height:e})=>e+"px"} * 2);
      left: 0;
      @media screen and (max-width: 830px) {
        height: calc(100% - ${({pixel_height:e})=>e+"px"} * 4);
        top: calc(${({pixel_height:e})=>e+"px"} * 2);
      }
    }
    > .pixel_flat_btn_inner,
    > .pixel_flat_btn_top_1,
    > .pixel_flat_btn_top_2,
    > .pixel_flat_btn_bottom_2,
    > .pixel_flat_btn_bottom_1 {
      border: ${({borderSize:e})=>null!=e?e:1}px solid
        ${({borderColor:e})=>null!=e?e:"#3a4254"};
      transition: all 0.3s ease;
    }
    > .pixel_flat_btn_top_1 {
      border-bottom: none !important;
      z-index: 3;
      width: calc(100% - ${({pixel_height:e})=>e+"px"} * 4);
      left: calc(${({pixel_height:e})=>e+"px"} * 2);
      @media screen and (max-width: 830px) {
        width: calc(100% - ${({pixel_height:e})=>e+"px"} * 4);
        left: calc(${({pixel_height:e})=>e+"px"} * 2);
      }
    }
    > .pixel_flat_btn_top_2 {
      border-bottom: none !important;
      z-index: 2;
      width: calc(100% - ${({pixel_height:e})=>e+"px"} * 2);
      top: ${({pixel_height:e})=>e+"px"};
      left: ${({pixel_height:e})=>e+"px"};
      @media screen and (max-width: 830px) {
        width: calc(100% - ${({pixel_height:e})=>e+"px"} * 2);
        top: ${({pixel_height:e})=>e+"px"};
        left: ${({pixel_height:e})=>e+"px"};
      }
    }
    > .pixel_flat_btn_bottom_2 {
      border-top: none !important;
      z-index: 4;
      width: calc(100% - ${({pixel_height:e})=>e+"px"} * 4);
      left: calc(${({pixel_height:e})=>e+"px"} * 2);
      @media screen and (max-width: 830px) {
        width: calc(100% - ${({pixel_height:e})=>e+"px"} * 4);
        left: calc(${({pixel_height:e})=>e+"px"} * 2);
      }
    }
    > .pixel_flat_btn_bottom_1 {
      border-top: none !important;
      width: calc(100% - ${({pixel_height:e})=>e+"px"} * 2);
      bottom: ${({pixel_height:e})=>e+"px"};
      left: ${({pixel_height:e})=>e+"px"};
      @media screen and (max-width: 830px) {
        width: calc(100% - ${({pixel_height:e})=>e+"px"} * 2);
        bottom: ${({pixel_height:e})=>e+"px"};
        left: ${({pixel_height:e})=>e+"px"};
      }
    }
  }
  > .pixel_flat_inner {
    width: 100%;
    height: 100%;
  }
`,hF=(0,c.memo)((e=>{const{className:t,onClick:n,hidePixel:r}=e,o=(0,c.useRef)(Date.now()),a=(0,c.useCallback)((()=>{const e=Date.now();e-o.current<1e3||(o.current=e,n&&n())}),[n]);return r?c.createElement(oF,{...e,onClick:a}):c.createElement(pF,{...e,className:`${t} pixelBorderCard`})})),mF=(0,hB.ZP)(aF)`
  &:hover {
    > .pixel_flat_btn_bg {
      > .pixel_flat_btn_top_1,
      > .pixel_flat_btn_bottom_2 {
        background-color: ${({showHover:e,borderColor:t})=>!0===e?"#1649FF":t};
      }
      > .pixel_flat_btn_inner,
      > .pixel_flat_btn_top_2,
      > .pixel_flat_btn_bottom_1 {
        border-left: ${({pixel_height:e})=>e}px solid
          ${({showHover:e,borderColor:t})=>!0===e?"#1649FF":t};
        border-right: ${({pixel_height:e})=>e}px solid
          ${({showHover:e,borderColor:t})=>!0===e?"#1649FF":t};
      }
    }
  }
  > .pixel_flat_btn_bg {
    > .pixel_flat_btn_top_1,
    > .pixel_flat_btn_bottom_2 {
      background-color: ${({borderColor:e})=>e};
    }
    > .pixel_flat_btn_inner,
    > .pixel_flat_btn_top_2,
    > .pixel_flat_btn_bottom_1 {
      border-left: ${({pixel_height:e})=>e}px solid
        ${({borderColor:e})=>e};
      border-right: ${({pixel_height:e})=>e}px solid
        ${({borderColor:e})=>e};
    }
  }
`,gF=(0,c.memo)((e=>{const{className:t,borderColor:n,backgroundColor:r,pixel_height:o,width:a,height:i,borderTopColor:s,borderBottomColor:l}=e;return c.createElement(mF,{...e,className:t,pixel_height:o,backgroundColor:r,width:a,height:i,borderColor:n,borderTopColor:s,borderBottomColor:l})})),yF=(0,hB.ZP)(gF)`
  &:hover {
    > .pixel_flat_btn_bg {
      > .pixel_flat_btn_top_2,
      > .pixel_flat_btn_bottom_1 {
        &:before {
          border-left: ${({pixel_height:e})=>e}px solid
            ${({showHover:e,borderColor:t})=>!0===e?"#1649FF":t};
          border-right: ${({pixel_height:e})=>e}px solid
            ${({showHover:e,borderColor:t})=>!0===e?"#1649FF":t};
        }
      }
    }
  }
  > .pixel_flat_btn_bg {
    > .pixel_flat_btn_top_1,
    > .pixel_flat_btn_bottom_2 {
      width: calc(
        100% - ${({pixel_height:e,size:t})=>`${e}px * ${2*t}`}
      );
      left: calc(${({pixel_height:e,size:t})=>`${e}px * ${t}`});
    }
    > .pixel_flat_btn_top_2,
    > .pixel_flat_btn_bottom_1 {
      width: calc(
        100% -
          ${({pixel_height:e,size:t})=>`${e}px * ${2*(t-1)}`}
      );
      left: calc(
        ${({pixel_height:e,size:t})=>`${e}px * ${t-1}`}
      );
    }
    > .pixel_flat_btn_inner {
      height: calc(
        100% - ${({pixel_height:e,size:t})=>`${e}px * ${2*t}`}
      );
      top: calc(${({pixel_height:e,size:t})=>`${t} * ${e}px`});
    }

    > .pixel_flat_btn_top_2,
    > .pixel_flat_btn_bottom_1 {
      &:before {
        content: "";
        transition: all 0.3s ease;
        position: absolute;
        height: ${({pixel_height:e})=>e}px;
        width: calc(100% + ${({pixel_height:e})=>e}px * 4);
        left: calc(-${({pixel_height:e})=>e}px * 2);
        background-color: ${({backgroundColor:e})=>e};
        border-left: ${({pixel_height:e})=>e}px solid
          ${({borderColor:e})=>e};
        border-right: ${({pixel_height:e})=>e}px solid
          ${({borderColor:e})=>e};
      }
    }
    > .pixel_flat_btn_top_2 {
      &:before {
        top: ${({pixel_height:e})=>e}px;
      }
    }
    > .pixel_flat_btn_bottom_1 {
      &:before {
        top: -${({pixel_height:e})=>e}px;
      }
    }
  }
`,bF=(0,c.memo)((e=>{const{size:t}=e;return c.createElement(yF,{...e,size:null!=t?t:3})})),vF=(0,hB.ZP)(yF)`
  > .pixel_flat_btn_bg {
    > .pixel_flat_btn_inner {
      &:after,
      &:before {
        content: "";
        position: absolute;
        height: ${({pixel_height:e})=>e}px;
        width: 100%;
        left: 0;
        background-color: ${({backgroundColor:e})=>e};
        border-left: ${({pixel_height:e})=>e}px solid
          ${({borderColor:e})=>e};
        border-right: ${({pixel_height:e})=>e}px solid
          ${({borderColor:e})=>e};
      }
      &:before {
        top: -${({pixel_height:e})=>e}px;
      }
      &:after {
        bottom: -${({pixel_height:e})=>e}px;
      }
    }
    > .pixel_flat_btn_top_1:before,
    > .pixel_flat_btn_bottom_2:after {
      content: "";
      position: absolute;
      height: ${({pixel_height:e})=>e}px;
      width: calc(100% + ${({pixel_height:e})=>e}px * 6);
      left: calc(-${({pixel_height:e})=>e}px * 3);
      background-color: ${({backgroundColor:e})=>e};
      border-left: ${({pixel_height:e})=>e}px solid
        ${({borderColor:e})=>e};
      border-right: ${({pixel_height:e})=>e}px solid
        ${({borderColor:e})=>e};
    }
    > .pixel_flat_btn_top_1:before {
      top: calc(${({pixel_height:e})=>e}px * 3);
    }
    > .pixel_flat_btn_bottom_2:after {
      bottom: calc(${({pixel_height:e})=>e}px * 3);
    }
  }
`,wF=((0,c.memo)((e=>{const{size:t}=e;return c.createElement(vF,{...e,size:null!=t?t:5})})),(0,hB.ZP)(hF)`
  cursor: pointer;
  &:hover {
    > .pixel_flat_btn_bg {
      > .pixel_flat_btn_inner,
      > .pixel_flat_btn_top_1,
      > .pixel_flat_btn_top_2,
      > .pixel_flat_btn_bottom_2,
      > .pixel_flat_btn_bottom_1 {
        border: ${({borderSize:e})=>null!=e?e:1}px solid
          ${({showHover:e,borderColor:t})=>!0===e?"#1649FF":t};
      }
    }
  }
`),xF=(0,c.memo)((e=>c.createElement(wF,{...e}))),_F=(0,c.memo)((({src:e,className:t,...n})=>e.endsWith(".svg")?c.createElement(kF,{src:e,className:t,...n}):c.createElement("img",{decoding:"async",loading:"lazy",src:e,className:t}))),kF=(0,c.memo)((({src:e,className:t,...n})=>{const[r,o]=(0,c.useState)(null);return(0,c.useEffect)((()=>{(async()=>{try{const r=await fetch(e);if(!r.ok)throw new Error("Failed to load SVG");const a=await r.text(),i=document.createElement("div");i.innerHTML=a;const s=i.querySelector("svg");if(s){o((()=>c.createElement("span",{className:`svg_component ${null!=t?t:""}`,...n,dangerouslySetInnerHTML:{__html:s.outerHTML}})))}}catch(e){console.error(e)}})()}),[e]),r||c.createElement(c.Fragment,null)})),CF=_F,EF=mv({key:"isW768State",default:!1,effects_UNSTABLE:[Fj("isW768State")]}),SF=(mv({key:"isWMdState",default:!1,effects_UNSTABLE:[Fj("isWMdState")]}),mv({key:"isW1100State",default:!1,effects_UNSTABLE:[Fj("isW1100State")]}),mv({key:"isW1220State",default:!1,effects_UNSTABLE:[Fj("isW1220State")]}),(0,c.createContext)(void 0)),AF=((0,c.createContext)(void 0),(0,c.createContext)(void 0)),TF=((0,c.createContext)(void 0),(0,c.memo)((({children:e})=>{const[t,n]=yv(EF),r=OF();return(0,c.useEffect)((()=>{const e=r.width<830;t!==e&&n(e)}),[r.width,t]),c.createElement(SF.Provider,{value:t},e)})));function OF(){const[e,t]=(0,c.useState)({width:document.documentElement.clientWidth,height:document.documentElement.clientHeight}),n=(0,c.useCallback)((()=>{t({width:document.documentElement.clientWidth,height:document.documentElement.clientHeight})}),[]);return(0,c.useEffect)((()=>(window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)})),[]),e}var PF=()=>{const[e]=yv(EF);return void 0!==e&&e},MF=(0,c.memo)((({className:e,children:t,onClick:n,backgroundColor:r,borderColor:o,pixel_height:a,...i})=>{const s=PF();return c.createElement(xF,{className:`pixel_border ${null!=e?e:""}`,pixel_height:null!=a?a:s?3:5,backgroundColor:null!=r?r:"#1d263b",borderColor:null!=o?o:"#3a4254",onClick:n,...i},t)})),NF=MF,IF=e=>c.createElement(CF,{className:pB("icon",e.className),src:rL+`/img/icon/${e.name}.svg`,alt:""}),RF=[{label:"English",keyValue:"en_US",img:rL+"/img/layout/en_US.png"},{label:"한국어",keyValue:"ko_KR",img:rL+"/img/layout/ko_KR.png"},{label:"中文繁體",keyValue:"zh_TW",img:rL+"/img/layout/zh_TW.png"}],BF=(0,c.memo)((({type:e})=>{const t=PF(),n=nF(),{t:r}=tF([UF.common]),o=(0,c.useCallback)((e=>{(0,XI.D0)(e.keyValue),Yj.set("language",e.keyValue)}),[]);return c.createElement("div",{className:pB("pixel"===e?"language_pixel":"top"===e?"language_top":"list"===e?"language_list":"","language")},c.createElement("div",{className:"list"===e?"":pB("horListItem","languageItem","pixel"===e?"languagePixelTop":"")},"pixel"===e?c.createElement("div",{className:"pixel_logo_wrap"},c.createElement(NF,{className:"pixel_logo"},c.createElement("img",{decoding:"async",loading:"lazy",src:rL+`/img/layout/${n}.png`,className:"pixel_img_lang"})),c.createElement("div",{className:"address_wrap_pop_lang_wrap"},c.createElement(hF,{className:"address_wrap_pop_lang",pixel_height:4,backgroundColor:"#1D263B",borderColor:"#3A4254"},RF.map((e=>c.createElement(DF,{color:"#1D263B",classNames:"address_wrap_pop_item",key:e.label,onClick:()=>o(e),iconName:e.img,label:e.label,on:e.keyValue===n})))))):c.createElement("div",{className:"lang"},c.createElement("p",{className:"lang_title"},c.createElement(IF,{name:"language"}),t?"Language":r("language")),c.createElement("div",{className:"lang_list"},RF.map((e=>c.createElement(DF,{color:"transparent",onColor:"#3A4254",classNames:"address_list_item",key:e.label,onClick:()=>o(e),iconName:e.img,label:e.label,on:e.keyValue===n})))))))}),eF),DF=(0,c.memo)((({iconName:e,label:t,onClick:n,on:r,classNames:o,color:a,onColor:i})=>c.createElement(gF,{className:`${o} ${r?"on":""}`,onClick:n,pixel_height:3,backgroundColor:r&&i?i:a,borderColor:r&&i?i:a,width:"100%",height:"36px"},c.createElement(CF,{src:e}),c.createElement("p",null,t)))),LF=BF,jF=Jj.split("-").join("_"),FF=RF.map((e=>e.keyValue)).filter((e=>e===jF)).length?jF:"en_US",UF={common:"common",defense:"defense",points:"points",sideBar:"siderBar",home:"home",zBingo:"zBingo",invitation:"invitation",profile:"profile",dp:"dp"};XI.ZP.use(HR).use(wR).use(eB).init({fallbackLng:"en_US",backend:{loadPath:rL+"/i18n/{{lng}}/{{ns}}.json"},lng:FF,ns:Object.values(UF),keySeparator:!1,interpolation:{escapeValue:!1}});var zF=nL()?"https://acequest.io/zAce/":"https://testnet.acequest.io/zAce/",WF=[window.location.origin+"/bingo/",window.location.origin+"/2048/",zF,"https://testnet.cryptorumble.io","","",""],HF=e=>[{keyValue:"21",dapps:[{label:"CryptoRumble",icon:"Candy.png",link:WF[3]},{label:"zBingo",icon:"zBingo.png",link:`${WF[0]}${e?e+"/":""}`}]},{keyValue:"22",dapps:[{label:"zAce",icon:"zAce.png",link:WF[2]},{label:"z2048",icon:"z2048.png",link:WF[1]}]},{keyValue:"23",dapps:[{label:"TCG",icon:"TCG.png"},{label:"zMahjong",icon:"zMahjong.png"},{label:"Murder Mystery",icon:"Murder.png"}]},{keyValue:"24",dapps:[{label:"Anome",icon:"Anome.png",twitter:"https://twitter.com/Anome_Official",link:"https://b2.anome.xyz/"},{label:"Gabby World",icon:"Gabby World.png",twitter:"https://twitter.com/gabby_world_",link:"https://tabi.gabby.world/"}]},{keyValue:"25",dapps:[{label:"PawX",icon:"PawX.png",twitter:"https://twitter.com/PawXcats",link:"https://www.pawx.me/"},{label:"Castle Of Blackwater",icon:"Blackwater.png",link:"https://castleofblackwater.com/"}]},{keyValue:"26",dapps:[{label:"Cross The Ages",icon:"CrossAges.png",twitter:"https://twitter.com/CrossTheAges ",link:"https://linktr.ee/crosstheages "},{label:"Wildcard",icon:"Wildcard.png",twitter:"https://twitter.com/PlayWildcard"},{label:"BitcoinLoot",icon:"BitcoinLoot.png",twitter:"https://twitter.com/btc_loot",link:"https://www.bitcoinloot.co/home/"}]},{keyValue:"27",dapps:[{label:"Degen Verse",icon:"Degen Verse.png",twitter:"https://twitter.com/degen_game",link:"https://degengame.cc/#/home"},{label:"Yuliverse",icon:"Yuliverse.png",twitter:"https://twitter.com/TheYuliverse",link:"https://www.yuliverse.com/"},{label:"Forge Heros",icon:"Forge Heros.png",twitter:"https://twitter.com/ForgeHeroesGame",link:"https://x.com/ForgeHeroesGame"}]},{keyValue:"28",dapps:[{label:"Splinterlands",icon:"Splinterlands.png",twitter:"https://twitter.com/Splinterlands"},{label:"Core Engine",icon:"Core Engine.png",link:"https://www.creoengine.com/"},{label:"Crystal Fun",icon:"Crystal Fun.png",twitter:"https://x.com/playCrystalFun",link:"https://outer.gg/"}]},{keyValue:"29",dapps:[{label:"Cellula",icon:"Cellula.png",link:"https://factory.cellula.life/welcome"},{label:"Metaline X",icon:"Metaline X.png",twitter:"https://twitter.com/Metaline001",link:"https://app.metaline.games/"},{label:"Trumen World",icon:"Trumen World.png",twitter:"https://twitter.com/trumen_worl",link:"https://www.trumen.world/"}]}],VF={hidden:{opacity:1,scale:0},visible:{opacity:1,scale:1,transition:{delayChildren:.1,staggerChildren:.1}}},ZF={hidden:{y:20,opacity:0},visible:{y:0,opacity:1}},KF=((0,c.memo)((e=>{const{parentClassName:t,itemClassName:n,data:r,renderItem:o}=e;return c.createElement(xB,null,c.createElement(jS.ul,{className:t,variants:VF,initial:"hidden",animate:"visible"},r.map(((e,t)=>c.createElement(jS.li,{key:`${t}`,className:n,variants:ZF},o(e))))))})),mv({key:"connectorState",default:{chainId:null,networkError:null}}),mv({key:"walletModalOpenState",default:!1})),GF=(mv({key:"ChainSelector",default:!1}),mv({key:"refreshBalance",default:"0"})),qF=mv({key:"refreshAvatar",default:"0"}),YF=mv({key:"pointsDialog",default:!1}),$F=mv({key:"pointsAnim",default:!1}),XF=mv({key:"pointsAnimNum",default:0}),JF=mv({key:"pointsWarn",default:0}),QF=mv({key:"hidePointsWarn",default:!1,effects_UNSTABLE:[Fj("hidePointsWarn")]}),eU=mv({key:"pointsRuleDialog",default:!1}),tU=mv({key:"accountInfoDialog",default:!1}),nU=mv({key:"showBigState",default:!1}),rU=mv({key:"showMiddleState",default:!1}),oU=mv({key:"linkToBetaDialog",default:!1}),aU=mv({key:"linkToBetaDialogChainIdState",default:void 0}),iU=mv({key:"nativeBalance",default:0,effects_UNSTABLE:[Fj("nativeBalance")]}),sU=mv({key:"pointsBalance",default:0,effects_UNSTABLE:[Fj("pointsBalance")]}),lU=({src:e,alt:t,...n})=>{const[r,o]=(0,c.useState)(!1);return e&&!r?c.createElement("img",{decoding:"async",loading:"lazy",...n,alt:t,src:e,onError:()=>{o(!0)}}):c.createElement("div",{...n},c.createElement(IF,{name:"help"}))};HS.config({EXPONENTIAL_AT:1e9});var cU=(e,t=2)=>{try{if(isNaN(Number(e)))return Number(0).toFixed(t>0?t:0);if(0===e||"0"===e)return Number(0).toFixed(t);const n=Number(e)<0,r=((e,t=2)=>{if(void 0===e)return"";let n=e.toString();const r=n.indexOf(".");return n=-1!==r?n.substring(0,t+r+1):n.substring(0),parseFloat(n).toFixed(t)})(Math.abs(Number(e)),t>0?t:0),o=r.split(".")[0].split("").reverse(),a=r.split(".")[1];let i="";for(let e=0;e<o.length;e++)i+=o[e]+((e+1)%3==0&&e+1!==o.length?",":"");let s=i.split("").reverse().join("");return a&&"00"!==a&&(s+=`.${a.replace(/0+$/,"")}`),`${n?"-":""}${s}`}catch(e){return console.error("formatMoney:",e),""}};function uU(e,t=6,n=4){let r=t,o=n;if(!e)return"";42!==e.length&&(r=3,o=3);return`${e.substring(0,r)}...${e.substring(e.length-o,e.length)}`}var dU=mv({key:"invitationAddressState",default:void 0,effects_UNSTABLE:[Fj("invitationAddressState")]}),fU=e=>{const{chainId:t,account:n}=LL(),r=gv(dU);bv(dU);return{postAccountUpdate:(0,c.useCallback)((async({tx:e})=>{}),[t,n,r])}};function pU(e){const{chainId:t}=LL(e),n=(0,c.useCallback)((async n=>{if(!t)return;const r=vj(e);return r[`${t}`]?r[`${t}`].waitForTransactionReceipt(n):async function({chainId:e,confirmations:t=1,hash:n,onReplaced:r,timeout:o=0}){const a=KP({chainId:e}),i=await a.waitForTransactionReceipt({hash:n,confirmations:t,onReplaced:r,timeout:o});if("reverted"===i.status){const e=await a.getTransaction({hash:i.transactionHash}),t=await a.call({...e,gasPrice:"eip1559"!==e.type?e.gasPrice:void 0,maxFeePerGas:"eip1559"===e.type?e.maxFeePerGas:void 0,maxPriorityFeePerGas:"eip1559"===e.type?e.maxPriorityFeePerGas:void 0}),n=(0,QT.rR)(`0x${t.substring(138)}`);throw new Error(n)}return i}({...n,chainId:Number(t)})}),[t]);return{waitForTransaction:n}}var hU=(e,t,n,r)=>kj({env:t,abi:_B,address:null!=n?n:CL(e,"points"),signer:r,chainId:e}),mU={59144:5e-7,59141:5e-7,204:4e-6,5611:4e-6,19546:5e-7,9901:5e-7},gU=e=>{try{return[["1000"],["10000"],["30000"],["50000"],["80000"],["100000 ","2"],["300000","5"],["500000","10"]].map(((t,n)=>{var r;const o=null!=(r=mU[e])?r:"0",a=t[1]?new HS(o).times(t[0]).times(.01*(100-Number(t[1]))).toFixed(8):new HS(o).times(t[0]).toFixed(8),i=cU(Number(a),8),s=cU(Number(t[0]));return{index:n+1,pointAmount:t[0],pointAmountStr:s,price:a,priceStr:i,discount:t[1]}}))}catch(e){console.error("pointsListDefault: ",e)}},yU=()=>{const e=gv(iU);return(0,c.useMemo)((()=>cU(e,2)),[e])},bU=()=>{const e=gv(sU);return(0,c.useMemo)((()=>cU(e,0)),[e])},vU=(0,c.memo)((({handleNext:e})=>{const{t}=tF([UF.points]),[n,r]=yv(QF);return c.createElement("div",{className:"points_dialog_dialogContainer"},c.createElement("p",null,t("poinsWarnText01")),c.createElement("p",null,c.createElement("em",null),c.createElement("i",null,t("poinsWarnText02")),c.createElement("br",null),c.createElement("em",null),c.createElement("i",null,t("poinsWarnText03"))),c.createElement("p",null,t("poinsWarnText04")),c.createElement("p",{className:"points_dialog_flex",onClick:()=>r(!n)},c.createElement(IF,{name:n?"checked":"check"}),t("poinsWarnText05")),c.createElement(fF,{themeType:"brightBlue",onClick:e,width:"100%",height:"52px",pixel_height:4,className:"points_dialog_btn"},c.createElement("p",null,t("Ok"))))}),eF),wU=vU,xU=hB.ZP.img`
  display: inline-block;
  width: ${({isMobile:e})=>e?"20px":"30px"};
  margin-left: ${({mr:e,isMobile:t})=>e?"0":t?"4px":"10px"};
  margin-right: ${({mr:e,isMobile:t})=>e?t?"4px":"10px":"0"};
`,_U=(0,c.memo)((({isMobile:e,classname:t,mr:n})=>c.createElement(xU,{isMobile:e,src:rL+"/img/home/data_points.svg",alt:"",className:t})),eF),kU=({open:e,onCancel:t,footer:n,wrapClassName:r,destroyOnClose:o,closable:a,width:i,centered:s,transitionName:l,children:u})=>c.createElement(kB.t9,{isOpen:e,onDismiss:t,className:pB("customDialog","bottom",r),"aria-label":"Modal"},c.createElement(kB.cZ,{style:{width:i}},u)),CU=((0,c.memo)((({header_children:e,body_children:t,pixel_height:n,classNameHeader:r,backgroundColor:o,headerBackgroundColor:a,borderColor:i,width:s,className:l})=>c.createElement(hF,{className:`tvlPixelTable ${null!=l?l:""}`,pixel_height:n,backgroundColor:`${null!=o?o:"#0d1120"}`,borderColor:`${null!=i?i:"#3A4254"}`,width:s},c.createElement(iF,{className:`tvlPixelTable_header ${null!=r?r:""}`,pixel_height:n,backgroundColor:`${null!=a?a:"#293457"}`},e),t))),(0,c.memo)((({header_children:e,body_children:t,pixel_height:n,className:r,classNameHeader:o,backgroundColor:a,headerBackgroundColor:i,borderColor:s,width:l})=>c.createElement(hF,{className:`tvlPixelTable ${null!=r?r:""}`,pixel_height:n,backgroundColor:`${null!=a?a:"#0d1120"}`,borderColor:`${null!=s?s:"#3A4254"}`,width:l},c.createElement(iF,{className:`tvlPixelTable_header ${null!=o?o:""}`,pixel_height:n,backgroundColor:`${null!=i?i:"#293457"}`},e),t)))),EU=((0,c.memo)((({width:e,height:t,className:n,backgroundColor:r,header_children:o,body_children:a,pixel_height:i})=>PF()?c.createElement("div",{className:n},o,a):c.createElement(CU,{width:e,height:t,className:n,backgroundColor:r,header_children:o,body_children:a,pixel_height:i}))),(0,c.memo)((({className:e,hideMl:t,isLoading:n})=>n?c.createElement(CF,{className:`${null!=e?e:""} ${t?"hideMl":""} animation_rotate LoadingButton`,src:rL+"/img/icon/pixel_loading.svg"}):c.createElement(c.Fragment,null)))),SU=EU,AU=(0,c.memo)((({onClick:e,...t})=>c.createElement("div",{className:"dialog_close",onClick:e,...t},c.createElement(CF,{src:rL+"/img/icon/pixel_close.svg"})))),TU=(0,c.memo)((({env:e,dispatch:t,setSuccessToast:n,setErrorToast:r})=>{const{t:o}=tF([UF.points]),[a,i]=yv(YF),s=gv(JF),{chainId:l}=LL(),u=bU(),d=PF(),[f,p]=(0,c.useState)([]),{isLoading:h,swapPointHandle:m}=(({env:e,dispatch:t,setSuccessToast:n,setErrorToast:r})=>{const{account:o,chainId:a}=LL(),{postAccountUpdate:i}=fU(e),[s,l]=(0,c.useState)(!1),u=bv(YF),d=bv(XF),[f,p]=yv(GF),{waitForTransaction:h}=pU(e),m=gv(QF),[g,y]=yv(JF),[b,v]=(0,c.useState)(),{data:w}=DM(),x=(0,c.useCallback)((async t=>{if((1===g||m)&&w){const o=b||0===b?b:t;if(o||0===o){y(2);try{const t=gU(a);if(!t)throw Object.assign(new Error("Not pointsList"),{name:"NativeSwap"});{const s=t[o];l(!0);const c=hU(a,e,void 0,w);if(!a||!c)return u(!1),void(c||r("PointsContract is not ready"));const m=CL(a,"lobby"),g=await c.write.nativeSwap([m,s.index],{value:uI.ethers.utils.parseEther(s.price)}),y="string"==typeof g?g:g.hash,b=await h({confirmations:1,hash:y});if(!b||b.status!==tL)throw Object.assign(new Error("NativeSwap Transaction Failed"),{name:"NativeSwap"});d(1),n({title:"",message:"Recharge successful"}),setTimeout((()=>{u(!1),i({tx:b}),p(f+1)}),500)}}catch(e){r(e),console.error("swapPointHandle: ",e)}finally{l(!1)}}else y(0)}else v(t),y(1)}),[o,b,m,g,a,f,w]);return{isLoading:s,swapPointHandle:x}})({env:e,dispatch:t,setSuccessToast:n,setErrorToast:r});(0,c.useEffect)((()=>{l&&setTimeout((()=>{const e=gU(l);e&&p(e)}),800)}),[l]);const g=(0,c.useCallback)((()=>{i(!1)}),[]);return c.createElement(kU,{open:a,onCancel:()=>i(!1),footer:null,wrapClassName:pB("customDialog","bottom","dialog"),width:d?"100%":604,destroyOnClose:!0,closable:!1,centered:!d,transitionName:d?"ant-slide-down":void 0},c.createElement(CU,{classNameHeader:"modalTitleInner",backgroundColor:"#1D263B",header_children:c.createElement("p",{className:"modalTitleInnerTitle"},o("Recharge Points")),body_children:c.createElement(c.Fragment,null,c.createElement("div",{className:"modalMain"},1===s?c.createElement(wU,{isLoading:h,handleNext:m}):h?c.createElement(OU,null):c.createElement(c.Fragment,null,c.createElement("div",{className:"balanceTitle"},c.createElement("p",null,o("Balance"),": ",c.createElement("strong",null,u)),c.createElement(_U,{isMobile:d,classname:"pointsIcon"})),c.createElement(PU,{pointsList:f,chainId:l,onClick:m})))),pixel_height:10}),c.createElement(AU,{onClick:g}))}),eF),OU=(0,c.memo)((()=>{const{t:e}=tF([UF.points]);return c.createElement("div",{className:"loading"},c.createElement(SU,{isLoading:!0,className:"loading_size4"}),c.createElement("p",null,e("IsLoadingText1")))}),eF),PU=(0,c.memo)((({pointsList:e,chainId:t,onClick:n})=>c.createElement("div",{className:"table"},e.map(((e,r)=>c.createElement(xF,{pixel_height:4,backgroundColor:"#343C4F",borderColor:"#484F60",key:e.index,onClick:()=>n(r)},c.createElement("div",{className:pB("points",`points_${e.index}`)},c.createElement("h3",null,e.pointAmountStr),c.createElement("img",{decoding:"async",loading:"lazy",className:"points_img",src:rL+`/img/points/points_${e.index}.png`,alt:"points"}),c.createElement(iF,{backgroundColor:"#1649FF",className:"bottom",pixel_height:4},c.createElement("p",null,e.priceStr),c.createElement(lU,{className:"img",src:vL[t||97]})),e.discount&&c.createElement("div",{className:"discount"},c.createElement("img",{decoding:"async",loading:"lazy",className:"discount_img",src:rL+"/img/points/discord.svg",alt:"points"}),c.createElement("p",null,e.discount,"% ",c.createElement("br",null),"OFF")))))))),eF),MU=TU,NU=(0,c.memo)((({className:e})=>c.createElement("div",{className:e},c.createElement("a",{href:"https://twitter.com/Zypher_network",target:"_blank",rel:"noreferrer"},c.createElement(CF,{className:"community_svg",src:rL+"/img/layout/twitter.svg"})),c.createElement("a",{href:"https://discord.com/invite/MKJZhS4p2T",target:"_blank",rel:"noreferrer"},c.createElement(CF,{className:"community_svg",src:rL+"/img/layout/discord.svg"})),c.createElement("a",{href:"https://zyphergames.substack.com",target:"_blank",rel:"noreferrer"},c.createElement(CF,{className:"community_svg",src:rL+"/img/layout/medium.svg"})),c.createElement("a",{href:"https://github.com/zypher-game",target:"_blank",rel:"noreferrer"},c.createElement(CF,{className:"community_svg",src:rL+"/img/layout/github.svg"})),c.createElement("a",{href:"https://zyphergames.notion.site/Zypher-Games-101-58f3fc6362dc473db187dcec0b63e74e",target:"_blank",rel:"noreferrer"},c.createElement(CF,{className:"community_svg",src:rL+"/img/layout/gitbook.svg"})))),eF),IU=NU,RU=mv({key:"pathnameState",default:[""]}),BU=mv({key:"sideCollapseState",default:!0}),DU=(0,c.memo)((({className:e,className_on:t,isMobile:n,className_disable:r,className_imageContainer:o,useNavigate:a,...i})=>{const{linkClickHandle:s}=((e,t,n)=>{const r=bv(BU),o=n();return{linkClickHandle:(0,c.useCallback)((n=>{e.disabled||(n.preventDefault(),t&&r(!0),setTimeout((()=>{try{const t=e.link;t&&window.open(t,"_blank")}catch(t){window.location.href="/#"+e.link}}),200))}),[o,t])}})(i,n,a);return c.createElement("div",{onClick:s,className:pB(e,i.disabled?r:"")},c.createElement("div",{className:o},c.createElement("img",{decoding:"async",loading:"lazy",src:rL+`/img/games/games/${i.icon}`})),c.createElement("p",null,i.label))}),eF),LU=DU,jU=(0,c.memo)((({className_on:e,className_list:t,className_listItemDisable:n,className_listItem:r,className_imageContainer:o,useNavigate:a,list:i})=>c.createElement("div",{className:"gamelist"},c.createElement(iF,{className:"pixel_side_games",pixel_height:3,backgroundColor:"#343C4F"},i.map((t=>c.createElement(LU,{useNavigate:a,isMobile:!0,className_on:e,className_disable:n,key:t.keyValue,className:r,className_imageContainer:o,...t})))))),eF),FU=(0,c.memo)((({className:e,logo_url_name:t,logo_title:n})=>{const{t:r}=tF([UF.sideBar]);return c.createElement("div",{className:e},c.createElement("img",{decoding:"async",loading:"lazy",src:rL+`/img/icon/${t}.svg`,title:r(n)}),c.createElement("p",null,r(n)))}),eF),UU=(0,c.memo)((({logo_url_name:e,link:t,className:n,logo_title:r})=>{const{t:o}=tF([UF.sideBar]);return c.createElement("a",{href:t,className:n},c.createElement("div",{className:"side_title_line"}),c.createElement("p",null,o(r)),e?c.createElement("img",{decoding:"async",loading:"lazy",src:e,title:o(r)}):null)}),eF),zU=[["","airdrop","airdropLoading"],["games"],["zeroGas"]],WU=[{link:`/${zU[0][0]}`,linkList:zU[0],label:"Airdrop",classNames:"airdrop",isTarget:!1,showIfGames:!1,isLink:!0},{link:`/${zU[1][0]}`,linkList:zU[1],label:"Games",classNames:"games",isTarget:!1,showIfGames:!0,isLink:!0},{link:`/${zU[2][0]}`,linkList:zU[2],label:"Zero Gas",classNames:"zero_gas",isTarget:!1,showIfGames:!1,isLink:!0},{link:"https://zypher.network/",linkList:[],label:"Zypher Network",icon:rL+"/img/icon/pixel_link.svg",classNames:"network",isTarget:!0,showIfGames:!0,isLink:!1}],HU=(0,c.memo)((({pathname:e,Link:t})=>{const[n,r]=(0,c.useState)(null),[o,a]=(0,c.useState)(null),i=(0,c.useRef)([]),{width:s}=OF(),{isW768:l,isW1670:u,isWBig:d}=(0,c.useMemo)((()=>({isW768:s<=768,isW1540:s<=1540&&s>768,isW1670:s<1670&&s>1540,isWBig:s>=1670})),[s]),f=(0,c.useCallback)((async()=>{if(!l&&i.current.length){const t=zU.findIndex((t=>t.includes(e)));t>-1&&(r(t),a(t))}}),[e,l,i.current]);(0,c.useEffect)((()=>{f()}),[f]);const p=(0,c.useCallback)((async()=>{!l&&i.current.length&&i.current.forEach((async(e,t)=>{if("nav_on"===(null==e?void 0:e.className)){const n=function(e){if(!e)return!1;const t=window.getComputedStyle(e);return"600"===t.getPropertyValue("font-weight")}(e);n||await hj(.2),n&&a(t)}if(null!==n){const r=()=>{a(t)},o=()=>{a(n)};if(e)return e.addEventListener("mouseenter",r),e.addEventListener("mouseleave",o),()=>{e.removeEventListener("mouseenter",r),e.removeEventListener("mouseleave",o)}}}))}),[n,e]);(0,c.useEffect)((()=>{p()}),[n,e,i.current]);const h=(0,c.useCallback)((async()=>{if(null!=o&&i.current[o]){const e=document.querySelector(".pixel_line"),t=i.current[o];if(t){const r=t.offsetWidth;if(r){const a=t.offsetLeft+(r-36)/2;e.style.width="36px",e.style.left=`${a}px`,n!==o&&(e.style.opacity="0.8")}else await hj(.7),h()}}}),[n,o,e,i]);return(0,c.useEffect)((()=>{h()}),[n,o,e]),(0,c.useEffect)((()=>{(async()=>{await hj(.3),h()})()}),[l,u,d]),c.createElement("div",{className:"nav"},WU.filter((e=>!window.isGames||e.showIfGames)).map(((e,n)=>c.createElement(VU,{Link:t,item:e,key:e.label,className:`nav_${e.classNames} `,setLinksRefs:e=>{i.current[n]=e}},e.label,e.icon?c.createElement("img",{decoding:"async",loading:"lazy",src:e.icon,alt:"pixel_link",className:"nav_img"}):null))),c.createElement("div",{className:"pixel_line"}))})),VU=(0,c.memo)((({item:e,children:t,setLinksRefs:n,className:r,Link:o})=>{const a=(0,c.useRef)(null);return(0,c.useEffect)((()=>{a.current&&n(a.current)}),[a]),e.isLink?c.createElement(o,{to:e.link,className:r,ref:a},t):c.createElement("a",{href:e.link,ref:a,target:e.isTarget?"_blank":void 0,rel:e.isTarget?"noreferrer":void 0,className:r},t)}));var ZU=HU,KU=(0,c.memo)((({isMobile:e})=>c.createElement("a",{href:"/",className:"zypher_logo"},e?c.createElement("img",{fetchPriority:"high",decoding:"async",loading:"lazy",src:rL+"/img/layout/logo-min.svg"}):c.createElement("img",{fetchPriority:"high",decoding:"async",loading:"lazy",src:rL+"/img/tvl/logo.svg"}),c.createElement("img",{decoding:"async",loading:"lazy",src:rL+"/img/layout/ai.svg"})))),GU=e=>{const{useNavigate:t,pathname:n}=e,{chainId:r}=LL(),o=bv(BU),{sideBarGamesLinkList:a}=(0,c.useMemo)((()=>({sideBarGamesLinkList:HF(r).map((e=>e.dapps.map((e=>e)))).flat().map((e=>{var t;return{label:e.label,keyValue:e.label,icon:e.icon,disabled:!1,type:"Games",link:null!=(t=e.link)?t:e.twitter}}))})),[r]);return c.createElement("div",{className:pB(`${e.className}`,"sidebarWrap")},c.createElement("div",{className:"side_close",onClick:()=>o(!0)},c.createElement(IF,{name:"close"})),c.createElement("div",{className:"sidebar"},WU.filter((e=>!window.isGames||e.showIfGames)).map((e=>{var t;return c.createElement(UU,{key:e.label,logo_title:e.label,className:"sideBarTitle sideBarTitleLink "+((null!=(t=e.linkList)?t:[]).includes(n)?"on":""),link:e.link,logo_url_name:e.icon})})),c.createElement(FU,{logo_title:"Games",logo_url_name:"pixel_games",className:"sideBarTitle mt40"}),c.createElement(jU,{className_on:"item_on",className_list:"gamelist",className_listItem:"verListItem",className_listItemDisable:"verListItemDisable",list:a,useNavigate:t,className_imageContainer:"imageContainerWaves"}),c.createElement(LF,{type:"list"})),c.createElement("div",{className:"sideBar_Bottom"},c.createElement(FU,{logo_title:"Links",logo_url_name:"pixel_link02",className:"sideBarTitle"}),c.createElement(IU,{className:"communityLink"})))},qU=(0,c.memo)((({className:e,showDiv:t,children:n})=>t?c.createElement("div",{className:e}," ",n):c.createElement(c.Fragment,null,n)),eF),YU=qU,$U=(0,c.memo)((({label:e,setDialogOpen:t,children:n,classNames:r})=>{const o=(0,c.useCallback)((()=>{t(!1)}),[t]);return c.createElement("div",{className:pB("dialog_title_modalTitleInner",r)},c.createElement("p",{className:"dialog_title_title"},e),n||null,c.createElement("span",{onClick:o},c.createElement(IF,{name:"close"})))})),XU=$U,JU=hB.ZP.div`
  text-align: center;
  padding: 50px;
`,QU=hB.ZP.div`
  border-radius: 12px;
  background: #1649ff;
  height: 48px;
  border: 0px;

  color: #fff;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`,ez=hB.ZP.div`
  color: #fff;
  text-align: center;
  font-size: 14px;
  padding-top: 30px;
`,tz=(0,c.memo)((()=>{const{t:e}=tF([UF.common]),[t,n]=yv(oU),[r,o]=yv(aU),a=PF(),i=(0,c.useMemo)((()=>r?"9980"===r?["https://app.zypher.game/2048/"]:(e=>{let t="Beta";return"91715"===e?t="Combo":"169"===e||"3441005"===e?t="Manta":"5000"!==e&&"5001"!==e||(t="Mantle"),[t.toLowerCase(),t]})(r):""),[r]),s=(0,c.useCallback)((()=>{if(n(!1),i[0].startsWith("https"))return window.open(i[0],"_blank");{const e=!!r&&mL[r];return window.open(`https://${e?"dev":""}${i[0]}.zypher.game/`,"_blank")}}),[i]);return(0,c.useEffect)((()=>{t||o(void 0)}),[t]),c.createElement(kU,{open:t,onCancel:()=>n(!1),footer:null,wrapClassName:pB("customDialog"),destroyOnClose:!0,closable:!1,width:a?"100%":360,centered:!a},c.createElement(XU,{label:e("Switch Networks"),setDialogOpen:n,classNames:a?"modalTitleInner":""}),c.createElement(JU,null,c.createElement(TB,{style:{color:"#1649FF",fontSize:"50px"}}),c.createElement(ez,null,"9980"===r?"Combo is currently only deployed in 2048.":e("linkToBeta",{chainName:r?pL[r]:"",toUrlName:i[1]}))),c.createElement("div",{style:{padding:"0 20px 30px"}},c.createElement(QU,{onClick:s},"9980"===r?"Go to Play 2048":e("GotoVersion",{toUrlName:i[0]}))))}),eF),nz=tz,rz=[{inputs:[{internalType:"string",name:"name",type:"string"},{internalType:"string",name:"symbol",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"}],oz=(e,t,n,r)=>{if(!n)throw new Error("No addrerss");return kj({env:t,abi:rz,address:n,signer:r,chainId:e})},az=(0,c.memo)((()=>{const[e]=yv($F);return e?c.createElement("div",{className:"getpointpoints"},new Array(3).fill("").map(((e,t)=>c.createElement(iz,{key:t})))):null}),eF),iz=()=>c.createElement("div",{className:"getpointcoin"},c.createElement("div",{className:"getpointcoin_front"},c.createElement("img",{decoding:"async",loading:"lazy",src:rL+"/img/layout/Star.png",alt:"star"})),c.createElement("div",{className:"getpointcoin_middle"}),c.createElement("div",{className:"getpointcoin_back"},c.createElement("img",{decoding:"async",loading:"lazy",src:rL+"/img/layout/Star.png",alt:"star"}))),sz=az,lz=(0,c.memo)((({className:e,loading:t,balanceStr:n,logo:r,preChild:o,onClick:a,CountUpNumber:i,balance:s})=>{const l=(0,c.useCallback)((()=>{a&&a()}),[a]);return c.createElement(NF,{className:`balance_item_balance balance_item_balance_pixel\n        ${null!=e?e:""}`,onClick:l},o,t?c.createElement(NB.Z,null):c.createElement(c.Fragment,null,i&&(s||0===s)?c.createElement(i,{value:s,decimals:0,duration:1.5,showDiv:!1}):n,r))}),eF),cz=(0,c.memo)((({className:e,loading:t,balance:n,logo:r,preChild:o,onClick:a,CountUpNumber:i,balanceStr:s})=>{const l=bv($F),[u,d]=yv(XF),f=(0,c.useCallback)((()=>{a&&a()}),[a]);return(0,c.useEffect)((()=>{1===u&&(l(!0),setTimeout((()=>{l(!1),d(0)}),3e3))}),[u]),c.createElement(NF,{className:`balance_item_balance_point balance_item_balance  balance_item_balance_pixel\n        ${null!=e?e:""}`,onClick:f},o,t?c.createElement(NB.Z,null):c.createElement(c.Fragment,null,i&&(n||0===n)?c.createElement(i,{value:n,decimals:0,duration:1.5,showDiv:!1}):s,r),c.createElement(sz,null))}),eF),uz=lz,dz=(0,hB.ZP)(IF)`
  margin-right: ${({isMobile:e})=>e?"4px":"10px"};
  margin-left: 0 !important;
  width: ${({isMobile:e})=>e?"20px":"24px"};
`,fz=(0,c.memo)((e=>{const{showPointsModal:t,env:n,CountUpNumber:r,isMiddleWidth:o}=e,{chainId:a,account:i,provider:s}=LL(),[l,u]=(0,c.useState)(!1),d=bv(iU),f=bv(sU),p=gv(GF),{data:h}=DM(),m=(0,c.useCallback)((async()=>{if(a&&i&&s&&h)try{const e=CL(a,"ZypherGameToken");if(e){const t=oz(a,n,e,h),r=await t.read.balanceOf([i]);f(new YL(r.toString()).dividedBy(eL).toNumber())}else f(0)}catch(e){console.log({e}),f(0)}}),[a,i,s,h]),g=(0,c.useCallback)((async()=>{if(!a||!i||!h)return;u(!0);const e=await s.getBalance({address:i});d(new YL(e.toString()).dividedBy(eL).toNumber()),await m(),u(!1)}),[a,i,s,h,m]);(0,c.useEffect)((()=>{i&&a&&h&&g()}),[i,a,p,h]);const y=gv(sU),b=yU(),v=bU();return c.createElement(c.Fragment,null,o?null:c.createElement(NF,{className:"refresh_balance  refresh_balance_pixel",onClick:g},c.createElement(MB,null)),iL.includes(a)?c.createElement(cz,{onClick:t,logo:c.createElement(_U,{isMobile:o}),balance:y,loading:l,className:e.className,CountUpNumber:r,preChild:c.createElement(dz,{name:"pixel_add",isMobile:o}),balanceStr:v}):null,!o&&c.createElement(uz,{logo:c.createElement(lU,{className:"balance_item_img",src:vL[a||97]}),balanceStr:b,loading:l,className:e.className}))}),eF),pz=fz,hz=hB.ZP.i`
  box-sizing: content-box;
  display: inline-block;
  width: 6px;
  height: 6px;
  background-color: #47ff1a;
  margin-left: ${({isMobile:e})=>e?"4px":"10px"};
  border-radius: 50%;
  position: relative;
  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: -3px;
    left: -3px;
    border: 3px solid rgba(71, 255, 26, 0.29);
    box-sizing: content-box;
    border-radius: 50%;
  }
`,mz=(0,c.memo)((({className:e,direction_type:t})=>{const{chainId:n}=LL(),r=PF(),[o,a]=yv(tU),[i,s]=yv(YF),[l,u]=yv(BU),{openChainModal:d}=CV(),f=(0,c.useCallback)((()=>{o&&a(!1),i&&s(!1),l||u(!0),d&&d()}),[d]);return n?c.createElement(NF,{onClick:f,..."userPop"===t?{backgroundColor:"#343C4F",borderColor:"#484F60",pixel_height:3}:{},className:null!=e?e:""},c.createElement("div",{className:"ChainSelectorWidgetWrapper"},c.createElement("div",{className:"img"},c.createElement("img",{decoding:"async",loading:"lazy",className:`ChainImage_${n}`,src:bL[n],alt:pL[n]}),c.createElement("p",null,pL[n])),c.createElement(hz,{isMobile:r}))):null}),eF),gz=mz,yz=()=>{const{t:e}=tF([UF.points]),t=gv(eU),n=bv(eU),r=(0,c.useCallback)((()=>{n(!1)}),[]);return c.createElement(c.Fragment,null,c.createElement(kB.t9,{isOpen:t,onDismiss:r,className:"points_dialog_zindex"},c.createElement(kB.cZ,{className:"points_dialog_dialogContent"},c.createElement(CU,{backgroundColor:"#1D263B",header_children:c.createElement("p",{className:"modalTitleInnerTitle"},e("Rules")),body_children:c.createElement(c.Fragment,null,c.createElement("div",{className:"points_dialog_dialogContainer"},c.createElement("h4",null,e("PointsRuleText01")),c.createElement("p",null,e("PointsRuleText02")),c.createElement("p",null,c.createElement("em",null),c.createElement("i",null,e("PointsRuleText03")),c.createElement("br",null),c.createElement("em",null),c.createElement("i",null,e("PointsRuleText04")),c.createElement("br",null),c.createElement("em",null),c.createElement("i",null,e("PointsRuleText04")),c.createElement("br",null),c.createElement("em",null)," ",c.createElement("i",null,e("PointsRuleText06"))),c.createElement("p",null,c.createElement(oD,{i18nKey:"PointsRuleText07",defaults:e("PointsRuleText07"),values:{Link:e("Link")},components:{bold:c.createElement("strong",null)}})),c.createElement("h4",null,e("PointsRuleText09")),c.createElement("p",null,c.createElement(oD,{i18nKey:"PointsRuleText10",defaults:e("PointsRuleText10")},c.createElement("a",{href:"https://discord.com/invite/MKJZhS4p2T",target:"_blank",className:"points_dialog_fontWhite",rel:"noreferrer"},"Discord")))),c.createElement("div",{className:"points_dialog_btnWrap"},c.createElement(fF,{themeType:"brightBlue",onClick:r,width:"340px",height:"52px",pixel_height:4},e("Ok")))),pixel_height:10}),c.createElement(AU,{onClick:r}))))},bz=(0,hB.ZP)(NF)`
  width: ${({size:e})=>e}px !important;
  height: ${({size:e})=>e}px !important;
  border-radius: ${({hidePixel:e})=>e?"50%":"0"};
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
  &.pixel_flat_btn {
    img {
      width: 75%;
      height: 75%;
    }
  }
`,vz=({src:e,altText:t,style:n={},size:r=64,backgroundColor:o,hidePixel:a})=>c.createElement(bz,{hidePixel:a,size:r,style:n,backgroundColor:o},c.createElement("img",{decoding:"async",loading:"lazy",src:e,alt:t}));var wz=e=>{const t=function(e){if(!e)return 1;if(window.mcrypto){const t=window.mcrypto.createHash("sha1").update(e).digest("hex");return parseInt(t.slice(0,16),16)}return 0}(null==e?void 0:e.toLowerCase());return e?{selectedAvatar:[rL+"/img/tvl/hero/Agil_Avatar.png",rL+"/img/tvl/hero/Celus_Avatar.png",rL+"/img/tvl/hero/Ivan_Avatar.png",rL+"/img/tvl/hero/Liana_Avatar.png",rL+"/img/tvl/hero/Yueling_Avatar.png"][t%6],selectedBackground:["#7ADBB2","#FFD584","#9269EB","#EB6676","#FFD584","#62A1FF","#E78C65","#FF603E","#99E675","#65DAD3","#62A1FF","#E78C65","#FF603E","#99E675","#65DAD3"][t%15]}:{selectedAvatar:rL+"/img/default_avatar.png",selectedBackground:"#EFEFEF"}},xz=(e,t,n)=>{const[r,o]=(0,c.useState)({selectedAvatar:"",selectedBackground:""}),a=gv(qF);(0,c.useEffect)((()=>{if(e&&!t)i();else{const{selectedAvatar:t,selectedBackground:n}=wz(e);o({selectedAvatar:t,selectedBackground:n})}}),[e,a]);const i=(0,c.useCallback)((()=>{const t=new Image;let n="";n=window.IS_TELEGRAM?`https://zypher-static.s3.amazonaws.com/telegram/${null==e?void 0:e.toLowerCase()}`:`https://tvl-avatar.s3.us-west-2.amazonaws.com/${null==e?void 0:e.toLowerCase()}.png`,t.src=n,t.onload=()=>{o({selectedAvatar:`${n}?9999999${a}`,selectedBackground:"#fff"})},t.onerror=()=>{const{selectedAvatar:t,selectedBackground:n}=wz(e);o({selectedAvatar:t,selectedBackground:n})}}),[e,a]);return r||{}},_z=(0,c.memo)((({account:e,showAccount:t=!1,size:n=60,border:r=!1,AvatarBorder:o=c.Fragment,AccountTextFrComp:a=c.Fragment,className:i,preLen:s,endLen:l,otherStr:u,hideAvatars:d,onClick:f,onMouseOver:p,hidePixel:h,name:m})=>{const{t:g}=tF([UF.zBingo]),y=xz(e,d,m),b=(0,c.useMemo)((()=>{const t=null!=m?m:e;return t?`${uU(t,s,l)}${u?` ${u}`:""}`:g("waiting")}),[e,u,m]);return c.createElement("div",{className:pB(i,"player_playerAvatar"),onClick:f,onMouseOver:p},d?null:e?y?c.createElement(o,null,c.createElement(vz,{hidePixel:h,size:n,src:y.selectedAvatar,backgroundColor:y.selectedBackground})):null:c.createElement("div",{className:"player_avatar",style:{width:`${n}px`,height:`${n}px`,overflow:"hidden",background:"rgba(138, 138, 138, 1)"}},c.createElement(vz,{hidePixel:h,size:n,src:rL+"/img/pixel_default_avatar.png"})),t&&c.createElement("p",{className:(null==i?void 0:i.includes("account"))?"player_avatar_account":""},b,c.createElement(a,null)))})),kz=hB.ZP.div`
  background: ${({isGrey:e,isGreen:t})=>t?"linear-gradient(180deg, #8FCA3A 0%, #59B11C 32.81%, #259900 100%)":e?"linear-gradient(180deg, #ddd 0%, #434343 100%)":"linear-gradient(180deg, #F1A541 0%, #D48A2B 45.31%, #9F5A03 100%)"};
  border-radius: 50%;
  position: relative;
  ${({winner:e})=>e&&`&::after {\n    content: '';\n    position: absolute;\n    top: -14px;\n    right: -5px;\n    width: 27px;\n    height: 25px;\n    background: url(${rL}/img/layout/crown.svg) no-repeat;\n  }`}

  padding: 1.875px;
  ${({size:e})=>"small"===e?" width: 40px;\n    height: 40px;":"large"===e?" width: 64px;\n    height: 64px;\n    padding: 3px;":e?` width: ${e}px;\n    height: ${e}px;`:"\n          width: 48px;\n          height: 48px;\n        "}

  .center-circle {
    background: ${({isGrey:e,isGreen:t})=>t?"linear-gradient(180deg, #289B02 0%, #65B724 29.17%, #8CC939 100%)":e?"linear-gradient(180deg, #494949 0%, #d9d9d9 100%)":"linear-gradient(180deg, #AE6306 0%, #D68B2B 29.69%, #E79B3B 100%)"};
    border-radius: 50%;
    padding: ${({size:e})=>"large"==e?"2px":"1.25px"};
    width: 100%;
    height: 100%;
    .inner-circle {
      background: #613c17;
      box-shadow: ${({size:e})=>"large"==e?"0px 2px 0px 0px rgba(0, 0, 0, 0.25) inset":"0px 1.25px 0px 0px rgba(0, 0, 0, 0.25) inset"};
      width: 100%;
      height: 100%;
      border-radius: 50%;
      img {
        border-radius: 50%;
        box-shadow: ${({size:e})=>"large"==e?"0px 2px 0px 0px rgba(0, 0, 0, 0.25) inset":"0px 1.25px 0px 0px rgba(0, 0, 0, 0.25) inset"};
      }
    }
  }