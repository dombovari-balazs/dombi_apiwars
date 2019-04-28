from flask import Flask, render_template, session, redirect, url_for, escape, request, flash


app = Flask(__name__)
app.secret_key = b'_5#y2s"F4w8z\t\xec]/'

@app.route('/')
def main_page():

    return render_template("main.html")


if __name__ == '__main__':
    app.run()
