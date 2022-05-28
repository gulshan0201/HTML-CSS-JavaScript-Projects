var reviews = [
  {
    id: 1,
    name: "Sara Jones",
    job: "ux designer",
    img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed fugit accusamus perspiciatis id incidunt. Omnis neque quisquam earum eos rem?",
  },
  {
    id: 2,
    name: "Emili Jones",
    job: "Software Eng",
    img: "https://st3.depositphotos.com/1037987/15097/i/600/depositphotos_150975580-stock-photo-portrait-of-businesswoman-in-office.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: 3,
    name: "Rahul Kumar",
    job: "Senior Developer",
    img: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed fugit accusamus perspiciatis id incidunt. Omnis neque quisquam earum eos rem?",
  },
  {
    id: 4,
    name: "Preety Roy",
    job: "Front-End Developer",
    img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed fugit accusamus perspiciatis id incidunt. Omnis neque quisquam earum eos rem?",
  }
]

var imgElement = document.getElementById('person-img')
var author = document.getElementById('author')
var job = document.getElementById('job')
var info = document.getElementById('info')
var prevBtn = document.querySelector('.prev-btn')
var nextBtn = document.querySelector('.next-btn')
var randomBtn = document.querySelector('.random-btn')

var currentIndex = 0

prevBtn.addEventListener('click', prevClick)
nextBtn.addEventListener('click', nextClick)
randomBtn.addEventListener('click', randomaize)

function prevClick(){
  if(currentIndex === 0){
    currentIndex = reviews.length - 1;
  }
  else {
    currentIndex--;
  }
  updateUserDetails()
}


function nextClick(){
  if(currentIndex === reviews.length - 1){
    currentIndex = 0;
  }
  else {
    currentIndex++
  }
  updateUserDetails()
}

function randomaize(){
  currentIndex = Math.floor(Math.random() * reviews.length)
  console.log(currentIndex);
  updateUserDetails()
}

function updateUserDetails(){
  imgElement.src = reviews[currentIndex].img;
  author.innerText = reviews[currentIndex].name;
  job.innerText = reviews[currentIndex].job;
  info.innerText = reviews[currentIndex].text;
} 