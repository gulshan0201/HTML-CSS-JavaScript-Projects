const fieldInput = document.querySelector("input");
downloadBtn = document.querySelector("button");

downloadBtn.addEventListener("click", e => {
  e.preventDefault();  // preventing form from submitting
  fetchFile(fieldInput.value)
})

function fetchFile(url){
  //fetching the url and returning response as blob
  fetch(url).then(res => res.blob()).then(file => {
    //createObjectURl mainly helps in creating a new URL with the passed object
    let tempUrl = URL.createObjectURL(file);
    let aTag = document.createElement("a");
    aTag.href = tempUrl; // passing tempUrl as href value of a <a> tag
    aTag.download = "filename"; // passing fielname as downloaded value of <a> taeg00
    document.body.appendChild(aTag) // adding <a> tag inside body
    aTag.click(); //clicking  <a> tag so the file download
    aTag.remove(); //removing <a> tag ones file downloaded

  });
}