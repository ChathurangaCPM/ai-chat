import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import theme from '../themes/theme'


const MainChatHeder = () => {
    const [openConfirmModal, setOpenConfirmModal] = useState(false);
    
    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.wrapRow}>
                <TouchableOpacity style={styles.selectLocation} onPress={() => setOpenConfirmModal(true)}>
                    <Text style={styles.locTitle}>Location</Text>
                    <Text style={styles.locName}>Your Current Location</Text>
                </TouchableOpacity>

                {/* <Text>Right</Text> */}
            </View>

            {/* <BottomSheetView
                openSheet={openConfirmModal}
                modalProps={{
                    adjustToContentHeight: true,
                    modalStyle: {
                        backgroundColor: theme.freelancer.headerColor,
                    },
                }}
                onClose={() => setOpenConfirmModal(false)}>
                <Text>Content here</Text>
            </BottomSheetView> */}
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#fff'
    },
    wrapRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: theme.gap.screen
    },
    selectLocation: {
        flexDirection: 'column',
        gap: theme.gap.textGap,
    },
    locTitle: {
        fontSize: theme.fontSizes.smallest,
        textTransform: 'uppercase'
    },
    locName: {
        // fontSize: theme.fontSizes.medium,
    }
});


export default MainChatHeder