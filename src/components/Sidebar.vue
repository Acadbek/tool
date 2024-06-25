<script setup lang="ts">
interface Menu {
  title: string;
  link: string;
}

const menus: Menu[] = [
  { title: 'token generator', link: "token-generator" },
  { title: "password strength analyser", link: "password-strength-analyser" },
];
</script>

<template>
  <aside h-full p-4>
    <ul>
      <li v-for="menu in menus" mb-2>
        <Menu :menu="menu" hover="underline"  dark:text-white text-gray-8 />
      </li>
    </ul>
  </aside>
</template>
