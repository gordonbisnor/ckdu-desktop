import Ember from 'ember';

export default Ember.Component.extend({

	tagName: "li",

	classNameBindings: ['isActive', 'defaultClass'],

	defaultClass: "list-group-item",
  
  isActive: Ember.computed('index', 'adjustedSelectedIndex', function () {
    if (this.get('index') === this.get('adjustedSelectedIndex')) {
    	return 'active';
    } else {
    	return '';
    }
  }),

	click() {
		this.attrs.toggle(this.get('stream'));
	}

});
