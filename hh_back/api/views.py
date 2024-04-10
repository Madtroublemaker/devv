from django.http import JsonResponse
from .models import Company, Vacancy

def list_companies(request):
    companies = Company.objects.all()
    data = [{'id': company.id,
             'name': company.name,
             'description': company.description,
             'city': company.city,
             'address': company.address } for company in companies]
    return JsonResponse(data)

def get_company_by_id(request, id):
    try:
        company = Company.objects.get(id=id)
        data = {'id': company.id,
                'name': company.name,
                'description': company.description,
                'city': company.city,
                'address': company.address}
        return JsonResponse(data)
    except Company.DoesNotExist:
        return JsonResponse({'error': 'Company does not exist'}, status=404)


def list_vacancies(request):
    vacancies = Vacancy.objects.all()
    data = [{'id': vacancy.id,
             'name': vacancy.name,
             'description': vacancy.description,
             'salary': vacancy.salary,
             'company': vacancy.company_id} for vacancy in vacancies]
    return JsonResponse(data)

def get_vacancy_by_id(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
        data = {'id': vacancy.id,
                'name': vacancy.name,
                'description': vacancy.description,
                'salary': vacancy.salary,
                'company': vacancy.company_id}
        return JsonResponse(data)
    except Vacancy.DoesNotExist:
        return JsonResponse({'error': 'Vacancy does not exist'}, status=404)


def list_vacancies_by_company(request, id):
    vacancies = Vacancy.objects.filter(company_id=id)
    data = [{'id': vacancy.id,
             'name': vacancy.name,
             'description': vacancy.description,
             'salary': vacancy.salary,
             'company': vacancy.company_id} for vacancy in vacancies]
    return JsonResponse(data)

def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    data = [{'id': vacancy.id,
             'name': vacancy.name,
             'description': vacancy.description,
             'salary': vacancy.salary,
             'company': vacancy.company_id} for vacancy in vacancies]
    return JsonResponse(data)
