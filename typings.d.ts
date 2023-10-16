type Customer = {
    email: string;
    name: string;
}

type CustomerList = {
    name: ID;
    value: Customer;
}

type TrackingItems ={
    customer_id: ID;
    customer: Customer;
    items: item[];
}

type Item ={
    item_id:ID;
    name: string;
    price: number;
    quality: number;
}

type OrderResponse ={
    value:Order; 
}

type customerResponse ={
    name: ID;
    value :Customer;
}

type Order ={
    carrier: string;
    createdAt: string;
    shippingCost: number;
    trackingId: string;
    trackingItems: TrackingItems; 
    Lat: number;
    Lng: number;
    Address: string;
    City: String;
}