# mongodb config for the simpatico application

# description

The apis all need a DB connection of some sort. The default implementation is mongodb but you can switch out to whatever you want by changing the services/<service name>/lib/interface_adapters/storage/xxxRepositoryxxxx.js and then injecting that new storage in the controller, services/<service name>/lib/controllers/xxxController

# running

The mongo is run as a docker image with defaults

```
docker run --name simpatico-mongodb -p27017:27017 -d mongo
```
