import { StyleSheet } from "react-native";
import { colors, colorsTheme } from "../../Services/Color";
const styles=StyleSheet.create({
    body:{flex:1,
        margin:10,  
    },
    btnSubmit:{
        alignSelf:'center',marginVertical:20
    },
    txt:{alignSelf:'center'},
    signUptxt:{
        color:colorsTheme.primary,marginHorizontal:5
    },
    lowerTxt:{
        alignItems:'center',justifyContent:'flex-start',alignSelf:'center'
    }
})
export {styles};