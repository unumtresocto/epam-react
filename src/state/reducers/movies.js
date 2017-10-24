const movies = (state = {}, action) => {
  switch (action.type) {
    case 'SEARCH_MOVIE':
      return {

      }
    case 'SELECT_CURRENT_MOVIE':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default movies
