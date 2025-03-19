# app.py
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    text = ""
    if request.method == 'POST':
        text = request.form.get('userInput', "")
    return render_template('index.html', text=text)

if __name__ == '__main__':
    app.run(debug=True)
