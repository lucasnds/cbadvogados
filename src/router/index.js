import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/HomePrincipal.vue'


const routes = [{
        path: '/',
        name: 'HomePrincipal',
        component: Home
    },
    {
        path: '/sobrenos',
        name: 'SobreNos',
        component: () =>
            import ('../views/SobreNos.vue')
    },
    {
        path: '/areadeatuacao',
        name: 'ÁreaDeAtuação',
        component: () =>
            import ('../views/AreaDeAtuacao.vue')
    },
    {
        path: '/politicadeprivacidade',
        name: 'PoliticaDePrivacidade',
        component: () =>
            import ('../views/PoliticaDePrivacidade.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router