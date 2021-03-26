let config = {};
let configLength = 0;

function match(node) {
  return (
    node &&
    node.attributes !== undefined &&
    (Object.values(config.types).filter(type => (
      node.type === type
    )).length > 0 ||
    Object.values(config.attributes).filter(attr => (
      node.attributes[attr] !== undefined
    )).length > 0)
  )
}

function transform({ node }) {
  if(configLength === 0 || !match(node)) return;

  if (Object.values(config.types).includes(node.type)) {
    const type = Object.keys(config.types).find(key => (
      config.types[key] === node.type
    ));
    node.type = type;
  }

  const attributes = node.attributes;
  for (let attr in config.attributes) {
    node.attributes[attr] = attributes[config.attributes[attr]];
  }

}

function configPlugin(userConfig) {
  config = userConfig || {};
  configLength = Object.keys(config).length;

  return {
    transform,
    client: true,
    server: true
  }
}

export default configPlugin;