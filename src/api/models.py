from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Usuario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique=False, nullable=False)
    correo = db.Column(db.String(120), unique=True, nullable=False)
    fecha_de_registro = db.Column(db.String(120), unique=False, nullable=False)
    pregunta1 = db.Column(db.String(120), unique=False, nullable=True)
    respuesta1 = db.Column(db.String(120), unique=False, nullable=True)
    pregunta2 = db.Column(db.String(120), unique=False, nullable=True)
    respuesta2 = db.Column(db.String(120), unique=False, nullable=True)
    pregunta3 = db.Column(db.String(120), unique=False, nullable=True)
    respuesta3 = db.Column(db.String(120), unique=False, nullable=True)
    fecha_de_cuestionario = db.Column(db.String(120), unique=False, nullable=True)

    def __repr__(self):
        return f'<User {self.correo}>'

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "correo": self.correo,
            "fecha_de_registro": self.fecha_de_registro,
            "respuesta1": self.respuesta1,
            "respuesta2": self.respuesta2,
            "respuesta3": self.respuesta3,
            "fecha_de_cuestionario": self.fecha_de_cuestionario,
        }