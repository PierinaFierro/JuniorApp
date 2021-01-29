<template>
  <div>
    <!-- Ajustes barra de estado-->
    <header>
        <!-- Ajustes barra de navegación-->
        <div class="Navbar">
            <b-navbar type="dark">
                <!--Ajustes botón flecha-->
                <div class = "Button">
                    <a href="/visitantefrecuente1">
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

    <!-- Información de la página para el usuario-->
    <div class="Detalles1">
        <strong>Datos de la visita</strong> 
    </div>

    <!-- Creación formulario-->
    <div class = "Formularios">
        <b-form>
            <!-- Barra de ingreso nombre y apellido-->
            <b-form-group id="Nombre" label="Nombre y apellido" label-for="nombreapellido">
                <b-form-input
                    id="nombreapellido"
                    v-model="form.name"
                    placeholder="Carlos Villa"
                ></b-form-input>
            </b-form-group>
            <!-- Barra de ingreso DNI-->
            <b-form-group id="DNI" label="DNI" label-for="dni">
                <b-form-input
                    id="dni"
                    v-model="form.dni"
                    placeholder="999 999 999"
                ></b-form-input>
            </b-form-group>
        </b-form>
    </div>
    
    <div class = "Pantalla"></div>

    <!-- Botón de siguiente-->
    <a href="/nuevovisitantedos"><input type="submit" value="Siguiente"/></a>

  </div>
</template>

<script>

    export default {
        name: 'NuevoVisitanteUno',
        data() {
            return {
                form: {
                    name: '',
                    dni: ''
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
        font-family: 'Jost', sans-serif
    }

    /*Configuración texto barra de navegación*/
    .NavText{
        margin-left:3%
    }

    /*Configuración barra de progreso*/
    .ProgressBar{
        background: rgb(255, 89, 90);
        width: 40px
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

    /*Configuración márgenes del formulario*/
    .Formularios{
        font-family: 'Jost', sans-serif;
        padding-top: 20px;
        margin-left:4%;
        margin-right:4%;
    }

    /*Configuración espacio*/
    .Pantalla{
        padding:80px
    }

    /*Configuración botón siguiente*/
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