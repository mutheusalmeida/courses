import React, { Component } from 'react';

class NewCourseForm extends Component {
  static defaultProps = {
    categories: [],
    onSubmit: () => {}
  }
  
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      category: '',
      image: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const newCourse = this.state;
    
    if (newCourse.name && newCourse.image && newCourse.category) {
      this.props.onSubmit(newCourse);
      
      this.setState({
        name: '',
        image: ''
      })
    }
  }
  
  handleChange(e) {
    const { target } = e,
      { name, value } = target;
      
    this.setState({
      [name]: value
    })
  }
  
  render() {
    const { props, state } = this;
    
    return(
      <form className="course-form" onSubmit={this.handleSubmit}>
        <label>
          <span>Name:</span>
          <input name="name" onChange={this.handleChange} value={state.name} />
        </label>
        <label>
          <span>Image:</span>
          <input name="image" onChange={this.handleChange} value={state.image} />
        </label>
        <label>
          <span>Category:</span>
          <select name="category" onChange={this.handleChange} value={state.category}>
            <option value="">Select</option>
            {
              props.categories.map(category => <option value={category.name}>{category.name}</option>)
            }
          </select>
        </label>
        
        <button type="submit">Add course</button>
      </form>
    );
  }
}

export default NewCourseForm;