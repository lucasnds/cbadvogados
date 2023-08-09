import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(), // Alterado para createWebHistory
  routes: [
    {
      path: '/',
      name: 'HomePrincipal',
      component: () =>
        import('../views/HomePrincipal.vue')
    },
    {
      path: '/sobrenos',
      name: 'SobreNos',
      component: () =>
        import('../views/SobreNos.vue')
    },
    {
      path: '/areadeatuacao',
      name: 'ÁreaDeAtuação',
      component: () =>
        import('../views/AreaDeAtuacao.vue')
    },
    {
      path: '/politicadeprivacidade',
      name: 'PoliticaDePrivacidade',
      component: () =>
        import('../views/PoliticaDePrivacidade.vue')
    },
    {
      path: '/contato',
      name: 'contatoadv',
      component: () =>
        import('../views/ContatosAdv.vue')
    }
  ]
});

export default router;
