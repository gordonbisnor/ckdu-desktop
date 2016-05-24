import Ember from 'ember';

export default Ember.Controller.extend({

	player: Ember.inject.service('audio-player'),

	actions: {

		play(stream) {
			const streamURL = stream.get('url');
			const player = this.get('player');
			player.play(streamURL);
		},
	
		pause() {
			this.get('player').pause();
		}
	}

});