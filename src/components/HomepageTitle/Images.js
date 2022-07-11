const Images = [
	// {
	// 	url: require("assets/logo/newest/tbs4-a1.png"),
	// 	position: "50% 50%",
	// 	size: "contain",
	// },
	{
		url: require("assets/images/homepage/current/_DSC1246-q80-c4.jpg"),
		position: "50% 58%",
	},
	{
		url: require("assets/images/homepage/current/_MG_1051-1024x683_q60_c4.jpg"),
		position: "50% 45%",
	},
	{
		url: require("assets/images/homepage/current/image-1-14.jpg"),
		position: "50% 60%",
	},
	{
		url: require("assets/images/homepage/current/image-1-117-q55-c4.jpg"),
		position: "50% 40%",
	},
];

export default Images;


/* 

want to use small + med + large images for progressive loading

Goal: parabolic filesize differences.

Current sizes:
[0]: 131kb
[1]: 8686kb!!!
[2]: 90kb
[3]: 245kb

9,152 kb total

New Sizes:
[0]: 131kb
[1]: 143kb
[2]: 90kb
[3]: 143kb

507 kb total!
Still could reduce some smaller probably

New Sizes:
[0]: 60kb
[1]: 85kb
[2]: 90kb
[3]: 88kb

323 kb total! (over 28x smaller than original; 1.5x smaller than last set)



*/
