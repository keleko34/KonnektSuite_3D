function window_frame(node)
{
  this.mode = this.args().appmode;
  this.isDebugMode = (this.mode === 'debug');
  this.isLiveMode = (this.mode === 'live');

}

window_frame.prototype.app = require('nw.gui').App;

window_frame.prototype.args = function()
{
  return this.app.argv.reduce(function(obj,arg){
    var argValue = arg.substring((arg.indexOf('=')+1),arg.length);
        if(argValue.length === arg.length) argValue = '';
    obj[arg.replace('--','').substring(0,(arg.indexOf('=')-2))] = argValue;
    return obj;
  },{})
}