

<template>




    <div class="container">
        <div class="row">
            <div class="table-responsive">
                <!-- <input type="text" v-model="search"> -->
                <nav class="navbar navbar-light bg-light">
                    <form class="form-inline">
                        <input class="form-control mr-sm-2" v-model="search" type="search"
                            placeholder="Search First Name" aria-label="Search">
                        <!-- <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> -->
                    </form>
                </nav>

                <!-- <v-text-field label="Search here" v-model="search" placeholder="Search here" outlined></v-text-field> -->
                <!-- <table class="table table-hover"  style="width:100%"> -->
                <div class="table-wrapper-scroll-y my-custom-scrollbar">

                    <table class="table table-hover" cellspacing="0" style='height:500px;display:block;overflow:scroll'
                        width="50" id="customers">
                        <thead>
                            <tr>
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
                                    {{ user.id }}
                                </td>
                                <td height="30">
                                    {{ user.firstname }}
                                </td>
                                <td height="30">
                                    {{ user.lastname }}
                                </td>
                                <td height="30">
                                    {{ user.username }}
                                </td>
                                <td height="30">
                                    {{ user.password }}
                                </td>
                                <td>
                                    <v-btn elevation="2" color="primary" outlined
                                        @click="$router.push({ name: 'Views', params: { id: user.id } })">
                                        <v-icon dark left>
                                            mdi-eye
                                        </v-icon>
                                        View
                                    </v-btn>
                                    <v-btn elevation="2" color="success" outlined
                                        @click="$router.push({ name: 'UpdateShit', params: { id: user.id } })">
                                        <v-icon dark left>
                                            mdi-pencil
                                        </v-icon>
                                        Update
                                    </v-btn>
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
                return user.id.toLowerCase().indexOf(this.search.toLowerCase()) > -1
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
        deleteuser(username) {
            let data = new FormData;
            data.append('username', username);
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
/* table css */
#customers {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

#customers td,
#customers th {
    border: 1px solid rgb(0, 0, 0);
    padding: 8px;
}

#customers tr:nth-child(even) {
    background-color: #f2f2f2;
    
}

#customers tr:hover {
    background-color: rgb(194, 218, 185);
}

#customers th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #04AA6D;
    color: rgb(0, 0, 0);
    
}
</style>