import Post from '../../models/post';

export default {
  posts: async (user) => {
    const _posts = await Post.find({ user_id: user._id });
    return _posts;
  }
}