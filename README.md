# Nullstack Polyable

Making Nullstack framework able to read any template vocable you type

## Installation

Run this command on your Nullstack project:

```sh
npm install nullstack-polyable -D
```

or, using Yarn:

```sh
yarn add nullstack-polyable -D
```

Then import it in your **index.js** file (as shown here in **tests/index.js**):

> Showing usage changing element types and attributes to pt-BR

```js
import polyable from 'nullstack-polyable';

Nullstack.use(polyable({
  types: {
    button: 'botão',
    input: 'entrada'
  },
  attributes: {
    onclick: 'aoclicar',
    oninput: 'aoteclar'
  }
}));
```

## Examples

> Everything can be seen being used on tests folder

After the configuration, the use become this:

```jsx
exibe({ ação }) {
  // it will show the attribute from the element
  console.log(ação);
}

renderiza() {
  const { exibe } = this;
  return (
    <>
      <botão aoclicar={exibe} ação="clicado!">
        Clique aqui
      </botão>
      <entrada aoteclar={exibe} ação="digitado!" />
    </>
  )
}

// just to see where it goes,
// using pt-BR in lifecycle hooks and the render function
prepare = this.prepara;
console = this.exibe;
render = this.renderiza;
```