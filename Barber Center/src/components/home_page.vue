<template> 
  <div class="container-fluid">
        <div class="row justify-content-center mt-md-9 mt-sm-9 mt-xs-9">
    
            <div class="col mt-9">
                <div class="card" Id="caja_mem">
                    <div class="d-flex justify-content-center p-2">
                        <img src="../assets/Logo_barber.png" width="200em " height="200em" id="mem_img" />
                    </div>
                    <div class="justify-content-center col-lg-12 col-xs-12" style="background-color: rgba(205, 248, 253, 0.8);">
                        <div class="row justify-content-center mt-md-5 mt-sm-5 mt-xs-5">

                            <!-- Sesiones -->
                            <router-link class="encabezado justify-content-center col-md-9" to="/sesion">
                            <div>
                                Iniciar Sesión
                            </div>
                            </router-link>
                            <router-link class="encabezado justify-content-center col-md-9" to="/registar">
                            <div>
                                Registrarse
                            </div>
                            </router-link>
                            <router-link class="encabezado justify-content-center col-md-9" to="/cita">
                            <div>
                                Pedir Citas
                            </div>
                            </router-link>
                        </div>

                    </div>
                </div>
            </div>
    
        </div>
    </div>
</template> 
 
<script> 
import axios from "axios"; 
 
export default { 
  data() { 
    return { 
      student: { 
        name: "", 
        email: "", 
        phone: "", 
      }, 
    }; 
  }, 
  methods: { 
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

<style> 
.encabezado {
  color: black;
  background: white;
  text-align: center;
  border: 2px solid blue;
  margin-top: 2%;
  margin-bottom: 2%;
  text-decoration: none;
  padding: 3%;
}

.encabezado:hover {
    color: white;
    background: blue;
    border-radius: 10px;
    border-color: darkblue;
}

</style>