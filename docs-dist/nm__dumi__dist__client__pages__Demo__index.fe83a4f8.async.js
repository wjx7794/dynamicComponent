"use strict";(self.webpackChunkdynamicComponent=self.webpackChunkdynamicComponent||[]).push([[9],{65149:function(y,m,e){e.r(m),e.d(m,{default:function(){return E}});var o=e(53683),n=e(67294),D=e(52289),g=function(){var O=(0,o.UO)(),t=O.id,a=(0,o.FO)(t),R=(0,D.m)({id:t,component:a.component,renderOpts:a.renderOpts}),h=R.canvasRef,u=a||{},v=u.component,d=u.renderOpts,r=(0,o.kw)(t),i=r.node,c=r.setSource,s=r.error,f=r.loading,w=i||(d!=null&&d.renderer?(0,n.createElement)("div",{ref:h}):v&&(0,n.createElement)(v));return(0,n.useEffect)(function(){var l=function(p){p.data.type==="dumi.liveDemo.setSource"&&c(p.data.value)};return window.addEventListener("message",l),function(){return window.removeEventListener("message",l)}},[c]),(0,n.useEffect)(function(){!f&&(s||i)&&window.postMessage({type:"dumi.liveDemo.compileDone",value:{err:s}})},[s,i,f]),w},E=g}}]);
