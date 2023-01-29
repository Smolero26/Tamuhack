from flask import Flask
import pymongo
import json
import bson.json_util as json_util

app = Flask(__name__)

def parse_json(data):
    return json.loads(json_util.dumps(data))

@app.route("/")
def home():    
    client = pymongo.MongoClient("mongodb+srv://tamuhack:tamu012823@cluster0.6bs3nry.mongodb.net/?retryWrites=true&w=majority")
    db = client['LinkedInPosts']
    colJobs = db['job listing']
    dictColJobs = dict(colJobs.find_one())
    print(parse_json(dictColJobs))
    return parse_json(dictColJobs)

#make a database for each collection this next one is for getting the user
@app.route("/user")
def user():    
    client = pymongo.MongoClient("mongodb+srv://tamuhack:tamu012823@cluster0.6bs3nry.mongodb.net/?retryWrites=true&w=majority")
    db = client['LinkedInPosts']
    colUsers = db['user_info']
    dictColUsers = dict(colUsers.find_one())
    print(parse_json(dictColUsers))
    return parse_json(dictColUsers)

#this database is for swipes
@app.route("/Swipes")
def swipes():    
    client = pymongo.MongoClient("mongodb+srv://tamuhack:tamu012823@cluster0.6bs3nry.mongodb.net/?retryWrites=true&w=majority")
    db = client['LinkedInPosts']
    colSwipes = db['Swipes']
    dictColSwipes = dict(colSwipes.find_one())
    print(parse_json(dictColSwipes))
    return parse_json(dictColSwipes)

if __name__ == "__main__":
    app.run(debug=True)


#client = pymongo.MongoClient(mongodb+srv://tamuhack:tamu012823@cluster0.6bs3nry.mongodb.net/?retryWrites=true&w=majority)

