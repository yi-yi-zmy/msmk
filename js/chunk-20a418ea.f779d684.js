(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20a418ea"],{"16c2":function(t,n,s){"use strict";s("3a22")},"3a22":function(t,n,s){},fc40:function(t,n,s){"use strict";s.r(n);var e=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",[t._m(0),s("div",{staticClass:"register_from"},[s("van-form",{on:{submit:t.onSubmit}},[s("van-field",{attrs:{name:"用户名",placeholder:"请输入手机号"},scopedSlots:t._u([{key:"button",fn:function(){return[s("van-button",{staticClass:"waw_button",attrs:{size:"small"},on:{click:t.add}},[t._v("发送验证码")])]},proxy:!0}]),model:{value:t.username,callback:function(n){t.username=n},expression:"username"}}),s("van-field",{attrs:{type:"password",name:"密码",placeholder:"请输入短信验证码"},model:{value:t.password,callback:function(n){t.password=n},expression:"password"}}),s("div",{staticClass:"register_from_tiaozhuan"},[s("span",[t._v("*未注册的手机号将自动注册")]),s("span",{on:{click:t.toLogins}},[t._v("使用密码登录")])]),s("div",{staticStyle:{margin:"0.8rem","margin-top":"1rem"}},[s("van-button",{attrs:{round:"",block:"",type:"warning","native-type":"submit"},on:{click:t.sum}},[t._v(" 提交 ")])],1)],1)],1)])},a=[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"login_logo"},[s("img",{staticClass:"login_logo_img",attrs:{src:"https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019pILfAg7Avr1567732916.png",alt:""}})])}],o=s("2b0e"),i=s("d399");o["a"].use(i["a"]);var r={data:function(){return{username:"",password:""}},methods:{add:function(){this.$ClientAPI.VerificationCode({mobile:this.username,sms_type:"login"}).then((function(t){console.log(t)}))},sum:function(){var t=this;this.$ClientAPI.yanzhengmazhuce({mobile:this.username,sms_code:this.password,client:1,type:2}).then((function(n){if(console.log(n),"操作成功"==n.data.msg){console.log("123");var s=n.data.data.remember_token;localStorage.setItem("token",s)}1==n.data.data.is_new&&(Object(i["a"])("登录成功"),t.$router.push("/mine"))}))},onSubmit:function(t){console.log("submit",t)},toLogins:function(){this.$router.push({path:"/login"})}}},c=r,l=(s("16c2"),s("2877")),u=Object(l["a"])(c,e,a,!1,null,null,null);n["default"]=u.exports}}]);
//# sourceMappingURL=chunk-20a418ea.f779d684.js.map