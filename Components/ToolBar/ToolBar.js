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