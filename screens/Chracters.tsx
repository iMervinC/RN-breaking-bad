import React from 'react'
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native'
import MyView from '../components/MyView'
import { useGetChars } from '../utils/hooks'

const Characters = () => {
  const { data, error, status } = useGetChars(0)

  status === 'loading' && <Text>Loading...</Text>
  status === 'error' && <Text>Error :(</Text>

  return (
    <MyView>
      <Text style={styles.title}>Characters</Text>

      <ScrollView style={{ display: 'flex' }}>
        {data?.map((char) => (
          <View style={styles.card} key={char.char_id}>
            <Text style={styles.cardTitle}>{char.name}</Text>
            <Image style={styles.cardImg} source={{ uri: char.img }} />
          </View>
        ))}
      </ScrollView>
    </MyView>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  card: {
    width: '50vw',
    height: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00ff2add',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardImg: {
    height: '90%',
    width: '100%',
  },
})

export { Characters }
