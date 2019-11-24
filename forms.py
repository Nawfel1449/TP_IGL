from django import forms

from .models import Student


class StudentFrom(forms.ModelForm):
    class Meta:
        model = Student
        fields = [
            'First_Name',
            'Last_Name',
            'Email',
            'Group',
            'Serial_Number',
        ]

