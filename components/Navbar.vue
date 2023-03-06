<template>
  <header>
    <nav class="w-full h-full nav-grid">
      <nuxt-img src="/images/pescarte_logo.svg" class="logo" />
      <ul class="nav-menu">
        <li class="nav-item">
          <Text size="h4" color="blue-100">Institucional</Text>
          <ChevronDown />
        </li>
        <li class="nav-item">
          <Text size="h4" color="blue-100">Pesquisa</Text>
          <ChevronDown />
        </li>
        <li class="nav-item">
          <Text size="h4" color="blue-100">Pesca</Text>
          <ChevronDown />
        </li>
      </ul>
      <Button type="primary" class="login-button">
        <LogIn />
        <Text size="btn" color="white-100">Acessar</Text>
      </Button>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ChevronDown, LogIn } from "lucide-vue-next";
</script>

<style lang="scss">
.nav-grid {
  @apply flex justify-between items-center;
  @apply w-full;
}

.logo {
  margin-left: 2.5rem;
  width: 9.75rem;
  height: 3.125rem;
}

.login-button {
  margin-right: 2.5rem;
}

.nav-menu {
  @apply flex justify-around;
  width: 30rem;
}

.nav-item {
  @apply flex justify-between items-center;

  > svg {
    margin-left: 0.5rem;
  }
}
</style>
