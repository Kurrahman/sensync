import { StyleSheet, Text } from "react-native";
import colors from "../theme/colors";

const textDict = {
    fontFamily : 'Inter',
    weight : '400',
    size : {
        'small'   : 13,
        'normal'  : 16,
        'large'   : 24, 
    }
};

const style = (
        fontFamily=textDict.fontFamily,
        color=colors.textWhite,
        fontSize='normal'
    ) => StyleSheet.create({
    text : {
        fontFamily : fontFamily,
        color : color,
        fontSize: (textDict.size[fontSize]) ? textDict.size[fontSize] : textDict.size['normal']
    }
})

function TextElement(props) {
    return <Text style={[style(
        props.fontFamily,
        props.color,
        props.fontSize
    ).text, props.style]}>
        {props.children}
    </Text>
};

export default TextElement;