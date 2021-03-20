/*
use 'colorOfShirt' to track the 
current color of product to show 
in the main image and thumbnail images
  black red grey
*/
let colorOfShirt    = 'black';


/*
use 'viewOfShirt' to track the 
current view of product to show 
in the main image 
  no-model front back
*/
let viewOfShirt     = 'no-model';


/*
click thumbnail a tags to choose main image src
*/
$('.slide-thumbnails-container a').click(function(e){
  //don't follow the link
  e.preventDefault();
  //instead get the id of the link
  const thumbNailId = $(this).attr("id");
  //remember this id as it describes the view desired
  viewOfShirt = thumbNailId;
  //update the images
  updateImages();
});


/*
click a color radio button 
to choose the color of the image
*/
$("input[name='shirt-color']").click(function(){
  //get the value of the input
  const colorValue = $(this).attr("value");
  //update the text description
  $('#selected-color-out').text(colorValue);
  //remember the current color value
  colorOfShirt = colorValue;
  //update the images
  updateImages();
});


/*
click a size radio button 
to choose the size
*/
$("input[name='shirt-size']").click(function(){
  //get the value of the input
  const sizeValue = $(this).attr("value");
  //update the text description
  $('#selected-size-out').text(sizeValue);

  //change button label to indicate teh product
  //choices have been made and it can now be
  // added to the shopping cart
  $("#btn-add-to-cart").attr("value", "Add to Cart");
  //enable the button removing the disabled attribute
  $('#btn-add-to-cart').removeAttr("disabled");

});



/*
function updateImages(){}
uses the variables
  colorOfShirt and  viewOfShirt     
to assign appropriate images to the main #slide
as well as each of the thumbnail images
*/
function updateImages(){

  //update the main slide 
  const pathToImage = `images/t-shirt-${colorOfShirt}-${viewOfShirt}.jpg`;
  $("#slide").attr("src", pathToImage);

  //update the thumbnails to match the current color chosen
  $('#no-model').children().first().attr("src", `images/t-shirt-${colorOfShirt}-no-model.jpg`);
  $('#front').children().first().attr("src", `images/t-shirt-${colorOfShirt}-front.jpg`);
  $('#back').children().first().attr("src", `images/t-shirt-${colorOfShirt}-back.jpg`);
}

