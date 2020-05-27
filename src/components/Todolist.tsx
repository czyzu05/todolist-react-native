import React, {FC, useState } from 'react'
import { Text, Button } from 'react-native'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { IState } from '../reducers'
import { ITodolistReducer } from '../reducers/todolistReducer'

import { ISingleElementList } from '../entities/todoSingleEl'

const Wrapper = styled.View`
    margin: 80px 20px 0 20px;
`

const SingleElList = styled.View`
    border: 1px solid black;
    margin: 0 0 20px 0;
    color: red;
`

const Todolist: FC<{switchView(formView: boolean)}> = props => {

    const todoListState = useSelector<IState, ITodolistReducer>(state => state.todoList)

    const gotoForm = () => {
        props.switchView(true)
    }

    return (
        <Wrapper>
            {todoListState.todoList.map((elem: ISingleElementList, index: number) =>
            <SingleElList key={index}> 
                <Text>{elem.name}</Text>
                <Text>{elem.description}</Text>
            </SingleElList>
            )}
            <Button title="Dodaj nowy" onPress={gotoForm} />
        </Wrapper>
    )
}

export default Todolist