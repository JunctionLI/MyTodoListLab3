/**
 * My To Do List App
 *
 * @format
 */

"use client"
import React, {useState} from 'react';
import {
  SafeAreaView,
} from 'react-native';
import ToDoList from './src/component/ToDoList';
import ToDoForm from './src/component/ToDoForm';


function App() {

  const[tasks,setTasks] = useState (
    ['Do laundry',
  'Go to gym',
  'Walk dog']
);


  return (
    <SafeAreaView>
      <ToDoList tasks={tasks}/>
      <ToDoForm/>
    </SafeAreaView>
  );
}



export default App;