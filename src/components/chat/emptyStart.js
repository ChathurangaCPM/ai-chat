import { Dimensions, StyleSheet, Text, View } from "react-native"
import theme from "../../themes/theme";

const EmptyStart = () => {
    return(
        <View style={styles.wrapper}>
            <Text style={styles.mainText}>Welcome</Text>
            <Text style={styles.sub}>Let's begin journey, i will help you as always</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        // backgroundColor: '#000',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: Dimensions.get('screen').height - 200,
        gap: 10
    },
    mainText: {
        fontSize: theme.fontSizes.large + 10,
        fontWeight: 'bold'
    },
    sub:{
        color: 'gray'
    }
})

export default EmptyStart;