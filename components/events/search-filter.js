import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
// import { DUMMY_TWO_DATA } from '../data/dummy-two'
 
const SearchFilter = ({data, input, setInput}) => {
  return (
    <View style={{marginTop: 10}}>
      <FlatList
        data={data}
        renderItem={({item}) => {
          if(input === "") {
            return(
              <View style={{marginVertical: 10}}>
                <Text style={{fontSize: 14, fontWeight: "bold"}}>{item.name}</Text>
                <Text style={{borderColor: 'grey', borderBottomWidth: 0.5, height: 1, marginTop: 5, marginLeft: 10}}/>
              </View>
            )
          }

          if(item.name.toLowerCase().includes(input.toLowerCase())) {
            return(
              <View style={{marginVertical: 10}}>
                <Text style={{fontSize: 14, fontWeight: "bold"}}>{item.name}</Text>
                <Text style={{borderColor: 'grey', borderBottomWidth: 0.5, height: 1, marginTop: 5, marginLeft: 10}}/>
              </View>
            )
          }

        }}/>        
    </View>
  )
}

export default SearchFilter

const styles = StyleSheet.create({})