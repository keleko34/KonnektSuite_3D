if(!K_Components) K_Components = {};
K_Components["icon_button"] = (function(){
/*********************************
 *  icon_button
 *  Created by keleko34
 *  a standard button composed of a single icon
 ********************************/

function icon_button()
{
  /* ATTRIBUTES */
  this.title = "Default";
  this.src = "";
  this.method = function(){};
}

/* PROTOTYPES */

icon_button.prototype.k_html = "<!-- icon_button Created by keleko34, a standard button composed of a single icon --><div class='icon_button' onclick='{{method}}'>  <img class='icon_button__image' src='{{src}}' title='{{title}}' /></div>";
icon_button.prototype.k_css = "/********************************* *  icon_button *  Created by keleko34 *  a standard button composed of a single icon ********************************/.{{local}} .icon_button {  right: {{right}}px;  top: 4px;  padding: 4px;  -webkit-app-region: no-drag;  position: absolute;  cursor: pointer;}.{{local}} .icon_button__image {  width: 12px;  height: 12px;}";
return icon_button;
}());
