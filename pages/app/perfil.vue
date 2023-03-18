<template>
  <main class="user-profile-wrapper">
    <div class="user-profile-avatar">
      <nuxt-img v-if="user?.avatar" :src="user?.avatar" />
      <User v-else width="100" height="100" />
    </div>
    <div class="user-profile-banner">
      <nuxt-img v-if="user?.profileBanner" :src="user?.profileBanner" />
      <div class="user-profile-banner-default" />
    </div>
    <div class="user-profile-menu">
      <div class="user-profile-menu-dots">
        <div class="dots"><span /> <span /> <span /></div>
      </div>
      <ProfileMenuLink @click="editProfile" label="Editar Perfil">
        <Edit />
      </ProfileMenuLink>

      <ProfileMenuLink @click="changePass" label="Alterar Senha">
        <Lock />
      </ProfileMenuLink>

      <ProfileMenuLink @click="logout" label="Sair">
        <LogOut />
      </ProfileMenuLink>
    </div>
    <section class="user-profile-info">
      <div class="basic-info">
        <Text size="h2" color="text-black-80">
          {{ user?.firstName }}
        </Text>
        <Text size="h4" color="text-black-80" class="uppercase">
          {{ user?.pesquisador.bolsa }}
        </Text>
      </div>
      <hr />
      <div class="about">
        <Text size="h4" color="text-black-80"> Sobre </Text>
        <Text size="btn" color="text-black-80">
          {{ user?.pesquisador.minibio }}
        </Text>
      </div>
      <hr />
      <div class="links">
        <Text size="lg" color="text-black-80" class="capitalize"> links </Text>
        <ProfileLink :href="user?.pesquisador.linkLattes" label="Lattes">
          <FileText width="35" height="23" class="text-white-100" />
        </ProfileLink>
        <ProfileLink :href="user?.pesquisador.linkLinkedin" label="LinkedIn">
          <Linkedin width="35" height="23" class="text-white-100" />
        </ProfileLink>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { User, Edit, Lock, LogOut, FileText, Linkedin } from 'lucide-vue-next';

definePageMeta({ layout: 'auth' });

function editProfile() {
  console.log('EDIT PROFILE');
}

function changePass() {
  console.log('CHANGE PASS');
}

function logout() {
  console.log('LOGOUT');
}

const user = {
  avatar: '',
  profileBanner: '',
  firstName: 'Zoey',
  pesquisador: {
    minibio: 'Sou a Zoey',
    linkLattes: 'https://github.com/zoedsoupe',
    linkLinkedin: 'https://linkedin.com/in/zoedsoupe',
    bolsa: 'pesquisa',
  },
};
</script>

<style lang="scss">
.user-profile-wrapper {
  @apply w-full flex flex-col items-end;

  .user-profile-banner {
    @apply w-full;
    height: 12.5rem;

    .user-profile-banner-default {
      @apply bg-orange-60;
      height: inherit;
    }
  }

  .user-profile-avatar {
    @apply bg-orange-100;
    @apply border-4 border-white-100;

    z-index: 10;
    position: absolute;
    top: 6.25rem;
    left: 12rem;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    display: inline-block;

    svg {
      margin: 20% auto;
    }
  }

  .user-profile-menu {
    @apply flex flex-col items-center justify-center;
    @apply bg-white-100;
    @apply border-2 border-blue-80 text-blue-80;
    @apply pt-14 pr-8;

    &:hover {
      visibility: visible;

      .user-profile-menu-dots {
        @apply border-0;
      }

      pointer-events: visible;
    }

    position: relative;
    border-radius: 1rem;
    height: 13rem;
    width: 13rem;
    right: 2rem;
    top: 1rem;
    pointer-events: none;
    visibility: hidden;

    .profile-menu-link {
      @apply flex justify-between items-start w-28;
    }

    .user-profile-menu-dots {
      @apply flex items-center;
      @apply border-2 border-blue-80 bg-white-100;

      width: 3.5rem;
      height: 3.5rem;
      border-radius: 6.25rem;

      position: absolute;
      bottom: 70%;
      left: 70%;
      pointer-events: auto;
      visibility: visible;

      &:hidden {
        pointer-events: none;
      }

      .dots {
        @apply w-1/2 mx-auto hover:hidden;
        @apply flex justify-between items-center;

        span {
          @apply bg-blue-80;

          border-radius: 50%;
          height: 0.25rem;
          width: 0.25rem;
        }
      }
    }
  }

  .user-profile-info {
    width: calc(100% - 4rem);
    height: 29rem;
    margin-top: -8rem;

    .basic-info {
      @apply flex flex-col items-start;
    }

    .about {
      @apply w-full;
      @apply flex flex-col items-start;

      height: 6rem;

      span {
        height: 7.5rem;
      }
    }

    .links {
      @apply flex flex-col items-start justify-between;

      height: 8.75rem;
    }

    hr {
      @apply border-2;
      @apply text-black-10 my-10;

      height: 2px;
      width: 58.75rem;
      opacity: 0.4;
    }
  }
}
</style>
