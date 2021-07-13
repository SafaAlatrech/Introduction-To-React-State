import React, {Component} from 'react'

class List extends Component {
    state = {
      isVisible : false
   }

 todos = [
       'Introduction to react state',
       'Class Based Component',
       'Functional Based Component'
 ]

  toggleVisibilty = () => { 
     this.setState ( {
      isVisible : !this.state.isVisible
     })
  }

   render () { 
    return (
     <div>
         <button className="Visibility-btn" onClick={this.toggleVisibilty}>{this.state.isVisible ? 'hide list' : 'Show List'}</button>
         {this.state.isVisible ?
            <ul className="list">
            {this.todos.map((todo,i) => (
                <li key={i}>{todo}</li>
            ))}
        </ul> : (<h4>On click in button for show List</h4>)
          }
     </div>
    )

   }
}
export default List 