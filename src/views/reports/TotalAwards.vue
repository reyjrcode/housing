<template>

    <div class="to-approved">
        <AdminNavbar />

        <!--     
    <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line
                        hide-details></v-text-field> -->
        <div>

            <nav class="navbar navbar-light bg-light justify-content-between">
                <a class="navbar-brand">.</a>
                <form class="form-inline">
                    <input class="form-control mr-sm-2" v-model="search" type="search" placeholder="Search"
                        aria-label="Search">

                </form>
            </nav>
        </div>

        <v-data-table :headers="headers" :items="desserts" :search="search" sort-by="calories" class="elevation-1">
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title>Total awards <v-icon>
                            mdi-trophy
                        </v-icon> </v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>

                    <!-- 
                    <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line
                        hide-details></v-text-field> -->

                    <v-dialog v-model="dialog" max-width="1000px">

                        <!-- 
                        <template v-slot:activator="{ on, attrs }">


                            <button class="btn btn-outline-success" type="button" v-bind="attrs" v-on="on"> <v-icon>
                                    mdi-account-plus
                                </v-icon>
                                New Item</button>
                        </template> -->













                        <!--  <template v-slot:activator="{ on, attrs }">
                            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                                <v-icon>
                                    mdi-account-plus
                                </v-icon>
                                New Item
                            </v-btn>
                        </template> -->


                        <v-card>
                            <v-card-title>
                                <span class="text-h5">{{ formTitle }}</span>
                            </v-card-title>

                            <v-card-text>
                                <v-container style="max-width: 100%;">
                                    <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field outlined v-model="editedItem.firstname" disabled
                                                label="First name"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field outlined v-model="editedItem.middlename" disabled
                                                label="Middle name"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field outlined v-model="editedItem.lastname" disabled
                                                label="Last name"></v-text-field>
                                        </v-col>

                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field outlined v-model="editedItem.relocation" disabled
                                                label="Relocation site"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field outlined v-model="editedItem.blocklot" disabled
                                                label="Block/Lot"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field outlined v-model="editedItem.area" disabled
                                                label="Area SQM"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field outlined v-model="editedItem.note" disabled
                                                label="Notes"></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>


                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="warning" text @click="close">
                                    Close
                                </v-btn>
                                <v-btn color="blue darken-1" text @click="save">
                                    Save
                                </v-btn>
                            </v-card-actions>
                        </v-card>











                    </v-dialog>
                    <v-dialog v-model="dialogDelete" max-width="500px">
                        <v-card>
                            <v-card-title class="text-h6">Are you sure you want to add to blocklisted?</v-card-title>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
                <!-- <v-icon small class="mr-2" @click="editItem(item)">
                    mdi-pencil
                </v-icon> -->

                <v-tooltip top color="green">
                    <template v-slot:activator="{ on, }">
                        <v-btn class="ma-2" outlined color="green" @click="editItem(item)" v-on="on">
                            <v-icon>
                                mdi-eye-outline
                            </v-icon>
                        </v-btn>
                    </template>
                    <span>Click to view data</span>
                </v-tooltip>



                <!-- <v-icon small @click="deleteItem(item)">
                    mdi-delete
                </v-icon> -->



                <!-- <v-tooltip top color="red">
                    <template v-slot:activator="{ on, }">
                        <v-btn class="ma-2" outlined color="red" @click="deleteItem(item)" v-on="on">
                            <v-icon>
                                mdi-delete
                            </v-icon>
                        </v-btn>
                    </template>
                    <span>Click to add to blocklisted</span>
                </v-tooltip> -->



            </template>



            <template v-slot:no-data>
                <v-btn color="primary" @click="initialize">
                    Reset
                </v-btn>
            </template>
        </v-data-table>

    </div>
</template>

<script>

/* eslint-disable */

import AdminNavbar from '../Navigation/AdminNavbar.vue';


