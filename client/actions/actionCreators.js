//ACTIONS ARE OBJECTS
// what happened?
// what needs to change
// send only the info you need for each ACTIONS
//

//increment likes
export function increment(index) {
	console.log('dispatching increment');
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}
// add comments
export  function addComment(postId, author, comment) {
  //console.log('dispatching addComment ', postId, author, comment);
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

//remove comment
export function removeComment(postId, i) {
	console.log('removeComment ', postId);
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}
