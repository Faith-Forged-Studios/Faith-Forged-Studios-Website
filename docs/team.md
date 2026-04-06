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
    },
    {
        avatar: './kimberlee.jpeg',
        name: 'Kimberlee Brown',
        title: 'Client Liaison',
        desc: "As Client Liaison at Faith Forged Studios, Kimberlee pairs her extensive background in customer service with the deep empathy she gained caring for individuals with special needs. A mother of two boys, she is an adept multitasker. She also has a passion for research, happily diving down rabbit holes to solve complex problems for our clients.",
    },
    {
        avatar: './default.jpeg',
        name: 'Nathaniel Rios',
        title: 'TBD',
        desc: "Bio coming soon! We can't wait to officially introduce Nathaniel Rios to the Faith Forged Studios family.",
    }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Our Team</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="members" />
</VPTeamPage>
