"use strict";(self.webpackChunkbhq_ius_moodle=self.webpackChunkbhq_ius_moodle||[]).push([[591],{591:(de,R,s)=>{s.r(R),s.d(R,{RoleApplicationModule:()=>ce});var m=s(9808),P=s(520),I=s(9923),J=s(9201),c=s(2382),h=s(9826),O=s(5861),e=s(5e3),S=s(8072),F=s(6843),k=s(5278),z=s(6042),x=s(2683),A=s(2643),y=s(6114),M=s(5482);const Z=function(i){return{data:i}};function w(i,l){if(1&i&&e.GkF(0,6),2&i){const t=l.$implicit;e.oxw();const n=e.MAs(3);e.Q6J("ngTemplateOutlet",n)("ngTemplateOutletContext",e.VKq(2,Z,t))}}function N(i,l){if(1&i&&e.GkF(0,6),2&i){const t=e.oxw(2).$implicit;e.oxw(2);const n=e.MAs(3);e.Q6J("ngTemplateOutlet",n)("ngTemplateOutletContext",e.VKq(2,Z,t))}}function Q(i,l){if(1&i&&(e.ynx(0),e.YNc(1,N,1,4,"ng-container",1),e.BQk()),2&i){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("ngForOf",t.children)}}function U(i,l){if(1&i){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",13)(2,"div",14)(3,"label",15),e.NdJ("ngModelChange",function(o){e.CHM(t);const a=e.oxw().$implicit;return e.KtG(a.isChecked=o)})("ngModelChange",function(o){e.CHM(t);const a=e.oxw().$implicit,r=e.oxw(2);return e.KtG(r.isChecked(r.listData,o,a.id))}),e._uU(4),e.qZA()()(),e.BQk()}if(2&i){const t=e.oxw().$implicit;e.xp6(3),e.Q6J("ngModel",t.isChecked),e.xp6(1),e.Oqu(t.name)}}function G(i,l){if(1&i&&(e.ynx(0),e.YNc(1,Q,2,1,"ng-container",12),e.YNc(2,U,5,2,"ng-container",12),e.BQk()),2&i){const t=l.$implicit;e.xp6(1),e.Q6J("ngIf",0==t.type),e.xp6(1),e.Q6J("ngIf",1==t.type)}}function Y(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"label",16),e.NdJ("ngModelChange",function(o){e.CHM(t);const a=e.oxw().data,r=e.oxw();return e.KtG(r.checkedAll(a.children,o))})("click",function(o){return o.stopPropagation()}),e._uU(1," T\xedch All"),e.qZA()}if(2&i){const t=e.oxw().data;e.Q6J("ngModel",t.isCheckedAll)}}function V(i,l){if(1&i&&(e.TgZ(0,"nz-collapse",7)(1,"nz-collapse-panel",8),e.YNc(2,G,3,2,"ng-container",9),e.qZA()(),e.YNc(3,Y,2,1,"ng-template",10,11,e.W1O)),2&i){const t=l.data,n=e.MAs(4);e.xp6(1),e.s9C("nzHeader",t.name),e.Q6J("nzExtra",n),e.xp6(1),e.Q6J("ngForOf",t.children)}}let q=(()=>{class i{constructor(t,n,o,a,r){this.permissionData=t,this.rolePerData=n,this.route=o,this.notifyService=a,this._location=r,this.listParent=[],this.listChild=[],this.listSubChild=[],this.listId=[],this.pageNumber=1,this.pageSize=999,this.totalElements=0,this.checkedBoxAll=!1,this.isClicked=!1,this.modalOptions={nzDuration:2e3}}ngOnInit(){this.getPermission()}getIdRole(){let t=this.route.snapshot.paramMap.get("id");return this.txtRolePer=`roleId.eq.${t},`,console.log(t),parseInt(t)}getPermission(){this.getRolePer(),this.permissionData.search(this.pageNumber,this.pageSize,this.txtSearch).subscribe({next:t=>{console.log(t),this.listData=this.sortArray(t.pagingData.content);for(let n=0;n<this.listData.length;n++)this.listData[n].children&&this.rolePerChecked(this.listData[n].children);console.log(this.listData),this.totalElements=t.pagingData.totalElements,this.totalPages=t.pagingData.totalPages},error:t=>{console.log(t)}})}rolePerChecked(t){for(let n=0;n<t.length;n++)t[n].children?this.rolePerChecked(t[n].children):this.listRolePer.map(o=>{o.permissionId==t[n].id&&(t[n].isChecked=!0)})}sortArray(t){return t.sort((n,o)=>n.code.localeCompare(o.code)),t.forEach(n=>{const o=t.filter(a=>a.parentCode===n.code);o.length>0&&(this.sortArray(o),n.children=o)}),t.filter(n=>!n.parentCode)}getRolePer(){this.getIdRole(),this.rolePerData.search(this.pageNumber,this.pageSize,this.txtRolePer).subscribe({next:t=>{this.listRolePer=t.pagingData.content;for(let n=0;n<this.listRolePer.length;n++)this.listId.push(t.pagingData.content[n].permissionId);console.log(this.listRolePer),console.log(this.listId),this.totalElements=t.pagingData.totalElements,this.totalPages=t.pagingData.totalPages},error:t=>{console.log(t)}})}onCreate(){var t=this;let n=[],o=[],a=[];for(let p=0;p<this.listId.length;p++){let d={id:0,roleId:0,permissionId:0};d.roleId=this.getIdRole(),d.permissionId=this.listId[p];for(let u=0;u<this.listRolePer.length;u++)this.listRolePer[u].permissionId===d.permissionId&&(d.id=this.listRolePer[u].id);n.push(d)}function r(p,d){return p.filter(u=>!d.some(pe=>u.id===pe.id))}o=[...r(n,this.listRolePer),...r(this.listRolePer,n)];for(let p=0;p<o.length;p++)a.push(o[p].id);var p;this.rolePerData.save(n).subscribe({next:p=>{p&&console.log(p)},error:p=>{console.log(p)},complete:()=>{console.log("done")}}),this.rolePerData.deleteSelectedId(a).subscribe({next:(p=(0,O.Z)(function*(d){d&&(yield t.notify())}),function(u){return p.apply(this,arguments)}),error:p=>{console.log(p)},complete:()=>{console.log("done")}})}notify(){this.notifyService.success("Th\xe0nh c\xf4ng","Ph\xe2n quy\u1ec1n",this.modalOptions)}checkedAll(t,n){for(let o=0;o<t.length;o++)t[o].children?(t[o].isCheckedAll=n,this.checkedAll(t[o].children,n)):t[o].isChecked=n}isChecked(t,n,o){return t.reduce((a,r)=>a||(r.id===o?(r.isChecked=n,this.checkIntoArr(r)):r.children?this.isChecked(r.children,n,o):void 0),null)}checkIntoArr(t){let n=t;if(!0===n.isChecked&&-1===this.listId.indexOf(n.id))this.listId.push(n.id),console.log(this.listData);else{let o=this.listId.indexOf(n.id);console.log(o),o>-1&&this.listId.splice(o,1)}}goBack(){this._location.back()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(S.G),e.Y36(F.y),e.Y36(h.gz),e.Y36(k.zb),e.Y36(m.Ye))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-role-app-detail"]],decls:10,vars:1,consts:[[1,"role-detail-wrapper"],["class","collapse-wrapper",3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngFor","ngForOf"],["treeNode",""],["routerLink","/pages/roles-app",1,"mr-3"],["nz-button",""],["nz-button","",3,"click"],[1,"collapse-wrapper",3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mb-4"],["nzActive","true",3,"nzExtra","nzHeader"],[4,"ngFor","ngForOf"],["class","checkUncheck"],["extraTpl",""],[4,"ngIf"],[1,"test",2,"width","50%"],[1,"my-2"],["nz-checkbox","",2,"line-height","1.5",3,"ngModel","ngModelChange"],["nz-checkbox","",3,"ngModel","ngModelChange","click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.YNc(1,w,1,4,"ng-container",1),e.YNc(2,V,5,3,"ng-template",null,2,e.W1O),e.TgZ(4,"a",3)(5,"button",4)(6,"span"),e._uU(7,"Tr\u1edf l\u1ea1i"),e.qZA()()(),e.TgZ(8,"button",5),e.NdJ("click",function(){return n.onCreate()}),e._uU(9,"L\u01b0u"),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("ngForOf",n.listData))},dependencies:[m.sg,m.O5,m.tP,h.yS,z.ix,x.w,A.dQ,y.Ie,M.Zv,M.yH,c.JJ,c.On],styles:["*[_ngcontent-%COMP%]{font-size:16px}[_nghost-%COMP%]     .ant-collapse-arrow svg{margin-bottom:5px}[_nghost-%COMP%]     .ant-collapse-content-box:has(> .test){display:grid;grid-template-columns:1fr 1fr}.role-detail-wrapper[_ngcontent-%COMP%]{padding:40px}.role-detail-wrapper[_ngcontent-%COMP%]   .collapse-wrapper[_ngcontent-%COMP%]{margin:30px 0}"]}),i})();var _=s(338),f=s(7957),v=s(1894),C=s(4546);function B(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"div",5)(1,"button",6),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.handleOk())}),e._uU(2," X\xf3a "),e.qZA(),e.TgZ(3,"button",7),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.handleCancel())}),e._uU(4,"H\u1ee7y"),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(1),e.Q6J("nzLoading",t.isConfirmLoading)}}let D=(()=>{class i{constructor(t){this.modalRef=t,this.isVisible=!1,this.isConfirmLoading=!1}ngOnInit(){this.data="B\u1ea1n c\xf3 ch\u1eafc mu\u1ed1n x\xf3a ????"}handleOk(){this.isConfirmLoading=!0,this.modalRef.close(!0)}handleCancel(){this.isVisible=!1,this.modalRef.close()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(f.Lf))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-delete"]],inputs:{title:"title",data:"data"},decls:7,vars:1,consts:[[1,"modal-content"],["nz-form",""],[1,"flex","flex-row"],["nz-col","",1,"text-center"],["class","modal-footer",4,"nzModalFooter"],[1,"modal-footer"],["nz-button","","nzType","primary",3,"nzLoading","click"],["nz-button","","nzType","default",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"form",1)(2,"div",2)(3,"div",3)(4,"p"),e._uU(5),e.qZA()()()(),e.YNc(6,B,5,1,"div",4),e.qZA()),2&t&&(e.xp6(5),e.Oqu(n.data))},dependencies:[z.ix,x.w,A.dQ,f.Uh,v.t3,C.Lr,c._Y,c.JL,c.F],styles:[".modal-content[_ngcontent-%COMP%]{border:none}.modal-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.modal-custom[_ngcontent-%COMP%]   .ant-modal-title[_ngcontent-%COMP%]{display:flex;justify-content:center;font-weight:700;text-transform:uppercase}.modal-footer[_ngcontent-%COMP%]{display:flex;justify-content:center}"]}),i})();var E=s(4733),T=s(1047);function H(i,l){1&i&&(e.ynx(0),e._uU(1,"T\xean c\u1ea7n t\u1ed1i thi\u1ec3u 5 k\xfd t\u1ef1"),e.BQk())}function K(i,l){1&i&&(e.ynx(0),e._uU(1,"M\u1ee5c n\xe0y kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng"),e.BQk())}function L(i,l){if(1&i&&(e.YNc(0,H,2,0,"ng-container",16),e.YNc(1,K,2,0,"ng-container",16)),2&i){const t=l.$implicit;e.Q6J("ngIf",t.hasError("minlength")),e.xp6(1),e.Q6J("ngIf",t.hasError("required"))}}function $(i,l){1&i&&(e.ynx(0),e._uU(1,"M\u1ee5c n\xe0y kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng"),e.BQk())}function j(i,l){1&i&&e.YNc(0,$,2,0,"ng-container",16),2&i&&e.Q6J("ngIf",l.$implicit.hasError("required"))}function X(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"div",17)(1,"button",18),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.handleOk())}),e._uU(2," L\u01b0u "),e.qZA(),e.TgZ(3,"button",19),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.handleCancel())}),e._uU(4,"H\u1ee7y"),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(1),e.Q6J("hidden","view"===t.mode)("disabled",!t.formValidation.valid)("nzLoading",t.isConfirmLoading)}}let b=(()=>{class i{constructor(t,n,o){this.fb=t,this.roleAppData=n,this.modelRef=o,this.isConfirmLoading=!1,this.checked=!1,this.title="",this.isVisible=!1}get name(){return this.formValidation.get("name")}get code(){return this.formValidation.get("code")}get description(){return this.formValidation.get("description")}ngOnInit(){console.log(this.id),this.formValidation=this.fb.group({id:["",[]],name:["",[c.kI.required,c.kI.minLength(5)]],code:["",[c.kI.required]],description:["",[]]}),this.mode!=_.o.CREATE&&this.id&&this.getById(this.id)}changeChecked(){this.checked=!this.checked}getById(t){this.roleAppData.getById(t).subscribe({next:n=>{console.log(n),this.formValidation.setValue({id:this.id,name:n.data.name,code:n.data.code,description:n.data.description})}})}handleOk(){this.isConfirmLoading=!0;const t=this.formValidation.value;this.mode===_.o.CREATE?this.roleAppData.save(t).subscribe({next:n=>{console.log(n),n&&(this.isVisible=!1,this.isConfirmLoading=!1,this.modelRef.close(n))},error:n=>{console.log(n)},complete:()=>{console.log("done")}}):this.mode===_.o.UPDATE&&this.roleAppData.update(this.id,t).subscribe({next:n=>{console.log(n),n&&(this.isVisible=!1,this.isConfirmLoading=!1,this.modelRef.close(n))},error:n=>{console.log(n)},complete:()=>{console.log("done")}})}handleCancel(){this.isVisible=!1,this.modelRef.close()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(c.qu),e.Y36(E.c),e.Y36(f.Lf))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-role-app-form"]],inputs:{mode:"mode",title:"title",id:"id"},decls:34,vars:24,consts:[[1,"wrapper"],[1,"modal-content"],["nz-form","","method","POST",2,"width","100%",3,"formGroup"],["formControlName","id","name","id","hidden","true"],["nz-row","",1,"d-flex","flex-row",3,"nzGutter"],["nz-col","",3,"nzSpan"],["nz-row","",3,"nzGutter"],[2,"color","red"],["nz-col","",3,"nzSpan","nzErrorTip"],["nz-input","","placeholder","T\xean","formControlName","name","name","name","required","",3,"readonly","ngClass"],["Name",""],["nz-input","","placeholder","M\xe3 vai tr\xf2","formControlName","code","name","code",3,"readonly","ngClass"],["Code",""],[3,"nzSpan"],["nz-input","","rows","3","Placeholder","Mi\xeau t\u1ea3","formControlName","description","name","description",3,"readonly","ngClass"],["class","d-flex justify-content-center",4,"nzModalFooter"],[4,"ngIf"],[1,"d-flex","justify-content-center"],["nz-button","","nzType","primary",3,"hidden","disabled","nzLoading","click"],["nz-button","","nzType","default",3,"click"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"form",2),e._UZ(3,"input",3),e.TgZ(4,"div",4)(5,"div",5)(6,"nz-form-item",6)(7,"nz-form-label",5),e._uU(8," T\xean "),e.TgZ(9,"span",7),e._uU(10,"*"),e.qZA()(),e.TgZ(11,"nz-form-control",8),e._UZ(12,"input",9),e.YNc(13,L,2,2,"ng-template",null,10,e.W1O),e.qZA()()()(),e.TgZ(15,"div",4)(16,"div",5)(17,"nz-form-item",6)(18,"nz-form-label",5),e._uU(19," M\xe3 role "),e.TgZ(20,"span",7),e._uU(21,"*"),e.qZA()(),e.TgZ(22,"nz-form-control",8),e._UZ(23,"input",11),e.YNc(24,j,1,1,"ng-template",null,12,e.W1O),e.qZA()()()(),e.TgZ(26,"div",4)(27,"div",5)(28,"nz-form-item",6)(29,"nz-form-label",13),e._uU(30," Mi\xeau t\u1ea3 "),e.qZA(),e.TgZ(31,"nz-form-control",13),e._UZ(32,"textarea",14),e.qZA()()()()()()(),e.YNc(33,X,5,3,"div",15)),2&t){const o=e.MAs(14),a=e.MAs(25);e.xp6(2),e.Q6J("formGroup",n.formValidation),e.xp6(2),e.Q6J("nzGutter",8),e.xp6(1),e.Q6J("nzSpan",24),e.xp6(1),e.Q6J("nzGutter",2),e.xp6(1),e.Q6J("nzSpan",3),e.xp6(4),e.Q6J("nzSpan",21)("nzErrorTip",o),e.xp6(1),e.Q6J("readonly","view"===n.mode)("ngClass","view"===n.mode?"ban":""),e.xp6(3),e.Q6J("nzGutter",8),e.xp6(1),e.Q6J("nzSpan",24),e.xp6(1),e.Q6J("nzGutter",2),e.xp6(1),e.Q6J("nzSpan",3),e.xp6(4),e.Q6J("nzSpan",21)("nzErrorTip",a),e.xp6(1),e.Q6J("readonly","view"===n.mode)("ngClass","view"===n.mode?"ban":""),e.xp6(3),e.Q6J("nzGutter",8),e.xp6(1),e.Q6J("nzSpan",24),e.xp6(1),e.Q6J("nzGutter",2),e.xp6(1),e.Q6J("nzSpan",3),e.xp6(2),e.Q6J("nzSpan",21),e.xp6(1),e.Q6J("readonly","view"===n.mode)("ngClass","view"===n.mode?"ban":"")}},dependencies:[m.mk,m.O5,z.ix,x.w,A.dQ,T.Zp,f.Uh,v.t3,v.SK,C.Lr,C.Nx,C.iK,C.Fd,c._Y,c.Fj,c.JJ,c.JL,c.Q7,c.sg,c.u],styles:[".ban[_ngcontent-%COMP%]{cursor:no-drop}.wrapper[_ngcontent-%COMP%]{width:800px;height:calc(100% - 144px);border-radius:3px}.ant-modal-title[_ngcontent-%COMP%]{display:flex;justify-content:center;font-weight:700;text-transform:uppercase}.modal-content[_ngcontent-%COMP%]{display:grid;grid-template-rows:none;border:none}.invalid-data[_ngcontent-%COMP%]{border:1px solid red}"]}),i})();var W=s(5017),g=s(939),ee=s(5905),te=s(1711);function ne(i,l){1&i&&e._UZ(0,"span",23)}const oe=function(i){return["/pages/roles-app/roles-app-detail",i]};function ie(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"tr")(1,"td",17)(2,"label",18),e.NdJ("ngModelChange",function(o){const r=e.CHM(t).index,p=e.oxw(2);return e.KtG(p.isChecked(o,r))}),e.qZA()(),e.TgZ(3,"td",17),e._uU(4),e.qZA(),e.TgZ(5,"td",17)(6,"a",24),e._uU(7),e.qZA()(),e.TgZ(8,"td",17),e._uU(9),e.qZA(),e.TgZ(10,"td",25)(11,"button",26),e.NdJ("click",function(){const a=e.CHM(t).$implicit,r=e.oxw(2);return e.KtG(r.onView(a))}),e._UZ(12,"i",27),e.qZA(),e.TgZ(13,"button",26),e.NdJ("click",function(){const a=e.CHM(t).$implicit,r=e.oxw(2);return e.KtG(r.onUpdate(a))}),e._UZ(14,"i",28),e.qZA(),e.TgZ(15,"button",26),e.NdJ("click",function(){const a=e.CHM(t).$implicit,r=e.oxw(2);return e.KtG(r.onDelete(a.id))}),e._UZ(16,"i",29),e.qZA()()()}if(2&i){const t=l.$implicit,n=l.index;e.xp6(2),e.Q6J("ngModel",t.isChecked),e.xp6(2),e.hij(" ",n+1," "),e.xp6(2),e.Q6J("routerLink",e.VKq(5,oe,t.id)),e.xp6(1),e.Oqu(t.name),e.xp6(2),e.hij(" ",t.code," ")}}function le(i,l){if(1&i&&e._uU(0),2&i){const t=e.oxw(2);e.hij("T\u1ed5ng s\u1ed1: ",t.totalElements,"")}}function ae(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5)(4,"nz-input-group",6)(5,"input",7),e.NdJ("keyup.enter",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.search())}),e.qZA()(),e.YNc(6,ne,1,0,"ng-template",null,8,e.W1O),e.TgZ(8,"button",9),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.onCreate())}),e._uU(9," Th\xeam m\u1edbi quy\u1ec1n "),e.qZA(),e.TgZ(10,"button",10),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.onDeleteAll(o.listId))}),e._uU(11," X\xf3a t\u1ea5t c\u1ea3 "),e.qZA(),e.TgZ(12,"button",11),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.isCollapsed())}),e._UZ(13,"i",12),e.TgZ(14,"span"),e._uU(15,"B\u1ed9 l\u1ecdc"),e.qZA()()(),e.TgZ(16,"div",13),e._UZ(17,"nz-date-picker",14)(18,"nz-date-picker",15),e.qZA(),e.TgZ(19,"nz-table",16)(20,"thead")(21,"tr")(22,"th",17)(23,"label",18),e.NdJ("ngModelChange",function(o){e.CHM(t);const a=e.oxw();return e.KtG(a.checkedAll(o))}),e.qZA()(),e.TgZ(24,"th",17),e._uU(25,"STT"),e.qZA(),e.TgZ(26,"th",17),e._uU(27,"T\xean"),e.qZA(),e.TgZ(28,"th",17),e._uU(29,"M\xe3 role"),e.qZA(),e.TgZ(30,"th",17),e._uU(31,"H\xe0nh \u0111\u1ed9ng"),e.qZA()()(),e.TgZ(32,"tbody"),e.YNc(33,ie,17,7,"tr",19),e.qZA()(),e.TgZ(34,"div",20)(35,"nz-pagination",21),e.NdJ("nzPageIndexChange",function(o){e.CHM(t);const a=e.oxw();return e.KtG(a.changePageNumber(o))})("nzPageSizeChange",function(o){e.CHM(t);const a=e.oxw();return e.KtG(a.changePageSize(o))})("nzPageIndexChange",function(o){e.CHM(t);const a=e.oxw();return e.KtG(a.pageNumber=o)})("nzPageSizeChange",function(o){e.CHM(t);const a=e.oxw();return e.KtG(a.pageSize=o)}),e.qZA(),e.YNc(36,le,1,1,"ng-template",null,22,e.W1O),e.qZA()()()()}if(2&i){const t=e.MAs(7),n=e.MAs(37),o=e.oxw();e.xp6(4),e.Q6J("nzSuffix",t),e.xp6(12),e.Q6J("hidden",!o.isCollapse),e.xp6(1),e.Q6J("nzSize","default"),e.xp6(1),e.Q6J("nzSize","default"),e.xp6(1),e.Q6J("nzData",o.listData),e.xp6(4),e.Q6J("ngModel",o.checkedBoxAll),e.xp6(10),e.Q6J("ngForOf",o.listData),e.xp6(2),e.Q6J("nzPageIndex",o.pageNumber)("nzTotal",o.totalElements)("nzPageSize",o.pageSize)("nzShowTotal",n)}}const se=[{path:"",component:(()=>{class i{constructor(t,n,o,a){this.roleAppData=t,this.modalService=n,this.notifyService=o,this.element=a,this.listId=[],this.searchField=["Name","Email","Advanced Filter"],this.pageNumber=1,this.pageSize=10,this.totalElements=0,this.checkedBoxAll=!1,this.FilterValue="",this.disableRoute=!1,this.isCollapse=!1,this.modalOptions={nzDuration:2e3}}ngOnInit(){this.getRoleApp(),console.log(this.listId)}isCollapsed(){this.isCollapse=!this.isCollapse}search(){const t=this.element.nativeElement.querySelector("#search");""===this.FilterValue?(console.log(this.FilterValue),this.txtSearch=`name.cn.${t.value},`):(console.log(this.FilterValue),this.txtSearch=`${this.FilterValue}.cn.${t.value},`,console.log(this.txtSearch)),this.getRoleApp()}getFilterValue(t){console.log(this.searchField[t]),this.FilterValue=this.searchField[t]}checkedAll(t){console.log(t),this.listData.forEach(n=>{if(n.isChecked=t,!0===n.isChecked&&-1===this.listId.indexOf(n.id))this.listId.push(n.id);else{if(!0===n.isChecked&&-1!==this.listId.indexOf(n.id))return;this.listId=[]}console.log(this.listId)})}isChecked(t,n){this.listData[n].isChecked=t,this.checkIntoArr(n),console.log(this.listId)}checkIntoArr(t){let n=this.listData[t];if(!0===n.isChecked&&-1===this.listId.indexOf(n.id))this.listId.push(n.id);else{let o=this.listId.indexOf(n.id);console.log(o),o>-1&&this.listId.splice(o,1)}}changePageSize(t){this.pageSize=t,this.getRoleApp()}changePageNumber(t){this.pageNumber=t,this.getRoleApp()}getRoleApp(){this.roleAppData.search(this.pageNumber,this.pageSize,this.txtSearch).subscribe({next:t=>{console.log(t),this.listData=t.pagingData.content,this.totalElements=t.pagingData.totalElements,this.totalPages=t.pagingData.totalPages},error:t=>{console.log(t)}})}onCreate(){this.modalService.create({nzTitle:"Th\xeam m\u1edbi vai tr\xf2",nzClassName:"modal-custom",nzContent:b,nzWidth:"modal-custom",nzCentered:!0,nzMaskClosable:!1,nzComponentParams:{mode:_.o.CREATE,title:"Th\xeam m\u1edbi vai tr\xf2"},nzDirection:"ltr"}).afterClose.subscribe({next:t=>{console.log(t),t&&(this.notifyService.success("Th\xe0nh c\xf4ng","Th\xeam m\u1edbi y\xeau c\u1ea7u",this.modalOptions),this.getRoleApp())},error:t=>{console.log(t)}})}onUpdate(t){this.modalService.create({nzTitle:"Ch\u1ec9nh s\u1eeda vai tr\xf2",nzClassName:"modal-custom",nzContent:b,nzWidth:"modal-custom",nzCentered:!0,nzMaskClosable:!1,nzComponentParams:{mode:_.o.UPDATE,id:t.id},nzDirection:"ltr"}).afterClose.subscribe({next:n=>{console.log(n),n&&this.notifyService.success("Th\xe0nh c\xf4ng","Ch\u1ec9nh s\u1eeda y\xeau c\u1ea7u",this.modalOptions),this.getRoleApp()},error:n=>{console.log(n)}})}onView(t){this.modalService.create({nzTitle:"Xem vai tr\xf2",nzClassName:"modal-custom",nzContent:b,nzWidth:"modal-custom",nzCentered:!0,nzMaskClosable:!1,nzComponentParams:{mode:_.o.VIEW,title:"View Member",id:t.id},nzDirection:"ltr"})}onDelete(t){this.modalService.create({nzTitle:"X\xf3a vai tr\xf2",nzClassName:"modal-custom",nzContent:D,nzCentered:!0,nzMaskClosable:!1,nzDirection:"ltr"}).afterClose.subscribe({next:n=>{console.log(n),n&&this.roleAppData.deleteById(t).subscribe({next:o=>{o&&this.notifyService.success("Th\xe0nh c\xf4ng","X\xf3a y\xeau c\u1ea7u",this.modalOptions),this.getRoleApp()},error:o=>{console.log(o)},complete:()=>{}})},error:n=>{console.log(n)}})}onDeleteAll(t){this.modalService.create({nzTitle:"X\xf3a nhi\u1ec1u vai tr\xf2",nzClassName:"modal-custom",nzContent:D,nzCentered:!0,nzMaskClosable:!1,nzDirection:"ltr"}).afterClose.subscribe({next:n=>{console.log(n),n&&this.roleAppData.deleteSelectedId(t).subscribe({next:o=>{o&&this.notifyService.success("Th\xe0nh c\xf4ng","X\xf3a y\xeau c\u1ea7u",this.modalOptions),this.getRoleApp()},error:o=>{console.log(o),console.log(t),console.log(this.listData)},complete:()=>{}})},error:n=>{console.log(n)}})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(E.c),e.Y36(f.Sf),e.Y36(k.zb),e.Y36(e.SBq))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-role-application"]],decls:3,vars:1,consts:[["class","member-wrapper",4,"ngIf"],["outlet","outlet"],[1,"member-wrapper"],[1,"container"],[1,"row"],[1,"tool",2,"width","100%","margin-top","1.5em"],[1,"search",3,"nzSuffix"],["id","search","type","text","nz-input","","placeholder","Nh\u1eadp t\u1eeb t\xecm ki\u1ebfm",3,"keyup.enter"],["suffixIconSearch",""],["nz-button","",1,"ml-auto","mr-2",3,"click"],["nz-button","","nzDanger","",1,"mr-2",3,"click"],["nz-button","",1,"d-flex","align-items-center","mr-2",3,"click"],["nz-icon","","nzType","filter","nzTheme","outline"],[1,"date-picker-custom","mt-3",3,"hidden"],[1,"mr-2",3,"nzSize"],[3,"nzSize"],["nzShowPagination","false",1,"table",2,"width","100%","margin-top","1.5em",3,"nzData"],["nzAlign","center"],["nz-checkbox","",3,"ngModel","ngModelChange"],[4,"ngFor","ngForOf"],[1,"paging"],["nzShowSizeChanger","",3,"nzPageIndex","nzTotal","nzPageSize","nzShowTotal","nzPageIndexChange","nzPageSizeChange"],["total",""],["nz-icon","","nzType","search"],[2,"cursor","pointer",3,"routerLink"],[1,"d-flex","flex-row","justify-content-center"],["nz-button","","nzShape","circle",1,"d-flex","align-items-center","justify-content-center","mr-1",3,"click"],["nz-icon","","nzType","eye","nzTheme","outline"],["nz-icon","","nzType","edit","nzTheme","outline"],["nz-icon","","nzType","delete","nzTheme","outline"]],template:function(t,n){if(1&t&&(e.YNc(0,ae,38,11,"div",0),e._UZ(1,"router-outlet",null,1)),2&t){const o=e.MAs(2);e.Q6J("ngIf",0==o.isActivated)}},dependencies:[m.sg,m.O5,h.lC,h.yS,W.Ls,z.ix,x.w,A.dQ,g.N8,g.Uo,g._C,g.Om,g.p0,g.$Z,g.UX,ee.uw,T.Zp,T.gB,T.ke,te.dE,y.Ie,c.JJ,c.On],styles:[".tool[_ngcontent-%COMP%]{display:flex}.tool[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{width:50%}.paging[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-end;padding:2em 0}"]}),i})(),children:[{path:"roles-app-detail/:id",component:q}]}];let re=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[h.Bz.forChild(se),h.Bz]}),i})(),ce=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[m.ez,re,P.JF,I.v,J.V,c.u5,c.UX]}),i})()}}]);