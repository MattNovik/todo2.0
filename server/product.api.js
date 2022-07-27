import mongoose from 'mongoose';
import TodoTask from '../models/todoItem.js';

var TodoTaskAPI = {
  delete: function (request, response) {
    TodoTask.findByIdAndRemove(request.params.id, function (error, result) {
      if (error) {
        throw error;
      } else {
        response.status(200).json(result);
      }
    });
  },
  update: function (request, response) {
    TodoTask.findByIdAndUpdate(
      request.params.id,
      {
        nameItem: request.body.data.nameItem,
        description: request.body.data.description,
        date: request.body.data.date,
        classChange: request.body.data.classChange,
      },
      function (err, data) {
        if (err) {
          throw err;
        } else {
        }
      }
    );
  },
};
export default TodoTaskAPI;
