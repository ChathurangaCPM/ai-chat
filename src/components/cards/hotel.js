import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import theme from "../../themes/theme"
import CustomButton from "../customButton"
import { useNavigation } from "@react-navigation/native"

const HotelCard = ({}) => {
    const navigation = useNavigation()
    return (
        <View style={styles.wrapCard}>
            <TouchableOpacity onPress={() => navigation.push('ChatDetails')}>
                <View style={styles.bannerImageWrapper}>
                    <Image style={styles.bannerImage} source={{ uri: 'https://scontent.fcmb4-2.fna.fbcdn.net/v/t39.30808-6/241673328_4721218251245175_5315134705386087795_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHTwTgM30Ikn2Zna9gBLK55lhw_Ow1nmxeWHD87DWebFwQF7fMy7YeeZNQvLODIIJSRbukxIOIUFAfTQ6ezQv-e&_nc_ohc=nthN8T0ZQl4Q7kNvgED0UQK&_nc_zt=23&_nc_ht=scontent.fcmb4-2.fna&oh=00_AYB-P0n4Tq2B7ubhvNmXneOoI6q9lBcTBUZl6z0LWeIAig&oe=664BB405' }} />
                </View>
            </TouchableOpacity>
            <View style={styles.contentWrapper}>
                <TouchableOpacity onPress={() => navigation.push('ChatDetails')}>
                    <Text style={styles.name}>Jetwing Hotel and resorts</Text>
                </TouchableOpacity>
                <View>
                    <Text>4.3 Rating</Text>
                </View>
                <View style={{marginBottom: 10}}>
                    <Text>Expensive</Text>
                </View>
                <CustomButton text="More Details" onPress={() => navigation.push('ChatDetails')}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapCard: {
        width: 200,
        borderRadius: theme.shape.radius,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)'
    },
    bannerImageWrapper: {
        width: '100%',
        height: 100,
        borderBottomLeftRadius: theme.shape.radius,
        borderBottomRightRadius: theme.shape.radius,
        overflow: 'hidden'
    },
    bannerImage: {
        width: ' 100%',
        height: 100,
        resizeMode: 'cover'
    },
    contentWrapper: {
        padding: 10
    },
    name: {
        fontWeight: 'bold',
        paddingBottom: 5
    }
})

export default HotelCard