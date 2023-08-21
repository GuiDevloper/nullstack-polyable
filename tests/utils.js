import PolyablePlugin from 'nullstack-polyable'

export const polyable = PolyablePlugin({
  types: {
    button: 'botão',
    input: 'entrada'
  },
  attributes: {
    onclick: 'aoclicar',
    oninput: 'aoteclar'
  }
})