from flask import Flask, jsonify, redirect
from flaskext.mysql import MySQL
from flask_cors import CORS

from OpenSSL import SSL
context = SSL.Context(SSL.SSLv23_METHOD)
context.use_privatekey_file('/etc/letsencrypt/live/nickwebdev.com/privkey.pem')
context.use_certificate_file('/etc/letsencrypt/live/nickwebdev.com/fullchain.pem')

app = Flask(__name__)
app.config["DEBUG"] = True
mysql = MySQL()

app.config['MYSQL_DATABASE_HOST'] = '139.162.255.173'
app.config['MYSQL_DATABASE_USER'] = 'name'
app.config['MYSQL_DATABASE_PASSWORD'] = 'password'
app.config['MYSQL_DATABASE_DB'] = 'testdb'
app.config['MYSQL_CURSORCLASS'] = 'DisctCursor'
mysql.init_app(app)

CORS(app)


@app.route('/api/schooldata', methods=['GET'])
def getAll():
    cur = mysql.connect().cursor()
    cur.execute('SELECT * FROM SchoolData')
    rv = [dict((cur.description[i][0], value)
               for i, value in enumerate(row)) for row in cur.fetchall()]
    cur.connection.close()
    return jsonify(rv)


@app.route('/api/schooldata/<int:URN>', methods=['GET'])
def getById(URN):
    cur = mysql.connect().cursor()
    cur.execute('SELECT * FROM SchoolData where URN=' + str(URN))
    rv = [dict((cur.description[i][0], value)
               for i, value in enumerate(row)) for row in cur.fetchall()]
    cur.connection.close()
    return jsonify(rv)


if __name__ == '__main__':
    context = ('/etc/letsencrypt/live/nickwebdev.com/fullchain.pem', '/etc/letsencrypt/live/nickwebdev.com/privkey.pem')
    app.run(host='0.0.0.0', port=5000, threaded=True, debug=True, ssl_context=context)
