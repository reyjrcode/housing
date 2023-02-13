
<template>

    <div class="form-one">
        <AdminNavbar />


        <v-container fluid class="my-5">
                            <v-card>
                                <v-card-title>
                                    <span class="text-h7">Shelter and assistance program</span>
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
                                        <v-divider></v-divider>
                                        <v-stepper-step :complete="e1 > 3" step="3" offset-y min-width="auto">
                                            Ngalan sa nakig ipon
                                        </v-stepper-step>
                                        <v-stepper-step :complete="e1 > 4" step="4" offset-y min-width="auto">
                                            Istado sa Pagpuyo
                                        </v-stepper-step>
                                        
                                        <!-- <v-stepper-step step="3" offset-x min-width="auto">
                                            Istado sa Pagpuyo
                                        </v-stepper-step> -->
                                        <v-divider></v-divider>
                                        <!-- <v-stepper-step step="5" offset-x min-width="auto">
                                            Materiales
                                        </v-stepper-step> -->

                                    </v-stepper-header>
                                    <v-stepper-items>
                                        <v-stepper-content step="1">
                                            <v-card class="mb-1" color="grey lighten-4">
                                                <v-card-text>
                                                    <v-container>
                                                        <v-row>
                                                            <v-col cols="12" sm="6" md="3">
                                                                <v-text-field label="Apelyido" clearable required
                                                                    outlined autofocus></v-text-field>
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
                                                                <v-select :items="['Jr.', 'Sr.']" label="Suffix"
                                                                    outlined required></v-select>
                                                            </v-col>
                                                            <v-col cols="12" sm="6" md="6">
                                                                <v-text-field label="Purok" clearable required
                                                                    outlined></v-text-field>
                                                            </v-col>
                                                            <v-col cols="12" sm="6">
                                                                <v-select
                                                                    :items="['Minyo', 'Minyo nga naay kaipon lain', 'Nag ipon apan wala na kasal', 'Byuda', 'Byudo', 'Bulas sa Asawa / Bana', 'Dalaga', 'Ulitawo']"
                                                                    label="Civil Status" required outlined></v-select>
                                                            </v-col>
                                                            <v-col cols="12" sm="6">
                                                                <v-select
                                                                    :items="['Stado 1', 'Stado 2', 'Stado 3', 'Stado 4', 'Stado 5']"
                                                                    label="Stado sa Pagpanarbaho" required
                                                                    outlined></v-select>
                                                            </v-col>
                                                            <v-col cols="12" sm="6" md="6">
                                                                <v-text-field label="Contact No." clearable required
                                                                    outlined></v-text-field>
                                                            </v-col>
                                                            <v-col cols="12" sm="6">
                                                                <v-text-field label="Pangalan sa Employer"
                                                                    type="address" clearable required
                                                                    outlined></v-text-field>
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
                                                                    <v-menu ref="menu" v-model="menu"
                                                                        :close-on-content-click="false"
                                                                        transition="scale-transition" offset-y
                                                                        min-width="auto">
                                                                        <template v-slot:activator="{ on, attrs }">
                                                                            <v-text-field v-model="date"
                                                                                label="Adlaw Natawhan"
                                                                                prepend-icon="mdi-calendar" readonly
                                                                                v-bind="attrs" v-on="on"
                                                                                outlined></v-text-field>
                                                                        </template>
                                                                        <v-date-picker v-model="date"
                                                                            :active-picker.sync="activePicker"
                                                                            :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                                                                            min="1950-01-01"
                                                                            @change="save"></v-date-picker>
                                                                    </v-menu>
                                                                </div>
                                                            </v-col>
                                                            <v-col cols="12" sm="3">
                                                                <v-select
                                                                    :items="['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', , '12 pa taas nga nag puy']"
                                                                    label="Pila ka tuig nagpuyo" required
                                                                    outlined></v-select>
                                                            </v-col>
                                                            <v-col cols="12" sm="6" md="3">
                                                                <v-text-field label="Pangalan sa bana / asawa" clearable
                                                                    required outlined></v-text-field>
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
                                                                            <div class="container mt-4">
                                                                                <div class="card">
                                                                                    <div class="card-body">
                                                                                        <div v-for="item, index in form"
                                                                                            :key="item">
                                                                                            <!-- <H3>Anak number {{ index }}</H3>
{{ item }} -->
                                                                                            <div class="row">
                                                                                                <div class="col-sm-2">
                                                                                                    <label>Pangalan sa
                                                                                                        anak:</label>
                                                                                                    <input type="text"
                                                                                                        class="form-control"
                                                                                                        v-model="item.FullName">
                                                                                                </div>
                                                                                                <div class="col-sm-2">
                                                                                                    <label>Civil
                                                                                                        Status:</label>
                                                                                                    <input type="text"
                                                                                                        class="form-control"
                                                                                                        v-model="item.CivilStatus">
                                                                                                </div>
                                                                                                <div class="col-sm-2">
                                                                                                    <label>Address:</label>
                                                                                                    <input type="text"
                                                                                                        class="form-control"
                                                                                                        v-model="item.Address">
                                                                                                </div>
                                                                                                <div class="col-sm-2">
                                                                                                    <label>Income:</label>
                                                                                                    <input type="number"
                                                                                                        class="form-control"
                                                                                                        v-model="item.income">
                                                                                                </div>
                                                                                                <div
                                                                                                    class="col-sm-2 pt-4">
                                                                                                    <br />
                                                                                                    <button
                                                                                                        type="button"
                                                                                                        class="btn btn-danger btn-sm"
                                                                                                        @click="removeRow(index)">Remove</button>
                                                                                                    <button
                                                                                                        type="button"
                                                                                                        class="btn btn-success btn-sm "
                                                                                                        @click="addRow">Add</button>
                                                                                                </div>
                                                                                            </div> <br /><button
                                                                                                type="button"
                                                                                                class="btn btn-success btn-sm"
                                                                                                padding-top="3px"
                                                                                                @click="saveItem">Save
                                                                                                Item</button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
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
                                            <v-card class="mb-1" color="grey lighten-4" height="400px">
                                                <v-card-text>
                                                    <v-container>
                                                        <v-row>
                                                            <v-col cols="12" sm="6">
                                                                <v-select
                                                                    :items="['Kwarto', 'Balay', 'Kaugalingon nga balay pero ga arkila sa yuta']"
                                                                    label="Nag Arkila ug" required outlined></v-select>
                                                            </v-col>
                                                            <v-col cols="12" sm="6">
                                                                <v-select
                                                                    :items="['500 to 1,000', '1,100 to 1,500', '1,600 to 2,00', '2,100, to 2,500', '2,600, to 3,000', '3,000 pa taas and arkila']"
                                                                    label="Pila ang pag Arkila" outlined
                                                                    required></v-select>
                                                            </v-col>
                                                            <v-col cols="12">
                                                                <v-select
                                                                    :items="['Kaugalingon ang balay pero wala ga arkila sa yuta, nasayod ang tag-iya sa yuta', 'Kaugalingon nga balay pero wala ga arkila sa yuta, walay pag tugot sa tag-iya', 'Libre nga pagpuyo sa balay nga adunay pagtugot sa tag-iya', 'Libre nga pagpuyo sa balay ug yuta nga walay pagtugot sa tag-iya', 'Nakipuyo Lang']"
                                                                    label="Istado sa Pagpuyo" outlined
                                                                    required></v-select>
                                                            </v-col>
                                                            <v-col cols="12" sm="6" md="6">
                                                                <v-text-field label="Pangalan sa gipuy-an " outlined
                                                                    clearable></v-text-field>
                                                            </v-col>
                                                        </v-row>
                                                    </v-container>
                                                    <h2 class="red--text">Please indicates required field</h2>
                                                </v-card-text>
                                            </v-card>
                                            <v-btn color="secondary" @click="e1 = 4">
                                                Continue
                                            </v-btn>
                                            <v-btn @click="e1 = 2" class="ma-3">
                                                Back
                                            </v-btn>
                                            <!-- <v-btn class="ma-4" color="secondary" @click="dialog = false" value="save">
                                                Save
                                            </v-btn> -->
                                        </v-stepper-content>

                                        <v-stepper-content step="4">
                                            <v-card>

                                                <div class="card-body">
                                                    <h3 class="card-title">Replacement:</h3>
                                                    <div class="card-body">
                                                        <v-checkbox v-model="ex4" label="Self help" color="secondary"
                                                            value="Self help" hide-details>
                                                        </v-checkbox>
                                                        <v-checkbox v-model="ex4" label="Bayanihan" color="secondary"
                                                            value="Bayanihan" hide-details>
                                                        </v-checkbox>
                                                        <br /><br />

                                                        <div class="row">
                                                            <div class="col-6">
                                                                <h2>Natural Calamity</h2>
                                                                <select class="form-select form-select-lg mb-3"
                                                                    aria-label=".form-select-lg example">
                                                                    <option selected>Natural Calamity</option>
                                                                    <option value="Baha">Baha</option>
                                                                    <option value="Sunog">Sunog</option>
                                                                    <option value="Linog">Linog</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <br />
                                                    </div>
                                                </div>
                                            </v-card>



                                            <div class="div">
                                                <div class="container">
                                                    <div class="row">
                                                        <div class="col">
                                                            <div class="card">
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Areas for repair</h5>
                                                                    <v-checkbox v-model="ex4" label="Roofing"
                                                                        color="secondary" value="Roofing" hide-details
                                                                        autofocus></v-checkbox>
                                                                    <v-checkbox v-model="ex4" label="Walling"
                                                                        color="secondary" value="Walling"
                                                                        hide-details></v-checkbox>
                                                                    <v-checkbox v-model="ex4" label="Septic tank"
                                                                        color="secondary" value="Septic tank"
                                                                        hide-details></v-checkbox>
                                                                    <v-checkbox v-model="ex4" label="Drainage"
                                                                        color="secondary" value="Drainage" hide-details>
                                                                    </v-checkbox>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col">
                                                            <div class="card">
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Materials needed</h5>
                                                                    <v-checkbox v-model="ex4" label="Good mixed"
                                                                        color="secondary" value="Good mixed"
                                                                        hide-details autofocus></v-checkbox>
                                                                    <v-checkbox v-model="ex4" label="Cement"
                                                                        color="secondary" value="Cement"
                                                                        hide-details></v-checkbox>
                                                                    <v-checkbox v-model="ex4" label="Corrugated sheet"
                                                                        color="secondary" value="Corrugated sheet"
                                                                        hide-details></v-checkbox>
                                                                    <v-checkbox v-model="ex4"
                                                                        label="Concrete Hollowblock" color="secondary"
                                                                        value="Concrete Hollowblock" hide-details>
                                                                    </v-checkbox>
                                                                    <v-checkbox v-model="ex4" label="Coco lumber"
                                                                        color="secondary" value="Coco lumber"
                                                                        hide-details>
                                                                    </v-checkbox>
                                                                    <v-checkbox v-model="ex4" label="Amakan"
                                                                        color="secondary" value="Amakan" hide-details>
                                                                    </v-checkbox>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col">
                                                            <div class="card">
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Materials needed</h5>
                                                                    <v-checkbox v-model="ex4" label="Nails"
                                                                        color="secondary" value="Nails" hide-details
                                                                        autofocus></v-checkbox>
                                                                    <v-checkbox v-model="ex4" label="Umbrella nails"
                                                                        color="secondary" value="Umbrella nails"
                                                                        hide-details></v-checkbox>
                                                                    <v-checkbox v-model="ex4" label="10 MM DRB"
                                                                        color="secondary" value="Corrugated sheet"
                                                                        hide-details></v-checkbox>
                                                                    <v-checkbox v-model="ex4" label="8 MM DRB"
                                                                        color="secondary" value="Concrete Hollowblock"
                                                                        hide-details>
                                                                    </v-checkbox>
                                                                    <br />
                                                                    <br />
                                                                    <v-text-field label="Others" placeholder="Others:"
                                                                        outlined></v-text-field>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>











                                            <v-btn @click="e1 = 3" class="ma-3">
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
import AdminNavbar from '../Navigation/AdminNavbar.vue';
import { reactive } from 'vue'
export default {

    components: {
        AdminNavbar,

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
