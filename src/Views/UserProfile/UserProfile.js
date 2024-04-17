import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Camera, Forward, HeaderStyle, ProfileSvg, RadioEmpty, RadioFill, User, UserImg, Wellcome } from '../../Assets/svgs';
import { SafeAreaView } from 'react-native-safe-area-context';

import Label from '../../Components/core/Label';
import { styles } from './Style';
import Bold from '../../Components/core/bold';
import PrimaryTextInput from '../../Components/core/PrimaryTextInput';
import PrimaryButton from '../../Components/core/button';
import { colorsTheme } from '../../Services/Color';
import Row from '../../Components/core/Row';

const UserProfile = ({ navigation }) => {

    const onSubmit = () => {
        navigation.navigate('Dashboard')
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <HeaderStyle />
                <TouchableOpacity style={styles.profilePic}>
                    <ProfileSvg />
                    <Camera style={styles.cameraPic} />
                </TouchableOpacity>
            </View>

            <View style={styles.body}>
                <Bold label='Ayan Khan' style={styles.txt} />
                <View style={styles.lower}>
                <TouchableOpacity style={styles.item}>
                    <Row style={{ alignItems: 'center' }}>
                        <Label label='My Profile' />
                        <Forward />
                    </Row>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item}>
                    <Row style={{ alignItems: 'center' }}>
                   <Label label={'My Poetry'}/>
                        <Forward />
                    </Row>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item}>
                    <Row style={{ alignItems: 'center' }}>
                        <Label label='Privacy' />
                        <Forward />
                    </Row>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item}>
                    <Row style={{ alignItems: 'center' }}>
                        <Label label='Logout' />
                        <Forward />
                    </Row>
                </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    )
}
export default UserProfile;