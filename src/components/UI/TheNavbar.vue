<template>
<div class="py-4 px-6 flex items-center justify-between bg-blood-primary text-white">
    <base-list>
        <div class="flex gap-4 list-none">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/">Products</router-link>
            </li>
            <li>
                <router-link to="/">Cart</router-link>
            </li>
            <li>
                <router-link to="/">About</router-link>
            </li>
        </div>
    </base-list>
    <base-list>
        <div class="flex gap-4 list-none">
            <li>
                <button @click="modalActive = !modalActive">Login</button>
            </li>
            <li>
                <router-link to="/">Signup</router-link>
            </li>
        </div>
    </base-list>
</div>
<div>
    <base-modal title="Login" :modal-active="modalActive">
            <v-sheet width="250" class="mx-auto">
                <v-form fast-fail @submit.prevent>
                <v-text-field
                    v-model="email"
                    label="Email"
                    variant="underlined"
                    :rules="emailRules"
                ></v-text-field>

                <v-text-field
                    v-model="password"
                    label="Password"
                    variant="underlined"
                    :rules="passwordRules"
                ></v-text-field>

                <v-btn type="submit" block class="mt-2">Submit</v-btn>
                </v-form>
            </v-sheet>
    </base-modal>
</div>
</template>

<script setup lang="ts">
import {
    defineComponent,
    reactive,
    ref
} from "vue"
import BaseList from "./BaseList.vue"
import BaseModal from "@/components/UI/BaseModal.vue";

defineComponent({
    BaseList,
    BaseModal
})

const modalActive = ref(false);
const email = ref('');
const password = ref('');
const valid = ref(false);
const emailRules =  [
        (value : string) => {
          if (value) return true

          return 'Email is requred.'
        },
        (value: string) => {
          if (/.+@.+\..+/.test(value)) return true

          return 'E-mail must be valid.'
        },
      ]

const passwordRules =[
        (value: string) => {
          if (value) return true
          return 'Password is required.'
        },
        (value : string) => {
          if (value?.length > 6) return true

          return 'Password must contain at least 8 characters.'
        },
      ]

const login = () => {
    console.log(email.value, password.value, emailRules,  passwordRules)
}
</script>

<style lang="css" scoped>
.v-field--variant-filled .v-field__overlay {
    /* background-color: currentColor; */
    opacity: -1;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.custom-v-btn .v-btn__overlay {
  display: none; /* This will hide the overlay */
}

.custom-field {
    background-color: white;
}

.custom-btn {
    background-color: blue;
}

</style>
