<template>
  <form @submit.prevent="submit">
    <div class="form-group">
      <label>Name</label>
      <input type="text" class="form-control" name="name" v-model="name"/>
    </div>
    <div class="form-group">
      <label>Batch Name</label>
      <input type="text" class="form-control" name="batch_name" v-model="batchName"/>
    </div>

    <div class="form-group">
      <label>Role</label>
      <select name="department_id" class="form-control" v-model="departmentId">
        <option value="0">Select Role</option>
        <option v-for="department in departments" :key="department.id" :value="department.id">
          {{ department.name }}
        </option>
      </select>
    </div>

    <button class="btn btn-outline-secondary">Save</button>
  </form>
</template>

<script lang="ts">
import {ref, onMounted} from 'vue';
import axios from 'axios';
import {useRoute, useRouter} from "vue-router";
import {Student} from "@/classes/student";

export default {
  name: "StudentsEdit",
  setup() {
    const name = ref('');
    const batchName = ref('');
    const departmentId = ref(0);
    const departments = ref([]);
    const router = useRouter();
    const {params} = useRoute();

    onMounted(async () => {
      const response = await axios.get('departments');

      departments.value = response.data.data;

      const studentCall = await axios.get(`students/${params.id}`);

      const student: Student = studentCall.data.data;

      name.value = student.name;
      batchName.value = student.batch_name;
      departmentId.value = student.department.id;
    });

    const submit = async () => {
      await axios.put(`students/${params.id}`, {
        name: name.value,
        batch_name: batchName.value,
        department_id: departmentId.value
      });

      await router.push('/students');
    }

    return {
      name,
      batchName,
      departmentId,
      departments,
      submit
    }
  }
}
</script>
