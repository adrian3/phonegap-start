# Cordova/Phonegap Starter Application

> This is the starter application I use for my cordova apps. Setting up Analytics and getting jQTouch has always been harder than it should be, so I made this starter folder to save time. Your mileage may vary, but give it for a spin if you need a quick starting point that includes jQTouch. I also use CodeKit, so keep that in mind.

## Usage Notes
> Uses jQTouch and defaults to the iOS7 (ish) theme
> It includes javascript functions for Google analytics Plugin
> It includes a fixed footer
> It includes fastclick.js
> It includes jQuery
> It includes my startup icons

- To use Compass in Codekit, select config file in "themes/scss" not the one in "compass/recipes" folder

- The only CSS file you should edit is "scss/styles.scss" because Compass will compile everything

- Before building the final app files, be sure to change Compass config file to compressed and production. Don't include the "compass-recipes" or "scss" folders (just the styles.css and the maybe the img folder), you don't need them in your final app.

# Analytics
- To make analytics work you need to install this plugin by running: cordova plugin add https://github.com/danwilson/google-analytics-plugin.git 

- Then change the UA-xxxxxxx-xx in default.js to your code
- Tap the "Test Analytics" link on screen 1 in the simulator or on your device to make sure it is working

- You can see the visit get recorded within a few seconds by watching the live view within Google Analytics

- If you want to be a good citizen you should ask your users before tracking their usage

# Cordova Build Applescript
- Also included in this project is an applescript that saves me from typing "cordova build" into the terminal. Lazy, I know.

- To use, I just drop into my rood cordova folder. If you want to keep it open in Applescript Editor and hit "run" you can use the script. If you would rather just double click the icon you can use the app. 

- All it does is open terminal, changes directories to the folder where the script is located, then it runs "cordova build" and finally minimizes the terminal window