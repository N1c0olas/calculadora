import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [operator, setOperator] = useState('');

  const handleAddition = () => {
    const res = parseFloat(num1) + parseFloat(num2);
    setResult(res.toString());
  };

  const handleSubtraction = () => {
    const res = parseFloat(num1) - parseFloat(num2);
    setResult(res.toString());
  };

  const handleMultiplication = () => {
    const res = parseFloat(num1) * parseFloat(num2);
    setResult(res.toString());
  };

  const handleDivision = () => {
    const res = parseFloat(num1) / parseFloat(num2);
    setResult(res.toString());
  };

  const handleNumberInput = (num) => {
    if (num1 === '') {
      setNum1(num);
    } else {
      setNum2(num);
    }
  };

  const handleClear = () => {
    setNum1('');
    setNum2('');
    setResult('');
    setOperator('');
  };

  const handleEqual = () => {
    if (num1 !== '' && num2 !== '') {
      switch (operator) {
        case '+':
          handleAddition();
          break;
        case '-':
          handleSubtraction();
          break;
        case '*':
          handleMultiplication();
          break;
        case '/':
          handleDivision();
          break;
        default:
          break;
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.result}>{result}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setNum1}
          value={num1}
          keyboardType="numeric"
          placeholder="0"
          placeholderTextColor="#666"
        />
        <TextInput
          style={styles.input}
          onChangeText={setNum2}
          value={num2}
          keyboardType="numeric"
          placeholder="0"
          placeholderTextColor="#666"
        />
      </View>
      <View style={styles.buttonContainer}>
        {[...Array(10).keys()].map(num => (
          <TouchableOpacity
            key={num}
            style={styles.button}
            onPress={() => handleNumberInput(num.toString())}
          >
            <Text style={styles.buttonText}>{num}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={[styles.operationButton, styles.button]} onPress={() => setOperator('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.operationButton, styles.button]} onPress={() => setOperator('-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.operationButton, styles.button]} onPress={() => setOperator('*')}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.operationButton, styles.button]} onPress={() => setOperator('/')}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.clearButton, styles.button]} onPress={handleClear}>
          <Text style={[styles.buttonText, styles.clearButtonText]}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.equalButton, styles.button]} onPress={handleEqual}>
          <Text style={[styles.buttonText, styles.equalButtonText]}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    // Seus estilos existentes...
    resultContainer: {
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      marginBottom: 20,
    },
    result: {
      fontSize: 60, // Reduzindo o tamanho da fonte do resultado
      fontWeight: 'bold',
      color: '#FFFFFF',
      fontFamily: 'Arial', // Alterando a fonte do resultado
      marginHorizontal: 20, // Adicionando margens horizontais para melhorar a aparência
    },
    buttonContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginBottom: 20, // Aumentando a margem inferior para melhor espaçamento
    },
    button: {
      backgroundColor: '#FFFFFF',
      paddingVertical: 20, // Ajustando o preenchimento vertical dos botões
      paddingHorizontal: 25, // Ajustando o preenchimento horizontal dos botões
      margin: 10, // Aumentando a margem entre os botões
      borderRadius: 20, // Aumentando o raio da borda para tornar os botões mais arredondados
    },
    operationButton: {
      backgroundColor: '#FF9500',
    },
    clearButton: {
      backgroundColor: '#FF9500',
    },
    equalButton: {
      backgroundColor: '#FF9500',
    },
    buttonText: {
      fontSize: 24, // Reduzindo o tamanho da fonte dos botões
      fontWeight: 'bold',
      color: '#333',
    },
  });
  

export default Calculator;
