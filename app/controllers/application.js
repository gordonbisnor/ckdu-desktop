import Ember from 'ember';

export default Ember.Controller.extend({

	player: Ember.inject.service('audio-player'),

	selectedIndex: 1,
	
	adjustedSelectedIndex: Ember.computed('selectedIndex', function () {
		return this.get('selectedIndex') - 1;
	}),
	
	togglePlay() {
		const player = this.get('player');
	  if (player.get('playing'))  {
      player.pause();
    } else if (player.get('src') !== null) {
   		player.play();
    }
	},

	moveUp() {
		let i = this.get('selectedIndex');
	
		if (i > 1) {
			this.set('selectedIndex', i - 1);
		} else {
			this.set('selectedIndex', this.get('model.length'));
		}
	},

	moveDown() {
		let i = this.get('selectedIndex');

		if (i === this.get('model.length')) {
			this.set('selectedIndex', 1);
		} else {
			this.set('selectedIndex', i + 1);
			
		}
	},

	playSelectedStream() {
		let i = this.get('selectedIndex') - 1;
		let stream = this.get('model').objectAt(i);
		this.playStream(stream);
	},

	playStream(stream) {
		const player = this.get('player');
		
		if (player.get('playing') && stream.get('selected')) { 
			return true; 
		}

		const streamURL = stream.get('url');
		player.play(streamURL);
		this.get('model').setEach('selected', false);
		stream.set('selected', true);
		this.set('selectedIndex', this.get('model').indexOf(stream) + 1);
	},

	actions: {

		pause() {
			this.get('player').pause();
		},

		toggle(stream) {

			const player = this.get('player');
			const playing = player.get('playing');
			const loading = player.get('loading');

			if (playing && stream.get('selected')) {
				player.pause();
			} else if (loading && stream.get('selected')) {
				player.pause();
			} else {
				this.playStream(stream);
			}
		}

	}

});
