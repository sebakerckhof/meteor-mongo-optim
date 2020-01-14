import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import Collection from '/imports/collection';


Meteor.methods({
  'add': () => {
    Collection.insert({createdAt: new Date(), foo: Random.id() });
  }
})

Meteor.publish('all', function() {
  return Collection.find({}, { fields: { foo:1 }, sort: { createdAt: -1 }, limit: 5});
});