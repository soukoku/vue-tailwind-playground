<template>
  <div class="flex h-screen overflow-hidden bg-red-500">
    <div id="main-nav" class="w-48 overflow-y-auto bg-green-500">
      This is main nav

      <ul>
        <li>Link 1</li>
        <li>Link 1</li>
        <li>Link 1</li>
        <li>Link 1</li>
        <li>Link 1</li>
        <li>Link 1</li>
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
    <div id="main-content" class="flex-1 overflow-y-auto bg-yellow-500">
      This is main content
      <base-alert
        type="success"
        title="success"
        message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde doloremque maiores explicabo. Vero, officiis numquam laudantium eaque et consequuntur magnam! Libero est molestias expedita doloremque blanditiis consectetur? Minima, impedit sunt?"
      ></base-alert>
      <base-alert
        type="warning"
        title="warning"
        message="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
      ></base-alert>
      <base-alert
        type="error"
        title="error"
        message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde doloremque maiores explicabo. Vero, officiis numquam laudantium eaque et consequuntur magnam! Libero est molestias expedita doloremque blanditiis consectetur? Minima, impedit sunt?"
      ></base-alert>
      <base-alert
        title="info"
        message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde doloremque maiores explicabo. Vero, officiis numquam laudantium eaque et consequuntur magnam! Libero est molestias expedita doloremque blanditiis consectetur? Minima, impedit sunt?"
      ></base-alert>

      <div class="flex">
        <base-button color="none">Button</base-button>
        <base-button color="primary">Button</base-button>
        <base-button color="success">Button</base-button>
        <base-button color="warning">Button</base-button>
        <base-button color="danger">Button</base-button>
        <base-button color="info">Button</base-button>
      </div>
      <div class="flex mt-2">
        <base-button plain color="none">Button</base-button>
        <base-button plain color="primary">Button</base-button>
        <base-button plain color="success">Button</base-button>
        <base-button plain color="warning">Button</base-button>
        <base-button plain color="danger">Button</base-button>
        <base-button plain color="info">Button</base-button>
      </div>
      <div class="flex mt-2">
        <base-button disabled color="none">Button</base-button>
        <base-button disabled color="primary">Button</base-button>
        <base-button disabled color="success">Button</base-button>
        <base-button disabled color="warning">Button</base-button>
        <base-button disabled color="danger">Button</base-button>
        <base-button disabled color="info">Button</base-button>
      </div>
      <div class="flex mt-2">
        <base-button size="xs">Button</base-button>
        <base-button size="sm">Button</base-button>
        <base-button size="md">Button</base-button>
        <base-button size="lg">Button</base-button>
      </div>
      <div class="flex mt-2">
        <base-button rounded size="xs">A</base-button>
        <base-button rounded size="sm">B</base-button>
        <base-button rounded size="md">C</base-button>
        <base-button rounded size="lg">D</base-button>
      </div>
      <div class="btn-group mt-2">
        <base-button @click="testBtn">Button</base-button>
        <base-button>Button</base-button>
        <base-button>Button</base-button>
        <base-button>Button</base-button>
      </div>

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
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    testBtn() {
      alert('clicked')
    }
  }
}
</script>
