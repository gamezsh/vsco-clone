import { UserInputError } from 'apollo-server';

import User from '../../models/user';
import Post from '../../models/post';

import jwt from 'jsonwebtoken';

export default {
  me: async (_, param, { req }) => {

    const { userId, isAuth } = req;
    
    if(!isAuth) throw new UserInputError('Not logged...')

    const _me = await User.findOne({ _id: userId })
    return _me;
  },
  feed: async (_, param, { req }) => {
    const { isAuth } = req;
  
    if(!isAuth) throw new UserInputError('Not logged...')

    const _feed = await Post.find()
    return _feed;
  },
  user: async (_, { _id, username }, { req }) => {
    console.log(req.isAuth)
    const _user = await User.findOne({ $or: [
      { _id }, { username }
    ]});
    return _user;
  },
  users: async (_, args, context) => {
    const _users = await User.find();
    return _users;
  },
  userPosts: async (_, { _id }) => {
    const _posts = await Post.find({ user_id: _id });
    return _posts;
  },
  login: async (_, { username, password }) => {

    console.log(username, password)

    const _user = await User.findOne({ $or: [
      { email: username }, { username: username }
    ]});

    if(!_user) {
      throw new UserInputError('User do not exist');
    }

    if(_user.password !== password) {
      throw new UserInputError('Password do not match!');
    }

    const token = jwt.sign({ 
      userId: _user._id,
      email: _user.email,
      username: _user.username
    }, 'myprivatepizzayeah', { expiresIn: '1hr' })

    return {
      userId: _user._id,
      token,
      expiration: 'wrwqerwqer'
    }
  }
}