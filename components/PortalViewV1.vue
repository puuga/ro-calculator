<script setup lang="ts">
const links = [
  { group: 'Battle Pass', title: 'Battle Pass Season 1', path: 'https://ro.gnjoy.in.th/limit-break-185/battle-pass.html', tags: [] },
  { group: 'Battle Pass', title: 'Battle Pass Season 2', path: 'https://ro.gnjoy.in.th/BattlePass-EP17-1/detail-patch.html', tags: [] },
  { group: 'Battle Pass', title: 'Battle Pass Season 3', path: 'https://ro.gnjoy.in.th/battlepass-ss3/', tags: [] },
  { group: 'Battle Pass', title: 'Battle Pass Season 4', path: 'https://ro.gnjoy.in.th/battle-pass-iv-edda-somatology-laboratory/', tags: [] },
  { group: 'Battle Pass', title: 'Battle Pass Season 5', path: 'https://ro.gnjoy.in.th/RO_Battle_Pass_ss5/', tags: [] },

  { group: 'Quest Board', title: 'New Eden Group Update Quest', path: 'https://ro.gnjoy.in.th/new-eden-group-update-quest/', tags: [] },

  { group: 'Episode 16.1', title: 'Episode 16.1', path: 'https://ro.gnjoy.in.th/ep-16-1-banquet-for-heroes/', tags: [] },
  { group: 'Episode 16.2', title: 'Episode 16.2', path: 'https://ro.gnjoy.in.th/ep16-2-terra-gloria-quest/', tags: [] },

  { group: 'Episode 17.1', title: 'Episode 17.1', path: 'https://ro.gnjoy.in.th/quest-episode-17-1/', tags: [] },
  { group: 'Episode 17.2', title: 'Episode 17.2 : Story Quest', path: 'https://ro.gnjoy.in.th/main-quest-17-2/', tags: [] },
  { group: 'Episode 17.2', title: 'Episode 17.2 : Daily Quest', path: 'https://ro.gnjoy.in.th/daily-quest-ep-17-2/', tags: [] },

  { group: 'Memorial Dungeon', title: 'New Thanatos Tower (Guide)', path: 'https://ro.gnjoy.in.th/new-thanatos-tower-guide/', tags: [] },
];

</script>

<template>
  <div>
    <div v-for="link in links" :key="link.title">
      <a :href="link.path" class="text-blue-600" target="_blank">
        {{ link.title }}
      </a>
    </div>
  </div>
</template>
