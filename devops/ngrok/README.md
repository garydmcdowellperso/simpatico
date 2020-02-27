# Ngrok config for the simpatico application

# description

Ngrok can create a tunnel from the internet to your local machine, so if you're developing locally but still need a valid domain name it's a great solution.

# install

```
https://ngrok.com/download
```

# running

Fire up ngrok and it will dynamically give you a domain name. You need to take this and update your nginx.conf file so that it can distribute the incoming requets to the different front-end applications under this url..

```
ngrok start -config ngrok.yaml -all
```
