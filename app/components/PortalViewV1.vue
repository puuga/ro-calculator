<script setup lang="ts">
type Link = { group: string; title: string; path: string; tags: string[] }

const links: Link[] = [
  { group: 'Battle Pass', title: 'Battle Pass Season 1', path: 'https://ro.gnjoy.in.th/limit-break-185/battle-pass.html', tags: ['BP'] },
  { group: 'Battle Pass', title: 'Battle Pass Season 2', path: 'https://ro.gnjoy.in.th/BattlePass-EP17-1/detail-patch.html', tags: ['BP'] },
  { group: 'Battle Pass', title: 'Battle Pass Season 3', path: 'https://ro.gnjoy.in.th/battlepass-ss3/', tags: ['BP'] },
  { group: 'Battle Pass', title: 'Battle Pass Season 4', path: 'https://ro.gnjoy.in.th/battle-pass-iv-edda-somatology-laboratory/', tags: ['BP'] },
  { group: 'Battle Pass', title: 'Battle Pass Season 5', path: 'https://ro.gnjoy.in.th/RO_Battle_Pass_ss5/', tags: ['BP'] },
  { group: 'Battle Pass', title: 'Battle Pass Season 6', path: 'https://ro.gnjoy.in.th/battle-pass-season-vi-welcome-4th-world/', tags: ['BP'] },
  { group: 'Battle Pass', title: 'Battle Pass Season 7', path: 'https://ro.gnjoy.in.th/battlepass_7/', tags: ['BP'] },
  
  { group: 'Mystical Pass', title: 'Mystical Pass 1', path: 'https://ro.gnjoy.in.th/mystical-pass-constellation-tower-main/', tags: ['BP', 'MP'] },
  { group: 'Mystical Pass', title: 'Mystical Pass 2', path: 'https://ro.gnjoy.in.th/mystical-pass-land-of-snow-flowers-main/', tags: ['BP', 'MP'] },


  { group: 'Long Event', title: 'STARHALL MISSION', path: 'https://ro.gnjoy.in.th/ragnarok-starhall-mission/', tags: [] },

  { group: 'Quest Board', title: 'New Eden Group Update Quest', path: 'https://ro.gnjoy.in.th/new-eden-group-update-quest/', tags: ['Quest'] },

  { group: 'System', title: 'Geffen Magic Tournament Enchant System Update!', path: 'https://ro.gnjoy.in.th/geffen-magic-tournament-enchant-system-update/', tags: ['Enchant', 'Geffen Magic Accessory', 'Geffen Magic Armor', 'Thanos Weapon'] },
  { group: 'System', title: 'Item Grade&Reform System', path: 'https://ro.gnjoy.in.th/item-gradereform/', tags: ['Item Grade', 'Reform System'] },
  
  { group: 'Episode 19', title: 'Episode 19 : Issgard, Land of Snow Flowers', path: 'https://ro.gnjoy.in.th/episode-19-issgard-land-of-snow-flowers-main/', tags: ['Quest', 'Guide'] },
  { group: 'Episode 19', title: 'Episode 19 : Issgard, Land of Snow Flowers', path: 'https://ro.gnjoy.in.th/event/ep19/index.html', tags: [] },
  { group: 'Episode 18', title: 'Episode 18 : Quest Guide', path: 'https://ro.gnjoy.in.th/episode-18-quest-guide/', tags: ['Quest', 'Guide'] },
  { group: 'Episode 18', title: 'Episode 18', path: 'https://ro.gnjoy.in.th/episode18DirectionPrayer/Patch.html', tags: ['Story', 'Quest'] },
  { group: 'Episode 17.2', title: 'Episode 17.2 : Daily Quest', path: 'https://ro.gnjoy.in.th/daily-quest-ep-17-2/', tags: ['Story', 'Quest'] },
  { group: 'Episode 17.2', title: 'Episode 17.2 : Story Quest', path: 'https://ro.gnjoy.in.th/main-quest-17-2/', tags: ['Story', 'Quest'] },
  { group: 'Episode 17.1', title: 'Episode 17.1', path: 'https://ro.gnjoy.in.th/quest-episode-17-1/', tags: ['Story', 'Quest'] },
  { group: 'Episode 16.2', title: 'Episode 16.2', path: 'https://ro.gnjoy.in.th/ep16-2-terra-gloria-quest/', tags: ['Story', 'Quest'] },
  { group: 'Episode 16.1', title: 'Episode 16.1', path: 'https://ro.gnjoy.in.th/ep-16-1-banquet-for-heroes/', tags: ['Story', 'Quest'] },
  
  { group: 'Memorial Dungeon', title: 'Constellation Tower Guide', path: 'https://ro.gnjoy.in.th/constellation-tower-guide/', tags: ['Dungeon', 'Guide'] },
  { group: 'Memorial Dungeon', title: 'Constellation Tower', path: 'https://ro.gnjoy.in.th/constellation-tower/', tags: ['Dungeon'] },
  { group: 'Memorial Dungeon', title: 'Villa of Deception (Guide)', path: 'https://ro.gnjoy.in.th/episode-18-villa-of-deception', tags: ['Dungeon', 'Guide'] },
  { group: 'Memorial Dungeon', title: 'Airship Crash (Guide)', path: 'https://ro.gnjoy.in.th/airship-crash-guide', tags: ['Dungeon', 'Guide'] },
  { group: 'Memorial Dungeon', title: 'Airship Crash', path: 'https://ro.gnjoy.in.th/episode18DirectionPrayer/AirshipCrash.html', tags: ['Dungeon'] },
  { group: 'Memorial Dungeon', title: 'Tomb of Remorse (Guide)', path: 'https://ro.gnjoy.in.th/tomb-of-remorse-guide', tags: ['Dungeon', 'Guide'] },
  { group: 'Memorial Dungeon', title: 'Tomb of Remorse', path: 'https://ro.gnjoy.in.th/episode18DirectionPrayer/TombofRemorse.html', tags: ['Dungeon'] },
  { group: 'Memorial Dungeon', title: 'Geffen Night Arena (Guide)', path: 'https://ro.gnjoy.in.th/geffen-night-arena-guide', tags: ['Dungeon', 'Guide'] },
  { group: 'Memorial Dungeon', title: 'Geffen Night Arena Dungeon', path: 'https://ro.gnjoy.in.th/episode18DirectionPrayer/GeffenNightArenaDungeon.html', tags: ['Dungeon'] },
  { group: 'Memorial Dungeon', title: 'Old Glast Heim Challenge', path: 'https://ro.gnjoy.in.th/old-glast-heim-challenge', tags: ['Dungeon', 'Memorial Dungeon'] },
  { group: 'Memorial Dungeon', title: 'Old Glast Heim Challenge (Guide)', path: 'https://ro.gnjoy.in.th/guide-old-glastheim-challenge', tags: ['Dungeon', 'Memorial Dungeon', 'Guide'] },
  { group: 'Memorial Dungeon', title: 'New Thanatos Tower (Guide)', path: 'https://ro.gnjoy.in.th/new-thanatos-tower-guide', tags: ['Dungeon', 'Memorial Dungeon', 'Guide'] },

  { group: 'Dungeon', title: 'Clock Tower Unknown Basement', path: 'https://ro.gnjoy.in.th/clock-tower-unknown-basement/', tags: ['Dungeon'] },
  { group: 'Dungeon', title: 'Laboratory Waste Disposal Plant 4F', path: 'https://ro.gnjoy.in.th/laboratory-waste-disposal-plant-4f/', tags: ['Dungeon'] },
  { group: 'Dungeon', title: 'Nifflheim Dungeon Floor 1-2', path: 'https://ro.gnjoy.in.th/nifflheim-dungeon-floor-1-2/', tags: ['Dungeon'] },
  { group: 'Dungeon', title: 'Abandoned Lab Amicitia Floor 1-2', path: 'https://ro.gnjoy.in.th/abandoned-lab-amicitia-floor-1-2/', tags: ['Dungeon'] },
  { group: 'Dungeon', title: 'Abyss Lake Dungeon 4F', path: 'https://ro.gnjoy.in.th/abyss-lake-dungeon-4f/', tags: ['Dungeon', 'LV190+'] },
  { group: 'Dungeon', title: 'Ancient Odin\'s Temple (Odin\'s Temple 4F)', path: 'https://ro.gnjoy.in.th/ancient-odins-temple-4f/', tags: ['Dungeon', 'LV180+'] },
  { group: 'Dungeon', title: 'Einbech Mine Dungeon 3F', path: 'https://ro.gnjoy.in.th/einbech-mine-dungeon-3f/', tags: ['Dungeon', 'LV180+'] },
  { group: 'Dungeon', title: 'Abyss Glastheim 1st Floor', path: 'https://ro.gnjoy.in.th/abyss-glastheim-1st-floor/', tags: ['Dungeon', 'LV175+'] },
  { group: 'Dungeon', title: 'Magma Dungeon 3rd Floor : Nogg Road', path: 'https://ro.gnjoy.in.th/magma-dungeon-3rd-floor-nogg-road/', tags: ['Dungeon', 'LV175+'] },

  { group: '4th Classes', title: '4th Classes', path: 'https://ro.gnjoy.in.th/4th_classes/characters/index.html', tags: ['Story', 'Quest'] },
  
  { group: '2nd High Extended Classes', title: '2nd High Extended Classes', path: 'https://ro.gnjoy.in.th/episode18DirectionPrayer/', tags: ['Story', 'Quest'] },
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
          <div class="flex gap-1 hover:bg-sky-100 dark:hover:bg-sky-900">
            <a :href="link.path" class="text-blue-600 dark:text-blue-400" target="_blank">
              {{ link.title }}
            </a>
            
            <div class="flex flex-wrap gap-1">
              <template v-for="tag in link.tags" :key="link.title">
                <div class="c-badge">{{ tag }}</div>
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