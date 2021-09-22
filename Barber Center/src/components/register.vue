<template>
    <!-- Mi HTML-->
    <div class="contenedor">
      <h1 class="sesion">Iniciar Sesión</h1>
      <hr class="border">
      <div id="app">
        <form action="" method="POST" class="formulario" name="login">

			<div class="form-group">

				<i class="icono izquierda fa fa-user-circle" aria-hidden="true"></i><input type="text" name="usuario" class="usuario" placeholder="Usuario">

			</div>

			<div class="form-group">

				<i class="icono izquierda fa fa-envelope" aria-hidden="true"></i><input type="text" name="correo" class="usuario" placeholder="Correo">

			</div>

			<div class="form-group">

				<i class="icono izquierda fa fa-phone-square-alt" aria-hidden="true"></i><input type="text" name="telefono" class="usuario" placeholder="Teléfono">

			</div>

			<div class="form-group">

				<i class="icono izquierda fa fa-unlock" aria-hidden="true"></i><input type="password" name="password" class="password" placeholder="Contraseña">

			</div>

			<div class="form-group">

				<i class="icono izquierda fa fa-unlock-alt" aria-hidden="true"></i><input type="password" name="password2" class="password_btn" placeholder="Repetir Contraseña"><i class="submit-btn fa fa-arrow-right" onclick="login.submit()"></i>

			</div>

            <div class="errores">
					<ul>
						{{errores}}
					</ul>
				</div> 

		</form>
      </div>
      <p class="texto-registrate">
        Ya tengo una cuenta
        <router-link to="/sesion">Iniciar Sesión</router-link>
      </p>
          <p class="texto-registrate">
        Página principal
        <router-link to="/">Volver</router-link>
      </p>
    </div>

</template> 

<script> 
import axios from "axios"; 
 
export default { 
    name: "App",
  data() { 
    return { 
      student: { 
        guess: "",
        message: "",
        errores: "", 
      }, 
    }; 
  }, 
  methods: { 
      check() {
      if (this.usuario !== this.contra) {
        this.message = "Felicidades, Crack";
        this.errores = "Felicidades, Crack";
      } else {
        this.message = "Naaaah, ni cerca";
        this.errores = "Los datos son incorrectos";
      }
    },
    handleSubmitForm() { 
      let apiURL = "http://localhost:4000/api/create-student"; 
 
      axios 
        .post(apiURL, this.student) 
        .then(() => { 
          this.$router.push("/view"); 
          this.student = { 
            name: "", 
            email: "", 
            phone: "", 
          }; 
        })
        .catch((error) => { 
          console.log(error); 
        }); 
    }, 
  }, 
}; 
</script>