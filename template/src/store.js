export default {
  app: {
    name: 'My app',
    drawer: {
      show: false,
      items: [
        {icon: 'home', title: 'Inicio', to: '/'},
        {icon: 'list', title: 'Categorías', to: '/categorias'},
        {type: 'divider'},
        {icon: 'shopping_cart', title: 'Mi Carrito', to: '/carrito'}
      ]
    },
    footer: {
      active: 'favoritos',
      items: [
        {value: 'historial', title: 'Historial', icon: 'history'},
        {value: 'favoritos', title: 'Favoritos', icon: 'favorite'},
        {value: 'lugares', title: 'Lugares', icon: 'place'}
      ]
    }
  }
}
