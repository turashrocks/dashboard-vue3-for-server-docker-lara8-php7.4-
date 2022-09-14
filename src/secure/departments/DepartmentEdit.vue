<template>
  <form @submit.prevent="submit">
    <div class="form-group row">
      <label for="name" class="col-sm-2 col-form-label">Name</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" name="name" id="name" v-model="name"/>
      </div>
    </div>

    <button class="btn btn-outline-secondary">Save</button>
  </form>
</template>

<script lang="ts">
import {ref, onMounted} from 'vue';
import axios from 'axios';
import {useRoute, useRouter} from "vue-router";
import {Department} from "@/classes/department";

export default {
  name: "DepartmentsEdit",
  setup() {
    const name = ref('');
    const selected = ref([] as number[]);
    const router = useRouter();
    const {params} = useRoute();

    onMounted(async () => {

      const departmentCall = await axios.get(`departments/${params.id}`);

      const department: Department = departmentCall.data.data;

      name.value = department.name;
    });

    const select = (id: number, checked: boolean) => {
      if (checked) {
        selected.value = [...selected.value, id];
        return;
      }

      selected.value = selected.value.filter(s => s !== id);
    }

    const submit = async () => {
      await axios.put(`departments/${params.id}`, {
        name: name.value,
      });

      await router.push('/departments');
    }

    const checked = (id: number) => selected.value.some(s => s === id)

    return {
      name,
      select,
      submit,
      checked
    }
  }
}
</script>
