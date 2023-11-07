const { userModel } = require('../models/User');
const { errorHandler } = require('../utils/errorHandler');
const { ValidationError } = require('../utils/createValidationError');
const { SECRET } = process.env
const { tokenCreator } = require('../utils/tokenCreator')
const bcrypt = require('bcrypt')

const login = async (req, res) => {

  const { email, password } = req.body;

  try {

    const user = await userModel.findOne({ email });

    const isValid = await bcrypt.compare(password, user.password)

    if (!isValid) {
      return res.status(404).json({ error: 'Email or password is incorrect !' })
    }

    if (!user) {
      return res.status(404).json({ error: 'Email or password is incorrect !' })
    }

    const token = await tokenCreator(user)
    const data = { firstName: user.firstName, lastName: user.lastName, _id: user._id, email: user.email, token }
    res.status(200).json(data);
  } catch (error) {
    errorHandler(error, res, req);
  }
};

const register = async (req, res) => {
  const { firstName, lastName, email, phoneNumber, password, rePass } = req.body;

  try {

    if (password !== rePass) {
      return res.status(401).json({ error: 'Passwords don`t match' })
    }

    const user = await userModel.exists({ email })

    if (user) {
      return res.status(409).json({ error: 'Email is already taken!' })
    }

    const hashedPass = await bcrypt.hash(password, 10)

    const newUser = await userModel.create({ firstName, lastName, email, phoneNumber, password: hashedPass });

    const token = await tokenCreator(newUser)

    const data = { firstName: user.firstName, lastName: user.lastName, _id: user._id, email: user.email, token }

    res.status(200).json(data);
  } catch (error) {
    errorHandler(error, res, req);
  }
};

const logout = (req, res) => {
  res.status(200).json({ Success: 'User logged out.' })
}

const updatePassword = async (req, res) => {
  const { email, password, newPassword } = req.body;
  if (!email) {
    return res.status(404).json({ error: 'Email is required' })
  }
  if (!password) {
    return res.status(404).json({ error: 'Password is required' })
  }
  if (!newPassword) {
    return res.status(404).json({ error: 'New Password is required' })
  }
  try {
    const user = await userModel.findOne({ email });

    const isValid = await bcrypt.compare(password, user.password)

    if (!isValid) {
      return res.status(404).json({ error: 'Email or password is incorrect !' })
    }

    if (!user) {
      return res.status(404).json({ error: 'Email or password is incorrect !' })
    }

    const newHashedPassword = await bcrypt.hash(newPassword, 10)

    const updatedUser = await userModel.findByIdAndUpdate({ _id: user._id }, { password: newHashedPassword }, { new: true })
    const token = await tokenCreator(updatedUser)
    const data = { firstName: user.firstName, lastName: user.lastName, _id: user._id, email: user.email, token }
    res.status(200).json(data);
  } catch (error) {
    errorHandler(error, res, req);
  }
};

const deleteUser = async (req, res) => {
  const { userId } = req.params;

  try {
    await userModel.findByIdAndUpdate(userId, { isDeleted: true });

    res.status(200).json({ userId });
  } catch (error) {
    errorHandler(error, res, req);
  }
};

const getUsers = async (req, res) => {
  const page = parseInt(req?.query?.page) || 1;
  const limit = parseInt(req?.query?.limit) || 5;
  const sort = req?.query?.sort;
  const order = req?.query?.order;
  const search = req?.query?.search;
  const criteria = (req?.query?.criteria || '').trim();
  const skipIndex = (page - 1) * limit;

  const query = { isDeleted: false };
  const sortCriteria = {};

  if (sort && sort !== 'null' && order && order !== 'null') {
    sortCriteria[sort] = order;
  }

  if (search && search !== 'null' && criteria && criteria !== 'null') {
    query[criteria] = criteria == '_id' ? search : new RegExp(search, 'i');
  }

  try {
    const count = await userModel.countDocuments(query);
    let users = await userModel
      .find(query)
      .select('firstName lastName email imageUrl phoneNumber createdAt updatedAt')
      .limit(limit)
      .skip(skipIndex)
      .sort(sortCriteria)
      .lean();

    res.status(200).json({ users, count });
  } catch (error) {
    if (error.kind === 'ObjectId') {
      return res.status(200).json({ users: [], count: 0 });
    }

    errorHandler(error, res, req);
  }
};

module.exports = {
  login,
  register,
  logout,
  updatePassword,
  deleteUser,
  getUsers,
};
