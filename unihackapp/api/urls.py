from rest_framework import routers
from .view import TopicsViewSet
from django.urls import path, include

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'Topics', TopicsViewSet)

urlpatterns = [
    path('', include(router.urls))
]