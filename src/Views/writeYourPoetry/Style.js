import { StyleSheet } from "react-native";
import { colors, colorsTheme } from "../../Services/Color";
const styles = StyleSheet.create({
    body: {
        flex: 1,

    },
    bannerView: {
        margin: 5, paddingHorizontal: 10, backgroundColor: colorsTheme.lightPrimary,
        borderRadius: 10, paddingTop: 10

    },
    bannerFlat: {
        backgroundColor: colorsTheme.primary, width: '100%',
    },
    bannerIconsRow: {
        alignItems: 'center', marginVertical: 10,
         justifyContent: 'flex-start',


    },
    rw: {
        margin: 10,paddingHorizontal:10
    },
    PoetryView: {
        margin: 1, paddingHorizontal: 10,
        borderRadius: 10, paddingTop: 10, backgroundColor: 'white',
        paddingHorizontal:20
    },
    poetName: {
        alignSelf: 'flex-start', margin: 5
    }

})
export { styles };