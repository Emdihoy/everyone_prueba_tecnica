from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Usuario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique=True, nullable=False)
    correo = db.Column(db.String(120), unique=True, nullable=False)
    fecha_de_registro = db.Column(db.String(120), unique=False, nullable=False)
    pregunta1 = db.Column(db.String(120), unique=False, nullable=False)
    respuesta1 = db.Column(db.String(120), unique=False, nullable=False)
    pregunta2 = db.Column(db.String(120), unique=False, nullable=False)
    respuesta2 = db.Column(db.String(120), unique=False, nullable=False)
    pregunta3 = db.Column(db.String(120), unique=False, nullable=False)
    respuesta3 = db.Column(db.String(120), unique=False, nullable=False)
    fecha_de_questionario = db.Column(db.String(120), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "fecha_de_registro": self.fecha_de_registro
        }