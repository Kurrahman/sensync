import { StyleSheet } from "react-native";
import colors from "./theme/colors";

const styles = StyleSheet.create({
    background: {
        backgroundColor: colors.backgroundColor,
        height: '100%',
    },
    content: {
        flex : 1,
        padding : 35,
        gap: 10,
    },
    title: {
        marginTop: 10,
    },
    logo: {
        height: 40,
        width: 40,
    },
    formContainer : {
        paddingVertical: 10,
        gap: 10,
    },
    bottom : {
        flex : 1,
        justifyContent : "flex-end",
    },
    submitBtn : {
        padding : 20,
        borderRadius : 5,
        backgroundColor : colors.blue,
        alignItems : "center",
    },
    disabledSubmitBtn : {
        padding : 20,
        borderRadius : 5,
        backgroundColor : colors.gray,
        alignItems : "center",
    },
  });
export default styles;