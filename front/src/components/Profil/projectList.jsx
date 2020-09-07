import React from 'react';
import styled from "styled-components";


const ProjectContainer = styled.div`
    display: flex;
    margin-top: 10px;
    flex-direction: column;
    height: 100vh;
`;

const AirtableContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 175px;
    margin-left: 3px;
`;

const Title = styled.div`
    display: flex;
    font-size: 25px;
    font-family: "Gill Sans Extrabold", sans-serif;
`;

const AdvancedBar = styled.div`
    display: flex;
    width : 90%;
    height: 15px;
    margin-top: 10px;
    border-radius: 15px;
    background-color: #E8E8E6;
`;

const Advance = styled.div`
    display: flex;
    background-color: #83F706;
    border-radius: 15px;
    width: 25%;
`;

const TaskContainer = styled.div`
    display: flex;
    margin-top: 10px;
    width: 200%;
    height: 75px;
`;

const Task = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column; 
    justify-content: space-between;
    margin-top: 10px;
    margin-right: 20px;
    width: 250px;
    border-radius: 15px;
    border: 1px solid #E6E7E5;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
`;

const TaskName = styled.div`
    font-size: 15px;
    margin-top: 6px;
    margin-left: 10px;
`;

const StatusContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const Status = styled.div`
    display: flex;
    font-size: 10px;
    width: 70px;
    margin-right: 10px;
    background-color: #E8E8E6;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
`;

const StarsContainer = styled.div`
    display: flex;
    margin-left: 10px;
    color: #F9DF4D;
`;

function ProjectList() {
    return (
        <ProjectContainer>
            <AirtableContainer>
                <Title>
                    Intra-Poc
                </Title>
                <AdvancedBar>
                    <Advance />
                </AdvancedBar>
                <TaskContainer>
                    <Task>
                        <TaskName>
                            Intregration office
                        </TaskName>
                        <StatusContainer>
                            <StarsContainer>
                            &#x2605;&#x2605;
                            </StarsContainer>
                            <Status>
                                TODO
                            </Status>
                        </StatusContainer>
                    </Task>
                </TaskContainer>
            </AirtableContainer>
        </ProjectContainer>
    );
}

export default ProjectList;