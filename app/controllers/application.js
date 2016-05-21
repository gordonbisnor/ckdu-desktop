import Ember from 'ember';

export default Ember.Controller.extend({
	
	playing: null,
	player: null,
  
  init() {
    this.set('player', new Audio());
  },

	actions: {
	
		play(stream) {
			const streamURL = stream.get('url');
			const player = this.get('player');
			const playing = this.get('playing');

			if (playing) { 
				player.pause(); 
			}
			
			this.set('playing', streamURL);
			player.src = streamURL;
			player.play();
		},
	
		stop() {
			this.set('playing', null);
			this.get('player').pause();
		}
	}

});