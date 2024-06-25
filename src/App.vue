<script setup lang="ts">
</script>

<template>
  <header>
    <Navbar/>
  </header>
  <main container mx-auto grid grid-cols-5 gap-4>
    <aside col-span-1 border-r h-full>
      <Sidebar/>
    </aside>
    <section col-span-4 p-8>
      <RouterView />
    </section>
  </main>
</template>
