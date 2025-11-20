import { GruposController } from "./GruposController.js";
/**
 * Crea un nuevo grupo usando el valor del input con id nombre.
 * Valida que el nombre no esté vacío, registra el grupo y redirige.
 */
window.crearGrupo = function () {
    const inputNombre = document.getElementById("nombre");
    const nombre = inputNombre.value.trim();
    if (!nombre)
        return alert("Debes escribir un nombre");
    GruposController.add(nombre);
    alert(`Grupo "${nombre}" creado con éxito`);
    inputNombre.value = "";
    window.location.href = "ver-tareas.html";
};
