from flask import Flask,request,render_template,Response,jsonify
import pyodbc
import sqlalchemy
import os
import pymysql
from sqlalchemy import create_engine

engine = create_engine('mysql+pymysql://root:AgtnJqhDe97oaf7a@127.0.0.1:3307/Wegman')
app = Flask(__name__)

# @app.route('/')
# def default():
#     if request.method == "GET":
#         return render_template("example_index.html")


# @app.route('/generateShoppingList')
# def default():
#     if request.method == "POST":
#         return 0


