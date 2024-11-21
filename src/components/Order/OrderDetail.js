import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const OrderDetail = () => {
  const { id } = useParams(); // Extract orderId from URL
  const [order, setOrder] = useState(null); // To store the entire order data
  const [orderDetail, setOrderDetail] = useState([]); // To store the entire order detail
  const [loading, setLoading] = useState(true); // To handle loading state
  const [foods, setFoods] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await axios.get(
          `https://t2305mpk320241031161932.azurewebsites.net/api/CustOrder/${id}`
        );
        setOrder(response.data); // Set the fetched order data
        console.log('Order:', response.data);

        const responseDetail = await axios.get(
          `https://t2305mpk320241031161932.azurewebsites.net/api/CustOrderDetail/by-order/${id}`
        );
        setOrderDetail(responseDetail.data);
        console.log('Order Detail:', responseDetail.data);

        setLoading(false); // Set loading to false after fetching
      } catch (error) {
        console.error('Error fetching order data:', error);
        setLoading(false);
      }
    };

    const fetchFoods = async () => {
      try {
        const response = await axios.get(
          'https://t2305mpk320241031161932.azurewebsites.net/api/ItemVariants'
        );
        setFoods(response.data);
      } catch (error) {
        console.error('Error fetching foods:', error);
      }
    };

    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(
          'https://t2305mpk320241031161932.azurewebsites.net/api/Restaurant'
        );
        setRestaurants(response.data);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      }
    };

    fetchOrderData();
    fetchFoods();
    fetchRestaurants();
  }, [id]);

  const getFoodName = (variantId) => {
    const food = foods.find((food) => food.variantId === variantId);
    return food ? food.menuItemName : 'Unknown';
  };

  const getRestaurantName = (restaurantId) => {
    const restaurant = restaurants.find((restaurant) => restaurant.restaurantId === restaurantId);
    return restaurant ? restaurant.restaurantName : 'Unknown';
  };

  const groupItemsByCategory = (items) => {
    return items.reduce((acc, item) => {
      const category = acc[item.categoryId] || [];
      return { ...acc, [item.categoryId]: [...category, item] };
    }, {});
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!order) {
    return <div>Order not found</div>;
  }

  const groupedItems = groupItemsByCategory(orderDetail);

  const categoryNames = {
    1: 'STARTERS',
    2: 'MAIN DISHES',
    3: 'DESERTS',
    4: 'DRINKS',
    5: 'Event Decorations',
    6: 'Event Services',
  };
 
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`; 
  };

  
  const formatTime = (timeString) => {
    const time = new Date(timeString);
    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`; 
  };


  return (
    <div
      style={{
        padding: '40px',
        margin: '0 auto',
        maxWidth: '1200px',
        textAlign: 'center',
        color: '#686868',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '20px',
        }}
      >
        
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '20px' }}>Menu Details</h2>
          <div style={{ textAlign: 'left', fontSize: '16px' }}>
            {Object.keys(groupedItems).map((categoryId) => (
              <div key={categoryId} style={{ marginBottom: '20px' }}>
                <h3>{categoryNames[categoryId]}</h3>
                {groupedItems[categoryId].map((item) => (
                  <div
                    key={item.orderDetailId}
                    style={{
                      display: 'flex',         // Flex container
                      justifyContent: 'space-between', // Space between content
                      paddingLeft: '20px',     // Indent
                      alignItems: 'center',    // Align items vertically
                    }}
                  >
                    <div>
                      <strong>{getFoodName(item.variantId)}</strong> x {order.noOfTable}
                    </div>
                    <div style={{ fontWeight: 'bold' }}>${item.price.toFixed(2)}</div>
                  </div>
                ))}

              </div>
            ))}
          </div>
          <hr style={{ margin: '20px 0' }} />
          <div style={{ fontWeight: 'bold', fontSize: '18px', textAlign: 'right' }}>
            Total Cost: ${order.totalCost.toFixed(2)}
          </div>
          <div style={{ fontWeight: 'bold', fontSize: '18px', textAlign: 'right', color: 'red' }}>
            Deposit Total (30% of Total Cost): $ {order.depositCost.toFixed(2)}
          </div>
        </div>

        
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '20px' }}>Booking Details</h2>
          <div style={{ marginTop: '20px', textAlign: 'left', fontSize: '16px' }}>
            <p><strong>Name:</strong> {order.name || 'Name'}</p>
            <p><strong>Phone:</strong> {order.phone || '123-456-7890'}</p>
            <p><strong>Email:</strong> {order.email || 'example@example.com'}</p>
            <p><strong>Location:</strong> {getRestaurantName(order.restaurant_id) || 'Loading...'}</p>
            <p><strong>Number of people:</strong> {order.noOfPeople}</p>
            <p>
              <strong>Number People Per Table:</strong> {Math.ceil(order.noOfPeople / order.noOfTable)}
            </p>

            <p><strong>Number of tables:</strong> {order.noOfTable}</p>
            <p>
              <strong>Booking time:</strong> {formatDate(order.deliveryDate)} at {formatTime(order.eventTime)}

            </p>
            <p><strong>Note:</strong> {order.orderNote || ''}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
