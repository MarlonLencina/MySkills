import React from "react";
import {TouchableOpacity, Text, StyleSheet, TouchableOpacityProps} from 'react-native'


interface SkillCardProps extends TouchableOpacityProps {
    skill: string
}

export const SkillCard = ({
    skill, ...rest
}: SkillCardProps) => {

    return (
        <TouchableOpacity {...rest} key={skill} style={styles.buttonSkill}>
        <Text style={styles.skill}>
            {
                skill
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