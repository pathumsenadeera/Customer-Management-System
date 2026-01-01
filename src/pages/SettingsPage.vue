<template>
  <q-page class="container q-py-lg">
    <div class="text-h4 text-white text-weight-bold q-mb-lg animated fadeInUp">
      Account Settings
    </div>

    <div class="row q-col-gutter-lg animated fadeInUp">
      <div class="col-12 col-md-4">
        <!-- Profile Card -->
        <q-card class="bg-glass text-white q-pa-md height-full">
          <q-card-section class="text-center">
            <q-avatar size="100px" class="q-mb-md">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              <q-btn
                round
                color="red-accent"
                icon="edit"
                size="xs"
                class="absolute-bottom-right"
                style="bottom: 0; right: 0"
              />
            </q-avatar>
            <div class="text-h6 text-weight-bold">Pathum Senadeera</div>
            <div class="text-grey-5">Admin</div>
          </q-card-section>
          <q-separator dark class="q-my-md opacity-20" />
          <q-list>
            <q-item clickable class="rounded-borders hover-bg-light">
              <q-item-section avatar><q-icon name="person" /></q-item-section>
              <q-item-section>Personal Info</q-item-section>
              <q-item-section side><q-icon name="chevron_right" /></q-item-section>
            </q-item>
            <q-item clickable class="rounded-borders hover-bg-light">
              <q-item-section avatar><q-icon name="lock" /></q-item-section>
              <q-item-section>Security</q-item-section>
              <q-item-section side><q-icon name="chevron_right" /></q-item-section>
            </q-item>
            <q-item clickable class="rounded-borders hover-bg-light">
              <q-item-section avatar><q-icon name="credit_card" /></q-item-section>
              <q-item-section>Billing</q-item-section>
              <q-item-section side><q-icon name="chevron_right" /></q-item-section>
            </q-item>
            <q-item clickable class="rounded-borders hover-bg-light text-red-accent">
              <q-item-section avatar><q-icon name="logout" /></q-item-section>
              <q-item-section>Sign Out</q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>

      <div class="col-12 col-md-8">
        <!-- Form Section -->
        <q-card class="bg-glass text-white q-pa-lg">
          <div class="text-h6 q-mb-md">Personal Information</div>
          <div class="row q-col-gutter-md q-mb-md">
            <div class="col-12 col-sm-6">
              <q-input
                filled
                dark
                v-model="form.firstName"
                label="First Name"
                color="red-accent"
                class="input-box"
              />
            </div>
            <div class="col-12 col-sm-6">
              <q-input
                filled
                dark
                v-model="form.lastName"
                label="Last Name"
                color="red-accent"
                class="input-box"
              />
            </div>
          </div>
          <div class="q-mb-md">
            <q-input
              filled
              dark
              v-model="form.email"
              label="Email Address"
              color="red-accent"
              class="input-box"
            />
          </div>
          <div class="q-mb-lg">
            <q-input
              filled
              dark
              type="textarea"
              v-model="form.bio"
              label="Bio"
              color="red-accent"
              class="input-box"
            />
          </div>

          <div class="text-h6 q-mb-md">Notifications</div>
          <div class="q-gutter-sm">
            <q-toggle
              v-model="form.emailNotif"
              color="red-accent"
              label="Email Notifications"
              dark
            />
            <br />
            <q-toggle v-model="form.pushNotif" color="red-accent" label="Push Notifications" dark />
          </div>

          <div class="q-mt-xl text-right">
            <q-btn flat color="grey-5" label="Cancel" class="q-mr-sm" />
            <q-btn color="red-accent" label="Save Changes" unelevated class="rounded-btn" />
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  firstName: 'Pathum',
  lastName: 'Senadeera',
  email: 'pathum@example.com',
  bio: 'Full stack developer and UI enthusiast.',
  emailNotif: true,
  pushNotif: false,
})
</script>

<style scoped lang="scss">
.bg-glass {
  background: rgba(20, 20, 20, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
}

.input-box :deep(.q-field__control) {
  background: rgba(255, 255, 255, 0.05) !important;
  border-radius: 8px;
}

.opacity-20 {
  opacity: 0.2;
}
.hover-bg-light:hover {
  background: rgba(255, 255, 255, 0.05);
}
.rounded-btn {
  border-radius: 8px;
}
</style>
