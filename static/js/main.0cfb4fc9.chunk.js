(this["webpackJsonpluma-odds"]=this["webpackJsonpluma-odds"]||[]).push([[0],[,,,,,,,,function(t,e,n){t.exports=n(16)},,,,,function(t,e,n){},function(t,e,n){t.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),l=n(2),s=n.n(l),u=(n(13),n(14),n(15),n(3)),c=n(4),r=n(6),i=n(5),d=n(7),m=function(t){function e(){var t,n;Object(u.a)(this,e);for(var a=arguments.length,l=new Array(a),s=0;s<a;s++)l[s]=arguments[s];return(n=Object(r.a)(this,(t=Object(i.a)(e)).call.apply(t,[this].concat(l)))).state={counter:0,probability:"",lumaOdds:0,until50:4159,until90:13815},n.reset=function(){n.setState({counter:0},(function(){console.log("Successfully reset the counter"),console.log(n.state.counter)}))},n.addOne=function(){n.setState({counter:n.state.counter+1,until50:n.state.until50-1,until90:n.state.until90-1},(function(){n.setState({lumaOdds:100*(1-Math.pow(5999/6e3,n.state.counter))},(function(){console.log("Odds of getting a luma are",n.state.lumaOdds)})),console.log("Successfully added to the counter"),console.log(n.state.counter)}))},n.subtractOne=function(){0!==n.state.lumaOdds&&n.setState({counter:n.state.counter-1,until50:n.state.until50+1,until90:n.state.until90+1},(function(){n.setState({lumaOdds:100*(1-Math.pow(5999/6e3,n.state.counter))},(function(){console.log("Odds of getting a luma are",n.state.lumaOdds)})),console.log("Successfully subtracted from the counter"),console.log(n.state.counter)}))},n.showCounter=function(){return o.a.createElement("div",null,o.a.createElement("h1",{className:"beeg"},n.state.counter))},n.showProbability=function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"Odds of having gotten a Luma: ",n.state.lumaOdds.toFixed(3),"%"))},n.reset=function(){n.setState({counter:0,lumaOdds:0})},n.showUntil=function(){return o.a.createElement("div",null,o.a.createElement("p",null,"Until 50%: ",n.state.until50),o.a.createElement("p",null,"Until 90%: ",n.state.until90))},n}return Object(d.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return o.a.createElement("div",null,this.showCounter(),o.a.createElement("br",null),o.a.createElement("button",{className:"subtract",onClick:this.subtractOne},"-"),o.a.createElement("button",{className:"add",onClick:this.addOne},"+"),this.showProbability(),this.showUntil(),o.a.createElement("button",{className:"reset",onClick:this.reset},"Reset Counter"))}}]),e}(a.Component);var h=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Temtem Luma Calculator"),o.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.0cfb4fc9.chunk.js.map