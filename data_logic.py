import connection

@connection.connection_handler
def get_all_user(cursor):
    cursor.execute("""
    SELECT * FROM users
    """)
    data = cursor.fetchall()
    return data
