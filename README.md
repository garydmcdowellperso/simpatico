# simpatico
Mono-repo, clean-architecture based (https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html), collective intelligence platform

# principale

A modular approach to bulding a collective intelligence platform - but what does that mean ?

It means the idea of micro-sites and micro-services.
It means separation of concerns rather than monoliths (in terms of code not the repo)
It means no affinity to a particular framework and so the possibility to add your 'own' component to replace an existing one if you don't like it - plug and play with some rules around authentication and what you can 'expect to find'

# tech stack

Javascript fullstack (although I love golan) you have ReactJS for the front (but again you can replace a micro-site with something else) and NodeJS for the back.

# micro-services

well no, not really because until you have a use-case where you need to engineer them, you don't need to build it from day-1. However, using clean archtecture principales the 'api' can be effectively deconstructed into micro-services in probably 1-2 days. Clean API, injection of depedencies and separation of concerns.

# build / test / deploy

There is no hard and fast you must do x with simpatico. The idea is that your 'could' dockerize everything but you don't have to.

You could run as a SaaS or a standalone platform - that's up to you.

All these configurations come with a cost - cost of maintenance and the threat of technical debt. Unused features will be removed!!

The defacto stance is that the lowest cost of entry is the best, this means you should not need an expensive kubernetes cluster to run the software (even though I love kubernetes), especially for small deployments.

So, cheapest solution is currently this one in alpha which is noot dockerised, simply programs you should launch with `npm run start:prod` and you buy the server in line with what you are running.

However, the deployment roadmap is very much based around, images (containers), docker swarm and then kubernetes for the really funky, high scale SaaS setups

# structure

- api # the apis
 |- src
 |- test
- devops * everything to get a system up and running like nginx etc
 |- load-test
 |- mongo
 |- nginx
 |- ngrok
- interfaces # the different ways to access the system
 |- web
   |- admin
   |- connect
   |- home
   |- login
   |- profile
   |- thread

