import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import theme from "../../themes/theme";
import HotelCard from "../cards/hotel";

const HotelCarousel = ({ item, index }) => {
    return (
        <ScrollView horizontal={true} contentContainerStyle={styles.wrapScroller} showsHorizontalScrollIndicator={false}>
            <HotelCard />
            <HotelCard />
            <HotelCard />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    wrapScroller: {
        flexDirection: 'row',
        gap: 10,
        paddingHorizontal: theme.gap.screen,
        paddingVertical: theme.gap.card,
    },
})

export default HotelCarousel;