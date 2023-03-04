import { View, Text } from 'react-native';
import EventList from "../components/events/event-list";

const TrendingScreen = () => {

    return (
        <View style={{backgroundColor: 'white', height: 1600, padding: 25}}>
            <EventList />
        </View>

    );

}

export default TrendingScreen;