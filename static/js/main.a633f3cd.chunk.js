(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){},203:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(26),o=a.n(r),i=(a(104),a(1)),c=a(2),l=a(4),m=a(3),d=a(5),u=a(9),p=a(27),v=a(85),h=a.n(v),b=a(86),f=a.n(b),E=a(87),g=a.n(E),w=a(88),N=a.n(w),y=a(89),j=a.n(y),O=a(90),_=a.n(O),k=a(91),C=a.n(k),S=a(92),x=a.n(S),L=a(93),q=a.n(L),A={users:[{id:1,name:"User 1",username:"user1",profile_img:C.a,topics:[],answer_ids:[]},{id:2,name:"User 2",username:"user2",profile_img:x.a,topics:[],answer_ids:[]},{id:3,name:"User 3",username:"user3",profile_img:q.a,topics:[],answer_ids:[]}],questions:[{id:1,title:"what is React ?",answered:!0,asked_by:"user1",answer_ids:[1],followers:0,tag:[]},{id:2,title:"what is Angular ?",answered:!0,asked_by:"user2",answer_ids:[1,3],followers:0,tag:[]},{id:4,title:"What is the value of 4 in binary ?",answered:!1,asked_by:"user1",answer_ids:[],followers:0,tag:[]},{id:3,title:"Why is the world so bad ?",answered:!0,asked_by:"user1",answer_ids:[4],followers:0,tag:[]},{id:5,title:"Who is the richest Harvard alumnus? ",answered:!1,asked_by:"user1",answer_ids:[],followers:0,tag:[]},{id:6,title:"Which company will fall first: Google, Apple, Facebook, Amazon, or Microsoft ?",answered:!1,asked_by:"user1",answer_ids:[],followers:0,tag:[]},{id:7,title:"What is port 21 stand for ?",answered:!1,asked_by:"user1",answer_ids:[],followers:0,tag:[]}],answers:[{id:1,answered_by:"user1",answer:" A web framework developed by Google.",upvotes:0,downvotes:0,accepted:!1,question_id:2,upvoters:[],downvoters:[],comments:[{user:"user2",comment:"got it :) "}]},{id:2,answered_by:"user2",answer:" A web framework developed by Facebook.",upvotes:0,downvotes:0,accepted:!1,question_id:1,upvoters:[],downvoters:[],comments:[]},{id:3,answered_by:"user2",answer:" I don't Know. that's why i am asking.",upvotes:0,downvotes:0,accepted:!1,question_id:2,upvoters:[],downvoters:[],comments:[]},{id:4,answered_by:"user3",answer:"Because A lots of shits are delivered to your brain by media on Daily basis .The news is Completely manipulated . Everything you hear, every single day , is designed by corporate media to do one thing only , to keep you living in fear .So you\u2019ll go out and spend money on those things you probably don't even need , so advertisers keep buying ads on their stations . <br /> if someone committed a crime then they highlight the religion of victim or criminal they say the victim is hindu or muslim or dalit ",upvotes:0,downvotes:0,accepted:!0,question_id:3,upvoters:[],downvoters:[],comments:[]}],topics:[{id:0,name:"animals",topic_img:h.a,question_ids:[]},{id:1,name:"biology",topic_img:N.a,question_ids:[]},{id:2,name:"education",topic_img:_.a,question_ids:[]},{id:3,name:"food",topic_img:j.a,question_ids:[]},{id:4,name:"geography",topic_img:g.a,question_ids:[]},{id:5,name:"space",topic_img:f.a,question_ids:[]}]},T=a(21),D=a.n(T),P=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.data,t=e.title,a=e.asked_by,n=e.answer_ids,r=e.id;return s.a.createElement("div",null,s.a.createElement("div",{className:"row source_code"},s.a.createElement("div",{className:"col-12 card m-2 container-p-5"},s.a.createElement("p",{className:"title"},s.a.createElement(u.b,{to:"/full_answer/"+r},t)),s.a.createElement("span",{className:"other_info"},0===n.length?s.a.createElement("b",null,"No answered yet"):s.a.createElement("b",null,n.length," Answer")),s.a.createElement("span",{className:"other_info"},"asked by ",s.a.createElement("span",null,s.a.createElement(u.b,{to:"/profile/"+a,className:"user"},a))))))}}]),t}(n.Component),H=a(41),I=a(96),M=a.n(I),W=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={search:""},a.searchHandler=function(e){e.preventDefault(),a.props.search&&a.props.searchMethod(a.state.search)},a.inputHandler=function(e){var t=e.target,n=t.name,s=t.value;a.setState(Object(H.a)({},n,s))},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light shadow-sm"},s.a.createElement(u.b,{to:"/home",className:"nav-link brand website nav-item"}," Quora "),s.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},s.a.createElement("span",{className:"navbar-toggler-icon"})),s.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarText"},s.a.createElement("ul",{className:"navbar-nav font mr-auto m_l"},s.a.createElement("li",{className:"nav-item"},s.a.createElement(u.b,{to:"/home",className:"nav-link"},"Home ")," ",s.a.createElement("span",{className:"sr-only"},"(current)")),s.a.createElement("li",{className:"nav-item"},s.a.createElement(u.b,{to:"/answers",className:"nav-link"},"Answers")),s.a.createElement("li",{className:"nav-item"},s.a.createElement(u.b,{to:"/notifications",className:"nav-link"},"Notifications")),s.a.createElement("form",{className:"form-inline my-2 my-lg-0 search nav-item ",method:"post",onSubmit:this.searchHandler},s.a.createElement("input",{className:"form-control mr-sm-2",name:"search",type:"search",placeholder:"Search","aria-label":"Search",onChange:this.inputHandler})),s.a.createElement("li",{className:"nav-item"},s.a.createElement(u.b,{to:"/ask",className:"nav-link"},"Ask")),s.a.createElement("li",{className:"nav-item"},s.a.createElement(u.b,{to:"/profile/user1",className:"nav-link"},s.a.createElement("img",{src:M.a,className:"img-circle nav_img",alt:"img"}))))))}}]),t}(n.PureComponent),B=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e="/topics/"+this.props.data.id;return s.a.createElement("div",null,s.a.createElement("div",{className:"row topic source_code"},s.a.createElement("div",{className:"col-12"},s.a.createElement(u.b,{className:"link_black",to:e},s.a.createElement("img",{src:this.props.data.topic_img,alt:"img",className:"topic_img"}),s.a.createElement("span",{className:"px-1"},this.props.data.name)))))}}]),t}(n.Component),F=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={isLoading:!1,data:A.topics},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=s.a.createElement("p",{className:"text-center"},"Loading...");return this.state.isLoading||(e=this.state.data.map(function(e){return s.a.createElement(B,{data:e,key:e.id})})),s.a.createElement("div",null,e)}}]),t}(n.PureComponent),R=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).searchAnswers=function(t){if(!e.state.isLoading){t=t.toLowerCase();var a=e.state.data.filter(function(e){return e.title.toLowerCase().indexOf(t)>-1});e.setState({data:a})}console.log(t)},e.state={data:[],isLoading:!0},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=A.questions.filter(function(e){return!1===e.answered});setTimeout(function(){e.setState({data:t,isLoading:!1})},1500)}},{key:"render",value:function(){var e=s.a.createElement("img",{src:D.a,alt:"loading",className:"img-responsive"});return this.state.isLoading||(e=this.state.data.map(function(e){return s.a.createElement(P,{data:e,key:e.id})})),s.a.createElement("div",null,s.a.createElement(W,{search:!0,searchMethod:this.searchAnswers}),s.a.createElement("div",{className:"container container-m-5"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-3"},s.a.createElement(F,null)),s.a.createElement("div",{className:"col-7"},e))))}}]),t}(n.PureComponent),J=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(R,null))}}]),t}(n.Component),U=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={user:"",isLoading:!0},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.username,a=null;t&&(a=A.users.filter(function(e){return e.username===t}),console.log(a)),a&&setTimeout(function(){e.setState({user:a[0],isLoading:!1})},1500)}},{key:"render",value:function(){var e=s.a.createElement("div",null,s.a.createElement(W,null),s.a.createElement("div",{className:"container m-3"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-7"},s.a.createElement("img",{src:D.a,alt:"loading",className:"img-responsive"})))));return this.state.isLoading||void 0!==this.state.user?this.state.isLoading||(e=s.a.createElement("div",null,s.a.createElement(W,null),s.a.createElement("header",null,s.a.createElement("div",{className:"container container-m-5"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-3"},s.a.createElement("img",{src:this.state.user.profile_img,alt:"img",className:"profile_img"})),s.a.createElement("div",{className:"col-7"},s.a.createElement("p",{className:"title source_code text-center"},this.state.user.name))))))):this.props.history.push("/404"),s.a.createElement("div",null,e)}}]),t}(n.Component),G=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(W,null),s.a.createElement("div",{className:"container m-3"},s.a.createElement("h1",{className:"text-center"},"404 Not Found !")))}}]),t}(n.Component),Q=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).searchAnswers=function(t){if(!e.state.isLoading){t=t.toLowerCase();var a=e.state.data.filter(function(e){return e.title.toLowerCase().indexOf(t)>-1});e.setState({data:a})}console.log(t)},e.state={data:[],isLoading:!0},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=A.questions.filter(function(e){return!0===e.answered});setTimeout(function(){e.setState({data:t,isLoading:!1})},700)}},{key:"render",value:function(){var e=s.a.createElement("img",{src:D.a,alt:"loading",className:"img-responsive"});return this.state.isLoading||(e=this.state.data.map(function(e){return s.a.createElement(P,{data:e,key:e.id})})),s.a.createElement("div",null,s.a.createElement(W,{search:!0,searchMethod:this.searchAnswers}),s.a.createElement("div",{className:"container container-m-5"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-3"},s.a.createElement(F,null)),s.a.createElement("div",{className:"col-7"},e))))}}]),t}(n.PureComponent),Y=a(36),z=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"block"},s.a.createElement("div",{className:"row m-auto"},s.a.createElement("span",{className:"paragraph float_right p-1"},this.props.data.comment),s.a.createElement("span",{className:"paragraph user float_right p-1"},s.a.createElement(u.b,{to:"/profile/"+this.props.data.user}," -: ",this.props.data.user))))}}]),t}(n.Component),K=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={upvotes:a.props.data.upvotes,downvotes:a.props.data.downvotes,upvoted:0,addComment:!1,answered_by:a.props.data.answered_by,answer:a.props.data.answer,accepted:a.props.data.accepted,comments:a.props.data.comments,comment:{user:"user1",comment:""}},a.addComment=function(){a.setState({addComment:!0})},a.postComment=function(e){e.preventDefault(),console.log(a.state.comment),a.setState(function(e){return{comments:[].concat(Object(Y.a)(e.comments),[e.comment]),comment:{user:"user1",comment:""},addComment:!1}})},a.handleInput=function(e){e.preventDefault();var t=e.target.value;a.setState({comment:{user:"user1",comment:t}})},a.upvote=function(){0!=a.state.upvoted&&-1!=a.state.upvoted||(a.state.upvotes>=0&&0==a.state.downvotes?a.setState(function(e){return{upvotes:e.upvotes+1,downvotes:e.downvotes,upvoted:e.upvoted+1}}):a.setState(function(e){return{upvotes:e.upvotes,downvotes:e.downvotes+1,upvoted:e.upvoted+1}}))},a.downvote=function(){0!=a.state.upvoted&&1!=a.state.upvoted||(a.state.upvotes>0?a.setState(function(e){return{upvotes:e.upvotes-1,downvotes:e.downvotes,upvoted:e.upvoted-1}}):a.setState(function(e){return{upvotes:e.upvotes,downvotes:e.downvotes-1,upvoted:e.upvoted-1}}))},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e="No comments yet !";this.state.comments.length>0&&(e=this.state.comments.map(function(e){return s.a.createElement(z,{data:e,key:e.comment})}));var t=s.a.createElement("div",{className:"font-post source_code card m-3"},s.a.createElement("div",{className:"row post_img"},s.a.createElement("div",{className:"col-2 mx-2"},s.a.createElement("div",{className:"row p-2"},s.a.createElement("button",{className:"btn btn-sm emoji",name:"upvotes",onClick:this.upvote},this.state.upvotes,s.a.createElement("span",{className:"emoji"},"\ud83d\udc4d")," ")),s.a.createElement("div",{className:"row p-2"},!0===this.state.accepted?s.a.createElement("span",{className:"accepted emoji",title:"accepted by user"},"\u2705"):null),s.a.createElement("div",{className:"row p-2"},s.a.createElement("button",{className:"btn btn-sm emoji",name:"downvotes",onClick:this.downvote},this.state.downvotes,s.a.createElement("span",{className:"emoji"},"\ud83d\udc4e"),"  "))),s.a.createElement("div",{className:"col-9 p-2"},s.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.answer},className:"paragraph"}),s.a.createElement("span",{className:"text-right paragraph user"},s.a.createElement(u.b,{to:"/profile/"+this.state.answered_by,className:"nav-link"},"-: ",this.state.answered_by)))),s.a.createElement("div",{className:"bg_comment p-0"},s.a.createElement("div",{className:"p-2"},e),s.a.createElement("div",{className:"row mx-2",style:{visibility:this.state.addComment?"hidden":"visible"}},s.a.createElement("button",{className:"btn btn-success btn-sm",onClick:this.addComment},"comment")),s.a.createElement("div",{className:"row",style:{display:this.state.addComment?"flex":"none"}},s.a.createElement("div",{className:"col-7"},s.a.createElement("input",{type:"text",className:"form-control paragraph",name:"comment",placeholder:"Comment.",value:this.state.comment.comment,onChange:this.handleInput})),s.a.createElement("div",{className:"col-2"},s.a.createElement("button",{className:"btn btn-success btn-sm",onClick:this.postComment},"post")))));return s.a.createElement("div",null,t)}}]),t}(n.PureComponent),X=(a(112),a(28)),$=a(97),V=a(56),Z=a.n(V),ee=a(98),te=a.n(ee),ae=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).uploadImageCallBack=function(e){return new Promise(function(t,a){var n=new XMLHttpRequest;n.open("POST","gs://my-blog-7b20c.appspot.com");var s=new FormData;s.append("image",e),n.send(s),n.addEventListener("load",function(){var e=JSON.parse(n.responseText);t(e)}),n.addEventListener("error",function(){var e=JSON.parse(n.responseText);a(e)})})},a.onEditorStateChange=function(e){a.setState({editorState:e,html:Z()(Object(X.convertToRaw)(e.getCurrentContent()))}),a.props.update(a.state.html)};var n=te()("<p>Type Something ...</p>");if(n){var s=X.ContentState.createFromBlockArray(n.contentBlocks),r=X.EditorState.createWithContent(s);a.state={editorState:r,html:Z()(Object(X.convertToRaw)(r.getCurrentContent()))}}return a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.editorState;return s.a.createElement("div",null,s.a.createElement("div",{className:"editor"},s.a.createElement($.Editor,{editorState:e,wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",onEditorStateChange:this.onEditorStateChange})),s.a.createElement("div",null,s.a.createElement("button",{className:"btn btn-primary btn-sm post_btn",onClick:this.props.submit},"post")))}}]),t}(n.Component),ne=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).closeEditor=function(){e.setState({openeditor:!1})},e.writeAnswer=function(){e.setState({openeditor:!0})},e.updateEditorContent=function(t){e.setState({editorContent:t})},e.addNewAnswer=function(){var t={id:A.answers.length+1,answered_by:"user1",answer:e.state.editorContent,upvotes:0,downvotes:0,accepted:!1,question_id:e.state.question_id,comments:[]};console.log(t),e.setState(function(e){return{data:[].concat(Object(Y.a)(e.data),[t]),openeditor:!1}})},e.state={data:[],isLoading:!0,title:"",openeditor:!1,question_id:"",editorContent:""},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0});var t=parseInt(this.props.match.params.id),a=A.answers.filter(function(e){return parseInt(e.question_id)===t}),n=A.questions.filter(function(e){return parseInt(e.id)===t});setTimeout(function(){e.setState({data:Object(Y.a)(a),isLoading:!1,title:n[0].title,question_id:t})},1e3)}},{key:"render",value:function(){var e=s.a.createElement("img",{src:D.a,alt:"loading",className:"img-responsive"}),t="",a="";return this.state.isLoading||(t=s.a.createElement("p",{className:"title source_code m-2 small_center"},this.state.title),a=s.a.createElement("div",{className:"m-3"},s.a.createElement("button",{onClick:this.writeAnswer,style:{display:this.state.openeditor?"none":"block"},className:"btn btn-primary"},"Write Your Answer\u270d\ufe0f")),e=Object.values(this.state.data).map(function(e,t){return s.a.createElement(K,{data:e,key:t})})),s.a.createElement("div",null,s.a.createElement(W,null),s.a.createElement("header",null,s.a.createElement("div",{className:"container container-m-5"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-3"},s.a.createElement(F,null)),s.a.createElement("div",{className:"col-8"},t,e,a,this.state.openeditor?s.a.createElement("div",{className:"card editor_card"},s.a.createElement("span",{className:"btn text-right",onClick:this.closeEditor},"\ud83d\uddbe"),s.a.createElement(ae,{update:this.updateEditorContent,submit:this.addNewAnswer})):null)))))}}]),t}(n.PureComponent),se=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(W,null),s.a.createElement("div",{className:"container container-m-5"},s.a.createElement("div",{className:"text-center source_code"},s.a.createElement("h5",null,"No Notifications"))))}}]),t}(n.Component),re=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={question:""},a.formHandler=function(e){e.preventDefault(),console.log(a.state.question)},a.inputHandler=function(e){var t=e.target,n=t.name,s=t.value;a.setState(Object(H.a)({},n,s))},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(W,null),s.a.createElement("div",{className:"container container-m-5"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-3"},s.a.createElement(F,null)),s.a.createElement("div",{className:"col-8"},s.a.createElement("form",{onSubmit:this.formHandler,method:"POST"},s.a.createElement("input",{type:"text",name:"question",className:"form-control source_code title m-2",placeholder:"What is Your Question ? ",onChange:this.inputHandler}),s.a.createElement("button",{className:"btn btn-primary m-2"},"submit"))))))}}]),t}(n.PureComponent),oe=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={data:[],isLoading:!0,title:"",id:parseInt(a.props.match.params.id)},a.updateData=function(){if(a.state.id>=A.topics.length)a.setState({data:[],isLoading:!1,title:"Topic Not Found"});else{console.log(a.state.id);var e=A.topics[a.state.id].question_ids,t=A.questions.filter(function(t){return e.forEach(function(e){if(t.id===e)return!0}),!1});a.setState({data:t,isLoading:!1,title:A.topics[a.state.id].name})}},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.match.params.id!=this.props.match.params.id&&this.setState({id:parseInt(e.match.params.id)})}},{key:"componentDidUpdate",value:function(e,t){t.id!=this.state.id&&this.updateData()}},{key:"componentDidMount",value:function(){this.updateData()}},{key:"render",value:function(){var e=s.a.createElement("img",{src:D.a,alt:"loading",className:"img-responsive"});return this.state.isLoading||(e=this.state.data.map(function(e){return s.a.createElement(P,{data:e,key:e.id})})),s.a.createElement("div",null,s.a.createElement(W,null),s.a.createElement("div",{className:"container  container-m-5"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-3"},s.a.createElement(F,null)),s.a.createElement("div",{className:"col-9"},s.a.createElement("p",{className:"title source_code p-3  card"},this.state.title))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-3"}),s.a.createElement("div",{className:"col-7"},e))))}}]),t}(n.PureComponent),ie=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement(u.a,null,s.a.createElement(p.a,{path:"/",exact:!0,component:J}),s.a.createElement(p.a,{path:"/home",component:J}),s.a.createElement(p.a,{path:"/profile/:username",component:U}),s.a.createElement(p.a,{path:"/answers",component:Q}),s.a.createElement(p.a,{path:"/full_answer/:id",component:ne}),s.a.createElement(p.a,{path:"/notifications",component:se}),s.a.createElement(p.a,{path:"/ask",component:re}),s.a.createElement(p.a,{path:"/topics/:id",component:oe}),s.a.createElement(p.a,{path:"/404",component:G}))}}]),t}(n.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},21:function(e,t,a){e.exports=a.p+"static/media/loading.e679eba0.gif"},85:function(e,t,a){e.exports=a.p+"static/media/animals.4c303152.jpg"},86:function(e,t,a){e.exports=a.p+"static/media/space.b8bc951f.jpg"},87:function(e,t,a){e.exports=a.p+"static/media/geography.67483d73.jpg"},88:function(e,t,a){e.exports=a.p+"static/media/biology.de429aa0.jpg"},89:function(e,t,a){e.exports=a.p+"static/media/food.de15806c.jpg"},90:function(e,t,a){e.exports=a.p+"static/media/education.f69e999b.jpg"},91:function(e,t,a){e.exports=a.p+"static/media/user1.8394618a.png"},92:function(e,t,a){e.exports=a.p+"static/media/user2.b576b7ca.jpg"},93:function(e,t,a){e.exports=a.p+"static/media/user3.953507ed.jpg"},96:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},99:function(e,t,a){e.exports=a(203)}},[[99,1,2]]]);
//# sourceMappingURL=main.a633f3cd.chunk.js.map