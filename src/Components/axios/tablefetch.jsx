import { Component } from "react";
import { SquareLoader } from "../loaders/loader";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import { CustomImage } from "../image/image";

export class CustomTableFetch extends Component {
    state = {
        items: [],
        loader: true,
        count:0
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        let { data, status } = await axios.get("https://fakestoreapi.com/products");

        if (status === 200) {
            // Add image and change properties to each item
            const updatedData = data.map(item => ({
                ...item,
                image: "https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg", // Default OFF image
                productImage: item.image // Store the original product image separately
            }));
            
            this.setState({
                items: updatedData,
                loader: false
            });
        }
    }

    bulbSwitcher = (id) => {
        this.setState(prevState => {
            const updatedItems = prevState.items.map(item =>
                item.id === id
                    ? {
                        ...item,
                        image: item.image === "https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg"
                            ? "https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg"
                            : "https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg"
                    }
                    : item
            );

            return {
                items: updatedItems,
                count: updatedItems.filter(item => item.image === "https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg").length
            };
        });
    }

    // bulbOnCount =()=>{
    //     this.state.items.map(eachItem=>{
    //         if(this.state.image=="https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg")
    //             this.setState({
    //             count:this.state.count+1})
    //     })
    // }

    render() {
        return (
            <>
                {this.state.loader ? <SquareLoader /> : (
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Product Image</th>
                                <th>{`Toggle Bulb ${this.state.count}`}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.items.map(eachItem => (
                                <tr key={eachItem.id}>
                                    <td>{eachItem.id}</td>
                                    <td>{eachItem.title}</td>
                                    <td>{eachItem.description}</td>
                                    <td>{`$ ${eachItem.price}`}</td>
                                    <td><CustomImage source={eachItem.productImage} /></td>
                                    <td>
                                        <button onClick={() => this.bulbSwitcher(eachItem.id)}>
                                            <CustomImage source={eachItem.image} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                )}
            </>
        );
    }
}
