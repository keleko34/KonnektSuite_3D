var base = process.cwd().replace(/\\/g,'/');

/* remove base context menu */
nw.Window.get().menu = new require('nw.gui').Menu({ type: 'menubar' });


/* Globals */
var Project = {},
    Win = {};

global.Project = Project;
global.Win = Win;
