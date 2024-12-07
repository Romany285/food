"use strict";(self.webpackChunkfoodApp=self.webpackChunkfoodApp||[]).push([[97],{4097:(N,h,n)=>{n.r(h),n.d(h,{CategoriesModule:()=>Y});var g=n(177),u=n(7062),l=n(5351),e=n(7705),C=n(8834),c=n(9417),f=n(9631),d=n(882);let m=(()=>{class i{constructor(o,t){this.dialogRef=o,this.data=t}onNoClick(){this.dialogRef.close()}static{this.\u0275fac=function(t){return new(t||i)(e.rXU(l.CP),e.rXU(l.Vh))}}static{this.\u0275cmp=e.VBU({type:i,selectors:[["app-add-edit-category"]],decls:12,vars:4,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["matInput","",3,"disabled","ngModel","ngModelChange"],["mat-dialog-actions","",3,"align"],["mat-button","",3,"click"],["mat-button","","cdkFocusInitial","",3,"mat-dialog-close"]],template:function(t,a){1&t&&(e.j41(0,"h1",0),e.EFF(1,"Add Category"),e.k0s(),e.j41(2,"div",1)(3,"mat-form-field")(4,"mat-label"),e.EFF(5,"Category Name"),e.k0s(),e.j41(6,"input",2),e.bIt("ngModelChange",function(r){return a.data.name=r}),e.k0s()()(),e.j41(7,"div",3)(8,"button",4),e.bIt("click",function(){return a.onNoClick()}),e.EFF(9,"Close"),e.k0s(),e.j41(10,"button",5),e.EFF(11,"Save"),e.k0s()()),2&t&&(e.R7$(6),e.Y8G("disabled",a.data.ReadOnly)("ngModel",a.data.name),e.R7$(1),e.Y8G("align","end"),e.R7$(3),e.Y8G("mat-dialog-close",a.data))},dependencies:[C.$z,c.me,c.BC,c.vS,l.tx,l.BI,l.Yi,l.E7,f.fg,d.rl,d.nJ]})}}return i})();var y=n(1060),b=n(4959),v=n(8256),p=n(1806),j=n(9213),E=n(6440),k=n(5596);let S=(()=>{class i{transform(o,t){return o.filter(a=>a.name.toLowerCase().includes(t.toLowerCase()))}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275pipe=e.EJ8({name:"searchCategory",type:i,pure:!0,standalone:!0})}}return i})();function R(i,F){if(1&i){const o=e.RV6();e.j41(0,"tr")(1,"td"),e.EFF(2),e.k0s(),e.j41(3,"td"),e.EFF(4),e.nI1(5,"date"),e.k0s(),e.j41(6,"td"),e.EFF(7),e.nI1(8,"date"),e.k0s(),e.j41(9,"td")(10,"button",16)(11,"mat-icon"),e.EFF(12,"more_horiz"),e.k0s()(),e.j41(13,"mat-menu",null,17)(15,"button",18),e.bIt("click",function(){const s=e.eBV(o).$implicit,r=e.XpG();return e.Njj(r.viewCategory(s.id,s.name))}),e.j41(16,"mat-icon",19),e.EFF(17,"edit Note"),e.k0s(),e.j41(18,"span",19),e.EFF(19,"View"),e.k0s()(),e.j41(20,"button",18),e.bIt("click",function(){const s=e.eBV(o).$implicit,r=e.XpG();return e.Njj(r.editCategory(s.id,s.name))}),e.j41(21,"mat-icon",20),e.EFF(22,"edit Note"),e.k0s(),e.j41(23,"span",20),e.EFF(24,"Edit"),e.k0s()(),e.j41(25,"button",18),e.bIt("click",function(){const s=e.eBV(o).$implicit,r=e.XpG();return e.Njj(r.openDeleteDialog(s))}),e.j41(26,"mat-icon",21),e.EFF(27,"delete"),e.k0s(),e.j41(28,"span",21),e.EFF(29,"Delete"),e.k0s()()()()()}if(2&i){const o=F.$implicit,t=F.even,a=e.sdS(14);e.HbH(t?"bg-white":"bg-light"),e.R7$(2),e.JRh(o.name),e.R7$(2),e.SpI(" ",e.i5U(5,6,o.creationDate,"dd/MM/YYYY, hh:mm a"),""),e.R7$(3),e.JRh(e.i5U(8,9,o.modificationDate,"dd/MM/YYYY, hh:mm a")),e.R7$(3),e.Y8G("matMenuTriggerFor",a)}}const I=function(){return[5,10,25,100]},M=[{path:"",component:(()=>{class i{constructor(o,t,a){this._CategoryService=o,this.dialog=t,this._ToastrService=a,this.listData=[],this.pageSize=10,this.pageNumber=1,this.searchVal="",this.idEdit=0}ngOnInit(){this.getCategories()}getCategories(){this._CategoryService.getAllCategories({pageSize:this.pageSize,pageNumber:this.pageNumber,name:this.searchVal}).subscribe({next:t=>{console.log(t),this.listData=t.data,this.tableRes=t},error(t){console.log(t)}})}addCategory(o){this._CategoryService.onAddCategory(o).subscribe({next:t=>{console.log(t)},error:t=>{console.log(t)},complete:()=>{this.getCategories()}})}handlePageEvent(o){this.pageSize=o.pageSize,this.pageNumber=o.pageIndex,this.getCategories()}openDialog(){this.dialog.open(m,{data:{name:""}}).afterClosed().subscribe(t=>{console.log("The dialog was closed"),t&&(console.log(t),this.addCategory(t))})}openDeleteDialog(o){this.dialog.open(y.c,{data:{text:"Category",id:o.id,name:o.name}}).afterClosed().subscribe(a=>{console.log("The dialog was closed"),console.log(a),a&&this.onDeleteUser(a)})}onDeleteUser(o){this._CategoryService.deleteCategory(o).subscribe({next:t=>{console.log(t),this._ToastrService.success("Category is deleted")},error(t){console.log(t)},complete:()=>{this.getCategories()}})}editCategory(o,t){this.dialog.open(m,{data:{name:t,ReadOnly:!1}}).afterClosed().subscribe(s=>{s&&this._CategoryService.EditCategory(o,s).subscribe({next:r=>{console.log(r)},error:()=>{this._ToastrService.error("Failed to update category","Error")},complete:()=>{this._ToastrService.success("Category updated successfully!","Successfully"),this.getCategories()}})})}viewCategory(o,t){this._CategoryService.getCategoryById(o).subscribe({next:a=>{},error:()=>{},complete:()=>{this.dialog.open(m,{data:{name:t,ReadOnly:!0}})}})}static{this.\u0275fac=function(t){return new(t||i)(e.rXU(b.M),e.rXU(l.bZ),e.rXU(v.tw))}}static{this.\u0275cmp=e.VBU({type:i,selectors:[["app-categories"]],decls:44,vars:10,consts:[[1,"title-header"],[1,"container"],[1,"row","align-items-center"],[1,"col-md-8"],[1,"item-text"],[1,"col-md-4","text-end"],["src","assets/image/imgHome.svg","alt",""],[1,"container","py-3","d-flex","justify-content-between"],[1,"light-gray"],[1,"btn-main",3,"click"],[1,"mt-3","w-75","mx-auto"],[1,"example-full-width","w-100"],["matInput","","placeholder","Search by name...","value","Sushi",3,"ngModel","ngModelChange"],[1,"table"],[3,"class",4,"ngFor","ngForOf"],["aria-label","Select page",3,"length","pageSize","pageSizeOptions","pageIndex","page"],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],[1,"text-success"],[1,"text-primary"],[1,"text-danger"]],template:function(t,a){1&t&&(e.j41(0,"section")(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"h3"),e.EFF(6,"Categories "),e.j41(7,"span",4),e.EFF(8,"Item"),e.k0s()(),e.j41(9,"p"),e.EFF(10,"You can now add your items that any user can order it from "),e.nrm(11,"br"),e.EFF(12,"the Application and you can edit"),e.k0s()(),e.j41(13,"div",5),e.nrm(14,"img",6),e.k0s()()()(),e.j41(15,"div",7)(16,"div")(17,"h4"),e.EFF(18,"Categories Table Details"),e.k0s(),e.j41(19,"p",8),e.EFF(20,"You can check all details"),e.k0s()(),e.j41(21,"div")(22,"button",9),e.bIt("click",function(){return a.openDialog()}),e.EFF(23,"Add New Category"),e.k0s()()(),e.j41(24,"mat-card")(25,"div",10)(26,"mat-form-field",11)(27,"mat-label"),e.EFF(28,"Search"),e.k0s(),e.j41(29,"input",12),e.bIt("ngModelChange",function(r){return a.searchVal=r}),e.k0s()()(),e.j41(30,"table",13)(31,"thead")(32,"th"),e.EFF(33,"Category Name"),e.k0s(),e.j41(34,"th"),e.EFF(35,"Creation Date"),e.k0s(),e.j41(36,"th"),e.EFF(37,"Modification Date"),e.k0s(),e.j41(38,"th"),e.EFF(39,"Actions"),e.k0s()(),e.j41(40,"tbody"),e.DNE(41,R,30,12,"tr",14),e.nI1(42,"searchCategory"),e.k0s()(),e.j41(43,"mat-paginator",15),e.bIt("page",function(r){return a.handlePageEvent(r)}),e.k0s()()()),2&t&&(e.R7$(29),e.Y8G("ngModel",a.searchVal),e.R7$(12),e.Y8G("ngForOf",e.i5U(42,6,a.listData,a.searchVal)),e.R7$(2),e.Y8G("length",null==a.tableRes?null:a.tableRes.totalNumberOfRecords)("pageSize",a.pageSize)("pageSizeOptions",e.lJ4(9,I))("pageIndex",a.pageNumber))},dependencies:[g.Sq,C.iY,p.kk,p.fb,p.Cp,j.An,c.me,c.BC,c.vS,E.iy,k.RN,f.fg,d.rl,d.nJ,g.vh,S]})}}return i})()}];let T=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275mod=e.$C({type:i})}static{this.\u0275inj=e.G2t({imports:[u.iI.forChild(M),u.iI]})}}return i})();var D=n(3885);let Y=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275mod=e.$C({type:i})}static{this.\u0275inj=e.G2t({imports:[g.MD,T,D.G]})}}return i})()}}]);