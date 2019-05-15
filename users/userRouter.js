const express = 'express';

const router = express.Router();

router.post('/', (req, res) => {

});

router.post('/:id/posts', validateUserId, (req, res) => {

});

router.get('/', (req, res) => {

});

router.get('/:id', validateUserId, (req, res) => {
  res.status(200).json(req.user);
});

router.get('/:id/posts', validateUserId, (req, res) => {

});

router.delete('/:id', validateUserId, (req, res) => {

});

router.put('/:id', validateUserId, (req, res) => {

});

//custom middleware

async function validateUserId(req, res, next) {
  const { id } = req.params;
  const user = await db.getById(id);
  if(user) {
    req.user = user;
    next();
  } else {
    res.status(400).json({ message: 'missing user data' })
  }
};

function validateUser(req, res, next) {
  if (req.body && Object.keys(req.body).length) {
    if(req.body.name && Object.keys(req.body.name).length) {
      next();
    } else {
      res.status(400).json({ message: 'missing user data' })
    }
  } else {
    res.status(400).json({ message: 'missing required name field' })
  }
};

function validatePost(req, res, next) {
  if (req.body && Object.keys(req.body).length) {
    if(req.body.text && Object.keys(req.body.text).length) {
      next();
    } else {
      res.status(400).json({ message: 'missing post data' })
    }
  } else {
    res.status(400).json({ message: 'missing required text field' })
  }
};

module.exports = router;
