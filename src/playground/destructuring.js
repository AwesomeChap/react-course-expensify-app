// const book = {
//   title : 'Egi is the enemy',
//   author : 'Ryan Holiday',
//   publisher : {
//      // name : 'Penguin'
//   }
// };
//
// const {publisher: publisherName = 'self-published'} = book.publisher;
//
// console.log(publisherName);

const item = ['Coffee (hot)','2.00','2.50','2.75'];
const [drink,,med] = item;
console.log(`A medium ${drink} costs ${med}`);
