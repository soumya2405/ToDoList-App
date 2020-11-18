import React,{useState} from 'react';
import TodoList from './TodoList';

const App = () =>{

  const [inputlist,setInputlist] = useState("");
  const [Items,setItems] = useState([]);

  const itemEvent = (event) =>{
    setInputlist(event.target.value);
  };
  const listOfItems = () =>{
      setItems((oldItems) =>{
        return [...oldItems,inputlist];
      }
      );
      setInputlist("");
  };
  const deleteItems = (id) => {
    console.log('deleted');
    setItems((oldItems) =>{
      return oldItems.filter((arrElem,index) =>{
        return index !== id;
      });
    });
  };
  return(
  <>
   <div className = "main_div">
     <div className="center_div">
       <br />
       <h1>ToDo List</h1>
       <br />
       <input type="text" placeholder="Add Items" onChange={itemEvent} value={inputlist} />
       <button onClick={listOfItems}> + </button>

       <ol>
      { /* <li>{inputlist}</li> */ }
        {Items.map((itemval,index) => {
          return <TodoList key={index} id={index} text={itemval} onSelect={deleteItems} />;
        })}
       </ol>
     </div>
   </div>
  </>
  );

};

export default App;