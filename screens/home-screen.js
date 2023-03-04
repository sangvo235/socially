import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, ScrollView, View, Text, SafeAreaView, Platform, TextInput, Button, Image } from 'react-native';
import EventList from "../components/events/event-list";

const HomeScreen = () => {
    const [text, setText] = useState('');
    const navigation = useNavigation();

    return (
      <SafeAreaView>
      <View className="bg-indigo-100 py-3	">
      <Image
        className="object-center-top w-50 h-50"
        source={require('../assets/socially.png')}
      />
      </View>
      {/* <Button title="Move to Details" onPress={() => navigation.navigate('Event')} /> */}
      {/* <Text style={{fontSize: 24}}>{Platform.OS === 'android' ? 'android' : 'ios'}</Text> */}
  
      <ScrollView>
      <View style={{backgroundColor: 'white', height: 1600, padding: 25}}>
        <Text className="text-2xl pb-2">Lets Make It Social!</Text>
      
        <TextInput
        defaultValue={text}
        onChangeText={txt => {setText(txt)}}
        style={{borderWidth: 1, borderColor: 'black', padding: 10}}
        />
        <Button className="rounded-full" title='click me' onPress={() => console.log("hi")}/>

        <EventList />
      </View>
  
      </ScrollView>
      
      <StatusBar style='dark'/>
  
      </SafeAreaView>

  );

}

export default HomeScreen;