// takes in 2 things:

// 1. the action.
// 2. copy of current state

//what happenened? actionn.... and here is store

function posts(state = [], action) {

  switch (action.type) {
    case 'INCREMENT_LIKES':
      const i = action.index;
      console.log('incrementing likes');
      return [
        ...state.slice(0, i),
        {
          ...state[i],
          likes: state[i].likes + 1
        },
        ...state.slice(i + 1)
      ];
      //break;
    default:
      return state;
  }

}

export default posts;
