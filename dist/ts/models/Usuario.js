import { Tarea } from "./Tarea.js";
import { Grupo } from "./Grupo.js";
/**
 * Representa un usuario dentro del sistema, incluyendo información de acceso,
 * sus tareas y los grupos asociados.
 */
export class Usuario {
    constructor(username, contrasena, email) {
        this.username = "defaultUsername";
        this.contrasena = "default123";
        this.email = "default@default.default";
        this.tareas = [];
        this.grupos = [];
        if (username)
            this.username = username;
        if (contrasena)
            this.contrasena = contrasena;
        if (email)
            this.email = email;
    }
    /**
     * Crea una instancia de Usuario a partir de un objeto plano JSON.
     * @param data Objeto con las propiedades del usuario.
     * @returns Instancia de Usuario reconstruida.
     */
    static fromJSON(data) {
        const usuario = new Usuario(data.username, data.contrasena, data.email);
        if (Array.isArray(data.tareas))
            usuario.setTareas = data.tareas;
        if (Array.isArray(data.grupos))
            usuario.setGrupos = data.grupos;
        return usuario;
    }
    /**
    * Actualiza una lista de usuarios reemplazando la entrada que coincida
    * con el correo electrónico del usuario actual.
    * @param usuarios Lista de usuarios donde se realizará la actualización.
    */
    selfUpdate(usuarios) {
        usuarios.forEach((u, i) => {
            if (u.getEmail === this.getEmail) {
                usuarios[i] = this;
            }
        });
    }
    // Getters
    get getUsername() {
        return this.username;
    }
    get getContrasena() {
        return this.contrasena;
    }
    get getEmail() {
        return this.email;
    }
    get getTareas() {
        return this.tareas;
    }
    get getGrupos() {
        return this.grupos;
    }
    // Setters
    set setUsername(username) {
        this.username = username;
    }
    set setContrasena(contrasena) {
        this.contrasena = contrasena;
    }
    set setEmail(email) {
        this.email = email;
    }
    set setTareas(tareas) {
        this.tareas = tareas;
    }
    set setGrupos(grupos) {
        this.grupos = grupos;
    }
}
