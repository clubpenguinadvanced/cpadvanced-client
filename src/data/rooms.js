const rooms = {
    100: {
        key: 'Town',
        scene: require('@rooms/town/Town').default,
        x: 760,
        y: 660
    },
    110: {
        key: 'Coffee',
        scene: require('@rooms/coffee/Coffee').default,
        x: 640,
        y: 480
    },
    111: {
        key: 'Book',
        scene: require('@rooms/book/Book').default,
        x: 1260,
        y: 560
    },
    120: {
        key: 'Dance',
        scene: require('@rooms/dance/Dance').default,
        x: 360,
        y: 560
    },
    121: {
        key: 'Lounge',
        scene: require('@rooms/lounge/Lounge').default,
        x: 1120,
        y: 640
    },
    130: {
        key: 'Shop',
        scene: require('@rooms/shop/Shop').default,
        x: 1000,
        y: 560
    },
    200: {
        key: 'Village',
        scene: require('@rooms/village/Village').default,
        x: 800,
        y: 640
    },
    220: {
        key: 'Lodge',
        scene: require('@rooms/lodge/Lodge').default,
        x: 760,
        y: 800
    },
    221: {
        key: 'Attic',
        scene: require('@rooms/attic/Attic').default,
        x: 966,
        y: 560
    },
    230: {
        key: 'Mtn',
        scene: require('@rooms/mtn/Mtn').default,
        x: 760,
        y: 440
    },
    300: {
        key: 'Plaza',
        scene: require('@rooms/plaza/Plaza').default,
        x: 760,
        y: 680
    },
    310: {
        key: 'Pet',
        scene: require('@rooms/pet/Pet').default,
        x: 828,
        y: 520
    },
    321: {
        key: 'DojoExt',
        scene: require('@rooms/dojoext/DojoExt').default,
        x: 780,
        y: 790
    },
    400: {
        key: 'Beach',
        scene: require('@rooms/beach/Beach').default,
        x: 840,
        y: 680
    },
    800: {
        key: 'Dock',
        scene: require('@rooms/dock/Dock').default,
        x: 800,
        y: 400
    },
    801: {
        key: 'Forts',
        scene: require('@rooms/forts/Forts').default,
        x: 960,
        y: 610
    },
    802: {
        key: 'Rink',
        scene: require('@rooms/rink/Rink').default,
        x: 770,
        y: 400
    },
    805: {
        key: 'Berg',
        scene: require('@rooms/berg/Berg').default,
        x: 652,
        y: 448
    },
    806: {
        key: 'Cave',
        scene: require('@rooms/cave/Cave').default,
        x: 780,
        y: 700
    },
    807: {
        key: 'Shack',
        scene: require('@rooms/shack/Shack').default,
        x: 760,
        y: 680
    },
    809: {
        key: 'Forest',
        scene: require('@rooms/forest/Forest').default,
        x: 760,
        y: 430
    },
    810: {
        key: 'Cove',
        scene: require('@rooms/cove/Cove').default,
        x: 840,
        y: 480
    },
	122: {
        key: 'School',
        scene: require('@rooms/school/School').default,
        x: 760,
        y: 480
    },
	330: {
        key: 'Pizza',
        scene: require('@rooms/pizza/Pizza').default,
        x: 760,
        y: 480
    },
	212: {
        key: 'Agentlobby',
        scene: require('@rooms/agentlobby/Agentlobby').default,
        x: 760,
        y: 480
    },
	808: {
        key: 'Mine',
        scene: require('@rooms/mine/Mine').default,
        x: 760,
        y: 480
    },
	813: {
        key: 'Cavemine',
        scene: require('@rooms/cavemine/Cavemine').default,
        x: 760,
        y: 480
    },
	69420: {
        key: 'RuffleMinigame',
        scene: require('@rooms/ruffleminigame/RuffleMinigame').default
    },
    999: {
        key: 'Sled',
        scene: require('@games/sled/Sled').default
    }
}

export default rooms
