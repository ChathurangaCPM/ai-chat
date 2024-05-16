import { StyleSheet, Text, TouchableOpacity } from "react-native"
import theme from "../themes/theme";

const CustomButton = ({text, size, onPress, ...rest}) => {
    return(
        <TouchableOpacity onPress={onPress} style={[styles.buttonWrapper, size === "small" && styles.small]}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonWrapper:{
        padding: 10,
        backgroundColor: theme.colors.primary,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: theme.shape.mediumRadius
    },
    text:{
        color: "#fff",
        fontWeight: '500',
        fontSize: theme.fontSizes.small
    }
});

export default CustomButton