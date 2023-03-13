<template>
    <div class="to-approved">
        <HomeNavigation />
        <div>
            <nav class="navbar navbar-light bg-light justify-content-between">
                <a class="navbar-brand">.</a>
                <form class="form-inline">
                    <input class="form-control mr-sm-2" v-model="search" type="search" placeholder="Search"
                        aria-label="Search">
                </form>
            </nav>
        </div>
        <v-dialog v-model="samedetails" max-width="347px">
            <div class="container">
                <div class="cookiesContent" id="cookiesPopup">
                    <button class="close" @click="samedetails = false">✖</button>
                    <img src="https://scontent.fmnl33-2.fna.fbcdn.net/v/t1.15752-9/332557698_1239567250299731_4305008076068462471_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGAPcF5m1rkKCc9qQ2FevbziqZIKQPhrVKKpkgpA-GtUnbn0hdy4PokvSBaUEkaW2HyY3KjX1ZgFz1CjhqvLhn8&_nc_ohc=GPfdc3fFM-gAX_qK03n&_nc_oc=AQkWG50clh5IjlUdloflp4o1oiBPvRd2j4-upBxnA28W436hZ9D6JIWuafPcwvPcjxo&_nc_ht=scontent.fmnl33-2.fna&oh=03_AdS1qEgQ-MsjomyfMeUm10wAa1YPO0yOk0b2MAneZmLqBA&oe=641E3156"
                        alt="cookies-img" />
                    <p>Information is already exists to the records!</p>
                    <button class="accept" @click="samedetails = false">That's fine!</button>
                </div>
            </div>
        </v-dialog>

        <v-data-table :headers="headers" :items="desserts" :search="search" sort-by="calories" class="elevation-1">
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title>List of awarded applicants <v-icon>
                            mdi-trophy
                        </v-icon> </v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-card-title>
                        <span class="text-h5">{{ formTitle }}</span>
                    </v-card-title>
                    <v-dialog v-model="dialog" max-width="1000px">
                        <!-- <template v-slot:activator="{ on, attrs }">
                            <button class="btn btn-outline-success" type="button" v-bind="attrs" v-on="on"> <v-icon>
                                    mdi-account-plus
                                </v-icon>
                                New Item</button>
                        </template> -->
                        <template v-slot:activator="{ on, attrs }">
                            <button class="btn btn-outline-success" type="button" @click="insertdialog = true"> <v-icon>
                                    mdi-account-plus
                                </v-icon>
                                Add Applicant</button>
                        </template>

                        <v-card>
                            <v-card-text>
                                <v-container style="max-width: 100%;">
                                    <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field outlined v-model="editedItem.firstname" label="First name"
                                                disabled></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field outlined v-model="editedItem.middlename" label="Middle name"
                                                disabled required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field outlined v-model="editedItem.lastname" label="Last name" disabled
                                                required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            
                                            <v-text-field outlined v-model="editedItem.address" label="Address" disabled
                                                required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field outlined v-model="editedItem.contact" type="number" disabled
                                                label="Contact number" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field outlined v-model="editedItem.relocation" label="Relocation site"
                                                disabled required></v-text-field>
                                        </v-col>
                                        <!-- <v-col cols="12" sm="6" md="4">
                                            <v-text-field outlined v-model="editedItem.relocation"
                                                label="Relocation site name" required></v-text-field>
                                        </v-col> -->
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field outlined v-model="editedItem.blocklot" label="Block and Lot"
                                                disabled required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field outlined v-model="editedItem.area" hide-details single-line
                                                type="number" label="Area SQM" disabled required />
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">

                                            <div class="form-outline">
                                                <textarea class="form-control" id="textAreaExample2"
                                                    v-model="editedItem.note" rows="4" disabled></textarea>
                                                <label class="form-label" for="textAreaExample2">Remarks</label>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="success" text @click="isHidden = true">
                                    Transfer
                                </v-btn>
                                <v-btn color="warning" text @click="close">
                                    Close
                                </v-btn>
                                <!-- <v-btn color="blue darken-1" text @click="save">
                                    Save
                                </v-btn> -->
                            </v-card-actions>
                        </v-card>
                    </v-dialog>

                    <v-dialog v-model="insertdialog" max-width="1000px">
                        <!-- <template v-slot:activator="{ on, attrs }">
                            <button class="btn btn-outline-success" type="button" v-bind="attrs" v-on="on"> <v-icon>
                                    mdi-account-plus
                                </v-icon>
                                New Item</button>
                        </template> -->
                        <v-card>
                            <v-card-text>
                                <v-container style="max-width: 100%;">
                                    <v-row>

                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field outlined v-model="editedItem.firstname" label="First name"
                                                required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field outlined v-model="editedItem.middlename" label="Middle name"
                                                required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field outlined v-model="editedItem.lastname" label="Last name"
                                                required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field outlined v-model="editedItem.address" label="Address"
                                                required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field outlined v-model="editedItem.contact" type="number"
                                                label="Contact number" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field outlined v-model="editedItem.relocation" label="Relocation site"
                                                required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field outlined v-model="editedItem.relocationsitename"
                                                label="Relocation site name" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field outlined v-model="editedItem.blocklot" label="Block and Lot"
                                                required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field outlined v-model="editedItem.area" hide-details single-line
                                                type="number" label="Area SQM" required />
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">

                                            <div class="form-outline">
                                                <textarea class="form-control" id="textAreaExample2" rows="4"></textarea>
                                                <label class="form-label" for="textAreaExample2">Remarks</label>
                                            </div>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-img class="profile-image"
                                                src="https://img.freepik.com/premium-vector/happy-young-african-man-with-hand-pocket-waving-hand-say-hello-greeting-gesture_535862-1045.jpg"></v-img>
                                            "Choose picture"
                                            <input type="file" id="myFile" name="filename">
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="warning" text @click="insertdialog = false">
                                    Close
                                </v-btn>
                                <v-btn color="blue darken-1" text @click="save">
                                    Save
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>

                    <v-dialog v-model="isHidden" max-width="1000px">
                        <v-card>
                            <h3>Transfer form</h3>
                            <v-card-text>
                                <v-container style="max-width: 100%;">
                                    <v-row>
                                        <div>
                                            <v-card>
                                                <v-row>
                                                    <v-col cols="12" sm="6" md="4">
                                                        <v-text-field outlined v-model="editedItem.firstname"
                                                            label="First name" required></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="6" md="4">
                                                        <v-text-field outlined v-model="editedItem.middlename"
                                                            label="Middle name" required></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="6" md="4">
                                                        <v-text-field outlined v-model="editedItem.lastname"
                                                            label="Last name" required></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="6" md="4">
                                                        <v-text-field outlined v-model="editedItem.address" label="Address"
                                                            required></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="6" md="4">
                                                        <v-text-field outlined v-model="editedItem.contact" type="number"
                                                            label="Contact number" required></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="6" md="4">
                                                        <v-text-field outlined v-model="editedItem.relocation"
                                                            label="Relocation site" required></v-text-field>
                                                    </v-col>
                                                    <!-- <v-col cols="12" sm="6" md="4">
                                            <v-text-field outlined v-model="editedItem.relocation"
                                                label="Relocation site name" required></v-text-field>
                                        </v-col> -->
                                                    <v-col cols="12" sm="6" md="4">
                                                        <v-text-field outlined v-model="editedItem.blocklot"
                                                            label="Block and Lot" required></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="6" md="4">
                                                        <v-text-field outlined v-model="editedItem.area" hide-details
                                                            single-line type="number" label="Area SQM" required />
                                                    </v-col>
                                                    <v-col cols="12" sm="6" md="4">
                                                        <!-- <v-text-field label="Suffix" required hint="Jr., III, etc"></v-text-field> -->
                                                        <v-select :items="['Reason 1', 'Reason 2', 'Reason 3']"
                                                            label="Reason" outlined required></v-select>
                                                    </v-col>
                                                    <v-col cols="12" sm="6" md="4">
                                                        <div class="form-outline">
                                                            <textarea class="form-control" id="textAreaExample2"
                                                                rows="4"></textarea>
                                                            <label class="form-label" for="textAreaExample2">Message</label>
                                                        </div>
                                                    </v-col>
                                                    <v-col cols="12" sm="6" md="4">
                                                        <v-img class="profile-image"
                                                            src="https://img.freepik.com/premium-vector/happy-young-african-man-with-hand-pocket-waving-hand-say-hello-greeting-gesture_535862-1045.jpg"></v-img>
                                                        "Choose picture"
                                                        <input type="file" id="myFile" name="filename">
                                                    </v-col>
                                                </v-row>
                                            </v-card>
                                        </div>
                                    </v-row>
                                </v-container>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="warning" text @click="isHidden = false">
                                    Close
                                </v-btn>
                                <v-btn color="blue darken-1" text @click="samedetails = true">
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

                <!-- <v-tooltip top color="red" location="start">
                    <template v-slot:activator="{ on, }">
                        <v-btn class="ma-2" outlined color="red" @click="deleteItem(item)">
                            <v-icon>
                                mdi-delete
                            </v-icon>
                        </v-btn>
                    </template>
                    <span>Click to delete data</span>
                </v-tooltip> -->

                <!-- 
                <v-icon small @click="deleteItem(item)">
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


