<template>
        <div class="log-out">

            <v-btn class="center-btn" block elevation="4" color="red" @click="logout">
                <span>LOG OUT</span>
                <v-icon right> mdi-exit-to-app</v-icon></v-btn>
        </div>
</template>
<script>
export default {
    methods: {
        logout() {
            console.log("Local storage clear")
            localStorage.clear();
            this.$router.replace({ name: 'Loginpage' });
        },
    }
}
</script>


<style>

</style>