const a = { entity_id: 'automation.test', attributes: { id: '12345' } };
console.log(a.attributes.id || a.entity_id.replace('automation.',''));
