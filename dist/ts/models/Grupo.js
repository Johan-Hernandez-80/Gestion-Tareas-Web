import { BaseModel } from "./BaseModel.js";
/**
 * Representa un grupo al que pueden pertenecer tareas o usuarios.
 * Contiene un identificador y un nombre personalizable.
 */
export class Grupo extends BaseModel {
    constructor(id, nombre) {
        super(id);
        this.nombre = "Nuevo grupo";
        this.id = id;
        if (nombre)
            this.nombre = nombre;
    }
    /**
     * Reconstruye un grupo desde un objeto JSON plano.
     * @param data Objeto con datos del grupo.
     * @returns Instancia de Grupo.
     */
    static fromJSON(data) {
        return new Grupo(data.id, data.nombre);
    }
    // Getters 
    get getId() {
        return this.id;
    }
    get getNombre() {
        return this.nombre;
    }
    // Setters 
    set setNombre(nombre) {
        this.nombre = nombre;
    }
}
