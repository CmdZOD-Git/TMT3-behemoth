// Purpose : display fight

addLayer('fight', {
    name: 'fight layer', // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: 'F', // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    row: 1, // Row the layer is in on the tree (0 is the first row)

    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: '#4BDC13',
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: 'prestige points', // Name of prestige currency
    baseResource: 'Behepoint', // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: 'none', // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    
    branches : [],

    layerShown(){return false},

    tabFormat : [
      ["display-text", "Fight goes here"],
      ["row", [
        ["column",[
            ["display-text", "Behemoth"],
            ["clickable", "11"],
            ["display-text", "level"],
            ["display-text", "hp"],
            ["display-text", "xp"],
        ]],

        ["column",[
            ["display-text", "Threshold"],
            ["display-text", "current"],
            ["display-text", "Max"],
            ["clickable", "12"],

        ]],

        ["column",[
            ["display-text", "Fight track"],
            ["display-text", "Grid"],
            "grid",
        ]],
      ]],
    ],

    clickables: {
        11: {
            display() {return "Blah 11"},
        },

        12: {
            display() {return "Blah 12"},
        },
        
    },

    update(diff){
        
    },

})
