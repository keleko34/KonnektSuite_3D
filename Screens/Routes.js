var Routes = [
  "Components",
  "Tools",
  "App",
  "Engine",
  "node_modules"
];

Element.prototype._appendChild = Element.prototype.appendChild;
Element.prototype._insertBefore = Element.prototype.insertBefore;

function overWriteNode(node){
  if(node.tagName.toLowerCase() === 'script'){
    node.src = routeUrl(node.src);
  }
  else if(node.tagName.toLowerCase() === 'link'){
    node.href = routeUrl(node.href);
  }
  return node;
}

Element.prototype.appendChild = function(node){
  return this._appendChild.call(this,overWriteNode(node));
}

Element.prototype.insertBefore = function(newNode, referenceNode){
  return this._insertBefore.call(this,overWriteNode(newNode), referenceNode);
}

function filterBase(url){
  return url.split('/')
  .slice(3)
  .join('/');
}

function routeUrl(url){
  var split = filterBase(url).split('/'),
      file = split[(split.length-1)].replace('.js','').replace('.css','');

  if(Routes.indexOf(split[0]) !== -1 && split.length === 2){
    split[0] = '../../'+split[0];
    split[1] = file+'/'+split[1];
  }
  else if(split[0] === 'node_modules' && split.length > 2){
    split[0] = '../../'+split[0];
  }
  else if(Routes.indexOf(split[0]) !== -1 && split.length > 2){
    split[0] = '../../'+split[0];
    split[(split.length-1)] = file+'/'+split[(split.length-1)];
  }
  return split.join('/');
}

requirejs.config({
  baseUrl:'/',
  map: {
    '*': {
      'css': 'node_modules/require-css/css',
      'text': 'node_modules/text/text'
    }
  }
})
