let myData = {	"rollno"		:	1234,
					"first_name"	:	"addanki",
					"last_name"		:	"ratan",
					"middlename"	:	null,
					"hobbies"		:	["cricket","teaching"],
					"marks"			:	[99,98,99,98],
					"maritalstatus"	:	true, 
					"salary"		:	55000.50
	};
				
	// Accessing individual properties
	console.log("Roll No:", myData.rollno);
	console.log("First Name:", myData.first_name);
	console.log("Hobbies:", myData.hobbies);
	console.log("marital status:", myData.maritalstatus);
	console.log("Middle Name:", myData.middlename); // null

	// Accessing array elements
	console.log("All Hobbies:", myData.hobbies)
	console.log("First Hobby:", myData.hobbies[0]);
	console.log("Second Mark:", myData.marks[1]);