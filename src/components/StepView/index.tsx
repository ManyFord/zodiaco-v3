import React, { useState } from 'react'
import { View } from 'react-native';
import styles from './styles';

interface Step {
    steps: number,
    stepNumber: number,
    activeColor: string,
    inactiveColor: string
}




const StepView: React.FC<Step> = ({ stepNumber, steps, activeColor, inactiveColor }) => {

    const stepsArray = new Array(steps)
    stepsArray.fill(0)

    return (
        <View style={styles.root}>
            {
                stepsArray.map((step, index) => (
                    <View key={index} style={[styles.step, { backgroundColor: stepNumber === index + 1 ? activeColor : inactiveColor }]} />
                ))
            }
        </View>
    )
}

export default StepView