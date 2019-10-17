import React from "react";
import { PropTypes } from "prop-types";
import PostsList from "../PostsList/PostsList";
import Spinner from "../../common/Spinner/Spinner";
import Alert from "../../common/Alert/Alert";

class Posts extends React.Component {
  componentDidMount() {
    const { loadPosts } = this.props;
    loadPosts();
  }

  render() {
    const { posts, request } = this.props;
    const { pending, success, error } = request;

    if (pending === false && success === true && posts.length > 0)
      return <PostsList posts={posts} />;
    else if (pending === true || success === null) return <Spinner />;
    else if (pending === false && error !== null)
      return <Alert variant="error">{error}</Alert>;
    else if (pending === false && success === true && posts.length === 0)
      return <Alert variant="info">No posts</Alert>;
    else {
      return <Alert variant="info">Something went wrong....</Alert>;
    }
  }
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })
  ),
  loadPosts: PropTypes.func.isRequired
};

export default Posts;
