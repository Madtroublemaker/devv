from django.urls import path, include
from . import views

urlpatterns = [
    path('companies/', views.list_companies, name='list_companies'),
    path('company/<int:id>/' , views.get_company_by_id, name='get_company_by_id'),
    path('companies/<int:id>/vacancies/' , views.list_vacancies_by_company, name='list_vacancies_by_company'),
    path('vacancy/', views.list_vacancies, name='list_vacancies'),
    path('vacancies/<int:id>/', views.get_vacancy_by_id, name='get_vacancy_by_id'),
    path('vacancies/top_ten/', views.top_ten_vacancies, name='top_ten_vacancies')

]