import { BaseModel } from "./BaseModel.js";

/**
 * Representa un grupo al que pueden pertenecer tareas o usuarios.
 * Contiene un identificador y un nombre personalizable.
 */
export class Grupo extends BaseModel {
	private nombre: string = "Nuevo grupo";

	constructor(id: number, nombre?: string) {
		super(id);
		this.id = id;
		if (nombre) this.nombre = nombre;
	}

	/**
	 * Reconstruye un grupo desde un objeto JSON plano.
	 * @param data Objeto con datos del grupo.
	 * @returns Instancia de Grupo.
	 */
	static fromJSON(data: any): Grupo {
		return new Grupo(
			data.id,
			data.nombre
		);
	}

	// Getters 
	get getId(): number { 
		return this.id; 
	} 
	
	get getNombre(): string { 
		return this.nombre; 
	}

	// Setters 
	set setNombre(nombre: string) { 
		this.nombre = nombre; 
	}

}
