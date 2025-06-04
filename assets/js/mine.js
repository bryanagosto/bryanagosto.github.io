
    $('.swing')
    
    .data('textToggle', 'PHP, Python, JavaScript, VBA, SQL, XML, JSON, HTML5, CSS3')
    .hover(function (o) {
        
        var that = $(this);

        // get the text from data attribute
        var textToSet = that.data('textToggle');
        
        // save the current text so it can be reverted
        that.data('textToggle', that.text());
        
        // set the new text
        that.text(textToSet);
        
    });
    $('.swingtwo')
    
    .data('textToggle', 'Analytical, Responsible, Resourceful, Open-minded, Independent, Flexible, Punctual, Honest, Cooperative') 
    .hover(function (o) {
        
        var that = $(this);

        // get the text from data attribute
        var textToSet = that.data('textToggle');
        
        // save the current text so it can be reverted
        that.data('textToggle', that.text());
        
        // set the new text
        that.text(textToSet);
        
    });
    $('.swingthree')
    
    .data('textToggle', 'MySQL, jQuery, Tableau, Wordpress, Linux, Windows, Military Experience, Android, MS Suite, Apache, Visual Studio')
    .hover(function (o) {
        
        var that = $(this);

        // get the text from data attribute
        var textToSet = that.data('textToggle');
        
        // save the current text so it can be reverted
        that.data('textToggle', that.text());
        
        // set the new text
        that.text(textToSet);
        
    });
// create references to the modal...
var modal = document.getElementById('myModal');
// to all images -- note I'm using a class!
var images = document.getElementsByClassName('myImages');
// the image in the modal
var modalImg = document.getElementById("img01");
// and the caption in the modal
var captionText = document.getElementById("caption");

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}
