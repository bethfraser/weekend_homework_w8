var _ = require('lodash')

var RecordCollector = function(name){
  this.name = name;
  this.collection = [];
  this.cash = 25.00;
}

RecordCollector.prototype = {
  buyRecord: function(record, store){
    if(this.cash >= record.price){
    this.collection.push(record);
    store.sellRecord(record);
    this.cash -= record.price;
    }
    else {
      console.log("You do not have enough money for that record!")
    }
  },
  sellRecord: function(record, store){
    store.records.push(record);
    store.balance -= record.price;
    this.cash += record.price;
    _.remove(this.collection, function(item){
      return item.title === record.title;
    });
  },
}

module.exports.RecordCollector = RecordCollector;
