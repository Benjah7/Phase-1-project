import fetch from "node-fetch";

const data = new FormData();
data.append("transformations", "ganzoom4-jpg90");
data.append("fileName", );
// document.addEventListener("DOMContentLoaded", () => {
// 	const work = document.getElementById("our-work")
// 	const button = document.querySelector("#btn1")
// 	button.addEventListener("click", ourFetch)
// })

function ourFetch(){
const options = {
	method: 'POST',
	headers: {
		'x-application-name': 'deep_image',
		'X-API-KEY': 'undefined',
		'X-RapidAPI-Key': '9c3678d372msh65d8aaed54b5270p1ff216jsn6b0a9877240b',
		'X-RapidAPI-Host': 'deep-image.p.rapidapi.com'
	},
	body: data
};

fetch('https://deep-image.p.rapidapi.com/rest_api/deep_image/transform', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}
ourFetch()