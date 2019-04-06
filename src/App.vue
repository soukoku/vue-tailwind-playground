<template>
  <div class="flex h-screen overflow-hidden">
    <div id="main-nav" class="w-56 overflow-y-auto">
      <ul class="nav-list">
        <li v-for="route in $router.options.routes" :key="route.name">
          <router-link
            class="nav-item"
            :class="{ active: route.path === $router.currentRoute.path }"
            :to="route"
            >{{ route.name }}</router-link
          >
        </li>
      </ul>
    </div>
    <div id="main-content" class="flex-1 overflow-y-auto">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
