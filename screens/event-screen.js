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
        <View style={styles.screen}>
            <Text style={{fontSize: 20}}>This is event detail screen for {eventId}</Text>
            <Text style={{fontSize: 20}}>{title}</Text>
            <Text style={{fontSize: 20}}>{description}</Text>
        </View>

    );

}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }
})

export default EventScreen;