(window.webpackJsonpenumeration=window.webpackJsonpenumeration||[]).push([[0],{174:function(e,t,a){e.exports=a(328)},328:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(40),l=a.n(c),i=a(18),o=a(19),s=a(21),m=a(20),u=a(22),h=a(148),p=a.n(h),d=a(336),E=a(35),f=a(339),g=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.category;return r.a.createElement(d.a,null,r.a.createElement(d.a.Content,null,r.a.createElement(d.a.Header,null,r.a.createElement(E.a,{name:e.icon,size:"small"}),e.name),r.a.createElement(d.a.Description,null,e.description),r.a.createElement(d.a.Meta,null,e.subjects," \u0442\u0435\u043c")),r.a.createElement(d.a.Content,{extra:!0},r.a.createElement("div",null,r.a.createElement(f.a,{basic:!0,color:"blue",as:"a",href:e.link},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0442\u0435\u043c\u0443"))))}}]),t}(r.a.Component),b=a(342),j=a(343),O=a(337),v=function(){var e=[1,2,3].map(function(e){return r.a.createElement(b.a.Column,{key:e},r.a.createElement(j.a,{raised:!0},r.a.createElement(O.a,null,r.a.createElement(O.a.Header,{image:!0},r.a.createElement(O.a.Line,null)),r.a.createElement(O.a.Paragraph,null,r.a.createElement(O.a.Line,{length:"medium"}),r.a.createElement(O.a.Line,{length:"short"})))))});return r.a.createElement(b.a,{columns:3,stackable:!0},e)},y=a(338),k=function(){return r.a.createElement(y.a,{error:!0,icon:!0},r.a.createElement(E.a,{name:"warning"}),r.a.createElement(y.a.Content,null,"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0441\u043e\u043e\u0431\u0449\u0438\u0442\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0443."))},w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).columns=3,a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){if(!this.props.isLoaded)return r.a.createElement(v,null);if(!this.props.categories||0===this.props.categories.length)return r.a.createElement(k,null);var e=this.props.categories.map(function(e,t){return r.a.createElement(g,{category:e,key:t})});return r.a.createElement(d.a.Group,{itemsPerRow:this.columns,stackable:!0},e)}}]),t}(r.a.Component),C=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0443\u044e\u0449\u0443\u044e \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e \u0438\u0437 \u0432\u0435\u0440\u0445\u043d\u0435\u0433\u043e \u043c\u0435\u043d\u044e \u0438\u043b\u0438 \u043a\u043b\u0438\u043a\u043d\u0438\u0442\u0435 \u043f\u043e \u043e\u0434\u043d\u043e\u0439 \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430 \u043d\u0438\u0436\u0435."),r.a.createElement("div",null,r.a.createElement(w,{categories:this.props.categories,isLoaded:this.props.isLoaded})))}}]),t}(r.a.Component),L=a(102),x=a.n(L),M=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showMessage:!0},a.handleClick=function(){x.a.set("hide_disclaimer",!0),a.setState({showMessage:!1})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){x.a.get("hide_disclaimer")&&this.setState({showMessage:!1})}},{key:"render",value:function(){return this.state.showMessage?r.a.createElement(y.a,{info:!0,icon:!0},r.a.createElement(E.a,{name:"info"}),r.a.createElement(y.a.Content,null,r.a.createElement("div",null,"\u0421\u0430\u0439\u0442 \u0431\u044b\u043b \u0441\u043e\u0437\u0434\u0430\u043d \u043a\u0430\u043a \u043f\u043e\u0442\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e \u043f\u043e\u043b\u0435\u0437\u043d\u044b\u0439 \u0441\u0435\u0440\u0432\u0438\u0441 \u0434\u043b\u044f \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043e\u043a \u043a\u043e\u043c\u0430\u043d\u0434 \xab\u0427\u0442\u043e? \u0413\u0434\u0435? \u041a\u043e\u0433\u0434\u0430?\xbb \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u043e\u0442\u0442\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u044f \u043d\u0430\u0432\u044b\u043a\u043e\u0432 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 React.js."),r.a.createElement("div",{style:{paddingTop:"1em"}},"\u0414\u043b\u044f \u043d\u043e\u0432\u0438\u0447\u043a\u043e\u0432 \u0432 \u044d\u0442\u043e\u043c \u0434\u0435\u043b\u0435:"," ",r.a.createElement("a",{href:"/rules#what"},"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 \u043f\u0435\u0440\u0435\u0431\u043e\u0440 \u0432 \u0427\u0413\u041a."),"."),r.a.createElement(f.a,{style:{marginTop:"1em"},positive:!0,floated:"right",onClick:this.handleClick},"\u042f \u043f\u043e\u043d\u044f\u043b, \u0441\u043f\u0430\u0441\u0438\u0431\u043e"))):null}}]),t}(r.a.Component),z=a(333),I=a(344),A=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(z.a,{text:!0,style:{marginTop:"7em",minHeight:"350px"}},r.a.createElement(I.a,{as:"h1"},"\u0422\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0430 \u0442\u0435\u0445\u043d\u0438\u043a\u0438 \u043f\u0435\u0440\u0435\u0431\u043e\u0440\u0430 \u0434\u043b\u044f \u0438\u0433\u0440\u044b \u0432 \u0427\u0413\u041a"),r.a.createElement(M,null),r.a.createElement(C,{categories:this.props.categories,isLoaded:this.props.isLoaded}))}}]),t}(r.a.Component),S=a(165),D=a(334),H=function(){return r.a.createElement(j.a,{inverted:!0,vertical:!0,style:{margin:"5em 0em 0em",padding:"3em 0em"}},r.a.createElement(z.a,{textAlign:"center"},r.a.createElement(S.a,{centered:!0,size:"mini",src:"/logo.png"}),r.a.createElement(D.a,{horizontal:!0,inverted:!0,divided:!0,link:!0,size:"small"},r.a.createElement(D.a.Item,null,"\xa9 \u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440 \u0411\u0435\u043b\u043e\u043a\u0443\u0440 aka vladimino, 2019"))))},R=a(335),T=a(340),J=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.categories?this.props.categories.map(function(e,t){return r.a.createElement(R.a.Item,{as:"a",href:e.link,key:t},r.a.createElement(E.a,{name:e.icon,size:"mini"}),r.a.createElement("span",{className:"text"},e.name))}):null;return r.a.createElement(T.a,{fixed:"top",inverted:!0},r.a.createElement(z.a,null,r.a.createElement(T.a.Item,{as:"a",href:"/",header:!0},r.a.createElement(S.a,{size:"mini",src:"/logo.png",style:{marginRight:"1.5em"}}),"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),r.a.createElement(T.a.Item,{as:"a",href:"/rules"},"\u041f\u0440\u0430\u0432\u0438\u043b\u0430"),r.a.createElement(R.a,{item:!0,simple:!0,text:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"},r.a.createElement(R.a.Menu,null,e))))}}]),t}(r.a.Component),P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).dataUrl="../data/categories.json",a.state={categories:[],isLoaded:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get(this.dataUrl).then(function(t){return e.setState({categories:t.data})}).catch(function(e){return console.error(e)}).finally(function(){return e.setState({isLoaded:!0})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(J,{categories:this.state.categories}),r.a.createElement(A,{categories:this.state.categories,isLoaded:this.state.isLoaded}),r.a.createElement(H,null))}}]),t}(r.a.Component);l.a.render(r.a.createElement(P,null),document.getElementById("root"))}},[[174,1,2]]]);
//# sourceMappingURL=main.afd5b4aa.chunk.js.map