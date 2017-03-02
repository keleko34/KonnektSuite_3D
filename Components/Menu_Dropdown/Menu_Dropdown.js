define(['css!./Menu_Dropdown.css'],function(){
  function CreateMenu_Dropdown(){

    var _items = {},
        _title = '',
        _isToggled = false,
        _onToggle = function(){},
        _titleNode,
        _listNode;

    function Menu_Dropdown(node){
        var _menu_dropdown = document.createElement('div'),
            _titleNode = document.createElement('div'),
            _listNode = document.createElement('div');
        _menu_dropdown.className = "Menu_Dropdown";
        _titleNode.className = "Menu_Dropdown__Title";
        _listNode.className = "Menu_Dropdown__List";

        _menu_dropdown.appendChild(_titleNode);
        _menu_dropdown.appendChild(_listNode);

        _menu_dropdown.id = _title;

        node.appendChild(_menu_dropdown);

      _listNode.innerHtml = "";
      _titleNode.innerHTML = _title;

      _titleNode.onclick = function(){
        _onToggle(!_isToggled);
        Menu_Dropdown.toggle(undefined,_titleNode,_listNode);

      };

      _menu_dropdown.style.width = _titleNode.clientWidth+"px";

      Object.keys(_items).forEach(function(key){
        var _item = document.createElement('div');
        _listNode.appendChild(_item);
        _item.className = 'Menu_Dropdown__List__item';
        _item.innerHTML = key;
        _item.onclick = _items[key];
      });
      _menu_dropdown.style.height = (_listNode.clientHeight+_titleNode.clientHeight)+"px";

      _listNode.style.display = 'none';
    }

    Menu_Dropdown.title = function(v){
      if(v === undefined) return _title;
      _title = (typeof v === 'string' ? v : _title);
      return Menu_Dropdown;
    }

    Menu_Dropdown.setItem = function(title,func){
      _items[title] = func;
      return Menu_Dropdown;
    }

    Menu_Dropdown.getItem = function(title){
      return _items[title];
    }

    Menu_Dropdown.isToggle = function(){
      return _isToggled;
    }

    Menu_Dropdown.onToggle = function(v){
      if(v === undefined) return _onToggle;
      _onToggle = (typeof v === 'function' ? v : _onToggle);
      return Menu_Dropdown;
    }

    Menu_Dropdown.toggle = function(v){
      _isToggled = (v !== undefined ? !!v : !_isToggled);

      if(_isToggled){
        document.querySelector('#'+_title+' .Menu_Dropdown__Title').classList.add('Menu_Dropdown__Title--active');
        document.querySelector('#'+_title+' .Menu_Dropdown__List').style.display = null;
      }
      else{
        document.querySelector('#'+_title+' .Menu_Dropdown__Title').classList.remove('Menu_Dropdown__Title--active');
        document.querySelector('#'+_title+' .Menu_Dropdown__List').style.display = 'none';
      }
    }

    return Menu_Dropdown;
  }
  return CreateMenu_Dropdown;
});
