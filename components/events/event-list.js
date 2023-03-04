import { Text, View, FlatList, Image } from 'react-native';
import { DUMMY_DATA } from '../../data/dummy';

const EventList = () => {

    const renderItem = ({item}) => {
        return <Text>{item.title}</Text>
    }

    return (
    <View>
        <Image
            style={{width: 100, height: 75, marginTop: 20, marginBottom: 20}}
            source={{ uri : href="https://i.gifer.com/bf6.gif"}}
        />

        <Text className="text-2xl pb-2">🔥 Trending Topics! 🔥
        </Text>

        <FlatList
        data={DUMMY_DATA}
        keyExtractor={item => item.id}
        renderItem={renderItem}            
        />        
    </View>

    );
}

export default EventList;