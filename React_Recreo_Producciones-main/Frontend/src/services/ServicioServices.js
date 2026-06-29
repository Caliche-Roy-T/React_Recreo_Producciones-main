import { api } from "../api/api";

export const obtenerServicio = async() => {
    return api.get('/Servicio')
}

export const obtenerServicio = async(id) => {
    return api.get('/Servicio/{id}')
}

export const actualizarServicio = async(id) => {
    return api.update('/Servicio/{id}')
}

export const agregarServicio = async(id) => {
    return api.add('/Servicio/{id}')
}

export const EliminarServicio = async(id) => {
    return api.delete('/Servicio/{id}')
}