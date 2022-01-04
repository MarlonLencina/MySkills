import React from "react"
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native'

export const Button = ({
    onPress
}) => {

    return (
        <TouchableOpacity style={
            styles.button
        }
        onPress={onPress}
        activeOpacity={0.8}>
            <Text style={
                styles.buttonText
            }>Add</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#a370f7',
        padding: 15,
        borderRadius: 7,
        alignItems: "center",
        marginTop: 20
    },
    buttonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: "bold"
    },
})