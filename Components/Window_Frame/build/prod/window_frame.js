if(!K_Components) K_Components = {};
K_Components["window_frame"] = (function(){
/*********************************
 *  window_package
 *  Created by keleko34
 *  This is the main wrapper for the window
 ********************************/

function window_package(node)
{
  /* ATTRIBUTES */
  this.gui = require('nw.gui');
  this.mode = this.getMode();

  switch(this.mode)
  {
    case 'debug':
      this.isDebugMode = true;
      this.isLiveMode = true;
    break;
    case 'editor':
      this.isDebugMode = true;
      this.isLiveMode = true;
    break;
    case 'live':
      this.isDebugMode = false;
      this.isLiveMode = true;
    break;
  }
}

/* PROTOTYPES */
window_package.prototype.args = function()
{
  return this.App.argv.reduce(function(obj,arg){
    var argValue = arg.substring((arg.indexOf('=')+1),arg.length);

    if(argValue.length === arg.length) argValue = '';

    obj[arg.replace('--','').substring(0,(arg.indexOf('=')-2))] = argValue;
    return obj;
  },{});
}

window_package.prototype.getMode = function()
{
  this.mode = this.args.appmode;
}
window_frame.prototype.k_html = "<!-- window_package Created by keleko34, This is the main wrapper for the window --><div class='window_frame'>  <toolbar debug='{{isDebugMode}}' live='{{isLiveMode}}'></toolbar>  <div id='content' class='window_frame__content window_frame__content--{{mode}}'></div></div>";
window_frame.prototype.k_css = "/********************************* *  window_package *  Created by keleko34 *  This is the main wrapper for the window ********************************/.window_frame {  background:#444749;  height:100%;  width:100%;  position: relative;  border-radius: 3px;  color:#D7D8D9;  font-family: 'Open Sans', sans-serif;}.window_frame__content {  background: #1D1F21;  position: absolute;  margin:5px;  border-radius:2px;  width: calc(100% - 10px);  box-shadow: inset #000 0px 0px 18px -6px;}.window_frame__content--live {  margin-top:5px;  height: calc(100% - 15px);}.window_frame__content--debug, .window_frame__content--editor{  margin-top:30px;  height: calc(100% - 35px);}";
return window_frame;
}());
