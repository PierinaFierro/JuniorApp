<template>
    <div>
        <!-- Ajustes barra de navegación-->
        <div class="Navbar">
            <b-navbar type="dark">
            <!--Ajustes flecha de atrás-->
            <div class = "Button">
                <b-icon icon="arrow-left-short" variant="light" scale = "2.5" aria-hidden="true"></b-icon>
            </div>
            <!--Ajustes título-->
            <div class = "NavText">
                <b-container>
                <b-navbar-brand href="#">Elegir perfil</b-navbar-brand>  
                </b-container>
            </div>
            </b-navbar>
        </div>
    <!-- Integración mensaje para usuario-->
    <div class="Informacion">
        Pantalla solo para elegir perfil, solo para desarrolladores  
    </div>

        <div class = "Pantalla"></div>
    
        <!-- Creación botón propietario -->
        <div class="Propietario">
            <a href="/visitantefrecuente1">
                <b-button block variant="light" class="mb-2" text-decoration-none>
                    <b-icon icon="person" aria-hidden="true"></b-icon>
                        <strong>Propietario</strong>
                    <b-icon icon="chevron-right" aria-hidden="true"></b-icon>
                </b-button>
            </a>
        </div>

        <!-- Creación botón vigilante -->
        <div class="Vigilante">
            <b-button disabled block variant="light" class="mb-2" text-decoration-none>
                <b-icon icon="person" aria-hidden="true"></b-icon>
                    <strong>Vigilante</strong>
                <b-icon icon="chevron-right" aria-hidden="true"></b-icon>
            </b-button>
        </div>
    </div>
    
</template>

<script>

    export default {
        name: 'Hud1',
    }

</script>

<style>

    /*Configuración barra de estado*/
    .Bar{
        background: rgb(255, 89, 90);
    }

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

    /*Configuración texto información usuario*/
    .Informacion{
        padding-top: 10%;
        font-weight:800;
        line-height: 30px;
        font-family: 'Jost', sans-serif;
        font-size: 30px;
        text-align: center;
        margin-left:4%;
        margin-right:4%;
    }

    /*Configuración espacio*/
    .Pantalla{
        padding:120px
    }

    /*Configuración botón de propietario*/
    .Propietario{
        margin-left:3%;
        margin-right:3%;
        font-family: 'Jost', sans-serif;
        font-weight:800;
        box-shadow: 0px 5px 5px rgba(44, 44, 44, 0.25);
    }

    /*Configuración botón de vigilante*/
    .Vigilante{
        margin-left:3%;
        margin-right:3%;
        font-weight:800;
        font-family: 'Jost', sans-serif;
        box-shadow: 0px 5px 5px rgba(44, 44, 44, 0.25)
    }
</style>