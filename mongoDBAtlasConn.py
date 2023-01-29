import pymongo

#client = pymongo.MongoClient(mongodb+srv://tamuhack:tamu012823@cluster0.6bs3nry.mongodb.net/?retryWrites=true&w=majority)

client = pymongo.MongoClient("mongodb+srv://tamuhack:tamu012823@cluster0.6bs3nry.mongodb.net/?retryWrites=true&w=majority")
db = client.test
print(db)

