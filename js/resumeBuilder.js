
var bio = {
	name: "Daniel Deepak",
	role: "Web Developer",
	contact: {
		mobile: "848-565-4893",
		email: "deepakswami07@gmail.com",
        github: "deepakswami07",
        twitter: "@ddeepak",
        location: "NYC"
	    },
	pic: "images/fry.jpg",
	welcomeMessage: "lorem ipsum dolor sit amet etc etc etc.",
	skills: ["Designer", "HTML", "CSS", "jQuery", "JavaScript"]
}

var name = bio.name;
var formattedName = HTMLheaderName.replace("%data%", name);

var role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var mobile = bio.contact.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").append(formattedMobile);

var email = bio.contact.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);