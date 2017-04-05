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