export default {

    components: {
    },
    data: () => ({
        samedetails: false,
        search: '',
        dialog: false,
        dialogDelete: false,
        isHidden: false,
        insertdialog: false,
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
            { text: 'Date\n awarded', value: 'date' },
            { text: 'Danger zone', value: 'dangerzone' },
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
            relocationsitename: '',
        },
        defaultItem: {
            name: '',
            calories: 0,
            fat: 0,
            carbs: 0,
            protein: 0,
            relocationsitename: '',
        },
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? '' : 'Applicant details'
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
                    note: 'sample note',
                    date: '03/03/2023',
                    dangerzone: 'Flood prone',
                },
                {
                    firstname: 'Ice cream sandwich',
                    middlename: 'sample middle name',
                    lastname: 'sample last name',
                    relocation: 'sample relocation',
                    blocklot: 'sample block / lot',
                    area: '123',
                    note: 'sample note',
                    date: '03/04/2023',
                    dangerzone: 'Kilid sa sapa',
                },
                {
                    firstname: 'Eclair',
                    middlename: 'sample middle name',
                    lastname: 'sample last name',
                    relocation: 'sample relocation',
                    blocklot: 'sample block / lot',
                    area: '123',
                    note: 'sample note',
                    date: '03/05/2023',
                    dangerzone: 'Flood prone',
                },
                {
                    firstname: 'Cupcake',
                    middlename: 'sample middle name',
                    lastname: 'sample last name',
                    relocation: 'sample relocation',
                    blocklot: 'sample block / lot',
                    area: '123',
                    note: 'sample note',
                    date: '03/06/2023',
                    dangerzone: 'NPC line',
                },
                {
                    firstname: 'Gingerbread',
                    middlename: 'sample middle name',
                    lastname: 'sample last name',
                    relocation: 'sample relocation',
                    blocklot: 'sample block / lot',
                    area: '123',
                    note: 'sample note',
                    date: '03/07/2023',
                    dangerzone: 'Landslide area',
                },
                {
                    firstname: 'Jelly bean',
                    middlename: 'sample middle name',
                    lastname: 'sample last name',
                    relocation: 'sample relocation',
                    blocklot: 'sample block / lot',
                    area: '123',
                    note: 'sample note',
                    date: '03/08/2023',
                    dangerzone: 'Flood area',
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
                    note: 'sample note',
                    date: '03/09/2023',
                    dangerzone: 'Kilid sa sapa',
                },
                {
                    firstname: 'Honeycomb',
                    middlename: 'sample middle name',
                    lastname: 'sample last name',
                    relocation: 'sample relocation',
                    blocklot: 'sample block / lot',
                    area: '123',
                    note: 'sample note',
                    date: '03/10/2023',
                    dangerzone: 'Others',
                },
                {
                    firstname: 'Donut',
                    middlename: 'sample middle name',
                    lastname: 'sample last name',
                    relocation: 'sample relocation',
                    blocklot: 'sample block / lot',
                    area: '123',
                    note: 'sample note',
                    date: '03/11/2023',
                    dangerzone: 'Kilid sa sapa',
                },
                {
                    firstname: 'KitKat',
                    middlename: 'sample middle name',
                    lastname: 'sample last name',
                    relocation: 'sample relocation',
                    blocklot: 'sample block / lot',
                    area: '123',
                    note: 'sample note',
                    date: '03/12/2023',
                    dangerzone: 'Others',

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

<style>
/* body {
    font-family: "Roboto", sans-serif;
    padding: 0;
    margin: 0;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
} */

.cookiesContent {
    width: 335px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    color: #000;
    text-align: center;
    border-radius: 20px;
    padding: 30px 30px 60px;
}

.cookiesContent button.close {
    width: 30px;
    font-size: 20px;
    color: #c0c5cb;
    align-self: flex-end;
    background-color: transparent;
    border: none;
    margin-bottom: 10px;
}

.cookiesContent img {
    width: 100px;
    margin-bottom: 15px;
}

.cookiesContent p {
    margin-bottom: 40px;
    font-size: 18px;
}

.cookiesContent button.accept {
    background-color: #ed6755;
    border: none;
    border-radius: 3px;
    width: 200px;
    padding: 11px;
    font-size: 16px;
    color: white;
    box-shadow: 0px 6px 18px -5px #ed6755;
}
</style>