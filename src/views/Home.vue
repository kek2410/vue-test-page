<template>
  <div class="home">
    <v-btn @click="decrement">
      <v-icon>mdi-minus</v-icon>
    </v-btn>
    <v-btn @click="increment">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <Example :msg="inputMsg" :test-number="testNumber" />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Example from "@/components/Example.vue";
import Component from "vue-class-component";
import { Vue } from "vue-property-decorator";

@Component({
  components: {
    Example
  }
})
export default class Home extends Vue {
  // data
  inputMsg: string = "Hello! Welcom VuePenta";
  testNumber: number = 0;
  // computed
  get exclamationMarks(): string {
    return Array(this.testNumber + 1).join("!");
  }

  // methods
  increment(): void {
    this.testNumber++;
  }
  decrement(): void {
    this.testNumber--;
  }
}
</script>
