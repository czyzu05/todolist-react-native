import React, { FC, useState } from 'react';
import { Button, View } from 'react-native';
import styled from 'styled-components/native';

import Colors from '../../constans/Colors';

import Form from '../../components/Form'
import Todolist from '../../components/Todolist'

const TodoListScreen = ({navigation}) => {
    const [formView, setFormView] = useState<boolean>(false)
    return (
        <View>
            {formView ? (
                <Form switchView = {setFormView}/>
            ) : (
                <Todolist switchView = {setFormView}/>
            )}
        </View>
    );
};

export default TodoListScreen;