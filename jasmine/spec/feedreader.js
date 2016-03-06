'use strict';
/*jslint esversion: 6 */
/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /*
         * This test ensures that every RSS Feeds has an non-empty URL
         */
        it('have a URL defined and != empty', function() {
            allFeeds.forEach((val, i, t) => {
                expect(val.url).toBeDefined();
                expect(val.url).not.toBe('');
            });
        });

        /*
         * This test ensures that every RSS Feeds has an non-empty name
         */
        it('have a name defined and != empty', function() {
            allFeeds.forEach((val, i, t) => {
                expect(val.name).toBeDefined();
                expect(val.name).not.toBe('');
            });
        });
    });


    /* Test Suite for the menu */
    describe('The menu', function(){
        let menuIconLink = $('.menu-icon-link');
        let body = $('body');
        /*
         * This test ensures the menu is hidden by default
         */
        it('is hidden by default', function() {
            // We expect the <body> to have the 'menu-hidden' class
            expect(body.hasClass('menu-hidden')).toBeTruthy();
        });

        /*
         * This test ensures the menu is visible when clicked, then hidden when clicked again
         */
        it('is visible when clicked on, then hidden when clicked on again', function() {
            menuIconLink.trigger('click');
            expect(body.hasClass('menu-hidden')).toBeFalsy();
            menuIconLink.trigger('click');
            expect(body.hasClass('menu-hidden')).toBeTruthy();
        });
    });
    
    /* Test Suite for initial entries */
    describe('Initial Entries', function(){
        /*
         * We load feed before each test (asynchronous)
         */
        beforeEach(function(done){
            loadFeed(0, done);
        });
        /*
         * This test ensures there is at least a single .entry element
         */
        it('contain at least a single .entry element withing the .feed container', function() {
            expect($('.entry').length).toBeGreaterThan(0);
        });
    });

    /* Test Suite for New Feed Selection */
    describe('New Feed Selection', function(){

        let now, next;
        let i=0;
        let callback;

        beforeEach(function(done){
            callback = () => {
                now = $('.entry:first > h2').text();
                done();    
            }
            loadFeed(i, callback);
        });

        /*
         * This test ensures content changes whe na new feed is loaded
         */
        it('should change content when a new feed is loaded', function(done) {
            loadFeed(i+1, function() {
                next = $('.entry:first > h2').text();
                expect(now).not.toEqual(next);
                done();
            });
        });
    });
}());
