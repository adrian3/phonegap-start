// Fire up jQTouch
var jQT = new $.jQTouch({
  preloadImages: []
});

// Fire up Cordova
var app = {
  initialize: function() {
    this.bindEvents();
  },
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },

// Device ready actions
  onDeviceReady: function() {
    app.receivedEvent('deviceready');

// Don't forget to add the anlytics tracker here
    analytics.startTrackerWithId('UA-xxxxxxx-xx');
  },
  receivedEvent: function(id) {
    // put things that will happen when app is loaded here.
  }
};

// Analytics function
function trackpage(pagename) {
  analytics.trackView(pagename);
}