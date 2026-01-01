<template>
  <q-page class="container q-py-xl">
    <div class="text-center q-mb-xl animated fadeInUp">
      <h1 class="text-h3 text-white text-weight-bolder">Powerful Features</h1>
      <p class="text-grey-5 text-h6">Tools designed to help you succeed.</p>
    </div>

    <div class="row q-col-gutter-xl">
      <div class="col-12 col-md-6 animated fadeInUp" style="animation-delay: 0.1s">
        <q-card class="bg-glass text-white q-pa-md height-full feature-card">
          <q-card-section>
            <div class="icon-box bg-red-soft q-mb-md">
              <q-icon name="analytics" color="red-accent" size="md" />
            </div>
            <div class="text-h5 text-weight-bold q-mb-sm">Advanced Analytics</div>
            <p class="text-grey-5">
              Gain deep insights into customer behavior with our real-time dashboard. Track revenue,
              churn, and engagement metrics effortlessly.
            </p>
          </q-card-section>
          <q-card-section>
            <img
              src="https://cdn.quasar.dev/img/parallax2.jpg"
              class="rounded-borders full-width opacity-60"
              style="height: 200px; object-fit: cover"
            />
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-6 animated fadeInUp" style="animation-delay: 0.2s">
        <q-card class="bg-glass text-white q-pa-md height-full feature-card">
          <q-card-section>
            <div class="icon-box bg-red-soft q-mb-md">
              <q-icon name="groups" color="red-accent" size="md" />
            </div>
            <div class="text-h5 text-weight-bold q-mb-sm">Customer Management</div>
            <p class="text-grey-5">
              Organize your client base with custom tags, filters, and detailed profiles. Keep track
              of every interaction in one place.
            </p>
          </q-card-section>
          <q-card-section>
            <img
              src="https://cdn.quasar.dev/img/parallax1.jpg"
              class="rounded-borders full-width opacity-60"
              style="height: 200px; object-fit: cover"
            />
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-4 animated fadeInUp" style="animation-delay: 0.3s">
        <q-card class="bg-glass text-white q-pa-sm height-full feature-card">
          <q-card-section>
            <div class="row items-center q-mb-md">
              <q-icon name="bolt" color="yellow-8" size="md" class="q-mr-sm" />
              <div class="text-h6 text-weight-bold">Fast Performance</div>
            </div>
            <p class="text-grey-5 text-caption">
              Built on Quasar & Vue.js for lightning fast load times.
            </p>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-4 animated fadeInUp" style="animation-delay: 0.4s">
        <q-card class="bg-glass text-white q-pa-sm height-full feature-card">
          <q-card-section>
            <div class="row items-center q-mb-md">
              <q-icon name="lock" color="green-5" size="md" class="q-mr-sm" />
              <div class="text-h6 text-weight-bold">Secure Data</div>
            </div>
            <p class="text-grey-5 text-caption">
              Enterprise-grade encryption keeps your data safe 24/7.
            </p>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-4 animated fadeInUp" style="animation-delay: 0.5s">
        <q-card class="bg-glass text-white q-pa-sm height-full feature-card">
          <q-card-section>
            <div class="row items-center q-mb-md">
              <q-icon name="cloud_sync" color="blue-4" size="md" class="q-mr-sm" />
              <div class="text-h6 text-weight-bold">Cloud Sync</div>
            </div>
            <p class="text-grey-5 text-caption">
              Access your data from any device, anywhere in the world.
            </p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
defineOptions({
  name: 'FeaturesPage',
})
</script>

<style scoped lang="scss">
.bg-glass {
  background: rgba(20, 20, 20, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
}

.feature-card {
  transition: 0.3s;
  &:hover {
    border-color: rgba(255, 46, 46, 0.3);
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.03);
  }
}

.icon-box {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bg-red-soft {
  background: rgba(255, 46, 46, 0.1);
}

.opacity-60 {
  opacity: 0.6;
}
</style>
