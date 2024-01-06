const users=[
	{name:'likhi',age:21,gender:'female'},
	{name:'lavan',age:26,gender:'male'},
	{name:'vamsi',age:20,gender:'male'},
	{name:'likhi',age:21,gender:'female'},
	{name:'likhi',age:21,gender:'female'}
	
];
let r1=users.filter(user=>{user.age>20;
                               return user});
console.log(r1);