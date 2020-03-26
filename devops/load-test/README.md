# gatling config for the simpatico application

# description

We use gatling (https://gatling.io/) to perform load testing on the application. It's very lightweight and can simulate as much load as you need.

# running

Copy your .scala files and any resources to the user-files directory under your gatling installation

```
gatling.[sh|bat]
```

# recording new scenarios

You can find the comprenhensivee gatling documentation here (https://gatling.io/docs/current/quickstart) but essentially you run

```
recorder.[sh|bat]
```

This acts as a proxy between your browser and the internet, so it records all the http(s) activity in order to then play it back. Typically you can configure Firefox to easily use a proxy for this type of thing (https://support.mozilla.org/en-US/kb/connection-settings-firefox)