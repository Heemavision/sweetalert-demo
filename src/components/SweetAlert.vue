<template>
  <div class="row mx-auto justify-content-center">
    <button class="btn btn-outline-primary col-1 p-2 m-2" @click="showAlert">
      Simple
    </button>
    <button
      class="btn btn-outline-success col-1 p-2 m-2"
      @click="showSuccessAlert"
    >
      Success
    </button>
    <button
      class="btn btn-outline-danger col-1 p-2 m-2"
      @click="showErrorAlert"
    >
      Error
    </button>
    <button
      class="btn btn-outline-warning col-1 p-2 m-2"
      @click="showWarningAlert"
    >
      Warning
    </button>
    <button class="btn btn-outline-info col-1 p-2 m-2" @click="showInfoAlert">
      Info
    </button>
    <button
      class="btn btn-outline-secondary col-1 p-2 m-2"
      @click="showMultipleButtonAlert"
    >
      With multiple buttons
    </button>
    <button class="btn btn-outline-dark col-1 p-2 m-2" @click="showToast">
      Toast
    </button>
  </div>
</template>

<script>
export default {
  name: "SweetAlert",
  methods: {
    showAlert() {
      this.$swal("Hello Vue world!!!");
    },
    showSuccessAlert() {
      this.$swal("Success", "Success alert!", "success");
    },
    showErrorAlert() {
      this.$swal("Oops...", "Something went wrong!", "error");
    },
    showWarningAlert() {
      this.$swal("Warning", "Warning alert!!", "warning");
    },
    showInfoAlert() {
      this.$swal("Info", "Info alert!!", "info");
    },
    showMultipleButtonAlert() {
      this.$swal({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
      });
    },
    showToast() {
      this.$swal({
        toast: true,
        icon: "success",
        title: "Posted successfully",
        animation: false,
        position: "top-end",
        showConfirmButton: false,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
