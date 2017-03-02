define(['Components/Menu_Dropdown','Components/Button_Icon','css!./ToolBar.css'],function(CreateMenu_Dropdown,CreateButtonIcons){
  function CreateToolBar(){

    /* Setting Shared Globals */
    if(window.shared === undefined) window.shared = {};
    if(window.shared.topbar === undefined) window.shared.topbar = {};
    if(window.shared.topbar.menus === undefined) window.shared.topbar.menus = {};
    if(window.shared.topbar.title === undefined) window.shared.topbar.title = 'New Project';
    window.shared.topbar.menuNodes = {};

    global.shared = window.shared;

    var _debug = false,
        _title = window.shared.topbar.title,
        _menus = {
            File:[
              {
                title:"New Project",
                method:function(){}
              },
              {
                title:"Save",
                method:function(){}
              },
              {
                title:"Save As",
                method:function(){}
              },
              {
                title:"Load Project",
                method:function(){}
              }
            ],
            Edit:[
              {
                title:"Project Settings",
                method:function(){}
              }
            ],
            View:[
              {
                title:"Layout",
                method:function(){}
              }
            ]
          },
        _titleNode;

    function ToolBar(node){

      var _win = this;

      if(!node.querySelector('.Window_Frame__ToolBar')){
        var _toolbar = document.createElement('div'),
            _icon = document.createElement('div'),
            _icon_image = document.createElement('img'),
            _titleNode = document.createElement('div'),
            _menu_wrapper = document.createElement('div');

        node.appendChild(_toolbar,node.querySelector('#Content'))
        .appendChild(_icon).appendChild(_icon_image);
        _toolbar.appendChild(_titleNode);
        _toolbar.appendChild(_menu_wrapper);

        _toolbar.className = 'ToolBar';
        _titleNode.className = 'ToolBar__Title';
        _icon.className = 'ToolBar__Icon';
        _icon_image.className = 'ToolBar__Icon__Image';
        _menu_wrapper.className = 'ToolBar__Menu_Wrapper';
      }

      var _toolbar = node.querySelector('.ToolBar'),
          _icon = node.querySelector('.ToolBar__Icon'),
          _icon_image = node.querySelector('.ToolBar__Icon__Image'),
          _titleNode = node.querySelector('.ToolBar__Title'),
          _menu_wrapper = node.querySelector('.ToolBar__Menu_Wrapper');

      _titleNode.innerHTML = 'Konnekt3D - '+_title;
      _titleNode.style.marginLeft = "-"+(_titleNode.clientWidth/2)+"px";

      function toggleMenus(toggle){
        if(toggle){
          Object.keys(window.shared.topbar.menuNodes).forEach(function(menu){
            window.shared.topbar.menuNodes[menu].toggle(false);
          });
        }
      }

      /* Standard Menu Items */
      Object.keys(_menus).forEach(function(menu){
        window.shared.topbar.menuNodes[menu] = CreateMenu_Dropdown().title(menu).onToggle(toggleMenus);

        _menus[menu].forEach(function(subitem){
          window.shared.topbar.menuNodes[menu].setItem(subitem.title,subitem.method);
        });
        window.shared.topbar.menuNodes[menu].call(_win,_menu_wrapper)
      });

      Object.keys(window.shared.topbar.menus).forEach(function(menu){
        if(window.shared.topbar.menuNodes[menu] == undefined) window.shared.topbar.menuNodes[menu] = CreateMenu_Dropdown().title(menu).onToggle(toggleMenus);

        window.shared.topbar.menus[menu].forEach(function(subitem){
          if(!window.shared.topbar.menuNodes[menu].getItem(subitem.title)) window.shared.topbar.menuNodes[menu].setItem(subitem.title,subitem.method);
        });
        window.shared.topbar.menuNodes[menu].call(_win,_menu_wrapper);
      });

      if(_debug){
        _toolbar.classList.add('ToolBar--debug');
        if(window.shared.topbar.menuNodes["Debug"] === undefined) window.shared.topbar.menuNodes["Debug"] = CreateMenu_Dropdown().title("Debug").onToggle(toggleMenus);
        window.shared.topbar.menuNodes["Debug"].setItem('Console',function(){}).call(_win,_menu_wrapper);
      }

      document.addEventListener('click',function(e){
        if(!e.target.closest(".Menu_Dropdown")) toggleMenus(true);
      });

      var buttonBar = document.createElement('div');
      buttonBar.className = "ToolBar__ButtonBar";
      _toolbar.appendChild(buttonBar);

      CreateButtonIcons()
      .icon('../../Assets/img/icons/minimize.svg')
      .onClick((minimize.bind(this)))
      .call(this,buttonBar);

      CreateButtonIcons()
      .icon('../../Assets/img/icons/maximize.svg')
      .onClick((maximize.bind(this)))
      .call(this,buttonBar);

      CreateButtonIcons()
      .icon('../../Assets/img/icons/close.svg')
      .onClick((close.bind(this)))
      .call(this,buttonBar);
    }

    function close(){

    }

    function minimize(){

    }

    function maximize(){

    }

    function restore(){

    }

    ToolBar.debug = function(v){
      if(v === undefined) return _debug;
      _debug = !!v;
      return ToolBar;
    }

    ToolBar.title = function(v){
      if(v === undefined) return _title;
      _title = (typeof v === 'string' ? v : _title);
      window.shared.topbar.title = _title;
      _titleNode.innerHTML = 'Konnekt3d - '+_title;
      return ToolBar;
    }

    return ToolBar;
  }
  return CreateToolBar;
});
