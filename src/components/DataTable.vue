

<template>
    <div class="div">


        <div class="container">
            <div class="row">
                <div class="table-responsive">

                    <!-- <input type="text" v-model="search"> -->

                    <div class="form-outline">
                        <input type="text" v-model="search" class="form-control" />
                        <label class="form-label" for="form12">blah blah</label>
                    </div>

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

                            <tr v-for="(user) in filteredItems" v-bind:key="user.id">

                                <td>
                                    <h3 />{{ user.id }}
                                </td>
                                <td>
                                    <h3 />{{ user.firstname }}
                                </td>
                                <td>
                                    <h3 />{{ user.lastname }}
                                </td>
                                <td>
                                    <h3 />{{ user.username }}
                                </td>
                                <td>
                                    <h3 />{{ user.password }}
                                </td>
                                <td>
                                    <v-btn elevation="2" color="primary" outlined
                                        @click="$router.push({ name: 'Views', params: { id: user.id } })">
                                        <v-icon dark left>
                                            mdi-eye
                                        </v-icon>
                                        View
                                    </v-btn>.
                                    <v-btn elevation="2" color="success" outlined
                                        @click="$router.push({ name: 'UpdateShit', params: { id: user.id } })">
                                        <v-icon dark left>
                                            mdi-pencil
                                        </v-icon>
                                        Update
                                    </v-btn>.
                                    <v-btn elevation="2" color="red" outlined @click="deleteuser(user.firstname)">
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
        search: '',
        loading: false,

        dialog: false

    }),


    computed: {
        // filter search
        ...mapGetters('users', { users: 'getUsers' }),
        filteredItems() {
            return this.users.filter(user => {
                return user.firstname.toLowerCase().indexOf(this.search.toLowerCase()) > -1
            })
        },
        // end of filter search 




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
    },

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