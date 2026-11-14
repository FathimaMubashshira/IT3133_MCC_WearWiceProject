
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const laundrySymbols = [
  {
    id: '1',
    symbol: '🪣',
    title: 'Machine Wash',
    description: 'The garment can be washed in a washing machine.',
    tip: 'Follow the recommended water temperature on the care label.',
  },
  {
    id: '2',
    symbol: '🖐️',
    title: 'Hand Wash',
    description: 'Wash the garment gently by hand.',
    tip: 'Use mild detergent and avoid rubbing too hard.',
  },
  {
    id: '3',
    symbol: '🚫🪣',
    title: 'Do Not Wash',
    description: 'The garment should not be washed with water.',
    tip: 'Check the care label for professional cleaning instructions.',
  },
  {
    id: '4',
    symbol: '☀️',
    title: 'Air Dry',
    description: 'Allow the garment to dry naturally.',
    tip: 'Choose a suitable drying place according to the fabric.',
  },
  {
    id: '5',
    symbol: '🌀',
    title: 'Tumble Dry',
    description: 'The garment can be dried using a tumble dryer.',
    tip: 'Check the care label for the correct heat setting.',
  },
  {
    id: '6',
    symbol: '🚫🌀',
    title: 'Do Not Tumble Dry',
    description: 'Do not use a tumble dryer for this garment.',
    tip: 'Air dry the garment instead.',
  },
  {
    id: '7',
    symbol: '🔥',
    title: 'Iron',
    description: 'The garment can be ironed.',
    tip: 'Check the care label for the correct ironing temperature.',
  },
  {
    id: '8',
    symbol: '🚫🔥',
    title: 'Do Not Iron',
    description: 'Avoid ironing this garment.',
    tip: 'Use careful storage to reduce wrinkles.',
  },
  {
    id: '9',
    symbol: '🧴',
    title: 'Bleaching Allowed',
    description: 'Bleach may be used when permitted by the care label.',
    tip: 'Always check the garment instructions before bleaching.',
  },
  {
    id: '10',
    symbol: '🚫🧴',
    title: 'Do Not Bleach',
    description: 'Avoid using bleach on this garment.',
    tip: 'Use a suitable detergent instead.',
  },
];

function LaundrySymbolsScreen({ onBack }) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onBack}>
            <Text style={styles.backButton}>← Back to Home</Text>
          </TouchableOpacity>

          <Text style={styles.heading}>Laundry Symbols Guide</Text>

          <Text style={styles.subtitle}>
            Learn what common clothing care symbols mean.
          </Text>
        </View>

        {laundrySymbols.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.symbolContainer}>
              <Text style={styles.symbol}>{item.symbol}</Text>
            </View>

            <View style={styles.content}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>
                {item.description}
              </Text>
              <Text style={styles.tip}>Tip: {item.tip}</Text>
            </View>
          </View>
        ))}

        <View style={styles.reminder}>
          <Text style={styles.reminderTitle}>Important Reminder</Text>
          <Text style={styles.reminderText}>
            Laundry symbols can vary by garment. Always follow the
            care label attached to your clothing.
          </Text>
        </View>

        <Text style={styles.footer}>
          WearWise - Smart care. Longer-lasting clothes.
        </Text>
      </ScrollView>
    </View>
  );
}

export default LaundrySymbolsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F5EF',
    padding: 20,
  },
  header: {
    marginBottom: 20,
    marginTop: 15,
  },
  backButton: {
    color: '#55745B',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  heading: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#344E41',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: '#777777',
    lineHeight: 22,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 15,
    marginBottom: 13,
    alignItems: 'center',
    elevation: 2,
  },
  symbolContainer: {
    width: 65,
    height: 65,
    backgroundColor: '#E8EFE5',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  symbol: {
    fontSize: 29,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#344E41',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#555555',
    lineHeight: 20,
    marginBottom: 5,
  },
  tip: {
    fontSize: 13,
    color: '#55745B',
    lineHeight: 19,
  },
  reminder: {
    backgroundColor: '#E8EFE5',
    padding: 17,
    borderRadius: 14,
    marginTop: 10,
  },
  reminderTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#344E41',
    marginBottom: 7,
  },
  reminderText: {
    fontSize: 14,
    color: '#555555',
    lineHeight: 21,
  },
  footer: {
    textAlign: 'center',
    color: '#888888',
    fontSize: 12,
    marginTop: 25,
    marginBottom: 20,
  },
});
