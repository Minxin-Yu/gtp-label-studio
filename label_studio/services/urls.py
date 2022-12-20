"""This file and its contents are licensed under the Apache License 2.0. Please see the included NOTICE for copyright information and LICENSE for a copy of the license.
"""
from django.shortcuts import redirect
from django.urls import include, path

from . import views

app_name = 'services'


urlpatterns = [
    path('service/', views.index, name='service-index'),
]
