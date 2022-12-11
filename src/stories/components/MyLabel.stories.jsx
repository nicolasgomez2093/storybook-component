import MyLabel from "../../components/MyLabel";


export default {
    title: 'UI/myLabel',
    component: MyLabel,
    argTypes: {
        color: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
        fontColor: { control: 'color' },
      },
}

const Template = (args) => <MyLabel {...args} />


export const Basic = Template.bind({})    //Crea una copia del template para estos estilos
Basic.args = {
    label: 'Desde primary',
    size: 'h1',
    allCaps: false
  };

  export const AllCaps = Template.bind({})
  AllCaps.args = {
      size: 'normal',
      allCaps: true
    };

export const Secondary = Template.bind({})
Secondary.args = {
    label: 'Desde Secondary',
    size: 'h2',
    color: 'secondary',
    allCaps: false
  };

  export const Tertiary = Template.bind({})
Tertiary.args = {
    label: 'Desde Tertiary',
    size: 'h2',
    color: 'tertiary',
    allCaps: false
  };

  export const CustomFontColor = Template.bind({})
  CustomFontColor.args = {
      size: 'h1',
      allCaps: true,
    };