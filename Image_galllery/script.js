var btn_ref = document.getElementById('btn')

var arr_img = [
  'https://helpx.adobe.com/content/dam/help/en/photoshop/using/matching-replacing-mixing-colors/jcr_content/main-pars/before_and_after/image-after/match-outcome3.png',
  'https://swall.teahub.io/photos/small/21-218810_beautiful-wallpapers-download-for-mobile-download-beautiful-images.jpg',
  'http://www.goodmorningimagesdownload.com/wp-content/uploads/2020/06/Alone-Boys-Girls-Images-6.jpg',
  'https://wallpapercave.com/wp/lqaHndU.jpg',
  'https://stimg.cardekho.com/images/carexteriorimages/930x620/Lamborghini/Aventador/6721/Lamborghini-Aventador-SVJ/1621849426405/front-left-side-47.jpg?tr=w-375',
]

var first_time = true;

function showImage(){
  container_ref = document.getElementById('container_box')

  if(first_time == true){
    for(var i = 0; i< arr_img.length; i++){
    var img_ref = document.createElement('img')
    img_ref.src = arr_img[i]
    container_ref.appendChild(img_ref)
  }
  }else {
    alert('already loaded')
  }
  first_time = false
  }
  

btn_ref.addEventListener('click', showImage)