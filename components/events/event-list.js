import { Text, View, FlatList, Image, RefreshControl } from 'react-native';
import { DUMMY_DATA } from '../../data/dummy';
import EventItem from './event-item';

const EventList = () => {

    const renderItem = ({item}) => {
        // return <EventItem id={item.id} title={item.title} description={item.description} />
        return <View style={{padding: 40}}><Text>{item.title}</Text></View>
    }

    return (
    <View>

        <Text className="text-3xl pt-12 pb-6 text-center font-semibold">🔥 Trending Topics! 🔥
        </Text>

        <FlatList 
        data={DUMMY_DATA}
        keyExtractor={item => item.id}
        renderItem={renderItem}   
        refreshControl= {
            <RefreshControl
                refreshing={false}
                onRefresh={() => console.log('refreshing..')}
            />   
        }
        />
        <Image
          style={{width: 120, height: 100, marginTop: 20, marginBottom: 20, marginLeft: 110}}
          source={{ uri : href="https://i.gifer.com/bf6.gif"}}
        />
    </View>

    );
}

export default EventList;