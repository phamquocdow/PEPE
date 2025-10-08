from django.shortcuts import render, HttpResponse


def user(request):
    return HttpResponse("User")