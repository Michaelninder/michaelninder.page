import sqlite3

# Verbindung zur Datenbank herstellen (oder erstellen, wenn sie nicht existiert)
conn = sqlite3.connect('server.db')

# Cursor erstellen
cursor = conn.cursor()

cursor.execute('''
CREATE TABLE IF NOT EXISTS Users (
    UserID INTEGER PRIMARY KEY,
    MNSP TEXT NOT NULL,
    Username TEXT NOT NULL,
    Passcode TEXT NOT NULL
)
''')
# Daten für die neuen Nutzer
users_data = [
    ('Usr1', 'NAME1', 'Passcode1'),
    ('USR2', 'NAME2', 'Passcode2'),
    # ... für die restlichen Nutzer
    ('USR3', 'NAME3', 'Passcode3'),
    ('USR4', 'NAME4', 'Passcode4'),
    ('USR5', 'NAME5', 'Passcode5'),
    ('USR6', 'NAME6', 'Passcode6'),
    ('USR7', 'NAME7', 'Passcode7'),
    ('USR8', 'NAME8', 'Passcode8'),
    ('USR9', 'NAME9', 'Passcode9'),
    ('USR10', 'NAME10', 'Passcode10'),
    ('USR11', 'NAME11', 'Passcode11'),
]

# SQL-INSERT-Anweisung in einer Schleife für jeden Nutzer ausführen
for user_data in users_data:
    cursor.execute("INSERT INTO Users (MNSP, Username, Passcode) VALUES (?, ?, ?)", user_data)

# Änderungen speichern
conn.commit()

# Verbindung schließen
conn.close()

#new!!!!!!
from flask import Flask, request, render_template
import sqlite3

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['POST'])
def login():
    username = request.form.get('username')
    password = request.form.get('password')

    # Hier kannst du die Datenbanküberprüfung durchführen
    if check_credentials(username, password):
        return "Anmeldung erfolgreich"
    else:
        return "Fehlerhafte Anmeldeinformationen"

def check_credentials(username, password):
    # Führe die Überprüfung mit den Datenbankanmeldedaten durch
    conn = sqlite3.connect('deine_datenbank.db')
    cursor = conn.cursor()

    # Beispiel-Abfrage (ersetze sie durch deine eigene Logik)
    query = "SELECT * FROM Users WHERE Username=? AND Passcode=?"
    result = cursor.execute(query, (username, password)).fetchone()

    conn.close()

    return result is not None

if __name__ == '__main__':
    app.run(debug=True)
