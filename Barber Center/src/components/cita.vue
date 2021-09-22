<template> 
  <div class="container-fluid">
        <div class="row justify-content-center mt-md-5 mt-sm-5 mt-xs-5">
    
            <div class="col mt-5">
                <div class="card" Id="caja_mem">
                    <div class="d-flex justify-content-center p-2">
                        <img src="../assets/Logo_barber.png" width="200em " height="200em" id="mem_img" />
                    </div>
                    <div class="col-lg-12 col-xs-12" style="background-color: rgba(205, 248, 253, 0.8);">
                        <div class="row justify-content-center mt-md-5 mt-sm-5 mt-xs-5">

                            <!-- encabezados -->
                            <div class="encabezado justify-content-center col-md-4">
                                BARBERO
                            </div>
                            <div class="encabezado justify-content-center col-md-4">
                                FECHA
                            </div>

                            <div class="encabezado justify-content-center col-md-4">
                                HORARIO
                            </div>

                            <!-- Seleccionadores -->
                                <!-- Barberos -->
                            <div class="justify-content-center col-md-4 mt-md-5 mt-sm-5 mt-xs-5">
                                <label><input type="checkbox" id="cbox1" value="first_checkbox"> Danny Campos</label><br>
                                <label><input type="checkbox" id="cbox1" value="first_checkbox"> Andrés Camacho</label><br>
                                <input type="checkbox" id="cbox2" value="second_checkbox"> <label for="cbox2">William Sabi</label>

                            </div>
                                <!-- Calendario -->
                            <div class="justify-content-center col-md-4 mt-md-5 mt-sm-5 mt-xs-5">
                                <label for="start">Start date:</label>

                                <input type="date" id="start" name="trip-start"
                                    value="2021-09-10"
                                    min="2021-01-01" max="2021-12-31">
                            </div>
                                <!-- hora -->
                            <div class="justify-content-center col-md-4 mt-md-5 mt-sm-5 mt-xs-5">
                                <label for="horas">Selecciona la hora:</label>
                                    <select name="horas" id="horas">
                                        <option value="">7:00 A.M</option>
                                        <option value="">8:00 A.M</option>
                                        <option value="">9:00 A.M</option>
                                        <option value="">10:00 A.M</option>
                                        <option value="">11:00 A.M</option>
                                        <option value="">2:00 P.M</option>
                                        <option value="">3:00 P.M</option>
                                        <option value="">4:00 P.M</option>
                                        <option value="">5:00 P.M</option>
                                    </select>

                            </div>
                            <!-- Asignar -->
                            <div class="justify-content-center col-md-12 mt-md-5 mt-sm-5 mt-xs-5" id="Asignar">
                                <button type="button" onclick="alert('La confirmación de la cita se hará mediante el correo eléctronico.')">Asignar Cita</button>
                            </div>
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
}
</style>