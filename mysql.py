from flask import Flask, jsonify
from flaskext.mysql import MySQL
from flask_cors import CORS


app = Flask(__name__)
app.config["DEBUG"] = True
mysql = MySQL()

# CONECTION TO MYSQL DB
app.config['MYSQL_DATABASE_HOST'] = '139.162.255.173'
app.config['MYSQL_DATABASE_USER'] = 'name'  # name and password to DB on request or in project submission
app.config['MYSQL_DATABASE_PASSWORD'] = 'password'
app.config['MYSQL_DATABASE_DB'] = 'testdb'
app.config['MYSQL_CURSORCLASS'] = 'DisctCursor'
mysql.init_app(app)

CORS(app)

# GET ALL SCHOOLS DATA
@app.route('/api/schooldata', methods=['GET'])
def getAll():
    cur = mysql.connect().cursor()
    cur.execute('SELECT * FROM SchoolData')
    rv = [dict((cur.description[i][0], value)
               for i, value in enumerate(row)) for row in cur.fetchall()]  # GET ALL DATA
    cur.connection.close()
    return jsonify(rv)

# GET DATA BY ID
@app.route('/api/schooldata/<int:URN>', methods=['GET'])
def getById(URN):
    cur = mysql.connect().cursor()
    cur.execute('SELECT * FROM SchoolData where URN=' + str(URN))
    rv = [dict((cur.description[i][0], value)
               for i, value in enumerate(row)) for row in cur.fetchone()]
    cur.connection.close()
    return jsonify(rv)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, threaded=True, debug=True,)
