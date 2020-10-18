from django.db import models
from django.utils.timezone import now as timezone_now
import datetime

def determine_exp_class(exp_req):
	cat_string = ""
	flag = [False, False, False, False, False]
	if 0 <= int(exp_req[0]) < 5:
		flag[0] = True
		cat_string += "0-5"
	if 5 <= int(exp_req[0]) < 10:
		flag[1] = True
		cat_string += "5-10"
	if 10 <= int(exp_req[0]) < 15:
		flag[2] = True
		cat_string += "10-15"
	if 15 <= int(exp_req[0]) <= 20:
		flag[3] = True
		cat_string += "15-20"
	if 20 < int(exp_req[0]):
		flag[4] = True
		cat_string += "20+"
	
	cat_string += " "

	if 0 <= int(exp_req[1]) < 5:
		if not flag[0]:
			cat_string += "0-5"
	if 5 <= int(exp_req[1]) < 10:
		if not flag[1]:
			cat_string += "5-10"
	if 10 <= int(exp_req[1]) < 15:
		if not flag[2]:
			cat_string += "10-15"
	if 15 <= int(exp_req[1]) <= 20:
		if not flag[3]:
			cat_string += "15-20"
	if 20 < int(exp_req[1]):
		if not flag[4]:
			cat_string += "20+"

	return cat_string


class DataModel(models.Model):
	company = models.CharField(max_length=200, null=True, blank=True)
	education = models.CharField(max_length=200, null=True, blank=True)
	experience = models.CharField(max_length=200, null=True, blank=True)
	industry = models.CharField(max_length=200, null=True, blank=True)
	jobdescription = models.TextField(default='job desc', null=True, blank=True)
	jobid = models.CharField(max_length=200, null=True, blank=True)
	joblocation_address = models.CharField(max_length=200, null=True, blank=True)
	jobtitle = models.CharField(max_length=200, null=True, blank=True)
	numberofpositions = models.IntegerField(default=0, null=True, blank=True)
	payrate = models.CharField(max_length=200, null=True, blank=True)
	postdate = models.DateField(default=datetime.date.today)
	site_name = models.CharField(max_length=200, null=True, blank=True)
	skills = models.CharField(max_length=200, null=True, blank=True)
	uniq_id = models.CharField(max_length=200, null=True, blank=True)
	job_exp_cat = models.CharField(max_length=200, null=True, blank=True)

	def save(self, *args, **kwargs):
		exp_req = self.experience.strip()[:-4].split("-")
		# print(self.experience, self.experience.strip())
		self.job_exp_cat = determine_exp_class(exp_req)
		super(DataModel, self).save(*args, **kwargs)
