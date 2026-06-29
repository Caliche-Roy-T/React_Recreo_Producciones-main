import { api } from "../api/api";

export const AgregarTipoDeEvento = async() => {
    return api.get('/TipoDeEvento')
}

export const AgregarTipoDeEvento = async(id) => {
    return api.get('/TipoDeEvento/{id}')
}

export const ActualizarTipoDeEvento = async(id) => {
    return api.update('/TipoDeServicio/{id}')
}

export const AgregarTipoDeEvento = async(id) => {
    return api.add('/TipoDeEvento/{id}')
}

export const EliminarTipoDeEvento = async(id) => {
    return api.delete('/TipoDeEvento/{id}')
}