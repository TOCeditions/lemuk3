(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"7k6y":function(t,e,a){"use strict";a.r(e);a("ls82");var n=a("HaE+"),s=a("vDqi"),i=a.n(s),o={data:function(){return{name:"Antologie Lemowskie",showid:!1,antologie:null,pagerIle:6}},metaInfo:{title:"Antologie Lemowskie"},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("https://lem.toc-editions.com/lem-biblio/items/Antologie");case 2:a=e.sent,t.antologie=a.data.data;case 4:case"end":return e.stop()}}),e)})))()},components:{Pager:a("Wsvf").a}},u=a("KHd+"),r=null,l=Object(u.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("div",{staticClass:"uk-section uk-section-primary uk-section-large"},[a("div",{staticClass:"uk-container"},[a("h1",{staticClass:"uk-title uk-margin-large"},[t._v("Tytuł: "+t._s(t.name))])])]),a("div",{staticClass:"uk-section uk-section-muted"},[a("div",{staticClass:"uk-container"},[t.$page.ants.edges.length?a("ul",{staticClass:"uk-list uk-list-divider uk-list-large"},t._l(t.$page.ants.edges,(function(e){return a("li",{key:e.node.ROK,staticClass:"uk-hover"},[a("div",{staticClass:"uk-grid"},[t.showid?a("div",{staticClass:"uk-width-small"},[a("h5",{staticClass:"uk-h2 uk-text-muted"},[t._v(t._s(e.node.id))])]):t._e(),a("div",{staticClass:"uk-width-3-5@m uk-margin-bottom"},[a("p",[a("span",{staticClass:"uk-h4"},[t._v("\n                  "+t._s(e.node.AUTOR)+":\n                  "),a("br"),a("i",[t._v(t._s(e.node.TYTUL))])]),a("br"),t._v("\n                "+t._s(e.node.WYDAWN)+", "+t._s(e.node.MIEJWYD)+" "+t._s(e.node.ROK)+"\n              ")])]),a("div",{staticClass:"uk-text-meta uk-width-expand"},[a("p",{staticClass:"uk-margin-small uk-text-secondary"},[a("strong",[t._v("Dodatkowe informacje")])]),a("p",{staticClass:"uk-margin-remove"},[t._v("\n                "+t._s(e.node.UWAGI)+"\n                "),a("br"),t._v("\n                "+t._s(e.node.OPIS)+"\n              ")])])])])})),0):a("p",[t._v("No content in DB")]),a("div",[a("Pager",{staticClass:"uk-width-1-3@m uk-border-rounded uk-pagination uk-navbar-nav uk-padding-small uk-text-large",attrs:{info:t.$page.ants.pageInfo,range:t.$page.ants.pageInfo.perPage,activeLinkClass:"uk-active uk-button-primary",linkClass:"uk-button uk-button-default"}})],1)])])])}),[],!1,null,null,null);"function"==typeof r&&r(l);e.default=l.exports}}]);