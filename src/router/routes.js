const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/customers', component: () => import('pages/CustomerList.vue') },
      { path: '/login', component: () => import('pages/LoginPage.vue') },
      { path: '/signup', component: () => import('pages/SignupPage.vue') },
      { path: '/features', component: () => import('pages/FeaturesPage.vue') },
      { path: '/pricing', component: () => import('pages/PricingPage.vue') },
      { path: '/settings', component: () => import('pages/SettingsPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
