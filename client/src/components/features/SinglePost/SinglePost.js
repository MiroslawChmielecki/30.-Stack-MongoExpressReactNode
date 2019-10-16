import React from "react";
import { PropTypes } from "prop-types";

import Spinner from "../../common/Spinner/Spinner";
import Alert from "../../common/Alert/Alert";
import HtmlBox from "../../common/HtmlBox/HtmlBox";
import SmallTitle from "../../common/SmallTitle/SmallTitle";

class SinglePost extends React.Component {
  componentDidMount() {
    const { loadPost, id } = this.props;
    loadPost(id);
  }

  render() {
    const { request, post } = this.props;
    const { pending, success, error } = request;

    if (pending === false && success === true && post !== null) {
      return (
        <article>
          <SmallTitle>{post.title}</SmallTitle>
          <HtmlBox>{post.content}</HtmlBox>
        </article>
      );
    } else if (pending === true || success === null) {
      return <Spinner />;
    } else if (pending === false && error !== null) {
      return <Alert variant="error">{error}</Alert>;
    } else if (pending === false && success === true && post === null) {
      return <Alert variant="info">No posts</Alert>;
    } else {
      return <Alert variant="info">Something went wrong!</Alert>;
    }
  }
}

SinglePost.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })
  ),
  loadPost: PropTypes.func.isRequired
};

export default SinglePost;
