from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()
from instagramMsg import urls as instagramMsg_urls
urlpatterns = patterns('',
    # Examples:
    url(r'^$', 'instagramMsg.views.test', name='home'),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),
    #url(r'^instagramMsg/', include('instagramMsg.urls')),

    url(r'^accounts/', include('allauth.urls')),
    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),
)
urlpatterns += instagramMsg_urls.urlpatterns
