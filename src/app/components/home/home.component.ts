/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */

// Importación de módulos y clases desde Angular
import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

// Importación de componentes
import { StudentListComponent } from '../student/list/student-list.component';
import { StudentDetailsComponent } from '../student/details/student-details.component';
import { StudentAddComponent } from '../student/add/student-add.component';

// Importación del servicio de animaciones de enrutamiento
import { routerTransition } from '../../services/config/config.service';

@Component({
	selector: 'app-home', // Selector del componente
	templateUrl: './home.component.html', // Ruta de la plantilla HTML asociada al componente
	styleUrls: ['./home.component.css'], // Rutas de los estilos CSS asociados al componente
	animations: [routerTransition()], // Configuración de animaciones de enrutamiento
	host: { '[@routerTransition]': '' } // Animaciones aplicadas al componente
})


// Clase del componente HomeComponent
export class HomeComponent implements OnInit {
	active: string; // Variable para rastrear la ruta activa en la barra lateral

	// Constructor del componente, inyecta el enrutador y el servicio Toastr
	constructor(private router: Router, private toastr: ToastrService) {
		this.active = '';

		// Suscripción a eventos del enrutador para detectar cambios en las rutas
		this.router.events.subscribe((val) => {
			this.routeChanged(val);
		});
	}

	ngOnInit() {
	}

	// Función para detectar cambios en la ruta y actualizar el menú activo en la barra lateral
	routeChanged(val: any) {
		this.active = val.url;
	}

	// Función para cerrar la sesión del usuario
	logOut() {
		this.toastr.success('Éxito', "Sesión Finalizada");
		localStorage.removeItem('userData'); // Elimina los datos del usuario almacenados localmente
		this.router.navigate(['/login']); // Redirige al usuario a la página de inicio de sesión
	}
}

// Definición y exportación de las rutas hijas del componente HomeComponent
export const homeChildRoutes: Routes = [
	{
		path: '', // Ruta vacía (página principal)
		component: StudentListComponent // Componente de lista de estudiantes
	},
	{
		path: 'add', // Ruta 'add' para agregar un nuevo estudiante
		component: StudentAddComponent // Componente de agregar estudiante
	},
	{
		path: 'update/:id', // Ruta 'update/:id' para actualizar un estudiante específico
		component: StudentAddComponent // Componente de agregar estudiante (se utiliza para actualizar también)
	},
	{
		path: 'detail/:id', // Ruta 'detail/:id' para ver detalles de un estudiante
		component: StudentDetailsComponent // Componente de detalles de estudiante
	}
];

/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */
