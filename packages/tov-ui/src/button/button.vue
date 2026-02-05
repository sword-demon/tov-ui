<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TButton',
  // 事件
  emits: ['click'],
  setup(_props, { emit }) {
    const handleClick = (e: Event) => {
      emit('click', e)
    }

    return {
      handleClick,
    }
  },
})
</script>

<template>
  <div>
    <button @click="handleClick">
      button111
    </button>
  </div>
</template>
