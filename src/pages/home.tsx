import React, {Fragment, useEffect, useState} from "react";
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform,
    FlatList,
    StatusBar
} from "react-native";

import { Button } from "../components/button";
import { SkillCard } from "../components/skillCard";

interface ISkillData {
  id: string,
  name: string
}

export const Home = () => {

    const [newSkill, setNewSkill] = useState('')
    const [Skills, setSkills] = useState<ISkillData[]>([])

    const handleNewAddSkil = () => {
      const data = {
        id: String(new Date().getTime()),
        name: newSkill
      }

        setSkills((oldState) => [...oldState, data]
        )

    }

    const handleAddRemoveSKill = (id: String) => {
      setSkills(oldState => oldState.filter(skill => {
          return skill.id != id
        })
      )
    }

    const [greetings, setGreetings] = useState('')

    useEffect(() => {
      const currentHour = +new Date().getHours()

      if(currentHour < 12){
        return setGreetings('Good Morning!')
      } else if (currentHour >= 12 && currentHour < 18){ 
        return setGreetings('Good Afternoon!')

      } else {
        return setGreetings('Good Night!')

      }

    }, [])

  return (
    <>
    <View
    style={styles.container}>

      <Text style={styles.PrimaryTitle}>Welcome, Marlon</Text>


    <Text style={styles.greetings}>
      {greetings}
    </Text>

      <TextInput
      style={styles.input}
      placeholder="New Skill"
      placeholderTextColor='#555'
      onChangeText={setNewSkill}/>

      <Button
      onPress={handleNewAddSkil}
      title="Add"
      />

      <Text style={[styles.PrimaryTitle, {
          marginVertical: 50
      }]}>
        My Skills
    </Text>


      <FlatList data={Skills}
      keyExtractor={Item => Item.id}
      renderItem={({ item }) => (
        <SkillCard 
        onPress={() => handleAddRemoveSKill(item.id)}
        key={item.id}
        skill={item.name}></SkillCard>
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
    },
    greetings: {
      color: '#fff'
    }
})