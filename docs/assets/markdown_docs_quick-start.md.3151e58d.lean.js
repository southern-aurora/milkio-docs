import{_ as p,C as t,o as c,c as r,H as l,w as n,Q as e,k as s,a}from"./chunks/framework.71efb94b.js";const os=JSON.parse('{"title":"QuickStart","description":"","frontmatter":{"title":"QuickStart"},"headers":[],"relativePath":"markdown/docs/quick-start.md","filePath":"markdown/docs/quick-start.md"}'),i={name:"markdown/docs/quick-start.md"},y=s("h1",{id:"快速开始",tabindex:"-1"},[a("快速开始 "),s("a",{class:"header-anchor",href:"#快速开始","aria-label":'Permalink to "快速开始"'},"​")],-1),E=s("h1",{id:"quick-start",tabindex:"-1"},[a("Quick Start "),s("a",{class:"header-anchor",href:"#quick-start","aria-label":'Permalink to "Quick Start"'},"​")],-1),d=s("p",null,[a("在文档中，我们使用 "),s("a",{href:"https://www.typescriptlang.org/",target:"_blank",rel:"noreferrer"},"TypeScript"),a(" 来编写示例代码，Milkio 也同样支持 JavaScript。")],-1),u=s("p",null,[a("In the documentation, we use "),s("a",{href:"https://www.typescriptlang.org/",target:"_blank",rel:"noreferrer"},"TypeScript"),a(" to write sample code, Milkio also supports JavaScript.")],-1),h=s("p",null,"TypeScript 是 JavaScript 的超集，如果你正在使用 JavaScript，你只需要将那些不属于 JavaScript 的部分删除掉就可以了。",-1),_=s("p",null,"TypeScript is a superset of JavaScript. If you are using JavaScript, you just need to remove those parts that are not part of JavaScript.",-1),g=s("p",null,"不久之后，我们会提供一个包含 JavaScript 版本示例代码的文档。",-1),k=s("p",null,"Soon, we will provide a documentation with sample code for the JavaScript version.",-1),F=s("h2",{id:"安装",tabindex:"-1"},[a("安装 "),s("a",{class:"header-anchor",href:"#安装","aria-label":'Permalink to "安装"'},"​")],-1),b=s("h2",{id:"install",tabindex:"-1"},[a("Install "),s("a",{class:"header-anchor",href:"#install","aria-label":'Permalink to "Install"'},"​")],-1),m=s("p",null,"你可以选择你正在使用的包管理器安装 Milkio 的核心包：",-1),v=s("p",null,"You can choose the package manager you are using to install Milkio:",-1),C=e("",1),f=s("p",null,"Milkio 有许多包组成，这有助于减少你的应用的体积。除了核心包之外，其它的包都是可选的。",-1),S=s("p",null,"Milkio consists of many packages, which helps to reduce the size of your application. In addition to the core package, the other packages are optional.",-1),B=s("h2",{id:"开始旅程",tabindex:"-1"},[a("开始旅程 "),s("a",{class:"header-anchor",href:"#开始旅程","aria-label":'Permalink to "开始旅程"'},"​")],-1),A=s("h2",{id:"start-the-journey",tabindex:"-1"},[a("Start the journey "),s("a",{class:"header-anchor",href:"#start-the-journey","aria-label":'Permalink to "Start the journey"'},"​")],-1),w=s("p",null,"使用 Milkio 是一件非常简单的事：",-1),D=s("p",null,"Using Milkio is a very simple thing:",-1),T=e("",1),I=s("p",null,[a("我们定义了一个 Milkio 实例，并且在里面的 "),s("code",null,"states"),a(" 中定义了许多数据。你可能注意到了 "),s("code",null,"FromMemory()"),a(" 这个方法，是的，这是 "),s("a",{href:"/milkio-docs/markdown/docs/data-source.html"},"数据源"),a("，它决定了数据以何种方式持久化。现在，这些数据都保存在内存中，当我们刷新网页或重新运行应用，这些数据就会被恢复到初始的状态。")],-1),q=s("p",null,[a("We defined a Milkio instance and defined a lot of data in "),s("code",null,"states"),a(" inside. You may have noticed the "),s("code",null,"FromMemory()"),a(" method, yes, this is the "),s("a",{href:"/milkio-docs/markdown/docs/data-source.html"},"data source"),a(", which determines how the data is persisted. Now, these data are all saved in memory. When we refresh the webpage or restart the application, these data will be restored to the initial state.")],-1),M=s("p",null,"我们想要读取这些数据，可以这样做：",-1),P=s("p",null,"We want to read these data, we can do this:",-1),N=e("",2),V=s("p",null,"Milkio 被设计为异步的，因为，像在 Electron 中通信，或将状态持久化到 IndexedDB 中，这些都是异步的操作。",-1),j=s("p",null,"Milkio is designed to be asynchronous, because, like communication in Electron, or persisting state to IndexedDB, these are asynchronous operations.",-1),x=s("p",null,"你还可以修改这些数据，只需要在参数中传入一个新的值即可：",-1),$=s("p",null,"You can also modify these data, just pass in a new value in the parameter:",-1),J=e("",2),R=s("p",null,[a("订阅数据的变化也是很简单的事，只需要在原本的代码末尾添加 "),s("code",null,"$"),a(" 符号，就可以从取值变为订阅：")],-1),Q=s("p",null,[a("It is also very simple to subscribe to changes in data, just add the "),s("code",null,"$"),a(" symbol at the end of the original code, you can change from getting the value to subscribing:")],-1),U=e("",1),Y=s("p",null,"订阅方法的返回值将是一个退订方法，你可以在不再需要订阅的时候调用它：",-1),O=s("p",null,"The return value of the subscription method will be an unsubscribe method, you can call it when you no longer need to subscribe:",-1),W=s("div",{class:"language-ts vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"ts"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"unsubscribe"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," milkio.states.foo."),s("span",{style:{color:"#B392F0"}},"yourString$"),s("span",{style:{color:"#E1E4E8"}},"(("),s("span",{style:{color:"#FFAB70"}},"data"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"(data.value, data.key, data.namespace);")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#B392F0"}},"unsubscribe"),s("span",{style:{color:"#E1E4E8"}},"(); "),s("span",{style:{color:"#6A737D"}},"// 只订阅一次")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"});")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"unsubscribe"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," milkio.states.foo."),s("span",{style:{color:"#6F42C1"}},"yourString$"),s("span",{style:{color:"#24292E"}},"(("),s("span",{style:{color:"#E36209"}},"data"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"(data.value, data.key, data.namespace);")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},"unsubscribe"),s("span",{style:{color:"#24292E"}},"(); "),s("span",{style:{color:"#6A737D"}},"// 只订阅一次")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"});")])])])],-1),G=s("div",{class:"language-ts vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"ts"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"unsubscribe"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," milkio.states.foo."),s("span",{style:{color:"#B392F0"}},"yourString$"),s("span",{style:{color:"#E1E4E8"}},"(("),s("span",{style:{color:"#FFAB70"}},"data"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"(data.value, data.key, data.namespace);")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#B392F0"}},"unsubscribe"),s("span",{style:{color:"#E1E4E8"}},"(); "),s("span",{style:{color:"#6A737D"}},"// subscribe only once")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"});")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"unsubscribe"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," milkio.states.foo."),s("span",{style:{color:"#6F42C1"}},"yourString$"),s("span",{style:{color:"#24292E"}},"(("),s("span",{style:{color:"#E36209"}},"data"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"(data.value, data.key, data.namespace);")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},"unsubscribe"),s("span",{style:{color:"#24292E"}},"(); "),s("span",{style:{color:"#6A737D"}},"// subscribe only once")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"});")])])])],-1);function X(z,H,K,L,Z,ss){const o=t("I18N");return c(),r("div",null,[l(o,null,{default:n(()=>[y,E,d,u,h,_,g,k,F,b,m,v]),_:1}),C,l(o,null,{default:n(()=>[f,S,B,A,w,D]),_:1}),T,l(o,null,{default:n(()=>[I,q,M,P]),_:1}),N,l(o,null,{default:n(()=>[V,j,x,$]),_:1}),J,l(o,null,{default:n(()=>[R,Q]),_:1}),U,l(o,null,{default:n(()=>[Y,O,W,G]),_:1})])}const ls=p(i,[["render",X]]);export{os as __pageData,ls as default};
