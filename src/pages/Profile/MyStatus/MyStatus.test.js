import React from "react"
import { create } from "react-test-renderer"
import MyStatus from './MyStatus'

describe('MyStatus component', () => {
	test('Проверка state.editMode компоненты', () => { 
		const component = create(<MyStatus />)
		const instance = component.getInstance()
		expect(instance.state.editMode).toBe(false)
	})

	test('Проверка state.editMode компоненты после клика', () => { 
		const component = create(<MyStatus />)
		const instance = component.getInstance()
		instance.activateEditMode() //меняет editMode на true
		expect(instance.state.editMode).toBe(true)
	})

	test('Проверка state.editMode компоненты после клика', () => { 
		const component = create(<MyStatus />)
		const instance = component.getInstance()
		instance.activateEditMode() //меняет editMode на true
		expect(instance.state.editMode).toBe(true)
	})

	test('span отрисован?', () => { 
		const component = create(<MyStatus />)
		const instance = component.root
		const span = instance.findByType('span')
		expect(span.props.children).toBe('-----')
	})

	test('input отрисован?', () => { 
		const component = create(<MyStatus />)
		const instance = component.root		
		expect(() => {
			const input = instance.findByType('input')
		}).toThrow()
	})

})

// class Button extends React.Component {
// 	constructor(props) {
// 	  super(props);
// 	  this.state = { text: "" };
// 	  this.handleClick = this.handleClick.bind(this);
// 	}
  
// 	handleClick() {
// 	  this.setState(() => {
// 		return { text: "Кнопку нажали" };
// 	  });
// 	}
  
// 	render() {
// 	  return (
// 		<button onClick={this.handleClick}>
// 		  { this.state.text || this.props.text }
// 		</button>
// 	  );
// 	}
// }

// describe("Button component", () => {

//   test("Проверка значения this.state.text ", () => {
// 	const component = create(<Button text='SUBSCRIBE TO BASIC' />)
// 	const instance = component.getInstance()
// 	expect(instance.state.text).toBe('')
//   })

//   test("Проверка значения this.state.text после срабатывания метода handleClick", () => {
// 	const component = create(<Button text='SUBSCRIBE TO BASIC' />)
// 	const instance = component.getInstance()
// 	instance.handleClick()
// 	expect(instance.state.text).toBe("Кнопку нажали")
//   })

//   test("Value кнопки по клику", () => {
// 	const component = create(<Button text="SUBSCRIBE TO BASIC" />)
//     const instance = component.root
//     const button = instance.findByType("button")
//     button.props.onClick()
//     expect(button.props.children).toBe("Кнопку нажали")
//   })

//   test("Value кнопки при инициализации", () => {
// 	const component = create(<Button text="Я только что добавилась!" />)
//     const instance = component.root
//     const button = instance.findByType("button")
//     expect(button.props.children).toBe("Я только что добавилась!")
//   })
// })



