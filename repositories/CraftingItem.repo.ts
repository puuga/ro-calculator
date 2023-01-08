export type Monster = {
  name: string
  desc_url?: string
  image_url?: string
}

export type Recipe = {
  item: string
  item_desc_url?: string
  amount: number
  item_image_url?: string
  drop_from?: Monster[]
}

export type Item = {
  item: string
  item_image_url?: string
  item_desc_urls: string[]
  recipes: Recipe[]
}

const zelumium100: Recipe = { item: 'Zelumium', amount: 100 }
const zelumium60: Recipe = { item: 'Zelumium', amount: 60 }
const zelumium30: Recipe = { item: 'Zelumium', amount: 30 }
const zelumium25: Recipe = { item: 'Zelumium', amount: 25 }
const zelumium15: Recipe = { item: 'Zelumium', amount: 15 }
const zelumium10: Recipe = { item: 'Zelumium', amount: 10 }

const shadowdecon100: Recipe = { item: 'Shadowdecon', amount: 100, }
const shadowdecon60: Recipe = { item: 'Shadowdecon', amount: 60, }
const shadowdecon30: Recipe = { item: 'Shadowdecon', amount: 30, }
const shadowdecon25: Recipe = { item: 'Shadowdecon', amount: 25, }
const shadowdecon15: Recipe = { item: 'Shadowdecon', amount: 15, }
const shadowdecon10: Recipe = { item: 'Shadowdecon', amount: 10, }

const recipeLokiWhispers200: Recipe = { 
  item: 'Loki\'s Whispers', 
  item_desc_url: 'https://www.divine-pride.net/database/item/7019/lokis-whispers',
  amount: 200, 
  drop_from: [
    { 
      name: 'Loli Ruri',
      desc_url: 'https://www.divine-pride.net/database/monster/1505/loli-ruri',
    },
    { 
      name: 'Swift Loli Ruri',
      desc_url: 'https://www.divine-pride.net/database/monster/2774/swift-loli-ruri',
    },
    { 
      name: 'Mysteltainn',
      desc_url: 'https://www.divine-pride.net/database/monster/1203/mysteltainn',
    },
  ],
}

const recipePocketWatch300: Recipe = { 
  item: 'Pocket Watch', 
  item_desc_url: 'https://www.divine-pride.net/database/item/7513/pocket-watch',
  amount: 300, 
  drop_from: [
    { 
      name: 'Kiel D-01',
      desc_url: 'https://www.divine-pride.net/database/monster/1734/kiel-d-01',
    }
  ],
}

const recipeGemStone300: Recipe = { 
  item: 'Gem Stone', 
  amount: 300, 
  drop_from: [
    { 
      name: 'Tao Gunka' 
    }
  ],
}

const recipeDarkredScalePiece300: Recipe = { 
  item: 'Darkred Scale Piece', 
  amount: 300, 
  drop_from: [
    { 
      name: 'Nidhoggur\'s Shadow',
    }
  ],
}

const recipeIceScale300: Recipe = { 
  item: 'Ice Scale', 
  item_desc_url: 'https://www.divine-pride.net/database/item/7562/ice-scale',
  amount: 300, 
  drop_from: [
    { 
      name: 'Ktullanux',
      desc_url: 'https://www.divine-pride.net/database/monster/1779/ktullanux',
    }
  ],
}

const recipeFangOfGarm480: Recipe = { 
  item: 'Fang of Garm', 
  amount: 480, 
  drop_from: [
    { 
      name: 'Garm',
    }
  ],
}

const recipeFragmentOfRossataStone300: Recipe = { 
  item: 'Fragment of Rossata Stone', 
  amount: 300, 
  drop_from: [
    { 
      name: 'Amon Ra',
    }
  ],
}

const recipePieceOfShield300: Recipe = { 
  item: 'Piece of Shield', 
  item_desc_url: 'https://www.divine-pride.net/database/item/7108/piece-of-shield',
  amount: 300, 
  drop_from: [
    { 
      name: 'Lord of the Dead',
      desc_url: 'https://www.divine-pride.net/database/monster/1373/lord-of-the-dead',
    }
  ],
}

const recipeBrokenCrown200: Recipe = { 
  item: 'Broken Crown', 
  amount: 200, 
  drop_from: [
    { 
      name: 'Beelzebub',
    }
  ],
}
const recipeBrokenCrown300: Recipe = { 
  item: 'Broken Crown', 
  amount: 300, 
  drop_from: [
    { 
      name: 'Beelzebub',
    }
  ],
}

