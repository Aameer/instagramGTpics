Instagram Geotagged Pictures
================

The project is a working model of an Web app which gets GeoTagged Images from Instagram Api
Requirement
------------
* Django==1.5
* django-allauth==0.18.0
* python-instagram==1.3.0
* ipdb==0.8

Configration
------------
Setup it just like a usual django project, just make sure you enter right location for database and configure django alluth correctly.For more dtails refer to docs [here](http://django-allauth.readthedocs.org/en/latest/).For setting up instagram api and google maps api  (I will share a detailed post on that in few days, for now) please refer to documentation for instagram [here](http://instagram.com/developer/authentication/), and for google maps api[here](https://developers.google.com/maps/documentation/geocoding/index)

Some Important details
----------------------
In this project we first ask user for authentication and then ask user to fill the name and address of the location and then get Geotagged Pictures from instagram api, which we then display to the user.We can get many posible locations from google maps api for a particular address but we are using first one for now.Moreover we can use instagrams locations or media end point to get different results (just for comparison)

test
-----
After the successfull configration. start you local server 
* *http://localhost:8000/*

Sample Screen shots
-------------------
Screen shots make make the working crystal clear
![landing page](https://raw.githubusercontent.com/Aameer/instagramGTpics/master/instagramMsg/static/img/1.png)
![instagram login page](https://raw.githubusercontent.com/Aameer/instagramGTpics/master/instagramMsg/static/img/2.png)
![login window from instagram](https://raw.githubusercontent.com/Aameer/instagramGTpics/master/instagramMsg/static/img/3.png)
![redirect url](https://raw.githubusercontent.com/Aameer/instagramGTpics/master/instagramMsg/static/img/4.png)
![puttin values into form](https://raw.githubusercontent.com/Aameer/instagramGTpics/master/instagramMsg/static/img/5.png)
![alternatively](https://raw.githubusercontent.com/Aameer/instagramGTpics/master/instagramMsg/static/img/6.png)
![some more pic](https://raw.githubusercontent.com/Aameer/instagramGTpics/master/instagramMsg/static/img/7.png)
![on signout](https://raw.githubusercontent.com/Aameer/instagramGTpics/master/instagramMsg/static/img/8.png)


For fun
-------
Type in names of the places you always wanted to visit and see some awesome pics.

Todo
----
To optimise results and to open distance around which users can locate the pictures

