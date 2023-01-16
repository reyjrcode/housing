

<template>
    <table class="table">
        <thead class="thead-dark">
            <tr>
                <th scope="col">Id</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Username</th>
                <th scope="col">Password</th>
            </tr>
        </thead>
        <tr v-for="pangalan in users" v-bind:key="pangalan.id">
            <td>{{ pangalan.id }} </td>
            <td>{{ pangalan.firstname }}</td>
            <td>{{ pangalan.lastname }}</td>
            <td>{{ pangalan.username }}</td>
            <td>{{ pangalan.password }}</td>
        </tr>

    </table>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    data: () => ({
        loading: false,
        selection: 1,
        dialog: false

    }),
    computed: {
        ...mapGetters('users', { users: 'getUsers' })
    },
    methods: {
        ...mapActions('users', ['fetchUsers', 'Deleteuser']),
        NewUser() {
            this.loading = true

            setTimeout(() => (this.loading = false), 2000)
            this.$router.push('/NewUserPage')
        },

        deleteuser(firstname) {
            let data = new FormData;
            data.append('firstname', firstname);
            this.Deleteuser(data).then(e => {
                if (e == 0)
                    this.dialog = true;
                else
                    this.fetchUsers();
            });
        }
    },
    created() {
        this.fetchUsers();


    }
}


</script>


