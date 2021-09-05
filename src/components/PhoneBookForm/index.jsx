export { default } from "./PhoneBook";

// import { Component } from "react";
// import PhoneBooksForm from "./PhoneBooksForm";

// const INITIAL_STATE = {
//   name: "",
//   number: "",
// };

// export default class Phonebook extends Component {
//   state = {
//     ...INITIAL_STATE,
//   };

//   handleChange = ({ target }) => {
//     const { name, value } = target;

//     this.setState({ [name]: value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();

//     this.props.onSubmit({ ...this.state });
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ ...INITIAL_STATE });
//   };

//   render() {
//     return (
//       <PhoneBooksForm
//         handleChange={this.handleChange}
//         handleSubmit={this.handleSubmit}
//         state={this.state}
//       />
//     );
//   }
// }
