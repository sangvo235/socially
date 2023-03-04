import { Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EventItem = (id, title, description) => {
    const navigation = useNavigation();

    return (
        <View style={styles.card} onPress={() => navigation.navigate("Event", {eventId: id})}>
            <Text>{title}</Text>
            <Text>{description}</Text>
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

export default EventItem;