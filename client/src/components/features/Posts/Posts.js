import React from "react";
import { PropTypes } from "prop-types";
import PostsList from "../PostsList/PostsList";
import Spinner from "../../common/Spinner/Spinner";
import Alert from "../../common/Alert/Alert";
import Pagination from "../../common/Pagination/Pagination";

class Posts extends React.Component {
  componentDidMount() {
    const {
      loadPostsByPage,
      initialPage,
      postsPerPage,
      resetRequest
    } = this.props;
    resetRequest();
    loadPostsByPage(initialPage || 1, postsPerPage);
  }

  loadPostsPage = page => {
    const { loadPostsByPage, postsPerPage } = this.props;
    loadPostsByPage(page, postsPerPage);
  };

  render() {
    const { posts, request, pages, pagination, presentPage } = this.props;
    const { pending, success, error } = request;
    const { loadPostsPage } = this;

    if (
      pending === false &&
      success === true &&
      posts.length > 0 &&
      pagination === true
    )
      return (
        <div>
          <PostsList posts={posts} />
          <Pagination
            pages={pages}
            onPageChange={loadPostsPage}
            initialPage={presentPage}
          />
        </div>
      );
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
  loadPostsByPage: PropTypes.func.isRequired,
  resetRequest: PropTypes.func.isRequired
};

Posts.defaultProps = {
  initialPage: 1,
  postsPerPage: 10,
  pagination: true
};

export default Posts;
