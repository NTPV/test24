import{B as ne,ae as J,o,c as l,a as A,m as u,ag as ae,s as b,t as M,R as S,W as R,Y as $,h as g,L as y,G as d,N as V,w as U,J as T,H as k,I as D,f as re,i as x,K as N,a9 as oe}from"./index-r54XIAYf.js";import{s as z}from"./index-DLTc8UHg.js";import{s as ie}from"./index-DEgrUZO0.js";import{s as se}from"./index-Ck6JzpxG.js";var pe=({dt:e})=>`
.p-paginator {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background: ${e("paginator.background")};
    color: ${e("paginator.color")};
    padding: ${e("paginator.padding")};
    border-radius: ${e("paginator.border.radius")};
    gap: ${e("paginator.gap")};
}

.p-paginator-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: ${e("paginator.gap")};
}

.p-paginator-content-start {
    margin-inline-end: auto;
}

.p-paginator-content-end {
    margin-inline-start: auto;
}

.p-paginator-page,
.p-paginator-next,
.p-paginator-last,
.p-paginator-first,
.p-paginator-prev {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    user-select: none;
    overflow: hidden;
    position: relative;
    background: ${e("paginator.nav.button.background")};
    border: 0 none;
    color: ${e("paginator.nav.button.color")};
    min-width: ${e("paginator.nav.button.width")};
    height: ${e("paginator.nav.button.height")};
    transition: background ${e("paginator.transition.duration")}, color ${e("paginator.transition.duration")}, outline-color ${e("paginator.transition.duration")}, box-shadow ${e("paginator.transition.duration")};
    border-radius: ${e("paginator.nav.button.border.radius")};
    padding: 0;
    margin: 0;
}

.p-paginator-page:focus-visible,
.p-paginator-next:focus-visible,
.p-paginator-last:focus-visible,
.p-paginator-first:focus-visible,
.p-paginator-prev:focus-visible {
    box-shadow: ${e("paginator.nav.button.focus.ring.shadow")};
    outline: ${e("paginator.nav.button.focus.ring.width")} ${e("paginator.nav.button.focus.ring.style")} ${e("paginator.nav.button.focus.ring.color")};
    outline-offset: ${e("paginator.nav.button.focus.ring.offset")};
}

.p-paginator-page:not(.p-disabled):not(.p-paginator-page-selected):hover,
.p-paginator-first:not(.p-disabled):hover,
.p-paginator-prev:not(.p-disabled):hover,
.p-paginator-next:not(.p-disabled):hover,
.p-paginator-last:not(.p-disabled):hover {
    background: ${e("paginator.nav.button.hover.background")};
    color: ${e("paginator.nav.button.hover.color")};
}

.p-paginator-page.p-paginator-page-selected {
    background: ${e("paginator.nav.button.selected.background")};
    color: ${e("paginator.nav.button.selected.color")};
}

.p-paginator-current {
    color: ${e("paginator.current.page.report.color")};
}

.p-paginator-pages {
    display: flex;
    align-items: center;
    gap: ${e("paginator.gap")};
}

.p-paginator-jtp-input .p-inputtext {
    max-width: ${e("paginator.jump.to.page.input.max.width")};
}

.p-paginator-first:dir(rtl),
.p-paginator-prev:dir(rtl),
.p-paginator-next:dir(rtl),
.p-paginator-last:dir(rtl) {
    transform: rotate(180deg);
}
`;function I(e){"@babel/helpers - typeof";return I=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(e)}function le(e,t,n){return(t=ue(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ue(e){var t=ge(e,"string");return I(t)=="symbol"?t:t+""}function ge(e,t){if(I(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(I(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var ce={paginator:function(t){var n=t.instance,r=t.key;return["p-paginator p-component",le({"p-paginator-default":!n.hasBreakpoints()},"p-paginator-".concat(r),n.hasBreakpoints())]},content:"p-paginator-content",contentStart:"p-paginator-content-start",contentEnd:"p-paginator-content-end",first:function(t){var n=t.instance;return["p-paginator-first",{"p-disabled":n.$attrs.disabled}]},firstIcon:"p-paginator-first-icon",prev:function(t){var n=t.instance;return["p-paginator-prev",{"p-disabled":n.$attrs.disabled}]},prevIcon:"p-paginator-prev-icon",next:function(t){var n=t.instance;return["p-paginator-next",{"p-disabled":n.$attrs.disabled}]},nextIcon:"p-paginator-next-icon",last:function(t){var n=t.instance;return["p-paginator-last",{"p-disabled":n.$attrs.disabled}]},lastIcon:"p-paginator-last-icon",pages:"p-paginator-pages",page:function(t){var n=t.props,r=t.pageLink;return["p-paginator-page",{"p-paginator-page-selected":r-1===n.page}]},current:"p-paginator-current",pcRowPerPageDropdown:"p-paginator-rpp-dropdown",pcJumpToPageDropdown:"p-paginator-jtp-dropdown",pcJumpToPageInputText:"p-paginator-jtp-input"},de=ne.extend({name:"paginator",style:pe,classes:ce}),Z={name:"AngleDoubleLeftIcon",extends:J};function fe(e,t,n,r,i,a){return o(),l("svg",u({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[A("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.71602 11.164C5.80782 11.2021 5.9063 11.2215 6.00569 11.221C6.20216 11.2301 6.39427 11.1612 6.54025 11.0294C6.68191 10.8875 6.76148 10.6953 6.76148 10.4948C6.76148 10.2943 6.68191 10.1021 6.54025 9.96024L3.51441 6.9344L6.54025 3.90855C6.624 3.76126 6.65587 3.59011 6.63076 3.42254C6.60564 3.25498 6.525 3.10069 6.40175 2.98442C6.2785 2.86815 6.11978 2.79662 5.95104 2.7813C5.78229 2.76598 5.61329 2.80776 5.47112 2.89994L1.97123 6.39983C1.82957 6.54167 1.75 6.73393 1.75 6.9344C1.75 7.13486 1.82957 7.32712 1.97123 7.46896L5.47112 10.9991C5.54096 11.0698 5.62422 11.1259 5.71602 11.164ZM11.0488 10.9689C11.1775 11.1156 11.3585 11.2061 11.5531 11.221C11.7477 11.2061 11.9288 11.1156 12.0574 10.9689C12.1815 10.8302 12.25 10.6506 12.25 10.4645C12.25 10.2785 12.1815 10.0989 12.0574 9.96024L9.03158 6.93439L12.0574 3.90855C12.1248 3.76739 12.1468 3.60881 12.1204 3.45463C12.0939 3.30045 12.0203 3.15826 11.9097 3.04765C11.7991 2.93703 11.6569 2.86343 11.5027 2.83698C11.3486 2.81053 11.19 2.83252 11.0488 2.89994L7.51865 6.36957C7.37699 6.51141 7.29742 6.70367 7.29742 6.90414C7.29742 7.1046 7.37699 7.29686 7.51865 7.4387L11.0488 10.9689Z",fill:"currentColor"},null,-1)]),16)}Z.render=fe;var K={name:"AngleDoubleRightIcon",extends:J};function me(e,t,n,r,i,a){return o(),l("svg",u({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[A("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.68757 11.1451C7.7791 11.1831 7.8773 11.2024 7.9764 11.2019C8.07769 11.1985 8.17721 11.1745 8.26886 11.1312C8.36052 11.088 8.44238 11.0265 8.50943 10.9505L12.0294 7.49085C12.1707 7.34942 12.25 7.15771 12.25 6.95782C12.25 6.75794 12.1707 6.56622 12.0294 6.42479L8.50943 2.90479C8.37014 2.82159 8.20774 2.78551 8.04633 2.80192C7.88491 2.81833 7.73309 2.88635 7.6134 2.99588C7.4937 3.10541 7.41252 3.25061 7.38189 3.40994C7.35126 3.56927 7.37282 3.73423 7.44337 3.88033L10.4605 6.89748L7.44337 9.91463C7.30212 10.0561 7.22278 10.2478 7.22278 10.4477C7.22278 10.6475 7.30212 10.8393 7.44337 10.9807C7.51301 11.0512 7.59603 11.1071 7.68757 11.1451ZM1.94207 10.9505C2.07037 11.0968 2.25089 11.1871 2.44493 11.2019C2.63898 11.1871 2.81949 11.0968 2.94779 10.9505L6.46779 7.49085C6.60905 7.34942 6.68839 7.15771 6.68839 6.95782C6.68839 6.75793 6.60905 6.56622 6.46779 6.42479L2.94779 2.90479C2.80704 2.83757 2.6489 2.81563 2.49517 2.84201C2.34143 2.86839 2.19965 2.94178 2.08936 3.05207C1.97906 3.16237 1.90567 3.30415 1.8793 3.45788C1.85292 3.61162 1.87485 3.76975 1.94207 3.9105L4.95922 6.92765L1.94207 9.9448C1.81838 10.0831 1.75 10.2621 1.75 10.4477C1.75 10.6332 1.81838 10.8122 1.94207 10.9505Z",fill:"currentColor"},null,-1)]),16)}K.render=me;var W={name:"AngleLeftIcon",extends:J};function he(e,t,n,r,i,a){return o(),l("svg",u({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[A("path",{d:"M8.75 11.185C8.65146 11.1854 8.55381 11.1662 8.4628 11.1284C8.37179 11.0906 8.28924 11.0351 8.22 10.965L4.72 7.46496C4.57955 7.32433 4.50066 7.13371 4.50066 6.93496C4.50066 6.73621 4.57955 6.54558 4.72 6.40496L8.22 2.93496C8.36095 2.84357 8.52851 2.80215 8.69582 2.81733C8.86312 2.83252 9.02048 2.90344 9.14268 3.01872C9.26487 3.134 9.34483 3.28696 9.36973 3.4531C9.39463 3.61924 9.36303 3.78892 9.28 3.93496L6.28 6.93496L9.28 9.93496C9.42045 10.0756 9.49934 10.2662 9.49934 10.465C9.49934 10.6637 9.42045 10.8543 9.28 10.995C9.13526 11.1257 8.9448 11.1939 8.75 11.185Z",fill:"currentColor"},null,-1)]),16)}W.render=he;var be={name:"BasePaginator",extends:b,props:{totalRecords:{type:Number,default:0},rows:{type:Number,default:0},first:{type:Number,default:0},pageLinkSize:{type:Number,default:5},rowsPerPageOptions:{type:Array,default:null},template:{type:[Object,String],default:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"},currentPageReportTemplate:{type:null,default:"({currentPage} of {totalPages})"},alwaysShow:{type:Boolean,default:!0}},style:de,provide:function(){return{$pcPaginator:this,$parentInstance:this}}},G={name:"CurrentPageReport",hostName:"Paginator",extends:b,props:{pageCount:{type:Number,default:0},currentPage:{type:Number,default:0},page:{type:Number,default:0},first:{type:Number,default:0},rows:{type:Number,default:0},totalRecords:{type:Number,default:0},template:{type:String,default:"({currentPage} of {totalPages})"}},computed:{text:function(){var t=this.template.replace("{currentPage}",this.currentPage).replace("{totalPages}",this.pageCount).replace("{first}",this.pageCount>0?this.first+1:0).replace("{last}",Math.min(this.first+this.rows,this.totalRecords)).replace("{rows}",this.rows).replace("{totalRecords}",this.totalRecords);return t}}};function Pe(e,t,n,r,i,a){return o(),l("span",u({class:e.cx("current")},e.ptm("current")),M(a.text),17)}G.render=Pe;var H={name:"FirstPageLink",hostName:"Paginator",extends:b,props:{template:{type:Function,default:null}},methods:{getPTOptions:function(t){return this.ptm(t,{context:{disabled:this.$attrs.disabled}})}},components:{AngleDoubleLeftIcon:Z},directives:{ripple:S}};function ve(e,t,n,r,i,a){var s=R("ripple");return $((o(),l("button",u({class:e.cx("first"),type:"button"},a.getPTOptions("first"),{"data-pc-group-section":"pagebutton"}),[(o(),g(y(n.template||"AngleDoubleLeftIcon"),u({class:e.cx("firstIcon")},a.getPTOptions("firstIcon")),null,16,["class"]))],16)),[[s]])}H.render=ve;var Y={name:"JumpToPageDropdown",hostName:"Paginator",extends:b,emits:["page-change"],props:{page:Number,pageCount:Number,disabled:Boolean,templates:null},methods:{onChange:function(t){this.$emit("page-change",t)}},computed:{pageOptions:function(){for(var t=[],n=0;n<this.pageCount;n++)t.push({label:String(n+1),value:n});return t}},components:{JTPSelect:z}};function ye(e,t,n,r,i,a){var s=d("JTPSelect");return o(),g(s,{modelValue:n.page,options:a.pageOptions,optionLabel:"label",optionValue:"value","onUpdate:modelValue":t[0]||(t[0]=function(p){return a.onChange(p)}),class:T(e.cx("pcJumpToPageDropdown")),disabled:n.disabled,unstyled:e.unstyled,pt:e.ptm("pcJumpToPageDropdown"),"data-pc-group-section":"pagedropdown"},V({_:2},[n.templates.jumptopagedropdownicon?{name:"dropdownicon",fn:U(function(p){return[(o(),g(y(n.templates.jumptopagedropdownicon),{class:T(p.class)},null,8,["class"]))]}),key:"0"}:void 0]),1032,["modelValue","options","class","disabled","unstyled","pt"])}Y.render=ye;var q={name:"JumpToPageInput",hostName:"Paginator",extends:b,inheritAttrs:!1,emits:["page-change"],props:{page:Number,pageCount:Number,disabled:Boolean},data:function(){return{d_page:this.page}},watch:{page:function(t){this.d_page=t}},methods:{onChange:function(t){t!==this.page&&(this.d_page=t,this.$emit("page-change",t-1))}},computed:{inputArialabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.jumpToPageInputLabel:void 0}},components:{JTPInput:ie}};function we(e,t,n,r,i,a){var s=d("JTPInput");return o(),g(s,{ref:"jtpInput",modelValue:i.d_page,class:T(e.cx("pcJumpToPageInputText")),"aria-label":a.inputArialabel,disabled:n.disabled,"onUpdate:modelValue":a.onChange,unstyled:e.unstyled,pt:e.ptm("pcJumpToPageInputText")},null,8,["modelValue","class","aria-label","disabled","onUpdate:modelValue","unstyled","pt"])}q.render=we;var Q={name:"LastPageLink",hostName:"Paginator",extends:b,props:{template:{type:Function,default:null}},methods:{getPTOptions:function(t){return this.ptm(t,{context:{disabled:this.$attrs.disabled}})}},components:{AngleDoubleRightIcon:K},directives:{ripple:S}};function Ce(e,t,n,r,i,a){var s=R("ripple");return $((o(),l("button",u({class:e.cx("last"),type:"button"},a.getPTOptions("last"),{"data-pc-group-section":"pagebutton"}),[(o(),g(y(n.template||"AngleDoubleRightIcon"),u({class:e.cx("lastIcon")},a.getPTOptions("lastIcon")),null,16,["class"]))],16)),[[s]])}Q.render=Ce;var X={name:"NextPageLink",hostName:"Paginator",extends:b,props:{template:{type:Function,default:null}},methods:{getPTOptions:function(t){return this.ptm(t,{context:{disabled:this.$attrs.disabled}})}},components:{AngleRightIcon:se},directives:{ripple:S}};function Le(e,t,n,r,i,a){var s=R("ripple");return $((o(),l("button",u({class:e.cx("next"),type:"button"},a.getPTOptions("next"),{"data-pc-group-section":"pagebutton"}),[(o(),g(y(n.template||"AngleRightIcon"),u({class:e.cx("nextIcon")},a.getPTOptions("nextIcon")),null,16,["class"]))],16)),[[s]])}X.render=Le;var _={name:"PageLinks",hostName:"Paginator",extends:b,inheritAttrs:!1,emits:["click"],props:{value:Array,page:Number},methods:{getPTOptions:function(t,n){return this.ptm(n,{context:{active:t===this.page}})},onPageLinkClick:function(t,n){this.$emit("click",{originalEvent:t,value:n})},ariaPageLabel:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,t):void 0}},directives:{ripple:S}},ke=["aria-label","aria-current","onClick","data-p-active"];function Te(e,t,n,r,i,a){var s=R("ripple");return o(),l("span",u({class:e.cx("pages")},e.ptm("pages")),[(o(!0),l(k,null,D(n.value,function(p){return $((o(),l("button",u({key:p,class:e.cx("page",{pageLink:p}),type:"button","aria-label":a.ariaPageLabel(p),"aria-current":p-1===n.page?"page":void 0,onClick:function(f){return a.onPageLinkClick(f,p)},ref_for:!0},a.getPTOptions(p-1,"page"),{"data-p-active":p-1===n.page}),[re(M(p),1)],16,ke)),[[s]])}),128))],16)}_.render=Te;var ee={name:"PrevPageLink",hostName:"Paginator",extends:b,props:{template:{type:Function,default:null}},methods:{getPTOptions:function(t){return this.ptm(t,{context:{disabled:this.$attrs.disabled}})}},components:{AngleLeftIcon:W},directives:{ripple:S}};function Ie(e,t,n,r,i,a){var s=R("ripple");return $((o(),l("button",u({class:e.cx("prev"),type:"button"},a.getPTOptions("prev"),{"data-pc-group-section":"pagebutton"}),[(o(),g(y(n.template||"AngleLeftIcon"),u({class:e.cx("prevIcon")},a.getPTOptions("prevIcon")),null,16,["class"]))],16)),[[s]])}ee.render=Ie;var te={name:"RowsPerPageDropdown",hostName:"Paginator",extends:b,emits:["rows-change"],props:{options:Array,rows:Number,disabled:Boolean,templates:null},methods:{onChange:function(t){this.$emit("rows-change",t)}},computed:{rowsOptions:function(){var t=[];if(this.options)for(var n=0;n<this.options.length;n++)t.push({label:String(this.options[n]),value:this.options[n]});return t}},components:{RPPSelect:z}};function Se(e,t,n,r,i,a){var s=d("RPPSelect");return o(),g(s,{modelValue:n.rows,options:a.rowsOptions,optionLabel:"label",optionValue:"value","onUpdate:modelValue":t[0]||(t[0]=function(p){return a.onChange(p)}),class:T(e.cx("pcRowPerPageDropdown")),disabled:n.disabled,unstyled:e.unstyled,pt:e.ptm("pcRowPerPageDropdown"),"data-pc-group-section":"pagedropdown"},V({_:2},[n.templates.rowsperpagedropdownicon?{name:"dropdownicon",fn:U(function(p){return[(o(),g(y(n.templates.rowsperpagedropdownicon),{class:T(p.class)},null,8,["class"]))]}),key:"0"}:void 0]),1032,["modelValue","options","class","disabled","unstyled","pt"])}te.render=Se;function j(e){"@babel/helpers - typeof";return j=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(e)}function B(e,t){return Ae(e)||Ne(e,t)||$e(e,t)||Re()}function Re(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $e(e,t){if(e){if(typeof e=="string")return E(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}function E(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Ne(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,s,p=[],m=!0,f=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;m=!1}else for(;!(m=(r=a.call(n)).done)&&(p.push(r.value),p.length!==t);m=!0);}catch(w){f=!0,i=w}finally{try{if(!m&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw i}}return p}}function Ae(e){if(Array.isArray(e))return e}var Oe={name:"Paginator",extends:be,inheritAttrs:!1,emits:["update:first","update:rows","page"],data:function(){return{d_first:this.first,d_rows:this.rows}},watch:{first:function(t){this.d_first=t},rows:function(t){this.d_rows=t},totalRecords:function(t){this.page>0&&t&&this.d_first>=t&&this.changePage(this.pageCount-1)}},mounted:function(){this.createStyle()},methods:{changePage:function(t){var n=this.pageCount;if(t>=0&&t<n){this.d_first=this.d_rows*t;var r={page:t,first:this.d_first,rows:this.d_rows,pageCount:n};this.$emit("update:first",this.d_first),this.$emit("update:rows",this.d_rows),this.$emit("page",r)}},changePageToFirst:function(t){this.isFirstPage||this.changePage(0),t.preventDefault()},changePageToPrev:function(t){this.changePage(this.page-1),t.preventDefault()},changePageLink:function(t){this.changePage(t.value-1),t.originalEvent.preventDefault()},changePageToNext:function(t){this.changePage(this.page+1),t.preventDefault()},changePageToLast:function(t){this.isLastPage||this.changePage(this.pageCount-1),t.preventDefault()},onRowChange:function(t){this.d_rows=t,this.changePage(this.page)},createStyle:function(){var t=this;if(this.hasBreakpoints()&&!this.isUnstyled){var n;this.styleElement=document.createElement("style"),this.styleElement.type="text/css",ae(this.styleElement,"nonce",(n=this.$primevue)===null||n===void 0||(n=n.config)===null||n===void 0||(n=n.csp)===null||n===void 0?void 0:n.nonce),document.body.appendChild(this.styleElement);var r="",i=Object.keys(this.template),a={};i.sort(function(v,O){return parseInt(v)-parseInt(O)}).forEach(function(v){a[v]=t.template[v]});for(var s=0,p=Object.entries(Object.entries(a));s<p.length;s++){var m=B(p[s],2),f=m[0],w=B(m[1],1),P=w[0],C=void 0,L=void 0;P!=="default"&&typeof Object.keys(a)[f-1]=="string"?L=Number(Object.keys(a)[f-1].slice(0,-2))+1+"px":L=Object.keys(a)[f-1],C=Object.entries(a)[f-1]?"and (min-width:".concat(L,")"):"",P==="default"?r+=`
                            @media screen `.concat(C,` {
                                .p-paginator[`).concat(this.$attrSelector,`],
                                    display: flex;
                                }
                            }
                        `):r+=`
.p-paginator-`.concat(P,` {
    display: none;
}
@media screen `).concat(C," and (max-width: ").concat(P,`) {
    .p-paginator-`).concat(P,` {
        display: flex;
    }

    .p-paginator-default{
        display: none;
    }
}
                    `)}this.styleElement.innerHTML=r}},hasBreakpoints:function(){return j(this.template)==="object"},getAriaLabel:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria[t]:void 0}},computed:{templateItems:function(){var t={};if(this.hasBreakpoints()){t=this.template,t.default||(t.default="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown");for(var n in t)t[n]=this.template[n].split(" ").map(function(r){return r.trim()});return t}return t.default=this.template.split(" ").map(function(r){return r.trim()}),t},page:function(){return Math.floor(this.d_first/this.d_rows)},pageCount:function(){return Math.ceil(this.totalRecords/this.d_rows)},isFirstPage:function(){return this.page===0},isLastPage:function(){return this.page===this.pageCount-1},calculatePageLinkBoundaries:function(){var t=this.pageCount,n=Math.min(this.pageLinkSize,t),r=Math.max(0,Math.ceil(this.page-n/2)),i=Math.min(t-1,r+n-1),a=this.pageLinkSize-(i-r+1);return r=Math.max(0,r-a),[r,i]},pageLinks:function(){for(var t=[],n=this.calculatePageLinkBoundaries,r=n[0],i=n[1],a=r;a<=i;a++)t.push(a+1);return t},currentState:function(){return{page:this.page,first:this.d_first,rows:this.d_rows}},empty:function(){return this.pageCount===0},currentPage:function(){return this.pageCount>0?this.page+1:0},last:function(){return Math.min(this.d_first+this.rows,this.totalRecords)}},components:{CurrentPageReport:G,FirstPageLink:H,LastPageLink:Q,NextPageLink:X,PageLinks:_,PrevPageLink:ee,RowsPerPageDropdown:te,JumpToPageDropdown:Y,JumpToPageInput:q}};function xe(e,t,n,r,i,a){var s=d("FirstPageLink"),p=d("PrevPageLink"),m=d("NextPageLink"),f=d("LastPageLink"),w=d("PageLinks"),P=d("CurrentPageReport"),C=d("RowsPerPageDropdown"),L=d("JumpToPageDropdown"),v=d("JumpToPageInput");return e.alwaysShow||a.pageLinks&&a.pageLinks.length>1?(o(),l("nav",oe(u({key:0},e.ptmi("paginatorContainer"))),[(o(!0),l(k,null,D(a.templateItems,function(O,F){return o(),l("div",u({key:F,ref_for:!0,ref:"paginator",class:e.cx("paginator",{key:F})},e.ptm("root")),[e.$slots.container?x(e.$slots,"container",{key:0,first:i.d_first+1,last:a.last,rows:i.d_rows,page:a.page,pageCount:a.pageCount,totalRecords:e.totalRecords,firstPageCallback:a.changePageToFirst,lastPageCallback:a.changePageToLast,prevPageCallback:a.changePageToPrev,nextPageCallback:a.changePageToNext,rowChangeCallback:a.onRowChange}):(o(),l(k,{key:1},[e.$slots.start?(o(),l("div",u({key:0,class:e.cx("contentStart"),ref_for:!0},e.ptm("contentStart")),[x(e.$slots,"start",{state:a.currentState})],16)):N("",!0),A("div",u({class:e.cx("content"),ref_for:!0},e.ptm("content")),[(o(!0),l(k,null,D(O,function(h){return o(),l(k,{key:h},[h==="FirstPageLink"?(o(),g(s,{key:0,"aria-label":a.getAriaLabel("firstPageLabel"),template:e.$slots.firsticon||e.$slots.firstpagelinkicon,onClick:t[0]||(t[0]=function(c){return a.changePageToFirst(c)}),disabled:a.isFirstPage||a.empty,unstyled:e.unstyled,pt:e.pt},null,8,["aria-label","template","disabled","unstyled","pt"])):h==="PrevPageLink"?(o(),g(p,{key:1,"aria-label":a.getAriaLabel("prevPageLabel"),template:e.$slots.previcon||e.$slots.prevpagelinkicon,onClick:t[1]||(t[1]=function(c){return a.changePageToPrev(c)}),disabled:a.isFirstPage||a.empty,unstyled:e.unstyled,pt:e.pt},null,8,["aria-label","template","disabled","unstyled","pt"])):h==="NextPageLink"?(o(),g(m,{key:2,"aria-label":a.getAriaLabel("nextPageLabel"),template:e.$slots.nexticon||e.$slots.nextpagelinkicon,onClick:t[2]||(t[2]=function(c){return a.changePageToNext(c)}),disabled:a.isLastPage||a.empty,unstyled:e.unstyled,pt:e.pt},null,8,["aria-label","template","disabled","unstyled","pt"])):h==="LastPageLink"?(o(),g(f,{key:3,"aria-label":a.getAriaLabel("lastPageLabel"),template:e.$slots.lasticon||e.$slots.lastpagelinkicon,onClick:t[3]||(t[3]=function(c){return a.changePageToLast(c)}),disabled:a.isLastPage||a.empty,unstyled:e.unstyled,pt:e.pt},null,8,["aria-label","template","disabled","unstyled","pt"])):h==="PageLinks"?(o(),g(w,{key:4,"aria-label":a.getAriaLabel("pageLabel"),value:a.pageLinks,page:a.page,onClick:t[4]||(t[4]=function(c){return a.changePageLink(c)}),unstyled:e.unstyled,pt:e.pt},null,8,["aria-label","value","page","unstyled","pt"])):h==="CurrentPageReport"?(o(),g(P,{key:5,"aria-live":"polite",template:e.currentPageReportTemplate,currentPage:a.currentPage,page:a.page,pageCount:a.pageCount,first:i.d_first,rows:i.d_rows,totalRecords:e.totalRecords,unstyled:e.unstyled,pt:e.pt},null,8,["template","currentPage","page","pageCount","first","rows","totalRecords","unstyled","pt"])):h==="RowsPerPageDropdown"&&e.rowsPerPageOptions?(o(),g(C,{key:6,"aria-label":a.getAriaLabel("rowsPerPageLabel"),rows:i.d_rows,options:e.rowsPerPageOptions,onRowsChange:t[5]||(t[5]=function(c){return a.onRowChange(c)}),disabled:a.empty,templates:e.$slots,unstyled:e.unstyled,pt:e.pt},null,8,["aria-label","rows","options","disabled","templates","unstyled","pt"])):h==="JumpToPageDropdown"?(o(),g(L,{key:7,"aria-label":a.getAriaLabel("jumpToPageDropdownLabel"),page:a.page,pageCount:a.pageCount,onPageChange:t[6]||(t[6]=function(c){return a.changePage(c)}),disabled:a.empty,templates:e.$slots,unstyled:e.unstyled,pt:e.pt},null,8,["aria-label","page","pageCount","disabled","templates","unstyled","pt"])):h==="JumpToPageInput"?(o(),g(v,{key:8,page:a.currentPage,onPageChange:t[7]||(t[7]=function(c){return a.changePage(c)}),disabled:a.empty,unstyled:e.unstyled,pt:e.pt},null,8,["page","disabled","unstyled","pt"])):N("",!0)],64)}),128))],16),e.$slots.end?(o(),l("div",u({key:1,class:e.cx("contentEnd"),ref_for:!0},e.ptm("contentEnd")),[x(e.$slots,"end",{state:a.currentState})],16)):N("",!0)],64))],16)}),128))],16)):N("",!0)}Oe.render=xe;export{K as a,Z as b,Oe as c,W as s};
