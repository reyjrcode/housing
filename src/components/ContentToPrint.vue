<template>
    <div style="margin: 12px 12px">
        <img src="https://picsum.photos/500/300" />
        <p>this is print</p>
        <div class="table-responsive">


            <table class="table table-hover" cellspacing="0" width="50" id="customers">

                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Password</th>
                        <!-- <th scope="col">Actions</th> -->
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

                    </tr>
                </tbody>
            </table>


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