import { BaseModel } from "./BaseModel.js";
/**
 * Representa una tarea dentro del sistema, con información básica
 * como título, descripción, estado, fecha de creación y grupo asignado.
 */
export class Tarea extends BaseModel {
    constructor(id, titulo, descripcion, estado, fechaCreacion, grupoId) {
        var _a;
        super(id);
        this.titulo = "Nueva tarea";
        this.descripcion = "Aquí va la descripción de tu nueva tarea";
        this.estado = "pendiente";
        this.fechaCreacion = ((_a = new Date().toISOString().split("T")[0]) !== null && _a !== void 0 ? _a : "");
        this.grupoId = 0;
        this.id = id;
        if (titulo)
            this.titulo = titulo;
        if (descripcion)
            this.descripcion = descripcion;
        if (estado)
            this.estado = estado;
        if (fechaCreacion)
            this.fechaCreacion = fechaCreacion;
        if (grupoId !== undefined)
            this.grupoId = grupoId;
    }
    /**
     * Construye una tarea a partir de un objeto JSON crudo.
     * @param data Objeto con los campos necesarios para crear una tarea.
     */
    static fromJSON(data) {
        var _a;
        return new Tarea(data.id, data.titulo, data.descripcion, data.estado, data.fechaCreacion, (_a = data.grupoId) !== null && _a !== void 0 ? _a : 0);
    }
    /**
     * Reemplaza dentro del arreglo de tareas la instancia que coincida
     * con el id de esta tarea.
     * @param tareas Lista donde se buscará y actualizará la tarea.
     */
    selfUpdate(tareas) {
        tareas.forEach((t, i) => {
            if (t.id === (this ? this.id : undefined)) {
                tareas[i] = this;
            }
        });
    }
    // Getters
    get getId() {
        return this.id;
    }
    get getTitulo() {
        return this.titulo;
    }
    get getDescripcion() {
        return this.descripcion;
    }
    get getEstado() {
        return this.estado;
    }
    get getFechaCreacion() {
        return this.fechaCreacion;
    }
    // Setters
    set setTitulo(titulo) {
        this.titulo = titulo;
    }
    set setDescripcion(descripcion) {
        this.descripcion = descripcion;
    }
    set setEstado(estado) {
        this.estado = estado;
    }
    set setFechaCreacion(fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }
    get getGrupoId() {
        return this.grupoId;
    }
    set setGrupoId(grupoId) {
        this.grupoId = grupoId;
    }
}
