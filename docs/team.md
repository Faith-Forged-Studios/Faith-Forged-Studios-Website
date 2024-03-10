---
layout: page
title: Team
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const developers = [
    {
        // avatar: 'https://avatars.githubusercontent.com/u/47730893?v=4',
        avatar: './df_avatar.png',
        name: 'Davidalen Fountain',
        title: 'Founder / Lead Developer',
        desc: "Davidalen has spent his entire career in the IT Field working in the healthcare industury. In 2022 he started leading a small group for middle school students. This project started as a way to provide the younger generation a positive way to use their computers and phones.",
        links: [
            { icon: 'github', link: 'https://github.com/Faith-Forged-Studios' },
            { icon: 'linkedin', link: 'https://www.linkedin.com/in/davfount/'}
        ]
    }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Our Team</template>
    <template #lead></template>
  </VPTeamPageTitle>
  <!-- <VPTeamPageSection>
    <template #title>Developers</template>
    <template #lead></template>
    <template #members> -->
     <VPTeamMembers size="medium" :members="developers" />
    <!-- </template>
  </VPTeamPageSection> -->
</VPTeamPage>