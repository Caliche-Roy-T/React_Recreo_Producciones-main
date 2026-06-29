import { api } from "../api/api";

export const obtenerCotizacion = async() => {
    return api.get('/SolicitudCotizacion')
}

export const obtenerCotizacion = async(id) => {
    return api.get('/SolicitudCotizacion/{id}')
}

export const actualizarCotizacion = async(id) => {
    return api.update('/SolicitudCotizacion/{id}')
}

export const agregarCotizacion = async() => {
    return api.add('/SolicitudCotizacion')
}

export const eliminarCotizacion = async(id) => {
    return api.delete('/SolicitudCotizacion/{id}')
}