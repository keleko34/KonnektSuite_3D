set arg1=%1
start package_modules/nwjs/win/nw.exe . --disable-devtools --disable-raf-throttling --enable-gpu-async-worker-context --mode=run %arg1%