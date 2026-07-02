import { api } from "../api/api";

export const obtenerServicio = async() => {
    return api.get("/Servicio");
};

export const obtenerServicioPorId = async(id) => {
    return api.get(`/Servicio/${id}`);
};

export const actualizarServicio = async(id, data) => {
    return api.put(`/Servicio/${id}`, data);
};

export const agregarServicio = async(data) => {
    return api.post("/Servicio/", data);
};

export const eliminarServicio = async(id) => {
    return api.delete(`/Servicio/${id}`)
};