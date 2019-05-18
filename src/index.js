var paragraph = document.createElement('p');
paragraph.textContent = 'Loading...';
document.body.append(paragraph);

function work() {

  var image = document.createElement('img');
  image.src = 'https://i.kym-cdn.com/entries/icons/mobile/000/028/021/work.jpg';
  image.style.width = '600px';
  
  image.onload = function() {
    document.body.removeChild(paragraph);
    document.body.append(image);
  }
}

setTimeout(work, 1000);
