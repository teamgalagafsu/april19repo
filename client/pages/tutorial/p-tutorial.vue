<template>
    <main>
        <div id="homewrapper">
  		<div id="homerow1">
			<a href="/p-homek12">
				<img id="homelink" src="/images/homelink.png" />
			</a>
  			<h2>Kay</h2>
  			<img id="candybowl" src="/images/tencandy.png" />
  			<a href="../p-comingsoon"><img id="accounticon" src="/images/accounticon.png" /></a>
  		</div>
  		<div id="homerow2">
			<table width="100%">
				<tbody>
				<tr>
					<td align="center" width="25%" style="border: none;">
						<a href="p-time">
							<img id="algebthinking" height="200px" width="400px" src="/images/timepanda.png" />
							<h3>How to Tell Time</h3>
						</a>
					</td>
					<td align="center" width="25%" style="border: none;">
						<a href="../p-comingsoon">
							<img id="numoperbaseten" height="200px" width="200px" align="center" src="/images/leaf1.png" />
							<h3>Coming Soon</h3>
						</a>
					</td>
					<td align="center" width="25%" style="border: none;">
						<a href="../p-comingsoon">
							<img id="measuredata" height="200px" width="200px" src="/images/leaf2.png" />
							<h3>Coming Soon</h3>
						</a>
					</td>
					<td align="center" width="25%" style="border: none;">
						<a href="../p-comingsoon">
							<img id="geometry" height="200px" width="200px" src="/images/leaf1.png" />
							<h3>Coming Soon</h3>
						</a>
					</td>
				</tr>
				</tbody>
			</table>
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
