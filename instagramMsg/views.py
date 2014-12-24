# Create your views here.
from django.http import HttpResponse
from django.shortcuts import render_to_response, redirect
from django.template import RequestContext
import json
import ipdb
from allauth.socialaccount.models import SocialToken
from django.utils import simplejson
import httplib2
import urllib
import ast

def test(request):
	return render_to_response('entry.html', {},
                              context_instance=RequestContext(request))

def get_access_token(request):

    token_val=SocialToken.objects.get(account__user__username=request.user.get_username(), account__provider='instagram').token
    r_data = {'access_token':token_val, 'lng':request.GET['longitude'], 'lat':request.GET['latitude'], 'distance':request.GET['distance']}

    #making call to instagram servers
    body = urllib.urlencode(r_data)
    url_to_hit="https://api.instagram.com/v1/media/search?"+body
    h = httplib2.Http()
    resp, content = h.request(url_to_hit)
    content = content.replace('null','None')
    content = content.replace('false','False').replace('true','True')
    content=ast.literal_eval(content)
    #status code
    temp_dict = {}
    if (content['meta']['code']!= 400):
	temp_list = content['data']
    	for idx, val in enumerate(temp_list):
    	    temp_dict[idx]=val['images']['standard_resolution']['url'].replace('\\','')
    return HttpResponse(json.dumps(temp_dict), content_type="application/json")
