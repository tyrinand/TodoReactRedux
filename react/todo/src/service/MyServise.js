import fetch from 'cross-fetch';

export default class MyService{
    async GetAllTasks(){
        const res = await fetch('http://localhost:3001/api/tasks/');
        if(!res.ok){
            throw new Error(`Status: ${res.status}`);
        }
        return await res.json();
    }
    async AddTask(title){
        let data = {"title": title};
        const res = await fetch('http://localhost:3001/api/tasks', {
            credentials: 'same-origin', // 'include', default: 'omit'
            method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
            body: JSON.stringify(data), // Coordinate the body type with 'Content-Type'
            headers: { "Content-Type": "application/json" },
          });
        if(!res.ok){
            throw new Error(`Status: ${res.status}`);
        }
        return await res.json();
    }
    async DelTask(id){
         const res = await fetch(`http://localhost:3001/api/tasks/${id}`, {
             credentials: 'same-origin', // 'include', default: 'omit'
             method: 'DELETE', // 'GET', 'PUT', 'DELETE', etc.
             headers: { "Content-Type": "application/json" },
           });
         if(!res.ok){
             throw new Error(`Status: ${res.status}`);
         }
         return await res.json();
     }
     async UpdateTask(id,title){
        let data = {"id": id,"title": title};
          const res = await fetch(`http://localhost:3001/api/task/update`, {
              credentials: 'same-origin', // 'include', default: 'omit'
              method: 'PUT', // 'GET', 'PUT', 'DELETE', etc.
              body: JSON.stringify(data),
              headers: { "Content-Type": "application/json" },
            });
          if(!res.ok){
              throw new Error(`Status: ${res.status}`);
          }
          return await res.json();
      }
      async ChekedTask(id){
        let data = {"id": id};
          const res = await fetch(`http://localhost:3001/api/task/chek`, {
              credentials: 'same-origin', // 'include', default: 'omit'
              method: 'PUT', // 'GET', 'PUT', 'DELETE', etc.
              body: JSON.stringify(data),
              headers: { "Content-Type": "application/json" },
            });
          if(!res.ok){
              throw new Error(`Status: ${res.status}`);
          }
          return await res.json();
      }
}