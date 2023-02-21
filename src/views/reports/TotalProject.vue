<template>

    <div class="to-approved">
        <HomeNavigation/>
        <v-data-table :headers="headers" :items="desserts" :search="search" sort-by="calories" class="elevation-1">
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title>Total project <v-icon>
                            mdi-home
                        </v-icon> </v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line
                        hide-details></v-text-field>
                    <v-dialog v-model="dialog" max-width="800px">
                        <v-card>
                            <v-card-title>
                                <span class="text-h5">{{ formTitle }}</span>
                            </v-card-title>

                            <v-card-text>
                                <v-container style="max-width: 100%;">
                                    <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field disabled v-model="editedItem.location"
                                                label="Location"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field disabled v-model="editedItem.vacant"
                                                label="Vacant"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field disabled v-model="editedItem.occupied"
                                                label="Occupied"></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <DataTable />


                                    
                                </v-container>


                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="close">
                                    Close
                                </v-btn>
                                <!-- <v-btn color="blue darken-1" text @click="save">
                                    Save
                                </v-btn> -->
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

                <v-tooltip top color="blue">
                    <template v-slot:activator="{ on, }">
                        <v-btn class="ma-2" outlined color="blue" @click="editItem(item)" v-on="on">
                            <v-icon>
                                mdi-eye-outline
                            </v-icon>
                        </v-btn>
                    </template>
                    <span>Click to view data</span>
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

// import AdminNavbar from '../Navigation/AdminNavbar.vue';
import DataTable from "@/components/ListingTable.vue"


export default {

    components: {
        // AdminNavbar,
        DataTable

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
            { text: 'Housing project', value: 'location' },
            { text: 'Vacant', value: 'vacant' },
            { text: 'Occupied', value: 'occupied' },

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
                    location: 'APOKON TAGUMPAY VILLAGE',
                    vacant: 159,
                    occupied: 6.0,

                },
                {
                    location: 'APOKON TAGUMPAY VILLAGE',
                    vacant: 237,
                    occupied: 9.0,

                },
                {
                    location: 'ELISEO V. WAKAN RESETTLEMENT SITE',
                    vacant: 262,
                    occupied: 16.0,

                },
                {
                    location: 'ELISEO V. WAKAN RESETTLEMENT SITE',
                    vacant: 305,
                    occupied: 3.7,

                },
                {
                    location: 'LA FILIPINA MALINAWON, TAGUMPAY VILLAGE',
                    vacant: 356,
                    occupied: 16.0,

                },
                {
                    location: 'LIBOGANON BUGSAY TAGUMPAY VILLAGE',
                    vacant: 375,
                    occupied: 0.0,

                },
                {
                    location: 'LIBOGANON BUGSAY TAGUMPAY VILLAGE',
                    vacant: 392,
                    occupied: 0.2,

                },
                {
                    location: 'MANKILAM TAGUMPAY VILLAGE',
                    vacant: 408,
                    occupied: 3.2,

                },
                {
                    location: 'MANUEL B. SUAYBAGUIO SR., VILLAGE PHASE I',
                    vacant: 452,
                    occupied: 25.0,

                },
                {
                    location: 'MANUEL B. SUAYBAGUIO SR., VILLAGE PHASE II',
                    vacant: 518,
                    occupied: 26.0,

                },
                {
                    location: 'MANUEL B. SUAYBAGUIO SR., VILLAGE PHASE III',
                    vacant: 518,
                    occupied: 26.0,

                },
                {
                    location: 'MASANDAG TRIBAL VILLAGE',
                    vacant: 518,
                    occupied: 26.0,

                },
                {
                    location: 'PANDAPAN TAGUMPAY VILLAGE',
                    vacant: 518,
                    occupied: 26.0,

                },
                {
                    location: 'PRK. DAISY BINCUNGAN TAGUMPAY VILLAGE',
                    vacant: 518,
                    occupied: 26.0,

                },
                {
                    location: 'RTU VILLAGE',
                    vacant: 518,
                    occupied: 26.0,

                },
                {
                    location: 'SAN AGUSTIN TAGUMPAY VILLAGE',
                    vacant: 518,
                    occupied: 26.0,

                },
                {
                    location: 'SAN ISIDRO TAGUMPAY VILLAGE',
                    vacant: 518,
                    occupied: 26.0,

                },
                {
                    location: 'TAGUMPAY BALAI RESIDENCES',
                    vacant: 518,
                    occupied: 26.0,

                },
                {
                    location: 'CITY EMPLOYEES VILLAGE (CITY HOMES)',
                    vacant: 518,
                    occupied: 26.0,

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