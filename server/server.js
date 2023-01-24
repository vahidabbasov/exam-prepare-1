const mongoose = require('mongoose');
const express = require('express');
const Joi = require ("joi")

const cors = require('cors');
 const app =    express();
 const PORT = 2002
 app.use(cors())

 const WorkerSchema = new mongoose.Schema({
    name: String,
    surname: String,
    position:String,
    image:String,
    description: String
 })

 const addWorkerSchema = Joi.object({
    name:Joi.string().required(),
    surname:Joi.string().required(),
    position:Joi.string().required(),
    image:Joi.string().required(),
    description:Joi.string().required()
 })



 const WorkerModel = mongoose.model('WorkerSchema', WorkerSchema);


 mongoose.set("strictQuery", false);
mongoose
  .connect(`mongodb+srv://vahid:6OLO0N7hxiXeGidu@nft.2kztrup.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error(err));

app.use(express.json());


app.get('/api/workers', (req, res)=>{
    WorkerModel.find(null, (error, workers)=>{
        if (error) return res.status(500).send({error})
        res.send(workers)
    })
})


app.post(
    "/api/workers",
    (req, res, next) => {
      const { error } = addWorkerSchema.validate(req.body);
  
      if (error == null) next();
      else {
        const { details } = error;
        const message = details.map((i) => i.message).join(",");
        res.status(422).json({ error: message });
      }
    },
    async (req, res) => {
      const newWorker = new WorkerModel({ ...req.body });
  
      await newWorker.save();
      res
        .status(201)
        .send({ message: "Product succesfully added!", worker: newWorker });
    }
  );

  app.get("/api/workers/:id", async (req, res) => {
    const { _id } = req.params;
    const Worker = await WorkerModel.findById(_id);
    return res.status(200).send({worker: Worker});
  });


  app.delete("/api/workers/:id", (req, res) => {
    if (req.params.id)
        WorkerModel.findByIdAndDelete(req.params.id, (error, data) => {
        if (error) return res.status(500).send({ error });
  
        res.send(data);
      });
  });


app.listen(PORT, () => {
    console.log("Server running on " + PORT);
  });