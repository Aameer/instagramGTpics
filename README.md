amazon_deals_api
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
Setup it just like a usual django project, just make sure you enter right location for database and configure django alluth correctly.For more dtails refer to docs [here](http://django-allauth.readthedocs.org/en/latest/).For setting up instagram account (I will share a detailed post on that in few daysi, for now) please refer to documentation [here](http://instagram.com/developer/authentication/).
Some Important details
----------------------
In this project we first ask user for authentication and then ask user to fill the latitude and longitude and then get Geotagged Pictures from instagram api, which we then display to the user.

test
-----
After the successfull configration. start you local server 
* *http://localhost:8000/*

Sample Screen shots
-------------------
screen shots make make the working crystal clear
![landing page](https://raw.githubusercontent.com/Aameer/instagramGTpics/master/instagramMsg/static/img/1.png)
![instagram login page](https://raw.githubusercontent.com/Aameer/instagramGTpics/master/instagramMsg/static/img/2.png)
![login window from instagram](https://raw.githubusercontent.com/Aameer/instagramGTpics/master/instagramMsg/static/img/3.png)
![redirect url](https://raw.githubusercontent.com/Aameer/instagramGTpics/master/instagramMsg/static/img/4.png)
![puttin values into form](https://raw.githubusercontent.com/Aameer/instagramGTpics/master/instagramMsg/static/img/5.png)
![after submit showing pics](https://raw.githubusercontent.com/Aameer/instagramGTpics/master/instagramMsg/static/img/6.png)
![some more pic](https://raw.githubusercontent.com/Aameer/instagramGTpics/master/instagramMsg/static/img/7.png)
![on signout](https://raw.githubusercontent.com/Aameer/instagramGTpics/master/instagramMsg/static/img/8.png)

Todo
----
use google maps api to get latitude and longitude of a place.

