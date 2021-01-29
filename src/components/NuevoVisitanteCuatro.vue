<template>
  <div>
    <!-- Ajustes barra de estado-->
    <header>
     
        <!-- Ajustes barra de navegación-->
        <div class="Navbar">
            <b-navbar type="dark">
                <!--Ajustes botón flecha-->
                <div class = "Button">
                    <a href="/nuevovisitantetres">
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

      <!-- Inicio formulario -->
      <form class="Datos">

        <!-- Información del usuario-->
        <div class="form-row">
          <!-- Nombre-->
          <div class="Detalles1 col">Carlos Villa</div>
          <!-- Editar datos usuario-->
          <div class="Edit1 col-offset">
            <a href="/nuevovisitanteuno">
                <b-icon icon="pencil-fill" variant="dark" scale = "1" aria-hidden="true"></b-icon>
            </a>            
          </div>
        </div>

        <!-- DNI usuario-->
        <div class="DNI">
            <small>DNI<br>999 999 999</small>
        </div>

        <!-- Switch para transporte con o sin vehículo-->
        <div class="Vehiculo form-row">
          <!-- Mensaje-->
          <div class="col">
            <label for="check-button">Vehículo</label>
          </div>
          <!-- Switch primera fila-->
          <div class="Switch1 col-offset">
            <b-checkbox size = "lg" data-onstyle="success" v-model="checked1" name="check-button" switch>
            </b-checkbox>
          </div>
        </div>

        <!-- Medio de transporte-->
        <div class="IconoCarro form-row">
          <!-- Icono carro-->
            <div class="col-2">
                <b-button disabled variant="primary">
                    <i class="fa fa-car fa-1x" aria-hidden="true"></i>
                </b-button>
            </div>
            <div class="Matricula col">
                Matrícula<br> 999 999 999
            </div>
          <!-- Editar medio de transporte-->
          <div class="Edit2 col-offset">
            <a href="/nuevovisitantetres">
                <b-icon icon="pencil-fill" variant="dark" scale = "1" aria-hidden="true"></b-icon>
            </a> 
          </div>
        </div>

        <!-- Switch para seleccionar si se cuenta con o sin acompañante-->
        <div class="Vehiculo form-row">
            <!-- Mensaje-->
            <div class="col">
                <label for="check-button">Acompañantes</label>
            </div>
            <!-- Switch primera fila-->
            <div class="Switch1 col-offset">
                <b-checkbox size = "lg" data-onstyle="success" v-model="checked2" name="check-button" switch>
                </b-checkbox>
            </div>
        </div>

        <!-- Cantidad de acompañantes-->
        <div class="CantidadAcompañantes form-row">
            <!-- Botón de disminuir-->
            <div class="DisminuirAumentar">
                <b-button variant="light" class="mb-2" text-decoration-none>
                    <b-icon icon="dash" aria-hidden="true"></b-icon>
                </b-button>
            </div>
            <!-- Area de texto contador -->
            <div class="Contador">
                <b-form-input disabled v-model="contador" placeholder= "1"></b-form-input>
            </div>
            <!-- Botón de aumentar-->
            <div class="DisminuirAumentar">
                <b-button variant="light" class="mb-2" text-decoration-none>
                    <b-icon icon="plus" aria-hidden="true"></b-icon>
                </b-button>
            </div>
        </div>
        
    </form>
    
    <div class = "Pantalla"></div>

    <!-- Botón recordar en favoritos-->
    <div class="RecordarFavoritos">
        <a href="/nuevovisitantecinco">
            <b-button block variant="light" class="mb-2" text-decoration-none>
                <strong>Recordar en favoritos</strong>
                <b-icon icon="star" style="color: #efb810;" aria-hidden="true"></b-icon>
            </b-button>
        </a>
    </div>
    <!-- Botón de siguiente-->
    <a href="/nuevovisitantecinco"><input type="submit" value="Siguiente"/></a>

  </div>
</template>

<script>

    export default {
      name: 'NuevoVisitanteCuatro',
      data() {
        return {
            contador: "1",
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
        width: 280px
    }

    /*Configuración texto DNI del usuario*/
    .DNI{
        line-height: 13px;
        font-family: 'Jost', sans-serif;
    }

    /*Configuración texto matrícula del usuario*/
    .Matricula{
        line-height: 12px;
        font-size:10px;
        font-family: 'Jost', sans-serif;
        float: left;
    }
    /*Configuración alineación switch y mensaje de acompañante*/
    .Vehiculo{
        padding-top:30px;
    }

    /*Configuración alineación botón editar información vehículo*/
    .Edit2{
        padding-top:10px;
    }

    /*Configuración barra contador acompañantes*/
    .Contador{
        width:37px;
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
        padding-top:90px
    }

    /*Configuración botones aumentar, disminuir*/
    .DisminuirAumentar{
        margin-left:4%;
        margin-right:4%;
        height:37px;
        width:40px;
        box-shadow: 0px 5px 5px rgba(44, 44, 44, 0.25);
    }

    /*Configuración botón recordar en favoritos*/
    .RecordarFavoritos{
        margin-left:4%;
        margin-right:4%;
        font-family: 'Jost', sans-serif;
        font-weight:800;
        box-shadow: 0px 5px 5px rgba(44, 44, 44, 0.25);
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