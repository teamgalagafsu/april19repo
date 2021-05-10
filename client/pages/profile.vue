<template>
    <main>
        <h1>Profile</h1>
        <form id='container'>
            <label id='text'>First Name:</label>
            <input id="firstName" type="text" v-model="firstName" :placeholder="$auth.$state.user.firstName" readonly>
            <br><br>
            <label id='text'>Last Name:</label>
            <input type="text" v-model="lastName" :placeholder="$auth.$state.user.lastName" readonly>
            <br><br>
            <label id='text'>Email/Login:</label>
            <input type="text" v-model="email" :placeholder="$auth.$state.user.email" readonly>
            <br><br>
            <label id='text'>Grade:</label>
            <input type="text" v-model="grade" :placeholder="$auth.$state.user.grade">
            <br><br>
            <label id='text'>Teacher Name:</label>
            <input type="text" v-model="teacherName" :placeholder="$auth.$state.user.teacherName">
            <br><br>
            <span id='signupBtn' @click="onSave">Save</span>
        </form>
        <!-- <div v-if="$auth.$state.user.userType == 'client'">
            <div id="clientInfo">               
                <span class='client-class' id='clientName'>Client Name: {{ $auth.$state.user.firstName + " " + $auth.$state.user.lastName }}</span>
                <span class='client-class' id='clientEmail'>Client Email / Login: {{ $auth.$state.user.email }}</span>
                <span class='horizontalSeparatorBlue'></span>
            </div>
            <div id='today'>
                Today is {{getAmericanEnglishDate()}}
            </div>
            <br>
        </div>
        <div v-else-if="$auth.$state.user.userType == 'employee'">
            <div id="employeeInfo">               
                <span class='client-class' id='clientName'>Employee Name: {{ $auth.$state.user.firstName + " " + $auth.$state.user.lastName }}</span>
                <br>
                <span class='client-class' id='clientEmail'>Employee Email / Login: {{ $auth.$state.user.email }}</span>
                <br>
                <span class='horizontalSeparatorOrange'></span>
                <br>
            </div>
            <br>
        </div> -->
    </main>
</template>

<script>
export default {
    middleware: "auth",
    // auth: "client",
    data() {
        return {
            firstName: "",
            lastName: "",
            email: "",
            grade: "",
            teacherName: "",
        }
    },
    methods: {
        async onSave() {
            try {
                let data = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    grade: this.grade,
                    teacherName: this.teacherName,
                };

                let response = await this.$axios.$post("/api/auth/user", data);

                if (response.success) {
                    this.$router.push("/profile");
                }
            } catch (err) {
                console.log(err)
            }
        },
        getAmericanEnglishDate() {
            let date = this.getNow();

            let year = date.substring(0, 4);
            let month = date.substring(5, 7);
            let day = date.substring(8, 10);

            let aeDate = "";

            if (month == "01") {aeDate += "January "}
            else if (month == "02") {aeDate += "February "}
            else if (month == "03") {aeDate += "March "}
            else if (month == "04") {aeDate += "April "}
            else if (month == "05") {aeDate += "May "}
            else if (month == "06") {aeDate += "June "}
            else if (month == "07") {aeDate += "July "}
            else if (month == "08") {aeDate += "August "}
            else if (month == "09") {aeDate += "September "}
            else if (month == "10") {aeDate += "October "}
            else if (month == "11") {aeDate += "November "}
            else if (month == "12") {aeDate += "December "}

            aeDate += day + ", ";
            aeDate += year;

            return aeDate;
        },
        getNow() {
            const today = new Date();
            
            const year  = today.getFullYear();
            let month = today.getMonth() + 1;
            let day = today.getDate();

            if (month < 10) {month = "" + "0" + month}
            if (day < 10) {day = "" + "0" + day}

            const date = year + "-" + month + "-" + day;

            return date;
        },
    },
    mounted() {
    }
}
</script>

<style scoped>
body {
    background-color: transparent;
}

h1 {
    font-size: 200%;
    width: 30%;
    margin: 5px 0% 0px 5%;
    color: #2C8C67;
}

#text {
	color: #2C8C67;
	width: 100%;
	border-radius: 5px;
	padding: 5px 5% 5px 5%;
	text-align: left;
}

#container {
    padding-top: 20px;
    display: block;
    /* flex-direction: column; */
}

#signupBtn {
    padding-top: 20px;
    cursor: pointer;
    margin-left: 5%;
    font-size: 1em;
    width: fit-content;
    /* height: 35px; */
    background: red;
    color: white;
    border-radius: 10px;
    padding-right: 4px;
    padding-left: 4px;
    padding-top: 3px;
    padding-bottom: 2px;
    border: 2px solid black;
}

#today {
    font-size: 2em;
}

.horizontalSeparatorBlue {
    width: 100%;
    height: 10px;
    background-color: cadetblue;
}

.horizontalSeparatorOrange {
    width: 100%;
    height: 10px;
    background-color: rgb(247, 173, 76);
}

img {
    object-fit: cover;
    height: 340px;
    width:340px;
    padding: 0;
}

.client-class {
    padding-left: 10px;
}

#clientInfo {
    display: flex;
    flex-direction: column;
}

main {
    background-color: transparent;
}

nuxt-link {
    cursor: pointer;
    color: black;
}

#clientName {
    font-size: 1.2em;
    padding-bottom: 4px;
}
</style>