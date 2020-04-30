require('dotenv').config();                     // linking up the two so it can access the file
const router = require('express').Router();
const User = require('../db').import('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');




router.post('/signup', (req, res) => {
    User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 13)       // hashSync is a part of bcrypt - a process of storing passwords in hash form, performs a one-way password transformation on a password, transforming/scrambling it into a hash password - the number 10 is for "salting", adds random data unique to each user, saved w your password, used in hashing process for storing your password...13 is the number of times it is "salted"...13 is standard
    })
    .then(
        createSuccess = (user) => {  // when a user is created...
            let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24})    // give them a token (let token) based off userid, expires in 1 day, it will be stored in local storage for one day


            res.json({
                user: user,
                message: 'user created',
                sessionToken: token         // checks on the front end will ref sessionToken bc it is stored locally that way
            })
        },
        createError = err => res.send(500, err)
    )
})


router.post('/signin', (req, res) => {
    User.findOne({                                  // if email is already in database then see below
        where:{
            email: req.body.email
        }
    })
    .then(user => {
        if(user){
            bcrypt.compare(req.body.password, user.password, (err, matches) => {   
                if(matches){                // if password matches then gives token
                    let token = jwt.sign({id: user.id}, process.env.JWT_SECRET,
                        {expiresIn: 60*60*24})
                        res.json({
                            user: user,
                            message: 'Successfully authenticated user',
                            sessionToken: token
                        })       
                } else {
                    res.status(502).send({error: 'bad gateway'})
                }
            }) 
        } else {
                res.status(500).send({error: 'failed to authenticate'})
        }
    }, err => res.status(501).send({ error: 'failed to process'}))
})


module.exports = router;