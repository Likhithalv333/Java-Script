let student = {
		"rollno": 1234,
		"first_name": "John",
		"last_name": "Doe",
		"marks": [90, 85, 92]
	};

	let jsonString = JSON.stringify(student);
	console.log(jsonString);