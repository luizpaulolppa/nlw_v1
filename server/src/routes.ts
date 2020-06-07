import express from 'express';
import Knex from "knex";

const routes = express.Router();

routes.get('/items', async (request, response) => {
  const items = await Knex('items').select('*');

  return response.json(items);
});

export default routes;