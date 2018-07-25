from django.conf.urls import url
from profileapi import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    url(r'^profile/profiles$', views.Profiles.as_view(), name='profiles-act'),
    url(r'^profile/profiles/login$', views.Profiles.as_view(), name='profile-login'),
]

urlpatterns = format_suffix_patterns(urlpatterns)