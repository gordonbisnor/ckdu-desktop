import ENV from 'ckdu-desktop/config/environment';
import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
	namespace: 'api/v1',
	host: ENV.apiHost
});
