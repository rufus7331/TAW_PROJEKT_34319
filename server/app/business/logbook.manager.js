import logbookDAO from '../DAO/logbookDAO';

function create() {
    async function query() {
        let result = logbookDAO.query();
        if (result) {
            return result;
        }
    }

     async function get(id) {
         let result = await logbookDAO.get(id);
         if (result) {
             return result;
         }
     }

     async function deleteById(id) {
        let result = await logbookDAO.deleteById(id);
        if (result) {
            return result;
        }
    }

    async function createIndex(index) {
        let result = await logbookDAO.createIndex(index);
        if (result) {
            return result;
        }
    }

    async function changeAssoc(id, index) {
        let result = await logbookDAO.changeAssoc(id, index);
        if (result) {
            return result;
        }
    }

    async function editLogBook(id, index) {
        let result = await logbookDAO.editLogBook(id, index);
        if (result) {
            return result;
        }
    }

    return {
        query: query,
        get: get,
        deleteById: deleteById,
        createIndex: createIndex,
        changeAssoc: changeAssoc,
        editLogBook: editLogBook,
        //createNewOrUpdate: createNewOrUpdate,
    };
}

export default {
    create: create
};
