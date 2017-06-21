import React, { Component } from 'react';
import { Link } from 'react-router';
import Photo from './Photo';

class PhotoGrid extends Component {
 //const PhotoGrid = React.createClass({
  render() {
    return (
      <div className='photo-grid'>
        {this.props.posts.map((post, i) =>
          <Photo {...this.props} key={i} i={i} post={post} />)}
      </div>
    )
  }
};

PhotoGrid.propTypes = {
  addComment: React.PropTypes.func,
  removeComment: React.PropTypes.func,
  increment: React.PropTypes.func,
  comments: React.PropTypes.object,
  history: React.PropTypes.object,
  location: React.PropTypes.object,
  params: React.PropTypes.object,

  posts: React.PropTypes.array,

  route: React.PropTypes.object,
  routeParams: React.PropTypes.object,
  routes: React.PropTypes.array
}

export default PhotoGrid;
