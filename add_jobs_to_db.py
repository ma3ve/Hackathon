# run shell and exec(open("add_jobs_to_db.py").read())
from jobs.models import JobModel
import pandas as pd

df = pd.read_csv('sap_data.csv')

for i in range(df.shape[0]):
    row = df.iloc[i]
    if i % 200 == 0:
        print(f"On ---{i}th--- object!")
    a = JobModel.objects.create(company=row['company'],
                                education=row['education'],
                                experience=row['experience'],
                                industry=row['industry'],
                                jobdescription=row['jobdescription'],
                                jobid=row['jobid'],
                                joblocation_address=row['joblocation_address'],
                                jobtitle=row['jobtitle'],
                                numberofpositions=row['numberofpositions'],
                                payrate=row['payrate'],
                                site_name=row['site_name'],
                                skills=row['skills'],
                                postdate=row['postdate'][:10],
                                uniq_id=row['uniq_id'],
                                )
    a.save()
