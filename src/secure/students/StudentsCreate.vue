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
      <label>Department</label>
      <select name="department_id" class="form-control" v-model="departmentId">
        <option value="0">Select Department</option>
        <option v-for="department in departments" :key="department.id" :value="department.id">
          {{ department.name }}
        </option>
      </select>
    </div>

    <button class="btn btn-outline-secondary">Save</button>
  </form>
</template>

<script>
import {ref, onMounted} from 'vue';
import axios from 'axios';
import {useRouter} from "vue-router";

export default {
  name: "StudentsCreate",
  setup() {
    const name = ref('');
    const batchName = ref('');
    const departmentId = ref(0);
    const departments = ref([]);
    const router = useRouter();

    onMounted(async () => {
      const response = await axios.get('departments');

      departments.value = response.data.data;
    });

    const submit = async () => {
      await axios.post('students', {
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
