
# Search Component

Search component for React

| Prop              | Default   | Values                                    |
| :---------------- |:--------- | :---------------------------------------- |
| searchData        | none      | Data object                               |
| searchTerm        | none      | Text that is being searched               |
| searchSuggestions | none      | Suggestions based on search term          |
| userSearch        | none      | userSearch function to create suggestions |
| clearSearch       | none      | clearSearch function to clear suggestions |
| placeHolder       | Search... | Default search text                       |

```
constructor(props) {
  super(props)

  this.state = {
    searchTerm: ''
  }
}

userSearch (event) {
  const data = [
    {
      name: 'Item one',
      id: 'one'
    },
    {
      name: 'Item two',
      id: 'two'
    },
    {
      name: 'Item three',
      id: 'three'
    }
  ]

  let searchTerm = event.target.value.toLowerCase()

  let searchSuggestions = data.filter((searchData) => {
    let filterComponents = searchData.name.toLowerCase()
    return filterComponents.includes(searchTerm)
  })

  this.setState((state, props) => {
    return { searchSuggestions, searchTerm }
  })
}

clearSearch (event) {
  event.preventDefault();

  let searchTerm = '';

  this.setState((state, props) => {
    return { searchTerm, searchTerm }
  })
}

render () {
  const data = [
    {
      name: 'Item one',
      id: 'one'
    },
    {
      name: 'Item two',
      id: 'two'
    },
    {
      name: 'Item three',
      id: 'three'
    }
  ]

  let searchSuggestions = this.state.searchSuggestions;
  let searchTerm = this.state.searchTerm;

  return (
    <SearchComponent
      searchData={data}
      searchTerm={searchTerm}
      searchSuggestions={searchSuggestions}
      userSearch={this.userSearch.bind(this)}
      clearSearch={this.clearSearch.bind(this)}
      placeHolder="Search..." />
  )
}

```