(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[879],{5062:function(t,o,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/staking",function(){return e(5329)}])},5329:function(t,o,e){"use strict";e.r(o),e.d(o,{default:function(){return I}});var s=e(5893),i=e(3851),n=e(2991),a=e(1163),_=e(9867),r=e(7294),l=e(7081),c=e(8726),m=e(7022),d=e(7272),g=e(5675),h=e.n(g),k=e(3737),p=e.n(k),u={src:"/_next/static/media/staking_main.82984a56.png",height:500,width:500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAkklEQVR42mNgZWOQ0tOI10nSVVBhEDdnY2CRVTbMdp4a1O3b5xSrzSDOwKAf4lFX5Neg21SUsMxdXZmBwXxCfOmEoH6t2br9+wKrjBkYrDcllPaLzjVa5ty5IzjdnIHdrCNoQ15pR0z7qshZ0QwaDAwqRo5lYeui94bPjw+0YpBgYOBiUGGwlHNz9mAwZpA25gAAx1YljkFJoRkAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},f=e(454),x=e.n(f),F=e(381),w=e.n(F),v=e(9375);let j=t=>{let o=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let e=e=>{!o.current||o.current.contains(e.target)||t(e)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}},[]),o};var b=e(7205),N=e.n(b);let y=t=>{let{onClose:o}=t,e=j(()=>o()),{withdraw:i}=(0,v._)();return(0,s.jsx)("div",{className:N().modal_outer,children:(0,s.jsxs)("div",{ref:e,className:N().modal,children:[(0,s.jsx)("div",{className:N().modal_title,children:"Are you sure?"}),(0,s.jsx)("div",{className:N().modal_desc,children:"Penalty -35%"}),(0,s.jsxs)("div",{className:N().modal_buttons,children:[(0,s.jsx)("button",{onClick:()=>{i(),o()},className:N().modal_buttons_confirm,children:"Yes"}),(0,s.jsx)("button",{onClick:o,className:N().modal_buttons_cancel,children:"No"})]}),(0,s.jsx)("button",{onClick:o,className:N().modal_close,children:(0,s.jsxs)("svg",{width:"25",height:"24",viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("rect",{x:"0.5",width:"24",height:"24",rx:"12",fill:"white"}),(0,s.jsx)("path",{opacity:"0.5",d:"M12.5 10.8891L16.3891 7L17.5 8.11094L13.6109 12L17.5 15.8891L16.3891 17L12.5 13.1109L8.61094 17L7.5 15.8891L11.3891 12L7.5 8.11094L8.61094 7L12.5 10.8891Z",fill:"black"})]})})]})})};var S=e(7301),A=e.n(S);let E=[{name:"okx",href:"https://www.okx.com/trade-spot/sswp-usdt",size:{width:66}},{name:"gate",href:"https://gate.io/trade/sswp_usdt",size:{width:87}},{name:"mexc",href:"https://www.mexc.com/exchange/SSWP_USDT",size:{width:135}},{name:"bitmart",href:"https://www.bitmart.com/trade/en-US?symbol=SSWP_USDT",size:{width:120,height:28}},{name:"suiswap",href:"/app",isAppLink:!0,size:{width:117}}],C={marginTop:0,justifyContent:"center",textAlign:"center"},W={marginTop:0},L=t=>{let{isStaking:o,onConnectWallet:e,marginTop:i}=t,n=(0,a.useRouter)();return(0,s.jsx)("div",{className:A().stocks,style:o?C:i?W:{},children:(0,s.jsxs)("div",{className:A().stocks_left,children:[(0,s.jsx)("div",{className:A().stocks_left_title,children:"Available on:"}),(0,s.jsx)("div",{className:A().stocks_left_list,style:i?{justifyContent:"center"}:{},children:E.map(t=>(0,s.jsx)(r.Fragment,{children:(null==t?void 0:t.isAppLink)?(0,s.jsx)("button",{className:A().stocks_button,onClick:e||(()=>n.push(t.href)),children:(0,s.jsx)(h(),{className:A().stocks_left_list_image,alt:t.name,src:"/images/stock/".concat(t.name,".svg"),height:20,width:t.size.width})}):(0,s.jsx)("a",{target:"_blank",href:t.href,children:(0,s.jsx)(h(),{className:A().stocks_left_list_image,alt:t.name,src:"/images/stock/".concat(t.name,".svg"),height:t.size.height?t.size.height:20,width:t.size.width})})},t.name))})]})})},T=[{name:"TWELVE_MONTH",time:"12 months",apr:"APR 22%",color:"#34213E",hoverColor:"#CE70FF",profit:"22%",month:12},{name:"SIX_MONTH",time:"6 months",apr:"APR 15%",color:"#3F3E2B",hoverColor:"#F2D954",profit:"15%",month:6},{name:"THREE_MONTH",time:"3 months",apr:"APR 8%",color:"#444",hoverColor:"#A4A4A4",profit:"8%",month:3}],O=[{label:"25",value:.25},{label:"50",value:.5},{label:"75",value:.75},{label:"100",value:1}],B=()=>{let[t,o]=(0,r.useState)(T[0]),[e,i]=(0,r.useState)(!1),[_,l]=(0,r.useState)(""),[c,m]=(0,r.useState)(!1);(0,a.useRouter)();let{connected:d,presentModal:g}=(0,n.O)(),{suiswapCoins:h,userStakedAmount:k,userRewards:p,stakingDate:u,addPoolLiquidity:f,deposit:F,withdraw:j,changeActivePool:b}=(0,v._)(),N=t=>{b(t.name),o(t)},S=t=>{d&&h&&l(String(Math.floor(h*t)))},A=(0,r.useMemo)(()=>{let o=u&&"0"!=u?new Date(parseInt(u,10)):new Date;return w()(o.setMonth(o.getMonth()+t.month)).format("DD MMMM	YYYY")},[t,u]);return(0,s.jsxs)("div",{className:x().stakingForm_main_block,children:[(0,s.jsxs)("div",{className:x().stakingForm_main_block_inner,children:[(0,s.jsx)("div",{className:x().stakingForm_main_block_title,children:"Stake $SSWP to Join the Next IDO Wave!"}),(0,s.jsx)(L,{marginTop:!0,isStaking:!0})]}),(0,s.jsx)("div",{className:x().stakingForm_main_block_form,children:(0,s.jsx)("div",{className:x().stakingForm_pool,children:e?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("button",{onClick:()=>{i(!1),l("")},className:x().stakingForm_pool_back,children:"< BACK"}),(0,s.jsx)("div",{className:x().stakingForm_pool_title,children:"STAKE SSWP"}),(0,s.jsxs)("div",{className:x().stakingForm_pool_desc,children:["The"," ",(0,s.jsx)("span",{className:x().stakingForm_pool_title_mark,children:t.time})," ","staking plan offers a ",t.profit," profit by locking up tokens in the blockchain network for a year."]})]}),(0,s.jsxs)("div",{className:x().stakingForm_pool_info,children:[(0,s.jsxs)("div",{className:x().stakingForm_pool_info_row,children:["Staked amount",(0,s.jsxs)("span",{className:x().stakingForm_pool_info_row_value,children:[k||"0"," SSWP"]})]}),(0,s.jsxs)("div",{className:x().stakingForm_pool_info_row,children:["Your rewards",(0,s.jsxs)("span",{className:x().stakingForm_pool_info_row_value,children:[p||"0"," SSWP"]})]})]}),(0,s.jsxs)("div",{className:x().stakingForm_pool_deposit,children:[(0,s.jsxs)("div",{className:x().stakingForm_pool_deposit_infoBlock,children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:x().stakingForm_pool_deposit_infoBlock_title,children:"MATURITY DATE"}),(0,s.jsx)("div",{className:x().stakingForm_pool_deposit_infoBlock_value,children:"".concat(A)})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:x().stakingForm_pool_deposit_infoBlock_title,children:"YOUR REWARDS"}),(0,s.jsxs)("div",{className:x().stakingForm_pool_deposit_infoBlock_value,children:[p||"0"," SSWP"]})]})]}),(0,s.jsx)("div",{className:x().stakingForm_pool_deposit_percent,children:O.map(t=>(0,s.jsxs)("button",{onClick:()=>S(t.value),className:x().stakingForm_pool_deposit_percent_card,children:[t.label," %"]},t.label))}),(0,s.jsxs)("div",{className:x().stakingForm_pool_info_balance,children:["WALLET BALANCE ",(0,s.jsx)("br",{}),h||"0.0"," SSWP"]}),(0,s.jsxs)("div",{className:x().stakingForm_pool_deposit_input_outer,children:[(0,s.jsx)("input",{className:x().stakingForm_pool_deposit_input,placeholder:"0",onKeyDown:t=>["e","E","+","-",".",","].includes(t.key)&&t.preventDefault(),value:_,type:"number",onChange:t=>{l(t.target.value)}}),(0,s.jsx)("button",{onClick:()=>{if("connected"!==d){g();return}_&&"0"!=_&&F(Number(_))},className:x().stakingForm_pool_deposit_input_button,children:"Deposit"})]})]})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:x().stakingForm_pool_types,children:T.map(o=>(0,s.jsx)("span",{className:x().stakingForm_pool_types_card_outer,style:{background:o.hoverColor},children:(0,s.jsxs)("button",{onClick:()=>N(o),className:x().stakingForm_pool_types_card,style:{background:o.name===t.name?"inherit":o.color},children:[(0,s.jsx)("span",{children:o.time}),(0,s.jsx)("span",{style:{fontWeight:"400"},children:o.apr})]})},o.name))}),(0,s.jsxs)("div",{className:x().stakingForm_pool_title,children:["LOCK-UP FOR"," ",(0,s.jsx)("span",{className:x().stakingForm_pool_title_mark,children:t.time})," ","| ",t.apr]}),(0,s.jsxs)("div",{className:x().stakingForm_pool_desc,children:["The ",t.time," staking plan offers a"," ",t.profit," profit by locking up tokens in the blockchain network for a year."]})]}),(0,s.jsxs)("div",{className:x().stakingForm_pool_info,children:[(0,s.jsxs)("div",{className:x().stakingForm_pool_info_row,children:["Staked amount",(0,s.jsxs)("span",{className:x().stakingForm_pool_info_row_value,children:[k||"0"," SSWP"]})]}),(0,s.jsxs)("div",{className:x().stakingForm_pool_info_row,children:["Your rewards",(0,s.jsxs)("span",{className:x().stakingForm_pool_info_row_value,children:[p||"0"," SSWP"]})]}),(0,s.jsxs)("div",{className:x().stakingForm_pool_info_balance,children:["WALLET BALANCE ",(0,s.jsx)("br",{}),h||"0.0"," SSWP"]}),u&&(0,s.jsx)("button",{onClick:()=>{if("connected"!==d||!u)return;let o=new Date(parseInt(u,10)),e=new Date(o.setMonth(o.getMonth()+t.month)),s=new Date().getTime()-e.getTime();s<0?m(!0):j()},className:x().stakingForm_pool_withdraw,children:"Withdraw"}),(0,s.jsx)("button",{onClick:()=>{"connected"!==d&&g(),i(!e)},className:x().stakingForm_pool_submit,children:"Pick this staking plan"})]})]})})}),c&&(0,s.jsx)(y,{onClose:()=>{m(!1)}})]})},D=()=>(0,s.jsx)("div",{className:"app-container",children:(0,s.jsx)("div",{className:x().stakingForm,children:(0,s.jsx)("div",{className:x().stakingForm_main,children:(0,s.jsx)(B,{})})})}),H=()=>(0,s.jsx)("div",{className:"app-container",children:(0,s.jsx)("div",{className:p().staking,children:(0,s.jsxs)("div",{className:p().staking_hero,children:[(0,s.jsxs)("div",{className:p().staking_info,children:[(0,s.jsx)("h3",{className:p().staking_info_subtitle,children:"Join us for exclusive access!"}),(0,s.jsx)("h1",{className:p().staking_info_title,children:"Get in early on top projects by staking your $SSWP tokens"}),(0,s.jsx)(c.Qj,{href:"https://www.okx.com/trade-spot/sswp-usdt?channelid=43776722",title:"Buy $SSWP"})]}),(0,s.jsx)(h(),{className:p().staking_image,alt:"staking-main",src:u,width:500,height:500})]})})});var P=e(5005),R=e(8505),M=e(42),z=e(3033),U=()=>{var t;let{connected:o,disconnect:e,presentModal:i}=(0,n.O)(),g=(0,a.useRouter)(),{presentIdoModal:h}=(0,_.bd)();(0,r.useEffect)(()=>{"ido"===g.query.modalType&&h()},[g,h]);let[k,p]=(0,r.useState)(!1),[u,f]=(0,r.useState)(!1),x=(0,l.Z)(),F="connected"!==o?(0,s.jsx)(c.NL,{style:{marginLeft:"auto"},title:"Connect Wallet",onClick:i}):void 0!==e?(0,s.jsx)(c.NL,{style:{marginLeft:"auto"},onClick:e,isWalletConnected:!0}):(0,s.jsx)("div",{style:{backgroundColor:m.$E,width:8,height:8,borderRadius:4,overflow:"hidden"}}),w=(null===(t=x.config)||void 0===t?void 0:t.suiswap.misc["wormhole-connect-config"])!==void 0;return(0,s.jsxs)("div",{style:{position:"relative"},children:[(0,s.jsx)(d.q,{primaryColor:"#fff",wormholeConnect:()=>{p(!0)},walletButton:F,href:"/",representType:"add-back"}),(0,s.jsx)(z.x,{}),(0,s.jsx)(H,{}),(0,s.jsx)(D,{}),(0,s.jsx)(M.$,{}),w&&k&&(0,s.jsx)(P.J,{isOpen:k,onClose:()=>{p(!1)}}),(0,s.jsx)(R.J,{isOpen:u,onClose:()=>{f(!1)}})]})},I=()=>(0,s.jsx)(i.Sx,{children:(0,s.jsx)(U,{})})},8505:function(t,o,e){"use strict";e.d(o,{J:function(){return l}});var s=e(5893),i=e(4947),n=e(3559),a=e(4028),_=e(6200),r=e(8726);let l=t=>{let{style:o,isOpen:e,onClose:l}=t,c=i.O.modalFrame.defaultModalStyle,m={fontWeight:"700",fontSize:"24px",lineHeight:"29px",letterSpacing:"-0.05em",color:n.E5,padding:10},d={fontStyle:"normal",fontWeight:"500",fontSize:"12px",lineHeight:"150%",letterSpacing:"-0.03em",color:n.vJ,width:"100%"},g={width:"100%",display:"flex",flexDirection:"row",alignItems:"center",padding:"7px 17px",gap:"10px"},h={fontStyle:"normal",fontWeight:"500",fontSize:"16px",lineHeight:"150%",letterSpacing:"-0.03em",color:"#464646",width:"calc(100% - 30px)"},k=(0,s.jsxs)("div",{style:{...c,alignItems:"center",paddingLeft:40,paddingRight:40,...null!=o?o:{}},children:[(0,s.jsx)("span",{style:m,children:"SELECT NETWORK"}),(0,s.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"flex-start",padding:"0px"},children:[(0,s.jsx)("span",{style:d,children:"NETWORK: "}),(0,s.jsxs)("div",{style:g,children:[(0,s.jsx)("span",{style:h,children:"Mainnet"}),(0,s.jsx)(a.XE,{color:"#4fb291",size:20})]}),(0,s.jsxs)("div",{style:g,children:[(0,s.jsx)("span",{style:h,children:"Testnet"}),(0,s.jsx)("div",{style:{width:20,height:20,cursor:"pointer"},children:(0,s.jsx)(a.Gq,{color:n.vJ,size:20})})]})]}),(0,s.jsx)(r.UH,{text:"DISMISS",onClick:l,size:{type:"fixed",x:163,y:51}})]});return(0,s.jsx)(_.J,{index:0,representType:{type:"modal",isOpen:e,overlay:n.Dn,onClose:l},modals:[{content:k,minWidth:280,width:"min(376px, 100%)"}]})}},5005:function(t,o,e){"use strict";e.d(o,{J:function(){return m}});var s=e(5893),i=e(7294),n=e(8885),a=e(3559),_=e(8788),r=e(7081),l=e(9769);let c=t=>{let{children:o,...e}=t;return(0,s.jsx)("div",{...e,children:o})},m=t=>{let{isOpen:o,onClose:e}=t,[m,d]=(0,i.useState)(!0),[g,h]=(0,i.useState)("Loading"),k=(0,r.Z)(),p=(0,i.useMemo)(()=>{let t=k.config.suiswap.misc["wormhole-connect-config"];if(t)return JSON.stringify(t)},[k]);return(0,i.useEffect)(()=>{let t=setInterval(()=>{let t="Loading Wormhole Connect";h(o=>{switch(o){case"".concat(t):return"".concat(t,".");case"".concat(t,"."):return"".concat(t,"..");case"".concat(t,".."):return"".concat(t,"...");default:return"".concat(t)}})},500);return()=>{clearInterval(t)}},[]),(0,i.useEffect)(()=>{var t,o;let e=document.createElement("script");e.src=null!==(t=p.__src)&&void 0!==t?t:"https://www.unpkg.com/@wormhole-foundation/wormhole-connect@0.0.12/dist/main.js",e.async=!0,e.onload=()=>{d(!1),(0,l.debugLog)("DONE LOADING WORMHOLE")};let s=document.createElement("link");return s.href=null!==(o=p.__link)&&void 0!==o?o:"https://www.unpkg.com/@wormhole-foundation/wormhole-connect@0.0.12/dist/main.css",document.body.appendChild(e),document.body.appendChild(s),()=>{document.body.removeChild(e),document.body.removeChild(s)}},[p]),(0,s.jsx)(n.$,{isOpen:o,onClose:e,children:(0,s.jsxs)("div",{style:{width:"80vw",height:"80vh",borderRadius:"40px",display:"flex",alignItems:"center",justifyContent:"center",background:m?a.fz:void 0,overflow:"auto",boxShadow:"-13px 17px 19px rgba(124, 124, 124, 0.1)"},children:[(0,s.jsx)(c,{id:"wormhole-connect",config:p,style:{width:m?0:"100%",height:m?0:"100%"}}),m&&(0,s.jsx)(_.F,{color:a.E5,fontSize:13,fontWeight:400,children:g})]})})}},42:function(t,o,e){"use strict";e.d(o,{$:function(){return g}});var s=e(5893),i=e(9891),n=e(6574),a=e.n(n),_=e(5675),r=e.n(_),l=e(1664),c=e.n(l),m=e(7294);let d=[{icon:{src:"/_next/static/media/x.1efa4cae.svg",height:19,width:20,blurWidth:0,blurHeight:0},href:"https://twitter.com/suiswap_app"},{icon:{src:"/_next/static/media/discord.1bf602d9.svg",height:16,width:21,blurWidth:0,blurHeight:0},href:"https://discord.gg/suiswap"},{icon:{src:"/_next/static/media/telegram.e7a8018c.svg",height:20,width:21,blurWidth:0,blurHeight:0},href:"https://t.me/sui_swap"},{icon:{src:"/_next/static/media/github.c4316663.svg",height:20,width:21,blurWidth:0,blurHeight:0},href:"https://github.com/vividnetwork"},{icon:"",href:""},{icon:{src:"/_next/static/media/tg_chat.31512621.svg",height:20,width:20,blurWidth:0,blurHeight:0},href:"https://t.me/suiswapchat"},{icon:{src:"/_next/static/media/tg_cls.f23aa76a.svg",height:20,width:20,blurWidth:0,blurHeight:0},href:"https://t.me/suiswap_cis"},{icon:{src:"/_next/static/media/tg_tr.28d62258.svg",height:20,width:20,blurWidth:0,blurHeight:0},href:"https://t.me/suiswap_tr"}],g=()=>(0,s.jsx)("div",{className:a().footer_outer,children:(0,s.jsx)("div",{className:"app-container",children:(0,s.jsxs)("div",{className:a().footer,children:[(0,s.jsxs)("div",{className:a().footer_left,children:[(0,s.jsx)(i.T,{vartiant:"logo-and-text",size:35}),(0,s.jsx)("div",{className:a().footer_left_text,children:"SuiSwap is a Launchpad and DEX. By Staking $SSWP, you have the opportunity to purchase tokens ahead of everyone else, giving you an advantage in the cryptospace"})]}),(0,s.jsxs)("div",{className:a().footer_right,children:[(0,s.jsx)("div",{className:a().footer_right_title,children:"Join the Suiswap community now!"}),(0,s.jsx)("div",{className:a().footer_right_community,children:d.map((t,o)=>(0,s.jsx)(m.Fragment,{children:(null==t?void 0:t.href)?(0,s.jsx)(c(),{href:t.href,children:(0,s.jsx)(r(),{className:a().footer_right_community_item,alt:"community-icon-".concat(o),src:t.icon})}):(0,s.jsx)("span",{})},o))})]})]})})})},3033:function(t,o,e){"use strict";e.d(o,{x:function(){return i}});var s=e(5893);let i=()=>{let t=[],o=0;for(;o<11;)t.push(o),o++;return(0,s.jsx)("div",{className:"lines",children:t.map((t,o)=>(0,s.jsx)("span",{className:"line"},o))})}},7205:function(t){t.exports={modal:"confirm_withdraw_modal_modal__aVCNa",modal_outer:"confirm_withdraw_modal_modal_outer__w6uhJ",modal_title:"confirm_withdraw_modal_modal_title__ecW5l",modal_desc:"confirm_withdraw_modal_modal_desc__TbBBj",modal_buttons:"confirm_withdraw_modal_modal_buttons__uLlxw",modal_buttons_confirm:"confirm_withdraw_modal_modal_buttons_confirm__xThRF",modal_buttons_cancel:"confirm_withdraw_modal_modal_buttons_cancel__aNMmA",modal_close:"confirm_withdraw_modal_modal_close__LEMhU"}},6574:function(t){t.exports={footer:"footer_footer__EM_8r",footer_outer:"footer_footer_outer__KNKa5",footer_left:"footer_footer_left__kUrbE",footer_left_text:"footer_footer_left_text__7Ecdm",footer_links:"footer_footer_links__w2x6O",footer_links_item:"footer_footer_links_item__GsKwP",footer_right:"footer_footer_right__pKoqu",footer_right_title:"footer_footer_right_title__Gcgeh",footer_right_community:"footer_footer_right_community__XmZEc",footer_right_community_item:"footer_footer_right_community_item__5TcWW"}},454:function(t){t.exports={stakingForm:"stakingForm_stakingForm__ZU2mf",stakingForm_tabs:"stakingForm_stakingForm_tabs__GUrLc",stakingForm_tabs_tab:"stakingForm_stakingForm_tabs_tab__LW6FE",stakingForm_tabs_tab_active:"stakingForm_stakingForm_tabs_tab_active__E4_i7",stakingForm_main_block:"stakingForm_stakingForm_main_block__9tCwJ",stakingForm_main_block_title:"stakingForm_stakingForm_main_block_title__mVFe2",stakingForm_main_block_desc:"stakingForm_stakingForm_main_block_desc__6OQdf",stakingForm_main_block_row:"stakingForm_stakingForm_main_block_row__lmW3h",stakingForm_main_block_row_value:"stakingForm_stakingForm_main_block_row_value___84_F",stakingForm_main_block_inner:"stakingForm_stakingForm_main_block_inner__gAZEn",stakingForm_main_block_panel:"stakingForm_stakingForm_main_block_panel__oKrT3",stakingForm_main_block_panel_title:"stakingForm_stakingForm_main_block_panel_title__8lZH2",stakingForm_main_block_panel_text:"stakingForm_stakingForm_main_block_panel_text___LJUh",stakingForm_main_block_panel_image:"stakingForm_stakingForm_main_block_panel_image__2a8dH",stakingForm_main_block_form:"stakingForm_stakingForm_main_block_form__hBGZc",stakingForm_pool:"stakingForm_stakingForm_pool__94sfc",stakingForm_pool_back:"stakingForm_stakingForm_pool_back__nsUN9",stakingForm_pool_types:"stakingForm_stakingForm_pool_types__j_lar",stakingForm_pool_types_card:"stakingForm_stakingForm_pool_types_card__PlnKe",stakingForm_pool_types_card_outer:"stakingForm_stakingForm_pool_types_card_outer__4wCQd",stakingForm_pool_title:"stakingForm_stakingForm_pool_title__EfwD2",stakingForm_pool_title_mark:"stakingForm_stakingForm_pool_title_mark__g7LiK",stakingForm_pool_desc:"stakingForm_stakingForm_pool_desc__xK_qK",stakingForm_pool_info:"stakingForm_stakingForm_pool_info__4w9rD",stakingForm_pool_info_row:"stakingForm_stakingForm_pool_info_row__VkEbp",stakingForm_pool_info_row_value:"stakingForm_stakingForm_pool_info_row_value__Zu1i_",stakingForm_pool_info_balance:"stakingForm_stakingForm_pool_info_balance__GGweA",stakingForm_pool_deposit:"stakingForm_stakingForm_pool_deposit__HGzUn",stakingForm_pool_deposit_infoBlock:"stakingForm_stakingForm_pool_deposit_infoBlock__UcXgq",stakingForm_pool_deposit_infoBlock_title:"stakingForm_stakingForm_pool_deposit_infoBlock_title__IYGUB",stakingForm_pool_deposit_infoBlock_value:"stakingForm_stakingForm_pool_deposit_infoBlock_value__Vgd3F",stakingForm_pool_deposit_percent:"stakingForm_stakingForm_pool_deposit_percent__3Oi6B",stakingForm_pool_deposit_percent_card:"stakingForm_stakingForm_pool_deposit_percent_card__OXhKx",stakingForm_pool_deposit_input:"stakingForm_stakingForm_pool_deposit_input__6gbFW",stakingForm_pool_deposit_input_outer:"stakingForm_stakingForm_pool_deposit_input_outer__jD1T5",stakingForm_pool_deposit_input_button:"stakingForm_stakingForm_pool_deposit_input_button__5gJyZ",stakingForm_pool_withdraw:"stakingForm_stakingForm_pool_withdraw__zwSiQ",stakingForm_pool_submit:"stakingForm_stakingForm_pool_submit__u_Kti"}},3737:function(t){t.exports={staking:"stakingHero_staking__7DZVj",staking_hero:"stakingHero_staking_hero__Pbeid",staking_info:"stakingHero_staking_info__46BPE",staking_info_title:"stakingHero_staking_info_title__eA2zM",staking_info_subtitle:"stakingHero_staking_info_subtitle__Zef85",staking_image:"stakingHero_staking_image__py66B"}},7301:function(t){t.exports={stocks:"stocks_list_stocks__Julww",stocks_left:"stocks_list_stocks_left__wMUUU",stocks_left_title:"stocks_list_stocks_left_title__nNRPW",stocks_left_list:"stocks_list_stocks_left_list___dAP7",stocks_button:"stocks_list_stocks_button__t0caH",stocks_volume:"stocks_list_stocks_volume__6Heja"}}},function(t){t.O(0,[885,22,735,181,774,888,179],function(){return t(t.s=5062)}),_N_E=t.O()}]);