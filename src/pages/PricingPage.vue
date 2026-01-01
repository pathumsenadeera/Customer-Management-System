<template>
  <q-page class="container q-py-xl">
    <div class="text-center q-mb-xl animated fadeInUp">
      <div class="text-red-accent text-weight-bold tracking-widest text-uppercase q-mb-sm">
        Pricing
      </div>
      <h1 class="text-h3 text-white text-weight-bolder">Choose Your Plan</h1>
      <p class="text-grey-5 text-h6">Simple, transparent pricing for everyone.</p>
    </div>

    <div class="row q-col-gutter-lg justify-center">
      <!-- Starter Plan -->
      <div class="col-12 col-md-4 animated fadeInUp" style="animation-delay: 0.1s">
        <q-card class="bg-glass text-white pricing-card q-pa-md column items-center">
          <q-card-section class="text-center">
            <div class="text-h5 text-weight-bold">Starter</div>
            <div class="text-grey-5 q-my-sm">Perfect for freelancers</div>
            <div class="text-h3 text-weight-bolder q-mt-md">
              $0<span class="text-h6 text-grey-6">/mo</span>
            </div>
          </q-card-section>

          <q-list class="q-my-md full-width">
            <q-item dense>
              <q-item-section avatar><q-icon name="check" color="green" /></q-item-section>
              <q-item-section>Up to 100 Customers</q-item-section>
            </q-item>
            <q-item dense>
              <q-item-section avatar><q-icon name="check" color="green" /></q-item-section>
              <q-item-section>Basic Analytics</q-item-section>
            </q-item>
            <q-item dense>
              <q-item-section avatar><q-icon name="close" color="grey-7" /></q-item-section>
              <q-item-section class="text-grey-7">Export Reports</q-item-section>
            </q-item>
          </q-list>

          <q-space />

          <q-card-actions class="full-width">
            <q-btn
              outline
              color="white"
              label="Get Started"
              class="full-width q-py-sm rounded-btn"
              to="/signup"
            />
          </q-card-actions>
        </q-card>
      </div>

      <!-- Pro Plan -->
      <div class="col-12 col-md-4 animated fadeInUp" style="animation-delay: 0.2s">
        <q-card
          class="bg-glass text-white pricing-card border-red q-pa-md column items-center relative-position"
        >
          <div class="popular-badge">MOST POPULAR</div>
          <q-card-section class="text-center">
            <div class="text-h5 text-weight-bold text-red-accent">Pro</div>
            <div class="text-grey-5 q-my-sm">For growing businesses</div>
            <div class="text-h3 text-weight-bolder q-mt-md">
              $29<span class="text-h6 text-grey-6">/mo</span>
            </div>
          </q-card-section>

          <q-list class="q-my-md full-width">
            <q-item dense>
              <q-item-section avatar><q-icon name="check" color="red-accent" /></q-item-section>
              <q-item-section>Unlimited Customers</q-item-section>
            </q-item>
            <q-item dense>
              <q-item-section avatar><q-icon name="check" color="red-accent" /></q-item-section>
              <q-item-section>Advanced Analytics</q-item-section>
            </q-item>
            <q-item dense>
              <q-item-section avatar><q-icon name="check" color="red-accent" /></q-item-section>
              <q-item-section>Export Reports</q-item-section>
            </q-item>
            <q-item dense>
              <q-item-section avatar><q-icon name="check" color="red-accent" /></q-item-section>
              <q-item-section>Priority Support</q-item-section>
            </q-item>
          </q-list>

          <q-space />

          <q-card-actions class="full-width">
            <q-btn
              color="red-accent"
              label="Start Free Trial"
              class="full-width q-py-sm rounded-btn shadow-red"
              to="/signup"
            />
          </q-card-actions>
        </q-card>
      </div>

      <!-- Enterprise Plan -->
      <div class="col-12 col-md-4 animated fadeInUp" style="animation-delay: 0.3s">
        <q-card class="bg-glass text-white pricing-card q-pa-md column items-center">
          <q-card-section class="text-center">
            <div class="text-h5 text-weight-bold">Enterprise</div>
            <div class="text-grey-5 q-my-sm">For large organizations</div>
            <div class="text-h3 text-weight-bolder q-mt-md">
              $99<span class="text-h6 text-grey-6">/mo</span>
            </div>
          </q-card-section>

          <q-list class="q-my-md full-width">
            <q-item dense>
              <q-item-section avatar><q-icon name="check" color="green" /></q-item-section>
              <q-item-section>Everything in Pro</q-item-section>
            </q-item>
            <q-item dense>
              <q-item-section avatar><q-icon name="check" color="green" /></q-item-section>
              <q-item-section>Dedicated Manager</q-item-section>
            </q-item>
            <q-item dense>
              <q-item-section avatar><q-icon name="check" color="green" /></q-item-section>
              <q-item-section>Custom API Access</q-item-section>
            </q-item>
          </q-list>

          <q-space />

          <q-card-actions class="full-width">
            <q-btn
              outline
              color="white"
              label="Contact Sales"
              class="full-width q-py-sm rounded-btn"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
defineOptions({
  name: 'PricingPage',
})
</script>

<style scoped lang="scss">
.bg-glass {
  background: rgba(20, 20, 20, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
}

.pricing-card {
  transition: 0.3s;
  height: 100%;
  &:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.03);
  }
}

.border-red {
  border: 1px solid rgba(255, 46, 46, 0.5);
  box-shadow: 0 0 30px rgba(255, 46, 46, 0.1);
}

.popular-badge {
  position: absolute;
  top: -12px;
  background: #ff2e2e;
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: bold;
  letter-spacing: 0.05em;
  box-shadow: 0 4px 10px rgba(255, 46, 46, 0.4);
}

.rounded-btn {
  border-radius: 8px;
}

.shadow-red {
  box-shadow: 0 4px 15px rgba(255, 46, 46, 0.3);
}
</style>
