<template>
    <main>
        <h1>Profile</h1>
        <div>
            Name: {{ $auth.$state.user.firstName + " " + $auth.$state.user.lastName }}
        </div>
        <div>
            Email / Login: {{ $auth.$state.user.email }}
        </div>
        <div>
            Teacher and Grade: {{ $auth.$state.user.teacherName + " " + $auth.$state.user.grade }}
        </div>
        <div v-if="$auth.$state.user.userType == 'client'">
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
        </div>
    </main>
</template>

<script>
export default {
    middleware: "auth",
    methods: {
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