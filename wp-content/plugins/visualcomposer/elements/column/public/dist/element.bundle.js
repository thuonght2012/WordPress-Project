(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./column/index.js":function(e,n,l){"use strict";l.r(n);var t=l("./node_modules/vc-cake/index.js"),c=l.n(t),o=l("./node_modules/@babel/runtime/helpers/extends.js"),a=l.n(o),s=l("./node_modules/@babel/runtime/helpers/defineProperty.js"),i=l.n(s),d=l("./node_modules/@babel/runtime/helpers/classCallCheck.js"),r=l.n(d),p=l("./node_modules/@babel/runtime/helpers/createClass.js"),u=l.n(p),v=l("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),m=l.n(v),x=l("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),h=l.n(x),b=l("./node_modules/@babel/runtime/helpers/inherits.js"),f=l.n(b),g=l("./node_modules/react/index.js"),y=l.n(g);function w(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.push.apply(l,t)}return l}var j=function(e){function n(){return r()(this,n),m()(this,h()(n).apply(this,arguments))}return f()(n,e),u()(n,[{key:"render",value:function(){var e=this.props,n=e.id,t=e.atts,c=e.editor,o=e.isBackend,s=t.size,d=t.customClass,r=t.metaCustomId,p=t.designOptionsAdvanced,u=t.lastInRow,v=t.firstInRow,m=t.hidden,x=t.disableStacking,h=t.sticky,b=t.boxShadow,f=l("./node_modules/classnames/index.js"),g={},j={},k=["vce-col"];k.push(this.getBackgroundClass(p)),m&&o&&k.push("vce-wpbackend-element-hidden"),x?(k.push("vce-col--xs-"+(s.all?s.all.replace("/","-").replace("%","p").replace(",","-").replace(".","-"):"auto")),u.all&&k.push("vce-col--all-last"),v.all&&k.push("vce-col--all-first")):s.all?"hide"===s.all?k.push("vce-col--all-hide"):(k.push("vce-col--md-"+(s.all?s.all.replace("/","-").replace("%","p").replace(",","-").replace(".","-"):"auto")),k.push("vce-col--xs-1 vce-col--xs-last vce-col--xs-first vce-col--sm-last vce-col--sm-first"),u.all&&k.push("vce-col--md-last vce-col--lg-last vce-col--xl-last"),v.all&&k.push("vce-col--md-first vce-col--lg-first vce-col--xl-first")):Object.keys(s).forEach((function(e){var n=s[e];""===n&&(n="auto"),"defaultSize"!==e&&(k.push("vce-col--".concat(e,"-")+(n?n.replace("/","-").replace("%","p").replace(",","-").replace(".","-"):"auto")),"hide"!==n&&k.push("vce-col--".concat(e,"-visible")),u[e]&&k.push("vce-col--".concat(e,"-last")),v[e]&&k.push("vce-col--".concat(e,"-first")))})),"string"==typeof d&&d.length&&k.push(d);var O=f(k);r&&(j.id=r);var C={};h&&h.device&&(C=this.getStickyAttributes(h));var S={};b&&b.device&&(S=this.getBoxShadowAttributes(b,n)),g["data-vce-delete-attr"]="style",j["data-vce-delete-attr"]="style",j=function(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?w(l,!0).forEach((function(n){i()(e,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):w(l).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(l,n))}))}return e}({},j,{},C);var _={"data-vce-element-content":!0},D=this.applyDO("padding"),I=this.applyDO("border margin background animation");return y.a.createElement("div",a()({className:O},g,{id:"el-"+n},c),y.a.createElement("div",a()({className:"vce-col-inner"},I,j,S),this.getBackgroundTypeContent(),this.getContainerDivider(),y.a.createElement("div",a()({className:"vce-col-content"},_,D),this.props.children)))}}]),n}(c.a.getService("api").elementComponent);(0,c.a.getService("cook").add)(l("./column/settings.json"),(function(e){e.add(j)}),{css:l("./node_modules/raw-loader/index.js!./column/styles.css"),editorCss:l("./node_modules/raw-loader/index.js!./column/editor.css")},"")},"./column/settings.json":function(e){e.exports={size:{type:"object",access:"public",value:{all:"auto",defaultSize:"auto"}},disableStacking:{type:"string",access:"public",value:!1},lastInRow:{type:"object",access:"public",value:{all:!1}},firstInRow:{type:"object",access:"public",value:{all:!1}},customClass:{type:"string",access:"public",value:"",options:{label:"Extra class name",description:"Add an extra class name to the element and refer to it from Custom CSS option."}},parallax:{type:"parallax",access:"public",value:{},options:{label:"Parallax"}},designOptionsAdvanced:{type:"designOptionsAdvanced",access:"public",value:{},options:{label:"Design Options"}},sticky:{type:"sticky",access:"public",value:{},options:{label:"Sticky"}},editFormTab1:{type:"group",access:"protected",value:["metaCustomId","customClass"],options:{label:"General"}},dividers:{type:"divider",access:"public",value:{},options:{label:"Dividers"}},boxShadow:{type:"boxShadow",access:"public",value:{},options:{label:"Box Shadow"}},metaEditFormTabs:{type:"group",access:"protected",value:["editFormTab1","designOptionsAdvanced","parallax","boxShadow","dividers","sticky"]},containerFor:{type:"group",access:"protected",value:["General"]},relatedTo:{type:"group",access:"protected",value:["Column"]},parentWrapper:{type:"string",access:"protected",value:"row"},metaCustomId:{type:"customId",access:"public",value:"",options:{label:"Element ID",description:"Apply unique ID to element to link directly to it by using #your_id (for element ID use lowercase input only)."}},tag:{access:"protected",type:"string",value:"column"},hidden:{type:"string",access:"public",value:!1}}},"./node_modules/raw-loader/index.js!./column/editor.css":function(e,n){e.exports=".vce-col {\n  min-height: 1em;\n}\n\n.vce-col-content > .vcv-row-control-container .vcv-ui-blank-row-element-control {\n  min-height: auto;\n}"},"./node_modules/raw-loader/index.js!./column/styles.css":function(e,n){e.exports="/* ----------------------------------------------\n * Column\n * ---------------------------------------------- */\n.vce-col {\n  -ms-flex: 0 0 100%;\n      flex: 0 0 100%;\n  max-width: 100%;\n  box-sizing: border-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-width: 1em;\n  position: relative;\n}\n.vce-col--auto {\n  -ms-flex: 1;\n      flex: 1;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.vce-col-inner,\n.vce-col-content {\n  position: relative;\n  overflow-wrap: break-word;\n}\n\n.vce-col-inner {\n  width: 100%;\n}\n.vce-col-direction--rtl {\n  direction: rtl;\n}\n.vce-element--has-background > .vce-col-inner > .vce-col-content {\n  padding-top: 30px;\n  padding-left: 30px;\n  padding-right: 30px;\n}\n.vce-col.vce-col--all-hide {\n  display: none;\n}\n\n/* styles for mobile-portrait */\n@media (min-width: 0) {\n  .vce-col--xs-auto {\n    -ms-flex: 1 1 0;\n        flex: 1 1 0;\n    width: auto;\n  }\n  .vce-col--xs-1 {\n    -ms-flex: 0 0 100%;\n        flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .vce-col.vce-col--xs-visible {\n    display: -ms-flexbox;\n    display: flex;\n  }\n  .vce-col.vce-col--xs-hide {\n    display: none;\n  }\n}\n\n.vce-row-container > .vce-row > .vce-row-content > .vce-col > .vce-col-inner {\n  padding: 0;\n}\n\n/* styles for mobile-landscape */\n@media (min-width: 544px) {\n  .vce-col--sm-auto {\n    -ms-flex: 1 1 0;\n        flex: 1 1 0;\n    width: auto;\n  }\n  .vce-col--sm-1 {\n    -ms-flex: 0 0 100%;\n        flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .vce-col.vce-col--sm-visible {\n    display: -ms-flexbox;\n    display: flex;\n  }\n  .vce-col.vce-col--sm-hide {\n    display: none;\n  }\n}\n/* styles for mobile-landscape */\n@media (min-width: 768px) {\n  .vce-col--md-auto {\n    -ms-flex: 1 1 0;\n        flex: 1 1 0;\n    width: auto;\n  }\n  .vce-col--md-1 {\n    -ms-flex: 0 0 100%;\n        flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .vce-col.vce-col--md-visible {\n    display: -ms-flexbox;\n    display: flex;\n  }\n  .vce-col.vce-col--md-hide {\n    display: none;\n  }\n}\n/* styles for mobile-landscape */\n@media (min-width: 992px) {\n  .vce-col--lg-auto {\n    -ms-flex: 1 1 0;\n        flex: 1 1 0;\n    width: 1px;\n  }\n  .vce-col--lg-1 {\n    -ms-flex: 0 0 100%;\n        flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .vce-col.vce-col--lg-visible {\n    display: -ms-flexbox;\n    display: flex;\n  }\n  .vce-col.vce-col--lg-hide {\n    display: none;\n  }\n}\n/* styles for mobile-landscape */\n@media (min-width: 1200px) {\n  .vce-col--xl-auto {\n    -ms-flex: 1 1 0;\n        flex: 1 1 0;\n    width: auto;\n  }\n  .vce-col--xl-1 {\n    -ms-flex: 0 0 100%;\n        flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .vce-col.vce-col--xl-visible {\n    display: -ms-flexbox;\n    display: flex;\n  }\n  .vce-col.vce-col--xl-hide {\n    display: none;\n  }\n}\n@media (min-width: 0) and (max-width: 543px) {\n  .vce-element--xs--has-background > .vce-col-inner > .vce-col-content {\n    padding-top: 30px;\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n@media (min-width: 544px) and (max-width: 767px) {\n  .vce-element--sm--has-background > .vce-col-inner > .vce-col-content {\n    padding-top: 30px;\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .vce-element--md--has-background > .vce-col-inner > .vce-col-content {\n    padding-top: 30px;\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .vce-element--lg--has-background > .vce-col-inner > .vce-col-content {\n    padding-top: 30px;\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n@media (min-width: 1200px) {\n  .vce-element--xl--has-background > .vce-col-inner > .vce-col-content {\n    padding-top: 30px;\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n"}},[["./column/index.js"]]]);