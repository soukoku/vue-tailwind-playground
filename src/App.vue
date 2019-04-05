<template>
  <div class="flex h-screen overflow-hidden">
    <div id="main-nav" class="w-48 overflow-y-auto">
      <ul>
        <li v-for="route in $router.options.routes" :key="route.name">
          <router-link :to="route">{{ route.name }}</router-link>
        </li>
      </ul>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea distinctio
        ad, blanditiis facilis beatae nulla ut hic maiores neque esse natus
        suscipit temporibus optio culpa aspernatur ipsam? Necessitatibus,
        molestiae eius.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea distinctio
        ad, blanditiis facilis beatae nulla ut hic maiores neque esse natus
        suscipit temporibus optio culpa aspernatur ipsam? Necessitatibus,
        molestiae eius.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea distinctio
        ad, blanditiis facilis beatae nulla ut hic maiores neque esse natus
        suscipit temporibus optio culpa aspernatur ipsam? Necessitatibus,
        molestiae eius.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea distinctio
        ad, blanditiis facilis beatae nulla ut hic maiores neque esse natus
        suscipit temporibus optio culpa aspernatur ipsam? Necessitatibus,
        molestiae eius.
      </p>
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
