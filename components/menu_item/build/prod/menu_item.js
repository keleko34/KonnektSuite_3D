if(!K_Components) K_Components = {};
K_Components["menu_item"] = (function(){
/*********************************
 *  menu_item
 *  Created by keleko34
 *  clickable item to be placed inside a menu
 ********************************/

function menu_item()
{
  /* ATTRIBUTES */
  this.title = "";
  this.method = function(){console.log('clicked');};
}

/* PROTOTYPES */

menu_item.prototype.k_html = "<!-- menu_item Created by keleko34, clickable item to be placed inside a menu --><div class='menu_item' onclick='{{method}}'>{{title}}</div>";
menu_item.prototype.k_css = "/********************************* *  menu_item *  Created by keleko34 *  clickable item to be placed inside a menu ********************************/.menu_item {  cursor: pointer;  color: #333;  font-size: 12px;  height: 20px;  line-height: 20px;  padding-left: 19px;  padding-right: 28px;  border-bottom: 1px solid #CCC;}.menu_item:hover {  background: #77bbff;}";
return menu_item;
}());