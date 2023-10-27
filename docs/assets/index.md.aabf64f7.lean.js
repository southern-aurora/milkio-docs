import{_ as n,C as a,o as l,c as s,H as i,w as r,k as e,a as o}from"./chunks/framework.064d4bf4.js";const fo=JSON.parse('{"title":"概述","description":"","frontmatter":{},"headers":[],"relativePath":"index.md","filePath":"index.md"}'),c={name:"index.md"},d=e("h1",{id:"概述",tabindex:"-1"},[o("概述 "),e("a",{class:"header-anchor",href:"#概述","aria-label":'Permalink to "概述"'},"​")],-1),h=e("h1",{id:"introduction",tabindex:"-1"},[o("Introduction "),e("a",{class:"header-anchor",href:"#introduction","aria-label":'Permalink to "Introduction"'},"​")],-1),p=e("p",null,"高性能的 Bun 框架，以人为本，你代码中的人体工学椅。",-1),u=e("p",null,"High performance Bun framework, human-centered, ergonomic chair in your code.",-1),_=e("blockquote",null,[e("p",null,"Bao 的 1.0 版本尚未发布，有 Api 变更的可能性。不推荐在生产环境中使用。")],-1),m=e("blockquote",null,[e("p",null,"The 1.0 version of Bao has not been released yet, and there is a possibility of Api changes. Not recommended for use in production.")],-1),y=e("h2",{id:"bao-是如何诞生的",tabindex:"-1"},[o("Bao 是如何诞生的？ "),e("a",{class:"header-anchor",href:"#bao-是如何诞生的","aria-label":'Permalink to "Bao 是如何诞生的？"'},"​")],-1),f=e("h2",{id:"how-was-bao-born",tabindex:"-1"},[o("How was Bao born? "),e("a",{class:"header-anchor",href:"#how-was-bao-born","aria-label":'Permalink to "How was Bao born?"'},"​")],-1),b=e("p",null,[o("在创造 Bao (中国语中"),e("a",{href:"https://en.wikipedia.org/wiki/Baozi",target:"_blank",rel:"noreferrer"},'"包子"'),o("的意思) 之前，我曾经尝试过很多框架，只是，我没有找到一个框架，它能够让我在开发的时候，感觉到足够的舒适。")],-1),g=e("p",null,[o("Before creating Bao (meaning "),e("a",{href:"https://en.wikipedia.org/wiki/Baozi",target:"_blank",rel:"noreferrer"},'"Baozi"'),o(" in Chinese), I tried many frameworks, but I didn't find a framework that would make me feel comfortable enough when I was developing.")],-1),w=e("p",null,"最终，我决定自己创造一个框架，她通过许多巧妙的设计，让你在编码过程中降低心智负担、解放大脑，同时兼顾性能。",-1),k=e("p",null,"Finally, I decided to create a framework myself. She reduces the mental burden and frees the brain through many clever designs, while also taking into account performance.",-1),T=e("p",null,[o("此时，恰好 Bun 的 "),e("code",null,"1.0"),o(" 版本发布，我决定使用她来编写这个新框架，就是 Bao。")],-1),v=e("p",null,[o("At this time, Bun's "),e("code",null,"1.0"),o(" version was released. I decided to use her to write this new framework, which is Bao.")],-1),E=e("h2",{id:"设计哲学",tabindex:"-1"},[o("设计哲学 "),e("a",{class:"header-anchor",href:"#设计哲学","aria-label":'Permalink to "设计哲学"'},"​")],-1),B=e("h2",{id:"design-philosophy",tabindex:"-1"},[o("Design philosophy "),e("a",{class:"header-anchor",href:"#design-philosophy","aria-label":'Permalink to "Design philosophy"'},"​")],-1),P=e("p",null,[o("我崇尚 Go 语言之父 Rob Pike 的"),e("a",{href:"https://go.dev/talks/2015/simplicity-is-complicated.slide#1",target:"_blank",rel:"noreferrer"},'"大道至简"'),o("。")],-1),x=e("p",null,[o("I admire Rob Pike, the father of Go, "),e("a",{href:"https://go.dev/talks/2015/simplicity-is-complicated.slide#1",target:"_blank",rel:"noreferrer"},'"Simplicity is Complicated"'),o(".")],-1),I=e("p",null,"学习曲线，是我在设计 Bao 之初最关注的地方。我希望 Bao 能够尽可能的简单，即便是没有后端经验的前端开发者，也可以在 1 天之内学会 Bao 并开始编写你的后端代码。",-1),S=e("p",null,"The learning curve was the most important aspect I focused on when designing Bao. I hope that Bao can be as simple as possible, so that even front-end developers without backend experience can learn it within a day and start writing their backend code.",-1),A=e("p",null,[o("因此，我不打算使用 "),e("code",null,"Decorator"),o(" 或 "),e("code",null,"Annotation"),o(" 等糖，而是让开发者使用最简单最直观的方式来编写后端代码。")],-1),F=e("p",null,[o("Therefore, I don't intend to use sugars such as "),e("code",null,"Decorator"),o(" or "),e("code",null,"Annotation"),o(", but let developers use the simplest and most intuitive way to write backend code.")],-1),C=e("p",null,[o("我也希望尽可能地简化概念，Bao 摒弃了诸如 "),e("code",null,"DDD"),o("、"),e("code",null,"DI"),o("、"),e("code",null,"Router"),o("、"),e("code",null,"Controller"),o("、"),e("code",null,"Service"),o("、"),e("code",null,"Entity"),o("、"),e("code",null,"DAO"),o(" 等复杂的概念，而是以一种巧妙的方式，简化开发者的学习曲线。")],-1),D=e("p",null,[o("I also hope to simplify the concept as much as possible. Bao abandons complex concepts such as "),e("code",null,"DDD"),o(", "),e("code",null,"DI"),o(", "),e("code",null,"Router"),o(", "),e("code",null,"Controller"),o(", "),e("code",null,"Service"),o(", "),e("code",null,"Entity"),o(", "),e("code",null,"DAO"),o(", etc., but in a clever way, simplifies the developer's learning curve.")],-1),H=e("p",null,"Bao 也并非是那种，虽然轻量，一旦多人协作，代码就会变得一团乱麻的框架。Bao 有着良好的工程化支持，多人协作的场景在 Bao 设计时也是关注的重点。",-1),N=e("p",null,"Bao is not the kind of framework that, although lightweight, once multiple people collaborate, the code will become a mess. Bao has good engineering support, and scenarios where multiple people collaborate are also the focus of Bao's design.",-1),O=e("h2",{id:"为什么要使用-bao",tabindex:"-1"},[o("为什么要使用 Bao？ "),e("a",{class:"header-anchor",href:"#为什么要使用-bao","aria-label":'Permalink to "为什么要使用 Bao？"'},"​")],-1),z=e("h2",{id:"why-use-bao",tabindex:"-1"},[o("Why use Bao? "),e("a",{class:"header-anchor",href:"#why-use-bao","aria-label":'Permalink to "Why use Bao?"'},"​")],-1),L=e("p",null,"Bao 旨在保证高性能的同时，解决在传统后端开发过程中的痛点，让你在编码过程中，感受到的是舒适而非痛苦。解放你的大脑，降低心智负担，使你可以专注于你的业务。下面，我们来看举例一些实际的场景，如果你觉得这些点让你感受到了痛苦，不妨来试试 Bao。",-1),R=e("p",null,"Bao aims to ensure high performance while solving the pain points in the traditional backend development process, so that you can feel comfortable enough during the coding process. Free your brain, reduce mental burden, and allow you to focus on your business. Next, let's take a look at some actual scenarios. If you feel pain in these points, try Bao.",-1),U=e("h3",{id:"对接-api",tabindex:"-1"},[o("对接 API "),e("a",{class:"header-anchor",href:"#对接-api","aria-label":'Permalink to "对接 API"'},"​")],-1),J=e("h3",{id:"connect-to-api",tabindex:"-1"},[o("Connect to API "),e("a",{class:"header-anchor",href:"#connect-to-api","aria-label":'Permalink to "Connect to API"'},"​")],-1),W=e("p",null,"传统的后端工程中，最让人痛苦的地方，我觉得，莫过于是对接 API 阶段。",-1),G=e("p",null,"In traditional backend engineering, the most painful place, I think, is the API docking phase.",-1),M=e("p",null,"假设，我们要编写一个简单的新增数据接口，来看看会遇到哪些麻烦：",-1),q=e("p",null,"Suppose we want to write a simple interface for adding data to see what problems we will encounter:",-1),$=e("h4",{id:"第一个麻烦-序列化",tabindex:"-1"},[o("第一个麻烦：序列化 "),e("a",{class:"header-anchor",href:"#第一个麻烦-序列化","aria-label":'Permalink to "第一个麻烦：序列化"'},"​")],-1),V=e("h4",{id:"the-first-problem-serialization",tabindex:"-1"},[o("The first problem: Serialization "),e("a",{class:"header-anchor",href:"#the-first-problem-serialization","aria-label":'Permalink to "The first problem: Serialization"'},"​")],-1),j=e("p",null,[o("在前端，我们先将收集到的用户填入的新增数据，序列化为 "),e("code",null,"JSON"),o(" 并发送给后端的新增接口中。")],-1),Y=e("p",null,[o("In the front end, we first serialize the newly added data filled in by the user into "),e("code",null,"JSON"),o(" and send it to the newly added interface of the back end.")],-1),K=e("p",null,[o("此时我们遇到了第一个麻烦："),e("code",null,"JSON"),o(" 所支持的类型有限。")],-1),Q=e("p",null,[o("At this point we encountered the first problem: the types supported by "),e("code",null,"JSON"),o(" are limited.")],-1),X=e("p",null,[o("如果用户填入的数据包含 "),e("code",null,"Date"),o("，那么我们需要手动将时间转换为字符串或时间戳，然后再在后端手动还原它们。")],-1),Z=e("p",null,[o("If the data filled in by the user contains "),e("code",null,"Date"),o(", then we need to manually convert the time to a string or timestamp, and then manually restore them on the back end.")],-1),ee=e("p",null,[o("或许你还会用到 "),e("code",null,"bigint"),o("、"),e("code",null,"Set"),o("、"),e("code",null,"Map"),o("、"),e("code",null,"URL"),o("，而这些类型都需要你手动转换。")],-1),oe=e("p",null,[o("Perhaps you will also use "),e("code",null,"bigint"),o(", "),e("code",null,"Set"),o(", "),e("code",null,"Map"),o(", "),e("code",null,"URL"),o(", and these types all need to be converted manually.")],-1),te=e("p",null,[o("在 Bao 中，你不需要手动处理任何类型，甚至不需要编写 "),e("code",null,"JSON.stringify"),o("，Bao 会自动帮你处理。")],-1),ne=e("p",null,[o("In Bao, you don't need to manually process any types, or even write "),e("code",null,"JSON.stringify"),o(", Bao will automatically help you.")],-1),ae=e("h4",{id:"第二个麻烦-参数校验与类型安全",tabindex:"-1"},[o("第二个麻烦：参数校验与类型安全 "),e("a",{class:"header-anchor",href:"#第二个麻烦-参数校验与类型安全","aria-label":'Permalink to "第二个麻烦：参数校验与类型安全"'},"​")],-1),le=e("h4",{id:"the-second-problem-parameter-verification-and-type-safety",tabindex:"-1"},[o("The second problem: parameter verification and type safety "),e("a",{class:"header-anchor",href:"#the-second-problem-parameter-verification-and-type-safety","aria-label":'Permalink to "The second problem: parameter verification and type safety"'},"​")],-1),se=e("p",null,"当我们花精力处理了这些问题之后，我们遇到了第二个麻烦：我们不知道用户填入的数据是否符合我们的预期。",-1),ie=e("p",null,"After we spent energy dealing with these problems, we encountered the second problem: we don't know if the data filled in by the user meets our expectations.",-1),re=e("p",null,"用户的输入都是不可信的，有些参数是可选的、有些是必选的，有些数字的取值范围是有限的，有些字符串又有最大长度的限制。",-1),ce=e("p",null,"User input is untrustworthy. Some parameters are optional, some are required, some numbers have limited ranges, and some strings have maximum lengths.",-1),de=e("p",null,"我们需要继续花费精力，来校验用户的输入，以确保最终处理的数据是可靠的。",-1),he=e("p",null,"We need to continue to spend energy to verify the user's input to ensure that the data finally processed is reliable.",-1),pe=e("p",null,"在 Bao 中，所有的参数都是类型安全的。同时，你还可以通过泛型来限制参数是否可选，甚至是限制数字的取值范围、一个字符串是否是邮箱。",-1),ue=e("p",null,"In Bao, all parameters are type-safe. At the same time, you can also use generics to restrict whether parameters are optional, or even restrict the range of numbers, and whether a string is an email.",-1),_e=e("h4",{id:"第三个麻烦-typescript-类型",tabindex:"-1"},[o("第三个麻烦：TypeScript 类型 "),e("a",{class:"header-anchor",href:"#第三个麻烦-typescript-类型","aria-label":'Permalink to "第三个麻烦：TypeScript 类型"'},"​")],-1),me=e("h4",{id:"the-third-problem-typescript-type",tabindex:"-1"},[o("The third problem: TypeScript type "),e("a",{class:"header-anchor",href:"#the-third-problem-typescript-type","aria-label":'Permalink to "The third problem: TypeScript type"'},"​")],-1),ye=e("p",null,"当我们处理完这一切后，我们发现了第三个麻烦：",-1),fe=e("p",null,"When we have dealt with all this, we have found the third problem:",-1),be=e("p",null,"后端给我们的大概只是一份 API 文档，作为前端开发者，需要将这份文档手工转换为 TypeScript 类型。即便这些后端可能是由 TypeScript 编写的。",-1),ge=e("p",null,"The backend gives us only a document, as a front-end developer, we need to manually convert this document into TypeScript types. Even if these backends may be written in TypeScript.",-1),we=e("p",null,"而如果未来后端接口发生了变更，我们还需要手动同步修改 TypeScript 类型。后端人工通知前端开发者，然后再由不情愿的前端开发者去手动修改。",-1),ke=e("p",null,"And if the backend interface changes in the future, we also need to manually synchronize and modify the TypeScript type. The backend notifies the front-end developer manually, and then the reluctant front-end developer manually modifies it.",-1),Te=e("p",null,"在 Bao 中，你可以为前端构建出一个 npm 包，让前端开发者直接使用你的包，来与你通信，就像：",-1),ve=e("p",null,"In Bao, you can build an npm package for the front end, so that the front end developer can directly use your package to communicate with you, just like:",-1),Ee=e("div",{class:"language-ts vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"ts"),e("pre",{class:"shiki github-dark vp-code-dark"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"const"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#79B8FF"}},"result"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#F97583"}},"await"),e("span",{style:{color:"#E1E4E8"}}," client."),e("span",{style:{color:"#B392F0"}},"execute"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#9ECBFF"}},'"hello/world"'),e("span",{style:{color:"#E1E4E8"}},", { name: "),e("span",{style:{color:"#9ECBFF"}},'"alice"'),e("span",{style:{color:"#E1E4E8"}}," });")])])]),e("pre",{class:"shiki github-light vp-code-light"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D73A49"}},"const"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#005CC5"}},"result"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#D73A49"}},"="),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#D73A49"}},"await"),e("span",{style:{color:"#24292E"}}," client."),e("span",{style:{color:"#6F42C1"}},"execute"),e("span",{style:{color:"#24292E"}},"("),e("span",{style:{color:"#032F62"}},'"hello/world"'),e("span",{style:{color:"#24292E"}},", { name: "),e("span",{style:{color:"#032F62"}},'"alice"'),e("span",{style:{color:"#24292E"}}," });")])])])],-1),Be=e("div",{class:"language-ts vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"ts"),e("pre",{class:"shiki github-dark vp-code-dark"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"const"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#79B8FF"}},"result"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#F97583"}},"await"),e("span",{style:{color:"#E1E4E8"}}," client."),e("span",{style:{color:"#B392F0"}},"execute"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#9ECBFF"}},'"hello/world"'),e("span",{style:{color:"#E1E4E8"}},", { name: "),e("span",{style:{color:"#9ECBFF"}},'"alice"'),e("span",{style:{color:"#E1E4E8"}}," });")])])]),e("pre",{class:"shiki github-light vp-code-light"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D73A49"}},"const"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#005CC5"}},"result"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#D73A49"}},"="),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#D73A49"}},"await"),e("span",{style:{color:"#24292E"}}," client."),e("span",{style:{color:"#6F42C1"}},"execute"),e("span",{style:{color:"#24292E"}},"("),e("span",{style:{color:"#032F62"}},'"hello/world"'),e("span",{style:{color:"#24292E"}},", { name: "),e("span",{style:{color:"#032F62"}},'"alice"'),e("span",{style:{color:"#24292E"}}," });")])])])],-1),Pe=e("p",null,"包是可以自由定制的，你甚至可以将你的业务逻辑写在包中，譬如，当 Token 失效后自动刷新 Token。",-1),xe=e("p",null,"The package can be customized freely, and you can even write your business logic in the package, for example, automatically refresh the Token when the Token expires.",-1),Ie=e("h4",{id:"第四个麻烦-自动化测试",tabindex:"-1"},[o("第四个麻烦：自动化测试 "),e("a",{class:"header-anchor",href:"#第四个麻烦-自动化测试","aria-label":'Permalink to "第四个麻烦：自动化测试"'},"​")],-1),Se=e("h4",{id:"the-fourth-problem-automated-testing",tabindex:"-1"},[o("The fourth problem: automated testing "),e("a",{class:"header-anchor",href:"#the-fourth-problem-automated-testing","aria-label":'Permalink to "The fourth problem: automated testing"'},"​")],-1),Ae=e("p",null,"完成这一切后，运行我们的代码，哈！报错了！",-1),Fe=e("p",null,"After all this is done, run our code, ha! Error!",-1),Ce=e("p",null,"是的，通常后端没有自动化测试，我们需要手动调试接口，来验证我们的代码是否正确。",-1),De=e("p",null,"Yes, usually there is no automated testing on the back end, we need to manually debug the interface to verify that our code is correct.",-1),He=e("p",null,"而没有自动化测试的原因除了开发者不愿意编写测试之外，还有就是，除非在框架设计之初就重视测试，否则，这些操作很难被自动化。",-1),Ne=e("p",null,"And the reason for not having automated testing is that developers are unwilling to write tests, and also, unless testing is valued at the beginning of the framework design, otherwise, these operations are difficult to automate.",-1),Oe=e("p",null,"因为，你需要执行启动 Web Server、连接数据库、初始化数据、执行测试、清理数据、关闭 Web Server 这一系列操作。",-1),ze=e("p",null,"Because you need to perform a series of operations such as starting the Web Server, connecting to the database, initializing the data, executing the test, cleaning up the data, and closing the Web Server.",-1),Le=e("p",null,"Bao 在设计之初就考虑到了自动化测试，尽管不是必须的，但是，你可以很方便的为每个接口都编写一个测试文件。",-1),Re=e("p",null,"Bao considered automated testing at the beginning of the design. Although it is not necessary, you can easily write a test file for each interface.",-1),Ue=e("p",null,"同时，我们建议不使用诸如 Postman 等工具来调试你的 API 接口，而是通过运行你编写的测试文件来调试。",-1),Je=e("p",null,"At the same time, we recommend not using tools such as Postman to debug your API interface, but to debug by running the test file you wrote.",-1),We=e("h3",{id:"http-的复杂性与路由",tabindex:"-1"},[o("HTTP 的复杂性与路由 "),e("a",{class:"header-anchor",href:"#http-的复杂性与路由","aria-label":'Permalink to "HTTP 的复杂性与路由"'},"​")],-1),Ge=e("h3",{id:"the-complexity-of-http-and-routing",tabindex:"-1"},[o("The complexity of HTTP and routing "),e("a",{class:"header-anchor",href:"#the-complexity-of-http-and-routing","aria-label":'Permalink to "The complexity of HTTP and routing"'},"​")],-1),Me=e("p",null,"HTTP 功能很强大，同时又很复杂。",-1),qe=e("p",null,"HTTP is powerful and complex.",-1),$e=e("p",null,[o("例如，我们要考虑一个接口要采用 "),e("code",null,"GET"),o(" 还是 "),e("code",null,"POST"),o("，抑或是 "),e("code",null,"PUT"),o("、"),e("code",null,"PATCH"),o("、"),e("code",null,"DELETE"),o("。")],-1),Ve=e("p",null,[o("For example, we need to consider whether an interface should use "),e("code",null,"GET"),o(" or "),e("code",null,"POST"),o(", or "),e("code",null,"PUT"),o(", "),e("code",null,"PATCH"),o(", "),e("code",null,"DELETE"),o(".")],-1),je=e("p",null,[o("如果接口是 "),e("code",null,"GET"),o("，那么我们的参数不能直接序列化为 "),e("code",null,"JSON"),o(" 放在请求体中，而是需要转换成 URL Parameters，即 "),e("code",null,"foo?bar=baz&qux=fred"),o(" 的形式拼接在 URL 中，这会比 "),e("code",null,"JSON"),o(" 更糟：URL Parameters 无法区分数字与字符串以及其他类型，更不支持数组、对象深层嵌套，还有最大长度限制。")],-1),Ye=e("p",null,[o("If the interface is "),e("code",null,"GET"),o(", then our parameters cannot be directly serialized into "),e("code",null,"JSON"),o(" and placed in the request body, but need to be converted into URL Parameters, that is, the form of "),e("code",null,"foo?bar=baz&qux=fred"),o(" is spliced ​​in the URL, which is worse than "),e("code",null,"JSON"),o(": URL Parameters cannot distinguish between numbers and strings and other types, and do not support arrays, object deep nesting, and maximum length restrictions.")],-1),Ke=e("p",null,"鉴于 HTTP 的复杂性，传统许多框架都会提供路由的功能，通过编写路由来决定，一串用户输入的 URL 如何映射到某个实际的控制器。",-1),Qe=e("p",null,"Given the complexity of HTTP, many traditional frameworks provide routing functions, and write routes to determine how a string of user-entered URLs is mapped to an actual controller.",-1),Xe=e("p",null,"但 HTTP 的许多设计来源于上一个时代：那个时代还没有前端与后端的分工，HTML 页面是由后端拼接而成的。所以像动态路由、路由参数、重定向等功能，对于如今已经前后端分离、只需要提供 API 供前端调用的我们来说，是没有必要的。",-1),Ze=e("p",null,"But many of HTTP's designs come from the previous era: there was no division of labor between the front end and the back end at that time, and the HTML page was spliced ​​by the back end. So functions such as dynamic routing, routing parameters, redirection, etc., are unnecessary for us who have already separated the front and back ends and only need to provide APIs for the front end to call.",-1),eo=e("p",null,"而且，路由的存在有时也会令我们痛苦：我经常写好了接口但因为忘记添加路由，而导致刷新了半天都找不到页面，最后才回忆起添加路由。",-1),oo=e("p",null,"Moreover, the existence of routing sometimes makes us painful: I often write the interface well, but because I forgot to add the route, I can't find the page after refreshing for a long time, and finally remember to add the route.",-1),to=e("p",null,[o("Bao 遵循约定大于配置，很好的隐藏了 HTTP 的复杂性。你可以在 "),e("code",null,"/src/app"),o(" 中自由组织目录，其中所有的名为 "),e("code",null,"api.ts"),o(" 的文件，其中的每个函数都会被自动映射为一个接口。当然，这并非意味着你失去了对 HTTP 的控制，你依然可以自由定义接口的 HTTP 方法、状态码、返回值。")],-1),no=e("p",null,[o("Bao follows the principle of convention over configuration, and hides the complexity of HTTP very well. You can freely organize directories in "),e("code",null,"/src/app"),o(", and all files named "),e("code",null,"api.ts"),o(" will automatically map each function in it to an interface. Of course, this does not mean that you lose control of HTTP, you can still freely define the HTTP method, status code, and return value of the interface.")],-1),ao=e("h3",{id:"更多内容",tabindex:"-1"},[o("更多内容？ "),e("a",{class:"header-anchor",href:"#更多内容","aria-label":'Permalink to "更多内容？"'},"​")],-1),lo=e("h3",{id:"more",tabindex:"-1"},[o("More? "),e("a",{class:"header-anchor",href:"#more","aria-label":'Permalink to "More?"'},"​")],-1),so=e("p",null,"我相信你已经感受到了 Bao 的与众不同，除了上面的泛泛而谈，Bao 还在许多其他细节之处。继续阅读文档，你会发现更多的惊喜。",-1),io=e("p",null,"I believe you have already felt the difference of Bao. In addition to the above, Bao is also in many other details. Continue reading the documentation, you will find more surprises.",-1);function ro(co,ho,po,uo,_o,mo){const t=a("I18N");return l(),s("div",null,[i(t,null,{default:r(()=>[d,h,p,u,_,m,y,f,b,g,w,k,T,v,E,B,P,x,I,S,A,F,C,D,H,N,O,z,L,R,U,J,W,G,M,q,$,V,j,Y,K,Q,X,Z,ee,oe,te,ne,ae,le,se,ie,re,ce,de,he,pe,ue,_e,me,ye,fe,be,ge,we,ke,Te,ve,Ee,Be,Pe,xe,Ie,Se,Ae,Fe,Ce,De,He,Ne,Oe,ze,Le,Re,Ue,Je,We,Ge,Me,qe,$e,Ve,je,Ye,Ke,Qe,Xe,Ze,eo,oo,to,no,ao,lo,so,io]),_:1})])}const bo=n(c,[["render",ro]]);export{fo as __pageData,bo as default};
