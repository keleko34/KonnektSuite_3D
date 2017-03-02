define([],function(){
  function CreateArguments(){

    var _argv = [];

    function Arguments(){
      _argv.forEach(function(arg){
        var argProp = arg.replace('--','').substring(0,(arg.indexOf('=')-2)),
            argValue = arg.substring((arg.indexOf('=')+1),arg.length);
        if(argValue.length === arg.length) argValue = '';

        Arguments[argProp] = function(v){
          if(v === undefined) return argValue;
          argValue = v;
          return Arguments;
        }
      });
    }

    Arguments.argv = function(v){
      if(v === undefined) return _argv;
      _argv = (v.constructor.toString() === Array.toString() ? v : _argv);
      return Arguments;
    }
    return Arguments;
  }
  return CreateArguments;
});
