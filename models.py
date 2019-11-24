from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User


# Create your models here.


#faire la requete pour voir les etudtiant seleon le prof pour chaque prof
#arregner le code pour voir selement
#revoir les class meta dans et poo dans python
#la classe groupe avec un set d etudaint et autogeneration de groupe
#revoir les groups dans pyhton et la fonc d ajouter les absence
#def get absence
#def set absence
#faire un enumeration de seance


class Student(models.Model):
    Serial_Number = models.CharField(max_length=10)
    First_Name = models.CharField(max_length=30)
    Last_Name = models.CharField(max_length=30)
    Group = models.IntegerField(default=7)
    Email = models.EmailField()

    def __str__(self):
        return self.Serial_Number

class Teacher(models.Model):
    Name = models.CharField(max_length=30)
    Last_Name = models.CharField(max_length=30)
    Email = models.EmailField()
    Module = set()
    groupe = set()

    def __str__(self):
        return (self.Name +" " + self.Last_Name)

    def set_groupe(self, number):
        self.groupe.add(number)


    def get_list(self, number):
        return Student.objects.filter(Group=number)


class Cours(models.Model):
    titre = models.CharField(max_length=100)
    discription = models.TextField()
    date_posted = models.DateField(default=timezone.now)
    author = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.titre








