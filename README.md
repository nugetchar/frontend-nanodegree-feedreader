# Front-end Web Development Project 6: Feed Reader Testing

This work, Feed Reader Testing, is completed as the sixth and the last portfolio project of the Front-end Web Development Nanodegree program at Udacity.


## Project Overview

Students are given a web application which populates RSS feeds from various sources. The given web page resource can be found [here](https://github.com/udacity/frontend-nanodegree-feedreader). Students will be writing a testing methods for the page using [Jasmine](http://jasmine.github.io/). By going through this exercise, students will be learning about the importance of testing at development time as well as how it can be achieved with the tool Jasmine.


## Related Course

* [JavaScript Testing](https://www.udacity.com/course/javascript-testing--ud549).


## The Project Requirement

The following list shows the required steps to finish this project. The portion of the code I wrote is only the testing suite in the ./jasmine/spec/feedreader.js.

1. Edit the allFeeds variable in *./js/app.js* to make the provided test fail and see how Jasmine visualizes this failure in your application.
2. Return the allFeeds variable to a passing state.
3. Write a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
4. Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
5. Write a new test suite named "The menu".
6. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
7. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
8. Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container. Remember, loadFeed() is asynchronous so this test wil require the use of Jasmine's beforeEach and asynchronous done() function.
9. Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes. Remember, loadFeed() is asynchronous.
10. When complete - all of your tests should pass.


## How to Run the Project

Just open the index.html file and then scroll down the page : you will see the tests results.