export default {

    components: {
        AdminNavbar,


    },

    data: () => ({

        search: '',
        dialog: false,
        dialogDelete: false,
        headers: [
            // {
            //     text: 'First name',
            //     align: 'start',
            //     sortable: false,
            //     value: 'name',
            // },
            { text: 'First name', value: 'firstname' },
            { text: 'Middle name', value: 'middlename' },
            { text: 'Last name', value: 'lastname' },

            { text: 'Relocation site', value: 'relocation' },
            { text: 'Block / Lot ', value: 'blocklot' },
            { text: 'Area SQM', value: 'area' },
            { text: 'Notes', value: 'note' },
            { text: 'Actions', value: 'actions', sortable: false },
        ],
        desserts: [],
        editedIndex: -1,
        editedItem: {
            name: '',
            calories: 0,
            fat: 0,
            carbs: 0,
            protein: 0,
        },
        defaultItem: {
            name: '',
            calories: 0,
            fat: 0,
            carbs: 0,
            protein: 0,
        },
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'New Item' : 'Applicant details'
        },
    },

    watch: {
        dialog(val) {
            val || this.close()
        },
        dialogDelete(val) {
            val || this.closeDelete()
        },
    },

    created() {
        this.initialize()
    },

    methods: {
        initialize() {
            this.desserts = [
                {
                    firstname: 'Frozen Yogurt',
                    middlename: 'sample middle name',
                    lastname: 'sample last name',

                    relocation: 'sample relocation',
                    blocklot: 'sample block / lot',
                    area: '123',
                    note: 'sample note'
                },
                {
                    firstname: 'Ice cream sandwich',
                    middlename: 'sample middle name',
                    lastname: 'sample last name',

                    relocation: 'sample relocation',
                    blocklot: 'sample block / lot',
                    area: '123',
                    note: 'sample note'
                },
                {
                    firstname: 'Eclair',
                    middlename: 'sample middle name',
                    lastname: 'sample last name',

                    relocation: 'sample relocation',
                    blocklot: 'sample block / lot',
                    area: '123',
                    note: 'sample note'
                },
                {
                    firstname: 'Cupcake',
                    middlename: 'sample middle name',
                    lastname: 'sample last name',

                    relocation: 'sample relocation',
                    blocklot: 'sample block / lot',
                    area: '123',
                    note: 'sample note'
                },
                {
                    firstname: 'Gingerbread',
                    middlename: 'sample middle name',
                    lastname: 'sample last name',

                    relocation: 'sample relocation',
                    blocklot: 'sample block / lot',
                    area: '123',
                    note: 'sample note'
                },
                {
                    firstname: 'Jelly bean',
                    middlename: 'sample middle name',
                    lastname: 'sample last name',

                    relocation: 'sample relocation',
                    blocklot: 'sample block / lot',
                    area: '123',
                    note: 'sample note'
                },
                {
                    firstname: 'Lollipop',
                    middlename: 'sample middle name',
                    lastname: 'sample last name',
                    address: 'Mankilam',
                    contact: '09123456789',
                    relocation: 'sample relocation',
                    blocklot: 'sample block / lot',
                    area: '123',
                    note: 'sample note'
                },
                {
                    firstname: 'Honeycomb',
                    middlename: 'sample middle name',
                    lastname: 'sample last name',

                    relocation: 'sample relocation',
                    blocklot: 'sample block / lot',
                    area: '123',
                    note: 'sample note'
                },
                {
                    firstname: 'Donut',
                    middlename: 'sample middle name',
                    lastname: 'sample last name',
                    relocation: 'sample relocation',
                    blocklot: 'sample block / lot',
                    area: '123',
                    note: 'sample note'
                },
                {
                    firstname: 'KitKat',
                    middlename: 'sample middle name',
                    lastname: 'sample last name',

                    relocation: 'sample relocation',
                    blocklot: 'sample block / lot',
                    area: '123',
                    note: 'sample note'
                },
            ]
        },

        editItem(item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem(item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },

        deleteItemConfirm() {
            this.desserts.splice(this.editedIndex, 1)
            this.closeDelete()
        },

        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        closeDelete() {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.desserts[this.editedIndex], this.editedItem)
            } else {
                this.desserts.push(this.editedItem)
            }
            this.close()
        },
    },
}


</script>