Template App - Getting Started
===============

This project is intended to be a starting point for all future apps built on the [FeedHenry](http://www.feedhenry.com)
platform, it contains the basic app structure and [LESS](http://lesscss.org/) styles to speed up the theming of apps 

---

Below is an outline of the template structure:

### client
This is the directory containing all of the client-side code for the app, and client side tests. It
contains the following files/folders:

+ **default** - The default client _package_.
    + **index.html** - The main HTML file of the client app.
    + **app.js** - The entry point into the app.

    + **app** - folder containing all models, views, controllers and templates for app.
    + **css** - folder containing compressed styles (do not edit styles.css as it is auto-generated).
    + **js** - folder containing global preferences, settings etc...
    + **less** - folder containing all LESS styles and mixins.
    + **lib** - folder containing all 3rd party libraries.

+ **test** - The _package_ containing all client-side tests.

---

## Development Requirements

To get started with local development, you must first clone this project into your own GIT repo.
Once this is done, create a GIT backed project in the Feedhenry Studio. 
Three things are now needed to move onto local development:
+ **App GUID** - found in the details screen of the app.
+ **Studio Domain** - the address at which the studio is (xxxx.feedhenry.com).
+ **FHC** - [Feedhenry Command Line tool](http://docs.feedhenry.com/v2/fhc_command_line_tool.html).


There are some node modules that must be installed before beginning development

+ **LESS** 				- sudo npm install -g less
+ **Mocha-PhantomJS** 	- sudo npm install -g mocha-phantomjs
+ **PhantomJS** 		- sudo npm install -g phantomjs

To set up FHC local, you must do the following:

+ Target the studio domain where your app lives - fhc target xxxx
+ Login to said domain - fhc login <user> <password>
+ Initialize fhc local - fhc initlocal <appGuid>
+ Run fhc local - fhc local <appGuid>
+ Browse to 127.0.0.1:8000 you should see Hello World
---

