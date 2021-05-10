<template>
    <main>
		<div id="homewrapper">
			<div id="homerow1">
				<h2 id="usernamehere">Username</h2>
				<img id="candybowl" src="images/tencandy.png" />
			</div>
			<div id="homerow2">
				<div class="row2col">
					<a href="tutorial/p-tutorial">
						<img id="stories" src="images/mathstories.png" />
						<h3>Learn</h3>
					</a>
				</div>
				<div class="row2col">
					<a href="homework/p-homework"
						><img id="hw1" src="images/homeworkpanda3.png" />
						<h3>Practice</h3>
					</a>
				</div>
				<div class="row2col">
					<a href="p-comingsoon">
						<img id="games" src="images/tennispanda.png" />
						<h3>Games</h3>
					</a>
				</div>
				<div class="row2col">
					<a href="/homework/p-test">
						<img id="tests" src="images/pandatest.png" />
						<h3>Tests</h3>
					</a>
				</div>
				<div id="row3">
					<div id="row3col1">
						<img class="progress" id="numCorrectOA" src="images/progress0.png" />
						<p id="numCorrectOAText">Math Thinking: 0%</p>
					</div>
					<div id="row3col2">
						<img class="progress" id="numCorrectNBT" src="images/progress0.png" />
						<p id="numCorrectNBTText">Numbers in Base Ten: 0%</p>
					</div>
				</div>
			</div>
		</div>
    </main>
</template>

