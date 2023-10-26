/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */

import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

// Services
import { StudentService } from '../../../services/student/student.service';
import { routerTransition } from '../../../services/config/config.service';

@Component({
	selector: 'app-student-list',
	templateUrl: './student-list.component.html',
	styleUrls: ['./student-list.component.css'],
	animations: [routerTransition()],
	host: { '[@routerTransition]': '' }
})

export class StudentListComponent implements OnInit {
	studentList: any;
	studentListData: any;
	filterData: string = '';
	constructor(private studentService: StudentService, private toastr: ToastrService) { }
	// Call student list function on page load 
	ngOnInit() {
		this.getStudentList();
	}

	// Get student list from services
	getStudentList() {
		let studentList = this.studentService.getAllStudents();
		this.success(studentList)
	}

	// Get student list success
	success(data: any) {
		this.studentListData = data.data;
		for (var i = 0; i < this.studentListData.length; i++) {
			this.studentListData[i].name = this.studentListData[i].first_name + ' ' + this.studentListData[i].last_name;
		}
	}

	// Delete a student with its index
	deleteStudent(index: number) {
		// Obtén el estudiante por su índice
		const student = this.studentListData[index];
  
		// Muestra una confirmación con el nombre del estudiante
		const r = confirm(`¿Estás seguro de eliminar a ${student.name}?`);
		
		if (r === true) {
			// Elimina al estudiante usando el servicio
		  const studentDelete = this.studentService.deleteStudent(index);
		  if (studentDelete) {
			// Muestra una notificación de éxito
			this.toastr.success("Éxito", "Estudiante eliminado");
		  }
		  // Actualiza la lista de estudiantes
		  this.getStudentList();
		
		}
	}
}
/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */
