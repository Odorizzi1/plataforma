<template>
  <header>
    <nav v-if="!authenticated" class="w-full h-full navbar">
      <nuxt-img src="/images/pescarte_logo.svg" class="logo" />
      <ul class="nav-menu">
        <li class="nav-item">
          <Text size="h4" color="text-blue-100">
            Institucional
          </Text>
          <ChevronDown class="text-blue-100" />
        </li>
        <li class="nav-item">
          <Text size="h4" color="text-blue-100">
            Pesquisa
          </Text>
          <ChevronDown class="text-blue-100" />
        </li>
        <li class="nav-item">
          <Text size="h4" color="text-blue-100">
            Pesca
          </Text>
          <ChevronDown class="text-blue-100" />
        </li>
      </ul>
      <Button type="primary" class="login-button">
        <LogIn />
        <NuxtLink to="/acessar">
          <Text size="btn">
            Acessar
          </Text>
        </NuxtLink>
      </Button>
    </nav>
    <nav v-else class="h-full navbar authenticated">
      <ul class="nav-menu">
        <li class="nav-item">
          <nuxt-img src="/images/icon_logo.svg" class="logo" />
        </li>
        <li class="nav-item">
          <Home />
          <Text size="btn" color="text-black-60">
            Home
          </Text>
        </li>
        <li class="nav-item">
          <Users />
          <Text size="btn" color="text-black-60">
            Pesquisadores
          </Text>
        </li>
        <li class="nav-item">
          <FileText />
          <Text size="btn" color="text-black-60">
            Relatórios
          </Text>
        </li>
        <li class="nav-item">
          <CalendarDays />
          <Text size="btn" color="text-black-60">
            Agenda
          </Text>
        </li>
        <li class="nav-item">
          <Mail />
          <Text size="btn" color="text-black-60">
            Mensagens
          </Text>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ChevronDown, LogIn } from 'lucide-vue-next';
import { Home, Users, FileText, CalendarDays, Mail } from 'lucide-vue-next';

const authenticated = true;
</script>

<style lang="scss">
.navbar {
  @apply flex justify-between items-center;
  @apply w-full border-black-10 bg-white-100;
  border-bottom-width: 1px;

  &.authenticated {
    @apply border-black-10 flex flex-col items-center;
    padding: 2.5rem;
    width: 8.75rem;
    overflow: hidden;
    -webkit-transition: width 0.05s linear;
    transition: width 0.1s linear;
    transform: translateZ(0) scale(1, 1);
    z-index: 1000;
    border-right-width: 1px;

    &:hover {
      width: 20rem;
    }

    .nav-menu {
      @apply flex flex-col items-center justify-between;
      height: 26.875rem;

      .nav-item {
        @apply text-black-60 flex items-center;

        &::nth-child(2) {
          display: none;
        }
      }
    }

    .logo {
      margin-left: 1rem;
      width: 3.75rem;
      height: 3.875rem;
    }
  }
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
