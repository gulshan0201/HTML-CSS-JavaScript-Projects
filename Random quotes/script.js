function generate(){
  var quotes = {
    "- Nicole Kidman": '“Life has got all those twists and turns. You’ve got to hold on tight and off you go.”',
    "- Amal Clooney": '“Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell.”',
    "- Duchess Meghan": '“You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.”',
    "- Taylor Swift": '“I just want you to know that if you are out there and you are being really hard on yourself right now for something that has happened … it’s normal. That is what is going to happen to you in life. No one gets through unscathed. We are all going to have a few scratches on us. Please be kind to yourselves and stand up for yourself, please.”'
  }

  var authors = Object.keys(quotes);  //in this case keys are the author names which are used above in the object ex "Nicike kidman" is a key object.key returns an array of given objects
  // console.log(authors);  // using this console log we can check weather the array is generating or not on a key press

  var author = authors[Math.floor(Math.random() * authors.length)]  // genrates random quotes with an rounded of value

  var quote = quotes[author];  // by doing this we will get the quote based on the key which is the author name

  document.getElementById("quote").innerHTML = quote;

  document.getElementById("author").innerHTML = author;
}