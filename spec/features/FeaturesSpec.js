"use strict";

describe("Features Spec", function() {

let app_url = 'chrome-extension://kdaikpggmcgcmelajmphahjlepeodmbn/index.html'

  describe("Extension is loaded correctly", function() {

    it("opens index.html", function() {
      browser.url(app_url)
      expect(browser.getTitle()).toEqual("Googley Eyes");
      browser.pause(10000);
    });

  });

  describe("URLs are recorded", function() {

    it("displays visited URLs on index.html", function() {
      browser.url("https://www.bbc.co.uk");
      browser.url(app_url)
      expect(browser.getHTML(".url_container", false)).toEqual("<ul><li>https://www/bbc.co.uk</li></ul>");
      browser.pause(10000)
    });

  });

});
