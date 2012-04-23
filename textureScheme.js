textureFileList = new Array();

function TexturePixel(thisColor, ceiling, wall){
    this.color = thisColor;
    this.ceilingTexture = ceiling;
    this.wallTexture = wall;
}

textureSchemes = new Array();

//==================This is where you set up your texture schemes=========

textureFileList[0] = "textures/Granite.png"; //First you state your files and 
textureFileList[1] = "textures/Grass.png";   //Associate them with an ID number
textureFileList[2] = "textures/CaveChips.png";
textureFileList[3] = "textures/CaveGlass.png";
textureFileList[4] = "textures/CaveGround.png";
textureFileList[5] = "textures/CaveSkybox.png";
textureFileList[6] = "textures/LavaCrystal.png";

function configTextureSchemes(){

    textureSchemes.push(new TexturePixel(
	0x000000,	//A red pixel in the map bitmap
	2,		//here is defined as having a granite ceiling
	3		//and grass set of walls with IDs 0 and 1
	));

    textureSchemes.push(new TexturePixel(
	0xFFFF00,	//A red pixel in the map bitmap
	6,		//and Granite set of walls with IDs 0 and 1
	0
	));

    textureSchemes.push(new TexturePixel(
	0x00FFFF,	//A red pixel in the map bitmap
	3,		//and Granite set of walls with IDs 0 and 1
	6
	));

    textureSchemes.push(new TexturePixel(
	0xFFFFFF,	//A red pixel in the map bitmap
	4,		//and Granite set of walls with IDs 0 and 1
	6
	));

}
