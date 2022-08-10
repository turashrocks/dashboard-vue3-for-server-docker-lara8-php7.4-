<template>
      <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="position-sticky pt-3 sidebar-sticky">
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link to="/dashboard" class="nav-link" active-class="active" aria-current="page">
              <span data-feather="home" class="align-text-bottom"></span>
              Dashboard
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/departments" class="nav-link">
              <span data-feather="file" class="align-text-bottom"></span>
              Departments
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="shopping-cart" class="align-text-bottom"></span>
              Students
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="users" class="align-text-bottom"></span>
              Results
            </a>
          </li>
        </ul>

        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
          <span>Saved reports</span>
          <a class="link-secondary" href="#" aria-label="Add a new report">
            <span data-feather="plus-circle" class="align-text-bottom"></span>
          </a>
        </h6>
      </div>
    </nav>
</template>


<script lang="ts">
// import {computed} from 'vue';
// import {useStore} from "vuex";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navigation",
  // const store = useStore();
  // const user = computed(() => store.state.User.user);

  // return {
  //     user
  //   }
  // }
});
</script>