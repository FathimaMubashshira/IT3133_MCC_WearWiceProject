
import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { clothingItems } from '../data/clothingData';

const categories = [
  'All',
  'Cotton',
  'Silk',
  'Wool',
  'Denim',
  'Linen',
  'Polyester',
];

export default function SearchScreen({ onBack, onSelectCategory }) {
  const [searchText, setSearchText] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredItems = clothingItems.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.fabric.toLowerCase().includes(searchText.toLowerCase()) ||
      item.description.toLowerCase().includes(searchText.toLowerCase());

    const matchesCategory =
      selectedFilter === 'All' || item.fabric === selectedFilter;

    return matchesSearch && matchesCategory;
  });

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.header}>
          <TouchableOpacity onPress={onBack}>
            <Text style={styles.backButton}>← Back to Home</Text>
          </TouchableOpacity>

          <Text style={styles.title}>Search & Browse</Text>

          <Text style={styles.subtitle}>
            Find clothing items and discover how to care for them.
          </Text>
        </View>

        <View style={styles.searchSection}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search clothing..."
            placeholderTextColor="#777777"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        <View style={styles.filterSection}>
          <Text style={styles.sectionTitle}>Filter by Fabric</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category}
                style={[
                  styles.filterButton,
                  selectedFilter === category && styles.activeFilter,
                ]}
                onPress={() => setSelectedFilter(category)}
              >
                <Text
                  style={[
                    styles.filterText,
                    selectedFilter === category && styles.activeFilterText,
                  ]}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.resultsSection}>
          <Text style={styles.sectionTitle}>
            Clothing Items ({filteredItems.length})
          </Text>

          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.itemCard}
                onPress={() =>
                  onSelectCategory({
                    name: item.fabric,
                    emoji: item.emoji,
                  })
                }
              >
                <Text style={styles.itemEmoji}>{item.emoji}</Text>

                <View style={styles.itemInfo}>
                  <Text style={styles.itemName}>{item.name}</Text>

                  <Text style={styles.itemFabric}>
                    Fabric: {item.fabric}
                  </Text>

                  <Text style={styles.itemDescription}>
                    {item.description}
                  </Text>

                  <Text style={styles.viewDetails}>
                    View Care Details →
                  </Text>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyEmoji}>🔍</Text>

              <Text style={styles.emptyText}>
                No clothing items found.
              </Text>

              <Text style={styles.emptySubText}>
                Try another search or fabric category.
              </Text>
            </View>
          )}
        </View>

        <Text style={styles.footer}>
          WearWise - Smart care. Longer-lasting clothes.
        </Text>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F7F8F2',
  },

  header: {
    padding: 22,
    paddingBottom: 10,
  },

  backButton: {
    color: '#55745B',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 18,
  },

  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#304D35',
  },

  subtitle: {
    fontSize: 14,
    color: '#666666',
    marginTop: 8,
    lineHeight: 21,
  },

  searchSection: {
    paddingHorizontal: 22,
    marginTop: 12,
  },

  searchInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D5DFD2',
    borderRadius: 12,
    padding: 14,
    fontSize: 15,
    color: '#304D35',
  },

  filterSection: {
    paddingLeft: 22,
    marginTop: 25,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#304D35',
    marginBottom: 13,
  },

  filterButton: {
    backgroundColor: '#E5EBDD',
    paddingVertical: 9,
    paddingHorizontal: 17,
    borderRadius: 20,
    marginRight: 9,
  },

  activeFilter: {
    backgroundColor: '#55745B',
  },

  filterText: {
    color: '#405943',
    fontWeight: '600',
  },

  activeFilterText: {
    color: '#FFFFFF',
  },

  resultsSection: {
    paddingHorizontal: 22,
    marginTop: 25,
  },

  itemCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 15,
    marginBottom: 13,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E1E8DD',
  },

  itemEmoji: {
    fontSize: 38,
    marginRight: 15,
  },

  itemInfo: {
    flex: 1,
  },

  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#304D35',
  },

  itemFabric: {
    fontSize: 13,
    color: '#55745B',
    marginTop: 4,
    fontWeight: '600',
  },

  itemDescription: {
    fontSize: 13,
    color: '#777777',
    marginTop: 5,
    lineHeight: 19,
  },

  viewDetails: {
    fontSize: 13,
    color: '#55745B',
    fontWeight: 'bold',
    marginTop: 9,
  },

  emptyContainer: {
    alignItems: 'center',
    padding: 30,
  },

  emptyEmoji: {
    fontSize: 40,
  },

  emptyText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#304D35',
    marginTop: 10,
  },

  emptySubText: {
    fontSize: 13,
    color: '#777777',
    marginTop: 6,
    textAlign: 'center',
  },

  footer: {
    textAlign: 'center',
    color: '#888888',
    fontSize: 12,
    marginTop: 25,
    marginBottom: 25,
  },

});
