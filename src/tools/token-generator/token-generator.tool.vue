<script setup lang="ts">
import { onMounted } from 'vue';
import { useCopy } from '../../composable/copy';
import { createToken } from './token-generator.service';

function generateToken(length: number) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        token += characters[randomIndex];
    }
    console.log(token);
}

onMounted(() => {
  generateToken(12)
})
</script>

<template></template>
