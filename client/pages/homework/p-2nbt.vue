<template>
    <main>
<div id="homewrapper">
  		<div id="homerow1">
  			<a href="/p-homek12">
				<img id="homelink" src="/images/homelink.png" />
			</a>
  			<h2 id='usernamehere'>Kay</h2>
  			<img id="candybowl" src="/images/tencandy.png" />
  			<a href="/p-comingsoon"><img id="accounticon" src="/images/accounticon.png" /></a>
  		</div>



  		<div id="activity">
			<h3 id="qNum">Number and Operations in Base Ten: Q</h3>
		

  			<div id="question_answer">
  				<div id="col1">
  					<h1 id="question"></h1>
  					<img id="question_image" src="/images/2nbt/2nbt_rec_blank.png">
  				</div>
  				<div id="col2">
  					<img id="responding_panda" src="/images/waiting_panda.png" />
  		
  				</div>
 
  			</div>

  			<div id="answer_options">
  				<img class="answer_option" id="answer1" src="/images/2nbt/blank_answer.png">
  				<img class="answer_option" id="answer2" src="/images/2nbt/blank_answer.png">
  				<img class="answer_option" id="answer3" src="/images/2nbt/blank_answer.png">
  			</div>
  			<div id="back_next">
  				<img id="back" src="/images/back_arrow.png">
  				<img id="next" src="/images/next_arrow.png">
  			</div>
		</div>
		<div id="footer">
			<div class="row4">
  				<p>Peppermint Math Tutor Grades K-4 by Galaga</p>
  				<p>Framingham State University | Software Engineering Spring 2021</p>
  				<p><a href="">Privacy Policy</a> | <a href="">Terms and Conditions of Use </a></p>
  			</div>
		</div>
	</div>


    </main>
</template>

