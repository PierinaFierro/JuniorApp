import vueRouter from 'vue-router'
import Hud1 from './components/Hud1'
import VisitanteFrecuente1 from './components/VisitanteFrecuente1'
import NuevoVisitanteUno from './components/NuevoVisitanteUno'
import NuevoVisitanteDos from './components/NuevoVisitanteDos'
import NuevoVisitanteTres from './components/NuevoVisitanteTres'
import NuevoVisitanteCuatro from './components/NuevoVisitanteCuatro'
import NuevoVisitanteCinco from './components/NuevoVisitanteCinco'

const router = new vueRouter({

    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: "Hud1",
            component: Hud1
        },
        {
            path: '/visitantefrecuente1',
            name: "VisitanteFrecuente1",
            component: VisitanteFrecuente1
        },
        {
            path: '/nuevovisitanteuno',
            name: "NuevoVisitanteUno",
            component: NuevoVisitanteUno
        },
        {
            path: '/nuevovisitantedos',
            name: "NuevoVisitanteDos",
            component: NuevoVisitanteDos
        },
        {
            path: '/nuevovisitantetres',
            name: "NuevoVisitanteTres",
            component: NuevoVisitanteTres
        },
        {
            path: '/nuevovisitantecuatro',
            name: "NuevoVisitanteCuatro",
            component: NuevoVisitanteCuatro
        },
        {
            path: '/nuevovisitantecinco',
            name: "NuevoVisitanteCinco",
            component: NuevoVisitanteCinco
        },
    ]
})
export default router