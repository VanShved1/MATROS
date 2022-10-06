const express = require('express');
const app = express();
const users = require('./routers/users');
const index = require('./routers/');
const books = require('./routers/books');
const auth = require('./routers/auth');

app.use('/users', users);

app.use('/books', books);

app.use('/', index);

app.use('/auth', auth);

app.listen(3000);

//he[f kj[

// //пишем новый роутер
// //auth/sign-in?email=test@test.com&password=123123
//   //- если эмеил и пароль верны, пользователю в массив
//    //дописывает случайный токен и отдает этот же токен в респонс
// //auth/logout - стирает юзеру токен.

// теперь мидлвейр isAuthorized должен брать токен с хедера Authorization,
//  и искать пользователя с таким токеном, если нашло, записывает req.user
//   = user и пускает дальше. Если не нашло - выкидываем ту же ошибку в респонс.