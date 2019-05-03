# FlushRush
## Find a bathroom in a jiff!

<img src="https://raw.githubusercontent.com/bennettwarner/FlushRush/master/public/logotransparent.png" data-canonical-src="https://raw.githubusercontent.com/bennettwarner/FlushRush/master/public/logotransparent.png" width="200" />


## Project Purpose
This program was created as a submission for the 2019 HackWCU MLH Hackathon. Additionally it was created as a concept to address the prevalent issue of people who are in desperate need of a bathroom but can't find one on their own.

![Logo](https://raw.githubusercontent.com/bennettwarner/FlushRush/master/screenshot.jpg)


## Project Design
This software utilizes Node.js javascript web-development with a MongoDB databse and interfaces directly with several subsections of the Google Maps API including:
* The Maps JavaScript API
* The Maps Geolocation API

## How To Use
This software naturally has a graphical user interface, making operating the program very simple.
After accessing the web-services of this program in your browser you must either create a new account, or if you are a returning user then log in with the existing account. 

From here any user can either record a review for a new or existing Flush (public bathroom location) utilizing the **ADD** option located at the top of the page. 

Additionally users can check the locations of Flushes near them by use of the **Locations** option at the top of the window,users will then be provided with information that includes the given name of the location, the distance the user is from that Flush, and the average rating of that Flush provided by users that have previously visited that location. Users will also be able to select the linked names of the Flushes to see the full reviews left by users that have visited that bathroom. 
This includes information like:
* The cleanliness rating of the restroom.
* How busy the restroom regularly is from user experience.
* The quality of the toilet paper in the restroom.
* Whether or not the bathroom has paper towels.
* If there was still toilet paper in supply.
* And any additional comments made by the users that visited the Flush at the time. 
