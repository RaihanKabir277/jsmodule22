

const today = new Date();
const date = new Date('2062-10-19');
console.log(date.getMonth());
console.log(date.getDay());

const noticeDate = new Date(2091, 0, 26);
console.log(noticeDate);
noticeDate.setMonth(10);
console.log(noticeDate.toLocaleString('en-GB'));

// unix epoc ----------

