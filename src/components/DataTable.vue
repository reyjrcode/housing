

<template>
    <div class="container">
        <div class="row">
            <div class="table-responsive">
                <!-- <input type="text" v-model="search"> -->
                <nav class="navbar navbar-light bg-light">
                    <form class="form-inline">
                        <!-- <input class="form-control mr-sm-2" v-model="search" type="search"
                            placeholder="Search Full name" aria-label="Search"> -->
                        <input placeholder="Search full name.." v-model="search" type="text" name="text"
                            class="input" />
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
                                <!-- <td height="30">
                                    {{ user.fullname }}
                                </td> -->
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
                                    <v-btn elevation="2" color="red" outlined @click="deleteuser(user.id)">
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
        // loading: false,
        dialog: false

    }),


    computed: {
        // filter search
        ...mapGetters('users', { users: 'getUsers' }),
        filteredItems() {
            return this.users.filter(user => {
                return user.fullname.toLowerCase().indexOf(this.search.toLowerCase()) > -1
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
        deleteuser(id) {
            let data = new FormData;
            data.append('id', id);
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

/* text search */
.input {
    width: 100%;
    max-width: 220px;
    height: 45px;
    padding: 12px;
    border-radius: 12px;
    border: 1.5px solid lightgrey;
    outline: none;
    transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
    box-shadow: 0px 0px 20px -18px;
}

.input:hover {
    border: 2px solid lightgrey;
    box-shadow: 0px 0px 20px -17px;
}

.input:active {
    transform: scale(0.95);
}

.input:focus {
    border: 2px solid grey;
}

/* buttons */


button {
    background-color: white;
    color: black;
    border-radius: 10em;
    font-size: 17px;
    font-weight: 600;
    padding: 1em 2em;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border: 1px solid black;
    box-shadow: 0 0 0 0 black;
}

button:hover {
    transform: translateY(-4px) translateX(-2px);
    box-shadow: 2px 5px 0 0 black;
}

;

button:active {
    transform: translateY(2px) translateX(1px);
    box-shadow: 0 0 0 0 black;
}

;
</style>