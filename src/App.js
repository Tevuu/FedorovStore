import React from "react";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "HVRD T-SH1RT",
          img: "2.jpg",
          desc: "I was born to work?",
          category: "TShirt",
          price: "24.99",
        },
        {
          id: 2,
          title: "L3DG3NT T-SH1RT",
          img: "3.jpg",
          desc: "Our dreams and our memories",
          category: "TShirt",
          price: "24.99",
        },
        {
          id: 3,
          title: "H3LLH0UND T-SH1RT",
          img: "4.jpg",
          desc: "My dogs are Tatars, and who are yours?",
          category: "TShirt",
          price: "24.99",
        },
        {
          id: 4,
          title: "WH3R3 MMR? T-SH1RT",
          img: "5.jpg",
          desc: "So where my mmr?",
          category: "TShirt",
          price: "24.99",
        },
        {
          id: 5,
          title: "R0ST1K T-SH1RT",
          img: "6.jpg",
          desc: "The most beautiful",
          category: "TShirt",
          price: "24.99",
        },
        {
          id: 6,
          title: "D0R1M3 T-SH1RT",
          img: "7.jpg",
          desc: "Dorime?",
          category: "TShirt",
          price: "24.99",
        },
        {
          id: 7,
          title: "Ростик думает где худи",
          img: "8.jpg",
          desc: "А где худи то?",
          category: "hood",
          price: "34.99",
        },
        {
          id: 8,
          title: "P1NK H00D",
          img: "8.jpg",
          desc: "sold out.",
          category: "hood",
          price: "34.99",
        },
        {
          id: 9,
          title: "Свитеров нет",
          img: "8.jpg",
          desc: "sold out!",
          category: "Sveter",
          price: "29.99",
        },
      ],
      showFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header
          orders={this.state.orders}
          onDelete={this.deleteOrder}
          onShowItem={this.onShowItem}
        />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />

        {this.state.showFullItem && (
          <ShowFullItem
            onShowItem={this.onShowItem}
            onAdd={this.addToOrder}
            item={this.state.fullItem}
          />
        )}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
