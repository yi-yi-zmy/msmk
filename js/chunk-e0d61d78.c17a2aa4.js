(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e0d61d78"],{ede4:function(s,t,n){"use strict";n.r(t);var a=function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"login_container"},[s._m(0),n("div",{staticClass:"login_from"},[n("van-form",[n("van-field",{class:1==s.shiw?"van-field":"van-field-active",attrs:{name:"手机号",placeholder:"请输入手机号"},on:{click:function(t){return s.gao(1)}},model:{value:s.username,callback:function(t){s.username=t},expression:"username"}}),n("van-field",{class:2==s.shiw?"van-field":"van-field-active",attrs:{type:"password",name:"密码",placeholder:"请输入密码"},on:{click:function(t){return s.gao(2)}},model:{value:s.password,callback:function(t){s.password=t},expression:"password"}}),n("div",{staticClass:"login_from_tiaozhuan"},[n("span",{on:{click:s.toPassword}},[s._v("找回密码")]),n("span",{on:{click:s.toRegister}},[s._v("注册/验证码登录")])]),n("div",{staticStyle:{margin:"0.8rem","margin-top":"1rem"}},[n("van-button",{attrs:{round:"",block:"",type:"warning"},on:{click:s.onSubmit}},[s._v(" 登录 ")])],1)],1)],1)])},e=[function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"login_logo"},[n("img",{staticClass:"login_logo_img",attrs:{src:"https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019pILfAg7Avr1567732916.png"}})])}],o=n("2b0e"),i=n("d399");o["a"].use(i["a"]);var r={data:function(){return{username:"",password:"",shiw:0}},methods:{gao:function(s){this.shiw=s},onSubmit:function(s){var t=this;0!=this.username.length&&0!=this.password?this.$ClientAPI.loginGetToken({mobile:this.username,password:this.password,type:1}).then((function(s){console.log(s);var n=s.data.data.remember_token;localStorage.setItem("token",n),i["a"].success({message:"登录成功",position:"top"}),t.$router.push("/")})):Object(i["a"])({message:"输入的手机号或密码不能为空！！！",position:"top"})},toPassword:function(){this.$router.push({path:"/Forget-pass"})},toRegister:function(){this.$router.push({path:"/Sms-login"})}}},c=r,l=(n("fcb0"),n("2877")),u=Object(l["a"])(c,a,e,!1,null,null,null);t["default"]=u.exports},f8ac:function(s,t,n){},fcb0:function(s,t,n){"use strict";n("f8ac")}}]);
//# sourceMappingURL=chunk-e0d61d78.c17a2aa4.js.map