import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends React.Component {
//const Single = React.createClass({
  render() {
    const { postId } = this.props.params;
    const i = this.props.posts.findIndex((post) =>
      post.code === postId); //need poly fill in older browsers
    const post = this.props.posts[i];
    const postComments = this.props.comments[postId] || [];

    return (
      <div className='single-photo'>
        <Photo i={i} post={post} {...this.props}/>
        <Comments postComments={postComments}  {...this.props}/>
      </div>
    );
  }
//});
};
Single.propTypes = {
  addComment: React.PropTypes.func,
  removeComment: React.PropTypes.func,
  increment: React.PropTypes.func,

  comments: React.PropTypes.object,
  history: React.PropTypes.object.isRequired,
  location: React.PropTypes.object.isRequired,


  params: React.PropTypes.object.isRequired,

  posts: React.PropTypes.array,
  route: React.PropTypes.object.isRequired,
  routeParams: React.PropTypes.object.isRequired,
  routes: React.PropTypes.array.isRequired

}

export default Single;
