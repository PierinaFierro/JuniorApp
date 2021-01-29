<template>
  <div>
    <header>
      <!-- Ajustes barra de navegación-->
      <div class="Navbar">
        <b-navbar type="dark">

          <!--Ajustes flecha atrás-->
          <div class = "Button">
            <a href="/nuevovisitantecuatro">
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
    </header>

    <!-- Integración mensaje para el usuario-->
    <div class="Informacion">
      ¡Carlos ya está listo!
    </div>

    <!-- Mensaje secundario para el usuario-->
    <div class="Informacion2">
      <small>Necesitará este código para poder ingresar al condominio, recuerda enviarlo</small>
    </div>

    <!-- Imagen-->
    <div class = "Imagen mx-auto">
      <b-img :src="require('@/assets/CodigoQR.png')" fluid alt="center image"></b-img>
    </div>  
  
    <!-- Creación botón favoritos-->
    <div class="RedesSociales">
        <i class="fa fa-whatsapp fa-2x fa-fw" aria-hidden="true"></i>
        <i class="fa fa-download fa-2x fa-fw" aria-hidden="true"></i>
        <i class="fa fa-envelope fa-2x fa-fw" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NuevoVisitanteCinco'
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

  /*Configuración texto información para el usuario*/
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

    /*Configuración texto información para el usuario*/
    .Informacion2{
        padding-top: 12px;
        text-align: center;
        line-height: 15px;
        font-family: 'Jost', sans-serif;
        margin-left: 12%;
        margin-right: 12%;
    }

    /*Configuración imagen*/
    .Imagen{
        padding-top: 35px;
        width: 230px;
        /*align-content: center;
        margin-left: 12%;
        margin-right: 4%;*/
    }

    /*Configuración íconos redes sociales*/
    .RedesSociales{
        padding-top: 20px;
        margin: auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
</style>