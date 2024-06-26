<script setup lang="ts">
import { useTitle, useClipboard } from '@vueuse/core'
import { onMounted, ref, watch } from 'vue';
import Toaster from '@/components/ui/toast/Toaster.vue'
import { useToast } from '@/components/ui/toast/use-toast'
import Button from '@/components/ui/button/Button.vue';
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils';

const { toast } = useToast()
useTitle('token generator')

const token = ref<string>('')
const withUpperCase = ref<boolean>(true)
const withLowerCase = ref<boolean>(true)   
const withNumbers = ref<boolean>(true)
const withSymbols = ref<boolean>(true)
const length = ref<number[]>([36])

const { text, copy, copied, isSupported } = useClipboard({ token })

const numbers = '0123456789'
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'
const symbols = "`~!@#$%^&*()-_+={}[]|:;'<>,.?/"

const random = () => Math.random()

function generateToken() {
  let chars: string[] = []
  if (withUpperCase.value) {
    chars.push(...uppercaseLetters.split(''))
  }
  if (withLowerCase.value) {
    chars.push(...lowercaseLetters.split(''))
  }
  if (withNumbers.value) {
    chars.push(...numbers.split(''))
  }
  if (withSymbols.value) {
    chars.push(...symbols.split(''))
  }

  // Fisher-Yates shuffle
  for (let i = chars.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }

  token.value = chars.slice(0, length.value[0]).join('');
  return token
}

watch(length, prev => {
  generateToken()
})

const handleChange = (name) => {
  switch (name) {
    case 'withUpperCase':
      withUpperCase.value = !withUpperCase.value;
      break;
    case 'withLowerCase':
      withLowerCase.value = !withLowerCase.value;
      break;
    case 'withNumbers':
      withNumbers.value = !withNumbers.value;
      break;
    case 'withSymbols':
      withSymbols.value = !withSymbols.value;
      break;
    default:
      break;
  }
  generateToken()
};

const copyToken = () => {
  try {
    copy(token.value)
    toast({
      title: 'Copied',
      description: 'Friday, February 10, 2023 at 5:57 PM',
    });
  } catch (error) {
    toast({
      variant: 'destructive',
      title: 'Error',
      description: 'Friday, February 10, 2023 at 5:57 PM',
    });
  }
}

onMounted(() => {
  generateToken()
})
</script>


<template>
  <Toaster />
  <div flex flex-col items-center border p-14 justify-center>
    <div class="flex flex-col gap-8 mb-8 w-[500px]">
      <div class="flex gap-6">
        <div class="flex items-center gap-4">
          <Switch @update:checked="() => handleChange('withLowerCase')" :checked="withLowerCase" />
          with lowercase
        </div>
        <div class="flex items-center gap-4">
          <Switch @update:checked="() => handleChange('withUpperCase')" :checked="withUpperCase" />
          with uppercase
        </div>
      </div>
      <div class="flex gap-8">
        <div class="flex items-center gap-4">
          <Switch @update:checked="() => handleChange('withNumbers')" :checked="withNumbers" />
          with numbers
        </div>
        <div class="flex items-center gap-4">
          <Switch @update:checked="() => handleChange('withSymbols')" :checked="withSymbols" />
          with symbols
        </div>
      </div>
      <div>
        <Slider
          w="400px"
          mt-4
          v-model="length"
          :max="92"
          :min="1"
          :step="1"
          :class="cn($attrs.class ?? '')"
          />
        <p mt-2 text="14px" text-center>length [{{ token.length }}]</p>
      </div>
    </div>
    <textarea p-4 class="w-[500px] h-28 rounded-md mt-10" outline-none border bg-transparent v-model="token"></textarea>
    <div flex gap-4 mt-4>
      <Button variant="outline" @click="generateToken">generate</Button>
      <Button variant="outline" @click="copyToken">copy</Button>
    </div>
  </div>
</template>
