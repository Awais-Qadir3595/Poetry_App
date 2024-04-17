import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Copy, HeartPrimaryLight, Share, } from '../../Assets/svgs';
import { SafeAreaView } from 'react-native-safe-area-context';
import Label from '../../Components/core/Label';
import { styles } from './Style';
import Row from '../../Components/core/Row';
import Header from '../../Components/core/header';
import Bold from '../../Components/core/bold';
import CatUrdu from '../../Components/custom/CategoryUrdu';


const Categories = ({ navigation }) => {

    const onSubmit = () => {
        navigation.navigate('SignUp')
    }

    const bannersData = [
        {
            id: 1,
            title: 'اسلامی'

        },
        {
            id: 2,
            title: 'محبت'

        }, {
            id: 3,
            title: 'نفرت'

        }, {
            id: 4,
            title: 'دوستی'

        },
        {
            id: 5,
            title: 'پاکستان'

        }, {
            id: 6,
            title: 'شادی'

        }, {
            id: 7,
            title: 'موسم'

        }, {
            id: 8,
            title: 'عید'

        }, {
            id: 9,
            title: 'محرم'

        }, {
            id: 10,
            title: 'عشق'

        },


    ]

    const renderCategory = ({ item }) => {

        return (
            <TouchableOpacity style={styles.category}>
                <CatUrdu label={item.title} size={18}/>
            </TouchableOpacity>
        )
    }


    return (
        <SafeAreaView style={{ flex: 1, }}>
            <View  >
                <Header leftIcon={'BackIcon'}
                    Title={'All Categories'} 
                    rightIcon={'Search'}/>
            </View>


            <View style={styles.body}>
                <FlatList
                    numColumns={4}
                    columnWrapperStyle={{ marginBottom: 15, justifyContent: 'space-around' }}
                    data={bannersData}
                    renderItem={renderCategory}
                    keyExtractor={item => item.id}
                />
            </View>



        </SafeAreaView>
    )
}
export default Categories;