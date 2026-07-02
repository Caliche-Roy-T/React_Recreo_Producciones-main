import { api } from "../api/api"

export const obtenerCliente = async() => {
    return api.get("/Cliente");
};

export const obtenerClientePorId = async(id) => {
    return api.get(`/Cliente/${id}`);
};

export const actualizarCliente = async(id, data) => {
    return api.put(`/Cliente/${id}`, data);
};

export const agregarCliente = async(data) => {
    return api.post("/Cliente", data);
};

export const eliminarCliente = async(id) => {
    return api.delete(`/Cliente/${id}`);
};
