import PropTypes from 'prop-types';

const Card = ({ post }) => {
  const author = `${post.author} ${post.lastName}`;
  const datePost = post.datePost;

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{author}</p>
      <p>{datePost}</p>
    </div>
  );
};

Card.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    datePost: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
