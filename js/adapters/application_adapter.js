App.ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'http://pdt000.pagerduty.net',
  namespace: 'api/v1',
  headers: {
   'Authorization': 'Token token=HAHA NICE TRY'
  }
});
