// Purpose : Main display

addLayer('main', {
    name: 'main layer', // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: 'M', // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    row: 0, // Row the layer is in on the tree (0 is the first row)

    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: '#4BDC13',
    type: 'none', // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    
    branches : [],

    layerShown(){return true},

    update(diff){
        
    },

    tabFormat : {
      //embed layer Fight
      "Select" : {
        embedLayer : 'select',
      },

      //embed layer beast select
      "Fight" : {
        embedLayer : 'fight',
      },
      //embed layer meta
    },
})
