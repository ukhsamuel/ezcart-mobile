import { View, Text } from 'react-native'
import React from 'react'

const SurveyQuestion = ({question, total, currentQuestionIndex}) => {
    console.log('question>', question)
  return (
    <View
      style={{
        marginVertical: 40,
      }}
    >
      {/* Question Counter */}
      <View className="flex-row items-end">
        <Text className="mr-1 text-xl text-primary">
          {currentQuestionIndex}
        </Text>
        <Text className="mr-1 text-xl text-primary">
          / 
           {total}
        </Text>
      </View>

      {/* Question */}
      <Text className="mr-1 text-3xl text-primary">
        {question}
      </Text>
    </View>
  )
}

export default SurveyQuestion