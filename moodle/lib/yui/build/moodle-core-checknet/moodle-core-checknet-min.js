YUI.add("moodle-core-checknet",function(e,t){function n(){n.superclass.constructor.apply(this,arguments)}e.extend(n,e.Base,{_alertDialogue:null,initializer:function(){this._scheduleCheck()},_scheduleCheck:function(){return e.later(this.get("frequency"),this,this._performCheck),this},_performCheck:function(){e.io(this.get("uri"),{data:{time:(new Date).getTime()},timeout:this.get("timeout"),headers:{"Cache-Control":"no-cache",Expires:"-1"},context:this,on:{complete:function(e,t){if(t&&typeof t.status!="undefined"){var n=parseInt(t.status,10);n===200?this._alertDialogue&&(this._alertDialogue.destroy(),this._alertDialogue=null):n>=300&&n<=399||(this._alertDialogue===null||this._alertDialogue.get("destroyed")?this._alertDialogue=new M.core.alert({message:M.util.get_string.apply(this,this.get("message"))}):this._alertDialogue.show())}this._scheduleCheck()}}})}},{NAME:"checkNet",ATTRS:{uri:{value:M.cfg.wwwroot+"/lib/yui/build/moodle-core-checknet/assets/checknet.txt"},timeout:{value:4e3},frequency:{value:1e4},message:{value:["networkdropped","moodle"]}}}),M.core=M.core||{},M.core.checknet=M.core.checknet||{},M.core.checknet.init=function(e){return new n(e)}},"@VERSION@",{requires:["base-base","moodle-core-notification-alert","io-base"]});
