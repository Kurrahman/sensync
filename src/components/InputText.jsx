import { StyleSheet, TextInput, View } from "react-native";
import colors from "../theme/colors";
import TextElement from "./Text";
import { useState } from "react";

const style = StyleSheet.create({
    container : {
        borderColor : colors.white,
        borderWidth : 1,
        borderRadius : 5,

    },
    input : {
        padding : 20,
        fontFamily: 'Inter',
        color: colors.textWhite,
        fontSize: 16,
    },
    contentText: {
        top : 22.5,
        left: 20,
        position: 'absolute'
    },
})

function InputTextElement({placeholder, value, setValue}, props){
    const [tmpName, setTmpName] = useState('') 

    return <View style={style.container}>
        <TextInput 
            style={[style.input]} 
            value={value ? value : tmpName} 
            onChangeText={
                setValue ?
                (text) => setValue(text) :
                (text) => setTmpName(text) 
            }>
        </TextInput>
        {(value ? value == '' : tmpName == '') &&
            <TextElement style={style.contentText}>{placeholder ? placeholder : ''}</TextElement>
        }
    </View>
};

export default InputTextElement;