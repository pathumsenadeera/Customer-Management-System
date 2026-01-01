<template>
  <q-page class="flex flex-center bg-black-grad q-pa-md">
    <div class="auth-card-container animated fadeInUp">
      <q-card class="bg-glass q-pa-lg text-white" style="width: 400px; max-width: 90vw">
        <q-card-section class="text-center">
          <div class="text-h4 text-weight-bolder tracking-widest q-mb-xs">
            CMS<span class="text-red-accent">.PRO</span>
          </div>
          <div class="text-grey-5">Create your account</div>
        </q-card-section>

        <q-card-section class="q-mt-sm">
          <q-form @submit="onSubmit" class="q-gutter-md">
            <q-input
              filled
              dark
              v-model="name"
              label="Full Name"
              label-color="grey-5"
              color="red-accent"
              class="input-box"
            >
              <template v-slot:prepend>
                <q-icon name="person" color="red-accent" />
              </template>
            </q-input>

            <q-input
              filled
              dark
              v-model="email"
              label="Email Address"
              label-color="grey-5"
              color="red-accent"
              class="input-box"
            >
              <template v-slot:prepend>
                <q-icon name="email" color="red-accent" />
              </template>
            </q-input>

            <q-input
              filled
              dark
              v-model="password"
              type="password"
              label="Password"
              label-color="grey-5"
              color="red-accent"
              class="input-box"
            >
              <template v-slot:prepend>
                <q-icon name="lock" color="red-accent" />
              </template>
            </q-input>

            <q-checkbox
              v-model="terms"
              label="I agree to Terms & Conditions"
              color="red-accent"
              dark
              size="sm"
              class="text-grey-5"
            />

            <div>
              <q-btn
                label="Sign Up"
                type="submit"
                color="red-accent"
                class="full-width bg-red-accent shadow-red text-weight-bold q-py-sm"
                rounded
                unelevated
              />
            </div>
          </q-form>
        </q-card-section>

        <q-card-section class="text-center q-mt-sm">
          <div class="text-grey-5 text-caption">
            Already have an account?
            <router-link to="/login" class="text-white text-weight-bold no-decoration hover-red"
              >Sign In</router-link
            >
          </div>
        </q-card-section>
      </q-card>
    </div>
    <!-- Background Elements -->
    <div class="bg-glow-bottom"></div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const name = ref('')
const email = ref('')
const password = ref('')
const terms = ref(false)
const router = useRouter()

function onSubmit() {
  // Mock login
  router.push('/')
}
</script>

<style scoped lang="scss">
.bg-black-grad {
  background-color: #050505;
}

.bg-glass {
  background: rgba(20, 20, 20, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}

.input-box :deep(.q-field__control) {
  background: rgba(255, 255, 255, 0.03) !important;
  border-radius: 12px;
}

.shadow-red {
  box-shadow: 0 4px 20px rgba(255, 46, 46, 0.4);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 4px 30px rgba(255, 46, 46, 0.6);
    transform: translateY(-2px);
  }
}

.hover-red:hover {
  color: var(--primary-red) !important;
}

.bg-glow-bottom {
  position: fixed;
  bottom: -20%;
  right: -10%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(255, 46, 46, 0.1) 0%, rgba(0, 0, 0, 0) 70%);
  pointer-events: none;
  z-index: 0;
}

.auth-card-container {
  z-index: 1;
}
</style>
