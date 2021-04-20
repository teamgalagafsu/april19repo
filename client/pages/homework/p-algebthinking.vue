<template>
    <main>
<div id="homewrapper">
  		<div id="homerow1">
  			<a href="p-homek12">
				<img id="homelink" src="/images/homelink.png" />
			</a>
  			<h2>Kay</h2>
  			<img id="candybowl" src="/images/tencandy.png" />
  			<a href="/p-comingsoon"><img id="accounticon" src="/images/accounticon.png" /></a>
  		</div>
		<div>
			<h3 style="font-size: 26px;"><br/><br/>Operations and Algebraic Thinking</h3>
		</div>
		<div>
			<h3 id="question-header" style="font-size: 20px;"></h3>
		</div>
  		<div id="activity">
			<table align="center" width="100%">
				<tbody>
				<tr id="question-label">
					<td align="right" width="20%">
						<div id="image"></div>
					<td align="center" width="60%">
						<div class="h3" id="question" style="font-size: 26px;"></div>
					</td>
					<td align="left" width="20%">
						<div id="image2"></div>
					</td>
					<!-- </td> -->
				</tr>
				<tr id="rightAnswer" >
					<td align="center" style="background-color: green;" colspan="3">
						<h3 style="font-size: 26px; color: white;">That's right!</h3>
					</td>
				</tr>
				<tr id="wrongAnswer">
					<td align="center" style="background-color: darkred;" colspan="3">
						<h3 style="font-size: 26px; color: white;">Oh no, that's wrong! View the right answer below.</h3>
					</td>
				</tr>
				<tr id="answer-label">
					<td align="center" style="border: none;" colspan="3">
						<h3 id="answer" style="font-size: 22px; color: #2C8C67;"></h3>
					</td>
				</tr>
				<tr>
					<td width="10%" align="center" style="border: none;">
						<input type="button" class="button" value="Back" @click="this.previous()">
					</td>
					<td width="80%" align="center" style="border: none;">
						<input type="button" class="button" value="Answer" @click="this.processAnswer()">
					</td>
					<td width="10%" align="right" style="border: none;">
						<input type="button" class="button" value="Next" @click="this.next()">
					</td>
				</tr>
				</tbody>
			</table>
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
	methods: {
		processAnswer() {
		  	var userAnswer = prompt("Please type your answer below:")
		  	if (userAnswer === answerSet.get(i)) {
				  document.getElementById("rightAnswer").style.display = "";
				  document.getElementById("wrongAnswer").style.display = "none";
		  	} else {
				  document.getElementById("rightAnswer").style.display = "none";
				  document.getElementById("wrongAnswer").style.display = "";
		  	}
		  	document.getElementById("answer-label").style.display = "";
	  	},
		next() {
	  		if (i == 9) {
				alert("No more questions!");
			} else {
				i++;

				document.getElementById("rightAnswer").style.display = "none";
				document.getElementById("wrongAnswer").style.display = "none";
				document.getElementById("answer-label").style.display = "none";

				document.getElementById('question').innerHTML = questionSet.get(i);
				document.getElementById('answer').innerHTML = "Answer: " + answerSet.get(i);
				document.getElementById('image').innerHTML = imageSet1.get(i);
				document.getElementById('image2').innerHTML = imageSet2.get(i);
				document.getElementById('question-header').innerHTML = "<br/><br/>Question " + (i + 1);
			}
	  	},
	  	next() {
	  		if (i == 9) {
				alert("No more questions!");
			} else {
				i++;

				document.getElementById("rightAnswer").style.display = "none";
				document.getElementById("wrongAnswer").style.display = "none";
				document.getElementById("answer-label").style.display = "none";

				document.getElementById('question').innerHTML = questionSet.get(i);
				document.getElementById('answer').innerHTML = "Answer: " + answerSet.get(i);
				document.getElementById('image').innerHTML = imageSet1.get(i);
				document.getElementById('image2').innerHTML = imageSet2.get(i);
				document.getElementById('question-header').innerHTML = "<br/><br/>Question " + (i + 1);
			}
	  	}
	},
	mounted() {
    	var questionSet = new Map();
	  	var answerSet = new Map();
	  	var imageSet1 = new Map();
	  	var imageSet2 = new Map();
	  	var i = 0;

	  	window.onload = function() {
		  document.getElementById("rightAnswer").style.display = "none";
		  document.getElementById("wrongAnswer").style.display = "none";
		  document.getElementById("answer-label").style.display = "none";

		  questionSet.set(0, "Pablo has 3 apples. Maria has 8 apples.<br/>They decide to combine their apples together.<br/><br/>How many apples do they have together?");
		  questionSet.set(1, "11 - 5 = ?");
		  questionSet.set(2, "Shaquille has 17 pet hermit crabs.<br/><br/>Does he have an even or odd number of hermit crabs?");
		  questionSet.set(3, "Janet has an ice tray with two rows and 6 columns.<br/><br/>How many pieces of ice will she have if she fills the whole tray?");
		  questionSet.set(4, "20 - 13 = ?");
		  questionSet.set(5, "Shiva has 10 books.<br/>He decides to give one book to Joan.<br/><br/>How many books does he have left?");
		  questionSet.set(6, "5 + 14 = ?");
		  questionSet.set(7, "Mark has 8 siblings.<br/><br/>Does he have an even or odd number of siblings?");
		  questionSet.set(8, "Ha-yoon has 3 shelves on his bookshelf.<br/>Each shelf can fit 10 books.<br/><br/>How many books can he fit on his bookshelf?");
		  questionSet.set(9, "Akua has 20 cookies.<br/>She gives 3 to Jonas.<br/><br/>How many cookies does she have left?");

		  answerSet.set(0, "11");
		  answerSet.set(1, "6");
		  answerSet.set(2, "odd");
		  answerSet.set(3, "12");
		  answerSet.set(4, "7");
		  answerSet.set(5, "9");
		  answerSet.set(6, "19");
		  answerSet.set(7, "even");
		  answerSet.set(8, "30");
		  answerSet.set(9, "17");
		  
		  imageSet1.set(0, "<img src='../images/apples.png' width='400px' height='350px' align='right' />");
		  imageSet1.set(1, "<img src='../images/11fruits.png' width='300px' height='300px' align='right' />");
		  imageSet1.set(2, "<img src='../images/hermit.png' width='300px' height='300px' align='right' />");
		  imageSet1.set(3, "<img src='../images/icetray.png' width='250px' height='250px' align='right' />");
		  imageSet1.set(4, "<img src='../images/pandabubbles.png' width='400px' height='300px' align='right' />");
		  imageSet1.set(5, "<img src='../images/books.png' width='300px' height='300px' align='right' />");
		  imageSet1.set(6, "<img src='../images/pandatest.png' width='300px' height='300px' align='right' />");
		  imageSet1.set(7, "<img src='../images/kids.png' width='400px' height='300px' align='right' />");
		  imageSet1.set(8, "<img src='../images/bookshelf2.png' width='250px' height='250px' align='right' />");
		  imageSet1.set(9, "<img src='../images/cookies.png' width='400px' height='250px' align='right' />");

		  imageSet2.set(0, "<img src='../images/pandaapple.png' width='250px' height='250px' align='left' />");
		  imageSet2.set(1, "<img src='../images/5fruits.png' width='350px' height='300px' align='left' />");
		  imageSet2.set(2, "<img src='../images/hermit2.png' width='300px' height='300px' align='left' />");
		  imageSet2.set(3, "<img src='../images/icetray2.png' width='350px' height='300px' align='left' />");
		  imageSet2.set(4, "<img src='../images/pandabamboo.png' width='300px' height='300px' align='left' />");
		  imageSet2.set(5, "<img src='../images/pandabook.png' width='300px' height='200px' align='left' />");
		  imageSet2.set(6, "<img src='../images/peppermint5.png' width='300px' height='300px' align='left' />");
		  imageSet2.set(7, "<img src='../images/kids2.png' width='300px' height='300px' align='left' />");
		  imageSet2.set(8, "<img src='../images/bookshelf.png' width='300px' height='300px' align='left' />");
		  imageSet2.set(9, "<img src='../images/cookies2.png' width='300px' height='300px' align='left' />");

		  document.getElementById('question').innerHTML = "" + questionSet.get(i);
		  document.getElementById('answer').innerHTML = "Answer: " + answerSet.get(i);
		  document.getElementById('image').innerHTML = imageSet1.get(i);
		  document.getElementById('image2').innerHTML = imageSet2.get(i);
		  document.getElementById('question-header').innerHTML = "<br/><br/>Question " + (i+1);

	  }

	//   function processAnswer() {
	// 	  var userAnswer = prompt("Please type your answer below:")
	// 	  if (userAnswer === answerSet.get(i)) {
	// 		  document.getElementById("rightAnswer").style.display = "";
	// 		  document.getElementById("wrongAnswer").style.display = "none";
	// 	  } else {
	// 		  document.getElementById("rightAnswer").style.display = "none";
	// 		  document.getElementById("wrongAnswer").style.display = "";
	// 	  }
	// 	  document.getElementById("answer-label").style.display = "";
	//   }

	//   function next() {
	//   	if (i == 9) {
	// 		alert("No more questions!");
	// 	} else {
	// 		i++;

	// 		document.getElementById("rightAnswer").style.display = "none";
	// 		document.getElementById("wrongAnswer").style.display = "none";
	// 		document.getElementById("answer-label").style.display = "none";

	// 		document.getElementById('question').innerHTML = questionSet.get(i);
	// 		document.getElementById('answer').innerHTML = "Answer: " + answerSet.get(i);
	// 		document.getElementById('image').innerHTML = imageSet1.get(i);
	// 		document.getElementById('image2').innerHTML = imageSet2.get(i);
	// 		document.getElementById('question-header').innerHTML = "<br/><br/>Question " + (i + 1);
	// 	}
	//   }

	//   function previous() {
	//   	if (i == 0) {
	//   		alert("This is the 1st question!");
	// 	} else {
	// 		i--;

	// 		document.getElementById("rightAnswer").style.display = "none";
	// 		document.getElementById("wrongAnswer").style.display = "none";
	// 		document.getElementById("answer-label").style.display = "none";

	// 		document.getElementById('question').innerHTML = questionSet.get(i);
	// 		document.getElementById('answer').innerHTML = "Answer: " + answerSet.get(i);
	// 		document.getElementById('image').innerHTML = imageSet1.get(i);
	// 		document.getElementById('image2').innerHTML = imageSet2.get(i);
	// 		document.getElementById('question-header').innerHTML = "<br/><br/>Question " + (i + 1);
	// 	}
	//   }
}
}
</script>

