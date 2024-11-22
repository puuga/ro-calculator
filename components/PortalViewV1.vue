<script setup lang="ts">
type Link = { group: string; title: string; path: string; tags: string[] }

const links: Link[] = [
  { group: 'Battle Pass', title: 'Battle Pass Season 1', path: 'https://ro.gnjoy.in.th/limit-break-185/battle-pass.html', tags: ['BP'] },
  { group: 'Battle Pass', title: 'Battle Pass Season 2', path: 'https://ro.gnjoy.in.th/BattlePass-EP17-1/detail-patch.html', tags: ['BP'] },
  { group: 'Battle Pass', title: 'Battle Pass Season 3', path: 'https://ro.gnjoy.in.th/battlepass-ss3/', tags: ['BP'] },
  { group: 'Battle Pass', title: 'Battle Pass Season 4', path: 'https://ro.gnjoy.in.th/battle-pass-iv-edda-somatology-laboratory/', tags: ['BP'] },
  { group: 'Battle Pass', title: 'Battle Pass Season 5', path: 'https://ro.gnjoy.in.th/RO_Battle_Pass_ss5/', tags: ['BP'] },

  { group: 'Quest Board', title: 'New Eden Group Update Quest', path: 'https://ro.gnjoy.in.th/new-eden-group-update-quest/', tags: ['Quest'] },

  { group: 'System', title: 'Geffen Magic Tournament Enchant System Update!', path: 'https://ro.gnjoy.in.th/geffen-magic-tournament-enchant-system-update/', tags: ['Enchant', 'Geffen Magic Accessory', 'Geffen Magic Armor', 'Thanos Weapon'] },
  { group: 'System', title: 'Item Grade&Reform System', path: 'https://ro.gnjoy.in.th/item-gradereform/', tags: ['Item Grade', 'Reform System'] },
  
  { group: 'Episode 16.1', title: 'Episode 16.1', path: 'https://ro.gnjoy.in.th/ep-16-1-banquet-for-heroes/', tags: ['Story', 'Quest'] },
  { group: 'Episode 16.2', title: 'Episode 16.2', path: 'https://ro.gnjoy.in.th/ep16-2-terra-gloria-quest/', tags: ['Story', 'Quest'] },

  { group: 'Episode 17.1', title: 'Episode 17.1', path: 'https://ro.gnjoy.in.th/quest-episode-17-1/', tags: ['Story', 'Quest'] },
  { group: 'Episode 17.2', title: 'Episode 17.2 : Story Quest', path: 'https://ro.gnjoy.in.th/main-quest-17-2/', tags: ['Story', 'Quest'] },
  { group: 'Episode 17.2', title: 'Episode 17.2 : Daily Quest', path: 'https://ro.gnjoy.in.th/daily-quest-ep-17-2/', tags: ['Story', 'Quest'] },
  
  { group: 'Memorial Dungeon', title: 'Old Glast Heim Challenge', path: 'https://ro.gnjoy.in.th/old-glast-heim-challenge/', tags: ['Dungeon', 'Memorial Dungeon'] },
  { group: 'Memorial Dungeon', title: 'Old Glast Heim Challenge (Guide)', path: 'https://ro.gnjoy.in.th/guide-old-glastheim-challenge/', tags: ['Dungeon', 'Memorial Dungeon'] },
  { group: 'Memorial Dungeon', title: 'New Thanatos Tower (Guide)', path: 'https://ro.gnjoy.in.th/new-thanatos-tower-guide/', tags: ['Dungeon', 'Memorial Dungeon'] },

  { group: 'Dungeon', title: 'Laboratory Waste Disposal Plant 4F', path: 'https://ro.gnjoy.in.th/laboratory-waste-disposal-plant-4f/', tags: ['Dungeon'] },
  { group: 'Dungeon', title: 'Nifflheim Dungeon Floor 1-2', path: 'https://ro.gnjoy.in.th/nifflheim-dungeon-floor-1-2/', tags: ['Dungeon'] },
  { group: 'Dungeon', title: 'Abandoned Lab Amicitia Floor 1-2', path: 'https://ro.gnjoy.in.th/abandoned-lab-amicitia-floor-1-2/', tags: ['Dungeon'] },

  { group: '4th Classes', title: '4th Classes', path: 'https://ro.gnjoy.in.th/4th_classes/characters/index.html', tags: ['Story', 'Quest'] },
];

const groups: string[] = links.reduce((acc: string[], link) => {
  if (!acc.includes(link.group)) {
    acc.push(link.group);
  }
  return acc;
}, []);

function getLinksByGroup(group: string): Link[] {
  return links.filter((link) => link.group === group);
}

function getTagsText(tags: string[]): string {
  return tags.join(', ');
}
</script>

<template>
  <div>
    <template v-for="group in groups" :key="group">
      <div class="font-bold">
        {{ group }}
      </div>

      <template v-for="link in getLinksByGroup(group)" :key="link.title">
        <div class="m-1">
          <div class="flex gap-1 hover:bg-sky-100">
            <a :href="link.path" class="text-blue-600" target="_blank">
              {{ link.title }}
            </a>
            
            <div class="flex flex-wrap gap-1">
              <template v-for="tag in link.tags" :key="link.title">
                <div class="px-1.5 bg-slate-100 ring-1 ring-slate-200 rounded">{{ tag }}</div>
              </template>
            </div>
          </div>
        </div>
      </template>
      
      <hr class="m-2">
    </template>
  </div>
</template>

<style scoped>
</style>