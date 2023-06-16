import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongoConverter from '../service/mongoConverter';


const logbookSchema = new mongoose.Schema({
    name: {type: String},
    association: {type: Boolean},
    date: {type: String},
    weight: {type: Number},
    userId: {type: String}
}, {
    collection: 'logbook'
});
logbookSchema.plugin(uniqueValidator);

const logbookModel = mongoose.model('logbook', logbookSchema);

async function query() {
    const result = await logbookModel.find({});
    {
        if (result) {
            return mongoConverter(result);
        }
    }
}

async function get(id) {
    return logbookModel.find({ userId: id }).then(function (results) {
      if (results) {
        return mongoConverter(results);
      }
    });
  }

async function deleteById(id) {
    return logbookModel.findByIdAndRemove(id).then(function (result) {
        if (result) {
            return mongoConverter(result);
        }
    });
}

async function createIndex(index) {
    const newIndex = new logbookModel(index);
    return newIndex.save().then(function(result) {
        if (result) {
            return mongoConverter(result);
        }
    });
}

async function changeAssoc(id, updatedData) {
    return logbookModel.findByIdAndUpdate(id, updatedData, { new: true }).then(function(result) {
      if (result) {
        return mongoConverter(result);
      } else {
        throw new Error('Dokument o podanym identyfikatorze nie istnieje.');
      }
    });
  }

  async function editLogBook(id, updatedData) {
    return logbookModel.findByIdAndUpdate(id, updatedData, { new: true }).then(function(result) {
      if (result) {
        return mongoConverter(result);
      } else {
        throw new Error('Dokument o podanym identyfikatorze nie istnieje.');
      }
    });
  }

 export default {
     query: query,
     get: get,
     deleteById: deleteById,
     createIndex: createIndex,
     changeAssoc: changeAssoc,
     editLogBook: editLogBook,

     model: logbookModel
 };
