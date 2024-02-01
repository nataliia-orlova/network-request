import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';
//  creating a new type with these properties
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then((response) => {
    //  as todo means that it has the same structure/properties as todo object above
    const todo = response.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;
    logTodo(id, title, completed)
    
});

//  describe the type of variable that each of them should be
const logTodo = (id: number, title: string, completed: boolean)=> {
    console.log(`
    The ToDO with ID: ${id};
    Has a title of: ${title};
    Is ii finished? ${completed};
    `);
}