// var express = require('express');
// var router = express.Router();
// const uuid = require('uuid');
// const asyncHandler = require('express-async-handler');
// const userModel = require('../models/user');
// const user = require('../models/user');


// /* GET users listing. */
// router.get('/', function (req, res, next) {
//   res.send('/users route');
// });

// // @desc get user
// // @HTTP GET /users/get
// const getUsers = asyncHandler(async (req, res) => {
//   const users = await userModel.find()
//   res.json(users)
// })


// // @desc create user
// // @HTTP POST /users/post
// const postUser = asyncHandler(async (req, res) => {

//   const { name } = req.body;
//   const { id } = uuid.v4();
//   const newUser = userModel({ id, name })
//   if (!newUser.name) {
//     return res.status(400).json({ msg: 'Please include a name' })
//   }
//   newUser.save()
//     .then((result) => {
//       console.log("User saved")
//       res.json(result)
//     }).catch((err) => {
//       console.log(err)
//       res.send(err)
//     })
// })

// // @desc Delete user
// // @HTTP DELETE /users/delete/:id
// const deleteUser = asyncHandler(async (req, res) => {
//   const { id } = req.params.id
//   userModel.findByIdAndDelete({ id })
//     .then((result) => {
//       res.json(result)
//     }).catch(e => {
//       console.log(e)
//     })
// })

// // @desc update user
// // @HTTP PUT /users/update/:id
// const updateUser = asyncHandler(async (req, res) => {
//   const { id } = req.params.id
//   const { name } = req.body
//   userModel.findOneAndUpdate({ id, name })
//     .then((result) => {
//       res.json(result)
//     }).catch(e => {
//       console.log(e)
//     })
// })


// router.get('/get', getUsers)
// router.post('/post', postUser)
// router.delete('/delete/:id', deleteUser)
// router.put('/update/:id', updateUser)

// module.exports = router;
