import { StyleSheet } from "react-native";
import { colorsTheme } from "../../Services/Color";
const styles=StyleSheet.create({
    body:{flex:1,
         marginHorizontal:15,marginVertical:20, 
    },
    profilePic:{
       justifyContent:'center',alignItems:'center',
        padding:10,borderRadius:10,position:'absolute',alignSelf:'center',
        bottom:-10,height:100,width:100,width:50,borderRadius:50
    },
    cameraPic:{
        position:'absolute',bottom:0,right:-30
    },
    item:{
        margin:10,justifyContent:'center',padding:10,borderBottomColor:colorsTheme.primary,
    borderBottomWidth:1
    },
    txt:{
        alignSelf:'center'
    },
    lower:{
        justifyContent:'flex-end',flex:1
    },
    aws:{ 
          fontFamily:'AA Sameer Khashab-Bold Bold',
          fontSize:20
    
    }
})
export {styles};