<script>
export default {
    mounted() {
        	  /********************* Updating Username at top of Page ************/
// Get student's first name and store in a variable
var name = "Name Here";

// store the DOM node with id="username" in a variable
var updateUsername = document.getElementById('usernamehere'); 

// update the inner HTML of this node to the name from the student object
updateUsername.innerHTML = name;



/****** Declare variables for the question answer set and it's pictures *******/
	  var questionSet = new Map();
	  var answerSet = new Map();
	  var imageSet0 = new Map();
	  var imageSet1 = new Map();
	  var imageSet2 = new Map();
	  var imageSet3 = new Map();
	  var firstTry = new Map();
	  var i = 1;

	  var numCorrect = 0; // will be used to keep track of the number correct

	  window.onload = function() {
	  	  /* Upon page load, ensure that the rightAnswer, wrongAnswer don't display*/

	

		  /* Set up the Map() objects for the questions, answers, and image for the answer options */
		  questionSet.set(1, "Add these numbers:");
		  questionSet.set(2, "Which bundle represents ten?");
		  questionSet.set(3, "What represents 13?");
		  questionSet.set(4, "Without counting, add ten to 36");
		  questionSet.set(5, "Without counting, remove two tens from 68");
		  questionSet.set(6, "What is the right symbol for the following?");
		  questionSet.set(7, "Without counting, remove ten from 75");
		  questionSet.set(8, "Without counting, what represents twenty?");
		  questionSet.set(9, "What is the right symbol for the following?");
		  questionSet.set(10, "What represents 80?");

		  answerSet.set(1, "3");
		  answerSet.set(2, "2");
		  answerSet.set(3, "3");
		  answerSet.set(4, "3");
		  answerSet.set(5, "1");
		  answerSet.set(6, "2");
		  answerSet.set(7, "1");
		  answerSet.set(8, "2");
		  answerSet.set(9, "3");
		  answerSet.set(10, "2");

		  imageSet0.set(1, "../images/2nbt/2nbt_rec_11.png");
		  imageSet0.set(2, "../images/2nbt/2nbt_rec_blank.png");  
		  imageSet0.set(3, "../images/2nbt/2nbt_rec_blank.png");
		  imageSet0.set(4, "../images/2nbt/2nbt_rec_7.png");
		  imageSet0.set(5, "../images/2nbt/2nbt_rec_14.png");
		  imageSet0.set(6, "../images/2nbt/2nbt_rec_8.png");
		  imageSet0.set(7, "../images/2nbt/2nbt_rec_9.png");
		  imageSet0.set(8, "../images/2nbt/2nbt_rec_blank.png");
		  imageSet0.set(9, "../images/2nbt/2nbt_rec_12.png");
		  imageSet0.set(10, "../images/2nbt/2nbt_rec_blank.png");

		  imageSet1.set(1, "../images/2nbt/2nbt_11a.png");
		  imageSet1.set(2, "../images/2nbt/2nbt_4b.png");
		  imageSet1.set(3, "../images/2nbt/2nbt_10a.png");
		  imageSet1.set(4, "../images/2nbt/2nbt_7a.png");
		  imageSet1.set(5, "../images/2nbt/2nbt_14a.png");
		  imageSet1.set(6, "../images/2nbt/2nbt_9a.png");
		  imageSet1.set(7, "../images/2nbt/2nbt_8a.png");
		  imageSet1.set(8, "../images/2nbt/2nbt_1a.png");
		  imageSet1.set(9, "../images/2nbt/2nbt_9a.png");
		  imageSet1.set(10, "../images/2nbt/2nbt_13a.png");

		  imageSet2.set(1, "../images/2nbt/2nbt_11b.png");
		  imageSet2.set(2, "../images/2nbt/2nbt_1a.png");
		  imageSet2.set(3, "../images/2nbt/2nbt_10b.png");
		  imageSet2.set(4, "../images/2nbt/2nbt_7c.png");
		  imageSet2.set(5, "../images/2nbt/2nbt_14b.png");
		  imageSet2.set(6, "../images/2nbt/2nbt_9b.png");
		  imageSet2.set(7, "../images/2nbt/2nbt_8b.png");
		  imageSet2.set(8, "../images/2nbt/2nbt_1b.png");
		  imageSet2.set(9, "../images/2nbt/2nbt_9b.png");
		  imageSet2.set(10, "../images/2nbt/2nbt_13b.png");

		  imageSet3.set(1, "../images/2nbt/2nbt_11c.png");		  
		  imageSet3.set(2, "../images/2nbt/2nbt_4c.png");
		  imageSet3.set(3, "../images/2nbt/2nbt_10c.png");		  
		  imageSet3.set(4, "../images/2nbt/2nbt_7b.png");
		  imageSet3.set(5, "../images/2nbt/2nbt_14c.png");
		  imageSet3.set(6, "../images/2nbt/2nbt_9c.png");
		  imageSet3.set(7, "../images/2nbt/2nbt_8c.png");
		  imageSet3.set(8, "../images/2nbt/2nbt_1c.png");
		  imageSet3.set(9, "../images/2nbt/2nbt_9c.png");
		  imageSet3.set(10, "../images/2nbt/2nbt_13c.png");

		  // These variables ensure they can only try each question once per HW session
		  firstTry.set(1, true);
		  firstTry.set(2, true);
		  firstTry.set(3, true);
		  firstTry.set(4, true);
		  firstTry.set(5, true);
		  firstTry.set(6, true);
		  firstTry.set(7, true);
		  firstTry.set(8, true);
		  firstTry.set(9, true);
		  firstTry.set(10, true);

		  /* Display the right question on the page*/
		  document.getElementById('question').innerHTML = "" + questionSet.get(i);
		  document.getElementById('qNum').innerHTML = "Number and Operations in Base Ten: Q" + i;

		  /* Display the 3 answer options on the page by re-setting the image src */
		var a0 = document.getElementById('question_image');
	  	a0.setAttribute('src', imageSet0.get(i));
		var a1 = document.getElementById('answer1');
	  	a1.setAttribute('src', imageSet1.get(i));
	  	var a2 = document.getElementById('answer2');
	  	a2.setAttribute('src', imageSet2.get(i));
		var a3 = document.getElementById('answer3');
	  	a3.setAttribute('src', imageSet3.get(i));

	  	// call the function to display the right number of rewards
	  	displayReward();
	  }

	  /* Function to change the panda pic to show if they got the answer right or wrong */

	  function processAnswer(option) {
	  	  // run only if this is their first try for this question, otherwise do nothing
	  	 if(firstTry.get(i) == true) {

	  		/* if the answer is right, show the right panda and increment how  many they have correct */
	  		if(option == answerSet.get(i)) {
	  			var a1 = document.getElementById('responding_panda');
	  			a1.setAttribute('src', "../images/great_job_panda.png");
	  			numCorrect++;
	  			// call the function to display the right number of rewards
	  			displayReward();
	  		}
	  		// If the answer is wrong, show the wrong_panda
	  		else {
	  			var a1 = document.getElementById('responding_panda');
	  			a1.setAttribute('src', "../images/wrong_panda.png");

	  		}
	  		firstTry.set(i, false); // change to false so they can't try this question again
	  	}

	  }

	/* Function to move to the next question */
	  function nextQ() {
	  	
	  	// if there's no more questions, show the last thing
	  	if (i == 10) {
	  		firstTry.set(i, false); // change to false so they can't answer this
	  		window.location.assign("p-goodjob");
			//alert("No more questions!");

		} else {

			i++;



			document.getElementById('qNum').innerHTML = "Number and Operations in Base Ten: Q" + i;
			/* When go to the next question, Re-set the panda pic back to the neutral panda */
			var a1 = document.getElementById('responding_panda');
	  		a1.setAttribute('src', "../images/waiting_panda.png");

			/* Update question on the page*/
			document.getElementById('question').innerHTML = questionSet.get(i);
		  /* Update the 3 answer options on the page by re-setting the image src */
		 	var a0 = document.getElementById('question_image');
	  		a0.setAttribute('src', imageSet0.get(i));
			var a1 = document.getElementById('answer1');
	  		a1.setAttribute('src', imageSet1.get(i));
	  		var a2 = document.getElementById('answer2');
	  		a2.setAttribute('src', imageSet2.get(i));
			var a3 = document.getElementById('answer3');
	  		a3.setAttribute('src', imageSet3.get(i));
			
		}
	  }

		/* Function to move to the previous question */
	  function previousQ() {
	  	if (i == 1) {
	  		alert("This is the 1st question!");
		} else {
			i--;

	
			document.getElementById('qNum').innerHTML = "Number and Operations in Base Ten: Q" + i;
			/* Update question on the page*/
			document.getElementById('question').innerHTML = questionSet.get(i);

			/* When go to the next question, Re-set the panda pic back to the neutral panda */
			var a1 = document.getElementById('responding_panda');
	  		a1.setAttribute('src', "../images/waiting_panda.png");

		  /* Update the 3 answer options on the page by re-setting the image src */
		  	var a0 = document.getElementById('question_image');
	  		a0.setAttribute('src', imageSet0.get(i));
			var a1 = document.getElementById('answer1');
	  		a1.setAttribute('src', imageSet1.get(i));
	  		var a2 = document.getElementById('answer2');
	  		a2.setAttribute('src', imageSet2.get(i));
			var a3 = document.getElementById('answer3');
	  		a3.setAttribute('src', imageSet3.get(i));
	
			/*
			document.getElementById('answer').innerHTML = "Answer: " + answerSet.get(i);
			document.getElementById('question-header').innerHTML = "<br/><br/>Question " + (i + 1);*/
		}
	  }

	/* Use event listener to respond to a click on the next/back arrow, and call the next/previous functions */
		var el1 = document.getElementById('next');
		el1.addEventListener('click', nextQ, false);

		var el2 = document.getElementById('back');
		el2.addEventListener('click', previousQ, false);

	/* use event listener to respond to click on the answer1 option */
	
		var an1 = document.getElementById('answer1');
		//an1.addEventListener('click', processAnswer, false);

		an1.addEventListener('click', function(){processAnswer(1);}, false); 
		// wrap the function in an anonymous function and pass the number 1 to the function
		
		var an2 = document.getElementById('answer2');
		an2.addEventListener('click', function(){processAnswer(2);}, false); 
		
		var an3 = document.getElementById('answer3');
		an3.addEventListener('click', function(){processAnswer(3);}, false); 
	
	/* Function to show the right reward picture */
	// Depending on the number of rewards stored in the student object
// display the right picture by changing the image source
function displayReward() {
	switch(numCorrect) {
	case 0:
		document.getElementById("candybowl").src='/images/zerocandy.png';
		break;
	case 1:
		document.getElementById("candybowl").src='/images/onecandy.png';
		break;
	case 2:
		document.getElementById("candybowl").src='/images/twocandy.png';
		break;
	case 3:
		document.getElementById("candybowl").src='/images/threecandy.png';
		break;
	case 4:
		document.getElementById("candybowl").src='/images/fourcandy.png';
		break;
	case 5:
		document.getElementById("candybowl").src='/images/fivecandy.png';
		break;
	case 6:
		document.getElementById("candybowl").src='/images/sixcandy.png';
		break;
	case 7:
		document.getElementById("candybowl").src='/images/sevencandy.png';
		break;
	case 8:
		document.getElementById("candybowl").src='/images/eightcandy.png';
		break;
	case 9:
		document.getElementById("candybowl").src='/images/ninecandy.png';
		break;
	case 10:
		document.getElementById("candybowl").src='/images/tencandy.png';
		break;
	default:
		document.getElementById("candybowl").src='/images/zerocandy.png';
		break;
	}
}
    }
}
</script>

