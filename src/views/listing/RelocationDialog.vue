<template>

    <div class="to-approved">
        <AdminNavbar />
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
                                New Item</button>
                        </template>




                        <v-container fluid class="my-5">
                            <v-card>
                                <v-card-title>
                                    <span class="text-h7">Information Sheet for Relocation Lot Applicants</span>
                                </v-card-title>
                                <v-stepper v-model="e1">
                                    <v-stepper-header>
                                        <v-stepper-step :complete="e1 > 1" step="1" offset-y min-width="auto">
                                            Sitwasyon sa Pagpuyo
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
                                            Personal na Impormasyon
                                        </v-stepper-step>

                                    </v-stepper-header>
                                    <v-stepper-items>
                                        <v-stepper-content step="1">


                                            <v-card class="mb-12" height="1100px">
                                                <v-container class="grey lighten-5" offset-x min-width="auto">
                                                    <v-row class="mb-6" no-gutters>
                                                        <v-col sm="5" md="6">
                                                            <v-card class="pa-2" outlined tile>
                                                                <h2>Atop</h2>
                                                                <v-checkbox v-model="ex4"
                                                                    label="Kawayan/Sawali/Cogon/Nipa" color="secondary"
                                                                    value="Kawayan/Sawali/Cogon/Nipa" hide-details
                                                                    autofocus></v-checkbox>
                                                                <v-checkbox v-model="ex4" label="Asbestos/Sin"
                                                                    color="secondary" value="Asbestos/Sin"
                                                                    hide-details></v-checkbox>
                                                                <v-checkbox v-model="ex4" label="Improvised Materials"
                                                                    color="secondary" value="Improvised Materials"
                                                                    hide-details></v-checkbox>
                                                                <v-checkbox v-model="ex4" label="Trapal"
                                                                    color="secondary" value="Trapal" hide-details>
                                                                </v-checkbox>
                                                            </v-card>
                                                        </v-col>
                                                        <v-col sm="5" offset-sm="2" md="6" offset-md="0">
                                                            <v-card class="pa-2" outlined tile>
                                                                <h2>Bong bong</h2>
                                                                <v-checkbox v-model="ex4" label="Amakan"
                                                                    color="secondary" value="Amakan" hide-details>
                                                                </v-checkbox>
                                                                <v-checkbox v-model="ex4" label="Semento"
                                                                    color="secondary" value="Semento" hide-details>
                                                                </v-checkbox>
                                                                <v-checkbox v-model="ex4" label="Trapal"
                                                                    color="secondary" value="Trapal" hide-details>
                                                                </v-checkbox>
                                                            </v-card>
                                                        </v-col>
                                                    </v-row>
                                                    <v-row no-gutters>
                                                        <v-col sm="6" md="5" lg="6" height="900px">
                                                            <v-card class="pa-2" outlined tile>
                                                                <h2>Sitwasyon sa pagpuyo</h2>
                                                                <v-checkbox v-model="ex4"
                                                                    label="With notice to evacuate" color="secondary"
                                                                    value="WithNoticeToEvacuate" hide-details>
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
                                                                    label="Affected by private construction project"
                                                                    color="secondary" value="Trapal" hide-details>
                                                                </v-checkbox>
                                                                <v-checkbox v-model="ex4" label="Accretion Area"
                                                                    color="secondary" value="Trapal" hide-details>
                                                                </v-checkbox>
                                                                <br>
                                                                <h2 class="red--text">Please indicates required field
                                                                </h2>
                                                            </v-card>
                                                        </v-col>
                                                        <v-col sm="6" md="5" offset-md="2" lg="6" offset-lg="0">
                                                            <v-card class="pa-2" outlined tile>
                                                                <h2>Danger zone</h2>
                                                                <v-checkbox v-model="ex4" label="Kilid sa creek"
                                                                    color="secondary" value="WithNoticeToEvacuate"
                                                                    hide-details>
                                                                </v-checkbox>
                                                                <v-checkbox v-model="ex4" label="Kilid sa sapa"
                                                                    color="secondary" value="Semento" hide-details>
                                                                </v-checkbox>
                                                                <v-checkbox v-model="ex4" label="NPC line"
                                                                    color="secondary" value="Trapal" hide-details>
                                                                </v-checkbox>
                                                                <v-checkbox v-model="ex4" label="Landslide prone area"
                                                                    color="secondary" value="Trapal" hide-details>
                                                                </v-checkbox>
                                                                <v-checkbox v-model="ex4"
                                                                    label="Identified flood prone area"
                                                                    color="secondary" value="Trapal" hide-details>
                                                                </v-checkbox>
                                                                <v-col cols="12" sm="6" md="12">
                                                                    <v-text-field label="Others:" clearable required
                                                                        outlined></v-text-field>
                                                                </v-col>
                                                            </v-card>
                                                        </v-col>
                                                        <br />


                                                        <v-card class="scroll-y" style="height: 650px">
                                                            <div class="card-body">

                                                                <div class="container">
                                                                    <div class="row row-cols-2">
                                                                        <div class="col">
                                                                            <div class="form-group">
                                                                                <label
                                                                                    for="exampleFormControlInput1">Assisted
                                                                                    by</label>
                                                                                <input type="text" class="form-control"
                                                                                    id="exampleFormControlInput1"
                                                                                    placeholder="Assisted by">
                                                                            </div>

                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="form-group">
                                                                                <label
                                                                                    for="exampleFormControlInput1">HOA
                                                                                    officer
                                                                                </label>
                                                                                <input type="text" class="form-control"
                                                                                    id="exampleFormControlInput1"
                                                                                    placeholder="HOA officer">
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="form-group">
                                                                                <label
                                                                                    for="exampleFormControlInput1">Purok
                                                                                    official
                                                                                </label>
                                                                                <input type="text" class="form-control"
                                                                                    id="exampleFormControlInput1"
                                                                                    placeholder="Purok official">
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="form-group">
                                                                                <label
                                                                                    for="exampleFormControlInput1">Tagged
                                                                                    and validated by
                                                                                </label>
                                                                                <input type="text" class="form-control"
                                                                                    id="exampleFormControlInput1"
                                                                                    placeholder="Tagged and validated by">
                                                                            </div>
                                                                        </div>
                                                                        <div class="col"><select class="form-select"
                                                                                aria-label="Default select example">
                                                                                <option selected>Type of applicant
                                                                                </option>
                                                                                <option value="1">Walk-in</option>
                                                                                <option value="2">On-field</option>
                                                                                <option value="3">Government employee
                                                                                </option>
                                                                            </select></div>
                                                                        <div class="col">
                                                                            <div class="col"><select class="form-select"
                                                                                    aria-label="Default select example">
                                                                                    <option selected>Status of
                                                                                        application
                                                                                    </option>
                                                                                    <option value="1">For-tagging
                                                                                    </option>
                                                                                    <option value="2">Tagged and
                                                                                        validated</option>
                                                                                </select></div>
                                                                        </div>
                                                                        <div class="col">
                                                                            Date
                                                                            <v-card>
                                                                                <input type="date" name="begin"
                                                                                    placeholder="dd-mm-yyyy" value=""
                                                                                    min="1997-01-01" max="2030-12-31">
                                                                            </v-card>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="form-group">
                                                                                <label
                                                                                    for="exampleFormControlInput1">Remarks
                                                                                </label>
                                                                                <input type="text" class="form-control"
                                                                                    id="exampleFormControlInput1"
                                                                                    placeholder="Remarks">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </v-card>
                                                    </v-row>
                                                </v-container>
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


                                            <v-card class="mb-1" color="grey lighten-4">
                                                <v-card-text>
                                                    <v-container>
                                                        <v-row>
                                                            <v-col cols="12" sm="6" md="3">
                                                                <v-text-field label="Apelyido"
                                                                    v-model="editedItem.lastname" required outlined
                                                                    autofocus></v-text-field>
                                                            </v-col>
                                                            <v-col cols="12" sm="6" md="3">
                                                                <v-text-field label="Pangalan"
                                                                    v-model="editedItem.firstname" clearable required
                                                                    outlined></v-text-field>
                                                            </v-col>
                                                            <v-col cols="12" sm="6" md="3">
                                                                <v-text-field label="Middle Name"
                                                                    v-model="editedItem.middlename" clearable required
                                                                    outlined></v-text-field>

                                                            </v-col>
                                                            <v-col cols="12" sm="6" md="3">

                                                                <v-select :items="['Jr.', 'Sr.']"
                                                                    v-model="editedItem.suffix" label="Suffix" outlined
                                                                    required></v-select>
                                                            </v-col>
                                                            <v-col cols="12" sm="6" md="6">
                                                                <v-text-field label="Purok" v-model="editedItem.address"
                                                                    clearable required outlined></v-text-field>
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
                                                                <v-text-field label="Contact No."
                                                                    v-model="editedItem.contact" clearable required
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






    data: () => ({
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
                    contact: '09123456789'
                },
                {
                    firstname: 'Ice cream sandwich',
                    middlename: 'Ice cream sandwich',
                    lastname: 'Ice cream sandwich',
                    suffix: 'sr',
                    address: 'Mankilam',
                    contact: '09123456789',
                },
                {
                    firstname: 'Eclair',
                    middlename: 'Eclair',
                    lastname: 'Eclair',
                    suffix: 'N/A',
                    address: 'Mankilam',
                    contact: '09123456789',
                },
                {
                    firstname: 'Cupcake',
                    middlename: 'Cupcake',
                    lastname: 'Cupcake',
                    suffix: 'N/A',
                    address: 'Mankilam',
                    contact: '09123456789',
                },
                {
                    firstname: 'Gingerbread',
                    middlename: 'Gingerbread',
                    lastname: 'Gingerbread',
                    suffix: 'sr',
                    address: 'Mankilam',
                    contact: '09123456789',
                },
                {
                    firstname: 'Jelly bean',
                    middlename: 'Gingerbread',
                    lastname: 'Gingerbread',
                    suffix: 'N/A',
                    address: 'Mankilam',
                    contact: '09123456789',
                },
                {
                    firstname: 'Lollipop',
                    middlename: 'Lollipop',
                    lastname: 'Lollipop',
                    suffix: 'jr',
                    address: 'Mankilam',
                    contact: '09123456789',
                },
                {
                    firstname: 'Honeycomb',
                    middlename: 'Honeycomb',
                    lastname: 'Honeycomb',
                    suffix: 'N/A',
                    address: 'Mankilam',
                    contact: '09123456789',
                },
                {
                    firstname: 'Donut',
                    middlename: 'Donut',
                    lastname: 'Donut',
                    suffix: 'sr',
                    address: 'Mankilam',
                    contact: '09123456789',
                },
                {
                    firstname: 'KitKat',
                    middlename: 'KitKat',
                    lastname: 'KitKat',
                    suffix: 'N/A',
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