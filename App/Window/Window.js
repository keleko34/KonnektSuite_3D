define(['Components/Window_Frame','Tools/Arguments','Tools/AppLoader'],function(CreateWindow_Frame,CreateArguments,CreateAppLoader){

  var _Window_Frame = CreateWindow_Frame(),
      _Arguments = CreateArguments(),
      _AppLoader = CreateAppLoader(),
      _width = window.innerWidth,
      _height = window.innerHeight;

  function CreateWindow(){
    function Window(node){
      _Arguments.argv(this.App.argv)
      .call(this);

      /* For some reason runs twice, has to do with require-css and requirejs */
      if(_Arguments.appmode() === _Window_Frame.mode()) return;

      _Window_Frame.mode(_Arguments.appmode()).call(this,node);
      _AppLoader.mode(_Arguments.appmode()).call(this,node.querySelector('#Content'));
    }

    return Window;
  }
  return CreateWindow;
});
