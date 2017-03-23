if(!K_Components) K_Components = {};
K_Components["menu_dropdown"] = (function(){
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

menu_dropdown.prototype.k_html = "<!-- menu_dropdown Created by keleko34, A simple dropdown menu that holds menu items --><div class='menu_dropdown'>  <div class='menu_dropdown__title menu_dropdown__title--{{active | isActive}}' onclick='{{activeClick}}'>{{title}}</div>  <div class='menu_dropdown__list'>{{for items loop menu_item}}</div></div>";
menu_dropdown.prototype.k_css = "/********************************* *  menu_dropdown *  Created by keleko34 *  A simple dropdown menu that holds menu items ********************************/.menu_dropdown {  float:left;  margin-top: 5px;  -webkit-app-region: no-drag;  z-index: 1;}.menu_dropdown__title:hover {  background: #333;}.menu_dropdown__title--active {  background: #333;}.menu_dropdown__title{  text-align: center;  font-size: 14px;  font-weight: 300;  cursor:pointer;  padding: 4px 8px 4px 8px;  border-radius: 2px;}.menu_dropdown__list {  background:#D7D8D9;  position: absolute;  z-index: 1;}";
return menu_dropdown;
}());