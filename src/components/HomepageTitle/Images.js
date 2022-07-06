export default [
	// {
	// 	url: require("assets/logo/newest/tbs4-a1.png"),
	// 	position: "50% 50%",
	// 	size: "contain",
	// },
	{
		url: require("assets/images/homepage/_DSC1246.jpg"),
		position: "50% 58%",
	},
	{
		url: require("assets/images/homepage/_MG_1051-1500-1000-q80-c4.jpg"),
		position: "50% 45%",
	},
	{
		url: require("assets/images/homepage/image-1-14.jpg"),
		position: "50% 60%",
	},
	{
		url: require("assets/images/homepage/image-1-117.jpg"),
		position: "50% 40%",
	},
];



/* 

want to use small + med + large images for progressive loading

Goal: parabolic filesize differences.

Current sizes:
[0]: 130kb
[1]: 8.48mb!!!
[2]: 89.2kb
[3]: 244kb

So bring [1] down to ~220kb or so first. That will be the max size.

Then LARGE photos will be 89.2kb ~ 244kb
So MEDIUM should be 9.44kb ~ 15.62kb ? 
So SMALL should be 3.07kb ~ 3.95kb ? 

Additionally provide alternate photos for mobile phones?
 - Crop them for portrait? Or probably not, just in case they switch to landscape.



*/