<style>
			


				/* home pages */

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

td {
	border-radius: 25px;
	padding: 50px;
	/*border: 3px solid #2C8C67;*/
}

/********************* home page kids ***************/
#homerow1, #homerow2 {
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

h2 {
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

/*************** row 2 ************/
.row2col {
	float: left;
	padding: 0px;
	margin: 0px;
}

#stories {
	float: left;
	width: 60%;
	padding: 0px;
}
#stories:hover {
	width: 61%;}

#hw1 {
	float: left;
	width: 48%;
	padding: 0px;
}

#hw1:hover {
	width: 49%;
}

/*
#hw1:hover{
	width: 22%;
	margin: 95px 0% 0px 2.5%;
}*/

#games {
	float: left;
	width: 78%;
	padding: 0px;
}

#games:hover {
	width: 79%;
}

#tests {
	float: left;
	width: 80%;
	padding: 0px;
}

#tests:hover {
	float: left;
	width: 81%;
	padding: 0px;
}

h3{
	float: left;
	width: 100%;
	text-align: center;
	color: #2C8C67;
	margin: 0px;
}

.h3{
	float: left;
	width: 100%;
	text-align: center;
	vertical-align: center;
	color: #2C8C67;
	margin: 0px;
}

h4{
	float: left;
	width: 100%;
	text-align: center;
	color: #2C8C67;
}

