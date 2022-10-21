import React from "react";
import {Meta ,Story} from "@storybook/react";
import {Button, ButtonType} from "../src/Button";

const meta: Meta={
    title:'Button',
    component:Button,
    argTypes:{
        children:{
            defaultValue:"Default Text"
        }
    }
}
export default meta;

// button의 기본 template을 생성.
const Template: Story<ButtonType> = (args) => <Button {...args}/>

// 필요한 state의 template를 함수로 만든 후 args에 props를 추가하는 방식으로 상태값을 변경한다.
export const Default = Template.bind({});


export const Secondary = Template.bind({});
Secondary.args = {
    variant:'secondary',
    children:'I am secondary'
}

// export const Default = () => <Button variant="primary">Click Me</Button>
// export const Secondary = () => <Button variant="secondary">I am button</Button>