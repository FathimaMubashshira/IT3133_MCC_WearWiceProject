
import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

function ClothingCareDetails({ category, onBack }) {

  const careData = {
    Cotton: {
      emoji: '👕',
      washing: 'Wash with normal detergent. Use warm water when the garment label allows it.',
      drying: 'Air-dry when possible to reduce shrinkage.',
      ironing: 'Cotton generally tolerates a warm or hot iron. Check the garment label.',
      special: 'Separate dark and light colours to prevent colour transfer.',
    },

    Silk: {
      emoji: '🧣',
      washing: 'Hand-wash gently using cool water and a mild detergent when permitted by the label.',
      drying: 'Do not wring. Lay flat or hang carefully away from direct sunlight.',
      ironing: 'Use a low-temperature iron on the reverse side while slightly damp.',
      special: 'Avoid bleach, harsh chemicals and rough handling.',
    },

    Wool: {
      emoji: '🧶',
      washing: 'Hand-wash gently in cool water with a wool-friendly detergent, if permitted.',
      drying: 'Lay flat on a clean towel. Avoid hanging wet wool because it can stretch.',
      ironing: 'Use a low-temperature setting with a pressing cloth if needed.',
      special: 'Avoid excessive heat and rubbing because wool can shrink or felt.',
    },

    Denim: {
      emoji: '👖',
      washing: 'Wash inside out with cold water and a mild detergent.',
      drying: 'Air-dry to help maintain the shape and colour.',
      ironing: 'Use a medium-temperature iron if necessary.',
      special: 'Wash only when needed to help preserve colour and fabric quality.',
    },

    Linen: {
      emoji: '👔',
      washing: 'Wash gently using cool or lukewarm water and mild detergent.',
      drying: 'Air-dry naturally. Remove while slightly damp to reduce wrinkles.',
      ironing: 'Use a medium or high temperature when the garment label permits.',
      special: 'Avoid overloading the washing machine to reduce creasing.',
    },

    Polyester: {
      emoji: '🧥',
      washing: 'Wash with warm or cool water using normal detergent.',
      drying: 'Air-dry or tumble-dry on a low setting if permitted.',
      ironing: 'Use a low-temperature iron because polyester can melt under high heat.',
      special: 'Avoid excessive heat and use a suitable stain remover when necessary.',
    },
  };

  const selectedCare = careData[category?.name] || careData.Cotton;

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >

      {/* Back Button */}
      <TouchableOpacity onPress={onBack}>
        <Text style={styles.backButton}>← Back to Categories</Text>
      </TouchableOpacity>

      {/* Heading */}
      <View style={styles.heading}>
        <Text style={styles.emoji}>{selectedCare.emoji}</Text>

        <Text style={styles.title}>
          {category?.name || 'Cotton'} Care Guide
        </Text>

        <Text style={styles.subtitle}>
          Learn how to take care of your clothes.
        </Text>
      </View>

      {/* Washing */}
      <View style={styles.infoCard}>
        <Text style={styles.cardTitle}>🧼 Washing</Text>
        <Text style={styles.cardDescription}>
          {selectedCare.washing}
        </Text>
      </View>

      {/* Drying */}
      <View style={styles.infoCard}>
        <Text style={styles.cardTitle}>☀️ Drying</Text>
        <Text style={styles.cardDescription}>
          {selectedCare.drying}
        </Text>
      </View>

      {/* Ironing */}
      <View style={styles.infoCard}>
        <Text style={styles.cardTitle}>♨️ Ironing</Text>
        <Text style={styles.cardDescription}>
          {selectedCare.ironing}
        </Text>
      </View>

      {/* Special Care */}
      <View style={styles.infoCard}>
        <Text style={styles.cardTitle}>🌿 Special Care</Text>
        <Text style={styles.cardDescription}>
          {selectedCare.special}
        </Text>
      </View>

      {/* Reminder */}
      <View style={styles.reminderCard}>
        <Text style={styles.reminderTitle}>
          Important Reminder!
        </Text>

        <Text style={styles.reminderText}>
          Always check the care label on your garment
          before washing, drying or ironing.
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          WearWise - Smart care for your clothes 💚
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F7F8F2',
    paddingHorizontal: 20,
  },

  backButton: {
    color: '#315B43',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 25,
  },

  heading: {
    alignItems: 'center',
    marginBottom: 25,
  },

  emoji: {
    fontSize: 55,
    marginBottom: 10,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#263C30',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 14,
    color: '#788579',
    marginTop: 8,
  },

  infoCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E8EDE4',
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#315B43',
    marginBottom: 10,
  },

  cardDescription: {
    fontSize: 15,
    color: '#68776B',
    lineHeight: 23,
  },

  reminderCard: {
    backgroundColor: '#E5EEDC',
    padding: 20,
    borderRadius: 15,
    marginTop: 5,
  },

  reminderTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#315B43',
    marginBottom: 8,
  },

  reminderText: {
    fontSize: 14,
    color: '#526B57',
    lineHeight: 22,
  },

  footer: {
    alignItems: 'center',
    padding: 25,
  },

  footerText: {
    color: '#66816C',
    fontSize: 13,
  },

});

export default ClothingCareDetails;
