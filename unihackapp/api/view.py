from rest_framework import viewsets
from ..models import Topics
from .serializers import TopicsSerializer

# ViewSets define the view behavior.
class TopicsViewSet(viewsets.ModelViewSet):
    queryset = Topics.objects.all()
    serializer_class = TopicsSerializer