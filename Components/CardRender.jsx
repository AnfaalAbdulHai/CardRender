import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Animated } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

const StoreCards = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const animations = products.map(() => new Animated.Value(0)); // Create an array of animated values

  useEffect(() => {
    // Fetch data from the Fake Store API using fetch
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  const animateCard = (index) => {
    Animated.timing(animations[index], {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const renderItem = ({ item, index }) => {
    const scale = animations[index].interpolate({
      inputRange: [0, 1],
      outputRange: [0.85, 1],
    });

    return (
      <Animated.View
        style={[styles.card, { transform: [{ scale }], opacity: animations[index] }]}
        onLayout={() => animateCard(index)}
      >
        <Card key={item.id}>
          <Card.Cover style={{ width: '100%', height: 100 }} source={{ uri: item.image }} />
          <Card.Content>
            <Title style={{ fontSize: 15 }} numberOfLines={1}>
              {item.title}
            </Title>
            <Paragraph style={{ fontSize: 12 }} numberOfLines={2}>
              {item.description}
            </Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button>Price: ${item.price}</Button>
          </Card.Actions>
        </Card>
      </Animated.View>
    );
  };

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  card: {
    flex: 1,
    margin: 10,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StoreCards;
