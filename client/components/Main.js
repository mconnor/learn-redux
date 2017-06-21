import React from 'react';
import {Link} from 'react-router';


//React.cloneElement passes props to child
class Main extends React.Component {
  // const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
};

Main.propTypes = {
  children: React.PropTypes.object.isRequired,
  addComment: React.PropTypes.func.isRequired,
  removeComment: React.PropTypes.func.isRequired,
  increment: React.PropTypes.func.isRequired,
  //
  comments: React.PropTypes.object.isRequired,
  history: React.PropTypes.object.isRequired,
  location: React.PropTypes.object.isRequired,

  params: React.PropTypes.object.isRequired,

  posts: React.PropTypes.array.isRequired,

  route: React.PropTypes.object.isRequired,
  routeParams: React.PropTypes.object.isRequired,
  routes: React.PropTypes.array.isRequired
}
export default Main;
