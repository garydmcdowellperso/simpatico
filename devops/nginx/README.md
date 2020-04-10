# Nginx config for the simpatico application (DEVELOPMENT)

# description

Essentally the nginx uses locations to direct traffic to the front ends. This means the whole application works off a single domain name with slugs like profile etc

thisdomainname.com/profile

You need to simply adapt this file for the domain name you wish to use and either use ngrok to point to it or se a real domain name with an ssl cert etc

IF YOU ARE LOOKING FOR A PRODUCTION CONFIGURATION PLEASE LOOK AT THE PRODUCTION DIRECTORY

# dev

To run in a dev mode, simply use nginx on the physical machine

```
brew install nginx
brew services start nginx or nginx -c /simpatico/devops/nginx/ngnix.conf 
```

# production

The nginx is run as a docker image with a mount to the config profile. Please note, this much be used in conjunction with other docker images for the proxies and a docker compose - otherwise the nginx will not find 'localhost'

```
docker run --name simpatico-nginx -p8080:80 -v ../simpatico/devops/nginx/ngnix.conf:/etc/nginx/nginx.conf:ro -d nginx
```
