// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friends = [
	{
	  	"name":"Annelous Lammerts",
	  	"photo":"https://static.wixstatic.com/media/5b1b81_e526c7b09a9f4110aebb69c07805adb5~mv2.jpg/v1/crop/x_37,y_16,w_104,h_158/fill/w_143,h_221,al_c,lg_1,q_80/5b1b81_e526c7b09a9f4110aebb69c07805adb5~mv2.webp",
	  	"scores":[5, 2, 4, 1, 5, 3, 2, 4, 5, 2]
	},
	{
		"name":"Colleen Carroll",
	  	"photo":"https://static.wixstatic.com/media/5b1b81_b10fb2e5393246b29513724fd9d4e3b9.jpg/v1/crop/x_331,y_73,w_2006,h_2914/fill/w_548,h_818,al_c,q_85,usm_0.66_1.00_0.01/5b1b81_b10fb2e5393246b29513724fd9d4e3b9.webp",
	  	"scores":[5, 1, 3, 3, 5, 1, 5, 5, 4, 2]
	},
	{
		"name":"Sensi Graves",
		"photo":"https://static.wixstatic.com/media/5b1b81_cc39ceaa297b459ab843ad631dfcdf4d.jpg/v1/crop/x_7,y_21,w_184,h_279/fill/w_226,h_334,al_c,lg_1,q_80/5b1b81_cc39ceaa297b459ab843ad631dfcdf4d.webp",
	  	"scores":[5, 4, 5, 4, 3, 5, 2, 3, 4, 5]
	},
	{
		"name":"Issy Von Zastro",
	  	"photo":"https://static.wixstatic.com/media/5b1b81_eb208243f11545f38927643d61ab3e39~mv2.jpg/v1/crop/x_20,y_0,w_136,h_176/fill/w_160,h_246,al_c,lg_1,q_80/5b1b81_eb208243f11545f38927643d61ab3e39~mv2.webp",
	  	"scores":[1, 2, 4, 5, 3, 5, 2, 2, 4, 4]
	},
	{
		"name":"Manuela Junga",
		"photo":"https://static.wixstatic.com/media/5b1b81_8d2789fb7bab4dd59f3639525ad1d8ad.jpg/v1/fill/w_224,h_334,al_c,lg_1,q_80/5b1b81_8d2789fb7bab4dd59f3639525ad1d8ad.webp",
		"scores":[3, 5, 4, 1, 5, 3, 2, 3, 5, 5]
	},
	{
		"name":"Sam Light",
		"photo":"https://static.wixstatic.com/media/5b1b81_d0592340899746be8b503b5b5f9a968c.jpg/v1/fill/w_269,h_420,al_c,lg_1,q_80/5b1b81_d0592340899746be8b503b5b5f9a968c.webp",
		"scores":[5, 1, 5, 4, 5, 5, 2, 6, 4, 2]
	},
	{
		"name":"Ewan Jaspan",
		"photo":"https://static.wixstatic.com/media/6538f6_fb37de183c8d47f5a8ec0a240d48b5da~mv2_d_2048_1741_s_2.jpg/v1/crop/x_574,y_50,w_805,h_1244/fill/w_544,h_842,al_c,q_85,usm_0.66_1.00_0.01/6538f6_fb37de183c8d47f5a8ec0a240d48b5da~mv2_d_2048_1741_s_2.webp",
		"scores":[5, 1, 2, 2, 2, 5, 5, 5, 2, 1]
	},
	{
		"name":"Noe Font",
		"photo":"https://static.wixstatic.com/media/5b1b81_0cf96e3ab1d044048e3a39125c388e71.jpg/v1/fill/w_278,h_420,al_c,lg_1,q_80/5b1b81_0cf96e3ab1d044048e3a39125c388e71.webp",
	  	"scores":[2, 1, 5, 5, 1, 5, 3, 2, 4, 5]
	},
	{
		"name":"Craig Cunningham",
	  	"photo":"https://static.wixstatic.com/media/5b1b81_b42bf3b5675f4ecba88a55fb47da9454.jpg/v1/fill/w_277,h_420,al_c,lg_1,q_80/5b1b81_b42bf3b5675f4ecba88a55fb47da9454.webp",
	  	"scores":[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
	},
	{
		"name":"Aaron Hadlow",
	  	"photo":"https://static.wixstatic.com/media/6538f6_765d776c47f14b17b6ad9ebc56c0504a~mv2_d_1768_2048_s_2.jpg/v1/crop/x_63,y_0,w_1320,h_2048/fill/w_542,h_842,al_c,q_85,usm_0.66_1.00_0.01/6538f6_765d776c47f14b17b6ad9ebc56c0504a~mv2_d_1768_2048_s_2.webp",
	  	"scores":[5, 1, 3, 5, 5, 2, 3, 2, 1, 5]
	}
]	

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;