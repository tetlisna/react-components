import React from 'react';
import './App.css';
import './interface/ItemInterface';
import { ItemIterface } from './interface/ItemInterface';

type Props = {
  name: string;
};

type State = {
  data: ItemIterface[];
  hasError: boolean;
};

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      data: [],
      hasError: false,
    };
  }
  componentDidMount(): void {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await fetch('https://swapi.dev/api/people/');
      const dataJson = await response.json();
      this.setState({ data: dataJson.results });
    } catch (error) {
      this.setState({ hasError: true });
    }
  };
  render() {
    const { data, hasError } = this.state;
    console.log(this.state, 'state');

    return (
      <div className="items-container">
        <ul>
          {!hasError && data ? (
            data.map((e) => {
              return (
                <li key={e.url}>
                  {e.name}
                  <img
                    // src={e.url}
                    alt={'Photo of ' + e.name}
                  />
                </li>
              );
            })
          ) : (
            <div>error fetching</div>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
