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
    border: 2px solid #9896D9;
    borderRadius: 6;
    margin: 6px 0;
`
const TextTitle = styled.Text`
    padding-bottom: 15px;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
`

const TextDesc = styled.Text`
    padding-bottom: 5px;
    padding-left: 10px;
    font-size: 13px;
`
const ButtonWrapper = styled.View`
    margin-top: 40px;
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
                <TextTitle>{elem.name}</TextTitle>
                <TextDesc>{elem.description}</TextDesc>
            </SingleElList>
            )}
            <ButtonWrapper>
                <Button title="Add note" onPress={gotoForm} color="#9896D9"/>
            </ButtonWrapper>
        </Wrapper>
    )
}

export default Todolist