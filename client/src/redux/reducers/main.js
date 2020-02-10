const initialState = {
  menuLinks: [
    { path: '/current', title: 'Bieżące' },
    { path: '/finished', title: 'Wyprodukowane' },
    { path: '/transported', title: 'Wywiezione' },
    { path: '/canceled', title: 'Anulowane' },
    { path: '/all', title: 'Wszystkie' },
    { path: '/stats', title: 'Statystyki' },
    { path: '/register', title: 'Register' },
    { path: '/login', title: 'Login' }
  ]
};

//// Reducer
export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
