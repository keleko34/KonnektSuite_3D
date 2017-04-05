if(!K_Components) K_Components = {};
K_Components["window_frame"] = (function(){
function window_frame(node)
{
  var self = this;
  this.mode = this.args().appmode;
  this.env = (this.mode === 'debug' ? 'qa' : 'prod');
  this.isDebugMode = (this.mode === 'debug');
  this.isLiveMode = (this.mode === 'live');

  this.isMaximized = false;
  this.maximizewindow = function()
  {
    self.isMaximized = !self.isMaximized;
    if(self.isMaximized)
    {
      self.maximize();
    }
    else
    {
      self.restore();
    }
  };

  Win.minimize = this.minimize;
  Win.maximize = this.maximizewindow;
  Win.close = this.close;
}

window_frame.prototype.app = require('nw.gui').App;
window_frame.prototype.minimize = require('nw.gui').Window.get().appWindow.minimize;
window_frame.prototype.maximize = require('nw.gui').Window.get().appWindow.maximize;
window_frame.prototype.restore = require('nw.gui').Window.get().appWindow.restore;
window_frame.prototype.close = require('nw.gui').Window.get().close;

window_frame.prototype.args = function()
{
  return this.app.argv.reduce(function(obj,arg){
    var argValue = arg.substring((arg.indexOf('=')+1),arg.length);
        if(argValue.length === arg.length) argValue = '';
    obj[arg.replace('--','').substring(0,(arg.indexOf('=')-2))] = argValue;
    return obj;
  },{});
}
window_frame.prototype.k_html = "<!-- window_package Created by keleko34, This is the main wrapper for the window --><div class='window_frame'>  <toolbar debug='{{isDebugMode}}' live='{{isLiveMode}}' ondblclick='{{maximize}}'></toolbar>  <div id='content' class='window_frame__content window_frame__content--{{mode}}'></div></div>";
window_frame.prototype.k_css = ".window_frame {  background:#444749;  height:100%;  width:100%;  position: relative;  border-radius: 3px;  color:#D7D8D9;  font-family: 'Open Sans', sans-serif;}.window_frame__content {  background: #1D1F21;  position: absolute;  margin:3px;  border-radius:2px;  width: calc(100% - 6px);  box-shadow: inset #000 0px 0px 18px -6px;}.window_frame__content--live {  margin-top:5px;  height: calc(100% - 13px);}.window_frame__content--debug, .window_frame__content--editor{  margin-top:30px;  height: calc(100% - 33px);}";
return window_frame;
}());
