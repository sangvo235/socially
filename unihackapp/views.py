from django.shortcuts import render
from django.http import JsonResponse
from .models import Topics
from .serializers import TopicsSerializer
from django.views.decorators.csrf import csrf_exempt


def index(request):
    Topics_list = Topics.objects.all()
    context = {'Topics_list': Topics_list}
    return render(request, 'socially/index.html', context)


# Rest api end point
def get_rest_list(request):
    """
    Returns Json list of all restaurants
    """
    if request.method == "GET":
        Topics_list = Topics.objects.order_by('id')
        serializer = TopicsSerializer(Topics_list, many=True)
        return JsonResponse(serializer.data, safe=False)

# Create your views here.
