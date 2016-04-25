# Hacking the Application

Before proceeding any further, read the following documents:

<!-- 1. [CONTRIBUTING.md][contrib]: contributing source code
1. [CODE\_OF\_CONDUCT.md][coc]: code of conduct
1. [LICENSE][license]: software license -->
<!-- 
[contrib]:https://github.com/forfuturellc/mmtc-ke/blob/master/CONTRIBUTING.md
[coc]:https://github.com/forfuturellc/mmtc-ke/blob/master/CODE_OF_CONDUCT.md
[license]:https://github.com/forfuturellc/mmtc-ke/blob/master/LICENSE -->


## introduction:

While Node.js applications are mostly platform-agnostic, our code runs on windows and most linux distro's from the tests we have run, but if anything should go wrong, feel free to submit a pull requests or open an issue, and we will be happy to look at the case

**Table of Contents**

* [application architecture](#arch)
* [starting the application](#start)
* [data entry](#data-entry)
* [deployment](#deploy)
* [news](#news)


<a name="arch"></a>
### application architecture:

The directory structure of the code repository:

```
.
|-- api/     # the `server` , houses all the code that will run on the server
	|-- collections/     # the `models` houses all the simple database entities, illustration all the relationships
	|-- init/     # routing logic
		|-- collections.js      # a place to import all the `collections` that are relevant.
		|-- index.js      # main entry point, sets up the application, innitialises the data-store magic, and other options
		|-- routes.js      # old place to pull in all `router` files, is deprecated
	|-- micro-services/        # houses the express routes and a few seneca services, the logic here is devided into  folders to find things easily
		|-- institution # a folder for all the routes for endpoints specific to modifying the university object and entities related to it
		|-- student # a folder to hold all routes for endpoints specific to modifying the student object and entities related to it
		|-- registra.js      # a seneca service to manage all the actions for the "registra" user
		|-- service_router.js      # random services from all over(deprecated, wil be split soon)
		|-- starter.js      # simple seneca thing to teach seneca to any beginer
	public/     # housing for all the publicly available files. all js files built on running the dev npm command
		|-- config.js      # simple configuration for everything about the application, thpugh most of it is automated
		|-- router.js      # all the route endpoints, best place to start to find out where an endpoints code it
		|-- index.js      # setup for the routes and seneca instances,endpoints for the clients too
|-- clients/       # all the clients that talk to the server, mithril code mostly. webpack builds to the `api/public` folder from here
```

The application is built using, mainly:

* [express][express]: THE web framework
* [seneca][seneca]: the micro-services toolkit
* [nodemon][nodemon]: for restarting the app for changes
* [waterline][waterline]: the data orm for comminicating with various data-stores
* [sails-disk][sails-disk]: data-store used for dev purposes, replaced with mongo in production


[express]:http://expressjs.com/
[seneca]:https://github.com/senecajs/seneca
[nodemon]:https://github.com/remy/nodemon
[waterline]:https://github.com/balderdashy/waterline
[sails-disk]:https://github.com/balderdashy/sails-disk



<a name="start"></a>
### starting the application:

The application can be started in either **development** or **production** mode.

```bash
$ npm start            # start in production mode
$ npm run dev    # start in development mode
```

<a name="deploy"></a>
### deployment:

The application is currently being deployed on [OpenShift][openshift]
**FOR FREE**. We highly recommend you get familiar with the platform.
It is quite worthwhile.

[openshift]:http://openshift.redhat.com/

* developer-in-charge: [BransonGitomeh](https://github.com/BransonGitomeh)

Feel free to contact the developer, anytime




<!-- <a name="news"></a>
### news:

You can find major news concerning the application at
http://mmtc.forfuture.co.ke/news/.

Since we are avoiding restarting the application, just to reflect any
recently-added news, the developer in-charge of deployment handles this
process:

* a new branch, from the **develop** branch is created with a name
  in a format, similar to `news/2016-04-23`.
* new news are added to the beginning of `web/_raw/news.md`
* while the new branch is reviewed and merged back, the updated news.md
  should be uploaded to the server, using SSH or similar tool.

News are now updated! -->


**HAPPY HACKING!**