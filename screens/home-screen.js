import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, ScrollView, View, Text, SafeAreaView, Platform, TextInput, Button, Image } from 'react-native';
import EventList from "../components/events/event-list";
import { Feather } from '@expo/vector-icons';
import SearchFilter from '../components/events/search-filter';
import { DUMMY_TWO_DATA } from '../data/dummy-two';

const HomeScreen = () => {
    const [input, setInput] = useState('');
    console.log(input);
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
        <Text className="text-2xl pb-2 font-semibold">Lets Make It Social!</Text>
      
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F5F5F5', borderWidth: 1, borderColor: 'black', padding: 10, borderRadius: 10, marginTop: 10, marginBottom: 10}}>
        <Feather name="search" size={20} color="black" style={{ marginLeft: 1, marginRight: 4}}/>
        <TextInput 
          value={input} 
          onChangeText={(text) => setInput(text)} 
          style={{ fontSize: 15 }} 
          placeholder="Search for Topics" />
        </View>

        <SearchFilter data={DUMMY_TWO_DATA} input={input} setInput={setInput}/>

        {/* <EventList /> */}

        <Image
          style={{width: 120, height: 100, marginTop: 20, marginBottom: 20, marginLeft: 110}}
          source={require('../assets/idea-gif.gif')}            
        />

      </View>
  
      </ScrollView>
      
      <StatusBar style='dark'/>
  
      </SafeAreaView>

  );

}

export default HomeScreen;