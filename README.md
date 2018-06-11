
# Search Component

Search component for React

Install and save component as a dependency

```

npm install --save library-search-component

```

Import component into your app

```

import Search from 'library-search-component'

```

Create an array of objects with the keys being name and id

```

const searchData = [
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
  const searchData = [
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

  let searchSuggestions = searchData.filter((data) => {
    let filterComponents = data.name.toLowerCase()
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

render() {
  const searchData = [
    {
      name: "Item one",
      id: "one"
    },
    {
      name: "Item two",
      id: "two"
    },
    {
      name: "Item three",
      id: "three"
    }
  ];

  let searchSuggestions = this.state.searchSuggestions;
  let searchTerm = this.state.searchTerm;

  return (
    <div className="btn-group search">
      <Search
        searchData={searchData}
        searchTerm={searchTerm}
        searchSuggestions={searchSuggestions}
        userSearch={this.userSearch.bind(this)}
        clearSearch={this.clearSearch.bind(this)}
        placeHolder="Search..."
      />

      {searchTerm !== "" ? (
        <div className="dropdown-menu">
          {searchSuggestions.length > 0 ? (
            searchSuggestions.map((searchSuggestions, index) => {
              return (
                <a href="/" className="dropdown-item" onClick="/" key={index}>
                  {searchSuggestions.name}
                </a>
              );
            })
          ) : (
            <div className="dropdown-item">No result(s)</div>
          )}
        </div>
      ) : null}
    </div>
  );
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