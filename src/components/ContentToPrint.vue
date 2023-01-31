<template>
    <div>

        <!-- <img src="https://picsum.photos/500/300" /> -->

        <div class="container">
            <div class="row">
                <div class="col">
                    Column
                </div>
                <div class="col">
                    <img src="https://scontent.fmnl4-3.fna.fbcdn.net/v/t1.15752-9/278877078_1441048096313034_8836127387058102283_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeG0EjIpK-3yjjUrHoKdiJhvO9CjLz0SWbg70KMvPRJZuOWSsrIhjBLuMRIJM06sQrBHzk3QuKhFUQQ-7HpTtyUo&_nc_ohc=zhVeicLauFgAX8GevXV&_nc_ht=scontent.fmnl4-3.fna&oh=03_AdQS02_aY4wGTMJJEAdJ9PmuUhWOuzIJNeBFjzzjgwlOJA&oe=63F54455"
                        alt="Girl in a jacket" width="200" height="200">
                </div>
                <div class="col">
                    Column
                </div>
            </div>
        </div>


        <div class="container">
            <div class="row">
                <div class="col">
                    <PieChart />
                </div>
                <div class="col">
                    <BarChart />
                </div>

            </div>
        </div>

        <h1> To print</h1>
        <div class="table-responsive">

            <nav class="navbar navbar-light bg-light">
                <form class="form-inline">
                    <input placeholder="Search full name.." v-model="search" type="text" name="text" class="input" />
                </form>
            </nav>
            <table class="table table-hover" cellspacing="0" width="50" id="customers">

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

                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
/* eslint-disable */

import { mapActions, mapGetters } from 'vuex';
import PieChart from "@/components/ChartComponent.vue";
import BarChart from "@/components/BarChart.vue"


export default {


    components: {
        PieChart,
        BarChart,
    },


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
</style>