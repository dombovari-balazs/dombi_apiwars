from flask import Flask, render_template, session, redirect, url_for, escape, request, flash
import data_logic

app = Flask(__name__)
app.secret_key = b'_5#y2s"F4w8z\t\xec]/'

@app.route('/')
def main_page():
    if 'username' in session:
        return 'Logged in as %s' % escape(session['username'])

    return render_template("main.html")

"""
@app.route('/register', methods=['POST', 'GET'])
def route_register():
    if request.method == 'GET' and 'user_name' not in session:
        return render_template('register.html', form=form)
    elif 'user_name' in session:
        flash('lepj ki, cuni!', 'logged-in-error')
    elif request.method == 'POST':
        add_data.registration(form.data)
        session['user_name'] = form.username.data
        session['user_id'] = data_logic.get_user_id_by_username(session['user_name'])
        return redirect(url_for('route_main'))
    else:
            return render_template('register.html', form=form)
    return redirect(url_for('route_main'))


@app.route('/login', methods=['POST', 'GET'])
def route_login():
    form = app_objects.LoginForm()
    login_error_class = 'active'
    if request.method == 'GET' and 'user_name' in session:
        flash('lepj ki, cuni!', 'logged-in-error')
        return redirect(url_for('route_main'))
    elif request.method == 'POST' and form.validate_on_submit() and security.login(form.username.data, form.password.data):
        session['user_name'] = form.username.data
        session['user_id'] = data_logic.get_user_id_by_username(session['user_name'])
        return redirect(url_for('route_main'))
    login_error_class = 'hidden'
    return render_template('login.html', form=form, login_error_class=login_error_class)


@app.route('/logout')
def route_logout():
    session.pop('user_name', None)
    session.pop('user_id', None)
    return redirect(url_for('route_main'))

"""

if __name__ == '__main__':
    app.run()
