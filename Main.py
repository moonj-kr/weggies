from flask import Flask,request,render_template,Response,jsonify
import os
from flask_cors import CORS
import sqlalchemy as db
import json
import random
import string
cwd = os.getcwd()
app = Flask(__name__)
engine = db.create_engine('mysql+pymysql://root:AgtnJqhDe97oaf7a@127.0.0.1:3307/Wegman')
metadata = db.MetaData()
conn = engine.connect()
urlToProductAgainTable = db.Table('urlToProductAgain', metadata,
                                  db.Column('id',db.Integer,primary_key=True),
                                  db.Column('URL',db.String(255)),
                                  db.Column('SKU', db.Integer))
CORS(app)
"""
Sample Request:
curl -X POST localhost:5000/add -d "url=godblesss&sku=123"
"""
@app.route('/add', methods=['POST'])
def addValueToCart():
    f = request.form
    valueArray = []
    for key in f:
        valueArray.append(f[key])
    backURL = valueArray[0]
    skuId = valueArray[1]
    insertIntoProduct = urlToProductAgainTable.insert().values(URL=backURL, SKU=skuId)
    conn.execute(insertIntoProduct)
    return Response("{'a':'b')", status=201)

"""
curl -X GET localhost:5000/getAllProduct?url=avced
"""
@app.route('/getAllProduct', methods=['GET'])
def getAllProduct():
    backURL = request.args.get("url")
    sel = db.select([urlToProductAgainTable]).where(urlToProductAgainTable.c.URL == backURL)
    queryResult = conn.execute(sel)
    returnListOfSKU = []
    for result in queryResult:
        returnListOfSKU.append(result[2])
    return str(returnListOfSKU)



@app.route('/')
def default():
    backURL = ""
    for i in range(0,7):
        backURL += random.choice(string.ascii_letters)
    print(backURL)
    return render_template("example_index.html",)

def main():
    app.run()
if __name__ == "__main__":
    main()


