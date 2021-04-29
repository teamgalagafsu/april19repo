<template>
    <main>
        <div>
            <h1>Login</h1>
                <form>
                    <br>
                    <label for="">Email</label>
                    <input type="email" v-model="email" />
                    <br>
                    <label for="">Password</label>
                    <input type="password" v-model="password" />
                    <br>
                    <span @click="onLogin">Continue</span>
                    <br>
                </form>
            <br>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: ""
        };
    },
    methods: {
        async onLogin() {
            try {
                this.$auth.loginWith("local", { 
                    data: {
                        email: this.email,
                        password: this.password
                    }
                });
                this.$router.push("/p-homek12");
            } catch (err) {
                console.log(err)
            }
        },
    },
}
</script>