import * as express from 'express';
import database from '../db';

let router = express.Router();

// GET cars
router.get('/', (req, res) => {
  database.db.collection('cars').find().toArray().then((cars)=>{
    res.json(cars);
  })
});

export default router;