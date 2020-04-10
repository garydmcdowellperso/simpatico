#!/bin/bash
  
# Install all dependencies for the node stuff

`export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && cd /root/simpatico/interfaces/web/admin && nvm i && npm install && echo "admin done"` &

`export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && cd /root/simpatico/interfaces/web/connect && nvm i && npm install && echo "connect done"` &

`export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && cd /root/simpatico/interfaces/web/home && nvm i && npm install`

`export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && cd /root/simpatico/interfaces/web/login && nvm i && npm install`

`export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && cd /root/simpatico/interfaces/web/profle && nvm i && npm install`

`export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && cd /root/simpatico/interfaces/web/thread && nvm i && npm install`

`export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && cd /root/simpatico/api && nvm i && npm install`