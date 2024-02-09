window.memory.apt_src={
  vim:{
    install:async function(){
      let stdio = linux.usr.include.stdio;
      let printf = stdio.printf;
      let prints = `The following additional packages will be installed:
 vim-runtime
Suggested packages:
ctags vim-doc vim-scripts
The following NEW packages will be installed:
vim vim-runtime
After this operation, 31.0 MB of additional disk space will be used.
(Reading database ... 215377 files and directories currently installed.)
Preparing to unpack .../vim-runtime_2%3a8.1.2269-1ubuntu5_all.deb ...
Adding 'diversion of /usr/share/vim/vim81/doc/help.txt to /usr/share/vim/vim81/doc/help.txt.vim-tiny by vim-runtime'
Adding 'diversion of /usr/share/vim/vim81/doc/tags to /usr/share/vim/vim81/doc/tags.vim-tiny by vim-runtime'
Unpacking vim-runtime (2:8.1.2269-1ubuntu5) ...
Selecting previously unselected package vim.
Preparing to unpack .../vim_2%3a8.1.2269-1ubuntu5_amd64.deb ...
Unpacking vim (2:8.1.2269-1ubuntu5) ...
Setting up vim-runtime (2:8.1.2269-1ubuntu5) ...
Setting up vim (2:8.1.2269-1ubuntu5) ...
update-alternatives: using /usr/bin/vim.basic to provide /usr/bin/vim (vim) in auto mode
update-alternatives: using /usr/bin/vim.basic to provide /usr/bin/vimdiff (vimdiff) in auto mode
update-alternatives: using /usr/bin/vim.basic to provide /usr/bin/rvim (rvim) in auto mode
update-alternatives: using /usr/bin/vim.basic to provide /usr/bin/rview (rview) in auto mode
update-alternatives: using /usr/bin/vim.basic to provide /usr/bin/vi (vi) in auto mode
update-alternatives: using /usr/bin/vim.basic to provide /usr/bin/view (view) in auto mode
update-alternatives: using /usr/bin/vim.basic to provide /usr/bin/ex (ex) in auto mode
Processing triggers for mime-support (3.64ubuntu1) ...
Processing triggers for man-db (2.9.1-1) ...`;







      prints = prints.split('\n');
      for(let i=0;i<prints.length;i++){
        printf(prints[i]);
        let random = Math.round(Math.random()*200);
        let time = random>170?1100:random;
        await sleep(time);
      }
      await sleep(100);
      memory.bin.vim = memory.apt_src.vim.main;
      if(!linux.usr.share){
        linux.usr.share={};
      }
      linux.usr.share.vim=memory.bin.vim;
    },
    main:function(argv){
      let stdio = linux.usr.include.stdio;
      let printf = stdio.printf;
      let stdlib = linux.usr.include.stdlib;
      let dir = stdlib._pgmptr();
      window.memory.apt_src.vim.dependent.load();
      window.memory.apt_src.vim.dependent.file.filename = argv[1];
      if(dir[argv[1]])(
        window.memory.apt_src.vim.dependent.file.content=dir[argv[1]]
      )
    }
  }
}
{let self = window.memory.apt_src.vim.dependent = {
  file:{
    filename:"",
    content:"",
  },
  load:function(){
      self.mount.innerHTML=`<div class="vim"> <textarea autofocus onkeydown="window.memory.apt_src.vim.dependent.keydown(event)"></textarea> <div class="non_text"> </div> <div class="info">-- NORMAL --</div> </div> <style> html,body{ margin: 0; padding: 0; } .vim{ background-color: black; position: fixed; height: 100%; width: 100%; color: white; z-index: 1000; } .vim .non_text{ transform: translateY(-6px); } .vim .non_text span{ display: block; } .vim textarea{ outline: none; border: none; background-color: black; color: white; width: 100%; font-size: 1rem; height: 19px; padding: 0; } .vim .info{ width: 100%; position: fixed; font-size: 1rem; height: 1.5rem; line-height: 1.5rem; overflow: hidden; bottom: 0; background-color: black; padding-left: 0.5rem; } </style>`;
      setTimeout(self.init,100);
  },
  init:function(){
      console.log("init");
      let span = '';
      for(let i=0;i<40;i++){
          span+="<span>~</span>";
      }
      document.querySelector(".vim .non_text").innerHTML = span;
      self.element = document.querySelector(".vim textarea");
      self.infoElement = document.querySelector(".vim .info");
      self.autoHeight();
      document.querySelector(".tty").style.display = "none";
      self.mount.display = "";
      self.element.value = self.file.content;
      self.element.focus();
  },
  mount:document.querySelector(".procedure"),
  mode:"normal",
  element:undefined,
  infoElement:undefined,
  autoHeight:function(){
      self.element.style.height = '19px';
      self.element.style.height = self.element.scrollHeight+"px";
  },
  moveCursorTo:function(x,y){
      let value = self.element.value;
      let lineArr = value.split('\n');
      y = lineArr.length-1<=y?lineArr.length-1:y;
      x = lineArr[y].length-1<=x?lineArr[y].length-1:x;
      //修复空白行x变成-1的问题,此时高亮在换行符上
      if(x==-1){
          x=0;
      }
      //console.log("Set-> x:"+x+",y:"+y);
      let position = 0;
      for(let i=0;i<y;i++){
          position+=lineArr[i].length+1;
      }
      position+=x;
      self.element.setSelectionRange(position,position+1);
  },
  getCursorXY:function(){
      let position = self.element.selectionStart;
      let lineArr = self.element.value.split('\n');
      let y = 0;
      for(let i=0;i<lineArr.length;i++){
          if(position<lineArr[i].length+1){
              y=i;
              break;
          }else{
              position-=lineArr[i].length+1;
          }
      }
      let x = position;
      //console.log("Get-> x:"+x+",y:"+y);
      return {x:x,y:y};
  },
  moveCursor:{
      up:function(){
          let XY = self.getCursorXY();
          XY.y=XY.y==0?0:XY.y-1;
          self.moveCursorTo(XY.x,XY.y);
      },
      down:function(){
          let XY = self.getCursorXY();
          self.moveCursorTo(XY.x,XY.y+1);
      },
      left:function(){
          let XY = self.getCursorXY();
          if(XY.x==0){
              if(XY.y==0){
                  XY.x = 0;
              }else{
                  XY.y = XY.y-1;
                  XY.x = self.element.value.split('\n')[XY.y].length;
              }
          }else{
              XY.x=XY.x-1;
          }
          self.moveCursorTo(XY.x,XY.y);
      },
      right:function(){
          let XY = self.getCursorXY();
          let lineArr = self.element.value.split('\n');
          let lineLength = lineArr[XY.y].length;
          if(XY.x>=lineLength-1&&XY.y<lineArr.length-1){
              XY.x=0;
              XY.y = XY.y+1;
          }else{
              XY.x = XY.x+1;
          }
          self.moveCursorTo(XY.x,XY.y);
      }
  },
  keydown:function(e){
      self[self.mode](e);
      setTimeout(self.autoHeight,1);
  },
  normal:function(e){
      let keyFunc = {
          h:function(){
              self.moveCursor.left();
          },
          j:function(){
              self.moveCursor.down();
          },
          k:function(){
              self.moveCursor.up();
          },
          l:function(){
              self.moveCursor.right();
          },
          i:function(){
              let position = self.element.selectionStart
              self.element.setSelectionRange(position,position);
              self.changeMode('insert')
          },
          I:function(){
              let XY = self.getCursorXY();
              self.moveCursorTo(0,XY.y);
              keyFunc.i();
          },
          a:function(){
              let position = self.element.selectionStart
              self.element.setSelectionRange(position+1,position+1);
              self.changeMode('insert')
          },
          A:function(){
              let XY = self.getCursorXY();
              self.moveCursorTo(9999,XY.y);
              keyFunc.a();
          },
          o:function(){
              let warp = self.getNextWrap();
              //自动缩进
              let XY = self.getCursorXY();
              let lineArr = self.element.value.split('\n');
              let space = "";
              for(let i=0;i<lineArr[XY.y].length;i++){
                  if(lineArr[XY.y][i]==' '){
                      space+=' ';
                  }else{
                      break;
                  }
              }
              self.element.setSelectionRange(warp,warp);
              self.insertBeforeCursor('\n'+space);
              let position = warp+1+space.length;
              self.element.setSelectionRange(position,position);
              self.changeMode('insert');
          },
          O:function(){
              let warp = self.getPreviousWrap()+1;
              self.element.setSelectionRange(warp,warp);
              self.insertBeforeCursor('\n');
              let position = warp;
              self.element.setSelectionRange(position,position);
              self.changeMode('insert');
          },
          w:function(){
              let symbol = self.getNextSymbol();
              self.element.setSelectionRange(symbol+1,symbol+2);
          },
          e:function(){
              let position = self.element.selectionStart;
              if(!/^[A-Za-z]+$/.exec(self.element.value[position+1])){
                  self.element.setSelectionRange(position+2,position+2);
              }
              let symbol = self.getNextSymbol();
              self.element.setSelectionRange(symbol-1,symbol);
          },
          b:function(){
              let position = self.element.selectionStart;
              if(!/^[A-Za-z]+$/.exec(self.element.value[position-1])){
                  self.element.setSelectionRange(position-2,position-2);
              }
              let symbol = self.getPreviousSymbol();
              if(symbol){
                  self.element.setSelectionRange(symbol+1,symbol+2);
              }else{
                  self.element.setSelectionRange(symbol,symbol+1);
              }
          },
          ":":function(){
              self.changeMode("command");
              self.infoElement.innerHTML = ":"
          }
      }
      keyFunc[e.key]&&keyFunc[e.key]();
      e.preventDefault();
  },
  insert:function(e){
      console.log(e.key);
      let keyFunc = {
          Escape:function(){
              let XY = self.getCursorXY();
              self.moveCursorTo(XY.x==0?0:XY.x-1,XY.y);
              self.changeMode('normal');
              e.preventDefault();
          },
          '[':function(){
              if(e.ctrlKey){
                  self.changeMode('normal');
                  let XY = self.getCursorXY();
                  self.moveCursorTo(XY.x==0?0:XY.x-1,XY.y);
                  e.preventDefault();
              }
          }
      }
      keyFunc[e.key]&&keyFunc[e.key]();
  },
  changeMode:function(mode){
      let infoEm = self.infoElement;
      infoEm.innerHTML = `-- ${mode.toUpperCase()} --`;
      self.mode = mode;
  },
  insertBeforeCursor:function(str){
      if(!str){
          return;
      }
      let position = self.element.selectionStart;
      let value = self.element.value;
      let front = value.substring(0,position);
      let behind = value.substr(position);
      self.element.value = front+str+behind;
  },
  getNextWrap:function(){
      let position = self.element.selectionStart;
      let value = self.element.value;
      for(let i=position;i<value.length;i++){
          if(value[i]=='\n'){
              return i;
          }
      }
      return value.length;
  },
  getPreviousWrap:function(){
      let position = self.element.selectionStart;
      let value = self.element.value;
      for(let i=position;i>=0;i--){
          if(value[i]=='\n'){
              return i;
          }
      }
      return 0;
  },
  getNextSymbol:function(){
      let position = self.element.selectionStart;
      let value = self.element.value;
      for(let i=position;i<value.length;i++){
          if(!/^[A-Za-z]+$/.exec(value[i])){
              return i;
          }
      }
      return value.length;
  },
  getPreviousSymbol:function(){
      let position = self.element.selectionStart;
      let value = self.element.value;
      for(let i=position;i>=0;i--){
          if(!/^[A-Za-z]+$/.exec(value[i])){
              return i;
          }
      }
      return 0;
  },
  command:function(e){
      console.log(e.key);
      let input = self.infoElement;
      let Func = {
          "/":function(str){
              console.log(str);
              let index = self.element.value.indexOf(str);
              self.element.setSelectionRange(index,index+str.length);
          },
          w:function(){
              console.log("保存");
          },
          wq:function(){
              console.log("保存退出");
              let stdlib = linux.usr.include.stdlib;
              let dir = stdlib._pgmptr();
              dir[self.file.filename]=self.element.value;
              document.querySelector(".tty").style.display = "";
              self.mount.display = "none";
              self.mount.innerHTML = "";
              let stdio = linux.usr.include.stdio;
              self.file.filename="";
              self.file.content="";
              stdio.printf('');
          },
          x:function(){
              console.log("变更保存退出");
          }
      }
      let keyFunc = {
          Enter:function(){
              let cmd = self.infoElement.innerHTML.substr(1);
              if(cmd[0]=='/'){
                  Func['/'](cmd.substr(1));
              }
              Func[cmd]&&Func[cmd]();
              self.changeMode("normal");
          },
          Backspace:function(){
              let cmd = input.innerHTML;
              if(cmd.length>1){
                  input.innerHTML = cmd.substring(0,cmd.length-1);
              }
          }
      }
      if(keyFunc[e.key]){
          keyFunc[e.key]();
      }else{
          input.innerHTML+=e.key;
      }
      e.preventDefault();
  }
}};