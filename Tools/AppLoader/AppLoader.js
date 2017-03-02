define([],function(){

  var _mode = 'live',
      _modeEnum = ['live','editor','debug'];

  function CreateAppLoader(){

    function AppLoader(node){
      switch(_mode){
        case 'debug':
          requireLocal(['App/Editor','App/Debug'],function(CreateEditor,CreateDebug){
            AppLoader.load(node,CreateEditor,CreateDebug);
          })
        break;
        case 'editor':
          requireLocal(['App/Editor'],function(CreateEditor){
            AppLoader.load(node,CreateEditor);
          })
        break;
        case 'live':
          requireLocal(['App/Engine'],function(CreateEngine){
            AppLoader.load(node,CreateEngine);
          })
        break;
      }
    }

    AppLoader.load = function(node){

    }

    AppLoader.mode = function(v){
      if(v === undefined) return _mode;
      _mode = (_modeEnum.indexOf(v) !== -1 ? v : _mode);
      return AppLoader;
    }

    return AppLoader;
  }
  return CreateAppLoader;
});
