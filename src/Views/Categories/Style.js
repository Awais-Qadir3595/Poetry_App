import { StyleSheet } from "react-native";
import { colors, colorsTheme } from "../../Services/Color";
const styles = StyleSheet.create({
    body: {
        flex: 1, 

    },
     category:{
        padding:10,borderRadius:10,
         elevation:5,
        shadowColor:colorsTheme.primary,
        backgroundColor:'white',
        borderWidth:0.5,borderColor:colorsTheme.primary,
      
      
     },
     body:{
        margin:10,
     }
    
     

})
export { styles };