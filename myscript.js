        navigator.geolocation.getCurrentPosition(success, error);
                navigator.geolocation.getCurrentPosition(drawMap);


function skip(){
	try{

            
            var num = document.getElementById("myInput").value;
			var vid = document.getElementById("myvid");
			vid.ontimeupdate = function() {myFunction()};

			
            vid.currentTime = num;
            vid.play();
            document.getElementById("vp").innerHTML = "This video starting playing from " + vid.currentTime + " seconds.";

            function myFunction() {
			  document.getElementById("vp1").innerHTML = "Current Position: "+Math.round(vid.currentTime)+ " seconds";
			}
         }

   
    	catch(err) {
  				document.getElementById("vp").innerHTML = err.message;
                    }
    }

function newv(){
	try{
	var video = document.getElementById('myvid');
    var source = document.getElementById('mys');

	source.setAttribute('src', 'https://ia801705.us.archive.org/26/items/funny_202010/1%20%281%29.mp4');
	video.setAttribute('poster','https://pngimg.com/uploads/mr_bean/mr_bean_PNG37.png');
	    document.getElementById("vname").innerHTML="Mr Bean";

    video.load();
    video.play();
}
catch(err) {
	  				document.getElementById("vp").innerHTML = err.message;


}

}

function preview(){
	var video = document.getElementById('myvid');

	 video.currentTime=20;
     // document.getElementById('prev')=video.play();
     video.play();
    setInterval(function(){
        
        if(video.currentTime>23){
        	video.currentTime=0;
          
          video.pause();
        }
      },1000);
    }

function rot(){
	var video = document.getElementById('myvid');
	document.getElementById("myvid").style.transform = "rotate(180deg)";
	video.play();

}
function rotback(){
	var video = document.getElementById('myvid');
	document.getElementById("myvid").style.transform = "rotate(0deg)";
	video.play();

}

function canv_mirr(){
	
    var v = document.getElementById('myvid');
    var canvas = document.getElementById('mycanvas');
    var context = canvas.getContext('2d');

    var cw = 600;
    var ch = 200;
    canvas.width = cw;
    canvas.height = ch;
    v.play();
    // draw(this,context,cw,ch);
    v.addEventListener('play', function(){
        draw(this,context,cw,ch);
    },false);



function draw(v,c,w,h) {
    if(v.paused || v.ended) return false;
    c.drawImage(v,0,0,w,h);
    setTimeout(draw,20,v,c,w,h);
}

}

function chek(){
	  var checkBox = document.getElementById("myCheck");
      var v = document.getElementById('myvid');

	  if (checkBox.checked == true){
	  		v.removeAttribute('controls');

      }
      else{
         v.setAttribute('controls', 'true');
      }

}

function addc(){
		  document.getElementById("log").innerHTML="Login First";
	      document.getElementById("login").style.visibility = "visible";


}

function loginw(){
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;

	if(fname=="" || lname=="" ){
		alert("Required First Name and Last Name");
	}
	else if(phone<7){
		alert("Phone Incorrect");
	}

	else{
		if(sessionStorage[fname]==null){
			sessionStorage[fname]=lname;
			comm_fn();

		}
		else{
			document.getElementById("log").innerHTML="Hi "+fname+ ". already exists. Login again!!";
		}
	
	// alert(window.sessionStorage.getItem(fname));
}
		  function comm_fn(){
		 document.getElementById("log").innerHTML="Hi "+(window.sessionStorage.getItem(fname))+"!";

		  document.getElementById("log2").innerHTML="Enter your comment below";
	      document.getElementById("login").style.visibility = "hidden";


	      document.getElementById("comm").style.visibility = "visible";

		  }



}

