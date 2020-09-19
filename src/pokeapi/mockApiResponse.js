/*
  API responses copied from Postman for testing
*/

// GET https://pokeapi.co/api/v2/pokemon/pikachu
export const getPikachuRes = {
  abilities: [
    {
      ability: { name: 'static', url: 'https://pokeapi.co/api/v2/ability/9/' },
      is_hidden: false,
      slot: 1,
    },
    {
      ability: {
        name: 'lightning-rod',
        url: 'https://pokeapi.co/api/v2/ability/31/',
      },
      is_hidden: true,
      slot: 3,
    },
  ],
  base_experience: 112,
  forms: [
    { name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon-form/25/' },
  ],
  game_indices: [
    {
      game_index: 84,
      version: { name: 'red', url: 'https://pokeapi.co/api/v2/version/1/' },
    },
    {
      game_index: 84,
      version: { name: 'blue', url: 'https://pokeapi.co/api/v2/version/2/' },
    },
    {
      game_index: 84,
      version: { name: 'yellow', url: 'https://pokeapi.co/api/v2/version/3/' },
    },
    {
      game_index: 25,
      version: { name: 'gold', url: 'https://pokeapi.co/api/v2/version/4/' },
    },
    {
      game_index: 25,
      version: { name: 'silver', url: 'https://pokeapi.co/api/v2/version/5/' },
    },
    {
      game_index: 25,
      version: { name: 'crystal', url: 'https://pokeapi.co/api/v2/version/6/' },
    },
    {
      game_index: 25,
      version: { name: 'ruby', url: 'https://pokeapi.co/api/v2/version/7/' },
    },
    {
      game_index: 25,
      version: {
        name: 'sapphire',
        url: 'https://pokeapi.co/api/v2/version/8/',
      },
    },
    {
      game_index: 25,
      version: { name: 'emerald', url: 'https://pokeapi.co/api/v2/version/9/' },
    },
    {
      game_index: 25,
      version: {
        name: 'firered',
        url: 'https://pokeapi.co/api/v2/version/10/',
      },
    },
    {
      game_index: 25,
      version: {
        name: 'leafgreen',
        url: 'https://pokeapi.co/api/v2/version/11/',
      },
    },
    {
      game_index: 25,
      version: {
        name: 'diamond',
        url: 'https://pokeapi.co/api/v2/version/12/',
      },
    },
    {
      game_index: 25,
      version: { name: 'pearl', url: 'https://pokeapi.co/api/v2/version/13/' },
    },
    {
      game_index: 25,
      version: {
        name: 'platinum',
        url: 'https://pokeapi.co/api/v2/version/14/',
      },
    },
    {
      game_index: 25,
      version: {
        name: 'heartgold',
        url: 'https://pokeapi.co/api/v2/version/15/',
      },
    },
    {
      game_index: 25,
      version: {
        name: 'soulsilver',
        url: 'https://pokeapi.co/api/v2/version/16/',
      },
    },
    {
      game_index: 25,
      version: { name: 'black', url: 'https://pokeapi.co/api/v2/version/17/' },
    },
    {
      game_index: 25,
      version: { name: 'white', url: 'https://pokeapi.co/api/v2/version/18/' },
    },
    {
      game_index: 25,
      version: {
        name: 'black-2',
        url: 'https://pokeapi.co/api/v2/version/21/',
      },
    },
    {
      game_index: 25,
      version: {
        name: 'white-2',
        url: 'https://pokeapi.co/api/v2/version/22/',
      },
    },
  ],
  height: 4,
  held_items: [
    {
      item: { name: 'oran-berry', url: 'https://pokeapi.co/api/v2/item/132/' },
      version_details: [
        {
          rarity: 50,
          version: {
            name: 'ruby',
            url: 'https://pokeapi.co/api/v2/version/7/',
          },
        },
        {
          rarity: 50,
          version: {
            name: 'sapphire',
            url: 'https://pokeapi.co/api/v2/version/8/',
          },
        },
        {
          rarity: 50,
          version: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version/9/',
          },
        },
        {
          rarity: 50,
          version: {
            name: 'diamond',
            url: 'https://pokeapi.co/api/v2/version/12/',
          },
        },
        {
          rarity: 50,
          version: {
            name: 'pearl',
            url: 'https://pokeapi.co/api/v2/version/13/',
          },
        },
        {
          rarity: 50,
          version: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version/14/',
          },
        },
        {
          rarity: 50,
          version: {
            name: 'heartgold',
            url: 'https://pokeapi.co/api/v2/version/15/',
          },
        },
        {
          rarity: 50,
          version: {
            name: 'soulsilver',
            url: 'https://pokeapi.co/api/v2/version/16/',
          },
        },
        {
          rarity: 50,
          version: {
            name: 'black',
            url: 'https://pokeapi.co/api/v2/version/17/',
          },
        },
        {
          rarity: 50,
          version: {
            name: 'white',
            url: 'https://pokeapi.co/api/v2/version/18/',
          },
        },
      ],
    },
    {
      item: { name: 'light-ball', url: 'https://pokeapi.co/api/v2/item/213/' },
      version_details: [
        {
          rarity: 5,
          version: {
            name: 'ruby',
            url: 'https://pokeapi.co/api/v2/version/7/',
          },
        },
        {
          rarity: 5,
          version: {
            name: 'sapphire',
            url: 'https://pokeapi.co/api/v2/version/8/',
          },
        },
        {
          rarity: 5,
          version: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version/9/',
          },
        },
        {
          rarity: 5,
          version: {
            name: 'diamond',
            url: 'https://pokeapi.co/api/v2/version/12/',
          },
        },
        {
          rarity: 5,
          version: {
            name: 'pearl',
            url: 'https://pokeapi.co/api/v2/version/13/',
          },
        },
        {
          rarity: 5,
          version: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version/14/',
          },
        },
        {
          rarity: 5,
          version: {
            name: 'heartgold',
            url: 'https://pokeapi.co/api/v2/version/15/',
          },
        },
        {
          rarity: 5,
          version: {
            name: 'soulsilver',
            url: 'https://pokeapi.co/api/v2/version/16/',
          },
        },
        {
          rarity: 1,
          version: {
            name: 'black',
            url: 'https://pokeapi.co/api/v2/version/17/',
          },
        },
        {
          rarity: 1,
          version: {
            name: 'white',
            url: 'https://pokeapi.co/api/v2/version/18/',
          },
        },
        {
          rarity: 5,
          version: {
            name: 'black-2',
            url: 'https://pokeapi.co/api/v2/version/21/',
          },
        },
        {
          rarity: 5,
          version: {
            name: 'white-2',
            url: 'https://pokeapi.co/api/v2/version/22/',
          },
        },
        {
          rarity: 5,
          version: { name: 'x', url: 'https://pokeapi.co/api/v2/version/23/' },
        },
        {
          rarity: 5,
          version: { name: 'y', url: 'https://pokeapi.co/api/v2/version/24/' },
        },
        {
          rarity: 5,
          version: {
            name: 'omega-ruby',
            url: 'https://pokeapi.co/api/v2/version/25/',
          },
        },
        {
          rarity: 5,
          version: {
            name: 'alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version/26/',
          },
        },
        {
          rarity: 5,
          version: {
            name: 'sun',
            url: 'https://pokeapi.co/api/v2/version/27/',
          },
        },
        {
          rarity: 5,
          version: {
            name: 'moon',
            url: 'https://pokeapi.co/api/v2/version/28/',
          },
        },
        {
          rarity: 5,
          version: {
            name: 'ultra-sun',
            url: 'https://pokeapi.co/api/v2/version/29/',
          },
        },
        {
          rarity: 5,
          version: {
            name: 'ultra-moon',
            url: 'https://pokeapi.co/api/v2/version/30/',
          },
        },
      ],
    },
  ],
  id: 25,
  is_default: true,
  location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/25/encounters',
  moves: [
    {
      move: { name: 'mega-punch', url: 'https://pokeapi.co/api/v2/move/5/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
      ],
    },
    {
      move: { name: 'pay-day', url: 'https://pokeapi.co/api/v2/move/6/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
      ],
    },
    {
      move: { name: 'thunder-punch', url: 'https://pokeapi.co/api/v2/move/9/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
      ],
    },
    {
      move: { name: 'slam', url: 'https://pokeapi.co/api/v2/move/21/' },
      version_group_details: [
        {
          level_learned_at: 20,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 21,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 21,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 21,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 26,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 26,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 26,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: { name: 'mega-kick', url: 'https://pokeapi.co/api/v2/move/25/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
      ],
    },
    {
      move: { name: 'headbutt', url: 'https://pokeapi.co/api/v2/move/29/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
      ],
    },
    {
      move: { name: 'body-slam', url: 'https://pokeapi.co/api/v2/move/34/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
      ],
    },
    {
      move: { name: 'take-down', url: 'https://pokeapi.co/api/v2/move/36/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
      ],
    },
    {
      move: { name: 'double-edge', url: 'https://pokeapi.co/api/v2/move/38/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
      ],
    },
    {
      move: { name: 'tail-whip', url: 'https://pokeapi.co/api/v2/move/39/' },
      version_group_details: [
        {
          level_learned_at: 6,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 6,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 6,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 6,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 6,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 6,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 6,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 6,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: { name: 'growl', url: 'https://pokeapi.co/api/v2/move/45/' },
      version_group_details: [
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: { name: 'surf', url: 'https://pokeapi.co/api/v2/move/57/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'stadium-surfing-pikachu',
            url: 'https://pokeapi.co/api/v2/move-learn-method/5/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'stadium-surfing-pikachu',
            url: 'https://pokeapi.co/api/v2/move-learn-method/5/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
      ],
    },
    {
      move: { name: 'submission', url: 'https://pokeapi.co/api/v2/move/66/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
      ],
    },
    {
      move: { name: 'counter', url: 'https://pokeapi.co/api/v2/move/68/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
      ],
    },
    {
      move: { name: 'seismic-toss', url: 'https://pokeapi.co/api/v2/move/69/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
      ],
    },
    {
      move: { name: 'strength', url: 'https://pokeapi.co/api/v2/move/70/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
      ],
    },
    {
      move: {
        name: 'thunder-shock',
        url: 'https://pokeapi.co/api/v2/move/84/',
      },
      version_group_details: [
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: { name: 'thunderbolt', url: 'https://pokeapi.co/api/v2/move/85/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 26,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 26,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 26,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 26,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 26,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 26,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 26,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 26,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 26,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 29,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 26,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 26,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 29,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 29,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 42,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 42,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 42,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: { name: 'thunder-wave', url: 'https://pokeapi.co/api/v2/move/86/' },
      version_group_details: [
        {
          level_learned_at: 9,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 8,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 8,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 8,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 8,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 8,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 8,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 8,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 8,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 18,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 18,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 18,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: { name: 'thunder', url: 'https://pokeapi.co/api/v2/move/87/' },
      version_group_details: [
        {
          level_learned_at: 43,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 41,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 41,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 41,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 41,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 41,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 41,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 45,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 45,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 45,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 50,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 41,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 41,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 50,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 50,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 58,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 58,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 58,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: { name: 'dig', url: 'https://pokeapi.co/api/v2/move/91/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
      ],
    },
    {
      move: { name: 'toxic', url: 'https://pokeapi.co/api/v2/move/92/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: { name: 'agility', url: 'https://pokeapi.co/api/v2/move/97/' },
      version_group_details: [
        {
          level_learned_at: 33,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 33,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 33,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 33,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 33,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 33,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 33,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 34,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 34,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 34,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 33,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 33,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 45,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 45,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 45,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: { name: 'quick-attack', url: 'https://pokeapi.co/api/v2/move/98/' },
      version_group_details: [
        {
          level_learned_at: 16,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 11,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 11,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 11,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 11,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 11,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 11,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 11,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 11,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: { name: 'rage', url: 'https://pokeapi.co/api/v2/move/99/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
      ],
    },
    {
      move: { name: 'mimic', url: 'https://pokeapi.co/api/v2/move/102/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
      ],
    },
    {
      move: { name: 'double-team', url: 'https://pokeapi.co/api/v2/move/104/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 18,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 18,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 18,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 21,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 21,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 21,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 23,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 23,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 23,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: {
        name: 'defense-curl',
        url: 'https://pokeapi.co/api/v2/move/111/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
      ],
    },
    {
      move: {
        name: 'light-screen',
        url: 'https://pokeapi.co/api/v2/move/113/',
      },
      version_group_details: [
        {
          level_learned_at: 50,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 50,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 50,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 50,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 50,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 50,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 42,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 42,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 42,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 45,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 50,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 50,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 45,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 45,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 53,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 53,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 53,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: { name: 'reflect', url: 'https://pokeapi.co/api/v2/move/115/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
      ],
    },
    {
      move: { name: 'bide', url: 'https://pokeapi.co/api/v2/move/117/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
      ],
    },
    {
      move: { name: 'swift', url: 'https://pokeapi.co/api/v2/move/129/' },
      version_group_details: [
        {
          level_learned_at: 26,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
      ],
    },
    {
      move: { name: 'skull-bash', url: 'https://pokeapi.co/api/v2/move/130/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
      ],
    },
    {
      move: { name: 'flash', url: 'https://pokeapi.co/api/v2/move/148/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
      ],
    },
    {
      move: { name: 'rest', url: 'https://pokeapi.co/api/v2/move/156/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: { name: 'substitute', url: 'https://pokeapi.co/api/v2/move/164/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: { name: 'snore', url: 'https://pokeapi.co/api/v2/move/173/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
      ],
    },
    {
      move: { name: 'curse', url: 'https://pokeapi.co/api/v2/move/174/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
      ],
    },
    {
      move: { name: 'protect', url: 'https://pokeapi.co/api/v2/move/182/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: { name: 'mud-slap', url: 'https://pokeapi.co/api/v2/move/189/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
      ],
    },
    {
      move: { name: 'zap-cannon', url: 'https://pokeapi.co/api/v2/move/192/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
      ],
    },
    {
      move: { name: 'detect', url: 'https://pokeapi.co/api/v2/move/197/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
      ],
    },
    {
      move: { name: 'endure', url: 'https://pokeapi.co/api/v2/move/203/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
      ],
    },
    {
      move: { name: 'rollout', url: 'https://pokeapi.co/api/v2/move/205/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
      ],
    },
    {
      move: { name: 'swagger', url: 'https://pokeapi.co/api/v2/move/207/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: { name: 'spark', url: 'https://pokeapi.co/api/v2/move/209/' },
      version_group_details: [
        {
          level_learned_at: 26,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 26,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 26,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: { name: 'attract', url: 'https://pokeapi.co/api/v2/move/213/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: { name: 'sleep-talk', url: 'https://pokeapi.co/api/v2/move/214/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: { name: 'return', url: 'https://pokeapi.co/api/v2/move/216/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: { name: 'frustration', url: 'https://pokeapi.co/api/v2/move/218/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: {
        name: 'dynamic-punch',
        url: 'https://pokeapi.co/api/v2/move/223/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
      ],
    },
    {
      move: { name: 'iron-tail', url: 'https://pokeapi.co/api/v2/move/231/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
      ],
    },
    {
      move: {
        name: 'hidden-power',
        url: 'https://pokeapi.co/api/v2/move/237/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: { name: 'rain-dance', url: 'https://pokeapi.co/api/v2/move/240/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: { name: 'rock-smash', url: 'https://pokeapi.co/api/v2/move/249/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
      ],
    },
    {
      move: { name: 'facade', url: 'https://pokeapi.co/api/v2/move/263/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: { name: 'focus-punch', url: 'https://pokeapi.co/api/v2/move/264/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
      ],
    },
    {
      move: {
        name: 'helping-hand',
        url: 'https://pokeapi.co/api/v2/move/270/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
      ],
    },
    {
      move: { name: 'brick-break', url: 'https://pokeapi.co/api/v2/move/280/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: { name: 'knock-off', url: 'https://pokeapi.co/api/v2/move/282/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
      ],
    },
    {
      move: {
        name: 'secret-power',
        url: 'https://pokeapi.co/api/v2/move/290/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
      ],
    },
    {
      move: { name: 'signal-beam', url: 'https://pokeapi.co/api/v2/move/324/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
      ],
    },
    {
      move: { name: 'covet', url: 'https://pokeapi.co/api/v2/move/343/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
      ],
    },
    {
      move: { name: 'shock-wave', url: 'https://pokeapi.co/api/v2/move/351/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
      ],
    },
    {
      move: {
        name: 'natural-gift',
        url: 'https://pokeapi.co/api/v2/move/363/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
      ],
    },
    {
      move: { name: 'feint', url: 'https://pokeapi.co/api/v2/move/364/' },
      version_group_details: [
        {
          level_learned_at: 29,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 29,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 29,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 34,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 34,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 34,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 21,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 21,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 21,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: { name: 'fling', url: 'https://pokeapi.co/api/v2/move/374/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: { name: 'magnet-rise', url: 'https://pokeapi.co/api/v2/move/393/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
      ],
    },
    {
      move: { name: 'discharge', url: 'https://pokeapi.co/api/v2/move/435/' },
      version_group_details: [
        {
          level_learned_at: 37,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 42,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 42,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 42,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 34,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 34,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 34,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: { name: 'captivate', url: 'https://pokeapi.co/api/v2/move/445/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
      ],
    },
    {
      move: { name: 'grass-knot', url: 'https://pokeapi.co/api/v2/move/447/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: { name: 'charge-beam', url: 'https://pokeapi.co/api/v2/move/451/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: {
        name: 'electro-ball',
        url: 'https://pokeapi.co/api/v2/move/486/',
      },
      version_group_details: [
        {
          level_learned_at: 18,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 18,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 18,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: { name: 'round', url: 'https://pokeapi.co/api/v2/move/496/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: {
        name: 'echoed-voice',
        url: 'https://pokeapi.co/api/v2/move/497/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: { name: 'volt-switch', url: 'https://pokeapi.co/api/v2/move/521/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: { name: 'electroweb', url: 'https://pokeapi.co/api/v2/move/527/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
      ],
    },
    {
      move: { name: 'wild-charge', url: 'https://pokeapi.co/api/v2/move/528/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 50,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 50,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 50,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: { name: 'play-nice', url: 'https://pokeapi.co/api/v2/move/589/' },
      version_group_details: [
        {
          level_learned_at: 7,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: { name: 'confide', url: 'https://pokeapi.co/api/v2/move/590/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: { name: 'nuzzle', url: 'https://pokeapi.co/api/v2/move/609/' },
      version_group_details: [
        {
          level_learned_at: 23,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 29,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 29,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 29,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
  ],
  name: 'pikachu',
  order: 35,
  species: {
    name: 'pikachu',
    url: 'https://pokeapi.co/api/v2/pokemon-species/25/',
  },
  sprites: {
    back_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png',
    back_female:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/25.png',
    back_shiny:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/25.png',
    back_shiny_female:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/25.png',
    front_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    front_female:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/25.png',
    front_shiny:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png',
    front_shiny_female:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/25.png',
    other: {
      dream_world: {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg',
        front_female: null,
      },
      'official-artwork': {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
      },
    },
    versions: {
      'generation-i': {
        'red-blue': {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/25.png',
          back_gray:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/25.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/25.png',
          front_gray:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/25.png',
        },
        yellow: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/25.png',
          back_gray:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/25.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/25.png',
          front_gray:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/25.png',
        },
      },
      'generation-ii': {
        crystal: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/25.png',
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/25.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/25.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/25.png',
        },
        gold: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/25.png',
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/25.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/25.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/25.png',
        },
        silver: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/25.png',
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/25.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/25.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/25.png',
        },
      },
      'generation-iii': {
        emerald: {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/25.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/25.png',
        },
        'firered-leafgreen': {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/25.png',
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/25.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/25.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/25.png',
        },
        'ruby-sapphire': {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/25.png',
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/25.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/25.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/25.png',
        },
      },
      'generation-iv': {
        'diamond-pearl': {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/25.png',
          back_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/female/25.png',
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/25.png',
          back_shiny_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/female/25.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/25.png',
          front_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/female/25.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/25.png',
          front_shiny_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/female/25.png',
        },
        'heartgold-soulsilver': {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/25.png',
          back_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/female/25.png',
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/25.png',
          back_shiny_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/female/25.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/25.png',
          front_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/female/25.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/25.png',
          front_shiny_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/female/25.png',
        },
        platinum: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/25.png',
          back_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/female/25.png',
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/25.png',
          back_shiny_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/female/25.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/25.png',
          front_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/female/25.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/25.png',
          front_shiny_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/female/25.png',
        },
      },
      'generation-v': {
        'black-white': {
          animated: {
            back_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/25.gif',
            back_female:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/female/25.gif',
            back_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/25.gif',
            back_shiny_female:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/female/25.gif',
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif',
            front_female:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/female/25.gif',
            front_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/25.gif',
            front_shiny_female:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/female/25.gif',
          },
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/25.png',
          back_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/female/25.png',
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/25.png',
          back_shiny_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/female/25.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/25.png',
          front_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/female/25.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/25.png',
          front_shiny_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/female/25.png',
        },
      },
      'generation-vi': {
        'omegaruby-alphasapphire': {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/25.png',
          front_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/female/25.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/25.png',
          front_shiny_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/female/25.png',
        },
        'x-y': {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/25.png',
          front_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/female/25.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/25.png',
          front_shiny_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/female/25.png',
        },
      },
      'generation-vii': {
        icons: {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/25.png',
          front_female: null,
        },
        'ultra-sun-ultra-moon': {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/25.png',
          front_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/female/25.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/25.png',
          front_shiny_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/female/25.png',
        },
      },
      'generation-viii': {
        icons: {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/25.png',
          front_female:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/female/25.png',
        },
      },
    },
  },
  stats: [
    {
      base_stat: 35,
      effort: 0,
      stat: { name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/' },
    },
    {
      base_stat: 55,
      effort: 0,
      stat: { name: 'attack', url: 'https://pokeapi.co/api/v2/stat/2/' },
    },
    {
      base_stat: 40,
      effort: 0,
      stat: { name: 'defense', url: 'https://pokeapi.co/api/v2/stat/3/' },
    },
    {
      base_stat: 50,
      effort: 0,
      stat: {
        name: 'special-attack',
        url: 'https://pokeapi.co/api/v2/stat/4/',
      },
    },
    {
      base_stat: 50,
      effort: 0,
      stat: {
        name: 'special-defense',
        url: 'https://pokeapi.co/api/v2/stat/5/',
      },
    },
    {
      base_stat: 90,
      effort: 2,
      stat: { name: 'speed', url: 'https://pokeapi.co/api/v2/stat/6/' },
    },
  ],
  types: [
    {
      slot: 1,
      type: { name: 'electric', url: 'https://pokeapi.co/api/v2/type/13/' },
    },
  ],
  weight: 60,
};

// GET https://pokeapi.co/api/v2/pokemon-species/pikachu
export const getPikachuSpeciesRes = {
  base_happiness: 70,
  capture_rate: 190,
  color: { name: 'yellow', url: 'https://pokeapi.co/api/v2/pokemon-color/10/' },
  egg_groups: [
    { name: 'ground', url: 'https://pokeapi.co/api/v2/egg-group/5/' },
    { name: 'fairy', url: 'https://pokeapi.co/api/v2/egg-group/6/' },
  ],
  evolution_chain: { url: 'https://pokeapi.co/api/v2/evolution-chain/10/' },
  evolves_from_species: {
    name: 'pichu',
    url: 'https://pokeapi.co/api/v2/pokemon-species/172/',
  },
  flavor_text_entries: [
    {
      flavor_text: '最近發表了聚集大量皮卡丘\n來建造發電廠的計畫。',
      language: {
        name: 'zh-Hant',
        url: 'https://pokeapi.co/api/v2/language/4/',
      },
      version: { name: 'sun', url: 'https://pokeapi.co/api/v2/version/27/' },
    },
    {
      flavor_text:
        'When several of\nthese POKéMON\ngather, their\felectricity could\nbuild and cause\nlightning storms.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'red', url: 'https://pokeapi.co/api/v2/version/1/' },
    },
    {
      flavor_text:
        'When several of\nthese POKéMON\ngather, their\felectricity could\nbuild and cause\nlightning storms.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'blue', url: 'https://pokeapi.co/api/v2/version/2/' },
    },
    {
      flavor_text:
        'It keeps its tail\nraised to monitor\nits surroundings.\fIf you yank its\ntail, it will try\nto bite you.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'yellow', url: 'https://pokeapi.co/api/v2/version/3/' },
    },
    {
      flavor_text:
        'This intelligent\nPOKéMON roasts\nhard BERRIES with\felectricity to\nmake them tender\nenough to eat.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'gold', url: 'https://pokeapi.co/api/v2/version/4/' },
    },
    {
      flavor_text:
        'It raises its tail\nto check its sur­\nroundings. The\ftail is sometimes\nstruck by light­\nning in this pose.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'silver', url: 'https://pokeapi.co/api/v2/version/5/' },
    },
    {
      flavor_text:
        'When it is anger­\ned, it immediately\ndischarges the\fenergy stored in\nthe pouches in its\ncheeks.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'crystal', url: 'https://pokeapi.co/api/v2/version/6/' },
    },
    {
      flavor_text:
        'Whenever PIKACHU comes across\nsomething new, it blasts it with a jolt\nof electricity.\fIf you come across a blackened berry,\nit’s evidence that this POKéMON\nmistook the intensity of its charge.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'ruby', url: 'https://pokeapi.co/api/v2/version/7/' },
    },
    {
      flavor_text:
        'This POKéMON has electricity-storing\npouches on its cheeks. These appear to\nbecome electrically charged during the\fnight while PIKACHU sleeps.\nIt occasionally discharges electricity\nwhen it is dozy after waking up.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: {
        name: 'sapphire',
        url: 'https://pokeapi.co/api/v2/version/8/',
      },
    },
    {
      flavor_text:
        'It stores electricity in the electric sacs\non its cheeks. When it releases pent-up\nenergy in a burst, the electric power is\nequal to a lightning bolt.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'emerald', url: 'https://pokeapi.co/api/v2/version/9/' },
    },
    {
      flavor_text:
        'It has small electric sacs on both its\ncheeks. If threatened, it looses electric\ncharges from the sacs.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: {
        name: 'firered',
        url: 'https://pokeapi.co/api/v2/version/10/',
      },
    },
    {
      flavor_text:
        'When several of these POKéMON gather,\ntheir electricity can build and cause\nlightning storms.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: {
        name: 'leafgreen',
        url: 'https://pokeapi.co/api/v2/version/11/',
      },
    },
    {
      flavor_text:
        'It lives in forests with others.\nIt stores electricity in the\npouches on its cheeks.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: {
        name: 'diamond',
        url: 'https://pokeapi.co/api/v2/version/12/',
      },
    },
    {
      flavor_text:
        'If it looses crackling power from\nthe electric pouches on its\ncheeks, it is being wary.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'pearl', url: 'https://pokeapi.co/api/v2/version/13/' },
    },
    {
      flavor_text:
        'It occasionally uses an electric\nshock to recharge a fellow PIKACHU\nthat is in a weakened state.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: {
        name: 'platinum',
        url: 'https://pokeapi.co/api/v2/version/14/',
      },
    },
    {
      flavor_text:
        'This intelligent Pokémon roasts\nhard berries with electricity to\nmake them tender enough to eat.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: {
        name: 'heartgold',
        url: 'https://pokeapi.co/api/v2/version/15/',
      },
    },
    {
      flavor_text:
        'It raises its tail to check its\nsurroundings. The tail is sometimes\nstruck by lightning in this pose.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: {
        name: 'soulsilver',
        url: 'https://pokeapi.co/api/v2/version/16/',
      },
    },
    {
      flavor_text:
        'Il lui arrive de remettre d’aplomb\nun Pikachu allié en lui envoyant\nune décharge électrique.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: { name: 'black', url: 'https://pokeapi.co/api/v2/version/17/' },
    },
    {
      flavor_text:
        'It occasionally uses an electric\nshock to recharge a fellow Pikachu\nthat is in a weakened state.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'black', url: 'https://pokeapi.co/api/v2/version/17/' },
    },
    {
      flavor_text:
        'Il lui arrive de remettre d’aplomb\nun Pikachu allié en lui envoyant\nune décharge électrique.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: { name: 'white', url: 'https://pokeapi.co/api/v2/version/18/' },
    },
    {
      flavor_text:
        'It occasionally uses an electric\nshock to recharge a fellow Pikachu\nthat is in a weakened state.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'white', url: 'https://pokeapi.co/api/v2/version/18/' },
    },
    {
      flavor_text:
        'It occasionally uses an electric\nshock to recharge a fellow Pikachu\nthat is in a weakened state.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: {
        name: 'black-2',
        url: 'https://pokeapi.co/api/v2/version/21/',
      },
    },
    {
      flavor_text:
        'It occasionally uses an electric\nshock to recharge a fellow Pikachu\nthat is in a weakened state.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: {
        name: 'white-2',
        url: 'https://pokeapi.co/api/v2/version/22/',
      },
    },
    {
      flavor_text:
        'しっぽを　たてて　まわりの\nようすを　さぐっていると　ときどき\nかみなりが　しっぽに　おちてくる。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      version: { name: 'x', url: 'https://pokeapi.co/api/v2/version/23/' },
    },
    {
      flavor_text:
        '꼬리를 세우고 주변의\n상황을 살피다 보면 가끔\n꼬리에 번개가 친다.',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      version: { name: 'x', url: 'https://pokeapi.co/api/v2/version/23/' },
    },
    {
      flavor_text:
        'Il élève sa queue pour surveiller les environs.\nElle attire souvent la foudre dans cette position.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: { name: 'x', url: 'https://pokeapi.co/api/v2/version/23/' },
    },
    {
      flavor_text:
        'Es streckt seinen Schweif nach oben, um seine\nUmgebung zu prüfen. Häufig fährt ein Blitz hinein.',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: { name: 'x', url: 'https://pokeapi.co/api/v2/version/23/' },
    },
    {
      flavor_text:
        'Levanta su cola para vigilar los alrededores. A veces,\npuede ser alcanzado por un rayo en esa pose.',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      version: { name: 'x', url: 'https://pokeapi.co/api/v2/version/23/' },
    },
    {
      flavor_text:
        'Solleva la coda per esaminare l’ambiente circostante.\nA volte la coda è colpita da un fulmine quando è in\nquesta posizione.',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      version: { name: 'x', url: 'https://pokeapi.co/api/v2/version/23/' },
    },
    {
      flavor_text:
        'It raises its tail to check its surroundings.\nThe tail is sometimes struck by lightning\nin this pose.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'x', url: 'https://pokeapi.co/api/v2/version/23/' },
    },
    {
      flavor_text:
        '尻尾を　立てて　まわりの　様子を\n探っていると　ときどき\n雷が　尻尾に　落ちてくる。',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      version: { name: 'x', url: 'https://pokeapi.co/api/v2/version/23/' },
    },
    {
      flavor_text:
        'ほっぺたの　りょうがわに\nちいさい　でんきぶくろを　もつ。\nピンチのときに　ほうでんする。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      version: { name: 'y', url: 'https://pokeapi.co/api/v2/version/24/' },
    },
    {
      flavor_text:
        '뺨의 양쪽에\n작은 전기 주머니가 있다.\n위기 상황일 때 방전한다.',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      version: { name: 'y', url: 'https://pokeapi.co/api/v2/version/24/' },
    },
    {
      flavor_text:
        'Pikachu a de petites poches pleines d’électricité sur\nses joues. S’il se sent menacé, il laisse s’échapper\ndes décharges électriques.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: { name: 'y', url: 'https://pokeapi.co/api/v2/version/24/' },
    },
    {
      flavor_text:
        'Es hat kleine Backentaschen, die mit Elektrizität\ngefüllt sind. Bei Gefahr entlädt es sie.',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: { name: 'y', url: 'https://pokeapi.co/api/v2/version/24/' },
    },
    {
      flavor_text:
        'Las bolsas de las mejillas están llenas de electricidad,\nque libera cuando se siente amenazado.',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      version: { name: 'y', url: 'https://pokeapi.co/api/v2/version/24/' },
    },
    {
      flavor_text:
        'Se spaventato, perde scariche elettriche dalle due\nsacche che ha sulle guance.',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      version: { name: 'y', url: 'https://pokeapi.co/api/v2/version/24/' },
    },
    {
      flavor_text:
        'It has small electric sacs on both its cheeks.\nIf threatened, it looses electric charges from\nthe sacs.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'y', url: 'https://pokeapi.co/api/v2/version/24/' },
    },
    {
      flavor_text:
        'ほっぺたの　両側に\n小さい　電気袋を　持つ。\nピンチのときに　放電する。',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      version: { name: 'y', url: 'https://pokeapi.co/api/v2/version/24/' },
    },
    {
      flavor_text:
        'はじめて　みる　ものには　でんげきを　あてる。\nくろこげの　きのみが　おちていたら　それは\nでんげきの　つよさを　まちがえた　しょうこだよ。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      version: {
        name: 'omega-ruby',
        url: 'https://pokeapi.co/api/v2/version/25/',
      },
    },
    {
      flavor_text:
        '처음 보는 것에게는 전격을 맞춘다.\n새까맣게 탄 나무열매가 떨어져 있다는 것은\n전격의 세기를 조절하지 못했다는 증거다.',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      version: {
        name: 'omega-ruby',
        url: 'https://pokeapi.co/api/v2/version/25/',
      },
    },
    {
      flavor_text:
        'Chaque fois que Pikachu découvre quelque chose de\nnouveau, il envoie un arc électrique. Lorsqu’on tombe\nsur une Baie carbonisée, ça signifie sans doute qu’un\nde ces Pokémon a envoyé une charge trop forte.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: {
        name: 'omega-ruby',
        url: 'https://pokeapi.co/api/v2/version/25/',
      },
    },
    {
      flavor_text:
        'Immer wenn Pikachu auf etwas Neues stößt, jagt es\neinen Elektroschock hindurch. Wenn du eine verkohlte\nBeere findest, hat dieses Pokémon seine elektrische\nLadung falsch eingeschätzt.',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: {
        name: 'omega-ruby',
        url: 'https://pokeapi.co/api/v2/version/25/',
      },
    },
    {
      flavor_text:
        'Cada vez que un Pikachu se encuentra con algo nuevo, le\nlanza una descarga eléctrica. Cuando se ve alguna baya\nchamuscada, es muy probable que sea obra de un Pikachu,\nya que a veces no controlan la intensidad de la descarga.',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      version: {
        name: 'omega-ruby',
        url: 'https://pokeapi.co/api/v2/version/25/',
      },
    },
    {
      flavor_text:
        'Quando Pikachu incontra qualcosa che non conosce, lo\ncolpisce con una scarica elettrica. Quando si vede una bacca\nannerita, è evidente che questo Pokémon ha emesso una\nscossa troppo forte.',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      version: {
        name: 'omega-ruby',
        url: 'https://pokeapi.co/api/v2/version/25/',
      },
    },
    {
      flavor_text:
        'Whenever Pikachu comes across something new,\nit blasts it with a jolt of electricity. If you come across a\nblackened berry, it’s evidence that this Pokémon mistook the\nintensity of its charge.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: {
        name: 'omega-ruby',
        url: 'https://pokeapi.co/api/v2/version/25/',
      },
    },
    {
      flavor_text:
        'はじめて　みる　ものには　電撃を　当てる。\n黒こげの　きのみが　落ちていたら　それは\n電撃の　強さを　間違えた　証拠だよ。',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      version: {
        name: 'omega-ruby',
        url: 'https://pokeapi.co/api/v2/version/25/',
      },
    },
    {
      flavor_text:
        'ほっぺの　でんきぶくろの　でんきは　まよなか\nねている　あいだに　ためられている　らしいよ。\nねぼけて　ほうでんしてしまう　ことが　ある。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      version: {
        name: 'alpha-sapphire',
        url: 'https://pokeapi.co/api/v2/version/26/',
      },
    },
    {
      flavor_text:
        '뺨의 전기 주머니에 있는 전기는 한밤중\n자는 동안 축적되는 것 같다.\n잠이 덜 깨서 방전하기도 한다.',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      version: {
        name: 'alpha-sapphire',
        url: 'https://pokeapi.co/api/v2/version/26/',
      },
    },
    {
      flavor_text:
        'Ce Pokémon dispose de petites poches dans les joues pour\nstocker de l’électricité. Elles semblent se charger pendant\nque Pikachu dort. Il libère parfois un peu d’électricité\nlorsqu’il n’est pas encore bien réveillé.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: {
        name: 'alpha-sapphire',
        url: 'https://pokeapi.co/api/v2/version/26/',
      },
    },
    {
      flavor_text:
        'Dieses Pokémon kann in seinen Backentaschen Elektrizität\nspeichern. Diese laden sich nachts auf, während Pikachu\nschläft. Es entlädt manchmal seine elektrische Ladung,\nwenn es gerade aufgewacht und noch schläfrig ist.',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: {
        name: 'alpha-sapphire',
        url: 'https://pokeapi.co/api/v2/version/26/',
      },
    },
    {
      flavor_text:
        'Este Pokémon tiene unas bolsas en las mejillas donde\nalmacena electricidad. Parece ser que se recargan por la\nnoche, mientras Pikachu duerme. A veces, cuando se acaba\nde despertar y está aún medio dormido, descarga un poco.',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      version: {
        name: 'alpha-sapphire',
        url: 'https://pokeapi.co/api/v2/version/26/',
      },
    },
    {
      flavor_text:
        'Pikachu immagazzina l’elettricità nelle guance. Pare che\nqueste si ricarichino durante la notte quando dorme.\nTalvolta emette delle scariche elettriche al risveglio mentre\nè ancora assonnato.',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      version: {
        name: 'alpha-sapphire',
        url: 'https://pokeapi.co/api/v2/version/26/',
      },
    },
    {
      flavor_text:
        'This Pokémon has electricity-storing pouches on its cheeks.\nThese appear to become electrically charged during the night\nwhile Pikachu sleeps. It occasionally discharges electricity\nwhen it is dozy after waking up.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: {
        name: 'alpha-sapphire',
        url: 'https://pokeapi.co/api/v2/version/26/',
      },
    },
    {
      flavor_text:
        'ほっぺの　電気袋の　電気は　真夜中\n寝ている　間に　ためられている　らしいよ。\n寝ぼけて　放電してしまう　ことが　ある。',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      version: {
        name: 'alpha-sapphire',
        url: 'https://pokeapi.co/api/v2/version/26/',
      },
    },
    {
      flavor_text:
        'たくさんの　ピカチュウを　あつめ\nはつでんしょを　つくる　けいかくが\nさいきん　はっぴょう　された。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      version: { name: 'sun', url: 'https://pokeapi.co/api/v2/version/27/' },
    },
    {
      flavor_text:
        '많은 피카츄를 모아서\n발전소를 만들 계획이\n최근 발표되었다.',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      version: { name: 'sun', url: 'https://pokeapi.co/api/v2/version/27/' },
    },
    {
      flavor_text:
        'Un projet de centrale électrique fonctionnant\nen rassemblant une foule de Pikachu a été\nrécemment annoncé.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: { name: 'sun', url: 'https://pokeapi.co/api/v2/version/27/' },
    },
    {
      flavor_text:
        'Vor Kurzem wurden Pläne verkündet,\nmithilfe einer großen Anzahl an Pikachu\nein ganzes Kraftwerk zu betreiben.',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: { name: 'sun', url: 'https://pokeapi.co/api/v2/version/27/' },
    },
    {
      flavor_text:
        'Recientemente se ha presentado un proyecto\npara reunir numerosos Pikachu y crear con ellos\nuna central eléctrica.',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      version: { name: 'sun', url: 'https://pokeapi.co/api/v2/version/27/' },
    },
    {
      flavor_text:
        'Recentemente è stato presentato un progetto\nper riunire numerosi Pikachu e costruire\nuna centrale elettrica.',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      version: { name: 'sun', url: 'https://pokeapi.co/api/v2/version/27/' },
    },
    {
      flavor_text:
        'A plan was recently announced to gather\nmany Pikachu and make an electric power plant.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'sun', url: 'https://pokeapi.co/api/v2/version/27/' },
    },
    {
      flavor_text:
        'たくさんの　ピカチュウを　集め\n発電所を　造る　計画が\n最近　発表　された。',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      version: { name: 'sun', url: 'https://pokeapi.co/api/v2/version/27/' },
    },
    {
      flavor_text: '最近发表了聚集大量皮卡丘，\n建造发电厂的计划。',
      language: {
        name: 'zh-Hans',
        url: 'https://pokeapi.co/api/v2/language/12/',
      },
      version: { name: 'sun', url: 'https://pokeapi.co/api/v2/version/27/' },
    },
    {
      flavor_text:
        'でんきを　ためる　せいしつ。\nときどき　おもいきり　ほうでん\nしないと　ストレスを　かんじる。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      version: { name: 'moon', url: 'https://pokeapi.co/api/v2/version/28/' },
    },
    {
      flavor_text:
        '전기를 모으는 성질을 가졌다.\n가끔 마음껏 방전하지\n않으면 스트레스를 받는다.',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      version: { name: 'moon', url: 'https://pokeapi.co/api/v2/version/28/' },
    },
    {
      flavor_text:
        '有積聚電力的特質。\n不時常盡情釋放電力的話，\n就會倍感壓力。',
      language: {
        name: 'zh-Hant',
        url: 'https://pokeapi.co/api/v2/language/4/',
      },
      version: { name: 'moon', url: 'https://pokeapi.co/api/v2/version/28/' },
    },
    {
      flavor_text:
        'Un Pokémon capable de condenser l’électricité.\nIl doit décharger l’énergie accumulée de temps\nen temps au risque d’accroître son stress.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: { name: 'moon', url: 'https://pokeapi.co/api/v2/version/28/' },
    },
    {
      flavor_text:
        'Es liegt in seiner Natur, konstant Elektrizität in\nsich anzustauen. Kann es diese nicht regelmäßig\nentladen, löst dies Stress aus.',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: { name: 'moon', url: 'https://pokeapi.co/api/v2/version/28/' },
    },
    {
      flavor_text:
        'Pikachu almacena electricidad en su cuerpo.\nSi no la libera de vez en cuando y se desfoga,\npuede sufrir estrés.',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      version: { name: 'moon', url: 'https://pokeapi.co/api/v2/version/28/' },
    },
    {
      flavor_text:
        'Accumula naturalmente elettricità. Se ogni tanto\nnon si sfoga emettendo scariche elettriche,\nrischia di essere sopraffatto dallo stress.',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      version: { name: 'moon', url: 'https://pokeapi.co/api/v2/version/28/' },
    },
    {
      flavor_text:
        'It’s in its nature to store electricity. It feels\nstressed now and then if it’s unable to fully\ndischarge the electricity.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'moon', url: 'https://pokeapi.co/api/v2/version/28/' },
    },
    {
      flavor_text:
        '電気を　溜める　性質。\n時々　思い切り　放電\nしないと　ストレスを　感じる。',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      version: { name: 'moon', url: 'https://pokeapi.co/api/v2/version/28/' },
    },
    {
      flavor_text:
        '有积聚电力的特质。\n不时常尽情释放电力的话，\n就会倍感压力。',
      language: {
        name: 'zh-Hans',
        url: 'https://pokeapi.co/api/v2/language/12/',
      },
      version: { name: 'moon', url: 'https://pokeapi.co/api/v2/version/28/' },
    },
    {
      flavor_text:
        'でんきを　ためこむ　せいしつ。\nピカチュウが　むれて　くらす　もりは\nらくらいが　たえず　キケンだ。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      version: {
        name: 'ultra-sun',
        url: 'https://pokeapi.co/api/v2/version/29/',
      },
    },
    {
      flavor_text:
        '전기를 모으는 성질을 띠고 있다.\n피카츄가 무리 지어 사는 숲은\n낙뢰가 끊이지 않아 위험하다.',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      version: {
        name: 'ultra-sun',
        url: 'https://pokeapi.co/api/v2/version/29/',
      },
    },
    {
      flavor_text:
        '擁有儲蓄電力的特性。\n皮卡丘群居的森林裡\n會不斷落雷，十分危險。',
      language: {
        name: 'zh-Hant',
        url: 'https://pokeapi.co/api/v2/language/4/',
      },
      version: {
        name: 'ultra-sun',
        url: 'https://pokeapi.co/api/v2/version/29/',
      },
    },
    {
      flavor_text:
        'Son corps peut accumuler de l’électricité.\nLes forêts abritant des groupes de Pikachu\nsont d’ailleurs souvent frappées par la foudre.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: {
        name: 'ultra-sun',
        url: 'https://pokeapi.co/api/v2/version/29/',
      },
    },
    {
      flavor_text:
        'Es liegt in seiner Natur, konstant Elektrizität zu\nspeichern. Die Wälder, in denen Pikachu leben,\nbergen stets die Gefahr eines Blitzgewitters.',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: {
        name: 'ultra-sun',
        url: 'https://pokeapi.co/api/v2/version/29/',
      },
    },
    {
      flavor_text:
        'Acumulan electricidad de forma natural. Los\nbosques donde habitan en grupos están en\npeligro constante de ser alcanzados por rayos.',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      version: {
        name: 'ultra-sun',
        url: 'https://pokeapi.co/api/v2/version/29/',
      },
    },
    {
      flavor_text:
        'Accumula naturalmente elettricità. I boschi\npopolati da gruppi di Pikachu sono pericolosi\nperché continuamente colpiti dai fulmini.',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      version: {
        name: 'ultra-sun',
        url: 'https://pokeapi.co/api/v2/version/29/',
      },
    },
    {
      flavor_text:
        'Its nature is to store up electricity. Forests\nwhere nests of Pikachu live are dangerous,\nsince the trees are so often struck by lightning.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: {
        name: 'ultra-sun',
        url: 'https://pokeapi.co/api/v2/version/29/',
      },
    },
    {
      flavor_text:
        '電気を　ため込む　性質。\nピカチュウが　群れて　暮らす　森は\n落雷が　絶えず　危険だ。',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      version: {
        name: 'ultra-sun',
        url: 'https://pokeapi.co/api/v2/version/29/',
      },
    },
    {
      flavor_text:
        '有积存电力的特质。\n在皮卡丘群居的森林里\n会落雷不断，十分危险。',
      language: {
        name: 'zh-Hans',
        url: 'https://pokeapi.co/api/v2/language/12/',
      },
      version: {
        name: 'ultra-sun',
        url: 'https://pokeapi.co/api/v2/version/29/',
      },
    },
    {
      flavor_text:
        'ねてる　あいだに　ほっぺの　ふくろで\nでんきを　つくる。　ねぶそく　だと\nよわい　でんきしか　だせなくなるぞ。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      version: {
        name: 'ultra-moon',
        url: 'https://pokeapi.co/api/v2/version/30/',
      },
    },
    {
      flavor_text:
        '자는 동안 볼의 주머니에서\n전기를 만든다. 잠이 부족하면\n약한 전기밖에 낼 수 없게 된다.',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      version: {
        name: 'ultra-moon',
        url: 'https://pokeapi.co/api/v2/version/30/',
      },
    },
    {
      flavor_text:
        '會在睡覺時用臉頰上的囊\n製造電力。如果睡眠不足，\n就只能放出微弱的電力。',
      language: {
        name: 'zh-Hant',
        url: 'https://pokeapi.co/api/v2/language/4/',
      },
      version: {
        name: 'ultra-moon',
        url: 'https://pokeapi.co/api/v2/version/30/',
      },
    },
    {
      flavor_text:
        'Quand il dort, il génère de l’électricité dans les\npoches de ses joues. S’il manque de sommeil,\nil ne peut plus émettre qu’un faible courant.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: {
        name: 'ultra-moon',
        url: 'https://pokeapi.co/api/v2/version/30/',
      },
    },
    {
      flavor_text:
        'Seine Backentaschen laden sich elektrisch auf,\nwährend es schläft. Bei Schlafmangel kann es\nnur Schwachstrom entladen.',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: {
        name: 'ultra-moon',
        url: 'https://pokeapi.co/api/v2/version/30/',
      },
    },
    {
      flavor_text:
        'Mientras duerme, acumula electricidad en las\nbolsas de sus mejillas. Si no logra conciliar el\nsueño, solo puede emitir débiles descargas.',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      version: {
        name: 'ultra-moon',
        url: 'https://pokeapi.co/api/v2/version/30/',
      },
    },
    {
      flavor_text:
        'Mentre dorme produce energia elettrica nelle\nsacche che ha sulle guance. Se non riposa\nabbastanza può emettere solo deboli scariche.',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      version: {
        name: 'ultra-moon',
        url: 'https://pokeapi.co/api/v2/version/30/',
      },
    },
    {
      flavor_text:
        'While sleeping, it generates electricity in the\nsacs in its cheeks. If it’s not getting enough\nsleep, it will be able to use only weak electricity.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: {
        name: 'ultra-moon',
        url: 'https://pokeapi.co/api/v2/version/30/',
      },
    },
    {
      flavor_text:
        '寝てる　間に　ほっぺの　袋で\n電気を　作る。　寝不足　だと\n弱い　電気しか　出せなくなるぞ。',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      version: {
        name: 'ultra-moon',
        url: 'https://pokeapi.co/api/v2/version/30/',
      },
    },
    {
      flavor_text:
        '会在睡着时用脸颊上的袋子\n制造电力。如果睡眠不足，\n就只能放出微弱的电力。',
      language: {
        name: 'zh-Hans',
        url: 'https://pokeapi.co/api/v2/language/12/',
      },
      version: {
        name: 'ultra-moon',
        url: 'https://pokeapi.co/api/v2/version/30/',
      },
    },
    {
      flavor_text:
        'もりに　すむ　ポケモン。　ほっぺの\nふくろは　でんきを　ためるので\nさわると　パチパチ　しびれるぞ。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      version: {
        name: 'lets-go-pikachu',
        url: 'https://pokeapi.co/api/v2/version/31/',
      },
    },
    {
      flavor_text:
        '숲에 사는 포켓몬. 볼에 있는\n주머니에 전기를 모으고 있어\n만지면 저릿저릿 저리다.',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      version: {
        name: 'lets-go-pikachu',
        url: 'https://pokeapi.co/api/v2/version/31/',
      },
    },
    {
      flavor_text:
        '棲息在森林裡的寶可夢。\n臉頰上的囊能夠儲存電力，\n用手去摸會被電得麻麻的。',
      language: {
        name: 'zh-Hant',
        url: 'https://pokeapi.co/api/v2/language/4/',
      },
      version: {
        name: 'lets-go-pikachu',
        url: 'https://pokeapi.co/api/v2/version/31/',
      },
    },
    {
      flavor_text:
        'Ce Pokémon des bois accumule de l’électricité\ndans les poches de ses joues. Il ne faut pas les\ntoucher sous peine de recevoir une décharge.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: {
        name: 'lets-go-pikachu',
        url: 'https://pokeapi.co/api/v2/version/31/',
      },
    },
    {
      flavor_text:
        'Dieses Pikachu trägt die Kappe des Trainers,\nmit dem es sich zusammengeschlossen hat.\nEin Anblick, den man nicht alle Tage sieht!',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: {
        name: 'lets-go-pikachu',
        url: 'https://pokeapi.co/api/v2/version/31/',
      },
    },
    {
      flavor_text:
        'Dieses Pikachu trägt die Kappe des Trainers,\nmit dem es sich zusammengeschlossen hat.\nEin Anblick, den man nicht alle Tage sieht!',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: {
        name: 'lets-go-pikachu',
        url: 'https://pokeapi.co/api/v2/version/31/',
      },
    },
    {
      flavor_text:
        'Dieses Pikachu trägt die Kappe des Trainers,\nmit dem es sich zusammengeschlossen hat.\nEin Anblick, den man nicht alle Tage sieht!',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: {
        name: 'lets-go-pikachu',
        url: 'https://pokeapi.co/api/v2/version/31/',
      },
    },
    {
      flavor_text:
        'Dieses Pikachu trägt die Kappe des Trainers,\nmit dem es sich zusammengeschlossen hat.\nEin Anblick, den man nicht alle Tage sieht!',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: {
        name: 'lets-go-pikachu',
        url: 'https://pokeapi.co/api/v2/version/31/',
      },
    },
    {
      flavor_text:
        'Dieses Pikachu trägt die Kappe des Trainers,\nmit dem es sich zusammengeschlossen hat.\nEin Anblick, den man nicht alle Tage sieht!',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: {
        name: 'lets-go-pikachu',
        url: 'https://pokeapi.co/api/v2/version/31/',
      },
    },
    {
      flavor_text:
        'Dieses Pikachu trägt die Kappe des Trainers,\nmit dem es sich zusammengeschlossen hat.\nEin Anblick, den man nicht alle Tage sieht!',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: {
        name: 'lets-go-pikachu',
        url: 'https://pokeapi.co/api/v2/version/31/',
      },
    },
    {
      flavor_text:
        'Dieses Pikachu trägt die Kappe des Trainers,\nmit dem es sich zusammengeschlossen hat.\nEin Anblick, den man nicht alle Tage sieht!',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: {
        name: 'lets-go-pikachu',
        url: 'https://pokeapi.co/api/v2/version/31/',
      },
    },
    {
      flavor_text:
        'Pikachu ist in Wäldern zu Hause. Da es in seinen\nBackentaschen Elektrizität speichert, bekommt\nman einen Schlag, wenn man diese berührt.',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: {
        name: 'lets-go-pikachu',
        url: 'https://pokeapi.co/api/v2/version/31/',
      },
    },
    {
      flavor_text:
        'Los bosques son su hábitat natural. En las bolsas\nde las mejillas acumula electricidad, por lo que\nquien las toque puede recibir una descarga.',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      version: {
        name: 'lets-go-pikachu',
        url: 'https://pokeapi.co/api/v2/version/31/',
      },
    },
    {
      flavor_text:
        'Vive nelle foreste. Accumula elettricità nelle\nsacche sulle guance, e chiunque le tocchi\nprende la scossa.',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      version: {
        name: 'lets-go-pikachu',
        url: 'https://pokeapi.co/api/v2/version/31/',
      },
    },
    {
      flavor_text:
        'This forest-dwelling Pokémon stores electricity\nin its cheeks, so you’ll feel a tingly shock\nif you touch it.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: {
        name: 'lets-go-pikachu',
        url: 'https://pokeapi.co/api/v2/version/31/',
      },
    },
    {
      flavor_text:
        '森に　棲む　ポケモン。　ほっぺの\nふくろは　電気を　ためるので\n触ると　パチパチ　痺れるぞ。',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      version: {
        name: 'lets-go-pikachu',
        url: 'https://pokeapi.co/api/v2/version/31/',
      },
    },
    {
      flavor_text:
        '栖息在森林中的宝可梦。由于\n它脸颊上的袋子中储存了电能，\n触摸了之后会觉得麻麻的。',
      language: {
        name: 'zh-Hans',
        url: 'https://pokeapi.co/api/v2/language/12/',
      },
      version: {
        name: 'lets-go-pikachu',
        url: 'https://pokeapi.co/api/v2/version/31/',
      },
    },
    {
      flavor_text:
        'もりに　すむ　ポケモン。　ほっぺの\nふくろは　でんきを　ためるので\nさわると　パチパチ　しびれるぞ。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      version: {
        name: 'lets-go-eevee',
        url: 'https://pokeapi.co/api/v2/version/32/',
      },
    },
    {
      flavor_text:
        '숲에 사는 포켓몬. 볼에 있는\n주머니에 전기를 모으고 있어\n만지면 저릿저릿 저리다.',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      version: {
        name: 'lets-go-eevee',
        url: 'https://pokeapi.co/api/v2/version/32/',
      },
    },
    {
      flavor_text:
        '棲息在森林裡的寶可夢。\n臉頰上的囊能夠儲存電力，\n用手去摸會被電得麻麻的。',
      language: {
        name: 'zh-Hant',
        url: 'https://pokeapi.co/api/v2/language/4/',
      },
      version: {
        name: 'lets-go-eevee',
        url: 'https://pokeapi.co/api/v2/version/32/',
      },
    },
    {
      flavor_text:
        'Ce Pokémon des bois accumule de l’électricité\ndans les poches de ses joues. Il ne faut pas les\ntoucher sous peine de recevoir une décharge.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: {
        name: 'lets-go-eevee',
        url: 'https://pokeapi.co/api/v2/version/32/',
      },
    },
    {
      flavor_text:
        'Dieses Pikachu trägt die Kappe des Trainers,\nmit dem es sich zusammengeschlossen hat.\nEin Anblick, den man nicht alle Tage sieht!',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: {
        name: 'lets-go-eevee',
        url: 'https://pokeapi.co/api/v2/version/32/',
      },
    },
    {
      flavor_text:
        'Dieses Pikachu trägt die Kappe des Trainers,\nmit dem es sich zusammengeschlossen hat.\nEin Anblick, den man nicht alle Tage sieht!',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: {
        name: 'lets-go-eevee',
        url: 'https://pokeapi.co/api/v2/version/32/',
      },
    },
    {
      flavor_text:
        'Dieses Pikachu trägt die Kappe des Trainers,\nmit dem es sich zusammengeschlossen hat.\nEin Anblick, den man nicht alle Tage sieht!',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: {
        name: 'lets-go-eevee',
        url: 'https://pokeapi.co/api/v2/version/32/',
      },
    },
    {
      flavor_text:
        'Dieses Pikachu trägt die Kappe des Trainers,\nmit dem es sich zusammengeschlossen hat.\nEin Anblick, den man nicht alle Tage sieht!',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: {
        name: 'lets-go-eevee',
        url: 'https://pokeapi.co/api/v2/version/32/',
      },
    },
    {
      flavor_text:
        'Dieses Pikachu trägt die Kappe des Trainers,\nmit dem es sich zusammengeschlossen hat.\nEin Anblick, den man nicht alle Tage sieht!',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: {
        name: 'lets-go-eevee',
        url: 'https://pokeapi.co/api/v2/version/32/',
      },
    },
    {
      flavor_text:
        'Dieses Pikachu trägt die Kappe des Trainers,\nmit dem es sich zusammengeschlossen hat.\nEin Anblick, den man nicht alle Tage sieht!',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: {
        name: 'lets-go-eevee',
        url: 'https://pokeapi.co/api/v2/version/32/',
      },
    },
    {
      flavor_text:
        'Dieses Pikachu trägt die Kappe des Trainers,\nmit dem es sich zusammengeschlossen hat.\nEin Anblick, den man nicht alle Tage sieht!',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: {
        name: 'lets-go-eevee',
        url: 'https://pokeapi.co/api/v2/version/32/',
      },
    },
    {
      flavor_text:
        'Pikachu ist in Wäldern zu Hause. Da es in seinen\nBackentaschen Elektrizität speichert, bekommt\nman einen Schlag, wenn man diese berührt.',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: {
        name: 'lets-go-eevee',
        url: 'https://pokeapi.co/api/v2/version/32/',
      },
    },
    {
      flavor_text:
        'Los bosques son su hábitat natural. En las bolsas\nde las mejillas acumula electricidad, por lo que\nquien las toque puede recibir una descarga.',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      version: {
        name: 'lets-go-eevee',
        url: 'https://pokeapi.co/api/v2/version/32/',
      },
    },
    {
      flavor_text:
        'Vive nelle foreste. Accumula elettricità nelle\nsacche sulle guance, e chiunque le tocchi\nprende la scossa.',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      version: {
        name: 'lets-go-eevee',
        url: 'https://pokeapi.co/api/v2/version/32/',
      },
    },
    {
      flavor_text:
        'This forest-dwelling Pokémon stores electricity\nin its cheeks, so you’ll feel a tingly shock\nif you touch it.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: {
        name: 'lets-go-eevee',
        url: 'https://pokeapi.co/api/v2/version/32/',
      },
    },
    {
      flavor_text:
        '森に　棲む　ポケモン。　ほっぺの\nふくろは　電気を　ためるので\n触ると　パチパチ　痺れるぞ。',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      version: {
        name: 'lets-go-eevee',
        url: 'https://pokeapi.co/api/v2/version/32/',
      },
    },
    {
      flavor_text:
        '栖息在森林中的宝可梦。由于\n它脸颊上的袋子中储存了电能，\n触摸了之后会觉得麻麻的。',
      language: {
        name: 'zh-Hans',
        url: 'https://pokeapi.co/api/v2/language/12/',
      },
      version: {
        name: 'lets-go-eevee',
        url: 'https://pokeapi.co/api/v2/version/32/',
      },
    },
    {
      flavor_text:
        'かぶっているのは　パートナーの\nぼうし。　いろんな　せかいを　たびした\nおもいでが　たくさん　つまっている。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'かぶっているのは　パートナーの\nぼうし。　さまざまな　ちほうの\nおもいでが　たくさん　つまっている。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'かぶっているのは　パートナーの\nぼうし。　であった　ときの\nおもいでが　たくさん　つまっている。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'かぶっているのは　パートナーの\nぼうし。　アローラで　すごした\nおもいでが　たくさん　つまっている。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'かぶっているのは　パートナーの\nぼうし。　イッシュを　たびした\nおもいでが　たくさん　つまっている。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'かぶっているのは　パートナーの\nぼうし。　カロスを　たびした\nおもいでが　たくさん　つまっている。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'かぶっているのは　パートナーの\nぼうし。　シンオウを　たびした\nおもいでが　たくさん　つまっている。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'かぶっているのは　パートナーの\nぼうし。　ホウエンを　たびした\nおもいでが　たくさん　つまっている。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'つくる　でんきが　きょうりょくな\nピカチュウほど　ほっぺの　ふくろは\nやわらかく　よく　のびるぞ。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'ぼうちょうした　キョダイマックスの\nパワーによって　からだが　ふくれて\nそらまで　のびる　しっぽに　なった。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        '만들어 내는 전기가 강력한\n피카츄일수록 볼의 주머니가\n부드럽고 잘 늘어난다.',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        '쓰고 있는 것은 파트너의\n모자다. 만났을 당시의\n추억이 가득 담겨 있다.',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        '쓰고 있는 것은 파트너의\n모자다. 세계 여러 곳을 여행한\n추억이 가득 담겨 있다.',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        '쓰고 있는 것은 파트너의\n모자다. 신오를 여행했을 때의\n추억이 가득 담겨 있다.',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        '쓰고 있는 것은 파트너의\n모자다. 알로라를 여행했을 때의\n추억이 가득 담겨 있다.',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        '쓰고 있는 것은 파트너의\n모자다. 여러 지방에서의\n추억이 가득 담겨 있다.',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        '쓰고 있는 것은 파트너의\n모자다. 칼로스를 여행했을 때의\n추억이 가득 담겨 있다.',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        '쓰고 있는 것은 파트너의\n모자다. 하나를 여행했을 때의\n추억이 가득 담겨 있다.',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        '쓰고 있는 것은 파트너의\n모자다. 호연을 여행했을 때의\n추억이 가득 담겨 있다.',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        '팽창한 거다이맥스의\n파워에 의해 몸이 부풀어서\n꼬리가 하늘까지 닿게 되었다.',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        '戴著的是夥伴訓練家的帽子。\n帽子上承載著許許多多\n在卡洛斯地區冒險的回憶。',
      language: {
        name: 'zh-Hant',
        url: 'https://pokeapi.co/api/v2/language/4/',
      },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        '戴著的是夥伴訓練家的帽子。\n帽子上承載著許許多多\n在各個地區冒險的回憶。',
      language: {
        name: 'zh-Hant',
        url: 'https://pokeapi.co/api/v2/language/4/',
      },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        '戴著的是夥伴訓練家的帽子。\n帽子上承載著許許多多\n在各種世界冒險的回憶。',
      language: {
        name: 'zh-Hant',
        url: 'https://pokeapi.co/api/v2/language/4/',
      },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        '戴著的是夥伴訓練家的帽子。\n帽子上承載著許許多多\n在合眾地區冒險的回憶。',
      language: {
        name: 'zh-Hant',
        url: 'https://pokeapi.co/api/v2/language/4/',
      },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        '戴著的是夥伴訓練家的帽子。\n帽子上承載著許許多多\n在神奧地區冒險的回憶。',
      language: {
        name: 'zh-Hant',
        url: 'https://pokeapi.co/api/v2/language/4/',
      },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        '戴著的是夥伴訓練家的帽子。\n帽子上承載著許許多多\n在豐緣地區冒險的回憶。',
      language: {
        name: 'zh-Hant',
        url: 'https://pokeapi.co/api/v2/language/4/',
      },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        '戴著的是夥伴訓練家的帽子。\n帽子上承載著許許多多\n在阿羅拉地區冒險的回憶。',
      language: {
        name: 'zh-Hant',
        url: 'https://pokeapi.co/api/v2/language/4/',
      },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        '戴著的是夥伴訓練家的帽子。\n帽子上承載著許許多多\n與夥伴相遇時的回憶。',
      language: {
        name: 'zh-Hant',
        url: 'https://pokeapi.co/api/v2/language/4/',
      },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        '膨脹的超極巨化之力\n使得牠的身體變大，\n尾巴也變得高聳入雲。',
      language: {
        name: 'zh-Hant',
        url: 'https://pokeapi.co/api/v2/language/4/',
      },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        '越是能製造出強大電流的\n皮卡丘，臉頰上的囊就越\n柔軟，同時也越有伸展性。',
      language: {
        name: 'zh-Hant',
        url: 'https://pokeapi.co/api/v2/language/4/',
      },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'Il porte la casquette de son partenaire.\nElle lui rappelle leur première rencontre.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'Il porte la casquette de son partenaire.\nElle lui rappelle leurs aventures dans\ndiverses régions.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'Il porte la casquette de son partenaire.\nElle lui rappelle leurs aventures dans\nles nombreuses régions qu’ils ont traversées.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'Il porte la casquette de son partenaire.\nElle lui rappelle leurs aventures lors\nde leur voyage à travers la région de Hoenn.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'Il porte la casquette de son partenaire.\nElle lui rappelle leurs aventures lors\nde leur voyage à travers la région de Kalos.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'Il porte la casquette de son partenaire.\nElle lui rappelle leurs aventures lors\nde leur voyage à travers la région de Sinnoh.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'Il porte la casquette de son partenaire.\nElle lui rappelle leurs aventures lors\nde leur voyage à travers la région d’Alola.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'Il porte la casquette de son partenaire.\nElle lui rappelle leurs aventures lors\nde leur voyage à travers la région d’Unys.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'L’énergie du phénomène Gigamax l’a tellement\nfait grossir que sa queue touche le ciel.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'Plus la puissance électrique de Pikachu est élevée,\nplus les poches de ses joues sont extensibles.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'Die Kappe, die es trägt, gehört seinem Partner.\nSie steckt voller Erinnerungen an ihre Abenteuer\nin den verschiedensten Regionen.',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'Die Kappe, die es trägt, gehört seinem Partner.\nSie steckt voller Erinnerungen an ihre Abenteuer\nin der Einall-Region.',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'Die Kappe, die es trägt, gehört seinem Partner.\nSie steckt voller Erinnerungen an ihre Abenteuer\nin der Hoenn-Region.',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'Die Kappe, die es trägt, gehört seinem Partner.\nSie steckt voller Erinnerungen an ihre Abenteuer\nin der Kalos-Region.',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'Die Kappe, die es trägt, gehört seinem Partner.\nSie steckt voller Erinnerungen an ihre Abenteuer\nin der Sinnoh-Region.',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'Die Kappe, die es trägt, gehört seinem Partner.\nSie steckt voller Erinnerungen an ihre Abenteuer\nin verschiedenen Regionen.',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'Die Kappe, die es trägt, gehört seinem Partner.\nSie steckt voller Erinnerungen an ihre Zeit in der\nAlola-Region.',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'Die Kappe, die es trägt, gehört seinem Partner.\nSie steckt voller Erinnerungen an ihre erste\nBegegnung.',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'Durch die Gigadynamax-Energie ist sein Körper\nso stark gewachsen, dass sein Schweif nun bis in\nden Himmel ragt.',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'Je stärker die Elektrizität ist, die Pikachu\nproduziert, desto weicher und elastischer\nsind seine Backentaschen.',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'Cuanto más potente es la energía eléctrica que\ngenera este Pokémon, más suaves y elásticas se\nvuelven las bolsas de sus mejillas.',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'La energía del fenómeno Gigamax ha hecho\nque su cuerpo se expanda y que su cola pueda\nestirarse hasta alcanzar el cielo.',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'La gorra que lleva pertenece a su compañero\ny le trae gratos recuerdos de sus viajes por\nmultitud de regiones.',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'La gorra que lleva pertenece a su compañero\ny le trae gratos recuerdos de sus viajes por\nmultitud de regiones.',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'La gorra que lleva pertenece a su compañero\ny le trae gratos recuerdos de sus viajes por la\nregión de Alola.',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'La gorra que lleva pertenece a su compañero\ny le trae gratos recuerdos de sus viajes por la\nregión de Hoenn.',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'La gorra que lleva pertenece a su compañero\ny le trae gratos recuerdos de sus viajes por la\nregión de Kalos.',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'La gorra que lleva pertenece a su compañero\ny le trae gratos recuerdos de sus viajes por la\nregión de Sinnoh.',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'La gorra que lleva pertenece a su compañero\ny le trae gratos recuerdos de sus viajes por la\nregión de Teselia.',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'La gorra que lleva pertenece a su compañero\ny le trae gratos recuerdos del momento en que\nse conocieron.',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'Indossa il cappello del suo inseparabile amico.\nGli ricorda le avventure vissute durante i loro\nviaggi in varie regioni.',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'Indossa il cappello del suo inseparabile amico.\nGli ricorda le avventure vissute durante i loro\nviaggi in varie regioni.',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'Indossa il cappello del suo inseparabile amico.\nGli ricorda le avventure vissute durante il loro\nviaggio nella regione di Alola.',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'Indossa il cappello del suo inseparabile amico.\nGli ricorda le avventure vissute durante il loro\nviaggio nella regione di Hoenn.',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'Indossa il cappello del suo inseparabile amico.\nGli ricorda le avventure vissute durante il loro\nviaggio nella regione di Kalos.',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'Indossa il cappello del suo inseparabile amico.\nGli ricorda le avventure vissute durante il loro\nviaggio nella regione di Sinnoh.',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'Indossa il cappello del suo inseparabile amico.\nGli ricorda le avventure vissute durante il loro\nviaggio nella regione di Unima.',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'Indossa il cappello del suo inseparabile amico.\nÈ un prezioso ricordo del loro fatidico incontro.',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'L’energia del fenomeno Gigamax ha ingigantito\nil suo corpo a tal punto che la sua coda arriva\nfino al cielo.',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'Più potente è l’energia elettrica prodotta dal\nPokémon, più le sacche sulle sue guance sono\nmorbide ed elastiche.',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'Its Gigantamax power expanded, forming its\nsupersized body and towering tail.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'Pikachu that can generate powerful electricity\nhave cheek sacs that are extra soft and\nsuper stretchy.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'This Pikachu wears its partner’s cap, which is\nbrimming with memories of traveling through\ndifferent regions.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'This Pikachu wears its partner’s cap, which is\nbrimming with memories of traveling through\nmany different regions.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'This Pikachu wears its partner’s cap, which is\nbrimming with memories of traveling through\nthe Alola region.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'This Pikachu wears its partner’s cap, which is\nbrimming with memories of traveling through\nthe Hoenn region.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'This Pikachu wears its partner’s cap, which is\nbrimming with memories of traveling through\nthe Kalos region.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'This Pikachu wears its partner’s cap, which is\nbrimming with memories of traveling through\nthe Sinnoh region.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'This Pikachu wears its partner’s cap, which is\nbrimming with memories of traveling through\nthe Unova region.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'This Pikachu wears its partner’s cap, which is\nbrimming with memories of when they first met.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'かぶっているのは　パートナーの\n帽子。　いろんな　せかいを　旅した\n思い出が　たくさん　詰まっている。',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'かぶっているのは　パートナーの\n帽子。　さまざまな　地方の\n思い出が　たくさん　詰まっている。',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'かぶっているのは　パートナーの\n帽子。　アローラで　すごした\n思い出が　たくさん　詰まっている。',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'かぶっているのは　パートナーの\n帽子。　イッシュを　旅した\n思い出が　たくさん　詰まっている。',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'かぶっているのは　パートナーの\n帽子。　カロスを　旅した\n思い出が　たくさん　詰まっている。',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'かぶっているのは　パートナーの\n帽子。　シンオウを　旅した\n思い出が　たくさん　詰まっている。',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'かぶっているのは　パートナーの\n帽子。　ホウエンを　旅した\n思い出が　たくさん　詰まっている。',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'かぶっているのは　パートナーの\n帽子。　出会った　ときの\n思い出が　たくさん　詰まっている。',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'つくる　電気が　強力な\nピカチュウほど　ほっぺの　袋は\n軟らかく　よく　伸びるぞ。',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        '膨張した　キョダイマックスの\nパワーによって　体が　ふくれて\n空まで　伸びる　しっぽに　なった。',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        '戴着的是伙伴训练家的帽子。\n帽子上承载着许许多多\n与对方相遇时的回忆。',
      language: {
        name: 'zh-Hans',
        url: 'https://pokeapi.co/api/v2/language/12/',
      },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        '戴着的是伙伴训练家的帽子。\n帽子上承载着许许多多\n在不同地区冒险的回忆。',
      language: {
        name: 'zh-Hans',
        url: 'https://pokeapi.co/api/v2/language/12/',
      },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        '戴着的是伙伴训练家的帽子。\n帽子上承载着许许多多\n在世界各地旅行时的回忆。',
      language: {
        name: 'zh-Hans',
        url: 'https://pokeapi.co/api/v2/language/12/',
      },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        '戴着的是伙伴训练家的帽子。\n帽子上承载着许许多多\n在丰缘地区冒险的回忆。',
      language: {
        name: 'zh-Hans',
        url: 'https://pokeapi.co/api/v2/language/12/',
      },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        '戴着的是伙伴训练家的帽子。\n帽子上承载着许许多多\n在卡洛斯地区冒险的回忆。',
      language: {
        name: 'zh-Hans',
        url: 'https://pokeapi.co/api/v2/language/12/',
      },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        '戴着的是伙伴训练家的帽子。\n帽子上承载着许许多多\n在合众地区冒险的回忆。',
      language: {
        name: 'zh-Hans',
        url: 'https://pokeapi.co/api/v2/language/12/',
      },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        '戴着的是伙伴训练家的帽子。\n帽子上承载着许许多多\n在神奥地区冒险的回忆。',
      language: {
        name: 'zh-Hans',
        url: 'https://pokeapi.co/api/v2/language/12/',
      },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        '戴着的是伙伴训练家的帽子。\n帽子上承载着许许多多\n在阿罗拉地区冒险的回忆。',
      language: {
        name: 'zh-Hans',
        url: 'https://pokeapi.co/api/v2/language/12/',
      },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        '膨胀的超极巨化之力\n使得它的身体变大，\n尾巴也变得高耸入云。',
      language: {
        name: 'zh-Hans',
        url: 'https://pokeapi.co/api/v2/language/12/',
      },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        '越是能制造出强大电流的\n皮卡丘，脸颊上的囊就越\n柔软，同时也越有伸展性。',
      language: {
        name: 'zh-Hans',
        url: 'https://pokeapi.co/api/v2/language/12/',
      },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'あいぼうの　ぼうしを　かぶっている。\nいろんな　せかいを　ともに　たびする\nたいせつな　あかし　なのだ。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'あいぼうの　ぼうしを　かぶっている。\nうんめいてきな　であいの\nたいせつな　あかし　なのだ。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'あいぼうの　ぼうしを　かぶっている。\nたくさんの　ちほうを　いっしょに\nぼうけんした　あかしだ。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'あいぼうの　ぼうしを　かぶっている。\nアローラちほうを　いっしょに\nぼうけんした　あかし　なのだ。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'あいぼうの　ぼうしを　かぶっている。\nイッシュちほうを　いっしょに\nぼうけんした　あかし　なのだ。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'あいぼうの　ぼうしを　かぶっている。\nカロスちほうを　いっしょに\nぼうけんした　あかし　なのだ。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'あいぼうの　ぼうしを　かぶっている。\nシンオウちほうを　いっしょに\nぼうけんした　あかし　なのだ。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'あいぼうの　ぼうしを　かぶっている。\nホウエンちほうを　いっしょに\nぼうけんした　あかし　なのだ。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'おたがいの　しっぽを　くっつけて\nでんきを　ながしあうのが\nピカチュウ　どうしの　あいさつだ。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'カミナリの　しっぽを　たたきつけると\nらくらいに　ひってきする　でんあつと\nでんりゅうが　あいてを　つらぬく。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        '번개 꼬리를 세차게 내려치면\n낙뢰에 필적하는 전압과\n전류가 상대를 관통한다.',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        '서로의 꼬리를 붙여서\n전기를 흐르게 하는 게\n피카츄 사이의 인사법이다.',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        '파트너의 모자를 쓰고 있다.\n많은 지방을 함께\n모험한 증표다.',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        '파트너의 모자를 쓰고 있다.\n신오지방을 함께\n모험한 증표다.',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        '파트너의 모자를 쓰고 있다.\n알로라지방을 함께\n모험한 증표다.',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        '파트너의 모자를 쓰고 있다.\n여러 세계를 함께 여행하는\n소중한 증표다.',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        '파트너의 모자를 쓰고 있다.\n운명적인 만남의\n소중한 증표다.',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        '파트너의 모자를 쓰고 있다.\n칼로스지방을 함께\n모험한 증표다.',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        '파트너의 모자를 쓰고 있다.\n하나지방을 함께\n모험한 증표다.',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        '파트너의 모자를 쓰고 있다.\n호연지방을 함께\n모험한 증표다.',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        '戴著搭檔訓練家的帽子。\n這頂帽子是與搭檔\n命運般相遇的重要證明。',
      language: {
        name: 'zh-Hant',
        url: 'https://pokeapi.co/api/v2/language/4/',
      },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        '戴著搭檔訓練家的帽子。\n這頂帽子是與搭檔一起\n在卡洛斯地區冒險過的證明。',
      language: {
        name: 'zh-Hant',
        url: 'https://pokeapi.co/api/v2/language/4/',
      },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        '戴著搭檔訓練家的帽子。\n這頂帽子是與搭檔一起\n在各種世界旅行的重要證明。',
      language: {
        name: 'zh-Hant',
        url: 'https://pokeapi.co/api/v2/language/4/',
      },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        '戴著搭檔訓練家的帽子。\n這頂帽子是與搭檔一起\n在合眾地區冒險過的證明。',
      language: {
        name: 'zh-Hant',
        url: 'https://pokeapi.co/api/v2/language/4/',
      },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        '戴著搭檔訓練家的帽子。\n這頂帽子是與搭檔一起\n在神奧地區冒險過的證明。',
      language: {
        name: 'zh-Hant',
        url: 'https://pokeapi.co/api/v2/language/4/',
      },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        '戴著搭檔訓練家的帽子。\n這頂帽子是與搭檔一起\n在許多地區冒險過的證明。',
      language: {
        name: 'zh-Hant',
        url: 'https://pokeapi.co/api/v2/language/4/',
      },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        '戴著搭檔訓練家的帽子。\n這頂帽子是與搭檔一起\n在豐緣地區冒險過的證明。',
      language: {
        name: 'zh-Hant',
        url: 'https://pokeapi.co/api/v2/language/4/',
      },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        '戴著搭檔訓練家的帽子。\n這頂帽子是與搭檔一起\n在阿羅拉地區冒險過的證明。',
      language: {
        name: 'zh-Hant',
        url: 'https://pokeapi.co/api/v2/language/4/',
      },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        '當牠用閃電狀的尾巴擊中目標時，\n不亞於雷擊的電壓和電流\n便會貫穿對方的全身。',
      language: {
        name: 'zh-Hant',
        url: 'https://pokeapi.co/api/v2/language/4/',
      },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text: '皮卡丘們把尾巴\n貼在一起交換電流，\n其實是在互相打招呼。',
      language: {
        name: 'zh-Hant',
        url: 'https://pokeapi.co/api/v2/language/4/',
      },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'Les Pikachu se disent bonjour en se frottant\nla queue et en y faisant passer du courant\nélectrique.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'Un Pikachu qui porte la casquette\nde son partenaire en souvenir de la région\nde Hoenn qu’ils ont traversée ensemble.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'Un Pikachu qui porte la casquette\nde son partenaire en souvenir de la région\nde Kalos qu’ils ont traversée ensemble.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'Un Pikachu qui porte la casquette\nde son partenaire en souvenir de la région\nde Sinnoh qu’ils ont traversée ensemble.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'Un Pikachu qui porte la casquette\nde son partenaire en souvenir de la région\nd’Alola qu’ils ont traversée ensemble.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'Un Pikachu qui porte la casquette\nde son partenaire en souvenir de la région\nd’Unys qu’ils ont traversée ensemble.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'Un Pikachu qui porte la casquette\nde son partenaire en souvenir des nombreuses\nrégions qu’ils ont traversées ensemble.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'Un Pikachu qui porte la casquette\nde son partenaire, souvenir inestimable\nde leurs voyages dans diverses régions.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'Un Pikachu qui porte la casquette\nde son partenaire, souvenir inestimable\nd’une rencontre marquée par le sceau du destin.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'Un coup de sa queue en forme d’éclair donne\nà l’adversaire un choc électrique ayant l’intensité\net la tension de la foudre qui tombe.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'Es trägt die Kappe seines Partners. Sie ist ein\nkostbares Andenken an die Abenteuer, die sie in\nverschiedenen Regionen zusammen erlebt haben.',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'Es trägt die Kappe seines Partners. Sie ist ein\nkostbares Andenken an ihre schicksalhafte erste\nBegegnung.',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'Es trägt die Kappe seines Partners. Sie zeugt\ndavon, dass sie in der Alola-Region zusammen\nAbenteuer erlebt haben.',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'Es trägt die Kappe seines Partners. Sie zeugt\ndavon, dass sie in der Einall-Region zusammen\nAbenteuer erlebt haben.',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'Es trägt die Kappe seines Partners. Sie zeugt\ndavon, dass sie in der Hoenn-Region zusammen\nAbenteuer erlebt haben.',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'Es trägt die Kappe seines Partners. Sie zeugt\ndavon, dass sie in der Kalos-Region zusammen\nAbenteuer erlebt haben.',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'Es trägt die Kappe seines Partners. Sie zeugt\ndavon, dass sie in der Sinnoh-Region zusammen\nAbenteuer erlebt haben.',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'Es trägt die Kappe seines Partners. Sie zeugt\ndavon, dass sie in vielen Regionen zusammen\nAbenteuer erlebt haben.',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'Pikachu begrüßen einander, indem sie ihre\nSchweife aneinanderreiben und eine Ladung\nStrom durch diese gleiten lassen.',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'Schlägt es mit seinem blitzförmigen Schweif zu,\nfahren die Elektrizität und die Spannung eines\neinschlagenden Blitzes durch den Gegner.',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'Lleva puesta la gorra de su compañero, recuerdo\nde las innumerables aventuras que vivieron en\nla región de Alola.',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'Lleva puesta la gorra de su compañero, recuerdo\nde las innumerables aventuras que vivieron en\nla región de Hoenn.',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'Lleva puesta la gorra de su compañero, recuerdo\nde las innumerables aventuras que vivieron en\nla región de Kalos.',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'Lleva puesta la gorra de su compañero, recuerdo\nde las innumerables aventuras que vivieron en\nla región de Sinnoh.',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'Lleva puesta la gorra de su compañero, recuerdo\nde las innumerables aventuras que vivieron en\nla región de Teselia.',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'Lleva puesta la gorra de su compañero, recuerdo\nde las innumerables aventuras que vivieron en\nmultitud de regiones.',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'Lleva puesta la gorra de su compañero, recuerdo\nde las innumerables aventuras que vivieron en\nmultitud de regiones.',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'Lleva puesta la gorra de su compañero. Es un\nvalioso recuerdo del día en el que el destino\ndecidió que sus caminos debían encontrarse.',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'Los miembros de esta especie se saludan entre\nsí uniendo sus colas y transmitiéndose corriente\neléctrica.',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'Un golpe con su cola en forma de rayo puede\npropinar al rival una descarga eléctrica con una\nintensidad comparable a la de un relámpago.',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'Con un colpo della sua coda a forma di saetta\ntrasmette all’avversario una scarica elettrica\ndall’intensità e dal voltaggio di un fulmine.',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'I Pikachu si salutano fra loro unendo le code\ne facendovi passare elettricità attraverso.',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'Indossa il cappello del suo amato Allenatore\nin ricordo delle avventure vissute durante i loro\nviaggi in varie regioni.',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'Indossa il cappello del suo amato Allenatore\nin ricordo delle avventure vissute durante i loro\nviaggi in varie regioni.',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'Indossa il cappello del suo amato Allenatore\nin ricordo delle avventure vissute durante il\nloro viaggio nella regione di Alola.',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'Indossa il cappello del suo amato Allenatore\nin ricordo delle avventure vissute durante il\nloro viaggio nella regione di Hoenn.',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'Indossa il cappello del suo amato Allenatore\nin ricordo delle avventure vissute durante il\nloro viaggio nella regione di Kalos.',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'Indossa il cappello del suo amato Allenatore\nin ricordo delle avventure vissute durante il\nloro viaggio nella regione di Sinnoh.',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'Indossa il cappello del suo amato Allenatore\nin ricordo delle avventure vissute durante il\nloro viaggio nella regione di Unima.',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'Indossa il cappello del suo amato Allenatore.\nÈ un prezioso ricordo del loro fatidico incontro.',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'This Pikachu is wearing its Trainer’s cap.\nThe cap is a precious symbol of a\nfateful encounter.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'This Pikachu is wearing its Trainer’s cap.\nThe cap is a precious symbol that travels across\ndifferent regions with Pikachu.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'This Pikachu is wearing its Trainer’s cap.\nThe cap is proof that the two traveled\nacross many regions together.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'This Pikachu is wearing its Trainer’s cap.\nThe cap is proof that the two traveled\nthroughout the Alola region together.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'This Pikachu is wearing its Trainer’s cap.\nThe cap is proof that the two traveled\nthroughout the Hoenn region together.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'This Pikachu is wearing its Trainer’s cap.\nThe cap is proof that the two traveled\nthroughout the Kalos region together',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'This Pikachu is wearing its Trainer’s cap.\nThe cap is proof that the two traveled\nthroughout the Sinnoh region together.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'This Pikachu is wearing its Trainer’s cap.\nThe cap is proof that the two traveled\nthroughout the Unova region together.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'When Pikachu meet, they’ll touch their tails\ntogether and exchange electricity through them\nas a form of greeting.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'When it smashes its opponents with its bolt-\nshaped tail, it delivers a surge of electricity\nequivalent to a lightning strike.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'おたがいの　しっぽを　くっつけて\n電気を　流しあうのが\nピカチュウ　同士の　挨拶だ。',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'カミナリの　しっぽを　叩きつけると\n落雷に　匹敵する　電圧と\n電流が　相手を　つらぬく。',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        '相棒の　帽子を　かぶっている。\nいろんな　世界を　ともに　旅する\nたいせつな　あかし　なのだ。',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        '相棒の　帽子を　かぶっている。\nたくさんの　地方を　いっしょに\n冒険した　あかしだ。',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        '相棒の　帽子を　かぶっている。\nアローラ地方を　いっしょに\n冒険した　あかし　なのだ。',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        '相棒の　帽子を　かぶっている。\nイッシュ地方を　いっしょに\n冒険した　あかし　なのだ。',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        '相棒の　帽子を　かぶっている。\nカロス地方を　いっしょに\n冒険した　あかし　なのだ。',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        '相棒の　帽子を　かぶっている。\nシンオウ地方を　いっしょに\n冒険した　あかし　なのだ。',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        '相棒の　帽子を　かぶっている。\nホウエン地方を　いっしょに\n冒険した　あかし　なのだ。',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        '相棒の　帽子を　かぶっている。\n運命的な　出会いの\nたいせつな　あかし　なのだ。',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        '当它用闪电状的尾巴击中\n目标时，不亚于雷击的电压\n及电流便会贯穿对方的全身。',
      language: {
        name: 'zh-Hans',
        url: 'https://pokeapi.co/api/v2/language/12/',
      },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        '戴着搭档训练家的帽子。\n这顶帽子是与搭档\n命运般相遇的重要证明。',
      language: {
        name: 'zh-Hans',
        url: 'https://pokeapi.co/api/v2/language/12/',
      },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        '戴着搭档训练家的帽子。\n这顶帽子是与搭档一起\n在不同地区冒险过的证明。',
      language: {
        name: 'zh-Hans',
        url: 'https://pokeapi.co/api/v2/language/12/',
      },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        '戴着搭档训练家的帽子。\n这顶帽子是与搭档一起\n在丰缘地区冒险过的证明。',
      language: {
        name: 'zh-Hans',
        url: 'https://pokeapi.co/api/v2/language/12/',
      },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        '戴着搭档训练家的帽子。\n这顶帽子是与搭档一起\n在卡洛斯地区冒险过的证明。',
      language: {
        name: 'zh-Hans',
        url: 'https://pokeapi.co/api/v2/language/12/',
      },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        '戴着搭档训练家的帽子。\n这顶帽子是与搭档一起\n在合众地区冒险过的证明。',
      language: {
        name: 'zh-Hans',
        url: 'https://pokeapi.co/api/v2/language/12/',
      },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        '戴着搭档训练家的帽子。\n这顶帽子是与搭档一起\n在神奥地区冒险过的证明。',
      language: {
        name: 'zh-Hans',
        url: 'https://pokeapi.co/api/v2/language/12/',
      },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        '戴着搭档训练家的帽子。\n这顶帽子是与搭档一起\n在阿罗拉地区冒险过的证明。',
      language: {
        name: 'zh-Hans',
        url: 'https://pokeapi.co/api/v2/language/12/',
      },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        '戴着搭档训练家的帽子。\n这顶帽子是与搭档一起在\n各种世界里游历的重要证明。',
      language: {
        name: 'zh-Hans',
        url: 'https://pokeapi.co/api/v2/language/12/',
      },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text: '皮卡丘们把尾巴\n贴在一起交换电流，\n其实是在互相打招呼。',
      language: {
        name: 'zh-Hans',
        url: 'https://pokeapi.co/api/v2/language/12/',
      },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
  ],
  form_descriptions: [],
  forms_switchable: false,
  gender_rate: 4,
  genera: [
    {
      genus: 'ねずみポケモン',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
    },
    {
      genus: '쥐포켓몬',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
    },
    {
      genus: '鼠寶可夢',
      language: {
        name: 'zh-Hant',
        url: 'https://pokeapi.co/api/v2/language/4/',
      },
    },
    {
      genus: 'Pokémon Souris',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
    },
    {
      genus: 'Maus',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
    },
    {
      genus: 'Pokémon Ratón',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
    },
    {
      genus: 'Pokémon Topo',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
    },
    {
      genus: 'Mouse Pokémon',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
    },
    {
      genus: 'ねずみポケモン',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
    },
    {
      genus: '鼠宝可梦',
      language: {
        name: 'zh-Hans',
        url: 'https://pokeapi.co/api/v2/language/12/',
      },
    },
  ],
  generation: {
    name: 'generation-i',
    url: 'https://pokeapi.co/api/v2/generation/1/',
  },
  growth_rate: {
    name: 'medium',
    url: 'https://pokeapi.co/api/v2/growth-rate/2/',
  },
  habitat: {
    name: 'forest',
    url: 'https://pokeapi.co/api/v2/pokemon-habitat/2/',
  },
  has_gender_differences: true,
  hatch_counter: 10,
  id: 25,
  is_baby: false,
  is_legendary: false,
  is_mythical: false,
  name: 'pikachu',
  names: [
    {
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      name: 'ピカチュウ',
    },
    {
      language: {
        name: 'roomaji',
        url: 'https://pokeapi.co/api/v2/language/2/',
      },
      name: 'Pikachu',
    },
    {
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      name: '피카츄',
    },
    {
      language: {
        name: 'zh-Hant',
        url: 'https://pokeapi.co/api/v2/language/4/',
      },
      name: '皮卡丘',
    },
    {
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      name: 'Pikachu',
    },
    {
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      name: 'Pikachu',
    },
    {
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      name: 'Pikachu',
    },
    {
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      name: 'Pikachu',
    },
    {
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      name: 'Pikachu',
    },
    {
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      name: 'ピカチュウ',
    },
    {
      language: {
        name: 'zh-Hans',
        url: 'https://pokeapi.co/api/v2/language/12/',
      },
      name: '皮卡丘',
    },
  ],
  order: 26,
  pal_park_encounters: [
    {
      area: {
        name: 'forest',
        url: 'https://pokeapi.co/api/v2/pal-park-area/1/',
      },
      base_score: 80,
      rate: 10,
    },
  ],
  pokedex_numbers: [
    {
      entry_number: 25,
      pokedex: {
        name: 'national',
        url: 'https://pokeapi.co/api/v2/pokedex/1/',
      },
    },
    {
      entry_number: 25,
      pokedex: { name: 'kanto', url: 'https://pokeapi.co/api/v2/pokedex/2/' },
    },
    {
      entry_number: 22,
      pokedex: {
        name: 'original-johto',
        url: 'https://pokeapi.co/api/v2/pokedex/3/',
      },
    },
    {
      entry_number: 156,
      pokedex: { name: 'hoenn', url: 'https://pokeapi.co/api/v2/pokedex/4/' },
    },
    {
      entry_number: 104,
      pokedex: {
        name: 'original-sinnoh',
        url: 'https://pokeapi.co/api/v2/pokedex/5/',
      },
    },
    {
      entry_number: 104,
      pokedex: {
        name: 'extended-sinnoh',
        url: 'https://pokeapi.co/api/v2/pokedex/6/',
      },
    },
    {
      entry_number: 22,
      pokedex: {
        name: 'updated-johto',
        url: 'https://pokeapi.co/api/v2/pokedex/7/',
      },
    },
    {
      entry_number: 16,
      pokedex: {
        name: 'conquest-gallery',
        url: 'https://pokeapi.co/api/v2/pokedex/11/',
      },
    },
    {
      entry_number: 36,
      pokedex: {
        name: 'kalos-central',
        url: 'https://pokeapi.co/api/v2/pokedex/12/',
      },
    },
    {
      entry_number: 163,
      pokedex: {
        name: 'updated-hoenn',
        url: 'https://pokeapi.co/api/v2/pokedex/15/',
      },
    },
    {
      entry_number: 25,
      pokedex: {
        name: 'original-alola',
        url: 'https://pokeapi.co/api/v2/pokedex/16/',
      },
    },
    {
      entry_number: 25,
      pokedex: {
        name: 'original-melemele',
        url: 'https://pokeapi.co/api/v2/pokedex/17/',
      },
    },
    {
      entry_number: 32,
      pokedex: {
        name: 'updated-alola',
        url: 'https://pokeapi.co/api/v2/pokedex/21/',
      },
    },
    {
      entry_number: 32,
      pokedex: {
        name: 'updated-melemele',
        url: 'https://pokeapi.co/api/v2/pokedex/22/',
      },
    },
  ],
  shape: {
    name: 'quadruped',
    url: 'https://pokeapi.co/api/v2/pokemon-shape/8/',
  },
  varieties: [
    {
      is_default: true,
      pokemon: {
        name: 'pikachu',
        url: 'https://pokeapi.co/api/v2/pokemon/25/',
      },
    },
    {
      is_default: false,
      pokemon: {
        name: 'pikachu-rock-star',
        url: 'https://pokeapi.co/api/v2/pokemon/10080/',
      },
    },
    {
      is_default: false,
      pokemon: {
        name: 'pikachu-belle',
        url: 'https://pokeapi.co/api/v2/pokemon/10081/',
      },
    },
    {
      is_default: false,
      pokemon: {
        name: 'pikachu-pop-star',
        url: 'https://pokeapi.co/api/v2/pokemon/10082/',
      },
    },
    {
      is_default: false,
      pokemon: {
        name: 'pikachu-phd',
        url: 'https://pokeapi.co/api/v2/pokemon/10083/',
      },
    },
    {
      is_default: false,
      pokemon: {
        name: 'pikachu-libre',
        url: 'https://pokeapi.co/api/v2/pokemon/10084/',
      },
    },
    {
      is_default: false,
      pokemon: {
        name: 'pikachu-cosplay',
        url: 'https://pokeapi.co/api/v2/pokemon/10085/',
      },
    },
    {
      is_default: false,
      pokemon: {
        name: 'pikachu-original-cap',
        url: 'https://pokeapi.co/api/v2/pokemon/10094/',
      },
    },
    {
      is_default: false,
      pokemon: {
        name: 'pikachu-hoenn-cap',
        url: 'https://pokeapi.co/api/v2/pokemon/10095/',
      },
    },
    {
      is_default: false,
      pokemon: {
        name: 'pikachu-sinnoh-cap',
        url: 'https://pokeapi.co/api/v2/pokemon/10096/',
      },
    },
    {
      is_default: false,
      pokemon: {
        name: 'pikachu-unova-cap',
        url: 'https://pokeapi.co/api/v2/pokemon/10097/',
      },
    },
    {
      is_default: false,
      pokemon: {
        name: 'pikachu-kalos-cap',
        url: 'https://pokeapi.co/api/v2/pokemon/10098/',
      },
    },
    {
      is_default: false,
      pokemon: {
        name: 'pikachu-alola-cap',
        url: 'https://pokeapi.co/api/v2/pokemon/10099/',
      },
    },
    {
      is_default: false,
      pokemon: {
        name: 'pikachu-partner-cap',
        url: 'https://pokeapi.co/api/v2/pokemon/10148/',
      },
    },
  ],
};

// GET https://pokeapi.co/api/v2/type/fire
export const getFireTypePokemonRes = {
  damage_relations: {
    double_damage_from: [
      {
        name: 'ground',
        url: 'https://pokeapi.co/api/v2/type/5/',
      },
      {
        name: 'rock',
        url: 'https://pokeapi.co/api/v2/type/6/',
      },
      {
        name: 'water',
        url: 'https://pokeapi.co/api/v2/type/11/',
      },
    ],
    double_damage_to: [
      {
        name: 'bug',
        url: 'https://pokeapi.co/api/v2/type/7/',
      },
      {
        name: 'steel',
        url: 'https://pokeapi.co/api/v2/type/9/',
      },
      {
        name: 'grass',
        url: 'https://pokeapi.co/api/v2/type/12/',
      },
      {
        name: 'ice',
        url: 'https://pokeapi.co/api/v2/type/15/',
      },
    ],
    half_damage_from: [
      {
        name: 'bug',
        url: 'https://pokeapi.co/api/v2/type/7/',
      },
      {
        name: 'steel',
        url: 'https://pokeapi.co/api/v2/type/9/',
      },
      {
        name: 'fire',
        url: 'https://pokeapi.co/api/v2/type/10/',
      },
      {
        name: 'grass',
        url: 'https://pokeapi.co/api/v2/type/12/',
      },
      {
        name: 'ice',
        url: 'https://pokeapi.co/api/v2/type/15/',
      },
      {
        name: 'fairy',
        url: 'https://pokeapi.co/api/v2/type/18/',
      },
    ],
    half_damage_to: [
      {
        name: 'rock',
        url: 'https://pokeapi.co/api/v2/type/6/',
      },
      {
        name: 'fire',
        url: 'https://pokeapi.co/api/v2/type/10/',
      },
      {
        name: 'water',
        url: 'https://pokeapi.co/api/v2/type/11/',
      },
      {
        name: 'dragon',
        url: 'https://pokeapi.co/api/v2/type/16/',
      },
    ],
    no_damage_from: [],
    no_damage_to: [],
  },
  game_indices: [
    {
      game_index: 20,
      generation: {
        name: 'generation-i',
        url: 'https://pokeapi.co/api/v2/generation/1/',
      },
    },
    {
      game_index: 20,
      generation: {
        name: 'generation-ii',
        url: 'https://pokeapi.co/api/v2/generation/2/',
      },
    },
    {
      game_index: 10,
      generation: {
        name: 'generation-iii',
        url: 'https://pokeapi.co/api/v2/generation/3/',
      },
    },
    {
      game_index: 10,
      generation: {
        name: 'generation-iv',
        url: 'https://pokeapi.co/api/v2/generation/4/',
      },
    },
    {
      game_index: 9,
      generation: {
        name: 'generation-v',
        url: 'https://pokeapi.co/api/v2/generation/5/',
      },
    },
    {
      game_index: 9,
      generation: {
        name: 'generation-vi',
        url: 'https://pokeapi.co/api/v2/generation/6/',
      },
    },
  ],
  generation: {
    name: 'generation-i',
    url: 'https://pokeapi.co/api/v2/generation/1/',
  },
  id: 10,
  move_damage_class: {
    name: 'special',
    url: 'https://pokeapi.co/api/v2/move-damage-class/3/',
  },
  moves: [
    {
      name: 'fire-punch',
      url: 'https://pokeapi.co/api/v2/move/7/',
    },
    {
      name: 'ember',
      url: 'https://pokeapi.co/api/v2/move/52/',
    },
    {
      name: 'flamethrower',
      url: 'https://pokeapi.co/api/v2/move/53/',
    },
    {
      name: 'fire-spin',
      url: 'https://pokeapi.co/api/v2/move/83/',
    },
    {
      name: 'fire-blast',
      url: 'https://pokeapi.co/api/v2/move/126/',
    },
    {
      name: 'flame-wheel',
      url: 'https://pokeapi.co/api/v2/move/172/',
    },
    {
      name: 'sacred-fire',
      url: 'https://pokeapi.co/api/v2/move/221/',
    },
    {
      name: 'sunny-day',
      url: 'https://pokeapi.co/api/v2/move/241/',
    },
    {
      name: 'heat-wave',
      url: 'https://pokeapi.co/api/v2/move/257/',
    },
    {
      name: 'will-o-wisp',
      url: 'https://pokeapi.co/api/v2/move/261/',
    },
    {
      name: 'eruption',
      url: 'https://pokeapi.co/api/v2/move/284/',
    },
    {
      name: 'blaze-kick',
      url: 'https://pokeapi.co/api/v2/move/299/',
    },
    {
      name: 'blast-burn',
      url: 'https://pokeapi.co/api/v2/move/307/',
    },
    {
      name: 'overheat',
      url: 'https://pokeapi.co/api/v2/move/315/',
    },
    {
      name: 'flare-blitz',
      url: 'https://pokeapi.co/api/v2/move/394/',
    },
    {
      name: 'fire-fang',
      url: 'https://pokeapi.co/api/v2/move/424/',
    },
    {
      name: 'lava-plume',
      url: 'https://pokeapi.co/api/v2/move/436/',
    },
    {
      name: 'magma-storm',
      url: 'https://pokeapi.co/api/v2/move/463/',
    },
    {
      name: 'flame-burst',
      url: 'https://pokeapi.co/api/v2/move/481/',
    },
    {
      name: 'flame-charge',
      url: 'https://pokeapi.co/api/v2/move/488/',
    },
    {
      name: 'incinerate',
      url: 'https://pokeapi.co/api/v2/move/510/',
    },
    {
      name: 'inferno',
      url: 'https://pokeapi.co/api/v2/move/517/',
    },
    {
      name: 'fire-pledge',
      url: 'https://pokeapi.co/api/v2/move/519/',
    },
    {
      name: 'heat-crash',
      url: 'https://pokeapi.co/api/v2/move/535/',
    },
    {
      name: 'searing-shot',
      url: 'https://pokeapi.co/api/v2/move/545/',
    },
    {
      name: 'blue-flare',
      url: 'https://pokeapi.co/api/v2/move/551/',
    },
    {
      name: 'fiery-dance',
      url: 'https://pokeapi.co/api/v2/move/552/',
    },
    {
      name: 'v-create',
      url: 'https://pokeapi.co/api/v2/move/557/',
    },
    {
      name: 'fusion-flare',
      url: 'https://pokeapi.co/api/v2/move/558/',
    },
    {
      name: 'mystical-fire',
      url: 'https://pokeapi.co/api/v2/move/595/',
    },
    {
      name: 'inferno-overdrive--physical',
      url: 'https://pokeapi.co/api/v2/move/640/',
    },
    {
      name: 'inferno-overdrive--special',
      url: 'https://pokeapi.co/api/v2/move/641/',
    },
    {
      name: 'fire-lash',
      url: 'https://pokeapi.co/api/v2/move/680/',
    },
    {
      name: 'burn-up',
      url: 'https://pokeapi.co/api/v2/move/682/',
    },
    {
      name: 'shell-trap',
      url: 'https://pokeapi.co/api/v2/move/704/',
    },
    {
      name: 'mind-blown',
      url: 'https://pokeapi.co/api/v2/move/720/',
    },
    {
      name: 'sizzly-slide',
      url: 'https://pokeapi.co/api/v2/move/735/',
    },
    {
      name: 'max-flare',
      url: 'https://pokeapi.co/api/v2/move/757/',
    },
    {
      name: 'pyro-ball',
      url: 'https://pokeapi.co/api/v2/move/780/',
    },
  ],
  name: 'fire',
  names: [
    {
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      name: 'ほのお',
    },
    {
      language: {
        name: 'ko',
        url: 'https://pokeapi.co/api/v2/language/3/',
      },
      name: '불꽃',
    },
    {
      language: {
        name: 'fr',
        url: 'https://pokeapi.co/api/v2/language/5/',
      },
      name: 'Feu',
    },
    {
      language: {
        name: 'de',
        url: 'https://pokeapi.co/api/v2/language/6/',
      },
      name: 'Feuer',
    },
    {
      language: {
        name: 'es',
        url: 'https://pokeapi.co/api/v2/language/7/',
      },
      name: 'Fuego',
    },
    {
      language: {
        name: 'it',
        url: 'https://pokeapi.co/api/v2/language/8/',
      },
      name: 'Fuoco',
    },
    {
      language: {
        name: 'en',
        url: 'https://pokeapi.co/api/v2/language/9/',
      },
      name: 'Fire',
    },
  ],
  pokemon: [
    {
      pokemon: {
        name: 'charmander',
        url: 'https://pokeapi.co/api/v2/pokemon/4/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'charmeleon',
        url: 'https://pokeapi.co/api/v2/pokemon/5/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'charizard',
        url: 'https://pokeapi.co/api/v2/pokemon/6/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'vulpix',
        url: 'https://pokeapi.co/api/v2/pokemon/37/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'ninetales',
        url: 'https://pokeapi.co/api/v2/pokemon/38/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'growlithe',
        url: 'https://pokeapi.co/api/v2/pokemon/58/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'arcanine',
        url: 'https://pokeapi.co/api/v2/pokemon/59/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'ponyta',
        url: 'https://pokeapi.co/api/v2/pokemon/77/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'rapidash',
        url: 'https://pokeapi.co/api/v2/pokemon/78/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'magmar',
        url: 'https://pokeapi.co/api/v2/pokemon/126/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'flareon',
        url: 'https://pokeapi.co/api/v2/pokemon/136/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'moltres',
        url: 'https://pokeapi.co/api/v2/pokemon/146/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'cyndaquil',
        url: 'https://pokeapi.co/api/v2/pokemon/155/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'quilava',
        url: 'https://pokeapi.co/api/v2/pokemon/156/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'typhlosion',
        url: 'https://pokeapi.co/api/v2/pokemon/157/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'slugma',
        url: 'https://pokeapi.co/api/v2/pokemon/218/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'magcargo',
        url: 'https://pokeapi.co/api/v2/pokemon/219/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'houndour',
        url: 'https://pokeapi.co/api/v2/pokemon/228/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'houndoom',
        url: 'https://pokeapi.co/api/v2/pokemon/229/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'magby',
        url: 'https://pokeapi.co/api/v2/pokemon/240/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'entei',
        url: 'https://pokeapi.co/api/v2/pokemon/244/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'ho-oh',
        url: 'https://pokeapi.co/api/v2/pokemon/250/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'torchic',
        url: 'https://pokeapi.co/api/v2/pokemon/255/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'combusken',
        url: 'https://pokeapi.co/api/v2/pokemon/256/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'blaziken',
        url: 'https://pokeapi.co/api/v2/pokemon/257/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'numel',
        url: 'https://pokeapi.co/api/v2/pokemon/322/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'camerupt',
        url: 'https://pokeapi.co/api/v2/pokemon/323/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'torkoal',
        url: 'https://pokeapi.co/api/v2/pokemon/324/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'chimchar',
        url: 'https://pokeapi.co/api/v2/pokemon/390/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'monferno',
        url: 'https://pokeapi.co/api/v2/pokemon/391/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'infernape',
        url: 'https://pokeapi.co/api/v2/pokemon/392/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'magmortar',
        url: 'https://pokeapi.co/api/v2/pokemon/467/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'heatran',
        url: 'https://pokeapi.co/api/v2/pokemon/485/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'victini',
        url: 'https://pokeapi.co/api/v2/pokemon/494/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'tepig',
        url: 'https://pokeapi.co/api/v2/pokemon/498/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'pignite',
        url: 'https://pokeapi.co/api/v2/pokemon/499/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'emboar',
        url: 'https://pokeapi.co/api/v2/pokemon/500/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'pansear',
        url: 'https://pokeapi.co/api/v2/pokemon/513/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'simisear',
        url: 'https://pokeapi.co/api/v2/pokemon/514/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'darumaka',
        url: 'https://pokeapi.co/api/v2/pokemon/554/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'darmanitan-standard',
        url: 'https://pokeapi.co/api/v2/pokemon/555/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'litwick',
        url: 'https://pokeapi.co/api/v2/pokemon/607/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'lampent',
        url: 'https://pokeapi.co/api/v2/pokemon/608/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'chandelure',
        url: 'https://pokeapi.co/api/v2/pokemon/609/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'heatmor',
        url: 'https://pokeapi.co/api/v2/pokemon/631/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'larvesta',
        url: 'https://pokeapi.co/api/v2/pokemon/636/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'volcarona',
        url: 'https://pokeapi.co/api/v2/pokemon/637/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'reshiram',
        url: 'https://pokeapi.co/api/v2/pokemon/643/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'fennekin',
        url: 'https://pokeapi.co/api/v2/pokemon/653/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'braixen',
        url: 'https://pokeapi.co/api/v2/pokemon/654/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'delphox',
        url: 'https://pokeapi.co/api/v2/pokemon/655/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'fletchinder',
        url: 'https://pokeapi.co/api/v2/pokemon/662/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'talonflame',
        url: 'https://pokeapi.co/api/v2/pokemon/663/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'litleo',
        url: 'https://pokeapi.co/api/v2/pokemon/667/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'pyroar',
        url: 'https://pokeapi.co/api/v2/pokemon/668/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'volcanion',
        url: 'https://pokeapi.co/api/v2/pokemon/721/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'litten',
        url: 'https://pokeapi.co/api/v2/pokemon/725/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'torracat',
        url: 'https://pokeapi.co/api/v2/pokemon/726/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'incineroar',
        url: 'https://pokeapi.co/api/v2/pokemon/727/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'oricorio-baile',
        url: 'https://pokeapi.co/api/v2/pokemon/741/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'salandit',
        url: 'https://pokeapi.co/api/v2/pokemon/757/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'salazzle',
        url: 'https://pokeapi.co/api/v2/pokemon/758/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'turtonator',
        url: 'https://pokeapi.co/api/v2/pokemon/776/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'blacephalon',
        url: 'https://pokeapi.co/api/v2/pokemon/806/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'scorbunny',
        url: 'https://pokeapi.co/api/v2/pokemon/813/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'raboot',
        url: 'https://pokeapi.co/api/v2/pokemon/814/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'cinderace',
        url: 'https://pokeapi.co/api/v2/pokemon/815/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'carkol',
        url: 'https://pokeapi.co/api/v2/pokemon/838/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'coalossal',
        url: 'https://pokeapi.co/api/v2/pokemon/839/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'sizzlipede',
        url: 'https://pokeapi.co/api/v2/pokemon/850/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'centiskorch',
        url: 'https://pokeapi.co/api/v2/pokemon/851/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'rotom-heat',
        url: 'https://pokeapi.co/api/v2/pokemon/10008/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'castform-sunny',
        url: 'https://pokeapi.co/api/v2/pokemon/10013/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'darmanitan-zen',
        url: 'https://pokeapi.co/api/v2/pokemon/10017/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'charizard-mega-x',
        url: 'https://pokeapi.co/api/v2/pokemon/10034/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'charizard-mega-y',
        url: 'https://pokeapi.co/api/v2/pokemon/10035/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'houndoom-mega',
        url: 'https://pokeapi.co/api/v2/pokemon/10048/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'blaziken-mega',
        url: 'https://pokeapi.co/api/v2/pokemon/10050/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'groudon-primal',
        url: 'https://pokeapi.co/api/v2/pokemon/10078/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'camerupt-mega',
        url: 'https://pokeapi.co/api/v2/pokemon/10087/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'marowak-alola',
        url: 'https://pokeapi.co/api/v2/pokemon/10115/',
      },
      slot: 1,
    },
    {
      pokemon: {
        name: 'salazzle-totem',
        url: 'https://pokeapi.co/api/v2/pokemon/10129/',
      },
      slot: 2,
    },
    {
      pokemon: {
        name: 'marowak-totem',
        url: 'https://pokeapi.co/api/v2/pokemon/10149/',
      },
      slot: 1,
    },
  ],
};
