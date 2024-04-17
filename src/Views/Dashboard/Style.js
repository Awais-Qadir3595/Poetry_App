import { StyleSheet } from "react-native";
import { colors, colorsTheme } from "../../Services/Color";
const styles = StyleSheet.create({
    body: {
        flex: 1,

    },
    bannerView: {
        margin: 5, paddingHorizontal: 10, backgroundColor: colorsTheme.lightPrimary,
        borderRadius: 10,  

    },
    bannerFlat: {
        backgroundColor: colorsTheme.primary, width: '100%',
    },
    bannerIconsRow: {
        alignItems: 'center', marginVertical: 5,
        justifyContent: 'space-between',


    },
    rw: {
          paddingHorizontal:20, alignItems: 'center',marginTop:10
    },
    PoetryView: {
        margin: 1, paddingHorizontal: 10,
        borderRadius: 10, paddingTop: 10,
        paddingHorizontal: 20, backgroundColor: '#ECEBEB'
    },
    poetName: {
        alignSelf: 'flex-start',  
    },
    poetry:{
        alignSelf:'center'
    }

})
export { styles };