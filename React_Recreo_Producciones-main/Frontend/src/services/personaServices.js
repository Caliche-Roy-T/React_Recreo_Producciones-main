import { api } from "../api/api"

export const obtenerPersonas = async() => {
    return api.get('/Cliente')
}

export const obtenerPersonas = async(id) => {
    return api.get('/Cliente/{id}')
}

export const actualizarPersona = async(id) => {
    return api.update('/Cliente/{id}')
}

export const agregarPersona = async(id) => {
    return api.add('/Cliente/{id}')
}

export const eliminarPersona = async(id) => {
    return api.delete('/Cliente/{id}')
}
