<template>
  <div>
    <header>
      <!-- Ajustes barra de navegación-->
      <div class="Navbar">
        <b-navbar type="dark">

          <!--Ajustes botón flecha-->
          <div class = "Button">
              <a href="/">
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

    <!-- Integración mensaje acerca de la pantalla-->
    <div class="Informacion">
      <strong>Registrar nueva visita</strong>
    </div>

    <!-- Imagen-->
    <div class = "Imagen mx-auto">
      <b-img :src="require('@/assets/VisitanteFrecuente1.png')" fluid alt="center image"></b-img>
    </div>  

    <div class = "Pantalla"></div>
  
    <!-- Creación botón favoritos-->
    <div class="Favoritos">
      <b-button disabled block variant="light" class="mb-2" text-decoration-none>
        <b-icon icon="star-fill" style="color: #efb810;" aria-hidden="true"></b-icon>
          <strong>Favoritos</strong>
        <b-icon class="ml-auto" icon="chevron-right" aria-hidden="true"></b-icon>
      </b-button>
    </div>

    <!-- Creación botón nuevo visitante-->
    <div class="NuevoVisitante">
      <a href="/nuevovisitanteuno">
        <b-button block variant="light" class="mb-2" text-decoration-none>
          <b-icon icon="person-plus" aria-hidden="true"></b-icon>
            <strong>Nuevo visitante</strong>
          <b-icon icon="chevron-right" aria-hidden="true"></b-icon>
        </b-button>
      </a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'VisitanteFrecuente1'
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

  /*Configuración texto información para el usuario*/
  .Informacion{
    padding-top: 10%;
    font-weight:900;
    line-height: 30px;
    font-family: 'Jost', sans-serif;
    font-size: 30px;
    text-align: center;
    margin-left:12%;
    margin-right:12%;
  }

  /*Configuración imagen*/
  .Imagen{
    padding-top: 20px;
    width: 230px;
  }

  /*Configuración espacio*/
  .Pantalla{
    padding:30px
  }

  /*Configuración botón favoritos*/
  .Favoritos{
    margin-left:3%;
    margin-right:3%;
    font-family: 'Jost', sans-serif;
    font-weight:900;
    box-shadow: 0px 5px 5px rgba(44, 44, 44, 0.25);
  }

  /*Configuración botón nuevo visitante*/
  .NuevoVisitante{
    margin-left:3%;
    margin-right:3%;
    font-weight:900;
    font-family: 'Jost', sans-serif;
    box-shadow: 0px 5px 5px rgba(44, 44, 44, 0.25)
  }

</style>