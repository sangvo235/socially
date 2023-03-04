import { Text, View, FlatList, Image, RefreshControl, SafeAreaView, StyleSheet } from 'react-native';
import { DUMMY_DATA } from '../../data/dummy';
import EventItem from './event-item';

const EventList = () => {

    const renderItem = ({item}) => {
        // return <EventItem id={item.id} title={item.title} description={item.description} />
        return <View style={styles.card}><Text className="text-center">{item.title}</Text></View> 
    }

    return (
    <View>
        <FlatList 
        data={DUMMY_DATA}
        keyExtractor={item => item.id}
        renderItem={renderItem}    
        />
    </View>

    );
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: '#c5c5c5',
        borderRadius: 10,
        marginVertical: 5,
        padding: 30,
    }
})

export default EventList;