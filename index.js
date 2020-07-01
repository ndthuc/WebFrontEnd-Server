const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); //bổ sung phần dòng khai báo sử dụng bodyParser
const app = express();

app.use(cors())

app.use(bodyParser.json());//bổ sung phần dòng khai báo sử dụng bodyParser cho app


// const productsRoutes = require('./routes/products');
// const usersRoutes = require('./routes/users');
const admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://tin328dv01.firebaseio.com"
});

const db = admin.firestore();

// getDialogue().then(result =>{
// 	console.log(result);
// 	const obj = result;
// 	const quoteData = {
// 		quote: obj.quote,
// 		author: obj.author
// 	};
// 	return db.collection('sampleData').doc('inspiration')
// 	.set(quoteData).then(() => 
// 	console.log('new Dialogue written to database'));
// });

// function getDialogue(){
// 	return new Promise(function(resolve, reject) {
// 	resolve({
// 	"quote":"I'm Batman",
// 	"author":"Batman"
// 	});
// })
// }
app.listen(8000, () => {
    console.log('Server started!');
});
app.route('/api/products').get((req, res) => {
    console.log('all products');
    res.send([{ id: 1, name: 'lilly' }, { id: 2, name: 'lucy' }]
    );
});
// // dung cho phan insert
// app.route('/api/products/insert').post((req, res) => {

//     console.log('insert item');
//     console.log('item info:' + req.body);
//     res.send(201, req.body);
// });

// app.route('/api/users/insert').post((req, res) => {

//     let email = req.body.email;
//     let password = req.body.password;
//     let message = req.body.message;

//     let data = {
//         email: email,
//         password: password
//     }
//     console.log(message);
//     return db.collection('users').add(data);	
    
// })

// // app.route('').put((req, res) =>{
// //     console.log('update item');
    
// // })

// app.use('/api/users', usersRoutes);