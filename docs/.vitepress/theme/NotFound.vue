<script setup>
import { ref } from 'vue'
import { VPButton } from 'vitepress/theme'

const messages = [
  "Looks like this page wandered off the path. Let's get you back on track.",
  "This page must be in beta. It's not here yet.",
  "We searched everywhere — even checked the server room.",
  "This page is taking a sabbatical. Try the homepage instead.",
  "404 — but hey, at least you found us.",
  "Oops. This page didn't make it past the planning phase.",
  "Even the best code has a missing page or two.",
  "This page is lost, but don't worry — the Good Shepherd finds everything.",
  "Ask and it shall be given... but not this page. Try the homepage.",
  "We walk by faith, not by broken links.",
  "This page must've been left behind at the upper room.",
  "Seek and you shall find — just not here. Try searching instead.",
  "Be still and know... this page doesn't exist.",
]

const message = ref(messages[Math.floor(Math.random() * messages.length)])
</script>

<template>
  <div style="text-align: center; padding: 80px 24px;">
    <h1 style="font-size: 4rem; margin-bottom: 0;">404</h1>
    <p style="font-size: 1.25rem; color: var(--vp-c-text-2); margin-top: 32px; margin-bottom: 32px;">{{ message }}</p>
    <VPButton tag="a" href="/" text="Back to Home" theme="brand" />
  </div>
</template>