<style>

/************** Homework 2NBT ****************/


/* Colors
light green: #ECF9F3
medium green: #C3ECDC;
dark green: #2C8C67;

Tips:
padding/margin list goes top, right, bottom, left

Add a border to identify an element
	border-width: 2px 2px 2px 2px;
	border-style: solid;
	border-color: purple;
*/


body{
	background-color: #C3ECDC;
	font-family: Arial, Verdana, sans-serif;
}

a{
	color: #2C8C67;
	text-decoration: none;
}

/************* top row *******************/

#homerow1 {
	float: left;
	width: 100%;
	padding: 0px;
	margin: 0px;
}


#homelink {
	float: left;
	padding: 0px;
	margin: 4px 0% 0px 0%;
}

h2, h3 {
	float: left;
	color: #2C8C67;
	background-color: white;
	border-radius: 5px;
	padding: 5px 0% 5px 0%;
	text-align: center;
}

#candybowl {
	float: left;
	padding: 0px 0% 0px 0%;
	margin: 5px 0% 0px 0%;
}

#accounticon {
	float: right;
	padding: 0px;
	margin: 4px 1% 0px 0%;
}

/************* activity section *******************/

#activity {
	float: left;
	width: 100%;
	background-color: #ECF9F3;
}


#activity>h2, #activity>h3, #answer-label>h3 {
	width: 100%;
	margin: 20px 0% 0px 0%;
	text-align: center;
	background-color: #ECF9F3;
}

