/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */

// Importa el decorador Component desde el módulo '@angular/core'
import { Component } from '@angular/core';

// Define un componente llamado 'AppComponent'
@Component({
  // Selector que se utiliza en el HTML para instanciar este componente
  selector: 'app-root',
  // Plantilla HTML asociada al componente
  templateUrl: './app.component.html',
  // Estilos CSS asociados al componente
  styleUrls: ['./app.component.css']
})

// Clase del componente
export class AppComponent {
  // Propiedad 'title' que almacena un título
  title = 'Student Management By Sangwin Gawande';

  // Arreglo de objetos 'studentsList' que almacena información de estudiantes
  studentsList = [
    {	
      id : 1,
      first_name : "Juan",
      last_name : "Martinez",
      email : "jmartinez@gmail.com",
      phone : 66551188,
      department : "Science"
    },
    {
      id : 2,
      first_name : "Luis",
      last_name : "Torres",
      email : "ltorres@gmail.com",
      phone : 74889658,
      department : "Commerce"
    },
    {
      id : 3,
      first_name : "Paula",
      last_name : "Diaz",
      email : "pdiaz@gmail.com",
      phone : 75889658,
      department : "Science"
    },
    {
      id : 4,
      first_name : "Javier",
      last_name : "Castro",
      email : "jcastro@gmail.com",
      phone : 65589748,
      department : "Arts"
    },
    {
      id : 5,
      first_name : "Andrea",
      last_name : "Perez",
      email : "aperez@gmail.com",
      phone : 75856547,
      department : "Engineering"
    }
  ];

  // Constructor del componente
  constructor() {
    // Almacena la lista de estudiantes en el almacenamiento local como una cadena JSON
    localStorage.setItem('students', JSON.stringify(this.studentsList));
  }
}

/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */
