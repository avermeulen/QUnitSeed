#QUnit Seed

## Intro

This is a basic QUnit Seed to help one to get going with QUnit

It contains one Javascript Object in ```utility.js``` and a tests for it in ```utility_test.js```

To run the tests open the ```test-setup.html``` file in a browser.

##Run tests from the terminal

You can run your QUnit tests from the terminal using gulp.

Gulp is a build tool for Javascript (@dave w - thinkSBT), http://gulpjs.com/, to run it one need node & npm installed.

To install gulp, execute this command in the terminal:

```npm install -g gulp```

In the QUnitSeed folder you need to execute the command below to install the plugins gulp needs:

```npm install```

After this you should be able to do ```gulp test``` from the terminal in the QUnitSeed folder.

## Travis setup

The project in this repository is already setup for Travis, but let's look at the steps involved in setting up your a project that is already using QUnit for testing in Travis.

### What is Travis

Travis is an online CI-tool, CI stands for Continuous Integration. This means that it will each time that your project's code changes in Github, run tasks on your code, such as running tests. We will use it for exactly that.

We need a way of running the tests from the command line, we will use ```gulp``` for that. You can find it at gulpjs.com

### Setup

To setup travis we need to do a few things:

* setup a ```npm``` project
  * in a terminal in your project folder
  * type ```npm init```
  * press enter at each prompt that follows
* install the ```gulp``` and ```gulp-qunit``` modules using ```npm``` 
  * in a terminal in your project folder
  * type ```sudo npm install -g gulp```
  * type ```npm install -s gulp```
  * type ```npm install -s gulp-qunit```
* exclude the ```./node_modules``` folder from github using the ```.gitignore``` file
  * in your project folder root create a .gitignore file using ```touch .gitignore```
  * open the file and put ```node_modules/``` in it
  * save the file
* create a gulp build file in ```gulpfile.js```
  * in your project folder root create a gulpfile.js file using ``` touch gulpfile.js```
  * open the file and add the text below 
  * you will need to put the name of your Qunit test file in here
  * then save the file
  * here is the text:

```javascript
var gulp = require('gulp'),
    qunit = require('gulp-qunit');
    gulp.task('test', function() {
    return gulp.src('./your-testfile-name0here.html')
        .pipe(qunit());
});```

* setup a ```.travis.yml``` file
  *  in your project folder root create a gulpfile.js file using ``` touch .travis.yml```
  * open the file and add this text into it : 
  ```
  ```









