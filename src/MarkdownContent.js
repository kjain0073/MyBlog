import React from 'react';
import ReactMarkdown from 'react-markdown';
import post1 from './blog-post.1.md';

class MarkdownContent extends React.Component {
  constructor(props) {
    super(props)

    this.state = { terms: null }
  }

  componentWillMount() {
    fetch(post1).then((response) => response.text()).then((text) => {
      this.setState({ terms: text })
    })
  }

  render() {
    return (
      <div className="content">
        <ReactMarkdown source={this.state.terms} />
      </div>
    )
  }
}

export default MarkdownContent;