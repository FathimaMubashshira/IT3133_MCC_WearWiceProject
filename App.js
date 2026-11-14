
import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import CategoriesScreen from './screens/CategoriesScreen';
import ClothingCareDetails from './screens/ClothingCareDetails';
import LaundrySymbolsScreen from './screens/LaundrySymbolsScreen';
import SearchScreen from './screens/SearchScreen';

export default function App() {

  const [currentScreen, setCurrentScreen] = useState('Home');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [previousScreen, setPreviousScreen] = useState('Categories');

  const categories = [
    { id: 1, name: 'Cotton', emoji: '👕' },
    { id: 2, name: 'Silk', emoji: '🧣' },
    { id: 3, name: 'Wool', emoji: '🧶' },
    { id: 4, name: 'Denim', emoji: '👖' },
    { id: 5, name: 'Linen', emoji: '👔' },
    { id: 6, name: 'Polyester', emoji: '🧥' },
  ];

  // Display Laundry Symbols Guide Screen
  if (currentScreen === 'LaundrySymbols') {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          backgroundColor="#F7F8F2"
          barStyle="dark-content"
        />

        <LaundrySymbolsScreen
          onBack={() => setCurrentScreen('Home')}
        />
      </SafeAreaView>
    );
  }

  // Display Search & Browse Screen
  if (currentScreen === 'Search') {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          backgroundColor="#F7F8F2"
          barStyle="dark-content"
        />

        <SearchScreen
          onBack={() => setCurrentScreen('Home')}
          onSelectCategory={(item) => {
            setSelectedCategory(item);
            setPreviousScreen('Search');
            setCurrentScreen('Details');
          }}
        />
      </SafeAreaView>
    );
  }

  // Display Clothing Care Details Screen
  if (currentScreen === 'Details') {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          backgroundColor="#F7F8F2"
          barStyle="dark-content"
        />

        <ClothingCareDetails
          category={selectedCategory}
          onBack={() => setCurrentScreen(previousScreen)}
        />
      </SafeAreaView>
    );
  }

  // Display Categories Screen
  if (currentScreen === 'Categories') {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          backgroundColor="#F7F8F2"
          barStyle="dark-content"
        />

        <CategoriesScreen
          onBack={() => setCurrentScreen('Home')}
          onSelectCategory={(item) => {
            setSelectedCategory(item);
            setPreviousScreen('Categories');
            setCurrentScreen('Details');
          }}
        />
      </SafeAreaView>
    );
  }

  // Display Home Screen
  return (
    <SafeAreaView style={styles.container}>

      <StatusBar
        backgroundColor="#F7F8F2"
        barStyle="dark-content"
      />

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>WearWise</Text>
          <Text style={styles.headerIcon}>✦</Text>
        </View>

        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeText}>
            Welcome to WearWise!
          </Text>

          <Text style={styles.mainTitle}>
            Care for your clothes, the smart way.
          </Text>

          <Text style={styles.description}>
            Discover simple ways to wash, dry and care
            for your favourite clothes.
          </Text>
        </View>

        {/* Care Tip */}
        <View style={styles.tipCard}>
          <Text style={styles.tipLabel}>
            TODAY'S CARE TIP
          </Text>

          <Text style={styles.tipTitle}>
            Wash with care! 🌿
          </Text>

          <Text style={styles.tipDescription}>
            Always check the garment's care label
            before washing.
          </Text>
        </View>

        {/* Categories */}
        <View style={styles.categorySection}>

          <View style={styles.categoryHeading}>
            <View>
              <Text style={styles.sectionTitle}>
                Explore Clothing Types
              </Text>

              <Text style={styles.sectionDescription}>
                Choose a fabric to discover its care guide.
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => setCurrentScreen('Categories')}
            >
              <Text style={styles.viewAll}>View All ›</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.categoryGrid}>

            {categories.map((item) => (

              <TouchableOpacity
                key={item.id}
                style={styles.categoryCard}
                onPress={() => setCurrentScreen('Categories')}
              >

                <Text style={styles.categoryEmoji}>
                  {item.emoji}
                </Text>

                <Text style={styles.categoryName}>
                  {item.name}
                </Text>

              </TouchableOpacity>

            ))}

          </View>
        </View>

        {/* Laundry Symbols Guide Button */}
        <View style={styles.symbolsSection}>
          <TouchableOpacity
            style={styles.symbolsButton}
            onPress={() => setCurrentScreen('LaundrySymbols')}
          >
            <Text style={styles.symbolsButtonText}>
              🧺 Explore Laundry Symbols Guide
            </Text>
          </TouchableOpacity>
        </View>

        {/* Search & Browse Button */}
        <View style={styles.searchSection}>
          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => setCurrentScreen('Search')}
          >
            <Text style={styles.searchButtonText}>
              🔎 Search & Browse Clothing
            </Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Message */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Smart care. Longer-lasting clothes. 💚
          </Text>
        </View>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F7F8F2',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 22,
    paddingVertical: 18,
  },

  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#315B43',
  },

  headerIcon: {
    fontSize: 26,
    color: '#315B43',
  },

  welcomeSection: {
    paddingHorizontal: 22,
    marginTop: 15,
    marginBottom: 22,
  },

  welcomeText: {
    fontSize: 16,
    color: '#66816C',
    fontWeight: '600',
    marginBottom: 10,
  },

  mainTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#263C30',
    lineHeight: 38,
  },

  description: {
    fontSize: 15,
    color: '#68776B',
    lineHeight: 23,
    marginTop: 12,
  },

  tipCard: {
    backgroundColor: '#315B43',
    marginHorizontal: 22,
    padding: 22,
    borderRadius: 18,
  },

  tipLabel: {
    color: '#D5E6D4',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  tipTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 12,
  },

  tipDescription: {
    color: '#E4EEDC',
    fontSize: 14,
    lineHeight: 22,
    marginTop: 8,
  },

  categorySection: {
    paddingHorizontal: 22,
    marginTop: 30,
  },

  categoryHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#263C30',
  },

  sectionDescription: {
    fontSize: 14,
    color: '#788579',
    marginTop: 7,
    marginBottom: 18,
  },

  viewAll: {
    color: '#315B43',
    fontSize: 14,
    fontWeight: 'bold',
  },

  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  categoryCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    marginBottom: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8EDE4',
  },

  categoryEmoji: {
    fontSize: 38,
    marginBottom: 10,
  },

  categoryName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#315B43',
  },

  // Laundry Symbols Guide Button Styles
  symbolsSection: {
    paddingHorizontal: 22,
    marginTop: 10,
  },

  symbolsButton: {
    backgroundColor: '#55745B',
    padding: 16,
    borderRadius: 15,
    alignItems: 'center',
  },

  symbolsButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  // Search & Browse Button Styles
  searchSection: {
    paddingHorizontal: 22,
    marginTop: 12,
  },

  searchButton: {
    backgroundColor: '#E5EBDD',
    padding: 16,
    borderRadius: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#55745B',
  },

  searchButtonText: {
    color: '#405943',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  footer: {
    padding: 25,
    alignItems: 'center',
  },

  footerText: {
    color: '#66816C',
    fontSize: 13,
    fontWeight: '600',
  },

});
