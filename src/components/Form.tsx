import React, {FC, useState } from 'react'
import styled from 'styled-components'
import { TextInput, Button } from 'react-native'

import { useDispatch } from 'react-redux'

import { setNewElemTodoList } from '../actions/todolistActions'
import { ISingleElementList } from '../entities/todoSingleEl'

const Wrapper = styled.View`
    margin: 80px 20px 0 20px;
`

const CustomTextInput = styled.TextInput`
    border: 2px solid #9896D9;
    padding: 7px;
    color: black;
    width: 100%;
    borderRadius: 6;
    margin: 6px 0;
`

const ButtonWrapper = styled.View`
    margin-top: 40px;
`

type SetNewElemTodoList = ReturnType<typeof setNewElemTodoList>

const Form: FC<{switchView(formView: boolean)}> = props => {

    const dispatch = useDispatch()

    const [nameInput, setNameInput] = useState<string>('')
    const [ descrInput, setDescrInput ] = useState<string>('')

    const nameValueChange = (txt) => {
        setNameInput(txt.nativeEvent.text)
    }

    const descriptionValueChange = (txt) => {
        setDescrInput(txt.nativeEvent.text)
    }

    const saveDate = () => {
        dispatch<SetNewElemTodoList>(setNewElemTodoList({
            name: nameInput,
            description: descrInput
        } as ISingleElementList
        ));
        props.switchView(false)
    }

    return (
        <Wrapper>
            <CustomTextInput value={nameInput} onChange={nameValueChange} placeholder="Name" />
            <CustomTextInput value={descrInput} onChange={descriptionValueChange} placeholder="Description" />

            <ButtonWrapper>
                <Button title="Add" onPress={saveDate} color="#9896D9" />
            </ButtonWrapper>
        </Wrapper>
    )
}

export default Form