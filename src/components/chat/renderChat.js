import { Dimensions, Image, StyleSheet, Text, View } from "react-native"
import HotelCarousel from "./hotelCarousel"
import RenderHTML from "react-native-render-html";
import theme from "../../themes/theme";

const RenderChat = ({ owner, text }) => {
    const tagsStyles = {
        h3: {
            margin: 0,
            padding: 0,
            paddingVertical: 3,
            ...(owner === 'self' && styles.textAlignRight),
        },
        p: {
            margin: 0,
            padding: 0,
            paddingVertical: 3,
            ...(owner === 'self' && styles.textAlignRight),
        },
        a: {
            textDecorationLine: 'underline',
            paddingVertical: 3,
            ...(owner === 'self' && styles.textAlignRight),
        },
        strong: {
            fontWeight: 'bold',
            paddingVertical: 3,
            ...(owner === 'self' && styles.textAlignRight),
        },
        em: {
            fontStyle: 'italic',
            paddingVertical: 3,
            ...(owner === 'self' && styles.textAlignRight),
        },
        br:{
            marginBottom: 10
        }
    };
    return (
        <View style={[styles.wrapperContainer, owner === "self" && styles.selfContainer]}>

            <View style={[styles.wrapText, owner === "self" && styles.selfTextContainer]}>
                {owner === "ai" && <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.chatAvatar} />}

                <RenderHTML
                    contentWidth={Dimensions.get('screen').width}
                    style={{ textAlign: 'right' }}
                    source={{ html: text }}
                    tagsStyles={tagsStyles}
                />
            </View>
            {owner === "ai" && <HotelCarousel />}
        </View>
    )
}

const styles = StyleSheet.create({
    wrapperContainer: {

    },
    selfContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        textAlign: 'right'
    },
    wrapText: {
        paddingHorizontal: theme.gap.screen,
        paddingVertical: 5,
        flexDirection: 'column',

    },
    chatAvatar: {
        width: 30,
        height: 30,
        borderRadius: 20,
        marginBottom: 5
    },
    selfTextContainer:{
        padding: 5,
        backgroundColor: '#f4f6f8',
        maxWidth: '80%',
        marginRight: theme.gap.screen,
        borderRadius: theme.shape.mediumRadius
    },
    textAlignRight: {
        // textAlign: 'right'
    }
})

export default RenderChat