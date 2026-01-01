<template>
  <q-page class="q-pa-none overflow-hidden">
    <!-- Hero Section -->
    <div class="hero-section text-center relative-position">
      <div class="container relative-position z-10 q-pt-xl q-pb-xl">
        <div class="q-mb-lg animated fadeInUp" style="animation-delay: 0.1s">
          <q-chip
            color="rgba(255,46,46,0.1)"
            text-color="red-accent"
            icon="star"
            label="New v2.0 Released"
          />
        </div>

        <h1
          class="hero-title text-white text-weight-bolder leading-tight animated fadeInUp"
          style="animation-delay: 0.2s"
        >
          Manage Your Customers <br />
          Like a <span class="text-red-accent text-glow">PRO</span>
        </h1>

        <p
          class="hero-subtitle text-grey-4 q-mx-auto animated fadeInUp"
          style="animation-delay: 0.3s"
        >
          The ultimate platform to track, analyze, and grow your client base. Powerful analytics
          wrapped in a stunning dark-mode interface.
        </p>

        <div
          class="row justify-center q-gutter-md q-mt-xl animated fadeInUp"
          style="animation-delay: 0.4s"
        >
          <q-btn
            label="Get Started Now"
            to="/signup"
            size="lg"
            color="red-accent"
            class="bg-red-accent shadow-red-lg text-weight-bold q-px-xl"
            rounded
            unelevated
            icon-right="arrow_forward"
          />
          <q-btn
            label="View Demo"
            to="/customers"
            size="lg"
            outline
            color="white"
            class="q-px-xl hover-glass"
            rounded
          />
        </div>

        <!-- Floating Mockup/Graphic -->
        <div class="q-mt-xl relative-position animated fadeInUp" style="animation-delay: 0.6s">
          <div class="mockup-glass bg-glass q-mx-auto">
            <!-- Mock Dashboard Content -->
            <div class="row items-center justify-between q-pa-md border-bottom">
              <div class="row items-center">
                <div class="circle red"></div>
                <div class="circle yellow q-ml-xs"></div>
                <div class="circle green q-ml-xs"></div>
              </div>
              <div class="text-grey-6 text-caption">cms-pro-dashboard.exe</div>
            </div>
            <!-- Tech Marquee Section -->
            <div class="marquee-container">
              <div class="marquee-content">
                <!-- Tech Images Set 1 -->
                <div class="tech-card">
                  <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80"
                  />
                </div>
                <div class="tech-card">
                  <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80"
                  />
                </div>
                <div class="tech-card">
                  <img
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=400&q=80"
                  />
                </div>
                <div class="tech-card">
                  <img
                    src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80"
                  />
                </div>

                <!-- Tech Images Set 2 (Duplicate for smooth loop) -->
                <div class="tech-card">
                  <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80"
                  />
                </div>
                <div class="tech-card">
                  <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80"
                  />
                </div>
                <div class="tech-card">
                  <img
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=400&q=80"
                  />
                </div>
                <div class="tech-card">
                  <img
                    src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80"
                  />
                </div>
              </div>
            </div>

            <!-- Overlay Gradient for Fade Effect -->
            <div class="marquee-overlay"></div>
          </div>
        </div>
      </div>

      <!-- Background Glows -->
      <div class="glow-bg-hero"></div>
    </div>

    <!-- Features Section -->
    <div class="features-section q-py-xl bg-black-lighter">
      <div class="container">
        <div class="text-center q-mb-xl">
          <h2 class="text-h3 text-white text-weight-bold">Why Choose Us?</h2>
          <p class="text-grey-5 text-h6">Everything you need to scale your business.</p>
        </div>

        <div class="row q-col-gutter-xl">
          <div class="col-12 col-md-4 text-center feature-item">
            <div class="icon-circle bg-red-soft q-mx-auto q-mb-md">
              <q-icon name="analytics" size="lg" color="red-accent" />
            </div>
            <h4 class="text-white text-h5 text-weight-bold">Advanced Analytics</h4>
            <p class="text-grey-5">
              Real-time data visualization to track your revenue and growth.
            </p>
          </div>
          <div class="col-12 col-md-4 text-center feature-item">
            <div class="icon-circle bg-red-soft q-mx-auto q-mb-md">
              <q-icon name="security" size="lg" color="red-accent" />
            </div>
            <h4 class="text-white text-h5 text-weight-bold">Bank-Grade Security</h4>
            <p class="text-grey-5">Your customer data is encrypted and secure with our platform.</p>
          </div>
          <div class="col-12 col-md-4 text-center feature-item">
            <div class="icon-circle bg-red-soft q-mx-auto q-mb-md">
              <q-icon name="speed" size="lg" color="red-accent" />
            </div>
            <h4 class="text-white text-h5 text-weight-bold">Lightning Fast</h4>
            <p class="text-grey-5">Optimized for performance with a modern tech stack.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="q-py-xl text-white border-top">
      <div class="container row">
        <div class="col-12 col-md-6">
          <div class="text-h5 text-weight-bold q-mb-sm">
            CMS<span class="text-red-accent">.PRO</span>
          </div>
          <p class="text-grey-6" style="max-width: 300px">
            The best way to manage your customers and grow your business.
          </p>
        </div>
        <div class="col-12 col-md-6 row justify-end q-gutter-x-xl">
          <div class="column q-gutter-y-sm">
            <div class="text-white text-weight-bold q-mb-sm">Product</div>
            <a href="#" class="text-grey-5 no-decor">Features</a>
            <a href="#" class="text-grey-5 no-decor">Pricing</a>
            <a href="#" class="text-grey-5 no-decor">API</a>
          </div>
          <div class="column q-gutter-y-sm">
            <div class="text-white text-weight-bold q-mb-sm">Company</div>
            <a href="#" class="text-grey-5 no-decor">About</a>
            <a href="#" class="text-grey-5 no-decor">Blog</a>
            <a href="#" class="text-grey-5 no-decor">Contact</a>
          </div>
        </div>
      </div>
      <div class="container text-center q-mt-xl text-grey-7 text-caption">
        © 2026 CMS Pro. All rights reserved.
      </div>
    </footer>
  </q-page>
