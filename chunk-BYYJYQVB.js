import{$ as Me,$a as Va,$b as pr,$c as Fr,A as Zt,Aa as d,Ac as xr,B as tt,Ba as m,Bb as ir,Bc as Le,C as Jt,Ca as z,Cb as rr,Cc as pt,D as ne,Da as ke,Dc as Dr,E as I,Ea as Te,Ec as Gn,F as Yi,Fa as tn,Fb as or,Fc as Yn,G as s,Ga as G,Gb as On,Gc as Pt,H as O,Ha as Fe,Hc as on,I as R,Ia as y,Ib as it,Ic as sn,J as yt,Ja as In,Jb as Rn,Jc as ln,K as Na,Ka as b,Kc as wr,L as W,La as je,Lb as De,Lc as Sr,M as mt,Ma as se,Mb as Ve,Mc as ja,N as Ta,Na as Ke,Nb as Qe,Nc as kt,O as S,Oa as J,Ob as Xe,Oc as Mr,P as X,Pa as D,Pb as Rt,Pc as At,Qa as w,Qb as sr,Qc as Ga,R as E,Ra as Zi,Rb as _e,Rc as Ya,S as nt,Sa as Ji,Sb as wt,Sc as $e,T as En,Ta as Ra,Tb as Ba,U as Ce,Ua as Ae,Ub as rn,Uc as kr,V as be,Va as Oe,Vb as Vn,Vc as Ar,W as Ne,Wa as k,Wb as lr,Wc as Er,X as j,Xa as Ge,Xb as dr,Xc as Ir,Y as $i,Ya as g,Yb as cr,Yc as Nr,Za as Y,Zb as mr,Zc as $n,_ as qi,_a as ee,_b as ur,_c as Tr,a as H,aa as u,ab as Nn,ac as hr,ad as qn,b as ve,ba as at,bb as Tn,bc as Pn,bd as Wn,c as ye,ca as Wi,cb as Fn,cc as Vt,cd as $a,d as kn,da as ae,db as te,dc as Pe,e as P,ea as Ct,eb as er,ec as fr,ed as ot,f as Ia,fa as xt,fc as gr,fd as dn,g as An,ga as re,gc as de,h as Pi,ha as Ui,hb as tr,hc as br,i as ct,ia as en,ic as za,ja as Fa,jb as xe,jc as _r,k as _t,ka as B,kb as Re,kc as pe,la as ie,lb as nn,lc as rt,m as Ft,ma as V,mb as an,mc as Ha,n as Li,na as Ki,nb as nr,nc as Ln,o as Bi,oa as Qi,ob as U,oc as St,p as Se,pa as Z,pc as Ee,q as fe,qa as oe,qb as K,qc as Be,ra as Oa,rb as Dt,rc as Bn,s as zi,sa as Xi,sb as Pa,sc as zn,t as Ye,ta as A,tb as La,tc as vr,u as Hi,ua as N,ub as ar,uc as Hn,v as ji,va as T,vc as yr,w as Gi,wa as ut,wb as Ot,wc as Cr,x as ge,xa as me,xc as Ze,y as vt,ya as ue,yc as Mt,z as Q,za as C,zc as jn}from"./chunk-H62ZJT3L.js";var qa=class{_box;_destroyed=new P;_resizeSubject=new P;_resizeObserver;_elementObservables=new Map;constructor(a){this._box=a,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(a){return this._elementObservables.has(a)||this._elementObservables.set(a,new kn(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(a,{box:this._box}),()=>{this._resizeObserver?.unobserve(a),t.unsubscribe(),this._elementObservables.delete(a)}}).pipe(fe(e=>e.some(t=>t.target===a)),ji({bufferSize:1,refCount:!0}),Q(this._destroyed))),this._elementObservables.get(a)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Un=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=s(X);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let i=t?.box||"content-box";return this._observers.has(i)||this._observers.set(i,new qa(i)),this._observers.get(i).observe(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Ne({token:n,factory:n.\u0275fac})}return n})();var ps=new I("MatTabContent"),Za=(()=>{class n{template=s(at);static \u0275fac=function(t){return new(t||n)};static \u0275dir=V({type:n,selectors:[["","matTabContent",""]],features:[te([{provide:ps,useExisting:n}])]})}return n})(),hs=new I("MatTabLabel"),Pr=new I("MAT_TAB"),fs=(()=>{class n extends xr{_closestTab=s(Pr,{optional:!0});static \u0275fac=(()=>{let e;return function(i){return(e||(e=be(n)))(i||n)}})();static \u0275dir=V({type:n,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[te([{provide:hs,useExisting:n}]),Z]})}return n})(),Lr=new I("MAT_TAB_GROUP"),Ja=(()=>{class n{_viewContainerRef=s(en);_closestTabGroup=s(Lr,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new P;position=null;origin=null;isActive=!1;constructor(){s(it).load(Ln)}ngOnChanges(e){(Object.hasOwn(e,"textLabel")||Object.hasOwn(e,"disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Mt(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=(function(){let e=["*"];function t(i,r){i&1&&se(0)}return B({type:n,selectors:[["mat-tab"]],contentQueries:function(r,o,l){if(r&1&&Ke(l,fs,5)(l,Za,7,at),r&2){let c;D(c=w())&&(o.templateLabel=c.first),D(c=w())&&(o._explicitContent=c.first)}},viewQuery:function(r,o){if(r&1&&J(at,7),r&2){let l;D(l=w())&&(o._implicitContent=l.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(r,o){r&2&&A("id",null)},inputs:{disabled:[2,"disabled","disabled",K],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[te([{provide:Pr,useExisting:n}]),Ce],ngContentSelectors:e,decls:1,vars:0,template:function(r,o){r&1&&(je(),Oa(0,t,1,0,"ng-template"))},encapsulation:2,changeDetection:1})})()}return n})(),Wa="mdc-tab-indicator--active",Or="mdc-tab-indicator--no-transition",Ka=class{_items;_currentItem;constructor(a){this._items=a}hide(){this._items.forEach(a=>a.deactivateInkBar()),this._currentItem=void 0}alignToElement(a){let e=this._items.find(i=>i.elementRef.nativeElement===a),t=this._currentItem;if(e!==t&&(t?.deactivateInkBar(),e)){let i=t?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(i),this._currentItem=e}}},gs=(()=>{class n{_elementRef=s(j);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let t=this._elementRef.nativeElement;if(!e||!t.getBoundingClientRect||!this._inkBarContentElement){t.classList.add(Wa);return}let i=t.getBoundingClientRect(),r=e.width/i.width,o=e.left-i.left;t.classList.add(Or),this._inkBarContentElement.style.setProperty("transform",`translateX(${o}px) scaleX(${r})`),t.getBoundingClientRect(),t.classList.remove(Or),t.classList.add(Wa),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(Wa)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,t=this._inkBarElement=e.createElement("span"),i=this._inkBarContentElement=e.createElement("span");t.className="mdc-tab-indicator",i.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",t.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=V({type:n,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",K]}})}return n})();var Br=(()=>{class n extends gs{elementRef=s(j);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(i){return(e||(e=be(n)))(i||n)}})();static \u0275dir=V({type:n,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(t,i){t&2&&(A("aria-disabled",!!i.disabled),k("mat-mdc-tab-disabled",i.disabled))},inputs:{disabled:[2,"disabled","disabled",K]},features:[Z]})}return n})(),Rr={passive:!0},bs=650,_s=100;function Ua(n){let a=n+"";return/^[0-9]+(?:\.[0-9]+)?$/.test(a)?`${n}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(a)?a:""}var vs=(()=>{class n{_elementRef=s(j);_changeDetectorRef=s(U);_viewportRuler=s(Yn);_dir=s(De,{optional:!0});_ngZone=s(X);_platform=s(_e);_sharedResizeObserver=s(Un);_injector=s(W);_renderer=s(ae);_animationsDisabled=pe();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new P;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new P;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let t=isNaN(e)?0:e;this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}_selectedIndex=0;selectFocusedIndex=new S;indexFocused=new S;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),Rr),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),Rr))}ngAfterContentInit(){let e=this._dir?this._dir.change:ct("ltr"),t=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(zi(32),Q(this._destroyed)),i=this._viewportRuler.change(150).pipe(Q(this._destroyed)),r=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new gr(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Me(r,{injector:this._injector}),Se(e,i,t,this._items.changes,this._itemsResized()).pipe(Q(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),r()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(o=>{this.indexFocused.emit(o),this._setTabFocus(o)})}_itemsResized(){return typeof ResizeObserver!="function"?An:this._items.changes.pipe(ge(this._items),vt(e=>new kn(t=>this._ngZone.runOutsideAngular(()=>{let i=new ResizeObserver(r=>t.next(r));return e.forEach(r=>i.observe(r.elementRef.nativeElement)),()=>{i.disconnect()}}))),Gi(1),fe(e=>e.some(t=>t.contentRect.width>0&&t.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!Pe(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let t=this._items.get(this.focusIndex);t&&!t.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let t=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?t.scrollLeft=0:t.scrollLeft=t.scrollWidth-t.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,t=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(t)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let t=this._tabListContainer.nativeElement.offsetWidth,i=(e=="before"?-1:1)*t/3;return this._scrollTo(this._scrollDistance+i)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let t=this._items?this._items.toArray()[e]:null;if(!t)return;let i=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:r,offsetWidth:o}=t.elementRef.nativeElement,l,c;this._getLayoutDirection()=="ltr"?(l=r,c=l+o):(c=this._tabListInner.nativeElement.offsetWidth-r,l=c-o);let v=this.scrollDistance,h=this.scrollDistance+i;l<v?this.scrollDistance-=v-l:c>h&&(this.scrollDistance+=Math.min(c-h,l-v))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,t=this._elementRef.nativeElement.offsetWidth,i=e-t>=5;i||(this.scrollDistance=0),i!==this._showPaginationControls&&(this._showPaginationControls=i,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,t=this._tabListContainer.nativeElement.offsetWidth;return e-t||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,t=e?e.elementRef.nativeElement:null;t?this._inkBar.alignToElement(t):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,t){t&&t.button!=null&&t.button!==0||(this._stopInterval(),Bi(bs,_s).pipe(Q(Se(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:i,distance:r}=this._scrollHeader(e);(r===0||r>=i)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let t=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(t,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:t,distance:this._scrollDistance}}static \u0275fac=function(t){return new(t||n)};static \u0275dir=V({type:n,inputs:{disablePagination:[2,"disablePagination","disablePagination",K],selectedIndex:[2,"selectedIndex","selectedIndex",Dt]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return n})(),ys=(()=>{class n extends vs{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Ka(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=be(n)))(i||n)}})();static \u0275cmp=(function(){let e=["tabListContainer"],t=["tabList"],i=["tabListInner"],r=["nextPaginator"],o=["previousPaginator"];return B({type:n,selectors:[["mat-tab-header"]],contentQueries:function(v,h,f){if(v&1&&Ke(f,Br,4),v&2){let x;D(x=w())&&(h._items=x)}},viewQuery:function(v,h){if(v&1&&J(e,7)(t,7)(i,7)(r,5)(o,5),v&2){let f;D(f=w())&&(h._tabListContainer=f.first),D(f=w())&&(h._tabList=f.first),D(f=w())&&(h._tabListInner=f.first),D(f=w())&&(h._nextPaginator=f.first),D(f=w())&&(h._previousPaginator=f.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(v,h){v&2&&k("mat-mdc-tab-header-pagination-controls-enabled",h._showPaginationControls)("mat-mdc-tab-header-rtl",h._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",K]},features:[Z],ngContentSelectors:["*"],decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(v,h){v&1&&(je(),d(0,"div",5,0),y("click",function(){return h._handlePaginatorClick("before")})("mousedown",function(x){return h._handlePaginatorPress("before",x)})("touchend",function(){return h._stopInterval()}),z(2,"div",6),m(),d(3,"div",7,1),y("keydown",function(x){return h._handleKeydown(x)}),d(5,"div",8,2),y("cdkObserveContent",function(){return h._onContentChanges()}),d(7,"div",9,3),se(9),m()()(),d(10,"div",10,4),y("mousedown",function(x){return h._handlePaginatorPress("after",x)})("click",function(){return h._handlePaginatorClick("after")})("touchend",function(){return h._stopInterval()}),z(12,"div",6),m()),v&2&&(k("mat-mdc-tab-header-pagination-disabled",h._disableScrollBefore),C("matRippleDisabled",h._disableScrollBefore||h.disableRipple),u(3),k("_mat-animation-noopable",h._animationsDisabled),u(2),A("aria-label",h.ariaLabel||null)("aria-labelledby",h.ariaLabelledby||null),u(5),k("mat-mdc-tab-header-pagination-disabled",h._disableScrollAfter),C("matRippleDisabled",h._disableScrollAfter||h.disableRipple))},dependencies:[Ha,cr],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--%NS%mat-tab-header-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--%NS%mat-tab-pagination-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--%NS%mat-tab-divider-height, 1px);
  border-bottom-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--%NS%mat-tab-divider-height, 1px);
  border-top-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--%NS%mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2,changeDetection:1})})()}return n})(),Cs=new I("MAT_TABS_CONFIG"),Vr=(()=>{class n extends Le{_host=s(Qa);_ngZone=s(X);_centeringSub=ye.EMPTY;_leavingSub=ye.EMPTY;ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(ge(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=be(n)))(i||n)}})();static \u0275dir=V({type:n,selectors:[["","matTabBodyHost",""]],features:[Z]})}return n})(),Qa=(()=>{class n{_elementRef=s(j);_dir=s(De,{optional:!0});_ngZone=s(X);_injector=s(W);_renderer=s(ae);_diAnimationsDisabled=pe();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=ye.EMPTY;_position;_previousPosition;_onCentering=new S;_beforeCentering=new S;_afterLeavingCenter=new S;_onCentered=new S(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=s(U);this._dirChangeSubscription=this._dir.change.subscribe(t=>{this._computePositionAnimationState(t),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),Me(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,t=i=>{i.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),i.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",i=>{i.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",t),this._renderer.listen(e,"transitioncancel",t)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),Me(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=(function(){let e=["content"];function t(i,r){}return B({type:n,selectors:[["mat-tab-body"]],viewQuery:function(r,o){if(r&1&&J(Vr,5)(e,5),r&2){let l;D(l=w())&&(o._portalHost=l.first),D(l=w())&&(o._contentElement=l.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(r,o){r&2&&A("inert",o._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(r,o){r&1&&(d(0,"div",1,0),oe(2,t,0,0,"ng-template",2),m()),r&2&&k("mat-tab-body-content-left",o._position==="left")("mat-tab-body-content-right",o._position==="right")("mat-tab-body-content-can-animate",o._position==="center"||o._previousPosition==="center")},dependencies:[Vr,Gn],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--%NS%mat-tab-body-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2,changeDetection:1})})()}return n})(),zr=(()=>{class n{_elementRef=s(j);_changeDetectorRef=s(U);_ngZone=s(X);_tabsSubscription=ye.EMPTY;_tabLabelSubscription=ye.EMPTY;_tabBodySubscription=ye.EMPTY;_diAnimationsDisabled=pe();_bodyAnimationDuration;_headerAnimationDuration;_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new $i;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){this._animationDuration=e,e&&typeof e=="object"?(this._bodyAnimationDuration=Ua(e.body),this._headerAnimationDuration=Ua(e.header)):this._headerAnimationDuration=this._bodyAnimationDuration=Ua(e)}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let t=this._elementRef.nativeElement.classList;t.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&t.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new S;focusChange=new S;animationDone=new S;selectedTabChange=new S(!0);_groupId;_isServer=!s(_e).isBrowser;constructor(){let e=s(Cs,{optional:!0});this._groupId=s(de).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let t=this._selectedIndex==null;if(!t){this.selectedTabChange.emit(this._createChangeEvent(e));let i=this._tabBodyWrapper.nativeElement;i.style.minHeight=i.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((i,r)=>i.isActive=r===e),t||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((t,i)=>{t.position=i-e,this._selectedIndex!=null&&t.position==0&&!t.origin&&(t.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let t=this._tabs.toArray(),i;for(let r=0;r<t.length;r++)if(t[r].isActive){this._indexToSelect=this._selectedIndex=r,this._lastFocusedTabIndex=null,i=t[r];break}!i&&t[e]&&Promise.resolve().then(()=>{t[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(ge(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(t=>t._closestTabGroup===this||!t._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let t=this._tabHeader;t&&(t.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let t=new Xa;return t.index=e,this._tabs&&this._tabs.length&&(t.tab=this._tabs.toArray()[e]),t}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Se(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,t){return e.id||`${this._groupId}-label-${t}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let t=this._tabBodyWrapper.nativeElement;t.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(t.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,t,i){t.focusIndex=i,e.disabled||(this.selectedIndex=i)}_getTabIndex(e){let t=this._lastFocusedTabIndex??this.selectedIndex;return e===t?0:-1}_tabFocusChanged(e,t){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=t)}_bodyCentered(e){e&&this._tabBodies?.forEach((t,i)=>t._setActiveClass(i===this._selectedIndex))}_bodyAnimationsDisabled(){return this._diAnimationsDisabled||this._bodyAnimationDuration==="0"||this._bodyAnimationDuration==="0ms"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=(function(){let e=["tabBodyWrapper"],t=["tabHeader"],i=["*"];function r(f,x){}function o(f,x){if(f&1&&oe(0,r,0,0,"ng-template",12),f&2){let p=b().$implicit;C("cdkPortalOutlet",p.templateLabel)}}function l(f,x){if(f&1&&g(0),f&2){let p=b().$implicit;Y(p.textLabel)}}function c(f,x){if(f&1){let p=G();d(0,"div",7,2),y("click",function(){let F=O(p),le=F.$implicit,Xt=F.$index,Aa=b(),Ea=Ae(1);return R(Aa._handleClick(le,Ea,Xt))})("cdkFocusChange",function(F){let le=O(p).$index,Xt=b();return R(Xt._tabFocusChanged(F,le))}),z(2,"span",8)(3,"div",9),d(4,"span",10)(5,"span",11),N(6,o,1,1,null,12)(7,l,1,1),m()()()}if(f&2){let p=x.$implicit,M=x.$index,F=Ae(1),le=b();Ge(p.labelClass),k("mdc-tab--active",le.selectedIndex===M),C("id",le._getTabLabelId(p,M))("disabled",p.disabled)("fitInkBarToContent",le.fitInkBarToContent),A("tabIndex",le._getTabIndex(M))("aria-posinset",M+1)("aria-setsize",le._tabs.length)("aria-controls",le._getTabContentId(M))("aria-selected",le.selectedIndex===M)("aria-label",p.ariaLabel||null)("aria-labelledby",!p.ariaLabel&&p.ariaLabelledby?p.ariaLabelledby:null),u(3),C("matRippleTrigger",F)("matRippleDisabled",p.disabled||le.disableRipple),u(3),T(p.templateLabel?6:7)}}function v(f,x){f&1&&se(0)}function h(f,x){if(f&1){let p=G();d(0,"mat-tab-body",13),y("_onCentered",function(){O(p);let F=b();return R(F._removeTabBodyWrapperHeight())})("_onCentering",function(F){O(p);let le=b();return R(le._setTabBodyWrapperHeight(F))})("_beforeCentering",function(F){O(p);let le=b();return R(le._bodyCentered(F))}),m()}if(f&2){let p=x.$implicit,M=x.$index,F=b();Ge(p.bodyClass),C("id",F._getTabContentId(M))("content",p.content)("position",p.position)("animationDuration",F._bodyAnimationDuration)("preserveContent",F.preserveContent),A("tabindex",F.contentTabIndex!=null&&F.selectedIndex===M?F.contentTabIndex:null)("aria-labelledby",F._getTabLabelId(p,M))("aria-hidden",F.selectedIndex!==M)}}return B({type:n,selectors:[["mat-tab-group"]],contentQueries:function(x,p,M){if(x&1&&Ke(M,Ja,5),x&2){let F;D(F=w())&&(p._allTabs=F)}},viewQuery:function(x,p){if(x&1&&J(e,5)(t,5)(Qa,5),x&2){let M;D(M=w())&&(p._tabBodyWrapper=M.first),D(M=w())&&(p._tabHeader=M.first),D(M=w())&&(p._tabBodies=M)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:13,hostBindings:function(x,p){x&2&&(A("mat-align-tabs",p.alignTabs),Ge("mat-"+(p.color||"primary")),Oe("--%NS%mat-tab-body-animation-duration",p._bodyAnimationDuration)("--%NS%mat-tab-header-animation-duration",p._headerAnimationDuration),k("mat-mdc-tab-group-dynamic-height",p.dynamicHeight)("mat-mdc-tab-group-inverted-header",p.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",p.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",K],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",K],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",K],selectedIndex:[2,"selectedIndex","selectedIndex",Dt],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",Dt],disablePagination:[2,"disablePagination","disablePagination",K],disableRipple:[2,"disableRipple","disableRipple",K],preserveContent:[2,"preserveContent","preserveContent",K],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[te([{provide:Lr,useExisting:n}])],ngContentSelectors:i,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(x,p){x&1&&(je(),d(0,"mat-tab-header",3,0),y("indexFocused",function(F){return p._focusChanged(F)})("selectFocusedIndex",function(F){return p.selectedIndex=F}),me(2,c,8,17,"div",4,ut),m(),N(4,v,1,0),d(5,"div",5,1),me(7,h,1,10,"mat-tab-body",6,ut),m()),x&2&&(C("selectedIndex",p.selectedIndex||0)("disableRipple",p.disableRipple)("disablePagination",p.disablePagination),Xi("aria-label",p.ariaLabel)("aria-labelledby",p.ariaLabelledby),u(2),ue(p._tabs),u(2),T(p._isServer?4:-1),u(),k("_mat-animation-noopable",p._bodyAnimationsDisabled()),u(2),ue(p._tabs))},dependencies:[ys,Br,Vn,Ha,Le,Qa],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--%NS%mat-tab-header-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--%NS%mat-tab-container-height, 48px);
  font-family: var(--%NS%mat-tab-label-text-font, var(--%NS%mat-sys-title-small-font));
  font-size: var(--%NS%mat-tab-label-text-size, var(--%NS%mat-sys-title-small-size));
  letter-spacing: var(--%NS%mat-tab-label-text-tracking, var(--%NS%mat-sys-title-small-tracking));
  line-height: var(--%NS%mat-tab-label-text-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-weight: var(--%NS%mat-tab-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-tab-active-indicator-height, 2px);
  border-radius: var(--%NS%mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--%NS%mat-tab-active-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-hover-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-focus-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--%NS%mat-tab-disabled-ripple-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-label-text-color, var(--%NS%mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--%NS%mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2,changeDetection:1})})()}return n})(),Xa=class{index;tab};var Hr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ie({type:n});static \u0275inj=ne({imports:[Ve]})}return n})();var ht=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var ti=(()=>{class n extends jn{_elementRef=s(j);_focusTrapFactory=s(pr);_config;_interactivityChecker=s(ur);_ngZone=s(X);_focusMonitor=s(rn);_renderer=s(ae);_changeDetectorRef=s(U);_injector=s(W);_platform=s(_e);_document=s(mt);_portalOutlet;_focusTrapped=new P;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=s(ht,{optional:!0})||new ht,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{r(),o(),e.removeAttribute("tabindex")},r=this._renderer.listen(e,"blur",i),o=this._renderer.listen(e,"mousedown",i)})),e.focus(t)}_focusByCssSelector(e,t){let i=this._elementRef.nativeElement.querySelector(e);i&&this._forceFocus(i,t)}_trapFocus(e){this._isDestroyed||Me(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e=="string"?t=this._document.querySelector(e):typeof e=="boolean"?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus=="function"){let i=Rt(),r=this._elementRef.nativeElement;(!i||i===this._document.body||i===r||r.contains(i))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=Rt();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Rt()))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=(function(){function e(t,i){}return B({type:n,selectors:[["cdk-dialog-container"]],viewQuery:function(i,r){if(i&1&&J(Le,7),i&2){let o;D(o=w())&&(r._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(i,r){i&2&&A("id",r._config.id||null)("role",r._config.role)("aria-modal",r._config.ariaModal)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null)},features:[Z],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(i,r){i&1&&oe(0,e,0,0,"ng-template",0)},dependencies:[Le],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})})()}return n})(),Et=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new P;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(a,e){this.overlayRef=a,this.config=e,this.disableClose=e.disableClose,this.backdropClick=a.backdropClick(),this.keydownEvents=a.keydownEvents(),this.outsidePointerEvents=a.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!Pe(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=a.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(a,e){if(this._canClose(a)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(a),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(a="",e=""){return this.overlayRef.updateSize({width:a,height:e}),this}addPanelClass(a){return this.overlayRef.addPanelClass(a),this}removePanelClass(a){return this.overlayRef.removePanelClass(a),this}_canClose(a){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(a,e,this.componentInstance))}},Ds=new I("DialogScrollStrategy",{providedIn:"root",factory:()=>{let n=s(W);return()=>on(n)}}),ws=new I("DialogData"),Ss=new I("DefaultDialogConfig");function Ms(n){let a=E(n),e=new S;return{valueSignal:a,get value(){return a()},change:e,ngOnDestroy(){e.complete()}}}var ni=(()=>{class n{_injector=s(W);_defaultOptions=s(Ss,{optional:!0});_parentDialog=s(n,{optional:!0,skipSelf:!0});_overlayContainer=s(wr);_idGenerator=s(de);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new P;_afterOpenedAtThisLevel=new P;_ariaHiddenElements=new Map;_scrollStrategy=s(Ds);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Ft(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(ge(void 0)));open(e,t){let i=this._defaultOptions||new ht;t=H(H({},i),t),t.id=t.id||this._idGenerator.getId("cdk-dialog-"),t.id&&this.getDialogById(t.id);let r=this._getOverlayConfig(t),o=At(this._injector,r),l=new Et(o,t),c=this._attachContainer(o,l,t);if(l.containerInstance=c,!this.openDialogs.length){let v=this._overlayContainer.getContainerElement();c._focusTrapped?c._focusTrapped.pipe(Ye(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(v)}):this._hideNonDialogContentFromAssistiveTechnology(v)}return this._attachDialogContent(e,l,c,t),this.openDialogs.push(l),l.closed.subscribe(()=>this._removeOpenDialog(l,!0)),this.afterOpened.next(l),l}closeAll(){ei(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){ei(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),ei(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new ln({positionStrategy:e.positionStrategy||kt().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,i){let r=i.injector||i.viewContainerRef?.injector,o=[{provide:ht,useValue:i},{provide:Et,useValue:t},{provide:Sr,useValue:e}],l;i.container?typeof i.container=="function"?l=i.container:(l=i.container.type,o.push(...i.container.providers(i))):l=ti;let c=new Ze(l,i.viewContainerRef,W.create({parent:r||this._injector,providers:o}));return e.attach(c).instance}_attachDialogContent(e,t,i,r){if(e instanceof at){let o=this._createInjector(r,t,i,void 0),l={$implicit:r.data,dialogRef:t};r.templateContext&&(l=H(H({},l),typeof r.templateContext=="function"?r.templateContext():r.templateContext)),i.attachTemplatePortal(new Mt(e,null,l,o))}else{let o=this._createInjector(r,t,i,this._injector),l=i.attachComponentPortal(new Ze(e,r.viewContainerRef,o,null,r.bindings));t.componentRef=l,t.componentInstance=l.instance}}_createInjector(e,t,i,r){let o=e.injector||e.viewContainerRef?.injector,l=[{provide:ws,useValue:e.data},{provide:Et,useValue:t}];return e.providers&&(typeof e.providers=="function"?l.push(...e.providers(t,e,i)):l.push(...e.providers)),e.direction&&(!o||!o.get(De,null,{optional:!0}))&&l.push({provide:De,useValue:Ms(e.direction)}),W.create({parent:o||r,providers:l})}_removeOpenDialog(e,t){let i=this.openDialogs.indexOf(e);i>-1&&(this.openDialogs.splice(i,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((r,o)=>{r?o.setAttribute("aria-hidden",r):o.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let i=t.length-1;i>-1;i--){let r=t[i];r!==e&&r.nodeName!=="SCRIPT"&&r.nodeName!=="STYLE"&&!r.hasAttribute("aria-live")&&!r.hasAttribute("popover")&&(this._ariaHiddenElements.set(r,r.getAttribute("aria-hidden")),r.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Ne({token:n,factory:n.\u0275fac})}return n})();function ei(n,a){let e=n.length;for(;e--;)a(n[e])}var jr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ie({type:n});static \u0275inj=ne({providers:[ni],imports:[$e,pt,Vt,pt]})}return n})();var Qn=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings},ai="mdc-dialog--open",Gr="mdc-dialog--opening",Yr="mdc-dialog--closing",ks=150,As=75,Es=(()=>{class n extends ti{_animationStateChanged=new S;_animationsEnabled=!pe();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?qr(this._config.enterAnimationDuration)??ks:0;_exitAnimationDuration=this._animationsEnabled?qr(this._config.exitAnimationDuration)??As:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty($r,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Gr,ai)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(ai),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(ai),this._animationsEnabled?(this._hostElement.style.setProperty($r,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Yr)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Gr,Yr)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),t}static \u0275fac=(()=>{let e;return function(i){return(e||(e=be(n)))(i||n)}})();static \u0275cmp=(function(){function e(t,i){}return B({type:n,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(i,r){i&2&&(Fe("id",r._config.id),A("aria-modal",r._config.ariaModal)("role",r._config.role)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null),k("_mat-animation-noopable",!r._animationsEnabled)("mat-mdc-dialog-container-with-actions",r._actionSectionCount>0))},features:[Z],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(i,r){i&1&&(d(0,"div",0)(1,"div",1),oe(2,e,0,0,"ng-template",2),m()())},dependencies:[Le],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--%NS%mat-dialog-container-max-width, 560px);
  min-width: var(--%NS%mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--%NS%mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--%NS%mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--%NS%mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--%NS%mat-dialog-container-elevation-shadow, none);
  border-radius: var(--%NS%mat-dialog-container-shape, var(--%NS%mat-sys-corner-extra-large, 4px));
  background-color: var(--%NS%mat-dialog-container-color, var(--%NS%mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--%NS%mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--%NS%mat-dialog-subhead-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-dialog-subhead-font, var(--%NS%mat-sys-headline-small-font, inherit));
  line-height: var(--%NS%mat-dialog-subhead-line-height, var(--%NS%mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-subhead-size, var(--%NS%mat-sys-headline-small-size, 1rem));
  font-weight: var(--%NS%mat-dialog-subhead-weight, var(--%NS%mat-sys-headline-small-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-subhead-tracking, var(--%NS%mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--%NS%mat-dialog-supporting-text-color, var(--%NS%mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--%NS%mat-dialog-supporting-text-font, var(--%NS%mat-sys-body-medium-font, inherit));
  line-height: var(--%NS%mat-dialog-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 1rem));
  font-weight: var(--%NS%mat-dialog-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--%NS%mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--%NS%mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2,changeDetection:1})})()}return n})(),$r="--mat-dialog-transition-duration";function qr(n){return n==null?null:typeof n=="number"?n:n.endsWith("ms")?wt(n.substring(0,n.length-2)):n.endsWith("s")?wt(n.substring(0,n.length-1))*1e3:n==="0"?0:null}var Kn=(function(n){return n[n.OPEN=0]="OPEN",n[n.CLOSING=1]="CLOSING",n[n.CLOSED=2]="CLOSED",n})(Kn||{}),Lt=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new Ia(1);_beforeClosed=new Ia(1);_result;_closeFallbackTimeout;_state=Kn.OPEN;_closeInteractionType;constructor(a,e,t){this._ref=a,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=a.id,a.addPanelClass("mat-mdc-dialog-panel"),t._animationStateChanged.pipe(fe(i=>i.state==="opened"),Ye(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(fe(i=>i.state==="closed"),Ye(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),a.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Se(this.backdropClick(),this.keydownEvents().pipe(fe(i=>i.keyCode===27&&!this.disableClose&&!Pe(i)))).subscribe(i=>{this.disableClose||(i.preventDefault(),Is(this,i.type==="keydown"?"keyboard":"mouse"))})}close(a){let e=this._config.closePredicate;e&&!e(a,this._config,this.componentInstance)||(this._result=a,this._containerInstance._animationStateChanged.pipe(fe(t=>t.state==="closing"),Ye(1)).subscribe(t=>{this._beforeClosed.next(a),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=Kn.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(a){let e=this._ref.config.positionStrategy;return a&&(a.left||a.right)?a.left?e.left(a.left):e.right(a.right):e.centerHorizontally(),a&&(a.top||a.bottom)?a.top?e.top(a.top):e.bottom(a.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(a="",e=""){return this._ref.updateSize(a,e),this}addPanelClass(a){return this._ref.addPanelClass(a),this}removePanelClass(a){return this._ref.removePanelClass(a),this}getState(){return this._state}_finishDialogClose(){this._state=Kn.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function Is(n,a,e){return n._closeInteractionType=a,n.close(e)}var ii=new I("MatMdcDialogData"),Ns=new I("mat-mdc-dialog-default-options"),Ts=new I("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(W);return()=>on(n)}}),Bt=(()=>{class n{_defaultOptions=s(Ns,{optional:!0});_scrollStrategy=s(Ts);_parentDialog=s(n,{optional:!0,skipSelf:!0});_idGenerator=s(de);_injector=s(W);_dialog=s(ni);_animationsDisabled=pe();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new P;_afterOpenedAtThisLevel=new P;dialogConfigClass=Qn;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Ft(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(ge(void 0)));constructor(){this._dialogRefConstructor=Lt,this._dialogContainerType=Es,this._dialogDataToken=ii}open(e,t){let i;t=H(H({},this._defaultOptions||new Qn),t),t.id=t.id||this._idGenerator.getId("mat-mdc-dialog-"),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let r=this._dialog.open(e,ve(H({},t),{positionStrategy:kt(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()==="0"||t.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:ht,useValue:t}]},templateContext:()=>({dialogRef:i}),providers:(o,l,c)=>(i=new this._dialogRefConstructor(o,t,c),i.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:c},{provide:this._dialogDataToken,useValue:l.data},{provide:this._dialogRefConstructor,useValue:i},{provide:Et,useValue:null}])}));return i.componentRef=r.componentRef,i.componentInstance=r.componentInstance,this.openDialogs.push(i),this.afterOpened.next(i),i.afterClosed().subscribe(()=>{let o=this.openDialogs.indexOf(i);o>-1&&(this.openDialogs.splice(o,1),this.openDialogs.length||this._getAfterAllClosed().next())}),i}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Ne({token:n,factory:n.\u0275fac})}return n})();var Wr=(()=>{class n{_dialogRef=s(Lt,{optional:!0});_elementRef=s(j);_dialog=s(Bt);ngOnInit(){this._dialogRef||(this._dialogRef=Fs(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=V({type:n})}return n})(),Ur=(()=>{class n extends Wr{id=s(de).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=be(n)))(i||n)}})();static \u0275dir=V({type:n,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(t,i){t&2&&Fe("id",i.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[Z]})}return n})(),Kr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=V({type:n,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[Qi([Gn])]})}return n})(),Qr=(()=>{class n extends Wr{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=be(n)))(i||n)}})();static \u0275dir=V({type:n,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(t,i){t&2&&k("mat-mdc-dialog-actions-align-start",i.align==="start")("mat-mdc-dialog-actions-align-center",i.align==="center")("mat-mdc-dialog-actions-align-end",i.align==="end")},inputs:{align:"align"},features:[Z]})}return n})();function Fs(n,a){let e=n.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?a.find(t=>t.id===e.id):null}var Xr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ie({type:n});static \u0275inj=ne({providers:[Bt],imports:[jr,$e,pt,Ve]})}return n})();var ro=(()=>{class n{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(t){return new(t||n)(re(ae),re(j))};static \u0275dir=V({type:n})}return n})(),Rs=(()=>{class n extends ro{static \u0275fac=(()=>{let e;return function(i){return(e||(e=be(n)))(i||n)}})();static \u0275dir=V({type:n,features:[Z]})}return n})(),oo=new I("");var Vs={provide:oo,useExisting:tt(()=>Yt),multi:!0};function Ps(){let n=La()?La().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var Ls=new I(""),Yt=(()=>{class n extends ro{_compositionMode;_composing=!1;constructor(e,t,i){super(e,t),this._compositionMode=i,this._compositionMode==null&&(this._compositionMode=!Ps())}writeValue(e){let t=e??"";this.setProperty("value",t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(t){return new(t||n)(re(ae),re(j),re(Ls,8))};static \u0275dir=V({type:n,selectors:[["input","formControlName","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControlName","",3,"ngNoCva",""],["input","formControl","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControl","",3,"ngNoCva",""],["input","ngModel","",3,"type","checkbox",3,"ngNoCva",""],["textarea","ngModel","",3,"ngNoCva",""],["","ngDefaultControl",""]],hostBindings:function(t,i){t&1&&y("input",function(o){return i._handleInput(o.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(o){return i._compositionEnd(o.target.value)})},standalone:!1,features:[te([Vs]),Z]})}return n})();function di(n){return n==null||ci(n)===0}function ci(n){return n==null?null:Array.isArray(n)||typeof n=="string"?n.length:n instanceof Set?n.size:null}var fn=new I(""),mi=new I(""),Bs=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,ce=class{static min(a){return zs(a)}static max(a){return Hs(a)}static required(a){return so(a)}static requiredTrue(a){return js(a)}static email(a){return Gs(a)}static minLength(a){return Ys(a)}static maxLength(a){return lo(a)}static pattern(a){return $s(a)}static nullValidator(a){return Jn()}static compose(a){return fo(a)}static composeAsync(a){return go(a)}};function zs(n){return a=>{if(a.value==null||n==null)return null;let e=parseFloat(a.value);return!isNaN(e)&&e<n?{min:{min:n,actual:a.value}}:null}}function Hs(n){return a=>{if(a.value==null||n==null)return null;let e=parseFloat(a.value);return!isNaN(e)&&e>n?{max:{max:n,actual:a.value}}:null}}function so(n){return di(n.value)?{required:!0}:null}function js(n){return n.value===!0?null:{required:!0}}function Gs(n){return di(n.value)||Bs.test(n.value)?null:{email:!0}}function Ys(n){return a=>{let e=a.value?.length??ci(a.value);return e===null||e===0?null:e<n?{minlength:{requiredLength:n,actualLength:e}}:null}}function lo(n){return a=>{let e=a.value?.length??ci(a.value);return e!==null&&e>n?{maxlength:{requiredLength:n,actualLength:e}}:null}}function $s(n){if(!n)return Jn;let a,e;return typeof n=="string"?(e="",n.charAt(0)!=="^"&&(e+="^"),e+=n,n.charAt(n.length-1)!=="$"&&(e+="$"),a=new RegExp(e)):(e=n.toString(),a=n),t=>{if(di(t.value))return null;let i=t.value;return a.test(i)?null:{pattern:{requiredPattern:e,actualValue:i}}}}function Jn(n){return null}function co(n){return n!=null}function mo(n){return Fa(n)?Pi(n):n}function uo(n){let a={};return n.forEach(e=>{a=e!=null?H(H({},a),e):a}),Object.keys(a).length===0?null:a}function po(n,a){return a.map(e=>e(n))}function qs(n){return!n.validate}function ho(n){return n.map(a=>qs(a)?a:e=>a.validate(e))}function fo(n){if(!n)return null;let a=n.filter(co);return a.length==0?null:function(e){return uo(po(e,a))}}function ui(n){return n!=null?fo(ho(n)):null}function go(n){if(!n)return null;let a=n.filter(co);return a.length==0?null:function(e){let t=po(e,a).map(mo);return Li(t).pipe(_t(uo))}}function pi(n){return n!=null?go(ho(n)):null}function Zr(n,a){return n===null?[a]:Array.isArray(n)?[...n,a]:[n,a]}function bo(n){return n._rawValidators}function _o(n){return n._rawAsyncValidators}function ri(n){return n?Array.isArray(n)?n:[n]:[]}function ea(n,a){return Array.isArray(n)?n.includes(a):n===a}function Jr(n,a){let e=ri(a);return ri(n).forEach(i=>{ea(e,i)||e.push(i)}),e}function eo(n,a){return ri(a).filter(e=>!ea(n,e))}var ta=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(a){this._rawValidators=a||[],this._composedValidatorFn=ui(this._rawValidators)}_setAsyncValidators(a){this._rawAsyncValidators=a||[],this._composedAsyncValidatorFn=pi(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(a){this._onDestroyCallbacks.push(a)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(a=>a()),this._onDestroyCallbacks=[]}reset(a=void 0){this.control?.reset(a)}hasError(a,e){return this.control?this.control.hasError(a,e):!1}getError(a,e){return this.control?this.control.getError(a,e):null}},gt=class extends ta{name;get formDirective(){return null}get path(){return null}};var cn="VALID",Xn="INVALID",zt="PENDING",mn="DISABLED",bt=class{},na=class extends bt{value;source;constructor(a,e){super(),this.value=a,this.source=e}},pn=class extends bt{pristine;source;constructor(a,e){super(),this.pristine=a,this.source=e}},hn=class extends bt{touched;source;constructor(a,e){super(),this.touched=a,this.source=e}},Ht=class extends bt{status;source;constructor(a,e){super(),this.status=a,this.source=e}},aa=class extends bt{source;constructor(a){super(),this.source=a}},It=class extends bt{source;constructor(a){super(),this.source=a}};function hi(n){return(sa(n)?n.validators:n)||null}function Ws(n){return Array.isArray(n)?ui(n):n||null}function fi(n,a){return(sa(a)?a.asyncValidators:n)||null}function Us(n){return Array.isArray(n)?pi(n):n||null}function sa(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function vo(n,a,e){let t=n.controls;if(!(a?Object.keys(t):t).length)throw new Zt(1e3,"");if(!Co(t,e))throw new Zt(1001,"")}function yo(n,a,e){n._forEachChild((t,i)=>{if(e[i]===void 0)throw new Zt(-1002,"")})}var jt=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=E(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(a,e){this._assignValidators(a),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(a){this._rawValidators=this._composedValidatorFn=a,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(a){this._rawAsyncValidators=this._composedAsyncValidatorFn=a}get parent(){return this._parent}get status(){return Re(this.statusReactive)}set status(a){Re(()=>this.statusReactive.set(a))}_status=xe(()=>this.statusReactive());statusReactive=E(void 0);get valid(){return this.status===cn}get invalid(){return this.status===Xn}get pending(){return this.status===zt}get disabled(){return this.status===mn}get enabled(){return this.status!==mn}errors;get pristine(){return Re(this.pristineReactive)}set pristine(a){Re(()=>this.pristineReactive.set(a))}_pristine=xe(()=>this.pristineReactive());pristineReactive=E(!0);get dirty(){return!this.pristine}get touched(){return Re(this.touchedReactive)}set touched(a){Re(()=>this.touchedReactive.set(a))}_touched=xe(()=>this.touchedReactive());touchedReactive=E(!1);get untouched(){return!this.touched}_events=new P;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(a){this._assignValidators(a)}setAsyncValidators(a){this._assignAsyncValidators(a)}addValidators(a){this.setValidators(Jr(a,this._rawValidators))}addAsyncValidators(a){this.setAsyncValidators(Jr(a,this._rawAsyncValidators))}removeValidators(a){this.setValidators(eo(a,this._rawValidators))}removeAsyncValidators(a){this.setAsyncValidators(eo(a,this._rawAsyncValidators))}hasValidator(a){return ea(this._rawValidators,a)}hasAsyncValidator(a){return ea(this._rawAsyncValidators,a)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(a={}){let e=this.touched===!1;this.touched=!0;let t=a.sourceControl??this;a.onlySelf||this._parent?.markAsTouched(ve(H({},a),{sourceControl:t})),e&&a.emitEvent!==!1&&this._events.next(new hn(!0,t))}markAllAsDirty(a={}){this.markAsDirty({onlySelf:!0,emitEvent:a.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(a))}markAllAsTouched(a={}){this.markAsTouched({onlySelf:!0,emitEvent:a.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(a))}markAsUntouched(a={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=a.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:a.emitEvent,sourceControl:t})}),a.onlySelf||this._parent?._updateTouched(a,t),e&&a.emitEvent!==!1&&this._events.next(new hn(!1,t))}markAsDirty(a={}){let e=this.pristine===!0;this.pristine=!1;let t=a.sourceControl??this;a.onlySelf||this._parent?.markAsDirty(ve(H({},a),{sourceControl:t})),e&&a.emitEvent!==!1&&this._events.next(new pn(!1,t))}markAsPristine(a={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=a.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:a.emitEvent})}),a.onlySelf||this._parent?._updatePristine(a,t),e&&a.emitEvent!==!1&&this._events.next(new pn(!0,t))}markAsPending(a={}){this.status=zt;let e=a.sourceControl??this;a.emitEvent!==!1&&(this._events.next(new Ht(this.status,e)),this.statusChanges.emit(this.status)),a.onlySelf||this._parent?.markAsPending(ve(H({},a),{sourceControl:e}))}disable(a={}){let e=this._parentMarkedDirty(a.onlySelf);this.status=mn,this.errors=null,this._forEachChild(i=>{i.disable(ve(H({},a),{onlySelf:!0}))}),this._updateValue();let t=a.sourceControl??this;a.emitEvent!==!1&&(this._events.next(new na(this.value,t)),this._events.next(new Ht(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(ve(H({},a),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(a={}){let e=this._parentMarkedDirty(a.onlySelf);this.status=cn,this._forEachChild(t=>{t.enable(ve(H({},a),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:a.emitEvent}),this._updateAncestors(ve(H({},a),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(a,e){a.onlySelf||(this._parent?.updateValueAndValidity(a),a.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(a){this._parent=a}getRawValue(){return this.value}updateValueAndValidity(a={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===cn||this.status===zt)&&this._runAsyncValidator(t,a.emitEvent)}let e=a.sourceControl??this;a.emitEvent!==!1&&(this._events.next(new na(this.value,e)),this._events.next(new Ht(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),a.onlySelf||this._parent?.updateValueAndValidity(ve(H({},a),{sourceControl:e}))}_updateTreeValidity(a={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(a)),this.updateValueAndValidity({onlySelf:!0,emitEvent:a.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?mn:cn}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(a,e){if(this.asyncValidator){this.status=zt,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:a!==!1};let t=mo(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:e,shouldHaveEmitted:a})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let a=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,a}return!1}setErrors(a,e={}){this.errors=a,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(a){let e=a;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,i)=>t&&t._find(i),this)}getError(a,e){let t=e?this.get(e):this;return t?.errors?t.errors[a]:null}hasError(a,e){return!!this.getError(a,e)}get root(){let a=this;for(;a._parent;)a=a._parent;return a}_updateControlsErrors(a,e,t){this.status=this._calculateStatus(),a&&this.statusChanges.emit(this.status),(a||t)&&this._events.next(new Ht(this.status,e)),this._parent&&this._parent._updateControlsErrors(a,e,t)}_initObservables(){this.valueChanges=new S,this.statusChanges=new S}_calculateStatus(){return this._allControlsDisabled()?mn:this.errors?Xn:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(zt)?zt:this._anyControlsHaveStatus(Xn)?Xn:cn}_anyControlsHaveStatus(a){return this._anyControls(e=>e.status===a)}_anyControlsDirty(){return this._anyControls(a=>a.dirty)}_anyControlsTouched(){return this._anyControls(a=>a.touched)}_updatePristine(a,e){let t=!this._anyControlsDirty(),i=this.pristine!==t;this.pristine=t,a.onlySelf||this._parent?._updatePristine(a,e),i&&this._events.next(new pn(this.pristine,e))}_updateTouched(a={},e){this.touched=this._anyControlsTouched(),this._events.next(new hn(this.touched,e)),a.onlySelf||this._parent?._updateTouched(a,e)}_onDisabledChange=[];_registerOnCollectionChange(a){this._onCollectionChange=a}_setUpdateStrategy(a){sa(a)&&a.updateOn!=null&&(this._updateOn=a.updateOn)}_parentMarkedDirty(a){return!a&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(a){return null}_assignValidators(a){this._rawValidators=Array.isArray(a)?a.slice():a,this._composedValidatorFn=Ws(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(a){this._rawAsyncValidators=Array.isArray(a)?a.slice():a,this._composedAsyncValidatorFn=Us(this._rawAsyncValidators)}_updateHasRequiredValidator(){Re(()=>this._hasRequired.set(this.hasValidator(ce.required)))}};function Co(n,a){return Object.hasOwn(n,a)}function Ks(n){return n.tagName==="INPUT"||n.tagName==="SELECT"||n.tagName==="TEXTAREA"}function Qs(n,a,e,t){switch(e){case"name":n.setAttribute(a,e,t);break;case"disabled":case"readonly":case"required":t?n.setAttribute(a,e,""):n.removeAttribute(a,e);break;case"max":case"min":case"minLength":case"maxLength":t!==void 0?n.setAttribute(a,e,t.toString()):n.removeAttribute(a,e);break}}var oi=class{kind;context;control;message;constructor({kind:a,context:e,control:t}){this.kind=a,this.context=e,this.control=t}};function Xs(n){return typeof n=="number"?n:parseInt(n,10)}var xo=(()=>{class n{_validator=Jn;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let t=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(t),this._validator=this._enabled?this.createValidator(t):Jn,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=V({type:n,features:[Ce]})}return n})();var Zs={provide:fn,useExisting:tt(()=>la),multi:!0};var la=(()=>{class n extends xo{required;inputName="required";normalizeInput=K;createValidator=e=>so;enabled(e){return e}static \u0275fac=(()=>{let e;return function(i){return(e||(e=be(n)))(i||n)}})();static \u0275dir=V({type:n,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(t,i){t&2&&A("required",i._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[te([Zs]),Z]})}return n})();var Js={provide:fn,useExisting:tt(()=>gi),multi:!0},gi=(()=>{class n extends xo{maxlength;inputName="maxlength";normalizeInput=e=>Xs(e);createValidator=e=>lo(e);static \u0275fac=(()=>{let e;return function(i){return(e||(e=be(n)))(i||n)}})();static \u0275dir=V({type:n,selectors:[["","maxlength","","formControlName",""],["","maxlength","","formControl",""],["","maxlength","","ngModel",""]],hostVars:1,hostBindings:function(t,i){t&2&&A("maxlength",i._enabled?i.maxlength:null)},inputs:{maxlength:"maxlength"},standalone:!1,features:[te([Js]),Z]})}return n})();var el=new I(""),bi=new I("",{factory:()=>_i}),_i="always";function tl(n,a){return[...a.path,n]}function nl(n,a,e=_i){vi(n,a),a.valueAccessor.writeValue(n.value),(n.disabled||e==="always")&&a.valueAccessor.setDisabledState?.(n.disabled),il(n,a),ol(n,a),rl(n,a),al(n,a)}function to(n,a,e=!0){let t=()=>{};a?.valueAccessor?.registerOnChange(t),a?.valueAccessor?.registerOnTouched(t),ra(n,a),n&&(a._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function ia(n,a){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(a)})}function al(n,a){if(a.valueAccessor.setDisabledState){let e=t=>{a.valueAccessor.setDisabledState(t)};n.registerOnDisabledChange(e),a._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}function vi(n,a){let e=bo(n);a.validator!==null?n.setValidators(Zr(e,a.validator)):typeof e=="function"&&n.setValidators([e]);let t=_o(n);a.asyncValidator!==null?n.setAsyncValidators(Zr(t,a.asyncValidator)):typeof t=="function"&&n.setAsyncValidators([t]);let i=()=>n.updateValueAndValidity();ia(a._rawValidators,i),ia(a._rawAsyncValidators,i)}function ra(n,a){let e=!1;if(n!==null){if(a.validator!==null){let i=bo(n);if(Array.isArray(i)&&i.length>0){let r=i.filter(o=>o!==a.validator);r.length!==i.length&&(e=!0,n.setValidators(r))}}if(a.asyncValidator!==null){let i=_o(n);if(Array.isArray(i)&&i.length>0){let r=i.filter(o=>o!==a.asyncValidator);r.length!==i.length&&(e=!0,n.setAsyncValidators(r))}}}let t=()=>{};return ia(a._rawValidators,t),ia(a._rawAsyncValidators,t),e}function il(n,a){a.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&Do(n,a)})}function rl(n,a){a.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&Do(n,a),n.updateOn!=="submit"&&n.markAsTouched()})}function Do(n,a){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),a.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function ol(n,a){let e=(t,i)=>{a.valueAccessor.writeValue(t),i&&a.viewToModelUpdate(t)};n.registerOnChange(e),a._registerOnDestroy(()=>{n._unregisterOnChange(e)})}function wo(n,a){n==null,vi(n,a)}function sl(n,a){return ra(n,a)}function ll(n,a){if(!Object.hasOwn(n,"model"))return!1;let e=n.model;return e.isFirstChange()?!0:!Object.is(a,e.currentValue)}function dl(n){return Object.getPrototypeOf(n.constructor)===Rs}function So(n,a){n._syncPendingControls(),a.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function cl(n,a){if(!a)return null;Array.isArray(a);let e,t,i;return a.forEach(r=>{r.constructor===Yt?e=r:dl(r)?t=r:i=r}),i||t||e||null}function ml(n,a){let e=n.indexOf(a);e>-1&&n.splice(e,1)}var ul={provide:el,useFactory:()=>{let n=s(Je,{self:!0});return{setParseErrors:a=>{n.setParseErrorSource(a)},set onReset(a){n.onReset=a}}}},Je=class extends ta{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(a){this.userOnReset=a,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof It&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=cl(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(a,e,t){super(),this.injector=a,this.renderer=e,this.rawValueAccessors=t,this.injector?.get(Ta)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let a=this.injector?.get(U);if(!this.control||!a)return;let e=a.markForCheck.bind(a);this.subscription=new ye,this.subscription.add(this.control.valueChanges.subscribe(e)),this.subscription.add(this.control.statusChanges.subscribe(e)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(t=>{t instanceof It&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(a){!a.nativeElement.hasAttribute?.("ngNoCva")&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!a.customControl||(this.isCustomControlBased=!0,a.listenToCustomControlModel(i=>{this.control?.markAsDirty(),this.control?.setValue(i,{emitModelToViewChange:!1}),this.viewToModelUpdate(i)}),a.listenToCustomControlOutput("touch",()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=Ks(a.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(i=>i instanceof la))}ngControlUpdate(a,e){if(!this.isCustomControlBased)return;let t=this.control,i=this.customControlBindings;Object.is(i.value,t.value)||(i.value=t.value,a.setCustomControlModelInput(t.value)),this.bindControlProperty(a,i,"touched",t.touched),this.bindControlProperty(a,i,"dirty",t.dirty),this.bindControlProperty(a,i,"valid",t.valid),this.bindControlProperty(a,i,"invalid",t.invalid),this.bindControlProperty(a,i,"pending",t.pending),this.bindControlProperty(a,i,"disabled",t.disabled),this.shouldBindRequired&&this.bindControlProperty(a,i,"required",this.isRequired);let r=t.errors;if(i.errors!==r){i.errors=r;let o=this._convertErrors(r);a.setInputOnDirectives("errors",o)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(a,e,t,i){if(e[t]===i)return;e[t]=i;let r=a.setInputOnDirectives(t,i);this.isNativeFormElement&&!r&&(t==="disabled"||t==="required")&&this.renderer&&Qs(this.renderer,a.nativeElement,t,i)}_convertErrors(a){if(a===null)return[];let e=this.control;return Object.entries(a).map(([t,i])=>new oi({context:i,kind:t,control:e}))}setParseErrorSource(a){if(a===void 0)return;let e=null,t=xe(()=>{let i=a();return i.length===0?null:i.reduce((r,o)=>(r[o.kind]=o,r),{})});this.parseErrorsValidator=(()=>e).bind(this),nt(()=>{e=t(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(a){this.parseErrorsValidator&&(a?.removeValidators(this.parseErrorsValidator),a?.updateValueAndValidity({emitEvent:!1}))}},oa=class{_cd;constructor(a){this._cd=a}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var da=(()=>{class n extends oa{constructor(e){super(e)}static \u0275fac=function(t){return new(t||n)(re(Je,2))};static \u0275dir=V({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,i){t&2&&k("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)},standalone:!1,features:[Z]})}return n})(),ca=(()=>{class n extends oa{constructor(e){super(e)}static \u0275fac=function(t){return new(t||n)(re(gt,10))};static \u0275dir=V({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,i){t&2&&k("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)("ng-submitted",i.isSubmitted)},standalone:!1,features:[Z]})}return n})(),Gt=class extends jt{constructor(a,e,t){super(hi(e),fi(t,e)),this.controls=a,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(a,e){let t=this._find(a);return t||(this.controls[a]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(a,e,t={}){this.registerControl(a,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(a,e={}){let t=this._find(a);t&&t._registerOnCollectionChange(()=>{}),delete this.controls[a],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(a,e,t={}){let i=this._find(a);i&&i._registerOnCollectionChange(()=>{}),delete this.controls[a],e&&this.registerControl(a,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(a){return this._find(a)?.enabled===!0}setValue(a,e={}){Re(()=>{yo(this,!0,a),Object.keys(a).forEach(t=>{vo(this,!0,t),this.controls[t].setValue(a[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(a,e={}){a!=null&&(Object.keys(a).forEach(t=>{let i=this._find(t);i&&i.patchValue(a[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(a={},e={}){this._forEachChild((t,i)=>{t.reset(a?a[i]:null,ve(H({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new It(this))}getRawValue(){return this._reduceChildren({},(a,e,t)=>(a[t]=e.getRawValue(),a))}_syncPendingControls(){let a=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return a&&this.updateValueAndValidity({onlySelf:!0}),a}_forEachChild(a){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&a(t,e)})}_setUpControls(){this._forEachChild(a=>{a.setParent(this),a._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(a){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&a(t))return!0;return!1}_reduceValue(){let a={};return this._reduceChildren(a,(e,t,i)=>((t.enabled||this.disabled)&&(e[i]=t.value),e))}_reduceChildren(a,e){let t=a;return this._forEachChild((i,r)=>{t=e(t,i,r)}),t}_allControlsDisabled(){for(let a of Object.keys(this.controls))if(this.controls[a].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(a){return Co(this.controls,a)?this.controls[a]:null}};var si=class extends Gt{};var pl={provide:gt,useExisting:tt(()=>gn)},un=Promise.resolve(),gn=(()=>{class n extends gt{callSetDisabledState;get submitted(){return Re(this.submittedReactive)}_submitted=xe(()=>this.submittedReactive());submittedReactive=E(!1);_directives=new Set;form;ngSubmit=new S;options;constructor(e,t,i){super(),this.callSetDisabledState=i,this.form=new Gt({},ui(e),pi(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){un.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){un.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){un.then(()=>{let t=this._findContainer(e.path),i=new Gt({});wo(i,e),t.registerControl(e.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){un.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){un.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),So(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new aa(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(t){return new(t||n)(re(fn,10),re(mi,10),re(bi,8))};static \u0275dir=V({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,i){t&1&&y("submit",function(o){return i.onSubmit(o)})("reset",function(){return i.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[te([pl]),Z]})}return n})();function no(n,a){let e=n.indexOf(a);e>-1&&n.splice(e,1)}function ao(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var Zn=class extends jt{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(a=null,e,t){super(hi(e),fi(t,e)),this._applyFormState(a),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),sa(e)&&(e.nonNullable||e.initialValueIsDefault)&&(ao(a)?this.defaultValue=a.value:this.defaultValue=a)}setValue(a,e={}){Re(()=>{this.value=this._pendingValue=a,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)})}patchValue(a,e={}){this.setValue(a,e)}reset(a=this.defaultValue,e={}){this._applyFormState(a),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new It(this))}_updateValue(){}_anyControls(a){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(a){this._onChange.push(a)}_unregisterOnChange(a){no(this._onChange,a)}registerOnDisabledChange(a){this._onDisabledChange.push(a)}_unregisterOnDisabledChange(a){no(this._onDisabledChange,a)}_forEachChild(a){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(a){ao(a)?(this.value=this._pendingValue=a.value,a.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=a}};var hl=n=>n instanceof Zn;var fl=(()=>{class n extends gt{callSetDisabledState;get submitted(){return Re(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=xe(()=>this._submittedReactive());_submittedReactive=E(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,i){super(),this.callSetDisabledState=i,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),Object.hasOwn(e,"form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(ra(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let t=this.form.get(e.path);return e._setupWithForm(t,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){to(e.control||null,e,!1),ml(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,t){this.form.get(e.path).setValue(t)}onReset(){this.resetForm()}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,So(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new aa(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,i=this.form.get(e.path);t!==i&&(to(t||null,e),hl(i)&&e._setupWithForm(i,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let t=this.form.get(e.path);wo(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&sl(t,e)&&t.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){vi(this.form,this),this._oldForm&&ra(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(t){return new(t||n)(re(fn,10),re(mi,10),re(bi,8))};static \u0275dir=V({type:n,features:[Z,Ce]})}return n})(),gl={provide:gt,useExisting:tt(()=>st)},st=(()=>{class n extends fl{form=null;ngSubmit=new S;get control(){return this.form}static \u0275fac=(()=>{let e;return function(i){return(e||(e=be(n)))(i||n)}})();static \u0275dir=V({type:n,selectors:[["","formGroup",""]],hostBindings:function(t,i){t&1&&y("submit",function(o){return i.onSubmit(o)})("reset",function(){return i.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[te([gl]),Z]})}return n})();var ma=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=V({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return n})();var li=class extends jt{constructor(a,e,t){super(hi(e),fi(t,e)),this.controls=a,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(a){return this.controls[this._adjustIndex(a)]}push(a,e={}){Array.isArray(a)?a.forEach(t=>{this.controls.push(t),this._registerControl(t)}):(this.controls.push(a),this._registerControl(a)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(a,e,t={}){this.controls.splice(a,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent})}removeAt(a,e={}){let t=this._adjustIndex(a);t<0&&(t=0),this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(a,e,t={}){let i=this._adjustIndex(a);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),e&&(this.controls.splice(i,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(a,e={}){Re(()=>{yo(this,!1,a),a.forEach((t,i)=>{vo(this,!1,i),this.at(i).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(a,e={}){a!=null&&(a.forEach((t,i)=>{this.at(i)&&this.at(i).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(a=[],e={}){this._forEachChild((t,i)=>{t.reset(a[i],ve(H({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new It(this))}getRawValue(){return this.controls.map(a=>a.getRawValue())}clear(a={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:a.emitEvent}))}_adjustIndex(a){return a<0?a+this.length:a}_syncPendingControls(){let a=this.controls.reduce((e,t)=>t._syncPendingControls()?!0:e,!1);return a&&this.updateValueAndValidity({onlySelf:!0}),a}_forEachChild(a){this.controls.forEach((e,t)=>{a(e,t)})}_updateValue(){this.value=this.controls.filter(a=>a.enabled||this.disabled).map(a=>a.value)}_anyControls(a){return this.controls.some(e=>e.enabled&&a(e))}_setUpControls(){this._forEachChild(a=>this._registerControl(a))}_allControlsDisabled(){for(let a of this.controls)if(a.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(a){a.setParent(this),a._registerOnCollectionChange(this._onCollectionChange)}_find(a){return this.at(a)??null}};var Mo=new I("");var bl={provide:Je,useExisting:tt(()=>bn)},bn=(()=>{class n extends Je{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new S;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,t,i,r,o,l,c){super(c,l,r),this._ngModelWarningConfig=o,this._parent=e,this._setValidators(t),this._setAsyncValidators(i)}_setupWithForm(e,t){this.control=e,this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,nl(e,this,t))}ngOnChanges(e){this._added||this._setUpControl(),ll(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return tl(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}\u0275ngControlCreate(e){super.ngControlCreate(e)}\u0275ngControlUpdate(e){this.isCustomControlBased&&(this._added||this._setUpControl(),super.ngControlUpdate(e,!0))}static \u0275fac=function(t){return new(t||n)(re(gt,13),re(fn,10),re(mi,10),re(oo,10),re(Mo,8),re(ae,8),re(W,8))};static \u0275dir=V({type:n,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[te([bl,ul]),Z,Ce,Ki(null)]})}return n})();var _l=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ie({type:n});static \u0275inj=ne({})}return n})();function io(n){return!!n&&(n.asyncValidators!==void 0||n.validators!==void 0||n.updateOn!==void 0)}var ua=(()=>{class n{useNonNullable=!1;get nonNullable(){let e=new n;return e.useNonNullable=!0,e}group(e,t=null){let i=this._reduceControls(e),r={};return io(t)?r=t:t!==null&&(r.validators=t.validator,r.asyncValidators=t.asyncValidator),new Gt(i,r)}record(e,t=null){let i=this._reduceControls(e);return new si(i,t)}control(e,t,i){let r={};return this.useNonNullable?(io(t)?r=t:(r.validators=t,r.asyncValidators=i),new Zn(e,ve(H({},r),{nonNullable:!0}))):new Zn(e,t,i)}array(e,t,i){let r=e.map(o=>this._createControl(o));return new li(r,t,i)}_reduceControls(e){let t={};return Object.keys(e).forEach(i=>{t[i]=this._createControl(e[i])}),t}_createControl(e){if(e instanceof Zn)return e;if(e instanceof jt)return e;if(Array.isArray(e)){let t=e[0],i=e.length>1?e[1]:null,r=e.length>2?e[2]:null;return this.control(t,i,r)}else return this.control(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Ne({token:n,factory:n.\u0275fac})}return n})();var pa=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:Mo,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:bi,useValue:e.callSetDisabledState??_i}]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=ie({type:n});static \u0275inj=ne({imports:[_l]})}return n})();var Eo=Symbol("FIELD_TREE");var Io=Symbol("IS_ASYNC_VALIDATION_RESOURCE"),Ao=class{reducer;create;brand;[Io];constructor(a,e){this.reducer=a,this.create=e}};function _n(n){return typeof n=="function"&&n[Eo]===!0}var ha=new I("");var et=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=V({type:n,selectors:[["mat-label"]]})}return n})(),Po=new I("MatError"),ga=(()=>{class n{id=s(de).getId("mat-mdc-error-");static \u0275fac=function(t){return new(t||n)};static \u0275dir=V({type:n,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(t,i){t&2&&Fe("id",i.id)},inputs:{id:"id"},features:[te([{provide:Po,useExisting:n}])]})}return n})(),$t=(()=>{class n{align="start";id=s(de).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||n)};static \u0275dir=V({type:n,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,i){t&2&&(Fe("id",i.id),A("align",null),k("mat-mdc-form-field-hint-end",i.align==="end"))},inputs:{align:"align",id:"id"}})}return n})(),vl=new I("MatPrefix");var yl=new I("MatSuffix");var Lo=new I("FloatingLabelParent"),No=(()=>{class n{_elementRef=s(j);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=s(Un);_ngZone=s(X);_parent=s(Lo);_resizeSubscription=new ye;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Cl(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=V({type:n,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,i){t&2&&k("mdc-floating-label--float-above",i.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return n})();function Cl(n){let a=n;if(a.offsetParent!==null)return a.scrollWidth;let e=a.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var To="mdc-line-ripple--active",fa="mdc-line-ripple--deactivating",Fo=(()=>{class n{_elementRef=s(j);_cleanupTransitionEnd;constructor(){let e=s(X),t=s(ae);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(fa),e.add(To)}deactivate(){this._elementRef.nativeElement.classList.add(fa)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,i=t.contains(fa);e.propertyName==="opacity"&&i&&t.remove(To,fa)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=V({type:n,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return n})(),Oo=(()=>{class n{_elementRef=s(j);_ngZone=s(X);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=(function(){let e=["notch"];return B({type:n,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(r,o){if(r&1&&J(e,5),r&2){let l;D(l=w())&&(o._notch=l.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(r,o){r&2&&k("mdc-notched-outline--notched",o.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},ngContentSelectors:["*"],decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(r,o){r&1&&(je(),tn(0,"div",1),ke(1,"div",2,0),se(3),Te(),tn(4,"div",3))},encapsulation:2})})()}return n})(),vn=(()=>{class n{id;ngField=null;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;stateChanges=null;value;static \u0275fac=function(t){return new(t||n)};static \u0275dir=V({type:n})}return n})();var yn=new I("MatFormField"),xl=new I("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Ro="fill",Dl="auto",Vo="fixed",wl="translateY(-50%)",lt=(()=>{class n{_elementRef=s(j);_changeDetectorRef=s(U);_platform=s(_e);_idGenerator=s(de);_ngZone=s(X);_defaults=s(xl,{optional:!0});_currentDirection;_unwrapMaybeSignal(e){return En(e)?e():e}_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=an("iconPrefixContainer");_textPrefixContainerSignal=an("textPrefixContainer");_iconSuffixContainerSignal=an("iconSuffixContainer");_textSuffixContainerSignal=an("textSuffixContainer");_prefixSuffixContainers=xe(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=nr(et);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=rt(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Dl}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||Ro;this._appearanceSignal.set(t)}_appearanceSignal=E(Ro);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Vo}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Vo}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new P;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=pe();constructor(){let e=this._defaults,t=s(De);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),nt(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=_n(this._control.ngField)?null:this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&!_n(this._control.ngField)&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=xe(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,i="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(i+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(i+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges?.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges?.pipe(ge([void 0,void 0]),_t(()=>[this._unwrapMaybeSignal(t.errorState),t.userAriaDescribedBy]),Hi(),fe(([[r,o],[l,c]])=>r!==l||o!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&!_n(t.ngField)&&(this._valueChanges=t.ngControl.valueChanges.pipe(Q(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Se(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._unwrapMaybeSignal(this._control.focused);e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Pa({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=xe(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._shouldAlwaysFloat()||this._unwrapMaybeSignal(this._control.shouldLabelFloat):!1}_shouldForward(e){let t=this._control?.ngField||this._control?.ngControl;if(!t)return!1;if(_n(t)){let i=t();return e==="valid"?i.valid():e==="dirty"?i.dirty():e==="touched"?i.touched():e==="pending"?i.pending():e==="untouched"?!i.touched():e==="pristine"?!i.dirty():e==="invalid"?!i.valid():!1}else{let i=t;return e==="valid"?i.valid:e==="dirty"?i.dirty:e==="touched"?i.touched:e==="pending"?i.pending:e==="untouched"?i.untouched:e==="pristine"?i.pristine:e==="invalid"?i.invalid:!1}}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._unwrapMaybeSignal(this._control.errorState)?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let r=this._hintChildren?this._hintChildren.find(l=>l.align==="start"):null,o=this._hintChildren?this._hintChildren.find(l=>l.align==="end"):null;r?e.push(r.id):this._hintLabel&&e.push(this._hintLabelId),o&&e.push(o.id)}else this._errorChildren&&e.push(...this._errorChildren.map(r=>r.id));let t=this._control.describedByIds,i;if(t){let r=this._describedByIds||e;i=e.concat(t.filter(o=>o&&!r.includes(o)))}else i=e;this._control.setDescribedByIds(i),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,i=this._iconSuffixContainer?.nativeElement,r=this._textSuffixContainer?.nativeElement,o=e?.getBoundingClientRect().width??0,l=t?.getBoundingClientRect().width??0,c=i?.getBoundingClientRect().width??0,v=r?.getBoundingClientRect().width??0,h=this._currentDirection==="rtl"?"-1":"1",f=`${o+l}px`,p=`calc(${h} * (${f} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,M=`var(--mat-mdc-form-field-label-transform, ${wl} translateX(${p}))`,F=o+l+c+v;return[M,F]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,i]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),i!==null&&this._notchedOutline?._setMaxWidth(i)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=(function(){let e=["iconPrefixContainer"],t=["textPrefixContainer"],i=["iconSuffixContainer"],r=["textSuffixContainer"],o=["textField"],l=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],c=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function v(L,$){L&1&&z(0,"span",21)}function h(L,$){if(L&1&&(d(0,"label",20),se(1,1),N(2,v,1,0,"span",21),m()),L&2){let _=b(2);C("floating",_._shouldLabelFloat())("monitorResize",_._hasOutline())("id",_._labelId),A("for",_._control.disableAutomaticLabeling?null:_._control.id),u(2),T(!_.hideRequiredMarker&&_._unwrapMaybeSignal(_._control.required)?2:-1)}}function f(L,$){if(L&1&&N(0,h,3,5,"label",20),L&2){let _=b();T(_._hasFloatingLabel()?0:-1)}}function x(L,$){L&1&&z(0,"div",7)}function p(L,$){}function M(L,$){if(L&1&&oe(0,p,0,0,"ng-template",13),L&2){b(2);let _=Ae(1);C("ngTemplateOutlet",_)}}function F(L,$){if(L&1&&(d(0,"div",9),N(1,M,1,1,null,13),m()),L&2){let _=b();C("matFormFieldNotchedOutlineOpen",_._shouldLabelFloat()),u(),T(_._forceDisplayInfixLabel()?-1:1)}}function le(L,$){L&1&&(d(0,"div",10,2),se(2,2),m())}function Xt(L,$){L&1&&(d(0,"div",11,3),se(2,3),m())}function Aa(L,$){}function Ea(L,$){if(L&1&&oe(0,Aa,0,0,"ng-template",13),L&2){b();let _=Ae(1);C("ngTemplateOutlet",_)}}function os(L,$){L&1&&(d(0,"div",14,4),se(2,4),m())}function ss(L,$){L&1&&(d(0,"div",15,5),se(2,5),m())}function ls(L,$){L&1&&z(0,"div",16)}function ds(L,$){L&1&&(d(0,"div",18),se(1,6),m())}function cs(L,$){if(L&1&&(d(0,"mat-hint",22),g(1),m()),L&2){let _=b(2);C("id",_._hintLabelId),u(),Y(_.hintLabel)}}function ms(L,$){if(L&1&&(d(0,"div",19),N(1,cs,2,2,"mat-hint",22),se(2,7),z(3,"div",23),se(4,8),m()),L&2){let _=b();u(),T(_.hintLabel?1:-1)}}return B({type:n,selectors:[["mat-form-field"]],contentQueries:function($,_,q){if($&1&&(Zi(q,_._labelChild,et,5),Ke(q,vn,5)(q,vl,5)(q,yl,5)(q,Po,5)(q,$t,5)),$&2){Ra();let we;D(we=w())&&(_._formFieldControl=we.first),D(we=w())&&(_._prefixChildren=we),D(we=w())&&(_._suffixChildren=we),D(we=w())&&(_._errorChildren=we),D(we=w())&&(_._hintChildren=we)}},viewQuery:function($,_){if($&1&&(Ji(_._iconPrefixContainerSignal,e,5)(_._textPrefixContainerSignal,t,5)(_._iconSuffixContainerSignal,i,5)(_._textSuffixContainerSignal,r,5),J(o,5)(e,5)(t,5)(i,5)(r,5)(No,5)(Oo,5)(Fo,5)),$&2){Ra(4);let q;D(q=w())&&(_._textField=q.first),D(q=w())&&(_._iconPrefixContainer=q.first),D(q=w())&&(_._textPrefixContainer=q.first),D(q=w())&&(_._iconSuffixContainer=q.first),D(q=w())&&(_._textSuffixContainer=q.first),D(q=w())&&(_._floatingLabel=q.first),D(q=w())&&(_._notchedOutline=q.first),D(q=w())&&(_._lineRipple=q.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function($,_){$&2&&k("mat-mdc-form-field-label-always-float",_._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",_._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",_._hasIconSuffix)("mat-form-field-invalid",_._unwrapMaybeSignal(_._control.errorState))("mat-form-field-disabled",_._unwrapMaybeSignal(_._control.disabled))("mat-form-field-autofilled",_._unwrapMaybeSignal(_._control.autofilled))("mat-form-field-appearance-fill",_.appearance=="fill")("mat-form-field-appearance-outline",_.appearance=="outline")("mat-form-field-hide-placeholder",_._hasFloatingLabel()&&!_._shouldLabelFloat())("mat-primary",_.color!=="accent"&&_.color!=="warn")("mat-accent",_.color==="accent")("mat-warn",_.color==="warn")("ng-untouched",_._shouldForward("untouched"))("ng-touched",_._shouldForward("touched"))("ng-pristine",_._shouldForward("pristine"))("ng-dirty",_._shouldForward("dirty"))("ng-valid",_._shouldForward("valid"))("ng-invalid",_._shouldForward("invalid"))("ng-pending",_._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[te([{provide:yn,useExisting:n},{provide:Lo,useExisting:n}])],ngContentSelectors:c,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function($,_){if($&1&&(je(l),oe(0,f,1,1,"ng-template",null,0,tr),d(2,"div",6,1),y("click",function(we){return _._control.onContainerClick(we)}),N(4,x,1,0,"div",7),d(5,"div",8),N(6,F,2,2,"div",9),N(7,le,3,0,"div",10),N(8,Xt,3,0,"div",11),d(9,"div",12),N(10,Ea,1,1,null,13),se(11),m(),N(12,os,3,0,"div",14),N(13,ss,3,0,"div",15),m(),N(14,ls,1,0,"div",16),m(),d(15,"div",17),N(16,ds,2,0,"div",18)(17,ms,5,1,"div",19),m()),$&2){let q,we=_._unwrapMaybeSignal(_._control.disabled);u(2),k("mdc-text-field--filled",!_._hasOutline())("mdc-text-field--outlined",_._hasOutline())("mdc-text-field--no-label",!_._hasFloatingLabel())("mdc-text-field--disabled",we)("mdc-text-field--invalid",_._unwrapMaybeSignal(_._control.errorState)),u(2),T(!_._hasOutline()&&!we?4:-1),u(2),T(_._hasOutline()?6:-1),u(),T(_._hasIconPrefix?7:-1),u(),T(_._hasTextPrefix?8:-1),u(2),T(!_._hasOutline()||_._forceDisplayInfixLabel()?10:-1),u(2),T(_._hasTextSuffix?12:-1),u(),T(_._hasIconSuffix?13:-1),u(),T(_._hasOutline()?-1:14),u(),k("mat-mdc-form-field-subscript-dynamic-size",_.subscriptSizing==="dynamic");let us=_._getSubscriptMessageType();u(),T((q=us)==="error"?16:q==="hint"?17:-1)}},dependencies:[No,Oo,ar,Fo,$t],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})})()}return n})();var Ue=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ie({type:n});static \u0275inj=ne({imports:[mr,lt,Ve]})}return n})();var Cn=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new P;bulk={select:a=>this._select(a),deselect:a=>this._deselect(a),setSelection:a=>this._setSelection(a)};constructor(a=!1,e,t=!0,i){this._multiple=a,this._emitChanges=t,this.compareWith=i,e&&e.length&&(a?e.forEach(r=>this._markSelected(r)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...a){return this._select(a)}deselect(...a){return this._deselect(a)}setSelection(...a){return this._setSelection(a)}toggle(a){return this.isSelected(a)?this.deselect(a):this.select(a)}clear(a=!0){this._unmarkAll();let e=this._hasQueuedChanges();return a&&this._emitChangeEvent(),e}isSelected(a){return this._selection.has(this._getConcreteValue(a))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(a){this._multiple&&this.selected&&this._selected.sort(a)}isMultipleSelection(){return this._multiple}_select(a){this._verifyValueAssignment(a),a.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(a){this._verifyValueAssignment(a),a.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(a){this._verifyValueAssignment(a);let e=this.selected,t=new Set(a.map(r=>this._getConcreteValue(r)));a.forEach(r=>this._markSelected(r)),e.filter(r=>!t.has(this._getConcreteValue(r,t))).forEach(r=>this._unmarkSelected(r));let i=this._hasQueuedChanges();return this._emitChangeEvent(),i}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(a){a=this._getConcreteValue(a),this.isSelected(a)||(this._multiple||this._unmarkAll(),this.isSelected(a)||this._selection.add(a),this._emitChanges&&this._selectedToEmit.push(a))}_unmarkSelected(a){a=this._getConcreteValue(a),this.isSelected(a)&&(this._selection.delete(a),this._emitChanges&&this._deselectedToEmit.push(a))}_unmarkAll(){this.isEmpty()||this._selection.forEach(a=>this._unmarkSelected(a))}_verifyValueAssignment(a){a.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(a,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(a,t))return t;return a}else return a}};var Al=new I("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(W);return()=>sn(n)}}),El=new I("MAT_SELECT_CONFIG"),Il=new I("MatSelectTrigger"),yi=class{source;value;constructor(a,e){this.source=a,this.value=e}},Bo=(()=>{class n{_viewportRuler=s(Yn);_changeDetectorRef=s(U);_elementRef=s(j);_dir=s(De,{optional:!0});_idGenerator=s(de);_renderer=s(ae);_parentFormField=s(yn,{optional:!0});ngControl=s(Je,{self:!0,optional:!0});_liveAnnouncer=s(Pn);_defaultOptions=s(El,{optional:!0});_animationsDisabled=pe();_popoverLocation;_initialized=new P;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,r=Tr(e,this.options,this.optionGroups),o=t._getHostElement();e===0&&r===1?i.scrollTop=0:i.scrollTop=Fr(o.offsetTop,o.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new yi(this,e)}_scrollStrategyFactory=s(Al);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new P;_errorStateTracker;stateChanges=new P;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=E(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(ce.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Ft(()=>{let e=this.options;return e?e.changes.pipe(ge(e),vt(()=>Se(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(vt(()=>this.optionSelectionChanges))});openedChange=new S;_openedStream=this.openedChange.pipe(fe(e=>e),_t(()=>{}));_closedStream=this.openedChange.pipe(fe(e=>!e),_t(()=>{}));selectionChange=new S;valueChange=new S;constructor(){let e=s(qn),t=s(gn,{optional:!0}),i=s(st,{optional:!0}),r=s(new nn("tabindex"),{optional:!0}),o=s(Mr,{optional:!0}),l=s(ha,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Wn(e,l||this.ngControl,i,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=r==null?0:parseInt(r)||0,this._popoverLocation=o?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Cn(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(Q(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(Q(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(ge(null),Q(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute("aria-labelledby",e):i.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Ye(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(i),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",r=>{r.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,r=t===13||t===32,o=this._keyManager;if(!o.isTyping()&&r&&!Pe(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let l=this.selected;o.onKeydown(e);let c=this.selected;c&&l!==c&&this._liveAnnouncer.announce(c.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,r=i===40||i===38,o=t.isTyping();if(r&&e.altKey)e.preventDefault(),this.close();else if(!o&&(i===13||i===32)&&t.activeItem&&!Pe(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!o&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let l=this.options.some(c=>!c.disabled&&!c.selected);this.options.forEach(c=>{c.disabled||(l?c.select():c.deselect())})}else{let l=t.activeItemIndex;t.onKeydown(e),this._multiple&&r&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==l&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Pe(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Ga?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new fr(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Se(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(Q(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Se(...this.options.map(t=>t._stateChanges)).pipe(Q(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let i=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=sr(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=(function(){let e=["trigger"],t=["panel"],i=[[["mat-select-trigger"]],"*"],r=["mat-select-trigger","*"];function o(f,x){if(f&1&&(d(0,"span",4),g(1),m()),f&2){let p=b();u(),Y(p.placeholder)}}function l(f,x){f&1&&se(0)}function c(f,x){if(f&1&&(d(0,"span",11),g(1),m()),f&2){let p=b(2);u(),Y(p.triggerValue)}}function v(f,x){if(f&1&&(d(0,"span",5),N(1,l,1,0)(2,c,2,1,"span",11),m()),f&2){let p=b();u(),T(p.customTrigger?1:2)}}function h(f,x){if(f&1){let p=G();d(0,"div",12,1),y("keydown",function(F){O(p);let le=b();return R(le._handleKeydown(F))}),se(2,1),m()}if(f&2){let p=b();Ge(p.panelClass),k("mat-select-panel-animations-enabled",!p._animationsDisabled)("mat-primary",p._parentFormField?.color==="primary")("mat-accent",p._parentFormField?.color==="accent")("mat-warn",p._parentFormField?.color==="warn")("mat-undefined",!p._parentFormField?.color),A("id",p.id+"-panel")("aria-multiselectable",p.multiple)("aria-label",p.ariaLabel||null)("aria-labelledby",p._getPanelAriaLabelledby())}}return B({type:n,selectors:[["mat-select"]],contentQueries:function(x,p,M){if(x&1&&Ke(M,Il,5)(M,$n,5)(M,Nr,5),x&2){let F;D(F=w())&&(p.customTrigger=F.first),D(F=w())&&(p.options=F),D(F=w())&&(p.optionGroups=F)}},viewQuery:function(x,p){if(x&1&&J(e,5)(t,5)(Ya,5),x&2){let M;D(M=w())&&(p.trigger=M.first),D(M=w())&&(p.panel=M.first),D(M=w())&&(p._overlayDir=M.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(x,p){x&1&&y("keydown",function(F){return p._handleKeydown(F)})("focus",function(){return p._onFocus()})("blur",function(){return p._onBlur()}),x&2&&(A("id",p.id)("tabindex",p.disabled?-1:p.tabIndex)("aria-controls",p.panelOpen?p.id+"-panel":null)("aria-expanded",p.panelOpen)("aria-label",p.ariaLabel||null)("aria-required",p.required.toString())("aria-disabled",p.disabled.toString())("aria-invalid",p.errorState)("aria-activedescendant",p._getAriaActiveDescendant()),k("mat-mdc-select-disabled",p.disabled)("mat-mdc-select-invalid",p.errorState)("mat-mdc-select-required",p.required)("mat-mdc-select-empty",p.empty)("mat-mdc-select-multiple",p.multiple)("mat-select-open",p.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",K],disableRipple:[2,"disableRipple","disableRipple",K],tabIndex:[2,"tabIndex","tabIndex",f=>f==null?0:Dt(f)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",K],placeholder:"placeholder",required:[2,"required","required",K],multiple:[2,"multiple","multiple",K],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",K],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",Dt],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",K]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[te([{provide:vn,useExisting:n},{provide:Ir,useExisting:n}]),Ce],ngContentSelectors:r,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(x,p){if(x&1&&(je(i),d(0,"div",2,0),y("click",function(){return p.open()}),d(3,"div",3),N(4,o,2,1,"span",4)(5,v,3,1,"span",5),m(),d(6,"div",6)(7,"div",7),yt(),d(8,"svg",8),z(9,"path",9),m()()()(),oe(10,h,3,16,"ng-template",10),y("detach",function(){return p.close()})("backdropClick",function(){return p.close()})("overlayKeydown",function(F){return p._handleOverlayKeydown(F)})),x&2){let M=Ae(1);u(3),A("id",p._valueId),u(),T(p.empty?4:5),u(6),C("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",p._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",p._scrollStrategy)("cdkConnectedOverlayOrigin",p._preferredOverlayOrigin||M)("cdkConnectedOverlayPositions",p._positions)("cdkConnectedOverlayWidth",p._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",p._popoverLocation)}},dependencies:[Ga,Ya],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-select-enabled-trigger-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-select-trigger-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-select-trigger-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-select-trigger-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-select-trigger-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-select-trigger-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--%NS%mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-select-invalid-arrow-color, var(--%NS%mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--%NS%mat-select-enabled-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-focused-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-disabled-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--%NS%mat-select-panel-background-color, var(--%NS%mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--%NS%mat-select-placeholder-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--%NS%mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})})()}return n})();var zo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ie({type:n});static \u0275inj=ne({imports:[$e,$a,Ve,Pt,Ue,$a]})}return n})();var Tl=Math.pow(2,31)-1,wn=class{_overlayRef;instance;containerInstance;_afterDismissed=new P;_afterOpened=new P;_onAction=new P;_durationTimeoutId;_dismissedByAction=!1;constructor(a,e){this._overlayRef=e,this.containerInstance=a,a._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(a){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(a,Tl))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},Ho=new I("MatSnackBarData"),Ut=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},Fl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=V({type:n,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return n})(),Ol=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=V({type:n,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return n})(),Rl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=V({type:n,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return n})(),Vl=(()=>{class n{snackBarRef=s(wn);data=s(Ho);action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=(function(){function e(t,i){if(t&1){let r=G();d(0,"div",1)(1,"button",2),y("click",function(){O(r);let l=b();return R(l.action())}),g(2),m()()}if(t&2){let r=b();u(2),ee(" ",r.data.action," ")}}return B({type:n,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(i,r){i&1&&(d(0,"div",0),g(1),m(),N(2,e,3,1,"div",1)),i&2&&(u(),ee(" ",r.data.message,`
`),u(),T(r.hasAction?2:-1))},dependencies:[Ee,Fl,Ol,Rl],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})})()}return n})(),Ci="_mat-snack-bar-enter",xi="_mat-snack-bar-exit",Pl=(()=>{class n extends jn{_ngZone=s(X);_elementRef=s(j);_changeDetectorRef=s(U);_platform=s(_e);_animationsDisabled=pe();snackBarConfig=s(Ut);_document=s(mt);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=s(W);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new P;_onExit=new P;_onEnter=new P;_animationState="void";_live;_label;_role;_liveElementId=s(de).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===xi?this._completeExit():e===Ci&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?Me(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Ci)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(Ci)},200)))}exit(){return this._destroyed?ct(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?Me(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(xi)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(xi),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(o=>e.classList.add(o)):e.classList.add(t)),this._exposeToModals();let i=this._label.nativeElement,r="mdc-snackbar__label";i.classList.toggle(r,!i.querySelector(`.${r}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let i=0;i<t.length;i++){let r=t[i],o=r.getAttribute("aria-owns");this._trackedModals.add(r),o?o.indexOf(e)===-1&&r.setAttribute("aria-owns",o+" "+e):r.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let i=t.replace(this._liveElementId,"").trim();i.length>0?e.setAttribute("aria-owns",i):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector("[aria-hidden]"),i=e.querySelector("[aria-live]");if(t&&i){let r=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(r=document.activeElement),t.removeAttribute("aria-hidden"),i.appendChild(t),r?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=(function(){let e=["label"];function t(i,r){}return B({type:n,selectors:[["mat-snack-bar-container"]],viewQuery:function(r,o){if(r&1&&J(Le,7)(e,7),r&2){let l;D(l=w())&&(o._portalOutlet=l.first),D(l=w())&&(o._label=l.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(r,o){r&1&&y("animationend",function(c){return o.onAnimationEnd(c.animationName)})("animationcancel",function(c){return o.onAnimationEnd(c.animationName)}),r&2&&k("mat-snack-bar-container-enter",o._animationState==="visible")("mat-snack-bar-container-exit",o._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!o._animationsDisabled)},features:[Z],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(r,o){r&1&&(d(0,"div",1)(1,"div",2,0)(3,"div",3),oe(4,t,0,0,"ng-template",4),m(),z(5,"div"),m()()),r&2&&(u(5),A("aria-live",o._live)("role",o._role)("id",o._liveElementId))},dependencies:[Le],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--%NS%mat-snack-bar-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-snack-bar-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-snack-bar-container-color, var(--%NS%mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--%NS%mat-snack-bar-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-snack-bar-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-snack-bar-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  line-height: var(--%NS%mat-snack-bar-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--%NS%mat-snack-bar-button-color, var(--%NS%mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --%NS%mat-button-text-state-layer-color: currentColor;
  --%NS%mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2,changeDetection:1})})()}return n})(),Ll=new I("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new Ut}),ba=(()=>{class n{_live=s(Pn);_injector=s(W);_breakpointObserver=s(dr);_parentSnackBar=s(n,{optional:!0,skipSelf:!0});_defaultConfig=s(Ll);_animationsDisabled=pe();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Vl;snackBarContainerComponent=Pl;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",i){let r=H(H({},this._defaultConfig),i);return r.data={message:e,action:t},r.announcementMessage===e&&(r.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,r)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let i=t&&t.viewContainerRef&&t.viewContainerRef.injector,r=W.create({parent:i||this._injector,providers:[{provide:Ut,useValue:t}]}),o=new Ze(this.snackBarContainerComponent,t.viewContainerRef,r),l=e.attach(o);return l.instance.snackBarConfig=t,l.instance}_attach(e,t){let i=H(H(H({},new Ut),this._defaultConfig),t),r=this._createOverlay(i),o=this._attachSnackBarContainer(r,i),l=new wn(o,r);if(e instanceof at){let c=new Mt(e,null,{$implicit:i.data,snackBarRef:l});l.instance=o.attachTemplatePortal(c)}else{let c=this._createInjector(i,l),v=new Ze(e,void 0,c),h=o.attachComponentPortal(v);l.instance=h.instance}return this._breakpointObserver.observe(_r.HandsetPortrait).pipe(Q(r.detachments())).subscribe(c=>{r.overlayElement.classList.toggle(this.handsetCssClass,c.matches)}),i.announcementMessage&&o._onAnnounce.subscribe(()=>{this._live.announce(i.announcementMessage,i.politeness)}),this._animateSnackBar(l,i),this._openedSnackBarRef=l,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new ln;t.direction=e.direction;let i=kt(this._injector),r=e.direction==="rtl",o=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!r||e.horizontalPosition==="end"&&r,l=!o&&e.horizontalPosition!=="center";return o?i.left("0"):l?i.right("0"):i.centerHorizontally(),e.verticalPosition==="top"?i.top("0"):i.bottom("0"),t.positionStrategy=i,t.disableAnimations=this._animationsDisabled,At(this._injector,t)}_createInjector(e,t){let i=e&&e.viewContainerRef&&e.viewContainerRef.injector;return W.create({parent:i||this._injector,providers:[{provide:wn,useValue:t},{provide:Ho,useValue:e.data}]})}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Ne({token:n,factory:n.\u0275fac})}return n})();var Bl=20;var zl=new I("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(W);return()=>sn(n,{scrollThrottle:Bl})}}),Hl=new I("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var jo="tooltip-panel",jl={passive:!0},Gl=8,Yl=8,$l=24,ql=200,Nt=(()=>{class n{_elementRef=s(j);_ngZone=s(X);_platform=s(_e);_ariaDescriber=s(br);_focusMonitor=s(rn);_dir=s(De);_injector=s(W);_viewContainerRef=s(en);_mediaMatcher=s(lr);_document=s(mt);_renderer=s(ae);_animationsDisabled=pe();_defaultOptions=s(Hl,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Go;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=rt(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=rt(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=wt(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=wt(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new P;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=Gl}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(Q(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let i=this._createOverlay(t);this._detach(),this._portal=this._portal||new Ze(this._tooltipComponent,this._viewContainerRef);let r=this._tooltipInstance=i.attach(this._portal).instance;r._triggerElement=this._elementRef.nativeElement,r._mouseLeaveHideDelay=this._hideDelay,r.afterHidden().pipe(Q(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),r.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let o=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&o._origin instanceof j)return this._overlayRef;this._detach()}let t=this._injector.get(Dr).getAncestorScrollContainers(this._elementRef),i=`${this._cssClassPrefix}-${jo}`,r=ja(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation("global");return r.positionChanges.pipe(Q(this._destroyed)).subscribe(o=>{this._updateCurrentPositionClass(o.connectionPair),this._tooltipInstance&&o.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=At(this._injector,{direction:this._dir,positionStrategy:r,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,i]:i,scrollStrategy:this._injector.get(zl)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(Q(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(Q(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(Q(this._destroyed)).subscribe(o=>{o.preventDefault(),o.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(Q(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,i=this._getOrigin(),r=this._getOverlayPosition();t.withPositions([this._addOffset(H(H({},i.main),r.main)),this._addOffset(H(H({},i.fallback),r.fallback))])}_addOffset(e){let t=Yl,i=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-t:e.originY==="bottom"?e.offsetY=t:e.originX==="start"?e.offsetX=i?-t:t:e.originX==="end"&&(e.offsetX=i?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",t=this.position,i;t=="above"||t=="below"?i={originX:"center",originY:t=="above"?"top":"bottom"}:t=="before"||t=="left"&&e||t=="right"&&!e?i={originX:"start",originY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(i={originX:"end",originY:"center"});let{x:r,y:o}=this._invertPosition(i.originX,i.originY);return{main:i,fallback:{originX:r,originY:o}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",t=this.position,i;t=="above"?i={overlayX:"center",overlayY:"bottom"}:t=="below"?i={overlayX:"center",overlayY:"top"}:t=="before"||t=="left"&&e||t=="right"&&!e?i={overlayX:"end",overlayY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(i={overlayX:"start",overlayY:"center"});let{x:r,y:o}=this._invertPosition(i.overlayX,i.overlayY);return{main:i,fallback:{overlayX:r,overlayY:o}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Me(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position==="above"||this.position==="below"?t==="top"?t="bottom":t==="bottom"&&(t="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:i,originY:r}=e,o;if(t==="center"?this._dir&&this._dir.value==="rtl"?o=i==="end"?"left":"right":o=i==="start"?"left":"right":o=t==="bottom"&&r==="top"?"above":"below",o!==this._currentPosition){let l=this._overlayRef;if(l){let c=`${this._cssClassPrefix}-${jo}-`;l.removePanelClass(c+this._currentPosition),l.addPanelClass(c+o)}this._currentPosition=o}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let t=e.targetTouches?.[0],i=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let r=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,i)},this._defaultOptions?.touchLongPressShowDelay??r)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),i=this._elementRef.nativeElement;t!==i&&!i.contains(t)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,jl))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let t=this._elementRef.nativeElement,i=t.style;(e==="on"||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA")&&(i.userSelect=i.msUserSelect=i.webkitUserSelect=i.MozUserSelect="none"),(e==="on"||!t.draggable)&&(i.webkitUserDrag="none"),i.touchAction="none",i.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||Me({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!Pe(e):!0;static \u0275fac=function(t){return new(t||n)};static \u0275dir=V({type:n,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(t,i){t&2&&k("mat-mdc-tooltip-disabled",i.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return n})(),Go=(()=>{class n{_changeDetectorRef=s(U);_elementRef=s(j);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=pe();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new P;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>$l&&e.width>=ql}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,i=this._showAnimation,r=this._hideAnimation;if(t.classList.remove(e?r:i),t.classList.add(e?i:r),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let o=getComputedStyle(t);(o.getPropertyValue("animation-duration")==="0s"||o.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=(function(){let e=["tooltip"];return B({type:n,selectors:[["mat-tooltip-component"]],viewQuery:function(i,r){if(i&1&&J(e,7),i&2){let o;D(o=w())&&(r._tooltip=o.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(i,r){i&1&&y("mouseleave",function(l){return r._handleMouseLeave(l)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(i,r){i&1&&(ke(0,"div",1,0),In("animationend",function(l){return r._handleAnimationEnd(l)}),ke(2,"div",2),g(3),Te()()),i&2&&(Ge(r.tooltipClass),k("mdc-tooltip--multiline",r._isMultiline),u(3),Y(r.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--%NS%mat-tooltip-container-color, var(--%NS%mat-sys-inverse-surface));
  color: var(--%NS%mat-tooltip-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-tooltip-container-shape, var(--%NS%mat-sys-corner-extra-small));
  font-family: var(--%NS%mat-tooltip-supporting-text-font, var(--%NS%mat-sys-body-small-font));
  font-size: var(--%NS%mat-tooltip-supporting-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-tooltip-supporting-text-weight, var(--%NS%mat-sys-body-small-weight));
  line-height: var(--%NS%mat-tooltip-supporting-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  letter-spacing: var(--%NS%mat-tooltip-supporting-text-tracking, var(--%NS%mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2})})()}return n})();var _a=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ie({type:n});static \u0275inj=ne({imports:[Vt,$e,Ve,Pt]})}return n})();var Wl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=B({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,i){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2})}return n})(),Ul={passive:!0},$o=(()=>{class n{_platform=s(_e);_ngZone=s(X);_renderer=s(Wi).createRenderer(null,null);_styleLoader=s(it);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return An;this._styleLoader.load(Wl);let t=Ba(e),i=this._monitoredElements.get(t);if(i)return i.subject;let r=new P,o="cdk-text-field-autofilled",l=v=>{v.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(o)?(t.classList.add(o),this._ngZone.run(()=>r.next({target:v.target,isAutofilled:!0}))):v.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(o)&&(t.classList.remove(o),this._ngZone.run(()=>r.next({target:v.target,isAutofilled:!1})))},c=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",l,Ul)));return this._monitoredElements.set(t,{subject:r,unlisten:c}),r}stopMonitoring(e){let t=Ba(e),i=this._monitoredElements.get(t);i&&(i.unlisten(),i.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Ne({token:n,factory:n.\u0275fac})}return n})();var qo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ie({type:n});static \u0275inj=ne({})}return n})();var Wo=new I("MAT_INPUT_VALUE_ACCESSOR");var Kl=["button","checkbox","file","hidden","image","radio","range","reset","submit"],Ql=new I("MAT_INPUT_CONFIG"),va=(()=>{class n{_elementRef=s(j);_platform=s(_e);ngControl=s(Je,{optional:!0,self:!0});_autofillMonitor=s($o);_ngZone=s(X);_formField=s(yn,{optional:!0});_renderer=s(ae);_uid=s(de).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=s(Ql,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new P;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=rt(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(ce.required)??!1}set required(e){this._required=rt(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&za().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=rt(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>za().has(e));constructor(){let e=s(gn,{optional:!0}),t=s(st,{optional:!0}),i=s(qn),r=s(Wo,{optional:!0,self:!0}),o=s(ha,{optional:!0,self:!0}),l=this._elementRef.nativeElement,c=l.nodeName.toLowerCase();r?En(r.value)?this._signalBasedValueAccessor=r:this._inputValueAccessor=r:this._inputValueAccessor=l,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(l,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Wn(i,o||this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=c==="select",this._isTextarea=c==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=l.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&nt(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){Kl.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=V({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,i){t&1&&y("focus",function(){return i._focusChanged(!0)})("blur",function(){return i._focusChanged(!1)})("input",function(){return i._onInput()}),t&2&&(Fe("id",i.id)("disabled",i.disabled&&!i.disabledInteractive)("required",i.required),A("name",i.name||null)("readonly",i._getReadonlyAttribute())("aria-disabled",i.disabled&&i.disabledInteractive?"true":null)("aria-invalid",i.empty&&i.required?null:i.errorState)("aria-required",i.required)("id",i.id),k("mat-input-server",i._isServer)("mat-mdc-form-field-textarea-control",i._isInFormField&&i._isTextarea)("mat-mdc-form-field-input-control",i._isInFormField)("mat-mdc-input-disabled-interactive",i.disabledInteractive)("mdc-text-field__input",i._isInFormField)("mat-mdc-native-select-inline",i._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",K]},exportAs:["matInput"],features:[te([{provide:vn,useExisting:n}]),Ce]})}return n})(),ya=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ie({type:n});static \u0275inj=ne({imports:[Ue,Ue,qo,Ve]})}return n})();var dt=(()=>{class n{changes=new P;calendarLabel="Calendar";openCalendarLabel="Open calendar";closeCalendarLabel="Close calendar";prevMonthLabel="Previous month";nextMonthLabel="Next month";prevYearLabel="Previous year";nextYearLabel="Next year";prevMultiYearLabel="Previous 24 years";nextMultiYearLabel="Next 24 years";switchToMonthViewLabel="Choose date";switchToMultiYearViewLabel="Choose month and year";startDateLabel="Start date";endDateLabel="End date";comparisonDateLabel="Comparison range";formatYearRange(e,t){return`${e} \u2013 ${t}`}formatYearRangeLabel(e,t){return`${e} to ${t}`}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Ne({token:n,factory:n.\u0275fac})}return n})(),Xl=0,Mn=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=Xl++;cssClasses;constructor(a,e,t,i,r,o=a,l){this.value=a,this.displayValue=e,this.ariaLabel=t,this.enabled=i,this.compareValue=o,this.rawValue=l,this.cssClasses=r instanceof Set?Array.from(r):r}},Zl={passive:!1,capture:!0},Ca={passive:!0,capture:!0},Uo={passive:!0},Kt=(()=>{class n{_elementRef=s(j);_ngZone=s(X);_platform=s(_e);_intl=s(dt);_eventCleanups;_skipNextFocus=!1;_focusActiveCellAfterViewChecked=!1;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=!1)}isRange=!1;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new S;previewChange=new S;activeDateChange=new S;dragStarted=new S;dragEnded=new S;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=!1;_injector=s(W);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=s(ae),t=s(de);this._startDateLabelId=t.getId("mat-calendar-body-start-"),this._endDateLabelId=t.getId("mat-calendar-body-end-"),this._comparisonStartDateLabelId=t.getId("mat-calendar-body-comparison-start-"),this._comparisonEndDateLabelId=t.getId("mat-calendar-body-comparison-end-"),s(it).load(Ln),this._ngZone.runOutsideAngular(()=>{let i=this._elementRef.nativeElement,r=[e.listen(i,"touchmove",this._touchmoveHandler,Zl),e.listen(i,"mouseenter",this._enterHandler,Ca),e.listen(i,"focus",this._enterHandler,Ca),e.listen(i,"mouseleave",this._leaveHandler,Ca),e.listen(i,"blur",this._leaveHandler,Ca),e.listen(i,"mousedown",this._mousedownHandler,Uo),e.listen(i,"touchstart",this._mousedownHandler,Uo)];this._platform.isBrowser&&r.push(e.listen("window","mouseup",this._mouseupHandler),e.listen("window","touchend",this._touchendHandler)),this._eventCleanups=r})}_cellClicked(e,t){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:t})}_emitActiveDateChange(e,t){e.enabled&&this.activeDateChange.emit({value:e.value,event:t})}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let t=e.numCols,{rows:i,numCols:r}=this;(e.rows||t)&&(this._firstRowOffset=i&&i.length&&i[0].length?r-i[0].length:0),(e.cellAspectRatio||t||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/r}%`),(t||!this._cellWidth)&&(this._cellWidth=`${100/r}%`)}ngOnDestroy(){this._eventCleanups.forEach(e=>e())}_isActiveCell(e,t){let i=e*this.numCols+t;return e&&(i-=this._firstRowOffset),i==this.activeCell}_focusActiveCell(e=!0){Me(()=>{setTimeout(()=>{let t=this._elementRef.nativeElement.querySelector(".mat-calendar-body-active");t&&(e||(this._skipNextFocus=!0),t.focus())})},{injector:this._injector})}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}_isRangeStart(e){return Mi(e,this.startValue,this.endValue)}_isRangeEnd(e){return ki(e,this.startValue,this.endValue)}_isInRange(e){return Ai(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return Mi(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,t,i){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return!1;let r=this.rows[t][i-1];if(!r){let o=this.rows[t-1];r=o&&o[o.length-1]}return r&&!this._isRangeEnd(r.compareValue)}_isComparisonBridgeEnd(e,t,i){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return!1;let r=this.rows[t][i+1];if(!r){let o=this.rows[t+1];r=o&&o[0]}return r&&!this._isRangeStart(r.compareValue)}_isComparisonEnd(e){return ki(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return Ai(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return Mi(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return ki(e,this.previewStart,this.previewEnd)}_isInPreview(e){return Ai(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return`${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return`${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type==="focus"){this._skipNextFocus=!1;return}if(e.target&&this.isRange){let t=this._getCellFromElement(e.target);t&&this._ngZone.run(()=>this.previewChange.emit({value:t.enabled?t:null,event:e}))}};_touchmoveHandler=e=>{if(!this.isRange)return;let t=Ko(e),i=t?this._getCellFromElement(t):null;t!==e.target&&(this._didDragSinceMouseDown=!0),Si(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:i?.enabled?i:null,event:e}))};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!=="blur"&&(this._didDragSinceMouseDown=!0),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})))};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=!1;let t=e.target&&this._getCellFromElement(e.target);!t||!this._isInRange(t.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:t.rawValue,event:e})})};_mouseupHandler=e=>{if(!this.isRange)return;let t=Si(e.target);if(!t){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e})});return}t.closest(".mat-calendar-body")===this._elementRef.nativeElement&&this._ngZone.run(()=>{let i=this._getCellFromElement(t);this.dragEnded.emit({value:i?.rawValue??null,event:e})})};_touchendHandler=e=>{let t=Ko(e);t&&this._mouseupHandler({target:t})};_getCellFromElement(e){let t=Si(e);if(t){let i=t.getAttribute("data-mat-row"),r=t.getAttribute("data-mat-col");if(i&&r)return this.rows[parseInt(i)]?.[parseInt(r)]||null}return null}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=(function(){function e(c,v){return this._trackRow(v)}let t=(c,v)=>v.id;function i(c,v){if(c&1&&(ke(0,"tr",0)(1,"td",3),g(2),Te()()),c&2){let h=b();u(),Oe("padding-top",h._cellPadding)("padding-bottom",h._cellPadding),A("colspan",h.numCols),u(),ee(" ",h.label," ")}}function r(c,v){if(c&1&&(ke(0,"td",3),g(1),Te()),c&2){let h=b(2);Oe("padding-top",h._cellPadding)("padding-bottom",h._cellPadding),A("colspan",h._firstRowOffset),u(),ee(" ",h._firstRowOffset>=h.labelMinRequiredCells?h.label:""," ")}}function o(c,v){if(c&1){let h=G();ke(0,"td",6)(1,"button",7),In("click",function(x){let p=O(h).$implicit,M=b(2);return R(M._cellClicked(p,x))})("focus",function(x){let p=O(h).$implicit,M=b(2);return R(M._emitActiveDateChange(p,x))}),ke(2,"span",8),g(3),Te(),tn(4,"span",9),Te()()}if(c&2){let h=v.$implicit,f=v.$index,x=b().$index,p=b();Oe("width",p._cellWidth)("padding-top",p._cellPadding)("padding-bottom",p._cellPadding),A("data-mat-row",x)("data-mat-col",f),u(),Ge(h.cssClasses),k("mat-calendar-body-disabled",!h.enabled)("mat-calendar-body-active",p._isActiveCell(x,f))("mat-calendar-body-range-start",p._isRangeStart(h.compareValue))("mat-calendar-body-range-end",p._isRangeEnd(h.compareValue))("mat-calendar-body-in-range",p._isInRange(h.compareValue))("mat-calendar-body-comparison-bridge-start",p._isComparisonBridgeStart(h.compareValue,x,f))("mat-calendar-body-comparison-bridge-end",p._isComparisonBridgeEnd(h.compareValue,x,f))("mat-calendar-body-comparison-start",p._isComparisonStart(h.compareValue))("mat-calendar-body-comparison-end",p._isComparisonEnd(h.compareValue))("mat-calendar-body-in-comparison-range",p._isInComparisonRange(h.compareValue))("mat-calendar-body-preview-start",p._isPreviewStart(h.compareValue))("mat-calendar-body-preview-end",p._isPreviewEnd(h.compareValue))("mat-calendar-body-in-preview",p._isInPreview(h.compareValue)),Fe("tabIndex",p._isActiveCell(x,f)?0:-1),A("aria-label",h.ariaLabel)("aria-disabled",!h.enabled||null)("aria-pressed",p._isSelected(h.compareValue))("aria-current",p.todayValue===h.compareValue?"date":null)("aria-describedby",p._getDescribedby(h.compareValue)),u(),k("mat-calendar-body-selected",p._isSelected(h.compareValue))("mat-calendar-body-comparison-identical",p._isComparisonIdentical(h.compareValue))("mat-calendar-body-today",p.todayValue===h.compareValue),u(),ee(" ",h.displayValue," ")}}function l(c,v){if(c&1&&(ke(0,"tr",1),N(1,r,2,6,"td",4),me(2,o,5,49,"td",5,t),Te()),c&2){let h=v.$implicit,f=v.$index,x=b();u(),T(f===0&&x._firstRowOffset?1:-1),u(),ue(h)}}return B({type:n,selectors:[["","mat-calendar-body",""]],hostAttrs:[1,"mat-calendar-body"],inputs:{label:"label",rows:"rows",todayValue:"todayValue",startValue:"startValue",endValue:"endValue",labelMinRequiredCells:"labelMinRequiredCells",numCols:"numCols",activeCell:"activeCell",isRange:"isRange",cellAspectRatio:"cellAspectRatio",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",previewStart:"previewStart",previewEnd:"previewEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedValueChange:"selectedValueChange",previewChange:"previewChange",activeDateChange:"activeDateChange",dragStarted:"dragStarted",dragEnded:"dragEnded"},exportAs:["matCalendarBody"],features:[Ce],decls:11,vars:11,consts:[["aria-hidden","true"],["role","row"],[1,"mat-calendar-body-hidden-label",3,"id"],[1,"mat-calendar-body-label"],[1,"mat-calendar-body-label",3,"paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container",3,"width","paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container"],["type","button",1,"mat-calendar-body-cell",3,"click","focus","tabindex"],[1,"mat-calendar-body-cell-content","mat-focus-indicator"],["aria-hidden","true",1,"mat-calendar-body-cell-preview"]],template:function(v,h){v&1&&(N(0,i,3,6,"tr",0),me(1,l,4,1,"tr",1,e,!0),ke(3,"span",2),g(4),Te(),ke(5,"span",2),g(6),Te(),ke(7,"span",2),g(8),Te(),ke(9,"span",2),g(10),Te()),v&2&&(T(h._firstRowOffset<h.labelMinRequiredCells?0:-1),u(),ue(h.rows),u(2),Fe("id",h._startDateLabelId),u(),ee(" ",h.startDateAccessibleName,`
`),u(),Fe("id",h._endDateLabelId),u(),ee(" ",h.endDateAccessibleName,`
`),u(),Fe("id",h._comparisonStartDateLabelId),u(),Va(" ",h.comparisonDateAccessibleName," ",h.startDateAccessibleName,`
`),u(),Fe("id",h._comparisonEndDateLabelId),u(),Va(" ",h.comparisonDateAccessibleName," ",h.endDateAccessibleName,`
`))},styles:[`.mat-calendar-body {
  min-width: 224px;
}

.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--%NS%mat-datepicker-calendar-date-today-outline-color, var(--%NS%mat-sys-primary));
}

.mat-calendar-body-label {
  height: 0;
  line-height: 0;
  text-align: start;
  padding-left: 4.7142857143%;
  padding-right: 4.7142857143%;
  font-size: var(--%NS%mat-datepicker-calendar-body-label-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-datepicker-calendar-body-label-text-weight, var(--%NS%mat-sys-title-small-weight));
  color: var(--%NS%mat-datepicker-calendar-body-label-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-calendar-body-hidden-label {
  display: none;
}

.mat-calendar-body-cell-container {
  position: relative;
  height: 0;
  line-height: 0;
}

.mat-calendar-body-cell {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  text-align: center;
  outline: none;
  margin: 0;
  font-family: var(--%NS%mat-datepicker-calendar-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-datepicker-calendar-text-size, var(--%NS%mat-sys-body-medium-size));
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-calendar-body-cell::-moz-focus-inner {
  border: 0;
}

.mat-calendar-body-cell::before,
.mat-calendar-body-cell::after,
.mat-calendar-body-cell-preview {
  content: "";
  position: absolute;
  top: 5%;
  left: 0;
  z-index: 0;
  box-sizing: border-box;
  display: block;
  height: 90%;
  width: 100%;
}

.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-start::after,
.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
.mat-calendar-body-comparison-start::after,
.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 5%;
  width: 95%;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
[dir=rtl] .mat-calendar-body-comparison-start::after,
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 0;
  border-radius: 0;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
.mat-calendar-body-comparison-end::after,
.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
[dir=rtl] .mat-calendar-body-comparison-end::after,
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  left: 5%;
  border-radius: 0;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}

[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after, [dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after {
  width: 90%;
}

.mat-calendar-body-in-preview {
  color: var(--%NS%mat-datepicker-calendar-date-preview-state-outline-color, var(--%NS%mat-sys-primary));
}
.mat-calendar-body-in-preview .mat-calendar-body-cell-preview {
  border-top: dashed 1px;
  border-bottom: dashed 1px;
}

.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: 0;
  border-right: dashed 1px;
}

.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: 0;
  border-left: dashed 1px;
}

.mat-calendar-body-disabled {
  cursor: default;
}
.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  color: var(--%NS%mat-datepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--%NS%mat-datepicker-calendar-date-today-disabled-state-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-calendar-body-disabled {
    opacity: 0.5;
  }
}

.mat-calendar-body-cell-content {
  top: 5%;
  left: 5%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 90%;
  height: 90%;
  line-height: 1;
  border-width: 1px;
  border-style: solid;
  border-radius: 999px;
  color: var(--%NS%mat-datepicker-calendar-date-text-color, var(--%NS%mat-sys-on-surface));
  border-color: var(--%NS%mat-datepicker-calendar-date-outline-color, transparent);
}
.mat-calendar-body-cell-content.mat-focus-indicator {
  position: absolute;
}
.mat-calendar-body-cell-content::before {
  border-radius: 50%;
}
@media (forced-colors: active) {
  .mat-calendar-body-cell-content {
    border: none;
  }
}

.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  background-color: var(--%NS%mat-datepicker-calendar-date-focus-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}

@media (hover: hover) {
  .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
    background-color: var(--%NS%mat-datepicker-calendar-date-hover-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
  }
}
.mat-calendar-body-selected {
  background-color: var(--%NS%mat-datepicker-calendar-date-selected-state-background-color, var(--%NS%mat-sys-primary));
  color: var(--%NS%mat-datepicker-calendar-date-selected-state-text-color, var(--%NS%mat-sys-on-primary));
}
.mat-calendar-body-disabled > .mat-calendar-body-selected {
  background-color: var(--%NS%mat-datepicker-calendar-date-selected-disabled-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-selected.mat-calendar-body-today {
  box-shadow: inset 0 0 0 1px var(--%NS%mat-datepicker-calendar-date-today-selected-state-outline-color, var(--%NS%mat-sys-primary));
}

.mat-calendar-body-in-range::before {
  background: var(--%NS%mat-datepicker-calendar-date-in-range-state-background-color, var(--%NS%mat-sys-primary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--%NS%mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--%NS%mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--%NS%mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--%NS%mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-bridge-start::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-end::before {
  background: linear-gradient(to right, var(--%NS%mat-datepicker-calendar-date-in-range-state-background-color, var(--%NS%mat-sys-primary-container)) 50%, var(--%NS%mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--%NS%mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-comparison-bridge-end::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-start::before {
  background: linear-gradient(to left, var(--%NS%mat-datepicker-calendar-date-in-range-state-background-color, var(--%NS%mat-sys-primary-container)) 50%, var(--%NS%mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--%NS%mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-in-range > .mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after {
  background: var(--%NS%mat-datepicker-calendar-date-in-overlap-range-state-background-color, var(--%NS%mat-sys-secondary-container));
}

.mat-calendar-body-comparison-identical.mat-calendar-body-selected,
.mat-calendar-body-in-comparison-range > .mat-calendar-body-selected {
  background: var(--%NS%mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color, var(--%NS%mat-sys-secondary));
}

@media (forced-colors: active) {
  .mat-datepicker-popup:not(:empty),
  .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected {
    outline: solid 1px;
  }
  .mat-calendar-body-today {
    outline: dotted 1px;
  }
  .mat-calendar-body-cell::before,
  .mat-calendar-body-cell::after,
  .mat-calendar-body-selected {
    background: none;
  }
  .mat-calendar-body-in-range::before,
  .mat-calendar-body-comparison-bridge-start::before,
  .mat-calendar-body-comparison-bridge-end::before {
    border-top: solid 1px;
    border-bottom: solid 1px;
  }
  .mat-calendar-body-range-start::before {
    border-left: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-start::before {
    border-left: 0;
    border-right: solid 1px;
  }
  .mat-calendar-body-range-end::before {
    border-right: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-end::before {
    border-right: 0;
    border-left: solid 1px;
  }
  .mat-calendar-body-in-comparison-range::before {
    border-top: dashed 1px;
    border-bottom: dashed 1px;
  }
  .mat-calendar-body-comparison-start::before {
    border-left: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-start::before {
    border-left: 0;
    border-right: dashed 1px;
  }
  .mat-calendar-body-comparison-end::before {
    border-right: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-end::before {
    border-right: 0;
    border-left: dashed 1px;
  }
}
`],encapsulation:2})})()}return n})();function wi(n){return n?.nodeName==="TD"}function Si(n){let a;return wi(n)?a=n:wi(n.parentNode)?a=n.parentNode:wi(n.parentNode?.parentNode)&&(a=n.parentNode.parentNode),a?.getAttribute("data-mat-row")!=null?a:null}function Mi(n,a,e){return e!==null&&a!==e&&n<e&&n===a}function ki(n,a,e){return a!==null&&a!==e&&n>=a&&n===e}function Ai(n,a,e,t){return t&&a!==null&&e!==null&&a!==e&&n>=a&&n<=e}function Ko(n){let a=n.changedTouches[0];return document.elementFromPoint(a.clientX,a.clientY)}var Ie=class{start;end;_disableStructuralEquivalency;constructor(a,e){this.start=a,this.end=e}},xa=(()=>{class n{selection;_adapter;_selectionChanged=new P;selectionChanged=this._selectionChanged;constructor(e,t){this.selection=e,this._adapter=t,this.selection=e}updateSelection(e,t){let i=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:t,oldValue:i})}ngOnDestroy(){this._selectionChanged.complete()}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static \u0275fac=function(t){Ui()};static \u0275prov=Jt({token:n,factory:n.\u0275fac})}return n})(),Jl=(()=>{class n extends xa{constructor(e){super(null,e)}add(e){super.updateSelection(e,this)}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new n(this._adapter);return e.updateSelection(this.selection,this),e}static \u0275fac=function(t){return new(t||n)(Yi(ot))};static \u0275prov=Jt({token:n,factory:n.\u0275fac})}return n})();var ed={provide:xa,useFactory:()=>s(xa,{optional:!0,skipSelf:!0})||new Jl(s(ot))};var Jo=new I("MAT_DATE_RANGE_SELECTION_STRATEGY");var Ei=7,td=0,Qo=(()=>{class n{_changeDetectorRef=s(U);_dateFormats=s(dn,{optional:!0});_dateAdapter=s(ot,{optional:!0});_dir=s(De,{optional:!0});_rangeStrategy=s(Jo,{optional:!0});_rerenderSubscription=ye.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,i=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(i,this.minDate,this.maxDate),this._hasSameMonthAndYear(t,this._activeDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof Ie?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new S;_userSelection=new S;dragStarted=new S;dragEnded=new S;activeDateChange=new S;_matCalendarBody;_monthLabel=E("");_weeks=E([]);_firstWeekOffset=E(0);_rangeStart=E(null);_rangeEnd=E(null);_comparisonRangeStart=E(null);_comparisonRangeEnd=E(null);_previewStart=E(null);_previewEnd=E(null);_isRange=E(!1);_todayDate=E(null);_weekdays=E([]);constructor(){s(it).load(Rn),this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(ge(null)).subscribe(()=>this._init())}ngOnChanges(e){let t=e.comparisonStart||e.comparisonEnd;t&&!t.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview()}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_dateSelected(e){let t=e.value,i=this._getDateFromDayOfMonth(t),r,o;this._selected instanceof Ie?(r=this._getDateInCurrentMonth(this._selected.start),o=this._getDateInCurrentMonth(this._selected.end)):r=o=this._getDateInCurrentMonth(this._selected),(r!==t||o!==t)&&this.selectedChange.emit(i),this._userSelection.emit({value:i,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck()}_updateActiveDate(e){let t=e.value,i=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(t),this._dateAdapter.compareDate(i,this.activeDate)&&this.activeDateChange.emit(this._activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,i=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,i?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,i?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=!0,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!Pe(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((Ei+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%Ei),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck()}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e)}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_previewChanged({event:e,value:t}){if(this._rangeStrategy){let i=t?t.rawValue:null,r=this._rangeStrategy.createPreview(i,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(r.start)),this._previewEnd.set(this._getCellCompareValue(r.end)),this.activeDrag&&i){let o=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,i,e);o&&(this._previewStart.set(this._getCellCompareValue(o.start)),this._previewEnd.set(this._getCellCompareValue(o.end)))}}}_dragEnded(e){if(this.activeDrag)if(e.value){let t=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:t??null,event:e.event})}else this.dragEnded.emit({value:null,event:e.event})}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),t=this._dateAdapter.getDayOfWeekNames("narrow"),r=this._dateAdapter.getDayOfWeekNames("long").map((o,l)=>({long:o,narrow:t[l],id:td++}));this._weekdays.set(r.slice(e).concat(r.slice(0,e)))}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),t=this._dateAdapter.getDateNames(),i=[[]];for(let r=0,o=this._firstWeekOffset();r<e;r++,o++){o==Ei&&(i.push([]),o=0);let l=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),r+1),c=this._shouldEnableDate(l),v=this._dateAdapter.format(l,this._dateFormats.display.dateA11yLabel),h=this.dateClass?this.dateClass(l,"month"):void 0;i[i.length-1].push(new Mn(r+1,t[r],v,c,h,this._getCellCompareValue(l),l))}this._weeks.set(i)}_shouldEnableDate(e){return!!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,t){return!!(e&&t&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t))}_getCellCompareValue(e){if(e){let t=this._dateAdapter.getYear(e),i=this._dateAdapter.getMonth(e),r=this._dateAdapter.getDate(e);return new Date(t,i,r).getTime()}return null}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setRanges(e){e instanceof Ie?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(!0)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(!1)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd))}_canSelect(e){return!this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=(function(){let e=(i,r)=>r.id;function t(i,r){if(i&1&&(d(0,"th",2)(1,"span",6),g(2),m(),d(3,"span",3),g(4),m()()),i&2){let o=r.$implicit;u(2),Y(o.long),u(2),Y(o.narrow)}}return B({type:n,selectors:[["mat-month-view"]],viewQuery:function(r,o){if(r&1&&J(Kt,5),r&2){let l;D(l=w())&&(o._matCalendarBody=l.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName",activeDrag:"activeDrag"},outputs:{selectedChange:"selectedChange",_userSelection:"_userSelection",dragStarted:"dragStarted",dragEnded:"dragEnded",activeDateChange:"activeDateChange"},exportAs:["matMonthView"],features:[Ce],decls:8,vars:14,consts:[["role","grid",1,"mat-calendar-table"],[1,"mat-calendar-table-header"],["scope","col"],["aria-hidden","true"],["colspan","7",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","previewChange","dragStarted","dragEnded","keyup","keydown","label","rows","todayValue","startValue","endValue","comparisonStart","comparisonEnd","previewStart","previewEnd","isRange","labelMinRequiredCells","activeCell","startDateAccessibleName","endDateAccessibleName"],[1,"cdk-visually-hidden"]],template:function(r,o){r&1&&(d(0,"table",0)(1,"thead",1)(2,"tr"),me(3,t,5,2,"th",2,e),m(),d(5,"tr",3),z(6,"th",4),m()(),d(7,"tbody",5),y("selectedValueChange",function(c){return o._dateSelected(c)})("activeDateChange",function(c){return o._updateActiveDate(c)})("previewChange",function(c){return o._previewChanged(c)})("dragStarted",function(c){return o.dragStarted.emit(c)})("dragEnded",function(c){return o._dragEnded(c)})("keyup",function(c){return o._handleCalendarBodyKeyup(c)})("keydown",function(c){return o._handleCalendarBodyKeydown(c)}),m()()),r&2&&(u(3),ue(o._weekdays()),u(4),C("label",o._monthLabel())("rows",o._weeks())("todayValue",o._todayDate())("startValue",o._rangeStart())("endValue",o._rangeEnd())("comparisonStart",o._comparisonRangeStart())("comparisonEnd",o._comparisonRangeEnd())("previewStart",o._previewStart())("previewEnd",o._previewEnd())("isRange",o._isRange())("labelMinRequiredCells",3)("activeCell",o._dateAdapter.getDate(o.activeDate)-1)("startDateAccessibleName",o.startDateAccessibleName)("endDateAccessibleName",o.endDateAccessibleName))},dependencies:[Kt],encapsulation:2})})()}return n})(),He=24,Ii=4,Xo=(()=>{class n{_changeDetectorRef=s(U);_dateAdapter=s(ot,{optional:!0});_dir=s(De,{optional:!0});_rerenderSubscription=ye.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,i=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(i,this.minDate,this.maxDate),es(this._dateAdapter,t,this._activeDate,this.minDate,this.maxDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof Ie?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new S;yearSelected=new S;activeDateChange=new S;_matCalendarBody;_years=E([]);_todayYear=E(0);_selectedYear=E(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(ge(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let t=this._dateAdapter.getYear(this._activeDate)-Sn(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),i=[];for(let r=0,o=[];r<He;r++)o.push(t+r),o.length==Ii&&(i.push(o.map(l=>this._createCellForYear(l))),o=[]);this._years.set(i),this._changeDetectorRef.markForCheck()}_yearSelected(e){let t=e.value,i=this._dateAdapter.createDate(t,0,1),r=this._getDateFromYear(t);this.yearSelected.emit(i),this.selectedChange.emit(r)}_updateActiveDate(e){let t=e.value,i=this._activeDate;this.activeDate=this._getDateFromYear(t),this._dateAdapter.compareDate(i,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,i=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,i?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,i?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Ii);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,Ii);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Sn(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,He-Sn(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-He*10:-He);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?He*10:He);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_getActiveCell(){return Sn(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getDateFromYear(e){let t=this._dateAdapter.getMonth(this.activeDate),i=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,t,1));return this._dateAdapter.createDate(e,t,Math.min(this._dateAdapter.getDate(this.activeDate),i))}_createCellForYear(e){let t=this._dateAdapter.createDate(e,0,1),i=this._dateAdapter.getYearName(t),r=this.dateClass?this.dateClass(t,"multi-year"):void 0;return new Mn(e,i,i,this._shouldEnableYear(e),r)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return!1;if(!this.dateFilter)return!0;let t=this._dateAdapter.createDate(e,0,1);for(let i=t;this._dateAdapter.getYear(i)==e;i=this._dateAdapter.addCalendarDays(i,1))if(this.dateFilter(i))return!0;return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof Ie){let t=e.start||e.end;t&&this._selectedYear.set(this._dateAdapter.getYear(t))}else e&&this._selectedYear.set(this._dateAdapter.getYear(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=B({type:n,selectors:[["mat-multi-year-view"]],viewQuery:function(t,i){if(t&1&&J(Kt,5),t&2){let r;D(r=w())&&(i._matCalendarBody=r.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",activeDateChange:"activeDateChange"},exportAs:["matMultiYearView"],decls:5,vars:7,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","rows","todayValue","startValue","endValue","numCols","cellAspectRatio","activeCell"]],template:function(t,i){t&1&&(d(0,"table",0)(1,"thead",1)(2,"tr"),z(3,"th",2),m()(),d(4,"tbody",3),y("selectedValueChange",function(o){return i._yearSelected(o)})("activeDateChange",function(o){return i._updateActiveDate(o)})("keyup",function(o){return i._handleCalendarBodyKeyup(o)})("keydown",function(o){return i._handleCalendarBodyKeydown(o)}),m()()),t&2&&(u(4),C("rows",i._years())("todayValue",i._todayYear())("startValue",i._selectedYear())("endValue",i._selectedYear())("numCols",4)("cellAspectRatio",4/7)("activeCell",i._getActiveCell()))},dependencies:[Kt],encapsulation:2})}return n})();function es(n,a,e,t,i){let r=n.getYear(a),o=n.getYear(e),l=ts(n,t,i);return Math.floor((r-l)/He)===Math.floor((o-l)/He)}function Sn(n,a,e,t){let i=n.getYear(a);return nd(i-ts(n,e,t),He)}function ts(n,a,e){let t=0;return e?t=n.getYear(e)-He+1:a&&(t=n.getYear(a)),t}function nd(n,a){return(n%a+a)%a}var Zo=(()=>{class n{_changeDetectorRef=s(U);_dateFormats=s(dn,{optional:!0});_dateAdapter=s(ot,{optional:!0});_dir=s(De,{optional:!0});_rerenderSubscription=ye.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,i=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(i,this.minDate,this.maxDate),this._dateAdapter.getYear(t)!==this._dateAdapter.getYear(this._activeDate)&&this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof Ie?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new S;monthSelected=new S;activeDateChange=new S;_matCalendarBody;_months=E([]);_yearLabel=E("");_todayMonth=E(null);_selectedMonth=E(null);constructor(){this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(ge(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_monthSelected(e){let t=e.value,i=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),t,1);this.monthSelected.emit(i);let r=this._getDateFromMonth(t);this.selectedChange.emit(r)}_updateActiveDate(e){let t=e.value,i=this._activeDate;this.activeDate=this._getDateFromMonth(t),this._dateAdapter.compareDate(i,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,i=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,i?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,i?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames("short");this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(t=>t.map(i=>this._createCellForMonth(i,e[i])))),this._changeDetectorRef.markForCheck()}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let t=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),i=this._dateAdapter.getNumDaysInMonth(t);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),i))}_createCellForMonth(e,t){let i=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),r=this._dateAdapter.format(i,this._dateFormats.display.monthYearA11yLabel),o=this.dateClass?this.dateClass(i,"year"):void 0;return new Mn(e,t.toLocaleUpperCase(),r,this._shouldEnableMonth(e),o)}_shouldEnableMonth(e){let t=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(t,e)||this._isYearAndMonthBeforeMinDate(t,e))return!1;if(!this.dateFilter)return!0;let i=this._dateAdapter.createDate(t,e,1);for(let r=i;this._dateAdapter.getMonth(r)==e;r=this._dateAdapter.addCalendarDays(r,1))if(this.dateFilter(r))return!0;return!1}_isYearAndMonthAfterMaxDate(e,t){if(this.maxDate){let i=this._dateAdapter.getYear(this.maxDate),r=this._dateAdapter.getMonth(this.maxDate);return e>i||e===i&&t>r}return!1}_isYearAndMonthBeforeMinDate(e,t){if(this.minDate){let i=this._dateAdapter.getYear(this.minDate),r=this._dateAdapter.getMonth(this.minDate);return e<i||e===i&&t<r}return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedMonth(e){e instanceof Ie?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=B({type:n,selectors:[["mat-year-view"]],viewQuery:function(t,i){if(t&1&&J(Kt,5),t&2){let r;D(r=w())&&(i._matCalendarBody=r.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",monthSelected:"monthSelected",activeDateChange:"activeDateChange"},exportAs:["matYearView"],decls:5,vars:9,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","label","rows","todayValue","startValue","endValue","labelMinRequiredCells","numCols","cellAspectRatio","activeCell"]],template:function(t,i){t&1&&(d(0,"table",0)(1,"thead",1)(2,"tr"),z(3,"th",2),m()(),d(4,"tbody",3),y("selectedValueChange",function(o){return i._monthSelected(o)})("activeDateChange",function(o){return i._updateActiveDate(o)})("keyup",function(o){return i._handleCalendarBodyKeyup(o)})("keydown",function(o){return i._handleCalendarBodyKeydown(o)}),m()()),t&2&&(u(4),C("label",i._yearLabel())("rows",i._months())("todayValue",i._todayMonth())("startValue",i._selectedMonth())("endValue",i._selectedMonth())("labelMinRequiredCells",2)("numCols",4)("cellAspectRatio",4/7)("activeCell",i._dateAdapter.getMonth(i.activeDate)))},dependencies:[Kt],encapsulation:2})}return n})(),ns=(()=>{class n{_intl=s(dt);calendar=s(Tt);_dateAdapter=s(ot,{optional:!0});_dateFormats=s(dn,{optional:!0});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){s(it).load(Rn);let e=s(U);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck()})}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView=="month"?"multi-year":"month"}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?-1:-He))}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?1:He))}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):!0}nextEnabled(){return!this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,t=this._intl,i=this._dateAdapter;e.currentView==="month"?(this._periodButtonText=i.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=i.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=t.switchToMultiYearViewLabel,this._prevButtonLabel=t.prevMonthLabel,this._nextButtonLabel=t.nextMonthLabel):e.currentView==="year"?(this._periodButtonText=i.getYearName(e.activeDate),this._periodButtonDescription=i.getYearName(e.activeDate),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevYearLabel,this._nextButtonLabel=t.nextYearLabel):(this._periodButtonText=t.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=t.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevMultiYearLabel,this._nextButtonLabel=t.nextMultiYearLabel)}_isSameView(e,t){return this.calendar.currentView=="month"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t):this.calendar.currentView=="year"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t):es(this._dateAdapter,e,t,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let t=this._dateAdapter.getYear(this.calendar.activeDate)-Sn(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),i=t+He-1,r=this._dateAdapter.getYearName(this._dateAdapter.createDate(t,0,1)),o=this._dateAdapter.getYearName(this._dateAdapter.createDate(i,0,1));return[r,o]}_periodButtonLabelId=s(de).getId("mat-calendar-period-label-");static \u0275fac=function(t){return new(t||n)};static \u0275cmp=(function(){return B({type:n,selectors:[["mat-calendar-header"]],exportAs:["matCalendarHeader"],ngContentSelectors:["*"],decls:17,vars:13,consts:[[1,"mat-calendar-header"],[1,"mat-calendar-controls"],["aria-live","polite",1,"cdk-visually-hidden",3,"id"],["matButton","","type","button",1,"mat-calendar-period-button",3,"click"],["aria-hidden","true"],["viewBox","0 0 10 5","focusable","false","aria-hidden","true",1,"mat-calendar-arrow"],["points","0,0 5,5 10,0"],[1,"mat-calendar-spacer"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-previous-button",3,"click","disabled","matTooltip"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-next-button",3,"click","disabled","matTooltip"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]],template:function(i,r){i&1&&(je(),d(0,"div",0)(1,"div",1)(2,"span",2),g(3),m(),d(4,"button",3),y("click",function(){return r.currentPeriodClicked()}),d(5,"span",4),g(6),m(),yt(),d(7,"svg",5),z(8,"polygon",6),m()(),Na(),z(9,"div",7),se(10),d(11,"button",8),y("click",function(){return r.previousClicked()}),yt(),d(12,"svg",9),z(13,"path",10),m()(),Na(),d(14,"button",11),y("click",function(){return r.nextClicked()}),yt(),d(15,"svg",9),z(16,"path",12),m()()()()),i&2&&(u(2),C("id",r._periodButtonLabelId),u(),Y(r.periodButtonDescription),u(),A("aria-label",r.periodButtonLabel)("aria-describedby",r._periodButtonLabelId),u(2),Y(r.periodButtonText),u(),k("mat-calendar-invert",r.calendar.currentView!=="month"),u(4),C("disabled",!r.previousEnabled())("matTooltip",r.prevButtonLabel),A("aria-label",r.prevButtonLabel),u(3),C("disabled",!r.nextEnabled())("matTooltip",r.nextButtonLabel),A("aria-label",r.nextButtonLabel))},dependencies:[Ee,St,Nt],encapsulation:2})})()}return n})(),Tt=(()=>{class n{_dateAdapter=s(ot,{optional:!0});_dateFormats=s(dn,{optional:!0});_changeDetectorRef=s(U);_elementRef=s(j);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=!1;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get selected(){return this._selected}set selected(e){e instanceof Ie?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new S;yearSelected=new S;monthSelected=new S;viewChanged=new S(!0);_userSelection=new S;_userDragDrop=new S;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck()}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let t=this._currentView!==e?e:null;this._currentView=e,this._moveFocusOnNextTick=!0,this._changeDetectorRef.markForCheck(),t&&(this.stateChanges.next(),this.viewChanged.emit(t))}_currentView;_activeDrag=null;stateChanges=new P;constructor(){this._intlChanges=s(dt).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}ngAfterContentInit(){this._calendarHeaderPortal=new Ze(this.headerComponent||ns),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=!1,this.focusActiveCell())}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete()}ngOnChanges(e){let t=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,i=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,r=t||i||e.dateFilter;if(r&&!r.firstChange){let o=this._getCurrentViewComponent();o&&(this._elementRef.nativeElement.contains(Rt())&&(this._moveFocusOnNextTick=!0),this._changeDetectorRef.detectChanges(),o._init())}this.stateChanges.next()}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(!1)}updateTodaysDate(){this._getCurrentViewComponent()?._init()}_dateSelected(e){let t=e.value;(this.selected instanceof Ie||t&&!this._dateAdapter.sameDate(t,this.selected))&&this.selectedChange.emit(t),this._userSelection.emit(e)}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e)}_monthSelectedInYearView(e){this.monthSelected.emit(e)}_goToDateInView(e,t){this.activeDate=e,this.currentView=t}_dragStarted(e){this._activeDrag=e}_dragEnded(e){this._activeDrag&&(e.value&&this._userDragDrop.emit(e),this._activeDrag=null)}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=(function(){function e(o,l){}function t(o,l){if(o&1){let c=G();d(0,"mat-month-view",4),Fn("activeDateChange",function(h){O(c);let f=b();return Tn(f.activeDate,h)||(f.activeDate=h),R(h)}),y("_userSelection",function(h){O(c);let f=b();return R(f._dateSelected(h))})("dragStarted",function(h){O(c);let f=b();return R(f._dragStarted(h))})("dragEnded",function(h){O(c);let f=b();return R(f._dragEnded(h))}),m()}if(o&2){let c=b();Nn("activeDate",c.activeDate),C("selected",c.selected)("dateFilter",c.dateFilter)("maxDate",c.maxDate)("minDate",c.minDate)("dateClass",c.dateClass)("comparisonStart",c.comparisonStart)("comparisonEnd",c.comparisonEnd)("startDateAccessibleName",c.startDateAccessibleName)("endDateAccessibleName",c.endDateAccessibleName)("activeDrag",c._activeDrag)}}function i(o,l){if(o&1){let c=G();d(0,"mat-year-view",5),Fn("activeDateChange",function(h){O(c);let f=b();return Tn(f.activeDate,h)||(f.activeDate=h),R(h)}),y("monthSelected",function(h){O(c);let f=b();return R(f._monthSelectedInYearView(h))})("selectedChange",function(h){O(c);let f=b();return R(f._goToDateInView(h,"month"))}),m()}if(o&2){let c=b();Nn("activeDate",c.activeDate),C("selected",c.selected)("dateFilter",c.dateFilter)("maxDate",c.maxDate)("minDate",c.minDate)("dateClass",c.dateClass)}}function r(o,l){if(o&1){let c=G();d(0,"mat-multi-year-view",6),Fn("activeDateChange",function(h){O(c);let f=b();return Tn(f.activeDate,h)||(f.activeDate=h),R(h)}),y("yearSelected",function(h){O(c);let f=b();return R(f._yearSelectedInMultiYearView(h))})("selectedChange",function(h){O(c);let f=b();return R(f._goToDateInView(h,"year"))}),m()}if(o&2){let c=b();Nn("activeDate",c.activeDate),C("selected",c.selected)("dateFilter",c.dateFilter)("maxDate",c.maxDate)("minDate",c.minDate)("dateClass",c.dateClass)}}return B({type:n,selectors:[["mat-calendar"]],viewQuery:function(l,c){if(l&1&&J(Qo,5)(Zo,5)(Xo,5),l&2){let v;D(v=w())&&(c.monthView=v.first),D(v=w())&&(c.yearView=v.first),D(v=w())&&(c.multiYearView=v.first)}},hostAttrs:[1,"mat-calendar"],inputs:{headerComponent:"headerComponent",startAt:"startAt",startView:"startView",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",_userSelection:"_userSelection",_userDragDrop:"_userDragDrop"},exportAs:["matCalendar"],features:[te([ed]),Ce],decls:5,vars:2,consts:[[3,"cdkPortalOutlet"],["cdkMonitorSubtreeFocus","","tabindex","-1",1,"mat-calendar-content"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","_userSelection","dragStarted","dragEnded","activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDateChange","monthSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","yearSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"]],template:function(l,c){if(l&1&&(oe(0,e,0,0,"ng-template",0),d(1,"div",1),N(2,t,1,11,"mat-month-view",2)(3,i,1,6,"mat-year-view",3)(4,r,1,6,"mat-multi-year-view",3),m()),l&2){let v;C("cdkPortalOutlet",c._calendarHeaderPortal),u(2),T((v=c.currentView)==="month"?2:v==="year"?3:v==="multi-year"?4:-1)}},dependencies:[Le,Vn,Qo,Zo,Xo],styles:[`.mat-calendar {
  display: block;
  line-height: normal;
  font-family: var(--%NS%mat-datepicker-calendar-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-datepicker-calendar-text-size, var(--%NS%mat-sys-body-medium-size));
}

.mat-calendar-header {
  padding: 8px 8px 0 8px;
}

.mat-calendar-content {
  padding: 0 8px 8px 8px;
  outline: none;
}

.mat-calendar-controls {
  display: flex;
  align-items: center;
  margin: 5% calc(4.7142857143% - 16px);
}

.mat-calendar-spacer {
  flex: 1 1 auto;
}

.mat-calendar-period-button {
  min-width: 0;
  margin: 0 8px;
  font-size: var(--%NS%mat-datepicker-calendar-period-button-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-datepicker-calendar-period-button-text-weight, var(--%NS%mat-sys-title-small-weight));
  --%NS%mat-button-text-label-text-color: var(--%NS%mat-datepicker-calendar-period-button-text-color, var(--%NS%mat-sys-on-surface-variant));
}

.mat-calendar-arrow {
  display: inline-block;
  width: 10px;
  height: 5px;
  margin: 0 0 0 5px;
  vertical-align: middle;
  fill: var(--%NS%mat-datepicker-calendar-period-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-calendar-arrow.mat-calendar-invert {
  transform: rotate(180deg);
}
[dir=rtl] .mat-calendar-arrow {
  margin: 0 5px 0 0;
}
@media (forced-colors: active) {
  .mat-calendar-arrow {
    fill: CanvasText;
  }
}

.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),
.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled) {
  color: var(--%NS%mat-datepicker-calendar-navigation-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-calendar-previous-button,
[dir=rtl] .mat-calendar-next-button {
  transform: rotate(180deg);
}

.mat-calendar-table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}

.mat-calendar-table-header th {
  text-align: center;
  padding: 0 0 8px 0;
  color: var(--%NS%mat-datepicker-calendar-header-text-color, var(--%NS%mat-sys-on-surface-variant));
  font-size: var(--%NS%mat-datepicker-calendar-header-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-datepicker-calendar-header-text-weight, var(--%NS%mat-sys-title-small-weight));
}

.mat-calendar-table-header-divider {
  position: relative;
  height: 1px;
}
.mat-calendar-table-header-divider::after {
  content: "";
  position: absolute;
  top: 0;
  left: -8px;
  right: -8px;
  height: 1px;
  background: var(--%NS%mat-datepicker-calendar-header-divider-color, transparent);
}

.mat-calendar-body-cell-content::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-calendar-body-cell:focus-visible .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})})()}return n})();var ad=(()=>{class n{_elementRef=s(j);_animationsDisabled=pe();_changeDetectorRef=s(U);_globalModel=s(xa);_dateAdapter=s(ot);_ngZone=s(X);_rangeSelectionStrategy=s(Jo,{optional:!0});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=!1;_animationDone=new P;_isAnimating=!1;_closeButtonText;_closeButtonFocused=!1;_actionsPortal=null;_dialogLabelId=null;constructor(){if(s(it).load(Rn),this._closeButtonText=s(dt).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,t=s(ae);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[t.listen(e,"animationstart",this._handleAnimationEvent),t.listen(e,"animationend",this._handleAnimationEvent),t.listen(e,"animationcancel",this._handleAnimationEvent)])}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._calendar.focusActiveCell()}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_handleUserSelection(e){let t=this._model.selection,i=e.value,r=t instanceof Ie;if(r&&this._rangeSelectionStrategy){let o=this._rangeSelectionStrategy.selectionFinished(i,t,e.event);this._model.updateSelection(o,this)}else i&&(r||!this._dateAdapter.sameDate(i,t))&&this._model.add(i);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close()}_handleUserDragDrop(e){this._model.updateSelection(e.value,this)}_startExitAnimation(){this._elementRef.nativeElement.classList.add("mat-datepicker-content-exit"),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}_handleAnimationEvent=e=>{let t=this._elementRef.nativeElement;e.target!==t||!e.animationName.startsWith("_mat-datepicker-content")||(clearTimeout(this._animationFallback),this._isAnimating=e.type==="animationstart",t.classList.toggle("mat-datepicker-content-animating",this._isAnimating),this._isAnimating||this._animationDone.next())};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(e,t){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,t&&this._changeDetectorRef.detectChanges()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=(function(){function e(t,i){}return B({type:n,selectors:[["mat-datepicker-content"]],viewQuery:function(i,r){if(i&1&&J(Tt,5),i&2){let o;D(o=w())&&(r._calendar=o.first)}},hostAttrs:[1,"mat-datepicker-content"],hostVars:6,hostBindings:function(i,r){i&2&&(Ge(r.color?"mat-"+r.color:""),k("mat-datepicker-content-touch",r.datepicker.touchUi)("mat-datepicker-content-animations-enabled",!r._animationsDisabled))},inputs:{color:"color"},exportAs:["matDatepickerContent"],decls:5,vars:26,consts:[["cdkTrapFocus","","role","dialog",1,"mat-datepicker-content-container"],[3,"yearSelected","monthSelected","viewChanged","_userSelection","_userDragDrop","id","startAt","startView","minDate","maxDate","dateFilter","headerComponent","selected","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName"],[3,"cdkPortalOutlet"],["type","button","matButton","elevated",1,"mat-datepicker-close-button",3,"focus","blur","click","color"]],template:function(i,r){i&1&&(d(0,"div",0)(1,"mat-calendar",1),y("yearSelected",function(l){return r.datepicker._selectYear(l)})("monthSelected",function(l){return r.datepicker._selectMonth(l)})("viewChanged",function(l){return r.datepicker._viewChanged(l)})("_userSelection",function(l){return r._handleUserSelection(l)})("_userDragDrop",function(l){return r._handleUserDragDrop(l)}),m(),oe(2,e,0,0,"ng-template",2),d(3,"button",3),y("focus",function(){return r._closeButtonFocused=!0})("blur",function(){return r._closeButtonFocused=!1})("click",function(){return r.datepicker.close()}),g(4),m()()),i&2&&(k("mat-datepicker-content-container-with-custom-header",r.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions",r._actionsPortal),A("aria-modal",!0)("aria-labelledby",r._dialogLabelId??void 0),u(),Ge(r.datepicker.panelClass),C("id",r.datepicker.id)("startAt",r.datepicker.startAt)("startView",r.datepicker.startView)("minDate",r.datepicker._getMinDate())("maxDate",r.datepicker._getMaxDate())("dateFilter",r.datepicker._getDateFilter())("headerComponent",r.datepicker.calendarHeaderComponent)("selected",r._getSelected())("dateClass",r.datepicker.dateClass)("comparisonStart",r.comparisonStart)("comparisonEnd",r.comparisonEnd)("startDateAccessibleName",r.startDateAccessibleName)("endDateAccessibleName",r.endDateAccessibleName),u(),C("cdkPortalOutlet",r._actionsPortal),u(),k("cdk-visually-hidden",!r._closeButtonFocused),C("color",r.color||"primary"),u(),Y(r._closeButtonText))},dependencies:[hr,Tt,Le,Ee],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-dialog-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-datepicker-content {
  display: block;
  background-color: var(--%NS%mat-datepicker-calendar-container-background-color, var(--%NS%mat-sys-surface-container-high));
  color: var(--%NS%mat-datepicker-calendar-container-text-color, var(--%NS%mat-sys-on-surface));
  box-shadow: var(--%NS%mat-datepicker-calendar-container-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--%NS%mat-datepicker-calendar-container-shape, var(--%NS%mat-sys-corner-large));
}
.mat-datepicker-content.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dropdown-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content .mat-calendar {
  width: 296px;
  height: 354px;
}
.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar {
  height: auto;
}
.mat-datepicker-content .mat-datepicker-close-button {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
}
.mat-datepicker-content-animating .mat-datepicker-content .mat-datepicker-close-button {
  display: none;
}

.mat-datepicker-content-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mat-datepicker-content-touch {
  display: block;
  max-height: 80vh;
  box-shadow: var(--%NS%mat-datepicker-calendar-container-touch-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--%NS%mat-datepicker-calendar-container-touch-shape, var(--%NS%mat-sys-corner-extra-large));
  position: relative;
  overflow: visible;
  min-height: fit-content;
}
.mat-datepicker-content-touch.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dialog-enter 150ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content-touch .mat-datepicker-content-container {
  min-height: fit-content;
  max-height: 788px;
  min-width: 250px;
  max-width: 750px;
}
.mat-datepicker-content-touch .mat-calendar {
  width: 100%;
  height: auto;
}

.mat-datepicker-content-exit.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-exit 100ms linear;
}

@media all and (orientation: landscape) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 64vh;
    height: 80vh;
  }
}
@media all and (orientation: portrait) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 80vw;
    height: 100vw;
  }
}
`],encapsulation:2})})()}return n})();var id=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=V({type:n,selectors:[["","matDatepickerToggleIcon",""]]})}return n})(),rd=(()=>{class n{_intl=s(dt);_changeDetectorRef=s(U);_stateChanges=ye.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e}_disabled;disableRipple=!1;_customIcon;_button;constructor(){let e=s(new nn("tabindex"),{optional:!0}),t=Number(e);this.tabIndex=t||t===0?t:null}ngOnChanges(e){e.datepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation())}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:ct(),t=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:ct(),i=this.datepicker?Se(this.datepicker.openedStream,this.datepicker.closedStream):ct();this._stateChanges.unsubscribe(),this._stateChanges=Se(this._intl.changes,e,t,i).subscribe(()=>this._changeDetectorRef.markForCheck())}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=(function(){let e=["button"],t=[[["","matDatepickerToggleIcon",""]]],i=["[matDatepickerToggleIcon]"];function r(o,l){o&1&&(yt(),d(0,"svg",2),z(1,"path",3),m())}return B({type:n,selectors:[["mat-datepicker-toggle"]],contentQueries:function(l,c,v){if(l&1&&Ke(v,id,5),l&2){let h;D(h=w())&&(c._customIcon=h.first)}},viewQuery:function(l,c){if(l&1&&J(e,5),l&2){let v;D(v=w())&&(c._button=v.first)}},hostAttrs:[1,"mat-datepicker-toggle"],hostVars:8,hostBindings:function(l,c){l&1&&y("click",function(h){return c._open(h)}),l&2&&(A("tabindex",null)("data-mat-calendar",c.datepicker?c.datepicker.id:null),k("mat-datepicker-toggle-active",c.datepicker&&c.datepicker.opened)("mat-accent",c.datepicker&&c.datepicker.color==="accent")("mat-warn",c.datepicker&&c.datepicker.color==="warn"))},inputs:{datepicker:[0,"for","datepicker"],tabIndex:"tabIndex",ariaLabel:[0,"aria-label","ariaLabel"],disabled:[2,"disabled","disabled",K],disableRipple:"disableRipple"},exportAs:["matDatepickerToggle"],features:[Ce],ngContentSelectors:i,decls:4,vars:7,consts:[["button",""],["matIconButton","","type","button",3,"tabIndex","disabled","disableRipple"],["viewBox","0 0 24 24","width","24px","height","24px","fill","currentColor","focusable","false","aria-hidden","true",1,"mat-datepicker-toggle-default-icon"],["d","M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],template:function(l,c){l&1&&(je(t),d(0,"button",1,0),N(2,r,2,0,":svg:svg",2),se(3),m()),l&2&&(C("tabIndex",c.disabled?-1:c.tabIndex)("disabled",c.disabled)("disableRipple",c.disableRipple),A("aria-haspopup",c.datepicker?"dialog":null)("aria-label",c.ariaLabel||c._intl.openCalendarLabel)("aria-expanded",c.datepicker?c.datepicker.opened:null),u(2),T(c._customIcon?-1:2))},dependencies:[St],styles:[`.mat-datepicker-toggle {
  pointer-events: auto;
  color: var(--%NS%mat-datepicker-toggle-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-datepicker-toggle button {
  color: inherit;
}

.mat-datepicker-toggle-active {
  color: var(--%NS%mat-datepicker-toggle-active-state-icon-color, var(--%NS%mat-sys-primary));
}

@media (forced-colors: active) {
  .mat-datepicker-toggle-default-icon {
    color: CanvasText;
  }
}
`],encapsulation:2})})()}return n})();var as=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ie({type:n});static \u0275inj=ne({providers:[dt],imports:[Be,$e,Vt,pt,ad,rd,ns,Ve,Pt]})}return n})();var sd=["startTimeInput"];function ld(n,a){if(n&1){let e=G();d(0,"button",28),y("click",function(){let i=O(e).$implicit,r=b(2);return R(r.selectStartHour(i))}),g(1),m()}if(n&2){let e=a.$implicit,t=b(2);k("selected",t.startTime.split(":")[0]===e),A("aria-pressed",t.startTime.split(":")[0]===e),u(),ee(" ",e," ")}}function dd(n,a){if(n&1){let e=G();d(0,"button",28),y("click",function(){let i=O(e).$implicit,r=b(2);return R(r.selectStartMinute(i))}),g(1),m()}if(n&2){let e=a.$implicit,t=b(2);k("selected",t.startTime.split(":")[1]===e),A("aria-pressed",t.startTime.split(":")[1]===e),u(),ee(" ",e," ")}}function cd(n,a){if(n&1){let e=G();d(0,"button",28),y("click",function(){let i=O(e).$implicit,r=b(2);return R(r.selectEndHour(i))}),g(1),m()}if(n&2){let e=a.$implicit,t=b(2);k("selected",t.endTime.split(":")[0]===e),A("aria-pressed",t.endTime.split(":")[0]===e),u(),ee(" ",e," ")}}function md(n,a){if(n&1){let e=G();d(0,"button",28),y("click",function(){let i=O(e).$implicit,r=b(2);return R(r.selectEndMinute(i))}),g(1),m()}if(n&2){let e=a.$implicit,t=b(2);k("selected",t.endTime.split(":")[1]===e),A("aria-pressed",t.endTime.split(":")[1]===e),u(),ee(" ",e," ")}}function ud(n,a){if(n&1){let e=G();d(0,"div",14)(1,"div",15)(2,"label"),g(3,"Hor\xE1rio de in\xEDcio"),m(),d(4,"div",16)(5,"input",17,0),y("input",function(i){O(e);let r=b();return R(r.onStartTimeChange(i))}),m(),d(7,"button",18),y("menuOpened",function(){O(e);let i=Ae(17),r=Ae(24),o=b();return o.scrollSelectedOption(i),R(o.scrollSelectedOption(r))}),d(8,"mat-icon",19),g(9,"schedule"),m()()(),d(10,"mat-menu",20,1)(12,"div",21)(13,"section",22)(14,"strong"),g(15,"Hora"),m(),d(16,"div",23,2),me(18,ld,2,4,"button",24,ut),m()(),d(20,"section",25)(21,"strong"),g(22,"Minuto"),m(),d(23,"div",23,3),me(25,dd,2,4,"button",24,ut),m()()()()(),d(27,"div",15)(28,"label"),g(29,"Hor\xE1rio de t\xE9rmino"),m(),d(30,"div",16)(31,"input",26),y("input",function(i){O(e);let r=b();return R(r.onEndTimeChange(i))}),m(),d(32,"button",27),y("menuOpened",function(){O(e);let i=Ae(42),r=Ae(49),o=b();return o.scrollSelectedOption(i),R(o.scrollSelectedOption(r))}),d(33,"mat-icon",19),g(34,"schedule"),m()()(),d(35,"mat-menu",20,4)(37,"div",21)(38,"section",22)(39,"strong"),g(40,"Hora"),m(),d(41,"div",23,5),me(43,cd,2,4,"button",24,ut),m()(),d(45,"section",25)(46,"strong"),g(47,"Minuto"),m(),d(48,"div",23,6),me(50,md,2,4,"button",24,ut),m()()()()()()}if(n&2){let e=Ae(11),t=Ae(36),i=b();u(5),C("value",i.startTime)("disabled",i.disabled),u(2),C("matMenuTriggerFor",e)("disabled",i.disabled),u(11),ue(i.hours),u(7),ue(i.minutes),u(6),C("value",i.endTime)("disabled",i.disabled),u(),C("matMenuTriggerFor",t)("disabled",i.disabled),u(11),ue(i.hours),u(7),ue(i.minutes)}}var Ri=class n extends dt{prevMonthLabel="M\xEAs anterior";nextMonthLabel="M\xEAs seguinte";prevYearLabel="Ano anterior";nextYearLabel="Ano seguinte";prevMultiYearLabel="24 anos anteriores";nextMultiYearLabel="Pr\xF3ximos 24 anos";openCalendarLabel="Abrir calend\xE1rio";switchToMonthViewLabel="Mudar para visualiza\xE7\xE3o de m\xEAs";switchToMultiYearViewLabel="Mudar para visualiza\xE7\xE3o de anos";static \u0275fac=(()=>{let a;return function(t){return(a||(a=be(n)))(t||n)}})();static \u0275prov=Jt({token:n,factory:n.\u0275fac})},Da=class n{cdr=s(U);showTimeSelection=E(!1);shouldFocusTime=!1;matCalendar;startTimeInput;selectedRange=null;calendarHeaderDate=new Date;disabled=!1;startTime="08:00";endTime="09:00";hours=Array.from({length:24},(a,e)=>String(e).padStart(2,"0"));minutes=Array.from({length:60},(a,e)=>String(e).padStart(2,"0"));_existingEvents=[];set existingEvents(a){this._existingEvents=a,this.cdr.markForCheck(),this.matCalendar&&this.matCalendar.updateTodaysDate()}get existingEvents(){return this._existingEvents}rangeChange=new S;startTimeChange=new S;endTimeChange=new S;activeDateChange=new S;onCalendarHostClick(a){let e=a.target;(e.closest(".mat-calendar-previous-button")||e.closest(".mat-calendar-next-button")||e.closest(".mat-calendar-period-button"))&&setTimeout(()=>{if(this.matCalendar){let t=this.matCalendar.activeDate;t&&this.activeDateChange.emit(t)}},50)}ngAfterViewChecked(){this.shouldFocusTime&&this.startTimeInput&&(this.startTimeInput.nativeElement.focus(),this.shouldFocusTime=!1)}onSelectedChange(a){if(!a)return;let e=null;this.selectedRange&&this.selectedRange.start&&a.getTime()===this.selectedRange.start.getTime()&&!this.selectedRange.end?e=null:this.selectedRange&&this.selectedRange.start&&a>this.selectedRange.start&&!this.selectedRange.end?e=new Ie(this.selectedRange.start,a):e=new Ie(a,null),this.rangeChange.emit(e)}onActiveDateChange(a){let e=a instanceof Date?a:new Date(a);isNaN(e.getTime())||this.activeDateChange.emit(e)}onStartTimeChange(a){this.startTimeChange.emit(this.normalizeTimeInput(a))}onEndTimeChange(a){this.endTimeChange.emit(this.normalizeTimeInput(a))}selectStartHour(a){this.updateTimePart("start","hour",a)}selectStartMinute(a){this.updateTimePart("start","minute",a)}selectEndHour(a){this.updateTimePart("end","hour",a)}selectEndMinute(a){this.updateTimePart("end","minute",a)}scrollSelectedOption(a){requestAnimationFrame(()=>{let e=a.querySelector(".selected");e&&(a.scrollTop=e.offsetTop)})}toggleTimeSelection(){let a=!this.showTimeSelection();this.showTimeSelection.set(a),a&&(this.shouldFocusTime=!0)}dateFilter=a=>{if(!a)return!1;let e=new Date;return e.setHours(0,0,0,0),a<e?!1:!this.getEventForDate(a)};dateClass=a=>{let e=this.getEventForDate(a);if(!e)return"";let t=e.colorId;return t&&/^(?:[1-9]|1[01])$/.test(t)?`occupied-date occupied-color-${t}`:"occupied-date"};getEventForDate(a){let e=new Date(a);return e.setHours(0,0,0,0),this.existingEvents.find(t=>{if(!t.start)return!1;let i=t.start.dateTime||t.start.date;if(!i)return!1;let r=new Date(i);r.setHours(0,0,0,0);let o=t.end?.dateTime||t.end?.date||i,l=new Date(o);return l.setHours(0,0,0,0),e>=r&&e<=l})}normalizeTimeInput(a){let e=a.target,t=e.value.slice(0,e.selectionStart??e.value.length).replace(/\D/g,"").length,i=e.value.replace(/\D/g,"").slice(0,4),r=i.length>2?`${i.slice(0,2)}:${i.slice(2)}`:i;e.value=r;let o=t+(t>2?1:0);return e.setSelectionRange(o,o),r}updateTimePart(a,e,t){let i=a==="start"?this.startTime:this.endTime,[r="00",o="00"]=i.split(":"),l=e==="hour"?`${t}:${o}`:`${r}:${t}`;(a==="start"?this.startTimeChange:this.endTimeChange).emit(l)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=B({type:n,selectors:[["app-calendar-picker"]],viewQuery:function(e,t){if(e&1&&J(Tt,5)(sd,5),e&2){let i;D(i=w())&&(t.matCalendar=i.first),D(i=w())&&(t.startTimeInput=i.first)}},hostBindings:function(e,t){e&1&&y("click",function(r){return t.onCalendarHostClick(r)})},inputs:{selectedRange:"selectedRange",calendarHeaderDate:"calendarHeaderDate",disabled:"disabled",startTime:"startTime",endTime:"endTime",existingEvents:"existingEvents"},outputs:{rangeChange:"rangeChange",startTimeChange:"startTimeChange",endTimeChange:"endTimeChange",activeDateChange:"activeDateChange"},features:[te([{provide:dt,useClass:Ri}])],decls:13,vars:10,consts:[["startTimeInput",""],["startTimeMenu","matMenu"],["startHoursList",""],["startMinutesList",""],["endTimeMenu","matMenu"],["endHoursList",""],["endMinutesList",""],[1,"calendar-pane"],[1,"period-header"],[1,"period-title-wrapper"],["fontSet","fontawesome","fontIcon","fa-clock"],["mat-button","","type","button",1,"btn-toggle-time",3,"click","disabled"],[1,"toggle-text"],[3,"selectedChange","activeDateChange","selected","startAt","dateClass","dateFilter"],[1,"time-selection-container"],[1,"time-box"],[1,"time-input-wrapper"],["type","text","required","","inputmode","numeric","autocomplete","off","maxlength","5","placeholder","HH:mm","pattern","([01][0-9]|2[0-3]):[0-5][0-9]","aria-label","Hor\xE1rio de in\xEDcio no formato de 24 horas","title","Hor\xE1rio de in\xEDcio (formato HH:mm)",1,"time-spinner-input",3,"input","value","disabled"],["mat-icon-button","","type","button","aria-label","Abrir seletor do hor\xE1rio de in\xEDcio","title","Selecionar hor\xE1rio de in\xEDcio",1,"time-picker-trigger",3,"menuOpened","matMenuTriggerFor","disabled"],["aria-hidden","true"],[1,"time-picker-menu"],[1,"time-picker-popup"],["aria-label","Selecionar hora",1,"time-picker-column"],[1,"time-picker-options"],["type","button",1,"time-picker-option",3,"selected"],["aria-label","Selecionar minuto",1,"time-picker-column"],["type","text","required","","inputmode","numeric","autocomplete","off","maxlength","5","placeholder","HH:mm","pattern","([01][0-9]|2[0-3]):[0-5][0-9]","aria-label","Hor\xE1rio de t\xE9rmino no formato de 24 horas","title","Hor\xE1rio de t\xE9rmino (formato HH:mm)",1,"time-spinner-input",3,"input","value","disabled"],["mat-icon-button","","type","button","aria-label","Abrir seletor do hor\xE1rio de t\xE9rmino","title","Selecionar hor\xE1rio de t\xE9rmino",1,"time-picker-trigger",3,"menuOpened","matMenuTriggerFor","disabled"],["type","button",1,"time-picker-option",3,"click"]],template:function(e,t){e&1&&(d(0,"div",7)(1,"div",8)(2,"div",9),z(3,"mat-icon",10),d(4,"span"),g(5,"Per\xEDodo"),m()(),d(6,"button",11),y("click",function(r){return r.stopPropagation(),!t.disabled&&t.toggleTimeSelection()}),d(7,"span",12),g(8),m(),d(9,"mat-icon"),g(10),m()()(),d(11,"mat-calendar",13),y("selectedChange",function(r){return!t.disabled&&t.onSelectedChange(r)})("activeDateChange",function(r){return!t.disabled&&t.onActiveDateChange(r)}),m(),N(12,ud,52,8,"div",14),m()),e&2&&(k("disabled-pane",t.disabled),u(6),C("disabled",t.disabled),u(2),Y(t.showTimeSelection()?"Ocultar Horas":"Definir Horas"),u(2),Y(t.showTimeSelection()?"expand_less":"expand_more"),u(),C("selected",t.selectedRange)("startAt",t.calendarHeaderDate)("dateClass",t.dateClass)("dateFilter",t.dateFilter),u(),T(t.showTimeSelection()?12:-1))},dependencies:[Ot,Qe,Xe,Be,Ee,St,as,Tt,Er,kr,Ar],styles:['.calendar-pane[_ngcontent-%COMP%]{background:var(--%NS%mat-sys-surface-container, rgba(0, 0, 0, .02));border-radius:12px;padding:12px;border:1px solid var(--%NS%mat-sys-outline-variant);height:fit-content}.calendar-pane.disabled-pane[_ngcontent-%COMP%]{opacity:.6;pointer-events:none;cursor:not-allowed}.calendar-pane[_ngcontent-%COMP%]   mat-calendar[_ngcontent-%COMP%]{width:100%}.period-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:4px 8px 10px;border-bottom:1px solid var(--%NS%mat-sys-outline-variant);cursor:pointer;-webkit-user-select:none;user-select:none}.period-header[_ngcontent-%COMP%]   .period-title-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-weight:600;font-size:.95rem;color:var(--%NS%mat-sys-primary)}.period-header[_ngcontent-%COMP%]   .period-title-wrapper[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:1rem;width:1rem;height:1rem}.period-header[_ngcontent-%COMP%]   .btn-toggle-time[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;font-size:.8rem;color:var(--%NS%mat-sys-on-surface-variant);background:transparent;border:none;cursor:pointer;padding:4px 8px;border-radius:6px;transition:background-color .2s}.period-header[_ngcontent-%COMP%]   .btn-toggle-time[_ngcontent-%COMP%]:hover{background-color:var(--%NS%mat-sys-surface-container-highest);color:var(--%NS%mat-sys-primary)}.period-header[_ngcontent-%COMP%]   .btn-toggle-time[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:.75rem;width:.75rem;height:.75rem}.time-selection-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:16px;margin-top:12px;padding-top:12px;border-top:1px dashed var(--%NS%mat-sys-outline-variant)}.time-box[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;align-items:center}.time-box[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:.8rem;color:var(--%NS%mat-sys-on-surface-variant);margin-bottom:6px;display:flex;align-items:center;gap:4px;font-weight:500}.time-box[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:1rem;width:1rem;height:1rem;color:var(--%NS%mat-sys-primary)}.time-input-wrapper[_ngcontent-%COMP%]{width:100%;position:relative}.time-spinner-input[_ngcontent-%COMP%]{width:100%;height:40px;box-sizing:border-box;border:1px solid var(--%NS%mat-sys-outline-variant);border-radius:8px;font-size:1.1rem;font-weight:700;text-align:left;padding:0 2.5rem 0 .75rem;color:var(--%NS%mat-sys-on-surface);background-color:var(--%NS%mat-sys-surface);outline:none;transition:all .2s ease;font-family:inherit;cursor:text}.time-spinner-input[_ngcontent-%COMP%]:focus{border-color:var(--%NS%mat-sys-primary);box-shadow:0 0 0 2px var(--%NS%mat-sys-primary-container, rgba(0, 0, 0, .1))}.time-picker-trigger.mat-mdc-icon-button[_ngcontent-%COMP%]{position:absolute;top:50%;right:.75rem;transform:translateY(-50%);width:32px;height:32px;padding:4px;color:var(--%NS%mat-sys-on-surface-variant);border-radius:6px}  .time-picker-menu .mat-mdc-menu-panel{max-width:none}.time-picker-options[_ngcontent-%COMP%]{width:112px;max-height:192px;overflow-y:auto;overscroll-behavior:contain;padding:4px}.time-picker-popup[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,minmax(76px,1fr));gap:12px;padding:8px 12px}.time-picker-column[_ngcontent-%COMP%]{display:flex;min-width:0;flex-direction:column;gap:6px;color:var(--%NS%mat-sys-on-surface);font-size:.8rem}.time-picker-column[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{text-align:center}.time-picker-option[_ngcontent-%COMP%]{width:100%;min-height:32px;border:0;border-radius:6px;background:transparent;color:var(--%NS%mat-sys-on-surface);font:inherit;font-variant-numeric:tabular-nums;cursor:pointer}.time-picker-option[_ngcontent-%COMP%]:hover, .time-picker-option.selected[_ngcontent-%COMP%]{background:var(--%NS%mat-sys-primary-container);color:var(--%NS%mat-sys-on-primary-container)}  .mat-calendar-body-label{visibility:hidden}  .mat-calendar-body-disabled.occupied-date .mat-calendar-body-cell-content{background-color:color-mix(in srgb,var(--%NS%occupied-color, var(--%NS%calendar-color, var(--%NS%mat-sys-error))) 28%,var(--%NS%mat-sys-surface));color:var(--%NS%mat-sys-on-surface);border:1px dashed var(--%NS%occupied-color, var(--%NS%calendar-color, var(--%NS%mat-sys-error)))}  .mat-calendar-body-disabled.occupied-date .mat-calendar-body-cell-content:after{content:"";position:absolute;bottom:4px;left:50%;transform:translate(-50%);width:6px;height:6px;background-color:var(--%NS%occupied-color, var(--%NS%calendar-color, var(--%NS%mat-sys-error)));border-radius:50%}  .occupied-color-1{--%NS%occupied-color: #a4bdfc}  .occupied-color-2{--%NS%occupied-color: #7ae7bf}  .occupied-color-3{--%NS%occupied-color: #dbadff}  .occupied-color-4{--%NS%occupied-color: #ff887c}  .occupied-color-5{--%NS%occupied-color: #fbd75b}  .occupied-color-6{--%NS%occupied-color: #ffb878}  .occupied-color-7{--%NS%occupied-color: #46d6db}  .occupied-color-8{--%NS%occupied-color: #e1e1e1}  .occupied-color-9{--%NS%occupied-color: #5484ed}  .occupied-color-10{--%NS%occupied-color: #51b749}  .occupied-color-11{--%NS%occupied-color: #dc2127}']})};function pd(n,a){if(n&1&&(d(0,"mat-icon",1),g(1),m()),n&2){let e=b();u(),Y(e.data.icon)}}var Qt=class n{data=s(ii);dialogRef=s(Lt);close(a){this.dialogRef.close(a)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=B({type:n,selectors:[["app-confirm-dialog"]],decls:11,vars:6,consts:[["mat-dialog-title",""],["aria-hidden","true"],["align","end"],["mat-button","","type","button",3,"click"],["mat-flat-button","","type","button",3,"click","color"]],template:function(e,t){e&1&&(d(0,"h2",0),N(1,pd,2,1,"mat-icon",1),g(2),m(),d(3,"mat-dialog-content")(4,"p"),g(5),m()(),d(6,"mat-dialog-actions",2)(7,"button",3),y("click",function(){return t.close(!1)}),g(8),m(),d(9,"button",4),y("click",function(){return t.close(!0)}),g(10),m()()),e&2&&(u(),T(t.data.icon?1:-1),u(),ee(" ",t.data.title,`
`),u(3),Y(t.data.message),u(3),ee(" ",t.data.cancelLabel||"Cancelar"," "),u(),C("color",t.data.confirmColor||"primary"),u(),ee(" ",t.data.confirmLabel," "))},dependencies:[Xr,Ur,Qr,Kr,Be,Ee,Xe,Qe],styles:["h2[mat-dialog-title][_ngcontent-%COMP%]{display:flex;align-items:center;gap:.6rem;color:var(--%NS%mat-sys-on-surface)}h2[mat-dialog-title][_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-error)}mat-dialog-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-on-surface-variant);line-height:1.5}"]})};var hd=()=>({tab:"visualizar",create:"true"}),fd=(n,a)=>a.colorId,gd=(n,a)=>a.id;function bd(n,a){n&1&&(d(0,"div",6),z(1,"mat-icon",23),g(2,"\xA0 A carregar disponibilidade... "),m())}function _d(n,a){if(n&1){let e=G();d(0,"button",29),y("click",function(){O(e);let i=b(2);return R(i.loadOccupiedSlots())}),d(1,"mat-icon"),g(2,"refresh"),m()()}}function vd(n,a){if(n&1&&(d(0,"div",24)(1,"span",25),g(2),m(),d(3,"div",26)(4,"a",27)(5,"mat-icon"),g(6,"add"),m()(),N(7,_d,3,0,"button",28),m()()),n&2){let e=b();k("no-calendar",!e.hasCalendars),A("role",e.hasCalendars?"alert":"status"),u(2),Y(e.availabilityError()),u(2),C("queryParams",er(6,hd)),u(3),T(e.hasCalendars?7:-1)}}function yd(n,a){n&1&&(d(0,"p",6),g(1,"Nenhum evento agendado para este m\xEAs. Livre total!"),m())}function Cd(n,a){if(n&1&&(d(0,"span",32)(1,"mat-icon"),g(2,"location_on"),m(),g(3),m()),n&2){let e=b().$implicit;u(3),ee(" ",e.location," ")}}function xd(n,a){n&1&&(d(0,"span",32)(1,"mat-icon"),g(2,"location_on"),m(),g(3," Local n\xE3o informado "),m())}function Dd(n,a){if(n&1){let e=G();d(0,"li")(1,"div",31)(2,"strong"),g(3),m(),d(4,"span"),g(5),m(),N(6,Cd,4,1,"span",32)(7,xd,4,0,"span",32),m(),d(8,"button",33),y("click",function(){let i=O(e).$implicit,r=b(2);return R(r.onDeleteEvent(i.id,i.summary))}),d(9,"mat-icon"),g(10,"delete"),m()()()}if(n&2){let e=a.$implicit,t=b(2);Oe("--%NS%calendar-color",t.getCalendarColor())("--%NS%event-color",t.getEventColor(e)),u(3),Y(e.summary),u(2),Y(t.formatEventDateRange(e)),u(),T(e.location?6:7),u(2),C("matTooltip","Excluir evento: "+(e.summary||"sem t\xEDtulo"))("disabled",t.loading()),A("aria-label","Excluir evento: "+(e.summary||"sem t\xEDtulo"))}}function wd(n,a){if(n&1&&(d(0,"ul",8),me(1,Dd,11,10,"li",30,gd),m()),n&2){let e=b();u(),ue(e.filteredEventsForMonth)}}function Sd(n,a){if(n&1){let e=G();d(0,"button",34),y("click",function(){let i=O(e).$implicit,r=b();return R(r.eventForm.controls.colorId.setValue(i.colorId))}),m()}if(n&2){let e=a.$implicit,t=b();Oe("--%NS%swatch-color",e.color),k("selected",t.eventForm.controls.colorId.value===e.colorId),C("title",e.label),A("aria-pressed",t.eventForm.controls.colorId.value===e.colorId)("aria-label",e.label)}}function Md(n,a){n&1&&(d(0,"span",21),z(1,"mat-icon",23),d(2,"span"),g(3,"A processar..."),m()())}function kd(n,a){n&1&&(d(0,"span",22)(1,"mat-icon"),g(2,"event_available"),m(),d(3,"span"),g(4,"Confirmar Agendamento"),m()())}var is=/^([01]\d|2[0-3]):[0-5]\d$/,Ma=class n{fb=s(ua);calendarService=s(zn);router=s(or);calendarState=s(Bn);dialog=s(Bt);snackBar=s(ba);loading=E(!1);availabilityError=E("");existingEvents=E([]);selectedRange=null;currentCalendarDate=E(new Date);eventColors=Object.entries(yr).map(([a,e])=>({colorId:a,color:e.color,label:e.label}));getCalendarColor(){return Hn(this.calendarState.selectedCalendar()?.backgroundColor)}getEventColor(a){return Cr(a)}get hasCalendars(){return this.calendarState.calendars().length>0}eventForm=this.fb.group({summary:["",ce.required],description:[""],dateRange:this.fb.group({start:[null,ce.required],end:[null,ce.required]}),startTime:["08:00",[ce.required,ce.pattern(is)]],endTime:["09:00",[ce.required,ce.pattern(is)]],location:[""],colorId:[""]});selectedCalendarEffect=nt(()=>{if(this.calendarState.initialized()){if(this.calendarState.selectedCalendarId()){this.loadOccupiedSlots();return}this.loading.set(!1),this.existingEvents.set([]),this.availabilityError.set("Cadastre uma agenda antes de consultar a disponibilidade."),this.eventForm.enable()}});get filteredEventsForMonth(){let a=this.existingEvents(),e=this.selectedRange?.start||this.currentCalendarDate(),t=e.getMonth(),i=e.getFullYear(),r=new Date(i,t,1,0,0,0,0),o=new Date(i,t+1,0,23,59,59,999);return a.filter(l=>{if(!l.start)return!1;let c=l.start.dateTime||l.start.date;if(!c)return!1;let v=new Date(c),h=l.end?.dateTime||l.end?.date||c,f=new Date(h);return v<=o&&f>=r})}onSubmit(){if(this.eventForm.invalid||!this.selectedRange?.start||this.loading())return;this.loading.set(!0),this.eventForm.disable();let a=this.eventForm.value,e=a.dateRange.start,t=a.dateRange.end||e,[i,r]=a.startTime.split(":"),[o,l]=a.endTime.split(":"),c=new Date(e);c.setHours(Number(i),Number(r),0);let v=new Date(t);v.setHours(Number(o),Number(l),0);let h={summary:a.summary,description:a.description,startDateTime:c.toISOString(),endDateTime:v.toISOString(),location:a.location,colorId:a.colorId||void 0};this.calendarService.addEvent(h).subscribe({next:()=>{this.loading.set(!1),this.showMessage("Evento agendado com sucesso.","success"),setTimeout(()=>this.router.navigate(["/"]),1500)},error:f=>{this.loading.set(!1),this.eventForm.enable(),console.error("Erro ao agendar o evento:",f),this.showMessage(this.getRequestErrorMessage(f,"criar"),"error")}})}onDeleteEvent(a,e){if(!a){this.showMessage("N\xE3o foi poss\xEDvel identificar o evento para excluir.","error");return}this.dialog.open(Qt,{data:{title:"Excluir evento?",message:`O evento \u201C${e||"sem t\xEDtulo"}\u201D ser\xE1 removido da agenda. Esta a\xE7\xE3o n\xE3o pode ser desfeita.`,confirmLabel:"Excluir evento",confirmColor:"warn",icon:"delete_forever"},ariaLabel:"Confirmar exclus\xE3o de evento",autoFocus:"dialog",restoreFocus:!0,width:"min(92vw, 420px)"}).afterClosed().pipe(Ye(1),fe(t=>t===!0),vt(()=>this.calendarService.deleteEvent(a))).subscribe({next:()=>{this.existingEvents.update(t=>t.filter(i=>i.id!==a)),this.showMessage("Evento exclu\xEDdo da agenda.","success")},error:t=>{console.error("Erro ao excluir o evento:",t),this.showMessage(this.getRequestErrorMessage(t,"excluir"),"error")}})}onRangeChange(a){this.selectedRange=a,this.eventForm.patchValue({dateRange:{start:a?.start||null,end:a?.end||a?.start||null}})}onActiveDateChange(a){this.currentCalendarDate.set(a)}loadOccupiedSlots(){if(!this.calendarState.selectedCalendarId()){this.loading.set(!1),this.existingEvents.set([]),this.availabilityError.set("Cadastre uma agenda antes de consultar a disponibilidade."),this.eventForm.enable();return}this.loading.set(!0),this.availabilityError.set(""),this.eventForm.disable(),this.calendarService.getEvents(0,31).subscribe({next:a=>{this.existingEvents.set(a),this.loading.set(!1),this.eventForm.enable()},error:a=>{this.loading.set(!1),this.eventForm.enable(),this.availabilityError.set("N\xE3o foi poss\xEDvel carregar a disponibilidade. Tente novamente antes de agendar."),console.error("Erro ao carregar eventos existentes:",a)}})}showMessage(a,e){this.snackBar.open(a,"Fechar",{duration:e==="success"?4e3:7e3,politeness:e==="error"?"assertive":"polite",panelClass:[`app-snackbar-${e}`],horizontalPosition:"right",verticalPosition:"bottom"})}getRequestErrorMessage(a,e){let t=typeof a=="object"&&a!==null&&"status"in a?a.status:void 0,i=typeof t=="number"?t:void 0;return i===0?"N\xE3o foi poss\xEDvel conectar \xE0 API. Verifique sua conex\xE3o e tente novamente.":i===401?"Sua sess\xE3o Google expirou. Entre novamente com a conta autorizada.":i===403?"Esta conta Google n\xE3o tem permiss\xE3o para alterar as agendas.":i===409?"Esse hor\xE1rio entrou em conflito com outro evento. Atualize a agenda e escolha outro per\xEDodo.":i===400?e==="criar"?"Confira o t\xEDtulo, a data e os hor\xE1rios informados e tente novamente.":"A solicita\xE7\xE3o de exclus\xE3o n\xE3o foi aceita. Atualize a agenda e tente novamente.":e==="criar"?"N\xE3o foi poss\xEDvel agendar o evento agora. Tente novamente em instantes.":"N\xE3o foi poss\xEDvel excluir o evento agora. Tente novamente em instantes."}formatRangeDisplay(){if(!this.selectedRange||!this.selectedRange.start)return"Selecione no calend\xE1rio";let a=this.eventForm?.get("startTime")?.value||"00:00",e=this.eventForm?.get("endTime")?.value||"00:00",t=this.selectedRange.start.toLocaleDateString("pt-BR");if(this.selectedRange.end){let i=this.selectedRange.end.toLocaleDateString("pt-BR");if(t!==i)return`${t} \xE0s ${a} at\xE9 ${i} \xE0s ${e}`}return`${t} das ${a} \xE0s ${e}`}formatEventDate(a){if(!a)return"";let e=new Date(a),t=String(e.getDate()).padStart(2,"0"),i=String(e.getMonth()+1).padStart(2,"0"),r=e.getFullYear(),o=String(e.getHours()).padStart(2,"0"),l=String(e.getMinutes()).padStart(2,"0");return`${t}/${i}/${r} \xE0s ${o}:${l}`}formatEventDateRange(a){if(!a.start)return"";let e=a.start.dateTime||a.start.date,t=this.formatEventDate(e),i=a.end?.dateTime||a.end?.date;if(!i)return t;let r=this.formatEventDate(i);return t===r?t:`${t} at\xE9 ${r}`}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=B({type:n,selectors:[["app-novo-evento-form"]],decls:45,vars:19,consts:[[3,"ngSubmit","formGroup"],[1,"form-layout-grid"],[3,"rangeChange","activeDateChange","startTimeChange","endTimeChange","selectedRange","existingEvents","calendarHeaderDate","startTime","endTime","disabled"],[1,"form-pane"],[1,"form-busy-slots-section"],["fontSet","fontawesome","fontIcon","fa-clock"],[1,"form-busy-slots-section-text"],[1,"availability-error",3,"no-calendar"],[1,"form-slots-list"],[1,"form-appointment"],[1,"form-selected-period-display"],["fontSet","fontawesome","fontIcon","fa-calendar-check",1,"prefix-icon"],["appearance","outline",1,"full-width"],["matInput","","formControlName","summary","placeholder","Ex: Reuni\xE3o com Cliente"],["matInput","","formControlName","description","rows","2","placeholder","Detalhes ou pauta da reuni\xE3o..."],["matInput","","formControlName","location","placeholder","Ex: Av. Paulista, 1000, S\xE3o Paulo - SP"],[1,"event-color-field",3,"disabled"],["role","group","aria-label","Escolher cor do evento",1,"event-color-options"],["type","button","aria-label","Usar cor da agenda","title","Usar cor da agenda",1,"event-color-swatch","no-color",3,"click"],["type","button",1,"event-color-swatch",3,"selected","title","--%NS%swatch-color"],["mat-flat-button","","color","primary","type","submit",1,"form-btn-submit",3,"disabled"],[1,"form-loading-content"],[1,"form-submit-content"],["fontSet","fontawesome","fontIcon","fa-spinner fa-spin"],[1,"availability-error"],[1,"availability-error-message"],[1,"availability-error-actions"],["mat-icon-button","","routerLink","/gerenciar-agenda","title","Criar nova agenda","matTooltip","Criar nova agenda","aria-label","Criar nova agenda",1,"availability-action",3,"queryParams"],["mat-icon-button","","type","button","title","Tentar novamente","matTooltip","Tentar novamente","aria-label","Tentar novamente",1,"availability-action"],["mat-icon-button","","type","button","title","Tentar novamente","matTooltip","Tentar novamente","aria-label","Tentar novamente",1,"availability-action",3,"click"],[3,"--%NS%calendar-color","--%NS%event-color"],[1,"form-event-details"],[1,"form-event-location"],["mat-icon-button","","type","button",1,"form-event-actions",3,"click","matTooltip","disabled"],["type","button",1,"event-color-swatch",3,"click","title"]],template:function(e,t){e&1&&(d(0,"form",0),y("ngSubmit",function(){return t.onSubmit()}),d(1,"div",1)(2,"app-calendar-picker",2),y("rangeChange",function(r){return t.onRangeChange(r)})("activeDateChange",function(r){return t.onActiveDateChange(r)})("startTimeChange",function(r){return t.eventForm.get("startTime")?.setValue(r)})("endTimeChange",function(r){return t.eventForm.get("endTime")?.setValue(r)}),m(),d(3,"div",3)(4,"div",4)(5,"h4"),z(6,"mat-icon",5),g(7," Eventos J\xE1 Agendados:"),m(),N(8,bd,3,0,"div",6)(9,vd,8,7,"div",7)(10,yd,2,0,"p",6)(11,wd,3,0,"ul",8),m(),d(12,"div",9)(13,"div",10),z(14,"mat-icon",11),d(15,"span"),g(16,"Per\xEDodo: "),d(17,"strong"),g(18),m()()(),d(19,"mat-form-field",12)(20,"mat-label"),g(21,"T\xEDtulo / Nome do Evento"),m(),d(22,"input",13),Ct(),m()(),d(23,"mat-form-field",12)(24,"mat-label"),g(25,"Descri\xE7\xE3o"),m(),d(26,"textarea",14),Ct(),m()(),d(27,"mat-form-field",12)(28,"mat-label"),g(29,"Localiza\xE7\xE3o"),m(),d(30,"input",15),Ct(),m(),d(31,"mat-hint"),g(32,"Um endere\xE7o completo ou nome reconhec\xEDvel ajuda o Google Calendar a localizar o lugar."),m()(),d(33,"fieldset",16)(34,"legend"),g(35,"Cor do evento"),m(),d(36,"div",17)(37,"button",18),y("click",function(){return t.eventForm.controls.colorId.setValue("")}),d(38,"mat-icon"),g(39,"format_color_reset"),m()(),me(40,Sd,1,7,"button",19,fd),m()(),d(42,"button",20),N(43,Md,4,0,"span",21)(44,kd,5,0,"span",22),m()()()()()),e&2&&(C("formGroup",t.eventForm),u(2),Oe("--%NS%calendar-color",t.getCalendarColor()),C("selectedRange",t.selectedRange)("existingEvents",t.existingEvents())("calendarHeaderDate",t.currentCalendarDate())("startTime",t.eventForm.get("startTime")?.value)("endTime",t.eventForm.get("endTime")?.value)("disabled",t.loading()),u(2),k("max-height",t.loading()||t.filteredEventsForMonth.length===0),u(4),T(t.loading()?8:t.availabilityError()?9:t.filteredEventsForMonth.length===0?10:11),u(10),Y(t.formatRangeDisplay()),u(4),xt(),u(4),xt(),u(4),xt(),u(3),C("disabled",t.loading()),u(4),k("selected",!t.eventForm.controls.colorId.value),A("aria-pressed",!t.eventForm.controls.colorId.value),u(3),ue(t.eventColors),u(2),C("disabled",t.eventForm.invalid||t.loading()||t.availabilityError()||!t.selectedRange?.start),u(),T(t.loading()?43:44))},dependencies:[Ot,pa,ma,Yt,da,ca,st,bn,Be,Ee,St,ya,va,lt,et,$t,Ue,Xe,Qe,_a,Nt,On,Da],styles:[".form-layout-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:320px 1fr;gap:14px;margin-top:2px;padding-bottom:8px}@media(max-width:768px){.form-layout-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}.form-pane[_ngcontent-%COMP%]{display:flex;flex-direction:column}.form-busy-slots-section[_ngcontent-%COMP%]{background:var(--%NS%mat-sys-surface-container, rgba(0, 0, 0, .03));border:1px solid var(--%NS%mat-sys-outline-variant);border-radius:8px;padding:0;margin-bottom:6px;max-height:40vh;height:26vh;overflow-x:hidden;overflow-y:auto;position:relative;box-sizing:border-box;resize:vertical}.form-busy-slots-section.max-height[_ngcontent-%COMP%]{max-height:18vh}.form-busy-slots-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:.75rem;margin:12px 6px;padding:8px 12px;color:var(--%NS%mat-sys-primary);display:flex;align-items:center;gap:8px;position:sticky;top:0;z-index:5;width:100%;background:var(--%NS%mat-sys-surface-container, #f5f5f5);border-bottom:1px solid var(--%NS%mat-sys-outline-variant);box-sizing:border-box}.form-busy-slots-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:.75rem;width:.75rem;height:.75rem;display:flex;align-items:center;justify-content:center}.form-busy-slots-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .form-busy-slots-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:8px 10px}.form-slots-list[_ngcontent-%COMP%]{list-style:none;padding:0 4px;margin:0;box-sizing:border-box}.form-slots-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:8px 10px;margin:6px 0;border:1px solid var(--%NS%mat-sys-outline-variant, #e0e0e0);border-left:3px solid var(--%NS%calendar-color, var(--%NS%mat-sys-primary));border-radius:6px;background-color:color-mix(in srgb,var(--%NS%event-color, var(--%NS%calendar-color, var(--%NS%mat-sys-surface-container, #fff))) 44%,var(--%NS%mat-sys-surface-container, #fff));box-sizing:border-box;transition:background-color .2s ease,border-color .2s ease}.form-slots-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .form-event-details[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:3px;flex:1;padding-right:8px;min-width:0}.form-slots-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .form-event-details[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:12px;color:var(--%NS%mat-sys-on-surface, #333);font-weight:600;word-break:break-word}.form-slots-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .form-event-details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:11px;color:var(--%NS%mat-sys-on-surface-variant, #666);word-break:break-word}.form-slots-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .form-event-details[_ngcontent-%COMP%]   .form-event-location[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;color:var(--%NS%mat-sys-on-surface-variant, #555)}.form-slots-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .form-event-details[_ngcontent-%COMP%]   .form-event-location[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:14px;width:14px;height:14px;min-width:14px;color:var(--%NS%mat-sys-on-surface-variant, #444)}.form-slots-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .form-event-actions[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;cursor:pointer;color:#d9534f;padding:6px;border-radius:4px;flex-shrink:0;transition:background-color .2s;border:0;background:transparent}.form-slots-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .form-event-actions[_ngcontent-%COMP%]:hover{background-color:#d9534f1a}.form-slots-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .form-event-actions[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%], .form-slots-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .form-event-actions[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .form-slots-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .form-event-actions[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]{transform:rotate(-25deg) translateY(-2px) scale(1.1);transform-origin:bottom center}.form-slots-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .form-event-actions[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .form-slots-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .form-event-actions[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .form-slots-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .form-event-actions[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;display:inline-flex;align-items:center;justify-content:center;transition:transform .25s cubic-bezier(.4,0,.2,1);transform-origin:bottom center}.form-busy-slots-section-text[_ngcontent-%COMP%]{display:flex;text-align:center;align-items:center;justify-content:center;font-size:.7rem;color:var(--%NS%mat-sys-on-surface-variant);font-style:italic}.event-color-field[_ngcontent-%COMP%]{min-width:0;margin:20px 0 8px;padding:0;border:0}.event-color-field[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%]{margin-bottom:8px;color:var(--%NS%mat-sys-on-surface);font:var(--%NS%mat-sys-body-medium);font-weight:500}.event-color-options[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px}.event-color-swatch[_ngcontent-%COMP%]{display:inline-flex;width:30px;height:30px;align-items:center;justify-content:center;padding:0;border:2px solid var(--%NS%mat-sys-outline-variant);border-radius:50%;background:var(--%NS%swatch-color, var(--%NS%mat-sys-surface-container));color:var(--%NS%mat-sys-on-surface-variant);cursor:pointer}.event-color-swatch[_ngcontent-%COMP%]:hover{outline:2px solid var(--%NS%mat-sys-on-surface-variant);outline-offset:2px}.event-color-swatch.selected[_ngcontent-%COMP%]{border:3px solid var(--%NS%mat-sys-on-surface);box-shadow:0 0 0 2px var(--%NS%mat-sys-surface)}.event-color-swatch[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--%NS%mat-sys-primary);outline-offset:3px}.event-color-swatch[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:18px;height:18px;font-size:18px}.availability-error[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:.5rem;padding:.35rem .5rem .35rem .75rem;color:var(--%NS%mat-sys-error);font-style:normal}.availability-error.no-calendar[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-on-surface-variant);background:var(--%NS%mat-sys-surface-container-low);border-radius:6px}.availability-error-message[_ngcontent-%COMP%]{min-width:0;text-align:left;line-height:1.4}.availability-error-actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.15rem;flex:0 0 auto}.availability-action[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-primary)}.availability-action[_ngcontent-%COMP%]:hover{background:var(--%NS%mat-sys-primary-container)}.form-appointment[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.form-selected-period-display[_ngcontent-%COMP%]{background-color:var(--%NS%mat-sys-primary-container, rgba(0, 0, 0, .05));padding:6px 10px;border-radius:6px;font-size:.8rem;color:var(--%NS%mat-sys-on-primary-container, var(--%NS%mat-sys-on-surface));margin-bottom:2px;display:flex;align-items:center;gap:8px;border-left:4px solid var(--%NS%mat-sys-primary)}.form-btn-submit[_ngcontent-%COMP%]{font-weight:700;height:38px;width:100%;border-radius:8px;font-size:.85rem;margin-top:2px;margin-bottom:8px;display:flex;justify-content:center;align-items:center;gap:8px;box-shadow:0 2px 6px #0000001a}.form-btn-submit[_ngcontent-%COMP%]:disabled{opacity:.7;cursor:not-allowed}.form-btn-submit[_ngcontent-%COMP%]   .form-loading-content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:8px;width:100%}.form-btn-submit[_ngcontent-%COMP%]   .form-submit-content[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;gap:8px}.form-btn-submit[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(.4,0,.2,1)}.form-btn-submit[_ngcontent-%COMP%]:hover:not(:disabled)   mat-icon[_ngcontent-%COMP%]{transform:rotate(-12deg) scale(1.12)}"]})};var Ad=(n,a)=>a.color;function Ed(n,a){n&1&&(d(0,"mat-error"),g(1,"Informe o nome da agenda."),m())}function Id(n,a){n&1&&(d(0,"mat-error"),g(1,"O nome deve ter at\xE9 100 caracteres."),m())}function Nd(n,a){n&1&&(d(0,"mat-error"),g(1,"A descri\xE7\xE3o deve ter at\xE9 1000 caracteres."),m())}function Td(n,a){if(n&1){let e=G();d(0,"button",11),y("click",function(){let i=O(e).$implicit,r=b();return R(r.calendarForm.controls.backgroundColor.setValue(i.color))}),m()}if(n&2){let e=a.$implicit,t=b();Oe("--%NS%swatch-color",e.color),k("selected",t.calendarForm.controls.backgroundColor.value===e.color),C("title",e.label),A("aria-pressed",t.calendarForm.controls.backgroundColor.value===e.color)("aria-label",e.label+", "+e.color)}}var ka=class n{formBuilder=s(ua);calendarColors=Object.entries(vr).map(([a,e])=>({color:a,label:e.label}));loading=!1;submitCalendar=new S;cancel=new S;calendarForm=this.formBuilder.group({summary:["",[ce.required,ce.maxLength(100)]],description:["",ce.maxLength(1e3)],backgroundColor:["#4986e7",ce.required]});submit(){if(this.calendarForm.invalid||this.loading||this.calendarForm.disabled){this.calendarForm.markAllAsTouched();return}let{summary:a,description:e,backgroundColor:t}=this.calendarForm.getRawValue(),i=a?.trim()??"";if(!i){this.calendarForm.controls.summary.setErrors({required:!0});return}this.calendarForm.disable(),this.submitCalendar.emit({summary:i,description:e?.trim()||void 0,timeZone:"America/Sao_Paulo",backgroundColor:t??"#4986e7"})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=B({type:n,selectors:[["app-novo-calendario-form"]],inputs:{loading:"loading"},outputs:{submitCalendar:"submitCalendar",cancel:"cancel"},decls:24,vars:8,consts:[[1,"new-calendar-form",3,"ngSubmit","formGroup"],["appearance","outline"],["matInput","","formControlName","summary","maxlength","100","required",""],["matInput","","formControlName","description","maxlength","1000","rows","3"],[1,"calendar-color-field",3,"disabled"],["role","group","aria-label","Escolher cor da agenda",1,"calendar-color-options"],["type","button",1,"color-swatch",3,"selected","title","--%NS%swatch-color"],[1,"form-actions"],["mat-button","","type","button",3,"click","disabled"],["mat-flat-button","","color","primary","type","submit",3,"disabled"],["fontSet","fontawesome",3,"fontIcon"],["type","button",1,"color-swatch",3,"click","title"]],template:function(e,t){e&1&&(d(0,"form",0),y("ngSubmit",function(){return t.submit()}),d(1,"mat-form-field",1)(2,"mat-label"),g(3,"Nome da agenda"),m(),d(4,"input",2),Ct(),m(),N(5,Ed,2,0,"mat-error")(6,Id,2,0,"mat-error"),m(),d(7,"mat-form-field",1)(8,"mat-label"),g(9,"Descri\xE7\xE3o (opcional)"),m(),d(10,"textarea",3),Ct(),m(),N(11,Nd,2,0,"mat-error"),m(),d(12,"fieldset",4)(13,"legend"),g(14,"Cor da agenda"),m(),d(15,"div",5),me(16,Td,1,7,"button",6,Ad),m()(),d(18,"div",7)(19,"button",8),y("click",function(){return t.cancel.emit()}),g(20," Cancelar "),m(),d(21,"button",9),z(22,"mat-icon",10),g(23),m()()()),e&2&&(C("formGroup",t.calendarForm),u(4),xt(),u(),T(t.calendarForm.controls.summary.hasError("required")?5:t.calendarForm.controls.summary.hasError("maxlength")?6:-1),u(5),xt(),u(),T(t.calendarForm.controls.description.hasError("maxlength")?11:-1),u(),C("disabled",t.loading||t.calendarForm.disabled),u(4),ue(t.calendarColors),u(3),C("disabled",t.loading||t.calendarForm.disabled),u(2),C("disabled",t.calendarForm.invalid||t.loading||t.calendarForm.disabled),u(),C("fontIcon",t.loading?"fa-spinner fa-spin":"fa-calendar-plus"),u(),ee(" ",t.loading?"Criando agenda...":"Criar agenda"," "))},dependencies:[pa,ma,Yt,da,ca,la,gi,st,bn,Be,Ee,Ue,lt,et,ga,Xe,Qe,ya,va],styles:[".new-calendar-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:min(100%,460px);margin-top:12px;text-align:left}.new-calendar-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}.calendar-color-field[_ngcontent-%COMP%]{min-width:0;margin:0 0 16px;padding:0;border:0}.calendar-color-field[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%]{margin-bottom:8px;color:var(--%NS%mat-sys-on-surface);font:var(--%NS%mat-sys-body-medium);font-weight:500}.calendar-color-options[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(30px,1fr));gap:8px}.color-swatch[_ngcontent-%COMP%]{width:30px;height:30px;padding:0;border:2px solid var(--%NS%mat-sys-outline-variant);border-radius:50%;background:var(--%NS%swatch-color);cursor:pointer}.color-swatch[_ngcontent-%COMP%]:hover{outline:2px solid var(--%NS%mat-sys-on-surface-variant);outline-offset:2px}.color-swatch.selected[_ngcontent-%COMP%]{border:3px solid var(--%NS%mat-sys-on-surface);box-shadow:0 0 0 2px var(--%NS%mat-sys-surface)}.color-swatch[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--%NS%mat-sys-primary);outline-offset:3px}.form-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center;gap:8px}.form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:6px}"]})};var Fd=(n,a)=>a.id;function Od(n,a){n&1&&(d(0,"div",10),z(1,"app-novo-evento-form"),m())}function Rd(n,a){n&1&&(d(0,"div",13),z(1,"mat-icon",23),d(2,"span"),g(3,"Carregando agendas..."),m()())}function Vd(n,a){n&1&&(d(0,"div",13)(1,"mat-icon"),g(2,"calendar_month"),m(),d(3,"span"),g(4,"Cadastre ou selecione uma agenda para visualiz\xE1-la."),m()())}function Pd(n,a){n&1&&(d(0,"div",24),z(1,"mat-icon",23),d(2,"span"),g(3,"Carregando agenda..."),m()())}function Ld(n,a){if(n&1){let e=G();N(0,Pd,4,0,"div",24),d(1,"iframe",25),y("load",function(){O(e);let i=b(2);return R(i.onIframeLoad())}),m()}if(n&2){let e=b(2);T(e.iframeLoading()?0:-1),u(),C("src",e.iframeSRC(),qi)}}function Bd(n,a){if(n&1&&(d(0,"mat-option",27)(1,"span",28),z(2,"span",29),g(3),m()()),n&2){let e=a.$implicit,t=b(3);C("value",e.id),u(2),Oe("background-color",t.getCalendarColor(e.backgroundColor)),u(),ee(" ",e.summary||"Agenda sem nome"," ")}}function zd(n,a){if(n&1){let e=G();d(0,"mat-form-field",16)(1,"mat-label"),g(2,"Agenda selecionada"),m(),d(3,"mat-select",26),y("selectionChange",function(i){O(e);let r=b(2);return R(r.onCalendarChange(i.value))}),me(4,Bd,4,4,"mat-option",27,Fd),m()()}if(n&2){let e=b(2);u(3),C("value",e.selectedCalendarId()),u(),ue(e.calendars())}}function Hd(n,a){n&1&&(d(0,"p",17),g(1,"Voc\xEA ainda n\xE3o tem agendas secund\xE1rias."),m())}function jd(n,a){if(n&1){let e=G();d(0,"button",30),y("click",function(){O(e);let i=b(2);return R(i.createCalendar())}),d(1,"mat-icon"),g(2,"add"),m(),g(3," Nova agenda "),m()}if(n&2){let e=b(2);C("disabled",e.creatingCalendar()||e.deletingCalendar())}}function Gd(n,a){if(n&1){let e=G();d(0,"button",31),y("click",function(){O(e);let i=b(2);return R(i.confirmDeleteCalendar())}),d(1,"mat-icon"),g(2,"delete_outline"),m(),g(3," Excluir selecionada "),m()}if(n&2){let e=b(2);C("disabled",e.creatingCalendar()||e.deletingCalendar())}}function Yd(n,a){if(n&1){let e=G();d(0,"div",21)(1,"h5"),g(2),m(),d(3,"app-novo-calendario-form",32),y("submitCalendar",function(i){O(e);let r=b(2);return R(r.onCreateCalendar(i))})("cancel",function(){O(e);let i=b(2);return R(i.showCalendarForm.set(!1))}),m()()}if(n&2){let e=b(2);u(2),Y(e.hasCalendars()?"Cadastrar nova agenda":"Cadastrar primeira agenda"),u(),C("loading",e.creatingCalendar())}}function $d(n,a){n&1&&(d(0,"p",22),z(1,"mat-icon",23),g(2," Excluindo agenda... "),m())}function qd(n,a){if(n&1&&(d(0,"div",11)(1,"section",12),N(2,Rd,4,0,"div",13)(3,Vd,5,0,"div",13)(4,Ld,2,2),m(),d(5,"aside",14)(6,"div",15)(7,"mat-icon"),g(8,"calendar_month"),m(),d(9,"div")(10,"h4"),g(11,"Minhas agendas"),m(),d(12,"p"),g(13,"Escolha qual agenda visualizar ou gerenciar."),m()()(),N(14,zd,6,1,"mat-form-field",16)(15,Hd,2,0,"p",17),d(16,"div",18),N(17,jd,4,1,"button",19),N(18,Gd,4,1,"button",20),m(),N(19,Yd,4,2,"div",21),N(20,$d,3,0,"p",22),m()()),n&2){let e=b();u(2),T(e.calendarsInitialized()?e.hasCalendars()?4:3:2),u(12),T(e.calendarsInitialized()&&e.hasCalendars()?14:e.calendarsInitialized()?15:-1),u(3),T(e.showCalendarForm()?-1:17),u(),T(e.hasCalendars()?18:-1),u(),T(e.showCalendarForm()?19:-1),u(),T(e.deletingCalendar()?20:-1)}}var rs=class n{sanitizer=s(ir);route=s(rr);calendarState=s(Bn);calendarService=s(zn);dialog=s(Bt);snackBar=s(ba);selectedTabIndex=E(0);iframeLoading=E(!0);creatingCalendar=E(!1);deletingCalendar=E(!1);showCalendarForm=E(!1);calendars=this.calendarState.calendars;selectedCalendarId=this.calendarState.selectedCalendarId;selectedCalendar=this.calendarState.selectedCalendar;calendarsInitialized=this.calendarState.initialized;hasCalendars=xe(()=>this.calendarState.calendars().length>0);iframeSRC=xe(()=>{let a=this.calendarState.selectedCalendarId(),e=a?`https://calendar.google.com/calendar/embed?src=${encodeURIComponent(a)}&ctz=America%2FSao_Paulo&hl=pt-BR`:"about:blank";return this.sanitizer.bypassSecurityTrustResourceUrl(e)});ngOnInit(){this.route.queryParams.subscribe(a=>{a.tab==="visualizar"&&(a.create==="true"&&this.showCalendarForm.set(!0),this.selectedTabIndex.set(1))})}onTabChange(a){this.selectedTabIndex.set(a)}onIframeLoad(){this.iframeLoading()&&this.iframeLoading.set(!1)}onCalendarChange(a){this.calendarState.setCalendarId(a),this.iframeLoading.set(!0)}getCalendarColor(a){return Hn(a)}createCalendar(){this.showCalendarForm.set(!0)}onCreateCalendar(a){this.creatingCalendar.set(!0),this.calendarService.createCalendar(a).subscribe({next:e=>{if(this.creatingCalendar.set(!1),!e.id){this.showCalendarMessage("A agenda foi criada, mas n\xE3o foi poss\xEDvel identific\xE1-la para exibi\xE7\xE3o.","error");return}let t=this.calendarState.calendars();this.calendarState.setCalendars([...t.filter(i=>i.id!==e.id),e]),this.calendarState.setCalendarId(e.id),this.showCalendarForm.set(!1),this.iframeLoading.set(!0),this.showCalendarMessage("Agenda criada com sucesso.","success")},error:e=>{this.creatingCalendar.set(!1),console.error("Erro ao criar agenda:",e);let t=typeof e?.error?.error=="string"?e.error.error:"N\xE3o foi poss\xEDvel criar a agenda. Verifique a conex\xE3o e tente novamente.";this.showCalendarMessage(t,"error")}})}confirmDeleteCalendar(){let a=this.selectedCalendar();if(!a?.id){this.showCalendarMessage("Selecione uma agenda v\xE1lida para excluir.","error");return}let e=a.id;this.dialog.open(Qt,{data:{title:"Excluir agenda?",message:`A agenda \u201C${a.summary||"sem nome"}\u201D e todos os eventos nela ser\xE3o exclu\xEDdos permanentemente. Esta a\xE7\xE3o n\xE3o pode ser desfeita.`,confirmLabel:"Excluir agenda",confirmColor:"warn",icon:"delete_forever"},ariaLabel:"Confirmar exclus\xE3o de agenda",autoFocus:"dialog",restoreFocus:!0}).afterClosed().subscribe(t=>{t&&this.deleteCalendar(e)})}deleteCalendar(a){this.deletingCalendar.set(!0),this.calendarService.deleteCalendar(a).subscribe({next:()=>{let e=this.calendarState.calendars().filter(t=>t.id!==a);this.calendarState.setCalendars(e),this.deletingCalendar.set(!1),this.iframeLoading.set(!0),this.showCalendarMessage("Agenda e eventos exclu\xEDdos com sucesso.","success")},error:e=>{this.deletingCalendar.set(!1),console.error("Erro ao excluir agenda:",e);let t=typeof e?.error?.error=="string"?e.error.error:"N\xE3o foi poss\xEDvel excluir a agenda. Verifique as permiss\xF5es e tente novamente.";this.showCalendarMessage(t,"error")}})}showCalendarMessage(a,e){this.snackBar.open(a,"Fechar",{duration:e==="success"?4e3:7e3,politeness:e==="error"?"assertive":"polite",panelClass:[`app-snackbar-${e}`],horizontalPosition:"right",verticalPosition:"bottom"})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=B({type:n,selectors:[["app-gerenciar-agenda-evento-page"]],decls:15,vars:1,consts:[[1,"calendar-wrapper"],[1,"calendar-form-container","wide-modal"],["type","button","routerLink","/","aria-label","Voltar para a agenda","title","Voltar",1,"btn-close"],["fontSet","fontawesome","fontIcon","fa-arrow-left"],[1,"calendar-icon-title"],[1,"subtitle"],[1,"calendar-tabs",3,"selectedIndexChange","selectedIndex"],["label","Novo Evento"],["matTabContent",""],["label","Visualizar Agenda"],[1,"tab-content-wrapper"],[1,"tab-content-wrapper","calendar-management-layout"],["aria-label","Visualiza\xE7\xE3o da agenda",1,"calendar-preview-panel"],[1,"calendar-preview-empty"],["aria-label","Gerenciar agendas",1,"calendar-management-panel"],[1,"calendar-management-heading"],["appearance","outline",1,"calendar-select-field"],[1,"calendar-empty-hint"],[1,"calendar-management-actions"],["mat-flat-button","","color","primary","type","button",1,"calendar-action-button","create-calendar-button",3,"disabled"],["mat-stroked-button","","color","warn","type","button","matTooltip","Exclui permanentemente esta agenda e todos os eventos",1,"calendar-action-button","delete-calendar-button",3,"disabled"],[1,"calendar-create-section"],["role","status",1,"calendar-management-status"],["fontSet","fontawesome","fontIcon","fa-spinner fa-spin"],[1,"iframe-loading-overlay"],["title","Agenda Google selecionada","width","100%","height","450","frameborder","0","scrolling","no",3,"load","src"],[3,"selectionChange","value"],[3,"value"],[1,"calendar-option"],[1,"calendar-color-marker"],["mat-flat-button","","color","primary","type","button",1,"calendar-action-button","create-calendar-button",3,"click","disabled"],["mat-stroked-button","","color","warn","type","button","matTooltip","Exclui permanentemente esta agenda e todos os eventos",1,"calendar-action-button","delete-calendar-button",3,"click","disabled"],[3,"submitCalendar","cancel","loading"]],template:function(e,t){e&1&&(d(0,"div",0)(1,"div",1)(2,"button",2),z(3,"mat-icon",3),m(),d(4,"h3")(5,"mat-icon",4),g(6,"edit_calendar"),m(),g(7," Gerenciar Agenda"),m(),d(8,"p",5),g(9,"Gerencie seus compromissos e visualize o calend\xE1rio integrado."),m(),d(10,"mat-tab-group",6),y("selectedIndexChange",function(r){return t.onTabChange(r)}),d(11,"mat-tab",7),oe(12,Od,2,0,"ng-template",8),m(),d(13,"mat-tab",9),oe(14,qd,21,6,"ng-template",8),m()()()()),e&2&&(u(10),C("selectedIndex",t.selectedTabIndex()))},dependencies:[Ot,Xe,Qe,Hr,Za,Ja,zr,Be,Ee,Ue,lt,et,zo,Bo,$n,_a,Nt,Ma,ka,On],styles:[".calendar-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%;padding:8px;box-sizing:border-box}.calendar-form-container[_ngcontent-%COMP%]{background:var(--%NS%mat-sys-surface-container-highest, var(--%NS%mat-sys-surface));color:var(--%NS%mat-sys-on-surface);padding:12px 16px;border-radius:16px;width:100%;max-width:1200px;height:auto;max-height:92vh;display:flex;flex-direction:column;position:relative;box-shadow:0 12px 32px #0000004d;border:1px solid var(--%NS%mat-sys-outline-variant);box-sizing:border-box;overflow:hidden}.calendar-form-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 2px;color:var(--%NS%mat-sys-on-surface);font-size:1.05rem}.calendar-form-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   .calendar-icon-title[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-primary)}.calendar-tabs[_ngcontent-%COMP%]{margin-top:4px;display:flex;flex-direction:column;flex:1;min-height:0}.calendar-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-header{flex-shrink:0}.calendar-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-body-wrapper{flex:1;min-height:0;display:flex}.calendar-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-body{flex:1;display:flex;flex-direction:column}.calendar-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-body-content{flex:1;display:flex;flex-direction:column;overflow-y:auto!important;overflow-x:hidden!important;scrollbar-width:thin;scrollbar-color:var(--%NS%mat-sys-outline-variant) transparent}.calendar-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-body-content::-webkit-scrollbar{width:6px;height:6px}.calendar-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-body-content::-webkit-scrollbar-track{background:transparent}.calendar-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-body-content::-webkit-scrollbar-thumb{background-color:var(--%NS%mat-sys-outline-variant);border-radius:4px}.calendar-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-body-content::-webkit-scrollbar-thumb:hover{background-color:var(--%NS%mat-sys-primary)}.tab-content-wrapper[_ngcontent-%COMP%]{padding-top:8px;padding-bottom:24px;width:100%;box-sizing:border-box}.iframe-loading-overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--%NS%mat-sys-surface, rgba(255, 255, 255, .9));display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;z-index:2;font-weight:500;color:var(--%NS%mat-sys-primary)}.iframe-loading-overlay[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:2rem;width:2rem;height:2rem}.calendar-management-layout[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,1fr) minmax(260px,320px);align-items:stretch;gap:16px;min-height:520px;padding-bottom:8px}.calendar-preview-panel[_ngcontent-%COMP%]{position:relative;display:flex;align-items:stretch;justify-content:center;min-width:0;min-height:500px;overflow:hidden;border:1px solid var(--%NS%mat-sys-outline-variant);border-radius:12px;background:var(--%NS%mat-sys-surface)}.calendar-preview-panel[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{display:block;width:100%;height:500px;min-height:500px;border:0;background:transparent}.calendar-preview-empty[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:24px;color:var(--%NS%mat-sys-on-surface-variant);text-align:center}.calendar-preview-empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-primary);font-size:44px;width:44px;height:44px}.calendar-management-panel[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:14px;min-width:0;padding:16px;border:1px solid var(--%NS%mat-sys-outline-variant);border-radius:12px;background:var(--%NS%mat-sys-surface-container)}.calendar-management-heading[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:10px}.calendar-management-heading[_ngcontent-%COMP%] > mat-icon[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-primary)}.calendar-management-heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0;color:var(--%NS%mat-sys-on-surface);font-size:1rem}.calendar-management-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:4px 0 0;color:var(--%NS%mat-sys-on-surface-variant);font-size:.8rem}.calendar-select-field[_ngcontent-%COMP%]{width:100%;margin-bottom:-16px}.calendar-option[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:10px}.calendar-color-marker[_ngcontent-%COMP%]{width:10px;height:10px;flex:0 0 10px;border-radius:50%}.calendar-empty-hint[_ngcontent-%COMP%], .calendar-management-status[_ngcontent-%COMP%]{margin:0;color:var(--%NS%mat-sys-on-surface-variant);font-size:.875rem}.calendar-management-actions[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}.calendar-management-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;justify-content:center}.calendar-action-button[_ngcontent-%COMP%]{transition:transform .2s ease,box-shadow .2s ease,background-color .2s ease}.calendar-action-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(.4,0,.2,1)}.calendar-action-button[_ngcontent-%COMP%]:hover:not(:disabled){transform:translateY(-1px);box-shadow:0 4px 10px #00000029}.calendar-action-button[_ngcontent-%COMP%]:active:not(:disabled){transform:translateY(0)}.calendar-action-button[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.create-calendar-button[_ngcontent-%COMP%]:hover:not(:disabled)   mat-icon[_ngcontent-%COMP%]{transform:rotate(90deg)}.delete-calendar-button[_ngcontent-%COMP%]:hover:not(:disabled)   mat-icon[_ngcontent-%COMP%]{transform:rotate(-18deg) translateY(-1px)}.calendar-create-section[_ngcontent-%COMP%]{padding-top:12px;border-top:1px solid var(--%NS%mat-sys-outline-variant)}.calendar-create-section[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:0 0 8px;color:var(--%NS%mat-sys-on-surface);font-size:.9rem}.calendar-management-status[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;color:var(--%NS%mat-sys-primary)}@media(max-width:760px){.calendar-management-layout[_ngcontent-%COMP%]{grid-template-columns:minmax(0,1fr);min-height:0}.calendar-preview-panel[_ngcontent-%COMP%]{min-height:420px}.calendar-preview-panel[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:420px;min-height:420px}}.btn-close[_ngcontent-%COMP%]{position:absolute;top:12px;right:12px;background:transparent;border:none;color:var(--%NS%mat-sys-on-surface-variant);font-size:1rem;cursor:pointer;padding:4px;border-radius:50%;display:flex;align-items:center;justify-content:center;transition:background-color .2s,color .2s,transform .2s;z-index:10}.btn-close[_ngcontent-%COMP%]:hover{background-color:var(--%NS%mat-sys-state-hover-state-layer, rgba(0, 0, 0, .05));color:var(--%NS%mat-sys-primary);transform:translate(-3px)}.btn-close[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{transition:transform .2s ease}.btn-close[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%]{transform:translate(-2px)}.subtitle[_ngcontent-%COMP%]{font-size:.75rem;color:var(--%NS%mat-sys-on-surface-variant);margin-bottom:4px}@media(prefers-reduced-motion:reduce){.calendar-action-button[_ngcontent-%COMP%], .calendar-action-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .btn-close[_ngcontent-%COMP%], .btn-close[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{transition-duration:.01ms!important}}"]})};export{rs as GerenciarAgendaEventoPage};
