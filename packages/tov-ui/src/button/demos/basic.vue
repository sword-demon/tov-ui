<docs>
---
title: 基础使用
---

这是一个`button`的基础使用的例子
</docs>

<script lang="ts" setup>
import { test } from '@tov-ui/utils'

function handleClick() {
  console.log('click')
}

test()
</script>

<template>
  <div>
    Button 的例子
    <t-button @click="handleClick" />
  </div>
</template>
