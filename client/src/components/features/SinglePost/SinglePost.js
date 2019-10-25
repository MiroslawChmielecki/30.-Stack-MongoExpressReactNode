import React from "react";
import { PropTypes } from "prop-types";

import Spinner from "../../common/Spinner/Spinner";
import Alert from "../../common/Alert/Alert";
import HtmlBox from "../../common/HtmlBox/HtmlBox";
import SmallTitle from "../../common/SmallTitle/SmallTitle";
import { BASE_URL } from "../../../config";
import { withRouter } from "react-router-dom";

import { FacebookProvider, Comments, ShareButton } from "react-facebook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

import "./SinglePost.css";

class SinglePost extends React.Component {
  componentDidMount() {
    const { loadPost, id, resetRequest } = this.props;
    loadPost(id);
    resetRequest();
  }

  render() {
    const { request, post, location } = this.props;
    const { pending, success, error } = request;

    if (pending === false && success === true && post !== null) {
      return (
        <article>
          <SmallTitle>{post.title}</SmallTitle>
          <FacebookProvider appId="603320293534637">
            <ShareButton
              className="facebook-share-button"
              href={`${BASE_URL}/${location.pathname}`}
            >
              <FontAwesomeIcon
                icon={faFacebookSquare}
                className="facebook-icon"
              />
              Share on facebook
            </ShareButton>
          </FacebookProvider>
          <p>Author: {post.author}</p>
          <HtmlBox>{post.content}</HtmlBox>
          <FacebookProvider appId="603320293534637">
            <Comments href={`${BASE_URL}${location.pathname}`} />
          </FacebookProvider>
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
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })
  ),
  loadPost: PropTypes.func.isRequired
};

export default withRouter(props => <SinglePost {...props} />);
