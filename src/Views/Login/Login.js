import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { HeaderStyle } from '../../Assets/svgs';
import { SafeAreaView } from 'react-native-safe-area-context';

import Label from '../../Components/core/Label';
import { styles } from './Style';
import Bold from '../../Components/core/bold';
import PrimaryTextInput from '../../Components/core/PrimaryTextInput';
import PrimaryButton from '../../Components/core/button';
import { colorsTheme } from '../../Services/Color';
import Row from '../../Components/core/Row';

const Login = ({ navigation }) => {

    const onLogin = () => {
        navigation.navigate('SignUp')
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 0.5 }}>
                <HeaderStyle />
            </View>

            <View style={styles.body}>
                <Bold label='Login' size={20} />

                <PrimaryTextInput placeholder=' Enter Username' rightIcon='User' />
                <PrimaryTextInput placeholder=' Enter Password' rightIcon='EyeOpen' secureTextEntry={true} />
                <PrimaryButton label='Login' bgColor={colorsTheme.primary} color={'white'} width={'30%'} style={styles.btnSubmit}
                    onclick={onLogin} fontSize={16} />

                <Row style={styles.lowerTxt}>
                    <Text>Dont Have Account?</Text>
                        <TouchableOpacity>
                            <Bold style={styles.signUptxt} label='SignUp' />
                        </TouchableOpacity>
                     
                </Row>


            </View>
        </SafeAreaView>
    )
}
export default Login;