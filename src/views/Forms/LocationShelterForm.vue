<template>

    <div class="form-one">
        <HomeNavigation />
        <v-container fluid class="my-5">
            <v-card>
                <v-card-title>
                    <span class="text-h7">Information Sheet for Relocation Lot Applicants</span>
                </v-card-title>
                <v-stepper v-model="e1">
                    <v-stepper-header>
                        <v-stepper-step :complete="e1 > 1" step="1" offset-y min-width="auto">
                            Personal na Impormasyon
                        </v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step :complete="e1 > 2" step="2" offset-y min-width="auto">
                            Ngalan sa anak nga nakig-ipon
                        </v-stepper-step>
                        <!-- <v-divider></v-divider>
                        <v-stepper-step :complete="e1 > 3" step="3" offset-y min-width="auto">
                            Istado sa Pagpuyo
                        </v-stepper-step> -->
                        <v-divider></v-divider>
                        <v-stepper-step step="3" offset-x min-width="auto">
                            Sitwasyon sa Pagpuyo
                        </v-stepper-step>

                    </v-stepper-header>
                    <v-stepper-items>
                        <v-stepper-content step="1">
                            <v-card class="mb-1" color="grey lighten-4">
                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" sm="6" md="3">
                                                <v-text-field label="Apelyido" clearable required outlined
                                                    autofocus></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="3">
                                                <v-text-field label="Pangalan" clearable required
                                                    outlined></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="3">
                                                <v-text-field label="Middle Name" clearable required
                                                    outlined></v-text-field>

                                            </v-col>
                                            <v-col cols="12" sm="6" md="3">
                                                <!-- <v-text-field label="Suffix" required hint="Jr., III, etc"></v-text-field> -->
                                                <v-select :items="['Jr.', 'Sr.']" label="Suffix" outlined
                                                    required></v-select>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="6">
                                                <v-text-field label="Purok" clearable required outlined></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-select
                                                    :items="['Minyo', 'Minyo nga naay kaipon lain', 'Nag ipon apan wala na kasal', 'Byuda', 'Byudo', 'Bulas sa Asawa / Bana', 'Dalaga', 'Ulitawo']"
                                                    label="Civil Status" required outlined></v-select>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-select
                                                    :items="['Stado 1', 'Stado 2', 'Stado 3', 'Stado 4', 'Stado 5']"
                                                    label="Stado sa Pagpanarbaho" required outlined></v-select>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="6">
                                                <v-text-field label="Contact No." clearable required
                                                    outlined></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-text-field label="Pangalan sa Employer" type="address" clearable
                                                    required outlined></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="3">
                                                <v-select
                                                    :items="['1000 to 3000', '4000 to 6000', '7000 to 8000', '9000 to 10000',]"
                                                    label="Bulan na kita" required outlined></v-select>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="3">
                                                <div>
                                                    <div class="mb-1">
                                                    </div>
                                                    <v-menu ref="menu" v-model="menu" :close-on-content-click="false"
                                                        transition="scale-transition" offset-y min-width="auto">
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <v-text-field v-model="date" label="Adlaw Natawhan"
                                                                prepend-icon="mdi-calendar" readonly v-bind="attrs"
                                                                v-on="on" outlined></v-text-field>
                                                        </template>
                                                        <v-date-picker v-model="date" :active-picker.sync="activePicker"
                                                            :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                                                            min="1950-01-01" @change="save"></v-date-picker>
                                                    </v-menu>
                                                </div>
                                            </v-col>
                                            <v-col cols="12" sm="3">
                                                <v-select
                                                    :items="['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', , '12 pa taas nga nag puy']"
                                                    label="Pila ka tuig nagpuyo" required outlined></v-select>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="3">
                                                <v-text-field label="Pangalan sa bana / asawa" clearable required
                                                    outlined></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="3">
                                                <v-text-field label="Middle Name" clearable required
                                                    outlined></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="3">
                                                <v-text-field label="Apelyido" clearable required
                                                    outlined></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="3">
                                                <v-text-field label="Trabaho" clearable required
                                                    outlined></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="3">
                                                <v-select
                                                    :items="['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '12 pa taas ang mga anak']"
                                                    label="Pila ang anak" required outlined> </v-select>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                    <h2 class="red--text">*indicates required field</h2>
                                </v-card-text>
                            </v-card>
                            <v-btn class="ma-4" color="#F7A4A4" @click="$router.push('/dashboard')">
                                <v-icon large color="green darken-2">
                                    mdi-cancel
                                </v-icon>

                                Cancel
                            </v-btn>

                            <v-btn color="#B6E2A1" @click="e1 = 2">
                                <v-icon large color="green darken-2">
                                    mdi-arrow-right-circle
                                </v-icon>
                                Continue
                            </v-btn>
                        </v-stepper-content>
                        <v-stepper-content step="2">
                            <v-card class="mb-12" color="grey lighten-4">
                                <v-card-text>
                                    <v-container fluid>
                                        <v-row>
                                            <v-responsive class="overflow-y-auto" max-height="400">



                                                <v-lazy v-model="isActive" :options="{
                                                    threshold: .5
                                                }" min-height="200" transition="fade-transition">
                                                    <v-card class="mx-auto" max-width="100%">
                                                        <v-card-title>Card title</v-card-title>
                                                        <v-card-text>
                                                            <!-- start of dynamic text -->
                                                            <v-card>
                                                                <v-col cols="12" md="12" sm="12">
                                                                    <div v-for="(item, index) in form" :key="item">
                                                                        <v-row>
                                                                            <v-col cols="12" md="2">
                                                                                <v-text-field outlined label="Full name"
                                                                                    dense color="success"
                                                                                    v-model="item.FullName">
                                                                                </v-text-field>
                                                                            </v-col>
                                                                            <v-col cols="12" md="2">
                                                                                <v-text-field outlined
                                                                                    label="Civil Status" dense
                                                                                    color="success"
                                                                                    v-model="item.CivilStatus">
                                                                                </v-text-field>
                                                                            </v-col>
                                                                            <v-col cols="12" md="2">
                                                                                <v-text-field outlined label="Address"
                                                                                    dense color="success"
                                                                                    v-model="item.Address">
                                                                                </v-text-field>
                                                                            </v-col>
                                                                            <v-col cols="12" md="2">
                                                                                <v-text-field outlined label="Income"
                                                                                    type="number" dense color="success"
                                                                                    v-model="item.income">
                                                                                </v-text-field>
                                                                            </v-col>
                                                                            <v-col cols="12" md="2">
                                                                                <v-btn color="error"
                                                                                    @click="removeRow(index)">
                                                                                    <v-icon>
                                                                                        mdi-delete
                                                                                    </v-icon>
                                                                                    Remove
                                                                                </v-btn>
                                                                                <v-btn color="#374ac4"
                                                                                    class=" text-light" @click="addRow">
                                                                                    <v-icon>
                                                                                        mdi-plus
                                                                                    </v-icon>
                                                                                    Add
                                                                                </v-btn>
                                                                            </v-col>
                                                                        </v-row>
                                                                    </div>
                                                                    <v-btn padding-top="3px" @click="saveItem"
                                                                        color="success">
                                                                        <v-icon>
                                                                            mdi-content-save
                                                                        </v-icon>
                                                                        Save Item
                                                                    </v-btn>
                                                                </v-col>
                                                            </v-card>
                                                            <!-- end of dynamic text -->
                                                        </v-card-text>
                                                    </v-card>
                                                </v-lazy>
                                            </v-responsive>
                                        </v-row>
                                    </v-container>
                                </v-card-text>
                                <v-card flat>
                                </v-card>
                            </v-card>
                            <v-btn color="secondary" @click="e1 = 3">
                                Continue
                            </v-btn>
                            <v-btn @click="e1 = 1" class="ma-2">
                                Back
                            </v-btn>
                        </v-stepper-content>

                        <v-stepper-content step="3">

                            <LocationShelter />

                            <v-btn @click="e1 = 2" class="ma-3">
                                Back
                            </v-btn>
                            <v-btn class="ma-4" color="secondary" @click="dialog = false" value="save">
                                Save
                            </v-btn>
                        </v-stepper-content>
                    </v-stepper-items>
                </v-stepper>
            </v-card>

        </v-container>
    </div>
