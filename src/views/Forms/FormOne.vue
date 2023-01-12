<template>

    <div class="form-one">
        <v-navigation-drawer v-model="drawer" color="#1B5E20" dark app>
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar size="100">
                        <img src="data:image/jpeg;base64,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"
                            alt="123" />
                    </v-avatar>
                    <p class="white--text subheading mt-1 text-center">Username</p>
                </v-flex>
                <v-flex>
                    <h3 class="white--text subheading mt-1 text-center">User Title</h3>
                </v-flex>

                <v-flex class="mt-4 mb-4">
                </v-flex>
            </v-layout>

            <v-list shaped class="clickable">
                <template v-for="item in items">
                    <v-list-group v-if="item.children" :key="item.text" v-model="item.model"
                        :prepend-icon="item['icon-ctr']" :append-icon="item.model ? item.icon : item['icon-alt']"
                        active-class="orange--text">
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>
                                    {{ item.text }}
                                </v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(child, i) in item.children" :key="i" route :to="child.route"
                            active-class="orange--text">
                            <v-list-item-action v-if="child.icon">
                                <v-icon>{{ child.icon }}</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title>
                                    {{ child.text }}
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-group>
                    <v-list-item v-else :key="item.text" active-class="orange--text" route :to="item.route">
                        <v-list-item-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ item.text }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar color="#388E3C" dark app>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase">
                <span class="font-weight-light">Blah Blah</span>
                <span></span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu offset-y>
                <v-list flat>
                    <v-list-item v-for="link in links" :key="link.text" router :to="link.route" active-class="border">
                        <v-list-item-title>{{ link.text }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-btn elevation="2" color="error" text @click="$router.push({ name: 'Dashboard' })">
                <span>LOG OUT</span>
                <v-icon right></v-icon>
            </v-btn>
        </v-app-bar>

















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
                        <v-divider></v-divider>
                        <v-stepper-step :complete="e1 > 3" step="3" offset-y min-width="auto">
                            Istado sa Pagpuyo
                        </v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step step="4" offset-x min-width="auto">
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
                                                <v-text-field label="Apelyido" clearable required
                                                    outlined></v-text-field>
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
                                                <v-text-field label="Pangalan sa bana" clearable required
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
                            <v-btn class="ma-4" color="#F7A4A4"  @click="$router.push('/dashboard')">
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
                                                                        <div v-for="item, index in form" :key="item">
                                                                            <!-- <H3>Anak number {{ index }}</H3>
                                      {{ item }} -->
                                                                            <div class="row">
                                                                                <div class="col-sm-2">
                                                                                    <label>Pangalan sa anak:</label>
                                                                                    <input type="text"
                                                                                        class="form-control"
                                                                                        v-model="item.FullName">
                                                                                </div>
                                                                                <div class="col-sm-2">
                                                                                    <label>Civil Status:</label>
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
                                                                                <div class="col-sm-2 pt-4"><br />
                                                                                    <button type="button"
                                                                                        class="btn btn-danger btn-sm"
                                                                                        @click="removeRow(index)">Remove</button>
                                                                                    <button type="button"
                                                                                        class="btn btn-success btn-sm "
                                                                                        @click="addRow">Add</button>
                                                                                </div>
                                                                            </div> <br /><button type="button"
                                                                                class="btn btn-success btn-sm"
                                                                                padding-top="3px" @click="saveItem">Save
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
                                                    label="Pila ang pag Arkila" outlined required></v-select>
                                            </v-col>
                                            <v-col cols="12">
                                                <v-select
                                                    :items="['Kaugalingon ang balay pero wala ga arkila sa yuta, nasayod ang tag-iya sa yuta', 'Kaugalingon nga balay pero wala ga arkila sa yuta, walay pag tugot sa tag-iya', 'Libre nga pagpuyo sa balay nga adunay pagtugot sa tag-iya', 'Libre nga pagpuyo sa balay ug yuta nga walay pagtugot sa tag-iya', 'Nakipuyo Lang']"
                                                    label="Istado sa Pagpuyo" outlined required></v-select>
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
                            <v-btn @click="e1 = 2" class="ma-2">
                                Back
                            </v-btn>
                        </v-stepper-content>
                        <v-stepper-content step="4">
                            <v-card class="mb-12">
                                <v-container class="grey lighten-5" offset-x min-width="auto">
                                    <v-row class="mb-6" no-gutters>
                                        <v-col sm="5" md="6">
                                            <v-card class="pa-2" outlined tile>
                                                <h2>Atop</h2>
                                                <v-checkbox v-model="ex4" label="Kawayan/Sawali/Cogon/Nipa"
                                                    color="secondary" value="Kawayan/Sawali/Cogon/Nipa"
                                                    hide-details></v-checkbox>
                                                <v-checkbox v-model="ex4" label="Asbestos/Sin" color="secondary"
                                                    value="Asbestos/Sin" hide-details></v-checkbox>
                                                <v-checkbox v-model="ex4" label="Improvised Materials" color="secondary"
                                                    value="Improvised Materials" hide-details></v-checkbox>
                                                <v-checkbox v-model="ex4" label="Trapal" color="secondary"
                                                    value="Trapal" hide-details>
                                                </v-checkbox>
                                            </v-card>
                                        </v-col>
                                        <v-col sm="5" offset-sm="2" md="6" offset-md="0">
                                            <v-card class="pa-2" outlined tile>
                                                <h2>Bong bong</h2>
                                                <v-checkbox v-model="ex4" label="Amakan" color="secondary"
                                                    value="Amakan" hide-details>
                                                </v-checkbox>
                                                <v-checkbox v-model="ex4" label="Semento" color="secondary"
                                                    value="Semento" hide-details>
                                                </v-checkbox>
                                                <v-checkbox v-model="ex4" label="Trapal" color="secondary"
                                                    value="Trapal" hide-details>
                                                </v-checkbox>
                                            </v-card>
                                        </v-col>
                                    </v-row>
                                    <v-row no-gutters>
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
                                                <h2 class="red--text">Please indicates required field</h2>
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
                            </v-card>
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
import { reactive } from 'vue'
export default {
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
                            icon: "mdi-note-plus-outline",
                            text: "Form number 1",
                            route: "/form-one",
                        },
                        {
                            icon: "mdi-note-plus-outline",
                            text: "For Recommendation",
                            route: "/YouTherecord",
                        },
                        {
                            icon: "mdi-note-plus-outline",
                            text: "For Processing",
                            route: "/YouTherecord",
                        },
                        {
                            icon: "mdi-note-plus-outline",
                            text: "For Processing",
                            route: "/YouTherecord",
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

