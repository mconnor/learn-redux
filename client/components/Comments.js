import React from 'react';

class Comments extends React.Component {
  //const Comments = React.createClass({
  constructor(props){
    super(props);
    this.renderComment = this.renderComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  renderComment(comment, i) {
    console.log( i ,comment);
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment"
						onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>&times;</button>
        </p>
      </div>
    );
  }
  handleSubmit(e){
    e.preventDefault();
    console.log('handleSubmit2');
		console.log(this.refs);

    const { postId } = this.props.params; //const postId = this.props.params.postId
    const author = this.refs.author.value;  // get value out of dom
    const comment = this.refs.comment.value;

		//console.log(postId, author, comment);


    this.props.addComment(postId, author, comment);
		this.refs.commentForm.reset();
  }
  render() {
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment)}
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="author" placeholder="author"/>
          <input type="text" ref="comment" placeholder="comment"/>
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
};

Comments.propTypes = {
  postComments: React.PropTypes.array.isRequired,
  params: React.PropTypes.object.isRequired,
  addComment: React.PropTypes.func.isRequired,

  removeComment: React.PropTypes.func,
  increment: React.PropTypes.func,

  comments: React.PropTypes.object.isRequired,

  history: React.PropTypes.object,
  location: React.PropTypes.object,
  posts: React.PropTypes.array,
  route: React.PropTypes.object,
  routeParams: React.PropTypes.object,
  routes: React.PropTypes.array
}
export default Comments;
