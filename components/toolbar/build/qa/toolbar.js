if(!K_Components) K_Components = {};
K_Components["toolbar"] = (function(){
function toolbar(node)
{
  var self = this;

  this.title = 'KonnektSuite_3D';
  this.menus = this.config.menus;
  this.toolbar_icons = this.config.toolbar_icons;
  this.isDebugMode = false;
  this.isLiveMode = false;
  this.titleMargin = 0;
  this.isMenuActive = false;

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
    this.titleMargin = -(testNode.clientWidth/2);
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
    if(this.isDebugMode)
    {
      arr.splice(3,1);
    }
    return arr;
  }

  this.menus.forEach(function(menu){
    menu.onclick = function(menu)
    {
      var menuData = node.querySelectorAll('.toolbar__menu_wrapper .Wrapper__menu_dropdown');
      for(var x=0,len=menuData.length;x<len;x++)
      {
        if(menu.title !== menuData[x].kb_viewmodel.title) menuData[x].kb_viewmodel.active = false;
      }
      menu.active = !menu.active;
      self.isMenuActive = !!menu.active;
    }

    menu.onhover = function(menu)
    {
      if(self.isMenuActive)
      {
        var menuData = node.querySelectorAll('.toolbar__menu_wrapper .Wrapper__menu_dropdown');
        for(var x=0,len=menuData.length;x<len;x++)
        {
          if(menu.title !== menuData[x].kb_viewmodel.title) menuData[x].kb_viewmodel.active = false;
        }
        menu.active = true;
      }
    }
  });

  this.ondblclick = function(){}
}

toolbar.prototype.config = require(base+'/configs/topbar.js');
toolbar.prototype.k_html = "<!-- toolbar Created by keleko34, Holds all the main window menus and window interactive buttons --><div class='toolbar' ondblclick='{{ondblclick}}'>  <div class='toolbar__icon'>    <img class='toolbar__icon__image' />  </div>  <div class='toolbar__title'>{{title | checkTitleMargin}}</div>  <div class='toolbar__menu_wrapper'>{{for menus loop menu_dropdown | checkDebug}}</div>  <div class='toolbar__icon_wrapper'>{{for toolbar_icons loop icon_button}}</div></div>";
toolbar.prototype.k_css = ".toolbar {  position: absolute;  width: 100%;  height: 30px;  user-select: none;  -webkit-user-select: none;  -webkit-app-region: drag;  display:{{isLiveMode | showTopBar}}}.toolbar__icon {  -webkit-app-region: no-drag;  position: absolute;  width: 20px;  height: 20px;  margin: 5px;}.toolbar__icon__image {  width: 20px;  height: 20px;}.toolbar__title {  position: absolute;  left: 50%;  margin-top: 6px;  font-weight: 300;  cursor: default;  margin-left: {{titleMargin | pixels}}}.toolbar__menu_wrapper{  position: absolute;  margin-left:28px;  width: calc(100% - 28px);}";
return toolbar;
}());
