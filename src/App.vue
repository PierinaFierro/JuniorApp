<template>
        <div id = "app">
            <!-- Ajustes barra de estado-->
            <div class="Bar">
                <!-- Implementación símbolos dentro de la barra de estado-->
                <b-navbar type="dark">
                    <ul class="nav navbar-nav ml-auto">
                        <b-icon icon="square-fill" style="color: #ff7172;" scale = "0.65" aria-hidden="true"></b-icon>
                        <b-icon icon="circle-fill" style="color: #ff7172;" scale = "0.65" aria-hidden="true"></b-icon>
                        <b-icon icon="triangle-fill" style="color: #ff7172;" rotate="180" scale = "0.65" aria-hidden="true"></b-icon>
                    </ul>
                </b-navbar>
            </div>
            <router-view/>
        </div>
</template>

<script>


export default {
    name: 'App',

}

</script>

<style>

    /*Configuración barra de estado*/
    .Bar{
        background: rgb(255, 89, 90);
    }
    
</style>