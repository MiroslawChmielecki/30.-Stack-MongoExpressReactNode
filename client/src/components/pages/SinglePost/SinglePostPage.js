import React from "react";
import SinglePostContainer from "../../features/SinglePost/SinglePostContainer";

const SinglePostPage = props => (
  <SinglePostContainer id={props.match.params.id} />
);

export default SinglePostPage;
