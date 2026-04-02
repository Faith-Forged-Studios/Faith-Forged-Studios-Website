---
layout: page
title: Team
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
} from 'vitepress/theme'

const members = [
    {
        avatar: './df_avatar.png',
        name: 'Davidalen Fountain',
        title: 'Founder / Lead Developer',
        desc: "Davidalen has spent his career at the intersection of IT and healthcare, solving real problems for real people. In 2022, he turned that same passion toward the next generation, leading a small group for middle school students. What started as a side project became a calling — and the foundation for everything Faith Forged Studios creates.",
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
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="members" />
</VPTeamPage>