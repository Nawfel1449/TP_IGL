from django.shortcuts import render , redirect
from .models import Student, Teacher
from .forms import StudentFrom



# Create your views here.
def home_view(request,*args, **kwargs):
    # print(args, kwargs)
    # print(request.COOKIES)
    # print(request.is_secure(),
    #       request.GET,
    #       request.user)
   # return HttpResponse("<h1>Hello world </h1>")

    teacher = Teacher.objects.filter(Email=request.user)

    context = {
        'teacher' : teacher,
    }


    return render(request, "home.html", {})

def about_view(request,*args, **kwargs):
    context = {
        'my_text' : 'this is about us',
        'my_number' : 123,
        'list_etudiant' : ['Noufel','Deroues','Moundji']
    }
    return render(request,"about.html",context)

def student_detail_view(request):
    obj = Student.objects.get(id=1)
    # context = {
    #     'Name' : obj.First_Name,
    #     'Last_name ' : obj.Email,
    #     'Groupe' : obj.Group
    # }

    context = {
        'object' : obj
    }

    print(obj.Email)


    return render(request,"students/list.html",context)


def Student_Creat_view(request):
    form = StudentFrom(request.POST or None)
    if form.is_valid():
        form.save()
        form = StudentFrom()

    context = {
        'form': form
    }

    return render(request, "students/singup.html", context)



def Profile_prof(request):
    teacher = Teacher.objects.filter(Email=request.user.username).first()
    context = {
        'teacher' : teacher,
    }
    return render(request,'base.html',context)










