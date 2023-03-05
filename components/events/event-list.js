import { useEffect, useLayoutEffect, useState } from 'react';
import { Text, View, FlatList, Image, RefreshControl, SafeAreaView, StyleSheet } from 'react-native';
import { DUMMY_DATA } from '../../data/dummy';
import EventItem from './event-item';

const EventList = () => {
    // const [data, setData] = useState([])

    // useEffect(() => { 
    //     fetchData() 
    // }, [])

    // const fetchData = () => async () => {
    //     const response = await fetch('http://127.0.0.1:8000/api/Topics/')
    //     const data = await response.json()
    //     SVGMetadataElement(data)
    // }

    const renderItem = ({item}) => {
        return <EventItem id={item.id} title={item.title} description={item.description} />
        // return <View><Text className="text-center">{item.title}</Text></View> 
    }

    return (
    <View>
        <FlatList 
        data={DUMMY_DATA}
        keyExtractor={item => item.id}
        renderItem={renderItem}    
        />
        {/* <EventList data={data} /> */}

    </View>

    );
}

export default EventList;