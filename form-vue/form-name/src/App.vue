<script setup lang="ts">
import { ref } from 'vue';

const nome = ref<string>('');
const sobrenome = ref<string>('');
const nameAndSobrenomeAndNumber = ref<string>('');

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function rewaitStringAndNumber(event: Event) {
  event.preventDefault();
  const numeroAleatorio = Math.floor(Math.random() * 9) + 1;
  const nomeFormatado = capitalize(nome.value);
  const sobrenomeFormatado = capitalize(sobrenome.value);

  nameAndSobrenomeAndNumber.value = `${nomeFormatado}${sobrenomeFormatado}${numeroAleatorio}`;
}
</script>

<template>
  <div>
    <form>
      <div class="form-input">
        <label for="nome">Nome</label>
        <input name="nome" placeholder="Nome" v-model="nome" />
      </div>
      <div class="form-input">
        <label for="sobrenome">Sobrenome</label>
        <input name="sobrenome" placeholder="Sobrenome" v-model="sobrenome" />
      </div>
      <button @click="rewaitStringAndNumber">Gerar</button>
    </form>
    <p>Resultado: {{ nameAndSobrenomeAndNumber }}</p>
  </div>
</template>

<style scoped>
.form-input {
  display: flex;
  flex-direction: column;
  align-items: start;
}
</style>
