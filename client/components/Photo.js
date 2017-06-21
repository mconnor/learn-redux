import React from 'react';
import {Link} from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class Photo extends React.Component {
	
  render() {
    const {post, i, comments} = this.props;
    return (
      <figure className='grid-figure'>
        <div className="grid-photo-wrap">
          <Link to={`/view/${post.code}`}>
            <img src={post.display_src} alt="post.caption" className="grid-photo"/>
          </Link>

          <CSSTransitionGroup transitionName="like"
						transitionEnterTimeout={500}
						transitionLeaveTimeout={500}>
            <span key={post.likes} className="likes-heart">
              {post.likes}
            </span>
          </CSSTransitionGroup>
          <figcapiton>
            <p>{post.caption}</p>
            <div className="control-buttons">
              <button
								onClick={this.props.increment.bind(null, i)}
                className="likes">&hearts;{post.likes}
              </button>
              <Link className='button' to={`/view/${post.code}`}>
                <span className="comment-count">
                  <span className="speech-bubble"></span>
                  {comments[post.code]
                    ? comments[post.code].length
                    : 0}
                </span>
              </Link>
            </div>
          </figcapiton>
        </div>
      </figure>
    )
  }
};

Photo.propTypes = {
  addComment: React.PropTypes.func,
  removeComment: React.PropTypes.func,

  increment: React.PropTypes.func.isRequired,

  comments: React.PropTypes.object.isRequired,

  history: React.PropTypes.object,
  location: React.PropTypes.object,
  params: React.PropTypes.object,

  posts: React.PropTypes.array.isRequired,

  route: React.PropTypes.object,

  routeParams: React.PropTypes.object,
  routes: React.PropTypes.array,

  i: React.PropTypes.number.isRequired,

}

export default Photo;
