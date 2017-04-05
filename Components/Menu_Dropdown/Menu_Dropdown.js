/*********************************
 *  menu_dropdown
 *  Created by keleko34
 *  A simple dropdown menu that holds menu items
 ********************************/

function menu_dropdown(node)
{
  var self = this;
  /* ATTRIBUTES */
  this.title = "";
  this.items = [];
  this.active = false;
  this.onclick = function(){};
  this.onhover = function(){};
  this.filters.isActive = function(v)
  {
    return (v ? 'active' : 'inactive');
  }
  this.filters.isDisplayed = function(v)
  {
    return (!v ? 'none' : 'default');
  }
  this.activeClick = function(e)
  {
    self.onclick.call(this,self);
  }

  this.activeHover = function(e)
  {
    self.onhover.call(this,self);
  }
  
}

/* PROTOTYPES */
