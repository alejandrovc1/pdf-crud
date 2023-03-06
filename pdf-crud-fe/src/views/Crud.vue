<template>
  <v-container class="text-center">
    <v-alert
      class="text-start"
      text
      v-model="alert.show"
      :type="alert.type"
      dismissible
    >{{alert.message}}</v-alert>
    <h1 class="font-weight-light">My PDF's</h1>
    <v-row justify="center">
      <v-col md="9" sm="12">
        <v-table fixed-header>
          <thead>
            <tr>
              <th class="text-center">Title</th>
              <th class="text-center">File</th>
              <th class="text-center">Edit</th>
              <th class="text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="pdf in pdfsList" :key="pdf._id">
              <td>{{pdf.title}}</td>
              <td>
                <v-icon @click="open(pdf.file)">mdi-open-in-new</v-icon>
              </td>
              <td>
                <v-icon @click="readPDF(pdf._id)">mdi-pencil</v-icon>
              </td>
              <td>
                <v-icon @click="deletePDF(pdf._id)">mdi-delete</v-icon>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
    <v-dialog v-model="add" max-width="450">
      <v-card>
        <v-card-title>Create PDF</v-card-title>
        <v-card-text>
          <v-form ref="addForm" class="ma-3" @submit.prevent="addPDF()">
            <v-file-input
              single
              label="File"
              accept="application/pdf"
              :rules="[(v) => !v || 'File is required']"
              v-model="PDFToAdd.file"
            ></v-file-input>
            <v-text-field
              prepend-icon="mdi-biohazard"
              label="Name"
              :rules="[(v) => !!v || 'Title is required']"
              v-model="PDFToAdd.title"
            ></v-text-field>
            <v-btn block class="success mt-3" type="submit">add</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="edit" max-width="450">
      <v-card>
        <v-card-title>Edit PDF</v-card-title>
        <v-card-text>
          <v-form ref="editForm" class="ma-3" @submit.prevent="editPDF()">
            <v-file-input
              single
              label="File"
              accept="application/pdf"
              v-model="PDFToEdit.file"
            ></v-file-input>
            <v-text-field
              prepend-icon="mdi-biohazard"
              label="Name"
              :rules="[(v) => !!v || 'Title is required']"
              v-model="PDFToEdit.title"
            ></v-text-field>
            <v-btn block class="success mt-3" type="submit">add</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-btn @click="add=true" color="blue" large right fixed bottom fab dark>
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    alert: { show: false },
    token: {},
    course: {},
    pdfsList: [],
    PDFToAdd: {},
    PDFToEdit: {},
    deliveriesList: [],
    showDelv: false,
    add: false,
    edit: false
  }),
  methods: {
    open(link) {
      window.open(link);
    },
    async addPDF() {
      if (this.PDFToAdd.title && this.PDFToAdd.file) {
        try {
          const newPDF = new FormData();
          newPDF.append("title", this.PDFToAdd.title);
          newPDF.append("file", this.PDFToAdd.file[0]);
          const res = await this.axios.post('/pdf', newPDF , {
              headers: {
                'Content-Type':'multipart/form-data',
                'Authorization': this.token
              }
            }
          );
          this.pdfsList.push(res.data.pdf);
          this.$refs.addForm.reset();
          this.add = false;
          this.alert = {
            show: true,
            type: "success",
            message: res.data.message
          };
        } catch (error) {
          console.log(error);
        }
      }
    },
    async readPDF(id) {
      try {
        const res = await this.axios.get(`/pdf/${id}`, {
          headers: {
            'Authorization': this.token
          }
        });
        this.PDFToEdit.title = res.data.title;
        this.PDFToEdit._id = res.data._id;
        this.edit = true;
      } catch (error) {
        console.log(error);
      }
    },
    async editPDF() {
      if (this.PDFToEdit.title) {
        try {
          const newPDF = new FormData();
          newPDF.append("title", this.PDFToEdit.title);
          if (this.PDFToEdit.file) newPDF.append("file", this.PDFToEdit.file[0]);
          const res = await this.axios.put(
            `/pdf/${this.PDFToEdit._id}`,
            newPDF,
            {
              headers: {
                'Content-Type':'multipart/form-data',
                'Authorization': this.token
              }
            }
          );
          const index = this.pdfsList.findIndex(
            c => c._id == this.PDFToEdit._id
          );
          this.pdfsList[index] = res.data.updatedPDF;
          this.$refs.editForm.reset();
          this.edit = false;
          this.alert = {
            show: true,
            type: "success",
            message: res.data.message
          };
        } catch (error) {
          console.log(error.response);
        }
      }
    },
    async deletePDF(id) {
      try {
        const res = await this.axios.delete(`/pdf/${id}`, {
          headers: {
            'Authorization': this.token
          }
        });
        const index = this.pdfsList.findIndex(c => c._id == id);
        this.pdfsList.splice(index, 1);
        this.alert = {
          show: true,
          type: "info",
          message: res.data.message
        };
      } catch (error) {
        console.log(error);
      }
    }
  },
  created: function() {
    this.token = JSON.parse(sessionStorage.getItem("session"));
    if (this.token == null) {
      this.$router.push("/");
    }  else {
      this.axios
        .get('/pdf', {
          headers: {
            'Authorization': this.token
          }
        })
        .then(res => {
          this.pdfsList = res.data;
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>
