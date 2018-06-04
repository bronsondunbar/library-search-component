
# Search Component

Search component for React

Install and save component as a dependency

```
npm install --save library-search-component

```

Import component into your app

```
import ButtonGroup from 'library-search-component'

```

Create an array of objects with the keys being name and id

```

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

```

Create and assign search term state with empty value

```

constructor(props) {
  super(props)

  this.state = {
    searchTerm: ''
  }
}

```

Create the function that will handle the user search

```

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

```

Create the function to clear a user search

```

clearSearch (event) {
  event.preventDefault();

  let searchTerm = '';

  this.setState((state, props) => {
    return { searchTerm, searchTerm }
  })
}

```

Render the component with the functions we created, object array as well as any other props that are needed

```

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


| Prop              | Values               |
| :---------------- | :------------------- |
| searchData        | Object               |
| searchTerm        | String               |
| searchSuggestions | Object               |
| userSearch        | userSearch function  |
| clearSearch       | clearSearch function |
| placeHolder       | String               |