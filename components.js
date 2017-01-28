var coordinates = AFRAME.utils.coordinates;
AFRAME.registerComponent('wall', {
  // Allow line component to accept vertices and color.
  schema: {
    color: { default: '#333' },
    primitive: {default: 'box'},
    width: {default: '4'},
    height: {default: '4'},
    depth: {default: '1'}
  },
  // Create or update the line geometry.
  update: {},
  // Remove the line geometry.
  remove: {}
});