import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Items from "./components/Items";

function App() {

  const [items, setItems]=useState([]);

  function handleAddItems(item){
    console.log(item)
    setItems((prev)=>[...prev, item])
  }

  function handleDeleteItem(id){
    setItems((prev)=>prev.filter((item)=> item.id !==id));
    console.log("deleted")
  }

  function handlePacked(id){
    setItems((prev)=>prev.map((item)=>item.id === id ? {...item, isPacked: !item.isPacked}: item))
    console.log(items)
  }

  function handleClearList(){

    let confirm;

    confirm =items.length > 0 ? (window.confirm("Are you sure want to delete all items ?")) : (null)
    confirm ? setItems([]) : null
  }

  console.log(items)


  return (
    <div className="w-[100vw]">
      <Header />
      <Form onAddItems={handleAddItems} />
      <Items items={items} onDeleteItem={handleDeleteItem}  onHandlePacked={handlePacked} onClearList={handleClearList} />
      <Footer items={items}/>
    </div>
  );
}

export default App;
