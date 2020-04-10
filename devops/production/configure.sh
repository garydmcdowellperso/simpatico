#!/bin/bash

# Get all dependencies (assume root, otherwise sudo)
apt-get update

# Install nginx
apt-get install nginx -y

# Install nvm
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# Install certbot
apt-get install software-properties-common -y
add-apt-repository universe
add-apt-repository ppa:certbot/certbot
apt-get update
apt-get install certbot python-certbot-nginx -y

# Generate simpatico.conf from template
rm -rf /root/simpatico/devops/production/simpatico.conf.$1
sed "s/SERVERNAME/$1/g" /root/simpatico/devops/production/simpatico.conf > /root/simpatico/devops/production/simpatico.conf.$1
ln -sf /root/simpatico/devops/production/simpatico.conf.$1 /etc/nginx/sites-enabled/simpatico.conf

# Create SSL cert
certbot --nginx