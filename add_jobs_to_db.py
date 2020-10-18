# Copy paste and run in python manage.py shell
from jobs.models import JobModel
import pandas as pd

df = pd.read_csv('data.csv')

for i in range(df.shape[0]):
    row = df.iloc[i]

    if (i == 500):
        break

    x = 0
    if row['numberofpositions']:
        x = row['numberofpositions']
    a = JobModel.objects.create(company=row['company'],
                                education=row['education'],
                                experience=row['experience'],
                                industry=row['industry'],
                                jobdescription=row['jobdescription'],
                                jobid=row['jobid'],
                                joblocation_address=row['joblocation_address'],
                                jobtitle=row['jobtitle'],
                                numberofpositions=x,
                                payrate=row['payrate'],
                                site_name=row['site_name'],
                                skills=row['skills'],
                                uniq_id=row['uniq_id'],
                                )
    a.save()
