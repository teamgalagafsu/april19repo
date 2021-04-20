<template>
    <main>
        <span id='title'>Sign up for a FREE Peppermint account</span>
        
        <form id='container'>
            <label>First name</label>
            <input type="text" v-model="firstName">
            <label>Last name</label>
            <input type="text" v-model="lastName">
            <label>Email</label>
            <input type="email" v-model="email">
            <label>Password</label>
            <input type="password" v-model="password1">
            <label>Confirm password</label>
            <input type="password" v-model="password2">

            <label>Grade</label>
            <input type="text" v-model="grade">
            <label>Teacher Name</label>
            <input type="text" v-model="teacherName">


            <span id='signupBtn' @click="onSignup">Create your account</span>
        </form>
        
    </main>
</template>

<script>
export default {
    middleware: "auth",
    auth: "guest",
    data() {
        return {
            firstName: "",
            lastName: "",
            email: "",
            password1: "",
            password2: "",
            grade: "",
            teacherName: "",
        }
    },
    methods: {
        async onSignup() {
            try {
                if (this.password1 != this.password2) {
                    alert("Passwords do not match. Make sure they do.")
                    return
                }
                
                
                let data = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    password: this.password2,
                    grade: this.grade,
                    teacherName: this.teacherName,

                };

                let response = await this.$axios.$post("/api/auth/signup", data);

                if (response.success) {
                    this.$auth.loginWith("local", {
                        data: {
                            email: this.email,
                            password: this.password2
                        }
                    });
                }
                this.$router.push("/p-homek12");
            } catch (err) {
                console.log(err)
            }
        }
    }    
}
</script>

<style scoped>
body {
    background-color: #C3ECDC;
}

#container {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
}

label {
    font-size: 1.2em;
    margin-left: 5%;

}

#title {
    font-size: 1.3em;
    padding-top: 5px;
    margin-left: 5%;
    
}

#youNotDog {
    padding-bottom: 10px;
}
input {
    width: 90%;
    margin-left: 5%;
    margin-bottom: 20px;
}



#signupBtn {
    padding-top: 20px;
    cursor: pointer;
    margin-left: 5%;
    font-size: 2em;
    
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
    margin: 10px auto;
    /* margin-bottom: 2px; */

}
</style>