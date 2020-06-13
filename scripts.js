const reviews = [
	{
		id: 1,
		name: "Bosun Egberinde",
		job: "Software Engineer",
		photo: "./img/photo-0.jpg",
		text: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
	},
	{
		id: 2,
		name: "Elisha Egberinde",
		job: "Software",
		photo: "./img/photo-1.jpg",
		text: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
	},
	{
		id: 3,
		name: "Ukpongson Egberinde",
		job: "Engineer",
		photo: "./img/photo-3.jpg",
		text: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
	},
	{
		id: 4,
		name: "Martins Ikpe",
		job: "footballer",
		photo: "./img/photo-4.jpg",
		text: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
	},
	{
		id: 4,
		name: "Decosta Moturayo",
		job: "Interface Designer",
		photo: "./img/photo-2.jpg",
		text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
	},
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("text");

const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const randomBtn = document.querySelector(".randomBtn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
	showPerson();
});

// show person based on item
function showPerson() {
	const item = reviews[currentItem];
	img.src = item.photo;
	author.textContent = item.name;
	job.textContent = item.job;
	info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
	currentItem++;
	if (currentItem > reviews.length - 1) {
		currentItem = 0;
	}
	showPerson();
});

// show next person
prevBtn.addEventListener("click", function () {
	currentItem--;
	if (currentItem < 0) {
		currentItem = reviews.length - 1;
	}
	showPerson();
});

// show random person
randomBtn.addEventListener('click', function () {
	currentItem = Math.floor(Math.random() * reviews.length);
	showPerson();
});