#row3{
	background-color: #2C8C67;
	float: left;
	width: 100%;
}
#row3col1{
	float: left;
	padding: 0px;

}
#row3col2{
	float: left;
	padding: 0px;
	}
p{
	float: left;
	width: 100%;
	text-align: center;
	color: white;
	margin: 0px 0% 15px 0%;
	padding: 0px;
}

.progress {
	width: 60%;
	float: left;
	padding: 0px;
	margin: 15px 20% 0px 20%;
	border-width: 3px;
	border-style: solid;
	border-color: white;
	border-radius: 10px;
}

.row4 {
	float: left;
	width: 100%;
	padding: 10px 0% 20px 0%;
	margin: 0px;
	background-color: #2C8C67;
}

.row4>p, .row4>p>a{
	color: white;
	text-align: center;
	font-size: 80%;
	line-height: .5em;
	text-decoration: none;
}
.row4>p>a:hover{
	color: #ECF9F3;
}

.button {
	background-color: #2C8C67;
	border-radius: 25%;
	color: white;
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
}

/* Style for bigger TV/Computer screen */
@media (min-width: 1000px) {
	#homelink {width: 7%;}
	#candybowl {width: 12%;}
	h2 {width: 30%; margin: 30px 0% 0px 22%; }
	#accounticon { 	width:4%;}
	.row2col { width: 25%;}
	#stories {margin: 150px 20% 2px 20%;}
	#stories:hover {margin: 148px 19.5% 0px 19.5%;}
	#hw1 {margin: 100px 26% 0px 26%;}
	#hw1:hover {margin: 98px 25.5% 0px 25.5%;}
	#games {margin: 175px 9% 0px 4%;}
	#games:hover {margin: 174px 8.5% 0px 3.5%;}
	#tests {margin: 120px 19% 0px 10%;}
	#tests:hover {margin: 119px 18.5% 0px 9.5%;}
	#row3{	margin: 100px 0% 0px 0%;}
	#row3col1{ width: 25%; margin: 0px 0% 0px 25%;}
	#row3col2{ width: 25%; 	margin: 0px 25% 0px 0%;}
	.row4>p{font-size: 70%;}
	
}