</template>

<script>
/* eslint-disable */
// import PieChart from "@/components/ChartComponent.vue";
import LocationShelter from "@/components/ShelterLocation.vue";
// import AdminNavbar from '../Navigation/AdminNavbar.vue';
import { reactive } from 'vue'
export default {

    components: {
        // AdminNavbar,
        LocationShelter

    },
    setup() {
        const form = reactive([
            { FullName: '', CivilStatus: '', Address: '', income: 0 }
        ])
        const addRow = () => {
            form.push({ FullName: '', CivilStatus: '', Address: '', income: 0 })
        }
        const removeRow = (index) => {
            if (form.length > 1) {
                form.splice(index, 1)
            }

        }
        const saveItem = () => {
            //install axios diri nga part npm install axios 
            // isntall npm install bootstrap
        }

        return {
            form,
            addRow,
            removeRow,
            saveItem
        }
    },

    data() {
        return {
            e1: 1,
            dialog: false,
            drawer: null,
            items: [
                { icon: "mdi-view-dashboard", text: "Dashboard", route: "/dashboard" },
                // {
                //     icon: "mdi mdi-account",
                //     text: "Forms",
                //     route: "/ScholarshipApplication",
                // },
                {
                    icon: "mdi-chevron-up",
                    "icon-alt": "mdi-chevron-down",
                    "icon-ctr": "mdi-note-multiple",
                    text: "Fill-up forms    ",
                    model: false,
                    children: [
                        {
                            icon: "mdi-note-plus",
                            text: "Relocation",
                            route: "/form-one",
                        },
                        {
                            icon: "mdi-note-plus",
                            text: "For Recommendation",
                            route: "/form-one",
                        },
                        {
                            icon: "mdi-note-plus",
                            text: "For Processing",
                            route: "/form-one",
                        },
                    ],
                },
                {
                    icon: "mdi-chevron-up",
                    "icon-alt": "mdi-chevron-down",
                    "icon-ctr": "mdi-account-box",
                    text: "Profile",
                    model: false,
                    children: [
                        {
                            icon: "mdi-information-outline",
                            text: "User Info",
                            route: "/YouTherecord",
                        },
                        {
                            icon: "mdi-printer",
                            text: "Print",
                            route: "/viewshit",
                        },
                        {
                            icon: "mdi-logout-variant",
                            text: "Log Out",
                            route: "/log-in",
                        },
                    ],
                },
            ],
        }
    },
    watch: {
        menu(val) {
            val && setTimeout(() => (this.activePicker = 'YEAR'))
        },
    },
    methods: {
        save(date) {
            this.$refs.menu.save(date)
        },
    },



}
</script>

<style scoped>

</style>

