if(!K_Components) K_Components = {};
K_Components["menu_dropdown"] = (function(){
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

menu_dropdown.prototype.k_html = "<!-- menu_dropdown Created by keleko34, A simple dropdown menu that holds menu items --><div class='menu_dropdown'>  <div class='menu_dropdown__title menu_dropdown__title--{{active | isActive}}' onclick='{{activeClick}}' onmouseover='{{activeHover}}'>{{title}}</div>  <div class='menu_dropdown__list'>{{for items loop menu_item}}</div></div>";
menu_dropdown.prototype.k_css = "/********************************* *  menu_dropdown *  Created by keleko34 *  A simple dropdown menu that holds menu items ********************************/.{{local}} .menu_dropdown {  float:left;  margin-top: 5px;  -webkit-app-region: no-drag;  z-index: 1;}.{{local}} .menu_dropdown__title:hover {  background: #333;}.{{local}} .menu_dropdown__title--active {  background: #333;}.{{local}} .menu_dropdown__title{  text-align: center;  font-size: 14px;  font-weight: 300;  cursor:pointer;  padding: 4px 8px 4px 8px;  border-radius: 2px;}.{{local}} .menu_dropdown__list {  background:#D7D8D9;  position: absolute;  display:{{active | isDisplayed}};  z-index: 1;}";
return menu_dropdown;
}());
