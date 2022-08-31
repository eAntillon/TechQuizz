<template>
  <main
    class="flex flex-wrap align-items-center justify-content-center h-screen bg-yellow-200 max-w-full overflow-hidden"
  >
    <div class="wrapper"></div>

    <Nuxt class="z-3" />
    <p class="absolute bottom-0 mb-3 author">
      Created by <a href="https://github.com/eAntillon" target="_blank" rel="noopener noreferrer">Erick Antillon</a>
    </p>
  </main>
</template>

<style>
.wrapper {
  opacity: 0.14;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fffffe;
  background-image: url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm33.414-6l5.95-5.95L45.95.636 40 6.586 34.05.636 32.636 2.05 38.586 8l-5.95 5.95 1.414 1.414L40 9.414l5.95 5.95 1.414-1.414L41.414 8zM40 48c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM9.414 40l5.95-5.95-1.414-1.414L8 38.586l-5.95-5.95L.636 34.05 6.586 40l-5.95 5.95 1.414 1.414L8 41.414l5.95 5.95 1.414-1.414L9.414 40z' fill='%232b2c34' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E");
  animation: scroll 100s linear infinite;
  background-size: 8.2rem;
  z-index: 1;
}
@keyframes scroll {
  100% {
    background-position: 0px -3000px;
  }
}

@media (prefers-reduced-motion) {
  .wrapper {
    animation: scroll 200s linear infinite;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.author{
  z-index: 50;
}
</style>
