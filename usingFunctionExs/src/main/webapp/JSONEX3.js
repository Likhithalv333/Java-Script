var user_profile = { 
	  "username" : "ratan",
	  "social_media" : [
		{
		  "description" : "twitter",
		  "link" : "https://twitter.com"
		},
		{
		  "description" : "facebook",
		  "link" : "https://www.facebook.com"
		},
		{
		  "description" : "github",
		  "link" : "https://github.com"
		}
	  ]
	}

	document.write(user_profile.username, "<br>")

	document.write(user_profile.social_media[0].description , ": " , user_profile.social_media[0].link, "<br>");
	document.write(user_profile.social_media[1].description , ": " , user_profile.social_media[1].link, "<br>");
	document.write(user_profile.social_media[2].description , ": " , user_profile.social_media[2].link, "<br>");

	//Reading the complete array of json Objects. 
	document.write(JSON.stringify(user_profile), "<br>");

	//Reading the specific json object in array. 
	document.write(JSON.stringify(user_profile.social_media[0]));
	document.write(JSON.stringify(user_profile.social_media[1]));
	document.write(JSON.stringify(user_profile.social_media[2]));