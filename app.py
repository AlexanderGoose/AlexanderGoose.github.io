from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/proposal')
def proposal():
    return render_template('proposal.html')

