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
