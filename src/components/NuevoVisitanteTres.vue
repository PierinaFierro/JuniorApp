<template>
    <div>
        <!-- Ajustes barra de estado-->
        <header>
            <!-- Ajustes barra de navegación-->
            <div class="Navbar">
                <b-navbar type="dark">
                    <!--Ajustes flecha atrás-->
                    <div class = "Button">
                        <a href="/nuevovisitantedos">
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
                <!-- Implementación barra de progreso-->
                <b-navbar type="dark"></b-navbar>
            </div>
        </header>
        
            <!-- Mensaje para usuario de la página-->
            <div class="Detalles1">
                ¿Qué vehículo usa?
            </div>

            <!-- Botones tipo de vehículo-->
            <div class = "Iconos h-100">
                <b-button-group id = "Group">
                    <b-button variant="outline-primary"><i class="fa fa-car fa-4x" style="color:#222222;" aria-hidden="true"></i></b-button>
                    <b-button variant="outline-primary"><i class="Cicla fa fa-bicycle fa-4x" style="color:#222222;" aria-hidden="true"></i></b-button>
                    <b-button variant="outline-primary"><i class="fa fa-motorcycle fa-4x" style="color:#222222;" aria-hidden=true></i></b-button>
                </b-button-group>
            </div>
            
            <!-- Barra de ingreso matrícula-->
            <div class="Placa">
                <!-- Barra de ingreso DNI-->
                <small for="matricula">Matricula</small>
                    <b-form-input
                        id="matricula"
                        v-model="form.matricula"
                        placeholder="999 999 999"
                    ></b-form-input>
            </div>
        
        <div class = "Pantalla"></div>
        
        <!-- Botón de siguiente-->
        <a href="/nuevovisitantecuatro"><input type="submit" value="Siguiente"/></a>

    </div>
</template>

<script>

    export default {
      name: 'NuevoVisitanteTres',
      data() {
        return {
            form: {
                matricula: ''
            }
        }
      }
    }

</script>

<style>
    /*Configuración barra de navegación*/
    .Navbar{
        background: rgb(255, 113, 114);
        box-shadow: 0px 5px 5px rgba(44, 44, 44, 0.25);
        font-family: 'Jost', sans-serif;
    }

    /*Configuración texto barra de navegación*/
    .NavText{
        margin-left:3%;
    }

    /*Configuración barra de progreso*/
    .ProgressBar{
        background: rgb(255, 89, 90);
        width: 210px;
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

    /*Configuración botones*/
    .Iconos{
        padding-top: 20px;
        margin: auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    /*Configuración texto formulario*/
    .Placa{
        padding-top: 20px;
        margin-left:4%;
        margin-right:4%;
        font-family: 'Jost', sans-serif;
    }

    /*Configuración espacio*/
    .Pantalla{
        padding-top:170px;
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