/* Style for medium iPad-size screen */

@media (max-width: 1000px) {

	#homelink {width: 10%;}
	#candybowl {width: 13%;}
	h2 {width: 30%; margin: 15px 0% 0px 18%; }
	#accounticon { 	width:4%;}
	.row2col { width: 25%;}
	#learn {margin: 150px 20% 2px 20%;}
	#learn:hover {margin: 148px 19.5% 0px 19.5%;}
	#hw1 {margin: 100px 26% 0px 26%;}
	#hw1:hover {margin: 98px 25.5% 0px 25.5%;}
	#games {margin: 175px 9% 0px 4%;}
	#games:hover {margin: 174px 8.5% 0px 3.5%;}
	#tests {margin: 120px 19% 0px 10%;}
	#tests:hover {margin: 119px 18.5% 0px 9.5%;}
	#row3{	margin: 100px 0% 0px 0%;}
	#row3col1{ width: 25%; margin: 0px 0% 0px 25%;}
	#row3col2{ width: 25%; 	margin: 0px 25% 0px 0%;}
	.row4>p{font-size: 70%;}
}

/* Style for very small screens */
@media (max-width: 610px) { 
	#homelink {width: 10%;}
	#candybowl {width: 20%;}
	#usernamehere {margin-top: 20px;}
	h2 {font-size: 90%; width: 30%; margin: 5px 0% 0px 15%; }
	#accounticon { 	width:6%;}
	.row2col { width: 50%;}
	#stories {margin: 50px 20% 2px 20%;}
	#stories:hover {margin: 48px 19.5% 0px 19.5%;}
	#hw1 {margin: 70px 26% 0px 26%;}
	#hw1:hover {margin: 68px 25.5% 0px 25.5%;}
	#games {margin: 50px 9% 0px 4%;}
	#games:hover {margin: 48px 8.5% 0px 3.5%;}
	#tests {margin: 60px 19% 0px 10%; }
	#tests:hover {margin: 58px 18.5% 0px 9.5%;}
	#row3{	margin: 30px 0% 0px 0%;}
	#row3col1{ width: 50%; margin: 0px 0% 0px 0%;}
	#row3col2{ width: 50%; 	margin: 0px 0% 0px 0%;}
	.row4>p{font-size: 70%;}
}

	
	/***************** 3-4 ***************/


</style>