#question_answer {
	float: left;}

#question {
	text-align: center;
	float: left;
	width: 100%;
	margin: 20px 0% 0px 0%;
	background-color: #ECF9F3;
}

#question_image {
	float: left;
}

#responding_panda {
	float: right;
}

#answer_options {
	float: left;
}

.answer_option {
	float: left;
}

#back_next {
	width: 100%;
	float: left;
}

#back {float: left;}

#next {float: right;}



/************* bottom row *******************/
.row4 {
	float: left;
	width: 100%;
	padding: 0px 0% 20px 0%;
	margin: 0px;
	background-color: #2C8C67;}

.row4>p, .row4>p>a{
	color: white;
	text-align: center;
	font-size: 80%;
	line-height: .5em;
	text-decoration: none;}

.row4>p>a:hover{
	color: #ECF9F3;}



/* Style for bigger TV/Computer screen */
@media (min-width: 1000px) {
	#homelink {width: 7%;}
	#candybowl {width: 12%;}
	h2 {width: 30%; margin: 30px 0% 0px 22%; }
	#accounticon { 	width:4%;}
	.row4>p{font-size: 70%;}

	#question_answer {width: 100%;}

	#question_image {
		width: 40%;
		margin: 20px 0% 20px 30%;}

	#responding_panda {
		width: 20%;}

	#answer_options {width: 100%;}

	.answer_option {
		width: 10%;
		margin: 1px 0.2% 1px 17.5%;}

	.answer_option:hover {
		border-width: 1px 1px 1px 1px;
		border-style: solid;
		border-color: #2C8C67;
		margin: 0px 0% 0px 17.5%;}
	
	#back {
		width: 5%;
		margin: 10px 0% 10px 5%;}

	#back:hover {
		width: 5.2%;
		margin: 9.8px 0% 9px 4.5%;}

	#next {
		width: 5%;
		margin: 10px 5% 10px 0%;}

	#next:hover {
		width: 5.2%;
		margin: 9.8px 4.5% 9px 0%;}
}

/* Style for medium iPad-size screen */

@media (max-width: 1000px) {

	#homelink {width: 10%;}
	#candybowl {width: 13%;}
	h2 {width: 30%; margin: 15px 0% 0px 18%; }
	#accounticon { 	width:4%;}
	.row4>p{font-size: 70%;}

	#question_answer {width: 100%;}

	#question_image {
		width: 40%;
		margin: 20px 0% 20px 30%;}

	#responding_panda {width: 20%;}

	#answer_options {width: 100%;}

	.answer_option {
		width: 10%;
		margin: 0px 0% 0px 17.5%;}

	#back {
		width: 5%;
		margin: 10px 0% 10px 5%;}

	#next {
		width: 5%;
		margin: 10px 5% 10px 0%;}
}

/* Style for very small screens */
@media (max-width: 610px) { 
	#homelink {width: 10%;}
	#candybowl {width: 20%;}
	#usernamehere {margin-top: 20px;}
	h2 {font-size: 90%; width: 30%; margin: 5px 0% 0px 15%; }
	#accounticon { 	width:6%;}
	.row4>p{font-size: 50%;}

	#question_answer {width: 75%;}

	h3 {font-size: 80%;}

	#question {
		font-size: 110%;
		min-height: 70px;}

		#question_image {
		width: 100%;
		margin: 30px 0% 20px 0%;}

	#responding_panda {
		width: 50%;
		margin: 0px 20% 0px 0%;}

	#answer_options {
			width: 20%;
			float: right;
			margin: 40px 1% 0px 0%;}

	.answer_option {
		width: 100%;
		margin: 0px 0% 30px 0%;}

	#back {
		width: 15%;
		margin: 30px 0% 0% 10%;}

	#next {
		width: 15%;
		margin: 30px 10% 0px 0%;}

}


</style>