const recipeYoungTwig300: Recipe = { 
  item: 'Young Twig', 
  amount: 300, 
  drop_from: [
    { 
      name: 'Mistress',
    }
  ],
}

const recipeMasqueOfTutankhamen300 = { 
  item: 'Masque of Tutankhamen', 
  amount: 300, 
  drop_from: [
    { 
      name: 'Pharaoh',
    }
  ],
}

const recipeKnottedLetter300: Recipe = { 
  item: 'Knotted Letter', 
  amount: 300,  
  drop_from: [
    { 
      name: 'Incantation Samurai',
    }
  ],
}
const recipeKnottedLetter600: Recipe = { 
  item: 'Knotted Letter', 
  amount: 600, 
  drop_from: [
    { 
      name: 'Incantation Samurai',
    }
  ],
}

const recipeBaGua300: Recipe = { 
  item: 'Ba Gua', 
  amount: 300, 
  drop_from: [
    { 
      name: 'Evil Snake Lord',
    }
  ],
}

const recipeScaleOfRedDragon300: Recipe = { 
  item: 'Scale Of Red Dragon', 
  amount: 300, 
  drop_from: [
    { 
      name: 'Detardeurus' ,
    }
  ],
}

const recipeValhalaFlower300: Recipe = { 
  item: 'Valhala\'s Flower', 
  amount: 300, 
  drop_from: [
    { 
      name: 'Valkyrie Randgris' ,
    }
  ],
}
const recipeValhalaFlower600: Recipe = { 
  item: 'Valhala\'s Flower', 
  amount: 600, 
  drop_from: [
    { 
      name: 'Valkyrie Randgris' ,
    }
  ],
}

const recipeMotherNightmare300: Recipe = { 
  item: 'Mother\'s Nightmare', 
  amount: 300, 
  drop_from: [
    { 
      name: 'Maya' ,
    }
  ],
}
const recipeMotherNightmare600: Recipe = { 
  item: 'Mother\'s Nightmare', 
  amount: 600, 
  drop_from: [
    { 
      name: 'Maya' ,
    }
  ],
}

const recipeOrcWarlordToken300: Recipe = { 
  item: 'Orc Warlord Token', 
  amount: 300, 
  drop_from: [
    { 
      name: 'Orc Hero',
    }
  ],
}
const recipeOrcWarlordToken600: Recipe = { 
  item: 'Orc Warlord Token', 
  amount: 600, 
  drop_from: [
    { 
      name: 'Orc Hero',
    }
  ],
}

const recipePieceOfBoneArmor300: Recipe = { 
  item: 'Piece Of Bone Armor', 
  amount: 300, 
  drop_from: [
    { 
      name: 'Thanatos Phantom',
    }
  ],
}
const recipePieceOfBoneArmor600: Recipe = { 
  item: 'Piece Of Bone Armor', 
  amount: 600, 
  drop_from: [
    { 
      name: 'Thanatos Phantom',
    }
  ],
}

