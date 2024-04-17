import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Copy, HeartPrimaryLight, Share, } from '../../Assets/svgs';
import { SafeAreaView } from 'react-native-safe-area-context';
import Label from '../../Components/core/Label';
import { styles } from './Style';
import Bold from '../../Components/core/bold';
import { colorsTheme } from '../../Services/Color';
import Row from '../../Components/core/Row';
import Header from '../../Components/core/header';
import DrawHorizentalLine from '../../Components/core/drawHorizentalLine';

const Dashboard = ({ navigation }) => {

    const onSubmit = () => {
        navigation.navigate('SignUp')
    }

    const bannersData = [
        {
            id: 1,
            text: 'تجھ سے کچھ اور تعلق بھی ضروری ہے میرا \n  یہ محبت تو کسی وقت بھی مر سکتی ہے',

        },
        {
            id: 2,
            text: 'تجھ سے کچھ اور تعلق بھی ضروری ہے میرا \nیہ محبت تو کسی وقت بھی مر سکتی ہے',

        },
        {
            id: 3,
            text: 'تجھ سے کچھ اور تعلق بھی ضروری ہے میرا \n  محبت تو کسی وقت بھی مر سکتی ہے',

        }
        ,
        {
            id: 4,
            text: 'تجھ سے کچھ اور تعلق بھی ضروری ہے میرا \nیہ محبت تو کسی وقت بھی مر سکتی ہے',

        },
        {
            id: 5,
            text: 'تجھ سے کچھ اور تعلق بھی ضروری ہے میرا \n یہ محبت تو کسی وقت بھی مر سکتی ہے',

        },
        {
            id: 6,
            text: 'تجھ سے کچھ اور تعلق بھی ضروری ہے میرا \n  یہ محبت تو کسی وقت بھی مر سکتی ہے',

        }, {
            id: 7,
            text: 'تجھ سے کچھ اور تعلق بھی ضروری ہے میرا \n  یہ محبت تو کسی وقت بھی مر سکتی ہے',

        },
        {
            id: 8,
            text: 'تجھ سے کچھ اور تعلق بھی ضروری ہے میرا \n یہ محبت تو کسی وقت بھی مر سکتی ہے',

        },
        {
            id: 9,
            text: 'تجھ سے کچھ اور تعلق بھی ضروری ہے میرا \n  یہ محبت تو کسی وقت بھی مر سکتی ہے',

        }
    ]

    const renderBanner = ({ item }) => {

        return (
            <View style={styles.bannerView}>
                <Label label={item.text} size={18} />

                <Row style={styles.bannerIconsRow}>
                    <Label label={'اویس قادر'} size={13} style={styles.poetName} />

                    <Row>
                        <Copy />
                        <Share style={{ marginHorizontal: 20 }} />
                        <HeartPrimaryLight />
                    </Row>


                </Row>
            </View>
        )
    }

    const renderPoetry = ({ item }) => {

        return (
            <View style={styles.PoetryView}>
                <Label label={item.text} size={18} style={{ alignSelf: 'center' }} />

                <Row style={styles.bannerIconsRow}>
                    <Label label={'اویس قادر'} size={15} style={styles.poetName} />
                    <Row>
                        <Copy />
                        <Share style={{ marginHorizontal: 30 }} />

                        <HeartPrimaryLight />
                    </Row>

                </Row>
            </View>
        )
    }

    const onCategoriesPress = () => {
        navigation.navigate('Categories')
    }

    const onProfileClick = () => {
        navigation.navigate('UserProfile')
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View  >
                <Header leftIcon={'BackIcon'}
                    Title={'Poetry'} rightIcon={'UserImg'}
                    onRightClick={onProfileClick} />
            </View>

            <View style={styles.body}>
                <View style={styles.bannerFlat}>
                    <FlatList
                        horizontal
                        data={bannersData}
                        renderItem={renderBanner}
                        keyExtractor={item => item.id}
                    />
                </View>

                <Row style={styles.rw}>
                    <TouchableOpacity 
                     >
                        <Bold label='غزلیں' color={colorsTheme.primary} size={20}
                            />
                             <DrawHorizentalLine color={colorsTheme.primary} />

                    </TouchableOpacity>
                    <TouchableOpacity onPress={onCategoriesPress}
                    >
                        <Bold label='All Categories' color={colorsTheme.primary} />
                        <DrawHorizentalLine color={colorsTheme.primary} />
                    </TouchableOpacity>
                </Row>
                <FlatList

                    data={bannersData}
                    renderItem={renderPoetry}
                    keyExtractor={item => item.id}
                />
            </View>
        </SafeAreaView>
    )
}
export default Dashboard;