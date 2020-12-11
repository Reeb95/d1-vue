const app = new Vue({
	el: "#app",
	data: {
		message: "HELLO MREEB",
		nNombre: "",
		nDescripcion: "",
		nPrecio: "",
		error: "",
		productos: [],
		
		editProducto: null,
		editIndex: -1

	},
	methods: {
		addNewProduct() {
			if (this.nNombre.length > 0 && this.nDescripcion.length > 0 && this.nPrecio.length > 0) {

				this.productos.push({
					nombre: this.nNombre,
					descripcion: this.nDescripcion,
					precio: this.nPrecio,
					status: false
				});

				this.nNombre = '';
				this.nDescripcion = '';
				this.nPrecio = '';
				this.error = '';



			} else {

				this.error = 'Campo requerido';
			}
		},
		changeStatus(index) {
			this.productos[index].status = !this.productos[index].status;
		},
		editTask(index) {
			// Utilizamos el spread-operator para crear una copia del elemento seleccionado
			// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Spread_operator
			// Esto se realiza para evitar la referencia entre el elemento seleccionado y editTodo
			// Si solo hicieramos this.editTodo = this.todos[index], cada vez que editemos editTodo cambiara
			// automaticamente nuestro arreglo, lo cual no queremos en este caso
			this.editProducto = {
				...this.productos[index]
			};
			// Guardamos el index para mostrar el input con el v-if en el HTML
			this.editProducto = index;
		},
		saveTask(status) {
			// Si status es true guardamos los cambios
			if (status) {
				this.productos[this.editIndex].description = this.editProducto.description;
			}
			this.editProducto = -1;
		},
		deleteProducto(index) {
			this.producto.splice(index, 1);
		}


	},
})
