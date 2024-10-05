import React from 'react';
import {
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
} from 'react-native';

export default function ToDoList({tasks}) {
    return(
    <ScrollView>
        <Pressable>
        {tasks.map((task,index)=> (
          <View style={[styles.task, styles.incompleted]} key={index}>
            <Text style={styles.taskText} >{task}</Text>
          </View> ))}
        </Pressable>
      </ScrollView>
);
}


const styles = StyleSheet.create({
    task: {
      padding: 10,
      borderBottomWidth: 5,
      borderColor: '#ccc',
    },
    completed: {
      backgroundColor: '#e0e0e0',

    },
    incompleted: {
        backgroundColor: 'red',
      },
    taskText: {
      fontSize: 20,

    },
  });
