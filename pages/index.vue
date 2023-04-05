<template>
  <main class="landing-grid">
    <nuxt-img src="/images/pescado_top.tmp.png" class="top-banner" />
    <div class="links">
      <div class="links-item">
        <nuxt-img src="/images/pesquisa.tmp.png" />
        <Text size="h2" color="text-white-100"> Nosso núcleo de pesquisa </Text>
        <Text size="lg" color="text-white-100">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
          ligula ultricies, finibus mi ac, pretium lectus.
        </Text>
        <Button type="primary">
          <Text size="btn" color="text-white-100"> Saiba mais </Text>
          <ArrowRight class="text-white-100" />
        </Button>
      </div>
      <div class="links-item">
        <nuxt-img src="/images/pescado.tmp.png" />
        <Text size="h2" color="text-white-100"> Repositório de mídias </Text>
        <Text size="lg" color="text-white-100">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
          ligula ultricies, finibus mi ac, pretium lectus.
        </Text>
        <Button type="primary">
          <Text size="btn" color="text-white-100"> Saiba mais </Text>
          <ArrowRight class="text-white-100" />
        </Button>
      </div>
      <div class="links-item">
        <nuxt-img src="/images/pescadores.tmp.png" />
        <Text size="h2" color="text-white-100"> Pesquisadores e Pesca </Text>
        <Text size="lg" color="text-white-100">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
          ligula ultricies, finibus mi ac, pretium lectus.
        </Text>
        <Button type="primary">
          <Text size="btn" color="text-white-100"> Saiba mais </Text>
          <ArrowRight class="text-white-100" />
        </Button>
      </div>
    </div>
    <div class="about">
      <section class="about-text">
        <Text size="sm" color="text-black-40"> O PROJETO </Text>
        <Text size="h1" color="text-black-100">
          O que o Pescarte oferece para a comunidade?
        </Text>
        <Text size="lg" color="text-black-80">
          O Projeto PESCARTE tem como sua principal finalidade a criação de uma
          rede social regional integrada por pescadores artesanais e por seus
          familiares, buscando, por meio de processos educativos, promover,
          fortalecer e aperfeiçoar a sua organização comunitária e a sua
          qualificação profissional, bem como o seu envolvimento na construção
          participativa e na implementação de projetos de geração de trabalho e
          renda.
        </Text>
        <Button type="primary">
          <Text size="btn" color="text-white-100"> Ver mais </Text>
        </Button>
      </section>
      <nuxt-img src="/images/rede_pesca_horizonte.tmp.png" />
    </div>
    <nuxt-img src="/images/rede_pesca_bottom.tmp.png" class="bottom-banner" />
  </main>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next';
</script>

<style lang="scss">
.landing-grid {
  overflow: scroll;
  display: grid;
  gap: 2rem;
  grid-template-areas:
    'top-banner'
    'links'
    'about'
    'news'
    'bottom-banner';
}

.top-banner {
  @apply w-full;

  height: 25rem;
  grid-area: top-banner;
}

.bottom-banner {
  @apply w-full;

  height: 30rem;
  grid-area: bottom-banner;
}

.links {
  @apply relative w-full;
  @apply flex justify-between;
  padding: 3rem 10rem;

  .links-item {
    @apply flex flex-col justify-end;
    height: 20rem;
    width: 19rem;

    img {
      @apply absolute;
      z-index: -10;
      height: inherit;
      width: inherit;
    }

    p {
      width: 85%;
    }

    button {
      width: 10rem;
      margin-top: 1rem;
    }
  }
}

.about {
  @apply flex justify-between;

  padding: 3rem 5rem;

  .about-text {
    height: 20rem;
    width: 26rem;

    h1 {
      margin-bottom: 1rem;
      margin-top: 0.25rem;
    }

    button {
      margin-top: 1rem;
    }
  }

  img {
    height: 30rem;
    width: 40rem;
  }
}
</style>
