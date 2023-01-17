<!-- 

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
        <tr v-for="user in users" v-bind:key="user.id">
            <td>{{ user.id }} </td>
            <td>{{ user.firstname }}</td>
            <td>{{ user.lastname }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.password }}</td>
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

 -->

<template>
    <div class="div">


        <div class="container">
            <div class="row">

                <div class="input-group rounded">
                    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                        aria-describedby="search-addon" />
                    <span class="input-group-text border-0" id="search-addon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-search" viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </span>

                </div>


                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr class="text-bg-secondary p-3">
                                <th scope="col">ID</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Username</th>
                                <th scope="col">Password</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr v-for="pangalan in users" v-bind:key="pangalan.id">

                                <td>
                                    <h4 />{{ pangalan.id }}
                                </td>
                                <td>
                                    <h4 />{{ pangalan.firstname }}
                                </td>
                                <td>
                                    <h4 />{{ pangalan.lastname }}
                                </td>
                                <td>
                                    <h4 />{{ pangalan.username }}
                                </td>
                                <td>
                                    <h4 />{{ pangalan.password }}
                                </td>
                                <td>
                                    <v-btn elevation="2" color="primary" outlined>
                                        <v-icon dark left>
                                            mdi-eye
                                        </v-icon>
                                        View
                                    </v-btn>
                                    <v-btn elevation="2" color="success" outlined
                                        @click="$router.push({ name: 'UpdateShit', params: { id: pangalan.id } })">

                                        <v-icon dark left>
                                            mdi-pencil
                                        </v-icon>
                                        Update
                                    </v-btn>


                                    <v-btn elevation="2" color="red" outlined>
                                        <v-icon dark left>
                                            mdi-delete-forever
                                        </v-icon>
                                        Delete
                                    </v-btn>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </div>
</template>
 
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    data: () => ({
        loading: false,
            
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

<style>
.container {
    padding: 2rem 0rem;
}

h4 {
    margin: 2rem 0rem 1rem;
}

.table-image td,
.table-image th {
    vertical-align: middle;
}
</style>