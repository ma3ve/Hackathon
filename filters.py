import csv
import json


def get_locations():
    locations = set([])
    with open("data.csv", 'r') as csvFile:
        csvreader = csv.reader(csvFile)
        for row in csvreader:
            [locations.add(location.lower().replace(" ", ""))
             for location in row[6].split(",")]
    locations.remove("")
    json_object = json.dumps({"locations": list(locations)}, indent=4)
    with open("locations.json", 'w') as jsonFile:
        jsonFile.write(json_object)


def get_skills():
    skills = set([])
    with open("data.csv", 'r') as csvFile:
        csvreader = csv.reader(csvFile)
        for row in csvreader:
            skills.add(row[12])
    json_object = json.dumps({"skills": list(skills)}, indent=4)
    with open("skills.json", 'w') as jsonFile:
        jsonFile.write(json_object)


def get_education():
    skills = set([])
    with open("data.csv", 'r') as csvFile:
        csvreader = csv.reader(csvFile)
        for row in csvreader:
            skills.add(row[1])
    json_object = json.dumps({"education": list(skills)}, indent=4)
    with open("education.json", 'w') as jsonFile:
        jsonFile.write(json_object)


# get_locations()
# get_skills()
# get_education()
