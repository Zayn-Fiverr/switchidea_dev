"use strict";window.chartColors={red:"rgb(255, 99, 132)",orange:"rgb(255, 159, 64)",yellow:"rgb(255, 205, 86)",green:"rgb(75, 192, 192)",blue:"rgb(22, 82, 240)",purple:"rgb(153, 102, 255)",grey:"rgb(201, 203, 207)"},function(r){var n=["January","February","March","April","May","June","July","August","September","October","November","December"],t=["#4dc9f6","#f67019","#f53794","#537bc4","#acc236","#166a8f","#00a950","#58595b","#8549ba"],e=r.Samples||(r.Samples={}),a=Chart.helpers.color;function o(r){var n=r||{};return n.min=n.min||0,n.max=n.max||1,n.from=n.from||[],n.count=n.count||8,n.decimals=n.decimals||8,n.continuity=n.continuity||1,n}e.utils={srand:function(r){this._seed=r},rand:function(r,n){var t=this._seed;return r=void 0===r?0:r,n=void 0===n?1:n,this._seed=(9301*t+49297)%233280,r+this._seed/233280*(n-r)},numbers:function(r){var n,t,e=o(r),a=Math.pow(10,e.decimals)||0,i=[];for(n=0;n<e.count;++n)t=(e.from[n]||0)+this.rand(e.min,e.max),this.rand()<=e.continuity?i.push(Math.round(a*t)/a):i.push(null);return i},labels:function(r){var n,t=r||{},e=t.min||0,a=t.max||100,o=t.count||8,i=(a-e)/o,u=t.decimals||8,s=Math.pow(10,u)||0,c=t.prefix||"",l=[];for(n=e;n<a;n+=i)l.push(c+Math.round(s*n)/s);return l},months:function(r){var t,e,a=r||{},o=a.count||12,i=a.section,u=[];for(t=0;t<o;++t)e=n[Math.ceil(t)%12],u.push(e.substring(0,i));return u},color:function(r){return t[r%t.length]},transparentize:function(r,n){var t=void 0===n?.5:1-n;return a(r).alpha(t).rgbString()}},window.randomScalingFactor=function(){return Math.round(e.utils.rand(-100,100))},e.utils.srand(Date.now())}(this);