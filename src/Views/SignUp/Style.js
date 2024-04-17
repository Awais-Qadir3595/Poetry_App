import { StyleSheet } from "react-native";
import { colors, colorsTheme } from "../../Services/Color";
const styles=StyleSheet.create({
    body:{flex:1,
         marginHorizontal:15
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
    },
    wellcomeMsg:{
        alignSelf:'center'
    },
    userImageView:{
        alignSelf:'center',marginVertical:20,backgroundColor:'#8AB9B9',padding:20,borderRadius:50,height:100,width:100,
        justifyContent:'center',alignItems:'center'
    },
    cameraImage:{
        position:'absolute',right:0,bottom:5
    },
    txtInput:{
        borderWidth:1,borderColor:'teal',borderRadius:10,elevation:2,backgroundColor:'white',
        width:'100%',alignSelf:'center'
    },
    genderRow:{
        alignItems:'center',
    },
    genderRowLabel:{
        marginLeft:10
    },
    

})
export {styles};