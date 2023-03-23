<template>
  <header @mouseover="hover = true" @mouseleave="hover = false">
    <nav class="h-full navbar authenticated" :class="{ open: hover }">
      <ul class="nav-menu">
        <li class="nav-item">
          <nuxt-img v-if="!hover" src="/images/icon_logo.svg" class="logo" />
          <nuxt-img v-else src="/images/pescarte_logo.svg" class="logo" />
        </li>
        <li class="nav-item">
          <Home />
          <Text v-if="hover" size="btn" color="text-black-60"> Home </Text>
        </li>
        <li class="nav-item">
          <Users />
          <Text v-if="hover" size="btn" color="text-black-60">
            Pesquisadores
          </Text>
        </li>
        <li class="nav-item">
          <FileText />
          <Text v-if="hover" size="btn" color="text-black-60">
            Relatórios
          </Text>
        </li>
        <li class="nav-item">
          <CalendarDays />
          <Text v-if="hover" size="btn" color="text-black-60"> Agenda </Text>
        </li>
        <li class="nav-item">
          <Mail />
          <Text v-if="hover" size="btn" color="text-black-60"> Mensagens </Text>
        </li>
      </ul>
      <div class="user-info">
        <User class="text-black-60" />
        <Text v-if="hover" size="btn" color="text-black-80">
          Zoey de Souza Pessanha
        </Text>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import {
  Home,
  User,
  Users,
  FileText,
  CalendarDays,
  Mail,
} from 'lucide-vue-next';

const props = withDefaults(defineProps<{ hover?: boolean }>(), { hover: true });
</script>

<style lang="scss">
.navbar.authenticated {
  @apply border-black-10 flex flex-col items-center;
  padding: 2.5rem;
  width: 8.75rem;
  overflow: hidden;
  -webkit-transition: width 0.05s linear;
  transition: width 0.1s linear;
  transform: translateZ(0) scale(1, 1);
  border-right-width: 1px;

  .user-info {
    @apply flex justify-center;
    margin-top: 12rem;
  }

  .nav-menu {
    @apply flex flex-col items-center justify-between;
    height: 26.875rem;

    .nav-item {
      @apply text-black-60 flex items-center;
    }
  }

  .logo {
    width: 3.75rem;
    height: 3.875rem;
  }
}

.navbar.authenticated.open {
  @apply bg-white-100;

  z-index: 1000;
  width: 20rem;

  .user-info {
    svg {
      width: 3.75rem;
      height: 3.75rem;
      margin-right: 0.75rem;
    }
  }

  .nav-menu {
    @apply items-start;

    .nav-item > svg {
      margin-right: 0.5rem;
    }
  }

  .logo {
    width: 12.25rem;
    height: 3.8rem;
  }
}
</style>
