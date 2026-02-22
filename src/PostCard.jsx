const PostCard = ({ post, user, comments }) => {
  return (
    <div className="card">
      <div className="user-badge">{user?.name} (@{user?.username})</div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      
      <div className="comments-box">
        <h4>Комментарии ({comments.length}):</h4>
        {comments.slice(0, 2).map(comment => (
          <div key={comment.id} className="comment">
            <strong>{comment.email}:</strong> {comment.body.substring(0, 50)}...
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostCard;