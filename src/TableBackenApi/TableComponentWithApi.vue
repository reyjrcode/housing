

<template>
    <div class="container">
        <div class="row">
            <div class="table-responsive">
                <nav class="navbar navbar-light bg-light">
                    <form class="form-inline">
                        <input placeholder="Search full name.." v-model="search" type="text" name="text"
                            class="input" />
                    </form>
                </nav>

                <!-- <v-text-field label="Search here" v-model="search" placeholder="Search here" outlined></v-text-field> -->
                <!-- <table class="table table-hover"  style="width:100%"> -->
                <div class="table-wrapper-scroll-y my-custom-scrollbar">
                    <table class="table table-hover" cellspacing="0"
                        style='height:700px;display:block;overflow:scroll;width:max-content' id="customers">
                        <thead>
                            <tr>
                                <!-- <th scope="col">ID</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Username</th>
                                <th scope="col">Password</th>
                                <th scope="col">Actions</th> -->
                                <th scope="col">ID</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Password</th>
                                <th scope="col">Department</th>
                                <th scope="col">Rate</th>
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
                                <td height="30">
                                    {{ user.department_name }}
                                </td>
                                <td height="30">
                                    {{ user.rate }}
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
                                    </v-btn>.
                                    <v-btn elevation="2" color="success" outlined
                                        @click="$router.push({ name: 'UpdateShit', params: { id: user.id } })">
                                        <v-icon dark left>
                                            mdi-pencil
                                        </v-icon>
                                        Update
                                    </v-btn>.
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
/* eslint-disable */

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
    position: relative;
    margin: 0;
    padding: 17px 35px;
    outline: none;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-transform: uppercase;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgba(22, 76, 167, 0.6);
    border-radius: 10px;
    color: #1d89ff;
    font-weight: 400;
    font-family: inherit;
    z-index: 0;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
}

button span {
    color: #164ca7;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.7px;
}

button:hover {
    animation: rotate624 0.7s ease-in-out both;
}

button:hover span {
    animation: storm1261 0.7s ease-in-out both;
    animation-delay: 0.06s;
}

@keyframes rotate624 {
    0% {
        transform: rotate(0deg) translate3d(0, 0, 0);
    }

    25% {
        transform: rotate(3deg) translate3d(0, 0, 0);
    }

    50% {
        transform: rotate(-3deg) translate3d(0, 0, 0);
    }

    75% {
        transform: rotate(1deg) translate3d(0, 0, 0);
    }

    100% {
        transform: rotate(0deg) translate3d(0, 0, 0);
    }
}

@keyframes storm1261 {
    0% {
        transform: translate3d(0, 0, 0) translateZ(0);
    }

    25% {
        transform: translate3d(4px, 0, 0) translateZ(0);
    }

    50% {
        transform: translate3d(-3px, 0, 0) translateZ(0);
    }

    75% {
        transform: translate3d(2px, 0, 0) translateZ(0);
    }

    100% {
        transform: translate3d(0, 0, 0) translateZ(0);
    }
}

.btn-shine {
    border: 1px solid;
    overflow: hidden;
    position: relative;
}

.btn-shine span {
    z-index: 20;
}

.btn-shine:after {
    background: #38ef7d;
    content: "";
    height: 155px;
    left: -75px;
    opacity: 0.4;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 50px;
    z-index: -10;
}

.btn-shine:hover:after {
    left: 120%;
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
}
</style>