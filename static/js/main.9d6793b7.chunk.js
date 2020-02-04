(this["webpackJsonpluma-odds"]=this["webpackJsonpluma-odds"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),l=n(7),u=n.n(l),s=(n(13),n(14),n(1)),c=n(2),r=n(4),i=n(3),d=n(5),m=(a.Component,function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,l=new Array(a),u=0;u<a;u++)l[u]=arguments[u];return(n=Object(r.a)(this,(t=Object(i.a)(e)).call.apply(t,[this].concat(l)))).state={counter:0,probability:"",lumaOdds:0,until50:4159,until90:13815,input:""},n.reset=function(){n.setState({counter:0},(function(){console.log("Successfully reset the counter"),console.log(n.state.counter)}))},n.addOne=function(){n.setState({counter:n.state.counter+parseInt(1),until50:n.state.until50-1,until90:n.state.until90-1},(function(){n.setState({lumaOdds:100*(1-Math.pow(5999/6e3,n.state.counter))},(function(){console.log("Odds of getting a luma are",n.state.lumaOdds)})),console.log("Successfully added to the counter"),console.log(n.state.counter)}))},n.subtractOne=function(){0!==n.state.lumaOdds&&n.setState({counter:n.state.counter-1,until50:n.state.until50+1,until90:n.state.until90+1},(function(){n.setState({lumaOdds:100*(1-Math.pow(5999/6e3,n.state.counter))},(function(){console.log("Odds of getting a luma are",n.state.lumaOdds)})),console.log("Successfully subtracted from the counter"),console.log(n.state.counter)}))},n.showCounter=function(){return o.a.createElement("div",null,o.a.createElement("h1",{className:"beeg"},n.state.counter))},n.showProbability=function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"Odds of having gotten a Luma: ",n.state.lumaOdds.toFixed(3),"%"))},n.reset=function(){n.setState({counter:0,lumaOdds:0})},n.showUntil=function(){return o.a.createElement("div",null,o.a.createElement("p",null,"Until 50%: ",n.state.until50),o.a.createElement("p",null,"Until 90%: ",n.state.until90))},n.info=function(){console.log("heyyyy")},n.handleSubmit=function(t){console.log(n.state.input),n.setState({counter:parseInt(n.state.input)},(function(){n.setState({lumaOdds:100*(1-Math.pow(5999/6e3,n.state.counter)),until50:4159-n.state.input,until90:13815-n.state.input,input:""},(function(){console.log("Odds of getting a luma are",n.state.lumaOdds)}))})),t.preventDefault()},n.handleChange=function(t){n.setState({input:t.target.value})},n}return Object(d.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return o.a.createElement("div",null,this.showCounter(),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("label",null,"Manually set counter:",o.a.createElement("input",{type:"number",value:this.state.input,onChange:this.handleChange})),o.a.createElement("input",{type:"submit",value:"Submit"})),o.a.createElement("br",null),o.a.createElement("div",{className:"counter-buttons"},o.a.createElement("button",{className:"subtract",onClick:this.subtractOne},"-"),o.a.createElement("button",{className:"add",onClick:this.addOne},"+")),this.showProbability(),this.showUntil(),o.a.createElement("button",{className:"reset",onClick:this.reset},"Reset Counter"))}}]),e}(a.Component));var h=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Luma Counter"),o.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(o.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},8:function(t,e,n){t.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.9d6793b7.chunk.js.map