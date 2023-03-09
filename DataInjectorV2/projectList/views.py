from django.shortcuts import render

# Create your views here.
def projectlist(request):
    return render(request, 'projectlist.html')

def testcode(request):
    return render(request, 'testcode.html')