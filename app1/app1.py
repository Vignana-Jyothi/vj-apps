
from flask import Flask
app = Flask(__name__)

@app.route('/')
def index():
    return "<h1>Welcome to App1!</h1>"

if __name__ == '__main__':
    app.run(port=5001)
