import { Text, View, FlatList } from 'react-native';
import { DUMMY_DATA } from '../../data/dummy';

const EventList = () => {

    const renderItem = ({item}) => {
        return <Text>{item.title}</Text>
    }

    return (

    // <View>
        <FlatList
        data={DUMMY_DATA}
        keyExtractor={item => item.id}
        renderItem={renderItem}            
        />        
    // </View>

    );
}

export default EventList;