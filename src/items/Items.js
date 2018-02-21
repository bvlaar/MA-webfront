// @flow
import React, { Component } from 'react';
import { Container, List, Radio, Segment } from 'semantic-ui-react';
import '../styles/items.css';

type Props = {
  items: Object,
}

class Items extends Component<Props> {
  props: Props

  render() {
    const itemsComponents = this.props.items.map(item =>
      (
        <List.Item key={item.id}>
          <List.Icon verticalAlign="middle">
            <Radio toggle />
          </List.Icon>
          <List.Content className="full-width">
            <List.Header>
              <div>{item.name}</div>
            </List.Header>
            <List.Description className="flexed">
              <div>{item.quantity && `Quantity: ${item.quantity} ${item.unit}`}</div>
              <div>{item.price && `${item.price}$`}</div>
            </List.Description>
          </List.Content>
        </List.Item>
      )
    );

    return (
      <Container>
        <Segment color="blue">
          <List divided relaxed>
            {itemsComponents}
          </List>
        </Segment>
      </Container>
    );
  }
}
export default Items;