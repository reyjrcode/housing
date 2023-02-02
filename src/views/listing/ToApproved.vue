<template>

    <div class="to-approved">
        <AdminNavbar />




        <v-data-table :headers="headers" :items="desserts" :search="search" sort-by="calories" class="elevation-1">
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title>List of applicants <v-icon>
                            mdi-note-text
                        </v-icon> </v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>

                    <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line
                        hide-details></v-text-field>
                    <v-dialog v-model="dialog" max-width="900px">


                        <!-- <template v-slot:activator="{ on, attrs }">
                        <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                            New Item
                        </v-btn>
                    </template> -->


                        <div class="card" style="width: 100%;">
                            <v-card-title>
                                <span class="text-h5">{{ formTitle }}</span>
                            </v-card-title>

                            <v-card-text>
                                <v-container style="max-width: 100%;">
                                    <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.firstname"
                                                label="First name"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.middlename"
                                                label="Middle name"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.lastname"
                                                label="Last name"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.address" label="Address"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.contact"
                                                label="Contact number"></v-text-field>
                                        </v-col>

                                        <v-col sm="6" md="5" lg="6">
                                            <v-card class="pa-2" outlined tile>
                                                <h2>Sitwasyon sa pagpuyo</h2>
                                                <v-checkbox v-model="ex4" label="With notice to evacuate"
                                                    color="secondary" value="WithNoticeToEvacuate" hide-details>
                                                </v-checkbox>
                                                <v-checkbox v-model="ex4"
                                                    label="With court order for demolition and eviction"
                                                    color="secondary" value="Semento" hide-details>
                                                </v-checkbox>
                                                <v-checkbox v-model="ex4"
                                                    label="Affected by government infrastructure project"
                                                    color="secondary" value="Trapal" hide-details>
                                                </v-checkbox>
                                                <v-checkbox v-model="ex4"
                                                    label="Affected by private construction project" color="secondary"
                                                    value="Trapal" hide-details>
                                                </v-checkbox>
                                                <v-checkbox v-model="ex4" label="Accretion Area" color="secondary"
                                                    value="Trapal" hide-details>
                                                </v-checkbox>
                                                <br>

                                            </v-card>
                                        </v-col>
                                        <v-col sm="6" md="5" offset-md="2" lg="6" offset-lg="0">
                                            <v-card class="pa-2" outlined tile>
                                                <h2>Danger zone</h2>
                                                <v-checkbox v-model="ex4" label="Kilid sa creek" color="secondary"
                                                    value="WithNoticeToEvacuate" hide-details>
                                                </v-checkbox>
                                                <v-checkbox v-model="ex4" label="Kilid sa sapa" color="secondary"
                                                    value="Semento" hide-details>
                                                </v-checkbox>
                                                <v-checkbox v-model="ex4" label="NPC line" color="secondary"
                                                    value="Trapal" hide-details>
                                                </v-checkbox>
                                                <v-checkbox v-model="ex4" label="Landslide prone area" color="secondary"
                                                    value="Trapal" hide-details>
                                                </v-checkbox>
                                                <v-checkbox v-model="ex4" label="Identified flood prone area"
                                                    color="secondary" value="Trapal" hide-details>
                                                </v-checkbox>
                                                <v-col cols="12" sm="6" md="12">
                                                    <v-text-field label="Others:" clearable required
                                                        outlined></v-text-field>
                                                </v-col>
                                            </v-card>
                                        </v-col>
                                    </v-row>
                                </v-container>


                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="close">
                                    Cancel
                                </v-btn>
                                <v-btn color="blue darken-1" text @click="save">
                                    Save
                                </v-btn>
                            </v-card-actions>
                        </div>











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
                                mdi-lead-pencil
                            </v-icon>
                        </v-btn>
                    </template>
                    <span>Click to approved!</span>
                </v-tooltip>



                <!-- <v-icon small @click="deleteItem(item)">
                    mdi-delete
                </v-icon> -->
                <v-tooltip top color="red">
                    <template v-slot:activator="{ on, }">
                        <v-btn class="ma-2" outlined color="red" @click="deleteItem(item)" v-on="on">
                            <v-icon>
                                mdi-delete
                            </v-icon>
                        </v-btn>
                    </template>
                    <span>Click to add to blocklisted</span>
                </v-tooltip>



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
            { text: 'Baranggay', value: 'address' },
            { text: 'Contact', value: 'contact' },
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
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
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
                    middlename: 'Frozen Yogurt',
                    lastname: 'Frozen Yogurt',
                    address: 'Mankilam',
                    contact: '09123456789'
                },
                {
                    firstname: 'Ice cream sandwich',
                    middlename: 'Ice cream sandwich',
                    lastname: 'Ice cream sandwich',
                    address: 'Mankilam',
                    contact: '09123456789',
                },
                {
                    firstname: 'Eclair',
                    middlename: 'Eclair',
                    lastname: 'Eclair',
                    address: 'Mankilam',
                    contact: '09123456789',
                },
                {
                    firstname: 'Cupcake',
                    middlename: 'Cupcake',
                    lastname: 'Cupcake',
                    address: 'Mankilam',
                    contact: '09123456789',
                },
                {
                    firstname: 'Gingerbread',
                    middlename: 'Gingerbread',
                    lastname: 'Gingerbread',
                    address: 'Mankilam',
                    contact: '09123456789',
                },
                {
                    firstname: 'Jelly bean',
                    middlename: 'Gingerbread',
                    lastname: 'Gingerbread',
                    address: 'Mankilam',
                    contact: '09123456789',
                },
                {
                    firstname: 'Lollipop',
                    middlename: 'Lollipop',
                    lastname: 'Lollipop',
                    address: 'Mankilam',
                    contact: '09123456789',
                },
                {
                    firstname: 'Honeycomb',
                    middlename: 'Honeycomb',
                    lastname: 'Honeycomb',
                    address: 'Mankilam',
                    contact: '09123456789',
                },
                {
                    firstname: 'Donut',
                    middlename: 'Donut',
                    lastname: 'Donut',
                    address: 'Mankilam',
                    contact: '09123456789',
                },
                {
                    firstname: 'KitKat',
                    middlename: 'KitKat',
                    lastname: 'KitKat',
                    address: 'Mankilam',
                    contact: '09123456789',
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