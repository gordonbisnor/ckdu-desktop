import Ember from 'ember';
import { MousetrapRoute, mousetrap } from 'ember-mousetrap';
const { getOwner } = Ember;

export default Ember.Route.extend(MousetrapRoute, {

	model() {
		return this.store.findAll('stream');
	},

	shortcuts: {
  	
    down: mousetrap('down', function () {
			let owner = getOwner(this);
			let app = owner.lookup(`controller:application`);
			app.moveDown();
    }),

    up: mousetrap('up', function () {
			let owner = getOwner(this);
			let app = owner.lookup(`controller:application`);
			app.moveUp();
    }),

  	togglePlay: mousetrap('space', function () {
			let owner = getOwner(this);
			let app = owner.lookup(`controller:application`);
			app.togglePlay();
    }),

	  selectedStream: mousetrap('enter', function () {
			let owner = getOwner(this);
			let app = owner.lookup(`controller:application`);
			app.playSelectedStream();
    })

  }

});