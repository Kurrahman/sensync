import { useState } from 'react';
import chevronDown from '../assets/chevron-down.png'
import TextElement from './Text';
import { FlatList, Image, Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import colors from '../theme/colors';
import Separator from './Separator';

const style = StyleSheet.create({
    container : {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        borderColor : colors.white,
        borderWidth : 1,
        borderRadius : 5,

        padding : 20,
    },
    contentText: {
        marginTop : 22.5,
        marginLeft: 20,
        position: 'absolute'
    },
    icon : {
        width: 30,
        height: 30,
    },
    overlay : {
        width : '100%',
        height : '100%',
        backgroundColor : colors.backgroundColor,
        opacity : 0.7,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dropdown : {
        width: '80%',
        height: '60%',
        backgroundColor: colors.backgroundColor,
        opacity : 1, 

        borderColor : colors.white,
        borderWidth : 1,
        borderRadius: 10,
    },
    dropdownItem : {
        padding: 10,
    }
})

function InputDropdown(props) {
    const [isOpen, setIsOpen] = useState(false)
    const [placeholder, setPlaceholder] = useState(props.placeholder ? props.placeholder : '')

    function toggleDropdown(){
        setIsOpen(!isOpen)
    }

    function onPressItem(item){
        toggleDropdown()
        props.setSelected(item)
        setPlaceholder(item.name)
    }

    function renderItem({item}){
        return <View>
            <TouchableOpacity style={style.dropdownItem} onPress={() => onPressItem(item)}>
                <TextElement>
                    {item.name}
                </TextElement>
            </TouchableOpacity>
            <Separator/>
        </View>
    }

    function renderDropdownList(){
        return <Modal visible={isOpen} transparent>
            <TouchableOpacity style={style.overlay} onPress={() => setIsOpen(false)}>
                <View style={style.dropdown}>
                    <FlatList
                        data={props.data}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </TouchableOpacity>
        </Modal>
    }

    return <TouchableOpacity style={style.container} onPress={toggleDropdown}>
        {renderDropdownList()}
        <TextElement>
            {placeholder}
        </TextElement>
        <Image style={style.icon} source={chevronDown}/>
    </TouchableOpacity>
}

export default InputDropdown;