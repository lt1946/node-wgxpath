(function(){function h(a){throw a;}var i=void 0,j=!0,k=null,l=!1;function m(a){return function(){return this[a]}}function aa(a){return function(){return a}}var n=this;function p(a){return"string"==typeof a}Math.floor(2147483648*Math.random()).toString(36);function q(a){var b=t;function c(){}c.prototype=b.prototype;a.t=b.prototype;a.prototype=new c};var u,ba,ca,da;function ea(){return n.navigator?n.navigator.userAgent:k}da=ca=ba=u=l;var fa;if(fa=ea()){var ga=n.navigator;u=0==fa.indexOf("Opera");ba=!u&&-1!=fa.indexOf("MSIE");ca=!u&&-1!=fa.indexOf("WebKit");da=!u&&!ca&&"Gecko"==ga.product}var w=ba,ha=da,ia=ca,ja;
a:{var ka="",y;if(u&&n.opera)var la=n.opera.version,ka="function"==typeof la?la():la;else if(ha?y=/rv\:([^\);]+)(\)|;)/:w?y=/MSIE\s+([^\);]+)(\)|;)/:ia&&(y=/WebKit\/(\S+)/),y)var ma=y.exec(ea()),ka=ma?ma[1]:"";if(w){var na,oa=n.document;na=oa?oa.documentMode:i;if(na>parseFloat(ka)){ja=String(na);break a}}ja=ka}var pa=ja,qa={};
function ra(a){if(!qa[a]){for(var b=0,c=String(pa).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",r=d[f]||"",v=RegExp("(\\d*)(\\D*)","g"),J=RegExp("(\\d*)(\\D*)","g");do{var s=v.exec(g)||["","",""],x=J.exec(r)||["","",""];if(0==s[0].length&&0==x[0].length)break;b=((0==s[1].length?0:parseInt(s[1],10))<(0==x[1].length?0:parseInt(x[1],10))?-1:(0==s[1].length?0:parseInt(s[1],10))>
(0==x[1].length?0:parseInt(x[1],10))?1:0)||((0==s[2].length)<(0==x[2].length)?-1:(0==s[2].length)>(0==x[2].length)?1:0)||(s[2]<x[2]?-1:s[2]>x[2]?1:0)}while(0==b)}qa[a]=0<=b}}var sa={};function z(a){return sa[a]||(sa[a]=w&&!!document.documentMode&&document.documentMode>=a)};function A(a,b,c){this.a=a;this.b=b||1;this.d=c||1};var B=Array.prototype,ta=B.indexOf?function(a,b,c){return B.indexOf.call(a,b,c)}:function(a,b,c){c=c==k?0:0>c?Math.max(0,a.length+c):c;if(p(a))return!p(b)||1!=b.length?-1:a.indexOf(b,c);for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},C=B.forEach?function(a,b,c){B.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},ua=B.filter?function(a,b,c){return B.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=p(a)?a.split(""):
a,r=0;r<d;r++)if(r in g){var v=g[r];b.call(c,v,r,a)&&(e[f++]=v)}return e};function va(a,b,c){if(a.reduce)return a.reduce(b,c);var d=c;C(a,function(c,f){d=b.call(i,d,c,f,a)});return d}var wa=B.some?function(a,b,c){return B.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return j;return l};function xa(a){return B.concat.apply(B,arguments)}function ya(a,b,c){return 2>=arguments.length?B.slice.call(a,b):B.slice.call(a,b,c)};!w||z(9);!ha&&!w||w&&z(9)||ha&&ra("1.9.1");w&&ra("9");function za(a,b){if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function Aa(a,b){if(a==b)return 0;if(a.compareDocumentPosition)return a.compareDocumentPosition(b)&2?1:-1;if(w&&!z(9)){if(9==a.nodeType)return-1;if(9==b.nodeType)return 1}if("sourceIndex"in a||a.parentNode&&"sourceIndex"in a.parentNode){var c=1==a.nodeType,d=1==b.nodeType;if(c&&d)return a.sourceIndex-b.sourceIndex;var e=a.parentNode,f=b.parentNode;return e==f?Ba(a,b):!c&&za(e,b)?-1*Ca(a,b):!d&&za(f,a)?Ca(b,a):(c?a.sourceIndex:e.sourceIndex)-(d?b.sourceIndex:f.sourceIndex)}d=9==a.nodeType?a:a.ownerDocument||
a.document;c=d.createRange();c.selectNode(a);c.collapse(j);d=d.createRange();d.selectNode(b);d.collapse(j);return c.compareBoundaryPoints(n.Range.START_TO_END,d)}function Ca(a,b){var c=a.parentNode;if(c==b)return-1;for(var d=b;d.parentNode!=c;)d=d.parentNode;return Ba(d,a)}function Ba(a,b){for(var c=b;c=c.previousSibling;)if(c==a)return-1;return 1};var D=w&&!z(9),Da=w&&!z(8);function E(a,b,c,d){this.a=a;this.nodeName=c;this.nodeValue=d;this.nodeType=2;this.parentNode=this.ownerElement=b}function Ea(a,b){var c=Da&&"href"==b.nodeName?a.getAttribute(b.nodeName,2):b.nodeValue;return new E(b,a,b.nodeName,c)};function Fa(a){this.b=a;this.a=0}var Ga=RegExp("\\$?(?:(?![0-9-])[\\w-]+:)?(?![0-9-])[\\w-]+|\\/\\/|\\.\\.|::|\\d+(?:\\.\\d*)?|\\.\\d+|\"[^\"]*\"|'[^']*'|[!<>]=|\\s+|.","g"),Ha=/^\s/;function F(a,b){return a.b[a.a+(b||0)]}function G(a){return a.b[a.a++]};function H(a){var b=k,c=a.nodeType;1==c&&(b=a.textContent,b=b==i||b==k?a.innerText:b,b=b==i||b==k?"":b);if("string"!=typeof b)if(D&&"title"==a.nodeName.toLowerCase()&&1==c)b=a.text;else if(9==c||1==c)for(var a=9==c?a.documentElement:a.firstChild,c=0,d=[],b="";a;){do 1!=a.nodeType&&(b+=a.nodeValue),D&&"title"==a.nodeName.toLowerCase()&&(b+=a.text),d[c++]=a;while(a=a.firstChild);for(;c&&!(a=d[--c].nextSibling););}else b=a.nodeValue;return""+b}
function I(a,b,c){if(b===k)return j;try{if(!a.getAttribute)return l}catch(d){return l}Da&&"class"==b&&(b="className");return c==k?!!a.getAttribute(b):a.getAttribute(b,2)==c}function Ia(a,b,c,d,e){return(D?Ja:Ka).call(k,a,b,p(c)?c:k,p(d)?d:k,e||new K)}
function Ja(a,b,c,d,e){if(a instanceof L||8==a.b||c&&a.b===k){var f=b.all;if(!f)return e;a=La(a);if("*"!=a&&(f=b.getElementsByTagName(a),!f))return e;if(c){for(var g=[],r=0;b=f[r++];)I(b,c,d)&&g.push(b);f=g}for(r=0;b=f[r++];)("*"!=a||"!"!=b.tagName)&&M(e,b);return e}Ma(a,b,c,d,e);return e}
function Ka(a,b,c,d,e){b.getElementsByName&&d&&"name"==c&&!w?(b=b.getElementsByName(d),C(b,function(b){a.a(b)&&M(e,b)})):b.getElementsByClassName&&d&&"class"==c?(b=b.getElementsByClassName(d),C(b,function(b){b.className==d&&a.a(b)&&M(e,b)})):a instanceof N?Ma(a,b,c,d,e):b.getElementsByTagName&&(b=b.getElementsByTagName(a.d()),C(b,function(a){I(a,c,d)&&M(e,a)}));return e}
function Na(a,b,c,d,e){var f;if((a instanceof L||8==a.b||c&&a.b===k)&&(f=b.childNodes)){var g=La(a);if("*"!=g&&(f=ua(f,function(a){return a.tagName&&a.tagName.toLowerCase()==g}),!f))return e;c&&(f=ua(f,function(a){return I(a,c,d)}));C(f,function(a){("*"!=g||"!"!=a.tagName&&!("*"==g&&1!=a.nodeType))&&M(e,a)});return e}return Oa(a,b,c,d,e)}function Oa(a,b,c,d,e){for(b=b.firstChild;b;b=b.nextSibling)I(b,c,d)&&a.a(b)&&M(e,b);return e}
function Ma(a,b,c,d,e){for(b=b.firstChild;b;b=b.nextSibling)I(b,c,d)&&a.a(b)&&M(e,b),Ma(a,b,c,d,e)}function La(a){if(a instanceof N){if(8==a.b)return"!";if(a.b===k)return"*"}return a.d()};function K(){this.b=this.a=k;this.i=0}function Pa(a){this.b=a;this.a=this.d=k}function Qa(a,b){if(a.a){if(!b.a)return a}else return b;for(var c=a.a,d=b.a,e=k,f=k,g=0;c&&d;)c.b==d.b||c.b instanceof E&&d.b instanceof E&&c.b.a==d.b.a?(f=c,c=c.a,d=d.a):0<Aa(c.b,d.b)?(f=d,d=d.a):(f=c,c=c.a),(f.d=e)?e.a=f:a.a=f,e=f,g++;for(f=c||d;f;)f.d=e,e=e.a=f,g++,f=f.a;a.b=e;a.i=g;return a}function Ra(a,b){var c=new Pa(b);c.a=a.a;a.b?a.a.d=c:a.a=a.b=c;a.a=c;a.i++}
function M(a,b){var c=new Pa(b);c.d=a.b;a.a?a.b.a=c:a.a=a.b=c;a.b=c;a.i++}function Sa(a){return(a=a.a)?a.b:k}function Ta(a){return(a=Sa(a))?H(a):""}function O(a,b){return new Ua(a,!!b)}function Ua(a,b){this.d=a;this.b=(this.c=b)?a.b:a.a;this.a=k}function P(a){var b=a.b;if(b==k)return k;var c=a.a=b;a.b=a.c?b.d:b.a;return c.b};function t(a){this.g=a;this.b=this.f=l;this.d=k}function Q(a,b){var c=a.a(b);return c instanceof K?+Ta(c):+c}function R(a,b){var c=a.a(b);return c instanceof K?Ta(c):""+c}function S(a,b){var c=a.a(b);return c instanceof K?!!c.i:!!c};function Va(a,b,c){t.call(this,a.g);this.c=a;this.e=b;this.j=c;this.f=b.f||c.f;this.b=b.b||c.b;this.c==Wa&&(!c.b&&!c.f&&4!=c.g&&0!=c.g&&b.d?this.d={name:b.d.name,l:c}:!b.b&&(!b.f&&4!=b.g&&0!=b.g&&c.d)&&(this.d={name:c.d.name,l:b}))}q(Va);
function T(a,b,c,d,e){var b=b.a(d),c=c.a(d),f;if(b instanceof K&&c instanceof K){f=O(b);for(b=P(f);b;b=P(f)){e=O(c);for(d=P(e);d;d=P(e))if(a(H(b),H(d)))return j}return l}if(b instanceof K||c instanceof K){b instanceof K?e=b:(e=c,c=b);e=O(e);b=typeof c;for(d=P(e);d;d=P(e)){switch(b){case "number":f=+H(d);break;case "boolean":f=!!H(d);break;case "string":f=H(d);break;default:h(Error("Illegal primitive type for comparison."))}if(a(f,c))return j}return l}return e?"boolean"==typeof b||"boolean"==typeof c?
a(!!b,!!c):"number"==typeof b||"number"==typeof c?a(+b,+c):a(b,c):a(+b,+c)}Va.prototype.a=function(a){return this.c.k(this.e,this.j,a)};Va.prototype.toString=function(a){var a=a||"",b=a+"binary expression: "+this.c+"\n",a=a+"  ",b=b+(this.e.toString(a)+"\n");return b+=this.j.toString(a)};function Xa(a,b,c,d){this.a=a;this.p=b;this.g=c;this.k=d}Xa.prototype.toString=m("a");var Ya={};
function U(a,b,c,d){a in Ya&&h(Error("Binary operator already created: "+a));a=new Xa(a,b,c,d);return Ya[a.toString()]=a}U("div",6,1,function(a,b,c){return Q(a,c)/Q(b,c)});U("mod",6,1,function(a,b,c){return Q(a,c)%Q(b,c)});U("*",6,1,function(a,b,c){return Q(a,c)*Q(b,c)});U("+",5,1,function(a,b,c){return Q(a,c)+Q(b,c)});U("-",5,1,function(a,b,c){return Q(a,c)-Q(b,c)});U("<",4,2,function(a,b,c){return T(function(a,b){return a<b},a,b,c)});
U(">",4,2,function(a,b,c){return T(function(a,b){return a>b},a,b,c)});U("<=",4,2,function(a,b,c){return T(function(a,b){return a<=b},a,b,c)});U(">=",4,2,function(a,b,c){return T(function(a,b){return a>=b},a,b,c)});var Wa=U("=",3,2,function(a,b,c){return T(function(a,b){return a==b},a,b,c,j)});U("!=",3,2,function(a,b,c){return T(function(a,b){return a!=b},a,b,c,j)});U("and",2,2,function(a,b,c){return S(a,c)&&S(b,c)});U("or",1,2,function(a,b,c){return S(a,c)||S(b,c)});function Za(a,b){b.a.length&&4!=a.g&&h(Error("Primary expression must evaluate to nodeset if filter has predicate(s)."));t.call(this,a.g);this.c=a;this.e=b;this.f=a.f;this.b=a.b}q(Za);Za.prototype.a=function(a){a=this.c.a(a);return $a(this.e,a)};Za.prototype.toString=function(a){var a=a||"",b=a+"Filter: \n",a=a+"  ",b=b+this.c.toString(a);return b+=this.e.toString(a)};function ab(a,b){b.length<a.o&&h(Error("Function "+a.h+" expects at least"+a.o+" arguments, "+b.length+" given"));a.n!==k&&b.length>a.n&&h(Error("Function "+a.h+" expects at most "+a.n+" arguments, "+b.length+" given"));a.s&&C(b,function(b,d){4!=b.g&&h(Error("Argument "+d+" to function "+a.h+" is not of type Nodeset: "+b))});t.call(this,a.g);this.e=a;this.c=b;this.f=a.f||wa(b,function(a){return a.f});this.b=a.r&&!b.length||a.q&&!!b.length||wa(b,function(a){return a.b})}q(ab);
ab.prototype.a=function(a){return this.e.k.apply(k,xa(a,this.c))};ab.prototype.toString=function(a){var b=a||"",a=b+"Function: "+this.e+"\n",b=b+"  ";this.c.length&&(a+=b+"Arguments:",b+="  ",a=va(this.c,function(a,d){return a+"\n"+d.toString(b)},a));return a};function bb(a,b,c,d,e,f,g,r,v){this.h=a;this.g=b;this.f=c;this.r=d;this.q=e;this.k=f;this.o=g;this.n=r!==i?r:g;this.s=!!v}bb.prototype.toString=m("h");var cb={};
function V(a,b,c,d,e,f,g,r){a in cb&&h(Error("Function already created: "+a+"."));cb[a]=new bb(a,b,c,d,l,e,f,g,r)}V("boolean",2,l,l,function(a,b){return S(b,a)},1);V("ceiling",1,l,l,function(a,b){return Math.ceil(Q(b,a))},1);V("concat",3,l,l,function(a,b){var c=ya(arguments,1);return va(c,function(b,c){return b+R(c,a)},"")},2,k);V("contains",2,l,l,function(a,b,c){b=R(b,a);a=R(c,a);return-1!=b.indexOf(a)},2);V("count",1,l,l,function(a,b){return b.a(a).i},1,1,j);V("false",2,l,l,aa(l),0);
V("floor",1,l,l,function(a,b){return Math.floor(Q(b,a))},1);
V("id",4,l,l,function(a,b){function c(a){if(D){var b=e.all[a];if(b){if(b.nodeType&&a==b.id)return b;if(b.length){var c;a:{c=function(b){return a==b.id};for(var d=b.length,f=p(b)?b.split(""):b,g=0;g<d;g++)if(g in f&&c.call(i,f[g])){c=g;break a}c=-1}return 0>c?k:p(b)?b.charAt(c):b[c]}}return k}return e.getElementById(a)}var d=a.a,e=9==d.nodeType?d:d.ownerDocument,d=R(b,a).split(/\s+/),f=[];C(d,function(a){(a=c(a))&&!(0<=ta(f,a))&&f.push(a)});f.sort(Aa);var g=new K;C(f,function(a){M(g,a)});return g},
1);V("lang",2,l,l,aa(l),1);V("last",1,j,l,function(a){1!=arguments.length&&h(Error("Function last expects ()"));return a.d},0);V("local-name",3,l,j,function(a,b){var c=b?Sa(b.a(a)):a.a;return c?c.nodeName.toLowerCase():""},0,1,j);V("name",3,l,j,function(a,b){var c=b?Sa(b.a(a)):a.a;return c?c.nodeName.toLowerCase():""},0,1,j);V("namespace-uri",3,j,l,aa(""),0,1,j);V("normalize-space",3,l,j,function(a,b){return(b?R(b,a):H(a.a)).replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")},0,1);
V("not",2,l,l,function(a,b){return!S(b,a)},1);V("number",1,l,j,function(a,b){return b?Q(b,a):+H(a.a)},0,1);V("position",1,j,l,function(a){return a.b},0);V("round",1,l,l,function(a,b){return Math.round(Q(b,a))},1);V("starts-with",2,l,l,function(a,b,c){b=R(b,a);a=R(c,a);return 0==b.lastIndexOf(a,0)},2);V("string",3,l,j,function(a,b){return b?R(b,a):H(a.a)},0,1);V("string-length",1,l,j,function(a,b){return(b?R(b,a):H(a.a)).length},0,1);
V("substring",3,l,l,function(a,b,c,d){c=Q(c,a);if(isNaN(c)||Infinity==c||-Infinity==c)return"";d=d?Q(d,a):Infinity;if(isNaN(d)||-Infinity===d)return"";var c=Math.round(c)-1,e=Math.max(c,0),a=R(b,a);if(Infinity==d)return a.substring(e);b=Math.round(d);return a.substring(e,c+b)},2,3);V("substring-after",3,l,l,function(a,b,c){b=R(b,a);a=R(c,a);c=b.indexOf(a);return-1==c?"":b.substring(c+a.length)},2);
V("substring-before",3,l,l,function(a,b,c){b=R(b,a);a=R(c,a);a=b.indexOf(a);return-1==a?"":b.substring(0,a)},2);V("sum",1,l,l,function(a,b){for(var c=O(b.a(a)),d=0,e=P(c);e;e=P(c))d+=+H(e);return d},1,1,j);V("translate",3,l,l,function(a,b,c,d){for(var b=R(b,a),c=R(c,a),e=R(d,a),a=[],d=0;d<c.length;d++){var f=c.charAt(d);f in a||(a[f]=e.charAt(d))}c="";for(d=0;d<b.length;d++)f=b.charAt(d),c+=f in a?a[f]:f;return c},3);V("true",2,l,l,aa(j),0);function N(a,b){this.e=a;this.c=b!==i?b:k;this.b=k;switch(a){case "comment":this.b=8;break;case "text":this.b=3;break;case "processing-instruction":this.b=7;break;case "node":break;default:h(Error("Unexpected argument"))}}function db(a){return"comment"==a||"text"==a||"processing-instruction"==a||"node"==a}N.prototype.a=function(a){return this.b===k||this.b==a.nodeType};N.prototype.d=m("e");
N.prototype.toString=function(a){var a=a||"",b=a+"kindtest: "+this.e;this.c===k||(b+="\n"+this.c.toString(a+"  "));return b};function eb(a){t.call(this,3);this.c=a.substring(1,a.length-1)}q(eb);eb.prototype.a=m("c");eb.prototype.toString=function(a){return(a||"")+"literal: "+this.c};function L(a){this.h=a.toLowerCase()}L.prototype.a=function(a){var b=a.nodeType;if(1==b||2==b)return"*"==this.h||this.h==a.nodeName.toLowerCase()?j:this.h==(a.namespaceURI||"http://www.w3.org/1999/xhtml")+":*"};L.prototype.d=m("h");L.prototype.toString=function(a){return(a||"")+"nametest: "+this.h};function fb(a){t.call(this,1);this.c=a}q(fb);fb.prototype.a=m("c");fb.prototype.toString=function(a){return(a||"")+"number: "+this.c};function gb(a,b){t.call(this,a.g);this.e=a;this.c=b;this.f=a.f;this.b=a.b;if(1==this.c.length){var c=this.c[0];!c.m&&c.e==hb&&(c=c.j,"*"!=c.d()&&(this.d={name:c.d(),l:k}))}}q(gb);function ib(){t.call(this,4)}q(ib);ib.prototype.a=function(a){var b=new K,a=a.a;9==a.nodeType?M(b,a):M(b,a.ownerDocument);return b};ib.prototype.toString=function(a){return a+"RootHelperExpr"};function jb(){t.call(this,4)}q(jb);jb.prototype.a=function(a){var b=new K;M(b,a.a);return b};
jb.prototype.toString=function(a){return a+"ContextHelperExpr"};gb.prototype.a=function(a){var b=this.e.a(a);b instanceof K||h(Error("FilterExpr must evaluate to nodeset."));for(var a=this.c,c=0,d=a.length;c<d&&b.i;c++){var e=a[c],f=O(b,e.e.a),g;if(!e.f&&e.e==kb){for(g=P(f);(b=P(f))&&(!g.contains||g.contains(b))&&b.compareDocumentPosition(g)&8;g=b);b=e.a(new A(g))}else if(!e.f&&e.e==lb)g=P(f),b=e.a(new A(g));else{g=P(f);for(b=e.a(new A(g));(g=P(f))!=k;)g=e.a(new A(g)),b=Qa(b,g)}}return b};
gb.prototype.toString=function(a){var b=a||"",c=b+"PathExpr:\n",b=b+"  ",c=c+this.e.toString(b);this.c.length&&(c+=b+"Steps:\n",b+="  ",C(this.c,function(a){c+=a.toString(b)}));return c};function mb(a,b){this.a=a;this.b=!!b}function $a(a,b,c){for(c=c||0;c<a.a.length;c++)for(var d=a.a[c],e=O(b),f=b.i,g,r=0;g=P(e);r++){var v=a.b?f-r:r+1;g=d.a(new A(g,v,f));var J;"number"==typeof g?J=v==g:"string"==typeof g||"boolean"==typeof g?J=!!g:g instanceof K?J=0<g.i:h(Error("Predicate.evaluate returned an unexpected type."));if(!J){v=e;g=v.d;var s=v.a;s||h(Error("Next must be called at least once before remove."));var x=s.d,s=s.a;x?x.a=s:g.a=s;s?s.d=x:g.b=x;g.i--;v.a=k}}return b}
mb.prototype.toString=function(a){var b=a||"",a=b+"Predicates:",b=b+"  ";return va(this.a,function(a,d){return a+"\n"+b+d.toString(b)},a)};function W(a,b,c,d){t.call(this,4);this.e=a;this.j=b;this.c=c||new mb([]);this.m=!!d;b=0<this.c.a.length?this.c.a[0].d:k;a.b&&b&&(a=b.name,a=D?a.toLowerCase():a,this.d={name:a,l:b.l});a:{a=this.c;for(b=0;b<a.a.length;b++)if(c=a.a[b],c.f||1==c.g||0==c.g){a=j;break a}a=l}this.f=a}q(W);
W.prototype.a=function(a){var b=a.a,c=k,c=this.d,d=k,e=k,f=0;c&&(d=c.name,e=c.l?R(c.l,a):k,f=1);if(this.m)if(!this.f&&this.e==nb)c=Ia(this.j,b,d,e),c=$a(this.c,c,f);else if(a=O((new W(ob,new N("node"))).a(a)),b=P(a))for(c=this.k(b,d,e,f);(b=P(a))!=k;)c=Qa(c,this.k(b,d,e,f));else c=new K;else c=this.k(a.a,d,e,f);return c};W.prototype.k=function(a,b,c,d){a=this.e.d(this.j,a,b,c);return a=$a(this.c,a,d)};
W.prototype.toString=function(a){var a=a||"",b=a+"Step: \n",a=a+"  ",b=b+(a+"Operator: "+(this.m?"//":"/")+"\n");this.e.h&&(b+=a+"Axis: "+this.e+"\n");b+=this.j.toString(a);if(this.c.length)for(var b=b+(a+"Predicates: \n"),c=0;c<this.c.length;c++)var d=c<this.c.length-1?", ":"",b=b+(this.c[c].toString(a)+d);return b};function pb(a,b,c,d){this.h=a;this.d=b;this.a=c;this.b=d}pb.prototype.toString=m("h");var qb={};
function X(a,b,c,d){a in qb&&h(Error("Axis already created: "+a));b=new pb(a,b,c,!!d);return qb[a]=b}X("ancestor",function(a,b){for(var c=new K,d=b;d=d.parentNode;)a.a(d)&&Ra(c,d);return c},j);X("ancestor-or-self",function(a,b){var c=new K,d=b;do a.a(d)&&Ra(c,d);while(d=d.parentNode);return c},j);
var hb=X("attribute",function(a,b){var c=new K,d=a.d();if("style"==d&&b.style&&D)return M(c,new E(b.style,b,"style",b.style.cssText)),c;var e=b.attributes;if(e)if(a instanceof N&&a.b===k||"*"==d)for(var d=0,f;f=e[d];d++)D?f.nodeValue&&M(c,Ea(b,f)):M(c,f);else(f=e.getNamedItem(d))&&(D?f.nodeValue&&M(c,Ea(b,f)):M(c,f));return c},l),nb=X("child",function(a,b,c,d,e){return(D?Na:Oa).call(k,a,b,p(c)?c:k,p(d)?d:k,e||new K)},l,j);X("descendant",Ia,l,j);
var ob=X("descendant-or-self",function(a,b,c,d){var e=new K;I(b,c,d)&&a.a(b)&&M(e,b);return Ia(a,b,c,d,e)},l,j),kb=X("following",function(a,b,c,d){var e=new K;do for(var f=b;f=f.nextSibling;)I(f,c,d)&&a.a(f)&&M(e,f),e=Ia(a,f,c,d,e);while(b=b.parentNode);return e},l,j);X("following-sibling",function(a,b){for(var c=new K,d=b;d=d.nextSibling;)a.a(d)&&M(c,d);return c},l);X("namespace",function(){return new K},l);
var rb=X("parent",function(a,b){var c=new K;if(9==b.nodeType)return c;if(2==b.nodeType)return M(c,b.ownerElement),c;var d=b.parentNode;a.a(d)&&M(c,d);return c},l),lb=X("preceding",function(a,b,c,d){var e=new K,f=[];do f.unshift(b);while(b=b.parentNode);for(var g=1,r=f.length;g<r;g++){for(var v=[],b=f[g];b=b.previousSibling;)v.unshift(b);for(var J=0,s=v.length;J<s;J++)b=v[J],I(b,c,d)&&a.a(b)&&M(e,b),e=Ia(a,b,c,d,e)}return e},j,j);
X("preceding-sibling",function(a,b){for(var c=new K,d=b;d=d.previousSibling;)a.a(d)&&Ra(c,d);return c},j);var sb=X("self",function(a,b){var c=new K;a.a(b)&&M(c,b);return c},l);function tb(a){t.call(this,1);this.c=a;this.f=a.f;this.b=a.b}q(tb);tb.prototype.a=function(a){return-Q(this.c,a)};tb.prototype.toString=function(a){var a=a||"",b=a+"UnaryExpr: -\n";return b+=this.c.toString(a+"  ")};function ub(a){t.call(this,4);this.c=a;this.f=wa(this.c,function(a){return a.f});this.b=wa(this.c,function(a){return a.b})}q(ub);ub.prototype.a=function(a){var b=new K;C(this.c,function(c){c=c.a(a);c instanceof K||h(Error("PathExpr must evaluate to NodeSet."));b=Qa(b,c)});return b};ub.prototype.toString=function(a){var b=a||"",c=b+"UnionExpr:\n",b=b+"  ";C(this.c,function(a){c+=a.toString(b)+"\n"});return c.substring(0,c.length)};function vb(a){this.a=a}function wb(a){for(var b,c=[];;){Y(a,"Missing right hand side of binary expression.");b=xb(a);var d=G(a.a);if(!d)break;var e=(d=Ya[d]||k)&&d.p;if(!e){a.a.a--;break}for(;c.length&&e<=c[c.length-1].p;)b=new Va(c.pop(),c.pop(),b);c.push(b,d)}for(;c.length;)b=new Va(c.pop(),c.pop(),b);return b}function Y(a,b){a.a.b.length<=a.a.a&&h(Error(b))}function yb(a,b){var c=G(a.a);c!=b&&h(Error("Bad token, expected: "+b+" got: "+c))}
function zb(a){a=G(a.a);")"!=a&&h(Error("Bad token: "+a))}function Ab(a){a=G(a.a);2>a.length&&h(Error("Unclosed literal string"));return new eb(a)}function Bb(a){return"*"!=F(a.a)&&":"==F(a.a,1)&&"*"==F(a.a,2)?new L(G(a.a)+G(a.a)+G(a.a)):new L(G(a.a))}
function Cb(a){var b,c=[],d;if("/"==F(a.a)||"//"==F(a.a)){b=G(a.a);d=F(a.a);if("/"==b&&(a.a.b.length<=a.a.a||"."!=d&&".."!=d&&"@"!=d&&"*"!=d&&!/(?![0-9])[\w]/.test(d)))return new ib;d=new ib;Y(a,"Missing next location step.");b=Db(a,b);c.push(b)}else{a:{b=F(a.a);d=b.charAt(0);switch(d){case "$":h(Error("Variable reference not allowed in HTML XPath"));case "(":G(a.a);b=wb(a);Y(a,'unclosed "("');yb(a,")");break;case '"':case "'":b=Ab(a);break;default:if(isNaN(+b))if(!db(b)&&/(?![0-9])[\w]/.test(d)&&
"("==F(a.a,1)){b=G(a.a);b=cb[b]||k;G(a.a);for(d=[];")"!=F(a.a);){Y(a,"Missing function argument list.");d.push(wb(a));if(","!=F(a.a))break;G(a.a)}Y(a,"Unclosed function argument list.");zb(a);b=new ab(b,d)}else{b=k;break a}else b=new fb(+G(a.a))}"["==F(a.a)&&(d=new mb(Eb(a)),b=new Za(b,d))}if(b)if("/"==F(a.a)||"//"==F(a.a))d=b;else return b;else b=Db(a,"/"),d=new jb,c.push(b)}for(;"/"==F(a.a)||"//"==F(a.a);)b=G(a.a),Y(a,"Missing next location step."),b=Db(a,b),c.push(b);return new gb(d,c)}
function Db(a,b){var c,d,e;"/"!=b&&"//"!=b&&h(Error('Step op should be "/" or "//"'));if("."==F(a.a))return d=new W(sb,new N("node")),G(a.a),d;if(".."==F(a.a))return d=new W(rb,new N("node")),G(a.a),d;var f;"@"==F(a.a)?(f=hb,G(a.a),Y(a,"Missing attribute name")):"::"==F(a.a,1)?(/(?![0-9])[\w]/.test(F(a.a).charAt(0))||h(Error("Bad token: "+G(a.a))),e=G(a.a),(f=qb[e]||k)||h(Error("No axis with name: "+e)),G(a.a),Y(a,"Missing node name")):f=nb;e=F(a.a);if(/(?![0-9])[\w]/.test(e.charAt(0)))if("("==F(a.a,
1)){db(e)||h(Error("Invalid node type: "+e));c=G(a.a);db(c)||h(Error("Invalid type name: "+c));yb(a,"(");Y(a,"Bad nodetype");e=F(a.a).charAt(0);var g=k;if('"'==e||"'"==e)g=Ab(a);Y(a,"Bad nodetype");zb(a);c=new N(c,g)}else c=Bb(a);else"*"==e?c=Bb(a):h(Error("Bad token: "+G(a.a)));e=new mb(Eb(a),f.a);return d||new W(f,c,e,"//"==b)}function Eb(a){for(var b=[];"["==F(a.a);){G(a.a);Y(a,"Missing predicate expression.");var c=wb(a);b.push(c);Y(a,"Unclosed predicate expression.");yb(a,"]")}return b}
function xb(a){if("-"==F(a.a))return G(a.a),new tb(xb(a));var b=Cb(a);if("|"!=F(a.a))a=b;else{for(b=[b];"|"==G(a.a);)Y(a,"Missing next union location path."),b.push(Cb(a));a.a.a--;a=new ub(b)}return a};function Fb(a){a.length||h(Error("Empty XPath expression."));for(var a=a.match(Ga),b=0;b<a.length;b++)Ha.test(a[b])&&a.splice(b,1);a=new Fa(a);a.b.length<=a.a&&h(Error("Invalid XPath expression."));var c=wb(new vb(a));a.b.length<=a.a||h(Error("Bad token: "+G(a)));this.evaluate=function(a,b){var f=c.a(new A(a));return new Z(f,b)}}
function Z(a,b){0==b&&(a instanceof K?b=4:"string"==typeof a?b=2:"number"==typeof a?b=1:"boolean"==typeof a?b=3:h(Error("Unexpected evaluation result.")));2!=b&&(1!=b&&3!=b&&!(a instanceof K))&&h(Error("value could not be converted to the specified type"));this.resultType=b;var c;switch(b){case 2:this.stringValue=a instanceof K?Ta(a):""+a;break;case 1:this.numberValue=a instanceof K?+Ta(a):+a;break;case 3:this.booleanValue=a instanceof K?0<a.i:!!a;break;case 4:case 5:case 6:case 7:var d=O(a);c=[];
for(var e=P(d);e;e=P(d))c.push(e instanceof E?e.a:e);this.snapshotLength=a.i;this.invalidIteratorState=l;break;case 8:case 9:d=Sa(a);this.singleNodeValue=d instanceof E?d.a:d;break;default:h(Error("Unknown XPathResult type."))}var f=0;this.iterateNext=function(){4!=b&&5!=b&&h(Error("iterateNext called with wrong result type"));return f>=c.length?k:c[f++]};this.snapshotItem=function(a){6!=b&&7!=b&&h(Error("snapshotItem called with wrong result type"));return a>=c.length||0>a?k:c[a]}}Z.ANY_TYPE=0;
Z.NUMBER_TYPE=1;Z.STRING_TYPE=2;Z.BOOLEAN_TYPE=3;Z.UNORDERED_NODE_ITERATOR_TYPE=4;Z.ORDERED_NODE_ITERATOR_TYPE=5;Z.UNORDERED_NODE_SNAPSHOT_TYPE=6;Z.ORDERED_NODE_SNAPSHOT_TYPE=7;Z.ANY_UNORDERED_NODE_TYPE=8;Z.FIRST_ORDERED_NODE_TYPE=9;function Gb(a){var a=a||n,b=a.document;b.evaluate||(a.XPathResult=Z,b.evaluate=function(a,b,e,f){return(new Fb(a)).evaluate(b,f)},b.createExpression=function(a){return new Fb(a)})}var Hb=["wgxpath","install"],$=n;!(Hb[0]in $)&&$.execScript&&$.execScript("var "+Hb[0]);for(var Ib;Hb.length&&(Ib=Hb.shift());)!Hb.length&&Gb!==i?$[Ib]=Gb:$=$[Ib]?$[Ib]:$[Ib]={};})()

// Export for Node.js.
module.exports.install = wgxpath.install;
module.exports.XPathResultType = {
  ANY_TYPE: 0,
  NUMBER_TYPE: 1,
  STRING_TYPE: 2,
  BOOLEAN_TYPE: 3,
  UNORDERED_NODE_ITERATOR_TYPE: 4,
  ORDERED_NODE_ITERATOR_TYPE: 5,
  UNORDERED_NODE_SNAPSHOT_TYPE: 6,
  ORDERED_NODE_SNAPSHOT_TYPE: 7,
  ANY_UNORDERED_NODE_TYPE: 8,
  FIRST_ORDERED_NODE_TYPE: 9
};
