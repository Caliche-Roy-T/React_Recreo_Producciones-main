import { api } from "../api/api";

export const obtenerCotizacion = async() => {
    return api.get("/SolicitudCotizacion");
};

export const obtenerCotizacionPorId = async(id) => {
    return api.get(`/SolicitudCotizacion/${id}`);
};

export const actualizarCotizacion = async(id, data) => {
    return api.put(`/SolicitudCotizacion/${id}`, data);
};

export const agregarCotizacion = async(data) => {
    return api.post("/SolicitudCotizacion", data);
};

export const eliminarCotizacion = async(id) => {
    return api.delete(`/SolicitudCotizacion/${id}`);
};