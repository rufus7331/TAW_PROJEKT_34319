import business from '../business/business.container';

const logbookEndpoint = (router) => {
    router.get('/api/logbook', async (request, response, next) => {
        try {
            let result = await business.getLogBookManager().query();
            response.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    });

    router.get('/api/logbook/:id', async (request, response, next) => {
        try {
          const userId = request.params.id;
          let result = await business.getLogBookManager().get(userId);
          response.status(200).send(result);
        } catch (error) {
          console.log(error);
        }
      });

    router.delete('/api/logbook/:id', async (request, response, next) => {
        try {
            const id = request.params.id;
          let result = await business.getLogBookManager().deleteById(id);
          response.status(200).send(result);
        } catch (error) {
          console.log(error);
        }
    });

    router.post('/api/logbook', async (request, response, next) => {
        try {
          const body = request.body;
          let result = await business.getLogBookManager().createIndex(body);
          response.status(200).send(result);
        } catch (error) {
          console.log(error);
        }
    });

    router.put('/api/logbook/:id', async (request, response, next) => {
        try {
          const id = request.params.id;
          const body = request.body;
          let result = await business.getLogBookManager().changeAssoc(id, body);
          response.status(200).send(result);
        } catch (error) {
          console.log(error);
        }
    });

    router.put('/api/logbook/edit/:id', async (request, response, next) => {
        try {
          const id = request.params.id;
          const body = request.body;
          let result = await business.getLogBookManager().editLogBook(id, body);
          response.status(200).send(result);
        } catch (error) {
          console.log(error);
        }
    });

};
export default logbookEndpoint;
