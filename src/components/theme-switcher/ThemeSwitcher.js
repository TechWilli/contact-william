import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import Switch from "react-switch";
import { ReactComponent as Sun } from '../../assets/icons/sun.svg';
import { ReactComponent as Moon } from '../../assets/icons/moon.svg';

const SwitchContainer = styled.div`
    width: 150px;
    position: absolute;
    left: 50%;
    top: 3.5%;
    transform: translate(-50%, 3.5%);
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(255, 255, 255, 0.35);
    border-radius: 5px;
    padding: 5px;
`;

const SunIcon = styled(Sun)`
    width: 30px;
    height: 30px;
`;

const MoonIcon = styled(Moon)`
    width: 25px;
    height: 25px;
`;

const ThemeSwitcher = ({ toggleTheme }) => {

    const theme = useContext(ThemeContext);

    return (
        <SwitchContainer title={'theme'}>
            <SunIcon />
            <Switch
                onChange={toggleTheme}
                checked={theme.title === 'dark'}
                width={40}
                height={15}
                handleDiameter={20}
                checkedIcon={false}
                uncheckedIcon={false}
                offColor={'#294368'}
                onColor={'#0085AE'}
            />
            <MoonIcon />
        </SwitchContainer>
    );
}

export default ThemeSwitcher;