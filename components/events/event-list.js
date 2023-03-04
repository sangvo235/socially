import { Text, View, FlatList, Image } from 'react-native';
import { DUMMY_DATA } from '../../data/dummy';

const EventList = () => {

    const renderItem = ({item}) => {
        return <Text>{item.title}</Text>
    }

    return (
    <View>

        <Text className="text-3xl pt-12 pb-6 text-center font-semibold">🔥 Trending Topics! 🔥
        </Text>

        <FlatList 
        data={DUMMY_DATA}
        keyExtractor={item => item.id}
        renderItem={renderItem}     
        />   
        <Image
          style={{width: 120, height: 100, marginTop: 20, marginBottom: 20, marginLeft: 110}}
          source={{ uri : href="https://i.gifer.com/bf6.gif"}}
        />
    </View>

    );
}

export default EventList;