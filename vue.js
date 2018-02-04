var app = new Vue({
	el: '#app',
	data: {
		titulo: 'Lista de Tareas',
		tareas: [
			{
				texto: 'Aprender Vue.js',
				terminada: false
			},
			{
				texto: 'Aprender Angular 2',
				terminada: false
			},
			{
				texto: 'Aprender Ionic 2',
				terminada: false
			},
		],
		nuevaTarea: ''
	},
	methods : {
		agregarTarea: function(){
			var texto = this.nuevaTarea.trim();
			if(texto){
				this.tareas.push({
					texto: texto,
					terminada: false
				});
			}
			this.nuevaTarea= '';
		},
		borrarTarea: function(indice){
			this.tareas.splice(indice,1);
		}
	}
})