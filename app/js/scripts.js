var menuFixed=document.querySelector(".header-up-active");document.addEventListener("scroll",function(){50<document.documentElement.scrollTop?menuFixed.classList.add("active-btn-up"):menuFixed.classList.remove("active-btn-up")});var myButton=document.getElementById("myBtnUp");function scrollFunction(){20<document.body.scrollTop||20<document.documentElement.scrollTop?myButton.style.display="block":myButton.style.display="none"}window.addEventListener("scroll",function(){scrollFunction()}),$(document).ready(function(){$("#myBtnUp").on("click",function(e){if(""!==this.hash){e.preventDefault();var t=this.hash;$("html, body").animate({scrollTop:$(t).offset().top},800,function(){window.location.hash=t})}})});for(var closeBtnPopup=document.querySelector(".close"),popup=document.querySelector(".popup-in-slider"),popupBtns=document.querySelectorAll("#openPopup"),i=0;i<popupBtns.length;i++)popupBtns[i].addEventListener("click",function(e){e.preventDefault,popup.style.display="block"});function filterSelection(e){var t,n;for(t=document.getElementsByClassName("filterFig"),"all"==e&&(e=""),n=0;n<t.length;n++)w3RemoveClass(t[n],"show"),-1<t[n].className.indexOf(e)&&w3AddClass(t[n],"show")}function w3AddClass(e,t){var n,o,l;for(o=e.className.split(" "),l=t.split(" "),n=0;n<l.length;n++)-1==o.indexOf(l[n])&&(e.className+=" "+l[n])}function w3RemoveClass(e,t){var n,o,l;for(o=e.className.split(" "),l=t.split(" "),n=0;n<l.length;n++)for(;-1<o.indexOf(l[n]);)o.splice(o.indexOf(l[n]),1);e.className=o.join(" ")}closeBtnPopup.addEventListener("click",function(){popup.style.display="none"}),document.addEventListener("click",function(e){e.target===popup&&(popup.style.display="none")}),document.addEventListener("keydown",function(e){27===e.keyCode&&(popup.style.display="none")}),filterSelection("all");var btnContainer=document.getElementById("myBtnContainer"),btns=btnContainer.getElementsByClassName("btn");for(i=0;i<btns.length;i++)btns[i].addEventListener("click",function(){var e=document.getElementsByClassName("active");e[0].className=e[0].className.replace(" active",""),this.className+=" active"});$(".recent-posts-slider").flickity({cellAlign:"center",contain:!0,wrapAround:!0,pageDots:!1}),$(".header-slider").flickity({cellAlign:"center",wrapAround:!0,pageDots:!0,arrowShape:{x0:10,x1:60,y1:50,x2:60,y2:45,x3:15}});var player,playBtnVideo=document.getElementById("play-btn");function addClassForPlay(){document.getElementById("ytplayer").classList.add("play-video");var e=document.createElement("script");e.src="https://www.youtube.com/player_api";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}function onYouTubePlayerAPIReady(){player=new YT.Player("ytplayer",{height:"705",width:"100%",videoId:"1yVF-N__JKk?autoplay=1&?color=white"})}playBtnVideo.addEventListener("click",addClassForPlay);