import React from "react";
import {TouchableOpacity, Text, StyleSheet} from 'react-native'

export const SkillCard = ({
    children
}) => {

    return (
        <TouchableOpacity key={children} style={styles.buttonSkill}>
        <Text style={styles.skill}>
            {
                children
            }
        </Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    skill: {
        color: '#fff',
        fontSize: 22,
        fontWeight: "bold",
    },
    buttonSkill: {
        borderRadius: 50,
        backgroundColor: '#1f1e25',
        padding: 15,
        fontWeight: "bold",
        alignItems: "center",
        marginVertical: 10
    }
})