<script>
export default {
    mounted() {
		var grade;

		//Replace this code with retrieving numCorrectOA from the database
		var numCorrectOA = 4;
		var numCorrectNBT = 7;

		//Replace this code with retrieving how many rewards they have earned from the database
		var reward = 20;

		/********************* Updating Username at top of Page ************/
		// store the DOM node with id="username" in a variable
		var updateUsername = document.getElementById('usernamehere'); 

		// update the inner HTML of this node to the name from the student object
		if (!this.$auth.$state.loggedIn) {
			// log in only works with this alert?
			alert("Welcome!");
			this.$router.push("/p-create");
			return
		} else {
			updateUsername.innerHTML = this.$auth.user.email;
			grade = this.$auth.user.grade;
		}

		if(grade == '3' || grade == '4') {
			window.location.assign("p-home34");
		}

		/********************* Updating Rewards Icon ************/
		// Depending on the number of rewards stored in the student object
		// display the right picture by changing the image source
		switch(reward) {
			case 0:
				document.getElementById("candybowl").src='images/zerocandy.png';
				break;
			case 1:
				document.getElementById("candybowl").src='images/onecandy.png';
				break;
			case 2:
				document.getElementById("candybowl").src='images/twocandy.png';
				break;
			case 3:
				document.getElementById("candybowl").src='images/threecandy.png';
				break;
			case 4:
				document.getElementById("candybowl").src='images/fourcandy.png';
				break;
			case 5:
				document.getElementById("candybowl").src='images/fivecandy.png';
				break;
			case 6:
				document.getElementById("candybowl").src='images/sixcandy.png';
				break;
			case 7:
				document.getElementById("candybowl").src='images/sevencandy.png';
				break;
			case 8:
				document.getElementById("candybowl").src='images/eightcandy.png';
				break;
			case 9:
				document.getElementById("candybowl").src='images/ninecandy.png';
				break;
			case 10:
				document.getElementById("candybowl").src='images/tencandy.png';
				break;
			case 11:
				document.getElementById("candybowl").src='images/elevencandy.png';
				break;
			case 12:
				document.getElementById("candybowl").src='images/twelvecandy.png';
				break;
			case 13:
				document.getElementById("candybowl").src='images/thirteencandy.png';
				break;
			case 14:
				document.getElementById("candybowl").src='images/fourteencandy.png';
				break;
			case 15:
				document.getElementById("candybowl").src='images/fifteencandy.png';
				break;
			case 16:
				document.getElementById("candybowl").src='images/sixteencandy.png';
				break;
			case 17:
				document.getElementById("candybowl").src='images/seventeencandy.png';
				break;
			case 18:
				document.getElementById("candybowl").src='images/eightteencandy.png';
				break;
			case 19:
				document.getElementById("candybowl").src='images/nineteencandy.png';
				break;
			case 20:
				document.getElementById("candybowl").src='images/twentycandy.png';
				break;
			default:
				document.getElementById("candybowl").src='images/twentycandy.png';
				break;
		}

		/********************* Updating Progress Bars ************/

		switch(numCorrectOA) {
			case 0:
				document.getElementById("numCorrectOA").src='images/progress0.png';
				document.getElementById('numCorrectOAText').innerHTML = "Math Thinking: 0%";
				break;
			case 1:
				document.getElementById("numCorrectOA").src='images/progress10.png';
				document.getElementById('numCorrectOAText').innerHTML = "Math Thinking: 10%";
				break;
			case 2:
				document.getElementById("numCorrectOA").src='images/progress20.png';
				document.getElementById('numCorrectOAText').innerHTML = "Math Thinking: 20%";
				break;
			case 3:
				document.getElementById("numCorrectOA").src='images/progress30.png';
				document.getElementById('numCorrectOAText').innerHTML = "Math Thinking: 30%";
				break;
			case 4:
				document.getElementById("numCorrectOA").src='images/progress40.png';
				document.getElementById('numCorrectOAText').innerHTML = "Math Thinking: 40%";
				break;
			case 5:
				document.getElementById("numCorrectOA").src='images/progress50.png';
				document.getElementById('numCorrectOAText').innerHTML = "Math Thinking: 50%";
				break;
			case 6:
				document.getElementById("numCorrectOA").src='images/progress60.png';
				document.getElementById('numCorrectOAText').innerHTML = "Math Thinking: 60%";
				break;
			case 7:
				document.getElementById("numCorrectOA").src='images/progress70.png';
				document.getElementById('numCorrectOAText').innerHTML = "Math Thinking: 70%";
				break;
			case 8:
				document.getElementById("numCorrectOA").src='images/progress80.png';
				document.getElementById('numCorrectOAText').innerHTML = "Math Thinking: 80%";
				break;
			case 9:
				document.getElementById("numCorrectOA").src='images/progress90.png';
				document.getElementById('numCorrectOAText').innerHTML = "Math Thinking: 90%";
				break;
			case 10:
				document.getElementById("numCorrectOA").src='images/progress100.png';
				document.getElementById('numCorrectOAText').innerHTML = "Math Thinking: 100%";
				break;
		}

		switch(numCorrectNBT) {
			case 0:
				document.getElementById("numCorrectNBT").src='images/progress0.png';
				document.getElementById('numCorrectNBTText').innerHTML = "Numbers in Base Ten: 0%";
				break;
			case 1:
				document.getElementById("numCorrectNBT").src='images/progress10.png';
				document.getElementById('numCorrectNBTText').innerHTML = "Numbers in Base Ten: 10%";
				break;
			case 2:
				document.getElementById("numCorrectNBT").src='images/progress20.png';
				document.getElementById('numCorrectNBTText').innerHTML = "Numbers in Base Ten: 20%";
				break;
			case 3:
				document.getElementById("numCorrectNBT").src='images/progress30.png';
				document.getElementById('numCorrectNBTText').innerHTML = "Numbers in Base Ten: 30%";
				break;
			case 4:
				document.getElementById("numCorrectNBT").src='images/progress40.png';
				document.getElementById('numCorrectNBTText').innerHTML = "Numbers in Base Ten: 40%";
				break;
			case 5:
				document.getElementById("numCorrectNBT").src='images/progress50.png';
				document.getElementById('numCorrectNBTText').innerHTML = "Numbers in Base Ten: 50%";
				break;	
			case 6:
				document.getElementById("numCorrectNBT").src='images/progress60.png';
				document.getElementById('numCorrectNBTText').innerHTML = "Numbers in Base Ten: 60%";
				break;
			case 7:
				document.getElementById("numCorrectNBT").src='images/progress70.png';
				document.getElementById('numCorrectNBTText').innerHTML = "Numbers in Base Ten: 70%";
				break;
			case 8:
				document.getElementById("numCorrectNBT").src='images/progress80.png';
				document.getElementById('numCorrectNBTText').innerHTML = "Numbers in Base Ten: 80%";
				break;
			case 9:
				document.getElementById("numCorrectNBT").src='images/progress90.png';
				document.getElementById('numCorrectNBTText').innerHTML = "Numbers in Base Ten: 90%";
				break;
			case 10:
				document.getElementById("numCorrectNBT").src='images/progress100.png';
				document.getElementById('numCorrectNBTText').innerHTML = "Numbers in Base Ten: 100%";
				break;
		}
    }
}
</script>

<style>
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
</style>
<style scoped>
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
	width: 61%;
}

#hw1 {
	float: left;
	width: 48%;
	padding: 0px;
}

#hw1:hover {
	width: 49%;
}

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
	font-size: 100%;
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
	h2 {width: 30%; margin: 30px 0% 0px 35%; }
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
	.row4>p{font-size: 100%;}
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
</style>