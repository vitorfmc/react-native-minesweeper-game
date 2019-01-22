import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import params from './src/Params'
import Field from './src/components/Field'
import MineField from './src/components/MineField'
import { createMineBoard } from './src/functions'

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()

    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    
    return {
      board: createMineBoard(rows, cols, this.minesAmount()),
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> Iniciando o Mine!/</Text>
        <Text style={styles.instructions}>
          Tamanho da grade:
          {params.getRowsAmount() }*{params.getRowsAmount() }
        </Text>
        <View style={styles.board}>
          <MineField board={this.state.board}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'flex-end',
  },
  board:{
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
});
