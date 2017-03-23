define(['Components/ToolBar','css!./Window_Frame.css'],function(CreateToolBar){
  function CreateWindow_Frame(){

    var _mode = 'live',
        _modeEnum = ['live','editor','debug'],
        _ToolBar,
        _menus = [];

    function Window_Frame(node){

      var _window_frame = document.createElement('div'),
          _window_content = document.createElement('div');

      node.appendChild(_window_frame);

      _window_frame.classList.add('Window_Frame');
      _window_content.classList.add('Window_Frame__Content');
      _window_content.classList.add('Window_Frame__Content--'+_mode);
      _window_content.id = 'Content';

      _window_frame.appendChild(_window_content);
      switch(_mode){
        case 'editor':
          _ToolBar = CreateToolBar();
          _ToolBar.call(this,_window_frame);
        break;
        case 'debug':
          _ToolBar = CreateToolBar();
          _ToolBar.debug(true).call(this,_window_frame);
        break;
      }
    }

    Window_Frame.mode = function(v){
      if(v === undefined) return _mode;
      _mode = (_modeEnum.indexOf(v) !== -1 ? v : _mode);
      return Window_Frame;
    }

    return Window_Frame;
  }
  return CreateWindow_Frame;
});
