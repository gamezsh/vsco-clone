import User from '../../models/user';

export default {
  user: async (_, { _id, username }, { req }) => {
    console.log(_)
    const _user = await User.findOne({ $or: [
      { _id: _.user_id }
    ]});
    return _user;
  }
}