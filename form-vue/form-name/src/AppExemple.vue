<script setup lang="ts">
import { ref, computed } from 'vue';

const nome = ref<string>('');
const sobrenome = ref<string>('');

const nomeFormatado = computed(() => capitalize(nome.value));
const sobrenomeFormatado = computed(() => capitalize(sobrenome.value));
const numeroAleatorio = ref<number | null>(null); // Adicionamos um ref para o número

const nameAndSobrenomeAndNumber = computed(() => {
  if (nomeFormatado.value && sobrenomeFormatado.value && numeroAleatorio.value !== null) {
    return `${nomeFormatado.value}${sobrenomeFormatado.value}${numeroAleatorio.value}`;
  }
  return ''; // Ou algum outro valor padrão
});

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function gerarStringComNumero() {
  numeroAleatorio.value = Math.floor(Math.random() * 9) + 1;
}
</script>

<template>
  <div>
    <form @submit.prevent="gerarStringComNumero">
      <div class="form-input">
        <label for="nome">Nome</label>
        <input name="nome" placeholder="Nome" v-model="nome" />
      </div>
      <div class="form-input">
        <label for="sobrenome">Sobrenome</label>
        <input name="sobrenome" placeholder="Sobrenome" v-model="sobrenome" />
      </div>
      <button type="submit">Gerar</button>
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