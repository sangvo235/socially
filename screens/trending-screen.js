import { View, Text, Button, TouchableOpacity, ScrollView, Image } from 'react-native';
import EventList from "../components/events/event-list";
import { useNavigation } from '@react-navigation/native';
import { HomeStack } from '../navigation/stack';

const TrendingScreen = () => {
    const navigation = useNavigation();

    return (
    <ScrollView>
        <Text className="text-3xl pt-12 pb-6 text-center font-semibold bg-white">🔥 Trending Topics! 🔥
        </Text>
        <View style={{backgroundColor: 'white', height: 1600, paddingLeft: 25, paddingRight: 25}}>
            {/* <Button title="Move to Details" onPress={() => navigation.navigate('Event')} /> */}
            <EventList />

        <Image
          style={{width: 120, height: 100, marginTop: 20, marginBottom: 20, marginLeft: 110}}
          source={{ uri : href="https://i.gifer.com/bf6.gif"}}
        />
        </View>

    </ScrollView>

    );

}

export default TrendingScreen;