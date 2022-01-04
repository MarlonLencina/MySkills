import React, {Fragment, useState} from "react";
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform,
    TouchableOpacity,
    FlatList,
    ScrollView,
} from "react-native";

import { Button } from "../components/button";
import { SkillCard } from "../components/skillCard";

export const Home = () => {

    const [newSkill, setNewSkill] = useState('')
    const [Skills, setSkills] = useState([])

    const handleNewAddSkil = () => {
        setSkills((oldState) => [...oldState, newSkill]
        )
    }

  return (
    <>
    <View
    style={styles.container}>
      <Text style={styles.PrimaryTitle}>Welcome, Marlon</Text>

      <TextInput
      style={styles.input}
      placeholder="New Skill"
      placeholderTextColor='#555'
      onChangeText={setNewSkill}/>

      <Button
      onPress={handleNewAddSkil}
      />

      <Text style={[styles.PrimaryTitle, {
          marginVertical: 50
      }]}>
        My Skills
    </Text>

      <FlatList data={Skills}
      keyExtractor={Item => Item}
      renderItem={({ item }) => (
        <SkillCard key={item}>{item}</SkillCard>
      )}/>

    </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121015',
      paddingHorizontal: 30,
      paddingVertical: 70
    },
    PrimaryTitle: {
        color: 'white',
        fontSize: 24,
        fontWeight: "bold"
  },
    input: {
        backgroundColor: '#1f1e25',
        color: 'white',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 20,
        borderRadius: 7
    }
})