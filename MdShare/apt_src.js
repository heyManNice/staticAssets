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
Processing triggers for man-db (2.9.1-1) ...`
      prints = prints.split('\n');
      for(let i=0;i<prints.length;i++){
        printf(prints[i]);
        let random = Math.round(Math.random()*80); 
        await sleep(random);
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
      printf(argv);
    }
  }
}
