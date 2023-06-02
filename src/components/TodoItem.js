import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TodoItem = ({ title, description }) => {
  const [completed, setCompleted] = useState(false);

  const toggleCompleted = () => {
    setCompleted(!completed);
  };

  return (
    <TouchableOpacity onPress={toggleCompleted}>
      <View style={[styles.container, completed && styles.completedContainer]}>
        <Ionicons
          name={completed ? 'checkbox-outline' : 'square-outline'}
          size={24}
          color={completed ? 'gray' : 'black'}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={[styles.title, completed && styles.completedText]}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  completedContainer: {
    textDecorationLine: 'line-through',
    backgroundColor: '#F4F4F4',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  completedText: {
    color: 'gray',
  },
  description: {
    fontSize: 14,
    color: 'black',
  },
});

export default TodoItem;
