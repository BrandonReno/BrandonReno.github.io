/*Code used to make active class highlighted in nav bar*/


$(function() {
  var CurrentUrl= document.URL;
  var CurrentUrlEnd = CurrentUrl.split('/').filter(Boolean).pop();

  $( "#NavBar a" ).each(function() {
        var ThisUrl = $(this).attr('href');
          var ThisUrlEnd = ThisUrl.split('/').filter(Boolean).pop();
          if(ThisUrlEnd == CurrentUrlEnd)
          $(this).addClass('active')
      });
  });

/*snippet to set up the slideshow feature*/

$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000)

/*This allows the navbar to hide and show when pages is scrolled*/

var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollPos < 200) {
      document.getElementById("NavBar").style.top = "0";

    } else {
      document.getElementById("NavBar").style.top = "-70px";
    }
  prevScrollPos = currentScrollPos;
}

/*Nav bar for projects on project page*/

function openNav() {
  document.getElementById("sidenav").style.left = "0px";
}

function closeNav() {
  document.getElementById("sidenav").style.left = "-250px";
}


function ChangeDisplayMenu(x) {
  x.classList.toggle("change");
  var projImg = document.getElementById("pic1")
  var imgcap = document.getElementById("figcap")
  var currentProj = document.getElementsByClassName("proj")
  if (x.classList.contains("change")){
    x.style.left = "195px";
    $('.projImages').css('max-width','40%')
    $('.projImages').css('margin-left','62%')
    currentProj[0].style.left = "270px";
    openNav()
  } else{
    x.style.left = "5px";
    $('.projImages').css('max-width','50%')
    $('.projImages').css('margin-left','50%')
    currentProj[0].style.left = "5px";
    closeNav()
  }
}


function highlight(x){
  var allProj = document.getElementById("sidenav")
  var maybe = allProj.getElementsByTagName('a')
  for(i=0; i< maybe.length; i++){
    maybe[i].classList.remove("sideactive")
    }
    x.classList.add('sideactive')
    ReplaceProject(x)

}

function ReplaceProject(x){
  var ProjectClass = document.getElementsByClassName("proj")
  var CurrentTitle = document.getElementById('ProjTitle')
  if (CurrentTitle.textContent != x.textContent){
    CurrentTitle.textContent = `${x.textContent}.`
    updateContent(CurrentTitle.textContent)
  }
}

