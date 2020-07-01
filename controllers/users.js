exports.getUsers = (req, res, next) =>{
    res.status(200).send({
        users: {
            userID: 'u1',
            userName: 'John Smith'
        }
    });
};

exports.createUser = (req, res, next) => {
    const userID = req.body.userID;
    const userName = req.body.userName;

    console.log(userID, userName);

    res.status(201).send({
        message: 'Create user Successfully!',
        user:{
            userID: userID,
            userName: userName
        }
    });
};

exports.deleteUser = (req, res, next) =>{
    if (req.body == null) {
        res.status(400).send({
            message: `Sth wrong!!`
        });
    }
    else{
        const userID = req.body.userID;
        res.status(204).send({
            message: `Delete user ${userID} successfully!!`
        });
    }
};

exports.updateUser = (req, res, next) =>{
    const userID = req.body.userID;
    const userName = req.body.userName;

    res.status(200).send({
        message: `Update user ${userID} successfully!!`,
        user: {
            userID: userID,
            userName: userName
        }
    });
};

