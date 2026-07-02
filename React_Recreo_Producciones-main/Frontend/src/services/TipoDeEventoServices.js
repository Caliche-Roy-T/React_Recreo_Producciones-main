import { api } from "../api/api";

export const obtenerTipoDeEvento = async() => {
    return api.get("/TipoDeEvento")
};

export const obetenerTipoDeEventoPorId = async(id) => {
    return api.get(`/TipoDeEvento/${id}`);
};

export const actualizarTipoDeEvento = async(id, data) => {
    return api.put(`/TipoDeServicio/${id}`, data);
};

export const agregarTipoDeEvento = async(data) => {
    return api.post("/TipoDeEvento", data);
}

export const eliminarTipoDeEvento = async(id) => {
    return api.delete(`/TipoDeEvento/${id}`)
}