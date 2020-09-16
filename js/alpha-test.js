AFRAME.registerComponent('alpha-test', {
  dependencies: ['material'],
  init: function () {
  this.el.getObject3D('mesh').material.alphaTest = 0.5;
}
});