export const items: Item[] = [
  // [Not for Sale] Raven Of Tomb Combination
  {
    item: '[Not for Sale] Raven Of Tomb Combination',
    item_image_url: '/images/crafting-items/Raven Of Tomb.png',
    item_desc_urls: ['https://www.divine-pride.net/database/item/410136/raven-of-tomb'],
    recipes: [
      zelumium100,
      shadowdecon100,
      recipePieceOfShield300,
    ]
  },
  // [Not for Sale] The Spirit Of World Combination
  {
    item: '[Not for Sale] The Spirit Of World Combination',
    item_image_url: '/images/crafting-items/The Spirit Of World.png',
    item_desc_urls: ['https://www.divine-pride.net/database/item/420134/the-spirit-of-world'],
    recipes: [
      zelumium100,
      shadowdecon100,
      recipeYoungTwig300,
    ]
  },
  // [Not for Sale] Flutter Butterfly Combination
  {
    item: '[Not for Sale] Flutter Butterfly Combination',
    item_image_url: '/images/crafting-items/Flutter Butterfly.png',
    item_desc_urls: ['https://www.divine-pride.net/database/item/420141/flutter-butterfly'],
    recipes: [
      zelumium100,
      shadowdecon100,
      recipeFragmentOfRossataStone300,
    ]
  },
  // [Not for Sale] Bastawtozaq Heart Combination
  {
    item: '[Not for Sale] Bastawtozaq Heart Combination',
    item_image_url: '/images/crafting-items/Bastawtozaq Heart.png',
    item_desc_urls: ['https://www.divine-pride.net/database/item/480182/bastawtozaq-heart-1'],
    recipes: [
      zelumium100,
      shadowdecon100,
      recipeBaGua300,
    ]
  },
  // [Not for Sale] Fairy Leaf Powder Combination
  {
    item: '[Not for Sale] Fairy Leaf Powder Combination',
    item_image_url: '/images/crafting-items/Fairy Leaf Powder.png',
    item_desc_urls: ['https://www.divine-pride.net/database/item/28438/fairy-leaf-powder-1'],
    recipes: [
      zelumium100,
      shadowdecon100,
      recipeValhalaFlower300,
    ]
  },

  // [Not for Sale] Hunting Shoes Combination
  {
    item: '[Not for Sale] Hunting Shoes Combination',
    item_desc_urls: ['https://www.divine-pride.net/database/item/470123/hunting-shoes-1'],
    recipes: [
      zelumium60,
      shadowdecon60,
      recipeFragmentOfRossataStone300,
    ]
  },
  // [Not for Sale] Vassalage Ring Combination
  {
    item: '[Not for Sale] Hunting Shoes Combination',
    item_desc_urls: ['https://www.divine-pride.net/database/item/490246/vassalage-ring-1'],
    recipes: [
      zelumium60,
      shadowdecon60,
      recipeBaGua300,
    ]
  },
  // [Not for Sale] Doram Shield Combination
  {
    item: '[Not for Sale] Doram Shield Combination',
    item_desc_urls: ['https://www.divine-pride.net/database/item/28948/doram-shield-1'],
    recipes: [
      zelumium60,
      shadowdecon60,
      recipeDarkredScalePiece300,
    ]
  },
  // [Not for Sale] Inception Ring Combination
  {
    item: '[Not for Sale] Inception Ring Combination',
    item_desc_urls: ['https://www.divine-pride.net/database/item/490265/inception-ring-1'],
    recipes: [
      zelumium60,
      shadowdecon60,
      recipeIceScale300,
    ]
  },
  // [Not for Sale] Fallen Warrior's Shield Combination
  {
    item: '[Not for Sale] Fallen Warrior\'s Shield Combination',
    item_desc_urls: ['https://www.divine-pride.net/database/item/28977/fallen-warriors-shield-1'],
    recipes: [
      zelumium60,
      shadowdecon60,
      recipeGemStone300,
    ]
  },
  // [Not for Sale] Ancient Hero Boots Combination
  {
    item: '[Not for Sale] Ancient Hero Boots Combination',
    item_desc_urls: ['https://www.divine-pride.net/database/item/22171/ancient-hero-boots-1'],
    recipes: [
      zelumium60,
      shadowdecon60,
      recipeMotherNightmare300,
    ]
  },
  // [Not for Sale] Keraunos Combination
  {
    item: '[Not for Sale] Keraunos Combination',
    item_desc_urls: ['https://www.divine-pride.net/database/item/28503/keraunos-1'],
    recipes: [
      zelumium60,
      shadowdecon60,
      recipePocketWatch300,
    ]
  },

  // [Not for Sale] Subject Cape Combination
  {
    item: '[Not for Sale] Subject Cape Combination',
    item_desc_urls: [
      'https://www.divine-pride.net/database/item/480234/not-for-sale-subject-cape-magic-1',
      'https://www.divine-pride.net/database/item/480173/not-for-sale-subject-cape-melee-1',
      'https://www.divine-pride.net/database/item/480214/not-for-sale-subject-cape-range-1',
    ],
    recipes: [
      zelumium60,
      shadowdecon60,
      recipeBrokenCrown200,
    ]
  },
  // [Not for Sale] Temporal Armor Combination
  {
    item: '[Not for Sale] Temporal Armor Combination',
    item_desc_urls: [
      'https://www.divine-pride.net/database/item/15278/soaring-physical-armor-1',
      'https://www.divine-pride.net/database/item/15279/robust-magical-armor-1',
      'https://www.divine-pride.net/database/item/15346/unexpected-fortune-armor-1',
      'https://www.divine-pride.net/database/item/15347/strong-healthy-armor-1',
      'https://www.divine-pride.net/database/item/15353/splendid-swift-armor-1',
      'https://www.divine-pride.net/database/item/15354/excellent-dexterous-armor-1',
    ],
    recipes: [
      zelumium60,
      shadowdecon60,
      recipeValhalaFlower300,
    ]
  },

  // [Not for Sale] Anti-Magic Manteau Combination
  {
    item: '[Not for Sale] Anti-Magic Manteau Combination',
    item_desc_urls: ['https://www.divine-pride.net/database/item/20944/anti-magic-manteau-1'],
    recipes: [
      zelumium30,
      shadowdecon30,
      recipeDarkredScalePiece300,
    ]
  },
  // [Not for Sale] Geffen Magic Muffler Combination
  {
    item: '[Not for Sale] Geffen Magic Muffler Combination',
    item_desc_urls: ['https://www.divine-pride.net/database/item/20943/geffen-magic-muffler-1'],
    recipes: [
      zelumium30,
      shadowdecon30,
      recipeIceScale300,
    ]
  },
  // [Not for Sale] Exotic Temporal Boots Combination
  {
    item: '[Not for Sale] Exotic Temporal Boots Combination',
    item_desc_urls: ['https://www.divine-pride.net/database/item/22202/exotic-temporal-boots-1'],
    recipes: [
      zelumium30,
      shadowdecon30,
      recipeFangOfGarm480,
    ]
  },

  // [Not for Sale] Ancient Hero Weapon Combination
  {
    item: '[Not for Sale] Ancient Hero Weapon Combination',
    item_desc_urls: [],
    recipes: [
      zelumium25,
      shadowdecon25,
      recipeLokiWhispers200,
    ]
  },
  
  // [Not for Sale] Giant Snake Breath Combination
  {
    item: '[Not for Sale] Giant Snake Breath Combination',
    item_desc_urls: ['https://www.divine-pride.net/database/item/19268/giant-snake-breath'],
    recipes: [
      zelumium15,
      shadowdecon15,
      recipeMotherNightmare600,
    ]
  },
  // [Not for Sale] Poring Sunglasses K+ Combination
  {
    item: '[Not for Sale] Poring Sunglasses K+ Combination',
    item_desc_urls: ['https://www.divine-pride.net/database/item/19118/poring-sunglasses-k-1'],
    recipes: [
      zelumium15,
      shadowdecon15,
      recipeKnottedLetter600,
    ]
  },
  // [Not for Sale] Smoky Transform Hat Leaf Combination
  {
    item: '[Not for Sale] Smoky Transform Hat Leaf Combination',
    item_desc_urls: ['https://www.divine-pride.net/database/item/400318/not-for-sale-smoky-transformhat-leaf'],
    recipes: [
      zelumium15,
      shadowdecon15,
      recipePieceOfBoneArmor600,
    ]
  },
  // [Not for Sale] Shining Trapezohedron Combination
  {
    item: '[Not for Sale] Shining Trapezohedron Combination',
    item_desc_urls: ['https://www.divine-pride.net/database/item/2998/shining-trapezohedron-1'],
    recipes: [
      zelumium15,
      shadowdecon15,
      recipeOrcWarlordToken600,
    ]
  },
  // [Not for Sale] Thorn Staff of Darkness Combination
  {
    item: '[Not for Sale] Thorn Staff of Darkness Combination',
    item_desc_urls: ['https://www.divine-pride.net/database/item/2998/shining-trapezohedron-1'],
    recipes: [
      zelumium15,
      shadowdecon15,
      recipeValhalaFlower600,
    ]
  },
  // [Not for Sale] Glast Heim Spectator Combination
  {
    item: '[Not for Sale] Glast Heim Spectator Combination',
    item_desc_urls: ['https://www.divine-pride.net/database/item/19101/glast-heim-spectator'],
    recipes: [
      zelumium15,
      shadowdecon15,
      recipeMotherNightmare300,
    ]
  },
  // [Not for Sale] Lunatic Family Balloon Combination
  {
    item: '[Not for Sale] Lunatic Family Balloon Combination',
    item_desc_urls: ['https://www.divine-pride.net/database/item/19427/lunatic-family-balloon'],
    recipes: [
      zelumium15,
      shadowdecon15,
      recipeKnottedLetter300
    ]
  },
  // [Not for Sale] Fallen Warrior Armor Combination
  {
    item: '[Not for Sale] Fallen Warrior Armor Combination',
    item_desc_urls: ['https://www.divine-pride.net/database/item/15189/fallen-warrior-armor-1'],
    recipes: [
      zelumium15,
      shadowdecon15,
      recipePieceOfBoneArmor300,
    ]
  },
  // [Not for Sale] Fumi Fan Combination
  {
    item: '[Not for Sale] Fumi Fan Combination',
    item_desc_urls: ['https://www.divine-pride.net/database/item/420130/fumi-fan'],
    recipes: [
      zelumium15,
      shadowdecon15,
      recipeOrcWarlordToken300,
    ]
  },
  // [Not for Sale] Thornbush Hairband Combination
  {
    item: '[Not for Sale] Thornbush Hairband Combination',
    item_desc_urls: ['https://www.divine-pride.net/database/item/18804/thornbush-hairband-1'],
    recipes: [
      zelumium15,
      shadowdecon15,
      recipeValhalaFlower300,
    ]
  },
  // [Not for Sale] Cursed Mad Bunny Combination
  {
    item: '[Not for Sale] Cursed Mad Bunny Combination',
    item_desc_urls: ['https://www.divine-pride.net/database/item/28901/cursed-mad-bunny'],
    recipes: [
      zelumium15,
      shadowdecon15,
      recipeScaleOfRedDragon300,
    ]
  },
  // [Not for Sale] Luminous Blue Stone Combination
  {
    item: '[Not for Sale] Luminous Blue Stone Combination',
    item_desc_urls: ['https://www.divine-pride.net/database/item/32270/luminous-blue-stone-1'],
    recipes: [
      zelumium15,
      shadowdecon15,
      recipeBaGua300,
    ]
  },
  // [Not for Sale] Officer's Hat Combination
  {
    item: '[Not for Sale] Officer\'s Hat Combination',
    item_desc_urls: ['https://www.divine-pride.net/database/item/400011/officers-hat-1'],
    recipes: [
      zelumium15,
      shadowdecon15,
      recipeKnottedLetter300,
    ]
  },
  // [Not for Sale] Menblatt Wing Manteau Combination
  {
    item: '[Not for Sale] Menblatt Wing Manteau Combination',
    item_desc_urls: ['https://www.divine-pride.net/database/item/20863/menblatt-wing-manteau-1'],
    recipes: [
      zelumium15,
      shadowdecon15,
      recipeOrcWarlordToken300,
    ]
  },
  // [Not for Sale] Lapine Shield Combination
  {
    item: '[Not for Sale] Lapine Shield Combination',
    item_desc_urls: ['https://www.divine-pride.net/database/item/2198/lapine-shield-1'],
    recipes: [
      zelumium15,
      shadowdecon15,
      recipeMasqueOfTutankhamen300,
    ]
  },
  // [Not for Sale] Kafra Uniform Combination
  {
    item: '[Not for Sale] Kafra Uniform Combination',
    item_desc_urls: ['https://www.divine-pride.net/database/item/15186/kafra-uniform-1'],
    recipes: [
      zelumium15,
      shadowdecon15,
      recipeYoungTwig300,
    ]
  },

  // [Not for Sale] Sprint Gloves Combination
  {
    item: '[Not for Sale] Sprint Gloves Combination',
    item_desc_urls: ['https://www.divine-pride.net/database/item/2935/sprint-gloves-1'],
    recipes: [
      zelumium10,
      shadowdecon10,
      recipeYoungTwig300,
    ]
  },
  // [Not for Sale] Poring Sunglasses K Combination
  {
    item: '[Not for Sale] Poring Sunglasses K Combination',
    item_desc_urls: ['https://www.divine-pride.net/database/item/19117/poring-sunglasses-k'],
    recipes: [
      zelumium10,
      shadowdecon10,
      recipeBrokenCrown300,
    ]
  },
  // [Not for Sale] Isabella Carrot Combination
  {
    item: '[Not for Sale] Isabella Carrot Combination',
    item_desc_urls: ['https://www.divine-pride.net/database/item/420000/isabella-carrot'],
    recipes: [
      zelumium10,
      shadowdecon10,
      recipePieceOfShield300,
    ]
  },
  // [Not for Sale] Silk Hat of Earth Combination
  {
    item: '[Not for Sale] Silk Hat of Earth Combination',
    item_desc_urls: ['https://www.divine-pride.net/database/item/18943/silk-hat-of-earth-1'],
    recipes: [
      zelumium10,
      shadowdecon10,
      recipeYoungTwig300,
    ]
  },
  // [Not for Sale] Hunting Cap of Gust Combination
  {
    item: '[Not for Sale] Hunting Cap of Gust Combination',
    item_desc_urls: ['https://www.divine-pride.net/database/item/18941/hunting-cap-of-gust-1'],
    recipes: [
      zelumium10,
      shadowdecon10,
      recipeFragmentOfRossataStone300,
    ]
  },
  // Not for Sale] Knit Cap Of Water Combination
  {
    item: '[Not for Sale] Knit Cap Of Water Combination',
    item_desc_urls: ['https://www.divine-pride.net/database/item/18942/knit-cap-of-water-1'],
    recipes: [
      zelumium10,
      shadowdecon10,
      recipeBaGua300,
    ]
  },
  // Not for Sale] Cookie Hat Combination
  {
    item: '[Not for Sale] Cookie Hat Combination',
    item_desc_urls: ['https://www.divine-pride.net/database/item/5260/cookie-hat'],
    recipes: [
      zelumium10,
      shadowdecon10,
      recipeValhalaFlower300,
    ]
  },
  // Not for Sale] Elemental Crown Combination
  {
    item: '[Not for Sale] Elemental Crown Combination',
    item_desc_urls: ['https://www.divine-pride.net/database/item/19178/elemental-crown-1'],
    recipes: [
      zelumium10,
      shadowdecon10,
      recipeFragmentOfRossataStone300,
    ]
  },
  // Not for Sale] Feeling of Love Combination
  {
    item: '[Not for Sale] Feeling of Love Combination',
    item_desc_urls: ['https://www.divine-pride.net/database/item/420005/feeling-of-love'],
    recipes: [
      zelumium10,
      shadowdecon10,
      recipeBaGua300,
    ]
  },
  // Not for Sale] Sting Silk Ribbon Combination
  {
    item: '[Not for Sale] Sting Silk Ribbon Combination',
    item_desc_urls: ['https://www.divine-pride.net/database/item/19243/indigo-rear-ribbon'],
    recipes: [
      zelumium10,
      shadowdecon10,
      recipeFangOfGarm480,
    ]
  },
  // Not for Sale] Whistle Combination
  {
    item: '[Not for Sale] Whistle Combination',
    item_desc_urls: ['https://www.divine-pride.net/database/item/400000/whistle'],
    recipes: [
      zelumium10,
      shadowdecon10,
      recipeMotherNightmare600,
    ]
  },
  // Not for Sale] Indigo Rear Ribbon Combination
  {
    item: '[Not for Sale] Indigo Rear Ribbon Combination',
    item_desc_urls: ['https://www.divine-pride.net/database/item/19243/indigo-rear-ribbon'],
    recipes: [
      zelumium10,
      shadowdecon10,
      recipeKnottedLetter600,
    ]
  },
  // Not for Sale] Kafra Employee Band Combination
  {
    item: '[Not for Sale] Kafra Employee Band Combination',
    item_desc_urls: ['https://www.divine-pride.net/database/item/19168/kafra-employee-band-1'],
    recipes: [
      zelumium10,
      shadowdecon10,
      recipePieceOfBoneArmor600,
    ]
  },
  // Not for Sale] Candy Bag Backpack Combination
  {
    item: '[Not for Sale] Candy Bag Backpack Combination',
    item_desc_urls: [
      'https://www.divine-pride.net/database/item/480263/not-for-sale-candy-bag-backpack-magical-1',
      'https://www.divine-pride.net/database/item/480248/not-for-sale-candy-bag-backpack-physical-1',
      'https://www.divine-pride.net/database/item/480255/not-for-sale-candy-bag-backpack-range-1',
    ],
    recipes: [
      zelumium10,
      shadowdecon10,
      recipeOrcWarlordToken600,
    ]
  },
]

export function getZelumium(recipes: Recipe[]) {
  return recipes.find(recipe => recipe.item === 'Zelumium')?.amount || 0
}
export function getShadowdecon(recipes: Recipe[]) {
  return recipes.find(recipe => recipe.item === 'Shadowdecon')?.amount || 0
}
export function recipesExceptZelumiumAndShadowDecon(recipes: Recipe[]) {
  return recipes.filter(recipe => recipe.item !== 'Zelumium' && recipe.item !== 'Shadowdecon')
}