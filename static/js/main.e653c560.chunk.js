(this["webpackJsonpresume-refresh"]=this["webpackJsonpresume-refresh"]||[]).push([[0],{31:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a(1),r=a.n(n),s=a(8),o=a.n(s),c=(a(31),a(32),a(3)),l=a(4),d=a(6),h=a(5),p=a(10),u=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{className:"intro",children:"My career in technology has always been about passion. When I started it was a passion for the art of coding. I constantly strived to learn new languages and build my skill set. As my skill set grew it became a passion for building great experiences for my customers. And finally it became a passion for building great teams, that were fun and innovative."}),Object(i.jsx)("p",{className:"intro",children:"Every day I like to code, teach, mentor and build. It's not easy to do, but nothing worth doing ever is. I strive to be the kind of person you wake up wanting to go work with, because that's the kind of person I want to work with."})]})},m=a(2),j=a.n(m),b=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(c.a)(this,a),(i=t.call(this,e)).state={opened:!1},i}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return this.matches?Object(i.jsx)("div",{className:"job",children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsxs)("div",{className:"col-3",children:[Object(i.jsx)("div",{className:"where",children:this.props.company}),Object(i.jsx)("div",{className:"year",children:this.props.dates})]}),Object(i.jsxs)("div",{className:"col-9",children:[Object(i.jsx)("div",{className:"profession",children:this.props.title}),Object(i.jsx)("p",{className:"description",children:this.props.children}),this.isMatching||this.state.opened?Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"hidden-phone key-projects",children:this.props.keyProjects}),Object(i.jsx)("div",{className:"hidden-phone focus-elements",children:this.matchingFocusElements.map((function(e,t){return Object(i.jsx)("div",{children:e},t)}))})]}):Object(i.jsx)("div",{className:"more",children:Object(i.jsx)("a",{href:"/",onClick:function(t){t.preventDefault(),e.setState({opened:!0})},children:"Find out more..."})})]})]})},this.props.key):null}},{key:"matchText",get:function(){return this.props.searchText.replace(/^\s+/,"").replace(/\s+$/,"")}},{key:"isMatching",get:function(){return this.matchText.length>0}},{key:"matchRegExp",get:function(){return new RegExp(this.matchText,"i")}},{key:"matches",get:function(){if(!this.isMatching)return!0;var e=this.matchRegExp;if(this.props.company.match(e)||this.props.title.match(e)||this.props.keyProjects.match(e))return!0;var t=!1;return r.a.Children.forEach(this.props.children,(function(a){a.match(e)&&(t=!0)})),t}},{key:"matchingFocusElements",get:function(){var e=this.matchRegExp,t=[];return r.a.Children.forEach(this.props.focusElements,(function(a){if(a.props&&a.props.skill){var i=!1;a.props.skill.match(e)?i=!0:r.a.Children.forEach(a.props.children,(function(t){t.match(e)&&(i=!0)})),i&&t.push(a)}})),t}}]),a}(n.Component);b.defaultProps={searchText:"",keyProjects:""},b.propTpes={dates:j.a.string.isRequired,company:j.a.string.isRequired,location:j.a.string.isRequired,title:j.a.string.isRequired,focusElements:j.a.arrayOf(j.a.node).isRequired,keyProjects:j.a.string,searchText:j.a.string};var f=b,g=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"detail",children:[Object(i.jsxs)("span",{className:"focus",children:["Focus on ",Object(i.jsx)("span",{className:"skill",children:this.props.skill})]}),": ",this.props.children]})}}]),a}(n.Component),v=a(20),x=(n.Component,function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return this.matches?Object(i.jsxs)("div",{className:"video",children:[Object(i.jsx)("a",{href:this.props.url,children:this.props.title})," - ",this.props.children]}):null}},{key:"matchText",get:function(){return this.props.searchText.replace(/^\s+/,"").replace(/\s+$/,"")}},{key:"isMatching",get:function(){return this.matchText.length>0}},{key:"matchRegExp",get:function(){return new RegExp(this.matchText,"i")}},{key:"matches",get:function(){if(!this.isMatching)return!0;var e=this.matchRegExp;if(this.props.title.match(e))return!0;var t=!1;return r.a.Children.forEach(this.props.children,(function(a){a.match(e)&&(t=!0)})),t}}]),a}(n.Component)),w=function(e){return Object(i.jsxs)("div",{className:"contact-item",children:[Object(i.jsx)("div",{className:"icon text-center",children:Object(i.jsx)("span",{className:"fa fa-".concat(e.icon," fa-fw")})}),Object(i.jsxs)("div",{children:[e.service?Object(i.jsx)("div",{className:"title",children:e.service}):null,Object(i.jsx)("div",{className:"description description-".concat(e.icon),children:e.url?Object(i.jsx)("a",{href:e.url,children:e.children}):e.children})]})]})},y=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return this.matches?Object(i.jsx)("div",{className:"book",children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-3",children:Object(i.jsx)("a",{href:this.props.url,border:"0",children:Object(i.jsx)("img",{alt:"".concat(this.props.title," cover"),src:this.props.image})})}),Object(i.jsxs)("div",{className:"col-9",children:[Object(i.jsx)("div",{className:"title",children:Object(i.jsx)("a",{href:this.props.url,border:"0",children:this.props.title})}),Object(i.jsx)("p",{className:"description",children:this.props.children})]})]})}):null}},{key:"matchText",get:function(){return this.props.searchText.replace(/^\s+/,"").replace(/\s+$/,"")}},{key:"isMatching",get:function(){return this.matchText.length>0}},{key:"matchRegExp",get:function(){return new RegExp(this.matchText,"i")}},{key:"matches",get:function(){if(!this.isMatching)return!0;var e=this.matchRegExp;if(this.props.title.match(e))return!0;var t=!1;return r.a.Children.forEach(this.props.children,(function(a){a.match(e)&&(t=!0)})),t}}]),a}(n.Component);y.propTpes={url:j.a.string.isRequired,image:j.a.string.isRequired,title:j.a.string.isRequired};var O=a(21),k=a(9),I=Object(k.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{searchText:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET":return Object(O.a)(Object(O.a)({},e),{},{searchText:t.searchText});default:return e}})),N=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(i.jsxs)("div",{className:"box",children:[Object(i.jsx)("h2",{children:this.props.title}),this.props.items.map((function(t,a){return r.a.cloneElement(t,{searchText:e.props.searchText,key:a})}))]})}}]),a}(n.Component),T=Object(p.b)((function(e){return{searchText:e.searchText}}))(N),A=[Object(i.jsx)(y,{title:"Practical Module Federation",url:"https://module-federation.myshopify.com/products/practical-module-federation",image:"img/practical_module_federation.png",children:"Covers practical use of the Module Federation technology baked into Webpack 5 that allows for easy reused of Javascript code between applications."}),Object(i.jsx)(y,{title:"Learning AngularJS",url:"https://www.packtpub.com/web-development/learning-angularjs-video",image:"img/learning_angularjs.png",children:"A screencast series with practical examples of using AngularJS 1.x in the real world."}),Object(i.jsx)(y,{title:"Code Generation in Action",url:"http://www.amazon.com/Code-Generation-Action-Jack-Herrington/dp/1930110979",image:"img/cgia.png",children:"Uses Ruby to build a variety of different types of code generators and applies those to various common problems like databases, REST services, XML parsing, etc."}),Object(i.jsx)(y,{title:"PHP Hacks",url:"http://www.amazon.com/PHP-Hacks-Creating-Dynamic-Websites/dp/0596101392",image:"img/php_hacks.png",children:"A set of real world useful hacks based in PHP that provide good starting points to solve a wide variety of common web development problems."}),Object(i.jsx)(y,{title:"Podcasting Hacks",url:"http://www.amazon.com/Podcasting-Hacks-Tips-Tools-Blogging/dp/0596100663",image:"img/podcasting_hacks.png",children:"A really fun book about the art and technology of podcasting. With not only audio advice on microphone choices, noise reduction and editing, but also interviews with hosts from NPR, MST3K and others."})],F=[Object(i.jsx)(w,{icon:"phone",children:"510 304 2117"}),Object(i.jsx)(w,{icon:"envelope",service:"Email",url:"mailto:jherr@pobox.com",children:"jherr@pobox.com"}),Object(i.jsx)(w,{icon:"github",service:"Github",url:"https://github.com/jherr",children:"https://github.com/jherr"}),Object(i.jsx)(w,{icon:"youtube",service:"YouTube",url:"https://www.youtube.com/user/jherr2006",children:"https://www.youtube.com/user/jherr2006"}),Object(i.jsx)(w,{icon:"twitter",service:"Twitter",url:"https://twitter.com/jherr",children:"https://twitter.com/jherr"}),Object(i.jsx)(w,{icon:"linkedin",service:"LinkedIn",url:"https://www.linkedin.com/in/jherr",children:"https://www.linkedin.com/in/jherr"})],E=[Object(i.jsx)(x,{url:"https://youtu.be/vrZpGsL1-Ws",title:"Blue Collar Coder Introduction",children:"An introduction to my channel and my approach to teaching."}),Object(i.jsx)(x,{url:"https://youtu.be/tFDvEITdJZ8",title:"MicroFEs Simplified",children:"Walks you through the process of buidling and sharing Micro-FEs using the Module Federation functionality built into Webpack 5."}),Object(i.jsx)(x,{url:"https://youtu.be/j8AVXNozac8",title:"Introduction to React #1",children:"The starting point of my multipart series teaching React fundamentals from deployment through to advanced state management concepts."}),Object(i.jsx)(x,{url:"https://www.youtube.com/watch?v=j92fxPpFaL8",title:"Converting To Typescript - Basic Types",children:"Learn how to code in Typescript by converting the Javascript you already know into Typescript."}),Object(i.jsx)(x,{url:"https://youtu.be/zJvB2hnsXr0",title:"Four GraphQL Clients Compared",children:"We take a look at four different GraphQL clients; fetch, graphql-request, Apollo Client, and Relay."})],C=[Object(i.jsx)(f,{dat:"2017-2020",company:"Nike",location:"Beaverton, OR",title:"Principal Engineer",focusElements:[Object(i.jsx)(g,{skill:"React",children:"Developed and lead a small team building out the core React platform for the Fortune 100 company."}),Object(i.jsx)(g,{skill:"GraphQL",children:"Developed a pluggable GraphQL architecture that powers an aggregation API."}),Object(i.jsx)(g,{skill:"Leadership",children:"I lead the both the UX Platform team as well as a group of four principal engineers to architect the common platform and to prioritize cross-team efforts."})],children:"I started my Nike career founding and leading the UI platform team. I followed on from that to run several key initiatives into a pluggable GraphQL server and into designing, documenting and constructing a shared UI platform. As a passion project I designed and developed a replacement part recommender that was deployed and resulted in significant revenue gain."}),Object(i.jsx)(f,{dates:"2014-2017",company:"Walmart Labs",location:"Sunnyvale, CA",title:"Front End Architect",focusElements:[Object(i.jsx)(g,{skill:"React",children:"Developed and lead a small team building out the core React platform for the Fortune 1 company."}),Object(i.jsx)(g,{skill:"React-Native",children:"Developed a react-native POC Wellness application."}),Object(i.jsx)(g,{skill:"Node",children:"Lead and contributed to the HAPI server and proxy architecture."}),Object(i.jsx)(g,{skill:"Leadership",children:"I lead a team of six developers on the Pharmacy project and five developers on the React application platform team."}),Object(i.jsx)(g,{skill:"Advocacy",children:"I choreographed two React conferences that included both internal and external speakers. I also maintained an internal blog, did screencasts, seminars and developed a React and platform course."})],children:"I started as an individual contributor on the mWeb team. Then migrated into lead of the Pharmacy project. From there I lead a proof of concept on a React port of Pharmacy which led to my promotion to architect and leading the successful effort to build out the React and Node platform as well advocate for the platform."}),Object(i.jsx)(f,{dates:"2012-2014",company:"Lithium",location:"San Francisco, CA",title:"Senior Software Engineer and Team Lead",focusElements:[Object(i.jsx)(g,{skill:"Angular",children:"Developed several POCs, as well as production code based on Angular."}),Object(i.jsx)(g,{skill:"D3",children:"Developed several visualizations based on D3 and wrapped them in Angular."}),Object(i.jsx)(g,{skill:"Leadership",children:"I ran several projects under the umbrella of Labs and the Signals project individually."})],children:"At Lithium I helped driven innovation at the company by leading the Lithium Labs effort to look at new ways of connecting with our consumer customers as well as providing NLP based tools to our business customers. I used Angular and D3 to build out several applications for mining NLP data. I also built an in-house tool called Signals that allowed us to monitor our customers and provide our sales team with triggers that they used to get ahead of issues on our customer sites. I also advocated for the use of Angular and contributed to it's use in the production application."}),Object(i.jsx)(f,{dates:"2010-2012",company:"Fortify",location:"Sunnyvale, CA",title:"Senior Software Engineer and Team Lead",focusElements:[Object(i.jsx)(g,{skill:"Flex",children:"The primary UI technology for Fortify was Flex based. I was hired on in some part to bolster the team's Flex abilities. I implemented several key features of their SSC application using both Flex and Java. I lead the FOD team in porting code from an older Flex and Java platform to an updated platform."}),Object(i.jsx)(g,{skill:"Java",children:"I implemented several key features of both SSC and FOD in both Java and Flex. This included support for automated upload support. I also developed an RCP application using SWT for editing runtime configurations."}),Object(i.jsx)(g,{skill:"Ruby",children:"I used Ruby to prototype a new web-based application to provide details on open source security. In that context I developed the full stack including database code, Rails MVC code, and Ajax front-end code."}),Object(i.jsx)(g,{skill:"Web",children:"I used both Flex and jQuery extensively at Fortify. The primary UI technology for both SSC and FOD was Flex. For my prototyping work I used an HTML5 stack and layered on top of it jQuery with our own custom widgets."}),Object(i.jsx)(g,{skill:"Leadership",children:"At Fortify I helped indocrinate the team in the Agile methodology. I also ran the Fortify On Demand product for a year, which included nine successful releases."})],children:"At Fortify I helped to develop the SSC server product that enables security specialists to analyze results from static analysis, dynamic analysis and penetration testing. That work included the entire stack from front to back end. After that I lead the Fortify On Demand development using Agile and Scrum to develop and deploy nine releases in twelve months. I developed several prototypes for Fortify and HP. I wrote a paper on the novel visualizations for one of the prototypes and that paper was accepted to TechCon."}),Object(i.jsx)(f,{dates:"2009-2010",company:"Ning",location:"Palo Alto, CA",title:"Senior Software Engineer",focusElements:[Object(i.jsx)(g,{skill:"Database",children:"At Ning I worked with DBA to diagnose performance issues with the databases that drove the social networks. In addition I learned and used Hadoop for data mining. I also developed a database for the network monitoring application using MySQL."}),Object(i.jsx)(g,{skill:"Ruby",children:"PHP was the primary language at Ning for application work, but while working on the ads team I developed a complete Rails application for network monitoring."}),Object(i.jsx)(g,{skill:"PHP",children:"PHP is the primary applications language for Ning's social network application. I developed Object Oriented PHP code for the model and view portions as well as template code for the user interface."}),Object(i.jsx)(g,{skill:"Web",children:"Ning made extensive use of Javascript to build a highly dynamic interface. I wrote a lot of Javascript at Ning, including a notable complete rewrite of their website appearance editor."}),Object(i.jsx)(g,{skill:"Leadership",children:"At Ning I lead the group that build a social network monitoring application. Starting with a prototype that I developed we added an additional development resource as well as two QA engineers to the team. I ran the project using the Agile methodology."})],children:"At Ning I developed (as well as help design) several key projects in and around their primary social networking product. These included virtual gifts, photos and videos and network appearance. In addition I worked on analytics across Ning in support of the platform. I lead the effort to build a network categorization interface in support of ad targeting in Ruby On Rails. I also worked as both a team lead and on-call engineer when required. My work at Ning, which has 1.6 million networks and 40 million users and growing, provided experience in working at scale."}),Object(i.jsx)(f,{dates:"2004-2009",company:"Leverage Software",location:"San Francisco, CA",title:"Senior Software Engineer",focusElements:[Object(i.jsx)(g,{skill:"Database",children:"Leverage was a small enough company that no engineer could specialize, we all had to be full-stack engineers. As such I developed all of the database schema and stored procedure code for the features that I implemented."}),Object(i.jsx)(g,{skill:"Flex",children:'Leverage used Flex for some of the more complex client-side data visualizations for it\'s customers to view activity on their network. I developed these Flex applications and maintained them on a "Leverage Labs" site.'}),Object(i.jsx)(g,{skill:".NET",children:"Leverage used ASP.NET and C# for their web servers. I wrote several key features of the social network application from the model and controller code all the way to the front end page templates including the Javascript when required."}),Object(i.jsx)(g,{skill:"Web",children:"I pioneered the creation of Javascript 'widgets' at Leverage that allowed our customers to put information about what was happening on their social networks on their corporate portal sites. These widgets were written in pure JS without the aid of a framework to allow for maximum portability."}),Object(i.jsx)(g,{skill:"Writing",children:"At Leverage I wrote and maintained all of the documentation for web designers to use the widgets I had developed."})],children:"I built cutting edge user experiences for the social networking platform using Flex, Silverlight and Ajax. I developed a widget toolkit that used innovative transport techniques to get Leverage's social networking data on any site. I developed all of my features completely from the database back-end to the rich Internet application front-end."})],R=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(i.jsx)(p.a,{store:I,children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col-12",children:Object(i.jsxs)("div",{id:"photo-header",className:"text-center",children:[Object(i.jsx)("div",{id:"photo",children:Object(i.jsx)("img",{src:"img/avatar.jpg",alt:"avatar"})}),Object(i.jsxs)("div",{id:"text-header",children:[Object(i.jsx)("h1",{children:"Jack Herrington"}),Object(i.jsxs)("h4",{children:["Principal Engineer",Object(i.jsx)("span",{className:"fa fa-gear fa-fw"}),"YouTuber",Object(i.jsx)("span",{className:"fa fa-gear fa-fw"}),"Writer"]})]})]})})}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsxs)("div",{className:"col-xs-12 col-sm-7",children:[Object(i.jsx)("input",{type:"text",className:"form-control search d-print-none",placeholder:"Search for...",onChange:function(e){return I.dispatch({type:"SET",searchText:e.currentTarget.value})}}),Object(i.jsxs)("div",{className:"box",children:[Object(i.jsx)("h2",{children:"About Me"}),Object(i.jsx)(u,{})]}),Object(i.jsx)(T,{title:"Experience",items:C})]}),Object(i.jsxs)("div",{className:"col-xs-12 col-sm-5",children:[Object(i.jsxs)("div",{className:"box clearfix",children:[Object(i.jsx)("h2",{children:"Contact"}),F.map((function(e,t){return Object(i.jsx)("div",{children:e},t)}))]}),Object(i.jsx)("div",{className:"box",children:Object(i.jsx)(T,{title:"Selected Videos",items:E})}),Object(i.jsx)("div",{className:"box",children:Object(i.jsx)(T,{title:"Books/Screencasts",items:A})}),Object(i.jsxs)("div",{className:"box",children:[Object(i.jsx)("h2",{children:"Outside of work"}),Object(i.jsx)("p",{children:"I work with the Beaverton public school system to teach coding to fourth graders using Micro:BITs."})]})]})]})]})})}}]),a}(n.Component),S=(a(44),R),P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,46)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),i(e),n(e),r(e),s(e)}))};o.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(S,{})}),document.getElementById("root")),P()}},[[45,1,2]]]);
//# sourceMappingURL=main.e653c560.chunk.js.map