function comm_sub(){
	var fname = document.getElementById("fname").value;

	var user=window.sessionStorage.getItem(fname);
	var data=document.getElementById("commdata").value;		


	// console.log(user);
	// console.log(data);
	var currentTime = new Date();                
	   	 // currentdate.getDate() + "/"
      //           + (currentdate.getMonth()+1)  + "/" 
      //           + currentdate.getFullYear() + " @ "  
      //           + currentdate.getHours() + ":"  
      //           + currentdate.getMinutes() + ":" 
      //           + currentdate.getSeconds();
	   	 data+="  <table style='float:right;'><tr><td style='border:2px solid black'> "+currentTime.getDate()+"/"+(currentTime.getMonth()+1)+"/"+currentTime.getFullYear()+"@"+currentTime.getHours()+":"+currentTime.getMinutes()+":"+currentTime.getSeconds()+"</td>";


	   	 // document.getElementById('map3').innerHTML=document.getElementById('map2').innerHTML;
	   	 // alert(mapsam);
	   	 // localStorage["map"]=document.getElementById('map2').innerHTML;
		 data+= "<td style='border:2px solid black'>"+localStorage.getItem("CITY")+"</td><td style='border:2px solid black'>"+localStorage.getItem("COUNTRY")+"</td><td><details><summary>Show map</summary><p id='map'>This is the MAP</p></details></td></tr></table>";
	var text=" ";
	
	if(data){
		localStorage.setItem(user,data);
		 location.reload();

	}

	for(let i=0;i<localStorage.length;i++){
		const key=localStorage.key(i);
		const value=localStorage.getItem(key);

		// document.getElementById("comm_out").innerHTML+=`HI ${key}: ${value}<br/>`; 
		text+=localStorage.getItem(key)+ " "+ localStorage.key(i) +"<br>";

	}
	// document.getElementById("comm_out").innerHTML+=text;





}
function myfn(){

	// var fname = document.getElementById("fname").value;

	// var user=window.sessionStorage.getItem(fname);
	// var data=document.getElementById("commdata").value;		


	
	var text=" ";

	// if(data){
	// 	localStorage.setItem(user,data);
	// 	location.reload();

	// }
	 
	for(let i=0;i<localStorage.length;i++){
		const key=localStorage.key(i);
		const value=localStorage.getItem(key);
		
		if(localStorage.key(i)!="CITY" && localStorage.key(i)!="COUNTRY" ){
		// document.getElementById("comm_out").innerHTML+=`HI ${key}: ${value}<br/>`; 
		text+= "<tr><td style='border:2px solid black;text-align:center''>"+ localStorage.key(i)+"</td><td style='border:2px solid black'>"+localStorage.getItem(key)+"</td></tr><br>";

	}}
	document.getElementById("tcomm_out").innerHTML+=text;





}
function v1(){
	var video = document.getElementById('myvid');
    var source = document.getElementById('mys');
    document.getElementById("vname").innerHTML="Now Playing: BotPlay";

	source.setAttribute('src', 'https://ia804609.us.archive.org/26/items/fnf-huggy-wuggy-vs-cartoon-cat/FNF%20Huggy%20Wuggy%20VS%20Cartoon%20Cat.mp4');
	video.setAttribute('poster','https://pngimg.com/uploads/sonic_hedgehog/sonic_hedgehog_PNG48.png');
			video.setAttribute('title','BotPlay');


    video.load();
    video.play();
}
function v2(){
	var video = document.getElementById('myvid');
    var source = document.getElementById('mys');
    document.getElementById("vname").innerHTML="Now Playing: Anime OnePunchMan";

	source.setAttribute('src', 'https://ia801404.us.archive.org/9/items/asd-anasdsatsu-kizoku-10-720p/%5Bneonime%5D_Ansatsu%20Kizoku%2010-720p.mp4');
	video.setAttribute('poster','https://pngimg.com/uploads/anime_girl/anime_girl_PNG109.png');
		video.setAttribute('title','OnePunchMan');


    video.load();
    video.play();
}
function v3(){
	var video = document.getElementById('myvid');
    var source = document.getElementById('mys');
    document.getElementById("vname").innerHTML="Now Playing: Upin & Ipin";

	source.setAttribute('src', 'https://ia600101.us.archive.org/0/items/KVUPHD/Amal%20Jariah%20%28FULL%20EPISODE%202017%29.mp4');
	video.setAttribute('poster','https://pngimg.com/uploads/chip_and_dale/chip_and_dale_PNG21.png');
			video.setAttribute('title','UpinIpin');


    video.load();
    video.play();
}
// function myfn2(){
// 	alert("loading");
// }

// function comm_sub(){
// 	 	var fname = document.getElementById("fname").value;

// 	var user=window.sessionStorage.getItem(fname);
// 	var cdata=document.getElementById("commdata").value;	

// 	function render(data){
// 		var html="<div class='commentbox'><span>"+data."</span></div>"
// 		$('#comm_out').append(html);
// 	}
// }
        

        function success(position) {



            console.log(position.coords.latitude);
            console.log(position.coords.longitude);

            // var GEOCODING = 'https://api-adresse.data.gouv.fr/reverse/?lon=2.37&lat=48.357' ;
            var GEOCODING = 'https://api-adresse.data.gouv.fr/reverse/?lon='+position.coords.longitude+'&lat='+position.coords.latitude ;

            // + position.coords.latitude + '%2C' + position.coords.longitude + '&language=en';
            // console.log(GEOCODING);

            // console.log(GEOCODING.properties);
            // var user=sessionStorage.getItem("sameer");
            $.getJSON(GEOCODING).done(function(location) {
                // console.log(location);
                console.log(location.features[0].properties.context);
                var city=location.features[0].properties.city;
                var context=location.features[0].properties.context;
                var postcode=location.features[0].properties.postcode;
                                // var context=location.features[0].properties.context;

                console.log(city);
                localStorage["CITY"]=city;
                // localStorage["COUNTRY"]="France";
                // localStorage["POSTCODE"]=postcode;

                                // localStorage["context"]=city;

                // sessionStorage["CITY"]=context;
                // for(var i=0;i<location.results.length)
            })


        }

        function error(err) {
            console.log(err)
        }

function drawMap(position){
	// alert('Drawing map');
var center = [position.coords.latitude, position.coords.longitude];

// Create the map
var map = L.map('map').setView(center, 3);

// Set up the OSM layer
L.tileLayer(
  'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18
  }).addTo(map);

// add a marker in the given location
L.marker(center).addTo(map);
}

function playbubble(){
	var video = document.getElementById('bubvid1');
	video.play();

}
function signinform(){
      document.getElementById("login").style.visibility = "visible";


}





 

