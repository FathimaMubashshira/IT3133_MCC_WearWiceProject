
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const categories = [
  { id: '1', name: 'Cotton', emoji: '👕', description: 'Soft and breathable fabrics' },
  { id: '2', name: 'Silk', emoji: '👗', description: 'Delicate and smooth fabrics' },
  { id: '3', name: 'Wool', emoji: '🧥', description: 'Warm and cozy fabrics' },
  { id: '4', name: 'Denim', emoji: '👖', description: 'Jeans and denim clothing' },
  { id: '5', name: 'Linen', emoji: '👚', description: 'Lightweight natural fabrics' },
  { id: '6', name: 'Polyester', emoji: '🩳', description: 'Durable synthetic fabrics' },
];

function CategoriesScreen({ onBack, onSelectCategory }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBack}>
        <Text style={styles.backButton}>← Back to Home</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Clothing Categories</Text>

      <Text style={styles.subtitle}>
        Choose a clothing type to explore its care instructions.
      </Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {categories.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.categoryCard}
            onPress={() => onSelectCategory(item)}
          >
            <Text style={styles.emoji}>{item.emoji}</Text>

            <View style={styles.categoryInfo}>
              <Text style={styles.categoryName}>{item.name}</Text>
              <Text style={styles.description}>
                {item.description}
              </Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F5EF',
    padding: 20,
    paddingTop: 50,
  },
  backButton: {
    color: '#52796F',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#354F52',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    color: '#666666',
    marginBottom: 25,
    lineHeight: 22,
  },
  categoryCard: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    marginBottom: 15,
    borderRadius: 15,
    elevation: 2,
  },
  emoji: {
    fontSize: 35,
    marginRight: 15,
  },
  categoryInfo: {
    flex: 1,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#354F52',
  },
  description: {
    fontSize: 13,
    color: '#777777',
    marginTop: 5,
  },
  arrow: {
    fontSize: 27,
    color: '#52796F',
  },
});

export default CategoriesScreen;
