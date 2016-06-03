import Ember from 'ember';

export default Ember.Service.extend({

	playState: 'paused',
	
  audio: null,
  
  src: null,
  
  playing: Ember.computed('playState', function () {
    return this.get('playState') === 'playing';
  }),
  loading: Ember.computed('playState', function () {
    return this.get('playState') === 'loading';
  }),
  paused: Ember.computed('playState', function () {
    return this.get('playState') === 'paused';
  }),

	init() {
		this.set('audio', new Audio());
    this.get('audio').addEventListener('playing', () => {
      this.set('playState', 'playing');
    });
  },

  play(stream) {
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
    } 
    this.set('playState', 'loading');
    audio.play();
  },

  pause() {
  	const audio = this.get('audio');
    this.set('playState', 'paused');
  	audio.pause();
  }
	
});