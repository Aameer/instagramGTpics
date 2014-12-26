from django.conf.urls import patterns, include, url
from django.contrib import admin
from .views import test,get_access_token, get_location
admin.autodiscover()

urlpatterns = patterns('',
	url(r'^test/$', test, name='test'),
	url(r'^get_access_token/$', get_access_token, name='test'),
	url(r'^get_location/$', get_location, name='get_location'),
	url(r'^/$', test, name='landing'),
)

