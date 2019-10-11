import React from "react";
import { PropTypes } from "prop-types";

class PostsCounter extends React.Component {
  componentDidMount() {
    const { loadPosts } = this.props;
    loadPosts();
  }
  render() {
    const { counter } = this.props;

    return <div>{counter > 0 ? `Posts amount: ${counter}` : "No posts"}</div>;
  }
}

PostsCounter.propTypes = {
  counter: PropTypes.number.isRequired
};

export default PostsCounter;
