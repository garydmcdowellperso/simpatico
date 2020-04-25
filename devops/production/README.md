# Nginx config for the simpatico application (PRODUCTION)

# description

Essentally the nginx uses locations to direct traffic to the front ends. This means the whole application works off a single domain name with slugs like profile etc

thisdomainname.com/profile

This config is designed to be compatible with other sites in the sites-enabled directory of nginx e.g. it's NOT a top level nginx.conf file like the development version.

# production

The idea is everything is installed as root - yes I know, not normally a good idea but if you want to be able to change nginx configs under root whilst having the source elsewhere - bee my guest.

To configure your platform for the domain name you want, simply run this script in this directory:

```
./configure.sh
```

This will generate and copy as a symbolic link the simpatico.nginx file to the sites-enabled directory, restart nginx and then start the process of requesting an SSL with certbot.

All of the updates, repos, installs of certbot will be handled by the script above.

# certbot

certbot certonly --manual -d *.DOMAINNAME -d DOMAINNAME --agree-tos --no-bootstrap --manual-public-ip-logging-ok --preferred-challenges dns-01 --server https://acme-v02.api.letsencrypt.org/directory