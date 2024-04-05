"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Usuario
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from datetime import datetime

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

@api.route('/usuario', methods=['GET'])
def obtener():

    obtener_usuario = Usuario.query.all()
    results= list( map( lambda usuario:usuario.serialize(), obtener_usuario ))
  
    return jsonify( results), 200


@api.route('/registro', methods=['POST'])
def post_fila():
    fecha_actual = datetime.now()
    request_body = request.get_json()
    if not request_body:
        return jsonify({'error': 'Missing data'}), 400
    nuevo_usuario = Usuario(    
    nombre=request_body["nombre"],
    correo=request_body["correo"],
    fecha_de_registro= fecha_actual,
    pregunta1= "¿Que camión te gusta mas?",
    pregunta2= "¿Que marca cerveza te gusta mas?",
    pregunta3="¿Que tipo de carretera te gusta mas?"
    )
    db.session.add(nuevo_usuario)
    db.session.commit()
    return jsonify(nuevo_usuario.serialize()), 200

@api.route('/cuestionario/<int:usuario_id>', methods=['PUT'])
def update_cuestionario(usuario_id):
    fecha_cuestionario = datetime.now()
    usuario_existente = Usuario.query.filter_by(id = usuario_id).first()
    data = request.get_json()
    usuario_existente.respuesta1 = data.get('respuesta1', usuario_existente.respuesta1)
    usuario_existente.respuesta2 = data.get('respuesta2', usuario_existente.respuesta2)
    usuario_existente.respuesta3 = data.get('respuesta3', usuario_existente.respuesta3)
    usuario_existente.fecha_de_cuestionario = fecha_cuestionario

    db.session.commit()
    db.session.commit()
    response_body = "Usuario actualizado"
    return jsonify(response_body), 200

@api.route('/usuario/<int:usuario_id>', methods=['DELETE'])
def eliminar_usuario(usuario_id):
    usuario = Usuario.query.get(usuario_id)

    if not usuario:
        return jsonify({'message': 'fila no encontrada'}), 404

    db.session.delete(usuario)
    db.session.commit()

    return jsonify({'Mensaje':'Usuario eliminado exitosamente'}), 200