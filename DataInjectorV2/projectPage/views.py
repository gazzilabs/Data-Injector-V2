from django.shortcuts import render

# Create your views here.
def project(request):
    return render(request, 'test/projectpage.html')

def projecttest(request):
    return render(request, 'test/project.html')
