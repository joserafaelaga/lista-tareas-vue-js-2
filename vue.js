//Lista de tareas
var data = {
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
}

//Componente de título
Vue.component('titulo',{
	template: '<h2>{{ titulo }}</h2>',
	data: function(){
		//Retornamos un objeto
		return { titulo: 'Lista de Tareas' }
	}
})


//Componente para nueva tarea
Vue.component('nueva-tarea',{
	template: `
		<div class="input-group">	
			<input type="text" placeholder="Escribe una nueva tarea" v-model="nuevaTarea" class="form-control" v-on:keyup.enter="agregarTarea()">
			<span class="input-group-btn">
				<button type="button" class="btn btn-primary" v-on:click="agregarTarea()">Agregar</button>
			</span>			
		</div>
	`,
	methods: {
		agregarTarea: function(){
			var texto = this.nuevaTarea.trim();
			if(texto){
				this.tareas.push({
					texto: texto,
					terminada: false
				});
			}
			this.nuevaTarea= '';
		}
	},
	data: function(){
		return data;
	}
})

//Componente lista de tareas
Vue.component('lista-tareas',{
	template: `
		<ul class="list-group">	
			<li class="list-group-item" v-bind:class="{terminada: tarea.terminada}" v-for="(tarea,indice) in tareas">	
				{{ tarea.texto }}
				<span class="pull-right">
				<button type="button" class="btn btn-success btn-xs glyphicon glyphicon-ok" v-on:click="tarea.terminada = !tarea.terminada">
				</button>
				<button type="button" class="btn btn-danger btn-xs glyphicon glyphicon-remove" v-on:click="borrarTarea(indice)">
				</button>
				</span>
			</li>
		</ul>
	`,
	methods : {
		borrarTarea: function(indice){
			this.tareas.splice(indice,1);
		}
	},
	data: function(){
		return data;
	}
})


var app = new Vue({
	el: '#app',
	data: data
})