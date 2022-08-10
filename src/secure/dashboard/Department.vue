<template>
      <h2>Department</h2>
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Date</th>
              <th scope="col">Ooptions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Economics</td>
              <td>12/9/2022</td>
              <td>EDIT DELETE</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Commarce</td>
              <td>20/8/2022</td>
              <td>EDIT DELETE</td>
            </tr>
          </tbody>
        </table>
      </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Department",
});
</script>