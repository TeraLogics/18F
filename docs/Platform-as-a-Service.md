# Saving Chedda with Platform as a Service

## Defining PaaS

Wikipedia defines [Platform as a Service](https://en.wikipedia.org/wiki/Platform_as_a_service) as "a category of cloud computing services that provides a platform allowing customers to develop, run and manage Web applications without the complexity of building and maintaining the infrastructure typically associated with developing and launching an app. PaaS can be delivered in two ways: as a public cloud service from a provider, where the consumer controls software deployment and configuration settings, and the provider provides the networks, servers, storage and other services to host the consumer's application; or as software installed in private data centers or public infrastructure as a service and managed by internal IT departments."

## Which aaS?

In the design stage, our team discussed the pros and cons of PaaS vs. IaaS. This was not a trivial discussion as there are many advantages and disadvantages to each depending on how they are to be applied. IaaS gives us more fine grained controls and a flexibility that PaaS doesn't, on the other hand, PaaS is an "out of the box" solution. The decision was based on answers to the following questions:

* Do we need the granularity and control?
* Where should our focus be?
* What was the ultimate goal of the solution?

The answer quickly became clear. We didn't have the time to set up a complicated mess of products and we wanted to spend our time writing code rather than configuration. So the decision was made to use Paas. The next question we had to answer was "what PaaS solution would work best for us?" We wanted integration, had requirements to fulfill, and limited time. We knew we were going to write the application with Node.js because we wanted max performance and scalability, so what solutions supported that out of the box? Enter [Heroku](https://www.heroku.com/)!

## Heroku

[Heroku](https://www.heroku.com/) is the definition of PaaS, and one of the leading providers of PaaS especially when it comes to developing and deploying applications written with Node.js. This is one of the reasons why we chose this solution over other PaaS and IaaS providers. We could have gone with Amazon Web Services (AWS), but it was almost too much for what we needed and Amazon can be fairly expensive.  We could also have gone with Google App Engine but it had the same issues.  We wanted something simple enough that had easy integration with [GitHub](docs/Tools.md#github), [MongoDB](docs/backend-technologies#mongodb-open-source), and [Travis CI](docs/backend-technologies#travis-ci-open-source-hosted). When it comes to AWS and Google, those kinds of configurations are not as simple and straight forward to set up, but with Heroku they were as easy as clicking a button.

Setup was simple with Heroku: Sign in, create an app, add services, attach it to GitHub and deploy. Heroku makes scaling our application easy. With a single command we could spin up as many instances as the project would require. Heroku also makes it easy to set up a deployment pipeline so that we can push code down stream to production as it is validated and tested. Overall our experience with Heroku has been great.
