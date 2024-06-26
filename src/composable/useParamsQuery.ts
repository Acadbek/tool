import { useRouteParams } from '@vueuse/router'
import { computed } from 'vue';

const transformers = {
  number: {
    fromQuery: (value: string) => value,
    toQuery: (value: string) => value,
  },
  string: {
    fromQuery: (value: string) => value.toLowerCase() === 'true',
    toQuery: (value: boolean) => (value ? 'true' : 'false'),
  }
}
