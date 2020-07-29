import React, {useState} from 'react';
import styled from 'styled-components/native';
import useMuscleImage from '../components/useMuscleImage';

const Workout = styled.View`
    background-color:#F1F1F1;
    flex-direction:row;
    border-radius:10px;
    margin-bottom:20px;
    border:2px solid #DDD;
`;
const WorkoutInfo = styled.View`
    flex:1;
`;
const WorkoutTitle = styled.Text`
    font-size:17px;
    margin:10px;
`;
const MuscleScroll = styled.ScrollView`
    margin:15px;
`;
const WorkoutActions = styled.View`
    justify-content:center;
`;
const WorkoutButton = styled.TouchableHighlight`
    margin-bottom:20px;
    margin-top:10px;
    width:25px;
    height:25px;
    margin20px;
    justify-content:center;
    align-items:center;
`;
const WorkoutButtonImage = styled.Image`
    width:25px;
    height:25px;
    margin-right:15px;
`;
const MuscleGroups = styled.View`
    width:40px;
    height:40px;
    background-color:#FFCC98;
    border-radius:5px;
    margin-right:5px;
    justify-content:center;
    align-items:center;
`;
const MuscleImage = styled.Image`
    width:30px;
    height:30px;
`;


export default (props) => {

    const [included, setIncluded] = useState(false);

    let muscleGroups = [];
    for(let i in props.data.exercises){
        if(!muscleGroups.includes(props.data.exercises[i].muscle)){
            muscleGroups.push(props.data.exercises[i].muscle);
        }
    }

    const addWorkout = () => {
        setIncluded(!included);
        props.addAction();
    }

    const editWorkout = () => {
        props.editAction();
    }

    const delWorkout = () => {
        props.delAction();
    }

    return(
        <Workout>
            <WorkoutInfo>
                <WorkoutTitle>{props.data.name}</WorkoutTitle>
                <MuscleScroll horizontal={true}>
                    {muscleGroups.map((m, index)=>(
                        <MuscleGroups key={index}>
                            <MuscleImage source={useMuscleImage(m)} />
                        </MuscleGroups>
                    ))}
                </MuscleScroll>
            </WorkoutInfo>
            <WorkoutActions>
                {props.addAction &&
                    <WorkoutButton onPress={()=>addWorkout()} underlayColor="transparent">
                        <WorkoutButtonImage source={included?require('../assets/check-black.png'):require('../assets/add.png')}/>
                    </WorkoutButton>
                }
                {props.editAction &&
                    <WorkoutButton onPress={()=>editWorkout()} underlayColor="transparent">
                         <WorkoutButtonImage source={require('../assets/edit-black.png')}/>
                    </WorkoutButton>
                }
                {props.delAction &&
                    <WorkoutButton onPress={()=>delWorkout()} underlayColor="transparent">
                         <WorkoutButtonImage source={require('../assets/trash-black.png')}/>
                    </WorkoutButton>
                }
            </WorkoutActions>
        </Workout>
    );
}