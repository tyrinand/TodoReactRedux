const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

let app = express();
let jsonParser = bodyParser.json();

app.use(require("body-parser").json());


app.use((req, res, next) => {
    res.set({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type'
    })
    next();
  });


  
app.get("/api/tasks", function(req, res){ // все задачи
      
    let content = fs.readFileSync("tasks.json", "utf8");
    let tasks = JSON.parse(content);
    res.send(tasks);
});

app.put("/api/task/chek", jsonParser, function(req, res){// выбран пункт
      
    if(!req.body) return res.sendStatus(400);
    let id = req.body.id;
     
    let data = fs.readFileSync("tasks.json", "utf8");
    let tasks = JSON.parse(data);
    let task;
    
    for (const temp of tasks) {
        if(temp.id == id)
        {
            task = temp;
            break;
        }    
      }
    // изменяем данные у пользователя
    if(task){
        task.suc = !task.suc;
        data = JSON.stringify(tasks);
        fs.writeFileSync("tasks.json", data);
        res.send(task);
    }
    else{
        res.status(404).send(id);
    }
});

app.put("/api/task/update", jsonParser, function(req, res){// изменение заголовка
      
    if(!req.body) return res.sendStatus(400);
     
    let id = req.body.id;
    let title = req.body.title;
     
    let data = fs.readFileSync("tasks.json", "utf8");
    let tasks = JSON.parse(data);
    let task;
    
    for (const temp of tasks) {
        if(temp.id == id)
        {
            task = temp;
            break;
        }    
      }
    // изменяем данные у пользователя
    if(task){
        task.title = title;
        data = JSON.stringify(tasks);
        fs.writeFileSync("tasks.json", data);
        res.send(task);
    }
    else{
        res.status(404).send(id);
    }
});


app.post("/api/tasks", jsonParser, function (req, res) {
     
    if(!req.body) return res.sendStatus(400);
    let title = req.body.title;
    let suc = false;
    let task = {title, suc}; // поля и переменные одинаковые

    let data = fs.readFileSync("tasks.json", "utf8");
    let tasks = JSON.parse(data);
     
    let id = Math.max.apply(Math,tasks.map(function(o){return o.id;}))
    task.id = id+1;

    tasks.push(task);
    data = JSON.stringify(tasks);
    fs.writeFileSync("tasks.json", data);
    res.send(task);
});

app.delete("/api/tasks/:id", function(req, res){
      
    let id = req.params.id;
    let data = fs.readFileSync("tasks.json", "utf8");
    let tasks = JSON.parse(data);
    let index = -1;
    // находим индекс пользователя в массиве
    for(let i=0; i<tasks.length; i++){
        if(tasks[i].id==id){
            index=i;
            break;
        }
    }
    if(index > -1){
        // удаляем пользователя из массива по индексу
        let task = tasks.splice(index, 1)[0];
        data = JSON.stringify(tasks);
        fs.writeFileSync("tasks.json", data);
        res.send(task);
    }
    else{
        res.status(404).send();
    }
});

app.listen(3001, function(){
    console.log("Сервер ожидает подключения...");
});