/*********************************
 *  menu_dropdown
 *  Created by keleko34
 *  A simple dropdown menu that holds menu items
 ********************************/

function menu_dropdown(node)
{
  /* ATTRIBUTES */
  this.title = "";
  this.items = [];
  this.active = false;
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
    node.kb_viewmodel.active = !node.kb_viewmodel.active;
  }
  
}

/* PROTOTYPES */
