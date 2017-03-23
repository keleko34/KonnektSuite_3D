if(!K_Components) K_Components = {};
K_Components["toolbar"] = (function(){
function toolbar(node)
{
  this.title = 'KonnektSuite_3D';
  this.menus = require(base+'/configs/topbar.js').menus
  this.isDebugMode = false;
  this.isLiveMode = false;
  this.titleMargin = 0;
  
  this.filters.pixels = function(v)
  {
    return v+"px";
  }
  
  this.filters.checkTitleMargin = function(v)
  {
    var testNode = document.createElement('div');
    testNode.className = 'toolbar__title';
    testNode.innerHTML = v;
    node.stopChange().appendChild(testNode);
    this.__kbImmediateParent.titleMargin = -(testNode.clientWidth/2);
    node.stopChange().removeChild(testNode);
    return v;
  }
  
  this.filters.showTopBar = function(v)
  {
    if(typeof v === 'string') v = (v === 'true');
    
    return (v ? 'none' : 'inherit');
  }
  
  this.filters.checkDebug = function(arr)
  {
    if(this.__kbImmediateParent.isDebugMode)
    {
      arr.splice(3,1);
    }
    return arr;
  }
}
toolbar.prototype.k_html = "<!-- toolbar Created by keleko34, Holds all the main window menus and window interactive buttons --><div class='toolbar'>  <div class='toolbar__icon'>    <img class='toolbar__icon__image' />  </div>  <div class='toolbar__title'>{{title | checkTitleMargin}}</div>  <div class='toolbar__menu_wrapper'>{{for menus loop menu_dropdown | checkDebug}}</div></div>";
toolbar.prototype.k_css = ".toolbar {  position: absolute;  width: 100%;  height: 30px;  user-select: none;  -webkit-user-select: none;  -webkit-app-region: drag;  display:{{isLiveMode | showTopBar}}}.toolbar__icon {  -webkit-app-region: no-drag;  position: absolute;  width: 20px;  height: 20px;  margin: 5px;}.toolbar__icon__image {  width: 20px;  height: 20px;}.toolbar__title {  position: absolute;  left: 50%;  margin-top: 6px;  font-weight: 300;  cursor: default;  margin-left: {{titleMargin | pixels}}}.toolbar__menu_wrapper{  -webkit-app-region: no-drag;  position: absolute;  margin-left:28px;  width: calc(100% - 28px);}";
return toolbar;
}());