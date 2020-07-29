import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import {connect} from 'react-redux';
import DefaultButton from '../components/DefaultButton';

const Container = styled.SafeAreaView`
    flex:1;
    align-items:center;
    background-color:#FFF;
    margin-left:3px;
    margin-right:3px;
`;
const HeaderText = styled.Text`
    font-size:15px;
    color:#333;
    text-align:center;
    margin-bottom:15px;
    margin-top:15px;
`;
const NextButton = styled.Button``;
const BoldText = styled.Text`
    font-weight:bold;
`;
const LevelArea = styled.View`
    width:100%;
`;

const Page = (props) => {

    let funnyPhrase = '';
    switch(props.workoutDays.length){
        case 1:
            funnyPhrase = 'Treinar apenas um dia não vai resolver muito, sei que você é capaz! Mas...';
            break;
        case 2:
            funnyPhrase = 'Dois dias? Tudo bem quem sou eu para te julgar!';
            break;
        case 3:
            funnyPhrase = 'Hmm... interessante 3 dias para treinar na semana, ate que da para o gasto!';
            break;
        case 4:
            funnyPhrase = 'Estou gostando de ver sua disposição, 4 dias vai ser muito bom!';
            break;
        case 5:
            funnyPhrase = 'É isso aí, 5 dias é o minimo! Vamos treinar, lets GO!';
            break;
        case 6:
            funnyPhrase = 'Eitaaa, 6 dias não é para todo mundo!';
            break;
        case 7:
            funnyPhrase = 'Wooooow! Todos os dias?! WTF! Você não descansa não?!';
            break;
    }

    const setMyLevel = (l) => {
        props.setLevel(l);
        props.navigation.setParams({level:l});
    }

    return(
        <Container>
            <HeaderText>{funnyPhrase}</HeaderText>
            <HeaderText><BoldText>Qual o seu nível de treino hoje?</BoldText></HeaderText>

            <LevelArea>
                <DefaultButton bgcolor={props.level=='beginner'?'#A5E8BC':false} onPress={()=>setMyLevel('beginner')} style={{marginBottom:20}} underlayColor="#CCC">
                    <Text>Iniciante</Text>
                </DefaultButton>
                <DefaultButton bgcolor={props.level=='intermediate'?'#A5E8BC':false} onPress={()=>setMyLevel('intermediate')} style={{marginBottom:20}} underlayColor="#CCC">
                    <Text>Intermediario</Text>
                </DefaultButton>
                <DefaultButton  bgcolor={props.level=='advanced'?'#A5E8BC':false} onPress={()=>setMyLevel('advanced')} style={{marginBottom:20}} underlayColor="#CCC">
                    <Text>Avançado</Text>
                </DefaultButton>
            </LevelArea>
            
        </Container>
    );
}

Page.navigationOptions = ({navigation}) => {   
    
    const nextAction = () => {
        if(!navigation.state.params || !navigation.state.params.level){
            alert("Você precisa selecionar uma opção!");
            return
        }
        navigation.navigate('StarterRecommendations');
    }
    return{
        title:'',
        headerRight:()=> <NextButton title="Próximo" onPress={nextAction}/>,
        headerRightContainerStyle:{
            marginRight:10
        }
    }
}

const mapStateToProps = (state) => {
    return {
        level:state.userReducer.level,
        workoutDays:state.userReducer.workoutDays
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLevel:(level)=>dispatch({type:'SET_LEVEL', payload:{level}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);