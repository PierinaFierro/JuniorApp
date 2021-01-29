<template>
  <div>
    <!-- Ajustes barra de estado-->
    <header>
     
        <!-- Ajustes barra de navegación-->
        <div class="Navbar">
            <b-navbar type="dark">
                <!--Ajustes botón flecha-->
                <div class = "Button">
                    <a href="/nuevovisitanteuno">
                      <b-icon icon="arrow-left-short" variant="light" scale = "2.5" aria-hidden="true"></b-icon>
                    </a>
                    

                </div>
                <!--Ajustes título-->
                <div class = "NavText">
                    <b-container>
                    <b-navbar-brand href="#">Registrar visita</b-navbar-brand>  
                    </b-container>
                </div>
            </b-navbar>
        </div>

        <div class="ProgressBar">
            <!-- Implementación símbolos dentro de la barra de estado-->
            <b-navbar type="dark"></b-navbar>
        </div>
    </header>
    
      <!-- Mensaje para usuario de la página-->
      <div class="Detalles1">
          Algunos datos más 
      </div>

      <!-- Inicio formulario -->
      <form class="Datos">

        <!-- Configuración del switch inicial con su respectivo mensaje-->
        <div class="form-row">
          <!-- Mensaje-->
          <div class="col">
            <small for="check-button">Visita de varios días</small>
          </div>
          <!-- Switch primera fila-->
          <div class="Switch1 col-offset">
            <b-checkbox size = "lg" data-onstyle="success" v-model="checked1" name="check-button" switch>
            </b-checkbox>
          </div>
        </div>

        <!-- Configuración de los mensajes referentes a los datepicker-->
        <div class="Mensajes form-row">
          <!-- Mensaje día de inicio checked1 = True-->
          <div class="col" v-if="checked1">
            <small for="datepicker-2">Día de inicio</small>
          </div>

          <!-- Mensaje día de inicio checked1 = False-->
          <div class="col" v-if="!checked1">
            <small for="datepicker-2">Día de visita</small>
          </div>          

          <!-- -->
          <!-- Mensaje día de fin-->
          <div class="col" v-if="checked1">
            <small for="datepicker-2">Día de fin</small>
          </div>
        </div>

        <!-- Configuración datepicker-->
        <div class="form-row">
          <!-- Datepicker fecha de inicio-->
          <div class="col input-group datepicker">
            <b-form-datepicker 
              id="datepicker-1" 
              v-model="checkin" 
              class="mb-2"
              placeholder="Hoy">
            </b-form-datepicker>
          </div>
          <!-- Datepicker fecha de fin-->
          <div class="col input-group datepicker" v-if="checked1">
            <b-form-datepicker 
              id="datepicker-2" 
              v-model="checkout"
              class="mb-2"
              placeholder="Hoy">
            </b-form-datepicker>
          </div>
        </div>

        <!-- Creación barra de selección tipo de visita con su respectivo texto-->
        <div class="form-group">
          <small for="inputState">Tipo de visita</small>
          <select id="inputState" class="form-control">
            <option selected>Social</option>
            <option>...</option>
          </select>
        </div>

        <!-- Configuración del switch final con su respectivo mensaje-->
        <div class="form-row justify-content-between">
          <!-- Mensaje-->
          <div class="col">
            <small for="check-button">¿Viene en coche?</small>
          </div>
          <!-- Switch-->
          <div class="col-offset">
            <b-checkbox size = "lg" v-model="checked2" name="check-button" switch>
            </b-checkbox>
          </div>
        </div>

      </form>
    
    <div class = "Pantalla"></div>
    
    <!-- Botón de siguiente-->
    <a href="/nuevovisitantetres"><input type="submit" value="Siguiente"/></a>

  </div>
</template>

<script>

    export default {
      name: 'NuevoVisitanteDos',
      data() {
        return {
          checkin: '',
          checkout: '',
          checked1: true,
          checked2: true,
        }
      }
    }

</script>

<style>
    /*Configuración barra de navegación*/
    .Navbar{
        background: rgb(255, 113, 114);
        box-shadow: 0px 5px 5px rgba(44, 44, 44, 0.25);
        font-family: 'Jost', sans-serif
    }

    /*Configuración texto barra de navegación*/
    .NavText{
        margin-left:3%
    }

    /*Configuración barra de progreso*/
    .ProgressBar{
        background: rgb(255, 89, 90);
        width: 160px
    }

    /*Configuración texto información para usuario*/
    .Detalles1{
        padding-top: 10%;
        font-weight:800;
        line-height: 30px;
        font-family: 'Jost', sans-serif;
        font-size: 30px;
        text-align: center;
        margin-left:4%;
        margin-right:4%;
    }

    /*Configuración Switches*/
    .Switch1 .active{
      color: #fff;
      background-color: #28a745;
      border-color: #60c076;
    }

    /*Configuración textos de los dos datepicker*/
    .Mensajes{
      padding-top: 6px;
    }

    /*Configuración texto formulario*/
    .Datos{
        padding-top: 20px;
        margin-left:4%;
        margin-right:4%;
        font-family: 'Jost', sans-serif;
    }

    /*Configuración espacio*/
    .Pantalla{
        padding-top:130px
    }

    /*Configuración botón de siguiente*/
    input[type="submit"]{
        font-family: 'Jost', sans-serif;
        font-weight:800;
        width: 290px;
        height: 30px;
        background: rgb(255, 89, 90);
        color:white;
        border:none;
        border-radius: 5px;
        display:block;
        margin-left: auto;
        margin-right: auto;
    }
</style>