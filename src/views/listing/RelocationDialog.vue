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


        <v-data-table :headers="headers" :items="desserts" :search="search" sort-by="calories" class="elevation-1">
            <template v-slot:top>

                <v-toolbar flat>
                    <v-toolbar-title>List of applicants <v-icon>
                            mdi-note-text
                        </v-icon> </v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <!-- <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line
                                                                                                                    hide-details></v-text-field> -->
                    <v-dialog v-model="dialog" max-width="1100px">

                        <template v-slot:activator="{ on, attrs }">
                            <button class="btn btn-outline-success" type="button" v-bind="attrs" v-on="on"> <v-icon>
                                    mdi-account-plus
                                </v-icon>
                                Add Applicant</button>
                        </template>

                        <v-container fluid class="my-5">
                            <v-card>
                                <v-card-title>
                                    <span class="text-h7">Information Sheet for Relocation Lot Applicants</span>
                                </v-card-title>
                                <v-stepper v-model="e1">
                                    <v-stepper-header>
                                        <v-stepper-step :complete="e1 > 1" step="1" offset-y min-width="auto">
                                            <!-- Sitwasyon sa Pagpuyo -->
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
                                        <!-- <v-stepper-step step="3" offset-x min-width="auto">
                                                                                                                                        Istado sa Pagpuyo
                                                                                                                                    </v-stepper-step> -->
                                        <v-divider></v-divider>
                                        <v-stepper-step step="4" offset-x min-width="auto">
                                            <!-- Personal na Impormasyon -->
                                            Sitwasyon sa Pagpuyo
                                        </v-stepper-step>

                                    </v-stepper-header>
                                    <v-stepper-items>
                                        <v-stepper-content step="1">
                                            <v-card class="mb-12" height="750px">
                                                <v-card class="mb-1" color="grey lighten-4">
                                                    <v-card-text>
                                                        <v-container>
                                        <v-row>
                                            <v-col cols="12" sm="6" md="3">
                                                <v-text-field label="Apelyido" clearable required outlined
                                                    autofocus></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="3">
                                                <v-text-field label="Pangalan" clearable required outlined></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="3">
                                                <v-text-field label="Middle Name" clearable required
                                                    outlined></v-text-field>

                                            </v-col>
                                            <v-col cols="12" sm="6" md="3">
                                                <!-- <v-text-field label="Suffix" required hint="Jr., III, etc"></v-text-field> -->
                                                <v-select :items="['Jr.', 'Sr.']" label=" Suffix" outlined
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
                                                <v-select :items="['Job order', 'Casual', 'Regular']"
                                                    label="Stado sa Pagpanarbaho" required outlined></v-select>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="6">
                                                <v-text-field label="Contact No." clearable required
                                                    outlined></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-text-field label="Pangalan sa Employer" type="address" clearable required
                                                    outlined></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="3">
                                                <v-select
                                                    :items="['1000 to 3000', '4000 to 6000', '7000 to 8000', '9000 to 10000',]"
                                                    label="Bulan na kita" required outlined></v-select>
                                            </v-col>

                                            <v-col cols="12" sm="6" md="3">
                                                <v-text-field outlined label="Adlaw na tawhan" type="date" dense
                                                    color="primary" v-model="formatDate">
                                                </v-text-field>

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
                                                <v-text-field label="Apelyido" clearable required outlined></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="3">
                                                <v-text-field label="Trabaho" clearable required outlined></v-text-field>
                                            </v-col>
                                            <!-- <v-col cols="12" sm="3">
                                                <v-select
                                                    :items="['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '12 pa taas ang mga anak']"
                                                    label="Pila ang anak" required outlined> </v-select>
                                            </v-col> -->
                                            <v-col cols="12" sm="3">
                                                <v-select :items="['Walk-in', 'Walk-out']" label="Type of application"
                                                    required outlined> </v-select>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="3">
                                                <v-img class="profile-image"
                                                    src="https://img.freepik.com/premium-vector/happy-young-african-man-with-hand-pocket-waving-hand-say-hello-greeting-gesture_535862-1045.jpg"></v-img>
                                                "Choose picture"
                                                <input type="file" id="myFile" name="filename">
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                                        <h2 class="red--text">*indicates required field</h2>
                                                    </v-card-text>
                                                </v-card>
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
                                                                                    <div v-for="(item, index) in form"
                                                                                        :key="item">
                                                                                        <v-row>
                                                                                            <v-col cols="12" md="2">
                                                                                                <v-text-field outlined
                                                                                                    label="Full name" dense
                                                                                                    color="success"
                                                                                                    v-model="item.FullName">
                                                                                                </v-text-field>
                                                                                            </v-col>
                                                                                            <v-col cols="12" md="2">
                                                                                                <v-text-field outlined
                                                                                                    label="Civil Status"
                                                                                                    dense color="success"
                                                                                                    v-model="item.CivilStatus">
                                                                                                </v-text-field>
                                                                                            </v-col>
                                                                                            <v-col cols="12" md="2">
                                                                                                <v-text-field outlined
                                                                                                    label="Address" dense
                                                                                                    color="success"
                                                                                                    v-model="item.Address">
                                                                                                </v-text-field>
                                                                                            </v-col>
                                                                                            <v-col cols="12" md="2">
                                                                                                <v-text-field outlined
                                                                                                    label="Income"
                                                                                                    type="number" dense
                                                                                                    color="success"
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
                                                                                                    class=" text-light"
                                                                                                    @click="addRow">
                                                                                                    <v-icon>
                                                                                                        mdi-plus
                                                                                                    </v-icon>
                                                                                                    Add
                                                                                                </v-btn>
                                                                                            </v-col>
                                                                                        </v-row>
                                                                                    </div>
                                                                                    <v-btn padding-top="3px"
                                                                                        @click="saveItem" color="success">
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
                                                                    label="Istado sa Pagpuyo" outlined required></v-select>
                                                            </v-col>
                                                            <v-col cols="12" sm="6" md="6">
                                                                <v-text-field label="Pangalan sa gipuy-an " outlined
                                                                    clearable></v-text-field>
                                                            </v-col>
                                                            <v-col cols="12" sm="6" md="6">
                                                                <v-select :items="['SHFC/Home owner', 'Relocation site']"
                                                                    label="Type of applicant" required outlined> </v-select>
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
                                            <!-- <v-btn class="ma-4" color="secondary" @click="dialog = false" value="save">                                                                                         </v-btn> -->
                                        </v-stepper-content>

                                        <v-stepper-content step="4">

                                            <v-card class="mb-12" height="700px">
                                                <v-container class="grey lighten-5" offset-x min-width="auto">
                                                    <v-row class="mb-6" no-gutters>
                                                        <v-col sm="5" md="6">
                                                            <v-card class="pa-2" outlined tile>
                                                                <h2>Atop</h2>
                                                                <v-checkbox v-model="ex4" label="Kawayan/Sawali/Cogon/Nipa"
                                                                    color="secondary" value="Kawayan/Sawali/Cogon/Nipa"
                                                                    hide-details autofocus></v-checkbox>
                                                                <v-checkbox v-model="ex4" label="Asbestos/Sin"
                                                                    color="secondary" value="Asbestos/Sin"
                                                                    hide-details></v-checkbox>
                                                                <v-checkbox v-model="ex4" label="Improvised Materials"
                                                                    color="secondary" value="Improvised Materials"
                                                                    hide-details></v-checkbox>
                                                                <v-checkbox v-model="ex4" label="Trapal" color="secondary"
                                                                    value="Trapal" hide-details>
                                                                </v-checkbox>
                                                            </v-card>
                                                        </v-col>
                                                        <v-col sm="5" offset-sm="2" md="6" offset-md="0">
                                                            <v-card class="pa-2" outlined tile height="235px">
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
                                                        <v-col cols="12" sm="6">
                                                            <v-select
                                                                :items="['Sitwasyon sa pag puyo', 'With court order for demolition and eviction', 'Affected by government infrastructure project', 'Affected by private construction project', 'Accretion Area']"
                                                                label="Sitwasyon sa pag puyo" required outlined></v-select>
                                                        </v-col>
                                                        <v-col cols="12" sm="6">
                                                            <v-select
                                                                :items="['0. For Revalidation/ For Tagging', '1. Tagged', '2. Tagged', '3. Tagged', '4. Disqualified', '5. HOA (SHFC)', '6. Awarded', '7. Special Case (Priority)', '8. Waived', '9. Waived', '10. 10,000 & below Renters, Sharers, Single/ Married with dependents', '11. Over 10,000 renter/ Sharers/ Single/ Married with no dependents', '']"
                                                                label="Type of applicant" required outlined></v-select>
                                                        </v-col>

                                                        <v-col sm="6" md="5" offset-md="3" lg="6" offset-lg="0">

                                                            <v-select
                                                                :items="['Kilid sa creek', 'NPC line', 'Landslide prone area', 'Identified flood prone area']"
                                                                label="Danger zone" required outlined></v-select>
                                                        </v-col>
                                                        <v-col sm="6" md="5" offset-md="3" lg="6" offset-lg="0">
                                                            <v-text-field label="Others:" clearable required
                                                                outlined></v-text-field>
                                                        </v-col>
                                                        <br />
                                                        <br>
                                                        <v-card class="scroll-y" style="height: 650px">
                                                            <div class="card-body">

                                                                <div class="container">
                                                                    <div class="row row-cols-2">
                                                                        <div class="col-mt-6">
                                                                            <div class="form-group">
                                                                                <label
                                                                                    for="exampleFormControlInput1">Assisted
                                                                                    by</label>
                                                                                <input type="text" class="form-control"
                                                                                    id="exampleFormControlInput1"
                                                                                    placeholder="Assisted by"
                                                                                    style="width: 400px;">
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-mt-6">
                                                                            <div class="form-group">
                                                                                <label for="exampleFormControlInput1">HOA
                                                                                    officer
                                                                                </label>
                                                                                <input type="text" class="form-control"
                                                                                    id="exampleFormControlInput1"
                                                                                    placeholder="HOA officer"
                                                                                    style="width: 400px;">
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-mt-6">
                                                                            <div class="form-group">
                                                                                <label for="exampleFormControlInput1">Purok
                                                                                    official
                                                                                </label>
                                                                                <input type="text" class="form-control"
                                                                                    id="exampleFormControlInput1"
                                                                                    placeholder="Purok official"
                                                                                    style="width: 400px;">
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-mt-6">
                                                                            <div class="form-group">
                                                                                <label for="exampleFormControlInput1">Tagged
                                                                                    and validated by
                                                                                </label>
                                                                                <input type="text" class="form-control"
                                                                                    id="exampleFormControlInput1"
                                                                                    placeholder="Tagged and validated by"
                                                                                    style="width: 400px;">
                                                                            </div>
                                                                        </div>
                                                                        <div class="col"><select class="form-select"
                                                                                aria-label="Default select example"
                                                                                style="width: 400px;">
                                                                                <option selected>Type of applicant
                                                                                </option>
                                                                                <option value="1">Walk-in</option>
                                                                                <option value="2">On-field</option>
                                                                                <option value="3">Government employee
                                                                                </option>
                                                                            </select></div>
                                                                        <div class="col">
                                                                            <select class="form-select"
                                                                                aria-label="Default select example"
                                                                                style="width: 400px;">
                                                                                <option selected>Status of
                                                                                    application
                                                                                </option>
                                                                                <option value="1">For-tagging
                                                                                </option>
                                                                                <option value="2">Tagged and
                                                                                    validated</option>
                                                                            </select>
                                                                        </div>
                                                                        <div class="col">
                                                                            <v-text-field outlined label="Date" type="date"
                                                                                dense color="primary" v-model="formatDate"
                                                                                style="width: 400px;">
                                                                            </v-text-field>
                                                                        </div>
                                                                        <div class="col-mt-12">
                                                                            <label for="exampleFormControlTextarea1"
                                                                                class="form-label">Remarks</label>
                                                                            <textarea class="form-control"
                                                                                id="exampleFormControlTextarea1" rows="3"
                                                                                style="width: 400px;"></textarea>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </v-card>
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

