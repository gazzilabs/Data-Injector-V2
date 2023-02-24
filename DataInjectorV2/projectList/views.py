from django.shortcuts import render

# Create your views here.
def projectlist(request):
    return render(request, 'test/projectlist.html')