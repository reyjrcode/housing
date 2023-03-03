<template>

    <div class="to-approved">
        <v-data-table :headers="headers" :items="desserts" :search="search" sort-by="calories" class="elevation-1">
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title> <v-icon>
                        </v-icon> </v-toolbar-title>
                    <h3>Bayanihan</h3><v-icon size="45" dark right color="#11301d">mdi-note-text</v-icon>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>

                    <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line
                        hide-details></v-text-field>
                    <v-dialog v-model="dialog" max-width="1000px">
                        <!-- <template v-slot:activator="{ on, attrs }">
                        <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
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
                                            <v-text-field disabled v-model="editedItem.baranngay"
                                                label="Baranngay"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field disabled v-model="editedItem.serve"
                                                label="Serve"></v-text-field>
                                        </v-col>
                                        <BayanihanSubtable />
                                    </v-row>
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




export default {

    components: {



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
            { text: 'Baranngay', value: 'baranngay' },
            { text: 'Serve', value: 'serve' },
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
                    baranngay: 'Apokon',
                    serve: 159,
                    
                },
                {
                    baranngay: 'Bincungan',
                    serve: 237,
                },
                {
                    baranngay: 'Busaon',
                    serve: 262,
                    proirity:''
                },
                {
                    baranngay: 'Canocotan',
                    serve: 305,
                },
                {
                    baranngay: 'Cuambogan',
                    serve: 356,
                },
                {
                    baranngay: 'La Filipina',
                    serve: 375,
                },
                {
                    baranngay: 'Liboganon',
                    serve: 408,
                },
                {
                    baranngay: 'Madaum',
                    serve: 452,
                },
                {
                    baranngay: 'Magdum',
                    serve: 452,
                },
                {
                    baranngay: 'Magugpo East',
                    serve: 518,
                    lastname: 26.0,
                },
                {
                    baranngay: 'Magugpo North',
                    serve: 518,
                },
                {
                    baranngay: 'Magugpo Poblacion',
                    serve: 518,
                },
                {
                    baranngay: 'Magugpo South',
                    serve: 518,
                },
                {
                    baranngay: 'Magugpo West',
                    serve: 518,
                },
                {
                    baranngay: 'Mankilam',
                    serve: 518,
                },
                {
                    baranngay: 'New Balamban',
                    serve: 518,
                },
                {
                    baranngay: 'Nueva Fuerza',
                    serve: 518,
                },
                {
                    baranngay: 'Pagsabangan',
                    serve: 518,
                },
                {
                    baranngay: 'Pandapan',
                    serve: 518,
                },
                {
                    baranngay: 'San Agustin',
                    serve: 518,
                },
                {
                    baranngay: 'San Isidro',
                    serve: 518,
                },
                {
                    baranngay: 'San Miguel',
                    serve: 518,
                },
                {
                    baranngay: 'Visayan Village',
                    serve: 518,
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