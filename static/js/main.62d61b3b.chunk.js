(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{110:function(e,t,n){"use strict";n.r(t);var i=n(1),o=n.n(i),r=n(29),a=n.n(r),s=(n(96),n(46)),c=n(35),u=n(36),l=n(58),d=n(55),h=(n(97),n(2)),f=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.col,n=e.isFinish,i=e.isStart,o=e.isWall,r=e.onMouseDown,a=e.onMouseEnter,s=e.onMouseUp,c=e.row,u=n?"node-finish":i?"node-start":o?"node-wall":"";return Object(h.jsx)("div",{id:"node-".concat(c,"-").concat(t),className:"node ".concat(u),onMouseDown:function(){return r(c,t)},onMouseEnter:function(){return a(c,t)},onMouseUp:function(){return s(c,t)}})}}]),n}(i.Component);function v(e,t,n){for(var i=[],o=[t];o.length;){var r=o.shift();if(r===n)return i;if(!r.isWall&&(r.isStart||!r.isVisited)){r.isVisited=!0,i.push(r);var a=r.col,s=r.row,c=void 0;s>0&&((c=e[s-1][a]).isVisited||(c.previousNode=r,o.push(c))),s<e.length-1&&((c=e[s+1][a]).isVisited||(c.previousNode=r,o.push(c))),a>0&&((c=e[s][a-1]).isVisited||(c.previousNode=r,o.push(c))),a<e[0].length-1&&((c=e[s][a+1]).isVisited||(c.previousNode=r,o.push(c)))}}}var p=n(25);function j(e,t,n){var i=[];t.distance=0;for(var o=function(e){var t,n=[],i=Object(p.a)(e);try{for(i.s();!(t=i.n()).done;){var o,r=t.value,a=Object(p.a)(r);try{for(a.s();!(o=a.n()).done;){var s=o.value;n.push(s)}}catch(c){a.e(c)}finally{a.f()}}}catch(c){i.e(c)}finally{i.f()}return n}(e);o.length;){b(o);var r=o.shift();if(!r.isWall){if(r.distance===1/0)return i;if(r.isVisited=!0,i.push(r),r===n)return i;m(r,e)}}}function b(e){e.sort((function(e,t){return e.distance-t.distance}))}function m(e,t){var n,i=function(e,t){var n=[],i=e.col,o=e.row;o>0&&n.push(t[o-1][i]);o<t.length-1&&n.push(t[o+1][i]);i>0&&n.push(t[o][i-1]);i<t[0].length-1&&n.push(t[o][i+1]);return n.filter((function(e){return!e.isVisited}))}(e,t),o=Object(p.a)(i);try{for(o.s();!(n=o.n()).done;){var r=n.value;r.distance=e.distance+1,r.previousNode=e}}catch(a){o.e(a)}finally{o.f()}}function g(e,t,n){if(!t||!n||t===n)return!1;var i=[],o=[];for(o.push(t);o.length;){var r=o.pop();if(r===n)return i;if(!r.isWall&&(r.isStart||!r.isVisited)){r.isVisited=!0,i.push(r);var a=r.col,s=r.row,c=void 0;s>0&&((c=e[s-1][a]).isVisited||(c.previousNode=r,o.push(c))),s<e.length-1&&((c=e[s+1][a]).isVisited||(c.previousNode=r,o.push(c))),a>0&&((c=e[s][a-1]).isVisited||(c.previousNode=r,o.push(c))),a<e[0].length-1&&((c=e[s][a+1]).isVisited||(c.previousNode=r,o.push(c)))}}}function x(e,t,n){if(!t||!n||t===n)return!1;var i=[],o=[];for(t.distance=0,i.push(t);0!==i.length;){i.sort((function(e,t){return e.totalDistance-t.totalDistance}));var r=i.shift();if(r===n)return o;r.isVisited=!0,o.push(r);var a,s=O(r,e),c=Object(p.a)(s);try{for(c.s();!(a=c.n()).done;){var u=a.value,l=r.distance+1;y(u,i)?(i.unshift(u),u.distance=l,u.totalDistance=l+M(u,n),u.previousNode=r):l<u.distance&&(u.distance=l,u.totalDistance=l+M(u,n),u.previousNode=r)}}catch(d){c.e(d)}finally{c.f()}}return o}function O(e,t){var n=[],i=e.row,o=e.col;return o!==t[0].length-1&&n.push(t[i][o+1]),i!==t.length-1&&n.push(t[i+1][o]),0!==o&&n.push(t[i][o-1]),0!==i&&n.push(t[i-1][o]),n.filter((function(e){return!e.isWall&&!e.isVisited}))}function y(e,t){var n,i=Object(p.a)(t);try{for(i.s();!(n=i.n()).done;){var o=n.value;if(o.row===e.row&&o.col===e.col)return!1}}catch(r){i.e(r)}finally{i.f()}return!0}function M(e,t){return Math.abs(e.row-t.row)+Math.abs(e.col-t.col)}function w(e,t,n){if(!t||!n||t===n)return!1;var i=[],o=[];for(t.distance=0,i.push(t);0!==i.length;){i.sort((function(e,t){return e.totalDistance-t.totalDistance}));var r=i.shift();if(r===n)return o;r.isVisited=!0,o.push(r);var a,s=k(r,e),c=Object(p.a)(s);try{for(c.s();!(a=c.n()).done;){var u=a.value,l=r.distance+1;S(u,i)?(i.unshift(u),u.distance=l,u.totalDistance=C(u,n),u.previousNode=r):l<u.distance&&(u.distance=l,u.totalDistance=C(u,n),u.previousNode=r)}}catch(d){c.e(d)}finally{c.f()}}return o}function k(e,t){var n=[],i=e.row,o=e.col;return 0!==i&&n.push(t[i-1][o]),o!==t[0].length-1&&n.push(t[i][o+1]),i!==t.length-1&&n.push(t[i+1][o]),0!==o&&n.push(t[i][o-1]),n.filter((function(e){return!e.isWall&&!e.isVisited}))}function C(e,t){return Math.abs(e.row-t.row)+Math.abs(e.col-t.col)}function S(e,t){var n,i=Object(p.a)(t);try{for(i.s();!(n=i.n()).done;){var o=n.value;if(o.row===e.row&&o.col===e.col)return!1}}catch(r){i.e(r)}finally{i.f()}return!0}function z(e,t,n){for(var i=[],o=t,r=e.length*e[0].length,a=0,s=0;;){if(o.isVisited=!0,i.push(o),o===n)return i;var c=N(o,e,n),u=V(e);if(u===r-2)return i;if(u>a)a=u,s=0;else if((u=a)&&(s+=1)>1e3)return i;c.previousNode=o,o=c}}function N(e,t,n){var i=[],o=e.row,r=e.col;0!==o&&i.push(t[o-1][r]),r!==t[0].length-1&&i.push(t[o][r+1]),o!==t.length-1&&i.push(t[o+1][r]),0!==r&&i.push(t[o][r-1]);var a=i.filter((function(e){return!e.isStart&&!e.isWall})),s=a.filter((function(e){return!e.isVisited}));return s.length>0?s[Math.floor(Math.random()*s.length)]:a[Math.floor(Math.random()*a.length)]}function V(e){var t,n=0,i=Object(p.a)(e);try{for(i.s();!(t=i.n()).done;){var o,r=t.value,a=Object(p.a)(r);try{for(a.s();!(o=a.n()).done;){var s=o.value;(s.isVisited||s.isWall)&&(n+=1)}}catch(c){a.e(c)}finally{a.f()}}}catch(c){i.e(c)}finally{i.f()}return n}n(99);var D=n(154),E=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).animateRandomWalk=function(t){for(var n=function(n){if(n===t.length)return setTimeout((function(){e.setState({visualizingAlgorithm:!1})}),n*e.state.speed),{v:void 0};var i=t[n];if(n===t.length-1)return setTimeout((function(){document.getElementById("node-".concat(i.row,"-").concat(i.col)).className="node node-finish-reached"}),25*n),"continue";setTimeout((function(){document.getElementById("node-".concat(i.row,"-").concat(i.col)).className="node node-visited"}),25*n)},i=1;i<=t.length;i++){var o=n(i);if("continue"!==o&&"object"===typeof o)return o.v}},e.state={grid:[],mouseIsPressed:!1},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=I();this.setState({grid:e})}},{key:"handleMouseDown",value:function(e,t){var n=P(this.state.grid,e,t);this.setState({grid:n,mouseIsPressed:!0})}},{key:"handleMouseEnter",value:function(e,t){if(this.state.mouseIsPressed){var n=P(this.state.grid,e,t);this.setState({grid:n})}}},{key:"handleMouseUp",value:function(){this.setState({mouseIsPressed:!1})}},{key:"animateAlgo",value:function(e,t){for(var n=this,i=function(i){if(i===e.length)return setTimeout((function(){n.animateShortestPath(t)}),25*i),{v:void 0};setTimeout((function(){var t=e[i];document.getElementById("node-".concat(t.row,"-").concat(t.col)).className="node node-visited"}),25*i)},o=0;o<=e.length;o++){var r=i(o);if("object"===typeof r)return r.v}}},{key:"animateShortestPath",value:function(e){for(var t=function(t){setTimeout((function(){var n=e[t];document.getElementById("node-".concat(n.row,"-").concat(n.col)).className="node node-shortest-path"}),25*t)},n=0;n<e.length;n++)t(n)}},{key:"visualize",value:function(e){var t=this.state.grid,n=t[10][15],i=t[10][35],o="";if(e===j?o=j(t,n,i):e===v?o=v(t,n,i):e===g?o=g(t,n,i):e===x?o=x(t,n,i):e===w?o=w(t,n,i):e===z&&(o=z(t,n,i)),e===z)this.animateRandomWalk(o);else{var r=function(e){for(var t=[],n=e;null!==n;)t.unshift(n),n=n.previousNode;return t}(i);this.animateAlgo(o,r)}}},{key:"render",value:function(){var e=this,t=this.state,n=t.grid,i=t.mouseIsPressed;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(D.a,{}),Object(h.jsx)("div",{className:"grid",children:n.map((function(t,n){return Object(h.jsx)("div",{className:"rowid",children:t.map((function(t,n){var o=t.row,r=t.col,a=t.isFinish,s=t.isStart,c=t.isWall;return Object(h.jsx)(f,{col:r,isFinish:a,isStart:s,row:o,isWall:c,mouseIsPressed:i,onMouseDown:function(t,n){return e.handleMouseDown(t,n)},onMouseEnter:function(t,n){return e.handleMouseEnter(t,n)},onMouseUp:function(){return e.handleMouseUp()}},n)}))},n)}))})]})}}]),n}(i.Component),I=function(){for(var e=[],t=0;t<24;t++){for(var n=[],i=0;i<62;i++)n.push(W(i,t));e.push(n)}return e},W=function(e,t){return{col:e,row:t,isStart:10===t&&15===e,isFinish:10===t&&35===e,distance:1/0,previousNode:null}},P=function(e,t,n){var i=e.slice(),o=i[t][n],r=Object(s.a)(Object(s.a)({},o),{},{isWall:!o.isWall});return i[t][n]=r,i},B=n(17),T=n(159),A=n(168),F=n(169),R=n(170),G=n(165),U=n(171),L=n(163),J=n(158),H=n(60),q=n.n(H),K=n(166),Q=n(160),X=n.p+"static/media/logo.ab9bbf88.svg",Y=Object(Q.a)({logo:{width:"10rem",height:"auto"}}),Z=Object(K.a)((function(e){return Object(h.jsx)(T.a,Object(s.a)({elevation:0,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"}},e))}))((function(e){return{"& .MuiPaper-root":{borderRadius:6,minWidth:180,boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px","& .MuiMenu-list":{padding:"4px 0"},"& .MuiMenuItem-root":{"& .MuiSvgIcon-root":{fontSize:18,marginRight:e.theme.spacing(1.5)}}}}}));var $=function(){var e=Y(),t=Object(i.useState)(null),n=Object(B.a)(t,2),o=n[0],r=n[1],a=Object(i.useState)(null),s=Object(B.a)(a,2),c=s[0],u=s[1],l=Object(i.useState)(null),d=Object(B.a)(l,2),f=d[0],v=d[1],p=Boolean(o),j=Boolean(c),b=Boolean(f),m=function(){r(null)},g=function(){u(null)},x=function(){v(null)},O=Object(i.useState)(""),y=Object(B.a)(O,2);return y[0],y[1],Object(h.jsx)("div",{children:Object(h.jsx)(A.a,{position:"static",style:{backgroundColor:"#050A30"},children:Object(h.jsxs)(F.a,{children:[Object(h.jsx)(R.a,{edge:"start","aria-label":"app",children:Object(h.jsx)("img",{src:X,alt:"logo",style:{width:"12rem",height:"auto"}})}),Object(h.jsx)(G.a,{variant:"h6",component:"div",sx:{flexGrow:1}}),Object(h.jsx)(U.a,{id:"demo-customized-button","aria-controls":"demo-customized-menu","aria-haspopup":"true","aria-expanded":p?"true":void 0,variant:"contained",disableElevation:!0,onClick:function(e){r(e.currentTarget)},style:{backgroundColor:"white",color:"#050A30",fontSize:"16px",textTransform:"none"},endIcon:Object(h.jsx)(q.a,{}),children:"Algorithm"}),Object(h.jsxs)(Z,{id:"demo-customized-menu",MenuListProps:{"aria-labelledby":"demo-customized-button"},anchorEl:o,open:p,onClose:m,children:[Object(h.jsx)(L.a,{onClick:m,children:"Dijkstra"}),Object(h.jsx)(L.a,{onClick:m,children:"Breadth First Search"}),Object(h.jsx)(L.a,{onClick:m,children:"Depth First Search"}),Object(h.jsx)(J.a,{sx:{my:.5}}),Object(h.jsx)(L.a,{onClick:m,children:"A *"}),Object(h.jsx)(L.a,{onClick:m,children:"Greedy Best First Search"}),Object(h.jsx)(L.a,{onClick:m,children:"Random Walk"})]}),Object(h.jsx)(U.a,{sx:{ml:2},id:"demo-customized-button-2","aria-controls":"demo-customized-menu-2","aria-haspopup":"true","aria-expanded":j?"true":void 0,variant:"contained",disableElevation:!0,onClick:function(e){u(e.currentTarget)},className:e.btn,style:{backgroundColor:"blue",color:"white"},endIcon:Object(h.jsx)(q.a,{}),children:"Maze"}),Object(h.jsxs)(Z,{id:"demo-customized-menu-2",MenuListProps:{"aria-labelledby":"demo-customized-button-2"},anchorEl:c,open:j,onClose:g,children:[Object(h.jsx)(L.a,{onClick:g,children:"Random Maze"}),Object(h.jsx)(L.a,{onClick:g,children:"Recursive Division Maze"}),Object(h.jsx)(L.a,{onClick:g,children:"Vertical Division Maze"}),Object(h.jsx)(L.a,{onClick:g,children:"Horizontal Division Maze"})]}),Object(h.jsx)(U.a,{sx:{ml:2},id:"demo-customized-button-3","aria-controls":"demo-customized-menu-3","aria-haspopup":"true","aria-expanded":b?"true":void 0,variant:"contained",disableElevation:!0,onClick:function(e){v(e.currentTarget)},className:e.btn,style:{backgroundColor:"orange",color:"white"},endIcon:Object(h.jsx)(q.a,{}),children:"Speed"}),Object(h.jsxs)(Z,{id:"demo-customized-menu-3",MenuListProps:{"aria-labelledby":"demo-customized-button-3"},anchorEl:f,open:b,onClose:x,children:[Object(h.jsx)(L.a,{onClick:x,children:"Slow"}),Object(h.jsx)(L.a,{onClick:x,children:"Medium"}),Object(h.jsx)(L.a,{onClick:x,children:"Fast"})]}),Object(h.jsx)(G.a,{variant:"h6",component:"div",sx:{flexGrow:1}}),Object(h.jsx)(U.a,{variant:"outlined",sx:{ml:2},style:{borderColor:"lightgreen",color:"lightgreen"},children:"Visualize Algorithm"}),Object(h.jsx)(U.a,{variant:"contained",sx:{ml:2},style:{backgroundColor:"green"},children:"Generate Maze"}),Object(h.jsx)(U.a,{variant:"contained",sx:{ml:2},style:{backgroundColor:"darkred"},children:"Clear Grid"})]})})})};var _=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)($,{}),Object(h.jsx)(E,{})]})};a.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(_,{})}),document.getElementById("root"))},96:function(e,t,n){},97:function(e,t,n){},99:function(e,t,n){}},[[110,1,2]]]);
//# sourceMappingURL=main.62d61b3b.chunk.js.map