</template>

<script setup>
defineOptions({
  name: 'IndexPage',
})
</script>

<style scoped lang="scss">
.marquee-container {
  overflow: hidden;
  position: relative;
  height: 350px;
  display: flex;
  align-items: center;
}

.marquee-content {
  display: flex;
  gap: 20px;
  animation: scroll 20s linear infinite;
}

.tech-card {
  min-width: 250px;
  height: 280px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(255, 46, 46, 0.2);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
    transition: 0.3s;
  }

  &:hover img {
    opacity: 1;
    transform: scale(1.05);
  }
}

.marquee-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, #050505 0%, transparent 15%, transparent 85%, #050505 100%);
  pointer-events: none;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 4 - 80px));
  } /* Width * 4 + Gap * 4 */
}

.hero-title {
  font-size: 4.5rem;
  line-height: 1.1;
  letter-spacing: -1px;
}

.hero-subtitle {
  font-size: 1.25rem;
  max-width: 600px;
}

.text-glow {
  text-shadow: 0 0 30px rgba(255, 46, 46, 0.5);
}

.shadow-red-lg {
  box-shadow: 0 10px 40px rgba(255, 46, 46, 0.4);
  transition: 0.3s;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 50px rgba(255, 46, 46, 0.6);
  }
}

.hover-glass:hover {
  background: rgba(255, 255, 255, 0.1);
}

.mockup-glass {
  width: 80%;
  height: 400px;
  border-radius: 20px 20px 0 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  transform: perspective(1000px) rotateX(20deg) scale(0.9);
  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.5);
  margin-bottom: -100px;
  mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
}

.mock-box {
  height: 150px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
}

.circle {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.red {
  background: #ff5f56;
}
.yellow {
  background: #ffbd2e;
}
.green {
  background: #27c93f;
}
.border-bottom {
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.glow-bg-hero {
  position: absolute;
  top: -30%;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 80%;
  background: radial-gradient(circle, rgba(255, 46, 46, 0.15) 0%, rgba(0, 0, 0, 0) 60%);
  pointer-events: none;
  z-index: 0;
}

.bg-black-lighter {
  background: #0a0a0a;
}

.icon-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 46, 46, 0.1);
}

.feature-item {
  transition: 0.3s;
  &:hover {
    transform: translateY(-10px);
  }
}

.no-decor {
  text-decoration: none;
  transition: 0.2s;
  &:hover {
    color: white !important;
  }
}
.border-top {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

@media (max-width: 600px) {
  .hero-title {
    font-size: 3rem;
  }
}
</style>
