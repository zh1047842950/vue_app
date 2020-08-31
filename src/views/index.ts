// const Home = ()=>import('./home')
// const Mall = ()=>import('./mall')
// const About = ()=>import('./about')

const Home = (resolve: any) => {
    require(['./home/index.vue'], resolve)
}
const Mall = (resolve: any) => {
    require(['./mall/index.vue'], resolve)
}
const About = (resolve: any) => {
    require(['./about/index.vue'], resolve)
}

// import Home from './home'
// import Mall from './mall'
// import About from './about'

export {
    Home,
    Mall,
    About
}
