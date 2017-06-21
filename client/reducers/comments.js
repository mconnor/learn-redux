// reducers do editing of state -takes in 2 things:

// 1. the action.
// 2. copy of current state

// all reducers will run when an action is dispatched


//what happenened? actionn.... and here is store
function postComments(state =[], action) {
	console.log('postComments');
	console.log(action);
	switch (action.type) {
		case 'ADD_COMMENT':
			return [...state, {
				user: action.author,
				text: action.comment
			}];
		case 'REMOVE_COMMENT':
			console.log('removing content');
			return [
				...state.slice(0, action.i),
				...state.slice(action.i + 1)
			];
			break;

		default:
			return state;

	}
  console.log(state, action);
  return state;
}
function comments(state =[], action) {
  if(typeof action.postId !== 'undefined' ) {
		return {
			...state,
			[action.postId]: postComments(state[action.postId], action)
		}
	}
  return state;
}

export default comments;
