from flask import Flask, request, render_template
import requests
import creditientials
app = Flask(__name__)

def query(payload):
    headers = {"Authorization": f"Bearer {creditientials.API_TOKEN}"}
    response = requests.post(creditientials.API_URL,headers=headers,json=payload)
    return response.json()


@app.route("/")
def hello_world():
    output = query({
	"inputs": {
		"question": "What's my name?",
		"context": "My name is Clara and I live in Berkeley."
	},
                })
    print(output)
    return "<p>Hello, World!</p>"

@app.route("/home",methods=["POST","GET"])
def home():
    if requests.method == "POST":
        req = request.form
        print(req)
    
    return


## flask --app app run