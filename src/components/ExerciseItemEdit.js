import React from 'react';
import styled from 'styled-components/native';
import useMuscleImage from './useMuscleImage';
import {SwipeRow} from 'react-native-swipe-list-view';

const ExerciceItemArea = styled.TouchableHighlight`
    height:50px;
    flex-direction:row;
    background-color:#FFF;
    margin-bottom:10px;
`;
const ExerciceMuscleArea = styled.View`
    height:50px;
    width:50px;
    background-color:#FFCC98;
    border-radius:10px;
    justify-content:center;
    align-items:center;
`;
const ExerciseMuscleImage = styled.Image`
    height:35px;
    width:35px;
`;
const ExerciceInfo = styled.View`
    flex-direction:column;
    justify-content:center;
    margin-left:5px;
`;
const ExerciceName = styled.Text`
    font-size:15px;
    color:#000;
`;
const ExerciseDetails = styled.Text`
    font-size:12px;
    color:#999;
`;
const ExerciceSwipe = styled.TouchableHighlight`
    height:50px;
    background-color:#FF0000;
    justify-content:center;
`;
const ExerciseSwipeIcon = styled.Image`
    width:20px;
    height:20px;
    margin-left:15px;
`;

export default (props) => {
    return (
        <SwipeRow leftOpenValue={50} disableLeftSwipe={true}>
            <ExerciceSwipe onPress={props.delAction} underlayColor="#FF0000">
                <ExerciseSwipeIcon source={require('../assets/trash-white.png')} />
            </ExerciceSwipe>
            <ExerciceItemArea onPress={props.editAction} underlayColor="#FFF">
                <>
                    <ExerciceMuscleArea>
                        <ExerciseMuscleImage source={useMuscleImage(props.data.muscle)} />
                    </ExerciceMuscleArea>
                    <ExerciceInfo>
                        <ExerciceName>{props.data.name}</ExerciceName>
                        <ExerciseDetails>
                            {`${props.data.sets} séries - ${props.data.reps} rep ${props.data.load?`- ${props.data.load} kg`:''}`}
                        </ExerciseDetails>
                    </ExerciceInfo>
                </>
            </ExerciceItemArea>
        </SwipeRow>
    );
}