// import AdminNavbar from '../Navigation/AdminNavbar.vue';
import { reactive } from 'vue'

export default {

    components: {
        // AdminNavbar,


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
            saveItem,
        }
    },




    data: () => (
        {
            e1: 1,
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
                { text: 'Suffix', value: 'suffix' },
                { text: 'Baranggay', value: 'address' },
                { text: 'Contact', value: 'contact' },
                { text: 'Days', value: 'days' },
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
                    suffix: 'jr',
                    address: 'Mankilam',
                    contact: '09123456789',
                    days: 1,
                },
                {
                    firstname: 'Ice cream sandwich',
                    middlename: 'Ice cream sandwich',
                    lastname: 'Ice cream sandwich',
                    suffix: 'sr',
                    address: 'Mankilam',
                    contact: '09123456789',
                    days: 2,
                },
                {
                    firstname: 'Eclair',
                    middlename: 'Eclair',
                    lastname: 'Eclair',
                    suffix: 'N/A',
                    address: 'Mankilam',
                    contact: '09123456789',
                    days: 3,
                },
                {
                    firstname: 'Cupcake',
                    middlename: 'Cupcake',
                    lastname: 'Cupcake',
                    suffix: 'N/A',
                    address: 'Mankilam',
                    contact: '09123456789',
                    days: 1,
                },
                {
                    firstname: 'Gingerbread',
                    middlename: 'Gingerbread',
                    lastname: 'Gingerbread',
                    suffix: 'sr',
                    address: 'Mankilam',
                    contact: '09123456789',
                    days: 2,
                },
                {
                    firstname: 'Jelly bean',
                    middlename: 'Gingerbread',
                    lastname: 'Gingerbread',
                    suffix: 'N/A',
                    address: 'Mankilam',
                    contact: '09123456789',
                    days: 3,
                },
                {
                    firstname: 'Lollipop',
                    middlename: 'Lollipop',
                    lastname: 'Lollipop',
                    suffix: 'jr',
                    address: 'Mankilam',
                    contact: '09123456789',
                    days: 1,
                },
                {
                    firstname: 'Honeycomb',
                    middlename: 'Honeycomb',
                    lastname: 'Honeycomb',
                    suffix: 'N/A',
                    address: 'Mankilam',
                    contact: '09123456789',
                    days: 2,
                },
                {
                    firstname: 'Donut',
                    middlename: 'Donut',
                    lastname: 'Donut',
                    suffix: 'sr',
                    address: 'Mankilam',
                    contact: '09123456789',
                    days: 3,
                },
                {
                    firstname: 'KitKat',
                    middlename: 'KitKat',
                    lastname: 'KitKat',
                    suffix: 'N/A',
                    address: 'Mankilam',
                    contact: '09123456789',
                    days: 3,
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