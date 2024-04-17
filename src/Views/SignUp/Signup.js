import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Camera, HeaderStyle, RadioEmpty, RadioFill, User, Wellcome } from '../../Assets/svgs';
import { SafeAreaView } from 'react-native-safe-area-context';

import Label from '../../Components/core/Label';
import { styles } from './Style';
import Bold from '../../Components/core/bold';
import PrimaryTextInput from '../../Components/core/PrimaryTextInput';
import PrimaryButton from '../../Components/core/button';
import { colorsTheme } from '../../Services/Color';
import Row from '../../Components/core/Row';

const SignUp = ({ navigation }) => {

    const onSubmit = () => {
        navigation.navigate('Dashboard')
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View  >
                <HeaderStyle />
            </View>

            <View style={styles.body}>
                <Wellcome style={styles.wellcomeMsg} />
                <TouchableOpacity style={styles.userImageView}>
                    <User height={50} width={50} />
                    <Camera style={styles.cameraImage} />
                </TouchableOpacity>
                <PrimaryTextInput placeholder='Enter username' style={styles.txtInput} placeholderTextColor={colorsTheme.primary} />
                <Row style={styles.genderRow}>
                    <Label label='Gender' />
                    <Row style={styles.genderRow}>
                        <RadioFill />
                        <Label label='Male' style={styles.genderRowLabel} />
                    </Row>
                    <Row style={styles.genderRow}>
                        <RadioEmpty />
                        <Label label='Female' style={styles.genderRowLabel} />
                    </Row>
                </Row>
                <PrimaryTextInput placeholder='Enter Password' style={styles.txtInput} placeholderTextColor={colorsTheme.primary} />
                <PrimaryTextInput placeholder='Confirm Password' style={styles.txtInput} placeholderTextColor={colorsTheme.primary} />

                <PrimaryButton label='Signup' bgColor={colorsTheme.primary} color={'white'} width={'30%'}
                    style={styles.btnSubmit} onclick={onSubmit}/>


            </View>
        </SafeAreaView>
    )
}
export default SignUp;