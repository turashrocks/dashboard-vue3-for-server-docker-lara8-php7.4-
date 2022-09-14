<template>
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <div class="btn-toolbar mb-2 mb-md-0">
      <router-link to="/students/create" class="btn btn-sm btn-outline-secondary">Add</router-link>
    </div>
  </div>

  <div class="table-responsive">
    <table class="table table-striped table-sm">
      <thead>
      <tr>
        <th>#</th>
        <th>Student Name</th>
        <th>Batch Name</th>
        <th>Department</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="student in students" :key="student.id">
        <td>{{ student.id }}</td>
        <td>{{ student.name }}</td>
        <td>{{ student.batch_name }}</td>
        <td>{{ student.department.name }}</td>
        <td>
          <div class="btn-group mr-2">
            <router-link :to="`/students/${student.id}/edit`" class="btn btn-sm btn-outline-secondary">Edit
            </router-link>
            <a href="javascript:void(0)" class="btn btn-sm btn-outline-secondary" @click="del(student.id)">Delete</a>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>

  <Paginator :last-page="lastPage" @page-changed="load($event)"/>
</template>

<script lang="ts">
import {ref, onMounted, computed} from 'vue';
import axios from 'axios';
import {Entity} from "@/interfaces/entity";
import {useStore} from "vuex";
import Paginator from "@/secure/components/Paginator.vue";

export default {
  name: "Students",
  components: {
    Paginator
  },
  setup() {
    const students = ref([]);
    const lastPage = ref(0);
    const store = useStore();

    // const authenticatedUser = computed(() => store.state.User.student);

    const load = async (page = 1) => {
      const response = await axios.get(`students?page=${page}`);

      students.value = response.data.data;
      lastPage.value = response.data.meta.last_page;
    }

    const del = async (id: number) => {
      if (confirm('Are you sure you want to delete this record?')) {
        await axios.delete(`students/${id}`);

        students.value = students.value.filter((e: Entity) => e.id !== id);
      }
    }

    onMounted(load);

    return {
      students,
      lastPage,
      // authenticatedUser,
      del,
      load
    }
  }
}
</script>
