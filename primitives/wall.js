var extendDeep = AFRAME.utils.extendDeep;

var meshMixin = AFRAME.primitives.getMeshMixin();

AFRAME.registerPrimitive('a-wall', extendDeep({}, meshMixin, {
    defaultComponents: {
        geometry: {
            primitive: 'box',
            height: "10",
            width: "10",
            depth: "0.2"
        },
        material: {color: "#eee"}
    },
    // Maps HTML attributes to his ocean component's properties.
    mappings: {
        depth: 'geometry.depth',
        height: 'geometry.height',
        width: 'geometry.width',
        color: 'material.color'
    }
}));