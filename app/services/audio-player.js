import Ember from 'ember';

export default Ember.Service.extend({

	playing: null,
	audio: null,
  src: null,

	init() {
		this.set('audio', new Audio());
  },

  play(stream) {
  	this.set('playing', true);
  	const audio = this.get('audio');
    let src;

    if (!Ember.isEmpty(stream)) {
      this.set('src', stream);
      src = stream;
    } else {
      src = this.get('src');
    }

    if (src !== null) {
  	 audio.src = this.get('src');
    	audio.play();
    }
  },

  pause() {
  	const audio = this.get('audio');
    this.set('playing', false);
  	audio.pause();
  }
	
});