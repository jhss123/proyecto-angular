/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */

import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

	constructor() { }

	doLogin(data: any) {
		if (data.email == "admin@upds.net.bo" && data.password == "admin123") {
			return {
				code: 200,
				message: "Inicio de Sesion Correcto",
				data: data
			};
		} else {
			return {
				code: 503,
				message: "Credenciales Invalidas",
				data: null
			};
		}
	}

	// doRegister(data){
	// 	return this.http.post('user-add.php',data);	
	// }
}

/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */