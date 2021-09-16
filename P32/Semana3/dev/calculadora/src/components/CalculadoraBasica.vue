  <template>
  <v-container>
    <titulo />
    <!-- Componente "Titulo.vue" -->
    <v-row>
      <v-col class="text-center">
        <h1>Calculadora Básica</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          type="number"
          label="Número 1"
          :rules="rules"
          hide-details="auto"
          v-model="n1"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          type="number"
          label="Número 2"
          :rules="rules"
          hide-details="auto"
          v-model="n2"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <v-btn color="primary" elevation="15" rounded x-large @click="sumar()"
          >Sumar</v-btn>
      </v-col>
      <v-col>
        <v-btn color="primary" elevation="15" rounded x-large @click="restar()"
          >Restar</v-btn>
      </v-col>
      <v-col>
        <v-btn color="primary" elevation="15" rounded x-large @click="multiplicar()"
          >Multiplicar</v-btn>
      </v-col>
      <v-col>
        <v-btn color="primary" elevation="15" rounded x-large @click="dividir()"
          >Dividir</v-btn>
      </v-col>
    </v-row>
    <br />
    {{ resp }}
  </v-container>
</template>

<script>
import Titulo from "./Titulo.vue";

export default {
  name: "CalculadoraBasica",
  components: {
    Titulo,
  },
  data: () => {
    return {
      n1: null,
      n2: null,
      resp: "",
      rules: [
        value => !!value || 'Requerido.',
        value => (value && value.length >= 3) || 'Min 3 caracteres',
      ],
    };
  },
  methods: {
    sumar() {
      this.resp = parseFloat(this.n1) + parseFloat(this.n2);
    },
    restar() {
      this.resp = parseFloat(this.n1) - parseFloat(this.n2);
    },
    multiplicar() {
      this.resp = parseFloat(this.n1) * parseFloat(this.n2);
    },
    dividir() {
      if (this.n2 == 0) {
        alert("Not a number");
      } else {
        this.resp = parseFloat(this.n1) / parseFloat(this.n2);
      }
    },
  },
};
</script>

  <style>
</style>