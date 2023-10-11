import { StyleSheet, View } from "react-native";
import colors from "../theme/colors";

function Separator() {
    return <View
        style={{
        borderBottomColor: colors.white,
        borderBottomWidth: StyleSheet.hairlineWidth,
        }}
  />
}

export default Separator;