function updateContent(project){
  var ProjBrief = document.getElementById('ProjBrief')
  var ProjLink = document.getElementById('ProjLink')
  var projDesc = document.getElementById('ProjDesc')
  var projImg = document.getElementById('pic1')
  var Imgcap = document.getElementById("figcap")
  if(project == "Blockbuster."){
    ProjBrief.textContent = "Using neural networks and Oscar data to predict film revenue"
    ProjLink.setAttribute('href', 'https://github.com/BrandonReno/BlockBuster')
    projDesc.textContent = "Using Python and Tensorflow I developed a system that can classify film revenue 58.70% of the time. This was a large scale project that required lots of research into previous revenue classification models to see how I could improve off of previous research. The first phase of this project was spent conducting research on neural network models that predicted revenue to get a good baseline percentage of what a model can achieve given the right data. I found quickly that all models included traditional data but none seemed to include data from film awards. I thought this was interesting and decided to develop my model using both Oscar and film data to illustrate if the addition of award data could help achieve a higher classification accuracy. With the development of my model I found that my accuracy of 58.70% was much higher performing than other developed models which on average scored anywhere between 36-48%. I was then able to conclude that Oscar data did help improve the classification accuracy of neural networks."
    projImg.src = "Images/WebArchit.jpg";
    Imgcap.textContent = "Developed Neural Network Architecture"
  }
  else if(project == "Trace."){
    ProjBrief.textContent = "Mobile Application to help pay off Credit Bills efficiently"
    ProjLink.setAttribute('href', 'https://github.com/mflanners/COMP-129-project')
    projDesc.textContent = "Trace is a mobile application that helps you pay off credit bills on time and in the best ways possible. Create a profile and add billing accounts to your portfolio to organize the way you pay off bills through the use of push notifications and a calendar function. This application was developed in Python on a team of of three using agile development practics. As part of this team my maoin focus was developing the entire UI and implementing functionality into the UI. I spent most of my time working on the UI but also developed a user data base for registered users so that information could be saved and retrived later."
    projImg.src = "Images/TraceProj.jpg";
    Imgcap.textContent = "Home Scren (left) Calendar (Right)"
  }
  else if(project == "Password Protector."){
    ProjBrief.textContent = "Application to help keep track of passwords on websites"
    ProjLink.setAttribute('href', 'https://github.com/BrandonReno/PasswordProtector') 
    projDesc.textContent = "Ever been so incredibly frustrated when you are logged out of a site that you forgot the password too? If so you are not the only one. I constantly lose track of passwords and which password goes to which site. I thought the idea of creating a password storage system was smart because it would always be on your desktop and you could run the application whenever you needed a password and retrieve it! With this in mind I decided to create Password Protector, an application designed in Python and Tkinter which holds passwords and which site they belong to. This system is secured by making the user set a password for the app so that only one with the password for the application can access all of the other passwords. From there the user is able to either set, get, or update passwords by clicking one of the boxes. I found myself using this tool very often and had a great time developing it."
    projImg.src = "Images/PP.jpg"
    Imgcap.textContent = "No UI Images Currently"
  }
  else if(project == "Swimming Converter."){
    ProjBrief.textContent = "Time Conversion with KNN"
    ProjLink.setAttribute('href', 'https://github.com/BrandonReno/SwimmingConverter')
    projDesc.textContent = "As a swimmer you have two different times for each event. One time represents the shortcourse yards, SCY, time and the other is the long course meter, LCM, time. The Olypics are swam in LCM while college sanctioned events such as NCAA are swum in SCY. Some athletes are great SCY swimmers but not great at LCM due to the different amount of walls and longer distance of the events. A typical way to figure out what a LCM time is from a SCY time is to past the time into a formula which will add some numbers together and then output your LCM time. This is often not very accurate because it represents just a basic formula and not gathered data from other athletes. To address this shortcoming I create a machine learning solution to this problem using KNN. In python with Tkinter I develop a gui that uses data from USA swimming to predict a users LCM or SCY time based on their gender, event, and time. This way the results are based around data from other athletes and not just an outputted fomula result."
    projImg.src = "Images/SwimApp2.JPG"
    Imgcap.textContent = "Basic Conversion Showing UI"
  }
  else if(project == "Color Optimizer."){
    ProjBrief.textContent = ("Color Learning with Neural Networks and Genetic Algorithims")
    ProjLink.setAttribute('href', 'https://github.com/BrandonReno/Color-Optimizer')
    projDesc.textContent = "In Python I developed a system that utilizes both a neural network and a genetic algorithim to learn colors based on RGB values. Initially this project was created with just the use of a nueral network which learned colors based on a training set of RGB values and then classified colors at an average percentage of 85%. I thought a way to expand this system would be to use a genetic algorithim to optimize to the best set of weights for the neural network and then test with the optimized weights. When my system runs it trains the neural network for X epochs and then outputs the best weights to my genetic algorithim. This repeates for X amount of 'generations' and then all of the weights in the genetic algorithim are optimized and the resulting optimized set are tested with the color test set. This expansion increased my accuracy to 96%, a high increase due to the optimization capabilities of the genetic algorithim. "
    projImg.src = "Images/AI2.JPG"
    Imgcap.textContent = "Example of Output after learning"
  }
  else if(project == "Escape Room."){
    ProjBrief.textContent = ("Mystery game consisting of multiple puzzles")
    ProjLink.setAttribute('href', 'https://github.com/comp55-spr19/group-project-the-lazy-wolves') 
    projDesc.textContent = "Escape Room is a puzzle game created to emulate real life escape rooms. The user is bale to view a number of rooms looking for clues to solve puzzles that will aid in the users escape of the room. This game was developed by myself and two others solely in Java. As a part of this team my main resposibilites were based on user interactions. By that I mean creating and calling functions based on what the user clicks on screen. I was also in charge of creating all of the graphics seen on screen. To do this I created 3d models in Maya and used them as images for the game. This allowed us to make our game look realistic rather than blocky and two dimensional."
    projImg.src = "Images/Escape1.png"
    Imgcap.textContent = "Designed Insect Puzzle Wall in Game"
  }
}


/*This snippet allows opacity to change for header when scrolled*/

$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();

  $('#Header').css({
    opacity: function() {
      var elementHeight = $(this).height();
      return (elementHeight - scrollTop) / elementHeight;
    }
  });
});