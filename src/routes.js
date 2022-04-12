export default [
    {
        name: 'Home',
        path: '/',
        component: require('@/pages/HomePage').default,
    },
    {
        name: 'Basic',
        path: '/basic',
        component: require('@/pages/BasicPage').default,
    }
]