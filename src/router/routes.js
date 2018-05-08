export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      {path: '', component: () => import('pages/index')}
    ]
  },
  {
    path: '/tryout',
    component: () => import('layouts/tryout'),
    children: [
      {path: '', component: () => import('pages/TryoutPage')}
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
