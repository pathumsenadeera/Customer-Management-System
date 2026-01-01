<template>
  <q-layout view="hHh lpR fFf" class="bg-black text-white font-inter overflow-hidden">
    <!-- Navbar -->
    <q-header class="bg-black-transparent q-py-md trans-effect">
      <q-toolbar class="container">
        <q-btn flat no-caps dense class="q-mr-sm" to="/">
          <q-icon name="dashboard" class="q-mr-sm text-red-accent" size="28px" />
          <span class="text-h5 text-weight-bold text-white tracking-widest"
            >CMS<span class="text-red-accent">.PRO</span></span
          >
        </q-btn>

        <q-space />

        <!-- Desktop Navigation -->
        <div class="gt-xs row q-gutter-x-lg items-center">
          <q-btn
            flat
            no-caps
            label="Home"
            to="/"
            class="nav-btn"
            :class="{ 'active-nav': $route.path === '/' }"
          />
          <q-btn
            flat
            no-caps
            label="Features"
            to="/features"
            class="nav-btn"
            :class="{ 'active-nav': $route.path === '/features' }"
          />
          <q-btn
            flat
            no-caps
            label="Pricing"
            to="/pricing"
            class="nav-btn"
            :class="{ 'active-nav': $route.path === '/pricing' }"
          />
          <q-btn
            flat
            no-caps
            label="Dashboard"
            to="/customers"
            class="nav-btn"
            :class="{ 'active-nav': $route.path === '/customers' }"
          />
        </div>

        <q-space />

        <!-- Auth Buttons (Visible if not logged in - for demo we show buttons usually, but let's assume we want to show profile if "logged in" context, but for now just show buttons and profile side by side for easy nav) -->
        <div class="row items-center q-gutter-md q-mr-lg">
          <q-btn flat no-caps label="Log In" to="/login" class="text-white hover-red" />
          <q-btn
            no-caps
            label="Sign Up"
            to="/signup"
            color="red-accent"
            class="bg-red-accent shadow-red text-weight-bold"
            rounded
            unelevated
          />
        </div>

        <!-- User Profile -->
        <div class="row items-center">
          <q-btn round flat icon="notifications" class="q-mr-sm text-grey-4 hover-red">
            <q-badge color="red-accent" floating>4</q-badge>
          </q-btn>
          <q-btn flat round class="q-pa-none" to="/settings">
            <q-avatar size="40px" class="cursor-pointer shadow-red">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <q-tooltip class="bg-dark text-white">Settings</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition
          appear
          enter-active-class="animated fadeInUp"
          leave-active-class="animated fadeOut"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>

    <!-- Background Decor -->
    <div class="bg-glow"></div>
  </q-layout>
</template>

<script setup>
// No drawer logic needed anymore
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&display=swap');

:root {
  --primary-red: #ff2e2e;
  --dark-bg: #050505;
}

body {
  background-color: var(--dark-bg);
}

.font-inter {
  font-family: 'Outfit', sans-serif;
}

.text-red-accent {
  color: var(--primary-red) !important;
}

.bg-red-accent {
  background-color: var(--primary-red) !important;
}

.bg-black-transparent {
  background: rgba(5, 5, 5, 0.8);
  backdrop-filter: blur(20px);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding-left: 24px;
  padding-right: 24px;
}

/* Navigation Buttons */
.nav-btn {
  font-size: 16px;
  font-weight: 400;
  color: #888;
  position: relative;
  transition: 0.3s;

  &::after {
    content: '';
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: var(--primary-red);
    transition: 0.3s;
  }

  &:hover,
  &.active-nav {
    color: white;
    &::after {
      width: 20px;
    }
  }
}

.hover-red:hover {
  color: var(--primary-red) !important;
}

/* Glowing Background Effect */
.bg-glow {
  position: fixed;
  top: -20%;
  right: -10%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(255, 46, 46, 0.15) 0%, rgba(0, 0, 0, 0) 70%);
  z-index: -1;
  pointer-events: none;
  animation: pulse 10s infinite alternate;
}

@keyframes pulse {
  from {
    opacity: 0.5;
    transform: scale(1);
  }
  to {
    opacity: 1;
    transform: scale(1.2);
  }
}

.shadow-red {
  box-shadow: 0 0 20px rgba(255, 46, 46, 0.3);
  border: 2px solid rgba(255, 46, 46, 0.5);
}

/* Animations */
.animated {
  animation-duration: 0.6s;
  animation-fill-mode: both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 30px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
