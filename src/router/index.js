import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/HomePrincipal.vue'
import SobreNos from '../views/SobreNos.vue'
const router = createRouter({
    history: createWebHashHistory(),
    routes:[{
        path: '/',
        name: 'HomePrincipal',
        component: Home
    },
    {
        path: '/sobrenos',
        name: 'SobreNos',
        component: SobreNos
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
    },
    {
        path: '/contato',
        name: 'contatoadv',
        component: () =>
            import ('../views/ContatosAdv.vue')
    }
    ]
})




export default router