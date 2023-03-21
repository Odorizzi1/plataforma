<template>
  <main class="fish-bg h-full">
    <Form
      class="login-form whitespace-nowrap"
      :validation-schema="schema"
      @submit="handleSubmit"
      @invalid-submit="handleError">
      <Text size="h3" color="text-black-80">
        Faça login para acessar a plataforma
      </Text>

      <fieldset class="login-fieldset">
        <label><Text size="h4" color="text-black-80">CPF</Text></label>
        <Input v-maska type="text" name="cpf" data-maska="###.###.###-##" />
      </fieldset>

      <fieldset class="login-fieldset">
        <label><Text size="h4" color="text-black-80">Senha</Text></label>
        <Input type="password" name="password" />
      </fieldset>

      <Button type="primary" submit>
        <Text size="btn"> Acessar </Text>
      </Button>
    </Form>
  </main>
</template>

<script setup lang="ts">
import { Form } from 'vee-validate';
import { toFormValidator } from '@vee-validate/zod';
import { vMaska } from 'maska';
import { z } from 'zod';
import type { Login } from '@/types/auth';

const schema = toFormValidator(
  z.object({
    cpf: z.string().min(1),
    password: z.string().min(8),
  })
);

const query = gql`
  mutation Login($cpf: String!, $password: String!) {
    login(cpf: $cpf, password: $password) {
      token
      user {
        id
        birthdate
        firstName
        middleName
        lastName
        cpf
        role
      }
    }
  }
`;

const { mutate: login } = useMutation<Login>(query, { clientId: 'local' });

async function handleSubmit(values: any): Promise<void> {
  const { onLogin } = useApollo();
  const { cpf, password } = values;

  const variables = { cpf, password };

  const result = await login(variables);

  console.log(result);
}

function handleError(e: any) {
  const { cpf, password } = e.errors;

  // TODO use toasts to show errors!
}
</script>

<style lang="scss">
main {
  @apply flex justify-center items-center;
}

.fish-bg {
  background-image: url('/images/fish_background.svg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.login-form {
  @apply flex flex-col;
  @apply justify-between items-center;
  @apply bg-white-100;

  height: 34.375rem;
  width: 37.5rem;
  border-radius: 24px;
  padding: 6.25rem;

  h3 {
    width: 27.25rem;
  }

  input {
    @apply w-full;
    height: 3rem;
    margin-top: 0.75rem;
  }

  button {
    margin-top: 2rem;
    width: 27.25rem;
    height: 3.5rem;
  }
}

.login-fieldset {
  width: 27.25rem;
  height: 5.25rem;
  margin-top: 2rem;
}
</style>
