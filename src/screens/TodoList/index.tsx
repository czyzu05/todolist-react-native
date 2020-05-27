import React, { FC, useState } from 'react';
import { Button, View} from 'react-native';
import styled from 'styled-components/native';

import Colors from '../../constans/Colors';

import Form from '../../components/Form'
import Todolist from '../../components/Todolist'


const Wrapper = styled.View`
    background-color: #DFE7F2;
    height: 100%
`


const TodoListScreen = ({navigation}) => {
    const [formView, setFormView] = useState<boolean>(false)
    return (
        <Wrapper>
            {formView ? (
                <Form switchView = {setFormView}/>
            ) : (
                <Todolist switchView = {setFormView}/>
            )}
        </Wrapper>
    );
};

export default TodoListScreen;