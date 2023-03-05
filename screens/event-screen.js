import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';
import { useLayoutEffect } from 'react';

const EventScreen = () => {
    const route = useRoute()
    // const navigation = useNavigation();

    const {eventId, title, description }  = route.params

    // useLayoutEffect{() => {
    //     navigation.setOptions({
    //         headerTitle: "new title",
    //         headerLeft:() => (
    //             <ScreenStackHeaderBackButtonImage
    //             tintColor="darkblue"
    //             onPress={() => navigation.goBack()}/>
    //         )
    //     })
    // }}

    return (
        <View style={{backgroundColor: 'white', height: 1600, paddingLeft: 25, paddingRight: 25}}>            
        <Text className="text-3xl pt-12 pb-6 text-center font-semibold bg-white">Start your conversation about {title} 😊</Text>
            <View style={styles.card}>
                {/* <Text style={{fontSize: 20}}>{title}</Text> */}
                <Text style={{fontSize: 20}}>{description}</Text>
            </View>
        </View>

    );

}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: '#c5c5c5',
        borderRadius: 10,
        marginVertical: 5,
        padding: 20,
        marginTop: 30,
    }
})

export default EventScreen;