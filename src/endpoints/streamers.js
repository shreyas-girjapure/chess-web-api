const WebApiRequest = require('../request/webapi-request.js');
const HttpManager = require('../request/http-manager.js');
const { sortParameters } = require('../utils/sort-parameters');

function getStreamers(options, callback, headers) {
  const [_options, _callback, _headers] = sortParameters(
    ['object', 'function', 'object'],
    [options, callback, headers],
  );

  return WebApiRequest.builder()
    .withPath('/pub/streamers')
    .withQueryParameters(_options)
    .withHeaders(_headers)
    .build()
    .execute(HttpManager.get, _callback);
}

module.exports = {
  getStreamers,
};
